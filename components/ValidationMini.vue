<template>
    <section class="validation-mini">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="image" src="~assets/asi-certified.png" alt="Scientifically Validated Assessments by ASI">
                    <h3 class="section-title">Validated. Reliable. Compliant.</h3>
                    <p class="section-subtitle"><strong>A Scientific Solution for Professionals.</strong></p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p>
                        Our assessments are leading by example with independent validation meeting APA, EEOC, AREA, and NCME 
                        standards. Our goal is to ensure the trust of both our members and end-users alike by providing the 
                        most accurate and reliable assessments available. This is why we 
                        believe in a policy of total transparency, with every study's report available for your review, and 
                        available to be shared with your clients and colleagues. In an apples-to-apples comparison, we 
                        believe our assessments and reports will prove to be the top choice among industry professionals who 
                        value accuracy, compliance, and objectivity.
                    </p>

                    <nuxt-link to="/about/validity" class="hyperlink">Learn More About Our Assessment Validation &rarr;</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .validation-mini {
        background: url('~assets/artifacts/right-rings.png') no-repeat right;
        padding-bottom: 100px;
        margin-bottom: -60px;
        padding-top: 70px;

        .image {
            width: 200px;
            margin: 0 auto -20px;
            display: block;
        }
        
        .section-title {
            font-size: 30pt;
            font-weight: 700;
            text-align: center;
            margin-bottom: 0;
        }

        .section-subtitle {
            text-align: center;
            margin-top: 0;
            margin-bottom: 10px;
        }
    }
</style>
