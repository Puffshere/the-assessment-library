<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        What You Recieve <br />
                        with DISC Certification
                    </h1>
                    <div class="col-4">
                        <video autoplay muted loop id="myVideo">
                            <source
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/comprehensive-training.mp4"
                                type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div class="col-8">
                        <h4>Comprehensive Training</h4>
                        <p>
                            Gain access to in-depth training from World Class Industry Experts that covers the
                            fundamentals of DISC theory, application of assessments, and strategies for integrating
                            these tools into your coaching sessions.
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="col-8" style="text-align: right;">
                            <h4>Ongoing Support</h4>
                            <p>
                                Benefit from our dedicated support team ready to assist you with any questions or
                                challenges, ensuring you make the most of your DISC Certification.
                            </p>
                        </div>
                        <div class="col-4">
                            <video autoplay muted loop id="myVideo">
                                <source
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/ongoing-support.mp4"
                                    type="video/mp4">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <video autoplay muted loop id="myVideo">
                        <source
                            src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/online-dashboard-video.mp4"
                            type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div class="col-8">
                    <h4>Online Dashboard (+10 Free DISC Assessments!)
                    </h4>
                    <p>
                        Gain access to in-depth training that covers the fundamentals of DISC theory, application of
                        assessments, and strategies for integrating these tools into your coaching sessions.
                    </p>
                </div>
                <div class="col-12" style="text-align: right;">
                    <div class="col-8">
                        <h4>Exclusive Resources
                        </h4>
                        <p>
                            Access a wealth of resources, including Coaching guides, Turnkey PPTs, Learning Activities,
                            and more, to help you maximize the value of DISC assessments for your clients.
                        </p>
                    </div>
                    <div class="col-4">
                        <video autoplay muted loop id="myVideo">
                            <source
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/untitled-design.mp4"
                                type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                </div>
            </div>
            <div class="col-12 button-container">
                <button class="blue" @click="scrollToSection">
                    Get Started Today
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    margin-top: -20px;
    padding-bottom: 100px;
}

h1 {
    color: #0033c5;
    line-height: 58px;
    text-align: center;
}

h4 {
    color: #0033c5;
    font-weight: 600;
}

p {
    font-size: 20px;
    line-height: 22px;
}

video {
    max-width: 100%;
    border-radius: 20px;
}

.col-12.button-container {
    display: flex;
    justify-content: center;
    padding-top: 80px;
}
</style>