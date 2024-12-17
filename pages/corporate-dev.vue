<template>
    <div class="main">
        <main-nav active="corporate"></main-nav>

        <section class="hero">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container">
                    <div class="col-12" style="text-align: left;">
                        <div class="row">
                            <div class="col-8">
                                <h1 style="color: #213C85; text-align: left; margin-top: 20px;">
                                    Elevating Corporations to <br />
                                    New Levels of Success
                                </h1>
                                <h3 style="color: #E0AD2B; font-weight: 400; margin-top: -10px;">
                                    One assessment at a time 🚀
                                </h3>
                                <button class="blue" @click="scrollToContactForm">
                                    Book Live Demo
                                </button>
                            </div>
                            <div class="col-4">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Corporate+hero+image.webp"
                                    alt="hero image" style="width: 338px; margin-top: -40px; margin-bottom: -50px;"
                                    class="heroImage">
                            </div>
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <section class="trusted">
            <div class="container">
                <div class="row" style="padding: 0 100px;">
                    <h3>
                        Trusted by top companies worldwide
                    </h3>
                    <p>
                        No matter the size or complexity of your company and the markets you serve, Assessments 24x7
                        has you covered! For more than 25 years, we’ve been the provider of choice for industry-leading
                        businesses worldwide who use DISC and specialized behavioral assessments to elevate corporate
                        culture, maximize training results, exceed productivity goals, produce world-class leaders, and
                        build
                        highly productive teams. We are proud to count some of the top companies in the world — from
                        small corporations to Fortune 500 companies — among our satisfied customers.
                    </p>
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Arrow+Left.webp"
                        alt="curly arrow image" style="width: 159px; align-items: center; margin-top: -20px;">
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>

        <section class="exclusive">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container">
                    <div class="col-12" style="text-align: left;">
                        <div class="row">
                            <div class="col-7">
                                <h3 style="color: #213C85; text-align: left; margin-top: 30px;">
                                    An exclusive platform to fit your unique needs
                                </h3>
                                <p style="font-weight: 400; color: #213C85;">
                                    Our powerful, industry-leading platform is your starting point and the foundation
                                    for
                                    your success in accessing, administering, and managing the full range of Assessments
                                    24x7’s products. Featuring infinite customization capabilities and seamless
                                    integration
                                    with your company’s LMS, CRM, HR, and recruiting systems, the platform features a
                                    robust
                                    yet intuitive dashboard that can be branded with your company logo and relevant
                                    content.
                                    The dashboard is accessible from any device, giving you instant access to your
                                    account
                                    anytime, wherever you may be.
                                </p>
                            </div>
                            <div class="col-5">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Platform+Image.webp"
                                    alt="image of a laptop" style="width: 413px;" class="laptopImage">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p style="color: #213C85;">
                                    On the Assessments 24x7 platform, you’ll find more than 100 benchmarking templates
                                    integrated with DISC to enhance your hiring and recruitment, as well as a library of
                                    more
                                    than 30 specialized assessments designed to encourage positive outcomes in your
                                    employees’
                                    personal and professional lives. <br />
                                    <br />
                                    Best of all, our platform is backed by the most skilled and responsive customer
                                    service
                                    team
                                    in the industry, so you’ll get the answers and troubleshooting help you need
                                    whenever
                                    you
                                    need it.
                                </p>
                            </div>
                        </div>
                        <div class="row btn" style="display: flex; justify-content: left; padding-top: 10px;">
                            <div class="col-12">
                                <button class="blue" @click="scrollToContactForm">
                                    Book Live Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <section class="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img class="image"
                            src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Testimonial+-+Will+Mahon.webp"
                            alt="Will Mahon">
                    </div>
                    <div class="col-8">
                        <blockquote>
                            <img class="quote"
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/yellowQuotes.webp"
                                alt="yellow quotations image">
                            <h3 style="font-weight: 400;">
                                We have been really happy with the ease of <span style="font-weight: 700;">using their
                                    platform.</span> That gives Assessments
                                24x7 our highest recommendation.”
                            </h3>
                            <button class="light" @click="jumpToReviews" style="margin-top: 10px;">
                                View Testimonials
                            </button>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <section class="partner">
            <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
                style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                            <h3 style="color: #213C85; text-align: center; margin-bottom: 0px;">
                                Your partner for organizational excellence and business success
                            </h3>
                            <p style="font-weight: 400;">
                                Assessments 24x7 is an indispensable partner for corporations and HR professionals,
                                offering
                                a level of analysis and insight that many other providers lack. Our powerful tools
                                include
                                over 30 assessments, including ASI-validated DISC and Motivators, as well as Emotional
                                Intelligence and many other impactful options. Insights from these assessments and tools
                                are
                                the starting point for better-informed and more effective decision-making:
                            </p>
                        </div>
                        <div class="col-12">
                            <div class="row cards-container">
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Smart <br />
                                                Hiring
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Smarter+Hiring+Icon.webp"
                                                alt="smarter hiring icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Hire and select employees who fit the job and the team — and remain
                                                engaged
                                                and productive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Employee <br />
                                                Retention
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Employee+Retention+Icon.webp"
                                                alt="employee retention icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Enhance employee satisfaction and retention.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Conflict <br />
                                                Resolution
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Conflict+Resolution+Icon.webp"
                                                alt="conflict resolution icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Minimize the potential for workplace conflicts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Team <br />
                                                Building
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Team+Building+Icon.webp"
                                                alt="team building icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Develop connected, cohesive, and effective teams that get the results
                                                you
                                                need.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row cards-container">
                                <div class="card cardSpace">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Performance & <br />
                                                Profits
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Performance+and+Profits+Icon.webp"
                                                alt="performance and profits icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Increase sales performance, creativity, and profits.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Impactful <br />
                                                Training
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Impactful+Training+Icon.webp"
                                                alt="impactful training icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Make employee training experiences more relevant, meaningful and
                                                motivational.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Leadership <br />
                                                Development
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Leadership+Development+Icon.webp"
                                                alt="leadership and development icon" class="card-image"
                                                style="width: 70px;">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Create true leaders who have deep insights into the dynamics of
                                                interpersonal and workplace behavior.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <p>
                                                Corporate <br />
                                                Culture
                                            </p>
                                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/corporate/Corporate+Culture+Icon.webp"
                                                alt="corporate culture icon" class="card-image">
                                        </div>
                                        <div class="card-back">
                                            <p>
                                                Strengthen corporate culture to align with organizational goals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row btn" style="display: flex; justify-content: center; padding-top: 70px;">
                            <button class="blue" @click="scrollToContactForm">
                                Book Live Demo
                            </button>
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </section>

        <section class="worldwide">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-4">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Customer+Service+rep.webp"
                                    alt="image of customer service rep" style="width: 266px;">
                            </div>
                            <div class="col-8" style="text-align: right;">
                                <h3 style="padding-top: 20px;">
                                    Worldwide service 24x7
                                </h3>
                                <p>
                                    Wherever you are, Assessments 24x7 supports you! With tools recognized globally and
                                    available in 25+ languages, serving clients in more than 50 countries. Our top-rated
                                    customer service is here around the clock, resolving most issues in 24 hours or
                                    less, no matter your time zone.
                                </p>
                                <div class="btn">
                                    <button class="light" @click="scrollToContactForm" style="margin-top: 20px;">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sampleReports">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-8" style="text-align: left;">
                                <h3 style="color: white;">
                                    Explore our <span style="color: #FFDE59;">sample reports</span>
                                </h3>
                                <p style="color: white;">
                                    Explore our diverse range of reports, including DISC, Motivators, Emotional
                                    Intelligence (EIQ), 360° Feedback, and more, designed to provide valuable insights
                                    for hiring, team building, and leadership development.
                                </p>
                                <button class="light" @click="jumpToSampleReports" style="margin-top: 20px;">
                                    View Sample Reports
                                </button>
                            </div>
                            <div class="col-4">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Sample+Reports.webp"
                                    alt="Image of sample reports" style="width: 246px; margin-top: 10px;"
                                    class="reportImage">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

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
import Footer from '@/components/Footer';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': Nav,
        'client-logos': () => import('@/components/ClientLogos'),
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
    },
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('contactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        jumpToReviews(event) {
            window.location.href = 'https://www.assessments24x7.com/about/testimonials';
            event.target.blur();
        },
        jumpToSampleReports(event) {
            window.location.href = 'https://www.assessments24x7.com/sample-reports';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.hero {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 70px;
        padding-bottom: 90px;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }
}

