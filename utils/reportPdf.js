// Client-only PDF utility.
// Always loaded via dynamic import() inside a method — never statically imported,
// so it never enters the server bundle or Node's CJS loader.

const TRAIT_COLORS = {
  D: [244, 67, 54],
  I: [255, 189, 5],
  S: [13, 171, 73],
  C: [22, 102, 255]
}

const TRAIT_NAMES = {
  D: 'Dominance',
  I: 'Influence',
  S: 'Steadiness',
  C: 'Conscientiousness'
}

const REPORT_TITLES = {
  first: '1st Person Report',
  third_overall: '3rd Person Overall Report',
  third_individual: 'Individual 3rd Person Report',
  full: 'Full Report (1st + 3rd Person)'
}

function topTrait (breakdown) {
  if (!breakdown) return null
  return ['D', 'I', 'S', 'C']
    .map(function (t) { return { t: t, v: breakdown[t] || 0 } })
    .sort(function (a, b) { return b.v - a.v })[0].t
}

// ── Page chrome ──────────────────────────────────────────────────────────────

function drawHeader (doc, pageNum) {
  doc.setFillColor(18, 48, 77)
  doc.rect(0, 0, 210, 12, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('DISC Personality Report', 14, 8)
  doc.text('Page ' + pageNum, 196, 8, { align: 'right' })
}

function drawFooter (doc, userName) {
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.3)
  doc.line(14, 284, 196, 284)
  doc.setTextColor(150, 150, 150)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('The Assessment Library  ·  ' + (userName || ''), 105, 290, { align: 'center' })
}

// ── Bar chart drawn with jsPDF primitives ────────────────────────────────────

function drawBarChart (doc, startX, startY, breakdown, chartWidth) {
  var traits = ['D', 'I', 'S', 'C']
  var maxBarH = 48
  var gap = 10
  var barW = (chartWidth - gap * 3) / 4
  var baseY = startY + maxBarH

  // Axis line
  doc.setDrawColor(200, 200, 200)
  doc.setLineWidth(0.3)
  doc.line(startX, baseY, startX + chartWidth, baseY)

  traits.forEach(function (t, i) {
    var val = breakdown ? (breakdown[t] || 0) : 0
    var barH = (val / 100) * maxBarH
    var bx = startX + i * (barW + gap)
    var by = baseY - barH
    var col = TRAIT_COLORS[t]

    // Bar fill
    doc.setFillColor(col[0], col[1], col[2])
    if (barH > 0) {
      doc.rect(bx, by, barW, barH, 'F')
    }

    // Trait letter below axis
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(col[0], col[1], col[2])
    doc.text(t, bx + barW / 2, baseY + 6, { align: 'center' })

    // Percentage above bar (or just above axis if bar is tiny)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(50, 50, 50)
    var labelY = barH > 4 ? by - 2 : baseY - 5
    doc.text(val.toFixed(1) + '%', bx + barW / 2, labelY, { align: 'center' })
  })
}

// ── Section page ─────────────────────────────────────────────────────────────

function addSection (doc, heading, paragraphs, counter, userName) {
  doc.addPage()
  counter.n++
  drawHeader(doc, counter.n)

  var y = 22

  // Heading bar
  doc.setFillColor(232, 240, 250)
  doc.rect(14, y, 182, 10, 'F')
  doc.setTextColor(18, 48, 77)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text(heading, 18, y + 7)
  y += 16

  // Body text
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(55, 55, 55)

  paragraphs.forEach(function (para) {
    var lines = doc.splitTextToSize(para, 182)
    var blockH = lines.length * 5.5
    if (y + blockH > 278) {
      drawFooter(doc, userName)
      doc.addPage()
      counter.n++
      drawHeader(doc, counter.n)
      y = 22
    }
    doc.text(lines, 14, y)
    y += blockH + 5
  })

  drawFooter(doc, userName)
}

// ── Placeholder section definitions ─────────────────────────────────────────

var PLACEHOLDER = 'This section will contain your personalized AI-generated content in the next phase of development. The full report will analyze your DISC profile in depth, providing tailored insights, practical strategies, and actionable recommendations based on your specific results and the context you selected.'

