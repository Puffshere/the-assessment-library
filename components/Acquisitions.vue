<template>
    <section class="acquisitions lazyload">
        <div class="container">
            <div class="row">
                <div class="col-10">

                    <p class="acquisition-title">Interested in Being Acquired?</p>
                    <p class="acquisition-description">
                        If you are an organization or individual interested in discussing the possibility of being acquired
                        by Assessments 24x7, we invite you to reach out to us. We are always open to exploring opportunities
                        for growth and partnership. Our dedicated team is committed to assessing the potential for
                        collaboration and acquisition, and we look forward to hearing from you.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <ul class="contactSection">
                        <li class="contactItem bold">
                            Contact Us
                        </li>
                        <li class="contactItem">
                            Please contact our Acquisitions Team for inquiries or to initiate a conversation about the
                            acquisition process:
                        </li>
                        <li class="contactItem links">
                            Email: <span><a href="mailto:hello@assessments24x7.com">hello@assessments24x7.com</a></span>
                        </li>
                        <li class="contactItem links">
                            Phone: <span><a href="tel:12064006647">+1 (206) 400-6647</a></span>
                        </li>
                        <li class="contactItem">
                            We value innovation, talent, and the potential for mutual success. Let's explore the
                            possibilities together.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';


.contactSection {
    list-style: none;
    padding-left: 0;
    margin-top: 0;

    .contactItem {
        margin-bottom: 8px;
        font-family: $font-alt;
    }

    .bold {
        font-weight: bold;
    }

    .links {
        cursor: pointer;
    }
}

.acquisitions {
    background-size: cover !important;
    background-position: bottom !important;
    width: 100%;
    padding: 25px 0 40px;
    color: black;

    &.lazyloaded {
        background: url('~assets/acquisitionsImage.jpg');
    }

    .acquisition-title {
        font-size: 30pt;
        line-height: 34pt;
        font-weight: 600;
        margin-bottom: 0;
    }

    .acquisition-description {
        margin-bottom: 20px;
    }
}
</style>
