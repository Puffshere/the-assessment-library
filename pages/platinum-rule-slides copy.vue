<template>
    <section class="forms">
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">PLATINUM RULE SLIDES</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <!-- <div class="row">
                <div class="col-12">
                    <h2>Official Request Forms</h2>
                    
                    <p>
                        This page is for internal use only. You can bookmark this page as a quick reference to Assessments 24x7 department request forms. 
                        Each request form is for submitting tickets for the corresponding department. These links may change over time, so please reference 
                        this page first. When in doubt, use the form!
                    </p>
                </div>
            </div> -->
            <div class="col-12">

                <div class="row">
                    <div class="col-3">
                        <img class="image" src="images/Team_slide.png" alt="Self-awareness and Communication">
                    </div>

                    <div class="col-6">
                        <ul class="resources">

                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+TEAM+Slides.pptx">
                                <li class="resource marketing">
                                    THE PLATINUM RULE TEAM Slides
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <br>
                <br>

                <div class="row">

                    <div class="col-6">
                        <ul class="resources">

                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+TEAM+Slides.pptx">
                                <li class="resource marketing">
                                    THE PLATINUM RULE TEAM Slides
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-3">
                        <img class="image" src="images/Team_slide.png" alt="Self-awareness and Communication">
                    </div>
                </div>

                <br>
                <br>
                <div class="row">
                    <div class="col-3">
                        <img class="image" src="images/Team_slide.png" alt="Self-awareness and Communication">
                    </div>

                    <div class="col-6">
                        <ul class="resources">

                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+TEAM+Slides.pptx">
                                <li class="resource marketing">
                                    THE PLATINUM RULE TEAM Slides
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- <div class="row flex-center">
                <div class="col-6">
                    <ul class="resources">
                        <a target="_blank"
                            href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+TEAM+Slides.pptx">
                            <li class="resource marketing">
                                THE PLATINUM RULE TEAM Slides
                            </li>
                        </a>

                        <a target="_blank"
                            href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+Leadership+Slides.pptx">
                            <li class="resource marketing">
                                THE PLATINUM RULE Leadership Slides
                            </li>
                        </a>


                        <a target="_blank"
                            href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+Full-day+Presentation.pptx">
                            <li class="resource marketing">
                                THE PLATINUM RULE Full-day Presentation
                            </li>
                        </a>

                    </ul>
                </div>
            </div> -->
        </div>

        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'PLATINUM RULE SLIDES | Assessments 24x7',
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.image {
    width: 100%;
}

.forms {
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

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    .resources {
        padding-left: 0;
        list-style: none;
        margin-bottom: 60px;

        a {
            text-decoration: none;
        }

        .resource {
            padding: 10px;
            background: #f7f7f7;
            margin-bottom: 12px;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;

            &.marketing {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }

            &.training {
                background: linear-gradient(268deg, #ffa518, #fc542a);
            }

            &.support {
                background: linear-gradient(268deg, #fa4ca6, #ff2f4c);
            }

            &.development {
                background: linear-gradient(268deg, #303542, #1e222d);
            }

            &.custom {
                background: linear-gradient(268deg, #b82cff, #540bfb);
            }

            &.other {
                border: 1px solid #a1a1a1;
                background: linear-gradient(268deg, #f7f7f7, #d2d3d3);
                color: #1e222d;
            }

            &.accountPurchase {
                background: linear-gradient(268deg, #25ca20, #168d11);
            }

            &.workshopsTraining {
                background: linear-gradient(268deg, #20a8ca, #167c96);
            }
        }
    }
}
</style>