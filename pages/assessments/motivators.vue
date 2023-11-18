<template>
    <div class="main">
        <main-nav active="assessments"></main-nav>

        <div class="hero">
            <img class="globe-tex" src="~assets/globe-bg.png" alt="globe">

            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h1><img class="ass-icon" src="~assets/motivators-icon.png" alt="motivators-icon"> Motivators</h1>
                        <p>
                            Motivation influences behavior, decisions, and actions. Finding ways to achieve objectives that resonate and align with core <strong>motivations</strong> 
                            is vital for superior performance.  Those who better understand their <strong>natural motivators</strong> better are far more likely to pursue the right opportunities 
                            for the right reasons and get the results they desire. 
                        </p>

                        <nuxt-link to="/contact" class="button outline light">Contact a Specialist</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="related-posts">
            <div class="container">
                <div class="row related-posts-container">
                    <p class="posts-title">Recent Posts with the Tag <span class="tag">Motivators</span></p>
                    <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            <img class="image" :src="post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'" alt="photo">

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
                        <h2>Measuring The Core of Motivation</h2>
                        <p>
                            Just as the DISC assessment gives insight into “how” someone will behave, the Motivators assessment explains “why.” Motivators are the reasons 
                            we want to act. They help people to better understand their value hierarchy or belief system. They filter and guide decisions specifically 
                            toward the results that reflect them, and they combine uniquely for each person to influence priorities and decision making. Motivators reveal 
                            our viewpoint, our mindset, and our paradigm of thought. 
                        </p>
                        <p>
                            Research shows successful people share a common trait of self-awareness and an awareness of those around them. Through building a greater 
                            understanding of the motivator dimensions in general, it becomes easier to see how they influence and guide behaviors to move people forward or 
                            keep them still. 
                        </p>
                    </div>

                    <div class="col-6">
                        <div class="sample-reports">
                            <h2>Motivators Sample Reports</h2>
                            <a href="/reports/valuessamplereport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Motivators
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/SampleDISCandMOT.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> DISC + Motivators Combination
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/motgroupgraphs.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Motivators Group Graphs
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/motteamwheel.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Motivators Team Wheel
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
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
                            <span><img src="~assets/flags/algeria.svg" alt="Arabic DISC Assessments"> العربية</span>
                            <span><img src="~assets/flags/china.svg" alt="Chinese DISC Assessments"> 中文</span>
                            <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                            <span><img src="~assets/flags/germany.svg" alt="German DISC Assessments"> Deutsch</span>
                            <span><img src="~assets/flags/italy.svg" alt="Italian DISC Assessments"> Italiano</span>
                            <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                            <span><img src="~assets/flags/lithuania.svg" alt="Lithuanian DISC Assessments"> lietuvių</span>
                            <span><img src="~assets/flags/mexico.svg" alt="Spanish DISC Assessments"> Español</span>
                            <span><img src="~assets/flags/netherlands.svg" alt="Dutch DISC Assessments"> Nederlands</span>
                            <span><img src="~assets/flags/portugal.svg" alt="Portugese DISC Assessments"> Português</span>
                            <span><img src="~assets/flags/russia.svg" alt="Russian DISC Assessments"> Россия</span>
                            <span><img src="~assets/flags/sweden.svg" alt="Swedish DISC Assessments"> Svenska</span>
                            <span><img src="~assets/flags/turkey.svg" alt="Turkish DISC Assessments"> Türkçe</span>
                            <span><img src="~assets/flags/united-kingdom.svg" alt="UK DISC Assessments"> UK English</span>
                            <span><img src="~assets/flags/vietnam.svg" alt="Vietnamese DISC Assessments"> Tiếng Việt</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="dimensions-aside">
                        <span class="sup-title">Motivators Assessment</span>
                        <h4 class="title">Learn What Motivates People</h4>
                        <p>
                            The Motivators assessment offers an in-depth identification and exploration of seven dimensions and 
                            how they uniquely combine to influence behavior, decision, and actions:
                        </p>

                        <ul>
                            <li><strong>Aesthetic</strong> is a drive for balance, harmony, and form.</li>
                            <li><strong>Economic</strong> is a drive for return on investment (including time, money, resources).</li>
                            <li><strong>Individualistic</strong> is a drive to stand out as independent and unique.</li>
                            <li><strong>Power</strong> is a drive to be in control or have influence.</li>
                            <li><strong>Altruistic</strong> is a drive to help others at the expense of self.</li>
                            <li><strong>Regulatory</strong> is a drive to establish order, routine, and structure.</li>
                            <li><strong>Theoretical</strong> is the drive for knowledge, learning, and understanding. </li>
                        </ul><br/>

                        <nuxt-link to="/assessments" class="button">More Assessments</nuxt-link>
                        <nuxt-link to="/contact" class="button outline">Contact a Specialist</nuxt-link>
                    </div>
                </div>

                <div class="col-6">
                    <div class="dimensions">
                        <div class="wrapper">
                            <div class="item-wrap">
                                <div :class="{'icon aes': true, 'active': active === 'aes'}" @mouseover="changeActive('aes')">AES</div>
                                <div :class="{'content': true, 'active': active === 'aes'}">
                                    <h4>Aesthetic</h4>
                                    <p>The strong desire and need to achieve equilibrium between the world around us and ourselves.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon eco': true, 'active': active === 'eco'}" @mouseover="changeActive('eco')">ECO</div>
                                <div :class="{'content': true, 'active': active === 'eco'}">
                                    <h4>Economic</h4>
                                    <p>The motivation for security from self-interest, economic gains, and achieving real-world returns.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon ind': true, 'active': active === 'ind'}" @mouseover="changeActive('ind')">IND</div>
                                <div :class="{'content': true, 'active': active === 'ind'}">
                                    <h4>Individualistic</h4>
                                    <p>The need to be seen as autonomous, unique, independent, and to stand apart from the crowd.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon pow': true, 'active': active === 'pow'}" @mouseover="changeActive('pow')">POW</div>
                                <div :class="{'content': true, 'active': active === 'pow'}">
                                    <h4>Power</h4>
                                    <p>The need to be seen as a leader, while having influence and control over one's success.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon alt': true, 'active': active === 'alt'}" @mouseover="changeActive('alt')">ALT</div>
                                <div :class="{'content': true, 'active': active === 'alt'}">
                                    <h4>Altruistic</h4>
                                    <p>The expression of the need or energy to benefit others at the expense of self.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon reg': true, 'active': active === 'reg'}" @mouseover="changeActive('reg')">REG</div>
                                <div :class="{'content': true, 'active': active === 'reg'}">
                                    <h4>Regulatory</h4>
                                    <p>The need to establish order, routine, and structure. This motivation is to promote a black and white mindset.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon the': true, 'active': active === 'the'}" @mouseover="changeActive('the')">THE</div>
                                <div :class="{'content': true, 'active': active === 'the'}">
                                    <h4>Theoretical</h4>
                                    <p>The desire to uncover, discover, and recover the "truth” for knowledge sake.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><validation-mini /></LazyHydrate>
        <LazyHydrate when-visible><mamawa-daboh /></LazyHydrate>

        <section class="assessment-content">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5 class="section-title">What Motivates People?</h5>

                        <p>
                            Motivators are all about passion and satisfaction. Essentially, they are the reasons we do anything – they drive our behaviors, 
                            decisions, and actions.
                        </p>
                        <p>
                            The Motivators Assessment highlights individually how each of the 7 Motivators impacts our choices. However, exploring the 
                            dimensions one-by-one is not enough; we must combine them to see how they influence one another and interact as a whole. The 
                            combination is the key to understanding how Motivators will likely drive passions and behavior. 
                        </p>
                        <p>
                            Furthermore, if our Motivators and behavior don’t always align, the assessment can reveal areas of tension. This is useful in 
                            helping us to find the best way to satisfy our passions and manage our energy through behavioral expression.
                        </p>
                        <br/>

                        <nuxt-link to="/contact" class="button">Book a Demo Now</nuxt-link>
                    </div>

                    <div class="col-6">
                        <img class="side-img lazyload" src="~/assets/motivators-fold-image.jpg" alt="Learn What Motivates Employees and People">
                    </div>
                </div>
            </div>
        </section>

        <section class="whitelabel">
            <div class="container">
                <div class="row flex-center">
                    <div class="col-8">
                        <img class="logo-img" src="~assets/whitelabel-report/motivators-whitelabel.png" alt="motivators-whitelabel">
                        <h4 class="title">White Label Our Assessments With Your Own Brand's Logo</h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>

                        <h5 class="subtitle">Tools to Power Your Business</h5>
                        <p>
                            With our White-labeled option, you can do more than just use your branding!  25+ years of Research and Development is now yours to customize, market, and sell in a way that 
                            works for your business. You have the freedom to do it your way, and charge what you need to for industry-leading technology, assessments, and resources no matter the size 
                            of your organization. By partnering with Assessments 24x7, you are working with thousands of other consultants, trainers, coaches and teams around the world to help grow 
                            their businesses.
                        </p>
                    </div>

                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>

                        <h5 class="subtitle">The Leading Corporate Assessment Solution</h5>
                        <p>
                            For organizations large and small, developing effective hiring and selection practices, onboarding and development programs are critical to promote the identity and culture 
                            of your business and ensure a strong, aligned workforce. Whether you are an HR professional, trainer, leader or manager, using assessments helps you to hire smarter, grow 
                            sales in a way that creates strong retention in client relationships, resolve conflict before it starts, and offer your employees world-class training curriculum to support 
                            their personal and professional growth. With tailored corporate solutions to fit your organization, whether you are small start-up or Fortune 500 company, Assessments 24x7 
                            has what your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get Motivators Certified</h5>
                        <p>
                            Become an expert with our internationally accredited certification training. Designed specifically to foster a deeper understanding of the mode, 
                            you’ll discover how it can be used to build more effective personal and professional relationships. Through one-on-one instructor-led sessions 
                            and self-study, you will learn to use the assessment results with supportive, comprehensive resources that are available when you need them. 
                            As a bonus, if you are certified in multiple assessments, your instructor will show you how to combine the assessment results for a holistic 
                            understanding of how they work together.
                        </p>

                        <p>
                            Each certification program includes additional benefits such as exclusive access to our Certified Trainer Materials library, discounted pricing, 
                            continuing education credits, 10 complimentary assessments when you finish the program, and a listing on our International Directory of Practitioners.
                        </p><br/>

                        <nuxt-link to="/assessments" class="button outline light">More Assessments</nuxt-link>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/mot-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><credits shrm="10" hrci="7" atd="7" icfCore="7.5" icfRD="9.25" hrciProgramId="582705" /></LazyHydrate>

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">Frequently Asked Questions</h5>
                    </div>
                </div><br/>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Why is understanding Motivators important?</h6>
                        <p class="answer">
                            Understanding how Motivators work and how they uniquely combine for each of us brings deeper insight into our self-awareness and also helps 
                            us to effectively connect with others. They help us understand what is important to us and also what is important to someone else. 
                        </p>

                        <p>
                            As a self-awareness activity, examining how we are motivated helps us to make intentional choices and work to align our behaviors and actions 
                            to get what we want. With others, an awareness of what motivates them, helps us to understand their behaviors and actions. 
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Is it enough just to understand Motivators?</h6>
                        <p class="answer">
                            While Motivators as a standalone tool is beneficial and insightful, with additional information we become more empowered and informed. 
                            In combination with other assessments, we can see how our decision making, learning preferences, behaviors and emotions are influenced 
                            by what is most important to us.
                        </p>

                        <p>
                            In combination with DISC, a practical understanding of our own motivations helps us to avoid tricking ourselves into feeling that we 
                            lack motivation. We are all motivated, but we may lack the “energy” (seen in the DISC graph) to get what we want. With DISC and 
                            Motivators together, we discover whether or not we are behaving what we value in a way that works.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Can Motivators be used to benchmark new hires?</h6>
                        <p class="answer">
                            Assessments can play a vital role in employee selection when used appropriately. At Assessments 24x7, our Motivators assessment 
                            meets EEOC standards for class protection and is frequently used as part of the selection process. See our Hiring and Selection 
                            service, <a href="https://www.hiresense.com" class="hyperlink" target="_blank" rel="noopener">HireSense</a>, to learn more. We 
                            never recommend making a hiring decision based only on assessment data, but when used in combination with other factors 
                            (interviews, referrals, skills and experience, etc.), assessments can bring insight to selection decisions.
                        </p>

                        <p>
                            HireSense is an integration of three Assessments: DISC, Motivators, and Critical Thinking (Hartman), providing detailed insight 
                            into what will help a candidate be successful in their new role or what might be required to support them. Learn more about our 
                            <a href="https://www.hiresense.com" class="hyperlink" target="_blank" rel="noopener">hiring and selection</a> products and 
                            services.
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
                                With an average completion time of 12-15 minutes, every assessment questionnaire is delivered by 
                                email link, subsequently generating a PDF report that is automatically uploaded to the member’s white-label dashboard.
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
                                Our internationally accredited Motivators assessment is currently available in multiple languages. See our 
                                <nuxt-link to="/sample-reports" class="hyperlink light">sample reports</nuxt-link> page for the list of available languages 
                                and to view sample results. 
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>

                            <h3>Motivators Team Reports</h3>
                            <p>
                                By combinging individual Motivators results, members can generate different team reports including a team wheel and group graphs. All of our team reports are 100% free and unlimited.
                            </p>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="feature-box">
                            <div class="feature-text">
                                <h3>Also Available In</h3>

                                <div class="languages">
                                    <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                                    <span><img src="~assets/flags/united-kingdom.svg" alt="UK DISC Assessments"> UK English</span>
                                    <span><img src="~assets/flags/mexico.svg" alt="Spanish DISC Assessments"> Español</span>
                                    <span><img src="~assets/flags/algeria.svg" alt="Arabic DISC Assessments"> العربية</span>
                                    <span><img src="~assets/flags/china.svg" alt="Chinese DISC Assessments"> 中文</span>
                                    <span><img src="~assets/flags/netherlands.svg" alt="Dutch DISC Assessments"> Nederlands</span>
                                    <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                                    <span><img src="~assets/flags/germany.svg" alt="German DISC Assessments"> Deutsch</span>
                                    <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                                    <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português</span>
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

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </div>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';
    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'validation-mini': () => import('@/components/ValidationMini'),
            'mamawa-daboh': () => import('@/components/testimonials/MamawaDaboh'),
            'footer-fold': () => import('@/components/Footer'),
            'credits': () => import('@/components/Credits')
        },
        head() {
            return {
                title: 'Personal Drivers: Exploring Motivators Assessments',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Discover the power of motivators assessments in unraveling the intrinsic drivers that fuel individuals. Explore the profound benefits of understanding motivators for personal and professional growth.'
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
                active: 'aes',
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
                                "@id": "https://assessments24x7.com/assessments/motivators",
                                "name": "Motivators Assessment" 
                            } 
                        }
                    ]
                }
            }
        },
        async created() {
            const response = await this.$axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=4&filter=tag:motivators`);
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
                    if (this.active === 'aes') { this.active = 'eco'; }
                    else if (this.active === 'eco') { this.active = 'ind'; }
                    else if (this.active === 'ind') { this.active = 'pow'; }
                    else if (this.active === 'pow') { this.active = 'alt'; }
                    else if (this.active === 'alt') { this.active = 'reg'; }
                    else if (this.active === 'reg') { this.active = 'the'; }
                    else { this.active = 'aes'; }
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
        margin-top: 70px;
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
                    font-size: 30px;
                    border-radius: 50%;
                    box-shadow: 0px 6px 13px rgba(145, 145, 145, 0.2);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    line-height: 95px;
                    font-weight: 600;
                    color: #333;
                    background: linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(245,247,255,1) 100%);

                    &.aes {
                        left: 41.2281%;
                        top: 1%;

                        &.active {
                            background: linear-gradient(150deg, rgba(140,255,46,1) 0%, rgba(59,164,11,1) 100%);
                            color: #fff;
                        }
                    }

                    &.eco {
                        left: 70%;
                        top: 15%;

                        &.active {
                            background: linear-gradient(150deg, rgba(46,136,255,1) 0%, rgba(11,49,164,1) 100%);
                            color: #fff;
                        }
                    }

                    &.ind {
                        left: 80%;
                        top: 48.4561%;

                        &.active {
                            background: linear-gradient(150deg, rgb(255, 164, 46) 0%, rgb(255, 139, 6) 100%);
                            color: #fff;
                        }
                    }

                    &.pow {
                        left: 60%;
                        top: 75%;

                        &.active {
                            background: linear-gradient(150deg, rgba(255,82,66,1) 0%, rgb(255, 11, 6) 100%);
                            color: #fff;
                        }
                    }

                    &.alt {
                        left: 24%;
                        top: 75%;

                        &.active {
                            background: linear-gradient(150deg, rgba(255,230,46,1) 0%, rgba(255,171,6,1) 100%);
                            color: #fff;
                        }
                    }

                    &.reg {
                        left: 2%;
                        top: 48.4561%;

                        &.active {
                            background: linear-gradient(150deg, rgb(61, 61, 61) 0%, rgba(0,0,0,1) 100%);
                            color: #fff;
                        }
                    }

                    &.the {
                        left: 12%;
                        top: 15%;

                        &.active {
                            background: linear-gradient(150deg, rgb(141, 87, 64) 0%, rgb(75, 31, 6) 100%);
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
        background: rgb(0,51,197);
        background: linear-gradient(218deg, #ffa518, #fc542a, #ffa518);
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
        background: rgb(0,51,197);
        background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #ffa518, #fc542a, #ffa518);
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
        margin: 0 0 80px 0;
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
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);

            .posts-title {
                margin: 6px 0 8px 25px;
                font-size: 12pt;
                font-weight: 500;

                span {
                    background: #fc542a;
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

    .hero {
        background: rgb(0,51,197);
        background: linear-gradient(218deg, #ffa518, #fc542a, #ffa518);
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