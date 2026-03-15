<template>
    <section class="about">
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h1><span style="color: #ffbd05; text-shadow: 1px 1px 1px black;">About</span> The Assessment Library</h1>
                        <h4>
                            A story-based DISC® assessment experience that turns personal growth
                            into an engaging journey for adults and kids.
                        </h4>
                        <p class="lead">
                            The Assessment Library combines interactive stories, powerful DISC
                            insights, and a simple credit system so you can easily explore multiple
                            books, track results, and revisit your assessments any time.
                        </p>
                        <div class="button-container">
                            <button @click="jumpToDashboard" class="teal">
                                View Your Dashboard
                            </button>
                            <button @click="jumpToLibrary" class="light">
                                Browse the Library
                            </button>
                        </div>
                    </div>
                    <div class="col-6">
                        <img src="~assets/backgrounds/classroom_background.webp" alt="image of a classroom">
                    </div>
                </div>
            </div>
        </section>

        <section class="insight">
            <div class="container">
                <div class="row">
                    <h1>
                        "<span style="color: #0dab49; text-shadow: 1px 1px 1px black;">Confidence</span> grows when insight is shared."
                    </h1>
                    <p>
                        You don’t just answer questions about yourself — you invite the people who know you best to step
                        into your story and respond as they think you would. Every completed perspective strengthens
                        your understanding and increases your Confidence Meter.
                    </p>

                    <div class="confidence-slot" style="width: 280px;">
                        <ConfidenceBar :value="73" />
                    </div>
                    <h4>
                        How it works (simple + scannable)
                    </h4>
                    <p class="details" style="font-size: 18px;">
                        <span style="font-weight: 700; text-decoration: underline; font-size: 20px;">1st person:</span>
                        You take the assessment as yourself <br />
                        <br />
                        <span style="font-weight: 700; text-decoration: underline; font-size: 20px;">3rd person:</span>
                        Friends & family take the same story as you <br />
                        <br />
                        <span style="color: #0dab49; text-decoration: underline; font-size: 20px;">Confidence
                            Meter:</span> Each completed book sharpens the signal and reduces guesswork
                    </p>
                    <h4>
                        This isn’t about being “right.” It’s about alignment. The more perspectives you gather, the
                        clearer and more reliable your results become.
                    </h4>
                </div>
            </div>
        </section>

        <!-- HOW IT WORKS -->
        <section class="how-it-works">
            <div class="container">
                <div class="row">
                    <h2>How The Assessment Library Works</h2>
                    <p>
                        Everything is organized around “books” – interactive stories that
                        guide you through real-life scenarios while quietly <br class="line-break" />measuring your
                        DISC style in the background.
                    </p>
                </div>

                <div class="row steps-grid">

                    <article class="step" @click="jumpToLibrary">
                        <img src="~assets/homePage/sitting-woman-with-book.webp"
                            alt="image of a woman sitting reading a book" />
                        <h4>1. Choose a Book</h4>
                        <p>
                            Explore the Library and pick a book that fits your life right now —
                            whether it’s professional growth, everyday relationships, or
                            kid-friendly stories for younger learners.
                        </p>
                    </article>

                    <article class="step">
                        <img src="~assets/homePage/people-at-the-table.webp" alt="image of people sitting at the table"
                            style="width: 77px" />
                        <h4>2. Live the Story</h4>
                        <p>
                            Read through a rich, branching story and answer questions about what
                            you’d do next. Each choice reflects your natural DISC style –
                            Dominance, Influence, Steadiness, or Conscientiousness.
                        </p>
                    </article>

                    <article class="step" @click="jumpToLibrary">
                        <img src="~assets/homePage/people_reading.webp"
                            alt="image of people reading on a stack of books" />
                        <h4>3. See Your Results</h4>
                        <p>
                            After finishing a book, your Dashboard reveals charts, insights,
                            and your dominant DISC trait.
                        </p>
                    </article>

                    <article class="step">
                        <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
                        <h4>4. Unlock More with Credits</h4>
                        <p>
                            Each credit unlocks a new book to explore. Purchase additional credits
                            anytime to continue your journey.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- WHO IT'S FOR -->
        <section class="about-section audience">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Who The Assessment Library Is For</h2>
                        <p>
                            The platform is built for anyone looking to better understand themselves,
                            their decisions, and their communication style.
                        </p>
                    </div>
                </div>

                <div class="row audience-grid">
                    <article class="audience-card">
                        <div class="placeholder audience-image"></div>
                        <h3>Coaches & Consultants</h3>
                        <p>
                            Provide clients with story-based, relatable DISC insights that spark deeper
                            conversations.
                        </p>
                    </article>

                    <article class="audience-card">
                        <div class="placeholder audience-image"></div>
                        <h3>Teams & Organizations</h3>
                        <p>
                            Improve communication and collaboration by helping team members understand
                            their styles in practical scenarios.
                        </p>
                    </article>

                    <article class="audience-card">
                        <div class="placeholder audience-image"></div>
                        <h3>Individuals & Families</h3>
                        <p>
                            Explore stories that reveal strengths, emotions, and communication patterns.
                            Kid-friendly options make learning DISC fun and accessible.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- WHY STORY-BASED DISC -->
        <section class="about-section why-story">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Why Story-Based DISC Assessments?</h2>
                        <p>
                            Stories make insights stick. You remember your decisions, the characters,
                            and the emotional moments — which makes the results more meaningful.
                        </p>
                    </div>
                </div>

                <div class="row benefits-grid">
                    <article class="benefit">
                        <h3>Real-Life Scenarios</h3>
                        <p>
                            Each story mirrors everyday decisions, giving you immediate, relatable insights.
                        </p>
                    </article>

                    <article class="benefit">
                        <h3>Engaging for All Ages</h3>
                        <p>
                            Adults and kids alike connect with narrative learning far more than standard tests.
                        </p>
                    </article>

                    <article class="benefit">
                        <h3>Clear, Visual Results</h3>
                        <p>
                            Your Dashboard displays your DISC breakdown in colorful bar charts.
                        </p>
                    </article>

                    <article class="benefit">
                        <h3>Grows With You</h3>
                        <p>
                            Your Assessment Library becomes a long-term record of your personal growth.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ACCOUNT GUIDE -->
        <section class="about-section account-howto">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>How to Use Your Account</h2>
                        <p>
                            Your Assessment Library account keeps track of everything — stories, credits,
                            progress, and results.
                        </p>
                    </div>
                </div>

                <div class="row account-layout">
                    <div class="account-text">
                        <ol class="usage-list">
                            <li><strong>Sign In or Create an Account</strong></li>
                            <li><strong>Check Your Dashboard</strong></li>
                            <li><strong>Choose a Book in the Library</strong></li>
                            <li><strong>Start or Resume a Story</strong></li>
                            <li><strong>Review Your Results</strong></li>
                            <li><strong>Purchase Credits to Unlock More</strong></li>
                        </ol>
                    </div>

                    <div class="account-image-wrap">
                        <div class="placeholder account-image"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TRUST -->
        <section class="about-section trust">
            <div class="container">
                <div class="row">
                    <div class="trust-panel">
                        <h2>Built with Assessments 24x7 Expertise</h2>
                        <p>
                            The Assessment Library is powered by real DISC methodology trusted by coaches,
                            trainers, and organizations around the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FINAL CTA -->
        <section class="about-section final-cta">
            <div class="container">
                <div class="row">
                    <div class="final-cta-inner">
                        <h2>Ready to Begin?</h2>
                        <p>
                            Explore the Library and start your first story today.
                        </p>
                        <div class="final-actions">
                            <nuxt-link to="/library" class="teal">Explore the Library</nuxt-link>
                            <nuxt-link to="/contact" class="outline-btn">Contact Us</nuxt-link>
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
    name: 'AboutPage',
    components: {
        'main-nav': () => import('@/components/Nav'),
        'ConfidenceBar': () => import('@/components/ConfidenceMeter.vue'),
        'footer-fold': () => import('@/components/Footer'),
        'results-panel': () => import('@/components/ResultsPanel.vue')
    },
    data() {
        return {
            isAuthenticated: false
        };
    },
    mounted() {
        if (process.client) {
            const talToken = localStorage.getItem('tal_token');
            const talLoggedIn = localStorage.getItem('tal_logged_in');

            let fromState = false;
            const storedState = localStorage.getItem('a24x7');
            if (storedState) {
                try {
                    const parsed = JSON.parse(storedState);
                    fromState = !!(parsed.auth && parsed.auth.isAuthenticated);
                } catch (e) {
                }
            }

            this.isAuthenticated =
                !!talToken || talLoggedIn === '1' || fromState;
        }
    },
    methods: {
        goTo(path, event) {
            if (event && event.target) {
                event.target.blur();
            }

            if (this.isAuthenticated) {
                this.$router.push(path);
            } else {
                this.$router.push({
                    path: '/auth/login',
                    query: { redirect: path }
                });
            }
        },
        jumpToDashboard(event) {
            this.goTo('/dashboard', event);
        },
        jumpToLibrary(event) {
            this.goTo('/library', event);
        }
    }
};
</script>


