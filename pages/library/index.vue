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
                <div class="row shelf-row">
                    <h4>Adult Shelf</h4>

                    <div v-for="book in adultBooks" :key="book._id || book.slug" class="col-6 book-card">
                        <div class="hero-box" :class="{ disabled: isBookDisabled(book) }" @click="openBookModal(book)">
                            <span class="badge badge--adult">Coming Soon!</span>

                            <div class="hero-box-inner" tabindex="0">
                                <img v-if="book.heroImageUrl" :src="book.heroImageUrl" :alt="`Cover for ${book.title}`"
                                    class="hero-img" :class="{ 'hero-img--loaded': heroLoaded[book._id || book.slug] }"
                                    loading="lazy" @load="markHeroLoaded(book._id || book.slug)" />
                            </div>
                        </div>

                        <p class="title">{{ book.title }}</p>
                        <p>{{ book.description }}</p>
                    </div>
                </div>

                <!-- KIDS SHELF -->
                <div class="shelf"></div>
                <div class="row shelf-row">
                    <h4>Kids Shelf</h4>

                    <div v-for="book in kidsBooks" :key="(book._id || book.slug) + '-kids'" class="col-6 book-card">
                        <div class="hero-box" :class="{ disabled: isBookDisabled(book) }" @click="openBookModal(book)">
                            <span class="badge badge--kids">Coming Soon!</span>

                            <div class="hero-box-inner" tabindex="0">
                                <img v-if="book.heroImageUrl" :src="book.heroImageUrl" :alt="`Cover for ${book.title}`"
                                    class="hero-img" :class="{ 'hero-img--loaded': heroLoaded[book._id || book.slug] }"
                                    loading="lazy" @load="markHeroLoaded(book._id || book.slug)" />
                            </div>
                        </div>

                        <p class="title">{{ book.title }}</p>
                        <p>{{ book.description }}</p>
                    </div>
                </div>

                <div class="shelf"></div>

                <div v-if="loadingAssessments" class="status">Stacking shelves…</div>
                <div v-else-if="loadError" class="status error">{{ loadError }}</div>

                <!-- Safety message if the API really returns nothing -->
                <div v-else-if="!adultBooks.length && !kidsBooks.length" class="status">
                    No assessments are available in your library yet.
                </div>
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
                        <button v-if="canAffordSelected" class="blue" type="button" :disabled="checkingOut"
                            @click="confirmPurchase">
                            <span v-if="!checkingOut">
                                Use {{ selectedBook.creditsCost }}
                                credit<span v-if="selectedBook.creditsCost !== 1">s</span> &amp; Start
                            </span>
                            <span v-else>Starting assessment…</span>
                        </button>

                        <button v-else class="blue" type="button" @click="buyCredits">
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
            libraryBooks: [],

            heroLoaded: {}
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
            return (this.libraryBooks || []).filter(b => {
                const shelf = (b.category && b.category.shelf) || ''
                return shelf.toLowerCase() === 'adult'
            })
        },

        kidsBooks() {
            return (this.libraryBooks || []).filter(b => {
                const shelf = (b.category && b.category.shelf) || ''
                return shelf.toLowerCase() === 'kids'
            })
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

                console.log('Library assessments:', assessments)

                this.libraryBooks = assessments
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
        async buyCredits() {
            try {
                const token = this.$store.state.token

                const res = await this.$axios.$post(
                    '/api/credits/add-one',
                    {},
                    token
                        ? { headers: { Authorization: `Bearer ${token}` } }
                        : {}
                )

                if (res && typeof res.creditsBalance === 'number') {
                    this.$store.commit('SET_USER', {
                        ...(this.currentUser || {}),
                        creditsBalance: res.creditsBalance
                    })
                } else {
                    console.warn('Unexpected response from /api/credits/add-one:', res)
                }
            } catch (err) {
                console.error('Error adding credit from modal:', err)
                alert('Could not add a test credit right now. Please try again.')
            }
        },
        markHeroLoaded(id) {
            if (!id) return
            this.$set(this.heroLoaded, id, true)
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

        button {
            position: absolute;
            right: 20px;
            top: 20px;
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
            margin: 30px 10px;
            background-color: rgb(100, 55, 13);
            border-radius: 3px;
            box-shadow: 5px 5px 10px #412604;
        }

        .shelf-row {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            gap: 24px;
            max-width: calc(100% - 120px);
            margin: 0 auto;
            box-sizing: border-box;
        }

        .shelf-row>h4 {
            flex: 0 0 100%;
            margin-left: 0px;
        }

        .book-card {
            text-align: center;
            flex: 1 1 240px;
            max-width: 260px;
            margin: 0 auto;
            margin-left: 40px;

            .hero-box {
                position: relative;
                margin: 30px auto 0;
                cursor: pointer;
                perspective: 900px;

                background: linear-gradient(135deg,
                        $color-d 0%,
                        $color-i 25%,
                        $color-s 50%,
                        $color-c 100%);
                padding: 2px;
                border-radius: 16px;

                transition: transform 0.28s ease, box-shadow 0.25s ease;

                .hero-box-inner {
                    border-radius: 14px;
                    overflow: hidden;
                    background: #000;
                    width: 100%;
                    height: 160px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    transform-origin: center bottom;

                    &:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    }

                    &:active {
                        transform: none;
                    }

                    &:focus {
                        outline: none;

                        transform:
                            translateY(-18px) translateZ(40px) rotateX(6deg);

                        box-shadow:
                            0 18px 35px rgba(0, 0, 0, 0.5);

                        z-index: 5;
                    }
                }

                .hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: blur(6px);
                    opacity: 0.7;

                }

                .hero-img--loaded {
                    filter: blur(0);
                    opacity: 1;
                }

                &:hover {
                    transform: translateY(-8px) scale(1.02) rotateZ(-0.4deg);
                    box-shadow: 8px 10px 20px rgba(0, 0, 0, 0.35);
                }

                &.disabled {
                    cursor: not-allowed;

                    .hero-box-inner {
                        box-shadow: none;
                    }

                    .hero-img {
                        filter: grayscale(80%);
                        opacity: 0.5;
                    }
                }

                .badge {
                    position: absolute;
                    top: 8px;
                    left: 12px;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 4px 8px;
                    border-radius: 999px;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                }

                .badge--adult {
                    background: rgba($color-d, 0.9);
                }

                .badge--kids {
                    background: rgba($color-i, 0.9);
                }
            }

            .title {
                margin-top: 14px;
                font-style: italic;
                font-weight: 700;
            }

            p {
                padding: 0 10px;
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
                    margin-bottom: 0px;
                    margin-left: 0px;
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

            .shelf-row {
                padding: 0 12px 0px;
                gap: 16px;
            }

            .book-card {
                flex: 1 0 100%;
                max-width: 100%;
                margin-left: 0;
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