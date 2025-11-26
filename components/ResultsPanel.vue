<template>
    <div class="panel panel-wide">
        <div class="results-header">
            <h2 class="panel-title">
                <template v-if="selectedResult">
                    Results for {{ selectedResult.assessmentTitle }}
                </template>
                <template v-else>
                    Overall Totals
                </template>
            </h2>

            <p v-if="!selectedResult && overallTopTraitTitle" class="overall-top-trait"
                :style="{ color: overallTopTraitColor }">
                <span class="overall-top-label">Overall Dominant Trait:</span><br />
                <span class="overall-top-name">{{ overallTopTraitTitle }}</span>
            </p>

            <button v-if="selectedResult" class="red" @click="$emit('clear-results')"
                aria-label="Clear selected results">
                Remove
            </button>
        </div>

        <div v-if="selectedResult" class="results-layout">
            <div class="chart-col">
                <div class="chart" v-if="hasData">
                    <div class="bar" :style="{ height: dPercent + '%', backgroundColor: '#f44336' }"
                        :title="'D: ' + dPercent.toFixed(1) + '%'">
                        <div class="label">D</div>
                    </div>
                    <div class="bar" :style="{ height: iPercent + '%', backgroundColor: '#ffbd05' }"
                        :title="'I: ' + iPercent.toFixed(1) + '%'">
                        <div class="label">I</div>
                    </div>
                    <div class="bar" :style="{ height: sPercent + '%', backgroundColor: '#0dab49' }"
                        :title="'S: ' + sPercent.toFixed(1) + '%'">
                        <div class="label">S</div>
                    </div>
                    <div class="bar" :style="{ height: cPercent + '%', backgroundColor: '#1666ff' }"
                        :title="'C: ' + cPercent.toFixed(1) + '%'">
                        <div class="label">C</div>
                    </div>
                </div>
                <p v-else class="no-data">
                    No DISC breakdown available for this assessment yet.
                </p>
            </div>

            <div class="text-col">
                <h5>These are your results.</h5>
                <hr class="shortLine top" />
                <ul v-if="hasData">
                    <li>This is your D percentage: {{ dPercent.toFixed(1) }}</li>
                    <li>This is your I percentage: {{ iPercent.toFixed(1) }}</li>
                    <li>This is your S percentage: {{ sPercent.toFixed(1) }}</li>
                    <li>This is your C percentage: {{ cPercent.toFixed(1) }}</li>
                </ul>

                <h5 class="mt-16">Your primary style</h5>
                <hr class="shortLine bottom" />
                <p v-if="primaryStyleTitle" class="type">
                    <strong>{{ primaryStyleTitle }}</strong>
                    {{ primaryStyleDescription }}
                </p>
            </div>
        </div>

        <div v-else class="overall-layout">
            <div v-if="hasData" class="overall-chart">
                <div class="chart">
                    <div class="bar" :style="{ height: dPercent + '%', backgroundColor: '#f44336' }"
                        :title="'D: ' + dPercent.toFixed(1) + '%'">
                        <div class="value">{{ dPercent.toFixed(1) }}%</div>
                        <div class="label">D</div>
                    </div>
                    <div class="bar" :style="{ height: iPercent + '%', backgroundColor: '#ffbd05' }"
                        :title="'I: ' + iPercent.toFixed(1) + '%'">
                        <div class="value">{{ iPercent.toFixed(1) }}%</div>
                        <div class="label">I</div>
                    </div>
                    <div class="bar" :style="{ height: sPercent + '%', backgroundColor: '#0dab49' }"
                        :title="'S: ' + sPercent.toFixed(1) + '%'">
                        <div class="value">{{ sPercent.toFixed(1) }}%</div>
                        <div class="label">S</div>
                    </div>
                    <div class="bar" :style="{ height: cPercent + '%', backgroundColor: '#1666ff' }"
                        :title="'C: ' + cPercent.toFixed(1) + '%'">
                        <div class="value">{{ cPercent.toFixed(1) }}%</div>
                        <div class="label">C</div>
                    </div>
                </div>
            </div>
            <p v-else class="no-data">
                You don’t have any completed assessments with DISC results yet.
            </p>

            <h6 class="overall-meta">
                <p>Assessments Completed: {{ assessmentsCompleted }}</p>
                <p>Assessments Started: {{ assessmentsStarted }}</p>
            </h6>
        </div>
    </div>
</template>

<script>
const STYLE_TEXT = {
    D: {
        title: 'Dominance (D)',
        description: 'You are direct, decisive, and results-oriented.'
    },
    I: {
        title: 'Influence (I)',
        description: 'You are outgoing, persuasive, and people-oriented.'
    },
    S: {
        title: 'Steadiness (S)',
        description: 'You are patient, reliable, and supportive.'
    },
    C: {
        title: 'Conscientiousness (C)',
        description: 'You are detail-oriented, analytical, and precise.'
    }
}

