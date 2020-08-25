<template>
    <div class="main">
        <main-nav active="home"></main-nav>
        <LazyHydrate when-visible><hero></hero></LazyHydrate>
        <LazyHydrate when-visible><leading-features></leading-features></LazyHydrate><!--The Leading Online Assessment Solution for 20+ Years-->
        <LazyHydrate when-visible><stats></stats></LazyHydrate>
        <LazyHydrate when-visible><technology-fold></technology-fold></LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <LazyHydrate when-visible><keyword-fold></keyword-fold></LazyHydrate>
        <LazyHydrate when-visible><validation></validation></LazyHydrate>
        <LazyHydrate when-visible><reviews></reviews></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'hero': () => import('@/components/Hero'),
            'leading-features': () => import('@/components/LeadingFeatures'),
            'stats': () => import('@/components/Stats'),
            'technology-fold': () => import('@/components/TechnologyFold'),
            'client-logos': () => import('@/components/ClientLogos'),
            'keyword-fold': () => import('@/components/KeywordFold'),
            'validation': () => import('@/components/ASIValidation'),
            'reviews': () => import('@/components/Reviews'),
            'footer-fold': () => import('@/components/Footer')
        },
        data() {
            return {
                structuredDataWebPage: {
                    "@context": "http://schema.org",
                    "@type": "WebPage",
                    "name": "DISC Assessments & Tools for Behavioral Profiling | Assessments 24x7",
                    "description": "Assessments 24x7 is a global leader in online DISC assessments and other behavioral profiling testing tools to organizations.",
                },
                structuredDataService: {
                    "@context": "http://schema.org",
                    "@type": "ProfessionalService",
                    "name": "Assessments 24x7",
                    "logo": "",
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
                            "author": "Donna Bell",
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
                            "author": "Stephen Moore",
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
                            "author": "Jaymini Mistry",
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
                            "author": "Tamera Phallan",
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
                            "author": "Catherine D. McAnally",
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
                            "author": "Hamish Robertson",
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
                                "name": "Home" 
                            } 
                        }
                    ]
                },
                structuredDataVideo: {
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": "Assessments 24x7 Overview",
                    "description": "For more than 20 years, Assessments 24x7 has powered business consultants, executive coaches, and Fortune 500s with the tools to optimize hiring processes, boost employee productivity, and maximize performance.",
                    "thumbnailUrl": "https://www.assessments24x7.com/video-thumbnail.jpg",
                    "uploadDate": "2020-02-14T08:00:00+02:00",
                    "duration": "PT1M7S",
                    "embedUrl": "https://www.youtube.com/embed/2dGXLNzWrAc"
                }
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataWebPage),
                        type: 'application/ld+json'
                    },
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
                    {
                        innerHTML: JSON.stringify(this.structuredDataVideo),
                        type: 'application/ld+json'
                    },
                ]
            }
        }
    }
</script>
