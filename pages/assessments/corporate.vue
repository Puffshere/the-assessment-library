<template>
    <section>
        <LazyHydrate when-visible><main-nav class="nav"></main-nav></LazyHydrate>
        <section class="hero-fold">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        <h1 style="color: #00a8ff;" class="rise-on-scroll">
                            DISC Assessment <br />
                            Technology
                        </h1>
                        <h2 class="rise-on-scroll">
                            Core Assessments that <span style="color: #00a8ff; font-weight: 700;">work together</span>
                            <br />
                            to build stronger teams, empower <br />
                            leadership & drive organizational success.
                        </h2>
                        <h5 style="font-style: italic;" class="rise-on-scroll">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-arrow-icon.png"
                                alt="blue arrow" style="width: 15px; margin-right: 10px; margin-top: -3px;">Global
                            Leader in
                            Assessment
                            Technology <br />
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-arrow-icon.png"
                                alt="blue arrow" style="width: 15px; margin-right: 10px; margin-top: -3px;">Powerful
                            Platform with
                            seamless integration <br />
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-arrow-icon.png"
                                alt="blue arrow" style="width: 15px; margin-right: 10px; margin-top: -3px;">ASI
                            Validated,
                            Reliable, and
                            Compliant
                        </h5>
                        <div class="row rise-on-scroll" style="margin-bottom: 40px; margin-top: 36px;">
                            <button class="button" @click="scrollToTools">
                                <span>Learn More</span>
                            </button>
                            <button class="button" @click="scrollToContactForm">
                                <span>Get Started</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-4">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/group-standing-graphic.png"
                            alt="group of people smiling image" class="groupSmiling" />
                    </div>
                </div>
            </div>
            <div class="circle"></div>
        </section>
        <LazyHydrate when-visible><stats-top></stats-top></LazyHydrate>
        <LazyHydrate when-visible>
            <tools></tools>
        </LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <LazyHydrate when-visible>
            <success></success>
        </LazyHydrate>
        <LazyHydrate when-visible><stats-bottom></stats-bottom></LazyHydrate>
        <LazyHydrate when-visible><dynamic-tools></dynamic-tools></LazyHydrate>
        <LazyHydrate when-visible>
            <testimonials></testimonials>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <solution></solution>
        </LazyHydrate>
        <LazyHydrate when-visible><start-using></start-using></LazyHydrate>
        <LazyHydrate when-visible><discover-assessments></discover-assessments></LazyHydrate>
        <LazyHydrate when-visible><contact-form></contact-form></LazyHydrate>
        <LazyHydrate when-visible><footer-fold class="foot"></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Nav from '@/components/Nav';
import StatsTop from '@/components/corporate/CorporateStatsTop';
import Tools from '@/components/corporate/CorporateTools';
import ClientLogos from '@/components/ClientLogos';
import Success from '@/components/corporate/CorporateSuccess';
import StatsBottom from '@/components/corporate/CorporateStatsBottom';
import DynamicTools from '@/components/corporate/CorporateDynamicTools';
import Testimonials from '@/components/corporate/CorporateTestimonials';
import Solutions from '@/components/corporate/CorporateSolutions';
import StartUsing from '@/components/corporate/CorporateStartUsing';
import DiscoverAssessments from '@/components/corporate/CorporateDiscoverAssessments';
import ContactForm from '@/components/corporate/CorporateContactForm';
import Footer from '@/components/Footer';


export default {
    components: {
        LazyHydrate,
        'main-nav': Nav,
        'stats-top': StatsTop,
        'tools': Tools,
        'client-logos': ClientLogos,
        'success': Success,
        'stats-bottom': StatsBottom,
        'dynamic-tools': DynamicTools,
        'testimonials': Testimonials,
        'solution': Solutions,
        'start-using': StartUsing,
        'discover-assessments': DiscoverAssessments,
        'contact-form': ContactForm,
        'footer-fold': Footer
    },
    mounted() {
        this.observeElements();
    },
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToTools(event) {
            const element = document.getElementById('corporateTools');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        observeElements() {
            const options = {
                threshold: 0
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
    },
    head() {
        Testimonials
        return {
            title: 'Assessments - Corporate | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.hero-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");
}

.container {
    position: relative;
    z-index: 2;
}

.circle {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/new-blue-half-circle.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    width: 1000px;
    height: 600px;
    position: absolute;
    top: 93px;
    right: 0;
    z-index: 1;
}

.groupSmiling {
    width: 600px;
    position: relative;
    bottom: -106px;
    right: 140px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: #1e222d;
    border-radius: 40px;
    color: white;
    border: 1px solid #1e222d;

    &:hover {
        color: #1e222d;
        background-color: white;
    }

    &:active {
        background-color: rgb(172, 172, 172);
    }
}

h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
}

h2 {
    font-size: 30px;
    line-height: 38px;
    font-weight: 400;
    color: #1f1f1f;
    margin-top: -20px;
}

h5 {
    font-size: 13.6666px;
    line-height: 26px;
    font-weight: 700;
    color: #1f1f1f;
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

@media (max-width: 1050px) {
    .groupSmiling {
        width: 100%;
        position: static;
        margin-bottom: -10px;
    }

    .circle {
        display: none;
    }
}
</style>