<template>
    <section>
        <main-nav></main-nav>
        <section class="body">
            <br />
            <section class="title">
                <div class="container col-12">
                    <div class="row flex-container">
                        <div class="col-5">
                            <img src="~/assets/logo-footer.png" alt="assessments24x7 logo" class="logo" />
                        </div>
                        <div class="col-5">
                            <hr class="titleHr">
                        </div>
                        <div class="col-2">
                            <img src="~/assets/ATD_New_Orleans_Logo.png" alt="ATD" class="atdLogo" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div class="container col-12">
                    <div class="row flex-container">
                        <div class="col-12">
                            <div class="col-4">
                                <h1>
                                    Customize
                                </h1>
                                <h2>
                                    your
                                </h2>
                                <h2>
                                    Assessment
                                </h2>
                                <h2>
                                    Experience
                                </h2>
                                <img src="~/assets/learn-more-icon.png" alt="learn more icon" class="learnMoreIcon" />
                            </div>
                            <div class="col-8">
                                <img src="~/assets/api.png" alt="thumbnail" class="thumbnail" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </section>
        </section>
        <section class="underBody">
            <img src="~/assets/logo.png" alt="assessments24x7 underbody logo" />
        </section>
        <footer-fold></footer-fold>
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    }
}
</script>

<style lang="scss" scoped>
.body {
    margin: 0px;
    padding: 0px;
    background-color: #133c84;

    .title {
        .logo {
            max-width: 100%;
        }

        .flex-container {
            display: flex;
            align-items: center;

            .titleHr {
                width: 100%;
            }
        }

        .atdLogo {
            max-width: 100%;
        }

        h1 {
            color: white;
            font-weight: bold;
            font-size: 55px;
            margin-top: -10px;
            margin-bottom: -15px;
        }

        h2 {
            color: white;
            font-size: 45px;
            margin-top: -10px;
            margin-bottom: -10px;
            font-weight: 400;
        }

        .learnMoreIcon {
            margin-top: 30px;
            max-width: 70%;
            cursor: pointer;
        }

        .thumbnail {
            max-width: 100%;
        }
    }
}

.underBody {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 35%;
        margin: 30px 0;
    }
}
</style>