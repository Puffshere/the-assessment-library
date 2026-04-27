const fetch = require('node-fetch');
const AssessmentSession = require('../models/AssessmentSession');

async function getUserPersonalization(userId) {
  try {
    const sessions = await AssessmentSession
      .find({ user: userId, isThirdPerson: { $ne: true } })
      .select('status score assessment completedAt startedAt')
      .populate('assessment', 'title')
      .sort({ updatedAt: -1 })
      .lean();

    const completed = sessions.filter(s => s.status === 'completed');
    const inProgress = sessions.filter(s => s.status === 'in_progress');

    // Aggregate dominant trait across completed sessions
    const traitTotals = { D: 0, I: 0, S: 0, C: 0 };
    let scoredCount = 0;
    completed.forEach(s => {
      if (s.score && s.score.breakdown) {
        const breakdown = s.score.breakdown;
        if (typeof breakdown.D === 'number') {
          traitTotals.D += breakdown.D;
          traitTotals.I += breakdown.I || 0;
          traitTotals.S += breakdown.S || 0;
          traitTotals.C += breakdown.C || 0;
          scoredCount++;
        }
      }
    });

    let dominantTrait = null;
    if (scoredCount > 0) {
      let topScore = -1;
      Object.entries(traitTotals).forEach(([trait, score]) => {
        if (score > topScore) {
          topScore = score;
          dominantTrait = trait;
        }
      });
    }

    const recentTitles = sessions.slice(0, 3)
      .map(s => s.assessment && s.assessment.title)
      .filter(Boolean);

    return {
      startedCount: sessions.length,
      completedCount: completed.length,
      inProgressCount: inProgress.length,
      dominantTrait,
      recentTitles,
    };
  } catch (err) {
    console.error('Archie getUserPersonalization error:', err);
    return {
      startedCount: 0,
      completedCount: 0,
      inProgressCount: 0,
      dominantTrait: null,
      recentTitles: [],
    };
  }
}

const TRAIT_CONTEXT = {
  D: 'Dominance — direct, results-oriented, decisive, competitive, and driven by challenges',
  I: 'Influence — enthusiastic, optimistic, collaborative, and motivated by social recognition',
  S: 'Steadiness — patient, sincere, empathetic, team-oriented, and motivated by stability',
  C: 'Conscientiousness — analytical, detail-oriented, systematic, and motivated by quality and accuracy',
  general: 'a mix of personality traits — they may not have completed a DISC assessment yet',
}

const PAGE_GUIDANCE = {
  dashboard: 'The user is on their dashboard. Focus on what they could explore next — suggest a relevant assessment, encourage reviewing past results, or highlight something insightful about their trait.',
  library: 'The user is browsing the assessment library. Help them choose an assessment that fits their dominant trait. Be specific about which type would benefit them most.',
  assessment: 'The user is currently taking an assessment. Offer a brief encouraging word, remind them to answer honestly, and note that their instincts are valuable.',
  results: 'The user is reviewing their results. Help them understand what their score means in practical terms — career, relationships, or personal growth.',
  default: 'The user is exploring the site. Give a warm, helpful orientation tip.',
}

export const getTip = async (req, res) => {
  const { trait, pageContext, userName, isKidsMode, childName, childCharacterName, childDiscType, childStats, childCompletedCount } = req.body

  let personalization = null;
  if (!isKidsMode && req.user && req.user._id) {
    personalization = await getUserPersonalization(req.user._id);
  }

  const pageGuidance = PAGE_GUIDANCE[pageContext] || PAGE_GUIDANCE.default

  const systemPrompt = isKidsMode
    ? `You are Archie, a friendly and enthusiastic guide for The Assessment Library. You are talking directly to a child. Use simple, fun, encouraging language a 8-12 year old would love. Keep responses to 2 short sentences max. Be warm and exciting. No jargon. Plain text only. Never start with I. When you use the child's name in your response, always wrap it in <strong> tags like this: <strong>Allie</strong>. Never use asterisks, markdown, or any special formatting characters in your response. Plain text only.`
    : `You are Archie, the AI guide for The Assessment Library — a personality and professional assessment platform. You are warm, knowledgeable, and slightly witty — like a trusted advisor who happens to know a lot about personality science. You speak in plain, friendly language. Never use jargon. Keep responses to 2-3 sentences maximum. Never start with 'I' or 'As Archie'. Do not use markdown, bullet points, or formatting of any kind — plain text only. Never use asterisks, markdown, or any special formatting characters in your response. Plain text only.`

  const roundedStats = childStats ? {
    heart: Math.round(childStats.heart || 0),
    speed: Math.round(childStats.speed || 0),
    wisdom: Math.round(childStats.wisdom || 0),
    creativity: Math.round(childStats.creativity || 0),
    strength: Math.round(childStats.strength || 0),
    leadership: Math.round(childStats.leadership || 0),
  } : null

  const childContext = childCharacterName
    ? `Their character is named ${childCharacterName} and their dominant trait is ${childDiscType || 'unknown'}. ${roundedStats ? `Their top stats are: Heart ${roundedStats.heart}, Speed ${roundedStats.speed}, Wisdom ${roundedStats.wisdom}, Creativity ${roundedStats.creativity}, Strength ${roundedStats.strength}, Leadership ${roundedStats.leadership}.` : ''} They have completed ${childCompletedCount || 0} assessments.`
    : 'They are just getting started.'

  let adultUserPrompt;
  if (personalization && personalization.completedCount > 0 && personalization.dominantTrait) {
    const traitDesc = TRAIT_CONTEXT[personalization.dominantTrait] || TRAIT_CONTEXT.general;
    const recencyHint = personalization.recentTitles.length > 0
      ? ` Their most recent assessment was "${personalization.recentTitles[0]}".`
      : '';
    adultUserPrompt = `The user's first name is ${userName || 'there'}. They have completed ${personalization.completedCount} assessment${personalization.completedCount === 1 ? '' : 's'} and have ${personalization.inProgressCount} in progress.${recencyHint} Their dominant DISC trait based on their assessment history is: ${traitDesc}. Context: ${pageGuidance}. Give them a relevant, encouraging tip that reflects their actual progress and trait — do not suggest they take their first assessment.`;
  } else if (personalization && personalization.startedCount > 0) {
    adultUserPrompt = `The user's first name is ${userName || 'there'}. They have started ${personalization.startedCount} assessment${personalization.startedCount === 1 ? '' : 's'} but haven't completed any yet. Context: ${pageGuidance}. Encourage them to finish what they've started.`;
  } else {
    // Unauthenticated fallback (no req.user / no history) — frontend-supplied trait usage here is intentional.
    const traitDescription = TRAIT_CONTEXT[trait] || TRAIT_CONTEXT.general;
    adultUserPrompt = `The user's first name is ${userName || 'there'}. Their dominant personality trait is: ${traitDescription}. Context: ${pageGuidance}.`;
  }

  const userPrompt = isKidsMode
    ? `You are talking to a child named <strong>${childName}</strong>. ${childContext} Context: ${pageGuidance} Write one fun encouraging tip that references their actual character or stats. Keep it under 35 words. Make it feel exciting!`
    : adultUserPrompt

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 120,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic API error:', err)
      return res.status(500).json({ message: 'Archie is unavailable right now.' })
    }

    const data = await response.json()
    const tip = data.content[0].text.trim()
    return res.json({ tip })

  } catch (err) {
    console.error('Archie fetch error:', err)
    return res.status(500).json({ message: 'Archie is unavailable right now.' })
  }
}