export default {
    name: 'ResultsPanel',
    props: {
        selectedResult: {
            type: Object,
            default: null
        },
        sessions: {
            type: Array,
            default: () => []
        },
        assessmentsStarted: {
            type: Number,
            default: 0
        },
        assessmentsCompleted: {
            type: Number,
            default: 0
        }
    },
    computed: {
        overallTopTrait() {
            const b = this.overallBreakdown
            if (!b) return null

            const entries = Object.entries(b).filter(
                ([trait, value]) =>
                    ['D', 'I', 'S', 'C'].includes(trait) &&
                    typeof value === 'number'
            )
            if (!entries.length) return null
            entries.sort((a, b) => b[1] - a[1])
            return entries[0][0]
        },
        overallTopTraitTitle() {
            return this.overallTopTrait ? STYLE_TEXT[this.overallTopTrait].title : ''
        },
        overallTopTraitColor() {
            switch (this.overallTopTrait) {
                case 'D':
                    return '#f44336'
                case 'I':
                    return '#ffbd05'
                case 'S':
                    return '#0dab49'
                case 'C':
                    return '#1666ff'
                default:
                    return '#143180'
            }
        },
        completedSessions() {
            return this.sessions.filter(s => s.status === 'completed')
        },
        selectedBreakdown() {
            if (!this.selectedResult) return null
            const s = this.selectedResult
            return (
                s.scoreBreakdown ||
                (s.score && s.score.breakdown) ||
                null
            )
        },
        overallBreakdown() {
            const completed = this.completedSessions
            if (!completed.length) return null

            const totals = { D: 0, I: 0, S: 0, C: 0 }

            completed.forEach(s => {
                const b =
                    s.scoreBreakdown ||
                    (s.score && s.score.breakdown) ||
                    null

                if (!b) return

                    ;['D', 'I', 'S', 'C'].forEach(trait => {
                        const v = b[trait]
                        if (typeof v === 'number' && !isNaN(v)) {
                            totals[trait] += v
                        }
                    })
            })

            const grandTotal = totals.D + totals.I + totals.S + totals.C
            if (!grandTotal) return null

            return {
                D: (totals.D / grandTotal) * 100,
                I: (totals.I / grandTotal) * 100,
                S: (totals.S / grandTotal) * 100,
                C: (totals.C / grandTotal) * 100
            }
        },
        displayBreakdown() {
            return this.selectedResult
                ? this.selectedBreakdown
                : this.overallBreakdown
        },
        hasData() {
            return !!this.displayBreakdown
        },
        dPercent() {
            const b = this.displayBreakdown
            return b && typeof b.D === 'number' ? b.D : 0
        },
        iPercent() {
            const b = this.displayBreakdown
            return b && typeof b.I === 'number' ? b.I : 0
        },
        sPercent() {
            const b = this.displayBreakdown
            return b && typeof b.S === 'number' ? b.S : 0
        },
        cPercent() {
            const b = this.displayBreakdown
            return b && typeof b.C === 'number' ? b.C : 0
        },
        topTrait() {
            const b = this.selectedBreakdown
            if (!b) return null

            const entries = Object.entries(b).filter(
                ([trait, value]) =>
                    ['D', 'I', 'S', 'C'].includes(trait) &&
                    typeof value === 'number'
            )
            if (!entries.length) return null
            entries.sort((a, b) => b[1] - a[1])
            return entries[0][0]
        },
        primaryStyleTitle() {
            return this.topTrait ? STYLE_TEXT[this.topTrait].title : ''
        },
        primaryStyleDescription() {
            return this.topTrait ? STYLE_TEXT[this.topTrait].description : ''
        }
    }
}
</script>

<style scoped lang="scss">
.panel-wide {
    flex: 0 0 100%;
    max-width: 100%;
    height: 450px !important;
    display: flex;
    flex-direction: column;
    position: relative;
}

.results-header {
    position: relative;
    margin-bottom: 16px;
    min-height: 50px;

    .overall-top-trait {
        margin-top: 8px;
    }

    .overall-top-label {
        color: #12304d;
    }

    .overall-top-name {
        font-size: 32px;
        line-height: 1.1;
    }
}

.red {
    position: absolute;
    top: 6px;
    right: 6px;
    transition: background 0.2s ease;
    z-index: 1;

    &:hover {
        background: #ddd;
    }
}

.results-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    h5 {
        margin-top: 15px;
    }
}

.chart-col {
    flex: 0 0 260px;
}

.text-col {
    flex: 1 1 260px;
}

.chart {
    display: flex;
    align-items: flex-end;
    gap: 12px;
    height: 180px;
    padding-bottom: 40px;

    .bar {
        flex: 1 1 0;
        border-radius: 6px 6px 0 0;
        position: relative;
    }

    .label {
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 600;
    }

    .value {
        position: absolute;
        top: -22px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        font-weight: 600;
    }
}

.overall-layout {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .overall-chart {
        width: 60%;
        max-width: 420px;

        .chart {
            height: 300px;
        }
    }

    .overall-meta {
        text-align: right;
        position: absolute;
        top: 0;
        right: 50px;
    }

    .no-data {
        font-size: 14px;
        color: #555;
        text-align: center;
    }
}

@media (max-width: 768px) {
    .panel-wide {
        height: auto;
    }

    .chart {
        height: 150px !important;
    }

    .results-layout {
        flex-direction: column;
    }

    .overall-layout {
        align-items: stretch;
        margin-bottom: -30px;

        .overall-chart {
            width: 100%;
            max-width: none;
        }

        .overall-meta {
            position: static;
            text-align: left;
            margin-top: 12px;
        }
    }
}
</style>