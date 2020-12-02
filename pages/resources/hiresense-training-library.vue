<template>
    <section class="get-started">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">HireSense™ Training Library</h1>
                        <p>
                            The HireSense training materials library is your comprehensive resource for certification in HireSense. Explore these in order 
                            the first time, and then as needed at your leisure. You will find there are many useful and valuable resources to support your 
                            continued development, understanding, and application.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container" v-if="unlocked">
            <section class="steps">
                <div class="row">
                    <div class="col-12">
                        <div class="coming-soon-prompt">
                            <div class="info">
                                <p>
                                    Watch for the next 3 parts of HireSense&trade; Virtual Training Materials coming the week of December 7th. If you have any 
                                    questions, please email your coach at <a href="mailto:training@assessments24x7.com" class="hyperlink">training@assessments24x7.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="step">
                            <div class="icon">1</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    HireSense Orientation
                                </h3>

                                <p class="text">
                                    Important things to know about HireSense, the Process for Practitioners, Clients and Candidates, Alerts, Risks and 
                                    Relevancies, the App Technology and Reports
                                </p>

                                <p class="indented-text">Click to watch the video segment:</p>

                                <ul>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/orientation/HireSense+Orientation.mp4" target="_blank" rel="noopener" class="hyperlink">Orientation Introduction (12:05)</a></li>
                                </ul><br/>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/orientation/HireSense+Initial+Orientation_Training+Presentation_Step+1.pptx" target="_blank" rel="noopener" class="button">HireSense Orientation PowerPoint & Notes &rarr;</a><br/><br/>
                            </div>
                        </div>
                    </div>

                    <!--<div class="col-6">
                        <div class="step">
                            <div class="icon">4</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    Bridging HVP and Critical Thinking
                                </h3>

                                <p class="text">
                                    Making connections from HVP to Critical Thinking for HireSense
                                </p><br/>

                                <a href="#" class="button">Critical Thinking for HireSense</a>
                            </div>
                        </div>
                    </div>-->
                    <div class="col-12">
                        <div class="step">
                            <div class="icon">2</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    HireSense Navigation
                                </h3>

                                <p class="text">
                                    Instructions to use the App technology for running HireSense
                                </p>

                                <p class="indented-text">Click to watch each video segment:</p>

                                <ul>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/navigation/Navigation+Training+Part+1+-+Intro_Benchmarks.mp4" target="_blank" rel="noopener" class="hyperlink">Part 1: Intro & Benchmarks (7:34)</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/navigation/Navigation+Training+Part+2+-+Insights_Interview+Questions.mp4" target="_blank" rel="noopener" class="hyperlink">Part 2: Insights & Interview Questions (6:42)</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/navigation/Navigation+Training+Part+3+-+Links_Alerts_Saved+Results.mp4" target="_blank" rel="noopener" class="hyperlink">Part 3: Links, Alerts & Saved Results (5:25)</a></li>
                                </ul><br/>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/navigation/HireSense+Navigation_Training+Presentation_Step+2.pptx" target="_blank" rel="noopener" class="button">HireSense Navigation PowerPoint & Notes &rarr;</a><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>

                <!--<div class="row">
                    <div class="col-6">
                        <div class="step">
                            <div class="icon">2</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    HireSense Navigation
                                </h3>

                                <p class="text">
                                    Instructions to use the App technology for running HireSense
                                </p><br/>

                                <a href="#" class="button">HireSense Navigation</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="step">
                            <div class="icon">5</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    HireSense Integration 
                                </h3>

                                <p class="text">
                                    Bringing all parts of the technology together to read HireSense results
                                </p>

                                <ul>
                                    <li><a href="#" target="_blank" rel="noopener" class="hyperlink">Sample 1</a></li>
                                    <li><a href="#" target="_blank" rel="noopener" class="hyperlink">Sample 2</a></li>
                                    <li><a href="#" target="_blank" rel="noopener" class="hyperlink">Sample 3</a></li>
                                </ul><br/>

                                <a href="#" class="button">HireSense Integration</a>
                            </div>
                        </div>
                    </div>
                </div>-->
                
                <div class="row">
                    <div class="col-12">
                        <div class="step">
                            <div class="icon">3</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    HireSense Benchmarks
                                </h3>

                                <p class="text">
                                    Instructions to set HireSense Benchmarks
                                </p>

                                <ul>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/IGFitnessBenchmarks_HowTo.pdf" target="_blank" rel="noopener" class="hyperlink">Instructions to set and review Benchmarks</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/Benchmarking+Sample_HighMatch.pdf" target="_blank" rel="noopener" class="hyperlink">Sample Benchmark Report High Match</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/Benchmarking+Sample_LowMatch.pdf" target="_blank" rel="noopener" class="hyperlink">Sample Benchmark Report Low Match</a></li>
                                </ul>

                                <p class="indented-text">Click to watch each video segment:</p>

                                <ul>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/HireSense+Benchmarks+Preset+Scores.mp4" target="_blank" rel="noopener" class="hyperlink">Preset Scores (3:56)</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/HireSense+Benchmarks+User+Scores.mp4" target="_blank" rel="noopener" class="hyperlink">User Scores (5:22)</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/HireSense+Benchmarks+Group+Average.mp4" target="_blank" rel="noopener" class="hyperlink">Group Average (2:53)</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/HireSense+Benchmarks+Job+Questionnaire.mp4" target="_blank" rel="noopener" class="hyperlink">Job Questionnaire (2:51)</a></li>
                                    <li><a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/HireSense+Reporting+-+Benchmarks.mp4" target="_blank" rel="noopener" class="hyperlink">HireSense Reporting (7:41)</a></li>
                                </ul><br/>

                                <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/hiresense/library/benchmarking/Benchmarks+Introduction.pdf" target="_blank" rel="noopener" class="button">HireSense Benchmark Introduction Guide &rarr;</a><br/><br/>
                            </div>
                        </div>
                    </div>

                    <!--<div class="col-6">
                        <div class="step">
                            <div class="icon">6</div>
                            
                            <div class="body">
                                <h3 class="title">
                                    Beyond HireSense
                                </h3>

                                <p class="text">
                                    Creating a foundation for what comes after hiring and selection, including onboarding, developing, coaching and using 
                                    other reports. 
                                </p>

                                <ul>
                                    <li><a href="#" target="_blank" rel="noopener" class="hyperlink">Onboarding & Developing</a></li>
                                    <li><a href="#" target="_blank" rel="noopener" class="hyperlink">Coaching</a></li>
                                    <li><a href="#" target="_blank" rel="noopener" class="hyperlink">Other Reports</a></li>
                                </ul><br/>

                                <a href="#" target="_blank" rel="noopener" class="button">Beyond HireSense Introduction</a>
                            </div>
                        </div>
                    </div>-->
                </div>
            </section>
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

        <br/><br/><br/><footer-fold></footer-fold>
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
                validationError: false
            }
        },
        methods: {
            unlock() {
                if (this.password === 'hscertified') {
                    this.unlocked = true;
                    this.validationError = false;
                } else {
                    this.validationError = true;
                    this.password = '';
                }
            }
        },
        head() {
            return {
                title: 'HireSense Training Library | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: ''
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .get-started {
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

            .partner-logo {
                width: 100%;
                max-width: 300px;
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
            margin-bottom: 0;
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

        .coming-soon-prompt {
            width: 100%;
            margin: 0px auto;
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
        }

        .step {
            background: #f5f7f9;
            padding: 20px 30px;
            border-radius: 10px;
            position: relative;
            margin: 10px 0 20px;

            .icon {
                position: absolute;
                left: -16px;
                top: -16px;
                background: #00bbff;
                border-radius: 50%;
                color: #fff;
                text-align: center;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 16pt;
                font-weight: 600;
            }
            
            .title {
                font-weight: 600;
                font-size: 16pt;
                margin: 0;
            }

            .text {
                font-size: 12pt;
                margin: 0;
            }
            
            .indented-text {
                margin-left: 20px;
                margin-bottom: -10px;
            }

            .link {
                display: block;
                background: #1e222d;
                border-radius: 10px;
                font-weight: 600;
                padding: 10px;
                color: #fff;
                margin-top: 10px;
            }
        }

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

        .certifications {
            .images {
                text-align: center;
                margin-top: 30px;

                .image {
                    width: 100%;
                    max-width: 160px;
                    margin: 0 8px;
                }
            }
        }
    }
</style>