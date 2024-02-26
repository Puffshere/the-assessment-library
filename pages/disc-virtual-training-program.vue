<template>
    <section class="forms">
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Virtual Training Program</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="col-12">
                <img class="titleImage" src="./../assets/freeEbookImage.png" alt="template icons">
            </div>
            <div class="row flex-center">
                <div class="col-12">
                    <ul class="resources">
                        <a class="col-6" href="https://www.assessments24x7.com/retail/DISC.html">
                            <li class="resource marketing">
                                Buy DISC assessment
                            </li>
                        </a>

                        <a class="col-6" href="/sample-reports">
                            <li class="resource marketing">
                                View Sample Reports
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="container">
                <div class="row flex-center">
                    <div class="col-12">
                        <div class="col-6">
                        <h3 class="youtubeTitle">The Different DISC Styles</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/u6H6NBPU1LA"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">How to Identify Each DISC Style</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/r2TKr9yThAo"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">Describing the Four DISC Styles</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/FDUvX-0FZMY"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">Adaptability with all Four DISC Styles</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/-xN3-4scIps"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">Building Effective Teams</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/-7vNaF_We5I"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">Leadership and the Four DISC Styles</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/HbnD_9mDmGc"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">The Sales and Services Process</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/aV_bi0hfkII"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">Adaptability - the Key to the Platinum Rule</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/ZW2sImmQ7P8"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">We are all a BLEND of Styles</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/aCgMx-Cb7S8"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                        <div class="col-6">
                        <h3 class="youtubeTitle">Frequently Asked Questions (Optional)</h3>
                        <iframe class="col-12" height="315" src="https://www.youtube.com/embed/lFdrPWpTDhI"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
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
            title: 'DISC Virtual Training Program | Assessments 24x7',
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
            padding-left: 50px;
            background: #f7f7f7;
            margin-bottom: 12px;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;
            letter-spacing: 1px;

            &.marketing {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }
        }
    }
}

.youtubeTitle {
margin-left: 20px;
}

</style>