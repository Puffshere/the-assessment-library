<template>
    <section class="account-plus">
        <LazyHydrate when-visible><main-nav active="about"></main-nav></LazyHydrate>
        
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Account Plus</h1>
                        <p>
                            Take your business to the next level with our Account Plus Dashboard. With unparalleled customization features, including 
                            branded assessment links, white-labeled sub-accounts, and more,  you'll provide industry-leading assessments with YOUR branding.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container" style="margin-bottom: 80px; margin-top: 60px;">
            <div class="row">
                <div class="col-4">
                    <img class="image-top" src="@/assets/account-plus.jpg" alt="Your Dashboard. Your Brand.">
                </div>

                <div class="col-8">
                    <h2 class="title">Your Dashboard. Your Brand.</h2>
                    <p>
                        Your clients know and trust your brand. Continue to cultivate that relationship and build trust with a seamless, branded experience 
                        on your assessment dashboard.
                    </p>
                    <p>
                        Receive all the benefits of the Account Plus Dashboard for $99/month plus a one-time set up fee of $99.*
                    </p>
                    <small style="color:#666;display:block;">*Setup fee waived for all current Assessments 24x7 customers and annual commitments paid upfront.</small><br/>
                    
                    <nuxt-link to="/contact" class="button">Schedule a Free Demo</nuxt-link>
                    
                    <a class="sample-link" href="https://cdn.assessments24x7.com/file/assessments24x7-media/pdf/Account+Plus.pdf" target="_blank" rel="noopener">
                        <div class="sample">
                            <img src="~/assets/pdf-icon-light.svg"> Account Plus One-Sheet

                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                    l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                    c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" style="fill:#05bbff;">
                                </path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div><br/>

            <div class="row">
                <div class="col-4">
                    <img class="image" src="@/assets/account-plus/custom-branded.svg" alt="Custom Branded Assessment Links">
                    
                    <h3>Branded Assessment Links</h3>
                    <p>
                        Your domain name used for assessment links, client logins, emailed reports, and your branded dashboard. When
                        participants and clients access assessment-related data, your branding is front & center.
                    </p>
                </div>

                <div class="col-4">
                    <img class="image" src="@/assets/account-plus/sub-accounts.svg" alt="White-labeled Sub Accounts">

                    <h3>White-labeled Sub Accounts</h3>
                    <p>
                        Create custom-branded client dashboards from your account. Each client will have their own login and secure dashboard access to 
                        your Account Plus.
                    </p>
                </div>

                <div class="col-4">
                    <img class="image" src="@/assets/account-plus/set-pricing.svg" alt="Set Assessment Prices">

                    <h3>Set Assessment Prices</h3>
                    <p>
                        Load your custom payment gateway into your Account Plus & set prices for assessments. Clients purchase from their sub-accounts, and 
                        payments go directly to you.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <img class="image" src="@/assets/account-plus/custom-login.svg" alt="Custom Login Screen Messages">

                    <h3>Custom Login Screen Messages</h3>
                    <p>
                        Publish custom announcements and messages on the client login screen. Communicate directly with clients accessing their assessment 
                        dashboards.
                    </p>
                </div>

                <div class="col-4">
                    <img class="image" src="@/assets/account-plus/resource-center.svg" alt="Resource Center">

                    <h3>Resource Center</h3>
                    <p>
                        Your client accounts have access to materials and downloads on their homepage’s Resource Center. Customize the materials with links 
                        to your products, services, & training materials.
                    </p>
                </div>

                <div class="col-4">
                    <img class="image" src="@/assets/account-plus/disc-benchmarking.svg" alt="DISC Benchmarking">

                    <h3>DISC Benchmarking</h3>
                    <p>
                        Included with your Account Plus Dashboard is our DISC Benchmark System. Our DISC assessment meets EEOC standards for class 
                        protection for use in the hiring & selection process.
                    </p>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><rob-pickering/></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'rob-pickering': () => import('@/components/testimonials/RobPickering'),
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
                                "@id": "https://assessments24x7.com/about/why-use-assessments",
                                "name": "Why Use Assessments?" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                title: 'Account Plus | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Take your business to the next level with our Account Plus Dashboard. With unparalleled customization features, including branded assessment links, white-labeled sub-accounts, and more.'
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
    .account-plus {
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

        .title {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 24pt;
        }

        .image-top {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            margin-bottom: 20px;
        }

        .image {
            width: 100%;
            height: 150px;
            margin-top: 20px;
            margin-right: 30px;
            margin-bottom: 14px;
        }

        h1, h2 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        .sample-link {
            color: #000;
            text-decoration: none;
        }

        .sample {
            display: inline-block;
            border: 2px solid #d2d7e2;
            padding: 6px 19px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 10pt;
            transition: background .3s ease;
            cursor: pointer;

            img {
                width: 24px;
                margin-right: 5px;
            }

            svg {
                width: 14px;
                float: right;
                margin-top: 8px;
                margin-left: 10px;
            }
        }
    }
</style>
