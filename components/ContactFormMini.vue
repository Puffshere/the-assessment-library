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
                            <input type="text" id="country" name="country" v-model="form.country"
                                placeholder="Country *" list="countries" autocomplete="country">
                            <datalist id="countries">
                                <option v-for="country in filteredCountries" :key="country.id" :value="country.label">{{
                                    country.label
                                }}</option>
                            </datalist>
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
import { dropdownCountries } from './dropdownCountryList';

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
            importCountry: dropdownCountries,
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
                country: ''
            },
        }
    },
    methods: {
        async process() {
            this.isDisabled = true;

            const validated = await this.$refs.form.validate();

            if (validated) {
                this.loading = true;

                switch (this.form.country) {
                    case 'Australia':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'New Zealand':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Papua New Guinea':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Solomon Islands':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Nauru':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Vanuatu':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'New Caledonia':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Fiij':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tonga':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Cook Islands':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Samoa':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tuvalu':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tokelau':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tahiti':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Easter Island':
                        this.getStartedId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Algeria':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Dahomey':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Enclaves of Forcados and Badjibo':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'France':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'French Sudan':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'French Togoland':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Guinea':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Italy':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Ivory Coast/Senegal/Cameroon':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Mauritania':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Morocco':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Niger':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Senegal':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Switzerland':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Tunisia':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Upper Volta':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Germany':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Poland':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Portugal':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Spain':
                        this.getStartedId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Cambodia':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Indonesia':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Laos':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Malaysia':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Philippines':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Singapore':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Taiwan':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Thailand':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Vietnam':
                        this.getStartedId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Canada':
                        this.getStartedId = "can";
                        this.getStartedAccountName = 'Canada';
                        break;
                }
                if (this.getStartedId === "aus" || this.getStartedId === "can" || this.getStartedId === "eur" || this.getStartedId === "viet") {
                    try {
                        const lead = await axios.post('/api/lead', {
                            salesPerson: "Angie Fairbanks",
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
                                    },
                                    {
                                        field: '79', // Sales Person Assignment,
                                        value: "Angie Fairbanks"
                                    },
                                    {
                                        field: '80', // Get Started Account Affiliation
                                        value: this.isGetStarted ? this.getStartedAccountName : ''
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

                        // If this is a the Get Started flow, we need to add a special tag to trigger email alerts
                        if (this.isGetStarted) {
                            await axios.post(`/api/contact/${data.contact.id}/tag/149`);
                        }

                        // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                        await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                        // Apply the "Affiliate Referral: Australasia" tag (tag id 907)
                        if (this.getStartedId === 'aus') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/907`);
                        };

                        // Apply the "Affiliate Referral: Canada" tag (tag id 910)
                        if (this.getStartedId === 'can') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/910`);
                        };

                        // Apply the "Affiliate Referral: Erudia" tag (tag id 908)
                        if (this.getStartedId === 'eur') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/908`);
                        };

                        // Apply the "Affiliate Referral: Vietnam" tag (tag id 909)
                        if (this.getStartedId === 'viet') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/909`);
                        };

                        // Create an account and associate the contact to it
                        await axios.post(`/api/contact/${data.contact.id}/account`, {
                            company: this.form.company
                        });

                        this.trackConversion(data.contact.id);

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
                }
                if (this.getStartedId !== "wcg" && this.getStartedId !== "aus" && this.getStartedId !== "can" && this.getStartedId !== "eur" && this.getStartedId !== "viet") {
                    try {
                        const salesPerson = await axios.get('/api/lead/next-assignment');

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
    computed: {
        filteredCountries() {
            return this.importCountry.filter(country => country.label.toLowerCase().startsWith(this.form.country.toLowerCase()));
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
