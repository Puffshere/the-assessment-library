<template>
    <section class="register-page">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Please register to visit our Library.</h1>
                    <h4>
                        Create an account to access our full library of DISC stories, <br
                            class="line-break" />resources, and assessment tools.
                    </h4>
                </div>
            </div>
        </section>

        <div class="portal">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="onSubmit" autocomplete="off">
                        <h4>Create an Account</h4>
                        <div v-if="error" class="error">
                            <p>{{ error }}</p>
                        </div>

                        <!-- Honey Pot -->
                        <div style="position:absolute; left:-9999px; height:0; width:0; overflow:hidden;"
                            aria-hidden="true">
                            <input type="text" name="username" autocomplete="username" tabindex="-1">
                            <input type="password" name="password" autocomplete="new-password" tabindex="-1">
                        </div>

                        <div class="form-group">
                            <input id="name" type="text" v-model="form.name" placeholder="Name" required name="reg-name"
                                autocomplete="off" :readonly="nameReadonly" @focus="nameReadonly = false"
                                autocapitalize="words" spellcheck="false" />
                        </div>

                        <div class="form-group">
                            <input id="email" type="email" v-model="form.email" placeholder="Email" required
                                name="reg-email" autocomplete="off" :readonly="emailReadonly"
                                @focus="emailReadonly = false" autocapitalize="none" inputmode="email"
                                spellcheck="false" />
                        </div>

                        <div class="form-group">
                            <input id="password" type="password" v-model="form.password" placeholder="Password" required
                                name="reg-pass" autocomplete="new-password" :readonly="passReadonly"
                                @focus="passReadonly = false" />
                        </div>

                        <div class="form-group">
                            <input id="confirmPassword" type="password" v-model="form.confirmPassword"
                                placeholder="Confirm Password" required name="reg-pass-confirm"
                                autocomplete="new-password" :readonly="confirmReadonly"
                                @focus="confirmReadonly = false" />
                        </div>

                        <p>Already have an account? <a href="/auth/login">Log in</a></p>

                        <button type="submit" class="blue">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <footer-fold class="foot" />
    </section>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            error: '',
            nameReadonly: true,
            emailReadonly: true,
            passReadonly: true,
            confirmReadonly: true
        }
    },
    methods: {
        async onSubmit() {
            this.error = ''
            const { name, email, password, confirmPassword } = this.form

            if (password !== confirmPassword) {
                this.error = 'Passwords do not match.'
                return
            }

            try {
                await this.$store.dispatch('register', { name, email, password })

                this.$router.push('/dashboard')
            } catch (e) {
                this.error = e.message || 'Registration failed. Please check your details and try again.'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.register-page {
    .header {
        text-align: center;
        padding: 40px 16px 40px 16px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;
        min-height: 269px;

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

        .logo {
            width: 300px;
            position: absolute;
            left: 80px;
            top: -25px;
        }

        h1 {
            margin-bottom: 20px;
        }

        h4 {
            margin-top: -20px;
            font-weight: 400;
            font-family: $nunito-family;
        }
    }

    .portal {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-bottom: 80px;
        position: relative;
        z-index: 99999999;

        .row {
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }

        .col-12 {
            margin-top: -40px;
            width: 478px;
            height: auto;
            border-radius: 12px;
            border: 1px solid #C2C2C2;
            background: #FFF;
            text-align: center;
            box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);

            p {
                color: #666666;
                text-align: right;
                padding-right: 40px;
                padding-bottom: 20px;
            }

            a {
                color: #213C85;
            }
        }

        .form-group {
            text-align: center;

            input {
                border-radius: 10px;
                background: #F9F9F9;
                width: 400px;
                box-shadow: 0px 18px 30px 0px rgba(68, 97, 242, 0.11);
            }
        }

        button {
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 600px) {
    .register-page {
        .line-break {
            display: none;
        }

        .header {
            padding: 40px 16px 30px 16px;
            min-height: auto;

            .logo {
                position: relative;
                left: 0px;
                top: 0px;
                margin-bottom: -40px;
                margin-top: -50px;
            }

            h1 {
                line-height: 1.25em;
                margin-bottom: 40px;
            }
        }
    }

    .portal {
        padding-bottom: 60px !important;

        .col-12 {
            width: 100%;
            margin-top: 60px !important;

            .form-group {
                padding: 0 16px;
            }

            .form-group input {
                width: 100%;
            }
        }
    }
}
</style>