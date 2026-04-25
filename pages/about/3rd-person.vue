<template>
    <section class="about-third">
        <main-nav />

        <!-- ── 1. HERO ────────────────────────────────────────────────────── -->
        <section class="third-header">
            <div class="container">
                <div class="row hero-row">
                    <div class="col-6">
                        <h1>You know who you <span class="accent-blue">think</span> you are.</h1>
                        <h4>But do you know who others <em>experience</em> you as?</h4>
                        <p class="lead">
                            Most self-knowledge stops at the mirror. The 3rd Person Assessment goes further —
                            showing you the gap between how you see yourself and how the people in your life
                            actually perceive your personality, behavior, and communication style.
                        </p>
                        <div class="button-container">
                            <button @click="jumpToDashboard" class="teal">View Your Dashboard</button>
                            <button @click="jumpToLibrary" class="light">Browse the Library</button>
                        </div>
                    </div>
                    <div class="col-6 hero-mirror-col">
                        <div class="mirror-card-pair">
                            <div class="mirror-card mirror-card--self">
                                <p class="mirror-label">How You See Yourself</p>
                                <div class="mini-disc-bars">
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-d">D</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-d" style="width: 78%"></div>
                                        </div>
                                        <span class="mini-bar-val">78</span>
                                    </div>
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-i">I</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-i" style="width: 55%"></div>
                                        </div>
                                        <span class="mini-bar-val">55</span>
                                    </div>
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-s">S</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-s" style="width: 42%"></div>
                                        </div>
                                        <span class="mini-bar-val">42</span>
                                    </div>
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-c">C</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-c" style="width: 61%"></div>
                                        </div>
                                        <span class="mini-bar-val">61</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mirror-divider">
                                <span class="mirror-vs">vs</span>
                            </div>
                            <div class="mirror-card mirror-card--others">
                                <p class="mirror-label">How Others See You</p>
                                <div class="mini-disc-bars">
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-d">D</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-d" style="width: 91%"></div>
                                        </div>
                                        <span class="mini-bar-val">91</span>
                                    </div>
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-i">I</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-i" style="width: 38%"></div>
                                        </div>
                                        <span class="mini-bar-val">38</span>
                                    </div>
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-s">S</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-s" style="width: 29%"></div>
                                        </div>
                                        <span class="mini-bar-val">29</span>
                                    </div>
                                    <div class="mini-bar-row">
                                        <span class="mini-bar-letter letter-c">C</span>
                                        <div class="mini-bar-track">
                                            <div class="mini-bar-fill fill-c" style="width: 74%"></div>
                                        </div>
                                        <span class="mini-bar-val">74</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-perk-badge">
                    🎁 Every person you invite receives a <strong>free credit</strong> to take their own 1st Person assessment and start their own self-awareness journey
                </div>
            </div>
        </section>

        <!-- ── 2. WHY SELF-AWARENESS ISN'T ENOUGH ────────────────────────── -->
        <section class="third-section third-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>Self-Awareness Is Not the Whole Picture</h2>
                        <p>Knowing your own DISC profile is powerful — but it only tells half the story.</p>
                    </div>
                </div>
                <div class="row awareness-layout">
                    <div class="awareness-card">
                        <div class="awareness-icon">🪞</div>
                        <h3>The Blind Spot Problem</h3>
                        <p>
                            Two people can have identical DISC results and yet be perceived completely
                            differently by the people around them. One may be seen as a confident leader.
                            The other as aggressive and unapproachable. The raw trait scores are the same —
                            but how those traits <em>land</em> in real interactions is not.
                        </p>
                    </div>
                    <div class="awareness-card">
                        <div class="awareness-icon">🔍</div>
                        <h3>What You Can't See From the Inside</h3>
                        <p>
                            Your internal experience of yourself is shaped by your intentions. But others
                            experience your <em>impact</em>. You may intend to be direct and decisive — your
                            colleagues may experience you as dismissive. You may intend to be collaborative —
                            your family may experience you as indecisive. That gap is where insight lives.
                        </p>
                    </div>
                    <div class="awareness-card">
                        <div class="awareness-icon">🎯</div>
                        <h3>Bridging the Gap</h3>
                        <p>
                            True self-awareness requires external data. The 3rd Person Assessment gives you
                            a structured, evidence-based way to understand how your personality comes across —
                            not through guesswork, but through the actual responses of people who know you.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 3. WHAT IS A 3RD PERSON ASSESSMENT ───────────────────────── -->
        <section class="third-section third-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>What Is a 3rd Person Assessment?</h2>
                        <p>The same scenario-based books — answered from someone else's perspective of you.</p>
                    </div>
                </div>
                <div class="row what-layout">
                    <div class="what-text">
                        <h3>The core concept</h3>
                        <p>
                            Every assessment in our library is a story-based scenario. When you complete one as
                            yourself, you answer each question as you would actually respond in that situation.
                            That is your 1st Person result.
                        </p>
                        <p>
                            A 3rd Person Assessment uses the same exact book — the same story, the same
                            questions — but your invitees answer each question <strong>as if they were you</strong>.
                            They choose the response they believe you would choose. Their answers are not about
                            how they would act. They are about how they perceive <em>you</em> acting.
                        </p>
                        <p>
                            The result is a DISC profile built entirely from the outside looking in — a data-driven
                            portrait of how others experience your personality and behavior in real scenarios.
                        </p>
                        <div class="what-highlights">
                            <div class="highlight-item">
                                <span class="highlight-dot dot-d"></span>
                                <p>Same story-based format as your 1st Person assessments</p>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-dot dot-i"></span>
                                <p>Invitees answer as they perceive you — not as themselves</p>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-dot dot-s"></span>
                                <p>Results build an external DISC profile of how others see you</p>
                            </div>
                            <div class="highlight-item">
                                <span class="highlight-dot dot-c"></span>
                                <p>Fully anonymous — your invitees' individual responses are private</p>
                            </div>
                        </div>
                    </div>
                    <div class="what-diagram">
                        <div class="diagram-box">
                            <div class="diagram-row">
                                <div class="diag-node diag-node--you">
                                    <span class="diag-icon">👤</span>
                                    <p>You</p>
                                </div>
                                <div class="diag-arrow">→</div>
                                <div class="diag-node diag-node--book">
                                    <span class="diag-icon">📖</span>
                                    <p>Send a book link</p>
                                </div>
                            </div>
                            <div class="diagram-row diagram-row--multi">
                                <div class="diag-arrow diag-arrow--down">↓</div>
                            </div>
                            <div class="diagram-row diagram-row--invitees">
                                <div class="diag-node diag-node--inv">
                                    <span class="diag-icon">👥</span>
                                    <p>Your circle answers <em>as you</em></p>
                                </div>
                            </div>
                            <div class="diagram-row">
                                <div class="diag-arrow diag-arrow--down">↓</div>
                            </div>
                            <div class="diagram-row">
                                <div class="diag-node diag-node--result">
                                    <span class="diag-icon">📊</span>
                                    <p>Their DISC results appear in your 3rd Person tab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 4. THE IMPORTANCE OF YOUR CIRCLE ─────────────────────────── -->
        <section class="third-section third-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>The Importance of Your <span class="accent-green">Circle</span></h2>
                        <p>More perspectives mean a richer, more reliable picture of how you come across.</p>
                    </div>
                </div>
                <div class="row circle-layout">
                    <div class="circle-intro">
                        <p>
                            A single person's perception of you is just that — one perspective. Someone who only
                            knows you at work sees one facet. A family member sees another. A close friend sees
                            a third. Each lens is valid. None of them alone is complete.
                        </p>
                        <p>
                            The power of the 3rd Person system grows as you diversify your circle. The more
                            people you invite — and the more varied their relationship to you — the more
                            accurate and trustworthy the resulting picture becomes.
                        </p>
                    </div>
                    <div class="circle-gift-banner">
                        <div class="circle-gift-icon">🎁</div>
                        <div class="circle-gift-text">
                            <p><strong>Inviting someone is also a gift.</strong> Every person you invite automatically receives one free credit to take their own 1st Person assessment — so your outreach doesn't just help you understand yourself better, it gives the people in your life a chance to start their own self-awareness journey at no cost.</p>
                        </div>
                    </div>
                    <div class="circle-grid">
                        <article class="circle-card">
                            <div class="circle-icon" style="background: #e8f4fd; color: #1666ff;">💼</div>
                            <h4>Work Colleagues</h4>
                            <p>How do people experience you under pressure, in meetings, when leading or following?
                                Your professional context may reveal traits you don't associate with yourself.</p>
                        </article>
                        <article class="circle-card">
                            <div class="circle-icon" style="background: #fef6e4; color: #c78c00;">🏠</div>
                            <h4>Family Members</h4>
                            <p>Family dynamics often surface the most authentic version of personality —
                                the person who shows up when the professional mask comes off.</p>
                        </article>
                        <article class="circle-card">
                            <div class="circle-icon" style="background: #edfaf1; color: #0dab49;">🤝</div>
                            <h4>Close Friends</h4>
                            <p>Friends see how you engage socially, how you handle conflict, and how you
                                show up in relationships built on choice rather than obligation.</p>
                        </article>
                        <article class="circle-card">
                            <div class="circle-icon" style="background: #fdf0ef; color: #c0321f;">🧭</div>
                            <h4>Mentors &amp; Coaches</h4>
                            <p>Those who have observed your growth over time bring a developmental
                                perspective — they notice patterns and progress that others may miss.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 5. STEP BY STEP WALKTHROUGH ───────────────────────────────── -->
        <section class="third-section third-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>How It Works, Step by Step</h2>
                        <p>From your first self-assessment to a full picture of how others see you.</p>
                    </div>
                </div>
                <div class="row steps-layout">
                    <div class="step-item">
                        <div class="step-badge step-badge--d">1</div>
                        <div class="step-content">
                            <h4>Complete Your Own 1st Person Assessment</h4>
                            <p>
                                Start by completing at least one assessment as yourself through the Library.
                                This establishes your self-perception baseline and gives the 3rd Person
                                comparison something meaningful to measure against.
                            </p>
                        </div>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step-item">
                        <div class="step-badge step-badge--i">2</div>
                        <div class="step-content">
                            <h4>Go to the 3rd Person Participants Tab</h4>
                            <p>
                                From your Dashboard, open the 3rd Person tab and select the Participants view.
                                Here you will see everyone you have invited and the status of their responses —
                                outstanding, in progress, or completed.
                            </p>
                        </div>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step-item">
                        <div class="step-badge step-badge--s">3</div>
                        <div class="step-content">
                            <h4>Invite Trusted People From Your Life</h4>
                            <p>
                                Send invites to colleagues, family, friends, or mentors. Each invite is
                                tied to a specific assessment book. You can invite different people to
                                different books, or send the same book to your entire circle.
                            </p>
                        </div>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step-item">
                        <div class="step-badge step-badge--c">4</div>
                        <div class="step-content">
                            <h4>Your Invitees Receive a Link and Complete the Assessment</h4>
                            <p>
                                Each invitee receives a unique link. They read the same story-based scenarios
                                you completed and select the responses they believe you would choose. No account
                                required — just the link and a few minutes of their time.
                            </p>
                            <p class="step-bonus">
                                🎁 As a thank-you for helping you grow, every invitee automatically receives
                                <strong>one free credit</strong> to take their own 1st Person assessment —
                                starting their own self-awareness journey at no cost.
                            </p>
                        </div>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step-item">
                        <div class="step-badge step-badge--d">5</div>
                        <div class="step-content">
                            <h4>Results Appear as Assessments Are Completed</h4>
                            <p>
                                As each person finishes their assessment, their results feed directly into your
                                3rd Person tab. You will see the DISC bar chart update in real time, and the
                                confidence meter will climb with each new completion.
                            </p>
                        </div>
                    </div>
                    <div class="step-connector"></div>
                    <div class="step-item">
                        <div class="step-badge step-badge--i">6</div>
                        <div class="step-content">
                            <h4>Compare Your Self-Perception With How Others See You</h4>
                            <p>
                                Use the comparison modal to see your 1st Person and 3rd Person results side by
                                side. The gap data and written summary will highlight where your self-perception
                                aligns with outside perception — and where significant differences exist.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 6. HOW TO READ THE DATA ────────────────────────────────────── -->
        <section class="third-section third-blue-light">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>How to Read the Data</h2>
                        <p>Your 3rd Person tab is built around four key data points — here is what each one means.</p>
                    </div>
                </div>
                <div class="row read-grid">
                    <article class="read-card read-card--d">
                        <div class="read-card-header">
                            <div class="read-num">01</div>
                            <h3>The DISC Bar Chart</h3>
                        </div>
                        <p>
                            The main bar chart in your 3rd Person tab shows the average DISC scores
                            calculated across all completed assessments from your invited participants.
                            The longer the bar, the more prominently that trait comes through in how
                            others perceive you.
                        </p>
                    </article>
                    <article class="read-card read-card--i">
                        <div class="read-card-header">
                            <div class="read-num">02</div>
                            <h3>The Confidence Meter</h3>
                        </div>
                        <p>
                            The confidence meter below the chart tells you how statistically reliable
                            the data is. A low score means you are still gathering responses — the
                            picture is forming. A high score means the data is robust and the patterns
                            you are seeing are meaningful.
                        </p>
                    </article>
                    <article class="read-card read-card--s">
                        <div class="read-card-header">
                            <div class="read-num">03</div>
                            <h3>The Assessment Dropdown</h3>
                        </div>
                        <p>
                            The dropdown at the top of the 3rd Person tab lets you switch between
                            viewing all assessments combined or filtering to a single specific book.
                            Selecting "All Assessments" gives you the aggregate view across your
                            entire circle. Selecting an individual book narrows the lens.
                        </p>
                    </article>
                    <article class="read-card read-card--c">
                        <div class="read-card-header">
                            <div class="read-num">04</div>
                            <h3>The Comparison Modal</h3>
                        </div>
                        <p>
                            The "View Self vs. Others Breakdown" button opens a detailed modal
                            showing your 1st Person results alongside your 3rd Person results.
                            This is where the most actionable insights live — in the gaps between
                            how you see yourself and how others see you.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 7. UNDERSTANDING THE MODAL DATA ──────────────────────────── -->
        <section class="third-section third-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Understanding the Comparison Modal</h2>
                        <p>When you open the breakdown, here is exactly what you are looking at.</p>
                    </div>
                </div>
                <div class="row modal-layout">
                    <div class="modal-mockup">
                        <div class="mockup-header">
                            <p class="mockup-title">Self vs. Others Breakdown</p>
                        </div>
                        <div class="mockup-table">
                            <div class="mockup-row mockup-row--head">
                                <span>Trait</span>
                                <span>You</span>
                                <span>Others</span>
                                <span>Gap</span>
                            </div>
                            <div class="mockup-row">
                                <span class="trait-name trait-d">D</span>
                                <span>78</span>
                                <span>91</span>
                                <span class="gap-pill gap-high">+13</span>
                            </div>
                            <div class="mockup-row">
                                <span class="trait-name trait-i">I</span>
                                <span>55</span>
                                <span>38</span>
                                <span class="gap-pill gap-mid">−17</span>
                            </div>
                            <div class="mockup-row">
                                <span class="trait-name trait-s">S</span>
                                <span>42</span>
                                <span>29</span>
                                <span class="gap-pill gap-mid">−13</span>
                            </div>
                            <div class="mockup-row">
                                <span class="trait-name trait-c">C</span>
                                <span>61</span>
                                <span>74</span>
                                <span class="gap-pill gap-low">+13</span>
                            </div>
                        </div>
                        <div class="mockup-summary">
                            <p>Others perceive your <strong>D (Dominance)</strong> and <strong>C (Conscientiousness)</strong> as significantly higher than you rate them yourself — suggesting you may be coming across as more assertive and detail-oriented than you intend.</p>
                        </div>
                    </div>
                    <div class="modal-explain">
                        <div class="modal-point">
                            <div class="modal-point-icon" style="background: #e8f4fd;">📊</div>
                            <div>
                                <h4>Side-by-Side Trait Scores</h4>
                                <p>
                                    Your 1st Person score and the averaged 3rd Person score for each DISC
                                    trait, displayed together so you can see them in relation to each other.
                                </p>
                            </div>
                        </div>
                        <div class="modal-point">
                            <div class="modal-point-icon" style="background: #edfaf1;">🎨</div>
                            <div>
                                <h4>Color-Coded Gap Indicators</h4>
                                <p>
                                    Each gap is color-coded by magnitude. Small differences appear in muted
                                    tones. Large differences stand out clearly — drawing your eye to the traits
                                    where the perception gap is most significant.
                                </p>
                            </div>
                        </div>
                        <div class="modal-point">
                            <div class="modal-point-icon" style="background: #fdf0ef;">📝</div>
                            <div>
                                <h4>Written Summary</h4>
                                <p>
                                    A narrative interpretation of what the gaps mean in practical terms — not
                                    just numbers, but a plain-language explanation of what the data suggests
                                    about how your personality comes across in daily interactions.
                                </p>
                            </div>
                        </div>
                        <div class="modal-point">
                            <div class="modal-point-icon" style="background: #fef6e4;">📈</div>
                            <div>
                                <h4>Side-by-Side Bar Chart</h4>
                                <p>
                                    A visual chart comparing both profiles at once, making it easy to see
                                    at a glance which traits are aligned and which diverge significantly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 8. ALL ASSESSMENTS VS INDIVIDUAL ──────────────────────────── -->
        <section class="third-section third-dark">
            <div class="container">
                <div class="row">
                    <div class="section-header light">
                        <h2>All Assessments vs. Individual View</h2>
                        <p>One shows you the forest. The other shows you a single tree.</p>
                    </div>
                </div>
                <div class="row forest-layout">
                    <div class="forest-card">
                        <div class="forest-header forest-header--all">
                            <span class="forest-badge">🌲🌲🌲 All Assessments</span>
                        </div>
                        <div class="forest-body">
                            <h3>The Big Picture</h3>
                            <p>
                                When "All Assessments" is selected, your 3rd Person tab aggregates the results
                                from every completed response across every book you have used for 3rd Person
                                invites. This is your macro-level view — the consensus picture of how your
                                entire circle perceives you.
                            </p>
                            <p>
                                This view smooths out individual outliers and reveals the broad patterns
                                that appear consistently across multiple people and multiple contexts. When
                                multiple perspectives converge on the same trait, that signal is strong.
                            </p>
                            <ul class="forest-list">
                                <li>Uses all completed 3rd Person responses across all books</li>
                                <li>Confidence meter scales to 50 completions for 100%</li>
                                <li>Best for understanding your overall external profile</li>
                            </ul>
                        </div>
                    </div>
                    <div class="forest-vs">
                        <span>vs</span>
                    </div>
                    <div class="forest-card">
                        <div class="forest-header forest-header--one">
                            <span class="forest-badge">🌳 Individual Assessment</span>
                        </div>
                        <div class="forest-body">
                            <h3>The Deep Dive</h3>
                            <p>
                                When you select a specific assessment from the dropdown, the view narrows
                                to only the responses for that particular book. This lets you examine one
                                relationship-specific slice of how you are perceived.
                            </p>
                            <p>
                                You may discover that some people see you very differently than others — and
                                that is itself a valuable insight. A dramatic difference between how your
                                work colleagues see you and how your family sees you points to context-specific
                                behavioral patterns worth understanding.
                            </p>
                            <ul class="forest-list">
                                <li>Shows only responses for the selected book</li>
                                <li>Confidence meter scales to 10 completions for 100%</li>
                                <li>Best for deep-diving one relationship or context</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 9. THE CONFIDENCE SCORE EXPLAINED ────────────────────────── -->
        <section class="third-section third-light">
            <div class="container">
                <div class="row conf-explain-layout">
                    <div class="conf-explain-text">
                        <h2>The Confidence Score, Explained</h2>
                        <p class="lead">
                            Your 3rd Person confidence score is not just a progress indicator — it is a
                            measure of how much weight you can put on what the data is telling you.
                        </p>
                        <p>
                            A low confidence score does not mean the data is wrong. It means you are still
                            gathering perspectives. As more people complete assessments, the noise in the
                            data decreases and the signal gets clearer. Outlier responses get smoothed out.
                            Real patterns emerge and solidify.
                        </p>
                        <p>
                            Reaching 100% confidence does more than validate your data — it earns you a
                            free report. When your overall 3rd Person confidence hits 100%, you unlock a
                            comprehensive free report at no credit cost. The same applies when any individual
                            assessment confidence reaches 100%.
                        </p>
                        <div class="conf-thresholds">
                            <div class="threshold-item">
                                <div class="threshold-dot" style="background: #e93d2f;"></div>
                                <div>
                                    <p class="threshold-title">Overall 3rd Person</p>
                                    <p class="threshold-note">50 total completions = 100% confidence</p>
                                </div>
                            </div>
                            <div class="threshold-item">
                                <div class="threshold-dot" style="background: #1666ff;"></div>
                                <div>
                                    <p class="threshold-title">Individual Assessment</p>
                                    <p class="threshold-note">10 completions for that book = 100% confidence</p>
                                </div>
                            </div>
                        </div>
                        <nuxt-link to="/about/confidence" class="conf-link">
                            Learn more about how all confidence meters work →
                        </nuxt-link>
                    </div>
                    <div class="conf-explain-visual">
                        <div class="conf-stage-stack">
                            <div class="conf-stage">
                                <p class="conf-stage-label">1 response — pattern forming</p>
                                <div class="conf-bar-outer">
                                    <div class="conf-bar-fill" style="width: 10%"></div>
                                </div>
                            </div>
                            <div class="conf-stage">
                                <p class="conf-stage-label">10 responses — picture clarifying</p>
                                <div class="conf-bar-outer">
                                    <div class="conf-bar-fill" style="width: 40%"></div>
                                </div>
                            </div>
                            <div class="conf-stage">
                                <p class="conf-stage-label">25 responses — strong signal</p>
                                <div class="conf-bar-outer">
                                    <div class="conf-bar-fill" style="width: 70%"></div>
                                </div>
                            </div>
                            <div class="conf-stage">
                                <p class="conf-stage-label">50 responses — full confidence</p>
                                <div class="conf-bar-outer conf-bar-outer--full">
                                    <div class="conf-bar-fill conf-bar-fill--full" style="width: 100%"></div>
                                </div>
                                <p class="conf-free-tag">🎁 Free report unlocked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── 10. REAL WORLD BENEFITS ───────────────────────────────────── -->
        <section class="third-section third-tan">
            <div class="container">
                <div class="row">
                    <div class="section-header">
                        <h2>Real-World Applications</h2>
                        <p>The gap between self-perception and outside perception has practical implications across every area of life.</p>
                    </div>
                </div>
                <div class="row benefits-grid">
                    <article class="benefit-card">
                        <div class="benefit-icon" style="border-top: 4px solid #e93d2f;">🏆</div>
                        <h4>Leadership Development</h4>
                        <p>
                            Leaders often overestimate how collaborative they appear and underestimate
                            how directive they come across. Knowing the gap is the first step toward
                            closing it — and becoming the leader your team actually needs.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon" style="border-top: 4px solid #ffbd05;">💼</div>
                        <h4>Career Growth</h4>
                        <p>
                            Understanding how colleagues and managers perceive your personality can
                            clarify why certain dynamics play out the way they do — and help you
                            position yourself more effectively for the opportunities you want.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon" style="border-top: 4px solid #0dab49;">❤️</div>
                        <h4>Relationship Improvement</h4>
                        <p>
                            Recurring friction in relationships often has a root in misaligned perception.
                            When you understand how a partner, sibling, or close friend experiences your
                            personality, you can communicate in ways that actually land.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon" style="border-top: 4px solid #1666ff;">⚡</div>
                        <h4>Conflict Resolution</h4>
                        <p>
                            Many conflicts stem from the gap between intent and impact. The 3rd Person
                            system gives you objective data about how your behavior is perceived — making
                            it easier to understand conflict triggers and de-escalate effectively.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon" style="border-top: 4px solid #e93d2f;">🧠</div>
                        <h4>Discovering Blind Spots</h4>
                        <p>
                            By definition, you cannot see your own blind spots. The 3rd Person data shines
                            a light on the traits you underestimate or overestimate — giving you a map
                            of the areas where growth will have the greatest impact.
                        </p>
                    </article>
                    <article class="benefit-card">
                        <div class="benefit-icon" style="border-top: 4px solid #ffbd05;">👨‍👩‍👧</div>
                        <h4>Parenting &amp; Family</h4>
                        <p>
                            Parents are often surprised by how their children perceive their dominant
                            traits. Understanding the family-context view of your personality can deepen
                            connection and help you show up more intentionally at home.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ── 11. CTA ─────────────────────────────────────────────────────── -->
        <section class="third-section third-cta">
            <div class="container">
                <div class="row">
                    <div class="cta-inner">
                        <h2>Invite Your First Participant Today</h2>
                        <p>
                            The gap between how you see yourself and how others experience you is
                            one of the most valuable things you can understand about yourself.
                            Start building that picture today — one trusted perspective at a time.
                        </p>
                        <p class="cta-gift-note">
                            🎁 And remember — every person you invite receives a <strong>free credit</strong>
                            to begin their own 1st Person assessment. Your invitation is a gift that keeps giving.
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
    name: 'AboutThirdPerson',
    head() {
        return {
            title: '3rd Person Assessment | See How Others Perceive You | The Assessment Library',
            meta: [
                { hid: 'description', name: 'description', content: 'Invite friends, family, and colleagues to take a story-based assessment as you. Compare how you see yourself with how others experience your personality and communication style.' },
                { hid: 'og:title', property: 'og:title', content: '3rd Person Assessment | See How Others Perceive You | The Assessment Library' },
                { hid: 'og:description', property: 'og:description', content: 'Invite friends, family, and colleagues to take a story-based assessment as you. Compare how you see yourself with how others experience your personality and communication style.' },
                { hid: 'og:url', property: 'og:url', content: 'https://www.theassessmentlibrary.com/about/3rd-person' }
            ]
        }
    },
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.loggedIn
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

