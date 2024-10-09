<template>
    <div class="body">
        <section class="topSection" style="padding-bottom: 180px;">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
                alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 0px;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 style="color: white; text-align: center;">
                            A Powerful Platform for <span style="color: #FFDE59">Your Assessment Success</span>
                        </h1>
                        <p
                            style="color: white; text-align: center; margin-bottom: -10px; font-family: Nunito Sans; line-height: 14.33pt;">
                            Assessments 24x7’s exclusive, customized platform is the launchpad for all of your
                            assessment-related activities, and our fully integrated and intuitive dashboard is the
                            guidance system that puts you in control of it all — at your fingertips, 24x7, on any
                            device.
                            Whether you’re a solo-practitioner coach, a small consulting business, a midsize company or
                            a multinational corporation with thousands of employees, Assessments 24x7 has a plan that is
                            right for your specific assessment needs and volume.

                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bottomButtons" style="padding-bottom: 100px;">
            <div class="container" style="min-height: 607px;">
                <div class="row">
                    <div class="col-12">

                    </div>
                </div>
            </div>
            <div class="row" style="display: flex; justify-content: center; margin-top: 20px;">
                <button class="firstButton">
                    Take Your Free Assessment
                </button>
                <button class="secondButton">
                    10 Key Benefits of DISC
                </button>

            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
.topSection {
    background: linear-gradient(180deg, #0033C5 -2.43%, #3298FF 54.34%);
    background-position: center;
}

h1 {
    font-size: 27pt;
    font-weight: 700;
    color: #213C85;
}

h2 {
    font-size: 18pt;
    color: #213C85;
    text-align: right;
    font-weight: 700;
}

.bottomButtons {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;

    button {
        width: 184px;
        height: 36px;
        border-radius: 4px;
        background: #0C3ECC;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        text-decoration: underline;
        cursor: pointer;
        font-size: 8.25pt;
        font-weight: 700;
        font-family: Nunito Sans;
    }

    .firstButton {
        color: white;
        border: none;
        margin-right: 30px;
    }

    .secondButton {
        border: 1px solid #E0AD2B;
        background: rgba(12, 62, 204, 0.00);
        color: #0D3FCD;
    }
}
</style>