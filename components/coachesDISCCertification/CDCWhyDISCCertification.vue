<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title" style="max-width: 300px;">
                        Why DISC Certification?
                    </h1>
                    <div style="position: relative;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/black-woman.gif"
                            alt="black woman" class="blackWoman">
                    </div>
                    <div class="icon-text" style="display: flex;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/quantifiable-impact.png"
                            alt="Quantifiable Impact" style="width: 5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">
                            Quantifiable Impact</h4>
                    </div>
                    <p style="max-width: 500px; font-size: 18px; margin-top: 10px;">
                        Leverage DISC assessments to provide tangible results: demonstrating the impact of your coaching
                        on client performance and leadership growth. Show your clients the clear benefits of their
                        development journey.
                    </p>
                    <div class="icon-text" style="display: flex; margin-top: 40px;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/high-roi-solution.png"
                            alt="High ROI Solution" style="width: 5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">High ROI
                            Solution</h4>
                    </div>
                    <p style="max-width: 650px; font-size: 18px; margin-top: 10px;">
                        We understand the importance of cost-effectiveness. Our DISC Certification & Assessment tools
                        ensure a high return on investment, providing robust support and resources to enhance your
                        coaching practice without breaking the bank.
                    </p>
                    <div class="icon-text" style="display: flex; margin-top: 20px;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/tailored-insights.png"
                            alt="Tailored Insights" style="width: 4.5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">Tailored
                            Insights</h4>
                    </div>
                    <p style="max-width: 875px; font-size: 18px; margin-top: 10px;">
                        The versatility of DISC assessments allows you to customize your approach to meet the unique
                        challenges and goals of each client, fostering a more personalized coaching experience.
                    </p>
                    <div class="icon-text" style="display: flex; margin-top: 40px;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/user-friendly.png"
                            alt="User-Friendly" style="width: 5%;" class="icons">
                        <h4 style="font-size: 30px; font-weight: 600; margin: auto 0px; padding-left: 20px;">
                            Integrative and User-Friendly</h4>
                    </div>
                    <p style="font-size: 18px; margin-top: 10px;">
                        Our platform is designed for ease of use, ensuring you can seamlessly integrate these
                        assessments into your existing coaching practices with a simple learning curve.
                    </p>
                    <div style="display: flex; justify-content: center; margin-top: 80px;">
                        <button class="white btn" @click="scrollToSection">
                            Get Started Today
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
        scrollToSection(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animate-rise', 'animated');
                    observer.unobserve(entry.target); // Disconnect observer after animation
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.1 // Adjust this as needed
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
    padding-top: 80px;
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
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/blue-geo-background.png');
    background-size: cover;
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

    .title {
        font-size: 3em;
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
p {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.animate-rise {
    animation: rise 1s ease-out forwards;
}

.animated {
    /* This class ensures that the element won't animate again */
}
</style>
