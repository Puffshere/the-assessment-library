<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <blockquote>
                        <p>
                            "I worked with other assessments companies for five years before finally making the decision to partner exclusively with 
                            Assessments 24x7. This has proven to be a strategically sound decision for growing my training and coaching division. 
                            The array of ASI validated tools Assessments24x7 provides has not only been extremely helpful to my business, they have 
                            helped me expose and reduce more of my own blind spots."
                        </p>

                        <footer>
                            <cite>Kevin McCarthy, CSP</cite>
                            Keynote Speaker / Author / Trainer / Coach<br/>
                            <a class="hyperlink" href="mailto:Kevin@KevinMcCarthy.com">Kevin@KevinMcCarthy.com</a><br/>
                            <a class="hyperlink" href="https://ww3.blindspots.com/speaker-kevin-mccarthy">www.KevinMcCarthy.com</a>
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="~/assets/testimonials/banner/kevin-mccarthy.jpg" alt="Kevin McCarthy, CSP">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .testimonial {
        background: url('~assets/artifacts/content-bg.png');
        background-size: cover !important;
        background-position: center;
        padding: 40px 0;
        color: #fff;

        .image {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            display: block;
            border-radius: 50%;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        blockquote {
            display: block;
            margin-top: 30px;

            footer {
                font-size: 10pt;

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
</style>