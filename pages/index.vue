<template>
    <div>
        <section class="banner">
            <img src="/images/SDVOSB.webp" alt="sdvosb logo" style="width: 68px; height: 58px;">
            <h3>Service-Disabled Veteran-Owned Small Business</h3>
        </section>

        <section class="hero">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <img src="/images/governmentAssessmentLogo.webp" alt="government assessments 24x7 logo"
                                style="width: 272px" class="logo">
                            <h1>
                                <span style="color: #077FF8;">Trusted Assessment Solutions for the</span><br />
                                <span style="color: #E0AD2B;">U.S. Government</span>
                            </h1>
                            <h3 style="font-weight: 400; color: #1E222D;">
                                Empowering federal, state, and local agencies with <br />
                                tools for team success and achieving
                                mission objectives.
                            </h3>
                        </div>
                    </div>
                    <div class="row btns" style="display: flex; justify-content: center; margin-top: 20px;">
                        <button @click="scrollToProducts" class="teal topBtn">
                            View Products
                        </button>
                        <button @click="scrollToContactForm" class="lightTeal bottomBtn">
                            Book Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="logos">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 style="color: #1E222D;">
                            <span style="color: #00A8FF;">Government entities</span> that benefit from our assessment
                            products:
                        </h2>
                        <div class="logoWrapper">
                            <img src="~assets/government-logos/DC3 Logo.webp" alt="" class="dc3">
                            <img src="~assets/government-logos/MDOT Logo.webp" alt="" class="mdot">
                            <img src="~assets/government-logos/FL Criminial Investigations Logo.webp" alt="" class="fl">
                            <img src="~assets/government-logos/Defense Contract Audit Agency Logo.webp" alt=""
                                class="def">
                            <img src="~assets/government-logos/AFOSI Logo.webp" alt="" class="afosi">
                            <img src="~assets/government-logos/City of Atlanta Logo.webp" alt="" class="atlanta">
                            <img src="~assets/government-logos/Oklahoma State Health Department Logo.webp" alt=""
                                class="okhd">
                            <!-- <img src="~assets/government-logos/LA County Superior Court Logo.webp" alt=""> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="trusted">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 style="color: white; text-align: center;">
                            <span style="color: #00A8FF;">The trusted</span> assessment platform <br />
                            for government teams
                        </h3>
                    </div>
                    <div class="col-12 cards-container">
                        <div class="card firstCards">
                            <img src="/images/Government_calendar.webp" alt="card 1 image" class="card-image">
                            <div class="cardNumber firstCardNumber">
                                25+
                            </div>
                            <div class="cardText firstCardText">
                                Years <br />
                                in Business
                            </div>
                        </div>
                        <a style="text-decoration: none; color: #0033C5" href="/certifications">
                            <div class="card firstCards">
                                <img src="/images/Government_star.webp" alt="card 2 image" class="card-image">
                                <div class="cardNumber firstCardNumber">
                                    2300+
                                </div>
                                <div class="cardText firstCardText">
                                    Certified <br />
                                    Practitioners
                                </div>
                            </div>
                        </a>
                        <a style="text-decoration: none; color: #0033C5" href="/assessments">
                            <div class="card firstCards">
                                <img src="/images/Government_head.webp" alt="card 3 image" class="card-image">
                                <div class="cardNumber firstCardNumber">
                                    34m+
                                </div>
                                <div class="cardText firstCardText">
                                    Assessments <br />
                                    Administered
                                </div>
                            </div>
                        </a>
                        <a style="text-decoration: none; color: #0033C5" href="/about/partners">
                            <div class="card">
                                <img src="/images/Government_SDVOSB.webp" alt="card 4 image" class="lastCard-image">
                                <div class="cardNumber lastCardNumber">
                                    SDVOSB
                                </div>
                                <div class="cardText lastCardText">
                                    Service-Disabled <br />
                                    Veteran-Owned <br />
                                    Small Business
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="row" style="display: flex; justify-content: center; padding-top: 80px;">
                        <button @click="scrollToContactForm" class="lightTeal">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="mission">
            <div class="container-wrapper">
                <div class="container" style="color: #213C85;">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-5">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Our+Mission.webp"
                                    alt="our mission logo" style="width: 341px;" class="missionLogo">
                            </div>
                            <div class="col-7" style="text-align: right;">
                                <p>Empowering government leaders at every level to strengthen collaboration, inspire
                                    leadership, and drive meaningful outcomes through secure, science-backed solutions.
                                </p>
                                <button @click="scrollToContactForm" class="teal">
                                    Speak with Specialist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="products" id="products">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 style="text-align: center; color: #1E222D;">
                            <span style="color: #00A8FF;">Core</span> products
                        </h3>
                        <p style="text-align: center;">
                            From individual staff to your offices, departments, and commands, our tools can support your
                            strategic plans, objectives, or mission by enhancing communication with DISC, uncovering
                            performance drivers with Motivators, strengthening leadership through Emotional
                            Intelligence, and providing comprehensive feedback for growth with 360 Assessments.
                        </p>
                    </div>
                    <div class="col-12 cards-container">
                        <div class="card">
                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf"
                                target="_blank" rel="noopener"><img
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/emotional_intelligence_sample_report.webp"
                                    alt="card 1 image" class="card-image"></a>
                            <p style="margin-bottom: -28px;">
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf"
                                    class="hyperlink" target="_blank" rel="noopener">Emotional <br />
                                    Intelligence</a> <br />
                                Strengthen leadership by developing self-awareness, social awareness, and the
                                ability to navigate interpersonal relationships effectively.
                            </p>
                        </div>
                        <div class="card">
                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf"
                                class="hyperlink" target="_blank" rel="noopener"><img
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/disc_sample_report_image.webp"
                                    alt="card 2 image" class="card-image"></a>
                            <p style="margin-bottom: -70px;">
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf"
                                    class="hyperlink" target="_blank" rel="noopener">DISC Self</a> <br />
                                Identify observable behaviors and communication styles to enhance team dynamics,
                                improve collaboration, and build stronger connections.
                            </p>
                        </div>
                        <div class="card">
                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Motivators.pdf"
                                class="hyperlink" target="_blank" rel="noopener"><img
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/motivators_sample_report_image.webp"
                                    alt="card 3 image" class="card-image"></a>
                            <p style="margin-bottom: -70px;">
                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Motivators.pdf"
                                    class="hyperlink" target="_blank" rel="noopener">Motivators</a> <br />
                                <span>Uncover what drives individuals to perform at their best, aligning their
                                    motivations
                                    with organizational goals.</span>
                            </p>
                        </div>
                    </div>
                    <div class="row btns" style="display: flex; justify-content: center; margin-top: 20px;">
                        <button @click="sampleReportsButton" class="teal topBtn">
                            View Sample Reports
                        </button>
                        <button @click="scrollToContactForm" class="lightTeal bottomBtn">
                            Book Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="proudly">
            <div class="container">
                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Star+White.webp"
                    alt="image of a star" class="star">
                <div class="row">
                    <div class="col-12">
                        <h3>
                            <span style="color: #00A8FF;">Proudly</span> <span style="color: #fff;">SBA Certified &
                                Approved</span>
                        </h3>
                        <div class="logoWrapper">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Veteran-Owned.webp"
                                alt="verteran owned badge">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Service-Disabled+Veteran-Owned-Certified.webp"
                                alt="service disabled veteran owned certified badge">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/HUBZone+Certified.webp"
                                alt="hubzone certified badge">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/EDWOSB+Certified.webp"
                                alt="edwosb certified badge">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/WOSB+Certified.webp"
                                alt="wosb certified badge">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/8(a)+Certified.webp"
                                alt="8(a) certified badge">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="security">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row top" style="margin-bottom: 0px;">
                                <div class="col-7" style="text-align: left; margin-top: 20px;">
                                    <h3 style="color: #1E222D;">
                                        <span style="color: #00A8FF;">Built</span> for government security
                                    </h3>
                                    <div class="feature">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon">
                                        <div>
                                            <strong>Certified & Accredited</strong> <br />
                                            ISO 27001 and FedRAMP readiness.
                                        </div>
                                    </div>
                                    <br />
                                    <div class="feature">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon">
                                        <div>
                                            <strong>Data Privacy First</strong> <br />
                                            Strict adherence to government data protection standards.
                                        </div>
                                    </div>
                                    <br />
                                    <div class="feature">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon">
                                        <div>
                                            <strong>Robust Security Measures</strong> <br />
                                            Encryption, access controls, and 24/7 system monitoring.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Built+for+Government+security.webp"
                                        alt="manImage" style="width: 357px; margin-top: -10px;" class="man">
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 0px;">
                                <div class="col-5">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Optimized+for+your+mission.webp"
                                        alt="image of woman on computer" style="width: 324px; margin-top: -25px;"
                                        class="womanSmiling">
                                </div>
                                <div class="col-7" style="text-align: right; margin-top: 30px;">
                                    <h3 style="color: #1E222D;">
                                        <span style="color: #00A8FF;">Optimized</span> for your mission
                                    </h3>
                                    <div class="feature2">
                                        <div>
                                            <strong>Scientifically Validated Tools</strong> <br />
                                            Enhance individual and team performance with proven assessments.
                                        </div>
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon2">
                                    </div>
                                    <br />
                                    <div class="feature2">
                                        <div>
                                            <strong>Customizable Solutions</strong> <br />
                                            Tailored to fit your mission and organizational needs.
                                        </div>
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon2">
                                    </div>
                                    <br />
                                    <div class="feature2">
                                        <div>
                                            <strong>Exceptional Support</strong> <br />
                                            Backed by unparalleled customer service to ensure seamless implementation
                                            and ongoing success.
                                        </div>
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon2" style="margin-top: 20px">
                                    </div>
                                </div>
                            </div>
                            <div class="row bottom" style="margin-top: 0px;">
                                <div class="col-7" style="text-align: left; margin-top: 40px;">
                                    <h3 style="color: #1E222D;">
                                        <span style="color: #00A8FF;">Engineered</span> for team success
                                    </h3>
                                    <div class="feature">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon">
                                        <div>
                                            <strong>Enhanced Communication</strong> <br />
                                            Build stronger connections with tools that foster clarity and understanding.
                                        </div>
                                    </div>
                                    <br />
                                    <div class="feature">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon">
                                        <div>
                                            <strong>Improved Team Morale</strong> <br />
                                            Strengthen trust and collaboration to create a motivated, cohesive team.
                                        </div>
                                    </div>
                                    <br />
                                    <div class="feature">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Yellow+check.webp"
                                            alt="Checkmark" class="checkmark-icon">
                                        <div>
                                            <strong>Increased Productivity</strong> <br />
                                            Equip your teams with insights that streamline workflows and boost
                                            efficiency.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Engineered+for+Team+Success+Image.webp"
                                        alt="image of man smiling" style="width: 389px; margin-top: 20px;"
                                        class="manSmilingImage">
                                </div>
                            </div>
                            <div class="row btns" style="display: flex; justify-content: center; margin-top: 70px;">
                                <button @click="sampleReportsButton" class="teal topBtn">
                                    View Sample Reports
                                </button>
                                <button @click="scrollToContactForm" class="lightTeal bottomBtn">
                                    Book Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img class="image"
                            src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Will+Fenick+Testimonial+Image.webp"
                            alt="Will Fenick">
                    </div>
                    <div class="col-8">
                        <blockquote>
                            <img class="quote"
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Blue+Quotations.webp"
                                alt="blue quotations image">
                            <p>
                                I took the DISC assessment a few years ago, and the information I learned transformed
                                how I navigated my personal and professional journey post-service. I wish I had embraced
                                the Assessment 24x7 approach sooner—it would have been invaluable during my career. In
                                that spirit, I'm very excited to make these assessments available to our government
                                sector professionals today."
                            </p>
                            <footer>
                                <cite>William R. Fenick, CAPT, USN (Retired),</cite>
                                CEO, Government Assessments 24x7<br />
                            </footer>
                            <button @click="scrollToContactForm" class="lightTeal" style="margin-top: 30px;">
                                Get Started
                            </button>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="elevate">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-8" style="text-align: left;">
                                <h3>
                                    <span style="color: #00A8FF;">Elevate</span> team dynamics across <br />
                                    government entities with DISC
                                </h3>
                                <p>
                                    The DISC Assessment reveals four primary behavioral styles—Dominance, Influence,
                                    Steadiness, and Conscientiousness—helping government teams communicate effectively,
                                    collaborate seamlessly, and reduce friction. <br />
                                    <br />
                                    <strong>D (Dominance):</strong> Confident and results-driven, focused on solving
                                    problems <br />
                                    <strong>I (Influence):</strong> Persuasive and enthusiastic, excelling at building
                                    relationships
                                    <br />
                                    <strong>S (Steadiness):</strong> Reliable and supportive, promoting consistency and
                                    teamwork <br />
                                    <strong>C (Conscientiousness):</strong> Analytical and precise, ensuring accuracy
                                    and quality <br />
                                    <br />
                                    When paired with tools like <a
                                        href="https://assessments24x7.com/assessments/motivators"
                                        class="hyperlink">Motivators</a> and <a
                                        href="https://assessments24x7.com/assessments/emotional-intelligence"
                                        class="hyperlink">Emotional
                                        Intelligence</a> assessments,
                                    DISC becomes a cornerstone for developing mission-ready teams.
                                </p>
                                <button @click="sampleReportsButton" class="teal" style="margin-top: 25px;">
                                    View Sample Reports
                                </button>
                            </div>
                            <div class="col-4 seal">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Laptop+with+DISC+Model.webp"
                                    alt="laptop image" style="width: 305px; margin-top: 110px;" class="laptop">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="stats">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-3">
                            <p><span class="topLine">10 Min.</span><br />
                                <span class="bottomLine">Avg. Assessment <br />
                                    Completion Time</span>
                            </p>
                        </div>
                        <div class="col-3">
                            <p><span class="topLine">7+</span><br />
                                <span class="bottomLine">Free Team <br />
                                    Reports</span>
                            </p>
                        </div>
                        <div class="col-3">
                            <p><span class="topLine">50+</span><br />
                                <span class="bottomLine">Suite of <br />
                                    Supporting Assessments</span>
                            </p>
                        </div>
                        <div class="col-3">
                            <p><span class="topLine">ASI</span><br />
                                <span class="bottomLine">Validated & <br />
                                    Compliant</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="asi">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-4 seal">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/asi-certified.webp"
                                    alt="Scientifically Validated Assessments by ASI"
                                    style="width: 212px; margin-top: 40px;" class="asiBadge">
                            </div>
                            <div class="col-8" style="text-align: right;">
                                <h3 style="padding-top: 20px;">
                                    <span style="color: #00A8FF;">Validated,</span> reliable, compliant
                                </h3>
                                <p>
                                    Our assessments are validated by ASI to adhere to the highest standards set by the
                                    American
                                    Psychological Association and the Equal Employment Opportunity Commission. In
                                    addition,
                                    Assessments 24x7 has one of the highest Cronbach scores for our DISC assessment,
                                    which
                                    indicates exceptional consistency and reliability.
                                </p>
                                <button @click="scrollToContactForm" class="teal" style="margin-top: 20px;">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="latest">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Star+White.webp"
                alt="image of a star" class="star">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>
                            Check out our latest press release announcing <br />
                            Goverenment Assessments 24x7
                        </h3>
                        <div class="buttonWrapper">
                            <button @click="pressReleaseButton" class="teal">
                                View Press Release
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="choose">
            <div class="container">
                <div class="row">
                    <div class="col-12" style="text-align: center;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Government+A24x7+Logo.webp"
                            alt="government assessments 24x7 logo" style="width: 162px; margin-bottom: 10px;"
                            class="companyLogo">
                        <h3 style="color: #1E222D; text-align: center; margin-bottom: 0px;">
                            <span style="color: #00A8FF;">Why</span> Choose Government Assessments 24x7?
                        </h3>
                    </div>
                    <div class="col-12">
                        <div class="row cards-container">
                            <div class="card">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Checkmark.webp"
                                            alt="checkmark image" class="card-image">
                                        <p>
                                            Proven Results, <br />
                                            Trusted <br />
                                            Globally
                                        </p>
                                    </div>
                                    <div class="card-back">
                                        <p>
                                            With 50+ years of expertise, our assessments improve communication,
                                            productivity, and organizational goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Checkmark.webp"
                                            alt="checkmark image" class="card-image">
                                        <p>
                                            Veteran-Owned <br />
                                            and <br />
                                            Mission-Driven
                                        </p>
                                    </div>
                                    <div class="card-back">
                                        <p>
                                            As an SDVOSB, we understand government needs and are committed to mission
                                            success at every level.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Checkmark.webp"
                                            alt="checkmark image" class="card-image">
                                        <p>
                                            Validated and <br />
                                            Reliable <br />
                                            Assessments
                                        </p>
                                    </div>
                                    <div class="card-back">
                                        <p>
                                            Validated by ASI, our assessments stand out in an unregulated industry with
                                            scientific backing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row cards-container">
                            <div class="card cardSpace">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Checkmark.webp"
                                            alt="checkmark image" class="card-image">
                                        <p>
                                            Customizable <br />
                                            Platform and <br />
                                            Branded Reports
                                        </p>
                                    </div>
                                    <div class="card-back">
                                        <p>
                                            Tailor assessments and reports to align with your organization’s goals and
                                            branding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Checkmark.webp"
                                            alt="checkmark image" class="card-image">
                                        <p>
                                            Secure and <br />
                                            Compliant <br />
                                            Technology
                                        </p>
                                    </div>
                                    <div class="card-back">
                                        <p>
                                            Our platform combines robust security with tools to empower mission-focused
                                            teams.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-inner">
                                    <div class="card-front">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Checkmark.webp"
                                            alt="checkmark image" class="card-image">
                                        <p>
                                            Unmatched <br />
                                            Customer <br />
                                            Support
                                        </p>
                                    </div>
                                    <div class="card-back">
                                        <p>
                                            Our team ensures a seamless experience from onboarding to implementation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row btn" style="display: flex; justify-content: center; padding-top: 70px;">
                        <button @click="scrollToContactForm" class="lightTeal">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <contact-form-fold id="contactForm"></contact-form-fold>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>

    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'government-page',
    components: {
        LazyHydrate,
        'contact-form-fold': () => import('@/components/government/GovernmentContactFormFold'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: 'DISC Assessments for Government | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Boost team collaboration and leadership with DISC Assessments tailored for government agencies. Explore solutions to enhance performance and communication.'
                }
            ]
        }
    },
    methods: {
        sampleReportsButton(event) {
            window.location.href = 'https://assessments24x7.com/sample-reports';
            if (event) {
                event.target.blur();
            }
        },
        pressReleaseButton(event) {
            window.open(
                'https://www.businesswire.com/news/home/20250225403810/en',
                '_blank',
                'noopener'
            );
            if (event) {
                event.target.blur();
            }
        },
        scrollToProducts(event) {
            const element = document.getElementById('products');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToContactForm(event) {
            const element = document.getElementById('contactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.banner {
    text-align: center;
    justify-content: center;
    color: white;
    background: linear-gradient(90deg, #0033C5 0%, #077FF8 100%);
    height: 83px;
    display: flex;

    h3 {
        margin: auto 0;
    }

    img {
        margin: auto 10px auto 0;
    }
}

.hero {
    background: url('/images/governmentHeroFold.webp') rgb(255, 255, 255) -8.012px -77px / 100.765% 211.194% no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 50px;
    padding-bottom: 80px;

    .topBtn {
        margin-right: 40px;
    }
}

.logos {
    .container {
        padding: 20px 0 60px 0;
    }

    .logoWrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        img {
            display: block;
        }

        .dc3 {
            width: 73px;
            height: 73px;
        }

        .mdot {
            width: 105px;
            height: 41px;
        }

        .fl {
            width: 48px;
            height: 69px;
        }

        .def {
            width: 72px;
            height: 71px;
        }

        .afosi {
            width: 77px;
            height: 70px;
        }

        .atlanta {
            width: 72px;
            height: 73px;
        }

        .okhd {
            width: 141px;
            height: 38px;
        }
    }

    p {
        font-size: 0.875em;
        font-weight: 700;
        text-align: center;
        padding: 0 0 30px 0;
    }
}

.trusted {
    background-color: #1E222D;

    .container {
        padding-top: 30px;
        padding-bottom: 70px;
    }

    h1 {
        color: #213C85;
        font-family: Poppins;
        text-align: center;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
        margin-top: 20px;
    }

    .card {
        width: 202px;
        height: 226px;
        border-radius: 10px;
        border: 1px solid #E6E153;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .firstCards {
        padding: 10px;
        justify-content: space-evenly;
    }

    .card-image {
        width: 50px;
        margin-top: -20px;
        margin-bottom: -10px;
    }

    .lastCard-image {
        width: 50px;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .cardNumber {
        color: #00A8FF;
        font-family: Poppins;
        font-size: 32pt;
        font-weight: 700;
    }

    .firstCardNumber {
        margin-top: -20px;
    }

    .lastCardNumber {
        margin-top: -9px;
        margin-bottom: -14px;
    }

    .cardText {
        color: #0033C5;
        font-family: $nunito-family;
        font-size: 14pt;
        font-weight: 400;
    }

    .firstCardText {
        margin-top: -30px;
    }

    .lastCardText {
        padding-top: 15px;
    }
}

.mission {
    .container-wrapper {
        padding-top: 30px;
        padding-bottom: 60px;
        position: relative;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }

    .lightBox {
        display: flex;
        align-items: center;
        width: 260px;
        height: 33px;
        border-radius: 7px;
        border: 1px solid #F5F5F5;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        margin-top: 35px;
        margin-left: 10px;
    }

    .light-bulb {
        width: 70px;
        margin-left: -20px;
    }

    .lightBoxText {
        color: #213C85;
        font-family: $nunito-family;
        font-size: 1em;
        font-weight: 700;
        line-height: 1.5;
        text-decoration: underline;
    }

    button {
        margin-top: 30px;
    }
}

.products {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Fold+4+-+2500+x+718.webp') rgb(255, 255, 255) -0.247px -6px / 100.034% 158.607% no-repeat;

    .container {
        padding-top: 30px;
        padding-bottom: 70px;
    }

    p {
        color: #1E222D;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        margin-top: 10px;
        margin-bottom: 60px;
    }

    .card {
        width: 185px;
        min-height: 450px;
        border-radius: 12px;
        border: 1px solid #E0E0E0;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(7, 127, 248, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 5px;
        padding-top: 15px;
    }

    .card-image {
        width: 149px;
        height: 193px;
        margin-bottom: -10px;
    }

    .topBtn {
        margin-right: 40px;
    }
}

.proudly {
    background: #1E222D;
    padding: 30px 10px 90px 10px;
    position: relative;

    .star {
        width: 128px;
        position: absolute;
        top: 125px;
        right: 100px;
    }

    h3 {
        text-align: center;
        margin-bottom: 50px;
    }

    .logoWrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        img {
            display: block;
            width: 75px;
        }
    }
}

.security {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 50px;
        padding-bottom: 85px;
    }

    h4 {
        color: #213C85;
        font-family: Poppins;
        line-height: 1.5em;
    }

    p {
        color: #213C85;
    }

    .feature {
        display: flex;
        align-items: flex-start;
        color: #1E222D;
    }

    .checkmark-icon {
        width: 21px;
        margin-right: 15px;
        margin-top: 10px;
    }

    .feature2 {
        display: flex;
        color: #1E222D;
        justify-content: right;
        align-items: flex-start;
    }

    .checkmark-icon2 {
        width: 21px;
        margin-left: 15px;
        margin-top: 10px;
    }

    .feature,
    .feature2 div {
        font-size: 1em;
        line-height: normal;
        font-family: $nunito-family;
    }

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .topBtn {
        margin-right: 40px;
    }
}

.testimonial {
    background-color: #1E222D;
    padding: 40px 0;
    color: #fff;

    .image {
        width: 260px;
        margin: 0 auto;
        display: block;
    }

    blockquote {
        position: relative;
        text-align: right;
        margin-top: 30px;

        p {
            margin-left: 60px;
            position: relative;
        }

        .quote {
            position: absolute;
            top: -40px;
            left: -25px;
            width: 80px;
        }

        footer {
            font-size: 10pt;
            margin-top: 10px;

            cite {
                font-weight: 800;
                display: block;
                font-size: 12pt;
            }

            .hyperlink {
                color: #fff;
            }
        }
    }
}

.elevate {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 30px;
        margin-bottom: 50px;
    }

    h3 {
        color: #1E222D;
        font-weight: 700;
    }

    p {
        color: #1E222D;
    }
}

.stats {
    background-color: #1E222D;
    background-position: center;
    min-height: 192px;

    .topLine {
        color: #00A8FF;
        text-align: center;
        font-family: Poppins;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        font-size: 27pt;
        font-weight: 700;
    }

    .bottomLine {
        font-size: 11.25pt;
        font-weight: 400;
    }

    .col-3 {
        text-align: center;
        color: white;
    }
}

.asi {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 50px;
        margin-bottom: 123px;
    }

    h3 {
        color: #1E222D;
        font-weight: 700;
    }

    p {
        color: #1E222D;
    }

    .bottom {
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/skyline-background.webp');
        background-size: cover;
        background-position: center;
        padding-bottom: -75px;
    }
}

