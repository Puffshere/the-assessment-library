<template>
    <section>
        <main-nav></main-nav>
        <section class="body">
            <br />
            <br />
            <section class="title">
                <div class="container">
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
                <br />
                <div class="container">
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
                </div>
                <br />
                <br />
                <br />
                <br />
            </section>
            <section class="mid">
                <div class="container">
                    <div class="row flex-container">
                        <div class="col-12">
                            <h1>
                                Tailored Assessment Solutions
                            </h1>
                        </div>
                    </div>
                    <div class="row flex-container">
                        <div class="col-12">
                            <h2>
                                for Your Unique Needs
                            </h2>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div class="container">
                    <div class="row flex-container">
                        <div class="col-12">
                            <div class="col-6">
                                <img src="~/assets/api.png" alt="api photo" class="thumbnail" />
                            </div>
                            <div class="col-6">
                                <img src="~/assets/custom-reports.png" alt="custom reports photo" class="thumbnail" />
                            </div>
                        </div>
                        <div class="row flex-container">
                            <div class="col-12">
                                <div class="col-6">
                                    <img src="~/assets/branding-and-user-experience.png"
                                        alt="branding and user experience photo" class="thumbnail" />
                                </div>
                                <div class="col-6">
                                    <img src="~/assets/domain-customization.png" alt="domain customization photo"
                                        class="thumbnail" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
                <div class="container">
                    <div class="row flex-container">
                        <div class="col-12">
                            <h1>
                                Get in Touch
                            </h1>
                        </div>
                    </div>
                    <br />
                    <br />
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

        .flex {
            display: flex;
            align-items: center;
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

    .mid {
        .flex-container {
            display: flex;
            flex-direction: column;
            text-align: center;
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

        .col-6 {
            background-color: white;
            min-height: 640px;
            border-radius: 10px;
            margin-bottom: 60px;
        }

        img {
            max-width: 100%;
            border-radius: 20px;
            padding: 5px;
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