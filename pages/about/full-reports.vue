<template>
    <section class="about-reports">
        <main-nav />

        <!-- ── 1. HERO ────────────────────────────────────────────────────── -->
        <section class="reports-header">
            <div class="container">
                <div class="row hero-row">
                    <div class="col-6">
                        <h1>Your Dashboard Shows the Data. The <span class="accent-gold">Full Report</span> Tells the Story.</h1>
                        <h4>Numbers tell you what. Your report tells you why — and what to do about it.</h4>
                        <p class="lead">
                            Your dashboard gives you the scores. The Full Report transforms those scores into a
                            rich, AI-generated narrative built around your exact DISC profile — your dominant trait,
                            your unique blend, your blind spots, and your growth edges. It is the document you
                            take off the screen and into your life.
                        </p>
                        <div class="button-container">
                            <button @click="jumpToDashboard" class="teal">Go to Dashboard</button>
                            <button @click="jumpToLibrary" class="light">Browse the Library</button>
                        </div>
                    </div>
                    <div class="col-6 hero-report-col">
                        <div class="report-cover-mockup">
                            <div class="cover-top-stripe"></div>
                            <div class="cover-trait-letter">D</div>
                            <div class="cover-label">Full Report</div>
                            <div class="cover-bars">
                                <div class="cover-bar-row">
                                    <span class="cover-bar-letter" style="color: #e93d2f;">D</span>
                                    <div class="cover-bar-track">
                                        <div class="cover-bar-fill" style="width: 82%; background: #e93d2f;"></div>
                                    </div>
                                    <span class="cover-bar-val">82</span>
                                </div>
                                <div class="cover-bar-row">
                                    <span class="cover-bar-letter" style="color: #ffbd05;">I</span>
                                    <div class="cover-bar-track">
                                        <div class="cover-bar-fill" style="width: 61%; background: #ffbd05;"></div>
                                    </div>
                                    <span class="cover-bar-val">61</span>
                                </div>
                                <div class="cover-bar-row">
                                    <span class="cover-bar-letter" style="color: #0dab49;">S</span>
                                    <div class="cover-bar-track">
                                        <div class="cover-bar-fill" style="width: 38%; background: #0dab49;"></div>
                                    </div>
                                    <span class="cover-bar-val">38</span>
                                </div>
                                <div class="cover-bar-row">
                                    <span class="cover-bar-letter" style="color: #1666ff;">C</span>
                                    <div class="cover-bar-track">
                                        <div class="cover-bar-fill" style="width: 55%; background: #1666ff;"></div>
                                    </div>
                                    <span class="cover-bar-val">55</span>
                                </div>
                            </div>
                            <div class="cover-page-count">20 pages of deep analysis</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 2. DASHBOARD VS FULL REPORT ───────────────────────────────── -->
        <section class="reports-section reports-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>Good Data vs. Great Insight</h2>
                        <p>Your dashboard is where results live. Your report is where they become meaningful.</p>
                    </div>
                </div>
                <div class="row compare-layout">
                    <div class="compare-card compare-card--dashboard">
                        <div class="compare-card-header">
                            <div class="compare-card-icon">📊</div>
                            <h3>Your Dashboard</h3>
                        </div>
                        <ul class="compare-list">
                            <li>Bar charts and percentages</li>
                            <li>Confidence scores</li>
                            <li>DISC trait labels</li>
                            <li>Real-time updates as data grows</li>
                            <li>Quick at-a-glance overview</li>
                            <li>Self vs. Others comparison numbers</li>
                        </ul>
                        <p class="compare-note-text">
                            Perfect for tracking your progress and checking where you stand — always live, always current.
                        </p>
                    </div>
                    <div class="compare-divider">
                        <span class="compare-vs">vs</span>
                    </div>
                    <div class="compare-card compare-card--report">
                        <div class="compare-premium-badge">Premium</div>
                        <div class="compare-card-header">
                            <div class="compare-card-icon">📄</div>
                            <h3>The Full Report</h3>
                        </div>
                        <ul class="compare-list compare-list--premium">
                            <li>Deep narrative analysis</li>
                            <li>Trait-by-trait written interpretation</li>
                            <li>Personalized growth recommendations</li>
                            <li>Focus area insights tailored to you</li>
                            <li>Downloadable PDF</li>
                            <li>10–20 pages of meaningful content</li>
                        </ul>
                        <p class="compare-note-text compare-note-text--premium">
                            A permanent document that translates your scores into language you can read, share, and act on.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 3. WHAT'S INSIDE ───────────────────────────────────────────── -->
        <section class="reports-section reports-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>What You'll Find Inside</h2>
                        <p>Every full report follows a structured narrative arc — from your raw data to real-world application.</p>
                    </div>
                </div>
                <div class="row inside-grid">
                    <div class="inside-card">
                        <div class="inside-num">1</div>
                        <div class="inside-content">
                            <h4>Cover Page</h4>
                            <p>Your dominant trait, overall DISC profile summary, and the context that frames everything that follows.</p>
                        </div>
                    </div>
                    <div class="inside-card">
                        <div class="inside-num">2</div>
                        <div class="inside-content">
                            <h4>DISC Score Breakdown</h4>
                            <p>Detailed bar charts with your exact scores across all four traits — the foundation of your profile.</p>
                        </div>
                    </div>
                    <div class="inside-card">
                        <div class="inside-num">3</div>
                        <div class="inside-content">
                            <h4>Trait-by-Trait Deep Dive</h4>
                            <p>A written interpretation of what each score means for you specifically — not a generic description.</p>
                        </div>
                    </div>
                    <div class="inside-card">
                        <div class="inside-num">4</div>
                        <div class="inside-content">
                            <h4>Your Unique Combination</h4>
                            <p>How your specific blend of traits shows up in real life — the interplay between your dominant and secondary traits.</p>
                        </div>
                    </div>
                    <div class="inside-card">
                        <div class="inside-num">5</div>
                        <div class="inside-content">
                            <h4>Strengths &amp; Blind Spots</h4>
                            <p>What to lean into and what to watch out for — the honest picture that self-reflection alone rarely surfaces.</p>
                        </div>
                    </div>
                    <div class="inside-card">
                        <div class="inside-num">6</div>
                        <div class="inside-content">
                            <h4>Growth Recommendations</h4>
                            <p>Personalized suggestions for your focus areas — concrete, actionable, grounded in your actual profile.</p>
                        </div>
                    </div>
                    <div class="inside-card inside-card--wide">
                        <div class="inside-num inside-num--gold">7</div>
                        <div class="inside-content">
                            <h4>Self vs. Others Comparison <span class="comprehensive-tag">Comprehensive Report Only</span></h4>
                            <p>1st Person vs. 3rd Person results shown side-by-side with a full gap analysis — available exclusively in the comprehensive 20-page report combining both your self-perception and how others see you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 4. FOUR WAYS TO GET A REPORT ──────────────────────────────── -->
        <section class="reports-section reports-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Four Ways to Get Your Report</h2>
                        <p>Earn free reports by building your data — or purchase the most comprehensive version anytime.</p>
                    </div>
                </div>
                <div class="row ways-grid">
                    <div class="way-card way-card--s">
                        <div class="way-num-badge">1</div>
                        <h3>Free 1st Person Report</h3>
                        <p class="way-unlock-label">How to unlock</p>
                        <p class="way-description">
                            Reach 100% on your 1st Person confidence meter by completing 50 self-assessments.
                            Choose 3 focus areas and receive a free, personalized 10-page report built around what
                            matters most to you.
                        </p>
                        <div class="way-detail">
                            <span class="way-detail-chip">10 pages</span>
                            <span class="way-detail-chip">Free</span>
                            <span class="way-detail-chip">Focus areas</span>
                        </div>
                    </div>
                    <div class="way-card way-card--c">
                        <div class="way-num-badge way-num-badge--c">2</div>
                        <h3>Free 3rd Person Overall Report</h3>
                        <p class="way-unlock-label">How to unlock</p>
                        <p class="way-description">
                            Reach 100% on your 3rd Person overall confidence meter — 50 completed responses from
                            your invited circle. Receive a 10-page report comparing your self-perception with how
                            others see you.
                        </p>
                        <div class="way-detail">
                            <span class="way-detail-chip">10 pages</span>
                            <span class="way-detail-chip">Free</span>
                            <span class="way-detail-chip">Self vs. Others</span>
                        </div>
                    </div>
                    <div class="way-card way-card--d">
                        <div class="way-num-badge way-num-badge--d">3</div>
                        <h3>Free Individual Assessment Report</h3>
                        <p class="way-unlock-label">How to unlock</p>
                        <p class="way-description">
                            When one specific assessment's 3rd Person confidence reaches 100% — just 10 completed
                            responses for that book. Receive a free 5-page deep dive on that particular relationship
                            context.
                        </p>
                        <div class="way-detail">
                            <span class="way-detail-chip">5 pages</span>
                            <span class="way-detail-chip">Free</span>
                            <span class="way-detail-chip">One assessment</span>
                        </div>
                    </div>
                    <div class="way-card way-card--premium">
                        <div class="way-premium-banner">Most Comprehensive</div>
                        <div class="way-num-badge way-num-badge--gold">4</div>
                        <h3>Purchase Anytime — 10 Credits</h3>
                        <p class="way-unlock-label">Always available</p>
                        <p class="way-description">
                            Buy the most comprehensive report at any time without waiting to reach any confidence
                            threshold. The full 20-page report combines your 1st Person and 3rd Person analysis for
                            the deepest possible picture of your personality profile.
                        </p>
                        <div class="way-detail">
                            <span class="way-detail-chip way-detail-chip--gold">20 pages</span>
                            <span class="way-detail-chip way-detail-chip--gold">10 credits</span>
                            <span class="way-detail-chip way-detail-chip--gold">Most complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 5. WHY THE FULL REPORT MATTERS ────────────────────────────── -->
        <section class="reports-section reports-blue-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>More Than a Number</h2>
                        <p>Your dashboard is a starting point. Your report is where understanding begins.</p>
                    </div>
                </div>
                <div class="row benefit-grid">
                    <article class="benefit-card">
                        <div class="benefit-icon">📖</div>
                        <h4>Data tells you what. The report tells you why.</h4>
                        <p>
                            Scores are a map. The report is the legend. The narrative bridges the gap between
                            numbers on a screen and what those numbers mean in the context of how you live and work.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon">🎯</div>
                        <h4>Uniquely yours.</h4>
                        <p>
                            The report is AI-generated from your exact profile — not pulled from a template.
                            Your dominant trait, your secondary trait, and your chosen focus areas combine to
                            produce content that belongs only to you.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon">📤</div>
                        <h4>Take it anywhere.</h4>
                        <p>
                            Download a PDF to share with a coach, therapist, mentor, or HR team. Your insights
                            don't have to stay locked inside an app — they can travel with you wherever
                            growth happens.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon">🗓️</div>
                        <h4>A snapshot in time.</h4>
                        <p>
                            People change. Personalities evolve. Your report is a permanent record of your
                            personality at this stage of your journey — something you can return to and compare
                            against future reports as you grow.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 6. THE COMPREHENSIVE REPORT ───────────────────────────────── -->
        <section class="reports-section reports-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>The <span class="accent-gold">Complete</span> Picture</h2>
                        <p>The 20-page comprehensive report — purchase anytime for 10 credits.</p>
                    </div>
                </div>
                <div class="row comprehensive-layout">
                    <div class="comprehensive-text">
                        <h3>Why the comprehensive report is different</h3>
                        <p>
                            The free reports each tell part of your story. The comprehensive report tells all of it.
                            By combining your 1st Person self-assessment data with your 3rd Person external perception
                            data, it delivers a level of analysis unavailable in any other format.
                        </p>
                        <p>
                            You'll see not just who you think you are — but how the gap between self-perception and
                            external perception shows up in your behavior, your communication style, and your
                            relationships. This is the report built for leadership development, career transitions,
                            and serious relationship work.
                        </p>
                        <ul class="comprehensive-features">
                            <li>Combines self-perception AND how others see you</li>
                            <li>Full gap analysis with narrative interpretation</li>
                            <li>Blind spot identification grounded in real data</li>
                            <li>Ideal for leadership development and career transitions</li>
                            <li>Best for deep relationship and communication work</li>
                            <li>Available at any confidence level — no waiting required</li>
                        </ul>
                        <div class="button-container">
                            <button @click="jumpToDashboard" class="teal">Generate Your Report</button>
                        </div>
                    </div>
                    <div class="comprehensive-toc">
                        <div class="toc-card">
                            <p class="toc-header-label">Table of Contents</p>
                            <div class="toc-item"><span class="toc-num">1</span><span class="toc-title">Cover Page &amp; Profile Summary</span></div>
                            <div class="toc-item"><span class="toc-num">2</span><span class="toc-title">DISC Score Breakdown</span></div>
                            <div class="toc-item"><span class="toc-num">3</span><span class="toc-title">Trait-by-Trait Interpretation</span></div>
                            <div class="toc-item"><span class="toc-num">4</span><span class="toc-title">Your Unique Combination</span></div>
                            <div class="toc-item"><span class="toc-num">5</span><span class="toc-title">Strengths &amp; Blind Spots</span></div>
                            <div class="toc-item"><span class="toc-num">6</span><span class="toc-title">Growth Recommendations</span></div>
                            <div class="toc-item toc-item--gold"><span class="toc-num toc-num--gold">7</span><span class="toc-title">3rd Person Profile</span></div>
                            <div class="toc-item toc-item--gold"><span class="toc-num toc-num--gold">8</span><span class="toc-title">Self vs. Others Breakdown</span></div>
                            <div class="toc-item toc-item--gold"><span class="toc-num toc-num--gold">9</span><span class="toc-title">Gap Analysis &amp; Blind Spots</span></div>
                            <div class="toc-item toc-item--gold"><span class="toc-num toc-num--gold">10</span><span class="toc-title">Comprehensive Recommendations</span></div>
                            <p class="toc-footer-note">+ additional sections — 20 pages total</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 7. FOCUS AREAS ─────────────────────────────────────────────── -->
        <section class="reports-section reports-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Tailored to What Matters Most to You</h2>
                        <p>When generating your 1st Person report, you choose 3 focus areas — and the AI tailors the entire narrative around those choices.</p>
                    </div>
                </div>
                <div class="row focus-content">
                    <div class="focus-intro">
                        <p>
                            Not everyone wants to read about their DISC profile through the same lens. A parent
                            wants to understand how their personality shows up at home. A manager wants leadership
                            insights. A person in therapy wants language for self-understanding. The focus area
                            system lets you tell the report what to focus on.
                        </p>
                        <p>
                            You pick three focus areas when you generate your report. The AI uses those choices
                            to shape every section — the interpretation of your traits, the recommendations,
                            the blind spots — all of it filtered through the contexts that matter to you.
                        </p>
                    </div>
                    <div class="focus-chips">
                        <span class="focus-chip focus-chip--d">Career</span>
                        <span class="focus-chip focus-chip--i">Relationships</span>
                        <span class="focus-chip focus-chip--s">Personal Growth</span>
                        <span class="focus-chip focus-chip--c">Parenting</span>
                        <span class="focus-chip focus-chip--d">Leadership</span>
                        <span class="focus-chip focus-chip--i">Social Situations</span>
                        <span class="focus-chip focus-chip--s">Self-Understanding</span>
                        <span class="focus-chip focus-chip--c">Communication</span>
                    </div>
                    <div class="focus-tagline">
                        <p>Same DISC data. Completely different insights depending on your focus.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 8. REPORTS ARE GENERATED FRESH ────────────────────────────── -->
        <section class="reports-section reports-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Every Report Is Written for You</h2>
                        <p>No templates. No generic descriptions. Each report is generated fresh from your exact data.</p>
                    </div>
                </div>
                <div class="row fresh-layout">
                    <div class="fresh-points">
                        <div class="fresh-point">
                            <div class="fresh-icon">✍️</div>
                            <div class="fresh-text">
                                <h4>AI-generated from your scores</h4>
                                <p>
                                    Every report is written fresh from your exact DISC scores at the time of generation.
                                    There are no pre-written paragraphs that get swapped in based on a trait label —
                                    the language is created specifically for your profile.
                                </p>
                            </div>
                        </div>
                        <div class="fresh-point">
                            <div class="fresh-icon">🔄</div>
                            <div class="fresh-text">
                                <h4>The narrative changes with your data</h4>
                                <p>
                                    Your dominant trait, secondary trait, and chosen focus areas all influence the
                                    narrative. Two people with similar overall scores but different secondary traits
                                    and different focus areas will receive meaningfully different reports.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="fresh-warning">
                        <div class="warning-box">
                            <div class="warning-icon">⚠️</div>
                            <div class="warning-content">
                                <h4>Important: Download Your Report Immediately</h4>
                                <p>
                                    Reports are <strong>not permanently stored</strong> in the system. Once generated,
                                    download your PDF right away. If you need the report again later, you will need to
                                    generate a new one — which will reflect your current data at that time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 9. HOW TO GET STARTED ──────────────────────────────────────── -->
        <section class="reports-section reports-blue-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>See How Close You Already Are</h2>
                        <p>You may be closer to a free report than you think.</p>
                    </div>
                </div>
                <div class="row started-steps">
                    <div class="started-step">
                        <div class="started-badge started-badge--d">1</div>
                        <div class="started-content">
                            <h4>Check your confidence scores</h4>
                            <p>
                                Head to your dashboard and look at your 1st Person and 3rd Person confidence
                                meters. They show exactly how far along you are toward earning each free report.
                            </p>
                        </div>
                    </div>
                    <div class="started-connector"></div>
                    <div class="started-step">
                        <div class="started-badge started-badge--s">2</div>
                        <div class="started-content">
                            <h4>See which reports you're close to unlocking</h4>
                            <p>
                                Your dashboard shows your current confidence levels at a glance. A quick look
                                will tell you whether you need a few more self-assessments, a handful more
                                3rd Person responses, or are already at 100% and ready to generate.
                            </p>
                        </div>
                    </div>
                    <div class="started-connector"></div>
                    <div class="started-step">
                        <div class="started-badge started-badge--c">3</div>
                        <div class="started-content">
                            <h4>Or purchase a comprehensive report anytime</h4>
                            <p>
                                Don't want to wait? The comprehensive 20-page report is available at any
                                confidence level for 10 credits. Generate it directly from your dashboard
                                whenever you're ready.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row started-cta-row">
                    <button @click="jumpToDashboard" class="teal">Check Your Dashboard</button>
                </div>
            </div>
        </section>

        <!-- ── 10. CTA ─────────────────────────────────────────────────────── -->
        <section class="reports-section reports-cta">
            <div class="container">
                <div class="row">
                    <div class="cta-inner">
                        <h2>Ready to See the Full Picture?</h2>
                        <p>
                            Your dashboard has the data. Your report has the story.
                            Head to your dashboard to check your confidence scores, see which free reports
                            you're close to unlocking, or generate your comprehensive report today.
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
    name: 'AboutFullReports',
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return { isAuthenticated: false }
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

