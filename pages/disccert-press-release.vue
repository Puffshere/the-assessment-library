<template>
    <section class="acquisitions">
        <main-nav />

        <!-- <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7 Acquistions</h1>
                        <p>
                            Acquisitionships are one of the cornerstones of our company and we are pleased to feature a
                            few of them here. They've taken our
                            assessment customization to the next level in some very creative ways, and they all provide
                            the high quality assessment
                            products that you would expect from an Assessments 24x7 partner.
                        </p>
                    </div>
                </div>
            </div>
        </section> -->

        <section class="mainBody">
            <div class="container">
                <div class="row">
                    <div class="body">
                        <div class="col-12">
                            <h2>Assessments 24x7 Acquires DISCcert, Enhancing Assessment Offerings and Client Support</h2>

                            <p class="mainParagraph">
                                East Wenatchee, WA October 3, 2023 - Assessments 24x7, a leading provider of assessments and
                                resources for personal and professional development, is thrilled to announce its recent
                                acquisition of DISCcert, a prominent DISC assessment provider previously owned by Bonnie
                                Burn. The acquisition was completed on June 1, 2023, and signifies a significant step
                                forward for both companies.
                            </p>

                            <p class="mainParagraph">
                                Bonnie Burn, the former owner of DISCcert, expressed her enthusiasm for the acquisition in a
                                heartfelt letter to her clients. She emphasized her commitment to constant process
                                improvement and highlighted the opportunities this acquisition presents for clients to
                                access a broader range of assessments and resources while continuing to receive outstanding
                                support. Brandon Parker, CEO of Assessments 24x7, is excited to offer DISCcert clients an
                                opportunity to upgrade their DISC reports and assessment dashboards to make the most of the
                                acquisition. “We are really looking forward to showing off our updated dashboard to all the
                                existing DISCcert clients. I truly think the technology will blow them away,” says Brandon.
                            </p>

                            <h3>Key Benefits of the Acquisition for Clients:</h3>

                            <p class="subParagraph">
                                <span class="bold">Access to a Broader Range of Assessments and
                                    Resources:</span>&nbsp;&nbsp;With Assessments 24x7's extensive
                                selection of assessments, clients now have access to tools designed to enhance motivation,
                                teamwork, leadership, emotional intelligence, and more. This expanded offering empowers
                                individuals and organizations to achieve their goals more effectively.
                            </p>

                            <p class="subParagraph">
                                <span class="bold">Continued Outstanding Support:</span>&nbsp;&nbsp;Assessments 24x7 boasts
                                a dedicated team of experienced professionals who are committed to providing exceptional
                                support. Clients can rely on readily available assistance for utilizing assessments,
                                navigating the platform, and addressing any questions or concerns. The support services are
                                also available across multiple time zones, extending office hours for added convenience.
                            </p>

                            <p class="subParagraph">
                                <span class="bold">Seamless Transition:
                                </span>&nbsp;&nbsp;Clients can expect a smooth and seamless transition, as Assessments 24x7
                                has powered DISCcert assessments for the past 15 years. This continuity ensures that clients
                                will experience minimal disruptions to their day-to-day workflow.
                            </p>

                            <p class="mainParagraph">Bonnie Burn reassured her clients that she would be exploring new
                                endeavors related to her passion for DISC, including keynote speaking and writing a DISC
                                book, while remaining active on her LinkedIn personal account.</p>

                            <p class="mainParagraph">Clients of DISCcert are encouraged to check their inboxes for email
                                announcements from the company, which will include updated points of contact for all DISC
                                and DISC certification support needs. The transition is designed to be effortless, ensuring
                                that clients can continue to rely on high-quality assessments and services.</p>

                            <p class="mainParagraph">Assessments 24x7 and DISCcert are both excited about the positive
                                impact this acquisition will have on their valued clients, their teams, and the broader DISC
                                community. Together, they look forward to advancing personal and professional development
                                opportunities through their combined expertise and resources.</p>

                            <p class="mainParagraph"><span class="italic">For more information about Assessments 24x7 and
                                    its offerings, please visit</span> <span><a class="link"
                                        href="/">www.assessments24x7.com</a></span>.</p>

                            <p class="subParagraph">
                                <span class="bold">About Assessments 24x7:
                                </span>&nbsp;&nbsp;For 24+ years, Assessments 24x7 has provided consultants, coaches, and
                                corporations the tools to optimize hiring processes and maximize performance. Our validated
                                assessments, flexible platform, and exceptional support have positioned us as a "Global
                                Leader in Assessment Technology."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer,
    },
    head() {
        return {
            title: 'Assessments 24x7 Acquires DISCcert',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Assessments 24x7\'s acquisition of DISCcert enhances assessment offerings and support for DISCcert customers.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.acquisitions {
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

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    .mainBody {
        margin: 30px 0 80px;

        .body {
            margin-bottom: 40px;

            .mainParagraph {
                margin-bottom: 20px;
                margin-top: 0;

                .italic {
                    font-style: italic;
                }
            }

            .bold {
                font-weight: bold;
            }

            .link {
                color: blue;
            }

            .subParagraph {
                border-left: 4px solid #0033c5;
                padding: 10px;
                background: #f0eeee;
            }
        }
    }
}</style>