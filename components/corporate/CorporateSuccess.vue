<template>
    <section class="success-fold">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h1 style="margin-top: 80px; margin-bottom: -25px;">
                        Our Reports <br />
                        <span style="color: #00a8ff">Your Success</span>
                    </h1>
                    <h5>
                        Uncover Immediate insights that would take <br />
                        years to surface otherwise.
                    </h5>
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
                            <div
                                v-for="(card, index) in cards"
                                :key="index"
                                :class="['carousel-card', { active: activeIndex === index }]"
                                :style="getCardStyle(index)"
                            >
                                <img :src="card.image" alt="Report Image" />
                            </div>
                            <div class="carousel-arrow left" @click="rotateLeft">
                                <span>&laquo;</span>
                            </div>
                            <div class="carousel-arrow right" @click="rotateRight">
                                <span>&raquo;</span>
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
                { image: 'https://via.placeholder.com/150x200?text=Report+1' },
                { image: 'https://via.placeholder.com/150x200?text=Report+2' },
                { image: 'https://via.placeholder.com/150x200?text=Report+3' },
                { image: 'https://via.placeholder.com/150x200?text=Report+4' },
                { image: 'https://via.placeholder.com/150x200?text=Report+5' },
                { image: 'https://via.placeholder.com/150x200?text=Report+6' },
                { image: 'https://via.placeholder.com/150x200?text=Report+7' },
                { image: 'https://via.placeholder.com/150x200?text=Report+8' }
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
                    transform: 'translateX(-120px) scale(0.8) translateZ(-50px)',
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
                    transform: 'translateX(120px) scale(0.8) translateZ(-50px)',
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

h5 {
    font-size: 18.6666px;
    line-height: 22px;
    font-weight: 400;
    color: #1f1f1f;
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
    width: 500px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 0.5s ease-in-out;
}

.carousel-card {
    position: absolute;
    width: 150px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transform-origin: center center;
    backface-visibility: hidden;
    cursor: pointer;
    z-index: 0;
    opacity: 0;

    &.active {
        z-index: 2;
        opacity: 1;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
}

.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: #1e222d;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    z-index: 1000;
}

.carousel-arrow.left {
    left: -40px;
}

.carousel-arrow.right {
    right: -40px;
}
</style>
