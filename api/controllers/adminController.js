'use strict';

const jobs = {};

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

const IMAGE_STYLE_PROMPTS = {
  'illustrated': 'Warm editorial illustration with hand-drawn linework, rich layered colors, crosshatching details, and a cozy bookish feel. Rendered like a premium book jacket by a professional illustrator. NOT photorealistic, NOT 3D rendered, NOT watercolor, NOT flat vector, NOT pixel art.',
  'painterly': 'Painterly watercolor artwork with soft translucent washes, visible wet paper texture, wet-on-wet color bleeds, and unpainted white edges. Loose brushwork with pigment pooling in creases. NOT digital, NOT photorealistic, NOT sharp lines, NOT flat design, NOT illustration.',
  'cinematic': 'Cinematic photorealistic scene with dramatic volumetric lighting, shallow depth of field bokeh, anamorphic lens flare, and widescreen movie-poster composition. Hyper-detailed like a film still from a Hollywood blockbuster. NOT illustrated, NOT painted, NOT cartoon, NOT flat, NOT pixel art.',
  'flat': 'Flat vector graphic design with bold geometric shapes, perfectly clean edges, a limited palette of 4-5 bright colors, and zero gradients or textures. Modern infographic poster aesthetic. NOT photorealistic, NOT illustrated, NOT painterly, NOT 3D, NOT textured.',
  'pixel': 'Retro 16-bit pixel art with crisp visible individual pixels, a limited color palette, dithering for shading, and nostalgic video-game sprite charm. Every element built from square pixels. NOT smooth, NOT photorealistic, NOT illustrated, NOT high-resolution, NOT 3D.',
  'stock-photo': 'Professional studio photograph of real people with soft three-point lighting, clean neutral backdrop, natural skin tones and pores, and commercial stock-photo composition. Shot on a DSLR with a 50mm lens. NOT illustrated, NOT painted, NOT cartoon, NOT stylized, NOT AI-looking.',
  'anime': 'Japanese anime cel art with large expressive eyes, sharp cel-shaded coloring, dynamic speed lines, dramatic hair highlights, and vivid saturated backgrounds. Manga panel aesthetic. NOT Western cartoon, NOT photorealistic, NOT watercolor, NOT 3D rendered, NOT pixel art.',
  'storybook': "Whimsical children's storybook illustration with soft rounded characters, gentle pastel gouache tones, playful exaggerated proportions, and a warm bedtime-story glow. Hand-painted nursery book aesthetic. NOT photorealistic, NOT dark, NOT anime, NOT flat vector, NOT pixel art.",
  '3d-pixar': '3D rendered Pixar-style CGI with smooth subsurface-scattered skin, exaggerated cartoon proportions, bright saturated global illumination, and soft ambient occlusion shadows. Clean CG render like a Disney movie poster. NOT 2D, NOT illustrated, NOT photorealistic, NOT painted, NOT pixel art.',
  'oil-painting': 'Classical oil painting with thick impasto brushstrokes, visible canvas weave texture, rich chiaroscuro lighting, and warm Renaissance gallery color tones. Heavy paint layering like a museum masterwork. NOT digital, NOT flat, NOT photorealistic, NOT illustration, NOT watercolor.',
  'comic-book': 'Bold comic book art with thick black ink outlines, halftone Ben-Day dot shading, dynamic action-panel composition, and vivid flat colors. Graphic novel cover aesthetic. NOT illustration, NOT watercolor, NOT photorealistic, NOT 3D, NOT anime.',
  'minimalist': 'Minimalist abstract design with vast negative space, one or two accent colors maximum, simple geometric symbolic shapes, and stark clean composition. Swiss design poster aesthetic. NOT detailed, NOT photorealistic, NOT illustrated, NOT busy, NOT textured.',
};

