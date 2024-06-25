<template>
    <section id="workplaceInsights">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="rise-on-scroll" style="display: flex; justify-content: center; margin-bottom: -40px;">
                        <img src="~/assets/disc-insights/disc-icon.png" alt="disc icon" style="width: 110px;"
                            id="heroImage">
                        <img src="~/assets/disc-insights/critical-thinking-icon.png" alt="critical thinking icon"
                            style="width: 110px;">
                    </div>
                    <h2 class="rise-on-scroll"
                        style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center;">
                        DISC <span style="color: #00a8ff">Workplace</span> Insights
                    </h2>
                    <p class="rise-on-scroll subtextPadding"
                        style="font-weight: 400; color: #1e222d; font-size: 21px; line-height: 29px; text-align: center; padding: 0 170px; margin-top: -20px">
                        A comprehensive tool for HR professionals and mid-level managers to refine recruitment
                        processes, optimize team performance, and develop employees effectively.
                    </p>
                </div>
                <div class="col-5 rise-on-scroll" style="position: relative;">
                    <img src="~/assets/disc-insights/hero-black-graphic.png" alt="hero black graphic image"
                        style="z-index: 1 !important; width: 420px; max-height: 205px; margin-left: -15px; position: absolute; bottom: 50px; border-radius: 10px;" />
                    <img id="heroImageOnWorkplace" :src="currentImage" alt="sample report image"
                        style="position: relative; border-radius: 10px; width: 90%; margin-top: 10px; max-height: 490px; z-index: 5 !important; cursor: pointer;"
                        class="report interactive-image transition">
                    <div style="display: flex; justify-content: center; margin-top: 40px;">
                        <button v-for="(image, index) in images" :key="index" @click="currentImage = image"
                            :class="['radial-button', { 'active': currentImage === image }]"></button>
                    </div>
                </div>
                <div class="col-7 rise-on-scroll">
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <img src="~/assets/disc-insights/targeted-evaluation.png" alt="target icon"
                            style="width: 7%; margin-right: 15px; margin-top: -60px;">
                        <p>
                            <strong>Targeted Evaluation</strong><br />
                            Assesses four action factors: collaboration effectiveness, stress capability, prioritization
                            skills, and accountability, offering a nuanced view of workplace capabilities.
                        </p>
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <img src="~/assets/disc-insights/behavioral-and-communication-analysis.png"
                            alt="behavioral analysis icon" style="width: 7%; margin-right: 15px; margin-top: -60px;">
                        <p>
                            <strong>Behavioral and Communication Analysis</strong><br />
                            Provides detailed analysis of how an individual's DISC profile affects interactions and
                            communication, crucial for team dynamics and leadership roles.
                        </p>
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <img src="~/assets/disc-insights/interview-and-development-tools.png" alt="interview tools icon"
                            style="width: 7%; margin-right: 15px; margin-top: -40px;">
                        <p>
                            <strong>Interview and Development Tools</strong><br />
                            Includes sample interview questions and development suggestions, aiding in recruitment and
                            employee growth.
                        </p>
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <img src="~/assets/disc-insights/risk-assessment.png" alt="risk assessment icon"
                            style="width: 7%; margin-right: 15px; margin-top: -60px;">
                        <p>
                            <strong>Risk Assessment</strong><br />
                            Categorizes performance indicators into 'Satisfactory' or 'Cautionary' to guide hiring and
                            development decisions, adding precaution and insight into potential challenges.
                        </p>
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <img src="~/assets/disc-insights/adaptability-insights.png" alt="adaptability insights icon"
                            style="width: 7%; margin-right: 15px; margin-top: -60px;">
                        <p>
                            <strong>Adaptability Insights</strong><br />
                            Distinguishes between natural and adapted behavioral styles, providing insights into
                            reactions under different circumstances or roles.
                        </p>
                    </div>
                </div>
                <div class="col-12 rise-on-scroll">
                    <div class="b"
                        style="display: flex; justify-content: center; margin-bottom: -40px; gap: 0px; margin-top: 60px;">
                        <button style="text-align: center;" class="button light-blue"
                            @click="downloadWorkplaceSampleReport">
                            <span>
                                <img src="~/assets/disc-insights/download.png"
                                    style="width: 35px; float: left; margin-top: -3px; margin-left: -15px; margin-right: -6px;"
                                    alt="download icon">
                            </span>
                            Download Sample
                        </button>
                        <button style="text-align: center;" class="button light-blue" @click="scrollToContactForm">
                            <span>
                                <img src="~/assets/disc-insights/info.png"
                                    style="width: 35px; float: left; margin-top: -3px; margin-left: -15px; margin-right: -16px;"
                                    alt="info icon">
                            </span>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            images: [
                require('~/assets/disc-insights/page1.png'),
                require('~/assets/disc-insights/page2.png'),
                require('~/assets/disc-insights/page3.png'),
                require('~/assets/disc-insights/page4.png'),
            ],
            currentImage: require('~/assets/disc-insights/page1.png')
        };
    },
    methods: {
        downloadWorkplaceSampleReport(event) {
            window.open('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCworkplace.pdf', '_blank');
            event.target.blur();
        },
        scrollToContactForm(event) {
            const element = document.getElementById('discInsightsContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        handleMouseMove(event) {
            const image = document.getElementById('heroImageOnWorkplace');
            image.classList.remove('transition');
            image.classList.add('hover');
            const rect = image.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / 10;
            const moveY = (y - centerY) / 10;
            image.style.setProperty('--rotateX', `${moveY}deg`);
            image.style.setProperty('--rotateY', `${moveX}deg`);
        },
        resetImageTransform() {
            const image = document.getElementById('heroImageOnWorkplace');
            image.classList.add('transition');
            image.classList.remove('hover');
            image.style.setProperty('--rotateX', '0deg');
            image.style.setProperty('--rotateY', '0deg');
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
    },
    mounted() {
        this.observeElements();
        const image = document.getElementById('heroImageOnWorkplace');
        if (image) {
            image.addEventListener('mousemove', this.handleMouseMove);
            image.addEventListener('mouseleave', this.resetImageTransform);
        }
    }
};
</script>

<style scoped>
@import './DiscInsights.scss';

.container {
    padding-top: 40px;
    padding-bottom: 200px;
}

button.radial-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color: #d3d3d3;
    margin: 0 5px;
    cursor: pointer;
}

button.radial-button.active {
    background-color: #00a8ff;
}

.interactive-image {
    width: 85%;
    margin-top: 10px;
    opacity: 1 !important;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    --rotateX: 0deg;
    --rotateY: 0deg;
    transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
}

.interactive-image.transition {
    transition: transform 1s ease-out, box-shadow 1s ease-out;
}

.interactive-image.hover {
    transform: rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.button {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    cursor: pointer;
    background-color: #00a8ff;
    min-width: 240px;
    border-radius: 40px;
    color: white;
    margin-left: 17px;
}

@media (max-width: 1000px) {
    .container {
        padding-bottom: 160px;
    }

    .subtextPadding {
        padding: 0px 0px !important;
    }

    .report {
        width: 100% !important;
    }

    .b {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}

/* Add styles for rise animation */
.rise-on-scroll {
    transition: transform 1s ease-out;
    transform: translateY(1in);
    opacity: 0;
}

.rise-on-scroll.rise {
    transform: translateY(0);
    opacity: 1;
}
</style>
