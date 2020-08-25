<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="image" src="~/assets/testimonials/banner/corina-lorenzi.jpg" alt="Corina Lorenzi">
                </div>
                
                <div class="col-8">
                    <blockquote>
                        <p>
                            "Becoming certified in Emotional Intelligence (EIQ-2) was a great experience. Although I have 
                            a wealth of experience, I learned more than I expected through this certification."
                        </p>

                        <footer>
                            <cite>Corina Lorenzi</cite>
                            Founder and Director<br/>
                            Elite Success Strategies<br/>
                            <a class="hyperlink" href="http://elitesuccessstrategies.com.au/">http://elitesuccessstrategies.com.au/</a>
                        </footer>
                    </blockquote>
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
            margin-top: 30px;
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