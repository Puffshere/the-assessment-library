<template>
    <section class="library">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Sign in to view your Library.</h1>
                    <h4>
                        Check out a book and continue your assessment journey!
                    </h4>
                </div>
            </div>
        </section>

        <section class="login">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <h4>Sign in to view your Library.</h4>

                        <div class="form-group">
                            <input id="email" type="email" placeholder="Enter Email" v-model="form.email" required
                                autocomplete="email" />
                        </div>

                        <div class="form-group">
                            <input id="password" type="password" placeholder="Password" v-model="form.password" required
                                autocomplete="current-password" />
                        </div>

                        <p v-if="error" class="error-msg">{{ error }}</p>

                        <p class="forgotPasswordParent">
                            <a class="forgotPassword">Forgot Password</a>
                        </p>

                        <p class="signUpText">
                            Don’t have an account? <a class="signUp hyperlink">Sign up</a>
                        </p>

                        <button @click="logIn" class="blue">Sign In</button>
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { mapActions } from 'vuex'

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            form: { email: '', password: '' },
            error: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        async logIn() {
            // TODO: replace with real auth call; for now just flag logged-in
            await this.login()
            const next = this.$route.query.next || '/library'
            this.$router.push(next)
        }
    },
    head() {
        return {
            title: 'Sign In | The Assessment Library',
            meta: [{ hid: 'description', name: 'description', content: '' }]
        }
    }
}
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
            background: linear-gradient(to right, $color-d 25%, $color-i 25%, $color-i 50%, $color-s 50%, $color-s 75%, $color-c 75%);
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
            background: #FFF;
            box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.25);
            position: relative;

            .form-group {
                text-align: center;

                input {
                    border-radius: 10px;
                    background: #F9F9F9;
                    width: 400px;
                    box-shadow: 0px 18px 30px 0px rgba(68, 97, 242, 0.11);
                }
            }

            .forgotPasswordParent {
                text-align: right;
                margin-top: -10px;
                margin-right: 60px;
            }

            .forgotPassword,
            .signUp {
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                text-decoration-line: underline;
                cursor: pointer;
            }

            .signUpText {
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
            }
        }

        button {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            margin: 0 auto;
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

                .form-group input {
                    width: 100%;
                }
            }
        }
    }
}
</style>