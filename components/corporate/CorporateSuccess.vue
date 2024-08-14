<template>
    <section class="success-fold">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h1 class="rise-on-scroll" style="margin-top: 80px; margin-bottom: -25px;">
                        Our Reports <br />
                        <span style="color: #00a8ff">Your Success</span>
                    </h1>
                    <h3 class="rise-on-scroll" style="margin-top: 30px;">
                        Uncover Immediate insights that would take <br />
                        years to surface otherwise.
                    </h3>
                    <div class="rise-on-scroll" style="color: #00a8ff; margin-bottom: 50px;">
                        <div v-for="(item, index) in items" :key="index">
                            <p @click="toggleItem(index)" style="cursor: pointer;">
                                <span>{{ item.expanded ? '-' : '+' }}</span> {{ item.text }}
                            </p>
                            <div v-if="item.expanded" style="margin-left: 20px;">
                                <p>{{ item.additionalText }}</p>
                            </div>
                        </div>
                    </div>
                    <button class="button rise-on-scroll" @click="scrollToContactForm">
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
                                    <div :class="['card-flip', { 'is-flippable': getFlippableClass(index) }]">
                                        <div class="card-front">
                                            <img :src="card.image" alt="Report Image" />
                                        </div>
                                        <div class="card-back">
                                            <img :src="card.backImage" alt="Report Image Backside" />
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <h4 style="margin-top: 0px;">{{ card.title }}</h4>
                                        <h5 style="margin-top: -15px;">{{ card.description }}</h5>
                                        <h5 style="margin-top: -20px; margin-bottom: 10px;">{{ card.languages }}</h5>
                                        <a :href="card.link" target="_blank" rel="noopener">
                                            <button class="card-button">Download
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
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCTeamSummarySample-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCTeamSummarySample-2.png',
                    title: 'DISC Team Summary',
                    description: 'Free Group Report',
                    languages: '25 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCTeamSummarySample.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCSelfSampleReport+(2)-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCSelfSampleReport+(2)-2.png',
                    title: 'DISC Self',
                    description: 'Core Report',
                    languages: '25 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Motivators+(1)-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/Motivators+(1)-2.png',
                    title: 'Motivators',
                    description: 'Core Report',
                    languages: '16 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_Motivators.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/EIQSampleReport-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/EIQSampleReport-2.png',
                    title: 'Emotional Intelligence',
                    description: 'Core Report',
                    languages: '9 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/EIQSampleReport.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Leadership-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Leadership-2.png',
                    title: 'DISC Leadership',
                    description: 'Core Report',
                    languages: '9 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Awareness_(EI)-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Awareness_(EI)-2.png',
                    title: 'DISC Awareness',
                    description: 'Core Report',
                    languages: '2 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Awareness_(EI).pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCworkplace-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISCworkplace-2.png',
                    title: 'DISC Workplace Insights',
                    description: 'Core Report',
                    languages: '1 Language',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/SampleDISCworkplace.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Executive_Insights+(2)-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/DISC_Executive_Insights+(2)-2.png',
                    title: 'DISC Executive Insights',
                    description: 'Core Report',
                    languages: '1 Language',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Executive_Insights.pdf'
                },
                {
                    image: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/TeamDynamicsGroupSampleReport+(1)-1.png',
                    backImage: 'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/TeamDynamicsGroupSampleReport+(1)-2.png',
                    title: 'DISC Team Dynamics',
                    description: 'Free Group Report',
                    languages: '25 Languages',
                    link: 'https://cdn.assessments24x7.com/file/assessments24x7-media/reports/TeamDynamicsGroupSampleReport.pdf'
                }
            ],
            items: [
                {
                    text: 'Validated Excellence',
                    additionalText: 'Our assessments meet APA, EEOC, AERA, and NCME standards for independent validation.',
                    expanded: false
                },
                {
                    text: 'Total Transparency',
                    additionalText: 'Every study\'s report is available for review and sharing, ensuring trust and reliability.',
                    expanded: false
                },
                {
                    text: 'Top Choice for Leading Organizations',
                    additionalText: 'Our assessments and reports are the preferred choice for those who value accuracy, compliance, and objectivity.',
                    expanded: false
                }
            ]
        };
    },
    mounted() {
        this.observeElements();
    },
    methods: {
        toggleItem(index) {
            this.items[index].expanded = !this.items[index].expanded;
        },
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
        },
        getFlippableClass(index) {
            const totalCards = this.cards.length;
            const position = (index - this.activeIndex + totalCards) % totalCards;
            return position === 1;
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
    }
}
</script>

<style lang="scss" scoped>
.success-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");
}

.container {
    padding-top: 20px;
    padding-bottom: 20px;
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

    &:active {
        background-color: rgb(134, 134, 134);
    }
}

.card-button {
    cursor: pointer;
    font-size: 12.6667px;
    font-weight: 700;
    color: #0033c5;
    border-radius: 20px;
    padding: 10px 20px;
    border: none;

    &:hover {
        background-color: rgb(196, 195, 195);
    }

    &:active {
        background-color: rgb(134, 133, 133);
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
        position: relative;
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
        overflow: hidden;
    }

    .card-flip {
        perspective: 1000px;
        position: relative;
        width: 100%;
        height: 100%;
    }

    .card-front,
    .card-back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        transition: transform 0.6s ease-in-out;
        border-radius: 10px;
    }

    .card-front {
        transform: rotateY(0deg);
    }

    .card-back {
        transform: rotateY(180deg);
        position: absolute;
        top: 0;
        left: 0;
    }

    .is-flippable:hover .card-front {
        transform: rotateY(-180deg);
    }

    .is-flippable:hover .card-back {
        transform: rotateY(0deg);
    }

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

    &:hover {
        background-color: #037db9;
    }

    &:active {
        background-color: #014d74;
    }
}

.carousel-arrow.left {
    top: 275px;
    left: -30px;
}

.carousel-arrow.right {
    top: 275px;
    right: -40px;
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