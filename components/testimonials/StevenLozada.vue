<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <blockquote>
                        <p>
                            "I am truly satisfied with the professionalism, expertise and friendliness of everyone I've worked 
                            with at Assessments 24x7. They have provided me with excellent assessment tools and exquisite 
                            certification training, and have satisfactorily responded to all my questions and requests with 
                            great dispatch and care. My partnership with Assessments 24x7 is a critical success factor in my 
                            business and I wouldn't have it any other way."
                        </p>

                        <footer>
                            <cite>Steven Lozada</cite>
                            President<br/>
                            Upward Mindset
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/Banner/steven-lozada.jpg" alt="Steven Lozada">
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