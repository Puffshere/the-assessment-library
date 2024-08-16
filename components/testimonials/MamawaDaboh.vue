<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/mamawa-daboh.jpg" alt="Mamawa Daboh">
                </div>

                <div class="col-8">
                    <blockquote>
                        <p>
                            "We are happy to recommend Assessments 24x7 for your assessment needs. Purchasing the assessments was probably one of the best decisions we've made so far. They have been a great tool to help 
                            guide our hiring efforts, and the results are spot-on."
                        </p>

                        <footer>
                            <cite>Mamawa Daboh</cite>
                            Operations Manager, Respace<br/>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .testimonial {
        background: rgb(0,51,197);
        background: linear-gradient(218deg, #ffa518, #fc542a, #ffa518);
        background-size: 200% 200%;
        animation: GradientFade 10s ease infinite;

        @keyframes GradientFade { 
            0% { background-position: 88% 0%; }
            50% { background-position: 13% 100%; }
            100% { background-position: 88% 0%; }
        }

        padding: 40px 0;
        color: #fff;

        .image {
            width: 100%;
            max-width: 250px;
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