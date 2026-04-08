<template>
    <div class="kcc panel panel-wide">
        <!-- Locked state: no profile or no completed assessment -->
        <div v-if="!hasCharacter" class="kcc__locked">
            <!-- Left side: greeting + teaser -->
            <div class="kcc__locked-info">
                <p class="kcc__locked-greeting">Adventure awaits, {{ childName }}!</p>
                <p class="kcc__locked-teaser">Your stats will appear here after your first quest.</p>

                <div class="kcc__locked-bars">
                    <div v-for="n in 6" :key="n" class="kcc__locked-bar">
                        <div class="kcc__locked-bar-track"></div>
                    </div>
                </div>
            </div>

            <!-- Right side: glowing padlock -->
            <div class="kcc__locked-right">
                <div class="kcc__locked-glow">
                    <div class="kcc__locked-circle">
                        <svg class="kcc__locked-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>
                </div>
                <p class="kcc__locked-cta">Complete a story to unlock your character!</p>
            </div>
        </div>

        <!-- Character card -->
        <div v-else class="kcc__card">
            <!-- Left side: info + stats -->
            <div class="kcc__info">
                <p class="kcc__character-name">{{ characterName }}</p>
                <p class="kcc__disc-title" :style="{ color: discColor }">{{ discTitle }}</p>

                <div class="kcc__stats">
                    <div v-for="stat in statBars" :key="stat.key" class="kcc__stat">
                        <div class="kcc__stat-header">
                            <span class="kcc__stat-name">{{ stat.label }}</span>
                            <span class="kcc__stat-value">{{ stat.value }}</span>
                        </div>
                        <div class="kcc__stat-track">
                            <div class="kcc__stat-fill" :style="{ width: stat.value + '%', background: stat.color }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right side: character image -->
            <div class="kcc__image-wrap">
                <img :src="characterImage" :alt="characterName + ' character'" class="kcc__image" />
            </div>
        </div>
    </div>
</template>

<script>
import { getCharacter, deriveStats } from '@/utils/characterConfig'

const DISC_TITLES = {
    D: 'The Go-Getter',
    I: 'The Encourager',
    S: 'The Peacemaker',
    C: 'The Analyzer'
}

const DISC_COLORS = {
    D: '#e93d2f',
    I: '#ffbd05',
    S: '#0dab49',
    C: '#1666ff'
}

const STAT_COLORS = {
    strength: '#e93d2f',
    leadership: '#ff6b35',
    speed: '#ffbd05',
    creativity: '#9b30ff',
    heart: '#0dab49',
    wisdom: '#1666ff'
}

const STAT_LABELS = {
    strength: 'Strength',
    leadership: 'Leadership',
    speed: 'Speed',
    creativity: 'Creativity',
    heart: 'Heart',
    wisdom: 'Wisdom'
}

export default {
    name: 'KidsCharacterCard',

    props: {
        completedSessions: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        profile() {
            return this.$store.state.activeChildProfile
        },

        childName() {
            return (this.profile && this.profile.childName) || 'Hero'
        },

        hasCharacter() {
            return !!(this.completedSessions && this.completedSessions.length && this.liveDiscType)
        },

        liveDiscType() {
            // Derive dominant DISC type from completed sessions
            if (!this.completedSessions || !this.completedSessions.length) return null
            const totals = { D: 0, I: 0, S: 0, C: 0 }
            let count = 0
            for (const s of this.completedSessions) {
                const b = s.scoreBreakdown || (s.score && s.score.breakdown)
                if (!b) continue
                totals.D += Number(b.D) || 0
                totals.I += Number(b.I) || 0
                totals.S += Number(b.S) || 0
                totals.C += Number(b.C) || 0
                count++
            }
            if (!count) return null
            let dominant = 'D'
            for (const trait of ['I', 'S', 'C']) {
                if (totals[trait] > totals[dominant]) dominant = trait
            }
            return dominant
        },

        discType() {
            return this.liveDiscType
        },

        characterName() {
            if (!this.profile) return ''
            return this.profile.characterName || this.profile.characterCustomName || this.profile.childName || ''
        },

        discTitle() {
            return DISC_TITLES[this.discType] || ''
        },

        discColor() {
            return DISC_COLORS[this.discType] || '#fff'
        },

        characterImage() {
            if (!this.profile || !this.discType) return ''
            const char = getCharacter(this.profile.theme, this.discType, this.profile.gender)
            return char.imagePath
        },

        discScores() {
            if (!this.completedSessions || !this.completedSessions.length) {
                return { D: 0, I: 0, S: 0, C: 0 }
            }

            let count = 0
            const totals = { D: 0, I: 0, S: 0, C: 0 }

            for (const s of this.completedSessions) {
                const b = s.scoreBreakdown || (s.score && s.score.breakdown)
                if (!b) continue
                totals.D += Number(b.D) || 0
                totals.I += Number(b.I) || 0
                totals.S += Number(b.S) || 0
                totals.C += Number(b.C) || 0
                count++
            }

            if (!count) return { D: 0, I: 0, S: 0, C: 0 }

            return {
                D: totals.D / count,
                I: totals.I / count,
                S: totals.S / count,
                C: totals.C / count
            }
        },

        stats() {
            return deriveStats(this.discScores)
        },

        statBars() {
            const order = ['strength', 'leadership', 'speed', 'creativity', 'heart', 'wisdom']
            return order.map(key => ({
                key,
                label: STAT_LABELS[key],
                value: Math.round(this.stats[key] || 0),
                color: STAT_COLORS[key]
            }))
        },

    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.kcc {
    overflow: hidden;
}

/* ── Locked state ──────────────────────────────────── */

.kcc__locked {
    display: flex;
    min-height: 400px;
    background: linear-gradient(135deg, #0f1623 0%, #1a2744 50%, #12304d 100%);
    border-radius: 12px;
    overflow: hidden;
}

/* Left side: greeting + ghost stat bars */

.kcc__locked-info {
    flex: 1;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
}

.kcc__locked-greeting {
    font-family: $font-family;
    font-size: 26px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
}

.kcc__locked-teaser {
    font-family: $nunito-family;
    font-size: 14px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.4);
    margin: 0 0 24px;
}

.kcc__locked-bars {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.kcc__locked-bar-track {
    height: 8px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.03) 100%
        );
        animation: kcc-shimmer 2s ease-in-out infinite;
    }
}