function buildSections (type, breakdown, userName) {
  var top = breakdown ? (TRAIT_NAMES[topTrait(breakdown)] || 'your dominant style') : 'your dominant style'
  var name = userName || 'there'

  var intro1st = [
    'Welcome, ' + name + '. This report summarizes your 1st Person DISC personality self-assessment results.',
    'Your dominant trait is ' + top + '. The sections ahead explore what that means for the focus areas you selected.',
    PLACEHOLDER
  ]

  var intro3rd = [
    'Welcome, ' + name + '. This report compares how you perceive yourself with how others perceive you.',
    'Understanding the gap between self-perception and external perception is a key driver of personal growth and stronger relationships.',
    PLACEHOLDER
  ]

  if (type === 'first') {
    return [
      { heading: 'Executive Summary', paras: intro1st },
      { heading: 'Your DISC Profile Overview', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Understanding Your ' + top + ' Style', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Core Strengths', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Potential Blind Spots', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Focus Area 1 — Insights & Strategies', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Focus Area 2 — Insights & Strategies', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Focus Area 3 — Insights & Strategies', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Action Plan', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Conclusion', paras: [PLACEHOLDER] }
    ]
  }

  if (type === 'third_overall') {
    return [
      { heading: 'Executive Summary', paras: intro3rd },
      { heading: 'Your Self-Perception Profile', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'How Others Perceive You', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Where You Align', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Where You Differ', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Communication Style Insights', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Relationship Dynamics', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Leadership & Influence', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Personal Growth Action Plan', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Conclusion', paras: [PLACEHOLDER] }
    ]
  }

  if (type === 'third_individual') {
    return [
      { heading: 'Overview of This Perspective', paras: ['Welcome, ' + name + '. This focused report examines one specific relationship\'s perspective of your DISC profile.', PLACEHOLDER] },
      { heading: 'How This Person Sees Your Strengths', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Perception Gaps and What They Reveal', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Communication Insights for This Relationship', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Action Steps to Improve Mutual Understanding', paras: [PLACEHOLDER] }
    ]
  }

  if (type === 'full') {
    return [
      { heading: 'Executive Summary', paras: intro1st },
      { heading: 'Your Complete DISC Profile', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Understanding Your ' + top + ' Dominant Style', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Core Strengths in Depth', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Potential Blind Spots & Challenges', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Focus Area 1 — Strategies & Insights', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Focus Area 2 — Strategies & Insights', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Focus Area 3 — Strategies & Insights', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Communication Style Deep Dive', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Stress Responses & Coping Strategies', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'PART 2 — How Others See You', paras: intro3rd },
      { heading: 'How Others Perceive You — Overview', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Key Agreements Between Self & Others', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Significant Perception Gaps', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Leadership Through Others\' Eyes', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Emotional Intelligence Insights', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Comprehensive Action Plan', paras: [PLACEHOLDER, PLACEHOLDER] },
      { heading: 'Conclusion & Next Steps', paras: [PLACEHOLDER] }
    ]
  }

  return [{ heading: 'Report', paras: [PLACEHOLDER] }]
}

// ── Public API ────────────────────────────────────────────────────────────────

export async function buildReport (options) {
  var type = options.type || 'first'
  var userName = options.userName || ''
  var fp = options.firstPersonBreakdown || null
  var tp = options.thirdPersonBreakdown || null

  // Determine which breakdown to use for the cover/chart page
  var primaryBreakdown = (type === 'third_overall' || type === 'third_individual') ? tp : fp

  var { jsPDF } = await import('jspdf')
  var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  // ── Cover page ──────────────────────────────────────────────────────────────
  doc.setFillColor(18, 48, 77)
  doc.rect(0, 0, 210, 297, 'F')

  // Four-colour accent strip
  var stripW = 210 / 4
  var stripColors = [[244, 67, 54], [255, 189, 5], [13, 171, 73], [22, 102, 255]]
  stripColors.forEach(function (c, i) {
    doc.setFillColor(c[0], c[1], c[2])
    doc.rect(i * stripW, 128, stripW, 5, 'F')
  })

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(34)
  doc.setFont('helvetica', 'bold')
  doc.text('DISC', 105, 88, { align: 'center' })

  doc.setFontSize(15)
  doc.setFont('helvetica', 'normal')
  doc.text('Personality Assessment Report', 105, 101, { align: 'center' })

  doc.setFontSize(13)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(210, 220, 230)
  doc.text(REPORT_TITLES[type] || 'Report', 105, 143, { align: 'center' })

  if (userName) {
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(170, 180, 190)
    doc.text('Prepared for: ' + userName, 105, 158, { align: 'center' })
  }

  var today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  doc.setFontSize(9)
  doc.setTextColor(120, 130, 140)
  doc.text(today, 105, 170, { align: 'center' })

  // Warning on cover
  doc.setFontSize(8)
  doc.setTextColor(255, 200, 0)
  doc.text('WARNING: This report is not permanently stored.', 105, 258, { align: 'center' })
  doc.text('Please download it now or it will be lost when you close this tab.', 105, 264, { align: 'center' })

  doc.setFontSize(8)
  doc.setTextColor(90, 100, 110)
  doc.text('The Assessment Library', 105, 285, { align: 'center' })

  // ── Page 2: Score breakdown ─────────────────────────────────────────────────
  var counter = { n: 2 }
  doc.addPage()
  drawHeader(doc, counter.n)

  var y = 22

  doc.setFillColor(232, 240, 250)
  doc.rect(14, y, 182, 10, 'F')
  doc.setTextColor(18, 48, 77)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Your DISC Score Breakdown', 18, y + 7)
  y += 16

  if (fp) {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(18, 48, 77)
    doc.text('1st Person — Self-Assessment', 14, y)
    y += 4
    drawBarChart(doc, 14, y, fp, 182)
    y += 64
  }

  if (tp && (type === 'third_overall' || type === 'third_individual' || type === 'full')) {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(18, 48, 77)
    doc.text("3rd Person — Others' Perception", 14, y)
    y += 4
    drawBarChart(doc, 14, y, tp, 182)
    y += 64
  }

  // Score table
  var tableBreakdown = primaryBreakdown || fp
  if (tableBreakdown) {
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(18, 48, 77)
    doc.text('Scores', 14, y + 5)
    y += 12

    ;['D', 'I', 'S', 'C'].forEach(function (t) {
      var col = TRAIT_COLORS[t]
      doc.setFillColor(col[0], col[1], col[2])
      doc.rect(14, y - 3.5, 4, 4.5, 'F')
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.setTextColor(50, 50, 50)
      doc.text(TRAIT_NAMES[t] + ' (' + t + '): ' + (tableBreakdown[t] || 0).toFixed(1) + '%', 21, y)
      y += 7
    })
  }

  drawFooter(doc, userName)

  // ── Content sections ────────────────────────────────────────────────────────
  var sections = options.sections || buildSections(type, primaryBreakdown, userName)
  sections.forEach(function (s) {
    addSection(doc, s.heading, s.paras, counter, userName)
  })

  return doc
}

export function openInNewTab (doc, reportType, userName) {
  var blob = doc.output('blob')
  var blobUrl = URL.createObjectURL(blob)

  var safeName = (userName || 'User').replace(/\s+/g, '-')
  var date = new Date().toISOString().slice(0, 10)
  var dlName = 'DISC-Report-' + safeName + '-' + date + '.pdf'

  var html = [
    '<!DOCTYPE html><html><head><title>DISC Report</title><meta charset="utf-8">',
    '<style>',
    'body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f0f2f5}',
    '.banner{background:#fff3cd;border-bottom:3px solid #ffc107;padding:12px 20px;',
    'display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}',
    '.msg{font-size:14px;color:#333;margin:0}',
    '.msg strong{color:#b45309}',
    '.dl{display:inline-block;background:#12304d;color:#fff;padding:9px 20px;border-radius:6px;',
    'text-decoration:none;font-size:14px;font-weight:600;white-space:nowrap}',
    '.dl:hover{background:#1a4a70}',
    'iframe{display:block;width:100%;height:calc(100vh - 58px);border:none}',
    '</style></head><body>',
    '<div class="banner">',
    '<p class="msg">⚠ <strong>This report is not permanently stored.</strong>',
    ' Please download it now or it will be lost when you close this tab.</p>',
    '<a class="dl" href="' + blobUrl + '" download="' + dlName + '">&#8595; Download PDF</a>',
    '</div>',
    '<iframe src="' + blobUrl + '"></iframe>',
    '</body></html>'
  ].join('')

  var wrapper = URL.createObjectURL(new Blob([html], { type: 'text/html' }))
  window.open(wrapper, '_blank')
}
