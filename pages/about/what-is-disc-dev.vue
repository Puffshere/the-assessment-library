<template>
    <div class="main">
        <main-nav active="about" />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">What is <span style="color: #00A8FF;">DISC?</span></h1>
                        <p style="padding: 0px 10px;">
                            The DISC assessment is a leading tool in understanding human behavior, emphasizing
                            observable patterns that affect teamwork, communication, and productivity. Taking a DISC
                            assessment reveals insights into your personal DISC profile, highlighting key strengths and
                            areas for growth. DISC categorizes human behavior into four main behavioral styles:
                            Dominance, Influence, Steadiness, and Conscientiousness. Each individual possesses a unique
                            behavioral style, helping explain approaches to communication, teamwork, and approaches to
                            challenges.
                        </p>
                    </div>
                </div>
                <div class="row button-container">
                    <button @click="sampleReportsButton" class="teal">
                        Sample Reports
                    </button>
                    <button @click="scrollToOverview" class="light">
                        DISC Overview
                    </button>
                </div>
            </div>
        </section>

        <section class="discModel">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container" style="color: #213C85;">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-5">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/Laptop%20with%20DISC%20model.webp"
                                    alt="image of a laptop computer" style="width: 277px; margin-top: 0px;">
                                <div class="lightBox">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/light-bulb.webp"
                                        alt="image of a light bulb" style="margin-left: -20px;">
                                    <span class="lightBoxText">Discover who created DISC.</span>
                                </div>
                            </div>
                            <div class="col-7" style="text-align: right;">
                                <h3>
                                    What Is the DISC Model?
                                </h3>
                                <p
                                    style=" position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                    While many associate DISC with personality types, it actually focuses on distinct
                                    behavioral styles, helping people understand how their behavioral traits influence
                                    interactions and decision-making. The DISC model is widely used for professional and
                                    personal development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">

            </div>
        </section>

        <section class="usedFor">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-7">
                            <p style="padding: 0px 10px;">
                                DISC teaches users how to identify the predictable aspects of behavior and communication
                                and
                                to use that knowledge to their advantage. The ability to create a strong and immediate
                                connection with others is a fundamental skill in sales, management, executive-level
                                leadership, and everyday life. The goal of DISC is to help users build and maximize
                                productive relationships. Users don’t need to change their personality traits; they need
                                to
                                recognize what drives and motivates others and determine the best ways to effectively
                                interact with them. The comprehensive, yet simple, DISC reports teach users specific
                                skills
                                to improve their personal interactions that create immediate results.
                            </p>
                        </div>
                        <div class="col-5">
                            <h4 class="section-title">What is the <br />DISC assessment <br /><span
                                    style="color: #00A8FF;">used
                                    for?</span></h4>
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/blue+arrow.webp"
                                alt="blue arrow" style="width: 30%; margin-top: -10px; margin-right: -180px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="overview" id="overview">
            <div class="container-wrapper">
                <div class="container" style="color: #213C85;">
                    <div class="row">
                        <div class="col-12">
                            <h3>
                                DISC overview
                            </h3>
                            <p style=" position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                The DISC profile is a simple, practical, and easy-to-remember model that focuses on
                                individual patterns of observable behavior and emotions. It measures the intensity of
                                characteristics using scales of directness, openness, pace, and priority to create a
                                unique blend of four behavioral styles: <br />
                            <ul>
                                <li>Dominance (D)</li>
                                <li>Influence (I)</li>
                                <li>Steadiness (S)</li>
                                <li>Conscientiousness (C)</li>
                            </ul>
                            When a person uses the DISC model, they can identify their own blend of styles,
                            recognize and adapt to the styles of others, and develop a better communication process
                            that allows them to interact effectively with others to build mutually beneficial
                            relationships. This is applicable in any setting, including working with teams, sales,
                            leadership, or in other business and personal relationships. <br />
                            <br />
                            Using DISC can provide insight into behavioral tensions, causes of stress,
                            problem-solving, and ways to respond more effectively to conflict. When these items are
                            identified for each individual, it leads to better relationships, both personally and
                            professional. For example, salespeople using DISC can develop finely-tuned selling
                            skills based on identifying and responding to a customer's style. In personal
                            relationships, understanding the needs, emotions, and fears of others can help us build
                            mutually-beneficial partnerships.

                            </p>
                        </div>
                    </div>
                    <div class="row button-container">
                        <button @click="sampleReportsButton" class="teal">
                            Sample Reports
                        </button>
                        <button @click="contactFormButton" class="light">
                            Book Live Demo
                        </button>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <section class="facts">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="section-title">What Does DISC <span style="color: #00A8FF;">Stand For?</span></h3>
                        <p style="padding: 0px 10px;">
                            DISC represents the four styles of Dominance, Influence, Steadiness, and Conscientiousness.
                            Each style provides insights into behaviors and priorities by analyzing responses to
                            specific questions. While the four DISC styles emphasize observable behaviors, it also
                            relates closely to concepts like conscientiousness, reflecting a commitment to understanding
                            and adapting to various communication styles.
                            Dominance, influence, steadiness, and conscientiousness represent four key behavioral
                            styles. DISC offers insights into individuals’ unique patterns and identifies their main
                            characteristics. Understanding DISC principles helps grasp how different people interact and
                            work, improving communication and collaboration within teams.
                        </p>
                        <br />
                        <h3 class="section-title">What Does <span style="color: #00A8FF;">DISC Measure?</span></h3>
                        <p style="padding: 0px 10px;">
                            DISC measures observable behavior and emotions. It does not measure intelligence, education,
                            experience, aptitude, mental health, or values.
                            You may gain greater insight into how you respond to challenges, how you influence and
                            interact with others, how you operate at your preferred pace, and how well you follow
                            directions and function with structure in place, as well as many other patterns.
                            When you are aware of these dimensions and know how to apply them effectively, you can use
                            your style strengths or modify your style weaknesses to meet your needs and the needs of
                            others. <br />
                            <br />
                            <span style="color: #00A8FF;">A DISC report has three parts:</span> <br />
                            <br />
                            Part I helps you understand each DISC style and identifies characteristics, including the
                            defining patterns of each behavioral style. The overview of the model is provided to help
                            you with a strong foundation of understanding in directness, openness, pace, priority, and
                            the emotions of each style. <br />
                            <br />
                            Part II focuses on understanding your unique qualities and reveals insights that highlight
                            what sets your style apart. You’ll receive narratives and visuals that support your
                            understanding of your style as well as bullet-point lists including Communication Do's and
                            Don’ts, Your Workplace Tendencies, Potential Areas of Improvement, How You Respond to
                            Stress, and your 12 Behavioral Tendencies at Work. This section is all about you, and there
                            are several pages devoted to helping you achieve a deeper understanding of your style
                            blend.<br />
                            <br />
                            Part III explores adaptability and offers actionable recommendations for you and others who
                            interact with you. This section is designed as a resource to assist you in communicating
                            more effectively with others and includes multiple tools to help you practice your new DISC
                            knowledge and guide your continued development and implementation in your everyday
                            environments.
                        </p>
                        <br />
                        <h3 class="section-title">How DISC Behavior <span style="color: #00A8FF;">Assessments
                                Work?</span></h3>
                        <p style="padding: 0px 10px;">
                            The good news about DISC assessments is that there are no right or wrong answers. They're
                            also simple to take online, with some assessments taking as little as 10 minutes to
                            complete.
                            Although a person’s Natural profile tends to stay fairly consistent over time, the Adapted
                            style can change based on the environment, situation, or relationship and is a reflection of
                            a moment in time. Some may consider taking the assessment again several years apart because
                            the accuracy of the assessment itself is continually improved. Keep in mind, changes to
                            behavioral style can also occur due to seasons of life and emotional experiences. It’s
                            always a good idea to continue to evaluate your behavioral patterns to build awareness of
                            how you are responding to various situations, environments, and relationships.
                            Scoring and reporting can either be done electronically or in a few simple steps if you take
                            a paper version of the assessment. <br />
                            <br />
                            Taking a DISC assessment involves answering a questionnaire about your own behavior by
                            choosing descriptors most like you and least like you. From your selections, an algorithm
                            returns your personal behavioral blend and your scores produce a profile report. You'll be
                            able to read about your unique behavioral style, your tendencies, needs, preferred
                            environment for greatest opportunities to be effective, and strategies for adapting behavior
                            appropriately with others. You will also learn more about your strengths and potential
                            challenges.
                            Reports also include insights about other DISC styles so you can learn more about how others
                            act and what their strengths and weaknesses are as well. When you do this in a work team
                            setting, you will end up with a greater understanding of your workplace colleagues to help
                            you with effective communication strategies going forward.<br />
                            <br />
                            Some people are concerned that DISC profiles can place unfair labels on people. For example,
                            you might have heard someone dismiss someone’s action or comments with a remark like “She’s
                            a D, what do you expect?” Assigning labels and rationalizing poor behavior are not what DISC
                            profiles are about. Not all D styles behave or respond in the same way, especially when we
                            consider the style blend. A DC will behave differently than a DI, even though their primary
                            style is the same. DISC simply helps people better understand behavioral and communication
                            preferences and priorities.
                        </p>
                    </div>
                </div>
                <div class="row button-container">
                    <button @click="sampleReportsButton" class="teal">
                        Sample Reports
                    </button>
                    <button @click="contactFormButton" class="light">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

        <section class="styleOverview">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container" style="color: #213C85;">
                    <div class="row">
                        <div class="col-12">
                            <h3 style="text-align: center; margin-bottom: -10px">
                                DISC style overview
                            </h3>
                            <div class="card">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="image-container">
                                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/D+Style+Graph.webp"
                                                alt="d style graph" style="width: 120%; margin-top: 95px;">
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <P>
                                            <span style="font-weight: 700;">Dominance (D)</span> <br />
                                            <br />
                                            People with the D style place an emphasis on shaping the environment by
                                            overcoming opposition to accomplish results. They are fast-paced and
                                            task-focused. <br />
                                            <br />
                                            A person with a D style…
                                        </P>
                                        <ul>
                                            <li>
                                                is motivated by winning, competition, and success
                                            </li>
                                            <li>
                                                focuses on accepting challenges, taking action, and achieving immediate
                                                results
                                            </li>
                                            <li>
                                                is described as direct, demanding, forceful, strong-willed, driven,
                                                determined, and self-confident
                                            </li>
                                            <li>
                                                may be limited by lack of concern for others, impatience, and
                                                stubbornness
                                            </li>
                                            <li>
                                                may fear losing control, being taken advantage of, or being seen as
                                                vulnerable; values competency, action, concrete results, and challenges
                                            </li>
                                            <li>
                                                values results and action, getting things done now
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12" style="margin-top: -20px;">
                                        <p style="padding: 0 10px;">
                                            When communicating with D-style individuals, give them the bottom line, be
                                            brief
                                            and quick, focus your DISCussion, avoid making generalizations, refrain from
                                            repeating yourself, and focus on solutions rather than problems. Allow them
                                            to
                                            make choices and have control.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="image-container">
                                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/I+Style+Graph.webp"
                                                alt="i style graph" style="width: 120%; margin-top: 80px;">
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <P>
                                            <span style="font-weight: 700;">Influence (I)</span> <br />
                                            <br />
                                            People with the I style place an emphasis on shaping the environment by
                                            influencing or persuading others. They are fast-paced and
                                            relationship-focused. <br />
                                            <br />
                                            A person with a I style…
                                        </P>
                                        <ul>
                                            <li>
                                                is motivated by social recognition, group activities, and networking
                                            </li>
                                            <li>
                                                focuses on spontaneity, collaboration, and expressing enthusiasm
                                            </li>
                                            <li>
                                                is described as convincing, charming, enthusiastic, charismatic,
                                                trusting, and optimistic
                                            </li>
                                            <li>
                                                may be limited by a lack of follow-through, impulsiveness, and being
                                                disorganized
                                            </li>
                                            <li>
                                                may fear loss of social approval, being alone or ignored; values
                                                spontaneity, dreaming, freedom of expression, and a variety of
                                                relationships
                                            </li>
                                            <li>
                                                values social acceptance and interaction, fun, and excitement
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12" style="margin-top: -20px;">
                                        <p style="padding: 0 10px;">
                                            When communicating with I-style individuals, share your experiences, allow
                                            them time to ask questions and talk openly, and don’t get frustrated with a
                                            quickly moving, sometimes scattered conversation. Focus on the positives,
                                            avoid overloading them with details, and don't interrupt. <br />
                                            Follow up in writing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="image-container">
                                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/S+Style+Graph.webp"
                                                alt="s style graph" style="width: 120%; margin-top: 60px;">
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <P>
                                            <span style="font-weight: 700;">Steadiness (S)</span> <br />
                                            <br />
                                            People with the S style place an emphasis on cooperating with others within
                                            existing circumstances to carry out the task in a steady and predictable
                                            manner. They are slower-paced and relationship-focused. <br />
                                            <br />
                                            A person with a S style…
                                        </P>
                                        <ul>
                                            <li>
                                                is motivated by cooperation, opportunities to help, and sincere
                                                appreciation
                                            </li>
                                            <li>
                                                focuses on collaboration, maintaining stability, and giving support
                                            </li>
                                            <li>
                                                is described as calm, patient, predictable, deliberate, stable, and
                                                consistent
                                            </li>
                                            <li>
                                                may be limited by being indecisive, overly accommodating, and an
                                                inclination to avoid sudden change without an opportunity to plan
                                            </li>
                                            <li>
                                                may fear sudden change, loss of stability, and offending others
                                            </li>
                                            <li>
                                                values loyalty, helping others, and security
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12" style="margin-top: -20px;">
                                        <p style="padding: 0 10px;">
                                            When communicating with the S style individuals, be personal and amiable,
                                            express your interest in them and what you expect from them, take time to
                                            provide clarification. They may need some time to process. Be polite, and
                                            avoid being confrontational, overly aggressive, or rude.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="image-container">
                                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/C+Style+Graph.webp"
                                                alt="c style graph" style="width: 120%; margin-top: 52px;">
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <P>
                                            <span style="font-weight: 700;">Conscientiousness (C)</span> <br />
                                            <br />
                                            People with the C style place an emphasis on working meticulously within
                                            existing circumstances to ensure quality and accuracy. They are slower-paced
                                            and task-focused. <br />
                                            <br />
                                            A person with a C style…
                                        </P>
                                        <ul>
                                            <li>
                                                is motivated by opportunities to gain more information and build their
                                                knowledge, show their expertise, and produce high-quality, accurate work
                                            </li>
                                            <li>
                                                focuses on ensuring accuracy, maintaining procedures and protocols, and
                                                challenging assumptions with evidence and data
                                            </li>
                                            <li>
                                                is described as careful, cautious, systematic, diplomatic, accurate, and
                                                tactful
                                            </li>
                                            <li>
                                                may be limited by being overcritical, overanalyzing, and isolating
                                                themselves
                                            </li>
                                            <li>
                                                may fear criticism and being wrong
                                            </li>
                                            <li>
                                                values quality and accuracy
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12" style="margin-top: -20px;">
                                        <p style="padding: 0 10px;">
                                            When communicating with a C-style individual, focus on facts and details;
                                            minimize "pep talk" or emotional language; be patient, persistent, and
                                            diplomatic. C styles need time to process and respond so be sure to allow
                                            time for them to gather their thoughts and resources to formulate the best
                                            response they can offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="validation">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="image-container">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/asi-certified.webp"
                                alt="asi certified badge" style="width: 90px; margin-bottom: -14px;">
                        </div>
                        <h3 class="section-title">Our reporting, research, <span style="color: #00A8FF;">and
                                validation</span></h3>
                        <p style="padding: 0px 10px;">
                            Assessments 24x7 maintains the highest standards of development and application through
                            extensive research and we diligently work to validate and ensure our reports are accurate.
                            Each report is designed to provide clear interpretations and feedback based on the
                            individual’s self-perception score that is then confirmed with face validity (to ensure the
                            assessment measures what it says it will measure). <br>
                            <br />
                            We also practice a philosophy of transparency and openly share our rigorous reporting,
                            research, and validation information to ensure a high degree of confidence for use in
                            business, non-profit, coaching, or counseling. Our research reports are publicly <a href=""
                                style="color: #00A8FF;" class="hyperlink">available
                                here.</a>
                        </p>
                    </div>
                </div>
                <div class="row button-container">
                    <button @click="learnMoreButton" class="light">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

        <section class="conducted">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h4 style="text-align: center;">
                                How DISC assessments <br />
                                are conducted
                            </h4>
                            <div class="row" style="margin-bottom: 60px;">
                                <div class="col-9" style="text-align: left;">
                                    <p
                                        style="position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                        <span style="font-weight: 700; font-family: poppins;">1. Questionnaire</span>
                                        <br />
                                        <br />
                                        Taking a DISC assessment is a quick self-assessment process that provides a
                                        comprehensive report on your behavioral style. This assessment tool is a
                                        valuable resource for both personal growth and professional development. You are
                                        the expert on yourself, and there are no right or wrong answers. The online
                                        questionnaire takes about 15 to 20 minutes to complete.
                                    </p>
                                </div>
                                <div class="col-3">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Questionnaire.webp"
                                        alt="disc questionnaire" style="width: 185px; margin-top: -120px;"
                                        class="discQuestionnaire">
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 80px;">
                                <div class="col-3">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC%20Report%20image.webp"
                                        alt="disc report image" style="width: 253px; margin-top: 0px;"
                                        class="discReportImage">
                                </div>
                                <div class="col-9" style="text-align: right;">
                                    <p
                                        style="position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                        <span style="font-weight: 700; font-family: poppins;">2. Scoring and
                                            Analyses</span>
                                        <br />
                                        <br />
                                        The DISC assessment is scored electronically, and results are presented in a
                                        comprehensive report. This report includes two primary graphs representing the
                                        respondent’s Adapted Style and Natural Style, highlighting both situational and
                                        instinctive behavioral patterns. The Behavioral Pattern View (BPV) visually
                                        represents the intensity of each DISC style and indicates how styles combine to
                                        form a unique behavioral profile, displayed in a circular graph for easy
                                        reference. <br />
                                        <br />
                                        This format provides insight into each individual’s style and enables meaningful
                                        interpretation, especially helpful for coaches and facilitators. The report also
                                        examines 12 Behavioral Tendencies, assessing how the respondent’s DISC styles
                                        combine to influence areas like decision-making, communication, and stress
                                        responses. This detailed approach allows individuals to gain a nuanced
                                        understanding of their behavior and adapt effectively in varied contexts.
                                    </p>
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 80px;">
                                <div class="col-9" style="text-align: left;">
                                    <p
                                        style="position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                        <span style="font-weight: 700; font-family: poppins;">3. Feedback</span>
                                        <br />
                                        <br />
                                        Upon completing the DISC assessment, you’ll receive a personalized report that
                                        highlights both your primary DISC style and a blend of behavioral patterns. This
                                        report provides valuable insights into your natural interactions and adaptive
                                        behaviors, enhancing your self-awareness and fostering stronger personal and
                                        professional relationships. You’ll gain practical recommendations for enhancing
                                        communication and adapting to the DISC styles of others, ultimately fostering
                                        more productive personal and professional relationships. The feedback is
                                        designed to be clear and actionable, enabling you to implement meaningful
                                        changes that strengthen connections with colleagues, clients, and peers.
                                    </p>
                                </div>
                                <div class="col-3">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC%20Model.webp"
                                        alt="disc laptop" style="width: 313px; margin-top: 0px;" class="discLaptop">
                                </div>
                            </div>
                            <div class="row" style="margin-bottom: 80px;">
                                <div class="col-4">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/Application%20Image.webp"
                                        alt="application image" style="width: 293px; margin-top: 0px;"
                                        class="applicationImage">
                                </div>
                                <div class="col-8" style="text-align: right;">
                                    <p
                                        style="position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                        <span style="font-weight: 700; font-family: poppins;">4. Application</span>
                                        <br />
                                        <br />
                                        Using DISC theory as a foundation, individuals and teams can develop strategies
                                        to adapt behaviors, improve communication, and foster collaboration. Applying
                                        this knowledge can significantly improve interactions by helping you adjust your
                                        communication to the preferences of others. In team environments, recognizing
                                        each member’s DISC style can streamline role assignments and optimize
                                        productivity by matching tasks to individual strengths. DISC’s applications
                                        extend across diverse areas, proving valuable in both professional and personal
                                        settings:
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/ArrowLeft2.webp"
                                    alt="arrow left 2 image"
                                    style="width: 170px; margin-top: -120px; margin-left: 350px; transform: rotate(-31.226deg);"
                                    class="arrowLeft2Image">
                            </div>
                            <div class="row" style="margin-top: -40px;">
                                <p>
                                    <span style="font-family: poppins;">DISC Assessment applications include:</span>
                                    <br />
                                    <br />
                                <ul>
                                    <li>Hiring & Selection using Benchmarking - Empowers HR teams and managers to
                                        evaluate
                                        candidates against performance benchmarks, facilitating better hiring decisions.
                                    </li>
                                    <li>Change Management - Equips teams with strategies to manage behavioral
                                        adjustments, fostering openness and acceptance.
                                    </li>
                                    <li>Coaching - Provides tools to help individuals unlock their potential, enhancing
                                        guidance and support.
                                    </li>
                                    <li>Conflict Resolution - Improves clarity, empathy, and rapport between individuals
                                        with different behavioral styles.
                                    </li>
                                    <li>Customer Service - Guides service teams in consistently delivering high-quality
                                        interactions that are responsive to various styles.
                                    </li>
                                    <li>Leadership Programs - Using DISC insights, leaders can develop a more adaptable
                                        leadership style that resonates with each team member’s unique behavioral
                                        preferences.
                                    </li>
                                    <li>Management Skills - Builds managers' ability to genuinely engage, inspire, and
                                        challenge their teams.
                                    </li>
                                    <li>Mentoring - Provides insights to support the development of high-potential
                                        employees and fast-trackers.
                                    </li>
                                    <li>Sales Training - Enhances revenue by equipping sales professionals with tools to
                                        understand and adapt to customer preferences.
                                    </li>
                                    <li>Team Building - Assists in creating cohesive teams based on complementary
                                        strengths, with insights to address gaps as needed.
                                    </li>
                                    <li>Productive Meetings - Helps plan meetings that incorporate DISC styles for
                                        optimal outcomes and engagement.
                                    </li>
                                </ul>
                                </p>
                            </div>
                            <div class="row" style="margin-top: 80px;">
                                <div class="col-9" style="text-align: left;">
                                    <p
                                        style="position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                        <span style="font-weight: 700; font-family: poppins;">5. Continued
                                            Learning</span>
                                        <br />
                                        <br />
                                        The DISC assessment is a starting point for ongoing development and
                                        self-awareness. Regularly revisiting your feedback report strengthens your
                                        understanding of your behavioral patterns and provides an opportunity to refine
                                        your interpersonal skills. Participating in DISC workshops, training sessions,
                                        or getting <a class="hyperlink" href="">DISC certified</a> can help deepen your
                                        practical knowledge and
                                        implementation. Sharing your DISC report with your team can open lines of
                                        communication, promoting stronger collaboration and mutual support. Leveraging
                                        DISC tools and resources supports continued growth, enabling you to build on
                                        your strengths and develop adaptive communication techniques.
                                    </p>
                                </div>
                                <div class="col-3">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/Continued%20Learning%20Graphic.webp"
                                        alt="continued learning graphic" style="width: 301px; margin-top: 0px;"
                                        class="continuedLearningGraphic">
                                </div>
                            </div>
                        </div>
                        <div class="row button-container">
                            <button @click="contactFormButton" class="teal">
                                Book Live Demo
                            </button>
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <section class="sampleReports">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="section-title">DISC Assessment Test <span style="color: #00A8FF;">Sample
                                Reports</span></h3>
                        <p style="padding: 0px 10px; margin-bottom: 55px;">
                            Click on the links for each assessment below to view each sample report. Note that the
                            foundations of the reports are the same: each DISC assessment begins with the DISC-Self
                            report, and the Leadership, Sales, Service, and Coaching reports provide a specific appendix
                            for each focused content area to help you apply DISC.
                        </p>
                        <div class="card" style="padding-top: 30px;">
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Self.webp"
                                        alt="disc self icon" style="width: 25px; margin-left: 3px; margin-right: 2px;">
                                </div>
                                <span class="hyperlink">DISC Self</span>
                            </div>
                            <p class="content-text">
                                Describes "you" based on your observable behavior and can provide insights for others
                                regarding your communication preferences as well as how you will likely interact with
                                and respond to them. This self-perception report allows you to observe and evaluate your
                                behavioral responses in various environments. By exploring your behavior and
                                communication in a variety of environments, situations or relationships, you can
                                determine the most effective communication strategy or course of action to take with
                                others.
                            </p>
                            <br />
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Leadership.webp"
                                        alt="disc leadership icon" style="width: 30px;">
                                </div>
                                <span class="hyperlink">DISC Leadership</span>
                            </div>
                            <p class="content-text">
                                After the DISC-Self portion of the report, this report provides simple, practical tools
                                to help use DISC as a leader in Developing, Adapting, Helping, Motivating,
                                Complimenting, Counseling, Correcting, Delegating, & Acknowledging.
                            </p>
                            <br />
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Sales.webp"
                                        alt="disc sales icon" style="width: 30px;">
                                </div>
                                <span class="hyperlink">DISC Sales</span>
                            </div>
                            <p class="content-text">
                                This report uses individual assessment data to provide information about your sales
                                priorities and preferences. You’ll also learn how to connect better with customers whose
                                priorities and preferences differ from yours through the five stages of the selling
                                cycle – Connecting, Assessing, Solving, Confirming, and Assuring.
                            </p>
                            <br />
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Service.webp"
                                        alt="disc service icon" style="width: 30px;">
                                </div>
                                <span class="hyperlink">DISC Service</span>
                            </div>
                            <p class="content-text">
                                This helps you to understand how you can use your strengths and improve upon your
                                weaknesses to improve customer service in your organization by communicating effectively
                                in the service process – Greet, Value, Ask, Listen, Help, Invite.
                            </p>
                            <br />
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Coaching.webp"
                                        alt="disc coaching icon" style="width: 30px;">
                                </div>
                                <span class="hyperlink">DISC Coaching</span>
                            </div>
                            <p class="content-text">
                                Coaches really enjoy helping people, and this report helps determine how you can best
                                provide this type of mentoring based on your strengths and skills and the interactions
                                you have with others. DISC Coaching focuses on 5 ways to mentor and support others -
                                Ask, Listen, Coach, Praise, and Challenge.
                            </p>
                            <br />
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+and+Motivators.webp"
                                        alt="disc disc and motivators icon" style="width: 30px;">
                                </div>
                                <span class="hyperlink">DISC-Motivators Combination</span>
                            </div>
                            <p class="content-text">
                                By combining DISC and Motivators, you can not only apply what you’ve learned about your
                                behaviors and emotions but also align them in ways that reflect what matters most to you
                                (your motivations). This combination report allows end-users to evaluate how their
                                behavior is in alignment with or in a position of tension against their core values and
                                motivational drivers.
                            </p>
                            <br />
                            <div class="row content-container">
                                <div class="image-container">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Virtual+Training.webp"
                                        alt="disc virtual training icon" style="width: 30px;">
                                </div>
                                <span class="hyperlink">DISC Virtual Training</span>
                            </div>
                            <p class="content-text">
                                An interactive program that trains, tracks, monitors, and measures every student in
                                real-time to give a deeper, more comprehensive foundation of DISC through a video
                                series. This program can be re-visited by each user repeatedly as necessary to keep the
                                information fresh and accessible at any time.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
                <div class="row button-container">
                    <button @click="sampleReportsButton" class="teal">
                        Sample Reports
                    </button>
                    <button @click="contactFormButton" class="light">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

        <section class="cornerstone">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px;" class="accents">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="image-container">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/Balls.webp"
                                alt="balls icon" style="width: 220px; margin-bottom: 0px;">
                        </div>
                        <h3 style="margin-bottom: 0px;">Cornerstone Principles of a DISC Workplace</h3>
                        <div class="card-container">
                            <div class="upperCard">
                                <img class="card-icon"
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/yellow%20check.webp"
                                    alt="yellow check icon">
                                <p>All DISC styles are equally valuable, and everyone is a blend of all four styles.</p>
                            </div>
                            <div class="upperCard">
                                <img class="card-icon"
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/yellow%20check.webp"
                                    alt="yellow check icon">
                                <p>All DISC styles have unique strengths and challenges and no one style is better than
                                    another.</p>
                            </div>
                            <div class="upperCard">
                                <img class="card-icon"
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/yellow%20check.webp"
                                    alt="yellow check icon">
                                <p>Your work style is also influenced by other factors that are not measured by <a
                                        href="/assessments/disc" class="hyperlink">DISC</a>, such as life experiences,
                                    education, <a href="/assessments/motivators/" class="hyperlink">Motivations</a>, <a
                                        href="/assessments/emotional-intelligence/" class="hyperlink">Emotional
                                        Intelligence</a>, and maturity level.</p>
                            </div>
                            <div class="lowerCard">
                                <img class="card-icon"
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/yellow%20check.webp"
                                    alt="yellow check icon">
                                <p>Understanding yourself better is the first step to becoming more effective when
                                    working with others.</p>
                            </div>
                            <div class="lowerCard">
                                <img class="card-icon"
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/yellow%20check.webp"
                                    alt="yellow check icon">
                                <p>Learning about the DISC styles of other people can help you understand their
                                    priorities, needs, and fears and how they may differ from your own.</p>
                            </div>
                            <div class="lowerCard">
                                <img class="card-icon"
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/yellow%20check.webp"
                                    alt="yellow check icon">
                                <p>You can improve the quality of your workplace interactions by using DISC to build
                                    more effective, mutually beneficial relationships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="profile">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="section-title">Which DISC Profile <span style="color: #00A8FF;">or Vendor is
                                    Best?</span></h3>
                            <p style=" position: relative; z-index: 10; padding-bottom: 10px;">
                                The assessment industry is largely unregulated and DISC is what's termed “open-source
                                research.” This means anyone can produce an assessment and call it a DISC profile. As a
                                result, the scientific accuracy of DISC profiles varies widely. We recommend only
                                considering DISC profiles that have published validity & reliability studies. Even among
                                providers with validated DISC profiles, the scope and quality of the reporting can vary
                                widely. So, we recommend narrowing one's search to validated DISC profiles only, then
                                comparing those providers’ sample reports. Other important considerations include:
                                <br />
                            <ul>
                                <li>What is the technology provided by the DISC profile provider to purchase, deliver,
                                    and manage the assessments?</li>
                                <li>Which validated DISC profile providers offer certification programs that are
                                    independently recognized and accredited by continuing education institutions
                                    like ICF, SHRM, HRCI and ATD?</li>
                                <li>What are the DISC profile costs?</li>
                                <li>Are DISC profile team reports and trainer materials included?</li>
                            </ul>
                            Look for options to choose profiles focused on your general self-awareness and understanding
                            or specific areas including management, leadership, sales, or service to name a few. <br />
                            <br />
                            Another consideration could be how to differentiate yourself from other coaches or
                            professionals with the product. For example, you can take your career to the next level
                            by <span style="text-decoration: underline;">becoming a Certified DISC Practitioner.</span>
                            At Assessments 24x7, becoming DISC Certified is
                            just one of the many development options offered. <br />
                            <br />
                            Lastly, examine the other programs and assessments available to support your clients and
                            customers. At Assessments 24x7, there are five Core Assessment certification programs,
                            designed specifically for coaches and corporate trainers, including DISC, Motivators, HVP,
                            Emotional Intelligence, and Learning Styles. Each self-paced, flexible training program
                            includes 1-on-1 instructor-led sessions (via Zoom or Skype) for your convenience.
                            </p>
                        </div>
                    </div>
                    <div class="row button-container">
                        <button @click="contactFormButton" class="teal">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="pricing">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="image-container">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/Info+Icon.webp"
                                alt="info icon" style="width: 63px; margin-bottom: -12px;">
                        </div>
                        <h3 style="margin-bottom: 0px;">DISC assessment pricing and more information</h3>
                        <p style="padding: 0px 10px;">
                            Assessments 24x7’s DISC system has multiple products and services available for purchase.
                            These include: Assessments and Profiles, Facilitation Kits, Group Reports, Starter Packages,
                            Continuing Education Credits (<a href="https://coachingfederation.org/"
                                class="hyperlink">ICF</a>, <a href="https://www.shrm.org/"
                                class="hyperlink">SHRM</a>, <a href="https://www.hrci.org/"
                                class="hyperlink">HRCI</a> and <a href="https://www.td.org/" class="hyperlink">ATD</a>),
                            Books, Training Tools and,
                            Certification options, and more. <br>
                            <br />
                            There are also ready-to-teach DISC workshops available for those who want to have a complete
                            solution to training DISC in a variety of contexts including: Self-Awareness &
                            Communication, Transitioning from Peer to Leader, Trust-based Leadership, Making Teams Work,
                            and Sales Optimization. <br />
                            <br />
                            To find out more about our pricing, including wholesale pricing information,
                            contact us by calling <a href="tel:12064006647" class="hyperlink">+1 (206) 400-6647</a> or
                            send us an email
                            at <a href="mailto:sales@assessments24x7.com"
                                class="hyperlink">sales@assessments24x7.com</a>.
                        </p>
                    </div>
                </div>
                <div class="row button-container">
                    <button @click="contactFormButton" class="light">
                        Learn More
                    </button>
                </div>
            </div>
        </section>

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 style="margin-bottom: 0px;">Frequently asked questions</h3>
                        <div class="lineContainer">
                            <div class="yellowLine"></div>
                        </div>
                        <p style="padding: 0px 10px;">
                            <span class="question">
                                How Long Does the DISC Assessment Take?
                            </span> <br />
                            <br />
                            In most cases, it takes 10-15 minutes to complete the questionnaire. <br />
                            <br />
                            When you begin the assessment, you will make 26 selections of the words or phrases that are
                            most like you and the words or phrases that are least like you. From these choices, the
                            report algorithm determines the balance of your DISC blend and returns the comprehensive
                            report tool. <br />
                            <br />
                            It is important to note that not all vendors will have the same DISC assessment process.
                            Some offer computer adaptive testing with up to 80 questions, and others provide a 28-item
                            forced-choice questionnaire. <br />
                            <br />
                            Because DISC is not a copyrighted model, vendors are free to use their own process. However,
                            there are only a small handful of valid, scientifically-backed versions of DISC assessments
                            out there. Be sure you examine the validity of the tools and pay special attention to the
                            last time the data was validated. <br />
                            <br />
                            <span class="question">
                                Can you fail a DISC assessment?
                            </span> <br />
                            <br />
                            A common misconception about DISC profile tests is that you can pass or fail them. Unlike
                            traditional tests, there are no right or wrong answers in DISC. It is a behavioral inventory
                            that measures your natural and adjusted behavioral styles. <br />
                            <br />
                            <span class="question">
                                Can DISC be integrated with other personality assessments?
                            </span> <br />
                            <br />
                            Yes, DISC can work with other personality tests. Combining them provides a fuller view of a
                            person's traits. It might help in understanding different aspects of behavior and
                            preferences. Although DISC focuses mainly on behavior, using it alongside other assessments
                            gives a more rounded insight into a person's characteristics. This approach can be useful
                            for personal growth, team development, and leadership training. <br />
                            <br />
                            <span class="question">
                                How often should I retake a DISC assessment?
                            </span> <br />
                            <br />
                            Retake a DISC assessment every few years. Your behavior and preferences can change. Taking
                            the test again ensures accurate and current results. <br />
                            <br />
                            <span class="question">
                                Is DISC used to measure personality traits?
                            </span> <br />
                            <br />
                            No, the DISC assessment does not measure personality traits in the traditional sense. Rather
                            than assessing personality traits, DISC focuses on observable behaviors and communication
                            styles, helping individuals understand their tendencies in various interactions and
                            environments. <br />
                            <br />
                            <span class="question">
                                Who Created DISC?
                            </span> <br />
                            <br />
                            Dr. William Moulton Marston was a lawyer and physiological psychologist who first introduced
                            the DISC model in his 1928 book Emotions of Normal People. A man of many talents, Marston
                            was also credited with helping to develop the first polygraph test, creating the character
                            Wonder Woman, and authoring several self-help books. <br />
                            <br />
                            Marston conducted research on human emotions and, based on those findings, postulated that
                            people illustrate their emotions using the behavior types of Dominance (D), Inducement (I),
                            Submission (S), and Compliance (C), or DISC for short. <br />
                            <br />
                            Marston did not create an actual assessment tool from his theories, but based on his work,
                            others did. In 1956, Walter Clarke, an industrial psychologist, first constructed an
                            assessment that confirmed Marston’s theories. He created the Activity Vector Analysis, a
                            psychometric tool that was designed for use by businesses to help them choose qualified
                            employees. <br />
                            <br />
                            In 1965, DISC findings were published in the Journal of Clinical Psychology. The test format
                            continued to evolve when a "Self-Description" test forced respondents to make a choice
                            between two or more terms. <br />
                            <br />
                            While the assessments used today have evolved from the original work of Marston and Clarke,
                            the same premise of four behavioral styles is used as the foundation and the continued
                            development of the DISC tool. <br />
                            <br />
                            Understanding the history of DISC, from Marston’s theory to its modern application,
                            underscores its reliability as a behavior-based tool for personal and professional
                            development. <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold />
    </div>
