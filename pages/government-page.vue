<template>
    <div>
        <section class="banner">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/SDVOSB+Logo.webp"
                alt="sdvosb logo" style="width: 68px; height: 58px; ">
            <h3>Service-Disabled Veteran-Owned Small Business</h3>
        </section>

        <hr class="blueLine">

        <section class="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <img class="image"
                            src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Will+Fenick+Testimonial+Image.webp"
                            alt="Will Fenick">
                    </div>
                    <div class="col-8">
                        <blockquote>
                            <img class="quote"
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Blue+Quotations.webp"
                                alt="blue quotations image">
                            <p>
                                I took the DISC assessment a few years ago, and the information I learned transformed
                                how I navigated my personal and professional journey post-service. I wish I had embraced
                                the Assessment 24x7 approach sooner—it would have been invaluable during my career. In
                                that spirit, I'm very excited to make these assessments available to our government
                                sector professionals today."
                            </p>
                            <footer>
                                <cite>William R. Fenick, CAPT, USN (Retired),</cite>
                                CEO, Government Assessments 24x7<br />
                            </footer>
                            <button class="lightTeal" style="margin-top: 30px;">
                                Get Started
                            </button>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="elevate">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-8" style="text-align: left;">
                                <h3>
                                    <span style="color: #00A8FF;">Elevate</span> team dynamics accross <br />
                                    Government entities with DISC
                                </h3>
                                <p>
                                    The DISC Assessment reveals four primary behavioral styles—Dominance, Influence,
                                    Steadiness, and Conscientiousness—helping government teams communicate effectively,
                                    collaborate seamlessly, and reduce friction. <br />
                                    <br />
                                    D (Dominance): Confident and results-driven, focused on solving problems. <br />
                                    I (Influence): Persuasive and enthusiastic, excelling at building relationships.
                                    <br />
                                    S (Steadiness): Reliable and supportive, promoting consistency and teamwork. <br />
                                    C (Conscientiousness): Analytical and precise, ensuring accuracy and quality. <br />
                                    <br />
                                    When paired with tools like <a href="/assessments/motivators"
                                        class="hyperlink">Motivators</a> and <a
                                        href="assessments/emotional-intelligence" class="hyperlink">Emotional
                                        Intelligence</a> assessments,
                                    DISC becomes a cornerstone for developing mission-ready teams.
                                </p>
                                <button class="teal" style="margin-top: 25px;">
                                    Learn More
                                </button>
                            </div>
                            <div class="col-4 seal">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Government/Laptop+with+DISC+Model.webp"
                                    alt="laptop image" style="width: 305px; margin-top: 110px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="stats">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-3">
                            <p><span class="topLine">10 Min.</span><br />
                                <span class="bottomLine">Avg. Assessment <br />
                                    Completion Time</span>
                            </p>
                        </div>
                        <div class="col-3">
                            <p><span class="topLine">7+</span><br />
                                <span class="bottomLine">Free Team <br />
                                    Reports</span>
                            </p>
                        </div>
                        <div class="col-3">
                            <p><span class="topLine">50+</span><br />
                                <span class="bottomLine">Suite of <br />
                                    Supporting Assessments</span>
                            </p>
                        </div>
                        <div class="col-3">
                            <p><span class="topLine">ASI</span><br />
                                <span class="bottomLine">Validated & <br />
                                    Compliant</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <section class="asi">
            <div class="container-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="col-4 seal">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/asi-certified.webp"
                                    alt="Scientifically Validated Assessments by ASI"
                                    style="width: 212px; margin-top: 40px;">
                            </div>
                            <div class="col-8" style="text-align: right;">
                                <h3 style="padding-top: 20px;">
                                    <span style="color: #00A8FF;">Validated,</span> reliable, compliant
                                </h3>
                                <p>
                                    Our assessments are validated by ASI to adhere to the highest standards set by the
                                    American
                                    Psychological Association and the Equal Employment Opportunity Commission. In
                                    addition,
                                    Assessments 24x7 has one of the highest Cronbach scores for our DISC assessment,
                                    which
                                    indicates exceptional consistency and reliability.
                                </p>
                                <button class="teal" style="margin-top: 20px;">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="blueLine">

        <contact-form-fold></contact-form-fold>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>

    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'government-page', // This name is referenced in the middleware
    components: {
        LazyHydrate,
        'contact-form-fold': () => import('@/components/government/GovernmentContactFormFold'),
        'footer-fold': () => import('@/components/Footer')
    },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.banner {
    text-align: center;
    justify-content: center;
    color: white;
    background: linear-gradient(90deg, #0033C5 0%, #077FF8 100%);
    height: 83px;
    display: flex;

    h3 {
        margin: auto 0;
    }

    img {
        margin: auto 10px auto 0;
    }
}

.testimonial {
    background-color: #1E222D;
    padding: 40px 0;
    color: #fff;

    .image {
        width: 260px;
        border-radius: 50%;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        margin: 0 auto;
        display: block;
    }

    blockquote {
        position: relative;
        text-align: right;
        margin-top: 30px;

        p {
            margin-left: 60px;
            position: relative;
        }

        .quote {
            position: absolute;
            top: -40px;
            left: -25px;
            width: 80px;
        }

        footer {
            font-size: 10pt;
            margin-top: 10px;

            cite {
                font-weight: 800;
                display: block;
                font-size: 12pt;
            }

            .hyperlink {
                color: #fff;
            }
        }
    }
}

.elevate {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 30px;
        margin-bottom: 50px;
    }

    h3 {
        color: #1E222D;
        font-weight: 700;
    }

    p {
        color: #1E222D;
    }

    .bottom {
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/skyline-background.webp');
        background-size: cover;
        background-position: center;
        padding-bottom: -75px;
    }
}

.stats {
    background-color: #1E222D;
    background-position: center;
    min-height: 192px;

    .topLine {
        color: #00A8FF;
        text-align: center;
        font-family: Poppins;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        font-size: 27pt;
        font-weight: 700;
    }

    .bottomLine {
        font-size: 11.25pt;
        font-weight: 400;
    }

    .col-3 {
        text-align: center;
        color: white;
    }
}

.asi {
    .container-wrapper {
        position: relative;
    }

    .container {
        padding-top: 50px;
        margin-bottom: 123px;
    }

    h3 {
        color: #1E222D;
        font-weight: 700;
    }

    p {
        color: #1E222D;
    }

    .bottom {
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/skyline-background.webp');
        background-size: cover;
        background-position: center;
        padding-bottom: -75px;
    }
}

.blueLine {
    width: 100%;
    height: 6px;
    flex-shrink: 0;
    background: linear-gradient(90deg, #0033C5 0%, #077FF8 100%);
    margin: 0;
    margin-bottom: -1px;
}
</style>