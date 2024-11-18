<template>
    <div class="main">
        <main-nav active="assessments" />
        <LazyHydrate when-visible><assessments-header /></LazyHydrate>
        <LazyHydrate when-visible>
            <assessment-tools></assessment-tools>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <what-are></what-are>
        </LazyHydrate>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5 style="margin-bottom: 0px;">DISC and Motivators – The Foundation Assessments</h5>
                    <p>
                        Whether they are used individually or in combination with each other, DISC and Motivators
                        continue to be two of
                        the most impactful assessments in the industry. They are used by coaches, managers, and leaders
                        around the
                        world to provide immediate insights and in-depth knowledge that might not be obvious from a
                        simple conversation
                        or interview.
                    </p>
                    <p>
                        Utilizing the DISC and Motivators assessments provides a path for people to learn more about
                        their own
                        communication styles and the underlying motivations that drive behavior and decision-making.
                        Coaches use them
                        to create powerful moments of self-awareness for clients, and managers apply them to develop
                        more insightful,
                        empathetic leaders.
                    </p>
                    <div class="button-container">
                        <button @click="learnMoreButton" class="blue">Learn More</button>
                    </div>
                    <br />
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><overview-360 /></LazyHydrate>

        <LazyHydrate when-visible>
            <juxtapose-left title="DISC" body="Our most popular assessment and the world’s #1 behavioral tool, DISC provides a highly-detailed analysis of each individual’s Natural and 
                Adapted behavioral styles. DISC reveals how a person will most likely behave within a given environment, situation, or relationship. It offers 
                prescriptive lessons designed to highlight and maximize self-awareness, intentionality, and interpersonal communication, personally and 
                professionally. " image="disc" alt="DISC" href="/assessments/disc" linkText="DISC Assessment"
                :lang="['english', 'uk-english', 'spanish', 'arabic', 'chinese', 'dutch', 'italian', 'polish', 'french', 'german', 'indonesian', 'japanese', 'cambodian', 'korean', 'norwegian', 'malaysian', 'portugese', 'portugese-brazil', 'russian', 'swedish', 'turkish', 'vietnamese']"
                :badges="[
                    {
                        class: 'disc-d',
                        label: 'DOMINANCE'
                    },
                    {
                        class: 'disc-i',
                        label: 'INFLUENCE'
                    },
                    {
                        class: 'disc-s',
                        label: 'STEADINESS'
                    },
                    {
                        class: 'disc-c',
                        label: 'CONSCIENTIOUS'
                    }
                ]" />
        </LazyHydrate>

        <LazyHydrate when-visible>
            <juxtapose-right title="Motivators"
                body="The perfect companion to DISC, Motivators measures seven Dimensions of Motivation that drive our behavior and decisions: Aesthetic, Economic, Individualistic, Power, Altruistic, Regulatory, and 
                Theoretical. Just as DISC reveals how a person will likely behave, Motivators explores why we are driven to do what we do and what we value at our core. "
                image="motivators" alt="Motivators" href="/assessments/motivators" linkText="Motivators Assessment"
                :lang="['english', 'uk-english', 'spanish', 'arabic', 'dutch', 'french', 'german', 'indonesian', 'japanese', 'portugese', 'swedish', 'turkish', 'vietnamese']"
                :badges="[
                    {
                        class: 'mot-aes',
                        label: 'AESTHETIC'
                    },
                    {
                        class: 'mot-eco',
                        label: 'ECONOMIC'
                    },
                    {
                        class: 'mot-ind',
                        label: 'INDIVIDUALISTIC'
                    },
                    {
                        class: 'mot-pow',
                        label: 'POWER'
                    },
                    {
                        class: 'mot-alt',
                        label: 'ALTRUISTIC'
                    },
                    {
                        class: 'mot-reg',
                        label: 'REGULATORY'
                    },
                    {
                        class: 'mot-the',
                        label: 'THEORETICAL'
                    },
                ]" />
        </LazyHydrate>

        <LazyHydrate when-visible>
            <characteristics />
        </LazyHydrate>
        <LazyHydrate when-visible><corina-lorenzi /></LazyHydrate>
        <LazyHydrate when-visible>
            <choosing />
        </LazyHydrate>
        <LazyHydrate when-visible>
            <faq />
        </LazyHydrate>
        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'simple-hero': () => import('@/components/SimpleHero'),
        'assessments-header': () => import('@/components/AssessmentHeader-dev'),
        'assessment-tools': () => import('@/components/assessments/AssessmentTools'),
        'what-are': () => import('@/components/assessments/WhatAre'),
        'overview-360': () => import('@/components/Overview360'),
        'juxtapose-left': () => import('@/components/JuxtaposeLeft'),
        'juxtapose-right': () => import('@/components/JuxtaposeRight'),
        'characteristics': () => import('@/components/assessments/Characteristics'),
        'corina-lorenzi': () => import('@/components/testimonials/CorinaLorenzi'),
        'choosing': () => import('@/components/assessments/Choosing'),
        'faq': () => import('@/components/assessments/FAQ'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            structuredDataService: {
                "@context": "http://schema.org",
                "@type": "ProfessionalService",
                "name": "Assessments 24x7",
                "logo": "~/assets/disc-logo.png",
                "image": "",
                "@id": "",
                "url": "https://assessments24x7.com",
                "telephone": "1 (206) 400-6647",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2873 W Bainbridge Road",
                    "addressLocality": "San Diego",
                    "addressRegion": "CA",
                    "postalCode": "92106",
                    "addressCountry": "US"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 32.731790,
                    "longitude": -117.220940
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "73"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Donna Bell",
                        },
                        "datePublished": "2019-07-09",
                        "reviewBody": "Assessments 24x7 is the gold standard for assessment technology. Their interfaces are intuitive, their support is best in class and their staff are remarkably knowledgable.",
                        "reviewRating": {
                            "@type": "Rating",
                            "bestRating": "5",
                            "ratingValue": "5",
                            "worstRating": "1"
                        }
                    },
                    {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Stephen Moore",
                        },
                        "datePublished": "2019-07-09",
                        "reviewBody": "Looking for a one-stop-shop for all your business assessment needs? I recommend that you check out Assessments 24x7 for the tools you can use in your organization.",
                        "reviewRating": {
                            "@type": "Rating",
                            "bestRating": "5",
                            "ratingValue": "5",
                            "worstRating": "1"
                        }
                    },
                    {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Jaymini Mistry",
                        },
                        "datePublished": "2019-07-09",
                        "reviewBody": "I applaud Assessments 24x7 for providing industry-leading tools that not only help coaches and executives, but in my case, will help me prepare the next generation of business leaders to reach their full potential!",
                        "reviewRating": {
                            "@type": "Rating",
                            "bestRating": "5",
                            "ratingValue": "5",
                            "worstRating": "1"
                        }
                    },
                    {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Tamera Phallan",
                        },
                        "datePublished": "2019-07-09",
                        "reviewBody": "The Advanced Certified Practitioner (ACP) journey was enriching, empowering and an exponential growth experience!",
                        "reviewRating": {
                            "@type": "Rating",
                            "bestRating": "5",
                            "ratingValue": "5",
                            "worstRating": "1"
                        }
                    },
                    {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Catherine D. McAnally",
                        },
                        "datePublished": "2019-07-09",
                        "reviewBody": "Assessments 24x7 knows assessments like no one else on Earth! They've been at it for more than a quarter century and they have it down to a science. You couldn’t ask for a better business partner!",
                        "reviewRating": {
                            "@type": "Rating",
                            "bestRating": "5",
                            "ratingValue": "5",
                            "worstRating": "1"
                        }
                    },
                    {
                        "@type": "Review",
                        "author": {
                            "@type": "Person",
                            "name": "Hamish Robertson",
                        },
                        "datePublished": "2019-07-09",
                        "reviewBody": "Not only did I get a better understanding, I received a degree of mastery and personal transformation. You've exceeded my expectations!",
                        "reviewRating": {
                            "@type": "Rating",
                            "bestRating": "5",
                            "ratingValue": "5",
                            "worstRating": "1"
                        }
                    }
                ]
            },
            structuredDataCorp: {
                "@context": "http://schema.org",
                "@type": "Corporation",
                "name": "Assessments 24x7",
                "image": "",
                "url": "https://assessments24x7.com",
                "sameAs": [
                    "https://www.facebook.com/Assessments247/",
                    "https://twitter.com/assessments24x7",
                    "https://www.linkedin.com/company/assessments24x7/",
                    "https://www.youtube.com/channel/UCMTQFqw_qs5DHV-jbxqydfA",
                    "https://www.alignable.com/san-diego-ca/assessments-24x7"
                ],
                "telephone": "1 (206) 400-6647",
                "email": "sales@assessments24x7.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2873 W Bainbridge Road",
                    "addressLocality": "San Diego",
                    "addressRegion": "CA",
                    "postalCode": "92106",
                    "addressCountry": "US"
                },
                "location": {
                    "@type": "Place",
                    "name": "Assessments 24x7",
                    "image": "",
                    "hasMap": "",
                    "telephone": "1 (206) 400-6647",
                    "url": "https://assessments24x7.com",
                    "sameAs": [
                        "https://www.facebook.com/Assessments247/",
                        "https://twitter.com/assessments24x7",
                        "https://www.linkedin.com/company/assessments24x7/",
                        "https://www.youtube.com/channel/UCMTQFqw_qs5DHV-jbxqydfA"
                    ],
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 32.731790,
                        "longitude": -117.220940
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "2873 W Bainbridge Road",
                        "addressLocality": "San Diego",
                        "addressRegion": "CA",
                        "postalCode": "92106",
                        "addressCountry": "US"
                    },
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "1 (206) 400-6647",
                        "email": "sales@assessments24x7.com",
                        "contactType": "sales"
                    }
                ]
            },
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
                    }
                ]
            }
        }
    },
    head() {
        return {
            title: 'Assessment Tools | Personality Assessment Tools Online',
            __dangerouslyDisableSanitizers: ['script'],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Professional assessment tools for skill, performance, and behavior analysis. Choose our self assessment tools to improve yourself personally and professionally.'
                }
            ],
            script: [
                {
                    innerHTML: JSON.stringify(this.structuredDataService),
                    type: 'application/ld+json'
                },
                {
                    innerHTML: JSON.stringify(this.structuredDataCorp),
                    type: 'application/ld+json'
                },
                {
                    innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                    type: 'application/ld+json'
                },
            ]
        }
    },
    methods: {
        learnMoreButton(event) {
            window.location.href = '/contact';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scroped>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900');
@import '~assets/scss/app';
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

*,
::after,
::before {
    box-sizing: border-box;
}

body {
    font-family: $font-family;
    margin: 0;
    padding: 0px;
    overflow-x: hidden;
    z-index: 0;
    position: relative;
}

img {
    vertical-align: middle;
    border-style: none;
}

.button-container {
    margin-top: 30px;
    display: flex;
    justify-content: left;
    gap: 20px;
}
</style>