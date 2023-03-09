<template>
    <div class="main">
        <main-nav active="corporate"></main-nav>
        <corporate-header></corporate-header>
        <juxtapose-left
            title="DISC"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                  lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
                  viverra maecenas accumsan lacus vel facilisis."
            image="https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
            alt="DISC"
            href="#"
            linkText="DISC Assessment"
            :lang="['english', 'uk-english', 'spanish', 'arabic', 'chinese', 'dutch', 'french', 'german', 'indonesian', 'japanese', 'cambodian', 'korean', 'malaysian', 'portugese', 'swedish', 'turkish', 'vietnamese']"
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
            ]"/>
        <juxtapose-right
            title="Motivators"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                  lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
                  viverra maecenas accumsan lacus vel facilisis."
            image="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
            alt="Motivators"
            href="#"
            linkText="Motivators Assessment"
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
            ]"/>
        <juxtapose-left
            title="Emotional Intelligence"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                  lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
                  viverra maecenas accumsan lacus vel facilisis."
            image="https://images.unsplash.com/photo-1556644424-2379c2803793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Emotional Intelligence"
            href="#"
            linkText="Emotional Intelligence Assessment"
            :lang="['english', 'spanish', 'french', 'japanese', 'portugese', 'vietnamese']"
            :badges="[
                {
                    class: 'eiq-self-rec',
                    label: 'SELF-RECOGNITION'
                },
                {
                    class: 'eiq-self-man',
                    label: 'SELF-MANAGEMENT'
                },
                {
                    class: 'eiq-soc-rec',
                    label: 'SOCIAL RECOGNITION'
                },
                {
                    class: 'eiq-soc-man',
                    label: 'SOCIAL MANAGEMENT'
                }
            ]"/>
        <juxtapose-right
            title="Hartman Value Profile"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                  lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
                  viverra maecenas accumsan lacus vel facilisis."
            image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Hartman Value Profile"
            href="#"
            linkText="Hartman Value Profile"
            :badges="[
                {
                    class: 'values-people',
                    label: 'PEOPLE'
                },
                {
                    class: 'values-tasks',
                    label: 'TASKS'
                },
                {
                    class: 'values-systems',
                    label: 'SYSTEMS'
                }
            ]"/>
        <juxtapose-left
            title="Learning Styles"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
                  lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
                  viverra maecenas accumsan lacus vel facilisis."
            image="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="Learning Styles"
            href="#"
            linkText="Learning Styles Assessment"
            :lang="['english', 'vietnamese']"
            :badges="[
                {
                    class: 'learning-att',
                    label: 'ATTENDING'
                },
                {
                    class: 'learning-tra',
                    label: 'TRANSLATING'
                },
                {
                    class: 'learning-rel',
                    label: 'RELATING'
                },
                {
                    class: 'learning-und',
                    label: 'UNDERSTANDING'
                }
            ]"/>
        <keyword-fold></keyword-fold>
        <footer-fold></footer-fold>
    </div>
</template>

<script>
    import Nav from '@/components/Nav';
    import SimpleHero from '@/components/SimpleHero';
    import CorporateHeader from '@/components/CorporateHeader';
    import JuxtaposeLeft from '@/components/JuxtaposeLeft';
    import JuxtaposeRight from '@/components/JuxtaposeRight';
    import KeywordFold from '@/components/KeywordFold';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'simple-hero': SimpleHero,
            'corporate-header': CorporateHeader,
            'juxtapose-left': JuxtaposeLeft,
            'juxtapose-right': JuxtaposeRight,
            'keyword-fold': KeywordFold,
            'footer-fold': Footer
        },
        data() {
            return {
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

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900');
    @import '~assets/scss/app';

    *, ::after, ::before {
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
</style>