.about-third {

    // ── HERO ──────────────────────────────────────────────────────────────
    .third-header {
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

        .hero-mirror-col {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    // ── HERO PERK BADGE ───────────────────────────────────────────────────
    .hero-perk-badge {
        margin-top: 32px;
        padding: 14px 24px;
        background: rgba(13, 171, 73, 0.1);
        border-radius: 12px;
        border-left: 4px solid $color-s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        font-size: 15px;
        color: #1d5c35;
        font-family: $nunito-family;
        line-height: 1.5;
        text-align: center;
    }

    // ── MIRROR CARD ───────────────────────────────────────────────────────
    .mirror-card-pair {
        display: flex;
        align-items: center;
        gap: 0;
        background: #fff;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #0814368e;
        overflow: hidden;
        width: 100%;
        max-width: 420px;
        margin-top: 60px;
    }

    .mirror-card {
        flex: 1;
        padding: 24px 20px;

        &--self {
            background: #f6f9fc;
        }

        &--others {
            background: #edf5ee;
        }
    }

    .mirror-label {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: #12304d;
        margin-bottom: 16px;
        font-family: $nunito-family;
        text-align: center;
    }

    .mirror-divider {
        width: 32px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        align-self: stretch;
    }

    .mirror-vs {
        font-family: 'Merriweather', serif;
        font-weight: 700;
        font-size: 13px;
        color: #12304d;
    }

    .mini-disc-bars {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .mini-bar-row {
        display: flex;
        align-items: center;
        gap: 7px;
    }

    .mini-bar-letter {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 700;
        font-family: 'Merriweather', serif;
        flex-shrink: 0;

        &.letter-d { background: $color-d; color: #fff; }
        &.letter-i { background: $color-i; color: #333; }
        &.letter-s { background: $color-s; color: #fff; }
        &.letter-c { background: $color-c; color: #fff; }
    }

    .mini-bar-track {
        flex: 1;
        height: 8px;
        background: rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        overflow: hidden;
    }

    .mini-bar-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.6s ease;

        &.fill-d { background: $color-d; }
        &.fill-i { background: $color-i; }
        &.fill-s { background: $color-s; }
        &.fill-c { background: $color-c; }
    }

    .mini-bar-val {
        font-size: 11px;
        font-weight: 700;
        color: #555;
        font-family: $nunito-family;
        width: 22px;
        text-align: right;
        flex-shrink: 0;
    }

    // ── SHARED SECTION BASE ────────────────────────────────────────────────
    .third-section {
        padding: 60px 16px 80px;
    }

    .third-light {
        background: #fff;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .third-tan {
        background: linear-gradient(135deg, #efe3d6 0%, #dcc5ad 50%, #c4a484 100%);
        box-shadow: 5px 5px 10px #412604;
    }

    .third-dark {
        background: #12304d;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .third-blue-light {
        background: #f0f6fb;
        box-shadow: 5px 5px 10px #0814368e;
    }

    .third-cta {
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
            h2 { color: #fff; }
            p { color: rgba(255, 255, 255, 0.8); }
        }
    }

    .accent-blue {
        color: $color-c;
        text-shadow: 1px 1px 1px black;
    }

    .accent-green {
        color: $color-s;
        text-shadow: 1px 1px 1px black;
    }

    .button-container {
        display: flex;
        gap: 40px;
        margin-top: 40px;
    }

    // ── WHY SELF-AWARENESS ISN'T ENOUGH ───────────────────────────────────
    .awareness-layout {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .awareness-card {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        padding: 32px 28px;

        .awareness-icon {
            font-size: 36px;
            margin-bottom: 16px;
        }

        h3 {
            color: #fff;
            margin-bottom: 12px;
        }

        p {
            color: rgba(255, 255, 255, 0.82);
            font-size: 15px;
            line-height: 1.7;
        }
    }

    // ── WHAT IS A 3RD PERSON ASSESSMENT ──────────────────────────────────
    .what-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .what-text {
        flex: 1 1 auto;

        h3 {
            color: #12304d;
            margin-bottom: 14px;
        }

        p {
            color: #444;
            margin-bottom: 14px;
            font-size: 15px;
            line-height: 1.75;
        }
    }

    .what-highlights {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .highlight-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;

        p {
            margin: 0;
            font-size: 14px;
            color: #444;
        }
    }

    .highlight-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 3px;

        &.dot-d { background: $color-d; }
        &.dot-i { background: $color-i; }
        &.dot-s { background: $color-s; }
        &.dot-c { background: $color-c; }
    }

    .what-diagram {
        flex: 0 0 280px;
    }

    .diagram-box {
        background: #f6f9fc;
        border-radius: 16px;
        padding: 28px 24px;
        box-shadow: 5px 5px 10px #0814368e;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    .diagram-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: 100%;
    }

    .diag-node {
        background: #fff;
        border-radius: 12px;
        padding: 14px 16px;
        text-align: center;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
        flex: 1;

        .diag-icon {
            font-size: 24px;
            display: block;
            margin-bottom: 6px;
        }

        p {
            font-size: 12px;
            font-weight: 600;
            color: #12304d;
            margin: 0;
            font-family: $nunito-family;
        }

        &.diag-node--you { border-top: 3px solid $color-d; }
        &.diag-node--book { border-top: 3px solid $color-i; }
        &.diag-node--inv { border-top: 3px solid $color-s; }
        &.diag-node--result { border-top: 3px solid $color-c; }
    }

    .diag-arrow {
        font-size: 20px;
        color: #12304d;
        font-weight: 700;
        flex-shrink: 0;

        &.diag-arrow--down {
            font-size: 24px;
            display: block;
            text-align: center;
            width: 100%;
            color: #12304d;
            margin: 2px 0;
        }
    }

    // ── IMPORTANCE OF YOUR CIRCLE ─────────────────────────────────────────
    .circle-layout {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .circle-intro {
        max-width: 720px;
        margin: 0 auto;
        text-align: center;

        p {
            font-size: 16px;
            color: #333;
            margin-bottom: 12px;
            line-height: 1.75;
        }
    }

    .circle-gift-banner {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        background: #fff;
        border-radius: 16px;
        padding: 24px 28px;
        box-shadow: 5px 5px 10px #412604;
        margin-bottom: 28px;

        .circle-gift-icon {
            font-size: 36px;
            flex-shrink: 0;
            line-height: 1;
        }

        .circle-gift-text p {
            margin: 0;
            font-size: 15px;
            color: #333;
            line-height: 1.7;
        }
    }

    .circle-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .circle-card {
        background: #fff;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 5px 5px 10px #412604;

        .circle-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin-bottom: 16px;
        }

        h4 {
            color: #12304d;
            margin-bottom: 8px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.65;
        }
    }

    // ── STEP BY STEP ──────────────────────────────────────────────────────
    .steps-layout {
        max-width: 760px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .step-item {
        display: flex;
        gap: 24px;
        align-items: flex-start;
    }

    .step-badge {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', serif;
        font-weight: 700;
        font-size: 18px;
        color: #fff;
        flex-shrink: 0;

        &.step-badge--d { background: $color-d; }
        &.step-badge--i { background: $color-i; color: #333; }
        &.step-badge--s { background: $color-s; }
        &.step-badge--c { background: $color-c; }
    }

    .step-content {
        flex: 1;
        padding-bottom: 4px;

        h4 {
            color: #12304d;
            margin-bottom: 8px;
        }

        p {
            color: #555;
            font-size: 15px;
            line-height: 1.7;
            margin: 0;
        }
    }

    .step-bonus {
        margin-top: 12px;
        padding: 12px 16px;
        background: rgba(13, 171, 73, 0.08);
        border-left: 3px solid $color-s;
        border-radius: 0 8px 8px 0;
        font-size: 14px;
        color: #2d6a3f;
        font-family: $nunito-family;
        line-height: 1.6;
    }

    .step-connector {
        width: 2px;
        height: 32px;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.04));
        margin-left: 21px;
        border-radius: 2px;
    }

    // ── HOW TO READ THE DATA ──────────────────────────────────────────────
    .read-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }

    .read-card {
        background: #fff;
        border-radius: 16px;
        padding: 28px;
        box-shadow: 5px 5px 10px #0814368e;

        &.read-card--d { border-top: 4px solid $color-d; }
        &.read-card--i { border-top: 4px solid $color-i; }
        &.read-card--s { border-top: 4px solid $color-s; }
        &.read-card--c { border-top: 4px solid $color-c; }

        p {
            color: #555;
            font-size: 15px;
            line-height: 1.7;
            margin: 0;
        }
    }

    .read-card-header {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 14px;

        h3 {
            color: #12304d;
            margin: 0;
        }
    }

    .read-num {
        font-family: 'Merriweather', serif;
        font-weight: 700;
        font-size: 28px;
        color: rgba(18, 48, 77, 0.15);
        line-height: 1;
        flex-shrink: 0;
    }

    // ── MODAL EXPLANATION ─────────────────────────────────────────────────
    .modal-layout {
        display: flex;
        gap: 48px;
        align-items: flex-start;
    }

    .modal-mockup {
        flex: 0 0 320px;
        background: #fff;
        border-radius: 16px;
        box-shadow: 5px 5px 10px #412604;
        overflow: hidden;

        .mockup-header {
            background: #12304d;
            padding: 14px 20px;

            .mockup-title {
                font-family: 'Merriweather', serif;
                font-weight: 700;
                font-size: 14px;
                color: #fff;
                margin: 0;
            }
        }

        .mockup-table {
            padding: 0 16px;
        }

        .mockup-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 12px 4px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            font-size: 14px;
            color: #444;
            font-family: $nunito-family;
            align-items: center;

            &.mockup-row--head {
                font-size: 11px;
                font-weight: 700;
                color: #12304d;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                border-bottom: 2px solid #dce8f0;
                padding: 10px 4px;
            }

            &:last-child {
                border-bottom: none;
            }
        }

        .trait-name {
            font-family: 'Merriweather', serif;
            font-weight: 700;
            font-size: 15px;

            &.trait-d { color: $color-d; }
            &.trait-i { color: #c99800; }
            &.trait-s { color: $color-s; }
            &.trait-c { color: $color-c; }
        }

        .gap-pill {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            font-family: $nunito-family;

            &.gap-high {
                background: #fde8e6;
                color: #c0321f;
            }

            &.gap-mid {
                background: #e8f0fe;
                color: #1a56d6;
            }

            &.gap-low {
                background: #e7f9ef;
                color: #0a8538;
            }
        }

        .mockup-summary {
            padding: 16px 20px;
            background: #f6f9fc;
            border-top: 1px solid rgba(0, 0, 0, 0.06);

            p {
                font-size: 13px;
                color: #555;
                margin: 0;
                line-height: 1.6;
                font-family: $nunito-family;
            }
        }
    }

    .modal-explain {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .modal-point {
        display: flex;
        gap: 16px;
        align-items: flex-start;

        .modal-point-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            flex-shrink: 0;
        }

        h4 {
            color: #12304d;
            margin-bottom: 6px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.65;
            margin: 0;
        }
    }

    // ── FOREST / INDIVIDUAL ───────────────────────────────────────────────
    .forest-layout {
        display: flex;
        gap: 0;
        align-items: stretch;
    }

    .forest-card {
        flex: 1;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        overflow: hidden;
    }

    .forest-header {
        padding: 16px 24px;

        &--all {
            background: rgba(13, 171, 73, 0.2);
            border-bottom: 1px solid rgba(13, 171, 73, 0.3);
        }

        &--one {
            background: rgba(22, 102, 255, 0.2);
            border-bottom: 1px solid rgba(22, 102, 255, 0.3);
        }

        .forest-badge {
            font-family: 'Merriweather', serif;
            font-weight: 700;
            font-size: 14px;
            color: #fff;
        }
    }

    .forest-body {
        padding: 28px;

        h3 {
            color: #fff;
            margin-bottom: 14px;
        }

        p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 14px;
        }
    }

    .forest-vs {
        width: 48px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Merriweather', serif;
        font-weight: 700;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
    }

    .forest-list {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            color: rgba(255, 255, 255, 0.7);
            font-size: 13px;
            font-family: $nunito-family;
            padding: 5px 0;
            padding-left: 16px;
            position: relative;

            &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: $color-s;
                font-weight: 700;
            }
        }
    }

    // ── CONFIDENCE SCORE EXPLAINED ────────────────────────────────────────
    .conf-explain-layout {
        display: flex;
        gap: 60px;
        align-items: flex-start;
    }

    .conf-explain-text {
        flex: 1 1 auto;

        h2 {
            margin-bottom: 16px;
        }

        p {
            color: #444;
            margin-bottom: 14px;
            font-size: 15px;
            line-height: 1.75;

            &.lead {
                font-size: 18px;
                color: #333;
            }
        }
    }

    .conf-thresholds {
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin: 24px 0 20px;
    }

    .threshold-item {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .threshold-dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .threshold-title {
        font-weight: 700;
        font-size: 14px;
        color: #12304d;
        margin: 0 0 2px;
        font-family: $nunito-family;
    }

    .threshold-note {
        font-size: 13px;
        color: #777;
        margin: 0;
        font-family: $nunito-family;
    }

    .conf-link {
        font-size: 14px;
        font-weight: 700;
        color: $color-c;
        text-decoration: none;
        font-family: $nunito-family;

        &:hover {
            text-decoration: underline;
        }
    }

    .conf-explain-visual {
        flex: 0 0 320px;
    }

    .conf-stage-stack {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .conf-stage {
        .conf-stage-label {
            font-size: 12px;
            font-weight: 600;
            color: #12304d;
            margin-bottom: 8px;
            font-family: $nunito-family;
        }
    }

    .conf-bar-outer {
        height: 14px;
        background: rgba(0, 0, 0, 0.08);
        border-radius: 7px;
        overflow: hidden;

        &.conf-bar-outer--full {
            background: rgba(13, 171, 73, 0.15);
        }
    }

    .conf-bar-fill {
        height: 100%;
        background: linear-gradient(to right, #1666ff, #0dab49);
        border-radius: 7px;
        transition: width 0.8s ease;

        &.conf-bar-fill--full {
            background: linear-gradient(to right, $color-s, #3ddb7a);
        }
    }

    .conf-free-tag {
        font-size: 12px;
        font-weight: 700;
        color: $color-s;
        margin-top: 6px;
        font-family: $nunito-family;
    }

    // ── REAL-WORLD BENEFITS ───────────────────────────────────────────────
    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .benefit-card {
        background: #fff;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 5px 5px 10px #412604;

        .benefit-icon {
            font-size: 28px;
            padding-top: 16px;
            margin-bottom: 14px;
        }

        h4 {
            color: #12304d;
            margin-bottom: 10px;
        }

        p {
            color: #555;
            font-size: 14px;
            line-height: 1.65;
            margin: 0;
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

    .cta-gift-note {
        margin-top: 20px;
        font-size: 15px;
        color: #2d6a3f;
        background: rgba(13, 171, 73, 0.08);
        border-radius: 12px;
        padding: 14px 20px;
        display: inline-block;
        font-family: $nunito-family;
        line-height: 1.6;
    }

    .cta-btns {
        justify-content: center;
    }
}

// ── RESPONSIVE ────────────────────────────────────────────────────────────
@media (max-width: 1024px) {
    .about-third {
        .awareness-layout {
            grid-template-columns: 1fr;
        }

        .circle-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .read-grid {
            grid-template-columns: 1fr;
        }
    }
}

@media (max-width: 768px) {
    .about-third {
        .third-header {
            padding: 80px 16px 60px;

            .hero-row {
                flex-direction: column-reverse;
            }

            .hero-mirror-col {
                margin-top: 0;
            }

            .mirror-card-pair {
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

        .what-layout,
        .modal-layout,
        .conf-explain-layout,
        .forest-layout {
            flex-direction: column;
        }

        .what-diagram,
        .modal-mockup,
        .conf-explain-visual {
            flex: 0 0 auto;
            width: 100%;
        }

        .forest-vs {
            width: auto;
            padding: 8px 0;
        }

        .circle-grid,
        .benefits-grid {
            grid-template-columns: 1fr;
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
