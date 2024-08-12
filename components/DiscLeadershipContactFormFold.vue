<template>
    <section class="form" id="discLeadershipContactForm">
        <div class="container flex-container" id="form">
            <div class="row flex-container">
                <div class="col-12">
                    <h1 class="formTitle">
                        Empower Your Leaders
                    </h1>
                    <h2 class="formTitle">
                        Connect with us today to learn more.
                    </h2>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div>
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" id="name" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" id="email" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <div>
                                <label for="phoneNumber">Phone Number</label>
                                <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <label for="company">Company</label>
                                <input v-model="form.company" type="text" id="company" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-12">
                            <div>
                                <label for="message">Message</label>
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
                        <button type="submit" class="submitBtn">
                            <img src="~/assets/disc-leadership/submit-button-blue.png" alt="submit icon"
                                class="submitIcon" />
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
                const names = this.form.name.split(' ');
                this.firstName = names[0];
                this.lastName = names.length > 1 ? names.slice(1).join(' ') : '';

                const salesPerson = await axios.get('/api/lead/next-assignment');

                const lead = await axios.post('/api/lead', {
                    salesPerson: salesPerson.data,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phone: this.form.phoneNumber,
                    email: this.form.email,
                    company: this.form.company,
                    message: this.form.message
                });

                const { data } = await axios.post('/api/contact', {
                    contact: {
                        email: this.form.email,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        phone: this.form.phoneNumber,
                        company: this.form.company,
                        message: this.form.message,
                        fieldValues: [
                            {
                                field: '79', // Sales Person Assignment
                                value: salesPerson.data
                            }
                        ]
                    }
                });

                const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

                // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
                await axios.post(`/api/contact/${data.contact.id}/tag/43`);

                // Apply the "ATD 2024 Get in Touch Form" tag (tag id 998)
                await axios.post(`/api/contact/${data.contact.id}/tag/998`);

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
                this.isDisabled = false;
                this.loading = false;
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
.body {
    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}

h1 {
    font-size: 48px;
    margin-top: 60px;

}

h2 {
    font-size: 38px;
    font-weight: 400;
    margin-top: -70px;
    margin-bottom: 40px;
}

.form {
    background-color: #00a8ff;

    .error {
        color: #410000;
        font-size: 16px;
        margin-top: 5px;
        position: absolute;
    }

    .row {
        label {
            text-align: left;
            display: block;
        }
    }

    .container {
        .formTitle {
            color: #ffffff;
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

        .submitBtn {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            width: 200px;
        }

        .submitIcon {
            width: 100%;
            margin-bottom: 75px;
        }
    }
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