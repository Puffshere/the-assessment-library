<template>
    <transition name="fade">
        <section v-if="isOpen" class="affiliate-modal-window">
            <div class="container">
                <a href="#" title="Close" class="modal-close" @click="close">Close</a>
                <h1>🤝 Become an Affiliate</h1>

                <strong>Sell the DISC Profiler Card Deck System</strong>

                 <div class="row">
                    <div class="col-12">
                        <div v-if="formError" class="validation">
                            <h4 class="title">Please correct the errors below</h4>
                            <p class="description">Make sure you fill out all required fields and continue.</p>
                        </div>
                    </div>
                </div>

                <div class="col-8 contact-form">
                    <form accept-charset="UTF-8" action="https://rz189.infusionsoft.com/app/form/process/d8536d2c5fc36ae056f9f97ff48ea711" class="infusion-form" id="inf_form_d8536d2c5fc36ae056f9f97ff48ea711" method="POST">
                        <input name="inf_form_xid" type="hidden" value="d8536d2c5fc36ae056f9f97ff48ea711" />
                        <input name="inf_form_name" type="hidden" value="Affiliate Interest Optin" />
                        <input name="infusionsoft_version" type="hidden" value="1.70.0.236318" />

                        <div class="infusion-field form-group">
                            <input class="infusion-field-input" id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />
                        </div>
                        
                        <div class="infusion-field form-group">
                            <input class="infusion-field-input" id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />
                        </div>
                        
                        <div class="infusion-field form-group">
                            <input class="infusion-field-input" id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
                        </div>
                        
                        <div class="infusion-field form-group">
                            <input class="infusion-field-input" id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone *" type="text" />
                        </div>
                        
                        <div class="infusion-field form-group">
                            <input class="infusion-field-input" id="inf_field_Company" name="inf_field_Company" placeholder="Company/Organization *" type="text" />
                        </div>
                        
                        <div class="title">
                            <b>Join our exclusive mailing list?</b>
                        </div>

                        <div class="infusion-field">
                            <div class="infusion-radio">
                                <div class="options-container">
                                    <span class="infusion-option">
                                        <input id="inf_option_Pleaseselect_2940" name="inf_option_Pleaseselect" type="radio" value="2940" />
                                        <label for="inf_option_Pleaseselect_2940">Yes please!</label>
                                    </span>
                                    <span class="infusion-option">
                                        <input id="inf_option_Pleaseselect_2942" name="inf_option_Pleaseselect" type="radio" value="2942" />
                                        <label for="inf_option_Pleaseselect_2942">No, thank you</label>
                                    </span>
                                </div>
                            </div>
                        </div><br/>
                        
                        <div class="infusion-field">
                            <span class="infusion-option">
                                <label for="inf_option_IagreetothePrivacyPolicyandgivemyconsent">
                                    <input id="inf_option_IagreetothePrivacyPolicyandgivemyconsent" name="inf_option_IagreetothePrivacyPolicyandgivemyconsent" type="checkbox" value="2944" />
                                    <span class="label-body">I agree to the <nuxt-link to="/legal/privacy" class="hyperlink">Privacy Policy</nuxt-link> and <nuxt-link to="/legal/compliance" class="hyperlink">GDPR Policy</nuxt-link> and give my consent. *</span>
                                </label>
                            </span>
                        </div>
                        
                        <div class="infusion-submit">
                            <button type="submit" style="width: 100%" class="button button-success">Submit</button>
                        </div>
                    </form>
                    
                    <script type="text/javascript" src="https://rz189.infusionsoft.app/app/webTracking/getTrackingCode"></script>
                    <script type="text/javascript" src="https://rz189.infusionsoft.com/app/timezone/timezoneInputJs?xid=d8536d2c5fc36ae056f9f97ff48ea711"></script>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
    import sgMail from '@sendgrid/mail';
    sgMail.setApiKey('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');

    export default {
        props: ['isOpen'],
        data() {
            return {
                contact: {
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    country: 'United States'
                },
                formError: false
            }
        },
        methods: {
            close() {
                this.isOpen = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .affiliate-modal-window {
        position: fixed;
        background-color: rgba(0,0,0,.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999999;
        transition: all 0.25s;

        .container {
            width: 100%;
            max-width: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 40px 20px;
            background: #fff;
            text-align: center;

            .modal-close {
                color: #aaa;
                line-height: 50px;
                font-size: 12pt;
                position: absolute;
                right: 0;
                text-align: center;
                top: 0;
                width: 70px;
                text-decoration: none;

                &:hover {
                    color: #000;
                }
            }

            h1 {
                margin: 0;
                font-size: 18pt;
            }

            .button {
                display: block;
                margin-top: 30px;
                margin-right: 0;
                width: 100%;
            }

            .contact-form {
                text-align: left;
                margin: 20px auto 0;
            }
        }

        .validation {
            background: #fef0f0;;
            color: #f56c6c;
            padding: 12px 20px;
            border-radius: 4px;

            .title, .description {
                margin: 0;
                font-size: 10pt;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>