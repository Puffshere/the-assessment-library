<template>
    <section class="hero">     
       <div class="container" style="position: relative">
            <div class="row">
                <div class="col-7 col-12-md">
                    <div class="hero-content">
                        <h1 class="title">Global Leader In Assessment Technology</h1>
                        <h2>DISC & behavioral assessments to power decision making.</h2>

                        <nuxt-link to="/assessments" class="button">Assessment Products</nuxt-link>
                        <nuxt-link to="/assessments/disc" class="button outline light">Explore DISC</nuxt-link>
                    </div>
                </div>

                <div class="col-5 col-12-md" style="position:relative">
                    <contact-form-mini acFormId="12" />

                    <span class="legal-form-text">
                        By submitting this form, I agree to the <nuxt-link to="/legal/privacy" class="hyperlink light">Privacy Policy</nuxt-link> and 
                        <nuxt-link to="/legal/compliance" class="hyperlink light">GDPR Policy</nuxt-link> and give my consent.
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            'contact-form-mini': () => import('@/components/ContactFormMini')
        },
        data() {
            return {
                firstName: '',
                lastName: '',
                website: ''
            }
        },
        computed: {
            action: function () {
                if (this.firstName === this.lastName) {
                    return '';
                } else {
                    return 'https://rz189.infusionsoft.com/app/form/process/7d7779344f1c9e17b42f44880c44b92b';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';


    .hero {
        background: url('~assets/hero.webp');
        background-size: cover;
        margin-bottom: 70px;
        position: relative;
        color: #fff;
        padding: 80px;

        .form-group.website {
            position: absolute;
            left: -91234px;
        }

        .hero-content {
            h1 {
                font-family: $font-alt;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 14pt;
                margin-top: 20px;
                color: #fff;
            }

            h2 {
                font-size: 39pt;
                line-height: 42pt;
                margin-top: 0;
            }
        }

        .legal-form-text {
            font-size: 9pt;
            text-align: center;
            display: block;
            margin-top: 8px;
            opacity: .85;
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .hero {
            padding: 30px 10px 10px;
        }
    }

    @media screen and (max-width: $breakpoint-small) {
        .hero {
            padding: 30px 10px 10px;

            .hero-content {
                h1 {
                    font-size: 9pt;
                }

                h2 {
                    font-size: 28pt;
                    line-height: 32pt;
                }
            }

            .button {
                display: block;
                width: 100%;
                margin-bottom: 10px;
            }
        }
    }
</style>