</template>

<script>
export default {
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    methods: {
        sampleReportsButton(event) {
            window.location.href = '/sample-reports';
            if (event) {
                event.target.blur();
            }
        },
        scrollToOverview(event) {
            const element = document.getElementById('overview');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        contactFormButton(event) {
            window.location.href = '/contact';
            if (event) {
                event.target.blur();
            }
        },
        learnMoreButton(event) {
            window.location.href = '/about/validity';
            if (event) {
                event.target.blur();
            }
        }
    },
    data() {
        return {
            structuredDataBreadcrumbs: {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": "1",
                        "item": {
                            "@id": "https://assessments24x7.com/about",
                            "name": "About"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": "2",
                        "item": {
                            "@id": "https://assessments24x7.com/about/what-is-disc",
                            "name": "What Is DISC?"
                        }
                    }
                ]
            },
            structuredDataFAQPage: {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                    "@type": "Question",
                    "name": "What does DISC stand for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DISC stands for Dominance, Influence, Steadiness, and Conscientiousness - four behavioral styles that can be used to identify an individual's patterns of observable behavior and emotions. It is a self-assessment tool used to improve productivity, teamwork, and communication by providing insight into behavioral tensions, causes of stress, problem-solving, and ways to respond more effectively to conflict."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the DISC Assessment used for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DISC teaches users how to identify the predictable aspects of behavior and communication and to use that knowledge to their advantage.  The ability to create a strong and immediate connection with others is a fundamental skill in sales, management, executive-level leadership, and everyday life."
                    }
                }]
            }
        }
    },
    head() {
        return {
            title: 'What is DISC | What is the DISC Model',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Get a better understanding of what is DISC used for and how it helps understand the behavioral styles and foster effective collaboration and personal growth.'
                }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                    type: 'application/ld+json'
                },
                {
                    innerHTML: JSON.stringify(this.structuredDataFAQPage),
                    type: 'application/ld+json'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';


.header {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 0px;
    padding-bottom: 60px;

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        margin: 0 20px;
    }
}

