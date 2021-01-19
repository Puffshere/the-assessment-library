<template>
    <section class="disc-360">
        <main-nav active="assessments"></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC 360° Assessments</h1>
                        <p>
                            Take self-awareness to the next level with the DISC 360° assessment. Utilize anonymous feedback from colleagues, managers, and 
                            direct reports to understand how others perceive you and add to your personal growth toolbox.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="image" src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80">
                    <nuxt-link to="/contact" class="button cta">Schedule An Appointment</nuxt-link>
                </div>
                <div class="col-8">
                    <h2>DISC 360° Assessment</h2>
                    <p>
                        Are you fully aware of how your actions (and associated motives) are perceived by co-workers, colleagues, and direct reports? 
                        Complete a DISC 360° assessment with observer feedback. You might be surprised by the results! Many experienced leaders believe 
                        that the intentions of their communication and organizational practices are “obvious” to those around them, often overlooking 
                        costly misinterpretations of their actions. Our DISC 360° provides a complete picture with the help of anonymously submitted honest 
                        and candid feedback.
                    </p>
                </div>
            </div>
        </div>

        <div class="about-assess">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h2>One Price for Unlimited Observer Responses</h2>
                        <p>
                            Enhance the traditional DISC self-assessment with anonymous observer data. Using the same questionnaire process, observers are 
                            asked to provide their perspective on your behaviors and communication style. This feedback assists the individual in 
                            uncovering the disconnects between intentions and experience. 
                        </p>
                            
                        <p>
                            As with all of our 360º assessments, the DISC 360º includes an unlimited number of observer assessments. Add the minimum three 
                            observers or 300; the cost is the same.
                        </p>
                    </div>

                    <div class="col-6">
                        <div class="sample-reports">
                            <h2>Sample Report</h2>
                            <a href="/reports/DISC360SampleReport.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> DISC 360° (Sample Report)
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        <nuxt-link to="/contact" class="button outline">Contact Us</nuxt-link>
                        <nuxt-link to="/assessments/disc" class="button outline">Learn More About DISC</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Customized DISC Report Options for Every Professional</h2>

                    <p>
                        Our internationally awarded DISC assessment produces more than a dozen customizable individual and team reports. 
                        Whether your desire is an off-the-shelf report that has proven effective, or something customized to your individualized needs, 
                        we have the right report for you. Members can also select DISC focus areas like Self-awareness, Leadership, Sales, Customer 
                        Service, or Coaching.
                    </p>
                </div>
            </div>
        </div>

        <overview-360></overview-360>

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">Frequently Asked Questions</h5>
                    </div>
                </div><br/>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">What is the benefit of a 360 versus a self-assessment?</h6>
                        <p class="answer">
                            A self-assessment is from a single perspective - yours. The DISC 360° is designed to reveal the bigger picture of how those 
                            around you perceive your actions. By opening yourself up to receiving feedback, you’ll know how effectively (or not) you’re 
                            adapting your style.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">
                            DISC 360° gives general information about others’ perceptions of me, but I’d like to know specifics about why they think that. 
                            How can I learn more?
                        </h6>
                        <p class="answer">
                            Ask! The DISC 360° is intended to offer you an overall view of how those around you perceive your actions. The information in 
                            the report can be used as a starting point for discussion to ask clarifying questions. The key to this conversation is that it 
                            must be safe for feedback to be shared. Come to the conversation with authentic curiosity and a desire to understand what 
                            others are experiencing.
                        </p>
                    </div>
                </div>

                 <div class="row">
                    <div class="col-12">
                        <h6 class="question">Is the feedback provided in the 360° anonymous? How many observer responses are needed?</h6>
                        <p class="answer">
                            The feedback presented in the report is anonymous. A minimum of three observer responses are needed to maintain anonymity, and 
                            the 360° report will not generate until three responses are received. An unlimited number of observers can be invited to 
                            participate, and the cost is the same whether you have three observer responses or 300. We recommend inviting as many observers 
                            as possible for the best overall snapshot.
                        </p>
                    </div>
                </div>

                
            </div>
        </section>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';
    import Overview360 from '@/components/Overview360';

    export default {
        components: {
            'main-nav': Nav,
            'overview-360': Overview360,
            'footer-fold': Footer
        },
        data() {
            return {
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
                                "@id": "https://assessments24x7.com/assessments/360/disc",
                                "name": "DISC 360° Assessment" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                title: 'DISC 360 Assessment | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Imagine investing in your personal awareness with the rich data of our popular DISC self-assessment, and taking the opportunity to compare it with observer data collected from others thoughtful perspective on how they perceive you.'
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
    .disc-360 {
        .header {
            background: url('~assets/disc-360.jpg');
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
            font-size: 24pt;
            line-height: 24pt;
            margin-bottom: 0;
        }

        .image {
            width: 100%;
            border-radius: 20px 20px 0 0;
            margin-top: 24px;
        }

        .cta {
            width: 100%;
            border-radius: 0 0 20px 20px;
            display: block;
        }

        .about-assess {
            .sample-reports {
                background: #1f222d;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,.1);
                width: 100%;
                padding: 20px;
                margin-top: 30px;
                margin-bottom: 30px;
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

            h2 {
                font-size: 24pt;
                margin-bottom: 0;
                line-height: 28pt;
            }
        }

        .faq {
            margin-top: 50px;
            margin-bottom: 60px;

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
    }
</style>