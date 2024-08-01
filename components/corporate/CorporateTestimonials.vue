<template>
    <section class="testimonials-fold">
        <div class="container">
            <div class="row">
                <h1>
                    Don't just take our word, take theirs.
                </h1>
                <h3>
                    How We Help Organizations Succeed
                </h3>
            </div>
            <div class="row button-container">
                <button class="button" @click="scrollToContactForm">
                    Get Started
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
.testimonials-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");
    margin-top: -20px;
}

.container {
    padding-top: 5px;
    padding-bottom: 70px;
}

h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: #0033c5;
    margin-top: 25px;
    margin-bottom: -44px;
}

h3 {
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    color: #0033c5;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
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
    width: 220px;

    &:hover {
        color: #00a8ff;
        background-color: white;
    }
}
</style>