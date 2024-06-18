<template>
    <section class="virtual-tour">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Virtual Tour</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container firstFold" style="text-align: center;">


            <div class="row" id="heroFold">
                <div class="col-12">
                    <h2>Introduction To Your Online Assessment Account</h2>
                    <p style="line-height: 20px; margin-top: -10px; margin-bottom: 50px;">Based on thousands of account
                        setups, here are our recommended steps. <br />
                        Feel free to skip sections and proceed at your own pace. For personalized <br />
                        training, schedule a <span><a class="hyperlink"
                                href="https://calendly.com/molly-24x7/virtual-tour-of-your-account-dashboard?month=2024-06">one-on-one
                                session with
                                Molly Kirby</a></span>. For
                        more information on <br />
                        our assessments, pricing, and resources, contact <span><a class="hyperlink"
                                href="mailto:support@assessments24x7.com">support@assessments.ws</a></span>.</p>
                    <button class="button" :disabled="step === 0"
                        :style="{ backgroundColor: '#00a8ff', border: 'none', fontSize: '16px', minHeight: '60px', width: '170px', opacity: step === 0 ? 0.5 : 1 }"
                        @click="prevStep()"><span>
                            <img src="~/assets/previous-video-icon.png"
                                style="width: 20px; padding-right: 5px; margin-bottom: -4px;" alt="previous video icon">
                        </span>Go Back
                    </button>
                    <button class="button" :disabled="step === 3"
                        :style="{ backgroundColor: '#00a8ff', border: 'none', fontSize: '16px', minHeight: '60px', width: '170px', opacity: step === 3 ? 0.5 : 1 }"
                        @click="nextStep()">Next Video<span>
                            <img src="~/assets/next-video-icon.png"
                                style="width: 20px; padding-left: 5px; margin-bottom: -4px;" alt="next video icon">
                        </span>
                    </button><br /><br />



                    <iframe v-show="step === 0" style="width:80%; margin-bottom: 50px;" height="540"
                        src="https://www.youtube.com/embed/mxXrKA5629M" frameborder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <iframe v-show="step === 1" style="width:80%; margin-bottom: 50px;" height="540"
                        src="https://www.youtube.com/embed/Vt_8AM_-2jM" frameborder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <iframe v-show="step === 2" style="width:80%; margin-bottom: 50px;" height="540"
                        src="https://www.youtube.com/embed/-xnQzh6gnvk" frameborder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <iframe v-show="step === 3" style="width:80%; margin-bottom: 50px;" height="540"
                        src="https://www.youtube.com/embed/GG9dzjEk2j0" frameborder="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <button class="button mainButton" @click="jumpToIndividualSection" style="font-size: 16px;"><span>
                            <img src="~/assets/cert-page-buttons.png"
                                style="width: 20px; padding-right: 5px; margin-bottom: -3px;" alt="cert page buttons">
                        </span>Jump to individual section</button>
                    <button class="button mainButton" @click="supplementalVideos" style="font-size: 16px;"><span>
                            <img src="~/assets/supplemental-icon.png" style="width:20px; padding-right: 5px;"
                                alt="supplemental icon image">
                        </span>Supplemental videos</button>
                </div>
            </div>
        </div>
        <div class="secondFold" id="jumpSection">
            <div class="container">
                <div class="col-12" style="color: white; text-align: center">
                    <div class="row">
                        <h2 style="margin-bottom: 85px;">Jump to Individual Section</h2>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/mxXrKA5629M"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <h4>
                                General Account Settings
                            </h4>
                        </div>
                        <div class="col-6">
                            <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/Vt_8AM_-2jM"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <h4>
                                Features on Your Home Page
                            </h4>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 50px;">
                        <div class="col-6">
                            <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/-xnQzh6gnvk"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <h4>
                                Setting Up Assessment Access Links
                            </h4>
                        </div>
                        <div class="col-6">
                            <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/GG9dzjEk2j0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <h4>
                                Managing Assessment Users
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thirdFold" id="supplementalSection">
            <div class="container">
                <div class="col-12" style="text-align: center">
                    <div class="row">
                        <h2 style="color: black; margin-bottom: 60px;">Supplemental Videos</h2>
                    </div>
                    <div class="row" style="padding-bottom: 80px;">
                        <div class="col-6">
                            <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/mg5g0FXhonk"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <h4>
                                Group Reporting/DISC Collaboration
                            </h4>
                        </div>
                        <div class="col-6">
                            <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/mPdDie91CkI"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                            <h4>
                                360 Instruction Video
                            </h4>
                        </div>
                    </div>
                    <button class="button mainButton" @click="backToVirtualTour" style="font-size: 16px;"><span>
                            <img src="~/assets/back-to-full-tour-icon.png" style="width: 25px; padding-right: 5px;"
                                alt="back arrow image">
                        </span>Bact to full Virtual Tour</button>
                    <button class="button mainButton" @click="contactSupport" style="font-size: 16px;"><span>
                            <img src="~/assets/virtual-tour-mail-icon.png" style="width:25px; padding-right: 5px;"
                                alt="image of an envelope">
                        </span>Contact Support</button>
                </div>
            </div>
        </div>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    data() {
        return {
            step: 0,
            totalSteps: 4
        }
    },
    methods: {
        nextStep() {
            if (this.step < this.totalSteps - 1) {
                this.step++;
            }
        },
        prevStep() {
            if (this.step > 0) {
                this.step--;
            }
        },
        jumpToIndividualSection(event) {
            const element = document.getElementById('jumpSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        supplementalVideos(event) {
            const element = document.getElementById('supplementalSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        backToVirtualTour(event) {
            const element = document.getElementById('heroFold');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        contactSupport(event) {
            window.location.href = 'https://www.assessments24x7.com/contact';
            event.target.blur();
        },
    },
    head() {
        return {
            title: 'Virtual Tour | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'The steps provided are our recommendations based off thousands of account set ups. Feel free to skip sections and move at your own pace.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.virtual-tour {
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

    iframe {
        border-radius: 30px;
    }

    button {
        border-radius: 10px;
    }

    .mainButton {
        min-width: 290px;
    }

    .secondFold {
        iframe {
            max-width: 90%;
            max-height: 250px;
        }
    }

    .thirdFold {
        iframe {
            max-width: 90%;
            max-height: 250px;
        }
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 26pt;
        line-height: 24pt;
        font-weight: 500;

    }

    h4 {
        font-size: 14pt;
        line-height: 14pt;
        font-weight: 400;
    }

    .firstFold {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0px;
        padding-bottom: 70px;
    }

    .secondFold {
        background-image: url("~assets/blue-textured-background.png");
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 60px;
    }

    .thirdFold {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 75px;
        padding-bottom: 100px;
    }
}
</style>