<template>
    <div class="body">
        <section class="topSection" style="padding-bottom: 200px;">
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
        <section class="bottomButtons" style="padding-bottom: 70px;">
            <div class="container" style="min-height: 500px;">
                <div class="row">
                    <div class="col-12" style="margin-top: -160px;">
                        <h2>
                            Choose the right plan for your needs
                        </h2>
                        <div class="col-4 card">

                        </div>
                        <div class="col-4 card">

                        </div>
                        <div class="col-4 card">

                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="display: flex; justify-content: center; margin-top: 0px;">
                <button>
                    Book Live Demo
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
    color: #FFDE59;
    text-align: center;
    font-weight: 700;
}

.bottomButtons {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;

    button {
        width: 220px;
        height: 41px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        text-decoration: underline;
        cursor: pointer;
        font-weight: 700;
        color: white;
        text-align: center;
        font-family: Poppins;
        font-size: 10.5pt;
        border: none;
        background: #0033C5;
    }
}

.card {
    background-color: white;
    width: 298px;
    height: 500px;
    border-radius: 14px;
    border: 1px solid #E0AD2B;
    background: #FFF;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>