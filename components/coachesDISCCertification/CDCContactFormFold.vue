<template>
    <section class="form" id="cdcContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h3 class="formTitle">
                        Ready to Elevate <br />
                        Your Coaching Practice?
                    </h3>
                    <h4 class="formSubText">
                        Don't miss out on the opportunity to enhance your coaching <br />
                        effectiveness, earn ICF credits, and differentiate your services <br />
                        through DISC Certification.
                    </h4>
                </div>
            </div>
            <section class="contactFormSection">
                <div class="container-wrapper">
                    <div class="container d-flex justify-content-center align-items-center"
                        style="padding-bottom: 100px;">
                        <div class="row">
                            <div class="col-12 justify-content-center">
                                <div class="form-container">
                                    <contact-form style="background: white;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Loading,
        'contact-form': () => import('@/components/ContactForm'),
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';


.formTitle {
    text-align: center;
}

.formSubText {
    text-align: center;
}

.button.disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.form {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/blue-geo-background.png');
    background-size: cover;
    padding-top: 10px;

    .error {
        color: #ff7575;
        font-size: 16px;
        margin-top: 5px;
        position: absolute;
    }

    .row {
        label {
            text-align: left;
            display: block;
        }
    }

    .container {
        .formTitle {
            color: #ffffff;
            line-height: 58px;
            margin-bottom: -5px;
        }

        .formSubText {
            color: #ffffff;
            margin-bottom: 20px;
        }

        .whiteArrow {
            width: 5%;
            padding-top: 60px;
            padding-left: 10px;
        }

        label {
            color: #ffffff;
            font-weight: 500;
            font-size: 18px;
            padding-bottom: 5px;
        }

        input {
            background-color: #ffffff;
            border: none;
            width: 100%;
            min-height: 50px;
            border-radius: 2px;
            padding: 0 20px;
            font-size: 24px;
        }

        .messageBox {
            min-height: 90px;
        }
    }
}

.contactFormSection {
    background-size: cover;
    background-position: center;
    min-height: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .container-wrapper {
        position: relative;
        width: 100%;
    }

    h2 {
        margin-top: 0px;
        font-weight: 700;
        text-align: center;
    }

    .form-container {
        width: 100%;
        max-width: 800px;
        padding: 20px;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .col-12 {
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 1000px) {
    .body {
        .flex-container {
            margin-bottom: -5px;
        }
    }

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 38px;
        font-weight: 400;
        margin-top: -20px;
        margin-bottom: 0px;
    }

    .form {
        .container {
            .formTitle {
                color: #ffffff;
            }

            .whiteArrow {
                width: 10%;
                padding-top: 30px;
                padding-left: 10px;
            }
        }
    }
}
</style>