<template>
        <section class="cards">
            <div class="container" style="padding-bottom: 60px;">
                <div class="row">
                    <div class="col-12" style="display: flex; justify-content: center; flex-wrap: wrap;">
                        <div class="col-6 card-column">
                            <div class="card" style="margin-bottom: 100px;">
                                <div class="cardHeader"
                                    style="position: absolute; margin-top: -20px; margin-left: -20px;">
                                    Order, send, and track assessments
                                </div>
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Order%2C+send%2C+and+track+(1).png"
                                    alt="image 1" style="width: 100%;" class="cardImage">
                                <p class="text">
                                    Purchase assessments as you need them. They’re available instantly on your dashboard
                                    — 24x7. Track and manage assessment completions and send reminders as needed.
                                </p>
                            </div>
                            <div class="card" style="margin-bottom: 100px;">
                                <div class="cardHeader"
                                    style="position: absolute; margin-top: -20px; margin-left: -20px;">
                                    Create Private-Label Interfaces and Reports
                                </div>
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Private+Label+Interface.png"
                                    alt="image 1" style="width: 100%;" class="cardImage">
                                <p class="text">
                                    Reinforce your brand and stand out from competitors with customized content. Add
                                    your logo to reports and personalize website headers and footers to match your
                                    company branding.
                                </p>
                            </div>
                            <div class="card mobileCard">
                                <div class="cardHeader"
                                    style="position: absolute; margin-top: -20px; margin-left: -20px;">
                                    Tap into DISC lead generation
                                </div>
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/DISC+Lead+Gen+Image.png"
                                    alt="image 1" style="width: 100%;" class="cardImage">
                                <p class="text">
                                    Reach hundreds of new prospects, build your clientele, and grow your brand with
                                    advanced tools and resources designed to maximize your reach and impact. Available
                                    exclusively with our Enterprise plan.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 card-column">
                            <div class="card" style="margin-bottom: 100px;">
                                <div class="cardHeader"
                                    style="position: absolute; margin-top: -20px; margin-left: -20px;">
                                    Generate comprehensive reports
                                </div>
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Group+Reporting+Image.png"
                                    alt="image 1" style="width: 100%;" class="cardImage">
                                <p class="text">
                                    Generate free group reports based on individual report data. Quickly view and print
                                    collective insights for team building or group coaching. This feature is perfect for
                                    easily comparing how team members score in relation to one another.
                                </p>
                            </div>
                            <div class="card" style="margin-bottom: 100px;">
                                <div class="cardHeader"
                                    style="position: absolute; margin-top: -20px; margin-left: -20px;">
                                    Optimize Hiring with DISC Benchmarking
                                </div>
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/DISC+Benchmarking+Graphic.png"
                                    alt="image 1" style="width: 100%;" class="cardImage">
                                <p class="text">
                                    Our DISC Benchmark System features 100+ job templates, or you can create your own,
                                    to compare applicants’ DISC styles against established job benchmarks, ensuring a
                                    better fit.
                                </p>
                            </div>
                            <div class="card">
                                <div class="cardHeader"
                                    style="position: absolute; margin-top: -20px; margin-left: -20px;">
                                    Integrate into your CRM, LMS, HRM, and more
                                </div>
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/API+Integration+Image.png"
                                    alt="image 1" style="width: 100%;" class="cardImage">
                                <p class="text">
                                    Unlock the full potential of your systems with seamless API integration, allowing
                                    you to streamline assessment management and align it effortlessly with your existing
                                    business processes, from your LMS to HR and employee tracking systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 50px;">
                    <button @click="scrollToContactFormSection">
                        Book Live Demo
                    </button>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    methods: {
        scrollToContactFormSection(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style scoped>
section {
    padding-top: 100px;
}

h1 {
    font-size: 27pt;
    font-weight: 700;
    color: #213C85;
}

h2 {
    font-size: 18pt;
    color: #213C85;
    text-align: right;
    font-weight: 700;
}

img {
    margin-top: -20px;
}

p {
    font-size: 10.5pt;
    line-height: 14.33pt;
    font-family: Nunito Sans;
}

.cardHeader {
    width: 402px;
    height: 49px;
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
    border-radius: 6px;
    color: white;
    text-align: center;
    align-content: center;
    font-size: 12pt;
    font-weight: 700;
    line-height: 130%;
    font-family: Nunito Sans;
}

.cardImage {
    padding: 0px 30px;
    padding-top: 70px;
}

.text {
    color: #0033C5;
    text-align: center;
    font-size: 10.5pt;
    font-weight: 400;
    line-height: 130%;
    padding: 0px 30px;
    /* 18.2px */
}

button {
        width: 220px;
        height: 41px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        text-decoration: underline;
        cursor: pointer;
        font-weight: 700;
        color: white;
        text-align: center;
        font-family: Poppins;
        font-size: 10.5pt;
        border: none;
        background: #0033C5;
    }

.cards {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
    min-height: 1440px;
}

.card {
    width: 438px;
    height: 351px;
    border-radius: 10px;
    border: 1px solid #E6E153;
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.card-column {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 1200px) {
    .row {
        flex-direction: column;
        align-items: center;
    }

    .col-6 {
        width: 100%;
    }

    .mobileCard {
        margin-bottom: 100px;
    }

    .card,
    .cardHeader {
        padding: 0px 40px;
    }
}
</style>