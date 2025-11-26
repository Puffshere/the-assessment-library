<template>
    <section class="dashboard">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Your Library Dashboard</h1>
                    <h4>
                        See your assessments, scores, and available credits in one place.
                    </h4>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="container">
                <div v-if="loading" class="status-block">
                    Loading your dashboard...
                </div>

                <div v-else-if="error" class="status-block error">
                    {{ error }}
                </div>
                <div v-else class="grid">
                    <results-panel :selected-result="selectedResult" :sessions="dashboard.sessions"
                        :assessments-started="dashboard.sessions.length"
                        :assessments-completed="completedSessions.length" @clear-results="selectedResult = null" />

                    <!-- ACCOUNT OVERVIEW -->
                    <div class="panel">
                        <h2 class="panel-title">Account Overview</h2>
                        <p class="user-name">
                            <strong>{{ dashboard.user.name || dashboard.user.email }}</strong>
                        </p>
                        <p class="user-email">
                            {{ dashboard.user.email }}
                        </p>

                        <div class="credits-card">
                            <p class="credits-label">Available Credits</p>
                            <p class="credits-value">
                                {{ dashboard.user.creditsBalance }}
                            </p>
                            <button class="blue small">
                                Purchase More Credits
                            </button>
                        </div>
                    </div>

                    <!-- SESSIONS -->
                    <div class="panel panel-assessments" @wheel.prevent="onAssessmentsWheel">
                        <h2 class="panel-title">Your Assessments</h2>

                        <div v-if="!dashboard.sessions.length" class="empty-state">
                            <p>You haven’t started any assessments yet.</p>
                            <p>
                                When you check out a book from the Library and begin an
                                assessment, it will show up here.
                            </p>
                        </div>

                        <!-- Scrollable list area -->
                        <div v-else class="sessions scroll-area">
                            <!-- NOT STARTED -->
                            <div v-if="notStartedSessions.length" class="section-block">
                                <h3 style="color: #e93d2f;">Ready to Begin</h3>
                                <hr />
                                <ul>
                                    <li v-for="s in notStartedSessions" :key="s.id" class="session-row">
                                        <div class="session-row-top">
                                            <div class="session-main">
                                                <div class="session-title">
                                                    {{ s.assessmentTitle }}
                                                </div>
                                                <div class="session-meta">
                                                    Added:
                                                    <span>{{ formatDate(s.createdAt || s.startedAt) }}</span>
                                                </div>
                                            </div>
                                            <div class="session-actions">
                                                <button class="blue small" @click="goToSession(s)">
                                                    Start
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- IN PROGRESS -->
                            <div v-if="inProgressSessions.length" class="section-block">
                                <h3 style="color: #e93d2f;">In Progress</h3>
                                <hr />
                                <ul>
                                    <li v-for="s in inProgressSessions" :key="s.id" class="session-row"
                                        :class="{ 'has-progress': hasProgress(s) }">
                                        <div class="session-row-top">
                                            <div class="session-main">
                                                <div class="session-title">
                                                    {{ s.assessmentTitle }}
                                                </div>
                                                <div class="session-meta">
                                                    Started:
                                                    <span>{{ formatDate(s.startedAt) }}</span>
                                                </div>
                                            </div>
                                            <div class="session-actions">
                                                <button class="outline small light" @click="goToSession(s)">
                                                    Resume
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="hasProgress(s)" class="session-progress">
                                            <div class="progress-bar">
                                                <div class="progress-bar-inner" :style="getProgressStyle(s)"></div>
                                            </div>
                                            <div class="progress-label">
                                                {{ getProgressLabel(s) }}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- COMPLETED -->
                            <div v-if="completedSessions.length" class="section-block">
                                <h3 style="color: #e93d2f;">Completed</h3>
                                <hr />
                                <ul>
                                    <li v-for="s in completedSessions" :key="s.id" class="session-row">
                                        <div class="session-row-top">
                                            <div class="session-main">
                                                <div class="session-title">
                                                    {{ s.assessmentTitle }}
                                                </div>
                                                <div class="session-meta">
                                                    <span v-if="getTopTrait(s)" class="score-pill"
                                                        :style="{ backgroundColor: getTraitColor(s), color: '#fff', borderRadius: '5px', padding: '1px 8px', maxHeight: '20px', marginLeft: '0px', marginRight: '10px' }">
                                                        {{ getTopTrait(s) }}
                                                    </span>
                                                    Completed:
                                                    <span>{{ formatDate(s.completedAt) }}</span>
                                                </div>
                                            </div>
                                            <div class="session-actions">
                                                <button class="outline small green" @click="viewResults(s)">
                                                    View Results
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div v-if="
                                !notStartedSessions.length &&
                                !inProgressSessions.length &&
                                !completedSessions.length
                            " class="empty-state">
                                <p>
                                    Assessments found, but none are in-progress or completed yet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold />
    </section>
