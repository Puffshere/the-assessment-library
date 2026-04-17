<template>
    <section class="invite-page">
        <main-nav />

        <div v-if="loading" class="status-msg">
            Loading your invitation...
        </div>

        <div v-else-if="loadError" class="status-msg">
            {{ loadError }}
        </div>

        <template v-else>
            <section class="invite-header">
                <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
                <h1>You've Been Invited!</h1>
                <h4>{{ inviterName }} wants to see how well you know their personality style.</h4>
            </section>

            <section class="invite-content">
                <div class="container">
                    <div class="intro-card">

                        <div class="steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-body">
                                    <h3>Read the Story</h3>
                                    <p>You'll be guided through a story-based scenario that follows a main character through various situations and decisions.</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-body">
                                    <h3>Answer as {{ inviterName }}</h3>
                                    <p>At each decision point, choose the path you think {{ inviterName }} would take — not what you would do yourself.</p>
                                </div>
                            </div>

                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-body">
                                    <h3>See the Results</h3>
                                    <p>{{ inviterName }} will receive a confidence score showing how closely your perception matches their actual personality style.</p>
                                </div>
                            </div>
                        </div>

                        <div class="credit-note">
                            <p class="credit-note-icon">🎁</p>
                            <p><strong>You've been given free credits!</strong> We've added enough to take this assessment at no cost — plus one extra credit so you can take your own assessment and invite others to see how well they know <em>your</em> style.</p>
                        </div>

                        <div class="assessment-callout">
                            <p>You'll be taking:</p>
                            <h2>{{ assessmentTitle }}</h2>
                            <button class="blue" @click="startAssessment">Start Assessment &rarr;</button>
                        </div>

                    </div>
                </div>
            </section>
        </template>

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
            loadError: null,
            inviterName: '',
            assessmentTitle: '',
            assessmentSlug: '',
            participantId: this.$route.query.participant || null,
            invitationId: this.$route.query.invitation || null
        }
    },

    async mounted() {
        if (!this.participantId || !this.invitationId) {
            return this.$router.push('/dashboard')
        }

        try {
            const res = await this.$axios.$get(
                `/api/participants/verify-invite?participant=${this.participantId}&invitation=${this.invitationId}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                }
            )
            this.inviterName = res.inviterName || ''
            this.assessmentTitle = res.assessmentTitle || ''
            this.assessmentSlug = res.assessmentSlug || ''
        } catch (err) {
            console.error('Error verifying invite:', err)
            return this.$router.push('/dashboard')
        } finally {
            this.loading = false
        }
    },

    methods: {
        startAssessment() {
            this.$router.push(`/library/${this.assessmentSlug}?participant=${this.participantId}&invitation=${this.invitationId}`)
        }
    },

    head() {
        return {
            title: "You've Been Invited! | The Assessment Library",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Take a 3rd-person DISC assessment on behalf of someone who invited you.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.invite-page {
    .invite-header {
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
            font-family: 'Nunito Sans', sans-serif;
        }

        .logo {
            width: 270px;
            position: absolute;
            left: 80px;
            top: -25px;
        }

        &::after {
            background: linear-gradient(
                to right,
                #e93d2f 25%,
                #ffbd05 25%,
                #ffbd05 50%,
                #0dab49 50%,
                #0dab49 75%,
                #1666ff 75%
            );
            position: absolute;
            content: '';
            height: 10px;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
        }
    }

    .invite-content {
        padding: 60px 16px 80px;
    }

    .intro-card {
        max-width: 700px;
        margin: 0 auto;
        background: #fff;
        border-radius: 11px;
        border: 3px solid #025baf67;
        box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.15);
        padding: 40px 36px;
    }

    .steps {
        display: flex;
        flex-direction: column;
        gap: 28px;
        margin-bottom: 40px;
    }

    .step {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .step-number {
        flex: 0 0 40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #12304d;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4px;
    }

    .step-body {
        h3 {
            margin: 0 0 6px;
            font-size: 18px;
            color: #12304d;
        }

        p {
            margin: 0;
            font-size: 15px;
            color: #444;
            font-family: 'Nunito Sans', sans-serif;
        }
    }

    .credit-note {
        background: linear-gradient(135deg, #12304d 0%, #00679b 100%);
        border-radius: 10px;
        padding: 20px 24px;
        margin-bottom: 32px;
        color: #fff;

        .credit-note-icon {
            font-size: 28px;
            margin: 0 0 8px;
        }

        p {
            margin: 0;
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.92);
            font-family: 'Nunito Sans', sans-serif;

            strong {
                color: #ffbd05;
                font-size: 15px;
            }
        }
    }

    .assessment-callout {
        border-top: 3px solid #025baf67;
        padding-top: 32px;
        text-align: center;

        p {
            font-size: 14px;
            color: #555;
            margin-bottom: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        h2 {
            margin: 0 0 24px;
            font-size: 26px;
            color: #12304d;
        }
    }

    .status-msg {
        text-align: center;
        padding: 60px 0;
        font-size: 16px;
        color: #555;
    }
}

@media (min-width: 769px) and (max-width: 1180px) {
    .invite-page {
        .invite-header {
            .logo {
                width: 140px;
                left: 16px;
                top: -5px;
            }
        }
    }
}

@media (max-width: 600px) {
    .invite-page {
        .invite-header {
            .logo {
                position: relative;
                left: 0;
                top: 0;
                width: 260px;
                margin-bottom: -40px;
                margin-top: -50px;
            }
        }

        .intro-card {
            padding: 28px 20px;
        }

        .step-number {
            flex: 0 0 32px;
            width: 32px;
            height: 32px;
            font-size: 15px;
        }
    }
}
</style>
