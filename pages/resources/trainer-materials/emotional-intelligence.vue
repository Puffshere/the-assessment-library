<template>
    <section class="skeleton">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Emotional Intelligence Trainer Materials</h1>
                        <p>
                            The Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, 
                            reports and models, and gives quick access to class/workshop materials you may need. Explore these at your leisure - you will find there are many 
                            useful and valuable resources to support your continued development, understanding and application!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container" v-if="unlocked">
            <div class="row">
                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/2-hour-presentation.png" alt="Educational Materials">
                        Educational Materials
                    </h2><br/>

                    <p>
                        These resources are designed to help you with debrief, coaching and your own continued development of your Emotional Intelligence 
                        knowledge.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Debrief &amp; Coaching Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ%20Debrief%20Guide-certified_vs3%209.pdf" target="_blank" rel="noopener">Emotional Intelligence Debrief Guide</a>
                            <small>Overview and Guide to debrief the assessment report</small></td></tr>
                            <tr v-else><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ%20Debrief%20Guide_nc-vs3%209.pdf" target="_blank" rel="noopener">Emotional Intelligence Debrief Guide</a>
                            <small>Overview and Guide to debrief the assessment report</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/Overview%20of%20EIQ-graphic.pdf" target="_blank" rel="noopener">EIQ Graphic</a>
                            <small>Overview of the EIQ model in a single page graphic outlining priorities and impact</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ_DISCIntegration.pdf" target="_blank" rel="noopener">EI and DISC Expressions</a>
                            <small>One-page document showing DISC styles and corresponding expression for high and low EIQ</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ_PlatRule%20Integration.pdf" target="_blank" rel="noopener">EI and Platinum Rule Expressions</a>
                            <small>One-page document showing Platinum Rule and corresponding expression for high and low EIQ</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EmotionCharts.pdf" target="_blank" rel="noopener">Emotion Charts</a>
                            <small>a single PDF document including:
