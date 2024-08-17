<template>
    <section class="validation-mini-disc">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img v-if="birdVersion" class="image" src="~assets/asi-certified-birds.png"
                        alt="Scientifically Validated Assessments by ASI" loading="lazy">
                    <img v-else class="image" src="~assets/asi-certified.png"
                        alt="Scientifically Validated Assessments by ASI" loading="lazy">
                    <h3 class="section-title">Validated. Reliable. Compliant.</h3>
                    <p class="section-subtitle"><strong>A Scientific Solution for Professionals.</strong></p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p>
                        Our assessments are leading by example with independent validation meeting APA, EEOC, AERA, and
                        NCME standards. Our goal is to ensure the trust of both our members and end-users alike by
                        providing the most accurate and reliable assessments available. This is why we believe in a
                        policy of total transparency, with every study's report available for your review, and available
                        to be shared with your clients and colleagues. In an apples-to-apples comparison, we believe our
                        assessments and reports will prove to be the top choice among industry professionals who value
                        accuracy, compliance, and objectivity.
                    </p>

                    <nuxt-link to="/about/validity" class="hyperlink">Learn More About Our Assessment Validation
                        &rarr;</nuxt-link>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="review-container">
                        <div class="col-4">
                            <div class="review" data-aos="fade-up" data-aos-duration="1000">
                                <div class="review-avatar ellie-gates lazyload"></div>
                                <div class="social-icon">
                                    <img class="lazyload" data-src="~/assets/social-icons/alignable.png"
                                        alt="Alignable">
                                </div>
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <p class="review-name"><strong>Ellie Gates</strong> - ActionCOACH Partner</p>
                                <p class="review-body">They provide great assessments to help you understand deeper
                                    facets of who you are so you can lead more effectively!</p>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="review" data-aos="fade-up" data-aos-duration="1000">
                                <div class="review-avatar felicia-miller-johnson lazyload"></div>
                                <div class="social-icon">
                                    <img class="lazyload" data-src="~/assets/social-icons/alignable.png"
                                        alt="Alignable">
                                </div>
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <p class="review-name"><strong>Felicia Miller Johnson</strong> - Sevenfold Coaching</p>
                                <p class="review-body">I enjoy the quality of assessments, ease of administering them,
                                    and their customer service. It is a great resource for my business.</p>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="review" data-aos="fade-up" data-aos-duration="1000">
                                <div class="review-avatar lorraine-terry lazyload"></div>
                                <div class="social-icon">
                                    <img class="lazyload" data-src="~/assets/social-icons/alignable.png"
                                        alt="Alignable">
                                </div>
                                <div class="review-stars">
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                    <span class="star">★</span>
                                </div>
                                <p class="review-name"><strong>Lorraine Terry</strong> - LivingByDesign</p>
                                <p class="review-body">I highly recommend Assessments 24x7 LLC for their invaluable
                                    Assessments, excellent training & exceptional customer service! I am proud to be
                                    their #18 Advanced Certified Practitioner.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12" style="display: flex; justify-content: center;">
                    <nuxt-link to="/contact" class="button" style="margin-top: 10px;">Meet with an
                        Expert</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['birdVersion']
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.validation-mini-disc {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/right-rings.png') no-repeat right;
    padding-bottom: 130px;
    margin-bottom: -60px;
    padding-top: 50px;

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

    .review-container {
        margin-top: 20px;

        .review {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 5px 10px;
            background: #fff;
            position: relative;
            min-height: 210px;
            max-height: 210px;
            margin-bottom: 26px;

            .review-avatar {
                width: 62px;
                height: 62px;
                background-size: cover !important;
                border-radius: 50%;
                position: absolute;
                margin-left: -18px;
                margin-top: -11px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border: 2px solid #fff;
            }

            .lazyloaded {
                &.ellie-gates {
                    background: url('~assets/review-avatars/ellie-gates.jpg');
                }

                &.felicia-miller-johnson {
                    background: url('~assets/review-avatars/felicia-miller-johnson.jpg');
                }

                &.lorraine-terry {
                    background: url('~assets/review-avatars/lorraine-terry.jpeg');
                }
            }

            .social-icon img {
                width: 24px;
                position: absolute;
                right: 15px;
                top: 15px;
            }

            .review-stars {
                margin-left: 56px;
                margin-top: 8px;

                .star {
                    color: #ffffff;
                    font-size: 14pt;
                    background: $color-i;
                    padding: 0 5px;
                }
            }

            .review-name {
                margin: 22px 0 0;
                font-size: 11pt;
            }

            .review-body {
                font-size: 10pt;
                margin-top: 6px;
            }
        }
    }
}
</style>
