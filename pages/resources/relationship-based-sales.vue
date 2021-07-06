<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Stop, Collaborate, & Listen - Relationship-Based Sales</h1>
                        <p>
                            If “selling” feels unnatural to you or you’d like to improve upon your established sales methods, this is the webinar you’ve 
                            been waiting for! Join Monica Saare, President of Assessments 24x7 Corporate Division, for a short Master Class on 
                            relationship-based sales techniques with her “Stop, Collaborate, & Listen” sales-focused webinar.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">Relationship Based Sales (38 minutes)<br/>Uploaded February 4th, 2021</h4>
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7_WEBINAR_Relationship_Based_Sales.pptx" class="button" style="float:right">Download the Slide Deck</a>
                </div>

                <div class="col-12" style="margin-top:-10px;margin-bottom:20px">
                    <h4 style="font-size:16pt;margin-bottom:0">Downloadable Webinar Resources:</h4>
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/Qualifying+Questions.docx" class="hyperlink">Qualifying Questions</a>&nbsp;&nbsp;
                </div>

                <div class="col-12">
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/HrGycXCKx74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                title: 'Relationship-Based Sales Webinar | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'If “selling” feels unnatural to you or you’d like to improve upon your established sales methods, this is the webinar you’ve been waiting for!'
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