export const chat = async (req, res) => {
  const { message, history, trait, pageContext, userName, isKidsMode, childName, childCharacterName, childDiscType, childStats, childCompletedCount } = req.body

  let personalization = null;
  if (!isKidsMode && req.user && req.user._id) {
    personalization = await getUserPersonalization(req.user._id);
  }

  const systemPrompt = isKidsMode
    ? `You are Archie, a friendly and enthusiastic guide for The Assessment Library. You are talking directly to a child. Use simple, fun, encouraging language a 8-12 year old would love. Keep responses to 2-3 short sentences max. Be warm and exciting. No jargon. No asterisks or markdown. Plain text only. Never start with I. When you use the child's name wrap it in <strong> tags.`
    : `You are Archie, the AI guide for The Assessment Library. You are warm, knowledgeable, and slightly witty. Answer questions helpfully and concisely — 2-4 sentences max. No markdown, no asterisks, plain text only. Never start with I or As Archie. When addressing the user by name wrap it in <strong> tags.`

  let adultContextNote;
  if (personalization && personalization.completedCount > 0 && personalization.dominantTrait) {
    const traitDesc = TRAIT_CONTEXT[personalization.dominantTrait] || TRAIT_CONTEXT.general;
    const recencyHint = personalization.recentTitles.length > 0
      ? ` Most recent: "${personalization.recentTitles[0]}".`
      : '';
    adultContextNote = `User: ${userName || 'unknown'}. Dominant DISC trait (from history): ${traitDesc}. Completed ${personalization.completedCount} assessment${personalization.completedCount === 1 ? '' : 's'}, ${personalization.inProgressCount} in progress.${recencyHint} Current page: ${pageContext || 'unknown'}.`;
  } else if (personalization && personalization.startedCount > 0) {
    adultContextNote = `User: ${userName || 'unknown'}. Has started ${personalization.startedCount} assessment${personalization.startedCount === 1 ? '' : 's'} but completed none yet. Current page: ${pageContext || 'unknown'}.`;
  } else if (req.user) {
    adultContextNote = `User: ${userName || 'unknown'}. No assessment history yet. Current page: ${pageContext || 'unknown'}.`;
  } else {
    // Unauthenticated fallback — frontend-supplied trait usage here is intentional.
    const traitDescription = TRAIT_CONTEXT[trait] || TRAIT_CONTEXT.general;
    adultContextNote = `User: ${userName || 'unknown'}. Dominant DISC trait: ${traitDescription}. Current page: ${pageContext || 'unknown'}.`;
  }

  const contextNote = isKidsMode
    ? `Child: ${childName || 'unknown'}. Character: ${childCharacterName || 'unknown'}. Disc type: ${childDiscType || 'unknown'}. Stats: ${childStats ? JSON.stringify(childStats) : 'none'}. Completed: ${childCompletedCount || 0}.`
    : adultContextNote
  const messages = [
    { role: 'user', content: `Context: ${contextNote}` },
    { role: 'assistant', content: 'Got it, I have full context about this user.' },
    ...(history || []).slice(-8).map(m => ({ role: m.role, content: m.content.replace(/<[^>]*>/g, '') })),
    { role: 'user', content: message }
  ]
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 200, system: systemPrompt, messages })
    })
    if (!response.ok) { const err = await response.text(); console.error('Archie chat error:', err); return res.status(500).json({ message: 'Archie is unavailable right now.' }) }
    const data = await response.json()
    return res.json({ reply: data.content[0].text.trim() })
  } catch (err) {
    console.error('Archie chat fetch error:', err)
    return res.status(500).json({ message: 'Archie is unavailable right now.' })
  }
}

export default { getTip, chat }