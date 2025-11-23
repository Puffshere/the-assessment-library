<template>
    <section class="dashboard">
        <main-nav />

        <section class="header">
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

                    <div class="panel">
                        <h2 class="panel-title">Your Assessments</h2>

                        <div v-if="!dashboard.sessions.length" class="empty-state">
                            <p>You haven’t started any assessments yet.</p>
                            <p>
                                When you check out a book from the Library and begin an
                                assessment, it will show up here.
                            </p>
                        </div>

                        <div v-else class="sessions">
                            <div v-if="inProgressSessions.length" class="section-block">
                                <h3>In Progress</h3>
                                <ul>
                                    <li v-for="s in inProgressSessions" :key="s.id" class="session-row">
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
                                            <button class="outline small">
                                                Resume
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div v-if="completedSessions.length" class="section-block">
                                <h3>Completed</h3>
                                <ul>
                                    <li v-for="s in completedSessions" :key="s.id" class="session-row">
                                        <div class="session-main">
                                            <div class="session-title">
                                                {{ s.assessmentTitle }}
                                            </div>
                                            <div class="session-meta">
                                                Completed:
                                                <span>{{ formatDate(s.completedAt) }}</span>
                                                <span v-if="s.scoreTotal !== null" class="score-pill">
                                                    Score: {{ s.scoreTotal }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="session-actions">
                                            <button class="outline small">
                                                View Results
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div v-if="!inProgressSessions.length && !completedSessions.length" class="empty-state">
                                <p>Assessments found, but none are in-progress or completed yet.</p>
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
        'footer-fold': () => import('@/components/Footer')
    },

    data() {
        return {
            loading: true,
            error: null,
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
        inProgressSessions() {
            return this.dashboard.sessions.filter(s => s.status === 'in_progress')
        },
        completedSessions() {
            return this.dashboard.sessions.filter(s => s.status === 'completed')
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

<style scoped lang="scss">
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
        background: #f9f9f9;
        padding: 16px;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

        .credits-label {
            font-size: 14px;
            margin-bottom: 4px;
        }

        .credits-value {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .small {
            font-size: 14px;
            padding: 6px 12px;
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);

            &:last-child {
                border-bottom: none;
            }
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
        .grid {
            flex-direction: column;
        }
    }
}
</style>