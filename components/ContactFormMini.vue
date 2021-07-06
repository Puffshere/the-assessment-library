<template>
    <section class="contact-form">
        <form class="form">
            <ValidationObserver ref="form">
                <loading :active="loading" :is-full-page="false" />

                <div class="col-6">
                    <div class="form-group" style="margin-top: 16px">
                        <ValidationProvider v-slot="v" rules="required">
                            <input id="firstName" name="firstName" type="text" v-model="form.firstName" tabindex="1" placeholder="First Name *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required|email">
                            <input id="email" name="email" type="email" tabindex="3" v-model="form.email" placeholder="Email Address *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group" style="margin-top: 16px">
                        <ValidationProvider v-slot="v" rules="required">
                            <input id="lastName" name="lastName" type="text" v-model="form.lastName" tabindex="2" placeholder="Last Name *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required|numeric">
                            <input id="phone" name="phone" type="tel" tabindex="4" v-model="form.phone" placeholder="Phone Number *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group" style="margin-top: -16px">
                        <ValidationProvider v-slot="v" rules="required">
                            <input id="company" name="company" type="text" tabindex="5" v-model="form.company" placeholder="Company/Organization *"/>
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group" style="margin-top: -20px">
                        <ValidationProvider v-slot="v" rules="required">                            
                            <div class="col-6">
                                <div class="form-check pill">
                                    <input class="form-check-input" id="reseller" name="clientType" type="radio" value="Reseller" v-model="form.clientType" tabindex="9" />
                                    <label class="form-check-label" for="reseller">I am a coach</label>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="form-check pill">
                                    <input class="form-check-input" id="corporate" name="clientType" type="radio" value="Corporate" v-model="form.clientType" tabindex="10" />
                                    <label class="form-check-label" for="corporate">We're a company</label>
                                </div>
                            </div>

                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                
                <button class="button" type="button" @click="process" tabindex="15" style="width: 100%; margin-top: -10px; margin-bottom: 10px">{{ buttonText || 'Submit' }}</button>
            </ValidationObserver>
        </form>
    </section>
</template>

<script>
    import axios from 'axios';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
    import * as rules from 'vee-validate/dist/rules';
    import { messages } from 'vee-validate/dist/locale/en.json';

    Object.keys(rules).forEach(rule => {
        extend(rule, {
            ...rules[rule],
            message: messages[rule]
        });
    });

    export default {
        props: [
            'redirect',
            'buttonText',
            'acFormId'
        ],
        components: {
            Loading,
            ValidationObserver,
            ValidationProvider
        },
        data() {
            return {
                loading: true,
                sources: [],
                affiliations: [],
                form: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    source: '',
                    sourceOther: '',
                    comments: '',
                    clientType: '',
                    affiliation: '',
                    newsletter: '45',
                    consent: ''
                }
            }
        },
        async created() {
            let response = await axios.get('/api/contact/custom-field/21');
            this.sources = response.data.fieldOptions;

            response = await axios.get('/api/contact/custom-field/64');
            this.affiliations = response.data.fieldOptions;

            this.loading = false;
        },
        methods: {
            async process() {
                const validated = await this.$refs.form.validate();

                if (validated) {
                    this.loading = true;

                    try {
                        const { data } = await axios.post('/api/contact', {
                            contact: {
                                email: this.form.email,
                                firstName: this.form.firstName,
                                lastName: this.form.lastName,
                                phone: this.form.phone,
                                fieldValues: [
                                    {
                                        field: '21', // How did you hear about us?
                                        value: this.form.source
                                    },
                                    {
                                        field: '22', // How did you hear about us? (Other),
                                        value: this.form.sourceOther
                                    },
                                    {
                                        field: '20', // Questions/Comments,
                                        value: this.form.comments
                                    },
                                    {
                                        field: '4', // Client type (reseller vs corporate),
                                        value: this.form.clientType
                                    },
                                    {
                                        field: '64', // Affiliation,
                                        value: this.form.affiliation
                                    },
                                    {
                                        field: '10', // Newsletter opt-in,
                                        value: this.form.newsletter
                                    }
                                ]
                            }
                        });

                        // Check to see if this contact wants to subscribe to our newsletter
                        if (this.form.newsletter === '45') {
                            await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                        }

                        // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                        await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                        // Create an account and associate the contact to it
                        await axios.post(`/api/contact/${data.contact.id}/account`, {
                            company: this.form.company
                        });

                        this.trackConversion();

                        this.loading = false;

                        this.$toast.open({
                            message: 'Your information has been successfully submitted!',
                            position: 'top',
                            duration: 8000,
                            type: 'success'
                        });

                        this.$router.push(this.redirect || `/thank-you?clientType=${this.form.clientType}&contactId=${data.contact.id}`);
                        
                    } catch(err) {
                        this.loading = false;
                        this.$toast.open({
                            message: 'An unexpected error has occured. Please try again later.',
                            position: 'top',
                            duration: 8000,
                            type: 'error'
                        });
                    }
                } else {
                    console.log('Not validated yet...');
                }
            },
            trackConversion() {
                if (process.browser) {
                    let event = '';

                    if (localStorage.getItem('ppc_event')) {
                        event = localStorage.getItem('ppc_event');
                    } else {
                        event = `contact_${this.acFormId || '1'}`;
                    }

                    axios.post('/api/tracking-event', { event, email: this.form.email });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contact-form {
        label:not(.form-check-label) {
            font-weight: 600;
            font-size: 11pt;
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

            label {
                font-size: 10pt;
                font-weight: 500;
                margin-bottom: 0;
            }
        }
    }
</style>
