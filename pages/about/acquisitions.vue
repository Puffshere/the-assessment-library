<template>
    <section class="acquisitions">
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7 Acquistions</h1>
                        <p>
                            acquisitionships are one of the cornerstones of our company and we are pleased to feature a
                            few of them here. They've taken our
                            assessment customization to the next level in some very creative ways, and they all provide
                            the high quality assessment
                            products that you would expect from an Assessments 24x7 partner.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mainBody">
            <div class="container">
                <div class="row">
                    <div class="body">
                        <div class="col-12">
                            <h2>Assessments 24x7 Acquires DISCcert, Enhancing Assessment Offerings and Client Support</h2>

                            <p class="mainParagraph">
                                Assessments 24x7, a leading provider of assessments and resources for personal and
                                professional development, is thrilled to announce its recent acquisition of DISCcert, a
                                prominent DISC assessment provider previously owned by Bonnie Burn. The acquisition was
                                completed on June 1, 2023, and signifies a significant step forward for both companies.
                            </p>

                            <p class="mainParagraph">
                                Bonnie Burn, the former owner of DISCcert, expressed her enthusiasm for the acquisition in a
                                heartfelt letter to her clients. She emphasized her commitment to constant process
                                improvement and highlighted the opportunities this acquisition presents for clients to
                                access a broader range of assessments and resources while continuing to receive outstanding
                                support. Brandon Parker, CEO of Assessments 24x7 is excited to offer DISCcert clients an
                                opportunity to upgrade their DISC reports and assessment dashboards to make the most of the
                                acquisition. “We are really looking forward to showing off our updated dashboard to all the
                                existing DISCcert clients. I truly think they will be blown away by the technology,” says
                                Brandon.
                            </p>

                            <h3>Key Benefits of the Acquisition for DISCCert Clients:</h3>

                            <p class="subParagraph">
                                <span class="bold">Access to a Broader Range of Assessments and
                                    Resources:</span>&nbsp;&nbsp;With Assessments 24x7's extensive
                                selection of assessments, clients now have access to tools designed to enhance motivation,
                                teamwork, leadership, emotional intelligence, and more. This expanded offering empowers
                                individuals and organizations to achieve their goals more effectively.
                            </p>

                            <p class="subParagraph">
                                <span class="bold">Access to a Broader Range of Assessments and
                                    Resources:</span>&nbsp;&nbsp;With Assessments 24x7's extensive
                                selection of assessments, clients now have access to tools designed to enhance motivation,
                                teamwork, leadership, emotional intelligence, and more. This expanded offering empowers
                                individuals and organizations to achieve their goals more effectively.
                            </p>

                            <p class="subParagraph">
                                <span class="bold">Access to a Broader Range of Assessments and
                                    Resources:</span>&nbsp;&nbsp;With Assessments 24x7's extensive
                                selection of assessments, clients now have access to tools designed to enhance motivation,
                                teamwork, leadership, emotional intelligence, and more. This expanded offering empowers
                                individuals and organizations to achieve their goals more effectively.
                            </p>

                            <p class="mainParagraph">Assessments 24x7 and DISCcert are both excited about the positive
                                impact this acquisition will have on their valued clients, their teams, and the broader DISC
                                community. Together, they look forward to advancing personal and professional development
                                opportunities through their combined expertise and resources.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <acquisitions-fold />
        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Acquisitions from '@/components/Acquisitions';

export default {
    components: {
        'main-nav': Nav,
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer,
        'acquisitions-fold': Acquisitions
    },
    head() {
        return {
            title: 'Assessments 24x7 | Recent Acquisitions and Acquisition Opportunities',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Discover Assessments 24x7\'s recent acquisition of DISCcert, enhancing our assessment offerings and client support. Explore the benefits for clients and learn how you can discuss acquisition opportunities with us.'
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
            }

            .bold {
                font-weight: bold;
            }

            .subParagraph {
                border-left: 4px solid #0033c5;
                padding: 10px;
                background: #f0eeee;
            }
        }
    }
}
</style>