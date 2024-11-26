<template>
    <section class="form" id="discAwarenessContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h1 class="formTitle">
                        Let data drive your decisions.
                    </h1>
                    <h2 class="formTitle">
                        Connect with us to learn more
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC+Awareness/arrow.png"
                            alt="white arrow" class="whiteArrow">
                    </h2>
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
export default {
    components: {
        'contact-form': () => import('@/components/ContactForm'),
    }

}
</script>


<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
}

h1 {
    font-size: 48px;
    margin-top: 60px;

}

h2 {
    font-size: 38px;
    font-weight: 400;
    margin-top: -100px;
    margin-bottom: 0px;
}

.form {
    background-color: #1e222d;

    .container {
        .formTitle {
            color: #ffffff;
        }

        .whiteArrow {
            width: 5%;
            padding-top: 60px;
            padding-left: 10px;
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
    text-align: left;

    .container-wrapper {
        position: relative;
        width: 100%;
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
            .whiteArrow {
                width: 10%;
                padding-top: 30px;
                padding-left: 10px;
            }
        }
    }
}
</style>