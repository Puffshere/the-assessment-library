<template>
    <section class="hero-fold">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1 style="color: #00a8ff;">
                        DISC Assessment <br />
                        Technology
                    </h1>
                    <h2>
                        Core Assessments that <span style="color: #00a8ff; font-weight: 700;">work together</span>
                        <br />
                        to build stronger teams, empower <br />
                        leadership & drive organizational success.
                    </h2>
                    <h5 style="font-style: italic;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-arrow-icon.png" alt="blue arrow"
                            style="width: 20px; margin-right: 10px; margin-top: -3px;">Global Leader in Assessment
                        Technology <br />
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-arrow-icon.png" alt="blue arrow"
                            style="width: 20px; margin-right: 10px; margin-top: -3px;">Powerful Platform with
                        seamless integration <br />
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-arrow-icon.png" alt="blue arrow"
                            style="width: 20px; margin-right: 10px; margin-top: -3px;">ASI Validated, Reliable, and
                        Compliant
                    </h5>
                    <div class="row" style="margin-bottom: 40px;">
                        <button class="button" @click="scrollToTools">
                            <span>Learn More</span>
                        </button>
                        <button class="button" @click="scrollToContactForm">
                            <span>Get Started</span>
                        </button>
                    </div>
                </div>
                <div class="col-4">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/group-standing-graphic.png" alt="group of people smiling image"
                        class="groupSmiling" />
                </div>
            </div>
        </div>
        <div class="circle"></div>
    </section>
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
        },
        scrollToTools(event) {
            const element = document.getElementById('corporateTools');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
    }
}
</script>

<style lang="scss" scoped>
.hero-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");

}

.container {
    position: relative;
    z-index: 2;
}

.circle {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/light-blue-circle-background.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    width: 1000px;
    height: 600px;
    position: absolute;
    top: 117px;
    right: 0;
    z-index: 1;
}

.groupSmiling {
    width: 100%;
    position: relative;
    bottom: 0px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: #1e222d;
    border-radius: 40px;
    color: white;
    border: 1px solid #1e222d;

    &:hover {
        color: #1e222d;
        background-color: white;
    }
}

h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
}

h2 {
    font-size: 32px;
    line-height: 38px;
    font-weight: 400;
    color: #1f1f1f;
}

h5 {
    font-size: 18.6666px;
    line-height: 26px;
    font-weight: 700;
    color: #1f1f1f;
}
</style>
