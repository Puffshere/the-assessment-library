<template>
    <section class="acquisitions">
        <main-nav />
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Assessments 24x7</h1>
                        <h2>Recent Acquisitions and Acquistion Opportunities</h2>
                        <p>Discover Assessments 24x7's recent acquisition of DISCcert,
                            enhancing our offerings and client support. Explore the benefits for
                            clients and how you can discuss acquisition opportunities with us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <acquisitions-fold />
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="pressReleaseLink"><a class="hyperlink" href="/DISCcert-press-release">Read the full DISCcert press release
                                here.</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <key-benefits-fold />
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
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    // h2 {
    //     font-size: 20pt;
    //     line-height: 24pt;
    // }

    .pressReleaseLink {
        margin-bottom: 50px;
    }
}

@media only screen and (max-width: 1122px) {

    .header {
        padding-left: 15px;
        padding-right: 15px;
    }

    .section-title,
    .section-subtitle {
        font-size: 24pt !important;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        word-wrap: break-word;
        line-height: 30px !important;
    }

    .pressReleaseLink {
        margin-left: 0px !important;
    }

}
</style>