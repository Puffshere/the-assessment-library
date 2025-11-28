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

            <!-- Overall dominant trait (only in overall mode) -->
            <p v-if="!selectedResult && overallTopTraitTitle" class="overall-top-trait"
                :style="{ color: overallTopTraitColor }">
                <span class="overall-top-label">Overall Dominant Trait:</span><br />
                <span class="overall-top-name">{{ overallTopTraitTitle }}</span>
            </p>

            <!-- Custom Dropdown -->
            <div class="category-dropdown" v-if="!selectedResult">
                <button class="dropdown-button" @click="toggleDropdown" :style="{ backgroundColor: dropdownColor }">
                    {{ selectedCategoryLabel }}
                    <span class="arrow">▾</span>
                </button>

                <div v-if="dropdownOpen" class="dropdown-menu">
                    <div class="group">
                        <div class="top" @click="pickCategory('all')">All assessments</div>
                        <div class="group-label">Adult</div>
                        <div class="item" v-for="opt in adultOptions" :key="opt.value" @click="pickCategory(opt.value)">
                            {{ opt.label }}
                        </div>
                    </div>

                    <div class="group">
                        <div class="group-label">Kids</div>
                        <div class="item" v-for="opt in kidsOptions" :key="opt.value" @click="pickCategory(opt.value)">
                            {{ opt.label }}
                        </div>
                    </div>
                </div>
            </div>

            <button v-if="selectedResult" class="red" @click="$emit('clear-results')"
                aria-label="Clear selected results">
                Remove
            </button>
        </div>

        <!-- SCROLLABLE BODY -->
        <div class="panel-body">
            <!-- DETAIL VIEW (single assessment) -->
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
                    <button v-if="selectedResult && topTrait && conclusionHtml" class="conclusion-button"
                        :style="{ backgroundColor: topTraitColor }" @click="showConclusionModal = true">
                        Breakdown
                    </button>
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

            <!-- OVERALL VIEW -->
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
                    <p>
                        Assessments Started:
                        <span style="font-size: 24px; margin-left: 10px;">
                            {{ assessmentsStarted }}
                        </span>
                    </p>
                    <p>
                        Assessments Completed:
                        <span style="font-size: 24px; margin-left: 10px;">
                            {{ assessmentsCompleted }}
                        </span>
                    </p>
                </h6>
            </div>

            <div v-if="showConclusionModal && conclusionHtml" class="conclusion-modal-backdrop"
                @click.self="closeConclusionModal">
                <div class="conclusion-modal">
                    <button class="conclusion-modal-close red" @click="closeConclusionModal">close</button>

                    <h3 class="conclusion-modal-title">Conclusion</h3>

                    <p v-if="conclusionTimeline" style="font-weight: 700;" class="chapter" v-html="conclusionTimeline">
                    </p>

                    <div class="line" :class="topTraitLineClass"></div>

                    <p v-html="conclusionHtml"></p>
                </div>
            </div>


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
    data() {
        return {
            selectedCategoryFilter: 'all',
            dropdownOpen: false,
            showConclusionModal: false,
            conclusionTimelineData: '',
            conclusionHtmlData: ''
        }
    },
    computed: {
        styleText() {
            const base = STYLE_TEXT
            const src = this.selectedResult || {}

            const build = trait => {
                const titleKey = `${trait}styleTitle`
                const descKey = `${trait}styleDescription`

                const title = src[titleKey]
                const description = src[descKey]

                return {
                    title: title || base[trait].title,
                    description: description || base[trait].description
                }
            }

            return {
                D: build('D'),
                I: build('I'),
                S: build('S'),
                C: build('C')
            }
        },
        dropdownColor() {
            return this.hasData ? this.overallTopTraitColor : '#86d6ee'
        },
        selectedCategoryLabel() {
            const map = {
                all: 'All assessments',
                'shelf:Adult': 'Adult',
                'shelf:Kids': 'Kids',
                'sub:Relationships': 'Relationships',
                'sub:Career': 'Career',
                'sub:Sports': 'Sports',
                'sub:School': 'School',
                'sub:Playground': 'Playground',
                'sub:Personal Growth': 'Personal Growth',
                'sub:Life Skills': 'Life Skills'
            }
            return map[this.selectedCategoryFilter] || 'Choose category'
        },
        adultOptions() {
            return [
                { value: 'shelf:Adult', label: 'All Adult assessments' },
                { value: 'sub:Relationships', label: 'Relationships' },
                { value: 'sub:Career', label: 'Career' },
                { value: 'sub:School', label: 'School' },
                { value: 'sub:Personal Growth', label: 'Personal Growth' },
                { value: 'sub:Life Skills', label: 'Life Skills' }
            ]
        },
        kidsOptions() {
            return [
                { value: 'shelf:Kids', label: 'All Kids assessments' },
                { value: 'sub:Relationships', label: 'Relationships' },
                { value: 'sub:School', label: 'School' },
                { value: 'sub:Playground', label: 'Playground' }
            ]
        },
        overallTopTrait() {
            const b = this.overallBreakdown
            if (!b) return null

            const entries = Object.entries(b).filter(
                ([trait, value]) => ['D', 'I', 'S', 'C'].includes(trait) && typeof value === 'number'
            )
            if (!entries.length) return null
            entries.sort((a, b) => b[1] - a[1])
            return entries[0][0]
        },
        overallTopTraitTitle() {
            return this.overallTopTrait ? this.styleText[this.overallTopTrait].title : ''
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
            const base = this.sessions.filter(s => s.status === 'completed')

            const filter = this.selectedCategoryFilter

            if (!filter || filter === 'all') {
                return base
            }

            const parts = filter.split(':')
            if (parts.length !== 2) {
                return base
            }

            const [type, name] = parts

            return base.filter(s => {
                const cat = s.category || {}

                if (type === 'shelf') {
                    return cat.shelf === name
                }

                if (type === 'sub') {
                    return Array.isArray(cat.subcategories) && cat.subcategories.includes(name)
                }

                return true
            })
        },
        selectedBreakdown() {
            if (!this.selectedResult) return null
            const s = this.selectedResult
            return s.scoreBreakdown || (s.score && s.score.breakdown) || null
        },
        overallBreakdown() {
            const completed = this.completedSessions
            if (!completed.length) return null

            const totals = { D: 0, I: 0, S: 0, C: 0 }

            completed.forEach(s => {
                const b = s.scoreBreakdown || (s.score && s.score.breakdown) || null
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
            return this.selectedResult ? this.selectedBreakdown : this.overallBreakdown
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
                ([trait, value]) => ['D', 'I', 'S', 'C'].includes(trait) && typeof value === 'number'
            )
            if (!entries.length) return null
            entries.sort((a, b) => b[1] - a[1])
            return entries[0][0]
        },
        primaryStyleTitle() {
            return this.topTrait ? this.styleText[this.topTrait].title : ''
        },
        primaryStyleDescription() {
            return this.topTrait ? this.styleText[this.topTrait].description : ''
        },

        /* ---------- NEW COMPUTED PROPS FOR MODAL ---------- */

        // Color for the button + line based on the user's topTrait
        topTraitColor() {
            switch (this.topTrait) {
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

        // Class used on the colored line inside the modal
        topTraitLineClass() {
            switch (this.topTrait) {
                case 'D':
                    return 'dominance'
                case 'I':
                    return 'influence'
                case 'S':
                    return 'steadiness'
                case 'C':
                    return 'conscientiousness'
                default:
                    return ''
            }
        },

        conclusionTimeline() {
            // 1) If selectedResult already has timeline, use it.
            if (this.selectedResult && this.selectedResult.timeline) {
                return this.selectedResult.timeline
            }
            // 2) Otherwise, use the value we fetched from the assessment
            return this.conclusionTimelineData
        },

        conclusionHtml() {
            // 1) If selectedResult already contains conclusion fields, use those
            if (this.selectedResult && this.topTrait) {
                const s = this.selectedResult

                switch (this.topTrait) {
                    case 'D':
                        if (s.dominanceConclusion) return s.dominanceConclusion
                        break
                    case 'I':
                        if (s.influenceConclusion) return s.influenceConclusion
                        break
                    case 'S':
                        if (s.steadinessConclusion) return s.steadinessConclusion
                        break
                    case 'C':
                        if (s.conscientiousnessConclusion) return s.conscientiousnessConclusion
                        break
                }
            }

            // 2) Fallback: use the value we fetched from the assessment
            return this.conclusionHtmlData
        }
    },
    watch: {
        selectedResult: {
            immediate: true,
            handler(newVal) {
                // Clear when nothing selected
                if (!newVal) {
                    this.conclusionTimelineData = ''
                    this.conclusionHtmlData = ''
                    return
                }
                // Fetch conclusion for this session
                this.fetchConclusionForSession(newVal)
            }
        }
    },
    methods: {
        async fetchConclusionForSession(session) {
            try {
                // Adjust these fallbacks to match your actual session shape
                const slug =
                    session.assessmentSlug ||
                    (session.assessment && session.assessment.slug)

                if (!slug) {
                    console.warn('No assessmentSlug found on session', session)
                    return
                }

                const res = await this.$axios.$get(`/api/assessments/${slug}`)
                const assessment = res.assessment || res

                if (!assessment || !Array.isArray(assessment.questions) || !assessment.questions.length) {
                    console.warn('Assessment has no questions', assessment)
                    return
                }

                // In _slug.vue you use questions[currentQuestion - 1] for the final page.
                // Here we’ll assume the last question contains the conclusions.
                const lastQuestion = assessment.questions[assessment.questions.length - 1]

                this.conclusionTimelineData = lastQuestion.timeline || ''

                const trait = this.topTrait
                let html = ''

                switch (trait) {
                    case 'D':
                        html = lastQuestion.dominanceConclusion || ''
                        break
                    case 'I':
                        html = lastQuestion.influenceConclusion || ''
                        break
                    case 'S':
                        html = lastQuestion.steadinessConclusion || ''
                        break
                    case 'C':
                        html = lastQuestion.conscientiousnessConclusion || ''
                        break
                }

                this.conclusionHtmlData = html
            } catch (err) {
                console.error('Error fetching conclusion for session', err)
            }
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen
        },
        pickCategory(val) {
            this.selectedCategoryFilter = val
            this.dropdownOpen = false
        },

        // NEW: closes the conclusion modal
        closeConclusionModal() {
            this.showConclusionModal = false
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
    margin-bottom: 0;
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

.conclusion-button {
    margin-top: 16px;
    padding: 10px 18px;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    transition: transform 0.1s ease, box-shadow 0.1s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: none;
    }

    &:focus {
        transform: scale(0.8);
    }
}

.conclusion-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.conclusion-modal {
    background: #ffffff;
    max-width: 700px;
    width: 90%;
    border-radius: 10px;
    padding: 24px 28px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
}

.conclusion-modal-title {
    margin-top: 0;
    margin-bottom: 12px;
    color: #12304d;
}

.conclusion-modal-close {
    margin-top: 20px;
    margin-right: 20px;
}

.line {
    height: 4px;
    border-radius: 2px;
    margin: 10px 0 18px;
}

.line.dominance {
    background: #f44336;
}

.line.influence {
    background: #ffbd05;
}

.line.steadiness {
    background: #0dab49;
}

.line.conscientiousness {
    background: #1666ff;
}

.red {
    position: absolute;
    top: 6px;
    right: 6px;
    transition: background 0.2s ease;
    z-index: 1;
}

.results-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    h5 {
        margin-top: 15px;
        margin-bottom: 0;
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
    background: #f8f8f8;
    padding: 0px 24px 40px 24px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px #12304d8c;

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

.category-dropdown {
    position: relative;
    margin-top: 12px;

    .dropdown-button {
        border-radius: 6px;
        padding: 8px 16px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        width: 180px;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            border-color: #888;
        }
    }

    .arrow {
        font-size: 12px;
    }

    .dropdown-menu {
        position: absolute;
        top: 42px;
        left: 0;
        width: 220px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 6px;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.336);
        z-index: 1000;
        padding: 6px 0;
    }

    .group {
        margin-bottom: 6px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .group-label {
        font-weight: 700;
        background: #00679b;
        padding: 6px 12px;
        font-size: 13px;
        color: #fff;
    }

    .top {
        background: #e93f2f;
        color: #fff;
        padding: 6px 12px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;

        &:hover {
            background: #e93f2fb4;
        }
    }

    .item {
        padding: 6px 12px;
        cursor: pointer;
        font-size: 14px;

        &:hover {
            background: #f3f3f3;
        }
    }
}

@media (max-width: 768px) {
    .panel-wide {
        height: auto;
    }

    .panel-body {
        overflow-y: visible;
        max-height: none;
        padding-right: 0;
    }

    .chart {
        padding-top: 0px !important;
        height: 150px !important;
        margin-top: 20px;
    }

    .chart-col {
        flex: 0 0 130px;
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

    .conclusion-modal {
        position: relative;

        .conclusion-modal-close {
            position: absolute;
            margin-top: 0px;
            margin-right: 0px;
            right: 16px;
            top: 16px;
        }

        .conclusion-modal-title {
            margin-top: 50px;
        }
    }

    .red {
        position: relative;
        top: 6px;
        right: 6px;
        transition: background 0.2s ease;
        z-index: 1;
        margin-bottom: 25px;
    }
}
</style>