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
                        <img src="~/assets/disc/disc-self-report-icon.png" alt="disc self report icon" class="icon" />
                        <br />
                        <img src="~/assets/disc/disc-self-report.png" alt="disc self report" class="reports" />
                        <br />
                        <hr />
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf"
                            class="hyperlink" target="_blank" rel="noopener">
                            DISC SELF
                            <br />
                            REPORT
                        </a>
                    </div>
                    <div class="col-4 boxes">
                        <img src="~/assets/disc/applicationIcon2.png" alt="custom reports icon" class="icon" />
                        <br />
                        <img src="~/assets/disc/disc-leadership-report.png" alt="disc leadership report"
                            class="reports" />
                        <br />
                        <hr />
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf"
                            class="hyperlink" target="_blank" rel="noopener">
                            DISC LEADERSHIP
                            <br />
                            REPORT
                        </a>
                    </div>
                    <div class="col-4 boxes">
                        <img src="~/assets/disc/disc-team-dynamics-report-icon.png" alt="disc team dynamics report icon"
                            class="icon" />
                        <br />
                        <img src="~/assets/disc/disc-team-dynamics-report.png" alt="disc team dynamics report"
                            class="reports" />
                        <br />
                        <hr />
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupSampleReport.pdf"
                            class="hyperlink" target="_blank" rel="noopener">
                            DISC TEAM DYNAMICS
                            <br />
                            REPORT
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <a href="#form"><img src="~/assets/disc/get-started-button.png" alt="get started button"
                            class="getStartedBtn" /></a>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '~assets/scss/vars';


.sampleReports {
    min-height: 700px;
    position: relative;

    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .container {
        background-image: url("~assets/disc/sample-reports-background-graphic.png");
    }

    .boxes {
        background-color: white;
        min-height: 540px;
        border-radius: 15px;
        margin-bottom: 60px;
        text-align: left;

        .hyperlink {
            font-size: 23px;
            color: #000;
            font-weight: 600;
            position: relative;
            text-decoration: none;
            z-index: 0;
            transition: background .2s linear;
            box-shadow: inset 0 -3px 0 0 rgba(0, 168, 255, .3);

            &:hover {
                background: #ffc73e;
            }

            &.light {
                color: #fff;
            }
        }
    }

    img {
        width: 100%;
        border-radius: 20px;
        padding: 10px;
    }

    .icon {
        width: 24%;
        margin-top: -35px;
        margin-right: 20px;
        float: right;
    }

    .reports {
        width: 80%;
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
        margin: 0px 40px;
        margin-top: 16px;
        color: #00a8ff;

    }


}
</style>