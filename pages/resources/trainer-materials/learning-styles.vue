<template>
    <section class="skeleton">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Learning Styles Trainer Materials</h1>
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
                        These resources are designed to help you with debrief, coaching and your own continued development of your Learning Styles 
                        knowledge.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Debrief &amp; Coaching Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LSdebriefguideCert.pdf" target="_blank" rel="noopener">Learning Styles Debriefing Guide</nuxt-link>
                            <small>Overview and Guide for what is included in the assessment report</small></td></tr>
                            <tr v-else><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LSdebriefguide.pdf" target="_blank" rel="noopener">Learning Styles Debriefing Guide</nuxt-link>
                            <small>Overview and Guide for what is included in the assessment report</small></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Development Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/VAKdevelopment.pdf" target="_blank" rel="noopener">VAK Development</nuxt-link>
                            <small>Provides suggestions for increasing skills in Visual, Auditory and Kinesthetic learning</small></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/VAKsupport.pdf" target="_blank" rel="noopener">VAK Support Information</nuxt-link>
                            <small>Additional resource information on VAK</small></td></tr>
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
                            <tr><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LS2hour.pdf" target="_blank" rel="noopener">2 Hour Facilitator Guide</nuxt-link>
                            <small>Step-by-step instructions for facilitating 2-hour workshop</small></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LS2hour.pptx" target="_blank" rel="noopener">PowerPoint Presentation 2 Hour Workshop</nuxt-link>
                            <small>Overview of Learning Styles and report debrief opportunity</small></td></tr>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LS4hour.pdf" target="_blank" rel="noopener">4 Hour Facilitator Guide</nuxt-link>
                            <small>Step-by-step instructions for facilitating 4-hour workshop</small></td></tr>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LS4hour.pptx" target="_blank" rel="noopener">PowerPoint Presentation 4 Hour Workshop</nuxt-link>
                            <small>Overview of Learning Styles discussion and activity, and report debrief opportunity</small></td></tr>
                        </tbody>
                    </table>

                    <h2 v-if="certified">
                        <img class="icon" src="~/assets/trainer-materials-icons/powerpoint-slides.png" alt="Training & Presenting Resources">
                        Training & Presenting Resources
                    </h2><br/>

                    <p v-if="certified">
                        These resources are designed for trainers, facilitators, and presenters to help grow facilitation and presentation skills. They are 
                        useful for both new and experienced individuals who wish to continue to develop their skills in this area.
                    </p>

                    <table style="width:100%" v-if="certified">
                        <thead>
                            <tr>
                                <th>Training & Presenting Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/PeerFeedbackForm.pdf" target="_blank" rel="noopener">Peer Feedback Form</nuxt-link>
                            <small>For providing peer feedback during facilitator/trainer observations</small></td></tr>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/FacilitationFeedbackGuide.pdf" target="_blank" rel="noopener">Facilitator Feedback Guide</nuxt-link>
                            <small>To guide facilitator 1:1 feedback sessions with supervisor</small></td></tr>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/CoachingGuideQuestions.pdf" target="_blank" rel="noopener">Coaching Guide Questions</nuxt-link>
                            <small>Questions to coach/develop facilitators and trainers in a variety of areas including presentation skills, facilitation skills, content awareness, audience management, presence, administration, general coaching.</small></td></tr>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/SelfFeedbackForm.pdf" target="_blank" rel="noopener">Self-Feedback Form</nuxt-link>
                            <small>To be used to create self-awareness and growth by review of logistics and self-evaluation of training after live session or while observing recordings</small></td></tr>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/DevelopmentPlan.docx" target="_blank" rel="noopener">Development Plan Sample</nuxt-link>
                            <small>General development form to explore strengths and challenges and create action plans for growth.</small></td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/know-disc.png" alt="Activities for Trainers">
                        Activities for Trainers
                    </h2><br/>

                    <p>
                        These resources are designed to help foster application and interaction with groups. There are some Learning Styles specific 
                        activities and tools and general team building and group engagement resources.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Learning Styles Specific Exercises</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/VAKchart.pdf" target="_blank" rel="noopener">VAK Chart</nuxt-link>
                            <small>For use in 4-hour workshop, a VAK Activity checklist</small></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LSrsb.pdf" target="_blank" rel="noopener">Rapid Skill Building: Learning Styles</nuxt-link>
                            <small>Overview of Learning Styles workbook (aligns directly with recorded vignettes)</small></td></tr>
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

                    <h2 v-if="certified">
                        <img class="icon" src="~/assets/trainer-materials-icons/background-materials.png" alt="Implementation Resources">
                        Implementation Resources
                    </h2><br/>

                    <p v-if="certified">
                        These resources are designed to help you support continued engagement with the Learning Styles model and assessment resources. We 
                        encourage you to share them as frequently as you can.
                    </p>

                    <table style="width:100%" v-if="certified">
                        <thead>
                            <tr>
                                <th>Implementation Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/LS Certified Trainer Materials_Reflection.docx" target="_blank" rel="noopener">Learning Styles Reflection</nuxt-link></td></tr>
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
                            <tr><td><nuxt-link class="hyperlink" to="/learning-styles-trainer-materials/howdowelearn.jpg" target="_blank" rel="noopener">How Do We Learn?</nuxt-link>
                            <small>William Glasser’s pyramid shows simply and clearly the ways in which we engage in learning.</small></td></tr>
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
                            <input type="password" class="form-control" id="password" v-model="password" v-on:keyup.enter="unlock">
                        </div>

                        <p style="margin-top:-10px;font-size:10pt;margin-bottom:30px">
                            Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact our support team &rarr;</a>
                        </p>

                        <button class="button" style="width:100%" @click="unlock">Access the Trainer Materials</button>
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
                if (this.password === 'a24x72022ls') {
                    this.unlocked = true;
                    this.validationError = false;
                } else if (this.password === 'lscertified') {
                //  Tophat
                // } else if (this.password === 'lscertified23') {
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
                title: 'Learning Styles Trainer Materials | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The Learning Styles Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
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