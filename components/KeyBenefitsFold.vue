<template>
    <section class="keyBenefits lazyload">
        <div class="container">
            <div class="row">
                <h1 class="title top">
                    Key Benefits of the Acquisition
                </h1>
                <h1 class="title">
                    for DISCCert Clients
                </h1>
            </div>
            <div class="row">
                <div class="col-1">
                    <img class="icons" src="../assets/Icon1.png" />
                </div>
                <div class="col-11">
                    <p class="subParagraph">
                        <span class="bold">Access to a Broader Range of Assessments and
                            Resources:</span><br>With Assessments 24x7's extensive
                        selection of assessments, clients now have access to tools designed to enhance motivation,
                        teamwork, leadership, emotional intelligence, and more. This expanded offering empowers
                        individuals and organizations to achieve their goals more effectively.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <img class="icons" src="../assets/Icon2.png" />
                </div>
                <div class="col-11">
                    <p class="subParagraph">
                        <span class="bold">Continued Outstanding Support:</span><br>Assessments 24x7 boasts
                        a dedicated team of experienced professionals who are committed to providing exceptional
                        support. Clients can rely on readily available assistance for utilizing assessments,
                        navigating the platform, and addressing any questions or concerns. The support services are
                        also available across multiple time zones, extending office hours for added convenience.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-1">
                    <img class="icons" src="../assets/Icon3.png" />
                </div>
                <div class="col-11">
                    <p class="subParagraph">
                        <span class="bold">Seamless Transition:
                        </span><br>Clients can expect a smooth and seamless transition, as Assessments 24x7
                        has powered DISCcert assessments for the past 15 years. This continuity ensures that clients
                        will experience minimal disruptions to their day-to-day workflow.
                    </p>
                </div>
            </div>
            <br>
            <br>
            <br>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';


.keyBenefits {
    background-size: cover !important;
    background-position: bottom !important;
    width: 100%;
    min-height: 70vh;

    &.lazyloaded {
        background-color: #1666ff;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #1666ff;
        min-height: 170pt;
        color: white;
    }

    .title {
        margin: 0px;
        font-size: 30pt;
    }

    .top {
        padding-top: 50px;
    }

    .icons {
        width: 90px;
        margin-left: -20px;
        margin-top: 20px;
    }

    .bold {
        font-weight: bold;
    }

    .subParagraph {
        padding: 0px;
        text-align: left;
        //font-size: 16pt;
    }
}

@media only screen and (max-width: 1122px) {

    .icons {
        margin-left: 0px !important;
    }

}
</style>
