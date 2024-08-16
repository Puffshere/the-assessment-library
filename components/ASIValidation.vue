<template>
    <section class="validation">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="section-title">Scientifically Validated by a Trusted 3rd Party</h3>
                    <br/>
                    <p class="section-subtitle"><strong>The Trusted Industry Leader for Independently Tested Assessments.</strong></p>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <img class="image" src="~assets/asi-certified.png" alt="Scientifically Validated Assessments by ASI" lazy>
                </div>

                <div class="col-9">
                    <p>
                        <b><a class="hyperlink" href="https://assessmentinstitute.org" target="_blank" rel="noopener">The Assessment Standards Institute (ASI) reports</a> 
                        the overwhelming majority of assessments sold today lack the studies & reporting to verify their accuracy and 
                        fairness.</b> Of the small minority which do claim this reporting, most of those were conducted privately 
                        - not openly by an objective and qualified third party. Assessments 24x7 is raising the bar within this 
                        otherwise unregulated industry. Our assessments are leading by example, 
                        with independently conducted validity, reliability, and disparate impact reporting that meets 
                        <b>APA, EEOC, AERA, and NCME</b> standards for excellence and professional compliance.
                    </p>

                    <p>
                        Our goal? To ensure the confidence and trust of both members and end-users alike, by providing the 
                        most scientifically accurate and compliant assessments available today. This is why we 
                        believe in a policy of total transparency, with every study's report available for your review, and 
                        available to be shared with your clients and colleagues. In an apples-to-apples comparison, we 
                        believe our assessments and reports will prove to be the top choice among industry professionals who 
                        value accuracy, compliance, and objectivity.
                    </p><br/>

                    <nuxt-link to="/about/validity" class="button">Learn More About Validation</nuxt-link>
                    <nuxt-link to="/contact" class="button outline">Schedule a Demo</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .validation {
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/left-rings.png') no-repeat left;
        padding-bottom: 120px;
        margin-bottom: -60px;

        .image {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
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

    @media screen and (max-width: $breakpoint-small) {
        .validation {
            .section-title {
                font-size: 17pt;
                line-height: 21pt;
                margin: 10px 0;
            }

            .section-subtitle {
                margin-top: -20px;
            }

            .image {
                max-width: 220px;
            }

            .button {
                display: block;
                width: 100%;
                margin-bottom: 10px;
            }
        }
    }
</style>
