'use strict';

function getOpenAI() {
  const { OpenAI } = require('openai');
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

const Backblaze = require('backblaze-b2');
const axios = require('axios');

let Assessment;
try {
  const mod = require('../models/Assessment');
  Assessment = mod.default || mod;
} catch (e) {
  Assessment = require('../models/Assessment');
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

function calcEstimatedMinutes(wordCount) {
  return Math.max(1, Math.round(wordCount / 200));
}

function buildNodeMap(questionsPerPlaythrough) {
  const nodes = [];
  const rounds = Math.ceil(questionsPerPlaythrough / 2);
  for (let r = 0; r < rounds; r++) {
    nodes.push({ type: 'generic', round: r + 1, index: nodes.length });
    if (r < Math.floor(questionsPerPlaythrough / 2)) {
      for (const trait of ['D', 'I', 'S', 'C']) {
        nodes.push({ type: 'branch', round: r + 1, trait, index: nodes.length });
      }
    }
  }
  nodes.push({ type: 'conclusion', index: nodes.length });
  return nodes;
}

function calcNextQuestions(nodeMap) {
  return nodeMap.map((node, i) => {
    if (node.type === 'conclusion') return { ...node, nextGeneric: null };
    if (node.type === 'generic') {
      const branches = nodeMap.slice(i + 1).filter(n => n.type === 'branch' && n.round === node.round);
      if (branches.length === 4) {
        return {
          ...node,
          answerNextQuestions: {
            D: branches.find(b => b.trait === 'D').index + 1,
            I: branches.find(b => b.trait === 'I').index + 1,
            S: branches.find(b => b.trait === 'S').index + 1,
            C: branches.find(b => b.trait === 'C').index + 1,
          }
        };
      } else {
        const conclusionIndex = nodeMap.find(n => n.type === 'conclusion').index + 1;
        return {
          ...node,
          answerNextQuestions: { D: conclusionIndex, I: conclusionIndex, S: conclusionIndex, C: conclusionIndex }
        };
      }
    }
    if (node.type === 'branch') {
      const nextGeneric = nodeMap.find(n => n.type === 'generic' && n.round === node.round + 1);
      const conclusionIndex = nodeMap.find(n => n.type === 'conclusion').index + 1;
      const nextIdx = nextGeneric ? nextGeneric.index + 1 : conclusionIndex;
      return { ...node, nextGenericIndex: nextIdx };
    }
    return node;
  });
}

function buildClaudePrompt(config, nodeMap) {
  const { title, protagonist, brief, instructions, shelf, subcategories, genre, questionsPerPlaythrough, wordCount, imageStyle } = config;
  const wordsPerNode = Math.round(wordCount / (questionsPerPlaythrough + 1));
  return `You are a master storyteller and DISC assessment architect. Your task is to generate a complete, production-ready DISC story assessment for The Assessment Library platform.

## Platform context
The Assessment Library presents users with interactive stories. As the user makes choices, the story branches based on their dominant DISC trait (D=Dominance, I=Influence, S=Steadiness, C=Conscientiousness). Each choice is mapped to a DISC value: 1=D, 2=I, 3=S, 4=C. After the final question, the user receives a personalized conclusion based on their dominant trait across all answers.

## Assessment specs
- Title: ${title}
- Shelf: ${shelf}
- Genre/section: ${genre}
- Subcategories: ${subcategories.join(', ')}
- Protagonist & setting: ${protagonist}
- Questions per playthrough: ${questionsPerPlaythrough}
- Target words per node: ~${wordsPerNode} words
- Total nodes to generate: ${nodeMap.length}

## Story brief
${brief}

${instructions ? '## Special instructions\n' + instructions : ''}

## Node structure to generate
${nodeMap.map((n, i) => {
  if (n.type === 'generic') return 'Node ' + (i+1) + ': GENERIC convergence chapter (Round ' + n.round + ') — everyone sees this';
  if (n.type === 'branch') return 'Node ' + (i+1) + ': BRANCH variant (Round ' + n.round + ', ' + n.trait + ' trait)';
  if (n.type === 'conclusion') return 'Node ' + (i+1) + ': CONCLUSION — 4 separate endings based on dominant DISC trait';
  return '';
}).join('\n')}

## CRITICAL RULES
1. Every generic node question must have EXACTLY 4 answers — one per DISC trait in order (value 1=D, 2=I, 3=S, 4=C).
2. Every branch node question must also have EXACTLY 4 answers (value 1, 2, 3, 4).
3. Story prose (the "question" field) should be rich narrative — place the reader inside the scene.
4. Chapter names should feel like book chapter titles.
5. Timeline field is a brief scene-setting timestamp (e.g. "Monday Morning").
6. Branch nodes continue the specific trait path naturally — D=decisive/bold, I=energetic/social, S=steady/supportive, C=analytical/methodical.
7. Convergence nodes bring all paths back together naturally.
8. Conclusion node has NO question, NO answers — only four rich personalized story endings.
9. Write the assessment description field (2-3 sentences, marketing copy for the library shelf).
10. Keep narrative prose vivid, grounded, and emotionally resonant.

## Output format
Respond ONLY with valid JSON. No markdown fences, no preamble, no explanation.

{
  "description": "...",
  "DstyleTitle": "The Leader",
  "IstyleTitle": "The Motivator",
  "SstyleTitle": "The Supporter",
  "CstyleTitle": "The Analyzer",
  "DstyleDescription": "...",
  "IstyleDescription": "...",
  "SstyleDescription": "...",
  "CstyleDescription": "...",
  "imagePromptSuggestion": "A detailed DALL-E 3 prompt for the cover in ${imageStyle} style",
  "questions": [
    {
      "chapter": "Chapter 1: ...",
      "timeline": "...",
      "question": "<p>Rich narrative prose...</p>",
      "answers": [
        { "text": "...", "value": 1, "nextQuestion": 0 },
        { "text": "...", "value": 2, "nextQuestion": 0 },
        { "text": "...", "value": 3, "nextQuestion": 0 },
        { "text": "...", "value": 4, "nextQuestion": 0 }
      ]
    }
  ],
  "conclusionNode": {
    "chapter": "Conclusion: ...",
    "timeline": "...",
    "dominanceConclusion": "<p>...</p>",
    "influenceConclusion": "<p>...</p>",
    "steadinessConclusion": "<p>...</p>",
    "conscientiousnessConclusion": "<p>...</p>",
    "answers": []
  }
}

Set nextQuestion to 0 for all answers — the controller will inject correct pointers after generation.`;
}

async function generateAndUploadImage(prompt, slug) {
  const openai = getOpenAI();
  const imgResponse = await openai.images.generate({
    model: 'dall-e-3',
    prompt: prompt,
    n: 1,
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
  });
  const imageUrl = imgResponse.data[0].url;
  const imgBuffer = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const imageData = Buffer.from(imgBuffer.data);
  const b2 = new Backblaze({
    applicationKeyId: process.env.BACKBLAZE_KEY_ID,
    applicationKey: process.env.BACKBLAZE_APP_KEY,
  });
  await b2.authorize();
  const uploadUrlResponse = await b2.getUploadUrl({ bucketId: '820e21a42cafaa2279bd0d14' });
  const fileName = 'assessments/' + slug + '-cover-' + Date.now() + '.jpg';
  await b2.uploadFile({
    uploadUrl: uploadUrlResponse.data.uploadUrl,
    uploadAuthToken: uploadUrlResponse.data.authorizationToken,
    fileName,
    data: imageData,
    contentType: 'image/jpeg',
  });
  const downloadUrl = uploadUrlResponse.data.uploadUrl.split('/b2api')[0];
  return 'https://f002.backblazeb2.com/file/theassessmentlibrary/' + fileName;
}

async function generateSingleAssessment(config) {

  const questionsPerPlaythrough = parseInt(config.questionsPerPlaythrough) || 10;
  const wordCount = parseInt(config.wordCount) || 5200;
  const rawNodeMap = buildNodeMap(questionsPerPlaythrough);
  const nodeMap = calcNextQuestions(rawNodeMap);
  const claudePrompt = buildClaudePrompt(config, nodeMap);
  const claudeResponse = await axios.post(
    'https://api.anthropic.com/v1/messages',
    {
      model: 'claude-opus-4-6',
      max_tokens: 16000,
      messages: [{ role: 'user', content: claudePrompt }],
    },
    {
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      timeout: 600000,
    }
  );
  const rawText = claudeResponse.data.content[0].text.trim();
  let storyData;
  try {
    storyData = JSON.parse(rawText);
  } catch (e) {
    const cleaned = rawText.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    storyData = JSON.parse(cleaned);
  }
  const processedQuestions = storyData.questions.map((q, i) => {
    const node = nodeMap[i];
    if (!node) return q;
    if (node.type === 'generic') {
      const nq = node.answerNextQuestions;
      return {
        ...q,
        answers: [
          { ...q.answers[0], nextQuestion: nq.D },
          { ...q.answers[1], nextQuestion: nq.I },
          { ...q.answers[2], nextQuestion: nq.S },
          { ...q.answers[3], nextQuestion: nq.C },
        ]
      };
    }
    if (node.type === 'branch') {
      return { ...q, answers: q.answers.map(a => ({ ...a, nextQuestion: node.nextGenericIndex })) };
    }
    return q;
  });
  const conclusionNode = {
    chapter: storyData.conclusionNode.chapter,
    timeline: storyData.conclusionNode.timeline || 'The End',
    question: '',
    answers: [],
    dominanceConclusion: storyData.conclusionNode.dominanceConclusion,
    influenceConclusion: storyData.conclusionNode.influenceConclusion,
    steadinessConclusion: storyData.conclusionNode.steadinessConclusion,
    conscientiousnessConclusion: storyData.conclusionNode.conscientiousnessConclusion,
  };
  const allQuestions = [...processedQuestions, conclusionNode];
  let heroImageUrl = '/images/default-cover.jpg';
  try {
    const imagePrompt = config.imagePromptOverride || storyData.imagePromptSuggestion;
    heroImageUrl = await generateAndUploadImage(imagePrompt, config.slug);
  } catch (imgErr) {
    console.error('[adminController] Image generation failed:', imgErr.message);
  }
  const assessmentDoc = {
    slug: config.slug,
    title: config.title,
    description: storyData.description,
    creditsCost: parseInt(config.creditsCost) || 1,
    isActive: true,
    heroImageUrl,
    estimatedCompletion: calcEstimatedMinutes(wordCount),
    wordsLength: wordCount,
    category: { shelf: config.shelf, subcategories: config.subcategories || [] },
    DstyleTitle: storyData.DstyleTitle || 'The Leader',
    IstyleTitle: storyData.IstyleTitle || 'The Motivator',
    SstyleTitle: storyData.SstyleTitle || 'The Supporter',
    CstyleTitle: storyData.CstyleTitle || 'The Analyzer',
    DstyleDescription: storyData.DstyleDescription || '',
    IstyleDescription: storyData.IstyleDescription || '',
    SstyleDescription: storyData.SstyleDescription || '',
    CstyleDescription: storyData.CstyleDescription || '',
    questions: allQuestions,
    scoringConfig: {
      valueToTrait: { '1': 'D', '2': 'I', '3': 'S', '4': 'C' },
      traitToValue: { D: 1, I: 2, S: 3, C: 4 },
    },
  };
  const assessment = new Assessment(assessmentDoc);
  await assessment.save();
  return { _id: assessment._id, slug: assessment.slug, title: assessment.title, heroImageUrl };
}

async function generateAssessments(req, res) {
  const {
    title, protagonist, brief, instructions,
    shelf, genre, subcategories, questionsPerPlaythrough,
    wordCount, creditsCost, imageStyle, imagePromptOverride,
    batchCount = 1, batchVariation = 'protagonist'
  } = req.body;
  if (!title || !brief || !protagonist) {
    return res.status(400).json({ error: 'title, protagonist, and brief are required.' });
  }
  const results = [];
  const errors = [];
  const count = Math.min(parseInt(batchCount) || 1, 20);
  for (let i = 0; i < count; i++) {
    let iterTitle = count === 1 ? title : title + ' ' + (i + 1);
    let iterSlug = slugify(iterTitle);
    const existing = await Assessment.findOne({ slug: iterSlug });
    if (existing) iterSlug = iterSlug + '-' + Date.now();
    try {
      const result = await generateSingleAssessment({
        title: iterTitle, slug: iterSlug, protagonist, brief, instructions,
        shelf, genre, subcategories: Array.isArray(subcategories) ? subcategories : [],
        questionsPerPlaythrough, wordCount, creditsCost,
        imageStyle: imageStyle || 'illustrated', imagePromptOverride,
        batchIndex: i, batchVariation, batchTotal: count,
      });
      results.push(result);
    } catch (err) {
      console.error('[adminController] Error on assessment ' + (i+1) + ':', err);
      errors.push({ index: i + 1, error: err.message });
    }
  }
  res.json({ success: true, generated: results.length, failed: errors.length, results, errors });
}

async function listAssessments(req, res) {

  try {
    const assessments = await Assessment.find({})
      .select('slug title creditsCost isActive category estimatedCompletion wordsLength createdAt questions')
      .sort({ createdAt: -1 });
    const list = assessments.map(a => ({
      _id: a._id, slug: a.slug, title: a.title, creditsCost: a.creditsCost,
      isActive: a.isActive, shelf: a.category?.shelf, subcategories: a.category?.subcategories,
      estimatedCompletion: a.estimatedCompletion, wordsLength: a.wordsLength,
      questionCount: a.questions?.length || 0, createdAt: a.createdAt,
    }));
    res.json({ assessments: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function toggleAssessment(req, res) {

  try {
    const assessment = await Assessment.findById(req.params.id);
    if (!assessment) return res.status(404).json({ error: 'Not found.' });
    assessment.isActive = !assessment.isActive;
    await assessment.save();
    res.json({ _id: assessment._id, isActive: assessment.isActive });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteAssessment(req, res) {

  try {
    await Assessment.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { generateAssessments, listAssessments, toggleAssessment, deleteAssessment };
