<template>
    <section class="library">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1><span style="color: #1666ff; text-shadow: 1px 1px 1px black;">Contact</span> The Assessment Library</h1>
                    <h4>
                        Have a question about your assessments, credits, or account? We’re here to help.
                    </h4>
                </div>
            </div>
        </section>

        <section class="contact">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <h4>We’d love to hear from you.</h4>
                        <p class="helper-text">
                            Fill out the form below and we’ll get back to you as soon as possible.
                        </p>

                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <input id="name" type="text" placeholder="Full Name" v-model="form.name" required
                                    autocomplete="name" />
                            </div>

                            <div class="form-group">
                                <input id="email" type="email" placeholder="Email" v-model="form.email" required
                                    autocomplete="email" />
                            </div>

                            <div class="form-group">
                                <input id="subject" type="text" placeholder="Subject" v-model="form.subject" required />
                            </div>

                            <div class="form-group">
                                <textarea id="message" placeholder="How can we help you?" v-model="form.message"
                                    required rows="5"></textarea>
                            </div>

                            <p v-if="error" class="error-msg">{{ error }}</p>
                            <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>
                            <br />
                            <button type="submit" class="blue" :disabled="loading">
                                {{ loading ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold />
    </section>
</template>

<script>
export default {
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            loading: false,
            error: '',
            successMessage: ''
        }
    },
    methods: {
        async submitForm() {
            this.loading = true
            this.error = ''
            this.successMessage = ''

            try {
                const { name, email, subject, message } = this.form

                await this.$axios.$post('/api/contact', {
                    name,
                    email,
                    subject,
                    message
                })

                this.successMessage = 'Thank you! Your message has been sent.'
                this.form = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }
            } catch (err) {
                console.error('Contact submit error:', err)
                this.error =
                    (err.response && err.response.data && err.response.data.message) ||
                    'Sorry, there was a problem sending your message.'
            } finally {
                this.loading = false
            }
        }
    },
    head() {
        return {
            title: 'Contact Us | The Assessment Library',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Get in touch with The Assessment Library team for support and questions.'
                }
            ]
        }
    }
}
</script>


<style scoped lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.library {
    .header {
        margin-top: 64px;
        text-align: center;
        padding: 40px 16px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;

        h1 {
            margin-bottom: 0px;
        }

        h4 {
            margin-top: -10px;
            font-weight: 400;
            font-family: $nunito-family;
        }

        .logo {
            width: 270px;
            position: absolute;
            left: 80px;
            top: -25px;
        }

        &:after {
            background: linear-gradient(to right,
                    $color-d 25%,
                    $color-i 25%,
                    $color-i 50%,
                    $color-s 50%,
                    $color-s 75%,
                    $color-c 75%);
            position: absolute;
            content: '';
            height: 10px;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
        }
    }

    .contact {
        text-align: center;
        padding: 70px 16px 80px 16px;

        .row {
            display: flex;
            justify-content: center;
        }

        .card {
            width: 500px;
            border-radius: 11px;
            border: 3px solid #025baf67;
            background: #fff;
            box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);
            position: relative;
            padding: 32px 32px 56px 32px;
            text-align: left;

            h4 {
                text-align: center;
                margin-bottom: 8px;
            }

            .helper-text {
                font-size: 13px;
                font-family: $nunito-family;
                text-align: center;
                margin-bottom: 20px;
                color: #444;
            }

            .form-group {
                margin-bottom: 14px;

                input,
                textarea {
                    border-radius: 10px;
                    background: #f9f9f9;
                    width: 100%;
                    padding: 10px 14px;
                    border: 1px solid #d1d5db;
                    box-shadow: 0px 18px 30px 0px rgba(68, 97, 242, 0.11);
                    font-family: $nunito-family;
                    font-size: 14px;
                    resize: vertical;
                }

                textarea {
                    min-height: 120px;
                }
            }

            .error-msg {
                color: #b00020;
                margin: 6px 0 8px;
                font-size: 14px;
                text-align: center;
            }

            .success-msg {
                color: #0a7d00;
                margin: 6px 0 8px;
                font-size: 14px;
                text-align: center;
            }

            button {
                display: block;
                margin: 16px auto 0 auto;
            }
        }
    }
}

@media (max-width: 600px) {
    .library {
        .header {
            padding: 40px 16px 30px;

            h1 {
                line-height: 1.25em;
                margin-bottom: 40px;
            }

            .logo {
                position: relative;
                width: 300px;
                left: 0;
                top: 0;
                margin-bottom: -40px;
                margin-top: -50px;
            }
        }

        .contact {
            .card {
                width: 100%;
                padding: 24px 16px 40px 16px;

                .form-group input,
                .form-group textarea {
                    width: 100%;
                }
            }
        }
    }
}
</style>