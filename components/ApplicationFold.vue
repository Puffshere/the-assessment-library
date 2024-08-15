<template>
    <section class="application" id="application">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Application
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>
                        DISC offers versatile applications that can revolutionize various aspects of your organization.
                    </h2>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-12">
                    <div class="col-4 boxes topBox">
                        <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/applicationIcon1.png" alt="api icon" class="icon" />
                        <h3>
                            Team
                        </h3>
                        <h3>
                            Training
                        </h3>
                        <br />
                        <br />
                        <hr />
                        <p>
                            Enhance team dynamics and collaboration by leveraging DISC insights to
                            understand each team member's communication style, strengths, and areas for development.
                            Tailor training sessions to foster effective communication, conflict resolution, and synergy
                            among team members, ultimately boosting productivity and morale.
                        </p>
                    </div>
                    <div class="col-4 boxes">
                        <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/applicationIcon2.png" alt="custom reports icon" class="icon" />
                        <h3>
                            Leadership
                        </h3>
                        <h3>
                            Development
                        </h3>
                        <br />
                        <br />
                        <hr />
                        <p>
                            Empower leaders to understand their own leadership style and adapt their approach to
                            effectively
                            lead diverse teams. DISC assessments provide valuable insights into leadership behaviors,
                            decision-making preferences, and motivational drivers, enabling leaders to inspire,
                            motivate,
                            and mentor their team members more effectively.
                        </p>
                    </div>
                    <div class="col-4 boxes">
                        <img src="https://f002.backblazeb2.com/file/assessments24x7-media/DISC/applicationIcon3.png" alt="branding and user experience icon"
                            class="icon" />
                        <h3>
                            Hiring &
                        </h3>
                        <h3>
                            Selection
                        </h3>
                        <br />
                        <br />
                        <hr />
                        <p>
                            Streamline your recruitment process by incorporating DISC assessments to identify candidates
                            who
                            not only possess the necessary skills and qualifications but also align with your
                            organization's
                            culture and values. Use DISC insights to assess candidates' communication styles, work
                            preferences, and potential fit within specific roles, ensuring better hiring decisions and
                            long-term employee success.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
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

.application {
    min-height: 700px;
    background-color: #00a8ff;

    .row {
        label {
            text-align: left;
            display: block;
        }
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    hr {
        margin: 0px 20px;
        margin-top: -6px;
    }

    .paragraph {
        font-weight: 700;
    }

    p {
        padding: 0 22px;
    }

    .boxes {
        background-color: white;
        min-height: 485px;
        border-radius: 10px;
        margin-bottom: 60px;
        text-align: left;
    }

    img {
        max-width: 100%;
        border-radius: 20px;
        padding: 5px;
    }

    .icon {
        width: 22%;
        margin-top: -35px;
        margin-right: 10px;
        float: right;
    }

    label {
        color: white;
        font-weight: bold;
        font-size: 22px;
    }

    input {
        width: 100%;
        min-height: 70px;
        border-radius: 8px;
        padding: 0 20px;
        font-size: 24px;
    }

    .messageBox {
        min-height: 110px;
    }

    .submitBtn {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        width: 230px;
    }

    .submitIcon {
        width: 100%;
    }

    h1 {
        margin: 0px;
        font-size: 65px;
        position: absolute;
        top: 60px;
        color: white;
    }

    h2 {
        margin-left: 20px;
        font-size: 23px;
        position: absolute;
        color: white;
    }

    h3 {
        margin-left: 20px;
        margin-bottom: -30px;
        font-size: 24px;
    }
}

@media (max-width: 1100px) {

    .application {
        h1 {
            font-size: 50px;
        }

        .topBox {
            margin-top: 80px;
        }
    }
}
</style>