<template>
    <section class="solutions-fold">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-circle-background.png"
                        alt="image of a blue circle" style="width: 400px; position: absolute; bottom: 0px;" class="circle">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/fold-9-female-standing-image.png"
                        alt="picture of woman smiling"
                        style="width: 264px; margin-top: 31px; position: relative; bottom: -10px;" class="rise-on-scroll">
                        <hr class="hr" style="display: none;">
                </div>
                <div class="col-7" style="margin-left: -24px;">
                    <h1 class="rise-on-scroll">
                        <span style="color: white;">1 Solution</span> <br />
                        <span style="color: #00a8ff;">Endless Applications</span>
                    </h1>
                    <div class="row" style="margin-left: -24px; margin-top: -40px;">
                        <div class="col-6 rise-on-scroll" style="color: white; font-size: 17px; font-weight: 400;">
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
                        <div class="col-6 rise-on-scroll" style="color: white; font-size: 17px; font-weight: 400;">
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
                    <h5 class="rise-on-scroll" style="color: #ffbd59; margin-top: 20px;">
                        Make the Right, Bright Decisions professionally and personally.
                    </h5>
                    <button class="button" @click="scrollToContactForm">
                        <span>Start Your Journey</span>
                    </button>
                    <img class="rise-on-scroll blueArrow" src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/fold-9-blue-arrow.png"
                        alt="image of blue arrow" style="width: 70px; margin-top: -45px;">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.observeElements();
    },
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        observeElements() {
            const options = {
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rise');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            const elements = document.querySelectorAll('.rise-on-scroll');
            elements.forEach(el => {
                observer.observe(el);
            });
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

    &:active {
        background-color: rgb(122, 121, 121);
    }
}

.rise-on-scroll {
    transition: transform 1s ease-out;
    transform: translateY(1in);
    opacity: 0;
}

.rise-on-scroll.rise {
    transform: translateY(0);
    opacity: 1;
}

@media (max-width: 1050px) {
    .circle {
        display: none;
    }

    .blueArrow {
        display: none;
    }

    .col-7 {
        margin-left: 20px !important;
    }

    .row {
        margin-left: 0px !important;
    }

    .hr {
        display: block !important;
    }
}
</style>