<template>
    <section class="keyword-fold">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h5 class="section-title">Assessments & Training for Corporate Environments</h5>

                    <p>
                        Our industry-leading assessment platform supports organizations ranging from small and medium-sized business 
                        (SMB) to Fortune 500 companies. Our solutions provide optimal outcomes in hiring and selection, team-building, 
                        sales performance, leadership development, and employee retention and engagement. With the most comprehensive 
                        library of advanced and combined assessments in the interpersonal and working relationship space, Assessments 
                        24x7 can provide your company with the tools required to successfully manage your teams and your hiring and 
                        selection needs.
                    </p>

                    <p>
                        <strong>Hire Better, Build High Performance Teams, and Solve Problems.</strong><br/><br/>

                        Our assessment platform allows you to have complete control over your assessments without
                        ever having to go to a rep as a middle person. Our assessments are entirely branded for your 
                        organization and are available in multiple languages. 
                    </p><br/>

                    <nuxt-link to="/contact" class="button">Schedule a Demo</nuxt-link>
                    <!--<a href="#" class="button outline light">Learn More About Our Corporate Solutions</a>-->
                </div>

                <div class="col-4">
                    <img class="side-img lazyload" data-src="~assets/corporate.jpg">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .keyword-fold {
        background: url('~assets/artifacts/right-rings.png') no-repeat, linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
        background-position: right;
        padding: 100px 0 90px;
        margin: 0 0 30px;
        color: #fff;

        .section-title {
            font-size: 30pt;
            line-height: 34pt;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 20px;
        }

        .side-img {
            width: 100%;
            border-radius: 20px;
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .keyword-fold {
            .side-img {
                display: none;
            }
        }
    }

    @media screen and (max-width: $breakpoint-small) {
        .keyword-fold {
            padding: 50px 0;

            .button {
                display: block;
                margin: 20px 0 0;
            }

            .section-title {
                font-size: 17pt;
                line-height: 21pt;
            }
        }
    }
</style>

