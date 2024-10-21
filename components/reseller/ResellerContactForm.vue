<template>
    <section class="contact-form" id="resellerContactForm">
        <div class="container" style="padding-bottom: 20px;">
            <div class="row">
                <div class="col-12">
                <h1 style="margin-top: 50px; margin-bottom: 30px; text-align: center;">
                    Ready to take your organization to the top?<br />
                    <span style="color: #00a8ff;">You‘re in the right place.</span>
                </h1>
            </div>
                <div class="row flex-center">
                    <div class="col-8">
                        <LazyHydrate when-visible><contact-form :isShort="true" buttonText="Learn More About DISC"
                                class="bottomForm" />
                        </LazyHydrate>
                    </div>
                </div>
            </div>
        </div>
        <div class="circle"></div>
    </section>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'contact-form': () => import('@/components/ContactForm'),
        Loading
    },
    data() {
        return {
            isDisabled: false,
            loading: false,
        };
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
}

.bottomForm {
    position: relative;
    z-index: 1;
    background-color: white;
}

.flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.circle {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/new-blue-half-circle.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
    width: 1000px;
    height: 600px;
    position: absolute;
    bottom: 350px;
    right: 0;
    z-index: -5;
}

@media (max-width: 1050px) {
    .title {
        margin-top: 60px !important;
    }

    .learn-more-button {
        margin-bottom: -20px !important;
        margin: 0 auto;
    }
}
</style>