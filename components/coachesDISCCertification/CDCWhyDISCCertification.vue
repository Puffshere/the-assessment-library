<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title" style="max-width: 300px;">
                        Why DISC Certification?
                    </h1>
                    <div style="position: relative;">
                        <img src="~/assets/coaches-disc-certification/black-woman.gif" alt="black woman"
                            class="blackWoman">
                    </div>
                    <div class="icon-text" style="display: flex;">
                        <img src="~/assets/coaches-disc-certification/quantifiable-impact.png" alt="Quantifiable Impact"
                            style="width: 5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">
                            Quantifiable Impact</h4>
                    </div>
                    <p style="max-width: 500px; font-size: 18px; margin-top: 10px;">
                        Leverage DISC assessments to provide tangible results, demonstrating the impact of your
                        coaching on client performance & leadership growth. Show your clients the clear benefits of
                        their development journey.
                    </p>
                    <div class="icon-text" style="display: flex; margin-top: 40px;">
                        <img src="~/assets/coaches-disc-certification/high-roi-solution.png" alt="High ROI Solution"
                            style="width: 5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">High ROI
                            Solution</h4>
                    </div>
                    <p style="max-width: 650px; font-size: 18px; margin-top: 10px;">
                        We understand the importance of cost-effectiveness. Our DISC Certification & Assessment
                        tools offer a high return on investment, providing robust support & resources to enhance
                        your coaching practice without breaking the bank.
                    </p>
                    <div class="icon-text" style="display: flex; margin-top: 20px;">
                        <img src="~/assets/coaches-disc-certification/tailored-insights.png" alt="Tailored Insights"
                            style="width: 4.5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">Tailored
                            Insights for Diverse Needs</h4>
                    </div>
                    <p style="max-width: 875px; font-size: 18px; margin-top: 10px;">
                        The versatility of DISC assessments allows you to customize your approach to meet the unique
                        challenges & goals of each executive client, fostering a more personalized coaching
                        experience.
                    </p>
                    <div class="icon-text" style="display: flex; margin-top: 40px;">
                        <img src="~/assets/coaches-disc-certification/user-friendly.png" alt="User-Friendly"
                            style="width: 5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">
                            User-Friendly and Integrative</h4>
                    </div>
                    <p style="font-size: 18px; margin-top: 10px;">
                        Our platform is designed with ease of use in mind, ensuring you can seamlessly integrate
                        these assessments into your existing coaching practices without a steep learning curve.
                    </p>
                </div>
                <div class="col-12 button-container" style="margin-top: 120px;">
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
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-rise');
                } else {
                    entry.target.classList.remove('animate-rise');
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0 // Adjust this as needed
        });

        // Select each child element to be observed
        const elements = document.querySelectorAll(
            '.col-12 > h1, .col-12 > .icon-text, .col-12 > p, .col-12 > button'
        );
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding-top: 150px;
    padding-bottom: 100px;

    img {
        width: 115%;
    }
}

.title {
    margin-top: 0px;
    margin-bottom: 80px;
    line-height: 60px;
}

.col-12 {
    text-align: left;
    color: white;

    .blackWoman {
        width: 59%;
        position: absolute;
        top: -200px;
        right: -70px;
    }
}


.icons {
    width: 5%;
}

section {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
    background-size: cover;
}

.col-12.button-container {
    display: flex;
    justify-content: center;
}

@media (max-width: 1130px) {
    .col-12 {
        .blackWoman {
            width: 100%;
            position: static;
            top: 0px;
            right: 0px;
            margin-bottom: 50px;
        }
    }
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

@keyframes rise {
    from {
        transform: translateY(.25in);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.title,
.icon-text,
p,
button {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}


.animate-rise {
    animation: rise 1s ease-out forwards;
}
</style>