function buildClaudePrompt(config, nodeMap) {
  const { title, protagonist, brief, instructions, shelf, subcategories, genre, questionsPerPlaythrough, wordCount, imageStyle } = config;
  const imageStyleDesc = IMAGE_STYLE_PROMPTS[imageStyle] || imageStyle;
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
- Target words per node: ~${wordsPerNode} words (be concise, prioritize completing all nodes over length)
- Total nodes to generate: ${nodeMap.length}

## Story brief
${brief}

${instructions ? '## Special instructions\n' + instructions : ''}

## Node structure to generate
${nodeMap.map((n, i) => {
  if (n.type === 'generic') {
      const chapterNum = (2 * n.round) - 1;
      return 'Node ' + (i+1) + ': GENERIC convergence chapter — must use "Chapter ' + chapterNum + ': <title>" (Round ' + n.round + ', everyone sees this)';
  }
  if (n.type === 'branch') {
      const chapterNum = 2 * n.round;
      return 'Node ' + (i+1) + ': BRANCH variant — must use "Chapter ' + chapterNum + ': <title>" (Round ' + n.round + ', ' + n.trait + ' trait, all 4 variants share Chapter ' + chapterNum + ' but can have different titles)';
  }
  if (n.type === 'conclusion') return 'Node ' + (i+1) + ': CONCLUSION — must use "Final Chapter: <title>" (4 separate endings, no chapter number)';
  return '';
}).join('\n')}

## CRITICAL RULES
1. Every generic node question must have EXACTLY 4 answers — one per DISC trait in order (value 1=D, 2=I, 3=S, 4=C).
2. Every branch node question must also have EXACTLY 4 answers (value 1, 2, 3, 4).
3. Story prose (the "question" field) should be rich narrative — place the reader inside the scene.
4. Each node has a pre-assigned chapter label specified in the node map above. You MUST use the exact "Chapter X:" prefix specified for each node — do NOT compute your own chapter numbers. The chapter sequence the player experiences must be consecutive (1, 2, 3, 4, 5, 6...) ending with "Final Chapter".
5. Timeline field is a brief scene-setting timestamp (e.g. "Monday Morning").
6. Branch nodes continue the specific trait path naturally — D=decisive/bold, I=energetic/social, S=steady/supportive, C=analytical/methodical.
7. Convergence nodes bring all paths back together naturally.
8. Conclusion node has NO question, NO answers — only four rich personalized story endings.
9. Write the assessment description field (2-3 sentences, marketing copy for the library shelf).
10. Keep narrative prose vivid, grounded, and emotionally resonant.

## Output format — CRITICAL
Respond with ONLY valid JSON. No markdown, no backticks, no explanation.

The JSON object MUST have these top-level keys in this EXACT order. The conclusionNode MUST come BEFORE questions to ensure it is generated first:

{
  "description": "<2-3 sentence marketing description>",
  "DstyleTitle": "<title for D-dominant ending>",
  "DstyleDescription": "<description for D-dominant personality>",
  "IstyleTitle": "<title for I-dominant ending>",
  "IstyleDescription": "<description for I-dominant personality>",
  "SstyleTitle": "<title for S-dominant ending>",
  "SstyleDescription": "<description for S-dominant personality>",
  "CstyleTitle": "<title for C-dominant ending>",
  "CstyleDescription": "<description for C-dominant personality>",
  "imagePromptSuggestion": "<DALL-E prompt using ${imageStyleDesc}>",
  "conclusionNode": {
    "chapter": "Final Chapter: <title>",
    "timeline": "<scene-setting timestamp>",
    "dominanceConclusion": "<rich D-dominant ending narrative>",
    "influenceConclusion": "<rich I-dominant ending narrative>",
    "steadinessConclusion": "<rich S-dominant ending narrative>",
    "conscientiousnessConclusion": "<rich C-dominant ending narrative>"
  },
  "questions": [
    {
      "chapter": "Chapter X: <title>",
      "timeline": "<scene-setting timestamp>",
      "question": "<rich narrative prose for this scene>",
      "answers": [
        { "value": 1, "text": "<D-flavored choice>", "nextQuestion": <integer> },
        { "value": 2, "text": "<I-flavored choice>", "nextQuestion": <integer> },
        { "value": 3, "text": "<S-flavored choice>", "nextQuestion": <integer> },
        { "value": 4, "text": "<C-flavored choice>", "nextQuestion": <integer> }
      ]
    }
  ]
}

CRITICAL FIELD REQUIREMENTS:
- The conclusionNode MUST be present at the top level (not nested inside questions[]).
- The conclusionNode MUST contain ALL FOUR conclusion fields: dominanceConclusion, influenceConclusion, steadinessConclusion, conscientiousnessConclusion.
- The conclusionNode MUST come BEFORE the questions array in your output.
- Each question's answers array MUST have EXACTLY 4 entries with values 1, 2, 3, 4 in that order.
- Field names are case-sensitive — match them exactly.`;
}

async function generateAndUploadImage(prompt, slug) {
  const dalleResponse = await axios.post(
    'https://api.openai.com/v1/images/generations',
    {
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      quality: 'hd',
      style: 'vivid',
    },
    {
      headers: {
        'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
        'Content-Type': 'application/json',
      },
      timeout: 120000,
    }
  );
  const imageUrl = dalleResponse.data.data[0].url;
  const imgBuffer = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const imageData = Buffer.from(imgBuffer.data);
  const b2 = new Backblaze({
    applicationKeyId: process.env.BACKBLAZE_KEY_ID,
    applicationKey: process.env.BACKBLAZE_APP_KEY,
  });
  await b2.authorize();
  const uploadUrlResponse = await b2.getUploadUrl({ bucketId: 'fc2a726ed9b77e6c9dd50b1d' });
  const fileName = 'assessments/' + slug + '-cover-' + Date.now() + '.jpg';
  await b2.uploadFile({
    uploadUrl: uploadUrlResponse.data.uploadUrl,
    uploadAuthToken: uploadUrlResponse.data.authorizationToken,
    fileName,
    data: imageData,
    contentType: 'image/jpeg',
  });
  const base = process.env.IMAGE_CDN_URL || 'https://f004.backblazeb2.com/file/library-assessments';
  return base + '/' + fileName;
}

async function generateSingleAssessment(config, jobId) {

  const questionsPerPlaythrough = parseInt(config.questionsPerPlaythrough) || 10;
  const wordCount = parseInt(config.wordCount) || 5200;
  const rawNodeMap = buildNodeMap(questionsPerPlaythrough);
  const nodeMap = calcNextQuestions(rawNodeMap);
  const claudePrompt = buildClaudePrompt(config, nodeMap);

  // Cost estimate: ~800 tokens per node output + ~2000 token prompt
  // claude-opus-4-6: $5/M input, $25/M output
  const estInputTokens = Math.round(claudePrompt.length / 4);
  const estOutputTokens = nodeMap.length * 800;
  const estCost = (estInputTokens / 1000000 * 5) + (estOutputTokens / 1000000 * 25);
  if (jobId) jobs[jobId].progress = 'Estimated cost: ~$' + estCost.toFixed(2) + ' (' + nodeMap.length + ' nodes, ~' + estOutputTokens + ' output tokens)';

  let rawText = '';
  const claudeResponse = await axios.post(
    'https://api.anthropic.com/v1/messages',
    {
      model: 'claude-opus-4-6',
      max_tokens: 32000,
      stream: true,
      messages: [{ role: 'user', content: claudePrompt }],
    },
    {
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      responseType: 'stream',
      timeout: 0,
    }
  );

  await new Promise((resolve, reject) => {
    let buffer = '';
    claudeResponse.data.on('data', (chunk) => {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data: ')) continue;
        const data = trimmed.slice(6).trim();
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
            rawText += parsed.delta.text;
            if (jobId) jobs[jobId].progress = 'Claude writing... (' + rawText.length + ' chars so far)';
          }
        } catch (e) {}
      }
    });
    claudeResponse.data.on('end', resolve);
    claudeResponse.data.on('error', reject);
  });
  let storyData;

  const parseClaudeResponse = (text) => {
    const cleaned = text
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
    try {
      return JSON.parse(cleaned);
    } catch(e) {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) return JSON.parse(match[0]);
      throw new Error('No valid JSON found in response');
    }
  };

  const validateStoryData = (data, nodeMap) => {
    if (!data.questions || !Array.isArray(data.questions)) throw new Error('Missing questions array');
    if (!data.conclusionNode) throw new Error('Missing conclusionNode');
    if (!data.conclusionNode.dominanceConclusion) throw new Error('Missing dominanceConclusion');
    if (!data.conclusionNode.influenceConclusion) throw new Error('Missing influenceConclusion');
    if (!data.conclusionNode.steadinessConclusion) throw new Error('Missing steadinessConclusion');
    if (!data.conclusionNode.conscientiousnessConclusion) throw new Error('Missing conscientiousnessConclusion');
    const expectedQuestions = nodeMap.filter(n => n.type !== 'conclusion').length;
    if (data.questions.length < expectedQuestions * 0.8) {
      throw new Error('Too few questions: got ' + data.questions.length + ', expected ~' + expectedQuestions);
    }
    for (let i = 0; i < data.questions.length; i++) {
      const q = data.questions[i];
      if (!q.chapter) throw new Error('Question ' + (i+1) + ' missing chapter field');
      if (!q.answers || q.answers.length !== 4) throw new Error('Question ' + (i+1) + ' must have exactly 4 answers');
    }
    return true;
  };

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      if (attempt > 1) {
        if (jobId) jobs[jobId].progress = 'Attempt ' + attempt + '/3 — retrying after: ' + (lastError ? lastError.message.slice(0, 80) : 'unknown error');
        rawText = '';
        const retryPrompt = claudePrompt + '\n\nCRITICAL: Your previous attempt failed validation. Output ONLY raw valid JSON starting with { and ending with }. No markdown, no backticks, no explanation whatsoever.';
        const retryResponse = await axios.post(
          'https://api.anthropic.com/v1/messages',
          {
            model: 'claude-opus-4-6',
            max_tokens: 32000,
            stream: true,
            messages: [{ role: 'user', content: retryPrompt }],
          },
          {
            headers: {
              'x-api-key': process.env.ANTHROPIC_API_KEY,
              'anthropic-version': '2023-06-01',
              'content-type': 'application/json',
            },
            responseType: 'stream',
            timeout: 0,
          }
        );
        await new Promise((resolve, reject) => {
          let buffer = '';
          retryResponse.data.on('data', (chunk) => {
            buffer += chunk.toString();
            const lines = buffer.split('\n');
            buffer = lines.pop();
            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith('data: ')) continue;
              const data = trimmed.slice(6).trim();
              if (data === '[DONE]') continue;
              try {
                const parsed = JSON.parse(data);
                if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
                  rawText += parsed.delta.text;
                  if (jobId) jobs[jobId].progress = 'Attempt ' + attempt + '/3 — writing... (' + rawText.length + ' chars)';
                }
              } catch(e) {}
            }
          });
          retryResponse.data.on('end', resolve);
          retryResponse.data.on('error', reject);
        });
      }

      storyData = parseClaudeResponse(rawText);
      validateStoryData(storyData, nodeMap);
      if (jobId) jobs[jobId].progress = 'Validation passed — processing ' + (storyData.questions ? storyData.questions.length : 0) + ' questions...';
      break;
    } catch(err) {
      lastError = err;
      const reason = err.message.includes('JSON') || err.message.includes('token') || err.message.includes('Unexpected')
        ? 'JSON parse error: ' + err.message.slice(0, 120)
        : 'Validation failed: ' + err.message;
      console.error('[adminController] Attempt ' + attempt + ' failed:', err.message);
      if (jobId) jobs[jobId].progress = 'Attempt ' + attempt + '/3 failed — ' + reason;
      if (attempt === 3) throw new Error('Generation failed after 3 attempts. Last error: ' + lastError.message);
    }
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
    const styleDirective = IMAGE_STYLE_PROMPTS[config.imageStyle] || '';
    const basePrompt = config.imagePromptOverride
      || (config.imageStyle === 'custom' && config.customImagePrompt)
      || storyData.imagePromptSuggestion;
    const imagePrompt = styleDirective
      ? styleDirective + ' — ' + basePrompt
      : basePrompt;
    heroImageUrl = await generateAndUploadImage(imagePrompt, config.slug);
  } catch (imgErr) {
    console.error('[adminController] Image generation failed:', imgErr.message);
    console.error('[adminController] Image error details:', imgErr.response?.data || imgErr.stack);
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

async function runGenerationJob(jobId, config) {
  jobs[jobId] = { status: 'running', progress: 'Claude is writing your story...', results: [], errors: [] };
  try {
    const count = Math.min(parseInt(config.batchCount) || 1, 20);
    for (let i = 0; i < count; i++) {
      let iterTitle = count === 1 ? config.title : config.title + ' ' + (i + 1);
      let iterSlug = slugify(iterTitle);
      const existing = await Assessment.findOne({ slug: iterSlug });
      if (existing) iterSlug = iterSlug + '-' + Date.now();
      jobs[jobId].progress = 'Generating assessment ' + (i + 1) + ' of ' + count + '...';
      try {
        const result = await generateSingleAssessment({ ...config, title: iterTitle, slug: iterSlug }, jobId);
        jobs[jobId].results.push(result);
      } catch (err) {
        jobs[jobId].errors.push({ index: i + 1, error: err.message });
      }
    }
    jobs[jobId].status = 'done';
  } catch (err) {
    jobs[jobId].status = 'error';
    jobs[jobId].error = err.message;
  }
}

async function generateAssessments(req, res) {
  const config = req.body;
  if (!config.title || !config.brief || !config.protagonist) {
    return res.status(400).json({ error: 'title, protagonist, and brief are required.' });
  }
  const jobId = Date.now() + '-' + Math.random().toString(36).slice(2);
  res.json({ jobId });
  runGenerationJob(jobId, config);
}

async function getJobStatus(req, res) {
  const job = jobs[req.params.jobId];
  if (!job) return res.status(404).json({ error: 'Job not found.' });
  res.json(job);
}

async function listAssessments(req, res) {

  try {
    const assessments = await Assessment.find({})
      .select('slug title creditsCost isActive category estimatedCompletion wordsLength createdAt questions heroImageUrl genre description')
      .sort({ createdAt: -1 });
    const list = assessments.map(a => ({
      _id: a._id, slug: a.slug, title: a.title, creditsCost: a.creditsCost,
      isActive: a.isActive, shelf: a.category?.shelf, subcategories: a.category?.subcategories,
      estimatedCompletion: a.estimatedCompletion, wordsLength: a.wordsLength,
      questionCount: a.questions?.length || 0, createdAt: a.createdAt, heroImageUrl: a.heroImageUrl, genre: a.genre || '', description: a.description || '',
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

async function updateAssessment(req, res) {
  try {
    const assessment = await Assessment.findById(req.params.id);
    if (!assessment) return res.status(404).json({ error: 'Not found.' });
    const allowed = ['creditsCost', 'estimatedCompletion', 'wordsLength', 'title', 'description', 'genre'];
    for (const key of allowed) {
      if (req.body[key] !== undefined) assessment[key] = req.body[key];
    }
    if (req.body.shelf !== undefined && assessment.category) {
      assessment.category.shelf = req.body.shelf;
      assessment.markModified('category');
    }
    await assessment.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function regenerateImage(req, res) {
  const adminSecret = process.env.ADMIN_SECRET;
  const token = req.headers['x-admin-secret'] || req.body?.adminSecret;
  if (!token || token !== adminSecret) return res.status(401).json({ error: 'Unauthorized.' });

  try {
    const assessment = await Assessment.findById(req.params.id);
    if (!assessment) return res.status(404).json({ error: 'Not found.' });

    const prompt = req.body.prompt ||
      'A beautiful illustrated book cover for a story called "' + assessment.title + '". ' +
      (assessment.description || '') + ' Editorial illustration style, warm colors, professional.';

    const heroImageUrl = await generateAndUploadImage(prompt, assessment.slug);
    assessment.heroImageUrl = heroImageUrl;
    await assessment.save();
    res.json({ heroImageUrl });
  } catch (err) {
    console.error('[regenerateImage] Error:', err.message, err.response?.data);
    res.status(500).json({ error: err.message });
  }
}

async function updateAssessmentImage(req, res) {
  try {
    const assessment = await Assessment.findById(req.params.id);
    if (!assessment) return res.status(404).json({ error: 'Not found.' });
    assessment.heroImageUrl = req.body.heroImageUrl;
    await assessment.save();
    res.json({ heroImageUrl: assessment.heroImageUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { generateAssessments, getJobStatus, listAssessments, toggleAssessment, deleteAssessment, updateAssessment, regenerateImage, updateAssessmentImage };
