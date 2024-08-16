<template>
    <section class="coaching">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img v-if="id === 'ccc'" src="~/assets/get-started/ccc.svg" alt="Logo" class="partner-logo">
                        <h1 class="section-title">Welcome Coaches!</h1>

                        <p>
                            Assessments are one of the primary tools in every coach’s toolbox. The insights gained from a DISC assessment alone will likely 
                            impact every client conversation you have. If you haven’t yet visited your coaching dashboard, we’ve created a helpful Quick 
                            Start Guide to get you started on the right track.
                        </p><br/>

                        <nuxt-link v-if="isNoFrame" :to="`/resources/get-started?id=${id}&noframe=1`" class="button secondary">Get Started</nuxt-link>
                        <nuxt-link v-else :to="`/resources/get-started?id=${id}`" class="button secondary">Get Started</nuxt-link>

                        <a v-if="id === 'ccc'" href="https://calendly.com/angiemfairbanks/coach-cert?inf_contact_key=a64fa9243e40deec37b291dcd31df17416358d5485884e2f31e6019a0d26c8b0&month=2020-06" class="button secondary">Schedule a Meeting</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="assessment-solutions">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7 Specializes In Solutions</h1>
                        <p class="section-subtitle">
                            At Assessments 24x7 we pride ourselves on offering solutions. We are laser-focused on your behavioral assessment needs, and we 
                            have developed a library of resources to meet those needs. In addition to the scientifically validated assessment tools, 
                            training materials, and group exercises that coaches have come to expect, you’ll also find assessments designed to support 
                            specific roles like leadership, sales, coaching, and service positions.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-8">
                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>

                            <h3>Results-Oriented</h3>
                            <p>
                                Join many of the world's top coaches that rely on our assessments for ensuring clear outcomes in both business and personal 
                                coaching situations. If your clients are looking for clarity, an assessment report is a great first step in seeing 
                                potential challenges and strengths to build upon in a documented, impartial format.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="12" y1="20" x2="12" y2="10"></line>
                                <line x1="18" y1="20" x2="18" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="16"></line>
                            </svg>

                            <h3>Using Assessments In Coaching</h3>
                            <p>
                                Use assessments in your coaching practice to enhance your ability to connect and communicate with your clients AND to help 
                                broaden their perspectives and improve their own communication skills.
                            </p>
                        </div>

                        <div class="feature-callout">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#00a8ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>

                            <h3>Level-up Your Knowledge - Get Certified</h3>
                            <p>
                                We offer self-paced, virtual practitioner certification in each of the five Core Assessments. DISC, Motivators, EIQ, 
                                Critical Thinking, and Learning Styles are each exceptional assessment instruments offering reports, training materials, 
                                and coaching guidance. In becoming a certified practitioner in any one or combination of these assessments, you make 
                                yourself an invaluable resource to your clients. In addition, each of these assessment certifications is recognized by 
                                SHRM, HRCI, ATD, and ICF and earns continuing education (CE) credits.
                            </p>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="feature-box">
                            <div class="feature-text">
                                <h3>Wholesale Pricing For Coaches</h3>
                                <p>
                                    A few of the benefits of your Assessments 24x7 account:
                                </p>
                                <ul>
                                    <li>Wholesale pricing on all assessments</li>
                                    <li>No account fees</li>
                                    <li>Access to our entire assessments library</li>
                                    <li>Sales & marketing materials</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img class="image" src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80" alt="">
                        
                        <h3>Develop Leaders</h3>
                        <p>
                            Leadership is a skill. It can be learned, practiced, and improved. The Leadership Effectiveness 360º assessment offers insights 
                            that will enhance natural leadership strengths and suggestions for areas of potential growth.
                        </p>
                        <nuxt-link to="/assessments/360/leadership-effectiveness" class="hyperlink">Leadership Effectiveness &rarr;</nuxt-link>
                    </div>

                    <div class="col-4">
                        <img class="image" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" alt="">

                        <h3>Connect & Improve Teams</h3>
                        <p>
                            Use the Emotional Intelligence assessment to demonstrate the importance of transparency and interpersonal relationships. 
                            Establish the role of each trait and how the assessment results can inform business success and team effectiveness.
                        </p>
                        <nuxt-link to="/assessments/emotional-intelligence" class="hyperlink">Emotional Intelligence &rarr;</nuxt-link>
                    </div>

                    <div class="col-4">
                        <img class="image" src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">

                        <h3>Make Better Decisions</h3>
                        <p>
                            Our actions should be focused on minimizing vulnerability and utilizing strengths. The critical thinking process that precedes 
                            our actions is a success skill that can be learned and developed. The Critical Thinking assessment can be utilized as the first 
                            step in that process.
                        </p>
                        <nuxt-link to="/assessments/critical-thinking-hvp" class="hyperlink">Critical Thinking (HVP) &rarr;</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="assessment-content">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5 class="section-title">Trainer & Facilitator Resource Library</h5>

                        <p>
                            Access our comprehensive collection of assessments, resources, and tools from your Assessments 24x7 dashboard. It includes 
                            individual and combination reports, team tools, 360°options, & training and support resources. With over 20 versions of 
                            ssessment reports in a variety of focus areas and 5 extensive libraries of learning resources, we’ve got what you need to 
                            ensure your success.    
                        </p>

                        <p>
                            Use your training materials and resources to deepen your knowledge and further develop your ability to apply the tools 
                            effectively.
                        </p>

                        <br/>

                        <nuxt-link v-if="isNoFrame" :to="`/resources/get-started?id=${id}&noframe=1`" class="button">Get Started</nuxt-link>
                        <nuxt-link v-else :to="`/resources/get-started?id=${id}`" class="button">Get Started</nuxt-link>

                        <a v-if="id === 'ccc'" href="https://calendly.com/angiemfairbanks/coach-cert?inf_contact_key=a64fa9243e40deec37b291dcd31df17416358d5485884e2f31e6019a0d26c8b0&month=2020-06" class="button">Schedule a Meeting</a>
                    </div>

                    <div class="col-6">
                        <img class="side-img" src="~/assets/disc-fold-image.jpg" alt="Trainer & Facilitator Materials at No Extra Cost">
                    </div>
                </div>
            </div>
        </section>

        <validation/>

        <section class="testimonials">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="review">
                            <div class="col-3">
                                <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/emily-bass.jpg" alt="Emily Bass">
                            </div>
                            <div class="col-9">
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <h3 class="name">Emily Bass, MSW, ACC, ACP</h3>
                                <p class="attribution">
                                    President and CEO, Emily Bass Strategies, LLC
                                </p>
                                <p class="quote">
                                    Partnering with Assessments 24x7 is what got my business off the ground. I can still recall my first contact with the 
                                    company. Jenifer Larson, VP of Instructional Design and Education, talked with me, heard me, and came up with just what 
                                    I needed to move my business to the next step. Getting certified in all 5 assessments and being included in their group 
                                    of Advanced Certified Practitioners, not only gave me clout, it gave me exposure too; it was just like free marketing 
                                    from a bigger, more established company. The customer service was, and continues to be, above and beyond. At my first 
                                    workshop, they sent Mark to come help get the bugs out and actually present with me. It is those acts of attention that 
                                    built my confidence, my presentation skills and my reputation. I have had many needs and each one has been met - every 
                                    time! I credit Assessments 24x7 staff, products and customer service, with my success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold/>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';
    import Validation from '@/components/ValidationMini';

    export default {
        components: {
            'main-nav': Nav,
            'validation': Validation,
            'footer-fold': Footer
        },
        data() {
            return {
                id: '',
                isNoFrame: false
            }
        },
        created() {
            if (this.$route.query.id === 'ccc') {
                this.id = 'ccc';
            }

            if (this.$route.query.noframe) {
                this.isNoFrame = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .coaching {
        .header {
            background: url('~assets/about.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 70px 0;

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
        }

        .assessment-solutions {
            padding: 50px 0;

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
                background: url('https://images.unsplash.com/photo-1549925245-f20a1bac6454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80');
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

                    p {
                        margin-top: 0;
                        margin-bottom: 25px;
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

            @media screen and (max-width: $breakpoint-med) {
                .feature-callout {
                    .icon {
                        position: relative;
                        margin: 0 auto;
                        display: block;
                    }

                    h3, p {
                        margin-left: 0;
                    }
                    
                }
            }
        }

        .features {
            .image {
                width: 100%;
                height: 230px;
                margin-top: 20px;
                margin-right: 30px;
                margin-bottom: 14px;
                border-radius: 20px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
        }

        .assessment-content {
            background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/left-rings.png') no-repeat, linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
            background-position: left;
            padding: 100px 0 90px;
            margin: 80px 0 0;
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

        .testimonials {
            margin: 20px 0 80px;

            .review {
                .image {
                    width: 100%;
                    border-radius: 20px;
                    max-width: 300px;
                    margin: 0 auto;
                    display: block;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
                }

                .name {
                    margin-top: 0;
                    margin-bottom: -14px;
                    font-size: 18pt;
                }

                .review-stars {
                    margin-top: 8px;
                    margin-bottom: 8px;

                    .star {
                        color: #ffffff;
                        font-size: 14pt;
                        background: $color-i;
                        padding: 0 5px;
                    }
                }

                .quote {
                    margin-top: 6px;
                }

                .attribution {
                    font-weight: 600;
                }
            }
        }
    }
</style>