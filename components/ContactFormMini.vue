<template>
    <section class="contact-form">
        <form class="form">
            <ValidationObserver ref="form">
                <loading :active="loading" :is-full-page="false" />

                <div class="col-6">
                    <div class="form-group" style="margin-top: -16px">
                        <ValidationProvider v-slot="v" rules="required">
                            <input id="firstName" name="firstName" type="text" v-model="form.firstName"
                                placeholder="First Name *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required|email">
                            <input id="email" name="email" type="email" v-model="form.email"
                                placeholder="Email Address *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group" style="margin-top: -16px">
                        <ValidationProvider v-slot="v" rules="required">
                            <input id="lastName" name="lastName" type="text" v-model="form.lastName"
                                placeholder="Last Name *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required|numeric">
                            <input id="phone" name="phone" type="tel" v-model="form.phone"
                                placeholder="Phone Number *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group" style="margin-top: -16px">
                        <ValidationProvider v-slot="v" rules="required">
                            <input id="company" name="company" type="text" v-model="form.company"
                                placeholder="Company/Organization *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <textarea id="comments" name="comments" v-model="form.comments"
                                placeholder="What would you like to discuss? *" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group" style="margin-top: -0px">
                        <ValidationProvider v-slot="v" rules="required">
                            <div class="form-check pill">
                                <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                    value="Reseller" v-model="form.clientType" />
                                <label class="form-check-label" for="reseller">I am a <strong>coach or trainer</strong>
                                    looking to resell assessments with my clients.</label>
                            </div>

                            <div class="form-check pill">
                                <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                    value="Corporate" v-model="form.clientType" />
                                <label class="form-check-label" for="corporate">I am part of a <strong>company</strong>
                                    looking to use assessments internally with my team.</label>
                            </div>

                            <div class="form-check pill">
                                <input class="form-check-input" id="retail" name="clientType" type="radio"
                                    value="Retail" v-model="form.clientType" />
                                <label class="form-check-label" for="retail">I am an <strong>individual</strong> looking
                                    to purchase a single assessment only.</label>
                            </div>

                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <button :disabled="isDisabled" :class="{ 'button secondary': true, 'disabled': isDisabled }"
                    type="button" @click="process" style="width: 100%; margin-top: -10px; margin-bottom: 10px">{{
                    buttonText || 'Get in Touch' }}</button>
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
            loading: false,
            sources: [],
            affiliations: [],
            isDisabled: false,
            form: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                country: '',
                clientType: '',
                comments: '',
                newsletter: '45',
                consent: '',
            },
        }
    },
    methods: {
        async process() {
            this.isDisabled = true;

            const validated = await this.$refs.form.validate();

            if (validated) {
                this.loading = true;

                    try {
                        const salesPerson = await axios.get('http://localhost:3000/api/lead/next-assignment');

                        const lead = await axios.post('/api/lead', {
                            salesPerson: salesPerson.data,
                            firstName: this.form.firstName,
                            lastName: this.form.lastName,
                            phone: this.form.phone,
                            email: this.form.email,
                            country: this.form.country
                        });

                        let event = '';
                        let adWordsValue = 'No';

                        if (localStorage.getItem('ppc_event')) {
                            event = localStorage.getItem('ppc_event');

                            if (event === 'ppc_disc_assessment' || event === 'ppc_disc_certification' || event === 'ppc_disc_certification_alt') {
                                adWordsValue = 'Yes';
                            }
                        }

                        const { data } = await axios.post('/api/contact', {
                            contact: {
                                email: this.form.email,
                                firstName: this.form.firstName,
                                lastName: this.form.lastName,
                                phone: this.form.phone,
                                country: this.form.country,
                                fieldValues: [
                                    {
                                        field: '4', // Client type (reseller vs corporate),
                                        value: this.form.clientType
                                    },
                                    {
                                        field: '10', // Newsletter opt-in,
                                        value: this.form.newsletter
                                    },
                                    {
                                        field: '20', // Questions/Comments,
                                        value: this.form.comments
                                    },
                                    {
                                        field: '79', // Sales Person Assignment,
                                        value: salesPerson.data
                                    },
                                    {
                                        field: '84', // Is Adwords Lead?
                                        value: adWordsValue
                                    }
                                ]
                            }
                        });

                        const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

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

                    } catch (err) {
                        this.isDisabled = false;
                        this.loading = false;
                        this.$toast.open({
                            message: 'An unexpected error has occured. Please try again later.',
                            position: 'top',
                            duration: 8000,
                            type: 'error'
                        });
                    }
            } else {
                this.isDisabled = false;
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
    },
}
</script>

<style lang="scss" scoped>
.contact-form {
    label:not(.form-check-label) {
        font-weight: 600;
        font-size: 11pt;
    }

    .pill {
        border-radius: 5px;
        display: block;
        font-size: 9pt;
        font-weight: 600;

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