</template>

<script>
export default {
    middleware: ['auth'],

    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer'),
        'results-panel': () => import('@/components/ResultsPanel.vue')
    },
    data() {
        return {
            loading: true,
            error: null,
            selectedResult: null,
            DstyleTitle: 'Dominance (D)',
            DstyleDescription: 'You are direct, decisive, and results-oriented.',
            IstyleTitle: 'Influence (I)',
            IstyleDescription: 'You are outgoing, persuasive, and people-oriented.',
            SstyleTitle: 'Steadiness (S)',
            SstyleDescription: 'You are patient, reliable, and supportive.',
            CstyleTitle: 'Conscientiousness (C)',
            CstyleDescription: 'You are detail-oriented, analytical, and precise.',
            dashboard: {
                user: {
                    name: '',
                    email: '',
                    creditsBalance: 0
                },
                sessions: []
            }
        }
    },
    computed: {
        notStartedSessions() {
            return this.dashboard.sessions.filter(
                s =>
                    s.status === 'not_started' ||
                    (!s.startedAt && s.status !== 'completed')
            )
        },
        inProgressSessions() {
            return this.dashboard.sessions.filter(
                s => s.status === 'in_progress' && s.startedAt
            )
        },
        completedSessions() {
            return this.dashboard.sessions.filter(s => s.status === 'completed')
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
        DPercentage() {
            const b = this.selectedBreakdown
            return b && typeof b.D === 'number' ? b.D : 0
        },
        IPercentage() {
            const b = this.selectedBreakdown
            return b && typeof b.I === 'number' ? b.I : 0
        },
        SPercentage() {
            const b = this.selectedBreakdown
            return b && typeof b.S === 'number' ? b.S : 0
        },
        CPercentage() {
            const b = this.selectedBreakdown
            return b && typeof b.C === 'number' ? b.C : 0
        },
        topScore() {
            if (!this.selectedBreakdown) return null
            const entries = Object.entries(this.selectedBreakdown).filter(
                ([trait, value]) =>
                    ['D', 'I', 'S', 'C'].includes(trait) &&
                    typeof value === 'number'
            )
            if (!entries.length) return null
            entries.sort((a, b) => b[1] - a[1])
            return entries[0][0]
        },
        styleTitle() {
            switch (this.topScore) {
                case 'D':
                    return this.DstyleTitle
                case 'I':
                    return this.IstyleTitle
                case 'S':
                    return this.SstyleTitle
                case 'C':
                    return this.CstyleTitle
                default:
                    return ''
            }
        },
        styleDescription() {
            switch (this.topScore) {
                case 'D':
                    return this.DstyleDescription
                case 'I':
                    return this.IstyleDescription
                case 'S':
                    return this.SstyleDescription
                case 'C':
                    return this.CstyleDescription
                default:
                    return ''
            }
        }
    },
    async mounted() {
        this.loading = true
        this.error = null

        try {
            const res = await this.$axios.$get('/api/dashboard')
            this.dashboard = res
        } catch (err) {
            console.error('Dashboard load error:', err)
            this.error =
                (err.response && err.response.data && err.response.data.message) ||
                'Failed to load your dashboard. Please try again.'
        } finally {
            this.loading = false
        }
    },
    methods: {
        formatDate(dateStr) {
            if (!dateStr) return '—'
            const d = new Date(dateStr)
            if (isNaN(d.getTime())) return '—'
            return d.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        },
        goToSession(session) {
            const TITLE_TO_SLUG = {
                "Shane's Day at the Park": 'shanes-day-at-the-park',
                "Allie's Professional Journey": 'allies-professional-journey',
                "Jessica's First Job": 'jessicas-first-job',
                "Roger's New Business": 'rogers-new-business'
            }

            const slug =
                session.assessmentSlug ||
                (session.assessment && session.assessment.slug) ||
                TITLE_TO_SLUG[session.assessmentTitle] ||
                null

            if (!slug) {
                alert('We could not find a route for this assessment yet.')
                console.warn('No route mapping for session', session)
                return
            }

            this.$router.push({
                path: `/library/${slug}`,
                query: { session: session.id || session._id }
            })
        },
        hasProgress(session) {
            return (
                typeof session.currentQuestionIndex === 'number' &&
                session.currentQuestionIndex >= 0
            )
        },
        getChapterProgress(session) {
            const totalChapters = 10
            const idx = Number(session.currentQuestionIndex) || 0

            const estimatedChapter =
                Math.floor((idx / Math.max(session.totalQuestions || 26, 1)) * totalChapters) +
                1

            const currentChapter = Math.min(
                totalChapters,
                Math.max(1, estimatedChapter)
            )
            const percent = (currentChapter / totalChapters) * 100

            return { currentChapter, totalChapters, percent }
        },
        getProgressLabel(session) {
            const { currentChapter, totalChapters } = this.getChapterProgress(
                session
            )
            return `Chapter ${currentChapter} of ${totalChapters}`
        },
        getProgressPercent(session) {
            return this.getChapterProgress(session).percent
        },
        getTopTrait(session) {
            const breakdown =
                session.scoreBreakdown ||
                (session.score && session.score.breakdown) ||
                null

            if (!breakdown) return null

            const entries = Object.entries(breakdown).filter(
                ([trait, value]) =>
                    ['D', 'I', 'S', 'C'].includes(trait) &&
                    typeof value === 'number'
            )

            if (!entries.length) return null

            entries.sort((a, b) => b[1] - a[1])
            return entries[0][0]
        },
        getTraitColor(session) {
            const top = this.getTopTrait(session)

            switch (top) {
                case 'D':
                    return '#e93d2f'
                case 'I':
                    return '#ffbd05'
                case 'S':
                    return '#0dab49'
                case 'C':
                    return '#1666ff'
                default:
                    return '#00A8FF'
            }
        },
        getProgressStyle(session) {
            return {
                width: this.getProgressPercent(session) + '%',
                '--progress-color': this.getTraitColor(session)
            }
        },

        viewResults(session) {
            this.selectedResult = session
        },
        onAssessmentsWheel(event) {
            const panel = event.currentTarget
            const list = panel.querySelector('.scroll-area')
            if (!list) return
            list.scrollTop += event.deltaY
        }
    },
    head() {
        return {
            title: 'Dashboard | The Assessment Library',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'View your Assessment Library dashboard, including credits, in-progress assessments, and completed scores.'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.dashboard {
    .header {
        text-align: center;
        padding: 40px 16px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;
        min-height: 160px;

        .logo {
            width: 270px;
            position: absolute;
            left: 80px;
            top: -25px;
        }

        &:after {
            background: linear-gradient(to right,
                    $color-d 25%,
                    $color-i 25%,
                    $color-i 50%,
                    $color-s 50%,
                    $color-s 75%,
                    $color-c 75%);
            position: absolute;
            content: '';
            height: 10px;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
        }

        h1 {
            margin-bottom: 12px;
        }

        h4 {
            margin-top: -4px;
            font-weight: 400;
            font-family: $nunito-family;
        }
    }

    .content {
        padding: 40px 16px 80px 16px;
    }

    .status-block {
        text-align: center;
        padding: 40px 0;
        font-size: 16px;

        &.error {
            color: #c00;
        }
    }

    .grid {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    .panel {
        flex: 1 1 320px;
        border-radius: 11px;
        border: 3px solid #025baf67;
        background: #fff;
        box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.15);
        padding: 24px;
    }

    .panel-assessments {
        flex: 1 1 320px;
        max-height: 386px;
        min-height: 386px;
        display: flex;
        flex-direction: column;

        .panel-title {
            flex: 0 0 auto;
            margin-bottom: 30px;
        }

        .scroll-area {
            flex: 1 1 auto;
            overflow-y: auto;
            padding-right: 8px;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
        }
    }

    .panel-title {
        font-size: 20px;
        margin-bottom: 16px;
    }

    .user-name {
        font-size: 18px;
        margin-bottom: 4px;
    }

    .user-email {
        font-size: 14px;
        margin-bottom: 16px;
        color: #555;
    }

    .credits-card {
        border-radius: 10px;
        background: #ebebeb;
        padding: 0px 16px 10px 16px;
        text-align: center;
        box-shadow: 4px 4px 8px #12304d8e;

        .credits-label {
            font-size: 24px;
            padding-top: 20px;
            margin-bottom: -20px;
        }

        .credits-value {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .small {
            font-size: 14px;
            padding: 6px 12px;
        }

        button {
            margin-bottom: 12px;
        }
    }

    .sessions {
        .section-block+.section-block {
            margin-top: 24px;
        }

        h3 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .session-row {
            padding: 10px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);

            &:last-child {
                border-bottom: none;
            }

            &.has-progress {
                padding-bottom: 12px;
            }
        }

        .session-row-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .session-main {
            flex: 1 1 auto;
        }

        .session-title {
            font-weight: 600;
            margin-bottom: 4px;
        }

        .session-meta {
            font-size: 13px;
            color: #555;

            span {
                margin-left: 4px;
            }

            .score-pill {
                display: inline-block;
                margin-left: 8px;
                padding: 2px 8px;
                border-radius: 999px;
                background: #eef5ff;
                font-size: 12px;
            }
        }

        .session-actions {
            margin-left: 16px;
            flex: 0 0 auto;

            .small {
                font-size: 13px;
                padding: 6px 10px;
            }
        }

        .session-progress {
            margin-top: 6px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .progress-bar {
            width: 170px;
            height: 6px;
            border-radius: 999px;
            background: #e4edf7;
            overflow: hidden;
        }

        .progress-bar-inner {
            height: 100%;
            border-radius: inherit;
            background-color: var(--progress-color, #00a8ff);
            transition: width 0.35s ease, background-color 0.2s ease;
        }

        .progress-label {
            font-size: 11px;
            margin-top: 2px;
            color: #143180;
        }
    }

    .empty-state {
        font-size: 14px;
        color: #555;

        p+p {
            margin-top: 6px;
        }
    }
}

@media (max-width: 768px) {
    .dashboard {
        .header {
            padding: 40px 16px 30px;

            .logo {
                position: relative;
                width: 300px;
                left: 0px;
                top: 0px;
                margin-bottom: -40px;
                margin-top: -50px;
            }
        }

        .grid {
            flex-direction: column;
        }

        .panel-assessments {
            max-height: none;
            min-height: auto;

            .panel-assessments .scroll-area {
                overflow-y: visible;
            }
        }
    }
}
</style>
