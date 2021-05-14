<template>
    <section class="contact-form">
        <form class="form">
            <div class="col-6">
                <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input id="firstName" name="firstName" type="text" v-model="form.firstName" />
                </div>

                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input id="email" name="email" type="email" />
                </div>

                <div class="form-group">
                    <label for="company">Company/Organization *</label>
                    <input id="company" name="company" type="text" />
                </div>
            </div>

            <div class="col-6">
                <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input id="lastName" name="lastName" type="text" v-model="form.lastName" />
                </div>

                <div class="form-group">
                    <label for="phone">Phone Number *</label>
                    <input id="phone" name="inf_field_Phone1" type="tel" />
                </div>

                <div class="form-group">
                    <label for="source">How did you hear about us? *</label>

                    <select id="source" name="source" v-model="form.source">
                        <option v-for="source in sources" :key="source.id" :value="source.value">{{ source.label }}</option>
                    </select>
                </div>
            </div>

            <div class="col-12">                    
                <div class="form-group" v-if="form.source === 'Other (select and enter below)'">
                    <label for="sourceOther">If "Other" above, list here:</label>
                    <input id="sourceOther" name="sourceOther" type="text" />
                </div>

                <div class="form-group">
                    <label for="comments">Questions/Comments:</label>
                    <textarea cols="24" rows="5" id="comments" name="comments"></textarea>
                </div>
                
                <div class="form-group">
                    <label>Which best describes your need for assessments?  *</label>
            
                    <div class="form-check">
                        <input class="form-check-input" id="reseller" name="clientType" type="radio" value="8" v-model="form.clientType" />
                        <label class="form-check-label" for="reseller">I am a coach, trainer, or consultant who uses assessments with my clients</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" id="corporate" name="clientType" type="radio" value="49" v-model="form.clientType" />
                        <label class="form-check-label" for="corporate">I am part of an organization (corporation, association, etc.) that uses assessments internally with our team</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Are you affiliated with one of the following organizations?</label>

                    <div class="form-check" v-for="affiliation in affiliations" :key="affiliation.id">
                        <input class="form-check-input" :id="`affiliation${affiliation.id}`" type="checkbox" :value="affiliation.id" v-model="form.affiliation" />
                        <label class="form-check-label" :for="`affiliation${affiliation.id}`">{{ affiliation.label }}</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label data-mce-mark="1">Join our exclusive mailing list?</label>
                    
                    <div class="form-check">
                        <input class="form-check-input" id="optinYes" name="newsletter" type="radio" value="45" v-model="newsletter" checked/>
                        <label class="form-check-label" for="optinYes">Yes please!</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" id="optinNo" name="newsletter" type="radio" value="46" v-model="newsletter" />
                        <label class="form-check-label" for="optinNo">No, thank you</label>
                    </div>
                </div>
                
                <div class="infusion-field form-group">
                    <span class="form-check">
                        <input class="form-check-input" id="consent" name="consent" type="checkbox" />
                        <label class="form-check-label" for="consent">
                            I agree to the <nuxt-link to="/legal/privacy" class="hyperlink">Privacy Policy</nuxt-link> and 
                            <nuxt-link to="/legal/compliance" class="hyperlink">GDPR Policy</nuxt-link> and give my consent.*
                        </label>
                    </span>
                </div>
            </div>
            
            <button class="button" type="submit">Submit</button>
        </form>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        props: [
            'redirect'
        ],
        data() {
            return {
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
                    newsletter: ''
                },
                newsletter: 'true'
            }
        },
        async created() {
            let response = await axios.get('/api/contact/custom-field/21');
            this.sources = response.data.fieldOptions;

            response = await axios.get('/api/contact/custom-field/5');
            this.affiliations = response.data.fieldOptions;

            response = await axios.get('/api/contact/custom-fields');

            console.log(response);
            console.log(this.affiliations);
        },
        methods: {
            async process() {
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
                                    field: '5', // Affiliation,
                                    value: this.form.affiliation
                                },
                                {
                                    field: '10', // Newsletter opt-in,
                                    value: this.form.newsletter
                                }
                            ]
                        }
                    });

                    // TODO: inspect this response and pass in the correct contactId below
                    console.log(data);

                    // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                    await axios.post(`/api/contact/${data.id}/tag/43`);
                    
                    // Check to see if this contact wants to subscribe to our newsletter
                    if (this.newsletter === '45') {
                        await axios.post(`/api/contact/${data.id}/subscribe`);
                    }
                } catch(err) {
                    // TODO: error handling
                    console.log(err);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contact-form {
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
