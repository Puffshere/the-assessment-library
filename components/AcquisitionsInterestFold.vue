<template>
    <section class="acquisitionsInterestSection">
        <div class="acquisitionsInterest lazyload"></div>
        <div class="background">
            <h1 class="text">Interested in Being Acquired?</h1>
        </div>

        <section>
            <div class="container">
                <div class="">
                    <p class="interestStatement">If you are an organization or individual interested in discussing
                        the possibility of being acquired by Assessments 24x7, we invite you to reach out to us. We are
                        always open to exploring opportunities for growth and partnership. Our
                        dedicated team is committed to assessing the potential for collaboration and
                        acquisition, and we look forward to hearing from you.
                    </p>
                </div>
                <div class="contact col-12">
                    <div class="row">
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                    <div class="row">
                        <h2 class="contactStatement">
                            Please contact our Acquisitions Team for inquiries or to
                            initiate a conversation about the acquisition process.
                        </h2>
                    </div>
                </div>
                <br>
                <div class="contactItems">
                    <div class="row">
                        <div class="col-1">
                            <img class="icons" src="../assets/mail-icon.png" />
                        </div>
                        <h2 class="col-11 contactInfo">
                            hello@assessments24x7.com
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <img class="icons" src="../assets/phone-icon.png" />
                        </div>
                        <h2 class="col-11 contactInfo">
                            1-(206)-400-6647
                        </h2>
                    </div>
                </div>
                <div class="contactFinalStatement">
                    <h1 class="finalText">
                        We value innovation, talent, and the potential for mutual<br>
                        success. Let's explore the possibilities together.
                    </h1>
                </div>
            </div>
        </section>

    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.acquisitionsInterestSection {

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    .acquisitionsInterest {
        background-size: cover !important;
        background-position: bottom !important;
        width: 100%;
        min-height: 40vh;

        &.lazyloaded {
            background: url('~assets/acquisitions-interest.png');
        }
    }

    .background {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #3b3b3b;
        margin-top: -20px;
        min-height: 160pt;
        color: white;
    }

    .text {
        margin: 0px;
        font-size: 40pt;
        letter-spacing: 2px;
        line-height: 50pt;
    }

    .interestStatement {
        font-weight: 500;
        padding: 8px;
        line-height: 30px;
        margin-top: 60px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: -40px;
    }

    .contactStatement {
        font-size: 25pt;
        font-weight: 500;
        padding: 8px;
        line-height: 45px;
    }

    .contactItems {
        margin-top: -30px;
        margin-left: 20%;
    }

    .icons {
        width: 100px;
        margin-left: -20px;
    }

    .contactInfo {
        margin-top: 25px;
        font-size: 25pt;
        font-weight: 500;
        padding: 8px;
        line-height: 45px;
        align-items: left !important;
    }

    .contactFinalStatement {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 30px;
    }

    .finalText {
        font-size: 25pt;
        margin-bottom: 50px;
    }
}

@media only screen and (max-width: 1122px) {

    .contactItems {
        margin-left: 0px !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .icons {
        width: 100px;
        margin-left: 0px !important;
    }

    .contactInfo {
        font-size: 15pt !important;
        margin-top: 0px !important;
    }

}
</style>