.latest {
    background: #1E222D;
    color: #fff;
    padding: 65px 10px 110px 10px;
    position: relative;

    .star {
        width: 128px;
        position: absolute;
        top: 50px;
        right: 400px;
    }

    h3 {
        text-align: center;
        padding-bottom: 10px;
        text-shadow: 1px 1px 1px black;
    }

    .buttonWrapper {
        display: flex;
        justify-content: center;
    }
}

.choose {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Fold+10+-+2500+x+718.webp') rgb(255, 255, 255) -0.247px -6px / 100.034% 158.607% no-repeat;

    .container {
        padding-top: 30px;
        padding-bottom: 70px;
    }

    p {
        font-weight: 700;
        color: #00A8FF;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        margin-top: 20px;
        margin-left: 20px;
    }

    .card {
        width: 156px;
        height: 155px;
        perspective: 1000px;
        cursor: pointer;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 12px;
        border: 1px solid #E0E0E0;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(7, 127, 248, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    .card-front {
        z-index: 2;
        transform: rotateY(0);
    }

    .card-back {
        transform: rotateY(180deg);
        background: #FFF;
        color: #FFF;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        text-align: center;
        line-height: 1em;
    }

    .card-image {
        width: 45px;
        margin-top: 20px;
    }
}

.blueLine {
    width: 100%;
    height: 6px;
    flex-shrink: 0;
    background: linear-gradient(90deg, #0033C5 0%, #077FF8 100%);
    margin: 0;
    margin-bottom: -1px;
}

@media (max-width: 1024px) {
    .logos {
        .logoWrapper {
            justify-content: space-evenly;
            gap: 30px;

            img {
                flex: none;
                margin: 0;
            }
        }
    }

    .proudly {
        .logoWrapper {
            justify-content: space-evenly;
            gap: 30px;

            img {
                flex: none;
                margin: 0;
            }
        }
    }

    .testimonial {
        .image {
            width: 70% !important;
        }
    }
}

@media (max-width: 900px) {
    .trusted {
        .cards-container {
            display: grid;
            grid-template-columns: 202px 202px;
            grid-auto-rows: 226px;
            gap: 20px;
            justify-content: center;
        }

        .card {
            width: 202px;
            height: 226px;
        }
    }
}

@media (max-width: 768px) {
    .banner {
        font-size: .5em !important;

        img {
            width: 48px !important;
            height: 38px !important;
            margin: auto 0px auto 20px !important;
        }

        h3 {
            margin: auto auto auto auto !important;
        }
    }

    .hero {
        background: url('~assets/government-page/Government_American Flag background graphic.webp');
        background-size: cover;
        background-position: center;

        .logo {
            width: 50% !important;
        }

        .btns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .topBtn {
            margin-right: 0px;
        }

        .topBtn,
        .bottomBtn {
            margin-bottom: 20px;
        }

        .bottomBtn:last-child {
            margin-bottom: 0;
        }
    }

    .mission {
        .missionLogo {
            width: 100% !important;
        }
    }

    .products {
        background: url('~assets/government-page/Government_American Flag background graphic.webp');
        background-size: cover;
        background-position: center;

        .btns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .topBtn {
            margin-right: 0px;
        }

        .topBtn,
        .bottomBtn {
            margin-bottom: 20px;
        }

        .bottomBtn:last-child {
            margin-bottom: 0;
        }
    }

    .security {
        .top {
            margin-top: -35px !important;
            display: flex;
            flex-direction: column-reverse;
        }

        .bottom {
            display: flex;
            flex-direction: column-reverse;
        }

        .man {
            width: 80% !important;
            margin-top: 10px !important;
        }

        .womanSmiling {
            margin-top: 40px !important;
            margin-bottom: -40px !important;
            width: 70% !important;
        }

        .manSmilingImage {
            width: 80% !important;
            display: flex;
            flex-direction: column-reverse;
            margin: 30px 0 -30px 0 !important;
        }

        .btns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .topBtn {
            margin-right: 0px;
        }

        .topBtn,
        .bottomBtn {
            margin-bottom: 20px;
        }

        .bottomBtn:last-child {
            margin-bottom: 0;
        }

    }

    .testimonial {
        blockquote {
            p {
                margin-left: 0px;
                margin-right: -20px !important;
                margin-top: 60px !important;
            }
        }

        .quote {
            top: -50px !important;
            left: -25px;
            width: 60px !important;
        }
    }

    .elevate {
        .container {
            padding-top: 20px !important;
        }

        .laptop {
            margin-top: 40px !important;
            width: 100% !important;
        }
    }

    .asi {
        img {
            margin-top: -20px !important;
            margin-bottom: -20px !important;
        }

        .asiBadge {
            width: 50% !important;
        }

        .container {
            margin-bottom: 60px !important;
        }
    }
}

@media (max-width: 612px) {
    .choose {
        .cards-container {
            margin-left: 0px !important;
        }
    }
}

@media (max-width: 577px) {
    .logos {
        h2 {
            font-size: 1.5em !important;
            text-align: center;
        }
    }

    .trusted {
        .cards-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .card {
            width: 202px;
            height: 226px;
        }
    }

    .products {
        .cards-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .card {
            width: 202px;
            height: 226px;
        }
    }

    .choose {
        .cards-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .card {
            width: 202px;
            height: 226px;
        }
    }
}

@media (max-width: 400px) {
    .logos {
        .logoWrapper {
            flex-direction: column;
            gap: 20px;

            img {
                flex: none;
                width: auto;
            }
        }
    }
}
</style>