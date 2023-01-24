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
                            <label for="country">Country *</label>
                            <input type="text" id="country" name="country" v-model="form.country" list="countries"
                                autocomplete="country">
                            <datalist id="countries">
                                <option v-for="country in countries" :key="country.id" :value="country.label">{{
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
                consent: ''
            },
            countries: [
                { label: 'Afghanistan' },
                { label: 'Albania' },
                { label: 'Algeria' },
                { label: 'Andorra' },
                { label: 'Angola' },
                { label: 'Antigua and Barbuda' },
                { label: 'Argentina' },
                { label: 'Armenia' },
                { label: 'Australia' },
                { label: 'Austria' },
                { label: 'Azerbaijan' },
                { label: 'Bahamas' },
                { label: 'Bahrain' },
                { label: 'Bangladesh' },
                { label: 'Barbados' },
                { label: 'Belarus' },
                { label: 'Belgium' },
                { label: 'Belize' },
                { label: 'Benin' },
                { label: 'Bhutan' },
                { label: 'Bolivia' },
                { label: 'Bosnia and Herzegovina' },
                { label: 'Botswana' },
                { label: 'Brazil' },
                { label: 'Brunei' },
                { label: 'Bulgaria' },
                { label: 'Burkina Faso' },
                { label: 'Burundi' },
                { label: 'Cambodia' },
                { label: 'Cameroon' },
                { label: 'Canada' },
                { label: 'Cape Verde' },
                { label: 'Central African Republic' },
                { label: 'Chad' },
                { label: 'Chile' },
                { label: 'China' },
                { label: 'Colombia' },
                { label: 'Comoros' },
                { label: 'Congo' },
                { label: 'Cook Islands' },
                { label: 'Costa Rica' },
                { label: 'Croatia' },
                { label: 'Cuba' },
                { label: 'Cyprus' },
                { label: 'Czech Republic' },
                { label: 'Dahomey' },
                { label: 'Denmark' },
                { label: 'Djibouti' },
                { label: 'Dominica' },
                { label: 'Dominican Republic' },
                { label: 'Easter Island' },
                { label: 'Ecuador' },
                { label: 'Egypt' },
                { label: 'El Salvador' },
                { label: 'Enclaves of Forcados and Badjibo' },
                { label: 'Equatorial Guinea' },
                { label: 'Eritrea' },
                { label: 'Estonia' },
                { label: 'Ethiopia' },
                { label: 'Fiji' },
                { label: 'Finland' },
                { label: 'France' },
                { label: 'French Sudan' },
                { label: 'French Togoland' },
                { label: 'Gabon' },
                { label: 'Gambia' },
                { label: 'Georgia' },
                { label: 'Germany' },
                { label: 'Ghana' },
                { label: 'Greece' },
                { label: 'Grenada' },
                { label: 'Guatemala' },
                { label: 'Guinea' },
                { label: 'Guinea-Bissau' },
                { label: 'Guyana' },
                { label: 'Haiti' },
                { label: 'Honduras' },
                { label: 'Hungary' },
                { label: 'Iceland' },
                { label: 'India' },
                { label: 'Indonesia' },
                { label: 'Iran' },
                { label: 'Iraq' },
                { label: 'Ireland' },
                { label: 'Israel' },
                { label: 'Italy' },
                { label: 'Ivory Coast/Senegal/Cameroon' },
                { label: 'Jamaica' },
                { label: 'Japan' },
                { label: 'Jordan' },
                { label: 'Kazakhstan' },
                { label: 'Kenya' },
                { label: 'Kiribati' },
                { label: 'Kuwait' },
                { label: 'Kyrgyzstan' },
                { label: 'Laos' },
                { label: 'Latvia' },
                { label: 'Lebanon' },
                { label: 'Lesotho' },
                { label: 'Liberia' },
                { label: 'Libya' },
                { label: 'Liechtenstein' },
                { label: 'Lithuania' },
                { label: 'Luxembourg' },
                { label: 'Macedonia' },
                { label: 'Madagascar' },
                { label: 'Malawi' },
                { label: 'Malaysia' },
                { label: 'Maldives' },
                { label: 'Mali' },
                { label: 'Malta' },
                { label: 'Marshall Islands' },
                { label: 'Mauritania' },
                { label: 'Mauritius' },
                { label: 'Mexico' },
                { label: 'Micronesia' },
                { label: 'Moldova' },
                { label: 'Monaco' },
                { label: 'Mongolia' },
                { label: 'Montenegro' },
                { label: 'Morocco' },
                { label: 'Mozambique' },
                { label: 'Myanmar' },
                { label: 'Namibia' },
                { label: 'Nauru' },
                { label: 'Nepal' },
                { label: 'Netherlands' },
                { label: 'New Caledonia' },
                { label: 'New Zealand' },
                { label: 'Nicaragua' },
                { label: 'Niger' },
                { label: 'Nigeria' },
                { label: 'Norway' },
                { label: 'Oman' },
                { label: 'Pakistan' },
                { label: 'Palau' },
                { label: 'Panama' },
                { label: 'Papua New Guinea' },
                { label: 'Paraguay' },
                { label: 'Peru' },
                { label: 'Philippines' },
                { label: 'Poland' },
                { label: 'Portugal' },
                { label: 'Qatar' },
                { label: 'Romania' },
                { label: 'Russia' },
                { label: 'Rwanda' },
                { label: 'Saint Kitts and Nevis' },
                { label: 'Saint Lucia' },
                { label: 'Saint Vincent and the Grenadines' },
                { label: 'Samoa' },
                { label: 'San Marino' },
                { label: 'Sao Tome and Principe' },
                { label: 'Saudi Arabia' },
                { label: 'Senegal' },
                { label: 'Serbia' },
                { label: 'Seychelles' },
                { label: 'Sierra Leone' },
                { label: 'Singapore' },
                { label: 'Slovakia' },
                { label: 'Slovenia' },
                { label: 'Solomon Islands' },
                { label: 'Somalia' },
                { label: 'South Africa' },
                { label: 'South Korea' },
                { label: 'South Sudan' },
                { label: 'Spain' },
                { label: 'Sri Lanka' },
                { label: 'Sudan' },
                { label: 'Suriname' },
                { label: 'Swaziland' },
                { label: 'Sweden' },
                { label: 'Switzerland' },
                { label: 'Syria' },
                { label: 'Tahiti' },
                { label: 'Taiwan' },
                { label: 'Tajikistan' },
                { label: 'Tanzania' },
                { label: 'Thailand' },
                { label: 'Timor-Leste' },
                { label: 'Togo' },
                { label: 'Tokelau' },
                { label: 'Tonga' },
                { label: 'Trinidad and Tobago' },
                { label: 'Tunisia' },
                { label: 'Turkey' },
                { label: 'Turkmenistan' },
                { label: 'Tuvalu' },
                { label: 'Uganda' },
                { label: 'Ukraine' },
                { label: 'United Arab Emirates' },
                { label: 'United Kingdom' },
                { label: 'United States of America' },
                { label: 'Upper Volta' },
                { label: 'Uruguay' },
                { label: 'Uzbekistan' },
                { label: 'Vanuatu' },
                { label: 'Venezuela' },
                { label: 'Vietnam' },
                { label: 'Yemen' },
                { label: 'Zambia' },
                { label: 'Zimbabwe' },
                { label: 'Other' }, 
            ],
        }
    },
    methods: {
        async process() {
            this.isDisabled = true;

            const validated = await this.$refs.form.validate();

            if (validated) {
                this.loading = true;

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
