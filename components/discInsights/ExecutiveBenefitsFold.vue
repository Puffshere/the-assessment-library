<template>
    <section style="background-color: #1f232e;">
        <div class="container" style="display: flex; justify-content: center;">
            <div class="col-12" style="display: flex; flex-direction: column; align-items: center;">
                <img src="~/assets/disc-insights/balls.png" alt="balls image"
                    style="width: 100px; margin-bottom: -20px;">
                <h2 style="line-height: 59px; font-size: 48px; font-weight: 700; color: white; text-align: center;">
                    DISC Executive Insights <br />
                    <span style="color: #00a8ff;">Benefits</span>
                </h2>
                <div class="b" style="display: flex; justify-content: center; gap: 0px;">
                    <button class="button">
                        Enhanced Self-Awareness
                    </button>
                    <button class="button">
                        Improved Communication
                    </button>
                    <button class="button">
                        Strategic Planning
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
                <div style="display: flex; align-items: center; width: 75%; justify-content: space-between; margin-top: 15px; margin-bottom: 80px;">
                    <div class="arrow-container" style="display: flex; justify-content: center; cursor: pointer;">
                        <div class="arrow" style="transform: rotate(-45deg);"></div>
                    </div>
                    <img src="~/assets/disc-insights/5th-fold-enhanced-self-awareness.png" alt="group of people laughing"
                        style="width: 82%; margin-left: -80px; margin-right: -80px; border: solid 5px white; border-radius: 10px;">
                    <div class="arrow-container" style="display: flex; justify-content: center; cursor: pointer;">
                        <div class="arrow" style="transform: rotate(135deg);"></div>
                    </div>
                </div>
                <div class="b" style="display: flex; justify-content: center; gap: 0px;">
                    <button class="button" style="display: flex; align-items: center; justify-content: center; gap: 10px;" @click="scrollToContactForm">
                        <img src="~/assets/disc-insights/info.png" style="width: 35px; margin-left: -66px; margin-right: 20px;" alt="info icon">
                        <span>Learn More</span>
                    </button>
                    <button class="button" style="display: flex; align-items: center; justify-content: center; gap: 10px;" @click="scrollToCompareFold">
                        <img src="~/assets/disc-insights/compare.png" style="width: 35px; margin-left: -30px;" alt="compare icon">
                        <span>Compare to <br /> Workplace Insights</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
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
    min-width: 250px;
    margin-left: 17px;
    padding-right: 0px; 
    padding-left: 0px;
}

.arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #1f232e;
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
