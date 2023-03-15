<template>
    <div class="main">
        <LazyHydrate when-visible><main-nav active="about"></main-nav></LazyHydrate>
        
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Frequently Asked Questions</h1>
                    </div>
                </div>
            </div>
        </section>

        <section class="faq">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5 class="title">General Frequently Asked Questions</h5>
                    </div>
                </div><br/>

                <div class="row">
                    <div class="col-12">
                        <h6 class="question">Does Assessments 24x7 (A24x7) require bulk/volume purchases?</h6>
                        <p class="answer">
                            No, we do not require quantity purchases. You can pay-as-you go and still enjoy the lowest pricing industry-wide.
                        </p>
                    </div>
                </div>

                               <div class="row">
                    <div class="col-12">
                        <h6 class="question">Does A24x7 have account sign-up fees and annual renewal fees?</h6>
                        <p class="answer">
                            NO FEES! There are no account setup or monthly fees of any kind. However, because these accounts include thousands of dollars 
                            in free multimedia DISC training materials, we do require a small initial assessment purchase to get started. We do offer our 
                            optional <nuxt-link to="/about/account-plus" class="hyperlink">Account Plus</nuxt-link> subscription for a recurring monthly 
                            fee. Contact us for details about our Account Plus option.
                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">If I want to buy assessments in bulk/volume, do you offer even lower prices?</h6>
                        <p class="answer">
                            Yes, we offer our clients additional discounts at a range of volumes to fit any business size or need. 
                            Our pricing is based on the volume of your purchase. We offer 4 levels: Bronze, Silver, Gold, and Platinum. 
                            If you would like a copy of our discount pricing sheet, email us at "support@assessments.ws" and we will be 
                            happy to email one to you. Please include in your email address, and whether you are an independent 
                            coach/trainer or an inside corporate coach/trainer.
                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">What are your customization and branding capabilities?</h6>
                        <p class="answer">
                                When it comes to customization, we cover it all. Many clients desire to brand deliverables and configure the assessment experience to their business 
                                and customers. This is not commonly available with our competitors and industry. Our customization capabilities extend to reports, web screens, emails, 
                                assessment content, API’s, translations and various materials and downloads. Contact us to discuss your customization needs.

                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">Customer service is important to me and usually lacking with other assessment companies — how are you different?</h6>
                        <p class="answer">
                            As our name implies, we provide timely, responsive, around-the-clock customer service, live and online. We partner with you until 
                                your questions are thoroughly answered. Our founder has been a keynote speaker and author on the subject of customer satisfaction 
                                for more than 40 years. We pride ourselves on our customer service.

                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">Does A24x7 provide training materials and support for their assessments? What do they cost?</h6>
                        <p class="answer">
                            Yes, and they're FREE. We provide STRONG SUPPORT AND TRAINING MATERIALS to you AT NO CHARGE, including videos, MP3s, eBooks, PowerPoint slides, exercises, handouts, 
                                a Leader Guide, A/V files, etc.

                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">Explain your software/server network and its security?</h6>
                        <p class="answer">
                            Our system is built on Microsoft server platforms utilizing SQL Server and .NET technologies. The servers are part of the Microsoft Azure environment. To learn more visit https://azure.microsoft.com/en-us/.
                        </p>
                    </div>
                </div>
               <div class="row">
                    <div class="col-12">
                        <h6 class="question">Do you offer help in interpreting profile results?</h6>
                        <p class="answer">
                            As part of our partnership, we provide you with a wealth of Trainer Material resources to help you interpret and debrief reports, including a Report Debrief Guide. 
                                Our training team can also be utilized for scheduled debrief calls and brainstorming. You can also call 206-400-2746 (Pacific Time) or email (support@assessments.ws) 
                                at any time if you have specific questions. We will be happy to help assist you.
                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">What different group reporting options are available?</h6>
                        <p class="answer">
                            We have a variety of group and team reports available within your account dashboard. Depending on which assessments you are using, those options will appear on the 
                                group reporting page. These group reports are FREE and can be generated at any time.

                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">Do I need to be certified to use assessments?</h6>
                        <p class="answer">
                            Absolutely not; however, HIGHLY recommended. Certification is not required to administer assessments, to interpret the results or to give presentations. 
                                Many of our customers find that our certifications provide them with a deeper understanding of the assessments and the tools available for report debriefing, 
                                program facilitation and client coaching. There is no doubt that our certified practitioners have greater success using assessments with their clients and 
                                companies. It brings a greater level of confidence producing outstanding results. Please contact us if you are interested in becoming certified.

                        </p>
                    </div>
                </div>


               <div class="row">
                    <div class="col-12">
                        <h6 class="question">What are Assessment Credits?</h6>
                        <p class="answer">
                            You will need to have assessment credits in order to allow participants to complete assessments. One assessment report equals one assessment credit. Or, alternatively, 
                                you can be set up with a billable monthly account, in which case we would pre-load your assessment account with a bulk number of assessment credits. We will keep your 
                                credit card info on file, and bill your card on the first of every month ONLY for the credits used during the preceding month.
                        </p>
                    </div>
                </div>                
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
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
                                "@id": "https://assessments24x7.com/about",
                                "name": "About" 
                            } 
                        },
                        {
                            "@type": "ListItem",
                            "position": "2",
                            "item": {
                                "@id": "https://assessments24x7.com/about/faq",
                                "name": "Frequently Asked Questions" 
                            } 
                        }
                    ]
                },
                structuredDataFAQPage: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                        "@type": "Question",
                        "name": "If I want to buy assessments in bulk/volume, do you offer even lower prices?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we offer our clients additional discounts at a range of volumes to fit any business size or need. Our pricing is based on the volume of your purchase. We offer 4 levels: Bronze, Silver, Gold, and Platinum. If you would like a copy of our discount pricing sheet, email us at 'support@assessments.ws' and we will be happy to email one to you. Please include in your email address, and whether you are an independent coach/trainer or an inside corporate coach/trainer."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to be certified to use assessments?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely not; however, HIGHLY recommended. Certification is not required to administer assessments, to interpret the results or to give presentations. Many of our customers find that our certifications provide them with a deeper understanding of the assessments and the tools available for report debriefing, program facilitation and client coaching. There is no doubt that our certified practitioners have greater success using assessments with their clients and companies. It brings a greater level of confidence producing outstanding results. Please contact us if you are interested in becoming certified."
                        }
                    }]
                }
            }
        },
        head() {
            return {
                title: 'Frequently Asked Questions | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Leading organizations and coaches utilize our assessment technology to guide their strategy for hiring & selection, performance evaluations, skills training, team-building, conflict management, promotion & succession planning, organizational restructuring, employee retention, and leadership development.'
                    }
                ],
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    },
                    {
                        innerHTML: JSON.stringify(this.structuredDataFAQPage),
                        type: 'application/ld+json'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
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
    }

    .faq {
        margin: 60px 0 80px 0;

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
</style>
