<template>
    <section class="skeleton">
        <LazyHydrate when-visible><main-nav active="training"></main-nav></LazyHydrate>

        <section class="body hero">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <h2 style="text-align: left; color: white; margin-top: 40px; line-height: normal;" class="disc">
                            DISC Workshop Leader <span style="color: #FFDE59;">Essentials</span></h2>
                        <h4
                            style="text-align: left; color: white; font-weight: 400; margin-top: -15px; line-height: normal;">
                            Five ready-to-use training modules <br />
                            for DISC Certified Trainer
                        </h4>
                        <p class="heroText">
                            <span style="text-decoration: underline;">Self-Awareness and Communication</span> | <span
                                style="text-decoration: underline;">Transitioning from Peer to Leader</span> <br />
                            <span style="text-decoration: underline;">Making Teams Work</span> | <span
                                style="text-decoration: underline;">Trust-Based Leadership</span> | <span
                                style="text-decoration: underline;">Sales Optimization</span>
                        </p>
                        <button @click="modulesButton" class="light" style="margin-top: 20px;">
                            View Modules
                        </button>
                    </div>
                    <div class="col-5">
                        <img src="~/assets/DWL-hero-image.webp" alt="hero image of a woman" class="heroImage">
                    </div>
                </div>
            </div>
        </section>

        <section class="body" style="padding: 20px 0 10px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/dwl-trainer-materials/DWL+Box.webp"
                            alt="image of a box" class="boxImage">
                    </div>
                    <div class="col-7">
                        <div class="text-button-container"
                            style="display: flex; flex-direction: column; align-items: flex-end;">
                            <h4 style="text-align: right; color: #213C85; font-weight: 700; line-height: normal;">
                                Empower growth with <br />
                                ready-to-deliver training modules
                            </h4>
                            <p class="empowerText" style="text-align: right;">
                                These 5 comprehensive, focused training modules include all the content, materials, and
                                supporting resources to deliver workshops to a variety of audiences, including internal
                                teams, small or large businesses, customer service groups, and educational institutions.
                                Perfect for individuals and teams to take their personal and professional development to
                                the
                                next level, these workshops are designed to intentionally broaden and strengthen
                                behavioral
                                awareness and communication skills quickly and efficiently.
                            </p>
                            <button @click="empowerButton" class="blue" style="margin-top: 20px;">
                                Video Walkthrough
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="content-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h3 style="margin-bottom: 20px; color: #213C85;" class="comprehensiveHeader">Comprehensive
                                resources included with each
                                DISC
                                workshop module</h3>

                            <p style="color: #213C85; font-weight: 700; margin-bottom: -15px;">
                                Each DISC workshop module provides instructors with all the tools needed to deliver
                                impactful
                                training sessions, including:
                            </p>

                            <ul style="color: #213C85;">
                                <li>Presentation & Training Materials – PowerPoint presentations, leader and participant
                                    guides,
                                    and engaging activities</li>
                                <li>Marketing Resources – Ready-to-use materials to promote workshops effectively</li>
                                <li>Orientation Video – A guide to using all materials within the module</li>
                            </ul>

                            <br />

                            <div class="row cert-div">
                                <div class="col-1 cert">
                                    <img class="image-DISC-Cert" src="/images/disc-cert-badge.png"
                                        alt="DISC Certification">
                                </div>

                                <div class="col-9">
                                    <p class="disc-cert-text">
                                        DISC Certification is required prior to purchasing any DISC Workshop Leader
                                        Essentials
                                        package.
                                    </p>
                                    <br />
                                    <p class="disc-cert-text bottomText" style="margin-top: -40px">
                                        Continuing Education credits are not available for DISC Workshop Leader
                                        Essentials
                                        programs.
                                    </p>
                                </div><br />
                            </div>

                            <br />

                            <p style="color: #213C85; font-weight: 700; margin-bottom: 0px;">
                                Getting started checklist: To launch your workshop smoothly, follow these steps:
                            </p>
                            <div class="col-6">
                                <ol style="color: #213C85;">
                                    <li>
                                        Watch the orientation video
                                    </li>
                                    <li>
                                        Review the workshop training video
                                    </li>
                                    <li>
                                        Study training materials & other resources
                                    </li>
                                </ol>
                            </div>
                            <div class="col-6">
                                <ol style="color: #213C85;" start="4">
                                    <li class="listedItem">
                                        Market your workshop
                                    </li>
                                    <li>
                                        Prepare using the included Planning Checklist
                                    </li>
                                </ol>
                            </div>
                        </div>

                    </div>
                    <div class="button-container"
                        style="gap: 20px; display: flex; justify-content: left; margin: 40px 0px;">
                        <button @click="modulesButton" class="light">View Modules</button>
                        <button @click="contactButton" class="blue">Book Live Demo</button>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>
        <br />
        <br />
        <modules-fold></modules-fold>
        <div class="section" id="video">
            <div class="container"
                style="padding-top: 25px; padding-bottom: 70px; display: flex; justify-content: center;">
                <div class="row videoRow">
                    <h3 style="color: #213C85;">
                        DWLE Preview
                    </h3>
                    <p style="margin-top: 0px; margin-bottom: 40px; color: #213C85;">
                        Take a high-level look at the essential tools and resources in our modules to help make every
                        workshop a success.
                    </p>
                    <video id="myVideo" controls>
                        <source
                            src="https://cdn.assessments24x7.com/file/assessments24x7-media/Certifications/DWLE+Tour+-+11.12.24.mp4"
                            type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                    <button @click="contactButton" class="blue" style="margin-top: 20px;">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
        <br>
        <LazyHydrate when-visible><kevin-mccarthy></kevin-mccarthy></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import ModulesFold from '@/components/discWorkshopEssentials/ModulesFold';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'modules-fold': ModulesFold,
        'kevin-mccarthy': () => import('@/components/testimonials/KevinMcCarthy'),
        'footer-fold': () => import('@/components/Footer'),
        'credits': () => import('@/components/Credits')
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
                            "@id": "https://assessments24x7.com/certifications",
                            "name": "Certifications"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": "2",
                        "item": {
                            "@id": "https://assessments24x7.com/certifications/workshop-certification",
                            "name": "Workshop Leader Certification"
                        }
                    }
                ]
            }
        }
    },
    head() {
        return {
            title: 'DISC Workshop Essentials: Your All-in-one Workshop Solutions',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Discover innovative out-of-the-box workshop solutions with DISC Workshop Leader Essentials. Teach engaging workshops with our comprehensive training modules, which include all the all the content, materials, and resources needed to deliver workshops to your audience. Elevate personal and professional growth, lead with confidence, and optimize sales.'
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
    },
    methods: {
        modulesButton(event) {
            const element = document.getElementById('modules');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        empowerButton(event) {
            const element = document.getElementById('video');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        contactButton(event) {
            window.location.href = 'https://www.assessments24x7.com/contact';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.skeleton {
    .hero {
        background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
        padding: 20px 0 30px 0;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .heroImage {
        width: 100%;
    }

    .heroText {
        text-align: left;
        color: white;
    }

    .empowerText {
        text-align: right;
        color: #213C85;
        ;
    }

    .container-wrapper {
        position: relative;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0px;
        width: 45%;
        z-index: 5;
    }

    .boxImage {
        margin-top: 20px;
        width: 87%;
    }

    video {
        width: 80%;
        height: auto;
        flex-shrink: 0;
        border-radius: 19px;
        border: 1px solid #ADADAD;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        margin-bottom: 20px;
    }

    .videoRow {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

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

    .cert {
        margin-right: 20px;
    }

    .cert-credits {
        text-align: center;
    }

    .cert-div {
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: 1px solid #EEE;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .image-DISC-Cert {
        width: 59px;
        border-radius: 20px;
    }

    .disc-cert-text {
        color: #0033C5;
    }

    .course-summary {
        list-style: none;
        padding-left: 0;

        .topic {
            padding: 10px;
            background: #f7f7f7;
            margin-bottom: 6px;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;

            &.disc {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }
        }
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    @media (max-width: 1029px) {
        .hero {
            padding-top: 0px !important;
        }

        button {
            margin-bottom: 20px;
        }

        .listedItem {
            margin-top: -48px;
        }

        .light {
            margin: 0px !important;
        }

        .button-container {
            flex-direction: column;
            align-items: center;
            margin: 10px 0px !important;
        }

        .button-container button {
            margin: 0px 0;
        }

        .comprehensiveHeader {
            text-align: center;
        }

        .cert-div {
            flex-direction: column;
            text-align: center;
            padding: 0px 10px;
        }

        .cert {
            margin-right: 0;
            margin-bottom: -10px;
            margin-top: 20px;
        }

        .image-DISC-Cert {
            width: 80px;
        }

        .disc-cert-text {
            text-align: left;
        }

        .bottomText {
            margin-top: -25px !important;
            margin-bottom: 0px;
        }
    }
}
</style>