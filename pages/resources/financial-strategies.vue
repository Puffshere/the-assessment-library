<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Financial Strategies for the COVID-19 Crisis: 7 Steps Your Business Can
                            Take Now</h1>
                        <p>
                            Assessments 24x7 has Joel Block from Bullseye Capital on our webinar series to shed light on
                            financial strategies and government programs for the COVID-19 crisis.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">Financial Strategies for the<br />COVID-19 Crisis (55 minutes)<br />Uploaded
                        April 8th, 2020</h4>
                    <a target="_blank" rel="noopener"
                        href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7_WEBINAR_Financial_Strategies_for_the_Covid-19_Crisis.pdf"
                        class="button" style="float:right">
                        <img class="pdf-icon" src="~/assets/pdf-icon.svg" alt="Download PDF"> Download the Slide Deck</a>
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/4jjK9O4eFU0" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>

                <div class="col-4">
                    <img class="image" src="~/assets/webinar-logos.png" alt="Assessments 24x7 and Bullseye Capital">
                    <h4 class="guest-title">Guest Speaker: Joel Block</h4>
                    <p class="guest-bio">
                        Joel began his career as a CPA with the prestigious firm of Price Waterhouse. During his time with
                        the company’s
                        Entrepreneurial Services Group, Joel immersed himself in the real estate syndication business. After
                        reviewing hundreds of
                        partnership agreements and preparing as many tax returns, he left Price Waterhouse in 1986 to start
                        his own syndication
                        firm, raising several million dollars in three short years. By 1990, Joel had built a property
                        management firm of more than
                        40 employees with a portfolio exceeding $100 million.
                    </p>
                </div>
            </div>
        </div><br /><br />

        <section class="certification">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h5 class="title">Get DISC Certified and Master DISC</h5>
                        <p>
                            Become a DISC expert with our self-paced, internationally accredited certification training.
                            Designed specifically for
                            coaches and corporate trainers, our one-on-one instructor-led sessions will teach you how to use
                            DISC completely online
                            and at your own pace.</p>

                        <p>
                            Our certifications also include many benefits such as exclusive access to our DISC Certified
                            Trainer Materials, discounted
                            SILVER LEVEL PRICING, and 10 complimentary DISC assessments when you begin.  
                        </p><br />

                        <nuxt-link to="/certifications/assessment" class="button outline light">Get DISC
                            Certified</nuxt-link>

                        <br /><br /><br /><br /><br />

                    </div>

                    <div class="col-4">
                        <img class="image" src="~/assets/badges/new/disc-cert-badge-color.png" alt="placeholder">
                    </div>
                </div>
            </div>
        </section><br /><br />

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Want to learn more? Contact us using the form below: </h3>

                    <contact-form redirect="/thank-you" acFormId="17" />
                </div>

                <div class="col-4">
                    <LazyHydrate when-visible><survey-sidebar></survey-sidebar></LazyHydrate>
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div><br /><br />

        <footer-fold></footer-fold>
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Overview360 from '@/components/Overview360';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'overview-360': Overview360,
        'vt-product-sidebar': () => import('@/components/VTProductSidebar'),
        'survey-sidebar': () => import('@/components/SurveySidebar'),
        'contact-sidebar': () => import('@/components/ContactSidebar'),
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'Financial Strategies for the COVID-19 Crisis | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Assessments 24x7 has Joel Block from Bullseye Capital on our webinar series to shed light on financial strategies and government programs for the COVID-19 crisis.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.skeleton {
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

    .pdf-icon {
        width: 24px;
        margin-right: 5px;
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    .contact-form {
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        padding: 30px;
        margin-bottom: 10px !important;
    }

    .guest-title {
        font-size: 20pt;
        text-align: center;
        margin: 10px 0;
    }

    .guest-bio {
        font-size: 10pt;
    }

    .image {
        width: 100%;
        max-width: 336px;
        margin: 40px auto 0;
        display: block;
    }

    .certification {
        background: rgb(0, 51, 197);
        background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
        background-size: cover;
        background-position: center;
        padding: 80px 0 0;

        .title {
            font-size: 24pt;
            margin: 20px 0 0;
            position: relative;
            color: #fff;
        }

        p {
            color: #fff;
        }

        p,
        .button {
            position: relative;
        }

        .image {
            width: 100%;
            margin-bottom: -8px;
        }
    }
}</style>