.discModel {
    .container-wrapper {
        padding-top: 60px;
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
}

.usedFor {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 50px;

    p {
        text-align: left;
    }

    h4 {
        text-align: right;
        line-height: 1.5em;
        margin-top: 20px;
    }
}

.overview {
    .container-wrapper {
        position: relative;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }

    .container {
        padding-top: 50px;
        padding-bottom: 85px;
    }

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        margin: 0 20px;
    }
}

.facts {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 80px;

    .button-container {
        text-align: center;
        margin-top: 40px;
    }

    .button-container button {
        margin: 0 20px;
    }
}

.styleOverview {
    .container-wrapper {
        padding-top: 40px;
        padding-bottom: 20px;
    }

    .card {
        margin: 70px auto;
        width: 850px;
        flex-shrink: 0;
        border-radius: 18px;
        border: 1px solid #E0AD2B;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
}

.validation {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 55px;

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        margin: 0 20px;
    }
}

.conducted {
    .container-wrapper {
        position: relative;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
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

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        display: inline-block;
        margin: 0 20px;
    }
}

.sampleReports {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 100px;

    .card {
        color: #213C85;
        text-align: left;
        margin: 0 auto;
        width: 97%;
        flex-shrink: 0;
        border-radius: 18px;
        border: 1px solid #E0AD2B;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 20px;
    }

    .content-container {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 6px;
    }

    .image-container {
        flex-shrink: 0;
        margin-left: 10px;
    }

    .hyperlink {
        font-size: 20px;
        color: #213C85;
        cursor: pointer;
    }

    .content-text {
        margin: 0;
        line-height: 1.5;
        color: #213C85;
        padding: 0 10px;
        padding-bottom: 10px;
    }

    .button-container {
        text-align: center;
        margin-top: 60px;
    }

    .button-container button {
        margin: 0 20px;
    }
}

