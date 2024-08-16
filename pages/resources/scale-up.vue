<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Scale Up Your Coaching Business with DISC</h1>
                        <p>
                            Whether you’re just getting started in your coaching business or you’re an established coach with a large client base, 
                            implementing DISC assessments correctly could be a game changer for your business. Angie Fairbanks, Assessments 24x7 “Coach of 
                            Coaches,” will cover all the angles for using DISC in your business model.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">Scale Up Your Coaching Business with DISC (58 minutes)<br/>Uploaded October 15th, 2020</h4>
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7_WEBINAR_Coaching_Scale.pdf" class="button" style="float:right"><img class="pdf-icon" src="~/assets/pdf-icon.svg"> Download the Slide Deck</a>
                </div>

                <div class="col-12" style="margin-top:-10px;margin-bottom:20px">
                    <h4 style="font-size:16pt;margin-bottom:0">Downloadable Webinar Resources:</h4>
                    <a target="_blank" rel="noopener" href="https://calendly.com/angiemfairbanks" class="hyperlink">Schedule a Meeting with Angie</a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/scale-up/DISC Lead Generation Program .pdf" class="hyperlink">DISC Lead Generation PDF</a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/scale-up/SampleReport-DISC Lead Gen.pdf" class="hyperlink">Sample Report</a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/scale-up/Account Plus.pdf" class="hyperlink">Account Plus</a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/scale-up/chat-log.txt" class="hyperlink">Chat Log</a>&nbsp;&nbsp;
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/scale-up/SCRIPT - Position Your Clients to Take the Assessment and Future Assessments.pdf" class="hyperlink">Script</a>
                </div>

                <div class="col-12">
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/szlFnGaHdNg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                title: 'Scale Up Your Coaching Business with DISC | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Whether you’re just getting started in your coaching business or you’re an established coach with a large client base, implementing DISC assessments correctly could be a game changer for your business.'
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
            background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/ribbon.png'), linear-gradient(218deg, #0999fe, #0249ec, #0999fe);
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