<style lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.about {
    .header {
        padding: 100px 16px 80px;
        text-align: left;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;

        h1 {
            margin-bottom: -20px;
        }

        h4 {
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

        img {
            margin-top: 80px;
            width: 100%;
            border-radius: 12px;
            box-shadow: 2px 2px 10px #12304d;
        }

        .button-container {
            gap: 40px;
            margin-top: 40px;
            display: flex;
        }
    }

    .insight {
        padding: 60px 16px 80px;
        text-align: center;
        position: relative;
        box-shadow: 5px 5px 10px #412604;

        h1 {
            font-style: italic;
        }

        .confidence-slot {
            position: relative;
            margin: 0 auto;
        }

        .details {
            background: rgb(238, 238, 238);
            padding: 16px;
            border-radius: 12px;
            box-shadow: 5px 5px 10px #412604;
        }
    }

    .how-it-works {
        padding: 60px 16px 80px;
        text-align: center;
        background: linear-gradient(135deg,
                #efe3d6 0%,
                #dcc5ad 50%,
                #c4a484 100%);
        box-shadow: 5px 5px 10px #412604;

        h2 {
            margin-bottom: 0;
        }

        p {
            margin-bottom: 50px;
        }

        img {
            width: 150px;
        }

        .logo {
            margin-top: -20px;
            margin-bottom: -30px;
        }

        .step {
            transition: transform 0.2s ease;

            &:hover {
                transform: scale(1.05);
                cursor: pointer;
            }
        }
    }

    /* === PLACEHOLDERS === */
    .placeholder {
        background: linear-gradient(135deg, #d9e6f2, #baccdd);
        border-radius: 12px;
        width: 100%;
        height: 160px;
    }

    .hero-placeholder {
        height: 280px;
        max-width: 420px;
    }

    .audience-image {
        height: 180px;
    }

    .account-image {
        height: 240px;
    }

    /* Grid layouts trimmed for length — same as previous version */
    .steps-grid,
    .audience-grid,
    .benefits-grid {
        display: grid;
        gap: 24px;
    }

    .steps-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .audience-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .benefits-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .step,
    .audience-card,
    .benefit {
        background: #fff;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .step-icon {
        width: 60px;
        height: 60px;
    }

    .account-layout {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
    }

    /* TRUST & CTA same as prior version */
    .trust-panel {
        background: #12304d;
        color: #fff;
        padding: 32px;
        border-radius: 20px;
    }

    .final-cta {
        background: #f0f6fb;
    }

    .final-cta-inner {
        text-align: center;
        padding: 32px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
}

@media (max-width: 1024px) {

    .steps-grid,
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .about {
        .line-break {
            display: none;
        }

        .header {
            padding: 20px 16px 60px;

            h1 {
                line-height: 1.25em;
            }

            .row {
                display: flex;
                flex-direction: column-reverse;
            }

            .button-container {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 16px;

                button {
                    width: 100%;
                }
            }
        }

        .how-it-works {
            padding: 20px 16px 60px;
        }

        .steps-grid,
        .benefits-grid,
        .audience-grid {
            grid-template-columns: 1fr;
        }
    }
}
</style>