.trusted {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Business+Skyline+Background.webp');
    background-size: cover;
    background-position: center;
    padding: 40px 0;
    color: #213C85;
    text-align: center;
    margin-bottom: -80px;
}

.exclusive {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 70px;
        padding-bottom: 90px;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }
}

.testimonial {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Business+Skyline+Background.webp');
    background-size: cover;
    background-position: center;
    padding: 40px 0;
    color: #213C85;

    .image {
        width: 234px;
        margin: 0 auto;
        display: block;
    }

    blockquote {
        position: relative;
        text-align: right;
        margin-top: 50px;

        p {
            margin-left: 80px;
            position: relative;
        }

        .quote {
            position: absolute;
            top: -40px;
            left: -75px;
            width: 102px;
        }
    }
}

.partner {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 30px;
        padding-bottom: 70px;
    }

    p {
        font-weight: 700;
        color: #213C85;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        margin-top: 20px;
    }

    .card {
        width: 156px;
        height: 155px;
        perspective: 1000px;
        cursor: pointer;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 12px;
        border: 1px solid #E0E0E0;
        background: #FFF;
        box-shadow: 4px 4px 4px 0px rgba(7, 127, 248, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }

    .card-front {
        z-index: 2;
        transform: rotateY(0);

        p {
            margin-top: 0px;
        }
    }

    .card-back {
        transform: rotateY(180deg);
        background: #FFF;
        color: #FFF;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        text-align: center;
        line-height: 1em;

        p {
            font-weight: 400;
        }
    }

    .card-image {
        width: 80px;
        margin-top: -10px;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 45%;
        z-index: -1;
    }
}

