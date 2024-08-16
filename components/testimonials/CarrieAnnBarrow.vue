<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">                
                <div class="col-8">
                    <blockquote>
                        <p>
                            "My expectations were not simply met, they were exceeded. I am so impressed at the personal touch of the
                            person-to-person debrief and immediate email support. I definitely chose the right program."
                        </p>

                        <footer>
                            <cite>Carrie-Ann Barrow</cite>
                            Executive & Leadership Coach, Fractional Executive<br/>
                            Barrow Coaching & Consulting<br/>
                            <a class="hyperlink" href="http://www.barrowcs.com/">http://www.barrowcs.com/</a>
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/Banner/carrie-ann-barrow.jpg" alt="Carrie-Ann Barrow">
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
            margin-top: 40px;
            display: block;

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