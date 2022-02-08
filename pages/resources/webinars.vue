<template>
    <section class="skeleton">
        <LazyHydrate when-visible><main-nav></main-nav></LazyHydrate>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7 Webinars</h1>
                        <p>
                            Based on your feedback, we committed to providing frequent webinars on topics that will continue to support your businesses. 
                            Our partnership with you is extremely important to us. Enjoy the replays of our past webinars and look for the upcoming ones in 
                            the future. 
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Empowering our Community</h2>

                    <p>
                        We are committed to developing content that helps our clients grow their businesses and master the products we offer. If you ever 
                        miss an Assessments 24x7 webinar, we will post the recording and slide deck here. Be sure to bookmark this page and check it 
                        periodically!
                    </p>
                </div>
            </div><br/>

            <div class="row">
                <div class="col-8">
                    <h3>Previously Recorded Webinars</h3>

                    <ul class="resources">
                        <nuxt-link to="/resources/disc-surprising-facts">
                            <li class="resource a24x7">
                                DISC: Unraveling the BIG Misconceptions
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/disc-use-cases">
                            <li class="resource a24x7">
                                Solution-Driven Applications with DISC
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/kids-disc-webinar">
                            <li class="resource a24x7">
                                Kids DISC
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/relationship-based-sales">
                            <li class="resource a24x7">
                                Stop, Collaborate, & Listen - Relationship-Based Sales
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/best-of-2020-webinar">
                            <li class="resource a24x7">
                                The Best of 2020 & How to Apply The Concepts in 2021
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/scale-up">
                            <li class="resource a24x7">
                                Scale Up Your Coaching Business with DISC
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/hiresense-webinar">
                            <li class="resource a24x7">
                                HireSense - Hiring and Selection Done Right!
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/success-using-assessments">
                            <li class="resource a24x7">
                                Success Using Assessments
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/training-materials-webinar">
                            <li class="resource a24x7">
                                Training Materials
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/marketing-assessments">
                            <li class="resource a24x7">
                                Marketing Assessments
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/virtual-workshops">
                            <li class="resource a24x7">
                                Best Practices for Virtual Workshops
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/financial-strategies">
                            <li class="resource a24x7">
                                Financial Strategies for the COVID-19 Crisis: 7 Steps Your Business Can Take Now
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/disc-styles-in-crisis-webinar">
                            <li class="resource a24x7">
                                DISC Styles in Crisis
                            </li>
                        </nuxt-link>

                        <nuxt-link to="/resources/uncertain-times-webinar">
                            <li class="resource a24x7">
                                Virtual Tools & Tips to Succeed in Uncertain Times
                            </li>
                        </nuxt-link>
                    </ul>
                </div>

                <div class="col-4">
                    <LazyHydrate when-visible><survey-sidebar></survey-sidebar></LazyHydrate>
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div>

        <validation-mini/>
        <client-logos/>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            'main-nav': () => import('@/components/Nav'),
            'footer-fold': () => import('@/components/Footer'),
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'survey-sidebar': () => import('@/components/SurveySidebar'),
            'validation-mini': () => import('@/components/ValidationMini'),
            'client-logos': () => import('@/components/ClientLogos')
        },
        head() {
            return {
                title: 'Webinars | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'If you ever miss an Assessments 24x7 webinar, we will post the recording and slide deck here. Be sure to bookmark this page and check it periodically!'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skeleton {
        .header {
            background: url('~assets/leadership-360.jpg');
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

        .hyperlink {
            margin-bottom: 10px;
            display: inline-block;
        }

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        h2 {
            font-size: 22pt;
            line-height: 24pt;
        }

        h3 {
            font-size: 18pt;
            line-height: 24pt;
            margin-top: 0;
        }

        .resources {
            padding-left: 0;
            list-style: none;

            a {
                text-decoration: none;
            }

            .resource {
                padding: 10px;
                background: #f7f7f7;
                margin-bottom: 6px;
                border-radius: 10px;
                color: #fff;
                font-weight: 600;

                &.a24x7 {
                    background: linear-gradient(268deg, #0999fe, #0249ec);
                }

                &.business {
                    background: linear-gradient(268deg, #ffa518, #fc542a);
                }

                &.wellness {
                    background: linear-gradient(268deg, #fa4ca6, #ff2f4c);
                }
            }
        }
    }
</style>