@keyframes kcc-shimmer {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* Right side: glowing padlock */

.kcc__locked-right {
    flex: 0 0 45%;
    max-width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    position: relative;
}

.kcc__locked-glow {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    &::before {
        content: '';
        position: absolute;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(22, 102, 255, 0.15) 0%, transparent 70%);
        animation: kcc-pulse 3s ease-in-out infinite;
    }
}

@keyframes kcc-pulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50%      { transform: scale(1.15); opacity: 1; }
}

.kcc__locked-circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    border: 2px solid rgba(22, 102, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 30px rgba(22, 102, 255, 0.15);
}

.kcc__locked-icon {
    width: 40px;
    height: 40px;
    color: rgba(22, 102, 255, 0.6);
    filter: drop-shadow(0 0 8px rgba(22, 102, 255, 0.4));
}

.kcc__locked-cta {
    font-family: $font-family;
    font-size: 15px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.55);
    text-align: center;
    margin: 0;
    max-width: 200px;
    line-height: 1.4;
}

/* ── Character card ────────────────────────────────── */

.kcc__card {
    display: flex;
    min-height: 400px;
    background: linear-gradient(135deg, #0f1623 0%, #1a2744 50%, #12304d 100%);
    border-radius: 12px;
    overflow: hidden;
}

/* ── Left side: info + stats ───────────────────────── */

.kcc__info {
    flex: 1;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
}

.kcc__character-name {
    font-family: $font-family;
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    margin: 0 0 4px;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
}

.kcc__disc-title {
    font-family: $nunito-family;
    font-size: 16px;
    font-weight: 800;
    margin: 0 0 24px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* ── Stat bars ─────────────────────────────────────── */

.kcc__stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.kcc__stat-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 4px;
}

.kcc__stat-name {
    font-family: $nunito-family;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.65);
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.kcc__stat-value {
    font-family: $nunito-family;
    font-size: 12px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.85);
}

.kcc__stat-track {
    height: 8px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    overflow: hidden;
}

.kcc__stat-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ── Right side: character image ───────────────────── */

.kcc__image-wrap {
    flex: 0 0 45%;
    max-width: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center bottom, rgba(0, 139, 103, 0.15) 0%, transparent 70%);
        pointer-events: none;
    }
}

.kcc__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    display: block;
}

/* ── Responsive ────────────────────────────────────── */

@media (max-width: 768px) {
    .kcc__locked {
        flex-direction: column;
        min-height: auto;
    }

    .kcc__locked-info {
        padding: 24px 20px 20px;
    }

    .kcc__locked-greeting {
        font-size: 22px;
    }

    .kcc__locked-right {
        flex: none;
        max-width: 100%;
        padding: 20px 24px 32px;
    }

    .kcc__card {
        flex-direction: column;
        min-height: auto;
    }

    .kcc__info {
        padding: 24px 20px 20px;
    }

    .kcc__character-name {
        font-size: 24px;
    }

    .kcc__disc-title {
        font-size: 14px;
        margin-bottom: 18px;
    }

    .kcc__image-wrap {
        flex: none;
        max-width: 100%;
        height: 280px;
    }

    .kcc__image {
        object-position: center bottom;
    }
}

@media (max-width: 480px) {
    .kcc__locked-info {
        padding: 20px 16px 16px;
    }

    .kcc__locked-greeting {
        font-size: 19px;
    }

    .kcc__info {
        padding: 20px 16px 16px;
    }

    .kcc__character-name {
        font-size: 20px;
    }

    .kcc__image-wrap {
        height: 220px;
    }
}


</style>
