<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <h1 class="title">
                            Why DISC Certification?
                        </h1>
                        <div class="icon-text">
                            <img src="~/assets/coaches-disc-certification/quantifiable-impact.png"
                                alt="Quantifiable Impact" class="icons">
                            <h4>Quantifiable Impact</h4>
                        </div>
                        <p>
                            Leverage DISC assessments to provide tangible results, demonstrating the impact of your
                            coaching on client performance & leadership growth. Show your clients the clear benefits of
                            their development journey.
                        </p>
                        <div class="icon-text">
                            <img src="~/assets/coaches-disc-certification/high-roi-solution.png" alt="High ROI Solution"
                                class="icons">
                            <h4>High ROI Solution</h4>
                        </div>
                        <p>
                            We understand the importance of cost-effectiveness. Our DISC Certification & Assessment
                            tools offer a high return on investment, providing robust support & resources to enhance
                            your coaching practice without breaking the bank.
                        </p>
                        <div class="icon-text">
                            <img src="~/assets/coaches-disc-certification/tailored-insights.png" alt="Tailored Insights"
                                class="icons">
                            <h4>Tailored Insights for Diverse Needs</h4>
                        </div>
                        <p>
                            The versatility of DISC assessments allows you to customize your approach to meet the unique
                            challenges & goals of each executive client, fostering a more personalized coaching
                            experience.
                        </p>
                        <div class="icon-text">
                            <img src="~/assets/coaches-disc-certification/user-friendly.png" alt="User-Friendly"
                                class="icons">
                            <h4>User-Friendly and Integrative</h4>
                        </div>
                        <p>
                            Our platform is designed with ease of use in mind, ensuring you can seamlessly integrate
                            these assessments into your existing coaching practices without a steep learning curve.
                        </p>
                    </div>
                    <div class="col-6">
                        <img src="~/assets/coaches-disc-certification/black-woman.gif" alt="black woman"
                            class="blackWoman">
                    </div>
                </div>
                <div class="col-12 button-container">
                    <button class="white btn" @click="scrollToSection">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding: 50px 0;
}

.title {
    margin: 70px 0;
    line-height: 60px;
}

.col-6 {
    text-align: left;
    color: white;

    .icon-text {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .icons {
            width: 10%;
            margin-right: 10px;
        }

        h4 {
            margin: 0;
        }
    }

    .blackWoman {
        width: 100%;
    }
}

section {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
    background-size: cover;
}

.col-12.button-container {
    display: flex;
    justify-content: center;
}

@media (max-width: 768px) {
    .col-6 {
        .icon-text {
            flex-direction: column;
            align-items: flex-start;

            .icons {
                margin-right: 0;
                margin-bottom: 5px;
                width: 20%;
            }
        }
    }
}
</style>
