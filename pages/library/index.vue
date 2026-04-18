<template>
    <section class="library">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <div class="container">
                <div class="row">
                    <h1>Welcome to <span style="color: #623700; text-shadow: 1px 1px 1px black;">Your Assessment Library!</span></h1>
                    <h4>Choose a book to get started on your Assessment Journey!</h4>
                </div>
            </div>
        </section>

        <!-- Stacks wrapper -->
        <section class="stacks">

                <transition name="stacks-fade" mode="out-in" appear>
                    <div :key="showShelves ? 'shelves' : 'exterior'">
                        <!-- EXTERIOR -->
                        <div v-if="!showShelves" class="stacks-loading" aria-live="polite">
                            <div class="status">Stacking shelves…</div>
                            <img src="images/library.webp" alt="Library exterior" class="library-exterior" />
                        </div>

                        <!-- SHELVES -->
                        <div v-else class="stacks-shelves">

                            <!-- ADULT SECTION HEADER - outside container -->
                            <div v-if="!kidsViewActive && allAdultShelves.length" class="section-shelf-wrap">
                                <div class="shelf section-shelf">
                                    <div class="section-shelf-shimmer"></div>
                                    <span class="section-divider-label">Adult</span>
                                </div>
                            </div>

                            <div class="container">
                                <div class="backpanel" aria-hidden="true"></div>

                                <div v-if="loadError" class="status error">{{ loadError }}</div>
                                <div v-else-if="!allAdultShelves.length && !allKidsShelves.length && !topRatedAssessments.length" class="status">
                                    No assessments are available in your library yet.
                                </div>

                                <!-- TOP RATED SHELF -->
                                <div v-if="topRatedAssessments.length && !kidsViewActive">
                                    <div class="shelf top-rated-shelf">
                                        <span class="top-rated-label">★ Top Rated</span>
                                    </div>
                                    <div class="row shelf-row">
                                        <div class="scroll-track">
                                            <div v-for="book in topRatedAssessments" :key="'tr-' + book._id" class="book-card" @click="openBookModal(book)">
                                                <div class="book-rating">
                                                    <span v-for="n in 5" :key="'star-' + n" class="rating-star" :class="{ filled: n <= Math.round(book.ratingAvg) }">★</span>
                                                </div>
                                                <div class="hero-box" :class="{ disabled: isBookDisabled(book) }">
                                                    <div class="hero-box-inner" tabindex="0">
                                                        <img v-if="book.heroImageUrl && !book.heroImageUrl.includes('default-cover')" :src="book.heroImageUrl" :alt="`Cover for ${book.title}`" class="hero-img" :class="{ 'hero-img--loaded': heroLoaded[book._id || book.slug] }" loading="lazy" @load="markHeroLoaded(book._id || book.slug)" />
                                                        <div v-else class="hero-placeholder"><span>{{ book.title }}</span></div>
                                                    </div>
                                                </div>
                                                <p class="title">{{ book.title }}</p>
                                                <p class="description">{{ book.description }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- ADULT SECTION -->
                                <div v-if="!kidsViewActive && allAdultShelves.length">
                                    <div v-for="shelf in allAdultShelves" :key="shelf._id">
                                        <div class="shelf"></div>
                                        <div class="row shelf-row">
                                            <h4>{{ shelf.name }}</h4>
                                            <div class="scroll-track">
                                                <div v-for="book in shelf.assessments" :key="book._id || book.slug" class="book-card" @click="openBookModal(book)">
                                                    <div class="hero-box" :class="{ disabled: isBookDisabled(book) }">
                                                        <div class="hero-box-inner" tabindex="0">
                                                            <img v-if="book.heroImageUrl && !book.heroImageUrl.includes('default-cover')" :src="book.heroImageUrl" :alt="`Cover for ${book.title}`" class="hero-img" :class="{ 'hero-img--loaded': heroLoaded[book._id || book.slug] }" loading="lazy" @load="markHeroLoaded(book._id || book.slug)" />
                                                            <div v-else class="hero-placeholder"><span>{{ book.title }}</span></div>
                                                        </div>
                                                    </div>
                                                    <p class="title">{{ book.title }}</p>
                                                    <p class="description">{{ book.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shelf"></div>
                                </div>

                            </div>

                            <!-- KIDS SECTION HEADER - outside container -->
                            <div v-if="allKidsShelves.length" class="section-shelf-wrap">
                                <div class="shelf section-shelf">
                                    <div class="section-shelf-shimmer"></div>
                                    <span class="section-divider-label">Kids</span>
                                </div>
                            </div>

                            <div v-if="allKidsShelves.length" class="container">
                                <div class="backpanel" aria-hidden="true"></div>
                                <!-- KIDS SECTION -->
                                <div v-for="shelf in allKidsShelves" :key="shelf._id">
                                    <div class="shelf"></div>
                                    <div class="row shelf-row">
                                        <h4>{{ shelf.name }}</h4>
                                        <div class="scroll-track">
                                            <div v-for="book in shelf.assessments" :key="book._id || book.slug" class="book-card" @click="openBookModal(book)">
                                                <div class="hero-box" :class="{ disabled: isBookDisabled(book) }">
                                                    <div class="hero-box-inner" tabindex="0">
                                                        <img v-if="book.heroImageUrl && !book.heroImageUrl.includes('default-cover')" :src="book.heroImageUrl" :alt="`Cover for ${book.title}`" class="hero-img" :class="{ 'hero-img--loaded': heroLoaded[book._id || book.slug] }" loading="lazy" @load="markHeroLoaded(book._id || book.slug)" />
                                                        <div v-else class="hero-placeholder"><span>{{ book.title }}</span></div>
                                                    </div>
                                                </div>
                                                <p class="title">{{ book.title }}</p>
                                                <p class="description">{{ book.description }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="shelf"></div>
                            </div>

                        </div>
                    </div>
                </transition>

        </section>

        <!-- BOOK MODAL (never during exterior/loading) -->
        <div v-if="showBookModal && selectedBook && showShelves" class="book-modal-backdrop"
            style="padding-top: 114px !important;"
            @click.self="closeBookModal">
            <div class="book-modal">
                <button class="modal-x-close" @click="closeBookModal" aria-label="Close">&times;</button>
                <div class="container">
                    <h4>{{ selectedBook.title }}</h4>
                    <div class="modal-rating">
                        <span v-for="n in 5" :key="'modal-star-' + n" class="rating-star" :class="{ filled: n <= Math.round(selectedBook.ratingAvg || 0) }">★</span>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <p>
                                {{ selectedBook.description }}
                            </p>
                        </div>
                        <div class="col-6">
                            <p style="font-style: italic; color: #e93d2f; background: rgba(233, 61, 47, 0.06); padding: 10px 12px; border-radius: 6px;">
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

                        <button v-else class="blue" type="button" @click="showCreditModal = true">
                            Purchase Credits
                        </button>

                        <button class="light" type="button" @click="closeBookModal">
                            Not Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>

        <credit-packages-modal
            :show="showCreditModal"
            @close="showCreditModal = false"
        />
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
    middleware: ['auth'],

    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer'),
        'credit-packages-modal': () => import('@/components/CreditPackagesModal.vue')
    },

    data() {
        return {
            checkingOut: false,
            showBookModal: false,
            showCreditModal: false,
            selectedBook: null,

            loadingAssessments: true,
            loadError: null,
            libraryBooks: [],

            heroLoaded: {},
            customShelves: [],
            topRatedAssessments: [],

            showExterior: true,
            showShelves: false,
            exteriorMinMs: 5000,
            _exteriorTimer: null
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
        kidsViewActive() {
            return this.$store.state.kidsViewActive
        },
        /**
         * When Kids View is ON the server only returns Kids-shelf books.
         * Group them by each subcategory so the UI can render themed sub-shelves.
         * A book with multiple subcategories appears on each matching shelf.
         */
        allAdultShelves() {
            const now = new Date();
            return this.customShelves.filter(s =>
                s.section === 'Adult' &&
                s.isActive &&
                !s.isArchived &&
                (!s.expiresAt || new Date(s.expiresAt) > now) &&
                s.assessments && s.assessments.length > 0
            ).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
        },
        allKidsShelves() {
            const now = new Date();
            return this.customShelves.filter(s =>
                s.section === 'Kids' &&
                s.isActive &&
                !s.isArchived &&
                (!s.expiresAt || new Date(s.expiresAt) > now) &&
                s.assessments && s.assessments.length > 0
            ).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
        }
    },
    watch: {
        loadingAssessments(val) {
            if (val) {
                this.closeBookModal()
                this.showShelves = false
                this.showExterior = true
                this.startExteriorTimer()
            }
        },
        kidsViewActive() {
            this.fetchAssessments()
        }
    },
    async mounted() {
        this.closeBookModal()

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

        this.startExteriorTimer()

        this.fetchAssessments()
        this.fetchCustomShelves()
        this.fetchTopRated()
    },
    beforeDestroy() {
        if (this._exteriorTimer) clearTimeout(this._exteriorTimer)
    },
    methods: {
        startExteriorTimer() {
            if (this._exteriorTimer) clearTimeout(this._exteriorTimer)
            this._exteriorTimer = setTimeout(() => {
                if (!this.loadingAssessments) {
                    this.showExterior = false
                    this.showShelves = true
                }
            }, this.exteriorMinMs)
        },
        finishExteriorIfReady() {
            if (!this.loadingAssessments) {
                if (this.showExterior && !this.showShelves) {
                }
            }
        },
        async fetchAssessments() {
            this.closeBookModal()

            this.loadingAssessments = true
            this.loadError = null

            const start = Date.now()

            try {
                const res = await this.$axios.$get('/api/assessments', {
                    params: { forLibrary: true }
                })

                const assessments = (res && res.assessments) || []
                this.libraryBooks = assessments
            } catch (err) {
                console.error('Failed to load assessments for library:', err)
                this.loadError = 'Failed to load assessments.'
            } finally {
                this.loadingAssessments = false

                const elapsed = Date.now() - start
                const remaining = Math.max(0, this.exteriorMinMs - elapsed)

                if (this._exteriorTimer) clearTimeout(this._exteriorTimer)
                this._exteriorTimer = setTimeout(() => {
                    this.showExterior = false
                    this.showShelves = true
                }, remaining)
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
            if (this.loadingAssessments) return
            if (!this.showShelves) return
            if (this.checkingOut) return
            if (!this.loggedIn) return
            if (this.isBookDisabled(book)) return

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
            if (this.loadingAssessments) return
            if (!this.showShelves) return

            const book = this.selectedBook

            if (!book._id) {
                console.error('Selected book is missing _id / assessmentId:', book)
                return
            }

            if (!this.canCheckout(book)) return

            this.checkingOut = true

            try {
                const token = this.$store.state.token

                const checkoutPayload = { assessmentId: book._id }
                const activeChild = this.$store.state.activeChildProfile
                if (activeChild && activeChild._id) {
                    checkoutPayload.childProfileId = activeChild._id
                }

                const res = await this.$axios.$post(
                    '/api/checkout',
                    checkoutPayload,
                    token
                        ? { headers: { Authorization: `Bearer ${token}` } }
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
                    (res.sessionId === 0 ? res.sessionId : res.session?._id || res.session?.id)

                if (!sessionId) {
                    console.error('No sessionId returned from checkout:', res)
                    alert('Assessment started but no session ID was returned. Please contact support.')
                    return
                }

                this.closeBookModal()
                this.$router.push(`/library/${book.slug}?session=${sessionId}`)
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
        async fetchTopRated() {
            try {
                const enabled = localStorage.getItem('tal_top_rated_enabled') !== 'false'
                if (!enabled) return
                const limit = parseInt(localStorage.getItem('tal_top_rated_limit')) || 3
                const res = await this.$axios.$get('/api/assessments/top-rated?limit=' + limit)
                this.topRatedAssessments = res.assessments || []
            } catch(err) {
                console.error('Failed to load top rated:', err)
            }
        },
        async fetchCustomShelves() {
            try {
                const res = await this.$axios.$get('/api/shelves');
                this.customShelves = res.shelves || [];
            } catch(err) {
                console.error('Failed to load custom shelves:', err);
            }
        },
        markHeroLoaded(id) {
            if (!id) return
            this.$set(this.heroLoaded, id, true)
        }
    },
    head() {
        return {
            title: 'Assessment Library | Browse Story-Based DISC Books',
            meta: [
                { hid: 'description', name: 'description', content: 'Browse our collection of story-based DISC personality assessments. Choose a book, live the scenario, and discover your behavioral style through engaging real-life narratives.' },
                { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
                { hid: 'og:title', property: 'og:title', content: 'Assessment Library | Browse Story-Based DISC Books' },
                { hid: 'og:description', property: 'og:description', content: 'Browse our collection of story-based DISC personality assessments. Choose a book, live the scenario, and discover your behavioral style through engaging real-life narratives.' },
                { hid: 'og:url', property: 'og:url', content: 'https://www.theassessmentlibrary.com/library' }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.stacks-fade-enter-active,
.stacks-fade-leave-active,
.stacks-fade-appear-active {
    transition: opacity 2500ms ease, transform 2500ms ease;
}

.stacks-fade-enter,
.stacks-fade-appear,
.stacks-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}


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

        .stacks-loading {
            position: relative;
            z-index: 1;
            max-width: 1140px;
            margin: 0 auto;

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

            .library-exterior {
                display: block;
                width: calc(100% - 120px);
                max-width: 1140px;
                margin: 0 auto;
                border-radius: 10px;
                box-shadow: 5px 5px 10px #412604;
            }

            .status {
                margin-top: 0px;
                font-style: italic;
                font-size: 24px;
                font-weight: 400;
                background: linear-gradient(to bottom,
                        rgb(90, 45, 10) 0%,
                        rgb(120, 70, 25) 50%,
                        rgb(131, 94, 62) 100%);

                border-top: 1px solid rgba(255, 255, 255, 0.2);
                border-bottom: 2px solid rgba(0, 0, 0, 0.4);


                color: #fff;
                border-radius: 8px;
                padding: 6px 0px;
                box-shadow: 5px 5px 10px #412604;
                text-shadow: 1px 1px 1px black;
            }
        }

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
                z-index: 1;
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
            z-index: 4;
            width: 155px;
            padding: 5px 5px 5px 10px;
            border: 1px solid #38240a;
            box-shadow: 5px 5px 10px #412604;
        }

        .shelf {
            position: relative;
            z-index: 2;
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
                        transform: translateY(-18px) translateZ(40px) rotateX(6deg);
                        box-shadow: 0 18px 35px rgba(0, 0, 0, 0.5);
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
        padding-top: 116px;
        padding-bottom: 40px;
        background: rgba(0, 0, 0, 0.45);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        overflow-y: auto;
        z-index: 999;

        .book-modal {
            position: relative;
            max-width: 750px;
            width: 100%;
            background: #ffffff;
            border-radius: 12px;
            padding: 68px 24px 24px;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
            text-align: left;
            overflow: hidden;
        }

        .book-modal::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 56px;
            background: rgba(233, 61, 47, 0.15);
        }

        .modal-x-close {
            position: absolute;
            top: 12px;
            right: 12px;
            background: none;
            border: none;
            font-size: 24px;
            font-weight: 700;
            color: #e53e3e;
            cursor: pointer;
            line-height: 1;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;

            &:hover {
                color: #c53030;
            }
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

@media (min-width: 769px) and (max-width: 1180px) {
    .library {
        .header {
            .logo {
                width: 90px;
                left: 50%;
                transform: translateX(-50%);
                top: -5px;
            }
        }

        .section-shelf-wrap {
            margin-top: 0;
        }
    }
}

@media (max-width: 600px) {
    .library {
        .header {
            padding: 0 16px;
            height: 56px;
            display: flex;
            align-items: center;
            text-align: left;
            box-shadow: none;

            .logo {
                display: none;
            }

            .container {
                padding: 0;
                margin: 0;
            }

            h1 {
                font-size: 0;
                margin: 0;
                line-height: 56px;

                span {
                    font-size: 20px;
                }
            }

            h4 {
                display: none;
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
            padding-top: 24px;
            padding-bottom: 24px;

            .stacks-loading {
                &::before {
                    left: 8px;
                    width: 12px;
                }

                &::after {
                    right: 8px;
                    width: 12px;
                }

                .library-exterior {
                    max-width: 100%;
                    width: calc(100% - 40px);
                }
            }

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

        .section-shelf-wrap {
            margin-top: 0;
        }

        .book-modal-backdrop {
            margin-top: 10px;

            .book-modal {
                margin: 0 16px;
                padding: 20px 16px 16px;
            }

            h4 {
                padding-top: 50px;
            }
        }
    }
}
.shelf-row {
    display: block;
    max-width: calc(100% - 120px);
    margin: 0 auto;
    box-sizing: border-box;
}
.shelf-row > h4 {
    margin-top: -30px;
    margin-bottom: 0;
    margin-left: 60px;
    width: 155px;
    position: relative;
    z-index: 4;
}
.scroll-track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    overflow-x: auto;
    padding: 0 4px 0;
    margin-bottom: -5px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}
.scroll-track::-webkit-scrollbar { display: none; }
.scroll-track .book-card {
    flex: 0 0 200px;
    min-width: 200px;
    text-align: center;
    cursor: pointer;
    margin: 0;
}
.scroll-track .book-card .hero-box {
    position: relative;
    margin: 10px auto 0;
    background: linear-gradient(135deg, #e93d2f 0%, #ffbd05 25%, #0dab49 50%, #1666ff 100%);
    padding: 2px;
    border-radius: 16px;
    transition: transform 0.28s ease, box-shadow 0.25s ease;
    cursor: pointer;
}
.scroll-track .book-card .hero-box:hover {
    transform: translateY(-8px) scale(1.02) rotateZ(-0.4deg);
    box-shadow: 8px 10px 20px rgba(0,0,0,0.35);
}
.scroll-track .book-card .hero-box.disabled { cursor: not-allowed; }
.scroll-track .book-card .hero-box-inner {
    border-radius: 14px;
    overflow: hidden;
    background: #000;
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.scroll-track .book-card .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(6px);
    opacity: 0.7;
    transition: filter 0.3s ease, opacity 0.3s ease;
}
.scroll-track .book-card .hero-img--loaded { filter: blur(0); opacity: 1; }
.scroll-track .book-card .hero-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: linear-gradient(135deg, #1a1a2e, #2d2d44);
}
.scroll-track .book-card .hero-placeholder span {
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    font-family: Georgia, serif;
    text-align: center;
    line-height: 1.4;
}
.scroll-track .book-card .title {
    margin-top: 10px;
    font-style: italic;
    font-weight: 700;
    font-size: 14px;
}
.scroll-track .book-card .description {
    font-size: 12px;
    color: #555;
    padding: 0 4px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
}
.modal-rating {
    display: flex;
    gap: 3px;
    margin-bottom: 2px;
}
.modal-rating .rating-star {
    font-size: 22px;
}
.book-rating {
    margin: 0 0 -4px;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 2px;
    line-height: 1;
}
.rating-star {
    color: #ddd;
    font-size: 16px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.rating-star.filled {
    color: #ffbd05;
}
.top-rated-shelf {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #12304d 0%, #1a4a70 50%, #12304d 100%) !important;
    height: 36px !important;
    border-radius: 3px;
}
.top-rated-label {
    color: #ffbd05;
    font-family: Georgia, serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
.section-shelf-wrap {
    position: relative;
    z-index: 10;
    margin: 30px -40px 0;
}
.stacks-shelves > .section-shelf-wrap:first-child {
    margin-top: 0px;
}
.section-shelf {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px !important;
    margin: 0 -8px !important;
    background: linear-gradient(
        135deg,
        rgb(160, 120, 40) 0%,
        rgb(210, 175, 80) 15%,
        rgb(255, 220, 120) 35%,
        rgb(235, 200, 105) 50%,
        rgb(205, 165, 75) 65%,
        rgb(245, 215, 115) 80%,
        rgb(160, 120, 40) 100%
    ) !important;
    border-radius: 3px !important;
    box-shadow:
        0 -3px 6px rgba(0,0,0,0.5),
        0 4px 8px rgba(0,0,0,0.4),
        6px 6px 12px rgba(65,38,4,0.7),
        -6px 6px 12px rgba(65,38,4,0.7),
        0 2px 4px rgba(255,255,255,0.25) inset,
        0 -2px 4px rgba(0,0,0,0.35) inset !important;
    border-top: 1px solid rgba(255, 245, 190, 0.7) !important;
    border-bottom: 2px solid rgba(80, 50, 5, 0.9) !important;
    border-left: 1px solid rgba(180, 140, 60, 0.8) !important;
    border-right: 1px solid rgba(180, 140, 60, 0.8) !important;
    overflow: hidden !important;
}

.section-shelf-shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        105deg,
        transparent 30%,
        rgba(255, 255, 255, 0.12) 45%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.12) 55%,
        transparent 70%
    );
    background-size: 300% 100%;
    animation: brass-shimmer 12s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
}

@keyframes brass-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -100% 0; }
}

.section-divider-label {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    background: transparent !important;
    color: rgb(55, 28, 5) !important;
    font-family: Georgia, serif !important;
    font-size: 22px !important;
    font-weight: 800 !important;
    padding: 8px 32px !important;
    border: none !important;
    box-shadow: none !important;
    z-index: 2;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    text-shadow:
        0 1px 0 rgba(255,220,120,0.7),
        0 2px 0 rgba(255,210,100,0.4),
        0 -1px 0 rgba(0,0,0,0.4),
        0 -2px 1px rgba(0,0,0,0.2),
        1px 1px 3px rgba(0,0,0,0.3) !important;
}

</style>
