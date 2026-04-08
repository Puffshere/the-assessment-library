import StoryChapter from '../models/StoryChapter.js'
import ChildProfile from '../models/ChildProfile.js'
import path from 'path'
import fs from 'fs'

const THEME_SETTINGS = {
  scifi: 'a futuristic science fiction universe with spaceships, alien planets, and advanced technology',
  medieval: 'a fantasy medieval world with castles, magic, and mythical creatures',
  videogame: 'a colorful video game world with levels, power-ups, and epic quests'
}

const THEME_ART_STYLES = {
  scifi: 'futuristic sci-fi digital art style with glowing neon colors and sleek technology',
  medieval: 'fantasy storybook illustration style with warm colors, castles, and magical elements',
  videogame: 'vibrant video game concept art style with bold colors and dynamic action'
}

const DISC_TRAITS = {
  D: 'Dominance — bold, direct, driven, loves challenges and taking charge',
  I: 'Influence — enthusiastic, social, inspiring, brings people together with energy and heart',
  S: 'Steadiness — caring, loyal, calm, the dependable heart of any team',
  C: 'Conscientiousness — analytical, precise, creative problem-solver, notices what others miss'
}

export const getChapters = async (req, res) => {
  try {
    const { childProfileId } = req.params
    const chapters = await StoryChapter.find({ childProfileId }).sort({ chapterNumber: 1 })
    return res.json({ chapters })
  } catch (err) {
    console.error('getChapters error:', err)
    return res.status(500).json({ message: 'Failed to load story.' })
  }
}

