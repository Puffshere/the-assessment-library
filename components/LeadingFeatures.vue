<template>
    <section class="leading-features">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="section-title">The Leading Online Assessment Solution for 20+ Years</h3>
                    <p>
                        For more than 20 years, Assessments 24x7 has powered business consultants, 
                        executive coaches, and Fortune 500s with the tools to optimize hiring processes, 
                        boost employee productivity, and maximize performance. Our validated assessments, 
                        flexible platform, and exceptional customer support have positioned us as a
                        <em>"Global Leader in Assessment Technology."</em>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-4">
                    <div class="feature-image one lazyload"></div>

                    <h4>Online Assessments</h4>
                    <p>
                        Our five core assessments have been developed to explore 
                        the “whole person.” Each is scientifically validated to enrich your 
                        organization or business with the best online tools and training materials
                        in the industry.
                    </p>

                    <nuxt-link to="/assessments" class="button">View Our Assessments</nuxt-link>
                </div>

                <div class="col-4">
                    <div class="feature-image two lazyload"></div>

                    <h4>Hiring & Selection Services</h4>
                    <p>
                        Identify the right person, for the right job, the first time. 
                        Integrating our scientifically validated DISC, Motivators, and Critical Thinking
                        (HVP) assessments gives you a better understanding of 
                        your candidate's behavioral styles. 
                    </p>

                    <nuxt-link to="/hiring-and-selection" class="button">Get Help With Hiring</nuxt-link>
                </div>

                <div class="col-4">
                    <div class="feature-image three lazyload"></div>

                    <h4>Training Solutions</h4>
                    <p>
                        Get certified and become an assessments expert.  
                        Earn continuing education credits through <a href="https://coachfederation.org" class="hyperlink" target="_blank">ICF,</a> 
                        <a href="https://www.shrm.org" class="hyperlink" target="_blank">SHRM,</a> <a href="https://www.hrci.org" class="hyperlink" target="_blank">HRCI,</a> and <a href="https://www.td.org" class="hyperlink" target="_blank">ATD.</a> 
                        Become a subject matter expert, build a positive leadership reputation, 
                        and more.
                    </p>

                    <nuxt-link to="/certifications" class="button">Explore Our Solutions</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .leading-features {
        margin: 50px 0 150px;

        .feature-image {
            position: relative;
            height: 300px;
            width: 100%;
            border-radius: 10px;
            background-size: cover !important;
            background-position: center !important;
            margin-bottom: 20px;
            box-shadow: 0 0 20px rgba(0,0,0,.1);

            &.lazyloaded {
                &.one { background: url('~assets/pillar-feature-1.jpg'); }
                &.two { background: url('~assets/pillar-feature-2.jpg'); }
                &.three { background: url('~assets/pillar-feature-3.jpg'); }
            }
        }

        .icon {
            width: 70px;
            height: 70px;
            position: absolute;
            margin-left: 16px;
            margin-top: 12px;
            bottom: 10px;
        }

        h3 {
            font-size: 28pt;
            line-height: 32pt;
            margin-bottom: 0;
        }

        h4 {
            margin: 0;
            font-size: 16pt;
        }

        .pillar-link {
            font-family: $font-alt;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #333;
            font-size: 10pt;
            text-decoration: none;
            display: block;
            margin-bottom: 8px;
        }

        .button {
            margin-top: 18px;
            display: block;
        }
    }

    @media screen and (max-width: $breakpoint-small) {
        .leading-features {
            margin: 50px 0;

            .col-4 {
                margin-bottom: 40px;
            }

            .button {
                margin: 20px 0 0;
            }

            .section-title {
                font-size: 17pt;
                line-height: 21pt;
            }
        }
    }
</style>
