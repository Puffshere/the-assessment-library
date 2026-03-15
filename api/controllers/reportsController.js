const TRAIT_NAMES = {
  D: 'Dominance',
  I: 'Influence',
  S: 'Steadiness',
  C: 'Conscientiousness'
}

function topTraits (breakdown) {
  if (!breakdown) return []
  return ['D', 'I', 'S', 'C']
    .map(t => ({ t, v: breakdown[t] || 0 }))
    .sort((a, b) => b.v - a.v)
    .map(x => TRAIT_NAMES[x.t] + ' (' + x.t + '): ' + x.v.toFixed(1) + '%')
}

function breakdownSummary (breakdown, label) {
  if (!breakdown) return ''
  return label + ': ' + topTraits(breakdown).join(', ')
}

function buildPrompt (type, payload) {
  const { userName, firstPersonBreakdown, thirdPersonBreakdown, focusAreas, individualLabel } = payload
  const name = userName || 'the participant'
  const fp = breakdownSummary(firstPersonBreakdown, '1st Person (self)')
  const tp = breakdownSummary(thirdPersonBreakdown, '3rd Person (others)')

  const instruction = `You are writing a professional DISC personality assessment report for ${name}.
Return ONLY a valid JSON array. Each element must be an object with exactly two string fields: "heading" and "body".
The "body" field should be 3–5 sentences of substantive, personalised insight. Do not include any text outside the JSON array.`

  if (type === 'first') {
    const areas = (focusAreas || []).join(', ') || 'Communication, Leadership, Personal Growth'
    return `${instruction}

DISC scores — ${fp}

Generate 10 sections for a 1st Person DISC report. Include these exact headings in order:
1. Executive Summary
2. Your DISC Profile Overview
3. Understanding Your Dominant Style
4. Core Strengths
5. Potential Blind Spots
6. ${focusAreas && focusAreas[0] ? focusAreas[0] + ' — Insights & Strategies' : 'Focus Area 1 — Insights & Strategies'}
7. ${focusAreas && focusAreas[1] ? focusAreas[1] + ' — Insights & Strategies' : 'Focus Area 2 — Insights & Strategies'}
8. ${focusAreas && focusAreas[2] ? focusAreas[2] + ' — Insights & Strategies' : 'Focus Area 3 — Insights & Strategies'}
9. Action Plan
10. Conclusion

Tailor every section to ${name}'s specific DISC scores. The focus areas are: ${areas}.`
  }

  if (type === 'third_overall') {
    return `${instruction}

DISC scores — ${fp}; ${tp}

Generate 10 sections for a 3rd Person Overall DISC report comparing self-perception with others' perception. Include these exact headings in order:
1. Executive Summary
2. Your Self-Perception Profile
3. How Others Perceive You
4. Where You Align
5. Where You Differ
6. Communication Style Insights
7. Relationship Dynamics
8. Leadership & Influence
9. Personal Growth Action Plan
10. Conclusion

Tailor every section to ${name}'s specific scores and the gap between self and others' perception.`
  }

  if (type === 'third_individual') {
    const who = individualLabel || 'this individual'
    return `${instruction}

DISC scores — ${fp}; ${tp} (from ${who})

Generate 5 sections for an Individual 3rd Person DISC report focused on a specific relationship. Include these exact headings in order:
1. Overview of This Perspective
2. How This Person Sees Your Strengths
3. Perception Gaps and What They Reveal
4. Communication Insights for This Relationship
5. Action Steps to Improve Mutual Understanding

Tailor every section to ${name}'s scores and the specific relationship with ${who}.`
  }

  if (type === 'full') {
    return `${instruction}

DISC scores — ${fp}; ${tp}

Generate 18 sections for a comprehensive Full DISC Report (1st + 3rd Person). Include these exact headings in order:
1. Executive Summary
2. Your Complete DISC Profile
3. Understanding Your Dominant Style
4. Core Strengths in Depth
5. Potential Blind Spots & Challenges
6. Focus Area 1 — Strategies & Insights
7. Focus Area 2 — Strategies & Insights
8. Focus Area 3 — Strategies & Insights
9. Communication Style Deep Dive
10. Stress Responses & Coping Strategies
11. PART 2 — How Others See You
12. How Others Perceive You — Overview
13. Key Agreements Between Self & Others
14. Significant Perception Gaps
15. Leadership Through Others' Eyes
16. Emotional Intelligence Insights
17. Comprehensive Action Plan
18. Conclusion & Next Steps

Tailor every section to ${name}'s specific scores across both self and external perception.`
  }

  return `${instruction}\n\nGenerate a brief report summary in one section with heading "Report" for ${name}.`
}

const REPORT_COST = 10

const generateReport = async (req, res) => {
  const { type, userName, firstPersonBreakdown, thirdPersonBreakdown, focusAreas, individualLabel } = req.body || {}

  if (!type) {
    return res.status(400).json({ error: 'type is required' })
  }

  // Deduct credits for the paid report before calling OpenAI
  const user = req.user
  if (type === 'full') {
    if ((user.creditsBalance || 0) < REPORT_COST) {
      return res.status(400).json({
        code: 'INSUFFICIENT_CREDITS',
        error: 'Not enough credits to generate this report.'
      })
    }
    user.creditsBalance -= REPORT_COST
    await user.save()
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'OPENAI_API_KEY is not configured on the server' })
  }

  try {
    const fetch = require('node-fetch')
    const prompt = buildPrompt(type, { userName, firstPersonBreakdown, thirdPersonBreakdown, focusAreas, individualLabel })

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 4000
      })
    })

    if (!response.ok) {
      const errBody = await response.text()
      console.error('OpenAI API error ' + response.status + ':', errBody)
      return res.status(502).json({ error: 'OpenAI API returned an error. Please try again.' })
    }

    const data = await response.json()
    const raw = data.choices[0].message.content.trim()

    // Strip markdown code fences if present
    const jsonStr = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')

    let sections
    try {
      sections = JSON.parse(jsonStr)
    } catch (parseErr) {
      console.error('OpenAI response parse error:', parseErr.message)
      console.error('Raw response:', raw)
      return res.status(500).json({ error: 'AI returned malformed JSON. Please try again.' })
    }

    if (!Array.isArray(sections)) {
      return res.status(500).json({ error: 'AI response was not an array. Please try again.' })
    }

    // Normalise: ensure each item has heading and body (some models return "content" or "text")
    const normalised = sections.map(s => ({
      heading: s.heading || s.title || 'Section',
      paras: s.body
        ? [s.body]
        : s.content
          ? [s.content]
          : s.paragraphs || s.paras || ['']
    }))

    return res.json({
      sections: normalised,
      creditsBalance: type === 'full' ? user.creditsBalance : undefined
    })
  } catch (err) {
    console.error('Report generation error:', err)
    return res.status(500).json({ error: 'Failed to generate report content. Please try again.' })
  }
}

export default { generateReport }
