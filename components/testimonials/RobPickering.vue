<template>
    <section class="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <blockquote>
                        <p>
                            "After using the standard account for years, our conversion to Account Plus has created freedom for us and our clients. We’ve 
                            been able to create sub-accounts for our clients and liberate from waiting for us to set things up and run reports. Now our 
                            clients simply buy reports and use them as they need to. Often the first we know about it is when the payment arrives into our 
                            account! The ease of use for our clients has meant that they use a wider range of reports and more of them - win:win!"
                        </p>

                        <footer>
                            <cite>Rob Pickering</cite>
                            <a class="hyperlink" href="https://reading.actioncoach.co.uk/">Senior Partner & Coach - ActionCOACH Reading (UK)</a>
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="https://cdn.assessments24x7.com/file/assessments24x7-media/Testimonials/Banner/rob-pickering.jpg" alt="Rob Pickering">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .testimonial {
        background: url('~assets/artifacts/content-bg.jpg');
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