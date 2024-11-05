<template>
    <div class="main">
        <main-nav active="home"></main-nav>
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+5+-+Bottom+right.png"
            alt="fold 4 graphic" style="position: absolute; right: 0px; padding-top: 145px; width: 45%;"
            class="accents">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <br />
                        <h1>
                            Powering Millions of <br />
                            Assessments Worldwide
                        </h1>
                        <h3>
                            Online assessments that work for <br />
                            <div class="rotating-text-container">
                                <span class="rotating-text" style="color: #E0AD2B; font-weight: 700;">{{ currentText
                                    }}</span>
                            </div>
                        </h3>
                        <br />
                        <p>
                            Take your online assessments to the next level with the world’s most trusted assessment
                            technology! You’ll get infinite customizations and an intuitive platform with scientifically
                            validated assessments, exceptional customer support, and flexible pricing plans — perfect
                            for
                            coaches and consultants, corporations and organizations of all sizes.
                        </p>
                        <br />
                        <button class="blue" @click="scrollToContactForm">
                            Book Live Demo
                        </button>
                    </div>
                    <div class="col-6">
                        <img src="~/assets/home-page/hero-fold-image.png" alt="image of man raising fist"
                            style="width: 100%;">
                    </div>
                </div>
            </div>
        </div>
        <LazyHydrate when-visible>
            <worlds-leading></worlds-leading>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <powerful-fold></powerful-fold>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <budget-fold></budget-fold>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <asi-fold></asi-fold>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <reviews></reviews>
        </LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <LazyHydrate when-visible>
            <blog></blog>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <catalysts></catalysts>
        </LazyHydrate>
        <LazyHydrate when-visible><contact-form-fold></contact-form-fold></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'worlds-leading': () => import('@/components/homePage/WorldsLeadingFold'),
        'powerful-fold': () => import('@/components/homePage/PowerfulFold'),
        'budget-fold': () => import('@/components/homePage/BudgetFold'),
        'asi-fold': () => import('@/components/homePage/ASIFold'),
        'reviews': () => import('@/components/homePage/Reviews'),
        'client-logos': () => import('@/components/ClientLogos'),
        'blog': () => import('@/components/homePage/Blog'),
        'catalysts': () => import('@/components/homePage/Catalysts'),
        'contact-form-fold': () => import('@/components/homePage/ContactFormFold'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            texts: ["you.", "your business.", "your teams.", "your clients."],
            currentText: "",
            currentTextIndex: 0,
            typing: false,
            structuredDataWebPage: {
                "@context": "http://schema.org",
                "@type": "WebPage",
                "name": "DISC Assessments & Tools for Behavioral Profiling | Assessments 24x7",
                "description": "Assessments 24x7 is a global leader in online DISC assessments and other behavioral profiling testing tools for organizations.",
            },
            structuredDataService: {
                "@context": "http://schema.org",
                "@type": "ProfessionalService",
                "name": "Assessments 24x7",
                "logo": "~/assets/disc-logo.png",
                "image": "https://assessments24x7-media.s3.us-west-002.backblazeb2.com/brand-elements/24x7logo.png",
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
                "image": "https://assessments24x7-media.s3.us-west-002.backblazeb2.com/brand-elements/24x7logo.png",
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
                    "image": "https://assessments24x7-media.s3.us-west-002.backblazeb2.com/brand-elements/24x7logo.png",
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

        };
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
                {
                    innerHTML: JSON.stringify(this.structuredDataFAQPage),
                    type: 'application/ld+json'
                },
            ]
        }
    },
    mounted() {
        this.startTypingEffect();
    },
    methods: {
        startTypingEffect() {
            const typeSpeed = 100;
            const deleteSpeed = 50;
            const delayBetweenPhrases = 1000;

            const typeText = () => {
                const fullText = this.texts[this.currentTextIndex];
                let charIndex = 0;
                this.typing = true;

                const typeChar = () => {
                    if (charIndex < fullText.length) {
                        this.currentText += fullText.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeChar, typeSpeed);
                    } else {
                        setTimeout(deleteText, delayBetweenPhrases);
                    }
                };

                typeChar();
            };

            const deleteText = () => {
                let charIndex = this.currentText.length;

                const deleteChar = () => {
                    if (charIndex > 0) {
                        this.currentText = this.currentText.substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(deleteChar, deleteSpeed);
                    } else {
                        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                        setTimeout(typeText, delayBetweenPhrases);
                    }
                };

                deleteChar();
            };

            typeText();
        },
        scrollToContactForm(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';


.container {
    padding-top: 50px;
    padding-bottom: 70px;
}

h1 {
    color: #213C85;
    font-family: Poppins;
    font-size: 27pt;
    font-weight: 700;
}

h3 {
    color: #213C85;
    font-family: Poppins;
    font-weight: 400;
    overflow: hidden;
    position: relative;
}

.rotating-text-container {
    position: relative;
    margin-top: 0em;
    height: 1.5em;
    overflow: hidden;
    display: inline-block;
}

.rotating-text {
    display: inline;
    white-space: nowrap;
}

p {
    color: #213C85;
    font-family: $nunito-family;
    font-size: 1em;
    font-weight: 400;
    margin-top: -30px;
    margin-bottom: 20px;
}

.rotating-text-container::after {
    content: '|';
    animation: blink 0.7s infinite;
    color: #E0AD2B;
    font-weight: 700;
}

@keyframes blink {
    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

@media (max-width: 1200px) {
    img {
        width: 70% !important;
    }

    .container {
        padding-top: 0px;
    }

    .accents {
        display: none;
    }
}
</style>