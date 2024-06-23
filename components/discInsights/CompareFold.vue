<template>
    <section id="discInsightsCompareFold">
        <div class="container" style="width: 100%; position: relative;">
            <div class="col-12" style="position: relative; z-index: 10;">
                <h2 class="rise-on-scroll"
                    style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center;">
                    Let's <span style="color: #00a8ff">Compare.</span>
                </h2>
                <div class="comparison-table-container"
                    style="margin-top: 30px; margin-bottom: 40px; display: flex; justify-content: center; background-color: white;">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th class="rise-on-scroll">
                                    <div style="min-height: 45px;"></div>
                                    <div style="font-size: 24px; font-weight: 700;">Compare</div>
                                </th>
                                <th class="rise-on-scroll">
                                    <div style="display: flex; justify-content: center; margin-bottom: 0px;">
                                        <img src="~/assets/disc-insights/disc-icon.png" alt="disc icon"
                                            style="width: 45px;">
                                        <img src="~/assets/disc-insights/critical-thinking-icon.png"
                                            alt="critical thinking icon" style="width: 45px;">
                                    </div>
                                    <div @click="scrollToWorkplaceInsights"
                                        style="text-decoration: underline; font-weight: 700; font-size: 24px; cursor: pointer">
                                        DISC Workplace Insights</div>
                                </th>
                                <th class="rise-on-scroll">
                                    <div style="display: flex; justify-content: center; margin-bottom: 0px;">
                                        <img src="~/assets/disc-insights/disc-icon.png" alt="disc icon"
                                            style="width: 45px;">
                                        <img src="~/assets/disc-insights/critical-thinking-icon.png"
                                            alt="critical thinking icon" style="width: 45px;">
                                        <img src="~/assets/disc-insights/motivators-icon.png" alt="motivators icon"
                                            style="width: 45px;">
                                    </div>
                                    <div @click="scrollToExecutiveInsights"
                                        style="text-decoration: underline; font-weight: 700; font-size: 24px; cursor: pointer">
                                        DISC Executive Insights</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="rise-on-scroll">
                                <td data-label="Compare"><strong>Target Audience</strong></td>
                                <td data-label="DISC Workplace Insights">HR professionals, mid-level managers</td>
                                <td data-label="DISC Executive Insights">Executives, high-level managers</td>
                            </tr>
                            <tr class="rise-on-scroll">
                                <td data-label="Compare"><strong>Report Pages</strong></td>
                                <td data-label="DISC Workplace Insights">7 pages</td>
                                <td data-label="DISC Executive Insights">41 Pages</td>
                            </tr>
                            <tr class="rise-on-scroll">
                                <td data-label="Compare"><strong>Focus</strong></td>
                                <td data-label="DISC Workplace Insights">Recruitment, team dynamics, employee
                                    development</td>
                                <td data-label="DISC Executive Insights">Leadership styles, strategic development</td>
                            </tr>
                            <tr class="rise-on-scroll">
                                <td data-label="Compare"><strong>Key Components</strong></td>
                                <td data-label="DISC Workplace Insights">Behavioral analysis, risk assessment,
                                    developmental tools</td>
                                <td data-label="DISC Executive Insights">Behavioral, motivational, and critical thinking
                                    assessments</td>
                            </tr>
                            <tr class="rise-on-scroll">
                                <td data-label="Compare"><strong>Benefits</strong></td>
                                <td data-label="DISC Workplace Insights">Recruitment precision, team optimization, risk
                                    mitigation</td>
                                <td data-label="DISC Executive Insights">Enhanced self-awareness, strategic planning,
                                    leadership development</td>
                            </tr>
                            <tr class="rise-on-scroll">
                                <td data-label="Compare"><strong>Performance Indicators</strong></td>
                                <td data-label="DISC Workplace Insights">Satisfactory/ <br />Cautionary ratings</td>
                                <td data-label="DISC Executive Insights">Comprehensive, tailored insights</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="rise-on-scroll"
                    style="display: flex; justify-content: center; align-items: center; margin-top: 105px;">
                    <button style="display: flex; align-items: center; justify-content: center; gap: 10px;"
                        class="button active black" @click="scrollToContactForm">
                        <img src="~/assets/disc-insights/info.png"
                            style="width: 35px; margin-left: -66px; margin-right: 20px;" alt="info icon">
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
            <img class="rise-on-scroll" src="~/assets/disc-insights/hero-black-graphic.png"
                alt="hero black graphic image"
                style="width: 1180px; z-index: 1; max-height: 205px; margin-left: -45px; position: absolute; bottom: 235px;" />
            <div class="blue-balls rise-on-scroll">
                <div class="blue-ball"></div>
                <div class="blue-ball"></div>
                <div class="blue-ball"></div>
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


<style scoped>
@import './DiscInsights.scss';

.container {
    padding-top: 40px;
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
    text-align: center;
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

.blue-balls {
    position: absolute;
    bottom: 270px;
    left: -16px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    z-index: 11;
}

.blue-ball {
    width: 30px;
    height: 30px;
    background-color: #00a8ff;
    border-radius: 50%;
}

@media (max-width: 1000px) {
    .container {
        padding-bottom: 110px;
    }

    .comparison-table {
        display: block;
        width: 100%;
        border: none;
    }

    .comparison-table thead {
        display: none;
    }

    .comparison-table tbody,
    .comparison-table tr,
    .comparison-table td {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }

    .comparison-table tr {
        margin-bottom: 15px;
    }

    .comparison-table td {
        position: relative;
        padding-left: 70%;
        padding-right: 10px;
        text-align: left;
        border: none;
        border-bottom: 1px solid #dddddd;
    }

    .comparison-table td:before {
        content: attr(data-label);
        position: absolute;
        left: 10px;
        top: 15px;
        width: 45%;
        padding-right: 10px;
        font-weight: bold;
        white-space: nowrap;
        text-align: left;
    }

    .comparison-table td:last-child {
        border-bottom: 2px solid #dddddd;
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
