<template>
    <section class="sampleReports" id="sampleReports">
        <div class="container flex-container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Sample Reports
                    </h1>
                </div>
                <div class="col-12">
                    <div class="col-4 boxes">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/disc-self-report-icon.png" alt="disc self report icon" class="icon" />
                        <br />
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/disc-self-report.png" alt="disc self report" class="reports" />
                        <br />
                        <hr />
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf"
                            class="hyperlink words" target="_blank" rel="noopener">
                            DISC SELF
                            <br />
                            REPORT
                        </a>
                    </div>
                    <div class="col-4 boxes">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/applicationIcon2.png" alt="custom reports icon" class="icon" />
                        <br />
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/disc-leadership-report.png" alt="disc leadership report"
                            class="reports" />
                        <br />
                        <hr />
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf"
                            class="hyperlink words" target="_blank" rel="noopener">
                            DISC LEADERSHIP
                            <br />
                            REPORT
                        </a>
                    </div>
                    <div class="col-4 boxes">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/disc-team-dynamics-report-icon.png" alt="disc team dynamics report icon"
                            class="icon" />
                        <br />
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/disc-team-dynamics-report.png" alt="disc team dynamics report"
                            class="reports" />
                        <br />
                        <hr />
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupSampleReport.pdf"
                            class="hyperlink words" target="_blank" rel="noopener">
                            DISC TEAM DYNAMICS
                            <br />
                            REPORT
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a href="#form"><img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/get-started-button.png" alt="get started button"
                            class="getStartedBtn" /></a>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '~assets/scss/vars';


.sampleReports {
    min-height: 700px;
    
    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .container {
        background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/sample-reports-background-graphic.png");
        padding-bottom: 75px;
    }

    .boxes {
        background-color: white;
        min-height: 520px;
        border-radius: 15px;
        margin-bottom: 60px;
        text-align: left;
        padding: 0px 40px;
        padding-top: 20px;

        .icon {
            width: 22%;
            margin-top: -48px;
            display: block;
            float: right;
        }

        .reports {
            width: 100%;
            display: block;
            margin: 10px auto;
            margin-bottom: -20px;
        }
    }

    .getStartedBtn {
        cursor: pointer;
        width: 230px;
    }

    h1 {
        text-align: center;
        margin: 40px;
        font-size: 65px;
        color: black;
    }

    h2 {
        font-size: 23px;
        color: black;
    }

    h3 {
        font-size: 24px;
    }

    hr {
        border: none;
        height: 1px;
        background-color: #00a8ff;
        margin-bottom: 20px;
    }

    .words {
        font-size: 22px;
    }
}

@media (max-width: 1100px) {
    .sampleReports {
        h1 {
            margin: 60px;
            font-size: 55px;
            line-height: 60px;
        }

        .boxes {
            padding-bottom: 30px;
        }
    }
}
</style>