export const generateChapter = async (req, res) => {
  try {
    const { childProfileId } = req.params
    const profile = await ChildProfile.findById(childProfileId)
    if (!profile) return res.status(404).json({ message: 'Profile not found.' })
    if (req.user._id.toString() !== profile.parentUserId.toString()) {
      return res.status(403).json({ message: 'Not authorized.' })
    }
    const existingChapters = await StoryChapter.find({ childProfileId }).sort({ chapterNumber: 1 })
    const tokensEarned = profile.completedAssessments ? profile.completedAssessments.length : 0
    const tokensUsed = existingChapters.length
    if (tokensUsed >= tokensEarned) {
      return res.status(403).json({ message: 'No story tokens available. Complete an assessment to earn a new chapter!' })
    }
    const chapterNumber = existingChapters.length + 1
    const themeSetting = THEME_SETTINGS[profile.theme] || THEME_SETTINGS.scifi
    const dominantTrait = profile.currentDiscType || 'I'
    const traitDescription = DISC_TRAITS[dominantTrait] || DISC_TRAITS.I
    const gender = profile.gender === 'boy' ? 'male' : 'female'
    const pronoun = gender === 'female' ? 'she' : 'he'
    const pronounPossessive = gender === 'female' ? 'her' : 'his'
    const clamp = v => Math.round(Math.min(100, Math.max(0, v)))
    const sessions = profile.completedAssessments || []
    let stats = null
    if (sessions.length) {
      const totals = { D: 0, I: 0, S: 0, C: 0 }
      sessions.forEach(s => {
        if (s.scoreBreakdown) {
          totals.D += Number(s.scoreBreakdown.D) || 0
          totals.I += Number(s.scoreBreakdown.I) || 0
          totals.S += Number(s.scoreBreakdown.S) || 0
          totals.C += Number(s.scoreBreakdown.C) || 0
        }
      })
      stats = {
        strength: clamp(totals.D / sessions.length),
        leadership: clamp(totals.D / sessions.length),
        speed: clamp(totals.I / sessions.length),
        creativity: clamp((totals.I / sessions.length + totals.C / sessions.length) / 2),
        heart: clamp(totals.S / sessions.length),
        wisdom: clamp((totals.S / sessions.length + totals.C / sessions.length) / 2)
      }
    }
    const previousChaptersSummary = existingChapters.length > 0
      ? existingChapters.map(c => `Chapter ${c.chapterNumber}: ${c.content.substring(0, 300)}...`).join('\n\n')
      : null
    let prompt
    if (chapterNumber === 1) {
      prompt = `Write an origin story chapter for a ${gender} character named ${profile.characterName || profile.childName} in ${themeSetting}. The character's child is named ${profile.childName}. Their dominant personality trait is ${traitDescription}. ${stats ? `Their stats are: Strength ${stats.strength}, Heart ${stats.heart}, Speed ${stats.speed}, Creativity ${stats.creativity}, Wisdom ${stats.wisdom}.` : ''} The story should revolve around their dominant trait shaping who they are and how they discover their unique abilities. Write 4-6 paragraphs of engaging, age-appropriate prose for children aged 8-12. Make it exciting, vivid, and end with a sense of adventure beginning. IMPORTANT: Write exactly 3 short paragraphs per page, 2-3 sentences each. Total story must be exactly 6 paragraphs. Keep each paragraph under 60 words.

IMPORTANT FORMAT: Your response MUST start with a chapter title on the first line in this exact format:
TITLE: <a short exciting chapter title, 5 words or less>

Then leave a blank line and write the story paragraphs. Example:
TITLE: The Stellar Emergency

<story paragraphs here>`
    } else {
      prompt = `Continue the story of ${profile.characterName || profile.childName}, a ${gender} character in ${themeSetting}. Previous chapters:\n\n${previousChaptersSummary}\n\nThe character's dominant trait RIGHT NOW is ${traitDescription} — this chapter's main event should revolve around this trait. ${stats ? `Current stats: Strength ${stats.strength}, Heart ${stats.heart}, Speed ${stats.speed}, Creativity ${stats.creativity}, Wisdom ${stats.wisdom}.` : ''} Write chapter ${chapterNumber} — 4-6 paragraphs that naturally continue the story, reference past events, and feature a new exciting event driven by the current dominant trait. Age-appropriate for 8-12 year olds. IMPORTANT: Write exactly 3 short paragraphs per page, 2-3 sentences each. Total story must be exactly 6 paragraphs. Keep each paragraph under 60 words.

IMPORTANT FORMAT: Your response MUST start with a chapter title on the first line in this exact format:
TITLE: <a short exciting chapter title, 5 words or less>

Then leave a blank line and write the story paragraphs.`
    }
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-5', max_tokens: 1200, messages: [{ role: 'user', content: prompt }] })
    })
    if (!response.ok) { const err = await response.text(); console.error('Story gen error:', err); return res.status(500).json({ message: 'Story generation failed.' }) }
    const data = await response.json()
    const rawText = data.content[0].text.trim()

    // Parse title from response
    let title = null
    let content = rawText
    const lines = rawText.split('\n')
    if (lines[0].toUpperCase().startsWith('TITLE:')) {
      title = lines[0].replace(/^TITLE:\s*/i, '').trim()
      // Skip blank lines after title
      let startIdx = 1
      while (startIdx < lines.length && lines[startIdx].trim() === '') startIdx++
      content = lines.slice(startIdx).join('\n').trim()
    }

    const chapter = new StoryChapter({ childProfileId, chapterNumber, title, content, dominantTraitAtTime: dominantTrait, statsAtTime: stats })
    await chapter.save()

    // Generate illustration asynchronously (don't block response)
    generateIllustration(chapter._id, title || `Chapter ${chapterNumber}`, content, profile.theme).catch(err => {
      console.error('Illustration generation error:', err)
    })

    return res.json({ chapter, tokensRemaining: tokensEarned - tokensUsed - 1 })
  } catch (err) {
    console.error('generateChapter error:', err)
    return res.status(500).json({ message: 'Story generation failed.' })
  }
}

