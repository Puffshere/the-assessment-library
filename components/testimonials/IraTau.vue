<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/Banner/ira-tau.jpg" alt="Ira Tau">
                </div>
                
                <div class="col-8">
                    <blockquote>
                        <p>
                            "Assessments24x7 is a top-notch educator and provider in the assessments space. The materials that they present 
                            are consistent, clear and well-organized, and enable learning at a pace that is suitable for each individual. 
                            Their website and portal make assessment administration easy. But most importantly, their training staff is 
                            second to none. I was blown away by the one-on-one expert training sessions I received and felt like I learned 
                            so much. In addition to learning how to interpret reports, I came away feeling greatly informed and educated in 
                            the underlying principles in each of the areas that the assessments represent. There's no question that I will 
                            continue with Assessments 24x7 for further education."
                        </p>

                        <footer>
                            <cite>Ira Tau</cite>
                            Certified Executive Coach<br/>
                            <a class="hyperlink" href="https://www.irataucoaching.com">https://www.irataucoaching.com</a>
                        </footer>
                    </blockquote>
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