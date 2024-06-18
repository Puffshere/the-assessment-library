<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title observe-title">
                        What You Receive <br />
                        with DISC Certification
                    </h1>
                    <div class="col-4 observe">
                        <video autoplay muted loop id="myVideo">
                            <source
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/comprehensive-training.mp4"
                                type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div class="col-8 observe">
                        <h4>Comprehensive Training</h4>
                        <p>
                            Gain access to in-depth training from world-class industry experts, covering the
                            fundamentals of DISC theory, application of assessments, and strategies for integrating
                            these tools into your coaching sessions.
                        </p>
                    </div>
                    <div class="col-12">
                        <div class="col-8 observe" style="text-align: right;">
                            <h4>Ongoing Support</h4>
                            <p>
                                Receive ongoing support from our dedicated team, ready to assist you with any questions
                                or challenges, ensuring you make the most of your DISC Certification.
                            </p>
                        </div>
                        <div class="col-4 observe">
                            <video autoplay muted loop id="myVideo">
                                <source
                                    src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/ongoing-support.mp4"
                                    type="video/mp4">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>
                </div>
                <div class="col-4 observe">
                    <video autoplay muted loop id="myVideo">
                        <source
                            src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/online-dashboard-video.mp4"
                            type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <div class="col-8 observe">
                    <h4>Online Dashboard (+10 Free DISC Assessments!)
                    </h4>
                    <p>
                        Access our online dashboard and benefit from ten free DISC assessments. This tool is designed to
                        enhance your training experience, providing essential insights into DISC theory and practical
                        applications.
                    </p>
                </div>
                <div class="col-12" style="text-align: right;">
                    <div class="col-8 observe">
                        <h4>Exclusive Resources
                        </h4>
                        <p>
                            Access a wealth of resources, including coaching guides, turnkey PPTs, learning activities,
                            and more, to help you maximize the value of DISC assessments for your clients.
                        </p>
                    </div>
                    <div class="col-4 observe">
                        <video autoplay muted loop id="myVideo">
                            <source
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/Coaches+DISC+Certification/untitled-design.mp4"
                                type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                </div>
            </div>
            <div class="col-12 button-container observe">
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
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    if (entry.target.classList.contains('observe-title')) {
                        entry.target.classList.add('animate-rise');
                        entry.target.classList.add('animated'); // Mark the title as animated
                    }
                } else {
                    // For other elements, apply animation as usual
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-rise');
                    } else {
                        entry.target.classList.remove('animate-rise');
                    }
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: Array.from({ length: 101 }, (v, i) => i / 100) // Creating smooth transition thresholds from 0 to 1
        });

        // Select each child element to be observed
        const elements = document.querySelectorAll('.observe, .observe-title');
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}
</script>

<style scoped>
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

@keyframes rise {
    from {
        transform: translateY(1in);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.observe {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.observe-title {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.animate-rise {
    animation: rise 1.25s ease-out forwards;
}

.animated {
    /* This class ensures that the element won't animate again */
}
</style>
