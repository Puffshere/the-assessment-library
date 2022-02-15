<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Best Practices for Virtual Workshops</h1>
                        <p>
                            Please enjoy this free webinar conducted by Assessments 24x7 that provides tips on how to conduct workshops and meetings virtually.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin-bottom: 0px">Watch the Full Webinar:</h2>
                    <h4 style="float:left">HBest Practices for Virtual Workshops (35 minutes)<br/>Uploaded April 15th, 2020</h4>
                    <a target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/webinars/A24x7_WEBINAR_Conducting_Workshops_Online.pdf" class="button" style="float:right"><img class="pdf-icon" src="~/assets/pdf-icon.svg"> Download the Slide Deck</a>
                    <iframe style="width:100%" height="515" src="https://www.youtube.com/embed/d2A6HeLCYVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'Best Practices for Virtual Workshops | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Please enjoy this free webinar conducted by Assessments 24x7 that provides tips on how to conduct workshops and meetings virtually.'
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

        .programs {
            text-align: center;

            .program {
                border-radius: 20px;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);

                .top {
                    border-radius: 20px 20px 0 0;
                    padding: 10px;

                    &.disc { background: linear-gradient(268deg, #0999fe, #0249ec); }
                    &.motivators { background: linear-gradient(268deg, #ffa518, #fc542a); }
                    &.eiq { background: linear-gradient(268deg, #fa4ca6, #ff2f4c); }

                    .title {
                        color: #fff;
                        text-align: center;
                        margin-top: 0;
                        font-size: 18pt;
                    }

                    .badge-image {
                        width: 100%;
                        max-width: 230px;
                        margin: 0 auto;
                        display: block;
                    }
                }

                .body {
                    padding: 10px;

                    .date {
                        font-size: 18pt;
                        font-weight: 600;
                        margin-top: 10px;
                        margin-bottom: 0;
                    }

                    .time {
                        font-size: 16pt;
                        margin: 0;
                    }

                    .price {
                        font-size: 18pt;
                        font-weight: 600;

                        strike {
                            color: #e93d2f;
                            opacity: 0.4;
                        }
                    }

                    .button {
                        display: block;
                        width: 100%;
                    }

                    .deadline {
                        font-size: 10pt;
                        margin-bottom: 0;
                        font-weight: 600;
                        color: #e93d2f;
                    }
                }
            }
        }
    }
</style>