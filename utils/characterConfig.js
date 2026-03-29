// Character configuration for Kids View.
// Maps theme → discType → gender → character data.
// Used by the kids dashboard, character reveal screen, and profile selector.

const THEME_IMAGE_PREFIX = {
  medieval: 'medieval',
  scifi: 'sci-fi',
  videogame: 'video-game'
}

const DASHBOARD_TITLES = {
  medieval: 'The Kingdom',
  scifi: 'Galaxy Command',
  videogame: 'Game HQ'
}

const ARCHETYPE_NAMES = {
  D: { boy: 'Commander Rex', girl: 'Commander Lexa' },
  I: { boy: 'Blaze', girl: 'Sunny' },
  S: { boy: 'Guardian Stone', girl: 'Guardian Ivy' },
  C: { boy: 'Sage', girl: 'Nova' }
}

/**
 * Derive the six character stats from raw DISC percentages (0–100 each).
 *
 *   D → Strength, Leadership
 *   I → Creativity, Speed
 *   S → Heart, Wisdom
 *   C → Wisdom, Creativity
 *
 * When two DISC types feed the same stat (Wisdom ← S+C, Creativity ← I+C),
 * the stat is the average of its two sources, clamped to 0–100.
 */
function deriveStats(disc) {
  const d = Number(disc.D) || 0
  const i = Number(disc.I) || 0
  const s = Number(disc.S) || 0
  const c = Number(disc.C) || 0

  const clamp = (v) => Math.round(Math.min(100, Math.max(0, v)))

  return {
    strength: clamp(d),
    leadership: clamp(d),
    speed: clamp(i),
    creativity: clamp((i + c) / 2),
    heart: clamp(s),
    wisdom: clamp((s + c) / 2)
  }
}

/**
 * Look up the full character config for a given profile combination.
 *
 * @param {string} theme      - 'medieval' | 'scifi' | 'videogame'
 * @param {string} discType   - 'D' | 'I' | 'S' | 'C'
 * @param {string} gender     - 'boy' | 'girl'
 * @returns {{ imagePath: string, archetypeName: string, dashboardTitle: string }}
 */
function getCharacter(theme, discType, gender) {
  const prefix = THEME_IMAGE_PREFIX[theme] || theme
  const disc = (discType || '').toUpperCase()
  const g = (gender || '').toLowerCase()

  return {
    imagePath: `/images/characters/${prefix}-${disc.toLowerCase()}-${g}.webp`,
    archetypeName: (ARCHETYPE_NAMES[disc] && ARCHETYPE_NAMES[disc][g]) || '',
    dashboardTitle: DASHBOARD_TITLES[theme] || ''
  }
}

/**
 * Build the full config map: theme → discType → gender → character data.
 * Useful if you need to iterate or pre-render all combinations.
 */
function buildFullConfig() {
  const themes = ['medieval', 'scifi', 'videogame']
  const discTypes = ['D', 'I', 'S', 'C']
  const genders = ['boy', 'girl']

  const config = {}

  for (const theme of themes) {
    config[theme] = {}
    for (const disc of discTypes) {
      config[theme][disc] = {}
      for (const gender of genders) {
        config[theme][disc][gender] = getCharacter(theme, disc, gender)
      }
    }
  }

  return config
}

const CHARACTER_CONFIG = buildFullConfig()

export {
  CHARACTER_CONFIG,
  DASHBOARD_TITLES,
  ARCHETYPE_NAMES,
  THEME_IMAGE_PREFIX,
  getCharacter,
  deriveStats
}

export default CHARACTER_CONFIG
