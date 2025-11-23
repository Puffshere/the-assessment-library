<template>
    <section class="library">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Reset your password.</h1>
                    <h4>
                        Enter and confirm your new password below to finish resetting your
                        account.
                    </h4>
                </div>
            </div>
        </section>

        <section class="login">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <h4>Choose a new password.</h4>

                        <div v-if="tokenInvalid" class="token-error">
                            <p class="error-msg">
                                This password reset link is invalid or has expired.
                            </p>
                            <p class="signUpText">
                                Please request a new reset link from the
                                <nuxt-link to="/auth/login" class="signUp hyperlink">
                                    sign in page
                                </nuxt-link>.
                            </p>
                        </div>

                        <form v-else @submit.prevent="submitReset">
                            <div class="form-group">
                                <input id="password" type="password" placeholder="New password" v-model="form.password"
                                    required autocomplete="new-password" />
                            </div>

                            <div class="form-group">
                                <input id="confirmPassword" type="password" placeholder="Confirm new password"
                                    v-model="form.confirmPassword" required autocomplete="new-password" />
                            </div>

                            <p v-if="error" class="error-msg">{{ error }}</p>
                            <p v-if="message" class="success-msg">{{ message }}</p>

                            <button type="submit" class="blue" :disabled="loading" v-if="!resetComplete">
                                {{ loading ? 'Updating...' : 'Update Password' }}
                            </button>

                            <button v-else type="button" class="blue" @click="goToLogin">
                                Go to Sign In
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
        'footer-fold': () => import('@/components/Footer'),
    },
    data() {
        return {
            form: {
                password: '',
                confirmPassword: '',
            },
            error: '',
            message: '',
            loading: false,
            resetComplete: false,
            tokenInvalid: false,
        };
    },
    methods: {
        async submitReset() {
            this.error = '';
            this.message = '';
            this.loading = true;

            const token = this.$route.params.token;

            if (!token) {
                this.loading = false;
                this.tokenInvalid = true;
                this.error = 'This password reset link is invalid.';
                return;
            }

            if (!this.form.password || !this.form.confirmPassword) {
                this.loading = false;
                this.error = 'Please fill in both password fields.';
                return;
            }

            if (this.form.password !== this.form.confirmPassword) {
                this.loading = false;
                this.error = 'Passwords do not match.';
                return;
            }

            try {
                const res = await this.$axios.post('/api/auth/reset-password', {
                    token,
                    password: this.form.password,
                });

                this.message =
                    res.data?.message ||
                    'Your password has been updated. You can now sign in.';
                this.resetComplete = true;
                this.form.password = '';
                this.form.confirmPassword = '';
            } catch (e) {
                console.error(e);
                const msg = e.response?.data?.message;

                if (msg && (msg.includes('invalid') || msg.includes('expired'))) {
                    this.tokenInvalid = true;
                }

                this.error =
                    msg ||
                    'There was a problem resetting your password. Please try again.';
            } finally {
                this.loading = false;
            }
        },
        goToLogin() {
            this.$router.push('/auth/login');
        },
    },
    head() {
        return {
            title: 'Reset Password | The Assessment Library',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Reset your password to continue your journey in The Assessment Library.',
                },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.library {
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

    .login {
        text-align: center;
        padding: 70px 16px 80px 16px;

        .row {
            display: flex;
            justify-content: center;
        }

        .card {
            height: 400px;
            width: 500px;
            border-radius: 11px;
            border: 3px solid #025baf67;
            background: #fff;
            box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);
            position: relative;
            padding-top: 20px;

            .form-group {
                text-align: center;

                input {
                    border-radius: 10px;
                    background: #f9f9f9;
                    width: 400px;
                    box-shadow: 0px 18px 30px 0px rgba(68, 97, 242, 0.11);
                }
            }

            .error-msg {
                color: #b00020;
                margin: 6px 0 8px;
                font-size: 14px;
            }

            .success-msg {
                color: #0a7d00;
                margin: 6px 0 8px;
                font-size: 14px;
            }

            .signUpText {
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                margin-top: 10px;
            }

            button {
                position: absolute;
                bottom: 40px;
                left: 50%;
                transform: translateX(-50%);
                margin: 0 auto;
            }

            .token-error {
                padding: 0 40px;
            }
        }
    }
}

@media (max-width: 600px) {
    .library {
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

        .login {
            .card {
                width: 100%;
                padding: 0 16px;

                .form-group input {
                    width: 100%;
                }

                button {
                    position: static;
                    transform: none;
                    margin-top: 16px;
                }
            }
        }
    }
}
</style>