Pg 1. Feelings Word Vocabulary - A list of intensities for the 5 common emotions: Happy, Sad, Angry, Scared and Confused. These are listed by strong, mild, and weak emotions.
Pg 2. Six Families of Emotions - A list of 60 emotions separated into categories to help broaden our emotional understanding and language.</small></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>EIQ Development Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/MM%20Manuscript.pdf" target="_blank" rel="noopener">Mind Matters Manuscript</a>
                            <small>The foundational manuscript by Robert Jerus underscoring the details and supporting the uses of the EIQ-2 assessment</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ_Understanding%20Emotional%20Intelligence.pdf" target="_blank" rel="noopener">Understanding Emotional Intelligence</a>
                            <small>A short article introduction to Emotional Intelligence</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ_Understanding%20the%20Emotions_Feelings.pdf" target="_blank" rel="noopener">Understanding Emotions and Feelings</a>
                            <small>A short article discussing emotions and feelings</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ_Understanding%20the%20Brain.pdf" target="_blank" rel="noopener">Understanding the Brain</a>
                            <small>A short article introduction to the mechanics of the brain and how it relates to EIQ</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIArticle.pdf" target="_blank" rel="noopener">Critical Skills for the Future Workforce</a>
                            <small>Bill Benjamin examines how EI is becoming the key differentiator in achieving excellence in individual and organizational engagement, product innovation, and customer experience.</small></td></tr>
                        </tbody>
                    </table>

                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/presenting-resources.png" alt="Presentation Resources">
                        Presentation Resources
                    </h2><br/>

                    <p>
                        These resources are designed to help you provide training sessions and workshops of varying lengths to different audiences with a 
                        variety of needs. We encourage you to customize and tailor these resources to fit your training needs.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Training Presentations</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ2Hour.pdf" target="_blank" rel="noopener">2-Hour Facilitator Guide</a>
                            <small>Step-by-step instructions for facilitating 2-hour workshop</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ2HourPres.pptx" target="_blank" rel="noopener">2-Hour Presentation</a>
                            <small>Overview of Emotional Intelligence and report debrief opportunity</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ%202%20hour_%20Agenda.docx" target="_blank" rel="noopener">2-Hour Agenda for Presentation Workshop</a>
                            <small>Overview of timeline for presentation</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ4Hour.pdf" target="_blank" rel="noopener">4-Hour Facilitator Guide</a>
                            <small>Step-by-step instructions for facilitating 4-hour workshop</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ4HourPres.pptx" target="_blank" rel="noopener">4-Hour Presentation</a>
                            <small>Overview of Emotional Intelligence and report debrief opportunity</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQSageAdviceObservations.pptx" target="_blank" rel="noopener">EIQ Sage Advice and Observations</a>
                            <small>A series of PPT memorable and meaningful quotes from well-recognized people</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/DISC%20EIQ%20slide.pptx" target="_blank" rel="noopener">EI and DISC Expressions PPT slide</a>
                            <small>Single PowerPoint Slide showing DISC styles and corresponding expression for high and low EIQ</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/DISC%20EIQ_integration.pptx" target="_blank" rel="noopener">Emotional Intelligence and DISC Integration PowerPoint</a>
                            <small>PowerPoint deck with integrations of EIQ and DISC</small></td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/know-disc.png" alt="Activities for Trainers">
                        Activities for Trainers
                    </h2><br/>

                    <p>
                        These resources are designed to help foster application and interaction with groups. There are some EIQ specific activities and 
                        tools and general team building and group engagement resources.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>EIQ Specific Exercises</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQActivities.pdf" target="_blank" rel="noopener">EIQ Workshop Activities</a>
                            <small>Group activities to bring engagement and movement in EIQ sessions.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQQuotes.pdf" target="_blank" rel="noopener">EIQ Quote List</a>
                            <small>A list of popular EIQ quotes for reflection and discussion</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQWordSearch.pdf" target="_blank" rel="noopener">EIQ Word Search</a>
                            <small>A simple word search for classroom activity use</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/Rapid%20Skill%20Builder%20EMOTIONAL%20INTELLIGENCE.pdf" target="_blank" rel="noopener">Emotional Intelligence Rapid Skill Builder</a>
                            <small>Optional activity for 4-hour workshop, or individual development use</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ_Reflection_brain_emotions.pdf" target="_blank" rel="noopener">EIQ Reflection</a>
                            <small>A reflection worksheet corresponding to the Understand the Brain and Understanding Emotions and Feelings articles</small></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>General Group Exercises</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/40icebreakers.pdf" target="_blank" rel="noopener">40 Icebreakers for Small Groups</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/LostOnTheMoonExercise.pdf" target="_blank" rel="noopener">Lost on the Moon Exercise</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/LostatSeaExercise.pdf" target="_blank" rel="noopener">Lost at Sea Exercise</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/group-exercises/PaperTowerExercise.pdf" target="_blank" rel="noopener">Paper Tower Exercise</a></td></tr>
                        </tbody>
                    </table>

                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/background-materials.png" alt="Implementation Resources">
                        Implementation Resources
                    </h2><br/>

                    <p>
                        These resources are designed to help you support continued engagement with the EIQ model and assessment resources. We encourage you 
                        to share them as frequently as you can.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>General Group Exercises</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/52WaystoImproveEIQ.pdf" target="_blank" rel="noopener">52 Ways to Improve EIQ</a>
                            <small>A simple list of ways to continue to improve EIQ, arranged by the 4 quotients</small></td></tr>
                        </tbody>
                    </table>

                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/debrief-guide.png" alt="DISC Debrief Resources">
                        Other Materials
                    </h2><br/>

                    <p>
                        These resources are designed to further enhance your learning journey. Some of them are historical versions of resources previously 
                        used and others are from other sources that we found helpful or interesting.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Other Materials</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/EIQ%20Resources_Web_Books.docx" target="_blank" rel="noopener">EIQ Resource List</a>
                            <small>A comprehensive list of additional web resources, books and articles to learn more about EIQ</small></td></tr>
                        </tbody>
                    </table>

                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/powerpoint-slides.png" alt="Training & Presenting Resources">
                        Training & Presenting Resources
                    </h2><br/>

                    <p>
                        These resources are designed for trainers, facilitators, and presenters to help grow facilitation and presentation skills. They are 
                        useful for both new and experienced individuals who wish to continue to develop their skills in this area.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Training & Presenting Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/PeerFeedbackForm.pdf" target="_blank" rel="noopener">Peer Feedback Form</a>
                            <small>For providing peer feedback during facilitator/trainer observations</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/FacilitationFeedbackGuide.pdf" target="_blank" rel="noopener">Facilitator Feedback Guide</a>
                            <small>To guide facilitator 1:1 feedback sessions with supervisor</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/CoachingGuideQuestions.pdf" target="_blank" rel="noopener">Coaching Guide Questions</a>
                            <small>Questions to coach/develop facilitators and trainers in a variety of areas including presentation skills, facilitation skills, content awareness, audience management, presence, administration, general coaching.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/SelfFeedbackForm.pdf" target="_blank" rel="noopener">Self-Feedback Form</a>
                            <small>To be used to create self-awareness and growth by review of logistics and self-evaluation of training after live session or while observing recordings</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/eiq/DevelopmentPlan.docx" target="_blank" rel="noopener">Development Plan Sample</a>
                            <small>General development form to explore strengths and challenges and create action plans for growth.</small></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="container" v-else>
            <div class="row">
                <div class="col-12">
                    <div class="password-prompt">
                        <div class="info">
                            <h3>This resource is password protected</h3>
                            <p>
                                These trainer material resources are only available for Assessments 24x7 account holders. Please use the password provided to you in your Resource Center.
                            </p>
                        </div>

                        <div v-if="validationError" class="error">
                            <p>
                                The password you have entered is invalid. Please try again.
                            </p>
                        </div>
                        
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password">
                        </div>

                        <p style="margin-top:-10px;font-size:10pt;margin-bottom:30px">
                            Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact our support team &rarr;</a>
                        </p>

                        <button class="button" style="width:100%" @click="unlock">Authenticate</button>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer
        },
        data() {
            return {
                unlocked: false,
                password: '',
                certified: false,
                validationError: false
            }
        },
        methods: {
            unlock() {
                if (this.password === 'a24x7eiq2021') {
                    this.unlocked = true;
                    this.validationError = false;
                } else if (this.password === 'eiqcertified') {
                    this.unlocked = true;
                    this.certified = true;
                    this.validationError = false;
                } else {
                    this.validationError = true;
                    this.password = '';
                }
            }
        },
        head() {
            return {
                title: 'EIQ Trainer Materials | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The EIQ Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skeleton {
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

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        h2 {
            font-size: 20pt;
            line-height: 24pt;
            margin-bottom: -20px;
        }

        .icon {
            width: 60px;
            vertical-align: text-bottom;
        }

        .password-prompt {
            width: 100%;
            max-width: 500px;
            padding: 20px;
            margin: 60px auto;
            display: block;

            .info {
                background: rgba(255,189,7,.2);
                padding: 20px;
                border-radius: 10px;
                border: 1px solid rgba(255,189,7,.3);
                margin-bottom: 18px;

                h3 {
                    margin: 0 0 5px;
                }

                p {
                    margin: 0;
                    font-size: 11pt;
                }
            }

            .error {
                background: rgba(255,0,0,.2);
                padding: 20px;
                border-radius: 10px;
                border: 1px solid rgba(255,0,0,.3);
                margin-bottom: 18px;

                p {
                    margin: 0;
                    font-size: 11pt;
                }
            }
        }

        table {
            border-collapse: collapse;
            margin: 30px 0 60px;
            text-align: left;

            thead {
                background: #1e222d;
                color: #fff;

                th {
                    border: 1px solid #58617d;
                }
            }

            tbody {
                tr {
                    td {
                        border: 1px solid #ddd;

                        small {
                            display: block;
                        }

                        a {
                            font-weight: 700;
                            color: #1e222d;
                        }
                    }

                    &:nth-child(even) {
                        background-color: #f5f5f5;
                    }
                }
            }

            td, th {
                padding: 8px;
            }
        }
    }
</style>