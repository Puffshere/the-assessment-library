<template>
    <section class="success-fold">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h1 style="margin-top: 80px; margin-bottom: -25px;">
                        Our Reports <br />
                        <span style="color: #00a8ff">Your Success</span>
                    </h1>
                    <h3>
                        Uncover Immediate insights that would take <br />
                        years to surface otherwise.
                    </h3>
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
                    <div class="carousel-wrapper">
                        <div class="carousel">
                            <div v-for="(card, index) in cards" :key="index"
                                :class="['carousel-card', { active: activeIndex === index }]"
                                :style="getCardStyle(index)">
                                <div class="custom-card">
                                    <img :src="card.image" alt="Report Image" />
                                    <div class="card-content">
                                        <h4 style="margin-top: 0px;">{{ card.title }}</h4>
                                        <h5 style="margin-top: -15px;">{{ card.description }}</h5>
                                        <h5 style="margin-top: -20px; margin-bottom: 10px;">{{ card.languages }}</h5>
                                        <a :href="card.link" target="_blank" rel="noopener">
                                            <button
                                                style="cursor: pointer; font-size: 12.6667px; font-weight: 700; color: #0033c5; border-radius: 20px; padding: 10px 20px; border: none;">Download
                                                Sample</button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div class="carousel-arrow left" @click="rotateLeft">
                                <span style="margin-top: -6px; margin-left: -3px;">&laquo;</span>
                            </div>
                            <div class="carousel-arrow right" @click="rotateRight">
                                <span style="margin-top: -6px; margin-right: 0px;">&raquo;</span>
                            </div>
                        </div>
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
            activeIndex: 0,
            cards: [
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCTeamSummarySample-1.png', title: 'DISC Team Summary', description: 'Free Group Report', languages: '25 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummarySample.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCSelfSampleReport+(2)-1.png', title: 'DISC Self', description: 'Core Report', languages: '25 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Motivators+(1)-1.png', title: 'Motivators', description: 'Core Report', languages: '16 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Motivators.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/EIQSampleReport-1.png', title: 'Emotional Intelligence', description: 'Core Report', languages: '9 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Leadership-1.png', title: 'DISC Leadership', description: 'Core Report', languages: '9 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Awareness_(EI)-1.png', title: 'DISC Awareness', description: 'Core Report', languages: '2 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Awareness_(EI).pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCworkplace-1.png', title: 'DISC Workplace Insights', description: 'Core Report', languages: '1 Language', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCworkplace.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Executive_Insights+(2)-1.png', title: 'DISC Executive Insights', description: 'Core Report', languages: '1 Language', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Executive_Insights.pdf' },
                { image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/TeamDynamicsGroupSampleReport+(1)-1.png', title: 'DISC Team Dynamics', description: 'Free Group Report', languages: '25 Languages', link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupSampleReport.pdf' },
            ],
        };
    },
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        rotateLeft() {
            this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
        },
        rotateRight() {
            this.activeIndex = (this.activeIndex + 1) % this.cards.length;
        },
        getCardStyle(index) {
            const totalCards = this.cards.length;
            const position = (index - this.activeIndex + totalCards) % totalCards;

            if (position === 0) {
                return {
                    transform: 'translateX(-225px) scale(0.8) translateZ(-50px)',
                    zIndex: 1,
                    opacity: 1,
                };
            } else if (position === 1) {
                return {
                    transform: 'translateX(0px) scale(1.2) translateZ(0px)',
                    zIndex: 2,
                    opacity: 1,
                };
            } else if (position === 2) {
                return {
                    transform: 'translateX(225px) scale(0.8) translateZ(-50px)',
                    zIndex: 1,
                    opacity: 1,
                };
            } else {
                return {
                    transform: 'translateX(120px) scale(0.8) translateZ(-50px)',
                    zIndex: 0,
                    opacity: 0,
                };
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.success-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");
}

.container {
    padding-top: 20px;
    padding-bottom: 30px;
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

h3 {
    font-weight: 400;
    font-size: 18.6667px;
    line-height: 22px;
}

h5 {
    font-size: 12.6667px;
    line-height: 17px;
    font-weight: 400;
}

p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: -8px;
}

.carousel-wrapper {
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.carousel {
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 0.5s ease-in-out;
}

.carousel-card {
    position: absolute;
    width: 250px;
    height: 430px;
    top: 40%;
    left: 10%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transform-origin: center center;
    backface-visibility: hidden;
    z-index: 0;
    opacity: 0;

    &.active {
        z-index: 2;
        opacity: 1;
    }

    .custom-card {
        width: 100%;
        height: 100%;
        background-color: black;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        margin-top: -30px;

        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        .card-content {
            color: white;
            text-align: center;

            h3 {
                margin: 10px 0;
                font-size: 1.5em;
            }

            p {
                margin: 10px 0;
                font-size: 1em;
            }

            .card-button {
                background-color: #00a8ff;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;

                &:hover {
                    background-color: #007bb5;
                }
            }
        }
    }
}

.carousel-arrow {
    position: absolute;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: #00a8ff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    font-size: 60px;
    z-index: 1000;
}

.carousel-arrow.left {
    top: 275px;
    left: -30px;
}

.carousel-arrow.right {
    top: 275px;
    right: -40px;
}
</style>