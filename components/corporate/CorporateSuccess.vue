<template>
    <section class="success-fold">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h1 style="margin-top: 80px; margin-bottom: -25px;">
                        Our Reports <br />
                        <span style="color: #00a8ff">Your Success</span>
                    </h1>
                    <h5>
                        Uncover Immediate insights that would take <br />
                        years to surface otherwise.
                    </h5>
                    <div style="color: #00a8ff; text-decoration: underline; margin-bottom: 50px;">
                        <p>
                            Validated Excellence
                        </p>
                        <p>
                            Total Transparency
                        </p>
                        <p>
                            Top Choice for Professionals
                        </p>
                    </div>
                    <button class="button" @click="scrollToContactForm">
                        <span>Get Started</span>
                    </button>
                </div>
                <div class="col-7">

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
.success-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");
}

.container {
    position: relative;
    z-index: 2;
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
    padding: 8px 40px;
    margin-bottom: 180px;

    &:hover {
        color: #1e222d;
        background-color: white;
    }
}

h1 {
    font-size: 48px;
    line-height: 57px;
    font-weight: 700;
}

h2 {
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
    color: #1f1f1f;
    margin-top: -20px;
}

h5 {
    font-size: 18.6666px;
    line-height: 22px;
    font-weight: 400;
    color: #1f1f1f;
}

p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: -8px;
}
</style>