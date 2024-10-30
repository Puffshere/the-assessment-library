<template>
    <div>
        <section>
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+5+-+Bottom+right.png"
                alt="fold 4 graphic" style="position: absolute; right: 0px; margin-top: -40px; width: 45%;">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
                alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 900px;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-8" style="text-align: left;">
                            <h3 style="padding-top: 20px;">
                                Validated, reliable, compliant
                            </h3>
                            <p style="padding-right: 50px;">
                                Our assessments are validated by ASI to adhere to the highest standards set by the
                                American
                                Psychological Association and the Equal Employment Opportunity Commission. In addition,
                                Assessments 24x7 has one of the highest Cronbach scores for our DISC assessment, which
                                indicates exceptional consistency and reliability.
                            </p>
                            <button class="blue" @click="jumpToValidityPage" style="margin-top: 20px;">
                                Learn More
                            </button>
                        </div>
                        <div class="col-4 seal">
                            <img class="image" src="~assets/asi-certified.png"
                                alt="Scientifically Validated Assessments by ASI" style="width: 283px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/woman+-+fold+8.png"
                                alt="woman with a headset" style="width: 445px; margin-top: -150px;"
                                class="personImage">
                        </div>
                        <div class="col-6">
                            <h3 style="text-align: right;">
                                <span style="color: #E0AD2B;">Exceptional</span> customer support
                            </h3>
                            <p style="text-align: right;">
                                We’re here around the clock to troubleshoot all aspects of your user experience,
                                with most issues resolved in 24 hours or less. Our customers consistently rate our
                                support as extremely responsive and helpful!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <h3 style="text-align: left;">
                                <span style="color: #E0AD2B;">No</span> barriers
                            </h3>
                            <p style="text-align: left;" class="bottomText">
                                We’re all about accessibility and affordability. Our Global Affiliate Network spans over
                                50 countries and we support assessments in more than 25 languages. In addition, we offer
                                flexible pricing options, with no membership fees, annual fees, or setup costs.
                            </p>
                        </div>
                        <div class="col-6">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Man+-+Fold+8.png"
                                alt="man smiling"
                                style="width: 445px; float: right; margin-top: -220px; margin-bottom: -90px;"
                                class="personImage">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        jumpToValidityPage(event) {
            window.location.href = 'https://www.assessments24x7.com/about/validity';
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
    margin-bottom: 123px;
}

h3 {
    color: #213C85;
    font-family: Poppins;
    font-weight: 700;
}

p {
    color: #213C85;
    font-family: $nunito-family;
    font-weight: 400;
}

.bottom {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
    padding-bottom: -75px;
}

@media (max-width: 1200px) {
    .personImage {
        width: 100% !important;
    }

    .seal {
        display: flex;
        justify-content: center;
    }

    .image {
        width: 50% !important;
        margin-top: 40px;
    }

    .bottomText {
        margin-bottom: 240px;
    }
}
</style>