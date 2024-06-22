<template>
    <section style="background-color: #1f232e;">
        <div class="container" style="display: flex; justify-content: center;">
            <div class="col-12" style="display: flex; flex-direction: column; align-items: center;">
                <img src="~/assets/disc-insights/balls.png" alt="balls image"
                    style="width: 100px; margin-bottom: -20px;">
                <h2 style="line-height: 59px; font-size: 48px; font-weight: 700; color: white; text-align: center;">
                    DISC Workplace Insights <br />
                    <span style="color: #00a8ff;">Benefits</span>
                </h2>
                <div class="b" style="display: flex; justify-content: center; gap: 0px;">
                    <button :class="{ 'active': activeImageIndex === 0 }" @click="showImage(0)"
                        class="button light-blue">
                        Recruitment Precision
                    </button>
                    <button :class="{ 'active': activeImageIndex === 1 }" @click="showImage(1)"
                        class="button light-blue">
                        Risk Mitigation
                    </button>
                    <button :class="{ 'active': activeImageIndex === 2 }" @click="showImage(2)"
                        class="button light-blue">
                        Adaptability Insights
                    </button>
                </div>
                <div style="display: flex; justify-content: center;">
                    <h5 style="color: white; text-align: left;">
                        Enhances the hiring process by ensuring that candidates are <br />
                        not only qualified but also align with
                        the company’s cultural <br />
                        and role-specific expectations.
                    </h5>
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
                <div class="b" style="display: flex; justify-content: center; gap: 0px;">
                    <button style="display: flex; align-items: center; justify-content: center; gap: 10px;"
                        class="button active light-blue" @click="scrollToContactForm">
                        <img src="~/assets/disc-insights/info.png"
                            style="width: 35px; margin-left: -66px; margin-right: 20px;" alt="info icon">
                        <span>Learn More</span>
                    </button>
                    <button style="display: flex; align-items: center; justify-content: center; gap: 10px;"
                        class="button active light-blue" @click="scrollToCompareFold">
                        <img src="~/assets/disc-insights/compare.png" style="width: 35px; margin-left: -30px;"
                            alt="compare icon">
                        <span>Compare to <br /> Executive Insights</span>
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
                require('@/assets/disc-insights/3rd-fold-recruitment-precision.png'),
                require('@/assets/disc-insights/3rd-fold-risk-mitigation.png'),
                require('@/assets/disc-insights/3rd-fold-adaptability-insights.png')
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
    min-width: 240px;
    margin-left: 17px;
    opacity: 0.5;
    transition: opacity 0.3s;
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
}
</style>