async function generateIllustration(chapterId, title, content, theme) {
  console.log('Triggering image generation for chapter:', chapterId.toString(), 'theme:', theme)
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.warn('OPENAI_API_KEY not set — skipping illustration generation')
    return
  }
  const artStyle = THEME_ART_STYLES[theme] || THEME_ART_STYLES.scifi
  const summary = content.substring(0, 300)
  const imagePrompt = `A ${artStyle} illustration for a children's story chapter titled "${title}". Scene: ${summary}. Child-friendly, colorful, adventurous, no text or words in the image.`
  console.log('DALL-E prompt:', imagePrompt.substring(0, 120) + '...')

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ model: 'dall-e-3', prompt: imagePrompt, n: 1, size: '1024x1024', quality: 'standard' })
    })
    if (!response.ok) {
      const err = await response.text()
      console.error('DALL-E API error (status ' + response.status + '):', err)
      return
    }
    const data = await response.json()
    const imageUrl = data.data[0].url
    console.log('DALL-E returned image URL, downloading...')

    // Download image and save locally
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      console.error('Failed to download DALL-E image:', imageResponse.status)
      return
    }
    const buffer = Buffer.from(await imageResponse.arrayBuffer())
    const illustrationsDir = path.join(process.cwd(), 'static', 'images', 'illustrations')
    if (!fs.existsSync(illustrationsDir)) fs.mkdirSync(illustrationsDir, { recursive: true })
    const filename = `${chapterId}.png`
    fs.writeFileSync(path.join(illustrationsDir, filename), buffer)

    // Update chapter with local URL
    const localUrl = `/images/illustrations/${filename}`
    await StoryChapter.findByIdAndUpdate(chapterId, { illustrationUrl: localUrl })
    console.log('Illustration saved for chapter', chapterId.toString(), 'at', localUrl)
  } catch (err) {
    console.error('Illustration generation failed:', err)
  }
}

export const getChapterIllustration = async (req, res) => {
  try {
    const { chapterId } = req.params
    const chapter = await StoryChapter.findById(chapterId, 'illustrationUrl')
    if (!chapter) return res.status(404).json({ message: 'Chapter not found.' })
    return res.json({ illustrationUrl: chapter.illustrationUrl })
  } catch (err) {
    return res.status(500).json({ message: 'Failed to check illustration.' })
  }
}

export const triggerIllustration = async (req, res) => {
  try {
    const { chapterId } = req.params
    const chapter = await StoryChapter.findById(chapterId)
    if (!chapter) return res.status(404).json({ message: 'Chapter not found.' })

    // If already has an illustration, return it
    if (chapter.illustrationUrl) {
      return res.json({ illustrationUrl: chapter.illustrationUrl, status: 'exists' })
    }

    // Look up the child profile to get the theme
    const profile = await ChildProfile.findById(chapter.childProfileId)
    if (!profile) return res.status(404).json({ message: 'Profile not found.' })
    if (req.user._id.toString() !== profile.parentUserId.toString()) {
      return res.status(403).json({ message: 'Not authorized.' })
    }

    const chapterTitle = chapter.title || `Chapter ${chapter.chapterNumber}`

    // Trigger generation asynchronously
    generateIllustration(chapter._id, chapterTitle, chapter.content, profile.theme).catch(err => {
      console.error('Triggered illustration generation error:', err)
    })

    return res.json({ status: 'generating' })
  } catch (err) {
    console.error('triggerIllustration error:', err)
    return res.status(500).json({ message: 'Failed to trigger illustration.' })
  }
}

export const updateChapterTitle = async (req, res) => {
  try {
    const { chapterId } = req.params
    const { title } = req.body
    const chapter = await StoryChapter.findByIdAndUpdate(chapterId, { title }, { new: true })
    return res.json({ chapter })
  } catch (err) {
    return res.status(500).json({ message: 'Failed to update title.' })
  }
}

export default { getChapters, generateChapter, updateChapterTitle, getChapterIllustration, triggerIllustration }
