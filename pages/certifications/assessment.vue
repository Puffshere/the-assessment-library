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
                            certification that sets you apart from
                            others in the assessment industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-top: 50px">Learn From The Top Assessment Experts In The Industry</h2>

                    <p>
                        Do you want to use assessments to build better personal and professional relationships?
                    </p>

                    <p>
                        Our assessment certification programs help people become experts at understanding and using
                        assessments. Our training is designed
                        to foster a deeper understanding of the core assessments so that you can discover how each
                        assessment can be used to be more
                        effective in your communication, leadership, and decision-making.
                    </p>

                    <h4>100% Virtual Training. On Your Schedule.</h4>

                    <p>
                        Our assessment certification works with your schedule. Work through the courses online at any
                        time of day or night. Work at your
                        own pace with no time constraints or schedules to worry about. Thinking about a change? Our core
                        assessments can be used in any
                        industry or role, so your certification will benefit you as you move up the ladder, change
                        companies, or even change industries.
                    </p>

                    <p>
                        Click below now to get started on your assessment certification!
                    </p><br />

                    <nuxt-link to="/contact" class="button">Talk to a Specialist</nuxt-link>
                    <nuxt-link to="/assessments" class="button outline">Learn More About
                        Assessments</nuxt-link><br /><br />

                    <h3 style="margin-bottom: -10px; margin-top: 50px;">Become A Certified Assessment Practitioner</h3>
                    <div class="col-6">
                        <ul>
                            <li>Improve relationships with colleagues and clients</li>
                            <li>Gain deeper insights into yourself</li>
                            <li>Enhance your critical thinking skills</li>
                            <li>Ongoing, situational support from an Assessments 24x7 Master Certified Practitioner</li>
                            <li>Receive an assessment & an in-depth, professional debrief by your Master Certified
                                Trainer</li>
                        </ul>
                    </div>

                    <div class="col-6">
                        <ul>
                            <li>Access Certified Trainer Material to use in your coaching/training business, including a
                                Debrief Guide, PowerPoint presentations, and marketing materials</li>
                            <li>Get listed on our International Directory of Certified Practitioners linked to your
                                website</li>
                            <li>Become the in-house expert for your company to offer effective trainings and individual
                                or group debriefs</li>
                            <li>Maximize the effectiveness of your assessment debriefs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div><br /><br />

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 id="disc">DISC Assessment Certification</h2>

                    <div class="col-3">
                        <img class="image" src="~/assets/badges/new/disc-cert-badge-color.png" alt="disc-cert-badge">
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
                        <button style="" class="learn-more-button light-blue" @click="scrollToContactForm">
                            <span>
                                <img src="~/assets/disc-insights/info.png"
                                    style="width: 30px; float: left; margin-right: -16px;" alt="info icon">
                            </span>
                            <span style="margin-left: 10px; margin-bottom: 40px;">Learn More</span>
                        </button>
                    </div>
                </div>


                <div class="col-12">
                    <h2 v-if="selfPaced === false" style="padding-top: 40px">2-Day Group Course Summary:</h2>
                    <h2 v-if="selfPaced === true" style="padding-top: 40px">Self-Paced Course Summary:</h2>
                    <button ref="groupButton" @click="group" @focus="setFocus('groupButton')" class="discBtn focus-btn">
                        <img src="~/assets/people-group.png" style="width: 12%;" alt="people icon">
                        Group
                    </button>
                    <button ref="selfPacedButton" @click="toggleSelfPaced" @focus="setFocus('selfPacedButton')"
                        class="discBtn focus-btn">
                        <img src="~/assets/head-self-paced.png" style="width: 12%;" alt="head icon">
                        Self-Paced
                    </button>
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
            <div style="display: flex; justify-content: center;" class="unlockClass">
                <a style="cursor: pointer; margin-bottom: 60px;" @click="scrollToContactForm">
                    <h2><span style="text-decoration: underline">Unlock Your Potential: </span><span
                            style="color: #00a8ff; text-decoration: underline;">Enroll in DISC Certification
                            Today!</span></h2>
                </a>
            </div>
            <credits :isLight="true" shrm="12" hrci="10" atd="10" icfCore="5.25" icfRD="12.5" hrciProgramId="582706" />

            <div class="row">
                <div class="col-12">
                    <h2 id="motivators">Motivators Assessment Certification</h2>

                    <div class="col-3">
                        <img class="image" src="~/assets/badges/new/mot-cert-badge-color.png" alt="mot-cert-badge">
                    </div>

                    <div class="col-9">
                        <p>
                            The Motivators Assessment Certification Program provides a fresh perspective into human
                            motivation. With this understanding,
                            organizations and workplaces can more effectively motivate employees to increase
                            productivity, strengthen collaboration, and
                            produce exceptional results. The curriculum teaches the seven Dimensions of Motivation
                            individually so that you learn how they
                            affect interactions with others. When you better understand what motivates your workforce –
                            or yourself! – there’s no limit to
                            what you can achieve.
                        </p>
                    </div>
                </div>

                <div class="col-12">
                    <h3 style="margin-bottom: -10px">Course Summary (10 hours):</h3>

                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic mot">Take the Online Motivators Assessment</li>
                            <li class="topic mot">Independent Review of Self-Study Reading and Videos</li>
                            <li class="topic mot">Receive a personal Motivators report debrief from a trainer</li>
                        </ul>
                    </div>

                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic mot">Review the online Resources for Motivators Trainers</li>
                            <li class="topic mot">Motivators Final Knowledge Check</li>
                            <li class="topic mot">Final Certification Call and discuss strategy for use</li>
                        </ul>
                    </div>
                </div>
            </div>

            <credits :isLight="true" shrm="10" hrci="7" atd="7" icfCore="7.5" icfRD="9.25" hrciProgramId="582705" />

            <div class="row">
                <div class="col-12">
                    <h2 id="eiq">Emotional Intelligence Certification</h2>

                    <div class="col-3">
                        <img class="image" src="~/assets/badges/new/eiq-cert-badge-color.png" alt="eiq-cert-badge">
                    </div>

                    <div class="col-9">
                        <p>
                            EIQ Certification provides enhanced clarity on how people perceive and apply their Emotional
                            Intelligence, empowering
                            practitioners with the necessary insights to coach in a way that creates beneficial
                            interpersonal outcomes. Boost your
                            interpersonal conflict management skills as well, and learn to tactfully deal with difficult
                            people during stressful situations.
                        </p>
                    </div>
                </div>

                <div class="col-12">
                    <h3 style="margin-bottom: -10px">Course Summary (10 hours):</h3>

                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic eiq">Take the Online EIQ Assessment</li>
                            <li class="topic eiq">Independent Review of Select Self-Study Documents</li>
                            <li class="topic eiq">Receive a personal report debrief from one of our trainers</li>
                        </ul>
                    </div>

                    <div class="col-6">
                        <ul class="course-summary">
                            <li class="topic eiq">Review the online Resources for EIQ Trainers</li>
                            <li class="topic eiq">EIQ Final Knowledge Check</li>
                            <li class="topic eiq">Final Certification Call and discuss strategy for use</li>
                        </ul>
                    </div>
                </div>
            </div>

            <credits :isLight="true" shrm="12" hrci="7.5" atd="7.5" icfCore="8.25" icfRD="6.75"
                hrciProgramId="582701" />
        </div>
        <contact-form></contact-form>

        <LazyHydrate when-visible><susan-cranston /></LazyHydrate>
        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import ContactForm from '@/components/certifications/AssessmentContactFormFold';


export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'susan-cranston': () => import('@/components/testimonials/SusanCranston'),
        'contact-form': ContactForm,
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
            const element = document.getElementById('certificationsAssessmentContactForm');
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
        this.$refs.groupButton.focus();
        this.lastFocusedButton = 'groupButton';
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    head() {
        return {
            title: 'Assessment Certification | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Gain a competitive edge while you build your resume and portfolio with a professional certification that sets you apart from others in the assessment industry.'
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
        width: 210px;
        height: 40px;
        border-radius: 40px;
        border: none;
        font-size: 18.6px;
        line-height: 30px;
        font-weight: 600;
        cursor: pointer;

        &.light-blue {
            color: white;
            background-color: #2729ff;

            &:hover {
                color: #2729ff;
                background-color: white;
                border: 1px solid #2729ff;
            }
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
</style>
