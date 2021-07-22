<template>
    <section class="trends">
        <LazyHydrate when-visible><main-nav active="hiring"></main-nav></LazyHydrate>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img style="max-width: 400px; width: 100%;" src="~/assets/trends_logo.png" alt="Assessments 24x7 on Trends.co">
                    </div>
                </div>
            </div>
        </section>

        <div class="container" style="margin-bottom: 90px">
            <div class="row">
                <div class="col-7">
                    <h1 class="title">White-label HR Assessment Software</h1>
                    <h2 class="sub-title">Trusted by brands around the world</h2>

                    <p>
                        For over 20 years, Assessments 24x7 has powered business consultants, executive coaches, and Fortune 500s with the tools 
                        to optimize hiring processes, boost employee productivity, and maximize performance. Our validated DISC and Motivators 
                        assessment tools, flexible platform, and exceptional customer support have set our clients up for success and positioned 
                        us as a Global Leader in Assessment Technology.

                    </p><br/>
                    <a href="#contact" class="button">Try our DISC Assessment For Free</a>
                    <nuxt-link to="/assessments/disc" class="button secondary">Learn More</nuxt-link>
                </div>

                <div class="col-5">
                    <img style="margin:30px auto 0 auto;display:block;width:100%;max-width:400px;box-shadow:0 0 20px rgba(0,0,0,0.1);border-radius:20px" src="~assets/pillar-feature-1.jpg">
                </div>
            </div>
        </div>

        <section class="finding-talent">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <img style="width: 100%; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1)" src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                    </div>

                    <div class="col-7">
                        <h3>The World’s Most Advanced Assessment Reseller Dashboard</h3>
                        <p>
                            Our online dashboard is a one-stop solution for all your assessment needs. Purchase and distribute assessments with the 
                            click of a button. Every online questionnaire and report is branded with your logo. Even the reports’ page footers have 
                            your business name, website and phone number.
                        </p><br/>

                        <a href="#contact" class="button outline light">Try our DISC Assessment For Free</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="how-it-works">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>How it Works</h3>
                        <p>
                            Coaches, trainers, and organizations of all sizes benefit from the insights available from a DISC assessment. Use them to 
                            coach single clients or guide and develop a full team! Getting started is easy.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Try our DISC Assessment for Free</h4>
                            <p>
                                DISC offers a simple solution with profound results. Learn to identify the behavioral styles of others and adapt your 
                                communication to increase sales, assemble teams, and more.

                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Phone Consultation</h4>
                            <p>
                                Discuss your assessment needs with one of our world-class support experts. With years of industry experience, you’ll 
                                get the kick-start you need to effectively use assessments as an income stream for your business.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="step-number">3</div>
                        <div class="step-content">
                        <h4>Set Up Your White-labeled Assessment Dashboard</h4>
                            <p>
                                Every online questionnaire and report is branded with your logo including areas in the footer for your business name, 
                                website, and phone number.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h4>Start Selling Assessments</h4>
                            <p>
                                Purchase and distribute assessments with the click of a button, then track user progress and assessment completion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Try our DISC Assessment for Free</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <contact-form redirect="/trends-thankyou" acFormId="18" buttonText="Start DISC Assessment" :isShort="true" />
                        <br/><br/>
                    </div>
                </div>
            </div>
        </section>

        <section class="finding-talent">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img style="width: 90%; border-radius: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1)" src="~/assets/testimonials/susan-cranston.jpg">
                    </div>

                    <div class="col-8">
                        <h3>What People Are Saying</h3>
                        <p>
                            "One of the best business decisions I made as a certified coach was to explore the solutions offered by Assessments 24x7. 
                            The online certification courses, forums, training materials and support are world-class. Additionally, the assessment 
                            reports are personally branded and easy to assess. Working with Assessments 24x7 has supercharged my coaching practice and 
                            they've become an integral extension of my professional service offering. I highly recommend Assessments 24x7 to any coach, 
                            consultant, or corporate trainer looking for a one-stop solution that will ensure their business continues to innovate and 
                            stay forward-thinking."<br/>
                        </p>
                        <p>
                            <strong>Susan Cranston</strong><br/>
                            Founder & CEO | Authentika Consulting Inc.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><validation></validation></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'contact-form': () => import('@/components/ContactForm'),
            'validation': () => import('@/components/ASIValidation'),
            'footer-fold': () => import('@/components/Footer')
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
                                "@id": "https://assessments24x7.com/trends",
                                "name": "Trends for Assessment Software" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                title: 'Trends for Assessment Software | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Whitelabel HR assessment software by Assessments 24x7. Trusted by brands all over the globe.'
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
    .trends {
        .header {
            background: url('~assets/header.jpg');
            background-size: cover;
            background-position-y: 70%;
            color: #fff;
            text-align: center;
            padding: 70px 0;
            margin-bottom: 40px;

            .section-title {
                font-size: 30pt;
                margin-top: 0;
            }
        }

        .title {
            font-size: 24pt;
            margin-bottom: 0;
            margin-top: 30px;
        }

        .sub-title {
            margin-top: 0;
            font-weight: 400;
        }

        h3 {
            font-size: 24pt;
            margin-bottom: 0;
            margin-top: 10px;
        }

        .finding-talent {
            background: url('~assets/artifacts/content-bg.png');
            background-size: cover !important;
            background-position: center;
            padding: 60px 0;
            color: #fff;
        }

        .how-it-works {
            margin: 50px 0;

            .step-number {
                background: #0033c5;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                color: #fff;
                font-size: 22pt;
                text-align: center;
                line-height: 60px;
                font-weight: 600;
                position: absolute;
                margin-top: 20px;
            }

            .step-content {
                margin-left: 80px;

                h4 {
                    font-size: 14pt;
                    margin-bottom: -10px;
                }
            }
        }

        .screenshots {
            margin-bottom: 50px;
        }
    }
</style>