<template>
    <div class="main">
        <main-nav active="assessments"></main-nav>
        <div class="hero">
            <img class="globe-tex" src="~assets/globe-bg.png" alt="globe">

            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h1><img class="ass-icon" src="~assets/hartman-icon.png" alt="hartman-icon">Critical Thinking (HVP)</h1>
                        <p>
                            Ultimately, better judgment means better decisions.Critical Thinking is the key to making good decisions, solving problems, 
                            risk management and effective planning. Our results will depend on the critical thinking and decision making skills we apply 
                            as we move through the process. Decisions always precede action and action should be focused on using our strengths and 
                            minimizing limitations.
                        </p>

                        <nuxt-link to="/contact" class="button outline light">Contact a Specialist</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="related-posts">
            <div class="container">
                <div class="row related-posts-container">
                    <p class="posts-title">Recent Posts with the Tag <span class="tag">Critical Thinking (HVP)</span></p>
                    <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            <img class="image" :src="post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'">

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
                        <h2>Measuring Critical Thinking with Hartman Value Profile (HVP)</h2>
                        <p>
                            Based on the work of Dr. Robert S. Hartman and Wayne Carpenter, the Critical Thinking assessment measures one’s capacity to make judgments about the world and 
                            one’s self according to our personal level of understanding (Clarity) and how much importance we place on it (Attention/Bias). People who score well in Critical 
                            Thinking also rate high in analysis, problem solving skills, overall job knowledge and performance. Weakness in our judgment opens up the risk for poor decisions 
                            which can lead to poor performance. When we understand potential limitations and blind spots, we can intentionally account for them to make balanced, conscious decisions.
                        </p>
                        <p>
                            Our ability to think critically and make sound, balanced judgments occurs subconsciously; it is fascinating that our brain is making decisions before we even consciously 
                            make them! Before any action can take place, our thoughts are subject to different biases in our judgment and are affected by our behavioral style, Emotional Intelligence, 
                            training and skills practice, reasoning ability and more.
                        </p>
                    </div>

                    <div class="col-6">
                        <div class="sample-reports">
                            <h2>HVP Sample Reports</h2>
                            <a href="/reports/tsselfsample.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Hartman Value Profile - Self
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/tssalessample.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Hartman Value Profile - Sales
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#dadada;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="/reports/tsmanagesample.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Hartman Value Profile - Leadership
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
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="dimensions-aside">
                        <span class="sup-title">Critical Thinking with HVP Assessment</span>
                        <h4 class="title">Measure Critical Thinking</h4>
                        <p>
                            This assessment measures and provides insight into our Thinking Style, made up of 2 key areas - Critical Processing Patterns and Thinking Strengths & Abilities:<br/>
                        </p>
                            <h3><strong>Critical Processing Patterns</strong> are evaluated in: </h3>

                        <ul>
                            <li><strong>Intuitive Thinking:</strong> The ability to see, understand and appreciate the uniqueness in others and in situations; having a gut instinct.</li>
                            <li><strong>Practical Thinking:</strong> The ability to see, understand and compare the functional worth of things and the short-term outcomes of a situation or event.</li>
                            <li><strong>Systems/Conceptual Thinking:</strong> The ability to see understand and appreciate the need for order, structure, standards and big picture thinking.</li>
                        </ul><br/>

                        <nuxt-link to="/assessments" class="button">More Assessments</nuxt-link>
                        <nuxt-link to="/contact" class="button outline">Contact a Specialist</nuxt-link>
                    </div>
                </div>
                <div class="col-6">
                    <div class="dimensions">
                        <div class="wrapper">
                            <div class="item-wrap">
                                <div :class="{'icon people': true, 'active': active === 'people'}" @mouseover="changeActive('people')">I</div>
                                <div :class="{'content': true, 'active': active === 'people'}">
                                    <h4>Intuitive Style</h4>
                                    <p> Rely on gut instincts, follows hunches regardless of consequences, focuses on issues involving people.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon tasks': true, 'active': active === 'tasks'}" @mouseover="changeActive('tasks')">P</div>
                                <div :class="{'content': true, 'active': active === 'tasks'}">
                                    <h4>Practical Style</h4>
                                    <p>Get things done now, plan around immediate needs and results,quick to identify crisis and common-sense ways to solve them, focuses on the short range, tactical goals .</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon systems': true, 'active': active === 'systems'}" @mouseover="changeActive('systems')">S</div>
                                <div :class="{'content': true, 'active': active === 'systems'}">
                                    <h4>Systems / Conceptual Style</h4>
                                    <p>looks for the perfect solution, connecting threads and trends to understand situations and the big picture, focus on longer range, strategic goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="dimensions">
                        <div class="wrapper">
                            <div class="item-wrap">
                                <div :class="{'icon people': true, 'active': active2 === 'personal'}" @mouseover="changeActive2('personal')">P</div>
                                <div :class="{'content': true, 'active': active2 === 'personal'}">
                                    <h4>Personal Strengths</h4>
                                    <p>Clearly focus and apply your strengths on key actions to reach a desired outcome or result.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon tasks': true, 'active': active2 === 'execution'}" @mouseover="changeActive2('execution')">E</div>
                                <div :class="{'content': true, 'active': active2 === 'execution'}">
                                    <h4>Execution Ability</h4>
                                    <p>Use your talents to effectively implement the ideas you generate.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{'icon systems': true, 'active': active2 === 'objective'}" @mouseover="changeActive2('objective')">O</div>
                                <div :class="{'content': true, 'active': active2 === 'objective'}">
                                    <h4>Objective Ability</h4>
                                    <p>Remove bias and preconceptions to effectively create solutions and ideas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="dimensions-aside">
                        <h3><strong>Thinking Strengths & Abilities</strong> are evaluated in:</h3> 
                    
                        <ul>
                            <li><strong>Personal Strengths:</strong> The commitment to personal standards, ownership of problems and self-awareness in an effort to effectively negotiate relationships and situations.</li>
                            <li><strong>Execution Ability:</strong> The capacity for action, goal directedness, ability to focus and determination to create strategic plans and expectations.</li>
                            <li><strong>Objective Ability:</strong> The ability to be positive, open and dynamic, determine relevance, solve problems and make objective decisions while considering all aspects of a situation.</li>
                        </ul><br/>

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
                        <h5 class="section-title">Clarity/Understanding & Attention/Bias</h5>
                        <p>The stronger the rating in Critical Thinking, the more information you can clearly see and process effectively to reach the best decisions. Ratings are based on a combination of two factors:</p>

                        <ul>
                            <li>
                                <strong>Clarity/Understanding:</strong> the ability to see and understand the different areas of your Thinking Style<br/>
                                <small><em>The greater your clarity, the more accuracy and precision you will have in judgement in that area.</em></small>
                            </li><br/>
                            <li>
                                <strong>Attention/Bias:</strong> how you appreciate and value the different areas of your Thinking Style<br/>
                                <small><em>The greater your attention, the more importance and value you place in that area.</em></small>
                            </li><br/>
                        </ul>

                        <nuxt-link to="/contact" class="button">Book a Demo</nuxt-link>
                    </div>

                    <div class="col-6">
                        <img class="side-img lazyload" src="~/assets/hvp-fold-image.jpg" alt="Clarity/Understanding & Attention/Bias">
                    </div>
                </div>
            </div>
        </section>

        <section class="whitelabel">
            <div class="container">
                <div class="row flex-center">
                    <div class="col-8">
                        <img class="logo-img" src="~assets/whitelabel-report/hvp-whitelabel.png" alt="hvp-whitelabel">
                        <h4 class="title">White Label Our Assessments With Your Own Brand's Logo</h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>

                        <h5 class="subtitle">Grow Your Coaching Business</h5>
                        <p>
                            With our White-labeled option, you can do more than just use your branding! 25+ years of Research and Development is now yours to customize, market, and sell in a way that 
                            works for your business. You have the freedom to do it your way, and charge what you need to for industry-leading technology, assessments, and resources no matter the 
                            size of your organization. By partnering with Assessments 24x7, you are working with thousands of other consultants, trainers, coaches and teams around the world to help 
                            grow their businesses.
                        </p>
                    </div>

                    <div class="col-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#03bbff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>

                        <h5 class="subtitle">Partner With The Global Leader</h5>
                        <p>
                            For organizations large and small, developing effective hiring and selection practices, onboarding and development programs are critical to promote the identity and 
                            culture of your business and ensure a strong, aligned workforce. Whether you are an HR professional, trainer, leader or manager, using assessments helps you to hire 
                            smarter, grow sales in a way that creates strong retention in client relationships, resolve conflict before it starts, and offer your employees world-class training 
                            curriculum to support their personal and professional growth. With tailored corporate solutions to fit your organization, whether you are small start-up or Fortune 
                            500 company, Assessments 24x7 has what your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get Critical Thinking (HVP) Certified</h5>
                        <p>
                            Become an expert with our internationally accredited certification training. Designed specifically to foster a deeper understanding of the model, 
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
                        <br/><br/><br/><br/><br/><br/>
                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/hartman-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section>

        <credits shrm="7.5" hrci="6.5" atd="6.5" icfCore="5.5" icfRD="9.6" hrciProgramId="582707" />

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">Frequently Asked Questions</h5>
                    </div>
                </div><br/>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Why is understanding Critical Thinking with HVP important?</h6>
                        <p class="answer">
                            The Critical Thinking with HVP assessment and report documents your brain’s natural selection process when making a decision, 
                            so it provides a foundation of understanding for each person of their thinking pattern. Thinking and mental processing ability, 
                            just like a musical talent or sports talent, can be learned and improved with intentionality and understanding.When we understand 
                            our biases, our values, our strengths and limitations and our blind spots, we can intentionally account for them to make balanced, 
                            conscious decisions.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">How can we use this information to be sure we are making good, balanced decisions?</h6>
                        <p class="answer">
                            The goal with any assessment is to help create understanding and awareness so we can be more intentional. Knowing that our brains 
                            are not always rational, we can work to anchor our decisions with prioritized information and be confident in our thinking ability.
                            <br/><br/>
                            For example, if we know that we value Practical Judgment in our Critical Processing Pattern, we know that we’ll likely bias our 
                            decisions toward pragmatic results over other things. We can then be sure we are balancing our judgment by asking if there is something 
                            that should be considered in other areas (Intuitive and Systems/Conceptual Judgment) so that we aren’t missing anything; we ensure we 
                            are not making subconscious decisions by bringing our decisions to the forefront of conscious thought instead of operating by default. 
                            <br/><br/>
                            Furthermore, if we understand our EIQ, our Motivators, our DISC style, and our Learning styles, we can see how there may be alignment 
                            or tension between our thinking and processing patterns and our expression of our decisions. 

                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Can Critical Thinking with HVP be used to benchmark new hires?</h6>
                        <p class="answer">
                            Assessments can play a vital role in employee selection when used appropriately. At Assessments 24x7, our Motivators assessment meets 
                            EEOC standards for class protection and is frequently used as part of the selection process. We never recommend making a hiring decision 
                            based only on assessment data, but when used in combination with other factors (interviews, referrals, skills and experience, etc.), 
                            assessments can bring insight to selection decisions.
                            <br/><br/>
                            Our hiring & selection resources are an integration of three Core Assessments: DISC, Motivators, and Critical Thinking (Hartman), 
                            providing detailed insight into what will help a candidate be successful in their new role or what might be required to support them. 
                            Learn more about our <a href="/hiring-and-selection/" class="hyperlink" target="_blank" rel="noopener">hiring and selection products and services.</a>
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
                                Our internationally accredited Motivators assessment, and its all-purpose Self report is currently only available in English.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>

                            <h3>Available in Three Focus Areas</h3>
                            <p>
                                The Critical Thinking (HVP) is currently available in Self, Sales and, Leadership.
                            </p>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="feature-box">
                            <div class="feature-text">
                                <h3>Also Available In</h3>

                                <div class="languages">
                                    <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
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
                title: 'Critical Thinking Assessment | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Based on the work of Dr. Robert S. Hartman and Wayne Carpenter, the Critical Thinking assessment measures one’s capacity to make judgments about the world and one’s self according to our personal level of understanding (Clarity) and how much importance we place on it (Attention/Bias).'
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
                active: 'people',
                active2: 'personal',
                interrupted: false,
                interrupted2: false,
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
                                "@id": "https://assessments24x7.com/assessments/critical-thinking-hvp",
                                "name": "Critical Thinking (HVP)" 
                            } 
                        }
                    ]
                }
            }
        },
        async created() {
            const response = await this.$axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=4&filter=tag:critical-thinking`);
            this.posts = response.data.posts;
            this.loading = false;
        },
        methods: {
            changeActive(active) {
                this.active = active;
                this.interrupted = true;
            },
            changeActive2(active) {
                this.active2 = active;
                this.interrupted2 = true;
            }
        },
        mounted() {
            window.setInterval(() => {
                if (!this.interrupted) {
                    if (this.active === 'people') { this.active = 'tasks'; }
                    else if (this.active === 'tasks') { this.active = 'systems'; }
                    else { this.active = 'people'; }
                }

                if (!this.interrupted2) {
                    if (this.active2 === 'personal') { this.active2 = 'execution'; }
                    else if (this.active2 === 'execution') { this.active2 = 'objective'; }
                    else { this.active2 = 'personal'; }
                }
            }, 3000);
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .dimensions-aside {
        margin-top: 60px;

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
        margin-bottom: 50px;
        margin-top: 50px;

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
                border: 3px solid #dee1ed;
                border-radius: 50%
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

                    &.people {
                        left: 41.2281%;
                        top: 1%;

                        &.active {
                            background: linear-gradient(150deg, rgba(46,136,255,1) 0%, rgba(11,49,164,1) 100%);
                            color: #fff;
                        }
                    }

                    &.tasks {
                        left: 77%;
                        top: 60%;

                        &.active {
                            background: linear-gradient(150deg, rgba(255,230,46,1) 0%, rgba(255,171,6,1) 100%);
                            color: #fff;
                        }
                    }

                    &.systems {
                        left: 6%;
                        top: 60%;

                        &.active {
                            background: linear-gradient(150deg, rgba(255,82,66,1) 0%, rgb(255, 11, 6) 100%);
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
        background: linear-gradient(218deg, #8ef03a, #11bd04, #8ef03a);
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
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/ribbon.png'), linear-gradient(218deg, #8ef03a, #11bd04, #8ef03a);
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
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/left-rings.png') no-repeat, linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
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
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);

            .posts-title {
                margin: 6px 0 8px 25px;
                font-size: 12pt;
                font-weight: 500;

                span {
                    background: #11bd04;
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
        background: linear-gradient(218deg, #8ef03a, #11bd04, #8ef03a);
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