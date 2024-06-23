<template>
    <section id="executiveInsights">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="rise-on-scroll" style="display: flex; justify-content: center; margin-bottom: -20px;">
                        <img src="~/assets/disc-insights/disc-icon.png" alt="disc icon" style="width: 110px;">
                        <img src="~/assets/disc-insights/critical-thinking-icon.png" alt="critical thinking icon"
                            style="width: 110px;">
                        <img src="~/assets/disc-insights/motivators-icon.png" alt="motivators icon"
                            style="width: 110px;">
                    </div>
                    <h2 class="rise-on-scroll"
                        style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center;">
                        DISC <span style="color: #00a8ff">Executive</span> Insights
                    </h2>
                    <p class="subtextPadding rise-on-scroll"
                        style="font-weight: 400; color: #1e222d; font-size: 21px; line-height: 29px; text-align: center; padding: 0 170px; margin-top: -20px; margin-bottom: 50px;">
                        A strategic resource for executives and high-level managers to enhance self-awareness, improve
                        leadership communication, and align their style with organizational goals.
                    </p>
                </div>
                <div class="col-7 rise-on-scroll">
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <p style="text-align: right;">
                            <strong>Comprehensive 3-Model Analysis</strong><br />
                            Combines DISC, Motivators, and Critical Thinking assessments for a holistic view of
                            behavioral tendencies, drivers, and decision-making potential.
                        </p>
                        <img src="~/assets/disc-insights/comprehensive-3-model-analysis.png"
                            alt="comprehensive 3 model analysis icon"
                            style="width: 7%; margin-left: 20px; margin-right: 30px; margin-top: -40px;">
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <p style="text-align: right;">
                            <strong>Customized Insights</strong><br />
                            Tailored sections provide specific insights into natural and adapted styles, showcasing
                            values and approaches to work, interactions, and decisions.
                        </p>
                        <img src="~/assets/disc-insights/customized-insights.png" alt="customized insights icon"
                            style="width: 7%; margin-left: 20px; margin-right: 30px; margin-top: -40px;">
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <p style="text-align: right;">
                            <strong>Enhanced Self-Awareness</strong><br />
                            Helps individuals recognize strengths and areas for improvement, fostering personal and
                            professional growth.
                        </p>
                        <img src="~/assets/disc-insights/enhanced-self-awareness.png" alt="enhanced self awareness icon"
                            style="width: 7%; margin-left: 20px; margin-right: 30px; margin-top: -40px;">
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <p style="text-align: right;">
                            <strong>Effective Communication</strong><br />
                            Includes communication tips and preferences to improve interactions
                            and team dynamics
                        </p>
                        <img src="~/assets/disc-insights/effective-communication.png" alt="effective communication icon"
                            style="width: 7%; margin-left: 20px; margin-right: 30px; margin-top: -40px;">
                    </div>
                    <div class="icon-text-container" style="display: flex; align-items: center; margin-bottom: -15px;">
                        <p style="text-align: right;">
                            <strong>Strategic Development</strong><br />
                            Provides information for crafting targeted development plans aligned with individual
                            capabilities and career goals.
                        </p>
                        <img src="~/assets/disc-insights/strategic-development.png" alt="strategic development icon"
                            style="width: 7%; margin-left: 20px; margin-right: 30px; margin-top: -40px;">
                    </div>
                </div>
                <div class="col-5 rise-on-scroll" style="position: relative;">
                    <img src="~/assets/disc-insights/hero-black-graphic.png" alt="hero black graphic image"
                        style="z-index: 1 !important; width: 420px; max-height: 205px; margin-left: -15px; position: absolute; bottom: 50px; border-radius: 10px;" />
                    <img id="executiveMainImage" :src="currentImage" alt="sample report image"
                        style="position: relative; z-index: 5; border-radius: 10px; width: 90%; margin-top: 10px; z-index: 2; max-height: 490px;"
                        class="report interactive-image transition">
                    <div style="display: flex; justify-content: center; margin-top: 40px;">
                        <button v-for="(image, index) in images" :key="index" @click="currentImage = image"
                            :class="['radial-button', { 'active': currentImage === image }]">
                        </button>
                    </div>
                </div>
                <div class="col-12 rise-on-scroll">
                    <div class="b"
                        style="display: flex; justify-content: center; margin-bottom: -40px; gap: 20px; margin-top: 60px;">
                        <button style="text-align: center;" class="button light-blue" @click="scrollToContactForm">
                            <span>
                                <img src="~/assets/disc-insights/info.png"
                                    style="width: 35px; float: left; margin-top: -3px; margin-left: -15px; margin-right: -16px;"
                                    alt="info icon">
                            </span>
                            Learn More
                        </button>
                        <button style="text-align: center;" class="button light-blue"
                            @click="downloadExecutiveSampleReport">
                            <span>
                                <img src="~/assets/disc-insights/download.png"
                                    style="width: 35px; float: left; margin-top: -3px; margin-left: -15px; margin-right: -6px;"
                                    alt="download icon">
                            </span>
                            Download Sample
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
                require('~/assets/disc-insights/page1e.png'),
                require('~/assets/disc-insights/page2e.png'),
                require('~/assets/disc-insights/page3e.png'),
                require('~/assets/disc-insights/page4e.png'),
            ],
            currentImage: require('~/assets/disc-insights/page1e.png')
        };
    },
    methods: {
        downloadExecutiveSampleReport(event) {
            window.open('https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Executive_Insights.pdf', '_blank');
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
            const image = document.getElementById('executiveMainImage');
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
            const image = document.getElementById('executiveMainImage');
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
        const image = document.getElementById('executiveMainImage');
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
    padding-top: 50px;
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