.cornerstone {
    background-color: white;
    background-size: cover;
    color: #213C85;
    text-align: center;
    padding-bottom: 100px;

    .container {
        padding-top: 30px;
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        margin-top: 20px;
        max-width: 950px;
        margin: 40px auto 0 auto;
    }

    .upperCard,
    .lowerCard {
        width: 260px;
        height: 230px;
        flex-shrink: 0;
        border-radius: 18px;
        border: 1px solid #E0AD2B;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .card-icon {
        width: 29px;
        margin-top: 10px;
    }
}

.profile {
    background-color: #1E222D;

    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 50px;
        padding-bottom: 85px;
        color: white;
    }

    .button-container {
        text-align: left;
        margin-top: 20px;
    }

    .button-container button {
        display: inline-block;
        margin: 0 20px;
    }
}

.pricing {
    background-color: white;
    background-size: cover;
    color: #213C85;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 70px;

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        display: inline-block;
        margin: 0 20px;
    }
}

.faq {
    background-color: white;
    background-size: cover;
    color: #213C85;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;

    h3 {
        text-align: center;
    }

    .lineContainer {
        display: flex;
        justify-content: center;
    }

    .yellowLine {
        width: 100%;
        max-width: calc(100% - 20px);
        height: 6px;
        flex-shrink: 0;
        background: #E0AD2B;
        margin: 10px 0 20px 0;
    }

    p {
        text-align: left;
    }

    .question {
        font-weight: 700;
        text-decoration: underline;
    }
}

@media (max-width: 768px) {
    .header .button-container button {
        flex-direction: column;
        margin: 10px;
    }

    .overview {
        padding: 0px 10px;

        .button-container button {
            flex-direction: column;
            margin: 10px;
        }
    }

    .facts {
        padding: 20px 5px;
        padding-bottom: 60px !important;

        .button-container button {
            flex-direction: column;
            margin: 10px;
        }
    }

    .styleOverview {
        .card {
            width: 100%;
        }

        .image-container {
            display: flex;
            justify-content: center;
        }

        img {
            width: 30% !important;
            margin-top: 20px !important;
        }

        p {
            padding: 0 10px;
        }

        li {
            padding-right: 10px;
        }
    }

    .conducted {
        .arrowLeft2Image {
            display: none;
        }
    }

    .sampleReports {
        padding: 20px 5px;
        padding-bottom: 60px !important;

        .button-container button {
            flex-direction: column;
            margin: 10px;
        }
    }

    .profile {
        .container {
            padding-top: 20px !important;
        }

        h3 {
            padding: 0 10px;
        }

        p {
            padding: 0 10px;
        }

        li {
            padding-right: 10px;
        }
    }
}
</style>