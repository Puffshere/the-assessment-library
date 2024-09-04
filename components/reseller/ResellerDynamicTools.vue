<template>
    <section class="reseller-dynamic-tools" id="resellerDynamicTools">
        <video autoplay muted loop playsinline>
            <source
                src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/fold-7-background-video.mp4"
                type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-3">
                        <div class="card" style="background-color: #00a8ff;">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/icon-disc-plus-a-whole-lot-more.png"
                                alt="image of a computer" style="width: 50px; margin-top: 20px; margin-bottom: -10px;">
                            <h4>
                                DISC, Plus a <br />
                                Whole Lot More
                            </h4>
                            <hr style="border: 1px solid white;">
                            <p>Our premier DISC Report is just the beginning. Access combined & integrated DISC Reports,
                                Motivators, Emotional Intelligence, and 30+ more world-class assessments.</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" style="background-color: white; color: #0033c5;">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/icon-turnkey-or-customizable.png"
                                alt="image of a computer" style="width: 106px; margin-top: 25px; margin-bottom: -15px;">
                            <h4 style="color: #0033c5">
                                Turnkey or <br />
                                Customizable
                            </h4>
                            <hr style="border: 1px solid #0033c5;">
                            <p>One size doesn’t fit all. Choose turnkey reports for private labeling and API
                                integration, or opt for full customization to match your core values. Seamlessly
                                integrate into your intranet or CRM.</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <h1 class="title" style="margin-bottom: 0px;">
                            Dynamic Tools <br />
                            <span style="color: #57b4ff;">Premium Benefits</span>
                        </h1>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/left-white-arrow.png"
                            alt="left white arrow image" style="width: 140px; margin-right: 110px; margin-top: 10px;"
                            class="whiteArrow">
                    </div>
                </div>
            </div>
            <div class="custom-row">
                <div class="custom-col">
                    <div class="custom-card" style="background-color: white; color: #0033c5;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/icon-comprehensive-resource-library.png"
                            alt="image of a computer" style="width: 60px; margin-top: 20px; margin-bottom: -15px;">
                        <h4>
                            Comprehensive <br />
                            Resource Library
                        </h4>
                        <hr style=" border: 1px solid #0033c5;">
                        <p>Say goodbye to hours of prep. Our DISC Resource Library offers trainer materials, debrief
                            guides, presentations, and more. Less stress, more success.</p>
                    </div>
                </div>
                <div class="custom-col">
                    <div class="custom-card" style="background-color: #00a8ff; color: white;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/world-class-support-team.png"
                            alt="image of a computer" style="width: 50px; margin-top: 20px; margin-bottom: -10px;">
                        <h4>
                            World-Class <br />
                            Support Team
                        </h4>
                        <hr style="border: 1px solid white;">
                        <p>Need help? We've got you covered. Our support team is ready to assist with troubleshooting
                            and training. Your success is our mission.</p>
                    </div>
                </div>
                <div class="custom-col">
                    <div class="custom-card" style="background-color: white; color: #0033c5;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/icon-you-can-trust.png"
                            alt="image of a computer" style="width: 60px; margin-top: 15px; margin-bottom: -15px;">
                        <h4>
                            Experience You <br />
                            Can Trust
                        </h4>
                        <hr style="border: 1px solid #0033c5;">
                        <p>With 20+ years in the game and millions of assessments completed, we know what works. Trusted
                            by thousands of organizations globally, we bring the expertise to elevate your organization.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row button-container">
                <button class="button" @click="scrollToContactForm">
                    Speak to Specialist
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('resellerContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
.reseller-dynamic-tools {
    position: relative;
    width: 100%;
    height: 970px;
    overflow: hidden;
}

.reseller-dynamic-tools video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.container {
    padding-top: 80px;
    padding-bottom: 80px;
}

.title {
    margin-top: 0px;
    margin-bottom: 80px;
    line-height: 60px;
}

.card {
    width: 256px;
    height: 315px;
    border-radius: 20px;
    padding: 5px 5px;
    text-align: center;
}

.col-12 {
    text-align: right;
    color: white;
}

h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
    text-align: left;
    margin-left: 60px;
}

h4 {
    font-weight: 700;
    font-size: 18.6667px;
    line-height: 23px;
}

p {
    font-size: 14.6667px;
    line-height: 18px;
}

hr {
    margin: 0px 40px;
    margin-top: -10px;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: #00a8ff;
    border-radius: 40px;
    color: white;
    border: 1px solid #00a8ff;
    width: 240px;

    &:hover {
        color: #00a8ff;
        background-color: white;
    }

    &:active {
        background-color: rgb(124, 124, 124);
    }
}

.custom-row {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.custom-col {
    flex: 0 0 auto;
}

.custom-card {
    width: 256px;
    height: 315px;
    border-radius: 20px;
    padding: 5px;
    text-align: center;
}

.custom-row .custom-col:first-child {
    margin-right: 20px;
}

.custom-row .custom-col:last-child {
    margin-left: 20px;
}

@media (max-width: 1050px) {
    .reseller-dynamic-tools {
        height: 100%;
    }

    .col-3 {
        display: flex;
        justify-content: center;
    }

    .whiteArrow {
        display: none;
    }

    .custom-row {
        flex-direction: column;
        align-items: center;
    }

    .custom-col {
        max-width: 300px;
        margin-bottom: 20px;
    }

    .custom-col:last-child {
        margin-bottom: 0;
    }

    .custom-row .custom-col:first-child {
        margin-right: 0px;
    }

    .custom-row .custom-col:last-child {
        margin-left: 0px;
    }
}
</style>
