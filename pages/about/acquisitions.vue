<template>
    <section class="acquisitions">
        <main-nav />
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7</h1>
                        <h1 class="section-subtitle">Recent Acquisitions and </h1>
                        <h1 class="section-subtitle">Acquistion Opportunities</h1>
                        <p class="section-subtitle-description">Discover Assessments 24x7's recent acquisition of DISCcert,
                            enhancing our offerings and client support. Explore the benefits for
                            clients and how you can discuss acquisition opportunities with us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <acquisitions-fold />
        <key-benefits-fold />
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="ceoStatement">Brandon Parker, CEO of Assessments 24x7 is excited to
                            offer DISCcert clients an opportunity to upgrade their DISC reports and assessment
                            dashboards to make
                            the most of the acquisition. “We are really looking forward to showing off our
                            updated dashboard to all the existing DISCcert clients. I truly think they will be
                            blown away by the technology,” says Brandon.
                        </p>

                        <p class="ceoStatement2"><a href="/DISCcert-press-release">Read the full DISCcert press release
                                here.</a></p>
                    </div>
                </div>
            </div>
        </section>
        <acquisitions-interest-fold />
        <footer-fold />
    </section>
</template>


<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Acquisitions from '@/components/Acquisitions';
import KeyBenefitsFold from '../../components/KeyBenefitsFold.vue';
import AcquisitionsInterestFold from '../../components/AcquisitionsInterestFold.vue'


export default {
    components: {
        'main-nav': Nav,
        'contact-form': () => import('@/components/ContactForm'),
        'footer-fold': Footer,
        'acquisitions-fold': Acquisitions,
        'key-benefits-fold': KeyBenefitsFold,
        'acquisitions-interest-fold': AcquisitionsInterestFold
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
        background-size: cover;
        color: #161616;
        text-align: center;
        padding-top: 60px;
        padding-bottom: 30px;

        .section-title {
            font-size: 42pt;
            margin-top: 0;
            margin-bottom: 10px;
        }

        .section-subtitle {
            font-size: 42pt;
            font-weight: 400;
            margin-top: 0;
            line-height: 65px;
        }

        .section-subtitle-description {
            font-weight: 500;
            //line-height: 20pt;
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

    .ceoStatement {
        font-weight: 500;
        padding: 8px;
        line-height: 30px;
        margin-top: 60px;
    }
    .ceoStatement2 {
        font-weight: 500;
        padding: 8px;
        line-height: 30px;
        margin-bottom: 60px;
    }
}

@media only screen and (max-width: 1122px) {

    .section-title {
        font-size: 38pt !important;
    }

    .section-subtitle {
        font-size: 38pt !important;
    }

}
</style>