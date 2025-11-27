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

                    <div
                        v-for="book in adultBooks"
                        :key="book._id || book.slug"
                        :class="['col-6', book.positionClass]"
                    >
                        <img
                            :class="[book.imgClass, { disabled: isBookDisabled(book) }]"
                            :src="book.imgSrc"
                            :alt="`image of a ${book.imgClass} book`"
                            :aria-disabled="isBookDisabled(book)"
                            @click="openBookModal(book)"
                        />
                        <br />
                        <p class="title" :class="book.titleClass">{{ book.title }}</p>
                        <p>{{ book.description }}</p>
                    </div>
                </div>

                <!-- KIDS SHELF -->
                <div class="shelf"></div>
                <div class="row">
                    <h4>Kids Shelf</h4>

                    <div
                        v-for="book in kidsBooks"
                        :key="book._id || book.slug"
                        :class="['col-6', book.positionClass]"
                    >
                        <img
                            :class="[book.imgClass, { disabled: isBookDisabled(book) }]"
                            :src="book.imgSrc"
                            :alt="`image of a ${book.imgClass} book`"
                            :aria-disabled="isBookDisabled(book)"
                            @click="openBookModal(book)"
                        />
                        <br />
                        <p class="title" :class="book.titleClass">{{ book.title }}</p>
                        <p>{{ book.description }}</p>
                    </div>
                </div>

                <div class="shelf"></div>

                <div v-if="loadingAssessments" class="status">Loading books…</div>
                <div v-else-if="loadError" class="status error">{{ loadError }}</div>
            </div>
        </section>

        <!-- BOOK MODAL -->
        <div v-if="showBookModal && selectedBook" class="book-modal-backdrop" @click.self="closeBookModal">
            <div class="book-modal">
                <div class="container">
                    <button type="button" class="red" @click="closeBookModal" aria-label="Close">
                        close
                    </button>
                    <br />
                    <h4>{{ selectedBook.title }}</h4>
                    <hr />
                    <div class="row">
                        <div class="col-6">
                            <p>
                                {{ selectedBook.description }}
                            </p>
                        </div>
                        <div class="col-6">
                            <p style="font-style: italic; color: #e93d2f;">
                                It is very important to answer the question as if you are the character in the story to
                                get the most accurate assessment.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 book-modal-meta">
                            <div class="book-modal-cost">
                                <span class="label">Assessment Cost:</span>
                                <span class="value">
                                    {{ selectedBook.creditsCost }}
                                    credit<span v-if="selectedBook.creditsCost !== 1">s</span>
                                </span>
                            </div>
                            <div class="book-modal-balance">
                                <span class="label">Your Available Credits:</span>
                                <span class="value">{{ creditsBalance }}</span>
                            </div>
                        </div>
                        <div class="col-6 book-modal-meta">
                            <div class="book-modal-estimated-time">
                                <span class="label">ESTIMATED COMPLETION:</span>
                                <span class="value">{{ selectedBook.estimatedCompletion }} mins</span>
                            </div>
                            <div class="book-modal-words">
                                <span class="label">LENGTH:</span>
                                <span class="value">{{ selectedBook.wordsLength }} words</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="canAffordSelected" class="book-modal-note success">
                        You have enough credits to start this assessment.
                    </div>
                    <div v-else class="book-modal-note warning">
                        You don’t have enough credits to start this assessment.
                        You need {{ selectedBook.creditsCost }} and you currently have {{ creditsBalance }}.
                    </div>

                    <div class="button-container">
                        <button
                            v-if="canAffordSelected"
                            class="blue"
                            type="button"
                            :disabled="checkingOut"
                            @click="confirmPurchase"
                        >
                            <span v-if="!checkingOut">
                                Use {{ selectedBook.creditsCost }}
                                credit<span v-if="selectedBook.creditsCost !== 1">s</span> &amp; Start
                            </span>
                            <span v-else>Starting assessment…</span>
                        </button>

                        <button v-else class="blue" type="button" @click="goToBuyCredits">
                            Purchase More Credits
                        </button>

                        <button class="light" type="button" @click="closeBookModal">
                            Not Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

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
            showBookModal: false,
            selectedBook: null,

            loadingAssessments: false,
            loadError: null,
            libraryBooks: []
        }
    },

    computed: {
        loggedIn() {
            return this.$store.state.loggedIn
        },
        currentUser() {
            return this.$store.state.user
        },
        creditsBalance() {
            return (this.currentUser && this.currentUser.creditsBalance) || 0
        },
        canAffordSelected() {
            if (!this.selectedBook) return false
            return this.canCheckout(this.selectedBook)
        },
        adultBooks() {
            return this.libraryBooks.filter(b => b.shelf === 'Adult')
        },
        kidsBooks() {
            return this.libraryBooks.filter(b => b.shelf === 'Kids')
        }
    },

    async mounted() {
        if (this.loggedIn) {
            try {
                const res = await this.$axios.$get('/api/dashboard')
                this.$store.commit('SET_USER', {
                    ...(this.currentUser || {}),
                    ...res.user
                })
            } catch (e) {
                console.error('Failed to refresh user on library page:', e)
            }
        }

        this.fetchAssessments()
    },

    methods: {
        async fetchAssessments() {
            this.loadingAssessments = true
            this.loadError = null

            try {
                const res = await this.$axios.$get('/api/assessments', {
                    params: { forLibrary: true }
                })

                const assessments = (res && res.assessments) || []

                const metaBySlug = {
                    'jessicas-first-job': {
                        shelf: 'Adult',
                        imgClass: 'darkBlue',
                        imgSrc: require('~/assets/library/dark-blue-book.webp'),
                        positionClass: 'col-left',
                        titleClass: ''
                    },
                    'rogers-new-business': {
                        shelf: 'Adult',
                        imgClass: 'red',
                        imgSrc: require('~/assets/library/red-book.webp'),
                        positionClass: 'col-right',
                        titleClass: 'redText'
                    },
                    'allies-professional-journey': {
                        shelf: 'Kids',
                        imgClass: 'pink',
                        imgSrc: require('~/assets/library/pink-book.webp'),
                        positionClass: 'col-left',
                        titleClass: ''
                    },
                    'shanes-day-at-the-park': {
                        shelf: 'Kids',
                        imgClass: 'blue',
                        imgSrc: require('~/assets/library/blue-book.webp'),
                        positionClass: 'col-right',
                        titleClass: 'blueText'
                    }
                }

                const order = [
                    'jessicas-first-job',
                    'rogers-new-business',
                    'allies-professional-journey',
                    'shanes-day-at-the-park'
                ]

                this.libraryBooks = assessments
                    .filter(a => metaBySlug[a.slug])
                    .map(a => ({
                        ...a,
                        ...metaBySlug[a.slug]
                    }))
                    .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
            } catch (err) {
                console.error('Failed to load assessments for library:', err)
                this.loadError = 'Failed to load assessments.'
            } finally {
                this.loadingAssessments = false
            }
        },

        goDashboard() {
            this.$router.push('/dashboard')
        },
        canCheckout(book) {
            const cost = book.creditsCost || 1
            return this.creditsBalance >= cost
        },
        isBookDisabled(book) {
            if (this.checkingOut) return true
            if (!this.loggedIn) return false
            return !this.canCheckout(book)
        },
        openBookModal(book) {
            if (!book) return
            this.selectedBook = book
            this.showBookModal = true
        },
        closeBookModal() {
            this.showBookModal = false
            this.selectedBook = null
            this.checkingOut = false
        },

        async confirmPurchase() {
            if (!this.selectedBook || this.checkingOut) return

            const book = this.selectedBook

            if (!book._id) {
                console.error('Selected book is missing _id / assessmentId:', book)
                return
            }

            if (!this.canCheckout(book)) return

            this.checkingOut = true

            try {
                const token = this.$store.state.token

                const res = await this.$axios.$post(
                    '/api/checkout',
                    { assessmentId: book._id },
                    token
                        ? {
                              headers: { Authorization: `Bearer ${token}` }
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
                    (res.sessionId === 0
                        ? res.sessionId
                        : res.session?._id || res.session?.id)

                if (!sessionId) {
                    console.error('No sessionId returned from checkout:', res)
                    alert(
                        'Assessment started but no session ID was returned. Please contact support.'
                    )
                    return
                }

                this.closeBookModal()
                this.$router.push(`/dashboard`)
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
        },

        goToBuyCredits() {
            this.closeBookModal()
            this.$router.push('/dashboard')
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

        button {
            position: absolute;
            right: 20px;
            top: 20px;
        }

        &:after {
            background: linear-gradient(
                to right,
                $color-d 25%,
                $color-i 25%,
                $color-i 50%,
                $color-s 50%,
                $color-s 75%,
                $color-c 75%
            );
            position: absolute;
            content: '';
            height: 10px;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 2;
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
                content: '';
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
                transition:
                    transform 0.15s ease,
                    box-shadow 0.15s ease,
                    border-radius 0.15s ease,
                    filter 0.15s ease,
                    opacity 0.15s ease;
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
                opacity: 0.5;
                filter: grayscale(90%);
                cursor: pointer;
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

    .book-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;

        .book-modal {
            position: relative;
            max-width: 750px;
            width: 100%;
            background: #ffffff;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
            text-align: left;
        }

        .red {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 90px;
        }

        h4 {
            margin-top: 0px;
            margin-bottom: 0px;
            font-style: italic;
        }

        .row {
            gap: 16px;
            margin-bottom: 12px;

            .label {
                display: block;
                font-size: 12px;
                color: #666;
            }

            .value {
                font-weight: 600;
                font-size: 15px;
                color: #12304d;
            }
        }

        .book-modal-note {
            font-size: 13px;

            &.success {
                color: #0dab49;
            }

            &.warning {
                color: #c0392b;
            }
        }

        .book-modal-meta {
            display: flex;
            gap: 16px;

            .book-modal-estimated-time,
            .book-modal-words {
                flex: 1;
                min-width: 0;
            }
        }

        .button-container {
            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            button {
                min-width: 150px;
            }
        }
    }
}

.col-left {
    margin-left: 70px;
}
.col-right {
    margin-left: -70px;
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
                margin-top: 10px;
            }

            .teal {
                width: 120px;
                margin-top: 0;
                margin-right: 0;
            }

            &:after {
                background: linear-gradient(
                    to right,
                    $color-d 25%,
                    $color-i 25%,
                    $color-i 50%,
                    $color-s 50%,
                    $color-s 75%,
                    $color-c 75%
                );
                position: absolute;
                content: '';
                height: 10px;
                right: 0;
                left: 0;
                bottom: 0;
                z-index: 2;
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

        .book-modal-backdrop {
            margin-top: 30px;

            .book-modal {
                margin: 0 16px;
                padding: 20px 16px 16px;
            }

            h4 {
                padding-top: 30px;
            }
        }
    }
}
</style>