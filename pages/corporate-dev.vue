<template>
    <div class="main">
        <main-nav active="corporate"></main-nav>
        <corporate-header></corporate-header>

        <section id="contactForm">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 915px;" class="accents">
            <div class="container-wrapper">
                <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
                    <div class="row">
                        <h3 style="margin-top: 30px; margin-bottom: 0px;">
                            <span style="color: #0033C5;">Make the most of your valuable human resources</span> <br />
                        </h3>
                        <p>
                            With Assessments 24x7’s powerful platform, agile dashboard, portfolio of assessments and
                            tools, and renowned customer service, you can achieve the full potential of your investment
                            in your organization and employees. You’ll hire better, create high-octane teams, stoke
                            employee satisfaction, streamline communication, and create a culture of growth that will
                            bring your company to a new level of success. <br />
                            <br />
                            <span style="font-weight: 700;">Ready to learn more about how Assessments 24x7 can
                                help?</span>
                        </p>
                        <div class="col-12 justify-content-center">
                            <div class="form-container">
                                <contact-form style="background: white;" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <footer-fold></footer-fold>
    </div>
</template>

<script>
import Nav from '@/components/Nav';
import SimpleHero from '@/components/SimpleHero';
import CorporateHeader from '@/components/CorporateHeader';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'simple-hero': SimpleHero,
        'corporate-header': CorporateHeader,
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer
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
                            "@id": "https://assessments24x7.com",
                            "name": "Homepage"
                        }
                    }
                ]
            }
        }
    },
    head() {
        return {
            __dangerouslyDisableSanitizers: ['script'],
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
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

#contactForm {
    background-size: cover;
    background-position: center;
    min-height: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    position: relative;


    .container-wrapper {
        position: relative;
        width: 100%;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }

    h3 {
        font-weight: 700;
        text-align: center;
    }

    p {
        color: #213C85;
        text-align: center;
    }

    .form-container {
        width: 100%;
        max-width: 800px;
        padding: 20px;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .col-12 {
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 1200px) {

    #contactForm {

        .accents,
        .accents-right {
            display: none;
        }
    }
}

@media (max-width: 450px) {

    #contactForm {
        p {
            padding: 0 20px !important;
        }
    }
}
</style>
