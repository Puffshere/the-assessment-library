<template>
    <section class="tprSlides">
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
        <section class="slides">
            <div class="container">
                <div class="row slides-container">
                    <div class="col-4 col-6-sm tprSlideSection">
                        <img class="image" src="images/team_slide.png" alt="TPR Team Slide">
                        <ul class="slideList">
                            <a
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+TEAM+Slides.pptx">
                                <li class="slideLink slideButtons">
                                    TPR TEAM Slides
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-4 col-6-sm tprSlideSection">
                        <img class="image" src="images/leadership_slide.png" alt="TPR Leadership Slide">
                        <ul class="slideList">
                            <a
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+Leadership+Slides.pptx">
                                <li class="slideLink slideButtons">
                                    TPR Leadership Slides
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-4 col-6-sm tprSlideSection">
                        <img class="image" src="images/full_presentation_slide.png" alt="TPR Full Day Presentation">
                        <ul class="slideList">
                            <a
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR+Full-day+Presentation.pptx">
                                <li class="slideLink slideButtons">
                                    TPR Full-day Presentation
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
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
.tprSlides {
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

    .slideList {
        padding-left: 0;
        list-style: none;
        margin-bottom: 15px;

        a {
            text-decoration: none;
        }

        .slideLink {
            padding: 10px;
            background: #f7f7f7;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;
            transition: transform .3s ease;
            text-align: center;

            &:hover {
                transform: scale(1.03);
            }

            &:active {
                transform: scale(1.225);
            }

            &.slideButtons {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }
        }
    }
}

.slides {
    margin: -50px 0 30px;

    .slides-container {
        background: #fff;
        border-radius: 20px;
        padding: 14px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

        .tprSlideSection {
            .image {
                width: 100%;
                height: 100%;
                background-size: cover !important;
                background-position: center !important;
                object-fit: cover;
                box-shadow: 0 0 20px rgba(0, 0, 0, .1);
                border-radius: 20px;
                margin-bottom: 10px;
                margin-top: 10px;
            }

            a {
                text-decoration: none;
            }

        }
    }
}
</style>