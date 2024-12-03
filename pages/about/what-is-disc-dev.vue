<template>
    <div class="main">
        <main-nav active="about" />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">What is <span style="color: #00A8FF;">DISC?</span></h1>
                        <p style="padding: 0px 10px;">
                            The DISC assessment is a leading tool in understanding human behavior, emphasizing
                            observable patterns that affect teamwork, communication, and productivity. Taking a DISC
                            assessment reveals insights into your personal DISC profile, highlighting key strengths and
                            areas for growth. DISC categorizes human behavior into four main behavioral styles:
                            Dominance, Influence, Steadiness, and Conscientiousness. Each individual possesses a unique
                            behavioral style, helping explain approaches to communication, teamwork, and approaches to
                            challenges.
                        </p>
                    </div>
                </div>
                <div class="row button-container">
                    <button class="teal">
                        Sample Reports
                    </button>
                    <button class="light">
                        DISC Overview
                    </button>
                </div>
            </div>
        </section>

        <section class="discModel">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container" style="color: #213C85;">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-5">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/DISC+Model.webp"
                                    alt="image of a laptop computer" style="width: 70%; margin-top: 0px;">
                                <div class="lightBox">
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/light-bulb.webp"
                                        alt="image of a light bulb" style="margin-left: -20px;">
                                    <span class="lightBoxText">Discover who created DISC.</span>
                                </div>
                            </div>
                            <div class="col-7" style="text-align: right;">
                                <h3>
                                    What Is the DISC Model?
                                </h3>
                                <p
                                    style=" position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                    While many associate DISC with personality types, it actually focuses on distinct
                                    behavioral styles, helping people understand how their behavioral traits influence
                                    interactions and decision-making. The DISC model is widely used for professional and
                                    personal development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="usedFor">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-7">
                            <p style="padding: 0px 10px;">
                                DISC teaches users how to identify the predictable aspects of behavior and communication
                                and
                                to use that knowledge to their advantage. The ability to create a strong and immediate
                                connection with others is a fundamental skill in sales, management, executive-level
                                leadership, and everyday life. The goal of DISC is to help users build and maximize
                                productive relationships. Users don’t need to change their personality traits; they need
                                to
                                recognize what drives and motivates others and determine the best ways to effectively
                                interact with them. The comprehensive, yet simple, DISC reports teach users specific
                                skills
                                to improve their personal interactions that create immediate results.
                            </p>
                        </div>
                        <div class="col-5">
                            <h4 class="section-title">What is the <br />DISC assessment <br /><span
                                    style="color: #00A8FF;">used
                                    for?</span></h4>
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/What+Is+DISC/blue+arrow.webp"
                                alt="blue arrow" style="width: 30%; margin-top: -10px; margin-right: -180px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="overview">
            <div class="container-wrapper">
                <div class="container" style="color: #213C85;">
                    <div class="row">
                        <div class="col-12">
                            <h3>
                                DISC overview
                            </h3>
                            <p style=" position: relative; z-index: 10; background-color: white; padding-bottom: 10px;">
                                The DISC profile is a simple, practical, and easy-to-remember model that focuses on
                                individual patterns of observable behavior and emotions. It measures the intensity of
                                characteristics using scales of directness, openness, pace, and priority to create a
                                unique blend of four behavioral styles: <br />
                            <ul>
                                <li>Dominance (D)</li>
                                <li>Influence (I)</li>
                                <li>Steadiness (S)</li>
                                <li>Conscientiousness (C)</li>
                            </ul>
                            When a person uses the DISC model, they can identify their own blend of styles,
                            recognize and adapt to the styles of others, and develop a better communication process
                            that allows them to interact effectively with others to build mutually beneficial
                            relationships. This is applicable in any setting, including working with teams, sales,
                            leadership, or in other business and personal relationships. <br />
                            <br />
                            Using DISC can provide insight into behavioral tensions, causes of stress,
                            problem-solving, and ways to respond more effectively to conflict. When these items are
                            identified for each individual, it leads to better relationships, both personally and
                            professional. For example, salespeople using DISC can develop finely-tuned selling
                            skills based on identifying and responding to a customer's style. In personal
                            relationships, understanding the needs, emotions, and fears of others can help us build
                            mutually-beneficial partnerships.

                            </p>
                        </div>
                    </div>
                    <div class="row button-container">
                        <button class="teal">
                            Sample Reports
                        </button>
                        <button class="light">
                            Book Live Demo
                        </button>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <footer-fold />
    </div>
</template>

<script>
export default {
    components: {
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
                            "@id": "https://assessments24x7.com/about/what-is-disc",
                            "name": "What Is DISC?"
                        }
                    }
                ]
            },
            structuredDataFAQPage: {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                    "@type": "Question",
                    "name": "What does DISC stand for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DISC stands for Dominance, Influence, Steadiness, and Conscientiousness - four behavioral styles that can be used to identify an individual's patterns of observable behavior and emotions. It is a self-assessment tool used to improve productivity, teamwork, and communication by providing insight into behavioral tensions, causes of stress, problem-solving, and ways to respond more effectively to conflict."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the DISC Assessment used for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DISC teaches users how to identify the predictable aspects of behavior and communication and to use that knowledge to their advantage.  The ability to create a strong and immediate connection with others is a fundamental skill in sales, management, executive-level leadership, and everyday life."
                    }
                }]
            }
        }
    },
    head() {
        return {
            title: 'What is DISC | What is the DISC Model',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Get a better understanding of what is DISC used for and how it helps understand the behavioral styles and foster effective collaboration and personal growth.'
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
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';


.header {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 0px;
    padding-bottom: 60px;


    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        display: inline-block;
        margin: 0 20px;
    }
}

.discModel {
    .container-wrapper {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .lightBox {
        display: flex;
        align-items: center;
        width: 260px;
        height: 33px;
        border-radius: 7px;
        border: 1px solid #F5F5F5;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
        margin-top: 35px;
        margin-left: 10px;
    }

    .light-bulb {
        width: 70px;
        margin-left: -20px;
    }

    .lightBoxText {
        color: #213C85;
        font-family: $nunito-family;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5;
        text-decoration: underline;
    }
}

.usedFor {
    background-color: #1E222D;
    background-size: cover;
    color: #fff;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 50px;

    p {
        text-align: left;
    }

    h4 {
        text-align: right;
        line-height: 1.5em;
        margin-top: 20px;
    }
}

.overview {
    .container-wrapper {
        position: relative;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }

    .container {
        padding-top: 50px;
        padding-bottom: 85px;
    }

    .button-container {
        text-align: center;
        margin-top: 20px;
    }

    .button-container button {
        display: inline-block;
        margin: 0 20px;
    }
}

@media (max-width: 768px) {
    .header .button-container button {
        flex-direction: column;
        margin: 10px;
    }

    .overview {
        padding: 0px 10px;

        .button-container button {
            flex-direction: column;
            margin: 10px;
        }
    }
}
</style>