<template>
    <section class="form" id="discInsightsContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h2 class="formTitle rise-on-scroll" style="padding-bottom: 40px;">
                        Take the First Step <br />
                        Toward <span style="color: #00a8ff;">Smarter Hiring</span>
                    </h2>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <loading :active="loading" :is-full-page="true" />
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line rise-on-scroll">
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" id="name" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line rise-on-scroll">
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" id="email" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line rise-on-scroll">
                                <label for="phoneNumber">Phone Number</label>
                                <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line rise-on-scroll">
                                <label for="company">Company</label>
                                <input v-model="form.company" type="text" id="company" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-12">
                            <div class="message rise-on-scroll">
                                <label for="message">Message</label>
                                <input v-model="form.message" type="text" id="message" class="messageBox" required>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-12 rise-on-scroll">
                        <div class="row" style="padding-bottom: 20px;">
                            <div class="col-12">
                                <div class="form-group">
                                    <label><strong>Which best describes your need for assessments? *</strong></label>

                                    <div class="form-check">
                                        <input class="form-check-input" id="reseller" name="clientType" type="radio"
                                            value="Reseller" v-model="form.clientType" />
                                        <label class="form-check-label" for="reseller">I am a coach or trainer
                                            looking to resell assessments with my clients.</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" id="corporate" name="clientType" type="radio"
                                            value="Corporate" v-model="form.clientType" />
                                        <label class="form-check-label" for="corporate">I am part of a company
                                            looking to use assessments internally with my team.</label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" id="retail" name="clientType" type="radio"
                                            value="Retail" v-model="form.clientType" />
                                        <label class="form-check-label" for="retail">I am an individual looking
                                            to purchase a single assessment only.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="white rise-on-scroll" :disabled="isDisabled"
                        :class="{  'button': true, 'disabled': isDisabled }">
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
                message: ''
            }
        };
    },
    methods: {
        observeElements() {
            const options = {
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rise');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            const elements = document.querySelectorAll('.rise-on-scroll');
            elements.forEach(el => {
                observer.observe(el);
            });
        },
        async submitForm() {
            this.isDisabled = true;
            this.loading = true;
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

                const noteData = {
                    note: `Form data: ${JSON.stringify(this.form)}, SalesPerson: ${JSON.stringify(salesPerson.data)}`,
                    relid: data.contact.id,
                    reltype: 'Subscriber'
                };
                const response = await axios.post('/api/contact/notes', { note: noteData });

                const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                // Apply the "ATD 2024 Get in Touch Form" tag (tag id 998)
                await axios.post(`/api/contact/${data.contact.id}/tag/998`);

                // Apply the "DISC Insights Landing Page" tag (tag id 1021)
                await axios.post(`/api/contact/${data.contact.id}/tag/1021`);

                // Create an account and associate the contact to it
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
@import './DiscInsights.scss';

.body {
    .container {
        padding-top: 25px;
        padding-bottom: 130px;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}

.button.disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.form {
    background-color: #1f232e;
    background-size: cover;

    .row {
        label {
            text-align: left;
            display: block;
        }
    }

    .container {
        .formTitle {
            color: #ffffff;
            line-height: 58px;
            margin-bottom: -5px;
        }

        .formSubText {
            color: #ffffff;
            margin-bottom: 20px;
        }

        .whiteArrow {
            width: 5%;
            padding-top: 60px;
            padding-left: 10px;
        }

        label {
            color: #ffffff;
            font-weight: 500;
            font-size: 18px;
            padding-bottom: 5px;
        }

        input {
            background-color: #ffffff;
            border: none;
            width: 100%;
            min-height: 50px;
            border-radius: 2px;
            padding: 0 20px;
            font-size: 24px;
        }

        .form-check-input {
            border: none;
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
}

@media (max-width: 1000px) {
    .body {
        .flex-container {
            margin-bottom: -5px;
        }

        .container {
            padding-top: 80px !important;
        }
    }

    h1 {
        font-size: 48px;
    }

    h2 {
        font-size: 38px;
        font-weight: 400;
        margin-top: -20px;
        margin-bottom: 0px;
    }

    .form {
        .container {
            .formTitle {
                color: #ffffff;
            }

            .whiteArrow {
                width: 10%;
                padding-top: 30px;
                padding-left: 10px;
            }
        }
    }
}

.rise-on-scroll {
    transition: transform 1s ease-out;
    transform: translateY(1in);
    opacity: 0;
}

.rise-on-scroll.rise {
    transform: translateY(0);
    opacity: 1;
}
</style>
