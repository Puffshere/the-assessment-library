<template>
    <section class="about-conf">
        <main-nav />

        <!-- ── 1. HERO ────────────────────────────────────────────────────── -->
        <section class="conf-header">
            <div class="container">
                <div class="row hero-row">
                    <div class="col-6">
                        <h1>The <span class="accent-green">Confidence</span> Meter Explained</h1>
                        <h4>Not all results are created equal. The more perspectives you gather, the stronger your
                            signal.</h4>
                        <p class="lead">
                            The Confidence Meter is your real-time indicator of how reliable your DISC results are.
                            A higher confidence score means more data, more perspectives, and more accurate insights —
                            giving you the full picture of who you really are.
                        </p>
                        <div class="button-container">
                            <button @click="jumpToDashboard" class="teal">View Your Dashboard</button>
                            <button @click="jumpToLibrary" class="light">Browse the Library</button>
                        </div>
                    </div>
                    <div class="col-6 hero-meter-col">
                        <div class="hero-meter-demo">
                            <p class="meter-label">Your confidence grows with every insight</p>
                            <ConfidenceBar :value="68" />
                            <div class="disc-dots">
                                <span class="disc-dot dot-d">D</span>
                                <span class="disc-dot dot-i">I</span>
                                <span class="disc-dot dot-s">S</span>
                                <span class="disc-dot dot-c">C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 2. 1ST PERSON METER ───────────────────────────────────────── -->
        <section class="conf-section conf-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>The 1st Person Confidence Meter</h2>
                        <p>Your self-assessment confidence grows every time you complete a book as yourself.</p>
                    </div>
                </div>
                <div class="row meter-explain-layout">
                    <div class="meter-text">
                        <h3>How it fills up</h3>
                        <p>
                            Every time you finish a story-based assessment as yourself, your 1st Person Confidence
                            Meter moves forward. Each book adds another data point, strengthening the picture of
                            your DISC style across real-life scenarios.
                        </p>
                        <p>
                            The meter reaches <strong>100% confidence</strong> after you have completed
                            <strong>50 assessments</strong>. At that point, your self-portrait is rich,
                            cross-validated, and highly reliable.
                        </p>
                        <ul class="conf-list">
                            <li>Each completed self-assessment advances the meter</li>
                            <li>Books across different categories add richer, more varied data</li>
                            <li>Your overall DISC breakdown becomes more accurate with every book</li>
                            <li>Reach <strong>100% at 50 completed assessments</strong> to unlock a free report</li>
                        </ul>
                    </div>
                    <div class="meter-stages">
                        <div class="meter-stage">
                            <p class="stage-label">Just starting out</p>
                            <ConfidenceBar :value="12" />
                        </div>
                        <div class="meter-stage">
                            <p class="stage-label">Building momentum</p>
                            <ConfidenceBar :value="52" />
                        </div>
                        <div class="meter-stage">
                            <p class="stage-label">Fully confident</p>
                            <ConfidenceBar :value="100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 3. 3RD PERSON OVERALL ─────────────────────────────────────── -->
        <section class="conf-section conf-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>The 3rd Person <span class="accent-yellow">Overall</span> Confidence Meter</h2>
                        <p>See how others perceive you — and know exactly how strong that signal really is.</p>
                    </div>
                </div>
                <div class="row third-overall-layout">
                    <article class="third-overall-card">
                        <div class="card-icon">👥</div>
                        <h3>What it measures</h3>
                        <p>
                            When you invite people to take assessments <em>as you</em>, each completed response
                            adds to your 3rd Person Overall Confidence Meter. This meter reflects how thoroughly
                            your circle has weighed in across all the assessments you have invited them to complete.
                        </p>
                    </article>
                    <article class="third-overall-card">
                        <div class="card-icon">📊</div>
                        <h3>How it fills</h3>
                        <p>
                            The overall 3rd Person meter uses the <strong>same scale as your 1st Person meter</strong> —
                            it reaches 100% after <strong>50 total completed responses</strong> from the people you have
                            invited across all assessments. This ensures the comparison between how you see yourself
                            and how others see you carries equal weight.
                        </p>
                    </article>
                    <article class="third-overall-card">
                        <div class="card-icon">🎯</div>
                        <h3>Why it matters</h3>
                        <p>
                            The higher your 3rd Person Overall Confidence, the more reliable the
                            Self vs. Others Breakdown becomes. Low confidence means the picture is still
                            forming. High confidence means the patterns are real and meaningful.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 4. INDIVIDUAL 3RD PERSON CONFIDENCE ───────────────────────── -->
        <section class="conf-section conf-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Individual Assessment Confidence</h2>
                        <p>Each specific 3rd Person assessment has its own dedicated confidence score.</p>
                    </div>
                </div>
                <div class="row indiv-layout">
                    <div class="indiv-text">
                        <h3>One assessment, its own meter</h3>
                        <p>
                            When you select a specific assessment from the 3rd Person dropdown — instead of
                            "All Assessments" — you see a confidence meter for that particular book alone.
                            This lets you track how solid the outside perspective is for each individual story.
                        </p>
                        <p>
                            This individual meter has a <strong>lower threshold than the overall meter</strong>.
                            It reaches <strong>100% confidence at just 10 completed responses</strong>, making it
                            practical to hit full confidence on a single assessment without needing to recruit
                            dozens of participants.
                        </p>
                        <div class="compare-meters">
                            <div class="compare-item">
                                <p class="compare-label">Overall (all assessments combined)</p>
                                <ConfidenceBar :value="34" />
                                <p class="compare-note">50 total completions = 100%</p>
                            </div>
                            <div class="compare-item">
                                <p class="compare-label">Individual assessment selected</p>
                                <ConfidenceBar :value="80" />
                                <p class="compare-note">10 completions = 100%</p>
                            </div>
                        </div>
                    </div>
                    <div class="indiv-detail">
                        <div class="detail-box">
                            <h4>Meter Thresholds at a Glance</h4>
                            <table class="compare-table">
                                <thead>
                                    <tr>
                                        <th>Meter Type</th>
                                        <th>100% Reached At</th>
                                        <th>Reflects</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>1st Person</strong></td>
                                        <td>50 self-assessments</td>
                                        <td>Depth of self-knowledge</td>
                                    </tr>
                                    <tr>
                                        <td><strong>3rd Person Overall</strong></td>
                                        <td>50 outside responses</td>
                                        <td>Breadth of outside perspective</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Individual Assessment</strong></td>
                                        <td>10 outside responses</td>
                                        <td>Confidence in one book's result</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 5. EARNING FREE REPORTS ───────────────────────────────────── -->
        <section class="conf-section conf-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>Earn Free Reports Through Confidence</h2>
                        <p>Reach 100% confidence on any meter and unlock a free report — no credits needed.</p>
                    </div>
                </div>
                <div class="row earn-grid">
                    <article class="earn-card earn-card--d">
                        <div class="earn-icon">🥇</div>
                        <h3>1st Person Reaches 100%</h3>
                        <p class="earn-reward">Free 1st Person Report</p>
                        <p>
                            When your 1st Person Confidence Meter hits 100%, you unlock a free comprehensive
                            1st Person report. You also get to choose <strong>3 focus areas</strong> that
                            dive deep into what your DISC results mean in the areas of life that matter most to you.
                        </p>
                    </article>
                    <article class="earn-card earn-card--s">
                        <div class="earn-icon">🥈</div>
                        <h3>3rd Person Overall Reaches 100%</h3>
                        <p class="earn-reward">Free 3rd Person Overall Report</p>
                        <p>
                            Hit 100% on your overall 3rd Person meter and earn a free report covering the
                            aggregated view of how all your invited participants perceive your DISC style
                            across every assessment they have completed.
                        </p>
                    </article>
                    <article class="earn-card earn-card--c">
                        <div class="earn-icon">🏅</div>
                        <h3>Individual Assessment Reaches 100%</h3>
                        <p class="earn-reward">Free Individual 3rd Person Report</p>
                        <p>
                            When the confidence for a specific 3rd Person assessment hits 100%, you receive
                            a free report focused entirely on that one book — showing exactly how the responses
                            from that group align with your own results on that assessment.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 6. PAID FULL REPORT ───────────────────────────────────────── -->
        <section class="conf-section conf-blue-light">
            <div class="container">
                <div class="row">
                    <div class="full-report-layout">
                        <div class="full-report-text">
                            <h2>The Paid Full Report</h2>
                            <p class="lead">
                                Want the complete picture without waiting to reach 100% confidence?
                                The Full Report is always available for just <strong>10 credits</strong>.
                            </p>
                            <p>
                                The Full Report is the most comprehensive analysis available — combining your
                                1st Person results, 3rd Person data, confidence analysis, and a deep-dive
                                narrative across <strong>18 sections</strong> covering every dimension of your DISC
                                profile.
                            </p>
                            <ul class="full-report-features">
                                <li>18 in-depth sections covering your full DISC profile</li>
                                <li>Side-by-side self vs. others comparison and gap analysis</li>
                                <li>Practical, actionable insights for work and relationships</li>
                                <li>Available at any confidence level — no waiting required</li>
                                <li>Generated instantly from your dashboard</li>
                            </ul>
                            <div class="button-container">
                                <button @click="jumpToDashboard" class="teal">Generate Your Report</button>
                            </div>
                        </div>
                        <div class="full-report-badge">
                            <div class="credit-badge">
                                <span class="credit-num">10</span>
                                <span class="credit-label">Credits</span>
                            </div>
                            <p class="badge-note">One-time deduction from your credit balance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 7. TIPS ────────────────────────────────────────────────────── -->
        <section class="conf-section conf-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Tips to Build Confidence Faster</h2>
                        <p>Strategic moves that fill your meters quicker — without burning through extra credits.</p>
                    </div>
                </div>
                <div class="row tips-grid">
                    <article class="tip-card">
                        <div class="tip-num tip-num--d">1</div>
                        <h4>Explore different book categories</h4>
                        <p>
                            Each new category — adult, professional, kids — brings different scenarios
                            that reveal different facets of your DISC style. Completing books across
                            multiple categories adds variety to your data and builds 1st Person confidence
                            faster than revisiting the same type of story.
                        </p>
                    </article>
                    <article class="tip-card">
                        <div class="tip-num tip-num--i">2</div>
                        <h4>Invite people from different parts of your life</h4>
                        <p>
                            A coworker, a family member, and a close friend will each give a unique
                            perspective. Mixed-context responses make your 3rd Person results richer,
                            more balanced, and more reliable than responses from only one circle.
                        </p>
                    </article>
                    <article class="tip-card">
                        <div class="tip-num tip-num--s">3</div>
                        <h4>Follow up on outstanding invites</h4>
                        <p>
                            Invited participants who have not yet completed their assessment show as
                            "outstanding" in your Participants tab. A friendly nudge can turn an
                            outstanding invite into a completed response — and a meaningful jump
                            in your 3rd Person confidence meters.
                        </p>
                    </article>
                    <article class="tip-card">
                        <div class="tip-num tip-num--c">4</div>
                        <h4>Target individual 100% first</h4>
                        <p>
                            If your immediate goal is a free report, focus on one assessment and invite
                            10 people specifically for it. Reaching 100% on a single individual assessment
                            requires far fewer completions than the overall meter — and still earns you
                            a full free report.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 8. CTA ─────────────────────────────────────────────────────── -->
        <section class="conf-section conf-cta">
            <div class="container">
                <div class="row">
                    <div class="cta-inner">
                        <h2>Ready to Build Your Confidence?</h2>
                        <p>
                            Head to your dashboard to check your current confidence scores,
                            invite participants, and start moving the meter toward your free report.
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
    name: 'AboutConfidence',
    head() {
        return {
            title: 'Confidence Meter Explained | The Assessment Library',
            meta: [
                { hid: 'description', name: 'description', content: 'Understand how The Assessment Library\'s Confidence Meter measures the reliability of your DISC results. More assessments mean more accurate insights and free reports.' },
                { hid: 'og:title', property: 'og:title', content: 'Confidence Meter Explained | The Assessment Library' },
                { hid: 'og:description', property: 'og:description', content: 'Understand how The Assessment Library\'s Confidence Meter measures the reliability of your DISC results. More assessments mean more accurate insights and free reports.' },
                { hid: 'og:url', property: 'og:url', content: 'https://www.theassessmentlibrary.com/about/confidence' }
            ]
        }
    },
    components: {
        'main-nav': () => import('@/components/Nav'),
        'ConfidenceBar': () => import('@/components/ConfidenceMeter.vue'),
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

.about-conf {

    // ── HERO ──────────────────────────────────────────────────────────────
    .conf-header {
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

        .hero-meter-col {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: -40px;
        }

        .hero-meter-demo {
            background: #fff;
            border-radius: 16px;
            padding: 28px 32px;
            box-shadow: 5px 5px 10px #0814368e;
            width: 100%;
            max-width: 320px;
            margin-top: 60px;

            .meter-label {
                font-size: 13px;
                color: #555;
                margin-bottom: 12px;
                font-family: $nunito-family;
                text-align: center;
            }
        }

        .disc-dots {
            display: flex;
            gap: 8px;
            justify-content: center;
            margin-top: 16px;
        }

        .disc-dot {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
            color: #fff;
            font-family: 'Merriweather', serif;

            &.dot-d {
                background: $color-d;
            }

            &.dot-i {
                background: $color-i;
                color: #333;
            }

            &.dot-s {
                background: $color-s;
            }

            &.dot-c {
                background: $color-c;
            }
        }
    }

    // ── SHARED SECTION BASE ────────────────────────────────────────────────
    .conf-section {
        padding: 60px 16px 80px;
    }

    .conf-light {
        background: #fff;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .conf-tan {
        background: linear-gradient(135deg, #efe3d6 0%, #dcc5ad 50%, #c4a484 100%);
        box-shadow: 5px 5px 10px #412604;
    }

    .conf-dark {
        background: #12304d;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .conf-blue-light {
        background: #f0f6fb;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .conf-cta {
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

    .accent-green {
        color: $color-s;
        text-shadow: 1px 1px 1px black;
    }

    .accent-yellow {
        color: $color-i;
        text-shadow: 1px 1px 1px black;
    }

    .button-container {
        display: flex;
        gap: 40px;
        margin-top: 40px;
    }

    // ── 1ST PERSON ────────────────────────────────────────────────────────
    .meter-explain-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .meter-text {
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

    .meter-stages {
        flex: 0 0 280px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .meter-stage {
        background: #f6f9fc;
        border-radius: 12px;
        padding: 16px 20px;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);

        .stage-label {
            font-size: 13px;
            font-weight: 600;
            color: #12304d;
            margin-bottom: 10px;
        }
    }

    .conf-list {
        margin: 16px 0 0;
        padding-left: 20px;

        li {
            margin-bottom: 8px;
            color: #444;
            font-size: 15px;
            font-family: $nunito-family;
        }
    }

    // ── 3RD PERSON OVERALL ────────────────────────────────────────────────
    .third-overall-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .third-overall-card {
        background: #fff;
        padding: 28px;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #412604;

        .card-icon {
            font-size: 32px;
            margin-bottom: 12px;
        }

        h3 {
            color: #12304d;
            margin-bottom: 10px;
        }

        p {
            color: #555;
            font-size: 15px;
        }
    }

    // ── INDIVIDUAL 3RD PERSON ─────────────────────────────────────────────
    .indiv-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .indiv-text {
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

    .indiv-detail {
        flex: 0 0 380px;
    }

    .compare-meters {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .compare-item {
        background: #f6f9fc;
        border-radius: 12px;
        padding: 16px 20px;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.08);

        .compare-label {
            font-size: 13px;
            font-weight: 700;
            color: #12304d;
            margin-bottom: 8px;
        }

        .compare-note {
            font-size: 12px;
            color: #888;
            margin-top: 6px;
        }
    }

    .detail-box {
        background: #fff;
        border-radius: 16px;
        padding: 28px;
        box-shadow: 5px 5px 10px #0814368e;

        h4 {
            color: #12304d;
            margin-bottom: 16px;
        }
    }

    .compare-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;

        th {
            text-align: left;
            padding: 8px 10px;
            border-bottom: 2px solid #dce8f0;
            color: #12304d;
            font-weight: 700;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        td {
            padding: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            color: #444;
            font-family: $nunito-family;
        }

        tr:last-child td {
            border-bottom: none;
        }
    }

    // ── EARNING FREE REPORTS ──────────────────────────────────────────────
    .earn-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .earn-card {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 28px;

        .earn-icon {
            font-size: 36px;
            margin-bottom: 12px;
        }

        h3 {
            color: #fff;
            margin-bottom: 6px;
        }

        p {
            color: rgba(255, 255, 255, 0.82);
            font-size: 14px;
        }

        .earn-reward {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 14px;
        }

        &.earn-card--d {
            border-top: 4px solid $color-d;

            .earn-reward {
                color: #ff7a6e;
            }
        }

        &.earn-card--s {
            border-top: 4px solid $color-s;

            .earn-reward {
                color: #3ddb7a;
            }
        }

        &.earn-card--c {
            border-top: 4px solid $color-c;

            .earn-reward {
                color: #6fa8ff;
            }
        }
    }

    // ── PAID FULL REPORT ──────────────────────────────────────────────────
    .full-report-layout {
        display: flex;
        gap: 60px;
        align-items: center;
    }

    .full-report-text {
        flex: 1 1 auto;

        h2 {
            margin-bottom: 16px;
        }

        p {
            margin-bottom: 16px;
            color: #444;

            &.lead {
                font-size: 18px;
                color: #333;
            }
        }
    }

    .full-report-badge {
        flex: 0 0 auto;
        text-align: center;
    }

    .full-report-features {
        margin: 4px 0 28px;
        padding-left: 20px;

        li {
            margin-bottom: 10px;
            color: #444;
            font-size: 15px;
            font-family: $nunito-family;
        }
    }

    .credit-badge {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: #12304d;
        color: #fff;
        box-shadow: 0 8px 24px rgba(18, 48, 77, 0.35);
        margin: 0 auto 12px;

        .credit-num {
            font-family: 'Merriweather', serif;
            font-size: 52px;
            font-weight: 700;
            line-height: 1;
            color: $color-i;
        }

        .credit-label {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.75);
            margin-top: 2px;
        }
    }

    .badge-note {
        font-size: 12px;
        color: #888;
        text-align: center;
        max-width: 180px;
        margin: 0 auto;
        font-family: $nunito-family;
    }

    // ── TIPS ──────────────────────────────────────────────────────────────
    .tips-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
    }

    .tip-card {
        background: #fff;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #412604;

        h4 {
            color: #12304d;
            margin: 12px 0 10px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
        }
    }

    .tip-num {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', serif;
        font-weight: 700;
        font-size: 18px;
        color: #fff;

        &.tip-num--d {
            background: $color-d;
        }

        &.tip-num--i {
            background: $color-i;
            color: #333;
        }

        &.tip-num--s {
            background: $color-s;
        }

        &.tip-num--c {
            background: $color-c;
        }
    }

    // ── CTA ───────────────────────────────────────────────────────────────
    .cta-inner {
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
    .about-conf {
        .tips-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .third-overall-layout {
            grid-template-columns: 1fr;
        }

        .earn-grid {
            grid-template-columns: 1fr;
        }
    }
}

@media (max-width: 768px) {
    .about-conf {
        .conf-header {
            padding: 80px 16px 60px;

            .hero-row {
                flex-direction: column-reverse;
            }

            .hero-meter-col {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 0px;
            }

            .hero-meter-demo {
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

        .meter-explain-layout,
        .indiv-layout,
        .full-report-layout {
            flex-direction: column;
        }

        .meter-stages,
        .indiv-detail {
            flex: 0 0 auto;
            width: 100%;
        }

        .tips-grid {
            grid-template-columns: 1fr;
        }

        .cta-btns {
            flex-direction: column;
            align-items: stretch;

            button {
                width: 100%;
            }
        }

        .credit-badge {
            width: 120px;
            height: 120px;

            .credit-num {
                font-size: 40px;
            }
        }
    }
}
</style>
