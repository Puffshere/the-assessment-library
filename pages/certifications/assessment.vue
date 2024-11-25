<template>
    <section class="assessment-certification">
        <main-nav active="training" />
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessment Certification</h1>
                        <p>
                            Gain a competitive edge while you build your resume and portfolio with a professional
                            certification <br />that sets you apart from
                            others in the assessment industry.
                        </p>
                        <div style="margin-top: 40px; margin-bottom: -20px;">
                            <a href="#fold5"><span
                                    style="color: white; font-size: 16px; text-decoration: underline; cursor: pointer;"><strong>View
                                        Assessment Certifications</strong></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="text-align: center;">What is Assessment Certification?</h2>
                    <p style="text-align: center;">An assessment certification is a valuable credential that verifies
                        knowledge, skills, and expertise. It serves as a reliable indicator of proficiency for employers
                        and clients. Holding
                        an assessment certification can open up new job opportunities and career <br />
                        advancements.</p>
                    <div class="badge-container"
                        style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; align-items: center; margin-top: 30px;">
                        <div style="text-align: center;">
                            <a href="#fold7" style="cursor: pointer;"><img class="image" style="max-width: 220px;"
                                    src="/images/motivators-cert-badge.png" alt="Motivators Badge"></a>

                        </div>
                        <div style="text-align: center;">
                            <a href="#fold5" style="cursor: pointer;"><img class="image" style="max-width: 220px;"
                                    src="/images/disc-cert-badge.png" alt="DISC Badge"></a>

                        </div>
                        <div style="text-align: center;">
                            <a href="#fold8" style="cursor: pointer;"><img class="image" style="max-width: 220px;"
                                    src="/images/eiq-cert-badge.png" alt="EIQ Badge"></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-top: 50px">Learn From The Top Assessment Experts In The Industry</h2>
                    <p>
                        Do you want to elevate your professional impact through the use of assessments?
                        Our certification programs are designed by top industry experts to equip professionals with the
                        skills to utilize assessments effectively. Gain deep insight into our scientifically validated
                        tools and learn how to enhance communication, leadership, and decision-making within
                        organizations.
                    </p>
                    <h4>100% Virtual Training.</h4>
                    <p>
                        Our certification programs are fully online, offering both self-paced courses for maximum
                        flexibility and live, online group sessions for a more structured learning experience. Whether
                        you prefer to learn at your own pace or engage in scheduled group training, our programs provide
                        the convenience and adaptability to fit your professional needs.
                    </p>
                    <p>Click below to get started on your assessment certification!</p><br />
                    <nuxt-link to="/contact" class="button">Talk to a Specialist</nuxt-link>
                    <nuxt-link to="/assessments" class="button outline">Learn More About
                        Assessments</nuxt-link><br /><br />
                    <h3 style="margin-bottom: -10px; margin-top: 50px;">Become A Certified Assessment
                        Practitioner</h3>
                    <div class="col-6">
                        <ul>
                            <li>Improve relationships with colleagues and clients</li>
                            <li>Gain deeper insight into yourself</li>
                            <li>Enhance your critical thinking skills</li>
                            <li>Ongoing, situational support from an Assessments 24x7 Master Certified Practitioner</li>
                            <li>Enhance your online presence with your profile on our <a
                                    href="/certifications/directory/coaches" class="hyperlink">International Directory
                                    of
                                    Certified Practitioners</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul>
                            <li>Full access to our Certified Trainer Materials, including a Debrief Guide, PowerPoint
                                presentations, and marketing materials</li>
                            <li>Become the in-house expert for your company to offer effective trainings and individual
                                or group debriefs</li>
                            <li>Maximize the effectiveness of your assessment debriefs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div><br /><br />

        <div class="container" id="certification">
            <p style="text-align: center; font-size: 32px; font-weight: 700; margin-top: 20px; margin-bottom: 0px;">Our
                Assessment Certifications Programs</p>
            <div class="row">
                <div class="col-12" id="fold5">
                    <h2>DISC Assessment Certification</h2>
                    <div class="col-3">
                        <img class="image" src="/images/disc-cert-badge.png" alt="disc-cert-badge">
                    </div>
                    <div class="col-9">
                        <p>
                            Do you want to significantly improve your understanding of DISC and your ability to debrief
                            DISC reports? Have you ever struggled to figure out how to use the assessments for different
                            client needs? Answer those questions and more with Assessments 24x7's DISC Certification
                            program. This is an exceptional investment for every coach, HR specialist, and leadership
                            development professional. DISC Certification will give you the knowledge to debrief reports
                            without hesitation - which means even more satisfied clients for you!
                        </p>
                        <p style="margin-bottom: 30px;">
                            Click below to get started on your assessment certification!
                        </p>
                        <button style="" class="button" @click="scrollToContactForm">
                            Get Started
                        </button>
                    </div>
                </div>
                <div class="col-12">
                    <h2 v-if="selfPaced === false" style="padding-top: 10px; margin-bottom: -5px;">2-Day Group Course
                        Summary:</h2>
                    <h2 v-if="selfPaced === true" style="padding-top: 10px;">Self-Paced Course Summary:</h2>
                    <!-- <button v-if="selfPaced === false" ref="groupButton" @click="group" class="discBtn"
                        style="background-color: #272bff;">
                        <img src="~/assets/people-group.png" style="width: 12%;" alt="people icon"> Group
                    </button> -->
                    <!-- <button v-else ref="groupButton" @click="group" class="discBtn">
                        <img src="~/assets/people-group.png" style="width: 12%;" alt="people icon"> Group
                    </button> -->
                    <!-- <button ref="selfPacedButton" @click="toggleSelfPaced" class="discBtn">
                        <img src="~/assets/head-self-paced.png" style="width: 12%;" alt="head icon"> Self-Paced
                    </button> -->
                </div>
                <div v-if="selfPaced === false" class="col-12">
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic disc">Choose a two-day session that works for you</li>
                            <li class="topic disc">Take the online DISC assessment</li>
                            <li class="topic disc">Attend the two-day session (4 hours per day)</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic disc">Small group practice with trainer guidance</li>
                            <li class="topic disc">Receive access to the DISC Trainer Materials library</li>
                            <li class="topic disc">Fully certified after workshop completion</li>
                        </ul>
                    </div>
                </div>
                <div v-else class="col-12">
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic disc">Take the online DISC assessment</li>
                            <li class="topic disc">Complete online virtual training in short video segments</li>
                            <li class="topic disc">Review your DISC assessment as you learn</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic disc">Attend a live debrief with an A24x7 trainer</li>
                            <li class="topic disc">Receive access to the DISC Trainer Materials library</li>
                            <li class="topic disc">Fully certified after passing Knowledge Checks</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 style="text-align: left; margin-left: 20px; margin-top: 10px;">Upcoming 2-Day Group Course Dates</h2>

            <div style="display: flex; align-items: center; justify-content: flex-start; gap: 40px; margin-left: 20px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Certifications/Calendar+copy+1.png"
                        alt="Calendar Icon" style="width: 30px; height: 30px;">
                    <span style="font-size: 20px;">December 4 & 5</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Certifications/Calendar+copy+1.png"
                        alt="Calendar Icon" style="width: 30px; height: 30px;">
                    <span style="font-size: 20px;">January 15 & 16</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Certifications/Calendar+copy+1.png"
                        alt="Calendar Icon" style="width: 30px; height: 30px;">
                    <span style="font-size: 20px;">February 12 & 13</span>
                </div>
            </div>

            <p style="margin-left: 20px; font-size: 20px; margin-bottom: 50px;">2 half-days; 4 hours/day <span
                    style="font-weight: 900;">|</span> Zoom only; computer
                required</p>

            <credits :isLight="true" shrm="12" hrci="10" atd="10" icfCore="5.25" icfRD="12.5" hrciProgramId="582706" />

            <div class="row">
                <div class="col-12" id="fold7">
                    <h2 id="motivators">Motivators Assessment Certification</h2>
                    <div class="col-3">
                        <img class="image" src="/images/motivators-cert-badge.png" alt="mot-cert-badge">
                    </div>
                    <div class="col-9">
                        <p>
                            The Motivators Assessment Certification Program provides a fresh perspective into human
                            motivation. With this understanding, organizations and workplaces can more effectively
                            motivate employees to increase productivity, strengthen collaboration, and produce
                            exceptional results. The curriculum teaches the seven Dimensions of Motivation individually
                            so that you learn how they affect interactions with others. When you better understand what
                            motivates your workforce – or yourself! – there’s no limit to what you can achieve.
                        </p>
                    </div>
                </div>
                <div class="col-12">
                    <h3 style="margin-bottom: -10px">Course Summary (10 hours):</h3>
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic mot">Take the online Motivators assessment</li>
                            <li class="topic mot">Independent review of self-study reading and videos</li>
                            <li class="topic mot">Motivators report debrief from a master certified trainer</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic mot">Review the online resources for Motivators trainers</li>
                            <li class="topic mot">Motivators final knowledge check</li>
                            <li class="topic mot">Final certification call and discuss strategy for use</li>
                        </ul>
                    </div>
                </div>
            </div>

            <credits :isLight="true" shrm="10" hrci="7" atd="7" icfCore="7.5" icfRD="9.25" hrciProgramId="582705" />

            <div class="row">
                <div class="col-12" id="fold8">
                    <h2 id="eiq">Emotional Intelligence Certification</h2>
                    <div class="col-3">
                        <img class="image" src="/images/eiq-cert-badge.png" alt="eiq-cert-badge">
                    </div>
                    <div class="col-9">
                        <p>
                            EIQ Certification provides enhanced clarity on how people perceive and apply their Emotional
                            Intelligence, empowering practitioners with the necessary insights to coach in a way that
                            creates beneficial interpersonal outcomes. Boost your interpersonal conflict management
                            skills as well, and learn to tactfully deal with difficult people during stressful
                            situations.
                        </p>
                    </div>
                </div>
                <div class="col-12">
                    <h3 style="margin-bottom: -10px">Course Summary (10 hours):</h3>
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic eiq">Take the online EIQ assessment</li>
                            <li class="topic eiq">Independent review of select self-study documents</li>
                            <li class="topic eiq">EIQ report debrief from a master certified trainer</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic eiq">Review the online resources for eiq trainers</li>
                            <li class="topic eiq">EIQ final knowledge check</li>
                            <li class="topic eiq">Final certification call and discuss strategy for use</li>
                        </ul>
                    </div>
                </div>
            </div>

            <credits :isLight="true" shrm="12" hrci="7.5" atd="7.5" icfCore="8.25" icfRD="6.75"
                hrciProgramId="582701" />

        </div>

        <div class="container" style="margin-top: -60px;">
            <div class="row">
                <div class="col-12" style="text-align: center;">
                    <h3>
                        Certifying with Assessments 24x7
                    </h3>
                    <p>An assessment certification from Assessments 24x7 demonstrates your expertise with specific
                        tools, backed by scientifically validated methodologies. It proves you have completed
                        comprehensive training and can apply these tools effectively, making you a valuable asset to
                        employers and clients. Our programs offer practical knowledge that builds your confidence in
                        using assessments, ensuring your certification is a powerful addition to your professional
                        toolkit.</p>
                    <button style="margin-top: 20px;" class="button" @click="scrollToContactForm">
                        Get Started
                    </button>
                </div>
            </div>
        </div>

        <div
            style="background: linear-gradient(180deg, #0033C5 0%, #077FF8 100%); color: white; padding: 40px 20px; margin-top: 60px;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 style="text-align: center; margin-bottom: 40px;">5 Advantages of Assessment Certification
                        </h3>
                        <p><strong>Credibility and Recognition</strong></p>
                        <p>Assessment certifications prove an individual's knowledge and skills. Holding a certification
                            from Assessments 24x7 sets you apart, showcasing your expertise and attracting clients,
                            partners, and career opportunities.</p>
                        <p><strong>Skill Validation</strong></p>
                        <p>Our structured programs provide industry-leading insights and hands-on exercises, ensuring
                            you
                            gain applicable skills that are immediately valuable in your field.</p>
                        <p><strong>Career Advancement</strong></p>
                        <p>In competitive job markets, assessment certifications set you apart from other candidates.
                            They
                            demonstrate your commitment to learning and professional growth. Certification enhances your
                            professional profile, demonstrating a commitment to continuous learning and making you a
                            standout candidate in competitive job markets.</p>
                        <p><strong>Competitive Advantage</strong></p>
                        <p>Certifications from Assessments 24x7 equip you with industry-recognized skills and
                            knowledge,
                            allowing you to apply best practices and cutting-edge methodologies within your
                            organization. By
                            mastering our assessments, you can deliver more impactful coaching, training, and HR
                            solutions,
                            positioning yourself as a valuable asset to your team and clients.</p>
                        <p><strong>Networking Opportunities</strong></p>
                        <p>Our certification programs connect you with a network of like-minded professionals, industry
                            experts, and mentors, fostering valuable collaborations and partnerships. These programs
                            offer
                            opportunities for collaboration, partnership, and access to valuable resources.</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
                    <button style="margin-top: 20px;" class="learn-more-button" @click="scrollToContactForm">
                        Book Demo
                    </button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-5">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Certifications/Fold+11+-+3+Reports.png"
                            alt="image of sample reports" style="width: 80%; margin-top: 10px;">
                    </div>
                    <div class="col-7" style="text-align: right;">
                        <h3 style="margin-top: 70px;">
                            Learn to Administer and Apply Assessments
                        </h3>
                        <p>
                            Our certification courses teach you to use and understand assessments. You will gain
                            practical skills for your work. These certifications increase your expertise and confidence
                            in assessment tools. They improve communication, leadership, and team dynamics.
                            Certification is a valuable asset that distinguishes you in your field.
                        </p>
                        <button style="margin-top: 20px; margin-right: 0px; margin-bottom: 40px;" class="button"
                            @click="scrollToContactForm">
                            Meet with Expert
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><susan-cranston /></LazyHydrate>

        <div class="container workshop">
            <div class="row">
                <div class="col-12" style="display: flex; align-items: center; justify-content: space-between;">
                    <div class="col-4">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Certifications/Fold+13+-+Woman+at+computer.png"
                            alt="image of woman looking at laptop" style="width: 100%; margin-top: 80px;">
                    </div>
                    <div class="col-8" style="text-align: right; padding-left: 40px;">
                        <h3 style="margin-top: 40px; text-align: right;">
                            Certification Workshop Summary
                        </h3>
                        <p style="text-align: right;">
                            Our certification workshops are engaging and informative. You will learn how to use
                            assessments in real-world scenarios. Our expert instructors provide hands-on training. Get
                            immediate feedback to improve your skills. After successful completion, you will earn a
                            certificate that validates your expertise and can advance your career. Join us to strengthen
                            your abilities and gain recognition in your field.
                        </p>
                        <div style="margin-top: 40px; display: flex; justify-content: flex-end; gap: 20px;"
                            class="buttonGroup">
                            <button style="padding: 10px 20px; max-height: 50px; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center;
                                margin-right: 10px; min-width: 270px;" class="button" @click="scrollToCertification">
                                View Assessment Certifications
                            </button>
                            <button style="padding: 10px 20px; max-height: 50px; margin-right: 0px;" class="button"
                                @click="scrollToContactForm">
                                Meet With an Expert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            style="background: linear-gradient(180deg, #0033C5 0%, #077FF8 100%); color: white; padding: 40px 20px; margin-top: 60px; margin-bottom: 100px;">
            <div class="container">
                <div class="row">
                    <div class="col-12" style="text-align: center;">
                        <h3 style="margin-bottom: 40px;">Choosing the Assessments 24x7 Assessment
                            Certification Program
                        </h3>
                        <p>Choosing the Assessments 24x7 Assessment Certification Program is a smart decision for your
                            future. Our programs offer practical training and real-world application. You will learn
                            from experts in the field. Our hands-on approach ensures that you gain useful skills.</p>
                        <p>The certification you earn will be a valuable credential that demonstrates your commitment to
                            professional development. Start your journey with us today and stand out to both employers
                            and clients.</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
                    <button style="margin-top: 20px;" class="learn-more-button2" @click="scrollToContactForm">
                        Meet With an Expert
                    </button>
                </div>
            </div>
        </div>

        <section class="contactFormSection" id="contactForm">
            <div class="container-wrapper">
                <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 60px;">
                    <div class="row">
                        <h2>
                            Ready to start your Certification Journey?<br />
                            <span style="color: #00a8ff;">You're in the right place.</span>
                        </h2>
                        <div class="col-12 justify-content-center">
                            <div class="form-container">
                                <contact-form style="background: white;" />
                            </div>
                        </div>
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
                </div><br />

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">What are the requirements for enrolling in an assessment certification
                            program?</h6>
                        <p class="answer">
                            To enroll in an assessment certification course, <a href="#contactForm"
                                class="hyperlink">contact us here</a>.
                            For live, online
                            group sessions, you'll also need to attend the scheduled sessions. Our programs are designed
                            to be accessible, whether you're participating in self-paced courses or live group sessions.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">How long does it take to complete assessment certification?</h6>
                        <p class="answer">
                            The time to complete an assessment certification program differs and depends on whether
                            you've chosen the self-paced program or the group course. Self-paced programs typically take
                            10-15 hours over the course of a few weeks, depending on your schedule. The group course is
                            complete after two 4-hour sessions.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">What support is available to me after I complete my certification?</h6>
                        <p class="answer">
                            Expert support is available after you complete your certification. Access our large library
                            of online resources and join our online community to connect with other certified
                            professionals for advice and to share best practices. Our team is ready to help with any
                            questions.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'susan-cranston': () => import('@/components/testimonials/SusanCranston'),
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': () => import('@/components/Footer'),
        'credits': () => import('@/components/Credits')
    },
    data() {
        return {
            selfPaced: false,
            lastFocusedButton: null,
            structuredDataBreadcrumbs: {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": "1",
                        "item": {
                            "@id": "https://assessments24x7.com/certifications",
                            "name": "Certifications"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": "2",
                        "item": {
                            "@id": "https://assessments24x7.com/certifications/assessment",
                            "name": "Assessment Certification"
                        }
                    }
                ]
            }
        }
    },
    watch: {
        selfPaced(newValue) {
            if (newValue) {
                this.$refs.selfPacedButton.focus();
            } else {
                this.$refs.groupButton.focus();
            }
        }
    },
    methods: {
        scrollToCertification() {
            const element = document.getElementById('certification');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        group() {
            this.selfPaced = false;
        },
        toggleSelfPaced() {
            this.selfPaced = true;
        },
        setFocus(button) {
            this.lastFocusedButton = button;
        },
        scrollToContactForm(event) {
            const element = document.getElementById('contactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        handleClickOutside(event) {
            if (
                this.$refs.groupButton &&
                !this.$refs.groupButton.contains(event.target) &&
                this.$refs.selfPacedButton &&
                !this.$refs.selfPacedButton.contains(event.target)
            ) {
                if (this.lastFocusedButton) {
                    this.$refs[this.lastFocusedButton].focus();
                }
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    head() {
        return {
            title: 'Assessment Certification | Assessment Training Certification',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Earn your assessment certification online! Enrich your resume with our online assessment certification and gain a competitive edge in the assessment industry.'
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
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.assessment-certification {
    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 70px 0;
        margin-bottom: 30px;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }
    }

    .learn-more-button {
        border-radius: 4px;
        width: 160px;
        height: 40px;
        border: none;
        font-size: 15px;
        line-height: 30px;
        font-weight: 600;
        cursor: pointer;
        background-color: white;
        color: #2729ff;

        &:hover {
            color: white;
            background-color: #2729ff;
        }
    }

    .learn-more-button2 {
        border-radius: 4px;
        width: 180px;
        height: 40px;
        border: none;
        font-size: 15px;
        line-height: 30px;
        font-weight: 600;
        cursor: pointer;
        background-color: white;
        color: #2729ff;

        &:hover {
            color: white;
            background-color: #2729ff;
        }
    }

    .unlockClass {
        a:hover h2 {
            text-shadow: 2px 10px 10px rgba(97, 97, 97, 0.349);
            border-radius: 5px;
        }
    }

    .image {
        height: 220px;
        margin: 0 auto;
        display: block;
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    h3 {
        font-size: 24px;
    }

    .discBtn {
        color: white;
        background-color: #0786f97d;
        padding: 8px;
        border: none;
        border-radius: 20px;
        font-size: 18px;
        font-weight: 700;
        max-width: 200px;
        margin-right: 20px;
        cursor: pointer;

        &:hover {
            background-color: #272bff;
            border: none;
        }

        &:focus {
            background-color: #2729ff;
            border: none;
        }

        &.disabled {
            background-color: #d3d3d3;
            cursor: not-allowed;
        }
    }

    .focus-btn {
        outline: none;
    }

    .focus-btn:focus {
        outline: none;
    }

    .course-summary {
        list-style: none;
        padding-left: 0;

        .topic {
            padding: 10px;
            background: #f7f7f7;
            margin-bottom: 6px;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;

            &.disc {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }

            &.mot {
                background: linear-gradient(268deg, #ffa518, #fc542a);
            }

            &.hvp {
                background: linear-gradient(268deg, #8ef03a, #11bd04);
            }

            &.eiq {
                background: linear-gradient(268deg, #fa4ca6, #ff2f4c);
            }

            &.learning {
                background: linear-gradient(268deg, #b82cff, #540bfb);
            }

            &.pgi {
                background: linear-gradient(268deg, #666, #333);
            }
        }
    }
}

.contactFormSection {
    background-size: cover;
    background-position: center;
    min-height: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .container-wrapper {
        position: relative;
        width: 100%;
    }

    h2 {
        margin-top: 0px;
        font-weight: 700;
        text-align: center;
    }

    .form-container {
        width: 100%;
        max-width: 800px;
        padding: 20px;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .col-12 {
        display: flex;
        justify-content: center;
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
        font-size: 18px;
        margin: 0;
    }

    .answer {
        margin-bottom: 18px;
    }
}

@media (max-width: 768px) {
    div[style*="display: flex"] {
        flex-direction: column;
        align-items: flex-start;
    }

    .buttonGroup {
        .button {
            min-width: 320px !important;
            justify-content: center !important;
        }
    }

    .workshop {

        .col-8,
        h3 {
            text-align: center !important;
            padding-left: 0px !important;
        }

        p {
            text-align: left !important;
        }
    }
}
</style>