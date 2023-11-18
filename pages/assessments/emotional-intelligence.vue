<template>
    <div class="main">
        <main-nav active="assessments"></main-nav>
        <div class="hero">
            <img class="globe-tex" src="~assets/globe-bg.png" alt="globe">

            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h1><img class="ass-icon" src="~assets/eiq-icon.png" alt="eiq-icon"> Emotional Intelligence</h1>
                        <p>
                            Research indicates that Emotional Intelligence (EIQ) can be learned and can be seen as
                            measurable differences directly associated with professional
                            and personal success. Furthermore, it may be responsible for up to 80% of the success we
                            experience in life. This assessment serves to heighten
                            awareness of our own EIQ, identify relative strengths and weaknesses based on our emotional
                            dispositions, and provide a framework for interpersonal
                            and intrapersonal effectiveness.
                        </p>

                        <nuxt-link to="/contact" class="button outline light">Contact a Specialist</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="related-posts">
            <div class="container">
                <div class="row related-posts-container">
                    <p class="posts-title">Recent Posts with the Tag <span class="tag">Emotional Intelligence</span></p>
                    <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            <img class="image"
                                :src="post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'" alt="post.feature_image">

                            <h3 class="title" v-html="post.title"></h3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <div class="about-assess">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h2>Emotional Intelligence Assessment</h2>
                        <p>
                            Emotional Intelligence is all about understanding and managing yourself and also understanding
                            and managing others. It is based on an internal loop that begins with
                            <strong>awareness</strong> of our own emotions and temperament. It continues on through
                            self-<strong>understanding</strong> and moves towards <strong>discipline</strong>
                            and <strong>management</strong> of the self. It then repeats these steps by connecting to the
                            emotions of others to build more effective relationships.
                        </p>
                        <p>
                            Emotional Intelligence is a way of recognizing, understanding, and choosing how we think, feel,
                            respond and act. It is based on two competencies, measured as
                            <strong>Recognition</strong> and <strong>Management</strong>:

                        <ul>
                            <li>the ability to recognize, understand, and manage emotions <em>(self or intrapersonal)</em>
                            </li>
                            <li>the ability to recognize, empathize, and relate appropriately to the emotions of others
                                <em>(social or interpersonal)</em>
                            </li>
                        </ul>
                        </p>
                    </div>

                    <div class="col-6">
                        <div class="sample-reports">
                            <h2>EIQ Sample Reports</h2>
                            <a href="/reports/EIQSampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Emotional Intelligence (EIQ)
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;"
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/EIQ360SampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Emotional Intelligence 360
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;"
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/DISCandEIQ.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> DISC + EIQ Combination
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;"
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/DISCLeadandEIQ.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> DISC Leadership + EIQ Combination
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;"
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </svg>
                                </div>
                            </a>

                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/validity/EIQ-2-Validity-Study.pdf"
                                target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> EIQ Validity Study
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;"
                                            d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        <nuxt-link to="/sample-reports" class="hyperlink">View All Sample Reports &rarr;</nuxt-link>

                        <div class="languages">
                            <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments">
                                English</span>
                            <span><img src="~assets/flags/mexico.svg" alt="Spanish DISC Assessments"> Español</span>
                            <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                            <span><img src="~assets/flags/germany.svg" alt="German DISC Assessments"> Deutsch</span>
                            <span><img src="~assets/flags/china.svg" alt="Chinese DISC Assessments"> 中文</span>
                            <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                            <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português
                                (Brazil)</span>
                            <span><img src="~assets/flags/russia.svg" alt="Russian DISC Assessments"> Россия</span>
                            <span><img src="~assets/flags/vietnam.svg" alt="Vietnamese DISC Assessments"> Tiếng Việt</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="dimensions">
                        <div class="wrapper">
                            <div class="item-wrap">
                                <div :class="{ 'icon d': true, 'active': active === 'self-rec' }"
                                    @mouseover="changeActive('self-rec')">SeR</div>
                                <div :class="{ 'content': true, 'active': active === 'self-rec' }">
                                    <h4>Self-Recognition</h4>
                                    <p>Includes attitude, learning style, strengths and weaknesses, self-acceptance,
                                        authenticity, confidence, emotional, well-being and self-perception</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{ 'icon i': true, 'active': active === 'soc-rec' }"
                                    @mouseover="changeActive('soc-rec')">SoR</div>
                                <div :class="{ 'content': true, 'active': active === 'soc-rec' }">
                                    <h4>Social-Recognition</h4>
                                    <p>Includes thoughtfulness, rapport-building, connection, diversity, respect, kindness,
                                        and constructive interaction</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{ 'icon s': true, 'active': active === 'self-man' }"
                                    @mouseover="changeActive('self-man')">SeM</div>
                                <div :class="{ 'content': true, 'active': active === 'self-man' }">
                                    <h4>Self-Management</h4>
                                    <p>Includes direction, purpose, emotional management, adaptability, taking initiative,
                                        goal-setting, resilience and impulse control</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{ 'icon c': true, 'active': active === 'soc-man' }"
                                    @mouseover="changeActive('soc-man')">SoM</div>
                                <div :class="{ 'content': true, 'active': active === 'soc-man' }">
                                    <h4>Social-Management</h4>
                                    <p>Includes encouraging, supporting, collaborating, developing others, building
                                        friendships and partnerships, directing, and handling conflict effectively</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="dimensions-aside">
                        <span class="sup-title">EIQ Assessment</span>
                        <h4 class="title">Emotional Intelligence for Professional Success</h4>
                        <p>
                            This assessment measures and provides insight into four areas of EIQ and the five sub-categories
                            that contribute to each area:
                        </p>

                        <ul>
                            <li><strong>Self-Recognition (SeR)</strong>: Self-Awareness/Understanding; Cause & Effect;
                                Self-Appreciation, Consciousness/Assertiveness; Emotional Identification</li>
                            <li><strong>Social Recognition (SoR)</strong>: Empathy, Sensitivity, Appreciation; Service,
                                Compassion, Benevolence; Holistic Communication; Situational Perceptual Awareness;
                                Interpersonal Development</li>
                            <li><strong>Self-Management (SeM)</strong>: Self-Control, Discipline; Goal-Directed Performance,
                                Action; Integrity, Trustworthiness; Motivation, Positive Psychology; Creativity, Agility,
                                Flexibility</li>
                            <li><strong>Social Management (SoM)</strong>: Developing Relationships; Leadership & Influence;
                                Change Catalyst & Response; Negotiation & Conflict Management; Teamwork & Collaboration</li>
                        </ul><br />

                        <nuxt-link to="/assessments" class="button">More Assessments</nuxt-link>
                        <nuxt-link to="/contact" class="button outline">Contact a Specialist</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="assessment-content">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5 class="section-title">Trainer & Facilitator Materials 100% Included</h5>

                        <p>
                            The world’s most comprehensive, one-stop assessment solution wouldn’t be complete without
                            providing you customizable coaching
                            materials. EIQ has its own dedicated folder on member dashboards complete with multimedia
                            materials, including:
                            PowerPoints/slide-decks, debrief guides, facilitator guides, group exercises, handouts, videos,
                            MP3s, prewritten email series,
                            sales collateral, and more!
                        </p><br />

                        <nuxt-link to="/contact" class="button">Book a Demo</nuxt-link>
                    </div>

                    <div class="col-6">
                        <img class="side-img lazyload" src="~/assets/eiq-fold-image.jpg"
                            alt="Trainer & Facilitator Materials 100% Included">
                    </div>
                </div>
            </div>
        </section>

        <section class="whitelabel">
            <div class="container">
                <div class="row flex-center">
                    <div class="col-8">
                        <img class="logo-img" src="~assets/emotional_intelligence_report.png" alt="emotional_intelligence_report">
                        <h4 class="title">White Label Our Assessments With Your Own Brand's Logo</h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none"
                            stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>

                        <h5 class="subtitle">Tools to Power Your Business</h5>
                        <p>
                            Our 20+ Years of R&D…Is Now Yours. Our White-labeled solution means more than just branding - it
                            means the freedom to run your business, your way. Customize it, market it, and sell it,
                            however you want - for however much you want. Regardless of the size of your practice, you have
                            the freedom to leverage our industry-leading assessments, training resources, and
                            technology to be your own. We have partnered with thousands of coaches, speakers, trainers and
                            consultants around the globe to help grow their business and support their growth.
                        </p>
                    </div>

                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none"
                            stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                            </path>
                        </svg>

                        <h5 class="subtitle">The Leading Corporate Assessment Solution</h5>
                        <p>
                            Are you an in-house corporate trainer or HR professional who needs to continually develop
                            in-house employee training curriculums without compromise? By partnering with Assessments 24x7,
                            you have the means to employ online assessments during the hiring & selection process and within
                            employee training, complete with your branding, to further promote your organization’s
                            identity and culture. Companies around the world leverage our assessments to hire smarter,
                            accelerate sales, build high-performing teams, develop effective leaders, solve conflict and
                            more.
                            Whether you are a small start-up or a Fortune 500 company, we have tailored corporate solutions
                            to fit your needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get EIQ Certified</h5>
                        <p>
                            Become an expert with our internationally accredited certification training. Designed
                            specifically to foster a deeper understanding of the mode, you’ll discover how it can
                            be used to build more effective personal and professional relationships. Through one-on-one
                            instructor-led sessions and self-study, you will learn to use the assessment
                            results with supportive, comprehensive resources that are available when you need them. As a
                            bonus, if you are certified in multiple assessments, your instructor will
                            show you how to combine the assessment results for a holistic understanding of how they work
                            together.
                        </p>
                        <p>
                            Each certification program includes additional benefits such as exclusive access to our
                            Certified Trainer Materials library, discounted pricing, continuing education credits,
                            10 complimentary assessments when you finish the program, and a listing on our International
                            Directory of Practitioners.
                        </p><br />

                        <nuxt-link to="/assessments" class="button outline light">More Assessments</nuxt-link>
                        <br /><br /><br /><br /><br /><br />
                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/eiq-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section>

        <credits shrm="12" hrci="7.5" atd="7.5" icfCore="8.25" icfRD="6.75" hrciProgramId="582701" />

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">Frequently Asked Questions</h5>
                    </div>
                </div><br />

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Where is the best place to start with EIQ?</h6>
                        <p class="answer">
                            It’s always best to begin with the self. Self-Recognition is the foundation to Self-Management
                            because if we don’t understand it,
                            how can it be managed? Social awareness and building strong relationships with others spring
                            from our understanding of self.
                            All four of the quotients are interrelated and will impact each other. Therefore, if
                            Self-Recognition is strong, we are more
                            likely to appropriately understand and interact with others.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Is EIQ really effective to use in the workplace?</h6>
                        <p class="answer">
                            Absolutely! For some it may seem “touchy-feely” or “too emotional,” but EIQ goes so far beyond
                            just the soft skill applications.
                            High EIQ benefits our communication, decision-making, leadership abilities, sales, teamwork and
                            team performance, productivity,
                            relationship satisfaction, customer service, conflict management and overall effectiveness! Who
                            wouldn’t want that at work?
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">What’s the best model of EIQ? I see some differences with other vendors.</h6>
                        <p class="answer">
                            There are a few different reputable models of EIQ out there, and you may find that some speak to
                            you and your needs
                            (personally or professionally) in ways that others may not. We encourage you to explore the
                            options available and really
                            dive into the details and application of the report before you make a judgment about how it will
                            work for you. What seems
                            simple and easy on the surface can uncover a wealth of knowledge and powerful learning
                            opportunities that impact how we
                            understand and manage our emotions and relate to the emotions of others in a way that works.
                            (P.S. We’re pretty sure ours is best!)
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h6 class="question">How can I use Emotional Intelligence with my team?</h6>
                        <p class="answer">
                            Teams built with high EIQ measures are likely to be the most effective! While it isn’t always
                            easy to collaborate with different people,
                            if we can learn to use our EIQ skills, we can look at problems and find solutions in ways we
                            couldn’t from the same paradigm of thought.
                            By understanding ourselves and others, we can use EIQ to heighten personal performance, empower
                            relationships, and direct teamwork in a
                            more results-oriented manner, while striving to ensure everyone on the team gets what they need
                            to be successful and satisfied. Working
                            together becomes the playing field to demonstrate the building blocks necessary for high
                            performing teams.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="assessments-header">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"
                                fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>

                            <h3>Quick to Complete</h3>
                            <p>
                                With an average completion time of 12-15 minutes, every assessment questionnaire is
                                delivered by
                                email link, subsequently generating a PDF report that is automatically uploaded to the
                                member’s white-label dashboard.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"
                                fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                </path>
                            </svg>

                            <h3>Available Languages</h3>
                            <p>
                                Our internationally accredited EIQ assessment is currently available in multiple languages.
                                See our
                                <nuxt-link to="/sample-reports" class="hyperlink light">sample reports</nuxt-link> page for
                                the list of available languages
                                and to view sample results.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"
                                fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>

                            <h3>Emotional Intelligence 360°</h3>
                            <p>
                                The EIQ 360º offers assessment professionals and users alike, the ability to compare the
                                user’s perceived “self” emotional intelligence in contrast with the “observer”
                                feedback provided anonymously by colleagues, direct reports, managers, etc. <a
                                    style="color:#fff" class="hyperlink" href="/assessments/360/eiq">Learn more about our
                                    Emotional Intelligence 360°.</a>
                            </p>

                        </div>
                    </div>

                    <div class="col-4">
                        <div class="feature-box">
                            <div class="feature-text">
                                <h3>Also Available In</h3>

                                <div class="languages">
                                    <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments">
                                        English</span>
                                    <span><img src="~assets/flags/mexico.svg" alt="Spanish DISC Assessments"> Español</span>
                                    <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                                    <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                                    <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português
                                        (Brazil)</span>
                                    <span><img src="~assets/flags/vietnam.svg" alt="Vietnamese DISC Assessments"> Tiếng
                                        Việt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold></footer-fold>
    </div>
