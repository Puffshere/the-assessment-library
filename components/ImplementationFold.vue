<template>
    <section class="implementation" id="implementation">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <img src="~/assets/disc/implementation-graphic.png" alt="gear hands photo" class="gearPhoto">
                    </div>
                    <div class="col-6">
                        <h1>
                            Implementation
                        </h1>
                        <h2>
                            Getting Started is Easy
                        </h2>
                        <p style="color: #00a8ff; font-weight: bold;">To open an account, either:</p>
                        <p>
                            1) Purchase one or more assessments certifications.
                            <br />
                            2) Purchase a small bulk order of assessments.
                        </p>
                        <p>With your Assessments 24x7 account, you control the look of your assessments and reports with
                            our customization features. Talk with an expert and explore how our advanced <span
                                style="color: #abd7ff; font-weight: bold;">Customization
                                and API Integration</span> options can tailor your experience according to your specific
                            needs and
                            align with your Organization’s objectives and existing systems</p>
                        <a href="#form"><img src="~/assets/disc/get-started-button.png" alt="get started button"
                                class="getStartedButton"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 63px;
    color: white;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: -40px;
    margin-left: -20px;
}

h2 {
    color: white;
    font-size: 33px;
    margin-bottom: 40px;
    font-weight: 400;
}

p {
    color: white;

}

.implementation {
    background-color: #1e222d;

    .col-12 {
        margin-top: -8px;
        margin-bottom: -8px;
    }

    .gearPhoto {
        max-height: 700px;
    }

    .getStartedButton {
        position: absolute;
        bottom: 60px;
        width: 230px;
        right: 40px;
    }

    img {
        width: 100%;
    }

    .col-6 {
        text-align: right;
    }
}

@media (max-width: 1100px) {

    h1 {
        font-size: 40px;
    }

    .implementation {
        .getStartedButton {
            bottom: -80px;
            width: 180px;
            right: 20px;
        }
        padding-bottom: 160px; /* Expand the black container to fit the button */
    }

    .col-6 {
        text-align: center;
    }
}
</style>
