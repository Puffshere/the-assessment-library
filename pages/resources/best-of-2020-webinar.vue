<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">The Best of 2020 & How to Apply The Concepts in 2021!</h1>
                        <p>
                            Our final webinar of 2020 is designed to launch you and your business into 2021 with the best information and tools available. 
                            We’ve pulled together the key takeaways from our favorite webinars for this event.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">The Best of 2020 (58 minutes)<br/>Uploaded December 9th, 2020</h4>
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7_WEBINAR_Best_of_2020.pdf" class="button" style="float:right"><img class="pdf-icon" src="~/assets/pdf-icon.svg"> Download the Slide Deck</a>
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/Hku0EZx86ik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Want to learn more? Contact us using the form below: </h3>
                    
                    <contact-form redirect="/thank-you" acFormId="17" />
                </div>
            
                <div class="col-4">
                    <LazyHydrate when-visible><survey-sidebar></survey-sidebar></LazyHydrate>
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div><br/><br/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'survey-sidebar': () => import('@/components/SurveySidebar'),
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'contact-form': () => import('@/components/ContactForm'),
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'The Best of 2020 Webinar | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Our final webinar of 2020 is designed to launch you and your business into 2021 with the best information and tools available.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skeleton {
        .header {
            background: url('~assets/about.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 70px 0;
            margin-bottom: 30px;

            .section-title {
                font-size: 30pt;
                margin-top: 0;
            }
        }

        .pdf-icon {
            width: 24px;
            margin-right: 5px;
        }

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        h2 {
            font-size: 20pt;
            line-height: 24pt;
        }

        .contact-form {
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 30px;
            margin-bottom: 10px !important;
        }

        .certification {
            background: rgb(0,51,197);
            background: url('~assets/artifacts/ribbon.png'), linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
            background-size: cover;
            background-position: center;
            padding: 80px 0 0;

            .title {
                font-size: 24pt;
                margin: 20px 0 0;
                position: relative;
                color: #fff;
            }
            
            p {
                color: #fff;
            }

            p, .button {
                position: relative;
            }

            .image {
                width: 100%;
                margin-bottom: -8px;
            }
        }
    }
</style>