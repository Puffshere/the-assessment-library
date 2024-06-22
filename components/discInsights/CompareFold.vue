<template>
    <section id="discInsightsCompareFold">
        <div class="container" style="width: 100%;">
            <div class="col-12">
                <h2 style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center;">
                    Let's <span style="color: #00a8ff">Compare.</span>
                </h2>
                <div class="comparison-table-container"
                    style="margin-top: 30px; display: flex; justify-content: center;">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Compare</th>
                                <th>DISC Workplace Insights</th>
                                <th>DISC Executive Insights</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Target Audience</strong></td>
                                <td>HR professionals, mid-level managers</td>
                                <td>Executives, high-level managers</td>
                            </tr>
                            <tr>
                                <td><strong>Report Pages</strong></td>
                                <td>7 pages</td>
                                <td>41 Pages</td>
                            </tr>
                            <tr>
                                <td><strong>Focus</strong></td>
                                <td>Recruitment, team dynamics, employee development</td>
                                <td>Leadership styles, strategic development</td>
                            </tr>
                            <tr>
                                <td><strong>Key Components</strong></td>
                                <td>Behavioral analysis, risk assessment, developmental tools</td>
                                <td>Behavioral, motivational, and critical thinking assessments</td>
                            </tr>
                            <tr>
                                <td><strong>Benefits</strong></td>
                                <td>Recruitment precision, team optimization, risk mitigation</td>
                                <td>Enhanced self-awareness, strategic planning, leadership development</td>
                            </tr>
                            <tr>
                                <td><strong>Performance Indicators</strong></td>
                                <td>Satisfactory/Cautionary ratings</td>
                                <td>Comprehensive, tailored insights</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; margin-top: 50px;">
                    <button style="display: flex; align-items: center; justify-content: center; gap: 10px;"
                        class="button active black" @click="scrollToContactForm">
                        <img src="~/assets/disc-insights/info.png"
                            style="width: 35px; margin-left: -66px; margin-right: 20px;" alt="info icon">
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'CompareSection',
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
        scrollToContactForm(event) {
            const element = document.getElementById('discInsightsContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>


<style scoped>
@import './DiscInsights.scss';

.container {
    padding-top: 50px;
    padding-bottom: 130px;
}

.comparison-table-container {
    display: flex;
    justify-content: center;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 16px;
    border: 1px solid #dddddd;
}

.comparison-table th,
.comparison-table td {
    padding: 15px;
    border: 1px solid #dddddd;
}

.comparison-table th {
    text-align: center;
    color: #00a8ff;
}

.comparison-table td {
    text-align: center;
}

.comparison-table td:first-child {
    text-align: left;
}

.button {
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    cursor: pointer;
    background-color: #1f232e;
    border-radius: 40px;
    color: white;
    min-width: 240px;
    margin-left: 17px;
}
</style>