</template>

<script>
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Credits from '../../components/Credits';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer,
        'credits': Credits
    },
    head() {
        return {
            title: 'Emotional Intelligence Assessment: Measure Your EQ and Improve Your Relationships',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'The Emotional Intelligence Assessment is a powerful tool that can help you measure your EQ and improve your relationships. Learn how to better understand your own emotions and the emotions of others, and how to use this knowledge to build stronger relationships.'
                }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                    type: 'application/ld+json'
                }
            ]
        }
    },
    data() {
        return {
            active: 'self-rec',
            interrupted: false,
            posts: [],
            loading: true,
            structuredDataBreadcrumbs: {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": "1",
                        "item": {
                            "@id": "https://assessments24x7.com/assessments",
                            "name": "Assessments"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": "2",
                        "item": {
                            "@id": "https://assessments24x7.com/assessments/emotional-intelligence",
                            "name": "Emotional Intelligence"
                        }
                    }
                ]
            }
        }
    },
    async created() {
        const response = await this.$axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=4&filter=tag:emotional-intelligence`);
        this.posts = response.data.posts;
        this.loading = false;
    },
    methods: {
        changeActive(active) {
            this.active = active;
            this.interrupted = true;
        }
    },
    mounted() {
        window.setInterval(() => {
            if (!this.interrupted) {
                if (this.active === 'self-rec') { this.active = 'soc-rec'; }
                else if (this.active === 'soc-rec') { this.active = 'self-man'; }
                else if (this.active === 'self-man') { this.active = 'soc-man'; }
                else { this.active = 'self-rec'; }
            }
        }, 3000);
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.dimensions-aside {
    margin-top: 80px;

    .sup-title {
        color: #03bbff;
    }

    .title {
        font-size: 24pt;
        margin: 0;
        line-height: 28pt;
    }
}

.dimensions {
    margin-top: 80px;
    margin-bottom: 50px;

    .wrapper {
        position: relative;
        height: 0;
        padding-top: 100%;

        &:before {
            content: '';
            position: absolute;
            z-index: -1;
            left: 10%;
            top: 10%;
            width: 80%;
            height: 80%;
            transform: rotate(45deg) scale(.8);
            border: 4px solid #dee1ed;
        }

        .item-wrap {
            .icon {
                position: absolute;
                width: 18%;
                height: 18%;
                max-width: 100px;
                max-height: 100px;
                font-size: 30px;
                border-radius: 50%;
                box-shadow: 0px 6px 13px rgba(145, 145, 145, 0.2);
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
                line-height: 95px;
                font-weight: 600;
                color: #333;
                background: linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(245, 247, 255, 1) 100%);

                &.d {
                    left: 41.2281%;
                    top: 1%;

                    &.active {
                        background: linear-gradient(150deg, rgba(255, 82, 66, 1) 0%, rgb(255, 11, 6) 100%);
                        color: #fff;
                    }
                }

                &.i {
                    left: 82.4561%;
                    top: 41.2281%;

                    &.active {
                        background: linear-gradient(150deg, rgb(181, 69, 255) 0%, rgb(86, 11, 172) 100%);
                        color: #fff;
                    }
                }

                &.s {
                    left: 41.2281%;
                    top: 82.4561%;

                    &.active {
                        background: linear-gradient(150deg, rgba(140, 255, 46, 1) 0%, rgba(59, 164, 11, 1) 100%);
                        color: #fff;
                    }
                }

                &.c {
                    left: 0%;
                    top: 41.2281%;

                    &.active {
                        background: linear-gradient(150deg, rgba(46, 136, 255, 1) 0%, rgba(11, 49, 164, 1) 100%);
                        color: #fff;
                    }
                }
            }

            .content {
                position: absolute;
                top: 0;
                left: 0;
                width: 43%;
                height: 55%;
                margin: 25% 29%;
                display: flex;
                flex-direction: column;
                text-align: center;
                justify-content: center;
                opacity: 0;
                visibility: hidden;
                transition: 0.6s;

                h4 {
                    margin: 0;
                    font-size: 17pt;
                }

                p {
                    margin-top: 5px;
                }

                &.active {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
    }
}

.languages {
    margin-top: 10px;

    img {
        width: 14px;
    }

    span {
        font-size: 9pt;
        margin-bottom: 5px;
        display: inline-block;
        background: #eaeaea;
        padding: 0 7px 0 0;
        border-radius: 20px;
        font-weight: 600;
    }
}

.assessments-header {
    background: rgb(0, 51, 197);
    background: linear-gradient(218deg, #fa4ca6, #ff2f4c, #fa4ca6);
    background-size: 200% 200%;
    animation: GradientFade 10s ease infinite;

    @keyframes GradientFade {
        0% {
            background-position: 88% 0%;
        }

        50% {
            background-position: 13% 100%;
        }

        100% {
            background-position: 88% 0%;
        }
    }

    padding: 70px 0;
    color: #fff;

    .section-title {
        font-size: 30pt;
        text-align: center;
        margin-bottom: 0;
    }

    .section-subtitle {
        text-align: center;
        margin-top: 0;
        margin-bottom: 40px;
    }

    .feature-callout {
        margin-bottom: 30px;

        .icon {
            position: absolute;
        }

        h3 {
            font-size: 20pt;
            margin-top: 0;
            margin-bottom: 5px;
            margin-left: 90px;
        }

        p {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 90px;
        }
    }

    .feature-box {
        background: url('https://images.unsplash.com/photo-1525534240745-6b6f65e8a25f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3580&q=80');
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        padding: 200px 0 0;
        box-shadow: 0 30px 30px rgba(0, 0, 0, .1);

        .feature-text {
            position: relative;
            padding: 0 20px 30px;
            background: #fff;
            color: #000;
            border-radius: 0 0 10px 10px;

            h3 {
                position: relative;
                z-index: 1;
                font-size: 20pt;
                margin-top: 0;
                margin-bottom: 8px;
            }

            &:before {
                content: '';
                background: url('~assets/tri-sep.png');
                background-repeat: no-repeat;
                position: absolute;
                width: 100%;
                height: 81px;
                left: 0;
                top: -50px;
                z-index: 0;
            }
        }
    }
}

.whitelabel {
    margin-bottom: 100px;

    .logo-img {
        width: 400px;
        display: block;
        margin: 0 auto 10px;
    }

    .title {
        text-align: center;
        font-size: 24pt;
        margin: 0 0 47px;
        line-height: 28pt;
    }

    .subtitle {
        margin: 0;
        font-size: 16pt;
    }
}

.certification {
    background: rgb(0, 51, 197);
    background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #fa4ca6, #ff2f4c, #fa4ca6);
    background-size: cover;
    background-position: center;
    padding: 80px 0 0;

    .title {
        font-size: 24pt;
        margin: 20px 0 0;
        position: relative;
        color: #fff;
    }

    p {
        color: #fff;
    }

    p,
    .button {
        position: relative;
    }

    .image {
        width: 100%;
        margin-bottom: -8px;
    }
}

.faq {
    margin-bottom: 80px;

    .title {
        font-size: 24pt;
        margin: 0;

        &:after {
            background: linear-gradient(to right, #e93d2f 25%, #ffbd05 25%, #ffbd05 50%, #0dab49 50%, #0dab49 75%, #1666ff 75%);
            position: absolute;
            content: '';
            height: 6px;
            right: 0;
            left: 0;
            bottom: 0;
        }
    }

    .question {
        font-size: 18pt;
        margin: 0;
    }

    .answer {
        margin-bottom: 20px;
    }
}

.assessment-content {
    background: url('~assets/artifacts/left-rings.png') no-repeat, linear-gradient(90deg, rgba(30, 34, 45, 1) 0%, rgba(48, 53, 66, 1) 100%);
    background-position: left;
    padding: 100px 0 90px;
    margin: 80px 0;
    color: #fff;

    .section-title {
        font-size: 30pt;
        line-height: 34pt;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 20px;
    }

    .side-img {
        width: 100%;
        border-radius: 20px;
    }
}

.related-posts {
    margin: -20px 0 60px;

    .related-posts-container {
        background: #fff;
        border-radius: 20px;
        padding: 14px 0;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

        .posts-title {
            margin: 6px 0 8px 25px;
            font-size: 12pt;
            font-weight: 500;

            span {
                background: #ff2f4c;
                color: #fff;
                padding: 2px 10px;
                border-radius: 20px;
            }
        }

        .post {
            .image {
                width: 100%;
                height: 140px;
                background-size: cover !important;
                background-position: center !important;
                object-fit: cover;
                box-shadow: 0 0 20px rgba(0, 0, 0, .1);
                border-radius: 20px;
                transition: transform .3s ease;

                &:hover {
                    transform: scale(1.03);
                }
            }

            .date {
                margin: 10px 0 -20px;
                font-size: 8pt;
                color: #666;
            }

            a {
                text-decoration: none;

                .title {
                    color: initial;
                    font-size: 12pt;
                    line-height: 15pt;
                    margin-top: 20px;
                    margin-bottom: 0;
                }
            }
        }
    }
}

.hero {
    background: rgb(0, 51, 197);
    background: linear-gradient(218deg, #fa4ca6, #ff2f4c, #fa4ca6);
    background-size: 200% 200%;
    animation: GradientFade 10s ease infinite;
    z-index: 0;
    position: relative;

    @keyframes GradientFade {
        0% {
            background-position: 88% 0%;
        }

        50% {
            background-position: 13% 100%;
        }

        100% {
            background-position: 88% 0%;
        }
    }

    color: #fff;
    padding: 50px 0 70px 0;

    .globe-tex {
        position: absolute;
        z-index: -1;
        top: 10px;
        right: 0;
    }

    h1 {
        font-size: 36pt;
        margin: 0;

        .ass-icon {
            width: 70px;
            vertical-align: sub;
            margin-right: 6px;
        }
    }

    p {
        margin-bottom: 30px;
    }
}

.about-assess {
    .sample-reports {
        background: #1f222d;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        width: 100%;
        padding: 20px;
        margin-bottom: 20px;
        color: #fff;

        h2 {
            font-size: 18pt;
            margin: 5px 0 16px 0;
        }

        a {
            color: #fff;
            text-decoration: none;
        }

        .sample {
            border: 2px solid #2d3040;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-weight: 500;
            transition: background .3s ease;
            cursor: pointer;

            &:hover {
                background: #2d3040;
            }

            img {
                width: 24px;
                margin-right: 5px;
            }

            svg {
                width: 17px;
                float: right;
                margin-top: 7px;
            }
        }
    }
}

@media screen and (max-width: $breakpoint-med) {
    .hero {
        h1 {
            font-size: 23pt;
            line-height: 25pt;
            text-align: center;

            img {
                width: 40px !important;
                margin-right: 0 !important;
            }
        }
    }

    .related-posts {
        .related-posts-container {
            box-shadow: none;
            margin-bottom: -40px;
            border-radius: 0;

            .posts-title {
                text-align: center;
            }

            .post {
                min-height: 220px;

                .title {
                    font-size: 11pt !important;
                }
            }
        }
    }

    .dimensions .wrapper .item-wrap {
        .icon {
            line-height: 68px;
        }


        .content p {
            margin-top: 0px;
            font-size: 11pt;
            line-height: 12pt;
        }
    }

    .assessment-content {
        background: linear-gradient(90deg, #1e222d 0%, #303542 100%);
        padding: 40px 0;
    }

    .certification {
        padding: 40px 0;
    }

    h5 {
        font-size: 24pt !important;
        margin: 0;
        line-height: 28pt !important;
    }
}
</style>