<template>
    <section class="solutions-fold">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-circle-background.png"
                        alt="image of a blue circle" style="width: 400px; position: absolute; bottom: 0px;">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/fold-9-female-standing-image.png"
                        alt="picture of woman smiling"
                        style="width: 264px; margin-top: 30px; position: relative; bottom: -10px;">
                </div>
                <div class="col-7" style="margin-left: -24px;">
                    <h1>
                        <span style="color: white;">1 Solution</span> <br />
                        <span style="color: #00a8ff;">Endless Applications</span>
                    </h1>
                    <div class="row" style="margin-left: -24px; margin-top: -40px;">
                        <div class="col-6" style="color: white; font-size: 17px; font-weight: 400;">
                            <ul>
                                <li>
                                    Improve Hiring & Selection
                                </li>
                                <li>
                                    Create World-Class Leaders
                                </li>
                                <li>
                                    Increase Productivity
                                </li>
                                <li>
                                    Increase Sales
                                </li>
                            </ul>
                        </div>
                        <div class="col-6" style="color: white; font-size: 17px; font-weight: 400;">
                            <ul>
                                <li>
                                    Create Connected Teams
                                </li>
                                <li>
                                    Model Team Building
                                </li>
                                <li>
                                    Reduce Employee Turnover
                                </li>
                                <li>
                                    Tailor Employee Training
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h5 style="color: #ffbd59; margin-top: 20px;">
                        Make the Right, Bright Decisions professionally and personally.
                    </h5>
                    <button class="button" @click="scrollToContactForm">
                        <span>Start Your Journey</span>
                    </button>
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/fold-9-blue-arrow.png"
                        alt="image of blue arrow" style="width: 70px; margin-top: -45px;">
                </div>
            </div>
        </div>
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
        }
    }
}
</script>

<style lang="scss" scoped>
.solutions-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-light-background.png");
}

h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
}

h5 {
    font-size: 18.6667px;
    font-weight: 700;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: #00a8ff;
    border-radius: 40px;
    color: white;
    border: 1px solid #00a8ff;
    margin-bottom: 55px;

    &:hover {
        color: #00a8ff;
        background-color: white;
    }
}
</style>