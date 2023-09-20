<template>
    <section class="technology-fold lazyload">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h4 class="section-title">We Partner with Consultants to Provide<Br/>Assessments to Their Clients and Empower Them</h4>
                    <p class="section-subtitle">
                        We have partnered with <u>thousands</u> of coaches and consultants to power their businesses. Our white-labeled dashboard comes 
                        fully equipped to deliver 50+ assessments and reports, while also providing the tools to take a business to the next level. Members 
                        receive access to our entire suite of validated products and reports, including our most productive and foundational DISC and 
                        Motivator assessment.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <img class="side-img lazyload" data-src="~assets/acp.jpg" alt="technology-fold image">
                </div>

                <div class="col-6">
                    <h5 class="body-title">Trainer materials with your brand as the focus, not ours.</h5>
                    
                    <p class="body-text">
                        All of our member accounts have access to trainer materials, workshop materials, marketing one-sheets, 
                        team & group reports, onscreen employee benchmarking, unparalleled customer support 365 days a year, and more. 
                        <br/>
                        <br/>
                        <strong>Zero Membership Fees. No Setup Costs. Pay as You Go Pricing.</strong>
                    </p>
                    
                    <nuxt-link to="/contact" class="button">Partner With Us</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .technology-fold {
        padding-bottom: 150px;

        &.lazyloaded {
            background: url('~assets/globe.png') no-repeat;
            background-position-x: -30%;
        }

        .section-title {
            font-size: 30pt;
            margin-bottom: 10px;
            margin-top: 0;
            line-height: 36pt;
        }

        .section-subtitle {
            margin-top: 0;
            margin-bottom: 40px;
        }

        .side-img {
            border-radius: 20px;
            width: 100%;
        }

        .side-img-alt {
            width: 70%;
            margin-top: -100px;
            margin-left: -60px;
            border-radius: 20px;
        }

        .body-title {
            font-size: 22pt;
            line-height: 26pt;
            margin: 0;
        }

        .body-text {
            margin-bottom: 40px;
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .technology-fold {
            padding-bottom: 50px;
            
            .side-img {
                margin-bottom: 20px;
            }
            
            .side-img-alt {
                display: none;
            }
        }
    }

    @media screen and (max-width: $breakpoint-small) {
        .technology-fold {
            padding-bottom: 50px;

            .button {
                display: block;
                margin: 20px 0 0;
            }

            .body-title {
                font-size: 17pt;
                line-height: 21pt;
            }

            .section-title, .section-subtitle {
                display: none;
            }

            .side-img {
                margin-bottom: 20px;
            }

            .side-img-alt {
                display: none;
            }
        }
    }
</style>
