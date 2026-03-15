<template>
    <section class="about-first">
        <main-nav />

        <!-- ── 1. HERO ────────────────────────────────────────────────────── -->
        <section class="first-header">
            <div class="container">
                <div class="row hero-row">
                    <div class="col-6">
                        <h1>Truly <span class="accent-yellow">Know</span> Yourself</h1>
                        <h4>Continuous self-assessment turns a single snapshot into a living, evolving portrait of who you really are.</h4>
                        <p class="lead">
                            Most personality tests give you one answer from one moment in time. The Assessment Library
                            builds a dynamic profile across every book you complete — tracking how you respond, adapt,
                            and grow across real-life scenarios.
                        </p>
                        <div class="button-container">
                            <button @click="jumpToDashboard" class="teal">View Your Dashboard</button>
                            <button @click="jumpToLibrary" class="light">Browse the Library</button>
                        </div>
                    </div>
                    <div class="col-6 hero-card-col">
                        <div class="hero-stat-card">
                            <div class="stat-card-header">
                                <div class="stat-avatar">AJ</div>
                                <div class="stat-profile-info">
                                    <p class="stat-name">Alex Johnson</p>
                                    <p class="stat-meta">42 assessments completed</p>
                                </div>
                            </div>
                            <p class="stat-card-label">Your DISC Profile</p>
                            <div class="disc-bars">
                                <div class="disc-bar-row">
                                    <span class="disc-bar-letter disc-d">D</span>
                                    <div class="disc-bar-track">
                                        <div class="disc-bar-fill" style="width: 72%; background: #e93d2f;"></div>
                                    </div>
                                    <span class="disc-bar-pct">72%</span>
                                </div>
                                <div class="disc-bar-row">
                                    <span class="disc-bar-letter disc-i">I</span>
                                    <div class="disc-bar-track">
                                        <div class="disc-bar-fill" style="width: 45%; background: #ffbd05;"></div>
                                    </div>
                                    <span class="disc-bar-pct">45%</span>
                                </div>
                                <div class="disc-bar-row">
                                    <span class="disc-bar-letter disc-s">S</span>
                                    <div class="disc-bar-track">
                                        <div class="disc-bar-fill" style="width: 58%; background: #0dab49;"></div>
                                    </div>
                                    <span class="disc-bar-pct">58%</span>
                                </div>
                                <div class="disc-bar-row">
                                    <span class="disc-bar-letter disc-c">C</span>
                                    <div class="disc-bar-track">
                                        <div class="disc-bar-fill" style="width: 38%; background: #1666ff;"></div>
                                    </div>
                                    <span class="disc-bar-pct">38%</span>
                                </div>
                            </div>
                            <p class="stat-card-dominant">Dominant trait: <strong style="color: #e93d2f;">Dominance</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 2. THE PROBLEM WITH TRADITIONAL ASSESSMENTS ───────────────── -->
        <section class="first-section first-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>The Problem with Traditional Assessments</h2>
                        <p>One test. One moment. One mood. That's all most personality assessments ever capture.</p>
                    </div>
                </div>
                <div class="row problem-layout">
                    <div class="problem-quote-col">
                        <p class="pull-quote">
                            "You are not the same person you were two years ago — so why does your personality report still say you are?"
                        </p>
                    </div>
                    <div class="problem-cards-col">
                        <div class="problem-card">
                            <div class="problem-card-icon">📸</div>
                            <div>
                                <h4>Single Snapshot</h4>
                                <p>Traditional tests capture exactly one moment — your mood that morning, your stress that week, your current circumstances. The results are frozen in time the instant you submit.</p>
                            </div>
                        </div>
                        <div class="problem-card">
                            <div class="problem-card-icon">🌧</div>
                            <div>
                                <h4>Mood Dependent</h4>
                                <p>Take the same test on a good day versus a hard week and you may get entirely different results. A single assessment can never account for the full range of who you are.</p>
                            </div>
                        </div>
                        <div class="problem-card">
                            <div class="problem-card-icon">⏳</div>
                            <div>
                                <h4>You Change But Your Results Don't</h4>
                                <p>People grow, heal, learn, and shift priorities. Yet most tools leave you forever labeled by a test you took years ago — ignoring everything that has changed since.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 3. HOW OUR SYSTEM IS DIFFERENT ────────────────────────────── -->
        <section class="first-section first-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>How Our System Is <span class="accent-green">Different</span></h2>
                        <p>More assessments mean more data points — and more data points mean a profile you can actually trust.</p>
                    </div>
                </div>
                <div class="row accuracy-layout">
                    <div class="accuracy-text">
                        <h3>Accuracy that builds over time</h3>
                        <p>
                            Every book you complete adds another real-life scenario to your profile. The Assessment Library
                            doesn't replace one answer with another — it layers your responses across dozens of contexts,
                            building a picture that no single sitting could ever produce.
                        </p>
                        <p>
                            The more varied your completed assessments, the richer and more nuanced your DISC breakdown
                            becomes. Career situations, relationship dynamics, leadership moments, and everyday choices all
                            reveal different facets of your personality.
                        </p>
                        <ul class="first-list">
                            <li>Each completed book adds a new data point to your profile</li>
                            <li>Varied book categories surface different behavioral patterns</li>
                            <li>Your dominant trait becomes statistically clearer over time</li>
                            <li>Reach 50 assessments for a fully validated self-portrait</li>
                        </ul>
                    </div>
                    <div class="accuracy-ramp">
                        <div class="ramp-milestone ramp-d">
                            <div class="ramp-num">10</div>
                            <p class="ramp-label">Assessments</p>
                            <p class="ramp-phrase">Early signal</p>
                        </div>
                        <div class="ramp-milestone ramp-i">
                            <div class="ramp-num">25</div>
                            <p class="ramp-label">Assessments</p>
                            <p class="ramp-phrase">Pattern emerging</p>
                        </div>
                        <div class="ramp-milestone ramp-s">
                            <div class="ramp-num">40</div>
                            <p class="ramp-label">Assessments</p>
                            <p class="ramp-phrase">High confidence</p>
                        </div>
                        <div class="ramp-milestone ramp-c">
                            <div class="ramp-num">50</div>
                            <p class="ramp-label">Assessments</p>
                            <p class="ramp-phrase">Full portrait</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 4. ADULTS FOLD ─────────────────────────────────────────────── -->
        <section class="first-section first-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Built for Real <span class="accent-blue">Adult</span> Life</h2>
                        <p>Adults navigate complexity every day. Tracking your DISC profile over time gives you the self-awareness to lead, connect, and grow with intention.</p>
                    </div>
                </div>
                <div class="row adult-grid">
                    <article class="adult-card adult-card--d">
                        <div class="adult-card-icon">💼</div>
                        <h3>Career Clarity</h3>
                        <p>
                            Understand how your DISC style shapes the roles where you thrive, the work environments
                            that energize you, and the professional challenges that stretch you. Revisiting results over
                            time shows how your career-oriented behaviors evolve.
                        </p>
                    </article>
                    <article class="adult-card adult-card--i">
                        <div class="adult-card-icon">❤️</div>
                        <h3>Relationship Dynamics</h3>
                        <p>
                            See how your natural style affects communication with partners, friends, and family. When
                            your profile updates with experience, you gain insight into how your relational patterns
                            shift across different seasons of life.
                        </p>
                    </article>
                    <article class="adult-card adult-card--s">
                        <div class="adult-card-icon">🏆</div>
                        <h3>Leadership Development</h3>
                        <p>
                            Effective leaders know themselves deeply. Track how your decision-making, influence, and
                            team-management behaviors change as you take on more responsibility and grow through
                            real-world leadership challenges.
                        </p>
                    </article>
                    <article class="adult-card adult-card--c">
                        <div class="adult-card-icon">🌱</div>
                        <h3>Personal Growth</h3>
                        <p>
                            Intentional growth requires a baseline — and a way to measure progress. Your evolving DISC
                            profile becomes a personal development log, showing where you have grown, where you have
                            adapted, and what still calls for your attention.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 5. KIDS & DEVELOPMENT ──────────────────────────────────────── -->
        <section class="first-section first-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Watching Kids <span class="accent-green">Grow</span></h2>
                        <p>Measuring children as they develop gives parents and educators data-driven insight into personality — not just behavior.</p>
                    </div>
                </div>
                <div class="row kids-layout">
                    <div class="kids-text">
                        <h3>A window into development</h3>
                        <p>
                            Children's personalities are not static. As they grow, their DISC patterns shift in response
                            to new social environments, academic challenges, and emotional experiences. Tracking those
                            shifts over time gives families and educators something invaluable: context.
                        </p>
                        <p>
                            Instead of reacting to behavior in the moment, you can see the longer arc — noticing when a
                            child's natural style is being stretched, supported, or suppressed — and respond with
                            understanding rather than frustration.
                        </p>
                        <ul class="first-list">
                            <li>Kid-friendly story scenarios make assessment natural and stress-free</li>
                            <li>Results are tracked alongside adult profiles within the same account</li>
                            <li>Educators can use data to inform how they engage different learners</li>
                            <li>Parents gain language to understand and celebrate each child's style</li>
                        </ul>
                    </div>
                    <div class="kids-timeline">
                        <div class="age-card">
                            <div class="age-badge">Ages 5–8</div>
                            <h4>Early Expression</h4>
                            <p>DISC patterns begin showing clearly in play, conflict resolution, and how children seek attention or comfort. Early data helps identify natural strengths before labels form.</p>
                        </div>
                        <div class="age-card">
                            <div class="age-badge">Ages 9–12</div>
                            <h4>Social Identity</h4>
                            <p>Peer influence, group dynamics, and classroom performance begin shaping how children express their style. Tracking this phase reveals adaptations worth exploring.</p>
                        </div>
                        <div class="age-card">
                            <div class="age-badge">Ages 13+</div>
                            <h4>Emerging Independence</h4>
                            <p>Adolescents experience rapid identity formation. DISC data from this stage helps teens and parents navigate change with self-awareness rather than guesswork.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 6. EARLY WARNING SIGNALS ───────────────────────────────────── -->
        <section class="first-section first-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>Early Warning Signals Worth Exploring</h2>
                        <p>Sudden changes in a child's DISC scores are not cause for alarm — they are an invitation to pay closer attention.</p>
                    </div>
                </div>
                <div class="row signals-grid">
                    <div class="signal-card">
                        <div class="signal-icon">🌟</div>
                        <h4>New Passions Emerging</h4>
                        <p>A spike in Influence scores may signal a child discovering creative expression, performance, or social connection. A shift worth celebrating and nurturing.</p>
                    </div>
                    <div class="signal-card">
                        <div class="signal-icon">🤝</div>
                        <h4>Social Shifts</h4>
                        <p>A drop in Steadiness or a rise in Dominance around a new school year may reflect changing peer dynamics or a new social role the child is navigating.</p>
                    </div>
                    <div class="signal-card">
                        <div class="signal-icon">💭</div>
                        <h4>Emotional Changes</h4>
                        <p>Significant shifts across all four traits simultaneously may indicate a major emotional experience — loss, transition, or stress — that deserves a thoughtful conversation.</p>
                    </div>
                    <div class="signal-card">
                        <div class="signal-icon">📚</div>
                        <h4>Academic Transitions</h4>
                        <p>Moving from elementary to middle school, or middle to high school, often triggers measurable DISC shifts as children adapt to new expectations and environments.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 7. GROWING WITH YOU ────────────────────────────────────────── -->
        <section class="first-section first-blue-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>A Profile That <span class="accent-blue">Grows</span> With You</h2>
                        <p>This is not a one-time test. It is a living portrait — updated, refined, and deepened every time you complete a new book.</p>
                    </div>
                </div>
                <div class="row timeline-ribbon">
                    <div class="ribbon-phase">
                        <div class="ribbon-icon">📖</div>
                        <h3>First Assessment</h3>
                        <p>Your first completed book gives you your initial DISC signal — a starting point, not a verdict. It is the foundation of everything that follows.</p>
                    </div>
                    <div class="ribbon-connector"></div>
                    <div class="ribbon-phase">
                        <div class="ribbon-icon">📊</div>
                        <h3>Building Your Profile</h3>
                        <p>Each additional book adds a layer of real-world behavioral data. Patterns emerge, confidence grows, and your dominant trait becomes unmistakable.</p>
                    </div>
                    <div class="ribbon-connector"></div>
                    <div class="ribbon-phase">
                        <div class="ribbon-icon">🪞</div>
                        <h3>Your Living Portrait</h3>
                        <p>At 50 assessments you hold a rich, cross-validated self-portrait — accurate, nuanced, and uniquely yours. And it keeps evolving as you do.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 8. SUB-CATEGORIES ──────────────────────────────────────────── -->
        <section class="first-section first-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Assessments Focused on <span class="accent-blue">Your Life</span></h2>
                        <p>Every book targets a specific slice of life — so your profile reflects how you actually behave in the situations that matter most to you.</p>
                    </div>
                </div>
                <div class="row categories-grid">
                    <div class="category-card">
                        <div class="category-icon-bg cat-d">💼</div>
                        <h4>Career &amp; Work</h4>
                        <p>Discover how your DISC style shapes your professional decisions, work habits, and team dynamics.</p>
                    </div>
                    <div class="category-card">
                        <div class="category-icon-bg cat-i">❤️</div>
                        <h4>Relationships</h4>
                        <p>Understand how you communicate, connect, and resolve conflict with the people closest to you.</p>
                    </div>
                    <div class="category-card">
                        <div class="category-icon-bg cat-s">👨‍👩‍👧</div>
                        <h4>Parenting</h4>
                        <p>Explore how your natural style influences the way you guide, discipline, and connect with your children.</p>
                    </div>
                    <div class="category-card">
                        <div class="category-icon-bg cat-c">🌱</div>
                        <h4>Personal Growth</h4>
                        <p>Track how intentional development shifts your behaviors and opens new possibilities over time.</p>
                    </div>
                    <div class="category-card">
                        <div class="category-icon-bg cat-d">👥</div>
                        <h4>Social Situations</h4>
                        <p>See how your DISC profile plays out in group settings, new environments, and everyday social moments.</p>
                    </div>
                    <div class="category-card">
                        <div class="category-icon-bg cat-c">🎯</div>
                        <h4>Leadership</h4>
                        <p>Measure how your influence, decisiveness, and team-building behaviors evolve as your leadership grows.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 9. CTA ─────────────────────────────────────────────────────── -->
        <section class="first-section first-cta">
            <div class="container">
                <div class="row">
                    <div class="first-cta-inner">
                        <h2>Start Building Your Profile Today</h2>
                        <p>
                            One book is a starting point. Fifty is a portrait. Begin now and let every story you complete
                            bring you closer to the clearest, most confident picture of yourself you have ever had.
                        </p>
                        <div class="button-container cta-btns">
                            <button @click="jumpToDashboard" class="teal">Go to Dashboard</button>
                            <button @click="jumpToLibrary" class="light">Browse the Library</button>
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
    name: 'AboutFirstPerson',
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            isAuthenticated: false
        }
    },
    mounted() {
        if (process.client) {
            const talToken = localStorage.getItem('tal_token')
            const talLoggedIn = localStorage.getItem('tal_logged_in')
            let fromState = false
            const storedState = localStorage.getItem('a24x7')
            if (storedState) {
                try {
                    const parsed = JSON.parse(storedState)
                    fromState = !!(parsed.auth && parsed.auth.isAuthenticated)
                } catch (e) { }
            }
            this.isAuthenticated = !!talToken || talLoggedIn === '1' || fromState
        }
    },
    methods: {
        goTo(path, event) {
            if (event && event.target) event.target.blur()
            if (this.isAuthenticated) {
                this.$router.push(path)
            } else {
                this.$router.push({ path: '/auth/login', query: { redirect: path } })
            }
        },
        jumpToDashboard(event) { this.goTo('/dashboard', event) },
        jumpToLibrary(event) { this.goTo('/library', event) }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.about-first {

    // ── HERO ──────────────────────────────────────────────────────────────
    .first-header {
        padding: 100px 16px 80px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;

        h1 {
            margin-bottom: -20px;
            line-height: 40px;
        }

        h4 {
            font-weight: 400;
            font-family: $nunito-family;
        }

        &::after {
            background: linear-gradient(to right,
                    $color-d 25%, $color-i 25%, $color-i 50%,
                    $color-s 50%, $color-s 75%, $color-c 75%);
            position: absolute;
            content: '';
            height: 10px;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
        }

        .button-container {
            gap: 40px;
            margin-top: 40px;
            display: flex;
        }

        .hero-row {
            display: flex;
            align-items: center;
            gap: 40px;
        }

        .hero-card-col {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-stat-card {
            background: #fff;
            border-radius: 16px;
            padding: 28px 32px;
            box-shadow: 5px 5px 10px #0814368e;
            width: 100%;
            max-width: 340px;
            margin-top: 60px;
        }

        .stat-card-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 20px;
        }

        .stat-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #12304d;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Merriweather', serif;
            font-weight: 700;
            font-size: 16px;
            flex-shrink: 0;
        }

        .stat-profile-info {
            .stat-name {
                font-weight: 700;
                color: #12304d;
                font-size: 15px;
                margin: 0 0 2px;
            }

            .stat-meta {
                font-size: 12px;
                color: #888;
                margin: 0;
                font-family: $nunito-family;
            }
        }

        .stat-card-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            color: #888;
            font-weight: 600;
            margin-bottom: 14px;
            font-family: $nunito-family;
        }

        .disc-bars {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .disc-bar-row {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .disc-bar-letter {
            width: 22px;
            height: 22px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Merriweather', serif;
            font-weight: 700;
            font-size: 12px;
            color: #fff;
            flex-shrink: 0;

            &.disc-d { background: #e93d2f; }
            &.disc-i { background: #ffbd05; color: #333; }
            &.disc-s { background: #0dab49; }
            &.disc-c { background: #1666ff; }
        }

        .disc-bar-track {
            flex: 1;
            height: 10px;
            background: #eee;
            border-radius: 999px;
            overflow: hidden;
        }

        .disc-bar-fill {
            height: 100%;
            border-radius: 999px;
        }

        .disc-bar-pct {
            font-size: 12px;
            font-weight: 700;
            color: #444;
            width: 32px;
            text-align: right;
            font-family: $nunito-family;
        }

        .stat-card-dominant {
            margin-top: 16px;
            font-size: 13px;
            color: #555;
            font-family: $nunito-family;
            border-top: 1px solid #eee;
            padding-top: 14px;
        }
    }

    // ── SHARED SECTION BASE ────────────────────────────────────────────────
    .first-section {
        padding: 60px 16px 80px;
    }

    .first-light {
        background: #fff;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .first-tan {
        background: linear-gradient(135deg, #efe3d6 0%, #dcc5ad 50%, #c4a484 100%);
        box-shadow: 5px 5px 10px #412604;
    }

    .first-dark {
        background: #12304d;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .first-blue-light {
        background: #f0f6fb;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .first-cta {
        background: linear-gradient(135deg, #efe3d6 0%, #addcd0 50%, #84c0c444 100%);
    }

    .section-header {
        text-align: center;
        max-width: 680px;
        margin: 0 auto 48px;

        h2 {
            margin-bottom: 12px;
        }

        p {
            font-size: 17px;
            color: #555;
        }

        &.light {
            h2 {
                color: #fff;
            }

            p {
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }

    .accent-yellow {
        color: $color-i;
        text-shadow: 1px 1px 1px black;
    }

    .accent-green {
        color: $color-s;
        text-shadow: 1px 1px 1px black;
    }

    .accent-blue {
        color: $color-c;
        text-shadow: 1px 1px 1px black;
    }

    .button-container {
        display: flex;
        gap: 40px;
        margin-top: 40px;
    }

    // ── PROBLEM SECTION ────────────────────────────────────────────────────
    .problem-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .problem-quote-col {
        flex: 0 0 280px;

        .pull-quote {
            font-family: 'Merriweather', serif;
            font-style: italic;
            font-size: 20px;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
            border-left: 4px solid $color-i;
            padding-left: 20px;
            margin: 0;
        }
    }

    .problem-cards-col {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .problem-card {
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-left: 4px solid #e93d2f;
        border-radius: 12px;
        padding: 20px 24px;
        display: flex;
        align-items: flex-start;
        gap: 16px;

        .problem-card-icon {
            font-size: 28px;
            flex-shrink: 0;
            margin-top: 2px;
        }

        h4 {
            color: #fff;
            margin-bottom: 6px;
        }

        p {
            color: rgba(255, 255, 255, 0.78);
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
    }

    // ── ACCURACY RAMP ──────────────────────────────────────────────────────
    .accuracy-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .accuracy-text {
        flex: 1 1 auto;

        h3 {
            color: #12304d;
            margin-bottom: 12px;
        }

        p {
            color: #444;
            margin-bottom: 14px;
        }
    }

    .first-list {
        margin: 16px 0 0;
        padding-left: 20px;

        li {
            margin-bottom: 8px;
            color: #444;
            font-size: 15px;
            font-family: $nunito-family;
        }
    }

    .accuracy-ramp {
        flex: 0 0 auto;
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: stretch;
    }

    .ramp-milestone {
        background: #fff;
        border-radius: 14px;
        padding: 20px 16px;
        box-shadow: 5px 5px 10px #412604;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 100px;

        .ramp-num {
            font-family: 'Merriweather', serif;
            font-size: 32px;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 2px;
        }

        .ramp-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #777;
            font-family: $nunito-family;
            margin-bottom: 10px;
        }

        .ramp-phrase {
            font-size: 13px;
            font-weight: 600;
            font-family: $nunito-family;
            margin: 0;
        }

        &.ramp-d {
            border-top: 5px solid #e93d2f;

            .ramp-num { color: #e93d2f; }
            .ramp-phrase { color: #e93d2f; }
        }

        &.ramp-i {
            border-top: 5px solid #ffbd05;

            .ramp-num { color: #c99200; }
            .ramp-phrase { color: #c99200; }
        }

        &.ramp-s {
            border-top: 5px solid #0dab49;

            .ramp-num { color: #0dab49; }
            .ramp-phrase { color: #0dab49; }
        }

        &.ramp-c {
            border-top: 5px solid #1666ff;

            .ramp-num { color: #1666ff; }
            .ramp-phrase { color: #1666ff; }
        }
    }

    // ── ADULT BENEFIT GRID ─────────────────────────────────────────────────
    .adult-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }

    .adult-card {
        background: #fff;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #0814368e;
        border-top: 5px solid transparent;

        .adult-card-icon {
            font-size: 32px;
            margin-bottom: 12px;
        }

        h3 {
            color: #12304d;
            margin-bottom: 10px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
        }

        &.adult-card--d { border-top-color: #e93d2f; }
        &.adult-card--i { border-top-color: #ffbd05; }
        &.adult-card--s { border-top-color: #0dab49; }
        &.adult-card--c { border-top-color: #1666ff; }
    }

    // ── KIDS SECTION ───────────────────────────────────────────────────────
    .kids-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .kids-text {
        flex: 1 1 auto;

        h3 {
            color: #12304d;
            margin-bottom: 12px;
        }

        p {
            color: #444;
            margin-bottom: 14px;
        }
    }

    .kids-timeline {
        flex: 0 0 300px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .age-card {
        background: #fff;
        border-radius: 14px;
        padding: 20px 24px;
        box-shadow: 5px 5px 10px #412604;

        .age-badge {
            display: inline-block;
            background: #12304d;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 4px 12px;
            border-radius: 999px;
            margin-bottom: 10px;
            font-family: $nunito-family;
        }

        h4 {
            color: #12304d;
            margin-bottom: 8px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
    }

    // ── SIGNALS GRID ───────────────────────────────────────────────────────
    .signals-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        max-width: 860px;
        margin: 0 auto;
    }

    .signal-card {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 14px;
        padding: 24px;

        .signal-icon {
            font-size: 32px;
            margin-bottom: 10px;
        }

        h4 {
            color: #fff;
            margin-bottom: 8px;
        }

        p {
            color: rgba(255, 255, 255, 0.78);
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
    }

    // ── TIMELINE RIBBON ────────────────────────────────────────────────────
    .timeline-ribbon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0;
        max-width: 860px;
        margin: 0 auto;
    }

    .ribbon-phase {
        background: #fff;
        border-radius: 16px;
        padding: 28px 24px;
        box-shadow: 5px 5px 10px #0814368e;
        text-align: center;
        flex: 1;

        .ribbon-icon {
            font-size: 36px;
            margin-bottom: 12px;
        }

        h3 {
            color: #12304d;
            margin-bottom: 10px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
    }

    .ribbon-connector {
        width: 40px;
        height: 4px;
        background: linear-gradient(to right, $color-d, $color-c);
        flex-shrink: 0;
    }

    // ── CATEGORIES GRID ────────────────────────────────────────────────────
    .categories-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .category-card {
        background: #fff;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 5px 5px 10px #0814368e;
        text-align: center;

        h4 {
            color: #12304d;
            margin-bottom: 8px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }
    }

    .category-icon-bg {
        width: 56px;
        height: 56px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        margin: 0 auto 16px;

        &.cat-d { background: rgba(233, 61, 47, 0.12); }
        &.cat-i { background: rgba(255, 189, 5, 0.15); }
        &.cat-s { background: rgba(13, 171, 73, 0.12); }
        &.cat-c { background: rgba(22, 102, 255, 0.12); }
    }

    // ── CTA ───────────────────────────────────────────────────────────────
    .first-cta-inner {
        text-align: center;
        max-width: 620px;
        margin: 0 auto;

        h2 {
            margin-bottom: 16px;
        }

        p {
            font-size: 17px;
            color: #444;
            margin-bottom: 0;
        }
    }

    .cta-btns {
        justify-content: center;
    }
}

// ── RESPONSIVE ────────────────────────────────────────────────────────────
@media (max-width: 1024px) {
    .about-first {
        .adult-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .accuracy-ramp {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
}

@media (max-width: 768px) {
    .about-first {
        .first-header {
            padding: 80px 16px 60px;

            .hero-row {
                flex-direction: column-reverse;
            }

            .hero-card-col {
                width: 100%;
            }

            .hero-stat-card {
                margin-top: 0;
                max-width: 100%;
            }

            .button-container {
                flex-direction: column;
                align-items: stretch;
                gap: 16px;

                button {
                    width: 100%;
                }
            }
        }

        .problem-layout,
        .accuracy-layout,
        .kids-layout {
            flex-direction: column;
        }

        .problem-quote-col {
            flex: 0 0 auto;
            width: 100%;
        }

        .kids-timeline {
            flex: 0 0 auto;
            width: 100%;
        }

        .adult-grid {
            grid-template-columns: 1fr;
        }

        .signals-grid {
            grid-template-columns: 1fr;
        }

        .categories-grid {
            grid-template-columns: 1fr;
        }

        .timeline-ribbon {
            flex-direction: column;
        }

        .ribbon-connector {
            width: 4px;
            height: 32px;
            background: linear-gradient(to bottom, $color-d, $color-c);
        }

        .accuracy-ramp {
            flex-direction: column;
            width: 100%;

            .ramp-milestone {
                min-width: unset;
                width: 100%;
            }
        }

        .cta-btns {
            flex-direction: column;
            align-items: stretch;

            button {
                width: 100%;
            }
        }
    }
}
</style>
