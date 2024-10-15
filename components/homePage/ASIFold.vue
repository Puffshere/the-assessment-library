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
                            <h2 style="padding-top: 20px;">
                                Validated, Reliable, Compliant
                            </h2>
                            <p style="padding-right: 50px;">
                                Our assessments are validated by ASI to adhere to the highest standards set by the
                                American
                                Psychological Association and the Equal Employment Opportunity Commission. In addition,
                                Assessments 24x7 has one of the highest Cronbach scores for our DISC assessment, which
                                indicates exceptional consistency and reliability.
                            </p>
                            <button @click="scrollToContactForm" style="margin-top: 20px;">
                                Learn More
                            </button>
                        </div>
                        <div class="col-4">
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
                                alt="woman with a headset" style="width: 445px; margin-top: -150px;">
                        </div>
                        <div class="col-6">
                            <h2 style="text-align: right;">
                                <span style="color: #E0AD2B;">Exceptional</span> <br />
                                customer support
                            </h2>
                            <p style="text-align: right;">
                                We’re here around the clock—24x7—to troubleshoot all aspects of your user experience,
                                with most issues resolved in 24 hours or less. We’re proud that 88% of our customers
                                rate our support as responsive and helpful!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <h2 style="text-align: left;">
                                <span style="color: #E0AD2B;">No</span> barriers
                            </h2>
                            <p style="text-align: left;">
                                We’re all about accessibility and affordability. Our Global Affiliate Network spans over
                                50 countries and we support assessments in more than 25 languages. In addition, we offer
                                flexible pricing options, with no membership fees, annual fees, or setup costs.
                            </p>
                        </div>
                        <div class="col-6">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Man+-+Fold+8.png"
                                alt="man smiling" style="width: 445px; float: right; margin-top: -220px; margin-bottom: -90px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    padding-top: 50px;
    margin-bottom: 123px;
}

h2 {
    color: #0459DF;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
}

p {
    color: #0459DF;
    font-family: "Nunito Sans";
    font-size: 14px;
    font-weight: 400;
}

button {
    width: 184px;
    height: 41px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    border: none;
    background: #0033C5;
}

.bottom {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
    padding-bottom: -75px;
}
</style>