.about-reports {

    // ── HERO ──────────────────────────────────────────────────────────────
    .reports-header {
        padding: 100px 16px 80px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;

        h1 {
            margin-bottom: -20px;
            line-height: 44px;
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

        .hero-report-col {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .report-cover-mockup {
        background: #12304d;
        border-radius: 16px;
        padding: 32px 28px 24px;
        width: 100%;
        max-width: 300px;
        box-shadow: 8px 8px 28px rgba(8, 20, 54, 0.55);
        position: relative;
        overflow: hidden;

        .cover-top-stripe {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: $color-i;
        }

        .cover-trait-letter {
            font-family: 'Merriweather', Georgia, serif;
            font-size: 72px;
            font-weight: 700;
            color: $color-i;
            line-height: 1;
            margin-bottom: 4px;
        }

        .cover-label {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 24px;
            font-family: $nunito-family;
        }

        .cover-bars {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
        }

        .cover-bar-row {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cover-bar-letter {
            font-family: 'Merriweather', Georgia, serif;
            font-weight: 700;
            font-size: 13px;
            width: 14px;
            flex-shrink: 0;
        }

        .cover-bar-track {
            flex: 1;
            height: 8px;
            background: rgba(255, 255, 255, 0.12);
            border-radius: 4px;
            overflow: hidden;
        }

        .cover-bar-fill {
            height: 100%;
            border-radius: 4px;
        }

        .cover-bar-val {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.5);
            font-family: $nunito-family;
            width: 24px;
            text-align: right;
            flex-shrink: 0;
        }

        .cover-page-count {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.4);
            font-family: $nunito-family;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 12px;
            letter-spacing: 0.04em;
        }
    }

    // ── SHARED SECTION BASE ────────────────────────────────────────────────
    .reports-section {
        padding: 60px 16px 80px;
    }

    .reports-light {
        background: #fff;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .reports-tan {
        background: linear-gradient(135deg, #efe3d6 0%, #dcc5ad 50%, #c4a484 100%);
        box-shadow: 5px 5px 10px #412604;
    }

    .reports-dark {
        background: #12304d;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .reports-blue-light {
        background: #f0f6fb;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .reports-cta {
        background: linear-gradient(135deg, #efe3d6 0%, #addcd0 50%, #84c0c444 100%);
    }

    .section-header {
        text-align: center;
        max-width: 680px;
        margin: 0 auto 48px;

        h2 {
            margin-bottom: 12px;
            color: #12304d;
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

    .accent-gold {
        color: $color-i;
        text-shadow: 1px 1px 1px black;
    }

    .button-container {
        display: flex;
        gap: 40px;
        margin-top: 40px;
    }

    // ── DASHBOARD VS FULL REPORT ───────────────────────────────────────────
    .compare-layout {
        display: flex;
        gap: 32px;
        align-items: stretch;
    }

    .compare-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        .compare-vs {
            font-family: 'Merriweather', Georgia, serif;
            font-size: 22px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.35);
        }
    }

    .compare-card {
        flex: 1;
        border-radius: 16px;
        padding: 28px;
        position: relative;

        &.compare-card--dashboard {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
        }

        &.compare-card--report {
            background: #fff;
            border-top: 4px solid $color-i;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
    }

    .compare-premium-badge {
        position: absolute;
        top: -14px;
        right: 20px;
        background: $color-i;
        color: #1a1000;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 4px 12px;
        border-radius: 20px;
        font-family: $nunito-family;
    }

    .compare-card-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;

        .compare-card-icon {
            font-size: 28px;
        }

        h3 {
            margin: 0;

            .compare-card--dashboard & {
                color: #fff;
            }

            .compare-card--report & {
                color: #12304d;
            }
        }
    }

    .compare-list {
        list-style: none;
        padding: 0;
        margin: 0 0 16px;

        li {
            padding: 8px 0 8px 20px;
            position: relative;
            font-family: $nunito-family;
            font-size: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            color: rgba(255, 255, 255, 0.82);

            &:before {
                content: '→';
                position: absolute;
                left: 0;
                color: rgba(255, 255, 255, 0.4);
            }

            &:last-child {
                border-bottom: none;
            }
        }

        &.compare-list--premium {
            li {
                border-bottom-color: rgba(0, 0, 0, 0.06);
                color: #444;

                &:before {
                    color: $color-i;
                }
            }
        }
    }

    .compare-note-text {
        font-size: 13px;
        line-height: 1.6;
        margin: 0;
        font-family: $nunito-family;
        color: rgba(255, 255, 255, 0.55);

        &.compare-note-text--premium {
            color: #777;
        }
    }

    // ── WHAT'S INSIDE ──────────────────────────────────────────────────────
    .inside-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .inside-card {
        background: #f6f9fc;
        border-radius: 14px;
        padding: 24px;
        display: flex;
        gap: 16px;
        align-items: flex-start;
        box-shadow: 3px 3px 8px #0814368e;

        &.inside-card--wide {
            grid-column: 1 / -1;
            background: #f0f6fb;
            border: 1px solid rgba(18, 48, 77, 0.1);
        }
    }

    .inside-num {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #12304d;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', Georgia, serif;
        font-weight: 700;
        font-size: 16px;

        &.inside-num--gold {
            background: $color-i;
            color: #1a1000;
        }
    }

    .inside-content {
        h4 {
            color: #12304d;
            margin: 0 0 8px;
            font-family: 'Merriweather', Georgia, serif;
        }

        p {
            color: #555;
            font-size: 14px;
            font-family: $nunito-family;
            margin: 0;
            line-height: 1.6;
        }
    }

    .comprehensive-tag {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        background: $color-i;
        color: #1a1000;
        padding: 2px 8px;
        border-radius: 10px;
        font-family: $nunito-family;
        vertical-align: middle;
        margin-left: 8px;
    }

    // ── FOUR WAYS ──────────────────────────────────────────────────────────
    .ways-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    .way-card {
        background: #fff;
        border-radius: 16px;
        padding: 28px;
        box-shadow: 5px 5px 10px #412604;
        position: relative;
        border-top: 4px solid transparent;

        h3 {
            color: #12304d;
            font-family: 'Merriweather', Georgia, serif;
            margin: 12px 0 8px;
            font-size: 17px;
        }

        &.way-card--s {
            border-top-color: $color-s;
        }

        &.way-card--c {
            border-top-color: $color-c;
        }

        &.way-card--d {
            border-top-color: $color-d;
        }

        &.way-card--premium {
            border-top-color: $color-i;
            box-shadow: 8px 8px 24px #412604;
            background: #fffdf5;
        }
    }

    .way-premium-banner {
        position: absolute;
        top: -14px;
        left: 50%;
        transform: translateX(-50%);
        background: $color-i;
        color: #1a1000;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 4px 16px;
        border-radius: 20px;
        font-family: $nunito-family;
        white-space: nowrap;
    }

    .way-num-badge {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: $color-s;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', Georgia, serif;
        font-weight: 700;
        font-size: 16px;

        &.way-num-badge--c {
            background: $color-c;
        }

        &.way-num-badge--d {
            background: $color-d;
        }

        &.way-num-badge--gold {
            background: $color-i;
            color: #1a1000;
        }
    }

    .way-unlock-label {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #888;
        margin: 0 0 6px;
        font-family: $nunito-family;
    }

    .way-description {
        color: #555;
        font-size: 14px;
        font-family: $nunito-family;
        line-height: 1.65;
        margin-bottom: 16px;
    }

    .way-detail {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .way-detail-chip {
        background: rgba(18, 48, 77, 0.08);
        color: #12304d;
        font-size: 11px;
        font-weight: 600;
        font-family: $nunito-family;
        padding: 4px 10px;
        border-radius: 20px;

        &.way-detail-chip--gold {
            background: rgba(255, 189, 5, 0.15);
            color: #7a5800;
        }
    }

    // ── BENEFIT CARDS ──────────────────────────────────────────────────────
    .benefit-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    .benefit-card {
        background: #fff;
        border-radius: 16px;
        padding: 28px;
        box-shadow: 5px 5px 10px #0814368e;

        .benefit-icon {
            font-size: 32px;
            margin-bottom: 14px;
        }

        h4 {
            color: #12304d;
            font-family: 'Merriweather', Georgia, serif;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.4;
        }

        p {
            color: #555;
            font-size: 14px;
            font-family: $nunito-family;
            line-height: 1.65;
            margin: 0;
        }
    }

    // ── COMPREHENSIVE REPORT ───────────────────────────────────────────────
    .comprehensive-layout {
        display: flex;
        gap: 60px;
        align-items: flex-start;
    }

    .comprehensive-text {
        flex: 1 1 auto;

        h3 {
            color: #fff;
            font-family: 'Merriweather', Georgia, serif;
            margin-bottom: 16px;
        }

        p {
            color: rgba(255, 255, 255, 0.82);
            font-size: 15px;
            font-family: $nunito-family;
            margin-bottom: 14px;
            line-height: 1.7;
        }
    }

    .comprehensive-features {
        margin: 4px 0 28px;
        padding-left: 20px;

        li {
            margin-bottom: 10px;
            color: rgba(255, 255, 255, 0.82);
            font-size: 15px;
            font-family: $nunito-family;
        }
    }

    .comprehensive-toc {
        flex: 0 0 300px;
    }

    .toc-card {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 24px;
    }

    .toc-header-label {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.45);
        margin-bottom: 16px;
        font-family: $nunito-family;
    }

    .toc-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);

        &:last-of-type {
            border-bottom: none;
        }

        &.toc-item--gold {
            .toc-title {
                color: rgba(255, 189, 5, 0.9);
            }
        }
    }

    .toc-num {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
        font-family: $nunito-family;

        &.toc-num--gold {
            background: rgba(255, 189, 5, 0.2);
            color: $color-i;
        }
    }

    .toc-title {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.75);
        font-family: $nunito-family;
    }

    .toc-footer-note {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.35);
        font-family: $nunito-family;
        margin-top: 12px;
        text-align: center;
    }

    // ── FOCUS AREAS ────────────────────────────────────────────────────────
    .focus-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 760px;
        margin: 0 auto;
    }

    .focus-intro {
        text-align: center;
        margin-bottom: 32px;

        p {
            color: #444;
            font-size: 15px;
            font-family: $nunito-family;
            line-height: 1.7;
            margin-bottom: 14px;
        }
    }

    .focus-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-bottom: 32px;
    }

    .focus-chip {
        background: #f0f6fb;
        color: #12304d;
        border: 2px solid rgba(18, 48, 77, 0.12);
        border-radius: 40px;
        padding: 10px 22px;
        font-size: 15px;
        font-weight: 600;
        font-family: $nunito-family;
        box-shadow: 3px 3px 8px #0814368e;

        &.focus-chip--d {
            border-color: $color-d;
        }

        &.focus-chip--i {
            border-color: $color-i;
        }

        &.focus-chip--s {
            border-color: $color-s;
        }

        &.focus-chip--c {
            border-color: $color-c;
        }
    }

    .focus-tagline {
        text-align: center;

        p {
            font-family: 'Merriweather', Georgia, serif;
            font-size: 17px;
            color: #12304d;
            font-style: italic;
        }
    }

    // ── FRESH GENERATION ───────────────────────────────────────────────────
    .fresh-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .fresh-points {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    .fresh-point {
        display: flex;
        gap: 16px;
        align-items: flex-start;

        .fresh-icon {
            font-size: 28px;
            flex-shrink: 0;
            margin-top: 2px;
        }

        .fresh-text {
            h4 {
                color: #12304d;
                font-family: 'Merriweather', Georgia, serif;
                margin-bottom: 8px;
                font-size: 16px;
            }

            p {
                color: #555;
                font-size: 14px;
                font-family: $nunito-family;
                line-height: 1.65;
                margin: 0;
            }
        }
    }

    .fresh-warning {
        flex: 0 0 340px;
    }

    .warning-box {
        background: #fff8e6;
        border: 2px solid $color-i;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 5px 5px 10px #412604;
        display: flex;
        gap: 16px;
        align-items: flex-start;

        .warning-icon {
            font-size: 28px;
            flex-shrink: 0;
        }

        .warning-content {
            h4 {
                color: #7a5800;
                font-family: 'Merriweather', Georgia, serif;
                margin-bottom: 10px;
                font-size: 15px;
            }

            p {
                color: #5a4000;
                font-size: 14px;
                font-family: $nunito-family;
                line-height: 1.65;
                margin: 0;
            }
        }
    }

    // ── HOW TO GET STARTED ─────────────────────────────────────────────────
    .started-steps {
        display: flex;
        flex-direction: column;
        gap: 0;
        max-width: 700px;
        margin: 0 auto 40px;
    }

    .started-step {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .started-badge {
        flex-shrink: 0;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', Georgia, serif;
        font-weight: 700;
        font-size: 18px;
        color: #fff;
        margin-top: 2px;

        &.started-badge--d {
            background: $color-d;
        }

        &.started-badge--s {
            background: $color-s;
        }

        &.started-badge--c {
            background: $color-c;
        }
    }

    .started-content {
        padding-bottom: 4px;

        h4 {
            color: #12304d;
            font-family: 'Merriweather', Georgia, serif;
            margin-bottom: 8px;
        }

        p {
            color: #555;
            font-size: 14px;
            font-family: $nunito-family;
            line-height: 1.65;
            margin-bottom: 0;
        }
    }

    .started-connector {
        width: 2px;
        height: 28px;
        background: rgba(18, 48, 77, 0.15);
        margin-left: 21px;
    }

    .started-cta-row {
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }

    // ── CTA ────────────────────────────────────────────────────────────────
    .cta-inner {
        text-align: center;
        max-width: 620px;
        margin: 0 auto;

        h2 {
            color: #12304d;
            margin-bottom: 16px;
        }

        p {
            font-size: 17px;
            color: #444;
            margin-bottom: 0;
            font-family: $nunito-family;
        }
    }

    .cta-btns {
        justify-content: center;
    }
}

// ── RESPONSIVE ────────────────────────────────────────────────────────────
@media (max-width: 1024px) {
    .about-reports {
        .ways-grid {
            grid-template-columns: 1fr;
        }

        .benefit-grid {
            grid-template-columns: 1fr;
        }

        .comprehensive-layout {
            flex-direction: column;
        }

        .comprehensive-toc {
            flex: 0 0 auto;
            width: 100%;
        }

        .inside-grid {
            grid-template-columns: 1fr;
        }

        .inside-card--wide {
            grid-column: auto;
        }

        .compare-layout {
            flex-direction: column;
        }

        .compare-divider {
            display: none;
        }
    }
}

@media (max-width: 768px) {
    .about-reports {
        .reports-header {
            padding: 80px 16px 60px;

            .hero-row {
                flex-direction: column-reverse;
            }

            .hero-report-col {
                margin-bottom: 20px;
            }

            .report-cover-mockup {
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

        .fresh-layout {
            flex-direction: column;
        }

        .fresh-warning {
            flex: 0 0 auto;
            width: 100%;
        }

        .started-steps {
            max-width: 100%;
        }

        .focus-chips {
            gap: 8px;
        }

        .focus-chip {
            font-size: 14px;
            padding: 8px 16px;
        }

        .cta-btns {
            flex-direction: column;
            align-items: stretch;

            button {
                width: 100%;
            }
        }

        .started-cta-row {
            button {
                width: 100%;
            }
        }
    }
}
</style>
