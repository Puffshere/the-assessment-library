<template>
    <section class="form" id="corporateContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h1 style="margin-top: 100px; margin-bottom: 0px;">
                        Ready to take your organization to the top?<br />
                        <span style="color: #00a8ff;">You‘re in the right place.</span>
                    </h1>
                </div>
            </div>
            <form @submit.prevent="onSubmit">
                <loading :active="loading" :is-full-page="true" />
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
                                <input v-model="form.message" type="text" id="message" class="messageBox" required
                                    minlength="5">
                                <p v-if="form.message && form.message.length < 5" class="error">
                                    Message must be at least 5 characters long.
                                </p>
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
                                    <div class="form-check" style="margin-top: 0px;">
                                        <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                            required value="Reseller" v-model="form.clientType" />
                                        <label class="form-check-label" for="reseller">I am a coach or trainer looking
                                            to resell assessments with my clients.</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                            required value="Corporate" v-model="form.clientType" />
                                        <label class="form-check-label" for="corporate">I am part of a company looking
                                            to use assessments internally with my team.</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                            required value="Retail" v-model="form.clientType" />
                                        <label class="form-check-label" for="corporate">I am an individual looking to
                                            purchase a single assessment only.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="learn-more-button light-blue" :disabled="isDisabled"
                            :class="{ 'button': true, 'disabled': isDisabled }" style="margin-top: 20px;">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        Loading
    },
    data() {
        return {
            isDisabled: false,
            loading: false,
            form: {
                name: '',
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                company: '',
                message: '',
                clientType: '',
            }
        };
    },
    methods: {
        onSubmit() {
            this.submitForm();
        },
        async submitForm() {
            if (this.form.message.length < 5) {
                this.$toast.open({
                    message: 'Please enter at least 5 characters in the message field.',
                    position: 'top',
                    duration: 5000,
                    type: 'error'
                });
                return;
            }

            try {
                this.isDisabled = true;
                this.loading = true;

                const names = this.form.name.split(' ');
                this.form.firstName = names[0];
                this.form.lastName = names.length > 1 ? names.slice(1).join(' ') : '';

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
                            },
                            {
                                field: '84', // Is Adwords Lead?
                                value: 'yes'
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

                // Apply the "Certifications/Assessment page contact form" tag (tag id 1028)
                //await axios.post(`/api/contact/${data.contact.id}/tag/1028`);

                await axios.post(`/api/contact/${data.contact.id}/account`, {
                    company: this.form.company
                });

                this.loading = false;
                this.isDisabled = false;

                this.$toast.open({
                    message: 'Your information has been successfully submitted!',
                    position: 'top',
                    duration: 8000,
                    type: 'success'
                });

                this.$router.push(this.redirect || `/thank-you?clientType=${this.form.clientType}&contactId=${data.contact.id}`);

            } catch (err) {
                console.error('Error during form submission:', err);
                this.$toast.open({
                    message: 'An unexpected error has occurred. Please try again later.',
                    position: 'top',
                    duration: 8000,
                    type: 'error'
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
}

.flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.form {
    margin-top: -30px;
    background-size: cover;
    margin-bottom: 100px;

    .error {
        color: #ff0000;
        font-size: 16px;
        margin-top: 0px;
        position: absolute;
    }

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

    .button.disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    .learn-more-button {
        width: 200px;
        height: 40px;
        border-radius: 40px;
        border: none;
        font-size: 18.6px;
        line-height: 18.6px;
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