<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">                
                <div class="col-8">
                    <blockquote>
                        <p>
                            "When it comes to partnering, at Asentiv New York we're fussy about who we work with! It's important that the services we provide to 
                            our business consulting & leadership development clients are highly professional, strongly customer focused & flexible to 
                            individual needs.<br/><br/>

                            With Assessments 24x7 we found the same attention to detail - from set up to operation the team has been outstanding, 
                            providing quick response to our (many!) questions & a slick professional turnaround on all of the technical logistics we 
                            encountered."
                        </p>

                        <footer>
                            <cite>Rebecca Maxwell</cite>
                            <a class="hyperlink" href="http://www.perception-insights.com/" target="_blank" rel="noopener">Perception Insights</a>
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="~/assets/testimonials/rebecca-gibbons.jpg" alt="Rebecca Maxwell">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .testimonial {
        background: rgb(0,51,197);
        background: linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
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