<template>
    <section class="cards">
        <div class="container">
            <h3>Catalysts for meaningful change</h3>
            <div class="row">
                <div class="col-6">
                    <div class="content-wrapper">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Corporate+Icon.png"
                            alt="corporate image" style="width: 70px;">
                        <h4 style="margin-top: 8px;">Empowering teams & organizations</h4>
                        <p style="padding-bottom: 31px; margin-top: -10px;">
                            Whether you’re a small business, mid-size company, or Fortune 500 giant, you’ll have
                            access to over 100 benchmarking templates and DISC integration, as well as our library
                            of more than 900 specialized assessments, supporting everything from picking the right
                            employees to developing leaders, building strong teams, and resolving conflicts.
                        </p>
                        <button class="light" @click="jumpToCorporatePage" style="margin-bottom: 10px;">
                            Solutions for Corporations
                        </button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="content-wrapper">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Coaching+Icon.png"
                            alt="coaching image" style="width: 90px; margin-bottom: -4px;">
                        <h4>The bridge between you and your clients</h4>
                        <p style="padding-bottom: 7px; margin-top: -10px;">
                            You’ll impress clients with your valuable insights, thanks to seamless access to over 50
                            assessments and reports through the Assessments 24x7 premium dashboard. After certification,
                            coaches and consultants report feeling more confident during sessions, and many increase
                            their service fees. Lifetime certification provides access to over 500
                            training material assets, including PowerPoints, videos, and group exercises.
                        </p>
                        <button class="light" @click="jumpToResellerPage" style="margin-bottom: 10px;">
                            Solutions for Coaches and Consultants
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        jumpToCorporatePage(event) {
            window.location.href = 'https://www.assessments24x7.com/assessments/corporate';
            event.target.blur();
        },
        jumpToResellerPage(event) {
            window.location.href = 'https://www.assessments24x7.com/assessments/reseller';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

section {
    padding-top: 40px;
    padding-bottom: 100px;
}

.cards {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
    min-height: 604px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h3 {
    color: #213C85;
    text-align: center;
    font-family: Poppins;
    font-weight: 700;
    margin-bottom: 60px;
}

.col-6 {
    flex: 0 0 48%;
    max-width: 48%;
    box-sizing: border-box;
    border-radius: 14px;
    border: 1px solid #e0ad2b44;
    background: rgba(255, 255, 255, 0.575);
    box-shadow: 4px 4px 4px 0px rgba(112, 112, 112, 0.25);
    padding: 20px 40px;
}

.content-wrapper {
    text-align: center;
    position: relative;
}

h4 {
    color: #213C85;
    font-family: Poppins;
    font-size: 13.5pt;
    font-weight: 700;
}

p {
    color: #213C85;
    text-align: center;
    font-family: $nunito-family;
}

button {
    width: 303px;
}

@media screen and (max-width: 1200px) {
    .col-6 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    h2 {
        font-size: 20pt;
    }
}
</style>
