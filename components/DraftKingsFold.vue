<template>
    <section class="draft-kings-fold" loading="lazy" quality="80">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <iframe style="width:100%" height="315" src="https://www.youtube.com/embed/A52Getj1sdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                </div>

                <div class="col-6">
                    <img class="draft-kings-logo" src="@/assets/draft-kings-logo.png" alt="DraftKings uses Assessments 24x7" quality="80" loading="lazy">

                    <p>
                        Listen to Will Mahon, Talent Development Manager at DraftKings, explain why they have decided to use Assessments 24x7 as their
                        global provider for assessment solutions. Between our breadth of solutions, A+ customer service, and expertise, we are proud to
                        receiving their highest recommendation.
                    </p><br/>

                    <nuxt-link to="/contact" class="button">Schedule a Demo</nuxt-link>
                    <!--<a href="#" class="button outline light">Learn More About Our Corporate Solutions</a>-->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .draft-kings-fold {
        background:  url('~assets/draft-kings-bg.jpg');
        background-position: center;
        padding: 100px 0 90px;
        margin: 60px 0 -60px;
        color: #fff;

        .draft-kings-logo {
            margin: -30px 0 0;
            width: 100%;
            max-width: 300px;
        }

        .side-img {
            width: 100%;
            border-radius: 20px;
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .draft-kings-fold {
            .draft-kings-logo {
                margin: 0 auto;
                display: block;
            }
        }
    }

    @media screen and (max-width: $breakpoint-small) {
        .draft-kings-fold {
            padding: 50px 0;

            .button {
                display: block;
            }
        }
    }
</style>

