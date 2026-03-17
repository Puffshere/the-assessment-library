<template>
    <section class="dashboard">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Your Library <span style="color: #e93d2f; text-shadow: 1px 1px 1px black;">Dashboard</span></h1>
                    <h4>See your assessments, scores, and available credits in one place.</h4>
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
                    <div class="results-wrapper">
                        <div class="results-tabs">
                            <div class="results-tab" :class="{ 'is-active': activeResultsView === 'first' }"
                                @click="activeResultsView = 'first'">
                                1st Person
                            </div>

                            <div class="results-tab" :class="{ 'is-active': activeResultsView === 'second' }"
                                @click="activeResultsView = 'second'">
                                3rd Person
                            </div>

                            <div class="results-tab" :class="{ 'is-active': activeResultsView === 'third' }"
                                @click="activeResultsView = 'third'">
                                <span class="tab-label-desktop">3rd Person Participants</span>
                                <span class="tab-label-mobile">Participants</span>
                            </div>

                            <div class="results-tab" :class="{ 'is-active': activeResultsView === 'fourth' }"
                                @click="openForOthersTab">
                                For Others
                                <span v-if="pendingForOthersCount && !forOthersSeen" class="tab-badge">
                                    {{ pendingForOthersCount }}
                                </span>
                            </div>
                        </div>

                        <!-- 1st person view -->
                        <results-panel v-if="activeResultsView === 'first'" :selected-result="selectedResult"
                            :sessions="dashboard.sessions" :assessments-started="dashboard.sessions.length"
                            :assessments-completed="completedSessions.length"
                            :credits-balance="dashboard.user.creditsBalance"
                            @clear-results="selectedResult = null"
                            @credits-deducted="dashboard.user.creditsBalance = $event" />

                        <!-- 3rd person views -->
                        <results-panel-third-person v-else-if="activeResultsView === 'second' || activeResultsView === 'third'"
                            :selected-result="selectedResult"
                            :active-view="activeResultsView"
                            :sessions="dashboard.sessions" :assessments-started="dashboard.sessions.length"
                            :assessments-completed="completedSessions.length"
                            :completed-sessions="completedSessions"
                            :credits-balance="dashboard.user.creditsBalance"
                            @clear-results="selectedResult = null"
                            @credits-deducted="dashboard.user.creditsBalance = $event" />

                        <!-- For Others view -->
                        <div v-else-if="activeResultsView === 'fourth'" class="panel panel-wide panel-for-others">

                            <!-- DETAIL VIEW -->
                            <template v-if="selectedForOthersResult">
                                <div class="results-header">
                                    <h2 class="panel-title">{{ selectedForOthersResult.assessmentTitle }}</h2>
                                    <button class="red" @click="selectedForOthersResult = null" aria-label="Back to list">Back</button>
                                </div>
                                <div class="panel-body">
                                    <div class="results-layout">
                                        <div class="chart-col">
                                            <div class="chart" v-if="forOthersBreakdown">
                                                <div class="bar" :style="{ height: forOthersPct('D') + '%', backgroundColor: '#f44336' }" :title="'D: ' + forOthersPct('D').toFixed(1) + '%'">
                                                    <div class="label">D</div>
                                                </div>
                                                <div class="bar" :style="{ height: forOthersPct('I') + '%', backgroundColor: '#ffbd05' }" :title="'I: ' + forOthersPct('I').toFixed(1) + '%'">
                                                    <div class="label">I</div>
                                                </div>
                                                <div class="bar" :style="{ height: forOthersPct('S') + '%', backgroundColor: '#0dab49' }" :title="'S: ' + forOthersPct('S').toFixed(1) + '%'">
                                                    <div class="label">S</div>
                                                </div>
                                                <div class="bar" :style="{ height: forOthersPct('C') + '%', backgroundColor: '#1666ff' }" :title="'C: ' + forOthersPct('C').toFixed(1) + '%'">
                                                    <div class="label">C</div>
                                                </div>
                                            </div>
                                            <p v-else class="no-data">No score breakdown available.</p>
                                        </div>
                                        <div class="text-col">
                                            <h5>These are the scores you believed <strong>{{ selectedForOthersResult.inviterName }}</strong> would have gotten.</h5>
                                            <hr class="shortLine top" />
                                            <ul v-if="forOthersBreakdown">
                                                <li>D: {{ forOthersPct('D').toFixed(1) }}%</li>
                                                <li>I: {{ forOthersPct('I').toFixed(1) }}%</li>
                                                <li>S: {{ forOthersPct('S').toFixed(1) }}%</li>
                                                <li>C: {{ forOthersPct('C').toFixed(1) }}%</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <!-- LIST VIEW -->
                            <template v-else>
                                <h2 class="panel-title">Assessments I've Taken for Others</h2>

                                <div v-if="!dashboard.pendingInvitations.length && !dashboard.thirdPersonSessions.length" class="empty-state">
                                    <p>You haven't taken any assessments on behalf of others yet.</p>
                                    <p>When someone invites you to take an assessment, it will appear here.</p>
                                </div>

                                <div v-else class="sessions scroll-area">
                                    <!-- Pending invitations (link not yet clicked — no session exists) -->
                                    <div v-if="dashboard.pendingInvitations.length" class="section-block">
                                        <h3 style="color: #e93d2f;">Awaiting Your Response</h3>
                                        <hr />
                                        <ul>
                                            <li v-for="inv in dashboard.pendingInvitations" :key="String(inv.invitationId)" class="session-row">
                                                <div class="session-row-top">
                                                    <div class="session-main">
                                                        <div class="session-title">{{ inv.assessmentTitle }}</div>
                                                        <div class="session-meta">
                                                            From: <strong>{{ inv.inviterName }}</strong>
                                                            <span v-if="inv.invitedAt" style="margin-left: 8px;">
                                                                &middot; Invited: {{ formatDate(inv.invitedAt) }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="session-actions">
                                                        <button class="blue small"
                                                            @click="startInvitedAssessment(inv)">
                                                            Start
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Sessions already started or completed -->
                                    <div v-if="dashboard.thirdPersonSessions.length" class="section-block">
                                        <h3 v-if="dashboard.pendingInvitations.length" style="color: #0dab49;">In Progress / Completed</h3>
                                        <hr v-if="dashboard.pendingInvitations.length" />
                                        <ul>
                                            <li v-for="s in dashboard.thirdPersonSessions" :key="s.id" class="session-row">
                                                <div class="session-row-top">
                                                    <div class="session-main">
                                                        <div class="session-title">{{ s.assessmentTitle }}</div>
                                                        <div class="session-meta">
                                                            For: <strong>{{ s.inviterName }}</strong>
                                                            <span v-if="s.completedAt" style="margin-left: 8px;">
                                                                &middot; Completed: {{ formatDate(s.completedAt) }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="session-actions">
                                                        <button v-if="s.status === 'completed' && s.scoreBreakdown"
                                                            class="outline small green"
                                                            @click="selectedForOthersResult = s">
                                                            View Results
                                                        </button>
                                                        <button v-else-if="s.status !== 'completed'"
                                                            class="outline small"
                                                            @click="resumeThirdPersonSession(s)">
                                                            Resume
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

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
                            <button class="blue small" @click="purchaseCredit">
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
        'results-panel': () => import('@/components/ResultsPanel.vue'),
        'results-panel-third-person': () => import('@/components/ResultsPanelThirdPerson.vue')
    },
    data() {
        return {
            loading: true,
            error: null,
            selectedResult: null,
            selectedForOthersResult: null,
            activeResultsView: 'first',
            forOthersSeen: false,
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
                sessions: [],
                thirdPersonSessions: [],
                pendingInvitations: [],
                pendingInviteCount: 0
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
        forOthersBreakdown() {
            const s = this.selectedForOthersResult
            if (!s) return null
            return s.scoreBreakdown || (s.score && s.score.breakdown) || null
        },
        pendingForOthersCount() {
            return typeof this.dashboard.pendingInviteCount === 'number'
                ? this.dashboard.pendingInviteCount
                : 0
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
        async purchaseCredit() {
            try {
                // This hits the Express route /credits/add-one (prefixed with /api by Nuxt)
                const res = await this.$axios.$post('/api/credits/add-one')

                if (res && typeof res.creditsBalance === 'number') {
                    // Update the local dashboard so the UI reflects the new balance
                    this.dashboard.user.creditsBalance = res.creditsBalance
                } else {
                    console.warn('Unexpected response from /api/credits/add-one:', res)
                }
            } catch (err) {
                console.error('Error adding credit:', err)
                alert('Could not add a test credit right now.')
            }
        },
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
                "Roger's New Business": 'rogers-new-business',
                "Trevor's Day at School": 'trevors-day-at-school',
                "Weston's Birthday": 'westons-birthday'
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
        openForOthersTab() {
            this.activeResultsView = 'fourth'
            this.forOthersSeen = true
        },
        startInvitedAssessment(inv) {
            this.$router.push(
                `/library/${inv.assessmentSlug}?participant=${inv.participantId}&invitation=${inv.invitationId}`
            )
        },
        resumeThirdPersonSession(s) {
            const query = { session: s.id }
            if (s.participantId) query.participant = s.participantId
            if (s.invitationId)  query.invitation  = s.invitationId
            this.$router.push({ path: `/library/${s.assessmentSlug}`, query })
        },
        forOthersPct(trait) {
            const b = this.forOthersBreakdown
            return b && typeof b[trait] === 'number' ? b[trait] : 0
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
        margin-top: 64px;
        text-align: center;
        padding: 40px 16px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;

        h1 {
            margin-bottom: 0px;
        }

        h4 {
            margin-top: -10px;
            font-weight: 400;
            font-family: $nunito-family;
        }

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
        margin-top: 40px;
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
            margin-bottom: 0px;
        }

        .scroll-area {
            flex: 1 1 auto;
            overflow-y: auto;
            padding-right: 8px;
            -webkit-overflow-scrolling: touch;
        }
    }

    .panel-for-others {
        max-height: 450px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        .scroll-area {
            flex: 1 1 auto;
            overflow-y: auto;
            padding-right: 8px;
            max-height: 380px;
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

    .results-wrapper {
        position: relative;
        width: 100%;
    }

    .tab-label-mobile { display: none; }

    .results-tabs {
        position: absolute;
        top: -36px;
        left: 16px;
        display: flex;
        gap: 0px;
        z-index: 10;
    }

    .results-tab {
        border: 3px solid #025baf67;
        border-bottom: none;
        border-radius: 8px 8px 0 0;
        padding: 6px 14px;
        background: #f0f4fa;
        font-size: 14px;
        font-weight: 500;
        color: #143180;
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
        position: relative;
        z-index: 11;
        transition: background 0.2s ease, color 0.2s ease;
        transform: scale(0.95);
        height: 36px;

        &.is-active {
            height: 40px;
            background: #fff;
            color: #0d4ca5;
            box-shadow: none;
            padding-bottom: 5px;

            margin-bottom: 0px;
            border-bottom: 2px solid #fff;
            z-index: 20;
        }

        &:active {
            transform: scale(0.8);
        }

        .tab-badge {
            position: absolute;
            top: -8px;
            right: -8px;
            min-width: 18px;
            height: 18px;
            padding: 0 5px;
            border-radius: 999px;
            background: $color-d;
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            line-height: 18px;
            text-align: center;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
            pointer-events: none;
            animation: badge-pop 0.25s ease;
        }
    }

    @keyframes badge-pop {
        0%   { transform: scale(0); opacity: 0; }
        70%  { transform: scale(1.2); }
        100% { transform: scale(1); opacity: 1; }
    }

    results-panel,
    results-panel-third-person {
        position: relative;
        z-index: 0;
    }
}

@media (max-width: 768px) {
    .dashboard {
        .header {
            padding: 40px 16px 30px;

            h1 {
                line-height: 1.25em;
                margin-bottom: 40px;
            }

            .logo {
                position: relative;
                width: 300px;
                left: 0;
                top: 0;
                margin-bottom: -40px;
                margin-top: -50px;
            }
        }

        .grid {
            flex-direction: column;
            margin-top: 10px;
        }

        .results-tabs {
            position: static;
            display: flex;
            flex-wrap: wrap;
            gap: 0;
            margin-bottom: 0;
        }

        .tab-label-desktop { display: none; }
        .tab-label-mobile { display: inline; }

        .results-tab {
            flex: 0 0 50%;
            max-width: 50%;
            text-align: center;
            border-radius: 0;
            border-bottom: 3px solid #025baf67;
            height: auto;
            padding: 8px 4px;
            font-size: 13px;
            line-height: 1.3;
            box-sizing: border-box;

            .tab-badge {
                top: -7px;
                right: 4px;
            }
        }

        .panel,
        .panel-assessments {
            flex: 0 0 100%;
            max-width: 100%;
            width: 100%;
        }

        .panel-assessments {
            max-height: none;
            min-height: auto;

            .scroll-area {
                overflow-y: visible;
                max-height: none;
            }

            button {
                width: 110px;
            }
        }
    }
}
</style>