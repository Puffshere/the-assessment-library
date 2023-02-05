<template>
    <section class="skeleton">
        <LazyHydrate when-visible><main-nav></main-nav></LazyHydrate>
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Business Basics Guide - Assessments 24x7</h1>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h3>Business Basics Guide:</h3>
                    <ul class="resources">
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/pdf/Business+Basics_Business+Goals+Planning2023.pdf"
                            target="_blank" rel="noopener">
                            <li class="resource a24x7 spacing">
                                Business Goals & Planning Template
                            </li>
                        </a>
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/pdf/Business+Basics_Using+Assessments2023.pdf"
                            target="_blank" rel="noopener">
                            <li class="resource a24x7 spacing">
                                Using Assessments - Business Basics Guide for Coaches
                            </li>
                        </a>
                    </ul>
                </div>
                <div class="col-4">
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div>
        <validation-mini class=" badge-margin"/>
        <client-logos />
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>

export default {
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer'),
        'contact-sidebar': () => import('@/components/ContactSidebar'),
        'survey-sidebar': () => import('@/components/SurveySidebar'),
        'validation-mini': () => import('@/components/ValidationMini'),
        'client-logos': () => import('@/components/ClientLogos')
    },
    head() {
        return {
            title: 'Webinars | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'If you ever miss an Assessments 24x7 webinar, we will post the recording and slide deck here. Be sure to bookmark this page and check it periodically!'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.skeleton {
    .header {
        background: url('~assets/leadership-360.jpg');
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

    .hyperlink {
        margin-bottom: 10px;
        display: inline-block;
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 22pt;
        line-height: 24pt;
    }

    h3 {
        font-size: 18pt;
        line-height: 24pt;
        margin-top: 0;
    }

    .badge-margin {
        margin-top: -75px;
    }

    .resources {
        padding-left: 0;
        list-style: none;

        a {
            text-decoration: none;
        }

        .resource {
            padding: 10px;
            background: #f7f7f7;
            margin-bottom: 6px;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;

            &.a24x7 {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }

            &.business {
                background: linear-gradient(268deg, #ffa518, #fc542a);
            }

            &.wellness {
                background: linear-gradient(268deg, #fa4ca6, #ff2f4c);
            }
        }
    }
}

.spacing {
    letter-spacing: 1px;
}
</style>