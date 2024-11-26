<template>
    <section class="form" id="discInsightsContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h2 class="formTitle rise-on-scroll" style="padding-top: 20px; padding-bottom: 40px;">
                        Take the First Step <br />
                        Toward <span style="color: #00a8ff;">Smarter Hiring</span>
                    </h2>
                </div>
            </div>
            <section class="contactFormSection">
                <div class="container-wrapper">
                    <div class="container d-flex justify-content-center align-items-center"
                        style="padding-bottom: 100px;">
                        <div class="row">
                            <div class="col-12 justify-content-center">
                                <div class="form-container">
                                    <contact-form style="background: white;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>


<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Loading,
        'contact-form': () => import('@/components/ContactForm'),
    },
    methods: {
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


<style lang="scss" scoped>
@import './DiscInsights.scss';

.form {
    background-color: #1f232e;
    background-size: cover;

    .container {
        .formTitle {
            color: #ffffff;
            line-height: 58px;
            margin-bottom: -5px;
            text-align: center;
        }
    }
}

.contactFormSection {
    background-size: cover;
    background-position: center;
    min-height: 960px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .container-wrapper {
        position: relative;
        width: 100%;
    }

    h2 {
        margin-top: 0px;
        font-weight: 700;
        text-align: center;
    }

    .form-container {
        width: 100%;
        max-width: 800px;
        padding: 20px;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .col-12 {
        display: flex;
        justify-content: center;
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

@media (max-width: 1000px) {
    h2 {
        font-size: 38px;
        font-weight: 400;
        margin-bottom: 0px;
    }

    .form {
        .container {
            .formTitle {
                color: #ffffff;
            }
        }
    }
}
</style>