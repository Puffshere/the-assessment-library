<template>
    <section class="hero">
        <img src="@/assets/disc-awareness/white-textured-background.png" alt="background image" class="background">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <img src="@/assets/disc-leadership/disc-leadership-graphic.png" alt="sample report image"
                            class="sampleReportImage">
                    </div>
                    <div class="col-6">
                        <h1>DISC Leadership
                            <br />
                            <span style="color: #000000">Report</span>
                        </h1>
                        <h3>
                            The DISC Leadership Report equips leaders with insights to enhance their communication and
                            leadership skills. Understand your unique DISC style, and the styles of those around you, to
                            interact, engage, guide, motivate, and lead more effectively in every situation.
                        </h3>
                        <div class="button-container">
                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf"
                                class="btn btn-download" target="_blank" rel="noopener" style="cursor: pointer;">
                                <img src="@/assets/disc-awareness/download-samples-button.png" alt="Download Sample">
                            </a>
                            <a href="#discLeadershipContactForm" class="btn btn-learn" style="cursor: pointer;">
                                <img src="@/assets/disc-awareness/learn-more-button.png" alt="Learn More">
                            </a>
                        </div>
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
    min-height: 81vh;
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
    width: 100%;
    margin-top: 95px;
    margin-left: 0px;
}

.hero {
    .button-container {
        display: flex;
        justify-content: right;
        gap: 20px;
        margin-top: 20px;
        margin-right: 20px;

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
    text-align: right;
    margin-top: 100px;
    margin-bottom: 40px;
}

.hero .container h3 {
    color: black;
    font-size: 19px;
    text-align: right;
    font-weight: 400;
    padding: 0 0;
    margin-bottom: 50px;
}

@media (max-width: 768px) {
    .hero {
        min-height: 125vh;

        .button-container {
            margin-right: 0px;

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