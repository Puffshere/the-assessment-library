<template>
    <section>
        <div class="container">
            <div class="row" style="display: flex; justify-content: center;">
                <div class="col-12">
                    <div class="col-6" style="padding-left: 0px;">
                        <h2 style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center; text-shadow: #00000053 0px 1.8px 7.64998px;">
                            Hire Smart <br />
                            with <span style="color: #00a8ff;">DISC Insights</span>
                        </h2>
                        <p style="font-weight: 400; color: #1e222d; font-size: 21px; line-height: 29px; text-align: left; padding-bottom: 60px;">
                            Empower your team with actionable insights from our DISC Workplace Insights and DISC
                            Executive Insights Reports.
                        </p>
                    </div>
                    <div class="col-6">
                        <img id="heroImage"
                            src="~/assets/disc-insights/hero-main-graphic.png"
                            alt="hero main graphic image" class="interactive-image transition media"
                            style="position: relative; right: -70px; z-index: 10; cursor: pointer" />
                    </div>
                    <div class="col-12" style="position: relative;">
                        <img class="blackGraphic"
                            src="~/assets/disc-insights/hero-black-graphic.png"
                            alt="hero black graphic image"
                            style="width: 116%; z-index: 1; max-height: 200px; margin-top: -180px; margin-left: -80px;" />
                        <div class="mediaButtons" style="margin-top: -125px; margin-left: -90px;">
                            <button @click="scrollToWorkplaceInsights" class="button light-blue-hero topButton"
                                style="margin-left: 50px;">
                                DISC <span style="text-decoration: underline;">Workplace</span> Insights
                                <span>
                                    <img src="~/assets/disc-insights/right-arrow.png"
                                        style="width: 35px; float: right; margin-top: -3px; margin-right: -16px;"
                                        alt="right arrow icon">
                                </span>
                            </button>
                            <button @click="scrollToExecutiveInsights" class="button light-blue-hero">
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

.container {
    padding-top: 40px;
    padding-bottom: 35px;
}

h4 {
    line-height: 38px;
}

.col-7 .arrow {
    width: 5%;
    margin-top: -40px;
}

.interactive-image {
    width: 100%;
    margin-top: 10px;
    opacity: 1 !important;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    --rotateX: 0deg;
    --rotateY: 0deg;
    transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
    border-radius: 20px;
}

.interactive-image.transition {
    transition: transform 1s ease-out, box-shadow 1s ease-out;
}

.interactive-image.hover {
    transform: rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.interactive-image:active {
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

.light-blue-hero {
    color: white;
    background-color: #00a8ff;

}

.light-blue-hero:hover {
    color: #00a8ff;
    background-color: white;
}


@media (max-width: 768px) {
    .container {
        padding-top: 0px !important;
        padding-bottom: 120px !important;
    }

    .col-6 {
        padding-left: 0px !important;
    }

    .media {
        right: 0px !important;
        margin-top: -50px !important;
    }

    .blackGraphic {
        margin-top: -100px !important;
        border-radius: 10px;
        margin-left: -10px !important;
        width: 106% !important;
    }

    .mediaButtons {
        margin-top: 40px !important;
        margin-bottom: -100px !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 0px !important;
        justify-content: center;
        margin-left: 0px !important;

    }

    .topButton {
        margin-left: 0px !important;
    }

    .interactive-image {
        width: 100%;
        margin-top: 5px;
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }

    .interactive-image.hover {
        transform: rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(1.02);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    }
}
</style>