.worldwide {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Business+Skyline+Background.webp');
    background-size: cover;
    background-position: center;
    padding-bottom: 50px;

    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 50px;
    }

    h3 {
        color: #213C85;
        font-weight: 700;
    }

    p {
        color: #213C85;
        ;
    }
}

.sampleReports {
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);

    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 50px;
        padding-bottom: 70px;
    }
}

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

@media (max-width: 900px) {
    .hero {
        h1 {
            margin-top: -20px !important;
        }

        .heroImage {
            margin-top: 20px !important;
        }

        .accents,
        .accents-right {
            display: none;
        }
    }

    .trusted .row {
        padding: 0 10px !important;

        p {
            padding: 0 10px !important;
            text-align: left;
        }
    }

    .exclusive {
        .container {
            padding-bottom: 70px !important;
        }

        h3 {
            margin-top: -10px !important;
            padding: 0 10px !important;
        }

        p {
            padding: 0 10px !important;
        }

        .laptopImage {
            width: 70% !important;
        }

        .btn {
            padding: 0 10px !important;
        }
    }

    .testimonial {
        .quote {
            margin-left: 40px;
            margin-top: -30px !important;
        }

        h3 {
            margin-top: 70px !important;
        }
    }

    .partner {

        h3,
        p {
            padding: 0 10px !important;
        }

        .cards-container {
            gap: 0px !important;
        }
    }

    .worldwide {

        h3,
        p {
            padding: 0 10px !important;
        }

        .btn {
            padding: 0 10px !important;
        }
    }

    .sampleReports {
        .reportImage {
            margin-top: 40px !important;
            margin-left: 50px !important;
        }
    }

    #contactForm {
        .container {
            padding-bottom: 60px !important;
        }

        h3,
        p {
            padding: 0 10px !important;
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
