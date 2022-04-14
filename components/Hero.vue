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

    .no-webp .hero {
        background: url('~assets/hero.jpg') !important;
        background-size: cover !important;
    }

    .webp .hero {
        background: url('~assets/hero.jpg') !important;
        background-size: cover !important;
    }

    .lightbox {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.85);
        z-index: 999999;

        &.active {
            display: block;
        }

        .player {
            position: absolute;
            left: 50%;
            margin-left: -320px;
            width: 640px;
            margin-top: 200px;
            border: 0;
            border-radius: 20px;
            box-shadow: 0 0 40px rgba(0,0,0,0.6);

            .close {
                content: '×';
                position: absolute;
                right: 11px;
                color: #fff;
                font-size: 24pt;
                z-index: 9999999;
                padding-left: 2px;
                padding-top: 2px;
                margin-top: 12px;
                height: 34px;
                width: 34px;
                text-align: center;
                line-height: 32px;
                background: rgba(0,179,255,.8);
                border-radius: 50%;
                transition: all .3s ease;
                cursor: pointer;
            }
        }
    }

    .hero {
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

        .main-img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 20px rgba(0,0,0,.3);
            margin: 30px 0;
            transition: filter .3s ease-in-out;

            &:hover {
                filter: brightness(120%);
            }
        }

        .pill {
            border-radius: 21px;
            padding: 10px;
            display: block;
            font-size: 9pt;
            font-weight: 600;
            background: #0033c5;

            input {
                vertical-align: baseline;
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

    @media screen and (max-width: $breakpoint-large) {
        .hero {
            .main-img {
                max-width: 500px;
                margin: 50px auto 0;
                display: block;
            }
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

            .main-img {
                margin: 10px 0 20px;
            }
        }
    }
</style>
