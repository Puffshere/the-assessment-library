<template>
    <section class="hero">
        <img src="~/assets/disc-awareness/white-textured-background.png" alt="background image" class="background">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <h1>DISC Awareness
                            <br />
                            <span style="color: #000000">Report</span>
                        </h1>
                        <h3>
                            Experience a seamless integration of DISC and Emotional Intelligence (EI), offering a
                            comprehensive understanding of communication styles, observable behavior, and EI insights,
                            shaping powerful interpersonal dynamics.
                        </h3>
                        <div class="button-container">
                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Awareness_(EI).pdf"
                                class="btn btn-download" target="_blank" rel="noopener" style="cursor: pointer;">
                                <img src="~/assets/disc-awareness/download-samples-button.png" alt="Download Sample">
                            </a>
                            <a href="#discAwarenessContactForm" class="btn btn-learn" style="cursor: pointer;">
                                <img src="~/assets/disc-awareness/learn-more-button.png" alt="Learn More">
                            </a>
                        </div>
                    </div>
                    <div class="col-6">
                        <img src="~/assets/disc-awareness/disc-awareness-graphics.png" alt="sample report image"
                            class="sampleReportImage">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.body {
    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    h1 {
        color: white;
        font-weight: bold;
    }
}

h1 {
    font-size: 48px;
    line-height: 58px;
}

.hero {
    position: relative;
    width: 100%;
    min-height: 720px;
    overflow: hidden;
}

.hero .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.hero .container {
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: 0vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
}

.hero .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.hero .sampleReportImage {
    width: 85%;
    margin-top: 80px;
    margin-left: 50px;
}

.hero {
    .button-container {
        display: flex;
        justify-content: left;
        gap: 20px;
        margin-top: 20px;

        .btn {
            display: inline-block;
            width: 220px;
            height: 60px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}

.hero .container h1 {
    color: #00a8ff;
    font-size: 58px;
    text-align: left;
    margin-top: 100px;
    margin-bottom: 60px;
}

.hero .container h3 {
    color: black;
    font-size: 19px;
    text-align: left;
    font-weight: 400;
    padding: 0 0;
    margin-bottom: 50px;
}

@media (max-width: 768px) {
    .hero {
        .button-container {
            .btn {
                height: auto;
            }
        }
    }

    .hero .sampleReportImage {
        width: 100%;
        margin-top: 40px;
        margin-left: 0px;
        margin-bottom: 50px;
    }

    .hero .container h1 {
        font-size: 48px;
        margin: 0;
        line-height: 50px;
        margin-top: -20px;
    }

    .hero .row {
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 50px;
    }

    .ourDifference .container h3 {
        font-size: 20px;
        padding: 0 0px;
    }
}
</style>