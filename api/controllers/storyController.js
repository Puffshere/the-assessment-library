import StoryChapter from '../models/StoryChapter.js'
import ChildProfile from '../models/ChildProfile.js'

const THEME_IMAGE_PREFIX = {
  medieval: 'medieval',
  scifi: 'sci-fi',
  videogame: 'video-game'
}

function getCharacterImagePath(theme, discType, gender) {
  const prefix = THEME_IMAGE_PREFIX[theme] || theme
  const disc = (discType || '').toLowerCase()
  const g = (gender || '').toLowerCase()
  return `/images/characters/${prefix}-${disc}-${g}.webp`
}

const THEME_SETTINGS = {
  scifi: 'a futuristic science fiction universe with spaceships, alien planets, and advanced technology',
  medieval: 'a fantasy medieval world with castles, magic, and mythical creatures',
  videogame: 'a colorful video game world with levels, power-ups, and epic quests'
}

const DISC_VOICE = {
  D: {
    trait: 'Dominance',
    description: 'bold, direct, driven, loves challenges and taking charge',
    voice: 'The character speaks and thinks with confidence and directness. They charge into situations headfirst, make snap decisions, take command of groups, and feel restless when others hesitate. They see obstacles as things to conquer.',
    decisions: 'When faced with a choice, they pick the bold option. They volunteer first, challenge authority when it seems wrong, and would rather fail trying than play it safe.'
  },
  I: {
    trait: 'Influence',
    description: 'enthusiastic, social, inspiring, brings people together with energy and heart',
    voice: 'The character is warm, expressive, and magnetic. They talk to everyone, lift spirits when things look bleak, and solve problems by rallying others. They feel things deeply and wear their heart on their sleeve.',
    decisions: 'When faced with a choice, they think about people first. They try to include everyone, use humor and charm to defuse tension, and believe any problem can be solved if the right people work together.'
  },
  S: {
    trait: 'Steadiness',
    description: 'caring, loyal, calm, the dependable heart of any team',
    voice: 'The character is thoughtful, patient, and deeply loyal. They notice when someone is struggling before anyone else does. They keep their promises no matter what and find strength in protecting others.',
    decisions: 'When faced with a choice, they consider how it affects the people they care about. They avoid unnecessary conflict, stand firm when friends are threatened, and choose the path that keeps the group together.'
  },
  C: {
    trait: 'Conscientiousness',
    description: 'analytical, precise, creative problem-solver, notices what others miss',
    voice: 'The character observes carefully and thinks before acting. They spot patterns, ask questions others overlook, and come up with clever solutions. They value fairness and doing things the right way.',
    decisions: 'When faced with a choice, they gather information first. They plan ahead, notice hidden details that change everything, and would rather find the smart solution than the fast one.'
  }
}

const BACKGROUND_LOCATIONS = {
  'midevil-1.webp': 'a towering stone castle perched on a hilltop, with banners flying from its turrets and a winding road leading up through the village below',
  'midevil-2.webp': 'a dense enchanted forest with ancient trees, glowing mushrooms along mossy paths, and shafts of golden light breaking through the canopy',
  'midevil-3.webp': 'a mysterious mountain pass with crumbling ruins, a rope bridge over a deep gorge, and mist rolling through the rocky peaks',
  'sci-fi-1.webp': 'a massive space station orbiting a ringed planet, with docking bays full of ships, glowing corridors, and observation windows showing the stars',
  'sci-fi-2.webp': 'an alien jungle planet with bioluminescent plants, floating rock formations, and strange creatures moving through the undergrowth',
  'sci-fi-3.webp': 'a neon-lit cybercity with towering skyscrapers, flying vehicles weaving between buildings, and holographic signs flickering in the rain',
  'video-game-1.webp': 'a vibrant starting zone with rolling green hills, floating coin blocks, and a cheerful path leading toward a distant crystal tower',
  'video-game-2.webp': 'a lava-filled dungeon level with crumbling platforms over molten rivers, glowing crystals in the walls, and a boss door at the far end',
  'video-game-3.webp': 'an underwater level with coral reefs, sunken treasure chests, bubble currents carrying the character upward, and a mysterious deep-sea cave'
}

