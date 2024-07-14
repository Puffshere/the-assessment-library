<template>
    <section class="form" id="certificationsAssessmentContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h2>
                        Ready to start your Certification Journey?<br />
                        <span style="color: #00a8ff;">You're in the right place.</span>
                    </h2>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="name"><strong>Name *</strong></label>
                                <input v-model="form.name" type="text" id="name" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="email"><strong>Email *</strong></label>
                                <input v-model="form.email" type="email" id="email" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="phoneNumber"><strong>Phone Number *</strong></label>
                                <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="company"><strong>Company *</strong></label>
                                <input v-model="form.company" type="text" id="company" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-12">
                            <div style="margin-bottom: -40px;">
                                <label for="message"><strong>Message</strong></label>
                                <input v-model="form.message" type="text" id="message" class="messageBox">
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label><strong>Which best describes your need for certification? *</strong></label>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                            required value="Reseller" v-model="form.clientType" />
                                        <label class="form-check-label" for="reseller">I am a coach or trainer looking
                                            to get certified.</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                            required value="Corporate" v-model="form.clientType" />
                                        <label class="form-check-label" for="corporate">I work for company and would
                                            like to get certified.</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label><strong>Join our exclusive mailing list? *</strong></label>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="optinYes" name="newsletter" type="radio"
                                            required value="45" v-model="form.newsletter" tabindex="13" />
                                        <label class="form-check-label" for="optinYes">Yes, please!</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="optinNo" name="newsletter" type="radio"
                                            required value="46" v-model="form.newsletter" tabindex="14" />
                                        <label class="form-check-label" for="optinNo">No, thank you</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input class="form-check-input" id="consent" name="consent" type="checkbox" required
                                        v-model="form.consent" tabindex="15" />
                                    <label class="form-check-label" for="consent">
                                        I agree to the <nuxt-link to="/legal/privacy" target="_blank" rel="noopener"
                                            class="hyperlink">Privacy
                                            Policy</nuxt-link> and
                                        <nuxt-link to="/legal/compliance" target="_blank" rel="noopener"
                                            class="hyperlink">GDPR
                                            Policy</nuxt-link> and
                                        give
                                        my consent. *
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="learn-more-button light-blue" style="margin-top: 20px;">
                            Submit
                        </button>
                        <!-- <div ref="recaptcha" class="g-recaptcha" data-sitekey="6LfeZg4qAAAAAJaeMAH1j50AduN7eolDgsxmEsT1"
                            data-size="invisible" data-callback="onReCaptchaSuccess"></div> -->
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            isDisabled: false,
            form: {
                name: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                company: '',
                message: '',
                clientType: '',
                newsletter: '',
                consent: ''
            }
        };
    },
    methods: {
        // onSubmit() {
        //     grecaptcha.execute();
        // },
        // async onReCaptchaSuccess(token) {
        //     console.log('reCAPTCHA token:', token); // Log the token
        //     this.recaptchaResponse = token;
        //     await this.submitForm();
        // },
        async submitForm() {
            console.log('Form submitted:', this.form);

            // Split the name input into firstName and lastName
            const names = this.form.name.split(' ');
            this.form.firstName = names[0];
            this.form.lastName = names.length > 1 ? names.slice(1).join(' ') : ''; // Join the rest in case of middle names

            try {
                const salesPerson = await axios.get('/api/lead/next-assignment');

                const lead = await axios.post('/api/lead', {
                    salesPerson: salesPerson.data,
                    firstName: this.form.firstName,
                    lastName: this.form.lastName,
                    phone: this.form.phoneNumber,
                    email: this.form.email,
                    company: this.form.company,
                    message: this.form.message
                });

                const { data } = await axios.post('/api/contact', {
                    contact: {
                        email: this.form.email,
                        firstName: this.form.firstName,
                        lastName: this.form.lastName,
                        phone: this.form.phoneNumber,
                        company: this.form.company,
                        message: this.form.message,
                       // recaptchaResponse: this.recaptchaResponse,
                        fieldValues: [
                            {
                                field: '79', // Sales Person Assignment
                                value: salesPerson.data
                            },
                            {
                                field: '4', // Client type (reseller vs corporate),
                                value: this.form.clientType
                            },
                            {
                                field: '10', // Newsletter opt-in,
                                value: this.form.newsletter
                            }
                        ]
                    }
                });

                const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);
                console.log("this is the updatedLead", updatedLead);

                // Check to see if this contact wants to subscribe to our newsletter
                if (this.form.newsletter === '45') {
                    await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                }

                await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                await axios.post(`/api/contact/${data.contact.id}/account`, {
                    company: this.form.company
                });

                this.$toast.open({
                    message: 'Your information has been successfully submitted!',
                    position: 'top',
                    duration: 8000,
                    type: 'success'
                });

                this.$router.push(this.redirect || `/thank-you?clientType=${this.form.clientType}&contactId=${data.contact.id}`);

            } catch (err) {
                this.$toast.open({
                    message: 'An unexpected error has occurred. Please try again later.',
                    position: 'top',
                    duration: 8000,
                    type: 'error'
                });
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.form {
    margin-top: -30px;
    background-size: cover;
    margin-bottom: 100px;

    .row {
        label {
            text-align: left;
            display: block;
        }
    }

    .container {
        .formSubText {
            margin-bottom: 20px;
        }

        .whiteArrow {
            width: 5%;
            padding-top: 60px;
            padding-left: 10px;
        }

        label {
            font-weight: 400;
            font-size: 18px;
            line-height: 33px;
        }

        input {
            width: 100%;
            min-height: 50px;
            border-radius: 4px;
            padding: 0 20px;
            font-size: 24px;
        }

        .form-check-input {
            width: 24px;
            margin-left: 0px;
            display: flex;
            margin-top: -10px;
        }

        .form-check-label {
            padding-left: 10px;
        }

        .messageBox {
            min-height: 90px;
        }
    }

    .learn-more-button {
        width: 200px;
        height: 40px;
        border-radius: 40px;
        border: none;
        font-size: 18.6px;
        line-height: 30px;
        font-weight: 600;
        cursor: pointer;

        &.light-blue {
            color: white;
            background-color: #2729ff;

            &:hover {
                color: #2729ff;
                background-color: white;
                border: 1px solid #2729ff;
            }
        }
    }
}
</style>



<!-- <template>
    <section class="form" id="certificationsAssessmentContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h2>
                        Ready to start your Certification Journey?<br />
                        <span style="color: #00a8ff;">You're in the right place.</span>
                    </h2>
                </div>
            </div>
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="name"><strong>Name *</strong></label>
                                <input v-model="form.name" type="text" id="name" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="email"><strong>Email *</strong></label>
                                <input v-model="form.email" type="email" id="email" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="phoneNumber"><strong>Phone Number *</strong></label>
                                <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="company"><strong>Company *</strong></label>
                                <input v-model="form.company" type="text" id="company" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-12">
                            <div style="margin-bottom: -40px;">
                                <label for="message"><strong>Message</strong></label>
                                <input v-model="form.message" type="text" id="message" class="messageBox">
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label><strong>Which best describes your need for certification? *</strong></label>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                            required value="Reseller" v-model="form.clientType" />
                                        <label class="form-check-label" for="reseller">I am a coach or trainer looking
                                            to get certified.</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                            required value="Corporate" v-model="form.clientType" />
                                        <label class="form-check-label" for="corporate">I work for company and would
                                            like to get certified.</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label><strong>Join our exclusive mailing list? *</strong></label>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="optinYes" name="newsletter" type="radio"
                                            required value="45" v-model="form.newsletter" tabindex="13" />
                                        <label class="form-check-label" for="optinYes">Yes, please!</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="optinNo" name="newsletter" type="radio"
                                            required value="46" v-model="form.newsletter" tabindex="14" />
                                        <label class="form-check-label" for="optinNo">No, thank you</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input class="form-check-input" id="consent" name="consent" type="checkbox" required
                                        v-model="form.consent" tabindex="15" />
                                    <label class="form-check-label" for="consent">
                                        I agree to the <nuxt-link to="/legal/privacy" target="_blank" rel="noopener"
                                            class="hyperlink">Privacy Policy</nuxt-link> and
                                        <nuxt-link to="/legal/compliance" target="_blank" rel="noopener"
                                            class="hyperlink">GDPR Policy</nuxt-link> and give my consent. *
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="learn-more-button light-blue"
                            style="margin-top: 20px;">Submit</button>
                        <div ref="recaptcha" class="g-recaptcha" data-sitekey="6LfeZg4qAAAAAJaeMAH1j50AduN7eolDgsxmEsT1"
                            data-size="invisible" data-callback="onReCaptchaSuccess"></div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                name: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                company: '',
                message: '',
                clientType: '',
                newsletter: '',
                consent: ''
            },
            recaptchaResponse: ''
        };
    },
    methods: {
        onSubmit() {
            console.log('grecaptcha:', typeof grecaptcha !== 'undefined' ? 'exists' : 'not available');
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.execute();
            } else {
                console.error('reCAPTCHA client not available');
                this.$toast.open({
                    message: 'reCAPTCHA client not available. Please try again later.',
                    position: 'top',
                    duration: 8000,
                    type: 'error'
                });
            }
        },
        async onReCaptchaSuccess(token) {
            console.log('reCAPTCHA token:', token); // Log the token
            this.recaptchaResponse = token;
            await this.submitForm();
        },
        async submitForm() {
            if (!this.recaptchaResponse) {
                this.$toast.open({
                    message: 'Please complete the reCAPTCHA verification.',
                    position: 'top',
                    duration: 8000,
                    type: 'error'
                });
                return;
            }

            console.log('Form submitted:', { ...this.form, recaptchaResponse: this.recaptchaResponse });

            // Split the name input into firstName and lastName
            const names = this.form.name.split(' ');
            this.form.firstName = names[0];
            this.form.lastName = names.length > 1 ? names.slice(1).join(' ') : ''; // Join the rest in case of middle names

            try {
                const salesPerson = await axios.get('/api/lead/next-assignment');

                const lead = await axios.post('/api/lead', {
                    salesPerson: salesPerson.data,
                    firstName: this.form.firstName,
                    lastName: this.form.lastName,
                    phone: this.form.phoneNumber,
                    email: this.form.email,
                    company: this.form.company,
                    message: this.form.message
                });

                const { data } = await axios.post('/api/contact', {
                    contact: {
                        email: this.form.email,
                        firstName: this.form.firstName,
                        lastName: this.form.lastName,
                        phone: this.form.phoneNumber,
                        company: this.form.company,
                        message: this.form.message,
                        recaptchaResponse: this.recaptchaResponse,
                        fieldValues: [
                            {
                                field: '79', // Sales Person Assignment
                                value: salesPerson.data
                            },
                            {
                                field: '4', // Client type (reseller vs corporate),
                                value: this.form.clientType
                            },
                            {
                                field: '10', // Newsletter opt-in,
                                value: this.form.newsletter
                            }
                        ]
                    }
                });

                const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                // Check to see if this contact wants to subscribe to our newsletter
                if (this.form.newsletter === '45') {
                    await axios.post(`/api/contact/${data.contact.id}/subscribe`);
                }

                await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                await axios.post(`/api/contact/${data.contact.id}/account`, {
                    company: this.form.company
                });

                this.$toast.open({
                    message: 'Your information has been successfully submitted!',
                    position: 'top',
                    duration: 8000,
                    type: 'success'
                });

                this.$router.push(this.redirect || `/thank-you?clientType=${this.form.clientType}&contactId=${data.contact.id}`);

            } catch (err) {
                console.error('Error submitting form:', err); // Log the error
                this.$toast.open({
                    message: 'An unexpected error has occurred. Please try again later.',
                    position: 'top',
                    duration: 8000,
                    type: 'error'
                });
            }
        }
    },
    mounted() {
        console.log('mounted grecaptcha:', typeof grecaptcha !== 'undefined' ? 'exists' : 'not available');
        if (typeof grecaptcha !== 'undefined') {
            window.onReCaptchaSuccess = this.onReCaptchaSuccess;
            grecaptcha.ready(() => {
                grecaptcha.render(this.$refs.recaptcha);
            });
        } else {
            console.error('reCAPTCHA client not available on mount');
        }
    }
};
</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.form {
    margin-top: -30px;
    background-size: cover;
    margin-bottom: 100px;

    .row {
        label {
            text-align: left;
            display: block;
        }
    }

    .container {
        .formSubText {
            margin-bottom: 20px;
        }

        .whiteArrow {
            width: 5%;
            padding-top: 60px;
            padding-left: 10px;
        }

        label {
            font-weight: 400;
            font-size: 18px;
            line-height: 33px;
        }

        input {
            width: 100%;
            min-height: 50px;
            border-radius: 4px;
            padding: 0 20px;
            font-size: 24px;
        }

        .form-check-input {
            width: 24px;
            margin-left: 0px;
            display: flex;
            margin-top: -10px;
        }

        .form-check-label {
            padding-left: 10px;
        }

        .messageBox {
            min-height: 90px;
        }
    }

    .learn-more-button {
        width: 200px;
        height: 40px;
        border-radius: 40px;
        border: none;
        font-size: 18.6px;
        line-height: 30px;
        font-weight: 600;
        cursor: pointer;

        &.light-blue {
            color: white;
            background-color: #2729ff;

            &:hover {
                color: #2729ff;
                background-color: white;
                border: 1px solid #2729ff;
            }
        }
    }
}
</style> -->