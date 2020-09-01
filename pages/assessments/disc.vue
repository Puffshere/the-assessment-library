<template>
    <section class="main">
        <main-nav active="assessments"></main-nav>
 
        <div class="hero">
            <img class="globe-tex" src="~assets/globe-bg.png">

            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h1><img class="ass-icon" src="~assets/disc-icon.png"> DISC Assessment</h1>
                        <p>
                            As the world’s most popular behavioral assessment, DISC offers a simple solution with profound results. 
                            Learn how to identify the behavioral styles of others and adapt your communication to increase sales, assemble teams, 
                            target new hires, develop “rockstar” leaders, and more.
                        </p>
                        <nuxt-link to="/contact" class="button outline light">Become a Member</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="related-posts">
            <div class="container">
                <div class="row related-posts-container">
                    <p class="posts-title">Recent Posts with the Tag <span class="tag">DISC</span></p>
                    <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            <img class="image" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url">

                            <h3 class="title" v-html="post.title.rendered"></h3>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <div class="about-assess">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h2>Customized DISC Report Options for Every Professional</h2>
                        <p>
                            Our internationally awarded DISC assessment produces more than a dozen highly customizable individual and team reports. 
                            Our members can select from several user report options: general development for behavioral self-awareness (Self), executive 
                            coaching & development (Leadership), behavioral profiling for sales training (Sales), enhancing customer service communication 
                            (Service), or behavioral insights of one’s self in consulting (Coaching).
                        </p>
                    </div>

                    <div class="col-6">
                        <div class="sample-reports">
                            <h2>DISC Sample Reports</h2>
                            <a href="/reports/DISCselfSampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> DISC Self
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/DISCLeadershipSampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> DISC Leadership
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/SalesDISCselfSampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> DISC Sales
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/DISCService.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> DISC Service
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        <nuxt-link to="/sample-reports" class="hyperlink">View All Sample Reports &rarr;</nuxt-link>

                        <div class="languages">
                            <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                            <span><img src="~assets/flags/united-kingdom.svg" alt="UK DISC Assessments"> UK English</span>
                            <span><img src="~assets/flags/mexico.svg" alt="Spanish DISC Assessments"> Español</span>
                            <span><img src="~assets/flags/algeria.svg" alt="Arabic DISC Assessments"> العربية</span>
                            <span><img src="~assets/flags/china.svg" alt="Chinese DISC Assessments"> 中文</span>
                            <span><img src="~assets/flags/netherlands.svg" alt="Dutch DISC Assessments"> Nederlands</span>
                            <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                            <span><img src="~assets/flags/germany.svg" alt="German DISC Assessments"> Deutsch</span>
                            <span><img src="~assets/flags/indonesia.svg" alt="Indonesian DISC Assessments"> Indonesian</span>
                            <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                            <span><img src="~assets/flags/cambodia.svg" alt="Cambodian DISC Assessments"> ភាសាខ្មែរ</span>
                            <span><img src="~assets/flags/south-korea.svg" alt="Korean DISC Assessments"> 한국어</span>
                            <span><img src="~assets/flags/malaysia.svg" alt="Malaysian DISC Assessments"> മലയാളം</span>
                            <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português</span>
                            <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português (Brazil)</span>
                            <span><img src="~assets/flags/sweden.svg" alt="Swedish DISC Assessments"> Svenska</span>
                            <span><img src="~assets/flags/turkey.svg" alt="Turkish DISC Assessments"> Türkçe</span>
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
                                <div :class="{'icon d': true, 'active': active === 'd'}" @mouseover="changeActive('d')">D</div>
                                <div :class="{'content': true, 'active': active === 'd'}">
                                    <h4>Dominance</h4>
                                    <p>Assertive, results focused, rapid decisions, will seek challenges, can be aggressive and impatient, desires to lead.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon i': true, 'active': active === 'i'}" @mouseover="changeActive('i')">I</div>
                                <div :class="{'content': true, 'active': active === 'i'}">
                                    <h4>Influence</h4>
                                    <p>Very outgoing & persuasive, very people oriented, quite optimistic outlook, strong communication skills, likes to have variety.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon s': true, 'active': active === 's'}" @mouseover="changeActive('s')">S</div>
                                <div :class="{'content': true, 'active': active === 's'}">
                                    <h4>Steadiness</h4>
                                    <p>Very patient & favors stability and structure. Not a risk taker, likes to operate at a steady, even pace.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon c': true, 'active': active === 'c'}" @mouseover="changeActive('c')">C</div>
                                <div :class="{'content': true, 'active': active === 'c'}">
                                    <h4>Conscientious</h4>
                                    <p>Data, fact & analysis based. Precise & accurate, trusts in the value of structure & order. Sees the value of “rules”.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="dimensions-aside">
                        <span class="sup-title">DISC Assessment</span>
                        <h4 class="title">DISC Profile Assessments for Professional Success</h4>
                        <p>
                            This assessment measures and provides insight into four primary behavioral tendencies and emotions, 
                            and explores how these come together in a personal blend of style to create our DISC style:
                        </p>

                        <ul>
                            <li><strong>D - Dominance</strong>: Direct and Guarded, Fast-paced and Task-oriented, Focuses on Problems & Challenges, Assertive</li>
                            <li><strong>I - Influence</strong>: Direct and Open, Fast-paced and People-oriented, Focuses on People & Contacts, Persuasive</li>
                            <li><strong>S - Steadiness</strong>: Indirect and Open, Slow-paced and People-oriented, Focuses on Pace & Consistency, Supportive</li>
                            <li><strong>C- Conscientious</strong>: Indirect and Guarded, Slow-paced and Task-oriented, Focuses on Procedures & Constraints,  Analytical</li>  
                        </ul><br/>

                        <nuxt-link to="/assessments" class="button">More Assessments</nuxt-link>
                        <nuxt-link to="/contact" class="button outline">Contact a Specialist</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <validation-mini></validation-mini>

        <section class="assessment-content">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5 class="section-title">Trainer & Facilitator Materials at No Extra Cost</h5>

                        <p>
                            The world’s most comprehensive, one-stop assessment solution wouldn’t be complete without providing you customizable coaching 
                            materials. Every Core Assessment, including DISC, has its own dedicated folder on member dashboards complete with multimedia 
                            materials, including: PowerPoints/slide-decks, debrief guides, facilitator guides, group exercises, handouts, videos, MP3s, 
                            prewritten email series, sales collateral, and more!</p>

                        <p>When you become certified in DISC, you will receive access to a certified version of each folder, containing exclusive and 
                            upgraded materials that our Master Certified Practitioners use.<p>

                        </p><br/>

                        <nuxt-link to="/contact" class="button">Book A Demo Now</nuxt-link>
                    </div>

                    <div class="col-6">
                        <img class="side-img" src="~/assets/disc-fold-image.jpg" alt="Trainer & Facilitator Materials at No Extra Cost">
                    </div>
                </div>
            </div>
        </section>

        <section class="whitelabel">
            <div class="container">
                <div class="row flex-center">
                    <div class="col-8">
                        <img class="logo-img" src="~assets/whitelabel-report/disc-whitelabel.png" alt="">
                        <h4 class="title">White Label Our DISC Assessments With Your Brand's Logo- Not ours!</h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>

                        <h5 class="subtitle">Tools to Power Your Business</h5>
                           <p><p>
                            <p>Our 25-Years of R&D…Is Now Yours. Our white-labeled solution means more than just branding - it means the freedom to run your business, your way. Customize it, market it, 
                                and sell it, however you want - for however much you want. Whether you’re a consultancy practice of one or 100, you have the freedom to leverage our industry-leading assessments, 
                                resources, and technology to be your own. We have partnered with thousands of coaches and consultants around the globe to help grow their business and support their growth.</p>
                          
                          <nuxt-link to="/contact" class="button">Partner With Us</nuxt-link>
                    </div>

                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>

                        <h5 class="subtitle">The Leading Corporate Assessment Solution</h5>
                        <p><p>
                            

                           <p> Are you an in-house corporate trainer or HR professional? For business, this means developing in-house employee training 
                            curriculums without compromise. It also means employing assessments during the hiring & selection process, complete with 
                            your branding, to further promote your organization’s identity and culture. Companies around the world
                            leverage our assessments to hire smarter, accelerate sales, solve conflict, and more. Whether you are 
                            a small start-up or a Fortune 500 company, we have tailored corporate solutions to fit
                            your needs.  
                            </p>

                        <nuxt-link to="/contact" class="button">Learn More</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get DISC Certified and Master DISC</h5>
                        <p>
                            Become a DISC expert with our self-paced, internationally accredited certification training. Designed specifically for 
                            coaches and corporate trainers, our one-on-one instructor-led sessions will teach you how to use DISC completely online 
                            and at your own pace.</p>

                        <p> 
                            Our certifications also include many benefits such as exclusive access to our DISC Certified Trainer Materials, discounted 
                            SILVER LEVEL PRICING, and 10 complimentary DISC assessments when you begin.  
                        </p><br/>

                        <nuxt-link to="/certifications/assessment" class="button outline light">Get DISC Certified</nuxt-link>

                        <br/><br/><br/><br/><br/>

                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/disc-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section>

        <section class="credits">
            <div class="container">
                <div class="row">
                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/shrm.png" alt="shrm">
                        <span class="credit">12 Credits</span>
                        <p class="institute">SHRM</p>
                    </div>

                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/hrci.png" alt="hrci">
                        <span class="credit">10 Credits</span>
                        <p class="institute">HRCI*</p>
                    </div>

                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/atd.png" alt="atd">
                        <span class="credit">12 Credits</span>
                        <p class="institute">ATD</p>
                    </div>

                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/icf.png" alt="icf">
                        <span class="credit">5.25/12.5</span>
                        <p class="institute">Core/RD ICF</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <p style="color: #777; font-size: 9pt; text-align: center; margin-top: -12px;">
                            * The use of this official seal confirms that this Activity has met HR Certification Institute's® 
                            (HRCI®) criteria for recertification credit pre-approval.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">Frequently Asked Questions</h5>
                    </div>
                </div><br/>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">How Accurate Is DISC?</h6>
                        <p class="answer">
                            Assessments 24x7 is proud that its DISC assessment may currently be the world’s only assessment independently tested - by a qualified 
                            third party - for Construct Validity, Reliability, and Disparate Impact. Our DISC assessment meets APA, EEOC, AREA, and 
                            NCME standards. Our DISC assessment’s independent test results are transparently <a href="/about/validity" class="hyperlink" target="_blank" rel="noopener">shared here</a>. A recent study by the 
                            Assessment Standards Institute (ASI) concluded the great majority of assessments being produced and sold today lack 
                            testing to substantiate their scientific claims. While it’s important to compare sample reports, we strongly encourage 
                            consumers to request the assessment provider’s Construct Validity, Reliability, and Disparate Impact reporting. If this 
                            reporting does not exist, or the testing was conducted by the assessment provider themselves, the consumer should remain 
                            skeptical of any scientific claims of validity and reliability.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Can DISC be used to benchmark for New Hires?</h6>
                        <p class="answer">
                            DISC plays a vital role in employee selection. At Assessments 24x7, our DISC assessment meets EEOC standards for class 
                            protection and is frequently used as one part of the employee selection process. Our proprietary white-label dashboard 
                            also includes a complimentary DISC Benchmark System, where our members can benchmark applicants’ DISC styles against 
                            hundreds of preexisting job benchmarks. Our DISC Benchmark System also allows users to create custom benchmarks. 
                            Additionally, our hiring & selection reports are an integration of the first three Core Assessments: DISC, Motivators, 
                            and Critical Thinking (Hartman).
                        </p>
                    </div>
                </div>

                 <div class="row">
                    <div class="col-12">
                        <h6 class="question">Who Owns DISC?</h6>
                        <p class="answer">
                            It’s a common misconception that DISC is the intellectual property of only one company. DISC is the byproduct of psychologist 
                            <a class="hyperlink" href="https://en.wikipedia.org/wiki/DISC_assessment" target="_blank" rel="noopener"> Moulton Marston’s research</a>, and his book, Emotions of Normal People. In the decades that have followed, Marston’s 
                            research has spawned a number of behavioral assessments. DISC is what is commonly referred to as “open-source research.” 
                            This means that anyone can produce a questionnaire with report, and call it a DISC assessment - whether it’s been scientifically 
                            validated or not. Assessments 24x7 is one of the world’s few “source providers” of DISC that has been validated by an independent 
                            third party for Construct Validity, Reliability, and Disparate Impact.  
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
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                            </svg>

                            <h3>Quick to Complete</h3>
                            <p>
                                Our validated DISC assessment produces 30 intuitive and counterbalancing questions, with an average completion time of 12-15 minutes. Every assessment questionnaire is delivered by email 
                                link, subsequently generating a PDF report that is automatically uploaded to the member’s white-label dashboard.
                            </p>
                        </div>

                         <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>

                            <h3>Available Languages</h3>
                            <p>
                                Our internationally accredited DISC assessment and its all-purpose Self report is currently available in 18 languages. Our popular DISC Leadership report has been translated into 10 languages, 
                                and the Sales report is available in six. 
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>

                            <h3>DISC Team Reports & DISC 360°</h3>
                            <p>
                                By combining individual DISC results, members can generate seven different team reports. <a style="color:#fff" class="hyperlink" href="/assessments/360/disc">DISC 360° reports</a> provide insight into other's perspectives of behavior.
                                Group insights and profound behavioral correlations await discovery with these reports. All of our team reports are 100% free and unlimited.
                            </p>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="feature-box">
                            <div class="feature-text">
                                <h3>Also Available In:</h3>

                                <div class="languages">
                                    <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                                    <span><img src="~assets/flags/united-kingdom.svg" alt="UK DISC Assessments"> UK English</span>
                                    <span><img src="~assets/flags/mexico.svg" alt="Spanish DISC Assessments"> Español</span>
                                    <span><img src="~assets/flags/algeria.svg" alt="Arabic DISC Assessments"> العربية</span>
                                    <span><img src="~assets/flags/china.svg" alt="Chinese DISC Assessments"> 中文</span>
                                    <span><img src="~assets/flags/netherlands.svg" alt="Dutch DISC Assessments"> Nederlands</span>
                                    <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                                    <span><img src="~assets/flags/germany.svg" alt="German DISC Assessments"> Deutsch</span>
                                    <span><img src="~assets/flags/indonesia.svg" alt="Indonesian DISC Assessments"> Indonesian</span>
                                    <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                                    <span><img src="~assets/flags/cambodia.svg" alt="Cambodian DISC Assessments"> ភាសាខ្មែរ</span>
                                    <span><img src="~assets/flags/south-korea.svg" alt="Korean DISC Assessments"> 한국어</span>
                                    <span><img src="~assets/flags/malaysia.svg" alt="Malaysian DISC Assessments"> മലയാളം</span>
                                    <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português</span>
                                    <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português (Brazil)</span>
                                    <span><img src="~assets/flags/sweden.svg" alt="Swedish DISC Assessments"> Svenska</span>
                                    <span><img src="~assets/flags/turkey.svg" alt="Turkish DISC Assessments"> Türkçe</span>
                                    <span><img src="~assets/flags/vietnam.svg" alt="Vietnamese DISC Assessments"> Tiếng Việt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '../../components/Nav';
    import ValidationMini from '../../components/ValidationMini';
    import Footer from '../../components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'validation-mini': ValidationMini,
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'DISC Assessment | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'As the world’s most popular behavioral assessment, DISC offers a simple solution with profound results. Learn how to identify the behavioral styles of others and adapt your communication.'
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
                active: 'd',
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
                                "@id": "https://assessments24x7.com/assessments/disc",
                                "name": "DISC Assessment" 
                            } 
                        }
                    ]
                }
            }
        },
        methods: {
            changeActive(active) {
                this.active = active;
                this.interrupted = true;
            }
        },
        async created() {
            const response = await this.$axios.get('posts?_embed&per_page=4&tags=107');
            this.posts = response.data;
            this.loading = false;
        },
        mounted() {
            window.setInterval(() => {
                if (!this.interrupted) {
                    if (this.active === 'd') { this.active = 'i'; }
                    else if (this.active === 'i') { this.active = 's'; }
                    else if (this.active === 's') { this.active = 'c'; }
                    else { this.active = 'd'; }
                }
            }, 3000);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .related-posts {
        margin: -20px 0 60px;

        .related-posts-container {
            background: #fff;
            border-radius: 20px;
            padding: 14px 0;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);

            .posts-title {
                margin: 6px 0 8px 25px;
                font-size: 12pt;
                font-weight: 500;

                span {
                    background: #0249ec;
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
                    box-shadow: 0 0 20px rgba(0,0,0,.1);
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

    .credits {
        padding: 34px 0 10px;
        background: linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
        margin-bottom: 80px;

        .credit {
            font-size: 23pt;
            text-align: center;
            color: #fff;
            display: block;
            font-weight: 700;
        }

        .institute {
            text-align: center;
            font-size: 18pt;
            margin-top: -2px;
            color: #fff;
        }

        .provider-image {
            margin: 0 auto 14px;
            display: block;
            height: 100px;
        }
    }

    .certification {
        background: rgb(0,51,197);
        background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
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

        p, .button {
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
        background: url('~assets/artifacts/left-rings.png') no-repeat, linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
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

    .assessments-header {
        background: rgb(0,51,197);
        background: linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
        background-size: 200% 200%;
        animation: GradientFade 10s ease infinite;

        @keyframes GradientFade { 
            0% { background-position: 88% 0%; }
            50% { background-position: 13% 100%; }
            100% { background-position: 88% 0%; }
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
            box-shadow: 0 30px 30px rgba(0,0,0,.1);

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
        margin-bottom: 30px;
        margin-top: 60px;

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
                border-radius: 50%;
                border: 3px solid #dee1ed;
            }

            .item-wrap {
                .icon {
                    position: absolute;
                    width: 18%;
                    height: 18%;
                    max-width: 100px;
                    max-height: 100px;
                    font-size: 40px;
                    border-radius: 50%;
                    box-shadow: 0px 6px 13px rgba(145, 145, 145, 0.2);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    line-height: 95px;
                    font-weight: 600;
                    color: #333;
                    background: linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(245,247,255,1) 100%);

                    &.d {
                        left: 41.2281%;
                        top: 1%;

                        &.active {
                            background: linear-gradient(150deg, rgba(255,82,66,1) 0%, rgb(255, 11, 6) 100%);
                            color: #fff;
                        }
                    }

                    &.i {
                        left: 82.4561%;
                        top: 41.2281%;

                        &.active {
                            background: linear-gradient(150deg, rgba(255,230,46,1) 0%, rgba(255,171,6,1) 100%);
                            color: #fff;
                        }
                    }

                    &.s {
                        left: 41.2281%;
                        top: 82.4561%;

                        &.active {
                            background: linear-gradient(150deg, rgba(140,255,46,1) 0%, rgba(59,164,11,1) 100%);
                            color: #fff;
                        }
                    }

                    &.c {
                        left: 0%;
                        top: 41.2281%;

                        &.active {
                            background: linear-gradient(150deg, rgba(46,136,255,1) 0%, rgba(11,49,164,1) 100%);
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

    .hero {
        background: rgb(0,51,197);
        background: linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
        background-size: 200% 200%;
        animation: GradientFade 10s ease infinite;
        z-index: 0;
        position: relative;

        @keyframes GradientFade { 
            0% { background-position: 88% 0%; }
            50% { background-position: 13% 100%; }
            100% { background-position: 88% 0%; }
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
            box-shadow: 0 0 10px rgba(0,0,0,.1);
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

        h2 {
            font-size: 24pt;
            margin-bottom: 0;
            line-height: 28pt;
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .hero {
            h1 {
                font-size: 23pt;
                text-align: center;
                line-height: 25pt;

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