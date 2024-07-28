<template>
    <section class="corporate-tools" id="corporateTools">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title" style="margin-bottom: 0px;">
                        Comprehensive DISC Tools <br />
                        for <span style="color: #00a8ff;">Organizational Success</span>
                    </h1>
                    <div style="position: relative;">
                        <img src="~/assets/corporate/coworkers-graphic.png" alt="coworkers smiling"
                            class="workersSmiling">
                    </div>
                    <p style="max-width: 560px; float: right;">
                        Our globally recognized DISC Assessment Technology offers turnkey and customizable reports for
                        individual and team development. Choose from options like Self-awareness, Leadership, Sales, &
                        more. With 25+ languages & a suite of supporting assessments, our platform provides tailored
                        solutions for every business need. Seamlessly integrate our tools, generate detailed reports, &
                        manage everything from one powerful dashboard.
                    </p>
                </div>
                <button class="button" style="margin-top: 20px;" @click="scrollToContactForm">
                    Explore More
                </button>
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
.corporate-tools {
    background-image: url("~assets/corporate/blue-light-background.png");
    width: 100%;
}

.container {
    padding-top: 80px;
    padding-bottom: 80px;
}

.title {
    margin-top: 0px;
    margin-bottom: 80px;
    line-height: 60px;
}

.col-12 {
    text-align: right;
    color: white;

    .workersSmiling {
        width: 50%;
        position: absolute;
        top: -40px;
        left: 0px;
    }
}

section {
    background: url('~assets/corporate/blue-light-background.png');
    background-size: cover;
}

.col-12.button-container {
    display: flex;
    justify-content: center;
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

p {
    font-size: 18.6666px;
    line-height: 30px;
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
    float: right;


    &:hover {
        color: #00a8ff;
        background-color: white;
    }
}
</style>