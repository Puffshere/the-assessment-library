<template>
    <section class="library">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />

            <div class="container">
                <div class="row">
                    <h1>Welcome to Your Assessment Library!</h1>
                    <h4>Choose a book to get started on your Assessment Journey!</h4>
                </div>
            </div>
        </section>

        <section class="stacks">
            <div class="container">
                <div class="backpanel" aria-hidden="true"></div>

                <!-- ADULT SHELF -->
                <div class="shelf"></div>
                <div class="row">
                    <h4>Adult Shelf</h4>

                    <div class="col-6" style="margin-left: 70px;">
                        <!-- Jessica's First Job -->
                        <img class="darkBlue" src="~assets/library/dark-blue-book.webp" alt="image of a dark blue book"
                            :aria-disabled="checkingOut" :class="{ disabled: checkingOut }"
                            @click="checkoutBook(books.jessica)" />
                        <br />
                        <p class="title">Jessica's First Job</p>
                        <p>
                            Jessica’s first job after college. Choose her moves in onboarding, meetings, and projects.
                            Discover your DISC—drive, inspire, support, or perfect.
                        </p>
                    </div>

                    <div class="col-6" style="margin-left: -70px;">
                        <!-- Roger's New Business -->
                        <img class="red" src="~assets/library/red-book.webp" alt="image of a red book"
                            :aria-disabled="checkingOut" :class="{ disabled: checkingOut }"
                            @click="checkoutBook(books.roger)" />
                        <br />
                        <p class="title redText">Roger's New Business</p>
                        <p>
                            Join 9-year-old Shane for a fun day of games and new friends. Your choices on the playground
                            uncover how you like to play, include, plan, and lead.
                        </p>
                    </div>
                </div>

                <!-- KIDS SHELF -->
                <div class="shelf"></div>
                <div class="row">
                    <h4>Kids Shelf</h4>

                    <div class="col-6" style="margin-left: 70px;">
                        <!-- Allie's Professional Journey -->
                        <img class="pink" src="~assets/library/pink-book.webp" alt="image of a pink book"
                            :aria-disabled="checkingOut" :class="{ disabled: checkingOut }"
                            @click="checkoutBook(books.allie)" />
                        <br />
                        <p class="title">Allie's Professional Journey</p>
                        <p>
                            Navigate Allie’s first months at a fast-paced company. Your choices in meetings, projects,
                            and teamwork reveal your natural workplace DISC style.
                        </p>
                    </div>

                    <div class="col-6" style="margin-left: -70px;">
                        <!-- Shane's Day at the Park -->
                        <img class="blue" src="~assets/library/blue-book.webp" alt="image of a blue book"
                            :aria-disabled="checkingOut" :class="{ disabled: checkingOut }"
                            @click="checkoutBook(books.shane)" />
                        <br />
                        <p class="title blueText">Shane's Day at the Park</p>
                        <p>
                            Join 9-year-old Shane for a fun day of games and new friends. Your choices on the playground
                            uncover how you like to play, include, plan, and lead.
                        </p>
                    </div>
                </div>

                <div class="shelf"></div>
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
    middleware: ['auth'],

    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            checkingOut: false,
            books: {
                jessica: {
                    id: 'jessica',
                    title: "Jessica's First Job",
                    slug: 'jessicas-first-job',
                    assessmentId: '69258aa1e9badcb4aafc2dcd'
                },
                roger: {
                    id: 'roger',
                    title: "Roger's New Business",
                    slug: 'rogers-new-business',
                    assessmentId: '69258ab0e9badcb4aafc2dcf'
                },
                allie: {
                    id: 'allie',
                    title: "Allie's Professional Journey",
                    slug: 'allies-professional-journey',
                    assessmentId: '69258abde9badcb4aafc2dd1'
                },
                shane: {
                    id: 'shane',
                    title: "Shane's Day at the Park",
                    slug: 'shanes-day-at-the-park',
                    assessmentId: '6925f33de9badcb4aafc2df9'
                }
            }
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.loggedIn
        },
        currentUser() {
            return this.$store.state.user
        }
    },
    methods: {
        goDashboard() {
            this.$router.push('/dashboard')
        },
        async checkoutBook(book) {
            if (!book || !book.assessmentId) {
                console.error('Book is missing assessmentId:', book)
                return
            }

            if (!this.loggedIn) {
                this.$router.push('/auth/login')
                return
            }

            const confirmed = window.confirm(
                `Spend 1 credit to start "${book.title}"?`
            )
            if (!confirmed) return

            if (this.checkingOut) return
            this.checkingOut = true

            try {
                const token = this.$store.state.token

                const res = await this.$axios.$post(
                    '/api/checkout',
                    {
                        assessmentId: book.assessmentId
                    },
                    token
                        ? {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                        : {}
                )
                if (res.user) {
                    this.$store.commit('SET_USER', {
                        ...(this.currentUser || {}),
                        ...res.user
                    })
                }
                const sessionId =
                    res.sessionId ||
                        res.sessionId === 0
                        ? res.sessionId
                        : res.session?._id || res.session?.id

                if (!sessionId) {
                    console.error('No sessionId returned from checkout:', res)
                    alert(
                        'Assessment started but no session ID was returned. Please contact support.'
                    )
                    return
                }
                this.$router.push(
                    `/dashboard`
                )
            } catch (err) {
                const code = err?.response?.data?.code
                const msg = err?.response?.data?.message

                if (code === 'INSUFFICIENT_CREDITS') {
                    alert(
                        'You do not have enough credits to start this assessment. Please purchase more credits from your Dashboard.'
                    )
                } else {
                    console.error('Checkout error:', err)
                    alert(msg || 'Error starting assessment. Please try again.')
                }
            } finally {
                this.checkingOut = false
            }
        }
    },
    head() {
        return {
            title: 'Your Library | The Assessment Library',
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

        .teal {
            margin-top: 20px;
            margin-right: 20px;
        }

        .logo {
            width: 300px;
            position: absolute;
            left: 40px;
            top: -40px;
        }

        button {
            position: absolute;
            right: 20px;
            top: 20px;
        }

        h1 {
            margin-bottom: 10px;
        }

        h4 {
            margin-top: -20px;
            font-weight: 400;
            font-family: $nunito-family;
        }
    }

    .stacks {
        text-align: center;
        padding: 40px 16px 80px 16px;
        color: #12304d;

        .container {
            position: relative;

            .backpanel {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 60px;
                right: 60px;
                background-color: rgba(161, 139, 114, 0.527);
                z-index: 0;
                border-radius: 3px;
            }

            &::before,
            &::after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                width: 20px;
                background-color: rgb(100, 55, 13);
                z-index: 2;
                pointer-events: none;
                border-radius: 3px;
                box-shadow: 5px 5px 10px #412604;
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
            width: 155px;
            padding: 5px 5px 5px 10px;
            border: 1px solid #38240a;
            box-shadow: 5px 5px 10px #412604;
        }

        .shelf {
            position: relative;
            z-index: 1;
            height: 20px;
            margin: 30px 20px;
            background-color: rgb(100, 55, 13);
            border-radius: 3px;
            box-shadow: 5px 5px 10px #412604;
        }

        .col-6 {
            text-align: center;

            .darkBlue,
            .pink,
            .blue,
            .red {
                cursor: pointer;
                transition: transform 0.15s ease, box-shadow 0.15s ease, border-radius 0.15s ease;
                border-radius: 15px;
            }

            .darkBlue {
                margin-top: 40px;
                height: 170px;
                width: auto;
            }

            .pink {
                margin-top: 40px;
                height: 170px;
                width: auto;
            }

            .blue {
                width: 200px;
                margin-top: 60px;
            }

            .red {
                width: 150px;
                margin-top: 40px;
            }

            .darkBlue:hover,
            .pink:hover,
            .blue:hover,
            .red:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
            }

            .disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none !important;
                box-shadow: none !important;
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
    .library {
        .header {
            padding: 40px 16px 30px 16px;

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

            .teal {
                width: 120px;
                margin-top: 0;
                margin-right: 0;
            }
        }

        .stacks {
            .container {
                .backpanel {
                    left: 6px;
                    right: 6px;
                }

                &::before {
                    left: 6px;
                }

                &::after {
                    right: 6px;
                }

                h4 {
                    text-align: left;
                    margin-top: -22px;
                    margin-bottom: -30px;
                    margin-left: 30px;
                    background-color: rgba(112, 71, 9, 0.185);
                    position: relative;
                    z-index: 1;
                    width: 155px;
                    padding: 5px 5px 5px 10px;
                    border: 1px solid #38240a;
                    box-shadow: 5px 5px 10px #412604;
                }
            }

            .shelf {
                margin: 24px 0px;
            }

            h1 {
                margin-left: 16px;
            }

            .col-6 {
                margin-left: 0px !important;
            }
        }
    }
}
</style>