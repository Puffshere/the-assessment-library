<template>
    <section class="skeleton">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Motivators Trainer Materials</h1>
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
                        These resources are designed to help you with debrief, coaching and your own continued development of your Motivators knowledge. 
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Debrief & Coaching Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators Certified Debrief Guide 6.20.docx" target="_blank" rel="noopener">Motivators Debrief Guide</a>
                            <small>Overview and Guide for what is included in the assessment report</small></td></tr>
                            <tr v-else><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsDebriefGuide.pdf" target="_blank" rel="noopener">Motivators Debrief Guide</a>
                            <small>Overview and Guide for what is included in the assessment report</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsCoachingandQuestions.pdf" target="_blank" rel="noopener">Motivators Coaching and Questions</a>
                            <small>Open ended and purposeful follow-up questions to uncover opportunities and reveal areas for support, including action planning and coaching suggestions.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators Update Nov 2018.docx" target="_blank" rel="noopener">Motivators Update</a>
                            <small>November 2018 - An explanation of updated graphs and report additions to help you navigate, understand and explain the most recent changes in the Motivators report.</small></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Motivators Development Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/ValuesOrigins.pdf" target="_blank" rel="noopener">Values Origins Article</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsAssessmentHistory.pdf" target="_blank" rel="noopener">Values Overview & Motivators History Article</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="http://www.assessmentdownloads.com/mt/training.html" target="_blank" rel="noopener">Motivators Virtual Training</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators Certification Notes 6.15.20.docx" target="_blank" rel="noopener">Certification Notes</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators - Scoring Guide_vs2_6.20.docx" target="_blank" rel="noopener">Motivators Scoring Guide</a>
                            <small>Shares overview of scoring and characteristics of high and low scores in each Motivator</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/AgreementsConflictsCombinations.pdf" target="_blank" rel="noopener">Agreements, Conflicts and Interesting Combinations</a>
                            <small>Describes common agreements, conflicts and interesting combinations of motivators with charts and details</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators Ranges_Standard Deviations Scores.pptx" target="_blank" rel="noopener">Word Matrix Ranges and Standard Deviations</a>
                            <small>Shares Word Matrix scoring ranges that match descriptors, and shares the median and standard deviations for each dimension.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Risk Measurements 6.20.pdf" target="_blank" rel="noopener">Risk Measurements</a>
                            <small>Shows all risk scales for motivators in one document</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MOT Alternative Words_Matrix descriptors 6.20.docx" target="_blank" rel="noopener">Matrix Alternative Words</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Extensions.pdf" target="_blank" rel="noopener">Extensions</a>
                            <small>Short guide to understanding scoring extensions.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/AttitudeIngredients.pdf" target="_blank" rel="noopener">Attitude Ingredients</a>
                            <small>Reveals Identifiers, Dissatisfies/Stressors, Difficulties in relating, Possible Jobs, TV Shows/Magazines, Ideal vacations for each Motivator</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/AestheticAttractor.pdf" target="_blank" rel="noopener">Aesthetic Motivator Overview</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/EconomicAttractor.pdf" target="_blank" rel="noopener">Economic Motivator Overview</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/IndividualisticAttractor.pdf" target="_blank" rel="noopener">Individualistic Motivator Overview</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/PowerAttractor.pdf" target="_blank" rel="noopener">Power Motivator Overview</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/AltruisticAttractor.pdf" target="_blank" rel="noopener">Altruistic Motivator Overview</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/RegulatoryAttractor.pdf" target="_blank" rel="noopener">Regulatory Motivator Overview</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/TheoreticalAttractor.pdf" target="_blank" rel="noopener">Theoretical Motivator Overview</a></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%" v-if="certified">
                        <thead>
                            <tr>
                                <th>Integration & Combination Tools</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/DISC and MOTIVATORS 1 page Combos.docx" target="_blank" rel="noopener">DISC & Motivators Integration - 1 page</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/DISC_MOT 2 page Combos.docx" target="_blank" rel="noopener">DISC & Motivators Integration - 2 page</a></td></tr>
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
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotFGCertified.pdf" target="_blank" rel="noopener">2-Hour Facilitator Guide</a>
                            <small>Step-by-step instructions for facilitating 2-hour workshop</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsWorkshopPPT2hour.pptx" target="_blank" rel="noopener">2-Hour Presentation</a>
                            <small>Overview of Motivators, discussion and activity and report debrief opportunity.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsFG4hour.pdf" target="_blank" rel="noopener">4-Hour Facilitator Guide</a>
                            <small>Step-by-step instructions for facilitating 4-hour workshop</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsWorkshopPPT4hour.pptx" target="_blank" rel="noopener">4-Hour Presentation</a>
                            <small>Motivators, strengths and limitations, discussion and activities, and report debrief opportunity.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MOT Mini Presentation 2020.pptx" target="_blank" rel="noopener">Mini-Motivators Presentation</a>
                            <small>15 to 20 minute overview of Motivators introducing the what and why behind the model and highlighting the main concepts.</small></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%" v-if="certified">
                        <thead>
                            <tr>
                                <th>Video Presentation Files</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsCertifiedDebriefGuide.pdf" target="_blank" rel="noopener">Motivators Debrief Example</a>
                            <small>Password: jseeeva - Motivators Example Debrief Call - Steve Sisler performs an example Debrief call (includes DISC graphs as well). Review Steve’s Sample DISC & Motivators Call.</small></td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/know-disc.png" alt="Activities for Trainers">
                        Activities for Trainers
                    </h2><br/>

                    <p>
                        These resources are designed to help foster application and interaction with groups. There are some Motivators specific activities 
                        and tools and general team building and group engagement resources.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Motivators Specific Exercises</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsWorkshopActivities.pptx" target="_blank" rel="noopener">Motivators Activities for Training Workshops</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators Strengths_Limitations.pptx" target="_blank" rel="noopener">Motivators Strengths and Limitations</a>
                            <small>Reveals some strengths and limitations associated with each Motivator for both High and Low scores to help further understanding and awareness for each dimension.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/MotivatorsAdaptability.pdf" target="_blank" rel="noopener">Motivators Adaptability Guide</a>
                            <small>Questions for each of the 7 Motivator Dimensions to guide your discovery of understanding another person’s values and drivers.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Motivators Wheel_6.20.pptx" target="_blank" rel="noopener">Motivators Wheel</a></td></tr>
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
                        These resources are designed to help you support continued engagement with the Motivators model and assessment resources. We 
                        encourage you to share them as frequently as you can.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Weekly Email Series</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/What are Motivators_EM1_6.20.docx" target="_blank" rel="noopener">What are Motivators?</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Aesthetic Motivator.docx" target="_blank" rel="noopener">The Aesthetic Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Economic Motivator.docx" target="_blank" rel="noopener">The Economic Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Individualistic Motivator.docx" target="_blank" rel="noopener">The Individualistic Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Power Motivator.docx" target="_blank" rel="noopener">The Power Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Altruistic Motivator.docx" target="_blank" rel="noopener">The Altruistic Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Regulatory Motivator.docx" target="_blank" rel="noopener">The Regulatory Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/The Theoretical Motivator.docx" target="_blank" rel="noopener">The Theoretical Motivator</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Agreements_Conflicts EM.docx" target="_blank" rel="noopener">Agreements and Conflicts</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Norms,Intensities,Risks EM.docx" target="_blank" rel="noopener">Norms, Intensities, & Risks</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/Coaching for Motivators EM.docx" target="_blank" rel="noopener">Coaching for Motivators</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/DISCandMotivators EM.docx" target="_blank" rel="noopener">DISC & Motivators</a></td></tr>
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
                            <tr><td><a class="hyperlink" href="/blog" target="_blank" rel="noopener">DISC & Other Assessment Articles</a></td></tr>
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
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/PeerFeedbackForm.pdf" target="_blank" rel="noopener">Peer Feedback Form</a>
                            <small>For providing peer feedback during facilitator/trainer observations</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/FacilitationFeedbackGuide.pdf" target="_blank" rel="noopener">Facilitator Feedback Guide</a>
                            <small>To guide facilitator 1:1 feedback sessions with supervisor</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/CoachingGuideQuestions.pdf" target="_blank" rel="noopener">Coaching Guide Questions</a>
                            <small>Questions to coach/develop facilitators and trainers in a variety of areas including presentation skills, facilitation skills, content awareness, audience management, presence, administration, general coaching.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/SelfFeedbackForm.pdf" target="_blank" rel="noopener">Self-Feedback Form</a>
                            <small>To be used to create self-awareness and growth by review of logistics and self-evaluation of training after live session or while observing recordings</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/motivators/DevelopmentPlan.docx" target="_blank" rel="noopener">Development Plan Sample</a>
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
                if (this.password === 'trainmot2020') {
                    this.unlocked = true;
                    this.validationError = false;
                } else if (this.password === 'motcertified') {
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
                title: 'Motivators Trainer Materials | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The Motivators Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
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