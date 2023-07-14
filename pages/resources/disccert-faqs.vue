<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISCcert FAQs & Meet the Team Webinar</h1>
                        <p>
                            In this DISCcert exclusive webinar, Assessments 24x7 CEO Brandon Parker will introduce you to
                            your dedicated sales and transition team,
                            answer your questions, and offer suggestions for making the most of the additional assessment
                            solutions that are now available on your dashboard!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">DISCcert FAQs & Meet the Team Webinar (55 minutes)<br />Uploaded July
                        3rd, 2023</h4>
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/o6Dt1GWKNGE"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Want to learn more? Contact us using the form below: </h3>

                    <contact-form redirect="/thank-you" acFormId="17" />
                </div>

                <div class="col-4">
                    <div class="links">
                        <h2><span class="linksFirstWord">Additional</span> Webinar Materials</h2>
                        <a class="hyperlink"
                            href="https://www.assessments24x7.com/resources/trainer-materials/disc">Non-Certified DISC
                            Materials</a>
                        <p><a class="hyperlink" href="https://www.assessments24x7.com/sample-reports">Sample Reports</a></p>
                        <p><a class="hyperlink" href="https://www.assessments24x7.com/certifications">Certification & Upskill Information</a></p>
                        <p><a class="hyperlink" href="https://www.assessments24x7.com/resources/webinars">Previous Webinars</a></p>
                        <p><a class="hyperlink" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7+DISCcert+Webinar+.pdf">Webinar Slides</a></p>
                        <p><a class="hyperlink"
                            href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/DISC+Debrief+Coaching+Worksheet-+Assessments+24x7+report_Final.pdf">
                            Debrief Coaching Worksheet</a></p>
                    </div>
                    <br>
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
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'survey-sidebar': () => import('@/components/SurveySidebar'),
        'contact-sidebar': () => import('@/components/ContactSidebar'),
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'DISC Insights from 48 years in the Industry | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Dr. Tony Alessandra has been in the assessment industry for nearly 50 years. As a Hall of Fame member of the National Speakers Association and author of more than 30 books, Dr. Tony will ensure that this webinar is a huge value to all attendees.'
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
}

.links {
    margin-bottom: 25px;

    h2 {
        border-radius: 4px;
        border-bottom: 3px solid #eaeaea;
        font-size: 18pt;
        margin-top: 20;
        margin-bottom: 18px;
    }
}

.linksFirstWord {
    color: #0033c5;
}
</style>