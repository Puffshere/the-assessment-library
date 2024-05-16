<template>
    <section class="enhancing" id="enhancing">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Enhancing Communication
                        <br />
                        with DISC Awareness
                    </h1>
                </div>
                <div class="col-12 image-container">
                    <img src="@/assets/disc-awareness/disc-and-ei-graphic.png" alt="disc and ei graphic"
                        class="discEiGraphic">
                </div>
                <div class="col-12 flex-container">
                    <h3 class="text">The DISC Awareness tool <span style="color: #00a8ff">synergizes DISC assessment
                            results with Emotional Intelligence</span>, offering
                        deep insights into behavioral styles, facilitating the recognition of others' styles, and
                        enhancing adaptability in communication. This integrated approach empowers individuals to engage
                        effectively with emotions, fostering more meaningful interactions and refined communication
                        strategies.</h3>
                </div>
                <div class="col-12 button-container">
                    <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Awareness_(EI).pdf"
                        class="btn btn-download" target="_blank" rel="noopener" style="cursor: pointer;">
                        <img src="@/assets/disc-awareness/download-samples-button.png" alt="Download Sample">
                    </a>
                    <a href="#discAwarenessContactForm" class="btn btn-learn" style="cursor: pointer;">
                        <img src="@/assets/disc-awareness/learn-more-button.png" alt="Learn More">
                    </a>
                </div>
            </div>
            <br /><br /><br />
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '~assets/scss/vars';

.enhancing {
    min-height: 600px;
    background-color: #1e222d;

    .row {
        padding-top: 36px;
    }

    .image-container {
        display: flex;
        justify-content: center;

        .discEiGraphic {
            width: 51%;
            margin-top: -54px;
            margin-bottom: -35px;
        }
    }

    .flex-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        .text {
            color: white;
            text-align: center;
        }
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;

        .btn {
            display: inline-block;
            width: 220px;
            height: 60px;
            
            img {
                border-radius: 5px;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    h1 {
        text-align: center;
        margin: 40px;
        font-size: 48px;
        color: #ffffff;
        line-height: 50px;
    }

    h3 {
        text-align: center;
        margin: 40px;
        font-size: 19px;
        color: #ffffff;
        line-height: 35px;
        font-weight: 500;
    }
}

@media (max-width: 1100px) {
    .enhancing {
        h1 {
            margin: 0px;
            margin-top: 60px;
            margin-bottom: 40px;
            font-size: 38px;
            line-height: 60px;
        }
    }
}

@media (max-width: 768px) {
    .enhancing {
        .row {
            padding-top: 0px;
        }

        .flex-container {
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
        }

        .button-container {
            flex-direction: column;
            align-items: center;

            .btn {
                width: 80%;
                max-width: 220px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>
