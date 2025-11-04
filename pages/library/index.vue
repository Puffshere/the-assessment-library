<template>
    <section class="library">

        <section class="header">
            <button @click="signOut" class="teal">Sign Out</button>
            <div class="container">
                <div class="row">
                    <h1>
                        Welcome your your Assessment Library!
                    </h1>
                    <h4 v-if="loggedIn === true">
                        Choose a book to get started on your Assessment Journey!
                    </h4>
                    <h4 v-else>
                        Log in to check out a book and continue your assessment journey.
                    </h4>
                </div>
            </div>
        </section>

        <section v-if="loggedIn === true" class="stacks">
            <div class="container">
                <div class="shelf"></div>
                <div class="row">
                    <h4>
                        Adult Shelf
                    </h4>
                    <div class="col-6" style="margin-left: 70px;">
                        <a href="/library/jessicas-first-job"><img class="darkBlue"
                                src="~assets/library/dark-blue-book.jpeg" alt="image of a dark blue book"></a>
                        <br />
                        <p class="title">
                            Jessica's First Job
                        </p>
                        <p>
                            Jessica’s first job after college.
                            Choose her moves in onboarding, meetings, and projects.
                            Discover your DISC—drive, inspire, support, or perfect.
                        </p>
                    </div>
                    <div class="col-6" style="margin-left: -70px;">
                        <a href="/library/shanes-day-at-the-park"><img class="red" src="~assets/library/red-book.jpg"
                                alt="image of a red book"></a>
                        <br />
                        <p class="title redText">
                            Roger's New Business
                        </p>
                        <p>
                            Join 9-year-old Shane for a fun day of games and new friends. Your choices on the playground
                            uncover how you like to play, include, plan, and lead.
                        </p>
                    </div>
                </div>
                <div class="shelf"></div>
                <div class="row">
                    <h4>
                        Kids Shelf
                    </h4>
                    <div class="col-6" style="margin-left: 70px;">
                        <a href="/library/allies-professional-journey"><img class="pink"
                                src="~assets/library/pink-book.webp" alt="image of a pink book"></a>
                        <br />
                        <p class="title">
                            Allie's Professional Journey
                        </p>
                        <p>
                            Navigate Allie’s first months at a fast-paced company. Your choices in meetings, projects,
                            and teamwork reveal your natural workplace DISC style.
                        </p>
                    </div>
                    <div class="col-6" style="margin-left: -70px;">
                        <a href="/library/shanes-day-at-the-park"><img class="blue" src="~assets/library/blue-book.webp"
                                alt="image of a blue book"></a>
                        <br />
                        <p class="title blueText">
                            Shane's Day at the Park
                        </p>
                        <p>
                            Join 9-year-old Shane for a fun day of games and new friends. Your choices on the playground
                            uncover how you like to play, include, plan, and lead.
                        </p>
                    </div>
                </div>
                <div class="shelf"></div>
            </div>
        </section>

        <section v-else class="login">
            <div class="container">
                <div class="row">
                    <div class="card">
                        <h4>
                            Log in to view your Library.
                        </h4>

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
                            Don’t have an account?
                            <a class="signUp hyperlink">Sign up</a>
                        </p>

                        <button @click="logIn" class="blue">Log In</button>
                    </div>
                </div>
            </div>
        </section>

    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
    },
    head() {
        return {
            title: '',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                    type: 'application/ld+json'
                }
            ]
        }
    },
    data() {
        return {
            loggedIn: false,
            form: {
                email: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        signOut() {
            this.loggedIn = false;
        },
        logIn() {
            this.loggedIn = true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.library {

    .header {
        text-align: center;
        padding: 40px 16px 40px 16px;
        color: #213C85;
        background-color: rgba(211, 211, 211, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #213c858e;

        button {
            position: absolute;
            right: 20px;
            top: 20px;
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
        color: #213C85;

        .row {
            display: flex;
            justify-content: center;
        }

        .card {
            height: 400px;
            width: 500px;
            border-radius: 11px;
            border: 1px solid #E0AD2B;
            background: #FFF;
            box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
                color: #213C85;
                font-family: Inter;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-decoration-line: underline;
                text-decoration-style: solid;
                text-decoration-skip-ink: auto;
                text-decoration-thickness: auto;
                text-underline-offset: auto;
                text-underline-position: from-font;
                cursor: pointer;
            }

            .signUpText {
                color: #213C85;
                font-family: Inter;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
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

    .stacks {
        text-align: center;
        padding: 20px 16px 90px 16px;
        color: #213C85;

        .container {
            position: relative;

            /* vertical posts */
            &::before,
            &::after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                width: 20px;
                background-color: rgb(100, 55, 13);
                z-index: 0;
                pointer-events: none;
                border-radius: 3px;
            }

            &::before {
                left: 40px;
            }

            &::after {
                right: 40px;
            }
        }

        h4 {
            text-align: left;
            margin-top: -30px;
            margin-bottom: -30px;
            margin-left: 60px;
            background-color: rgba(112, 71, 9, 0.185);
            position: relative;
            z-index: 1;
            width: 150px;
            padding: 5px;
        }

        .shelf {
            position: relative;
            z-index: 1;
            height: 20px;
            margin: 30px 20px;
            background-color: rgb(100, 55, 13);
            border-radius: 3px;
            box-shadow: 5px 5px 10px #412604;;
        }

        .col-6 {
            text-align: center;


            .darkBlue {
                margin-top: 40px;
                height: 170px;
                width: auto;
                cursor: pointer;
            }

            .pink {
                margin-top: 40px;
                height: 170px;
                width: auto;
                cursor: pointer;
            }

            .blue {
                width: 200px;
                margin-top: 60px;
                cursor: pointer;
            }

            .red {
                width: 150px;
                margin-top: 40px;
                cursor: pointer;
            }

            .title {
                font-style: italic;
                font-weight: 700;
            }

            .redText {
                margin-top: 16px;
            }

            .blueText {
                margin-top: 25px;
            }

            p {
                padding: 0 50px;
            }
        }
    }
}

@media (max-width: 600px) {
    .stacks {
        .container::before {
            left: 16px;
        }

        .stacks .container::after {
            right: 16px;
        }

        .shelf {
            margin: 24px 16px;
        }

        h1 {
            margin-left: 16px;
        }

        .col-6 {
            margin-left: 0px !important;
        }
    }
}
</style>