<template>
    <section class="form" id="cdcContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h3 class="formTitle">
                        Ready to Elevate <br />
                        Your Coaching Practice?
                    </h3>
                    <h4 class="formSubText">
                        Don't miss out on the opportunity to enhance your coaching <br />
                        effectiveness, earn ICF credits, and differentiate your services <br />
                        through DISC Certification.
                    </h4>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" id="name" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" id="email" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div class="line">
                                <label for="phoneNumber">Phone Number</label>
                                <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="line">
                                <label for="company">Company</label>
                                <input v-model="form.company" type="text" id="company" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-12">
                            <div class="message">
                                <label for="message">Message</label>
                                <input v-model="form.message" type="text" id="message" class="messageBox" required>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-12">
                        <button type="submit" class="white">
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
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-rise-contact');
                } else {
                    entry.target.classList.remove('animate-rise-contact');
                }
            });
        },
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
                            {
                                field: '21', // How did you hear about us?
                                value: 'ICF'
                            },
                            {
                                field: '4', // Client type (reseller vs corporate),
                                value: 'Reseller'
                            },

                        ]
                    }
                });

                const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                // Apply the "ATD 2024 Get in Touch Form" tag (tag id 998)
                await axios.post(`/api/contact/${data.contact.id}/tag/998`);

                // Apply the "ICF Landing Page" tag (tag id 1016)
                await axios.post(`/api/contact/${data.contact.id}/tag/1016`);

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
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.1 // Adjust this as needed
        });

        // Select each child element to be observed except the image on the right
        const elements = document.querySelectorAll('.form .col-12 > h3, .form .col-12 > h4, .form .col-6 .line, .form .col-12 > button, .form .col-12 > .col-12, .form .col-12 .message');
        elements.forEach(element => {
            observer.observe(element);
        });
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.body {
    .container {
        padding-top: 25px;
        padding-bottom: 145px;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}

.form {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
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

        .messageBox {
            min-height: 90px;
        }
    }
}

@keyframes rise-contact {
    from {
        transform: translateY(.5in);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.form h3,
.form h4,
.form .col-6 .line,
.form button,
.form .message {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.animate-rise-contact {
    animation: rise-contact .5s ease-out forwards;
}

@media (max-width: 1000px) {
    .body {
        .flex-container {
            margin-bottom: -5px;
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
</style>
