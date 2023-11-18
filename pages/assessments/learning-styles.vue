<template>
    <div class="main">
        <main-nav active="assessments" />

        <div class="hero">
            <img class="globe-tex" src="~assets/globe-bg.png" alt="globe">

            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h1><img class="ass-icon" src="~assets/learning-styles-icon.png" alt="learning-styles-icon"> Learning Styles</h1>
                        <p>
                            All learners are not equal. They come from a wide variety of cultural backgrounds, have many
                            different
                            experiences and use different methods of learning. Some like to learn from text, while
                            others want visual
                            support and images. Some assimilate information individually while others prefer to work in
                            groups.
                            In the end, the only thing that can be said with certainty is that every individual learns
                            in his or her own way.
                        </p>

                        <nuxt-link to="/contact" class="button outline light">Contact a Specialist</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <section class="related-posts">
            <div class="container">
                <div class="row related-posts-container">
                    <p class="posts-title">Recent Posts with the Tag <span class="tag">Learning Styles</span></p>
                    <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            <img class="image"
                                :src="post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'" alt="photo">

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
                        <h2>Measuring Learning Styles</h2>
                        <p>
                            The Learning Styles questionnaire was developed after extensive research into how people
                            prefer to engage in learning.
                            It aims to help each person understand their own learning style as well as consider the
                            style preferences of others as
                            they share information and help others learn. We are all teachers sometimes, and this model
                            is used for both our individual
                            learning, and facilitating learning with others. The self-scoring instrument uses 40 pairs
                            of questions to help you develop
                            a personal learning styles profile and determine your own best strategies for learning
                            effectiveness.
                        </p>
                        <p>
                            The Learning Styles assessment reveals where our general preferences, or natural learning
                            biases, might lie. Although this
                            is far from an exact science, the more we can understand about how we receive, retain, and
                            recall new information, the more
                            intentional we can be in setting ourselves up for success in learning transfer.

                        </p>
                    </div>

                    <div class="col-6">
                        <div class="sample-reports">
                            <h2>Learning Styles Sample Reports</h2>
                            <a href="/reports/LearningStylesSampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> Learning Styles
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

                            <a href="/reports/SampleDISCandLS.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> DISC + Learning Styles
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

                            <a href="/reports/SampleDISCSalesandLS.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> DISC Sales + Learning Styles
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

                            <a href="/reports/SampleDISCLeadandLS.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg" alt="pdf-icon"> DISC Leadership + Learning Styles
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
                            <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                            <span><img src="~assets/flags/china.svg" alt="Chinese DISC Assessments"> 中文</span>
                            <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                            <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                            <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português (Brazil)</span>
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
                                <div :class="{ 'icon att': true, 'active': active === 'att' }"
                                    @mouseover="changeActive('att')">ATT</div>
                                <div :class="{ 'content': true, 'active': active === 'att' }">
                                    <h4>Step 1: Attending</h4>
                                    <p>The Attending category looks at an individual's motivation to learn in the first
                                        place.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{ 'icon tra': true, 'active': active === 'tra' }"
                                    @mouseover="changeActive('tra')">TRA</div>
                                <div :class="{ 'content': true, 'active': active === 'tra' }">
                                    <h4>Step 2: Translating</h4>
                                    <p>The Translating category looks at whom an individual relies on most in managing
                                        the transfer of learning.</p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{ 'icon rel': true, 'active': active === 'rel' }"
                                    @mouseover="changeActive('rel')">REL</div>
                                <div :class="{ 'content': true, 'active': active === 'rel' }">
                                    <h4>Step 3: Relating</h4>
                                    <p>The Relating category looks at an individual's perception of data or information.
                                    </p>
                                </div>
                            </div>

                            <div class="item-wrap">
                                <div :class="{ 'icon und': true, 'active': active === 'und' }"
                                    @mouseover="changeActive('und')">UND</div>
                                <div :class="{ 'content': true, 'active': active === 'und' }">
                                    <h4>Step 4: Understanding</h4>
                                    <p>The Understanding category looks at an individual's preferences for synthesizing
                                        data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="dimensions-aside">
                        <span class="sup-title">Learning Styles Assessment</span>
                        <h4 class="title">A Unique Blend of Learning</h4>
                        <p>
                            This assessment measures and provides insight into our Learning Style preferences, made up
                            of 4 steps in the Learning
                            Cycle with sub-categories to further explain our unique blend of learning:
                        </p>

                        <ul>
                            <li>
                                <strong>Step 1: Attending:</strong> Motivation to Learn, our commitment and
                                concentration given to new information<br />
                                <center><em>Telescopic and Wide-angled</em></center><br />
                            </li>
                            <li>
                                <strong>Step 2: Translating:</strong> Making Information Meaningful, who we rely on most
                                to manage our learning transfer
                                <center><em>Dependent, Collaborative and Autonomous</em></center><br />
                            </li>
                            <li>
                                <strong>Step 3: Relating:</strong> Linking Data to Existing Knowledge, evaluating our
                                perception of information and data
                                <center><em>Visual, Auditory and Kinesthetic</em></center><br />
                            </li>
                            <li>
                                <strong>Step 4: Understanding:</strong> Using and Applying the Knowledge, how we
                                synthesize and use the information we receive
                                <center><em>Global and Analytical</em></center><br />
                            </li>
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
                        <h5 class="section-title">Learning with the Whole Brain</h5>

                        <p>
                            While we may have different blends of learning preferences, we all do our best learning when
                            we engage our whole brain.
                            We inherently use different parts of our brain to learn different things, and activate
                            different parts of our brains
                            more readily than other parts as we learn. The important thing to remember is that all of
                            our learning experiences should
                            engage our whole brain to give us the best attention, retention, recall and application.
                        </p><br />

                        <nuxt-link to="/contact" class="button">Book a Demo</nuxt-link>
                    </div>

                    <div class="col-6">
                        <img class="side-img lazyload" src="~/assets/learning-fold-image.jpg"
                            alt="Learning with the Whole Brain">
                    </div>
                </div>
            </div>
        </section>

        <section class="whitelabel">
            <div class="container">
                <div class="row flex-center">
                    <div class="col-8">
                        <img class="logo-img" src="~assets/whitelabel-report/learning-styles-whitelabel.png" alt="learning-styles-whitelabel">
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

                        <h5 class="subtitle">Grow Your Coaching Business</h5>
                        <p>
                            With our White-labeled option, you can do more than just use your branding! 25+ years of
                            Research and Development is now yours to customize, market, and sell in a way that
                            works for your business. You have the freedom to do it your way, and charge what you need to
                            for industry-leading technology, assessments, and resources no matter the
                            size of your organization. By partnering with Assessments 24x7, you are working with
                            thousands of other consultants, trainers, coaches and teams around the world to help
                            grow their businesses.
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

                        <h5 class="subtitle">Partner With The Global Leader</h5>
                        <p>
                            For organizations large and small, developing effective hiring and selection practices,
                            onboarding and development programs are critical to promote the identity and
                            culture of your business and ensure a strong, aligned workforce. Whether you are an HR
                            professional, trainer, leader or manager, using assessments helps you to hire
                            smarter, grow sales in a way that creates strong retention in client relationships, resolve
                            conflict before it starts, and offer your employees world-class training
                            curriculum to support their personal and professional growth. With tailored corporate
                            solutions to fit your organization, whether you are small start-up or Fortune
                            500 company, Assessments 24x7 has what your business needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5 class="title">Using Learning Styles with DISC</h5>
                        <p>
                            Through combination assessments, two valuable tools are offered in one report. DISC will
                            support understanding behavior,
                            emotion and communication style and Learning Styles reveals how learning preferences affect
                            the ability to take in new
                            information, process and make it meaningful, and store and retrieve it to apply when needed.
                        </p>
                        <p>
                            This combination of resources provides beneficial insight to help anyone become more
                            intentional with their communication and
                            to advocate for their own learning, ensuring every interaction and learning experience is
                            effective and useful. We offer three
                            DISC and Learning Styles combination reports: the DISC Self, DISC Sales and DISC Leadership.
                        </p><br />

                        <nuxt-link to="/assessments" class="button outline light">More Assessments</nuxt-link>
                        <br /><br /><br /><br /><br /><br />
                    </div>

                    <div class="col-6">
                        <img class="image"
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
                            alt="placeholder">
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible>
            <credits shrm="10" hrci="7" atd="7" icfCore="4" icfRD="13.5" hrciProgramId="582703" />
        </LazyHydrate>

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">Frequently Asked Questions</h5>
                    </div>
                </div><br />

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Why is understanding Learning Styles important?</h6>
                        <p class="answer">
                            The goal with any assessment is to help create understanding and awareness so we can be more
                            intentional to get
                            what we want out of life. With Learning Styles, we can become advocates of our own learning
                            experience, and learn
                            about ways to share information with others in a way that works! By understanding our own
                            learning preferences and
                            the preferences of others, we can ensure we are setting up our learning experiences to
                            support the most effective
                            learning transfer possible. For example, if I know that I am more of a wide-angled learner
                            who will be easily influenced by the environment as I learn, I can create the best situation
                            for me by removing potential distractions (sitting in the front of the room, wearing layered
                            clothing to be able to get warmer or cooler, having a bottle of water, etc.). By
                            acknowledging my learning needs and preparing for them, I can set myself up for learning
                            success.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">How and when should Learning Styles be used?</h6>
                        <p class="answer">
                            In an ideal situation, Learning Styles would be a foundational tool that would come before
                            any other assessment, training or experience because the
                            information in Learning Styles could be beneficial before we take on new information. For
                            many of us though, we’ve not had the opportunity to start
                            with Learning styles, so the sooner the better is a great rule! If you currently don’t know
                            clearly what your learning preferences are, this is for you!
                            <br /><br />
                            Learning Styles can be used in coaching, training, employee development, personal and
                            professional development, sales, service, and more, and in any
                            industry or organization no matter the size. Because the usefulness of learning styles
                            extends beyond just the self to effectively facilitating
                            learning with others, it can make a difference in any circumstances where learning transfer
                            takes place.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">What is the difference in Learning Styles and the traditional VAK (VARK)
                            models?</h6>
                        <p class="answer">
                            Most people are familiar with the traditional Visual, Auditory and Kinesthetic (VAK)
                            learning model. Recently, VAK has been modified to include an “R”
                            for Reading and Writing which have been pulled out as separate learning modality from VAK.
                            Historically, reading and writing were included as a part
                            of VAK (reading being both a visual and auditory - when reading aloud - learning activity,
                            writing being both visual and kinesthetic).
                            <br /><br />
                            It was once thought that each of us had a propensity to V, A or K, but research shows that
                            though we may have a stronger preference for one or two of
                            these methods, our best retention comes by engaging all 3 - seeing it, hearing it, and
                            physically interacting with the new information to make
                            connections in our whole brain!
                            <br /><br />
                            The Learning Styles model used at Assessments 24x7 includes the VAK model in our Step 3 -
                            Relating, as part of the process to link new data to existing
                            data and helping us to make sense of the information we’ve received. VAK allows us to create
                            relationships that we can use to create short- or long-term
                            storage and recall as well.
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
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>

                            <h3>Quick to Complete</h3>
                            <p>
                                With an average completion time of 12-15 minutes, every assessment questionnaire is
                                delivered by email link, subsequently generating a
                                PDF report that is automatically uploaded to the member’s white-label dashboard.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                </path>
                            </svg>

                            <h3>Available Languages</h3>
                            <p>
                                Our internationally accredited Learning Styles assessment is currently available in
                                multiple languages. See our
                                <nuxt-link to="/sample-reports" class="hyperlink light">sample reports</nuxt-link> page
                                for the list of available languages
                                and to view sample results.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>

                            <h3>Additional Learning Styles Reports</h3>
                            <p>
                                Learning Styles is available in a combination report with DISC Self, DISC Sales, and
                                DISC Leadership.
                            </p>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="feature-box">
                            <div class="feature-text">
                                <h3>Also Available In</h3>

                                <div class="languages">
                                    <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                                    <span><img src="~assets/flags/france.svg" alt="French DISC Assessments"> Français</span>
                                    <span><img src="~assets/flags/japan.svg" alt="Japanese DISC Assessments"> 日本語</span>
                                    <span><img src="~assets/flags/brazil.svg" alt="Portugese DISC Assessments"> Português (Brazil)</span>
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
        'footer-fold': () => import('@/components/Footer'),
        'credits': () => import('@/components/Credits')
    },
    head() {
        return {
            title: 'Learning Styles Assessment | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'The Learning Styles questionnaire was developed after extensive research into how people prefer to engage in learning. It aims to help each person understand their own learning style as well as consider the style preferences of others as they share information and help others learn.'
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
            active: 'att',
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
                            "@id": "https://assessments24x7.com/assessments/learning-styles",
                            "name": "Learning Styles"
                        }
                    }
                ]
            }
        }
    },
    async created() {
        const response = await this.$axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=4&filter=tag:learning-styles`);
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
                if (this.active === 'att') { this.active = 'tra'; }
                else if (this.active === 'tra') { this.active = 'rel'; }
                else if (this.active === 'rel') { this.active = 'und'; }
                else { this.active = 'att'; }
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
                background: linear-gradient(150deg, rgba(255, 255, 255, 1) 0%, rgba(245, 247, 255, 1) 100%);

                &.att {
                    left: 41%;
                    top: 1%;

                    &.active {
                        background: linear-gradient(150deg, rgb(181, 69, 255) 0%, rgb(86, 11, 172) 100%);
                        color: #fff;
                    }
                }

                &.tra {
                    left: 80%;
                    top: 41%;

                    &.active {
                        background: linear-gradient(150deg, rgba(46, 136, 255, 1) 0%, rgba(11, 49, 164, 1) 100%);
                        color: #fff;
                    }
                }

                &.rel {
                    left: 41%;
                    top: 80%;

                    &.active {
                        background: linear-gradient(150deg, rgba(255, 82, 66, 1) 0%, rgb(255, 11, 6) 100%);
                        color: #fff;
                    }
                }

                &.und {
                    left: 1%;
                    top: 41%;

                    &.active {
                        background: linear-gradient(150deg, rgba(140, 255, 46, 1) 0%, rgba(59, 164, 11, 1) 100%);
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
    background: linear-gradient(218deg, #b82cff, #540bfb, #b82cff);
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
    background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #b82cff, #540bfb, #b82cff);
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
        margin-top: 30px;
        margin-bottom: -8px;
        border-radius: 20px;
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
                background: #540bfb;
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
    background: linear-gradient(218deg, #b82cff, #540bfb, #b82cff);
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