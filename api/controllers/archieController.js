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

  const traitDescription = TRAIT_CONTEXT[trait] || TRAIT_CONTEXT.general
  const pageGuidance = PAGE_GUIDANCE[pageContext] || PAGE_GUIDANCE.default
  const firstName = userName ? userName.split(' ')[0] : null

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

  const userPrompt = isKidsMode
    ? `You are talking to a child named <strong>${childName}</strong>. ${childContext} Context: ${pageGuidance} Write one fun encouraging tip that references their actual character or stats. Keep it under 35 words. Make it feel exciting!`
    : `${firstName ? `The user's first name is ${firstName}. Use their name naturally near the start of your message to make it feel personal — make it stand out.` : ''} Their dominant personality trait is: ${traitDescription}. Context: ${pageGuidance} Write a single personalized tip or insight for them right now. Keep it under 45 words.`

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
  const traitDescription = TRAIT_CONTEXT[trait] || TRAIT_CONTEXT.general
  const firstName = userName ? userName.split(' ')[0] : null
  const systemPrompt = isKidsMode
    ? `You are Archie, a friendly and enthusiastic guide for The Assessment Library. You are talking directly to a child. Use simple, fun, encouraging language a 8-12 year old would love. Keep responses to 2-3 short sentences max. Be warm and exciting. No jargon. No asterisks or markdown. Plain text only. Never start with I. When you use the child's name wrap it in <strong> tags.`
    : `You are Archie, the AI guide for The Assessment Library. You are warm, knowledgeable, and slightly witty. Answer questions helpfully and concisely — 2-4 sentences max. No markdown, no asterisks, plain text only. Never start with I or As Archie. When addressing the user by name wrap it in <strong> tags.`
  const contextNote = isKidsMode
    ? `Child: ${childName || 'unknown'}. Character: ${childCharacterName || 'unknown'}. Disc type: ${childDiscType || 'unknown'}. Stats: ${childStats ? JSON.stringify(childStats) : 'none'}. Completed: ${childCompletedCount || 0}.`
    : `User: ${firstName || 'unknown'}. Dominant DISC trait: ${traitDescription}. Current page: ${pageContext || 'unknown'}.`
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