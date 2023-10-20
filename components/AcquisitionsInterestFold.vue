<template>
    <section class="acquisitionsInterestSection">
        <div class="acquisitionsInterest lazyload"></div>
        <div class="background">
            <h1 class="text">Interested in Being Acquired?</h1>
        </div>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p class="interestStatement">If you are an organization or individual interested in discussing
                            the possibility of being acquired by Assessments 24x7, we invite you to reach out to us. We are
                            always open to exploring opportunities for growth and partnership. Our
                            dedicated team is committed to assessing the potential for collaboration and
                            acquisition, and we look forward to hearing from you.
                        </p>
                    </div>
                </div>
                <div class="contact">
                    <div class="row">
                        <p class="contactUs">
                            Contact Us
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <p>
                                Please contact our Acquisitions Team for inquiries or to
                                initiate a conversation about the acquisition process.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="contactItems">
                    <div class="row same">
                        <img class="icons" src="../assets/mail-icon.png" />
                        <p>hello@assessments24x7.com</p>
                    </div>
                    <div class="row same">
                        <img class="icons" src="../assets/phone-icon.png" />
                        <p>1-(206)-400-6647</p>
                    </div>
                </div>
                <div class="contactFinalStatement">
                    <p class="finalText">
                        We value innovation, talent, and the potential for mutual<br>
                        success. Let's explore the possibilities together.
                    </p>
                </div>
            </div>
        </section>

    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';


.acquisitionsInterestSection {

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
        font-size: 40pt;
        letter-spacing: 2px;
    }

    .interestStatement {
        line-height: 30px;
        margin-top: 50px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .contactUs {
        font-size: 30pt;
        font-weight: 600;
        margin: 5px 0;
    }

    .contactItems {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .same {
        max-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .icons {
        width: 50px;
    }

    .contactFinalStatement {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 20px;
    }

    .finalText {
        font-size: 25pt;
        margin-top: 40px;
        margin-bottom: 50px;
        font-weight: 600;
    }
}
</style>