const SYSTEM_PROMPT = `You are a master children's storyteller writing a living, evolving adventure story for a child aged 8-12. Each chapter you write is part of a single continuous story that grows over time.

CRITICAL RULES:
- The protagonist's dominant personality trait is the LENS through which everything is written. It shapes how they think, speak, react, and make decisions. It is not just mentioned — it IS the character's voice.
- When the dominant trait changes between chapters, treat it as genuine character growth. The character is evolving. Reference how they used to approach things differently and show why they've changed.
- The story must feel like one continuous narrative. Reference past events naturally. Characters remember what happened. Consequences carry forward.
- The setting/location provided must be where this chapter takes place. Describe it vividly as part of the scene.
- If a sidekick is present, they are a real companion in the story — they have their own personality, react to events, and interact with the protagonist. They don't need to be in every scene but they are part of the world.
- If a vehicle is present, it is part of the character's identity and toolkit. Use it when travel or action calls for it.
- Write vivid, engaging prose. Show don't tell. Use dialogue. Make the reader feel like they're in the world.
- BALANCE AND EXTREMES: The story teaches that balance matters. You will receive a TRAIT BALANCE breakdown showing what percentage of assessments resulted in each trait. Pay close attention to this:
  - If the dominant trait is 70%+ of all assessments, the character is becoming EXTREME. Their strength is becoming a flaw. A bold leader becomes reckless and alienates allies. A caring friend becomes a pushover who can't say no. An analytical thinker becomes paralyzed by overthinking. A social influencer becomes superficial and avoids hard truths. This MUST become a central plot point — the character's extreme behavior causes real consequences that force them to reflect and grow.
  - If the dominant trait is 50-69%, the character leans heavily into it but still has flexibility. Show the trait driving decisions but occasionally hint that other approaches might help.
  - If the dominant trait is under 50%, the character is relatively balanced. They lead with their dominant trait but naturally draw on other qualities too. The story flows more evenly.
  - The goal is NOT to punish the child — it's to show through story that relying too heavily on one approach creates problems, and drawing on different strengths makes you more capable. When extreme behavior causes trouble, the resolution should show the character learning to balance their dominant trait with others.

FORMAT:
- Start with TITLE: followed by a short exciting chapter title (5 words or less)
- Then a blank line, then the story paragraphs
- Write 4 to 8 paragraphs. Each paragraph should be 2-3 sentences. Short chapters (4 paragraphs) for quieter moments, longer chapters (up to 8) for major events.
- Keep each paragraph under 60 words.
- Separate paragraphs with blank lines.`

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
    const disc = DISC_VOICE[dominantTrait] || DISC_VOICE.I
    const characterName = profile.characterName || profile.childName
    const gender = profile.gender === 'boy' ? 'male' : 'female'
    const pronoun = gender === 'female' ? 'she' : 'he'
    const pronounCap = gender === 'female' ? 'She' : 'He'
    const possessive = gender === 'female' ? 'her' : 'his'

    // Stats
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

    // Location from background
    const locationDescription = BACKGROUND_LOCATIONS[profile.cardBackground] || null
    const locationLine = locationDescription
      ? `CURRENT LOCATION: ${locationDescription}`
      : `SETTING: ${themeSetting}`

    // Sidekick & vehicle context
    const sidekick = profile.sidekick || null
    const vehicle = profile.vehicle || null
    let companionsContext = ''
    if (sidekick && sidekick.name) {
      companionsContext += `\nSIDEKICK: ${characterName} has a sidekick named ${sidekick.name}${sidekick.description ? ' — ' + sidekick.description : ''}. They travel together and the sidekick is part of the ongoing story.`
    }
    if (vehicle && vehicle.name) {
      companionsContext += `\nVEHICLE: ${characterName} has a vehicle called ${vehicle.name}${vehicle.description ? ' — ' + vehicle.description : ''}. It is at ${possessive} disposal for travel and action sequences.`
    }

    // Build story history for continuity
    let storyHistory = ''
    if (existingChapters.length > 0) {
      const chapterSummaries = existingChapters.map(c => {
        const prevTrait = c.dominantTraitAtTime || '?'
        const prevDisc = DISC_VOICE[prevTrait]
        const traitLabel = prevDisc ? prevDisc.trait : prevTrait
        return `Chapter ${c.chapterNumber} (dominant trait: ${traitLabel}):\n${c.content}`
      }).join('\n\n---\n\n')
      storyHistory = `\nPREVIOUS CHAPTERS (the full story so far — maintain continuity with all events, characters, and consequences):\n\n${chapterSummaries}`
    }

    // Detect trait shift for character development
    let traitShiftContext = ''
    if (existingChapters.length > 0) {
      const prevTrait = existingChapters[existingChapters.length - 1].dominantTraitAtTime
      if (prevTrait && prevTrait !== dominantTrait) {
        const prevDisc = DISC_VOICE[prevTrait]
        const prevLabel = prevDisc ? prevDisc.trait : prevTrait
        traitShiftContext = `\nCHARACTER GROWTH: In the previous chapter, ${characterName}'s dominant trait was ${prevLabel} (${prevDisc ? prevDisc.description : ''}). Now ${possessive} dominant trait has shifted to ${disc.trait}. This is real character development — weave this change into the narrative. Show how ${pronoun} is approaching things differently now compared to before. Maybe ${pronoun} reflects on past decisions, or others notice the change in ${possessive} behavior.`
      }
    }

    // Calculate trait balance — how dominant is the dominant trait across all assessments?
    let traitBalanceContext = ''
    if (sessions.length >= 2) {
      const traitCounts = { D: 0, I: 0, S: 0, C: 0 }
      sessions.forEach(s => {
        if (s.scoreBreakdown) {
          const scores = { D: Number(s.scoreBreakdown.D) || 0, I: Number(s.scoreBreakdown.I) || 0, S: Number(s.scoreBreakdown.S) || 0, C: Number(s.scoreBreakdown.C) || 0 }
          const max = Math.max(scores.D, scores.I, scores.S, scores.C)
          const winners = Object.keys(scores).filter(k => scores[k] === max)
          winners.forEach(w => { traitCounts[w] += 1 / winners.length })
        }
      })
      const total = sessions.length
      const dominantCount = traitCounts[dominantTrait] || 0
      const dominantPct = Math.round((dominantCount / total) * 100)
      const breakdown = ['D', 'I', 'S', 'C']
        .map(t => `${DISC_VOICE[t].trait}: ${Math.round((traitCounts[t] / total) * 100)}%`)
        .join(', ')

      traitBalanceContext = `\nTRAIT BALANCE (across ${total} assessments): ${breakdown}\n`
      if (dominantPct >= 70) {
        traitBalanceContext += `⚠️ EXTREME IMBALANCE: ${characterName}'s dominant trait (${disc.trait}) has been the result of ${dominantPct}% of all assessments. This is an extreme lean. ${pronounCap} is becoming a one-dimensional version of ${possessive} trait. This chapter MUST show real consequences of this imbalance — ${possessive} ${disc.trait.toLowerCase()} is now causing problems, not just solving them. Other characters should notice or push back. The chapter should end with ${characterName} beginning to realize that ${pronoun} needs more balance.`
      } else if (dominantPct >= 50) {
        traitBalanceContext += `${characterName} leans heavily toward ${disc.trait} (${dominantPct}% of assessments). ${pronounCap} leads strongly with this trait. Occasionally show moments where a different approach might have worked better — small hints, not heavy-handed lessons.`
      } else {
        traitBalanceContext += `${characterName} is relatively balanced across traits (dominant at only ${dominantPct}%). ${pronounCap} leads with ${disc.trait} but naturally draws on other qualities. Write ${pronounCap.toLowerCase()} as well-rounded — capable of different approaches depending on the situation.`
      }
    }

    // Build the prompt
    const prompt = chapterNumber === 1
      ? `Write Chapter 1 — the origin story of ${characterName}, a ${gender} protagonist in ${themeSetting}.

CHARACTER: ${characterName} (${pronoun}/${possessive})
DOMINANT TRAIT: ${disc.trait} — ${disc.description}
VOICE: ${disc.voice}
DECISION-MAKING: ${disc.decisions}
${locationLine}
${stats ? `STATS: Strength ${stats.strength}, Heart ${stats.heart}, Speed ${stats.speed}, Creativity ${stats.creativity}, Wisdom ${stats.wisdom}` : ''}${traitBalanceContext}${companionsContext}

This is the beginning of ${possessive} story. Introduce ${characterName} in ${possessive} world. Show who ${pronoun} is through ${possessive} actions and choices — not by describing ${possessive} personality, but by putting ${pronounCap.toLowerCase()} in a situation where ${possessive} dominant trait naturally drives what ${pronoun} does. End with a hook that launches the adventure forward.`

      : `Write Chapter ${chapterNumber} of ${characterName}'s continuing story.

CHARACTER: ${characterName} (${pronoun}/${possessive})
DOMINANT TRAIT: ${disc.trait} — ${disc.description}
VOICE: ${disc.voice}
DECISION-MAKING: ${disc.decisions}
${locationLine}
${stats ? `STATS: Strength ${stats.strength}, Heart ${stats.heart}, Speed ${stats.speed}, Creativity ${stats.creativity}, Wisdom ${stats.wisdom}` : ''}${traitBalanceContext}${companionsContext}${traitShiftContext}
${storyHistory}

Continue the story naturally from where the previous chapter left off. The events of this chapter should be driven by ${characterName}'s current dominant trait (${disc.trait}). ${pronounCap} makes choices the way someone with this trait would — ${disc.decisions.toLowerCase()} Reference past events where it makes sense. Build toward something — plant seeds for future chapters. End with momentum.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1500,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: prompt }]
      })
    })
    if (!response.ok) {
      const err = await response.text()
      console.error('Story gen error:', err)
      return res.status(500).json({ message: 'Story generation failed.' })
    }
    const data = await response.json()
    const rawText = data.content[0].text.trim()

    // Parse title from response
    let title = null
    let content = rawText
    const lines = rawText.split('\n')
    if (lines[0].toUpperCase().startsWith('TITLE:')) {
      title = lines[0].replace(/^TITLE:\s*/i, '').trim()
      let startIdx = 1
      while (startIdx < lines.length && lines[startIdx].trim() === '') startIdx++
      content = lines.slice(startIdx).join('\n').trim()
    }

    // Snapshot images at chapter creation time
    let backgroundImage = profile.cardBackground
      ? `/images/backgrounds/${profile.cardBackground}`
      : null
    let chapterImage = null
    if (chapterNumber === 1) {
      // Chapter 1 uses the background image as the display image
    } else {
      if (sidekick && sidekick.image) {
        chapterImage = sidekick.image
      } else {
        chapterImage = getCharacterImagePath(profile.theme, dominantTrait, profile.gender)
      }
    }

    const chapter = new StoryChapter({
      childProfileId,
      chapterNumber,
      title,
      content,
      dominantTraitAtTime: dominantTrait,
      statsAtTime: stats,
      backgroundImage,
      chapterImage
    })
    await chapter.save()

    return res.json({ chapter, tokensRemaining: tokensEarned - tokensUsed - 1 })
  } catch (err) {
    console.error('generateChapter error:', err)
    return res.status(500).json({ message: 'Story generation failed.' })
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

export default { getChapters, generateChapter, updateChapterTitle }
