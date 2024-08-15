<template>
    <section class="quickLinks">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Quick Links
                    </h1>
                    <br />
                    <div class="row">
                        <a href="#application" style="cursor: pointer;">
                            <div class="col-6">
                                <h2>Application</h2>
                                <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                            </div>
                        </a>
                        <a href="#results" style="cursor: pointer;">
                            <div class="col-6">
                                <h2>Results</h2>
                                <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                            </div>
                        </a>
                    </div>
                    <div class="row">
                        <a href="#implementation" style="cursor: pointer;">
                            <div class="col-6">
                                <h2>Implementation</h2>
                                <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                            </div>
                        </a>
                        <a href="#testimonial" style="cursor: pointer;">
                            <div class="col-6">
                                <h2>What our Clients say</h2>
                                <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                            </div>
                        </a>
                    </div>
                    <div class="row">
                        <a href="#certification" style="cursor: pointer;">
                            <div class="col-6">
                                <h2>Certification</h2>
                                <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                            </div>
                        </a>
                        <a href="#sampleReports" style="cursor: pointer;">
                            <div class="col-6">
                                <h2>Sample Reports</h2>
                                <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                            </div>
                        </a>
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

    h2 {
        color: white;
        font-size: 45px;
        margin-top: -5px;
        margin-bottom: -10px;
        font-weight: 400;
    }

    h3 {
        font-size: 28px;
        color: #00a8ff;
    }
}

h1 {
    font-size: 48px;
    padding: 20px;
    margin-bottom: -150px;
    margin-left: 10px;
}

.quickLinks {
    min-height: 615px;
    display: flex;
    text-align: center;

    .whiteArrow {
        max-width: 24px;
    }

    img {
        float: right;
        margin-top: -22px;
    }

    .col-6 {
        background-color: #00a8ff;
        padding: 20px;
        border-radius: 20px;
        min-height: 90px;
        align-content: center;
        text-align: left;
        max-width: 450px;
        margin-left: 60px;
    }

    h1 {
        color: #1e222d;
        margin: 0px;
        font-size: 53px;
        font-weight: 700;
        margin-top: 39px;
    }

    h2 {
        font-size: 26px;
    }
}

@media (max-width: 600px) {

    .body {
        .quickLinks {
            margin-bottom: 80px;
        }

        .quickLinks,
        .col-6 {
            margin-left: 5px;
        }

        .quickLinks,
        .row {
            padding: 0px;
        }
    }
}
</style>