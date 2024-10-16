<template>
    <section class="cards">
        <div class="container">
            <h2>Catalysts for Meaningful Change</h2>
            <div class="row">
                <div class="col-6">
                    <div class="content-wrapper">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Corporate+Icon.png"
                            alt="corporate image" style="width: 70px;">
                        <h3 style="margin-top: 8px;">Empowering Teams & Organizations</h3>
                        <p style="padding-bottom: 30px; margin-top: -10px;">
                            Whether you’re a small business, mid-size company or Fortune 500 giant, you’ll have
                            access to over 100 benchmarking templates and DISC integration, as well as our library
                            of more than 900 specialized assessments, supporting everything from picking the right
                            employees to developing leaders, building strong teams, and resolving conflicts.
                        </p>
                        <button @click="jumpToCorporatePage" style="margin-bottom: 10px;">
                            Solutions for Corporations
                        </button>
                    </div>
                </div>
                <div class="col-6">
                    <div class="content-wrapper">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Coaching+Icon.png"
                            alt="coaching image" style="width: 90px;">
                        <h3>The Bridge Between You and Your Clients</h3>
                        <p style="padding-bottom: 11px; margin-top: -10px;">
                            You’ll impress clients with your valuable insights, thanks to seamless access to over 50
                            assessments and reports through the Assessments 24x7 premium dashboard. After
                            certification, 84% of coaches and consultants feel more confident during sessions, and
                            over half increase their service fees. Lifetime certification provides access to over
                            500 training materials, including PowerPoints, videos, and group exercises.
                        </p>
                        <button @click="jumpToResellerPage" style="margin-bottom: 10px;">
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

h2 {
    color: #0459DF;
    text-align: center;
    font-family: Poppins;
    font-size: 18pt;
    font-weight: 700;
    margin-bottom: 60px;
}

.col-6 {
    flex: 0 0 48%;
    max-width: 48%;
    box-sizing: border-box;
    border-radius: 14px;
    border: 1px solid #e0ad2b44;
    background: rgba(255, 255, 255, 0.32);
    box-shadow: 4px 4px 4px 0px rgba(112, 112, 112, 0.25);
    padding: 20px 40px;
}

.content-wrapper {
    text-align: center;
    position: relative;
}

h3 {
    color: #0033C5;
    font-family: Poppins;
    font-size: 13.5pt;
    font-weight: 700;
}

p {
    color: #0459DF;
    text-align: center;
    font-family: $nunito-family;
    font-size: 10.5pt;
}

button {
    width: 303px;
    height: 41px;
    border-radius: 8px;
    text-decoration: underline;
    cursor: pointer;
    font-family: Poppins;
    font-size: 10.5pt;
    color: #0033C5;
    text-align: center;
    font-weight: 700;
    background-color: white;
    border: 1px solid #E0AD2B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #f5f5f5;
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
