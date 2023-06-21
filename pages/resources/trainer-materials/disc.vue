<template>
    <section class="skeleton">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Trainer Materials</h1>
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
            <div v-if="!certified" class="row">
                <div class="col-12">
                    <div class="non-certified">
                        <h4>Non-Certified Training Materials</h4>

                        <p>
                            This is an abridged library of some DISC resources to support our clients using DISC in an introductory capacity. A comprehensive library of DISC 
                            training and resources is available for our certified DISC Practitioners and Account Plus clients. If you are interested in accessing our full library, 
                            please contact us for information on certification or an Account Plus.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/2-hour-presentation.png" alt="Educational Materials">
                        Educational Materials
                    </h2><br/>

                    <p>
                        These resources are designed to help you with debrief, coaching and your own continued development of your DISC knowledge. We 
                        encourage you to share the KnowDISC videos and DISC Specific Appendices as desired to help others understand DISC and its 
                        application.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Debrief & Coaching Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCDebriefingGuideCert.pdf" target="_blank" rel="noopener">DISC Debrief Guide</a>
                            <small>Overview and Guide for what is included on each page of our 3 Part DISC assessment report. You can confirm your version of the report by checking the table of contents.</small></td></tr>
                            <tr v-else><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCDebriefingGuide3.pdf" target="_blank" rel="noopener">DISC Debrief Guide</a>
                            <small>Overview and Guide for what is included on each page of our DISC assessment report. </small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCReportHighlights3.pdf" target="_blank" rel="noopener">DISC Report Highlights</a>
                            <small>When there is not the opportunity to debrief the entire report page by page, which pages should be focused on? This outlines the most significant pages needing debrief support. This is designed to be used with the DISC Debrief Guide for the 3 Part report which can be confirmed by checking the report table of contents.</small></td></tr>
                            
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCfaq.pdf" target="_blank" rel="noopener">DISC FAQs</a>
                            <small>Provide answers to Frequently Asked Questions regarding the DISC model, the DISC Assessment and Report, Reading DISC Graphs, DISC History, Hiring and Selection, and other assessments.</small></td></tr>
                            
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/NaturalandAdaptedGraphs.pptx" target="_blank" rel="noopener">Natural and Adapted DISC Graphs</a>
                            <small>A short PowerPoint presentation describing the various elements of the Natural and Adapted DISC graphs</small></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://www.youtube.com/playlist?list=PLTNKuyfaKqLaNM956tOMqirauvqe885Qc" target="_blank" rel="noopener">Practice Videos for Debriefing Graphs</a>
                            <small>A series of short DISC graph debrief videos to help you practice the flow of the conversation, understand what to focus on in the debrief, and how to discuss it in a way that your client can understand. </small></td></tr>
                            
                            <tr v-if="certified"><td><a class="hyperlink" href="https://www.youtube.com/playlist?list=PLTNKuyfaKqLbO8-2-hhuZ4-XZJJJME0sp" target="_blank" rel="noopener">Understanding Your DISC Report (for your clients)</a>
                            <small>A series of four videos to walk your clients through the report in preparation for a one-on-one or group conversation. Your client will gain a foundational understanding of the report and should be able to generate questions for the coaching conversation. In total, the series is less than 50 minutes long.</small></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>DISC 360 Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC360 Debrief Guide.pdf" target="_blank" rel="noopener">DISC 360 Debrief Guide</a>
                            <small>A synopsis of how to use the DISC 360 report to be used in conjunction with the DISC Debrief Guide. </small></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=IFEiJmud3WI" target="_blank" rel="noopener">Setting up a 360 Assessment Link in the Dashboard (Video)</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/360Instructions2022.pdf" target="_blank" rel="noopener">Setting up a 360 Assessment Link in the Dashboard (PDF)</a></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>DISC Development Resources</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCAssessmentHistory.pdf" target="_blank" rel="noopener">DISC Assessment History</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCOverUnderExtensions_Emotions.pdf" target="_blank" rel="noopener">Over-Under Extensions and DISC Emotions </a>
                            <small>Additional insight into the over (scores above 90) and under (scores below 10) extensions of DISC Scores, and additional insight into the high and low DISC emotions.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Extensions.pdf" target="_blank" rel="noopener">Extensions</a>
                            <small>Short guide to understanding scoring extensions.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/BTDescriptions.pdf" target="_blank" rel="noopener">The 12 Behavioral Tendencies Definitions & Explanations</a>
                            <small>A quick explanation and example to clarify the behaviors for each behavioral tendency comparison.</small></td></tr>

                            <tr><td><span class="new-badge">NEW</span><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+Wheel+Debrief+Guide_4.22.pdf" target="_blank" rel="noopener">Design & Explanation of the DISC Behavioral Diamond</a>
                            <small>This powerful tool adds a visual representation allowing you to view your natural behavior style (circle) and your adapted behavioral style (star). It also shares additional insight about unusual graphs – Tight, Over Shift and Under Shift patterns.</small></td></tr>

                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/BehaviorPatternView.pdf" target="_blank" rel="noopener">Behavior Pattern View (PDF)</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/BehaviorPatternView.pptx" target="_blank" rel="noopener">Behavior Pattern View (PPT Slide)</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicStylePatternsComplete.pptx" target="_blank" rel="noopener">15 Classical DISCstyle Behavioral Patterns</a>
                            <small>This is a detailed description of the 15 most common workplace patterns along with some insights into how they typically function in their day-to-day interpersonal dynamics.</small></td></tr>
                            <tr v-else><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15DISCstyleBehavioralPatterns.pdf" target="_blank" rel="noopener">The 15 DISCstyle Behavioral Patterns</a>
                            <small>This is a detailed description of the 15 most common workplace patterns along with some insights into how they typically function in their day-to-day interpersonal dynamics.</small></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicStylesPatternMapPDFVersion.pdf" target="_blank" rel="noopener">15 Classical DISC Styles: Wheel Plotting (PDF)</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/15ClassicStylesPatternMap.pptx" target="_blank" rel="noopener">15 Classical DISC Styles: Wheel Plotting (PowerPoint)</a></td></tr>

                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCDirectandIndirect.pdf" target="_blank" rel="noopener">DISC Direct & Indirect</a>
                            <small>1 page summary of definition and behaviors</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCOpenandGuarded.pdf" target="_blank" rel="noopener">DISC Open & Guarded</a>
                            <small>1 page summary of definition behaviors</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCeWorkbookPgs3536.pdf" target="_blank" rel="noopener">Behavior and Needs Under Stress</a>
                            <small>Overview of the 4 DISC styles as others perceive them in stress and what helps them overcome tension in stressful situations.</small></td></tr>

                            <tr v-if="certified"><td><span class="new-badge">NEW</span><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC-in-conflict-typical-behaviors_vs2.pdf" target="_blank" rel="noopener">Typical DISC Behaviors In Conflict</a>
                            <small>Each behavioral style has typical behaviors they are likely to express when experiencing conflict or tension. This document provides insight into each style’s likely behaviors in tense and trying times.</small></td></tr>

                            <tr v-if="certified"><td><span class="new-badge">NEW</span><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Tensions-Between-Same-Styles-vs2.pdf" target="_blank" rel="noopener">Tensions Between Same DISC Styles</a>
                            <small>When like-minded styles work together, there can be incredible benefits, but also some difficult challenges. This document outlines likely behaviors when like-minded styles work together: D and D, I and I, S and S, & C and C.</small></td></tr>
                        </tbody>
                    </table>

                    <table v-if="certified" style="width:100%">
                        <thead>
                            <tr>
                                <th>KnowDISC Introductory Videos</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC-Behavorial-Videos-Hi-D.mp4" target="_blank" rel="noopener">D Style</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC-Behavorial-Videos-Hi-I.mp4" target="_blank" rel="noopener">I Style</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC-Behavorial-Videos-Hi-S.mp4" target="_blank" rel="noopener">S Style</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC-Behavorial-Videos-Hi-C.mp4" target="_blank" rel="noopener">C Style</a></td></tr>
                        </tbody>
                    </table>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>DISC Target Applications</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCCoachingTargetApplication.pdf" target="_blank" rel="noopener">DISC Coaching</a>
                            <small>This document covers DISC as a coach - Ask, Listen, Coach, Praise and Challenge.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCSalesTargetApplication.pdf" target="_blank" rel="noopener">DISC Sales</a>
                            <small>This document covers the five stages to the selling cycle – Connecting, Assessing, Solving, Confirming and Assuring</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCLeadershipTargetApplication.pdf" target="_blank" rel="noopener">DISC Leadership</a>
                            <small>This document covers DISC as a leader - Developing, Adapting, Helping, Motivating, Complimenting, Counseling, Correcting, Delegating, & Acknowledging.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCServiceTargetApplication.pdf" target="_blank" rel="noopener">DISC Service</a>
                            <small>This document covers communicating effectively in the service process – Greet, Value, Ask, Listen, Help, Invite.</small></td></tr>
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
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC2HourFacilitatorGuide.pdf" target="_blank" rel="noopener">DISC 2 Hour Facilitator Guide</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC2hourTrainingPresentation.ppt" target="_blank" rel="noopener">DISC 2 Hour Training Presentation</a>
                            <small>For general overview of DISC: 1 hour and 45-minute report debrief</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC4HourFacilitatorGuide.pdf" target="_blank" rel="noopener">DISC 4 Hour Facilitator Guide</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC4hourTrainingPresentation.ppt" target="_blank" rel="noopener">DISC 4 Hour Training Presentation</a>
                            <small>for general overview of DISC: 3 hours with activities and 55 minute report debrief.</small></td></tr>

                            <tr v-if="certified"><td><span class="new-badge">NEW</span><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+eWorkbook+INTERACTIVE.pdf" target="_blank" rel="noopener">DISC Platinum Rule 84-page Participant eWorkbook</a>
                            <small>For use with Comprehensive DISC training programs.</small></td></tr>

                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Mini_DISCPresentation.pptx" target="_blank" rel="noopener">Mini - DISC Presentation</a>
                            <small>For 15 to 20 minute overview of DISC introducing the what and why behind the model and highlighting the main concepts.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/TeamDynamics.pptm" target="_blank" rel="noopener">Team Dynamics PowerPoint Presentation</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/TeamDynamicsActivities.pptm" target="_blank" rel="noopener">Riddles and Team Practice PowerPoint Presentation</a></td></tr>
                        </tbody>
                    </table>

                    <table v-if="certified" style="width:100%">
                        <thead>
                            <tr>
                                <th>Video Presentation Files</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DirDesc.mp4" target="_blank" rel="noopener">Description for High D Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/SocDesc.mp4" target="_blank" rel="noopener">Description for High I Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/RelDesc.mp4" target="_blank" rel="noopener">Description for High S Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/ThinkDesc.mp4" target="_blank" rel="noopener">Description for High C Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DirAdapt.mp4" target="_blank" rel="noopener">Adaptability for High D Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/SocAdapt.mp4" target="_blank" rel="noopener">Adaptability for High I Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/RelAdapt.mp4" target="_blank" rel="noopener">Adaptability for High S Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/ThinkAdapt.mp4" target="_blank" rel="noopener">Adaptability for High C Styles</a></td></tr>
                        </tbody>
                    </table>

                    <table v-if="certified" style="width:100%">
                        <thead>
                            <tr>
                                <th>Audio Presentation Files</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/michaelangelo%20director.wav" target="_blank" rel="noopener">Identifying High D Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/michaelangelo%20socializer.wav" target="_blank" rel="noopener">Identifying High I Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/michaelangelo%20relater.wav" target="_blank" rel="noopener">Identifying High S Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/michaelangelo%20thinker.wav" target="_blank" rel="noopener">Identifying High C Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Hail%20to%20the%20Chief.AIF" target="_blank" rel="noopener">Songs for High D Styles Part 1</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/My%20way.AIF" target="_blank" rel="noopener">Songs for High D Styles Part 2</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Celebration.AIF" target="_blank" rel="noopener">Songs for High I Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/We%20are%20the%20World.AIF" target="_blank" rel="noopener">Songs for High S Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Jeopardy%20Theme.wav" target="_blank" rel="noopener">Songs for High C Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Director_Voicemail.mp3" target="_blank" rel="noopener">Leaving Voicemails for High D Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Socializer_Voicemail.mp3" target="_blank" rel="noopener">Leaving Voicemails for High I Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Relater_Voicemail.mp3" target="_blank" rel="noopener">Leaving Voicemails for High S Styles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Thinker_Voicemail.mp3" target="_blank" rel="noopener">Leaving Voicemails for High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/complimenting%20director.wav" target="_blank" rel="noopener">Complimenting High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/complimenting%20socializer.wav" target="_blank" rel="noopener">Complimenting High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/complimenting%20relaters.wav" target="_blank" rel="noopener">Complimenting High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/complimenting%20thinker.wav" target="_blank" rel="noopener">Complimenting High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/counseling%20director.wav" target="_blank" rel="noopener">Counseling High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/counseling%20socializer.wav" target="_blank" rel="noopener">Counseling High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/counseling%20relater.wav" target="_blank" rel="noopener">Counseling High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/counseling%20thinker.wav" target="_blank" rel="noopener">Counseling High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/delegating%20to%20director.wav" target="_blank" rel="noopener">Delegating to High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/delegating%20to%20socializer.wav" target="_blank" rel="noopener">Delegating to High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/delegating%20to%20relater.wav" target="_blank" rel="noopener">Delegating to High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/delegating%20to%20thinker.wav" target="_blank" rel="noopener">Delegating to High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/motivating%20directors.wav" target="_blank" rel="noopener">Motivating High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/motivating%20socializers.wav" target="_blank" rel="noopener">Motivating High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/motivating%20relaters.wav" target="_blank" rel="noopener">Motivating High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/motivating%20thinkers.wav" target="_blank" rel="noopener">Motivating High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/making%20contact%20w%20director.wav" target="_blank" rel="noopener">Making Contact With High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/making%20contact%20w%20socializer.wav" target="_blank" rel="noopener">Making Contact With High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/making%20contact%20w%20relater.wav" target="_blank" rel="noopener">Making Contact With High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/making%20contact%20w%20thinker.wav" target="_blank" rel="noopener">Making Contact With High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/exploring%20w%20director.wav" target="_blank" rel="noopener">Exploring With High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/exploring%20w%20socializer.wav" target="_blank" rel="noopener">Exploring With High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/exploring%20w%20relater.wav" target="_blank" rel="noopener">Exploring With High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/exploring%20w%20thinker.wav" target="_blank" rel="noopener">Exploring With High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/collaborating%20w%20director.wav" target="_blank" rel="noopener">Collaborating With High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/collaborating%20w%20socializer.wav" target="_blank" rel="noopener">Collaborating With High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/collaborating%20w%20relater.wav" target="_blank" rel="noopener">Collaborating With High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/collaborating%20w%20thinker.wav" target="_blank" rel="noopener">Collaborating With High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/getting%20commitment%20from%20director.wav" target="_blank" rel="noopener">Getting a Commitment From High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/getting%20commitment%20from%20socializer.wav" target="_blank" rel="noopener">Getting a Commitment From High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/getting%20commitment%20from%20relater.wav" target="_blank" rel="noopener">Getting a Commitment From High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/getting%20commitment%20from%20thinker.wav" target="_blank" rel="noopener">Getting a Commitment From High C Styles</a></td></tr>

                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/assuring%20director.wav" target="_blank" rel="noopener">Assuring Customer Satisfaction With High D Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/assuring%20socializer.wav" target="_blank" rel="noopener">Assuring Customer Satisfaction With High I Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/assuring%20relater.wav" target="_blank" rel="noopener">Assuring Customer Satisfaction With High S Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/assuring%20thinker.wav" target="_blank" rel="noopener">Assuring Customer Satisfaction With High C Styles</a></td></tr>
                        </tbody>
                    </table>

                    <small v-if="certified">
                        All of the audio and video <b>presentation files</b> ABOVE need to be downloaded and copied into the same folder where you save the PP presentation (The Comprehensive 
                        DISC Slide Presentation). This way the files will be associated with the presentation and work on each individual slide. If you have questions, 
                        please call 1-206-400-6647 x4 (PST)
                    </small>
                </div>

                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/know-disc.png" alt="Activities for Trainers">
                        Activities for Trainers
                    </h2><br/>

                    <p>
                        These resources are designed to help foster application and interaction with groups. There are some DISC specific activities and 
                        tools and general team building and group engagement resources.
                    </p>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>DISC Specific Exercises</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Vacation.pdf" target="_blank" rel="noopener">Vacation</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/GameShow.pdf" target="_blank" rel="noopener">GameShow</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/MakingAMovie.pdf" target="_blank" rel="noopener">Making a Movie</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/MazeLabyrinthDISCActivity.pdf" target="_blank" rel="noopener">Mazes & Labyrinths</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC Adaptability Scenario Practice.pdf" target="_blank" rel="noopener">DISC Adaptability Scenario Practice</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC Style Situations.pdf" target="_blank" rel="noopener">DISC Style Situations</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/AdaptingDISCStyles.pdf" target="_blank" rel="noopener">Adapting to DISC Styles</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/CreatingBetterRelationships.pdf" target="_blank" rel="noopener">Creating Better Relationships</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/WheelGraphJPG.jpeg" target="_blank" rel="noopener">DISC Behavioral Pattern View Poster (Wheel)</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCWordSketch.pdf" target="_blank" rel="noopener">Word Sketches</a>
                            <small>2 page blank Word Sketch for use in workshops.</small></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/ContractChange.docx" target="_blank" rel="noopener">Contract for Change Word document</a>
                            <small>A fill-in-the-blank contract for making any behavioral change easier.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCSummaryPage.pdf" target="_blank" rel="noopener">DISC Summary Editable PDF page</a>
                            <small>This summary page, pulled from the DISC report, provides editable fields to be used electronically by the end user.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/Tensions.doc" target="_blank" rel="noopener">Tensions Worksheet</a>
                            <small>From the Applicability Activities at the end of the DISC Report, this editable worksheet allows you to identify tensions of pace and priority in relationships and strategically plan for more effective communication.</small></td></tr>
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
                    </h2><br v-if="certified"/>

                    <p v-if="certified">
                        These resources are designed to help you support continued engagement with the DISC model and assessment resources. We encourage you to 
                        share them as frequently as you can.
                    </p>

                    <table v-if="certified" style="width:100%">
                        <thead>
                            <tr>
                                <th>52 Week Email Series</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/52+Week+DISC+email+series+updated+12-2020.pdf" target="_blank" rel="noopener">52 Week Email Series PDF</a></td></tr>
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
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/12IntegratedDISCStyleRelationshipsAdvanced.pdf" target="_blank" rel="noopener">The 12 Integrated DISC Style Relationships - Advanced</a>
                            <small>A more comprehensive resource providing alternative definitions and further development of each of the 12 integrated relations including various behaviors associated with high and low scores in each relationship and examining how the styles being integrated influence one another even more thoroughly.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCInterviewGuide.pdf" target="_blank" rel="noopener">DISC Behavioral Style Interview Guide</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCvsMBTI.pdf" target="_blank" rel="noopener">DISC vs. MBTI</a></td></tr>
                            <tr><td><a class="hyperlink" href="/blog" target="_blank" rel="noopener">DISC & Other Assessment Articles</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/comparing.pdf" target="_blank" rel="noopener">Comparing Correlations Between Four Quadrant and Five Factor Personality Assessments</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISCeWorkbook.pdf" target="_blank" rel="noopener">People Smart in Business 220-Page PDF eBook</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/PlatinumRuleDISCSalesMasteryForewordDaveYoho.pdf" target="_blank" rel="noopener">The Platinum Rule for DISC Sales Mastery Foreword by Dave Yoho</a></td></tr>
                            <tr><td><a class="hyperlink" href="/about/validity" target="_blank" rel="noopener">Reliability Analysis DISC Online Assessment</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/HistoryChart.pdf" target="_blank" rel="noopener">History Chart</a></td></tr>
                            <tr v-if="certified"><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/AreYouMadatMe.pdf" target="_blank" rel="noopener">Are You Mad at Me? Article</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/downloads/DISC+World+Map.jpg" target="_blank" rel="noopener">DISC World Map</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DISC+CAREERS.pdf" target="_blank" rel="noopener">DISC Careers</a>
                            <small>A one-page list of some of the most common job roles behaviorally-aligned with each primary DISC style.</small></td></tr>
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
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/PeerFeedbackForm.pdf" target="_blank" rel="noopener">Peer Feedback Form</a>
                            <small>For providing peer feedback during facilitator/trainer observations</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/FacilitationFeedbackGuide.pdf" target="_blank" rel="noopener">Facilitator Feedback Guide</a>
                            <small>To guide facilitator 1:1 feedback sessions with supervisor</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/CoachingGuideQuestions.pdf" target="_blank" rel="noopener">Coaching Guide Questions</a>
                            <small>Questions to coach/develop facilitators and trainers in a variety of areas including presentation skills, facilitation skills, content awareness, audience management, presence, administration, general coaching.</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/SelfFeedbackForm.pdf" target="_blank" rel="noopener">Self-Feedback Form</a>
                            <small>To be used to create self-awareness and growth by review of logistics and self-evaluation of training after live session or while observing recordings (video or live session)</small></td></tr>
                            <tr><td><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/DevelopmentPlan.docx" target="_blank" rel="noopener">Development Plan Sample</a>
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
                if (this.password === 'a24x7disc2023') {
                    this.unlocked = true;
                    this.validationError = false;
                } else if (this.password === 'certified') {
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
                title: 'DISC Trainer Materials | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The DISC Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
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
            margin-top: 25px;
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

        .non-certified {
            color: #fff;
            background: linear-gradient(268deg, #0999fe, #0249ec);
            padding: 10px;
            border-radius: 10px;

            h4 {
                margin: 10px 0 -5px;
            }

            p {
                font-size: 11pt;
            }
        }

        table {
            border-collapse: collapse;
            margin: 30px 0;
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