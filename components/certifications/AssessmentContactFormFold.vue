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
                                <label for="name"><strong>Name</strong></label>
                                <input v-model="form.name" type="text" id="name" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="email"><strong>Email</strong></label>
                                <input v-model="form.email" type="email" id="email" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="phoneNumber"><strong>Phone Number</strong></label>
                                <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="company"><strong>Company</strong></label>
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
                                <input v-model="form.message" type="text" id="message" class="messageBox" required>
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
                                    <label><strong>Which best describes your need for assessments? *</strong></label>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                            value="Reseller" v-model="form.clientType" />
                                        <label class="form-check-label" for="reseller">I am a coach or trainer
                                            looking to resell assessments with my clients.</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                            value="Corporate" v-model="form.clientType" />
                                        <label class="form-check-label" for="corporate">I am part of a company
                                            looking to use assessments internally with my team.</label>
                                    </div>
                                    <div class="form-check" style="margin-top: -10px;">
                                        <input class="form-check-input" id="retail" name="clientType" type="radio"
                                            value="Retail" v-model="form.clientType" />
                                        <label class="form-check-label" for="retail">I am an individual looking
                                            to purchase a single assessment only.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="learn-more-button light-blue" style="margin-top: 20px;">
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
                message: ''
            }
        };
    },
    methods: {
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
                        fieldValues: [
                            {
                                field: '79', // Sales Person Assignment
                                value: salesPerson.data
                            },
                            // {
                            //     field: '21', // How did you hear about us?
                            //     value: 'ICF'
                            // },
                            {
                                field: '4', // Client type (reseller vs corporate),
                                value: this.form.clientType
                            }
                        ]
                    }
                });

                const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                // // Apply the "ATD 2024 Get in Touch Form" tag (tag id 998)
                // await axios.post(`/api/contact/${data.contact.id}/tag/998`);

                // // Apply the "LS: Assess-Cert Page" tag (tag id 1024)
                // await axios.post(`/api/contact/${data.contact.id}/tag/1024`);

                // Create an account and associate the contact to it
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