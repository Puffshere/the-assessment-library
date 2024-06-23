<template>
    <section>
        <div class="body" style="padding: 0 270px;">
            <div class="row">
                <div class="col-12">
                    <div class="col-6" style="padding-left: 50px;">
                        <h2
                            style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center; text-shadow: #00000053 0px 1.8px 7.64998px;">
                            Hire Smart <br />
                            with <span style="color: #00a8ff;">DISC Insights</span>
                        </h2>
                        <p
                            style="font-weight: 400; color: #1e222d; font-size: 21px; line-height: 29px; text-align: justify; padding: 0 40px; padding-bottom: 60px;">
                            Empower your team with actionable insights from our DISC Workplace Insights and Executive
                            Insights
                            Reports.
                        </p>
                    </div>
                    <div class="col-6">
                        <img id="heroImage" src="~/assets/disc-insights/hero-main-graphic.png"
                            alt="hero main graphic image" class="interactive-image transition"
                            style="position: relative; right: -70px; z-index: 10; cursor: pointer" />
                    </div>
                    <div class="col-12" style="position: relative;">
                        <img src="~/assets/disc-insights/hero-black-graphic.png" alt="hero black graphic image"
                            style="width: 100%; z-index: 1; max-height: 205px; margin-top: -180px;" />
                        <div style="margin-top: -125px;">
                            <button @click="scrollToWorkplaceInsights" class="button light-blue"
                                style="margin-left: 50px;">
                                DISC <span style="text-decoration: underline;">Workplace</span> Insights
                                <span>
                                    <img src="~/assets/disc-insights/right-arrow.png"
                                        style="width: 35px; float: right; margin-top: -3px; margin-right: -16px;"
                                        alt="right arrow icon">
                                </span>
                            </button>
                            <button @click="scrollToExecutiveInsights" class="button light-blue">
                                DISC <span style="text-decoration: underline;">Executive</span> Insights
                                <span>
                                    <img src="~/assets/disc-insights/right-arrow.png"
                                        style="width: 35px; float: right; margin-top: -3px; margin-right: -16px;"
                                        alt="right arrow icon">
                                </span>
                            </button>
                        </div>
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
            const element = document.getElementById('icfSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToWorkplaceInsights(event) {
            const element = document.getElementById('workplaceInsights');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToExecutiveInsights(event) {
            const element = document.getElementById('executiveInsights');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToSectionButton(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        handleMouseMove(event) {
            const image = document.getElementById('heroImage');
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
            const image = document.getElementById('heroImage');
            image.classList.add('transition');
            image.classList.remove('hover');
            image.style.setProperty('--rotateX', '0deg');
            image.style.setProperty('--rotateY', '0deg');
        }
    },
    mounted() {
        const image = document.getElementById('heroImage');
        if (image) {
            image.addEventListener('mousemove', this.handleMouseMove);
            image.addEventListener('mouseleave', this.resetImageTransform);
        }
    }
}

</script>

<style scoped>
@import './DiscInsights.scss';

.body {
    padding: 50px 0;
    margin-top: 40px;
    margin-bottom: 120px;
}

h4 {
    line-height: 38px;
}

.col-7 .arrow {
    width: 5%;
    margin-top: -40px;
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
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    cursor: pointer;
    min-width: 300px;
    border-radius: 40px;
}
</style>