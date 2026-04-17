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
                            Built for anyone ready to understand themselves, communicate better,
                            and grow — at work, at home, or in the classroom.
                        </p>
                    </div>
                </div>

                <div class="row audience-grid">
                    <article class="audience-card audience-card--coaches">
                        <div class="audience-img-wrap">
                            <img src="~assets/homePage/people_reading.webp" alt="coaches and consultants" />
                            <div class="audience-tag" style="background: #e93d2f;">For Coaches</div>
                        </div>
                        <h3>Coaches &amp; Consultants</h3>
                        <p>
                            Go deeper with clients using story-based DISC insights that spark authentic
                            conversations and accelerate breakthroughs — no extra prep required.
                        </p>
                        <div class="audience-highlights">
                            <span>📋 Ready-to-use assessment format</span>
                            <span>💬 Richer debrief conversations</span>
                            <span>📈 Trackable client growth</span>
                        </div>
                    </article>

                    <article class="audience-card audience-card--teams">
                        <div class="audience-img-wrap">
                            <img src="~assets/homePage/people-at-the-table.webp" alt="teams and organizations" />
                            <div class="audience-tag" style="background: #0dab49;">For Teams</div>
                        </div>
                        <h3>Teams &amp; Organizations</h3>
                        <p>
                            Give your team a shared language for how they think, communicate, and
                            collaborate — built through relatable real-world scenarios.
                        </p>
                        <div class="audience-highlights">
                            <span>🤝 Shared language for the whole team</span>
                            <span>🔄 Reduces friction &amp; conflict</span>
                            <span>🎯 Aligned communication styles</span>
                        </div>
                    </article>

                    <article class="audience-card audience-card--individuals">
                        <div class="audience-img-wrap">
                            <img src="~assets/homePage/sitting-woman-with-book.webp" alt="individuals and families" />
                            <div class="audience-tag" style="background: #ffbd05; color: #333;">For Everyone</div>
                        </div>
                        <h3>Individuals &amp; Families</h3>
                        <p>
                            Explore stories that reveal your strengths, communication style, and emotional
                            patterns. Kid-friendly books make DISC accessible at every age.
                        </p>
                        <div class="audience-highlights">
                            <span>🌱 Personal growth at your pace</span>
                            <span>👨‍👩‍👧 Kid-friendly stories available</span>
                            <span>❤️ Stronger relationships</span>
                        </div>
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
                            and the emotional moments — which makes results more meaningful and lasting.
                        </p>
                    </div>
                </div>

                <div class="row benefits-grid">
                    <article class="benefit">
                        <div class="benefit-icon" style="background: #fdf0ef; color: #e93d2f;">🎭</div>
                        <h3>Real-Life Scenarios</h3>
                        <p>
                            Each story mirrors everyday decisions at work, home, and in relationships —
                            giving you immediate, deeply relatable insights that stick long after you finish.
                        </p>
                    </article>

                    <article class="benefit">
                        <div class="benefit-icon" style="background: #fef6e4; color: #c78c00;">🌟</div>
                        <h3>Engaging for All Ages</h3>
                        <p>
                            Adults and kids alike connect with narrative learning far more than standard
                            tests. Our library includes stories for every stage of life.
                        </p>
                    </article>

                    <article class="benefit">
                        <div class="benefit-icon" style="background: #edfaf1; color: #0dab49;">📊</div>
                        <h3>Clear, Visual Results</h3>
                        <p>
                            Your Dashboard displays your DISC breakdown in vivid bar charts. See your
                            dominant trait, your blend, and how your profile shifts across books over time.
                        </p>
                    </article>

                    <article class="benefit">
                        <div class="benefit-icon" style="background: #e8f4fd; color: #1666ff;">🌱</div>
                        <h3>Grows With You</h3>
                        <p>
                            Your Assessment Library becomes a long-term record of your personal growth —
                            a living history of who you are and who you're becoming.
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
                            Your Assessment Library account keeps everything in one place — stories,
                            credits, progress, and results.
                        </p>
                    </div>
                </div>

                <div class="row account-layout">
                    <div class="account-steps">
                        <div class="account-step">
                            <div class="step-badge step-badge--d">1</div>
                            <div class="step-text">
                                <strong>Sign In or Create an Account</strong>
                                <p>Set up your free account to access your personal dashboard and begin tracking your journey.</p>
                            </div>
                        </div>
                        <div class="account-step">
                            <div class="step-badge step-badge--i">2</div>
                            <div class="step-text">
                                <strong>Check Your Dashboard</strong>
                                <p>View your DISC results, completed sessions, and Confidence Meter all in one place.</p>
                            </div>
                        </div>
                        <div class="account-step">
                            <div class="step-badge step-badge--s">3</div>
                            <div class="step-text">
                                <strong>Choose a Book in the Library</strong>
                                <p>Browse story-based assessments for work, everyday life, kids, and more.</p>
                            </div>
                        </div>
                        <div class="account-step">
                            <div class="step-badge step-badge--c">4</div>
                            <div class="step-text">
                                <strong>Start or Resume a Story</strong>
                                <p>Pick up where you left off or start fresh — your progress is always saved.</p>
                            </div>
                        </div>
                        <div class="account-step">
                            <div class="step-badge step-badge--d">5</div>
                            <div class="step-text">
                                <strong>Review Your Results</strong>
                                <p>Explore your DISC profile, invite others for a 3rd Person perspective, and download a Full Report.</p>
                            </div>
                        </div>
                        <div class="account-step">
                            <div class="step-badge step-badge--i">6</div>
                            <div class="step-text">
                                <strong>Purchase Credits to Unlock More</strong>
                                <p>Each credit unlocks a new book. Keep growing — your library, your pace.</p>
                            </div>
                        </div>
                    </div>

                    <div class="account-image-wrap">
                        <img src="~assets/backgrounds/classroom_background.webp" alt="someone reading a book" />
                    </div>
                </div>
            </div>
        </section>

        <!-- TRUST -->
        <section class="about-section trust">
            <div class="container">
                <div class="row">
                    <div class="trust-panel">
                        <h2>Built on Real DISC Methodology</h2>
                        <p>
                            The Assessment Library is powered by the DISC framework trusted by coaches,
                            trainers, and organizations around the world — delivered through a modern,
                            story-driven experience developed by <strong>Assessments 24x7</strong>.
                        </p>
                        <div class="trust-stats">
                            <div class="trust-stat">
                                <span class="trust-stat-number" style="color: #e93d2f;">4</span>
                                <span class="trust-stat-label">Core DISC Traits</span>
                            </div>
                            <div class="trust-stat">
                                <span class="trust-stat-number" style="color: #ffbd05;">3</span>
                                <span class="trust-stat-label">Assessment Perspectives</span>
                            </div>
                            <div class="trust-stat">
                                <span class="trust-stat-number" style="color: #0dab49;">∞</span>
                                <span class="trust-stat-label">Growth Potential</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FINAL CTA -->
        <section class="about-section final-cta">
            <div class="container">
                <div class="row">
                    <div class="final-cta-inner">
                        <h2>Ready to Begin Your Story?</h2>
                        <p>
                            Explore the Library and start your first story today. Your DISC
                            profile is waiting.
                        </p>
                        <div class="final-actions">
                            <nuxt-link to="/library" class="final-btn final-btn--teal">Explore the Library</nuxt-link>
                            <nuxt-link to="/contact" class="final-btn final-btn--outline">Contact Us</nuxt-link>
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
    head() {
        return {
            title: 'About The Assessment Library | Story-Based DISC Assessments for Adults & Kids',
            meta: [
                { hid: 'description', name: 'description', content: 'Learn how The Assessment Library uses interactive story-based scenarios to build evolving DISC personality profiles for adults, families, and children of all ages.' },
                { hid: 'og:title', property: 'og:title', content: 'About The Assessment Library | Story-Based DISC Assessments for Adults & Kids' },
                { hid: 'og:description', property: 'og:description', content: 'Learn how The Assessment Library uses interactive story-based scenarios to build evolving DISC personality profiles for adults, families, and children of all ages.' },
                { hid: 'og:url', property: 'og:url', content: 'https://www.theassessmentlibrary.com/about' }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "The Assessment Library",
                        "applicationCategory": "EducationalApplication",
                        "description": "Story-based DISC personality assessments for adults and kids",
                        "url": "https://www.theassessmentlibrary.com",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD",
                            "description": "Free to start with credit-based assessments"
                        }
                    }),
                    type: 'application/ld+json'
                }
            ]
        }
    },
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

    /* === SHARED SECTION BASE === */
    .about-section {
        padding: 60px 16px 80px;
    }

    .section-header {
        text-align: center;
        max-width: 680px;
        margin: 0 auto 40px;

        h2 {
            margin-bottom: 12px;
        }

        p {
            color: #555;
            font-size: 17px;
        }

        &.light {
            h2 { color: #fff; }
            p { color: rgba(255,255,255,0.8); }
        }
    }

    .audience {
        background: #fff;
    }

    .why-story {
        background: #f7f3ee;
    }

    /* === GRID LAYOUTS === */
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

    /* === STEP CARDS === */
    .step {
        background: #fff;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #0814368e;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.05);
            cursor: pointer;
        }
    }

    /* === AUDIENCE CARDS === */
    .audience-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #0814368e;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        h3 {
            padding: 0 20px;
            margin-top: 20px;
            margin-bottom: 8px;
        }

        > p {
            padding: 0 20px;
            flex: 1;
        }
    }

    .audience-img-wrap {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }

    .audience-tag {
        position: absolute;
        top: 12px;
        left: 12px;
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        padding: 4px 12px;
        border-radius: 20px;
        letter-spacing: 0.03em;
    }

    .audience-highlights {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 14px 20px 20px;
        border-top: 1px solid #f0f0f0;
        margin-top: 16px;

        span {
            font-size: 13px;
            color: #555;
        }
    }

    /* === BENEFIT CARDS === */
    .benefit {
        background: #fff;
        padding: 24px 20px;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #0814368e;

        h3 {
            margin-top: 14px;
            margin-bottom: 10px;
        }
    }

    .benefit-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
    }

    /* === ACCOUNT STEPS === */
    .account-howto {
        background: linear-gradient(135deg, #efe3d6 0%, #dcc5ad 50%, #c4a484 100%);
    }

    .account-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .account-steps {
        flex: 1;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .account-step {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        background: #fff;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);

        strong {
            display: block;
            font-size: 15px;
            margin-bottom: 4px;
        }

        p {
            margin: 0;
            font-size: 13px;
            color: #666;
        }
    }

    .step-badge {
        flex-shrink: 0;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 15px;
        color: #fff;

        &--d { background: $color-d; }
        &--i { background: $color-i; color: #333; }
        &--s { background: $color-s; }
        &--c { background: $color-c; }
    }

    .step-text {
        flex: 1;
    }

    .account-image-wrap {
        flex: 1;
        min-width: 260px;
        max-width: 420px;

        img {
            width: 100%;
            border-radius: 16px;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
        }
    }

    /* === TRUST === */
    .trust {
        background: #12304d;
    }

    .trust-panel {
        color: #fff;
        padding: 48px 40px;
        border-radius: 20px;
        text-align: center;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.1);

        h2 {
            color: #fff;
            margin-bottom: 16px;
        }

        p {
            max-width: 600px;
            margin: 0 auto 40px;
            color: rgba(255, 255, 255, 0.85);
        }
    }

    .trust-stats {
        display: flex;
        justify-content: center;
        gap: 64px;
        flex-wrap: wrap;
    }

    .trust-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
    }

    .trust-stat-number {
        font-size: 52px;
        font-weight: 800;
        line-height: 1;
    }

    .trust-stat-label {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
    }

    /* === FINAL CTA === */
    .final-cta {
        background: #f0f6fb;
    }

    .final-cta-inner {
        text-align: center;
        padding: 48px 32px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        background: #fff;

        h2 {
            margin-bottom: 12px;
        }

        p {
            color: #555;
            font-size: 18px;
            margin-bottom: 32px;
        }
    }

    .final-actions {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .final-btn {
        display: inline-block;
        padding: 14px 32px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        text-decoration: none;
        transition: opacity 0.2s ease, transform 0.15s ease;

        &:hover {
            opacity: 0.85;
            transform: translateY(-2px);
        }

        &--teal {
            background: #0dab49;
            color: #fff;
        }

        &--outline {
            background: transparent;
            color: #12304d;
            border: 2px solid #12304d;
        }
    }
}

@media (max-width: 1024px) {
    .about {
        .steps-grid,
        .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .audience-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media (min-width: 769px) and (max-width: 1180px) {
    .about {
        .header {
            .logo {
                width: 140px;
                left: 16px;
                top: -5px;
            }
        }
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

        .account-layout {
            flex-direction: column;
        }

        .account-image-wrap {
            max-width: 100%;
        }

        .trust-stats {
            gap: 32px;
        }

        .trust-stat-number {
            font-size: 40px;
        }

        .trust-panel {
            padding: 32px 20px;
        }

        .final-cta-inner {
            padding: 32px 20px;
        }

        .final-actions {
            flex-direction: column;
            align-items: stretch;

            .final-btn {
                text-align: center;
            }
        }
    }
}
</style>