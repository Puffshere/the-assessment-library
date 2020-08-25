<template>
    <div class="main">
        <main-nav active="assessments"></main-nav>
        <assessments-header></assessments-header>
                <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <br/><br/>

                                        <h2>The Five Core Behavioral Assessments</h2>
                                        <p>
                                            After decades of work and research within the assessment industry, founder Dr. Tony Alessandra noticed the single assessment approach, 
                                            that had been so highly regarded, often ignored the complexity of human beings. The assessment industry lacked a powerful solution 
                                            that offered a more comprehensive, “whole person” methodology to understanding people and performance.
                                        </p>
                                        <p>
                                            By identifying five core styles of human behavior and cognition that have the greatest impact on personal and professional performance, 
                                            Assessments 24x7 compiled the first complementary series of assessments to evaluate the whole person - behavioral, motivational, thinking, 
                                            emotional, and learning styles. Used individually or in a variety of combinations, the five Core Assessments offer individuals and 
                                            organizations the opportunity for enhancing self-awareness and boosting performance beyond anything previously available within the assessment industry.
                                        </p>
                                        <p>
                                            Each of the five Core Assessments measures a different, yet important, dimension of human behavior or cognition.
                                        </p>

                                        <br/><br/>
                                    </div>
                                </div>    
                </div>
        <juxtapose-left
            title="DISC"
            body="Our most popular assessment and the world’s #1 behavioral profiling tool, DISC provides a highly-detailed analysis of each individual’s Natural and Adapted behavioral 
            styles and emotions. DISC reveals how a person will behave within a given environment, situation, or relationship. It offers prescriptive lessons designed to highlight and maximize 
            self-awareness, intentionality, and interpersonal communication, personally and professionally."
            image="disc"
            alt="DISC"
            href="/assessments/disc"
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
            body="The perfect companion to DISC, Motivators measures seven Dimensions of Motivation that drive our behavior and decisions: Aesthetic, Economic, Individualistic, Power, Altruistic, Regulatory, and 
            Theoretical. Just as DISC reveals how a person will likely behave, Motivators explores why we are driven to do what we do and what we value at our core. "
            image="motivators"
            alt="Motivators"
            href="/assessments/motivators"
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
            body="Emotional Intelligence (EIQ-2) is designed to highlight and examine one’s self-perception of their current EIQ and the effect it has on 
            interactions with others. By understanding our own emotions and how to manage them effectively, we can improve our decision-making, 
            leadership skill, and effectiveness as individuals, as well as accurately reading the emotions in others and engaging in mutually 
            beneficial interactions in a healthy way. With increased understanding of the impact of our emotions, we can be more intentional 
            with our expression to do what works."
            image="eiq"
            alt="Emotional Intelligence"
            href="/assessments/emotional-intelligence"
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
            title="Critical Thinking (HVP)"
            body="The Critical Thinking (HVP) assessment, based upon the research of Robert S. Hartman’s formal axiology, is a unique assessment measuring each individual’s problem solving skills 
            and their ability to avoid the blind spots associated with situational bias. In essence, the assessment measures, with uncanny accuracy, an individual’s critical processing 
            patterns, thinking strengths and abilities, and overall judgment skill."
            image="critical-thinking"
            alt="Critical Thinking (HVP)"
            href="/assessments/critical-thinking-hvp"
            linkText="Hartman Value Profile"
            :badges="[
                {
                    class: 'values-people',
                    label: 'INTUITIVE'
                },
                {
                    class: 'values-tasks',
                    label: 'PRACTICAL'
                },
                {
                    class: 'values-systems',
                    label: 'SYSTEMS / CONCEPTUAL'
                }
            ]"/>
        <juxtapose-left
            title="Learning Styles"
            body="Learning Styles identifies each individual’s preferred method for taking in, retaining, and recalling new information while engaging with the whole brain. 
            Because there is no one way to learn most effectively, everyone values different ways of interacting with their learning experience. Understanding how the whole 
            brain influences learning style offers the key to maximizing an individual’s learning transfer and gives an organization insight into training efficiencies designed 
            to meet learner’s needs."
            image="learning-styles"
            alt="Learning Styles"
            href="/assessments/learning-styles"
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
        <overview-360></overview-360>
        <corina-lorenzi></corina-lorenzi>
        <footer-fold></footer-fold>
    </div>
</template>

<script>
    import Nav from '../../components/Nav';
    import SimpleHero from '../../components/SimpleHero';
    import AssessmentsHeader from '../../components/AssessmentsHeader';
    import JuxtaposeLeft from '../../components/JuxtaposeLeft';
    import JuxtaposeRight from '../../components/JuxtaposeRight';
    import KeywordFold from '../../components/KeywordFold';
    import Overview360 from '../../components/Overview360';
    import CorinaLorenzi from '../../components/testimonials/CorinaLorenzi';
    import Footer from '../../components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'simple-hero': SimpleHero,
            'assessments-header': AssessmentsHeader,
            'juxtapose-left': JuxtaposeLeft,
            'juxtapose-right': JuxtaposeRight,
            'keyword-fold': KeywordFold,
            'overview-360': Overview360,
            'corina-lorenzi': CorinaLorenzi,
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
                title: 'Assessments | Assessments 24x7',
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
