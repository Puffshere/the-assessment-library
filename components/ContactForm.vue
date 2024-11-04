<template>
    <section class="contact-form">
        <form class="form">
            <ValidationObserver ref="form">
                <loading :active="loading" :is-full-page="false" />

                <div class="col-6">

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <label for="firstName">First Name *</label>
                            <input id="firstName" name="firstName" type="text" v-model="form.firstName" tabindex="1" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required|email">
                            <label for="email">Email Address *</label>
                            <input id="email" name="email" type="email" v-model="form.email" tabindex="3" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <label for="company">Company/Organization *</label>
                            <input id="company" name="company" type="text" v-model="form.company" tabindex="5" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <label for="country">Country *</label>
                            <input type="text" id="country" name="country" v-model="form.country" list="countries"
                                autocomplete="country" tabindex="7">
                            <datalist id="countries">
                                <option v-for="country in filteredCountries" :key="country.id" :value="country.label">{{
                                    country.label
                                }}</option>
                            </datalist>
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <label for="lastName">Last Name *</label>
                            <input id="lastName" name="lastName" type="text" v-model="form.lastName" tabindex="2" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required|numeric">
                            <label for="phone">Phone Number *</label>
                            <input id="phone" name="phone" type="tel" v-model="form.phone" tabindex="4" />
                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div
                        v-if="this.getStartedId !== 'wcg' && this.getStartedId !== 'viet' && this.getStartedId !== 'dc' && this.getStartedId !== 'bni'">
                        <div class="form-group">
                            <ValidationProvider v-slot="v" rules="required">
                                <label for="source">How did you hear about us? *</label>

                                <select id="source" name="source" v-model="form.source" tabindex="6">
                                    <option v-for="source in sources" :key="source.id" :value="source.value">{{
                                        source.label
                                    }}</option>
                                </select>

                                <span class="error">{{ v.errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group" v-if="form.source === 'Other (select and enter below)'">
                        <label for="sourceOther">If "Other" above, list here:</label>
                        <input id="sourceOther" name="sourceOther" type="text" />
                    </div>

                    <div
                        v-if="this.getStartedId !== 'wcg' && this.getStartedId !== 'viet' && this.getStartedId !== 'dc' && this.getStartedId !== 'bni'">
                        <div class="form-group">
                            <ValidationProvider v-slot="v" rules="required|min:5">
                                <label for="comments">What would you like to discuss?</label>
                                <textarea cols="24" rows="5" id="comments" name="comments" v-model="form.comments"
                                    tabindex="8"></textarea>
                                <p class="error" style="position: absolute; margin-top: -5px;">{{ v.errors[0] }}</p>
                            </ValidationProvider>
                        </div>

                        <div class="form-group">
                            <ValidationProvider v-slot="v" rules="required">
                                <label>Which best describes your need for assessments? *</label>

                                <div class="form-check">
                                    <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                        value="Reseller" v-model="form.clientType" tabindex="9" />
                                    <label class="form-check-label" for="reseller">I am a <strong>coach or
                                            trainer</strong>
                                        looking to resell assessments with my clients.</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                        value="Corporate" v-model="form.clientType" tabindex="10" />
                                    <label class="form-check-label" for="corporate">I am part of a
                                        <strong>company</strong>
                                        looking to use assessments internally with my team.</label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" id="retail" name="clientType" type="radio"
                                        value="Retail" v-model="form.clientType" tabindex="11" />
                                    <label class="form-check-label" for="retail">I am an <strong>individual</strong>
                                        looking
                                        to purchase a single assessment only.</label>
                                </div>

                                <span class="error">{{ v.errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="form-group" v-if="!isShort">
                        <label>Are you affiliated with one of the following organizations?</label>

                        <select id="affiliation" name="affiliation" v-model="form.affiliation" style="max-width: 310px;"
                            tabindex="12">
                            <option v-for="affiliation in affiliations" :key="affiliation.id"
                                :value="affiliation.value">{{
                                    affiliation.label }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <label>Join our exclusive mailing list? *</label>

                            <div class="form-check">
                                <input class="form-check-input" id="optinYes" name="newsletter" type="radio" value="45"
                                    v-model="form.newsletter" tabindex="13" />
                                <label class="form-check-label" for="optinYes">Yes, please!</label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" id="optinNo" name="newsletter" type="radio" value="46"
                                    v-model="form.newsletter" tabindex="14" />
                                <label class="form-check-label" for="optinNo">No, thank you.</label>
                            </div>

                            <span class="error">{{ v.errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider v-slot="v" rules="required">
                            <div class="form-check">
                                <input class="form-check-input" id="consent" name="consent" type="checkbox" required
                                    v-model="form.consent" tabindex="15" />
                                <label class="form-check-label" for="consent">
                                    I agree to the <nuxt-link to="/legal/privacy" target="_blank" rel="noopener"
                                        class="hyperlink">Privacy
                                        Policy</nuxt-link> and
                                    <nuxt-link to="/legal/compliance" target="_blank" rel="noopener"
                                        class="hyperlink">GDPR Policy</nuxt-link> and
                                    give
                                    my consent. *
                                </label>

                                <span class="error">{{ v.errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                    </div>

                    <button :disabled="isDisabled" :class="{ 'button': true, 'disabled': isDisabled }" type="button"
                        @click="process">{{ buttonText || 'Get in Touch' }}</button>
                </div>
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
        'isShort',
        'acFormId',
        'isGetStarted',
        'getStartedId'
    ],
    components: {
        Loading,
        ValidationObserver,
        ValidationProvider
    },
    data() {
        return {
            importCountry: dropdownCountries,
            loading: true,
            sources: [],
            affiliations: [],
            getStartedAccountName: 'Assessments 24x7',
            isDisabled: false,
            isPartnerId: '',
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
                consent: '',
                country: ''
            },
        }
    },
    async created() {
        let foo = await axios.get('/api/contact/custom-fields');
        console.log(foo.data);

        let response = await axios.get('/api/contact/custom-field/21');
        this.sources = response.data.fieldOptions;

        response = await axios.get('/api/contact/custom-field/64');
        this.affiliations = response.data.fieldOptions;

        switch (this.getStartedId) {
            case 'ccc':
                this.getStartedAccountName = 'Center for Coaching Certification';
                break;
            case 'actioncoach':
                this.getStartedAccountName = 'ActionCOACH';
                break;
            case 'tonyrobbins':
                this.getStartedAccountName = 'Tony Robbins';
                break;
            case 'engageandgrow':
                this.getStartedAccountName = 'Engage and Grow';
                break;
            case 'swc':
                this.getStartedAccountName = 'South Western Consulting';
                break;
            case 'wcg':
                this.getStartedAccountName = 'Worldwide Coaching Group';
                break;
            case 'dc':
                this.getStartedAccountName = 'Dale Carnegie';
                break;
            case 'bni':
                this.getStartedAccountName = 'BNI';
                break;
            case 'aus':
                this.isPartnerId = 'aus';
                this.getStartedAccountName = 'Australasia';
                // this.getStartedId = '';
                break;
            case 'can':
                this.isPartnerId = 'can';
                this.getStartedAccountName = 'Canada';
                // this.getStartedId = '';
                break;
            case 'eur':
                this.isPartnerId = 'eur';
                this.getStartedAccountName = 'Erudia';
                // this.getStartedId = '';
                break;
            case 'neth_bel':
                this.isPartnerId = 'neth_bel';
                this.getStartedAccountName = 'Netherlands/Belgium';
                // this.getStartedId = '';
                break;
            case 'viet':
                this.isPartnerId = 'viet';
                this.getStartedAccountName = 'Vietnam';
                // this.getStartedId = '';
                break;
        }
        this.loading = false;
    },
    methods: {
        async process() {
            this.isDisabled = true;

            const validated = await this.$refs.form.validate();

            if (validated) {
                this.loading = true;
                //  This would be used to override the partner page contact form over the country input field for the this.getStartedAccountName.
                // if (this.isPartnerId !== 'aus' || this.isPartnerId !== 'can' || this.isParterId !== 'eur' || this.isPartnerId !== 'neth_bel' || this.isPartnerId !== 'viet') {
                switch (this.form.country) {
                    case 'Australia':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'New Zealand':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Papua New Guinea':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Solomon Islands':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Nauru':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Vanuatu':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'New Caledonia':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Fiij':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tonga':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Cook Islands':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Samoa':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tuvalu':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tokelau':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Tahiti':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Easter Island':
                        this.isPartnerId = "aus";
                        this.getStartedAccountName = 'Australasia';
                        break;
                    case 'Algeria':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Dahomey':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Enclaves of Forcados and Badjibo':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'France':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'French Sudan':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'French Togoland':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Guinea':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Italy':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Ivory Coast/Senegal/Cameroon':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Mauritania':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Morocco':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Niger':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Senegal':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Switzerland':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Tunisia':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Upper Volta':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Germany':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Poland':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Portugal':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Spain':
                        this.isPartnerId = "eur";
                        this.getStartedAccountName = 'Erudia';
                        break;
                    case 'Cambodia':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Indonesia':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Laos':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Malaysia':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Philippines':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Singapore':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Taiwan':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Thailand':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Vietnam':
                        this.isPartnerId = "viet";
                        this.getStartedAccountName = 'Vietnam';
                        break;
                    case 'Canada':
                        this.isPartnerId = "can";
                        this.getStartedAccountName = 'Canada';
                        break;
                    case 'Netherlands':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Dutch-speaking Aruba':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Suriname':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Sint-Maarten':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Curaçao':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Bonaire':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Sint-Eustatius':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Saba':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                    case 'Dutch-speaking Belgium including Brussels':
                        this.isPartnerId = "neth_bel";
                        this.getStartedAccountName = 'Netherlands/Belgium';
                        break;
                }
                if (this.isPartnerId === "aus" || this.isPartnerId === "eur" || this.isPartnerId === "viet") {
                    try {
                        const lead = await axios.post('/api/lead', {
                            salesPerson: "Cristina Moore",
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
                                        field: '118', // Country,
                                        value: this.form.country
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
                                        field: '79', // Salesperson Assignment,
                                        value: "Cristina Moore"
                                    },
                                    {
                                        field: '80', // Get Started Account Affiliation
                                        value: this.isPartnerId ? this.getStartedAccountName : ''
                                    },
                                    {
                                        field: '84', // Is Adwords Lead?
                                        value: adWordsValue
                                    }
                                ]
                            }
                        });

                        // const noteData = {
                        //     note: `Form data: ${JSON.stringify(this.form)}, SalesPerson: ${JSON.stringify(salesPerson.data)}`,
                        //     relid: data.contact.id,
                        //     reltype: 'Subscriber'
                        // };
                        // const response = await axios.post('/api/contact/notes', { note: noteData });

                        const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                        // Check to see if this contact wants to subscribe to our newsletter
                        if (this.form.newsletter === '45') {
                            await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                        }

                        // If this is a the Get Started flow, we need to add a special tag to trigger email alerts
                        // if (this.isGetStarted) {
                        //     await axios.post(`/api/contact/${data.contact.id}/tag/149`);
                        // }

                        // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                        await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                        // Apply the "Affiliate Referral: Australasia" tag (tag id 907)
                        if (this.isPartnerId === 'aus') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/907`);
                        };

                        // Apply the "Affiliate Referral: Erudia" tag (tag id 908)
                        if (this.isPartnerId === 'eur') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/908`);
                        };

                        // Apply the "Affiliate Referral: Vietnam" tag (tag id 909)
                        if (this.isPartnerId === 'viet') {
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
                if (this.isPartnerId === "neth_bel") {
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
                                        field: '118', // Country,
                                        value: this.form.country
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
                                        field: '79', // Salesperson Assignment,
                                        value: "Angie Fairbanks"
                                    },
                                    {
                                        field: '80', // Get Started Account Affiliation
                                        value: this.isPartnerId ? this.getStartedAccountName : ''
                                    },
                                    {
                                        field: '84', // Is Adwords Lead?
                                        value: adWordsValue
                                    }
                                ]
                            }
                        });

                        // const noteData = {
                        //     note: `Form data: ${JSON.stringify(this.form)}, SalesPerson: ${JSON.stringify(salesPerson.data)}`,
                        //     relid: data.contact.id,
                        //     reltype: 'Subscriber'
                        // };
                        // const response = await axios.post('/api/contact/notes', { note: noteData });

                        const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                        // Check to see if this contact wants to subscribe to our newsletter
                        if (this.form.newsletter === '45') {
                            await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                        }

                        // If this is a the Get Started flow, we need to add a special tag to trigger email alerts
                        // if (this.isGetStarted) {
                        //     await axios.post(`/api/contact/${data.contact.id}/tag/149`);
                        // }

                        // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                        await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                        // Apply the "Affiliate Referral: Netherlands/Belgium" tag (tag id 983)
                        if (this.isPartnerId === 'neth_bel') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/983`);
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
                if (this.isPartnerId === "can") {
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
                                        field: '118', // Country,
                                        value: this.form.country
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
                                        field: '79', // Salesperson Assignment,
                                        value: salesPerson.data
                                    },
                                    {
                                        field: '80', // Get Started Account Affiliation
                                        value: this.isPartnerId ? this.getStartedAccountName : ''
                                    },
                                    {
                                        field: '84', // Is Adwords Lead?
                                        value: adWordsValue
                                    }
                                ]
                            }
                        });

                        // const noteData = {
                        //     note: `Form data: ${JSON.stringify(this.form)}, SalesPerson: ${JSON.stringify(salesPerson.data)}`,
                        //     relid: data.contact.id,
                        //     reltype: 'Subscriber'
                        // };
                        // const response = await axios.post('/api/contact/notes', { note: noteData });

                        const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                        // Check to see if this contact wants to subscribe to our newsletter
                        if (this.form.newsletter === '45') {
                            await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                        }

                        // If this is a the Get Started flow, we need to add a special tag to trigger email alerts
                        // if (this.isGetStarted) {
                        //     await axios.post(`/api/contact/${data.contact.id}/tag/149`);
                        // }

                        // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                        await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                        // Apply the "Affiliate Referral: Canada" tag (tag id 910)
                        if (this.isPartnerId === 'can') {
                            await axios.post(`/api/contact/${data.contact.id}/tag/910`);
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
                if (this.getStartedId === "wcg" || this.getStartedId === "dc" || this.getStartedId === "bni") {
                    try {
                        const lead = await axios.post('/api/lead', {
                            salesPerson: "Cristina Moore",
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
                                        field: '118', // Country,
                                        value: this.form.country
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
                                        field: '79', // Salesperson Assignment,
                                        value: "Cristina Moore"
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

                        // const noteData = {
                        //     note: `Form data: ${JSON.stringify(this.form)}, SalesPerson: ${JSON.stringify(salesPerson.data)}`,
                        //     relid: data.contact.id,
                        //     reltype: 'Subscriber'
                        // };
                        // const response = await axios.post('/api/contact/notes', { note: noteData });

                        const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                        // Check to see if this contact wants to subscribe to our newsletter
                        if (this.form.newsletter === '45') {
                            await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                        }

                        // If this is a the Get Started flow, we need to add a special tag to trigger email alerts
                        if (this.isGetStarted) {
                            await axios.post(`/api/contact/${data.contact.id}/tag/149`);
                        }

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
                if (this.getStartedId !== "wcg" && this.isPartnerId !== "aus" && this.isPartnerId !== "can" && this.isPartnerId !== "eur" && this.isPartnerId !== "neth_bel" && this.isPartnerId !== "viet" && this.getStartedId !== "dc" && this.getStartedId !== "bni") {
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
                                        field: '118', // Country,
                                        value: this.form.country
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
                                        field: '79', // Salesperson Assignment,
                                        value: salesPerson.data
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

                        // const noteData = {
                        //     note: `Form data: ${JSON.stringify(this.form)}, SalesPerson: ${JSON.stringify(salesPerson.data)}`,
                        //     relid: data.contact.id,
                        //     reltype: 'Subscriber'
                        // };
                        // const response = await axios.post('/api/contact/notes', { note: noteData });

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
            } else {
                window.scrollTo(0, 0);
                this.isDisabled = false;
            }
        },
        async trackConversion(contactId) {
            if (process.browser) {
                let event = '';

                if (localStorage.getItem('ppc_event')) {
                    event = localStorage.getItem('ppc_event');

                    if (event === 'ppc_disc_assessment') {
                        await axios.post(`/api/contact/${contactId}/tag/850`);
                    } else if (event === 'ppc_disc_certification' || event === 'ppc_disc_certification_alt') {
                        await axios.post(`/api/contact/${contactId}/tag/851`);
                    }
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
    display: flex;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 10px !important;

    label:not(.form-check-label) {
        font-weight: 600;
        font-size: 11pt;
    }
}
</style>