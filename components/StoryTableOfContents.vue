<template>
  <div class="toc-spread" :class="{ 'is-content-entering': contentFadingIn }">
    <!-- LEFT PAGE -->
    <div class="story-page__page story-page__page--left" :style="pageStyle">
      <div class="toc-left">
      <!-- Row 1: Character, Background, Sidekick -->
      <div class="toc-left__row">
        <div class="toc-left__character">
          <div class="toc-left__character-inner">
            <img v-if="characterImage" :src="characterImage" class="toc-left__character-img" alt="Your character" />
            <div v-else class="toc-left__character-placeholder">?</div>
          </div>
        </div>

        <div class="toc-left__bg-chooser">
          <div class="toc-left__bg-thumb" @click="$emit('open-bg-modal')">
            <img
              v-if="profile.cardBackground"
              :src="`/images/backgrounds/${profile.cardBackground}`"
              class="toc-left__bg-img"
              alt="Current background"
            />
            <div v-else class="toc-left__bg-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="toc-left__bg-placeholder-icon">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        </div>

        <div class="toc-left__sidekick">
          <div class="toc-left__sidekick-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="toc-left__sidekick-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span class="toc-left__sidekick-label">Unlock Sidekick</span>
          </div>
        </div>
      </div>

      <!-- Row 2: Vehicle, Coming Soon x2 -->
      <div class="toc-left__row">
        <div class="toc-left__vehicle">
          <div class="toc-left__vehicle-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="toc-left__vehicle-icon">
              <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" />
              <circle cx="7.5" cy="17" r="2" />
              <circle cx="16.5" cy="17" r="2" />
            </svg>
            <span class="toc-left__vehicle-label">Unlock Vehicle</span>
          </div>
        </div>

        <div class="toc-left__placeholder-reward">
          <div class="toc-left__placeholder-inner">
            <span class="toc-left__placeholder-label">Coming Soon</span>
          </div>
        </div>

        <div class="toc-left__placeholder-reward">
          <div class="toc-left__placeholder-inner">
            <span class="toc-left__placeholder-label">Coming Soon</span>
          </div>
        </div>
      </div>

      <!-- Stats Line Graph -->
      <div class="toc-left__graph-section">
        <div class="toc-left__graph-controls">
          <div class="toc-left__graph-toggle">
            <button
              class="toc-left__toggle-btn"
              :class="{ 'is-active': graphMode === 'stats' }"
              @click="graphMode = 'stats'; selectedTraits = []"
            >
              Stats
            </button>
            <button
              class="toc-left__toggle-btn"
              :class="{ 'is-active': graphMode === 'disc' }"
              @click="graphMode = 'disc'; selectedTraits = []"
            >
              DISC
            </button>
          </div>
        </div>

        <div class="toc-left__graph-wrap">
          <svg
            v-if="chapters.length > 1"
            :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
            class="toc-left__graph-svg"
            preserveAspectRatio="none"
          >
            <!-- Grid lines + Y labels -->
            <template v-for="(tick, i) in yTicks">
              <line
                :key="'grid-' + i"
                :x1="graphPadLeft"
                :y1="tick.y"
                :x2="svgWidth - graphPadRight"
                :y2="tick.y"
                stroke="#e0ddd4"
                stroke-width="0.3"
                stroke-dasharray="2,2"
              />
              <text
                :key="'ylabel-' + i"
                :x="graphPadLeft - 6"
                :y="tick.y + 2.5"
                text-anchor="end"
                class="toc-left__graph-ylabel"
              >{{ tick.value }}</text>
            </template>
            <!-- Y axis line -->
            <line
              :x1="graphPadLeft"
              :y1="graphPadTop"
              :x2="graphPadLeft"
              :y2="svgHeight - graphPadBottom"
              stroke="#d0cdc4"
              stroke-width="0.5"
            />
            <!-- X axis line -->
            <line
              :x1="graphPadLeft"
              :y1="svgHeight - graphPadBottom"
              :x2="svgWidth - graphPadRight"
              :y2="svgHeight - graphPadBottom"
              stroke="#d0cdc4"
              stroke-width="0.5"
            />
            <!-- X axis date labels -->
            <text
              v-for="(label, li) in xLabels"
              :key="'xlabel-' + li"
              :x="label.x"
              :y="svgHeight - 2"
              text-anchor="middle"
              class="toc-left__graph-xlabel"
            >{{ label.text }}</text>
            <!-- Data series -->
            <template v-for="series in graphSeries">
              <polyline
                :key="'line-' + series.key"
                :points="series.points"
                fill="none"
                :stroke="series.color"
                stroke-width="1.2"
                stroke-linejoin="round"
                stroke-linecap="round"
                :opacity="selectedTraits.length && !selectedTraits.includes(series.key) ? 0.15 : 1"
                style="transition: opacity 0.2s"
              />
              <circle
                v-for="(pt, pi) in series.coords"
                :key="'dot-' + series.key + '-' + pi"
                :cx="pt.x"
                :cy="pt.y"
                r="1.8"
                :fill="series.color"
                :opacity="selectedTraits.length && !selectedTraits.includes(series.key) ? 0.15 : 1"
                style="transition: opacity 0.2s"
              />
            </template>
          </svg>
          <p v-else class="toc-left__graph-empty">Complete more chapters to see trends.</p>
        </div>

        <!-- Trait selector bar -->
        <div class="toc-left__trait-bar">
          <div
            v-for="series in graphSeries"
            :key="'leg-' + series.key"
            class="toc-left__trait-segment"
            :class="{ 'is-active': selectedTraits.includes(series.key) }"
            :style="{ background: series.color }"
            @click="toggleTrait(series.key)"
          >
            <span class="toc-left__trait-label">{{ series.label }}</span>
          </div>
        </div>
      </div>

      <div class="toc-left__footer">ii</div>
      </div>
    </div>

    <!-- RIGHT PAGE -->
    <div class="story-page__page story-page__page--right" :style="pageStyle" @click="$emit('flip-forward')">
      <div class="toc-right">
      <h2 class="toc-right__title">Table of Contents</h2>

      <div v-if="dominantTrait" class="toc-right__trait-badge" :style="{ background: traitColor }">
        {{ dominantTrait }}
      </div>

      <div class="toc-right__list">
        <div
          v-for="(chapter, idx) in chapters"
          :key="chapter._id"
          class="toc-right__entry"
          @click="$emit('go-to-chapter', idx)"
        >
          <span class="toc-right__entry-number">{{ chapter.chapterNumber || idx + 1 }}.</span>
          <span class="toc-right__entry-title">{{ chapter.title || 'Untitled' }}</span>
          <span class="toc-right__entry-dots"></span>
          <span v-if="chapter.dominantTraitAtTime" class="toc-right__entry-trait" :style="{ background: traitColorFor(chapter.dominantTraitAtTime) }"></span>
          <span class="toc-right__entry-date">{{ formatDate(chapter.createdAt) }}</span>
        </div>
      </div>

      <div class="toc-right__footer">i</div>
      </div>
      <div v-if="chapters.length" class="story-page__click-hint story-page__click-hint--right">next ›</div>
    </div>

  </div>
