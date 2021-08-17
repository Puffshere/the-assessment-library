<template>
    <section class="icf-communication-coach">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img class="icf-logo" src="~/assets/icf.png" alt="ICF Free Business Resources by Assessments 24x7">
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="banner-image" src="~/assets/communication-coach-resource.jpg" alt="Communication Coach"><br/>
                    <h2 class="subtitle">Access the free, interactive DISC Communication Coach tool</h2>

                    <p>
                        This online, interactive tool can help identify any person's DISC style quickly and offer immediate suggestions for adapting to 
                        their preferred communication style.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <h2 class="title">Quickly identify behavioral styles on the go</h2>

                    <p>
                        The DISC Communication Coach is an all-in-one solution to identify and adapt to each communication style. Use the DISC 
                        Communication Coach in two ways:
                    </p>

                    <ol>
                        <li>
                            Don’t know your associate’s communication style? Answer 2 key questions to quickly establish their basic style. 
                        </li>
                        <li>
                            Need help adapting your style to improve your communication? Once you’ve identified your associate’s DISC style, let Dr. Tony 
                            Alessandra direct you in adapting your communication in specific situations via the video library provided for each style. 
                        </li>
                    </ol>

                    <p>
                        Use the DISC Interactive Communications Coach regularly, and you’ll notice your ability to adapt to others’ communication styles 
                        improving rapidly. Whether it's sales situations, managing direct reports, negotiating with vendors, or dealing with friends new 
                        and old in social settings, using this interactive communications tool will raise you to a new level of relationship success.
                    </p>

                    <strong>Choose from four major adaptability categories in your interactions:</strong>
                </div>

                <div class="col-4">
                    <img class="image" src="~/assets/communication-coach.png" alt="The Assessments 24x7 Communication Coach tool">
                </div>
            </div><br/>

            <div class="row">
                <div class="col-6">
                    <ul class="summary">
                        <li class="topic">1. General Action Plan</li>
                        <li class="topic">2. Selling Strategies</li>
                    </ul>
                </div>

                <div class="col-6">
                    <ul class="summary">
                        <li class="topic">3. Managing/Leading Your Team</li>
                        <li class="topic">4. Social Settings</li>
                    </ul>
                </div>
            </div><br/><br/>

            <div class="row" id="contact">
                <div class="col-8">
                    <h3>Get access to <span>Communication Coach</span></h3>

                    <contact-form redirect="/communication-coach" acFormId="13" />
                </div>

                <div class="col-4">
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div><br/><br/>

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get DISC Certified and Master DISC</h5>
                        <p>
                            Become a DISC expert with our self-paced, internationally accredited certification training. Designed specifically for 
                            coaches and corporate trainers, our one-on-one instructor-led sessions will teach you how to use DISC completely online 
                            and at your own pace.</p>

                        <p> 
                            Our certifications also include many benefits such as exclusive access to our DISC Certified Trainer Materials, discounted 
                            SILVER LEVEL PRICING, and 10 complimentary DISC assessments when you begin.  
                        </p><br/>

                        <nuxt-link to="/certifications/assessment" class="button outline light">Get DISC Certified</nuxt-link>

                        <br/><br/><br/><br/><br/>

                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/disc-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section>

        <section class="credits">
            <div class="container">
                <div class="row">
                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/shrm.png" alt="shrm">
                        <span class="credit">12 Credits</span>
                        <p class="institute">SHRM**</p>
                    </div>

                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/hrci.png" alt="hrci">
                        <span class="credit">10 Credits</span>
                        <p class="institute">HRCI*</p>
                    </div>

                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/atd.png" alt="atd">
                        <span class="credit">12 Credits</span>
                        <p class="institute">ATD</p>
                    </div>

                    <div class="col-3 col-6-sm">
                        <img class="provider-image" src="~assets/icf.png" alt="icf">
                        <span class="credit">5.25/12.5</span>
                        <p class="institute">Core/RD ICF</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <p style="color: #777; font-size: 9pt; text-align: center; margin-top: -12px;">
                            * HRCertification Institute's®️ (www.HRCI.org) official seal confirms that Assessments 24x7 meets the criteria for pre-approved 
                            recertification credit(s) for any of HRCI’s eight credentials, including SPHR®️ and PHR®️. ** Assessments 24x7 is recognized by 
                            SHRM to offer Professional Development Credits (PDCs) for SHRM-CP®️ or SHRM-SCP®️.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><validation-mini></validation-mini></LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>

        <footer-fold/>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': Nav,
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'contact-form': () => import('@/components/ContactForm'),
            'validation-mini': () => import('@/components/ValidationMini'),
            'client-logos': () => import('@/components/ClientLogos'),
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'ICF Communication Coach | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'This online, interactive tool can help identify any person\'s DISC style quickly and offer immediate suggestions for adapting to their preferred communication style.'
                    }
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: 'https://www.assessments24x7.com/resources/icf-communication-coach'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icf-communication-coach {
        .header {
            background: url('~assets/assessment-bg.jpg');
            background-size: cover;
            background-position: center;
            color: #fff;
            text-align: center;
            padding: 70px 0;
            margin-bottom: 30px;

            .section-title {
                font-size: 30pt;
                margin-top: 0;
            }

            .icf-logo {
                width: 100%;
                max-width: 250px;
            }
        }

        .banner-image {
            width: 100%;
            max-width: 800px;
            display: block;
            margin: 0 auto;
            border-radius: 20px;
        }

        .subtitle {
            text-align: center;
        }

        .image {
            width: 100%;
            border-radius: 5px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
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

        h3 {
            font-size: 18pt;
            margin-top: 0;
            border-bottom: 3px solid #eaeaea;

            span {
                color: #0033c5;
            }
        }

        h4 {
            margin-bottom: 0;
            font-size: 16pt;
        }

        .badge {
            background: rgba(255, 189, 7, .5);
            border-radius: 20px;
            color: #333;
            font-size: 9pt;
            font-weight: 500;
            padding: 1px 8px;
        }

        .summary {
            list-style: none;
            padding-left: 0;
            margin-top: 20px;

            .topic {
                padding: 20px;
                margin-bottom: 12px;
                border-radius: 10px;
                font-weight: 600;
                background: #f4f7f9;
                color: #fff;
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }
        }

        .credits {
            padding: 34px 0 10px;
            background: linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
            margin-bottom: 0px;

            .credit {
                font-size: 23pt;
                text-align: center;
                color: #fff;
                display: block;
                font-weight: 700;
            }

            .institute {
                text-align: center;
                font-size: 18pt;
                margin-top: -2px;
                color: #fff;
            }

            .provider-image {
                margin: 0 auto 14px;
                display: block;
                height: 100px;
            }
        }

        .certification {
            background: rgb(0,51,197);
            background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
            background-size: cover;
            background-position: center;
            padding: 80px 0 0;

            .title {
                font-size: 24pt;
                margin: 20px 0 0;
                position: relative;
                color: #fff;
            }
            
            p {
                color: #fff;
            }

            p, .button {
                position: relative;
            }

            .image {
                width: 100%;
                margin-bottom: -8px;
                box-shadow: none;
            }
        }
    }
</style>