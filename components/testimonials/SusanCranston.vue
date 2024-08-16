<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <blockquote>
                        <p>
                            "One of the best business decisions I made as a certified coach was to explore the solutions offered by Assessments 24x7. 
                            The online certification courses, forums, training materials and support are world-class. Additionally, the assessment 
                            reports are personally branded and easy to assess. Working with Assessments 24x7 has supercharged my coaching practice 
                            and they've become an integral extension of my professional service offering. I highly recommend Assessments 24 x 7 to 
                            any coach, consultant, or corporate trainer looking for a one-stop solution that will ensure their business continues to 
                            innovate and stay forward-thinking."
                        </p>

                        <footer>
                            <cite>Susan Merli</cite>
                            Founder & CEO<br/>
                            Authentika Consulting Inc.
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/Banner/susan-cranston.jpg" alt="Susan Merli">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .testimonial {
        background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/content-bg.jpg');
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
            margin-top: 20px;

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