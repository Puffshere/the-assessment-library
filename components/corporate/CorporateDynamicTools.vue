<template>
    <section class="corporate-dynamic-tools" id="corporateDynamicTools">
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
                            <p>Our premier DISC Report is just the beginning. Access combined & integrated DISC Reports,
                                Motivators, Emotional Intelligence, and 30+ more world-class assessments</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" style="background-color: white; color: black;">
                            <p>Our premier DISC Report is just the beginning. Access combined & integrated DISC Reports,
                                Motivators, Emotional Intelligence, and 30+ more world-class assessments</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <h1 class="title" style="margin-bottom: 0px;">
                            Dynamic Tools <br />
                            <span style="color: #57b4ff;">Premium Benefits</span>
                        </h1>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/left-white-arrow.png"
                            alt="left white arrow image" style="width: 140px; margin-right: 110px; margin-top: 10px;">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="card" style="background-color: white; color: black;">
                        <p>Say goodbye to hours of prep. Our DISC Resources Library offers trainer materials, debrief
                            guides, presentations, and more. Less stress, more success.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="background-color: #00a8ff; color: white;">
                        <p>Need help? We've got you covered. Our support team is ready to assist with troubleshooting
                            and
                            training. Your success is our mission.</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card" style="background-color: white; color: black;">
                        <p>With 20+ years in the game and millions of assessments completed, we know what works. Trusted
                            by
                            thousands of organizations globally, we bring the expertise to elevate your organization.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row button-container">
                <button class="button" @click="scrollToContactForm">
                    Dive In
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
.corporate-dynamic-tools {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.corporate-dynamic-tools video {
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

p {
    font-size: 14.6667px;
    line-height: 18px;
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
    width: 200px;

    &:hover {
        color: #00a8ff;
        background-color: white;
    }
}
</style>
