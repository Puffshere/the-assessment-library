<template>
    <section class="hero">     
       <div class="container" style="position: relative">
            <div class="row">
                <div class="col-7 col-12-md">
                    <div class="hero-content">
                        <h1 class="title">Global Leader In Assessment Technology</h1>
                        <h2>We provide the world's most advanced online assessment platform.</h2>

                        <nuxt-link to="/assessments" class="button">Assessment Products</nuxt-link>
                        <nuxt-link to="/about/why-use-assessments" class="button outline light">Why Use Assessments?</nuxt-link>
                    </div>
                </div>

                <div class="col-5 col-12-md" style="position:relative">
                    <client-only>
                        <form accept-charset="UTF-8" :action="action" class="infusion-form" id="inf_form_7d7779344f1c9e17b42f44880c44b92b" method="POST" _lpchecked="1">
                            <input name="inf_form_xid" type="hidden" value="7d7779344f1c9e17b42f44880c44b92b">
                            <input name="inf_form_name" type="hidden" value="Homepage Header">
                            <input name="infusionsoft_version" type="hidden" value="1.70.0.76906">
                            
                            <div class="col-6">
                                <div class="infusion-field form-group" style="margin-bottom:0">
                                    <input class="infusion-field-input" id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" v-model="firstName">
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="infusion-field form-group" style="margin-bottom:0">
                                    <input class="infusion-field-input" id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" v-model="lastName">
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="infusion-field form-group" style="margin-bottom:0">
                                    <input class="infusion-field-input" id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text">
                                </div>
                            </div>
                                
                            <div class="col-12">
                                <div class="infusion-field form-group" style="margin-bottom:0">
                                    <input class="infusion-field-input" id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text">
                                </div>
                            </div>
                                
                            <div class="col-12">
                                <div class="infusion-field form-group" style="margin-bottom:0">
                                    <input class="infusion-field-input" id="inf_field_Company" name="inf_field_Company" placeholder="Company/Organization *" type="text">
                                </div>
                            </div>

                            <div class="infusion-field">
                                <div class="infusion-radio">
                                    <div class="options-container">
                                        <div class="col-6">
                                            <label class="reseller pill" for="inf_option_Imlookingformoreinformationon_2778">
                                                <input id="inf_option_Imlookingformoreinformationon_2778" name="inf_option_Imlookingformoreinformationon" type="radio" value="2778">
                                                <span class="label-body">I'm a Coach</span>
                                            </label>
                                        </div>

                                        <div class="col-6">
                                            <label class="corporate pill" for="inf_option_Imlookingformoreinformationon_2780">
                                                <input id="inf_option_Imlookingformoreinformationon_2780" name="inf_option_Imlookingformoreinformationon" type="radio" value="2780">
                                                <span class="label-body">We're a Company</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="infusion-submit">
                                <button type="submit" style="width: 100%; margin-top: 10px;" class="button">Schedule a Consultation</button>
                            </div>

                            <span class="legal-form-text">
                                By submitting this form, I agree to the <nuxt-link to="/legal/privacy" class="hyperlink light">Privacy Policy</nuxt-link> and 
                                <nuxt-link to="/legal/compliance" class="hyperlink light">GDPR Policy</nuxt-link> and give my consent.
                            </span>
                        </form>
                    </client-only>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
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
            width: 100%;
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
