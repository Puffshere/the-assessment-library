<template>
    <section style="background-color: #1f232e;">
        <div class="container" style="display: flex; justify-content: center;">
            <div class="col-12" style="display: flex; flex-direction: column; align-items: center;">
                <img class="rise-on-scroll" src="~/assets/disc-insights/balls.png" alt="balls image"
                    style="width: 100px; margin-bottom: -20px;">
                <h2 class="rise-on-scroll"
                    style="line-height: 59px; font-size: 48px; font-weight: 700; color: white; text-align: center;">
                    DISC Executive Insights <br />
                    <span style="color: #00a8ff;">Benefits</span>
                </h2>
                <div class="b rise-on-scroll" style="display: flex; justify-content: center; gap: 0px;">
                    <button :class="{ 'active': activeImageIndex === 0 }" @click="showImage(0)"
                        class="button light-blue">
                        Enhanced Self-Awareness
                    </button>
                    <button :class="{ 'active': activeImageIndex === 1 }" @click="showImage(1)"
                        class="button light-blue">
                        Improved Communication
                    </button>
                    <button :class="{ 'active': activeImageIndex === 2 }" @click="showImage(2)"
                        class="button light-blue">
                        Strategic Planning
                    </button>
                </div>
                <div class="rise-on-scroll" style="display: flex; justify-content: center; min-height: 180px;">
                    <div v-if="activeImageIndex === 0">
                        <h5 style="color: white; text-align: left;">
                            Enhances the hiring process by ensuring that candidates are <br />
                            not only qualified but also align with
                            the company’s cultural <br />
                            and role-specific expectations.
                        </h5>
                    </div>
                    <div v-if="activeImageIndex === 1">
                        <h5 style="color: white; text-align: left;">
                            Provides detailed tips and strategies for more effective <br />
                            engagement, crucial for all employee or leader roles.
                        </h5>
                    </div>
                    <div v-if="activeImageIndex === 2">
                        <h5 style="color: white; text-align: left;">
                            Useful for personal and professional strategic development, <br />
                            aligning leadership and management styles with <br />
                            organizational goals.
                        </h5>
                    </div>
                </div>
                <div
                    style="display: flex; align-items: center; width: 75%; justify-content: space-between; margin-top: 15px; margin-bottom: 80px;">
                    <div class="arrow-container" style="display: flex; justify-content: center; cursor: pointer;"
                        @click="prevImage" :class="{ 'disabled': activeImageIndex === 0 }">
                        <div class="arrow" style="transform: rotate(-45deg);"></div>
                    </div>
                    <img :src="images[activeImageIndex]" alt="dynamic image"
                        style="width: 82%; margin-left: -80px; margin-right: -80px; border: solid 5px white; border-radius: 10px;">
                    <div class="arrow-container" style="display: flex; justify-content: center; cursor: pointer;"
                        @click="nextImage" :class="{ 'disabled': activeImageIndex === images.length - 1 }">
                        <div class="arrow" style="transform: rotate(135deg);"></div>
                    </div>
                </div>
                <div class="b rise-on-scroll" style="display: flex; justify-content: center; gap: 0px;">
                    <button style="display: flex; align-items: center; justify-content: center; gap: 10px;"
                        class="button active light-blue" @click="scrollToContactForm">
                        <img src="~/assets/disc-insights/info.png"
                            style="width: 35px; margin-left: -74px; margin-right: 25px;" alt="info icon">
                        <span>Learn More</span>
                    </button>
                    <button style="display: flex; align-items: center; justify-content: center; gap: 10px;"
                        class="button active light-blue" @click="scrollToCompareFold">
                        <img src="~/assets/disc-insights/compare.png"
                            style="width: 35px; margin-left: -40px; margin-right: 0px;" alt="compare icon">
                        <span>Compare to <br /> Workplace Insights</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            activeImageIndex: 0,
            images: [
                require('@/assets/disc-insights/5th-fold-enhanced-self-awareness.png'),
                require('@/assets/disc-insights/5th-fold-improved-communication.png'),
                require('@/assets/disc-insights/5th-fold-strategic-planning.png')
            ]
        };
    },
    methods: {
        showImage(index) {
            this.activeImageIndex = index;
        },
        prevImage() {
            if (this.activeImageIndex > 0) {
                this.activeImageIndex--;
            }
        },
        nextImage() {
            if (this.activeImageIndex < this.images.length - 1) {
                this.activeImageIndex++;
            }
        },
        scrollToContactForm(event) {
            const element = document.getElementById('discInsightsContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToCompareFold(event) {
            const element = document.getElementById('discInsightsCompareFold');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
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
};
</script>


<style scoped>
@import './DiscInsights.scss';

.container {
    padding-top: 70px;
    padding-bottom: 140px;
}

.button {
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    cursor: pointer;
    background-color: #00a8ff;
    border-radius: 40px;
    color: white;
    min-width: 250px;
    margin-left: 17px;
    opacity: 0.5;
    transition: opacity 0.3s;
    padding-right: 0px;
    padding-left: 0px;
}

.button.active {
    opacity: 1;
}

.arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #1f232e;
    cursor: pointer;
}

.arrow-container.disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.arrow {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-top: 7px solid white;
    border-left: 7px solid white;
}

.arrow:hover {
    border-top: 7px solid #00a8ff;
    border-left: 7px solid #00a8ff;
}

@media (max-width: 1000px) {
    .b {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .arrow-container {
        width: 20px;
        height: 20px;
    }

    .arrow {
        width: 17.5px;
        height: 17.5px;
        border-top: 3.5px solid white;
        border-left: 3.5px solid white;
    }

    .arrow:hover {
        border-top: 3.5px solid #00a8ff;
        border-left: 3.5px solid #00a8ff;
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