</template>

<script>
import { getCharacter } from '@/utils/characterConfig'

const STAT_CONFIG = [
  { key: 'strength', label: 'Strength', color: '#e93d2f' },
  { key: 'leadership', label: 'Leadership', color: '#ff6b35' },
  { key: 'speed', label: 'Speed', color: '#ffbd05' },
  { key: 'creativity', label: 'Creativity', color: '#9b30ff' },
  { key: 'heart', label: 'Heart', color: '#0dab49' },
  { key: 'wisdom', label: 'Wisdom', color: '#1666ff' }
]

const DISC_CONFIG = [
  { key: 'strength', label: 'D', color: '#e93d2f' },
  { key: 'speed', label: 'I', color: '#ffbd05' },
  { key: 'heart', label: 'S', color: '#0dab49' },
  { key: 'wisdom', label: 'C', color: '#1666ff' }
]

const DISC_COLORS = {
  D: '#e93d2f',
  I: '#ffbd05',
  S: '#0dab49',
  C: '#1666ff'
}

export default {
  name: 'StoryTableOfContents',

  props: {
    chapters: {
      type: Array,
      default: () => []
    },
    profile: {
      type: Object,
      default: () => ({})
    },
    themeFiles: {
      type: Object,
      default: () => ({})
    },
    pageStyle: {
      type: Object,
      default: () => ({})
    },
    contentFadingIn: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      graphMode: 'stats',
      selectedTraits: [],
      svgWidth: 280,
      svgHeight: 160,
      graphPadLeft: 24,
      graphPadRight: 8,
      graphPadTop: 8,
      graphPadBottom: 14
    }
  },

  computed: {
    themeBackgrounds() {
      const theme = this.profile && this.profile.theme
      if (!theme || !this.themeFiles[theme]) return []
      return this.themeFiles[theme]
    },

    unlockedSet() {
      const theme = this.profile && this.profile.theme
      const raw = this.profile && this.profile.unlockedBackgrounds
      if (!raw || !theme) return new Set()
      const arr = (typeof raw.get === 'function' ? raw.get(theme) : raw[theme]) || []
      return new Set(arr)
    },

    themeCompletions() {
      const theme = this.profile && this.profile.theme
      const map = this.profile && this.profile.completionsPerTheme
      if (!theme || !map) return 0
      if (map instanceof Map) return map.get(theme) || 0
      return map[theme] || 0
    },

    earnedTokens() {
      return Math.floor(this.themeCompletions / 3)
    },

    availableUnlockTokens() {
      return Math.max(0, this.earnedTokens - this.unlockedSet.size)
    },

    canUnlock() {
      return this.availableUnlockTokens > 0
    },

    characterImage() {
      if (!this.profile || !this.dominantTrait) return ''
      const char = getCharacter(this.profile.theme, this.dominantTrait, this.profile.gender)
      return char.imagePath
    },

    dominantTrait() {
      if (!this.chapters || this.chapters.length === 0) return null
      const last = this.chapters[this.chapters.length - 1]
      return last.dominantTraitAtTime || null
    },

    traitColor() {
      return DISC_COLORS[this.dominantTrait] || '#888'
    },

    activeSeries() {
      return this.graphMode === 'disc' ? DISC_CONFIG : STAT_CONFIG
    },

    yRange() {
      const chapters = this.chapters
      if (chapters.length < 2) return { min: 0, max: 100 }

      let min = 100
      let max = 0
      this.activeSeries.forEach(s => {
        chapters.forEach(ch => {
          const val = Number((ch.statsAtTime || {})[s.key]) || 0
          if (val < min) min = val
          if (val > max) max = val
        })
      })

      // Add padding (10% of range, at least 5 points)
      const range = max - min || 10
      const pad = Math.max(5, Math.ceil(range * 0.1))
      min = Math.max(0, Math.floor(min - pad))
      max = Math.min(100, Math.ceil(max + pad))

      // Ensure a minimum visible range
      if (max - min < 10) {
        const mid = (max + min) / 2
        min = Math.max(0, Math.floor(mid - 5))
        max = Math.min(100, Math.ceil(mid + 5))
      }

      return { min, max }
    },

    graphSeries() {
      const chapters = this.chapters
      if (chapters.length < 2) return []

      const plotW = this.svgWidth - this.graphPadLeft - this.graphPadRight
      const plotH = this.svgHeight - this.graphPadTop - this.graphPadBottom
      const { min, max } = this.yRange
      const ySpan = max - min

      return this.activeSeries.map(s => {
        const coords = chapters.map((ch, i) => {
          const stats = ch.statsAtTime || {}
          const val = Math.min(100, Math.max(0, Number(stats[s.key]) || 0))
          return {
            x: this.graphPadLeft + (i / (chapters.length - 1)) * plotW,
            y: this.graphPadTop + plotH - ((val - min) / ySpan) * plotH
          }
        })

        return {
          key: s.key,
          label: s.label,
          color: s.color,
          coords,
          points: coords.map(p => `${p.x},${p.y}`).join(' ')
        }
      })
    },

    yTicks() {
      const plotH = this.svgHeight - this.graphPadTop - this.graphPadBottom
      const { min, max } = this.yRange
      const ySpan = max - min
      // Generate 3 ticks: bottom, middle, top
      const values = [min, Math.round((min + max) / 2), max]
      return values.map(v => ({
        value: v,
        y: this.graphPadTop + plotH - ((v - min) / ySpan) * plotH
      }))
    },

    xLabels() {
      const chapters = this.chapters
      if (chapters.length < 2) return []
      const plotW = this.svgWidth - this.graphPadLeft - this.graphPadRight
      const fmt = (d) => {
        const dt = new Date(d)
        return `${dt.getMonth() + 1}/${dt.getDate()}`
      }
      // Show at most 5 labels evenly spaced
      const max = Math.min(chapters.length, 5)
      const step = (chapters.length - 1) / (max - 1)
      const labels = []
      for (let j = 0; j < max; j++) {
        const i = Math.round(j * step)
        labels.push({
          text: fmt(chapters[i].createdAt),
          x: this.graphPadLeft + (i / (chapters.length - 1)) * plotW
        })
      }
      return labels
    }
  },

  methods: {
    toggleTrait(key) {
      const idx = this.selectedTraits.indexOf(key)
      if (idx >= 0) {
        this.selectedTraits.splice(idx, 1)
      } else {
        this.selectedTraits.push(key)
      }
    },


    traitColorFor(trait) {
      return DISC_COLORS[trait] || '#888'
    },

    formatDate(dateStr) {
      if (!dateStr) return ''
      const d = new Date(dateStr)
      const mo = d.getMonth() + 1
      const day = d.getDate()
      return `${mo}/${day}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

$paper-bg: #fffef8;
$paper-text: #2c3e50;
$border-light: #e8e4da;

// display:contents lets the two page divs participate in the parent's flex layout
.toc-spread {
  display: contents;
  font-family: $font-family;
  color: $paper-text;

  // Page shell styles (mirrored from parent since scoped CSS can't reach)
  .story-page__page {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: $paper-bg;
    position: relative;
    overflow: hidden;

    &--left {
      border-radius: 4px 0 0 4px;
      border-right: 1px solid rgba(0,0,0,0.12);
      background: linear-gradient(to right, #f0ede8, $paper-bg);
    }
    &--right {
      border-radius: 0 12px 12px 0;
      background: linear-gradient(to left, #f0ede8, $paper-bg);
      cursor: e-resize;
    }
  }

  .story-page__click-hint {
    position: absolute;
    bottom: 12px;
    font-size: 10px;
    color: rgba(0,0,0,0.18);
    font-style: italic;
    pointer-events: none;
    &--right { right: 12px; }
  }

  .story-page__page:hover .story-page__click-hint {
    color: rgba(0,0,0,0.35);
  }
}

/* ───────────────────── LEFT PAGE ───────────────────── */

.toc-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 18px 12px;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;

  &__row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  /* Background chooser */
  &__section-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin: 0 0 4px;
    color: #8a8475;
  }

  &__bg-chooser {
    flex: 1;
    min-width: 0;
  }

  &__bg-thumb {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    border: 2px solid $border-light;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f4f1ea;
    transition: border-color 0.2s;

    &:hover {
      border-color: #c5c0b4;
    }
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__bg-placeholder {
    color: #b8b1a4;
  }

  &__bg-placeholder-icon {
    width: 36px;
    height: 36px;
  }


  /* Sidekick placeholder */
  &__sidekick {
    flex: 1;
    min-width: 0;
  }

  &__sidekick-inner {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    background: #e4e1da;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #9e9889;
  }

  &__sidekick-icon {
    width: 28px;
    height: 28px;
  }

  &__sidekick-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  /* Character */
  &__character {
    flex: 1;
    min-width: 0;
  }

  &__character-inner {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    background: linear-gradient(135deg, #e8f0fe, #f0f4ff);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $border-light;
    box-sizing: border-box;
  }

  &__character-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
  }

  &__character-placeholder {
    font-size: 28px;
    font-weight: 700;
    color: #b8b1a4;
  }

  /* Vehicle placeholder */
  &__vehicle {
    flex: 1;
    min-width: 0;
  }

  &__vehicle-inner {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    background: #e4e1da;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #9e9889;
  }

  &__vehicle-icon {
    width: 28px;
    height: 28px;
  }

  &__vehicle-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  /* Placeholder rewards */
  &__placeholder-reward {
    flex: 1;
    min-width: 0;
  }

  &__placeholder-inner {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    background: #e4e1da;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b8b1a4;
  }

  &__placeholder-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  /* Graph section */
  &__graph-section {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    background: $paper-bg;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.08);
    padding: 8px 10px 0;
    overflow: hidden;
  }

  &__graph-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 14px;
    margin-bottom: 4px;
  }

  &__graph-toggle {
    display: flex;
    gap: 1px;
  }

  &__toggle-btn {
    border: none;
    background: none;
    box-shadow: none;
    outline: none;
    margin: 0;
    padding: 0 4px;
    font-family: $nunito-family;
    font-size: 9px;
    height: 14px;
    font-weight: 700;
    cursor: pointer;
    color: #b0a999;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    transition: color 0.15s;
    line-height: 1;
    -webkit-appearance: none;
    appearance: none;

    &.is-active {
      color: $paper-text;
      border-bottom: 1px solid $paper-text;
    }

    &:hover:not(.is-active) {
      color: #6b6459;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  &__graph-wrap {
    height: 200px;
  }

  &__graph-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  &__graph-xlabel,
  &__graph-ylabel {
    font-size: 8px;
    fill: #8a8475;
    font-family: $nunito-family;
  }

  &__graph-empty {
    font-size: 12px;
    color: #b0a999;
    text-align: center;
    padding-top: 32px;
    font-style: italic;
  }

  /* Trait selector bar */
  &__trait-bar {
    display: flex;
    align-items: flex-end;
    height: 24px;
    margin-top: 6px;
  }

  &__trait-segment {
    flex: 1;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: height 0.2s ease, border-radius 0.2s ease;

    &:first-child {
      border-radius: 3px 0 0 3px;
    }
    &:last-child {
      border-radius: 0 3px 3px 0;
    }

    &:hover {
      height: 22px;
    }

    &.is-active {
      height: 24px;
      border-radius: 3px 3px 0 0;
      z-index: 1;
    }
  }

  &__trait-label {
    font-family: $nunito-family;
    font-size: 8px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 18px;
    display: block;
  }

  &__footer {
    text-align: center;
    font-size: 11px;
    font-style: italic;
    color: #b0a999;
    margin-top: 8px;
    font-family: 'Georgia', serif;
  }
}

/* ───────────────────── RIGHT PAGE ───────────────────── */

.toc-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 28px 22px 12px;
  height: 100%;
  box-sizing: border-box;

  &__title {
    text-align: center;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin: 0 0 12px;
    color: $paper-text;
  }

  &__trait-badge {
    align-self: center;
    display: inline-block;
    padding: 3px 14px;
    border-radius: 12px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  &__list {
    flex: 1;
    overflow-y: auto;
  }

  &__entry {
    display: flex;
    align-items: baseline;
    padding: 7px 4px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.15s;

    &:hover {
      background: #f5f2ea;
    }
  }

  &__entry-number {
    flex-shrink: 0;
    width: 24px;
    font-family: 'Georgia', serif;
    font-size: 13px;
    font-weight: 700;
    color: #8a8475;
  }

  &__entry-title {
    flex-shrink: 0;
    font-family: $nunito-family;
    font-size: 13px;
    font-weight: 600;
    max-width: 45%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__entry-dots {
    flex: 1;
    margin: 0 6px;
    border-bottom: 1px dotted #c5c0b4;
    min-width: 16px;
    align-self: center;
    height: 0;
    position: relative;
    top: -2px;
  }

  &__entry-trait {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 6px;
  }

  &__entry-date {
    flex-shrink: 0;
    font-family: 'Georgia', serif;
    font-size: 11px;
    color: #8a8475;
  }

  &__footer {
    text-align: center;
    font-size: 11px;
    font-style: italic;
    color: #b0a999;
    margin-top: 12px;
    font-family: 'Georgia', serif;
  }
}

@media (max-width: 640px) {
  .toc-spread {
    .story-page__page--left {
      border-right: none;
      border-bottom: 1px solid rgba(0,0,0,0.12);
      border-radius: 12px 12px 0 0;
      height: auto !important;
      overflow: visible;
    }
    .story-page__page--right {
      border-radius: 0 0 12px 12px;
      height: auto !important;
      overflow: visible;
    }
  }
  .toc-left { overflow-y: visible; height: auto; }
  .toc-right { height: auto; }
  .toc-left__graph-wrap { min-height: 120px; }
}
</style>
