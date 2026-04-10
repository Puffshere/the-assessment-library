<template>
    <section class="home">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <button v-if="loggedIn" class="teal" @click="goToDashboard">
                Dashboard
            </button>

            <div class="container">
                <div class="row">
                    <h1>
                        <span style="font-weight: 600;">Welcome to</span>
                        <span class="type-wrap">
                            <span class="hero-placeholder"> <span style="color: #12304d; text-shadow: 1px 1px 1px white; font-style: italic;">The Assessment Library!</span></span>
                            <span class="hero-typed" aria-hidden="true"> <span style="color: #12304d; text-shadow: 1px 1px 1px white; font-style: italic;">The Assessment Library!</span></span>
                        </span>
                    </h1>
                    <h4>
                        Discover a new way to learn about yourself — one story,
                        <br class="line-break" />one choice, one chapter at a time.
                    </h4>
                </div>
            </div>
        </section>

        <section class="worlds-first">
            <div class="container">
                <div class="row">
                    <div class="col-6 textSide">
                        <h1>
                            World's first <br class="line-break" />
                            scenario-based, story- <br class="line-break" />
                            based assessments
                        </h1>
                        <p>
                            Create a DISC profile that grows <br class="line-break" />
                            with you as you read your story.
                        </p>
                        <button class="green" @click="jumpToLogin($event)">Get Started</button>
                    </div>
                    <div class="col-6 image">
                        <img src="~assets/homePage/sitting-woman-with-book.webp"
                            alt="image of a woman sitting reading a book" />
                    </div>
                </div>
            </div>
        </section>

        <section class="learn">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <img src="~assets/homePage/people-at-the-table.webp"
                            alt="image of people sitting at the table" />
                    </div>
                    <div class="col-6 text">
                        <h1>
                            Learn by <br class="line-break" />
                            Living the Story
                        </h1>
                        <p>
                            Forget filling bubbles and reading static reports <br />
                            <br />
                            Each Assessment Library book places you <br class="line-break" />
                            inside a living scenario - a workplace <br class="line-break" />
                            challenge, a friendship, a first job, a bold <br class="line-break" />
                            career move. <br />
                            <br />
                            Your choices shape the story and reveal your <br class="line-break" />
                            natural DISC tendencies as they unfold. <br />
                            <br />
                            Because the best way to understand <strong>yourself</strong> <br />
                            is to live your decisions.
                        </p>
                        <button class="blue" @click="jumpToLogin($event)">
                            Explore the Stories
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="kids">
            <img src="~assets/backgrounds/classroom_top_background.webp" alt="image of the top of a classroom"
                class="classroom" />
            <div class="container">
                <div class="row">
                    <h4>From Playground to Boardroom, Stories That Fit Every Stage of Life</h4>
                    <p>
                        Whether you’re 9 or 49, there’s a story waiting for you. <br />
                        Children discover their communication style on the playground. <br />
                        Professionals refine their leadership style through workplace
                        adventures. <br />
                        Every book in the Assessment Library meets you where you are — and
                        grows with you from story to story.
                    </p>
                </div>
            </div>
            <img src="~assets/backgrounds/classroom_bottom_background.webp" alt="image of the bottom of a classroom"
                class="classroom" />
        </section>

        <section class="personality">
            <div class="container">
                <div class="row">
                    <h1>
                        A Personality That <br class="line-break" /> Grows With You
                    </h1>
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                    <div class="line line4"></div>
                    <img src="~assets/homePage/people_reading.webp" alt="image of people reading on a stack of books" />
                    <p>
                        Traditional assessments freeze you in time. <br />
                        Our story-based assessments grow with you as you read more books,
                        <br />
                        face new challenges, and choose new paths. <br />
                        Your DISC profile becomes a living reflection of your development —
                        <br />
                        not just who you are today, but who you’re becoming.
                    </p>
                    <button class="green" @click="jumpToLogin($event)">
                        See How Growth Works
                    </button>
                </div>
            </div>
        </section>

        <footer-fold />

        <!-- FEATURED NEW RELEASE MODAL -->
        <transition name="modal-fade">
            <div v-if="showFeaturedModal" class="featured-backdrop" @click.self="closeFeaturedModal">
                <div class="featured-modal">
                    <button class="featured-close" @click="closeFeaturedModal" aria-label="Close">&times;</button>
                    <div class="featured-header">
                        <div class="featured-shimmer"></div>
                        <span class="featured-eyebrow">Just Added</span>
                        <h2 class="featured-title">{{ featuredData.title }}</h2>
                        <p v-if="featuredData.message" class="featured-message">{{ featuredData.message }}</p>
                    </div>
                    <div class="featured-cards">
                        <div v-for="book in featuredData.assessments" :key="book._id" class="featured-card" @click="goToBook(book)">
                            <div class="featured-card-img">
                                <img v-if="book.heroImageUrl && !book.heroImageUrl.includes('default-cover')" :src="book.heroImageUrl" :alt="book.title" />
                                <div v-else class="featured-card-placeholder">{{ book.title }}</div>
                                <div class="featured-card-overlay">
                                    <span class="featured-card-cta">Read Now →</span>
                                </div>
                            </div>
                            <div class="featured-card-info">
                                <p class="featured-card-title">{{ book.title }}</p>
                                <p class="featured-card-desc">{{ book.description }}</p>
                                <span class="featured-card-cost">{{ book.creditsCost }} credit<span v-if="book.creditsCost !== 1">s</span></span>
                            </div>
                        </div>
                    </div>
                    <div class="featured-actions">
                        <button class="featured-btn-primary" @click="goToLibrary">Browse Full Library</button>
                        <button class="featured-btn-ghost" @click="closeFeaturedModal">Maybe Later</button>
                    </div>
                </div>
            </div>
        </transition>

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
            showFeaturedModal: false,
            featuredData: { title: '', message: '', assessments: [] },
        }
    },
    async mounted() {
        if (process.client && !this.$store.state.kidsViewActive) {
            const seen = sessionStorage.getItem('tal_featured_seen');
            if (!seen) {
                try {
                    const res = await this.$axios.$get('/api/featured-release');
                    if (res.isActive && res.assessments && res.assessments.length > 0) {
                        this.featuredData = res;
                        setTimeout(() => { this.showFeaturedModal = true; }, 800);
                        sessionStorage.setItem('tal_featured_seen', '1');
                    }
                } catch(e) { console.error(e); }
            }
        }
    },
    head() {
        return {
            title: 'The Assessment Library | Story-Based DISC Personality Assessments',
            meta: [
                { hid: 'description', name: 'description', content: 'The world\'s first story-based DISC assessments. Build an evolving personality profile through interactive narratives for adults and kids. Discover who you are becoming — one story at a time.' },
                { hid: 'og:title', property: 'og:title', content: 'The Assessment Library | Story-Based DISC Personality Assessments' },
                { hid: 'og:description', property: 'og:description', content: 'The world\'s first story-based DISC assessments. Build an evolving personality profile through interactive narratives for adults and kids. Discover who you are becoming — one story at a time.' },
                { hid: 'og:url', property: 'og:url', content: 'https://www.theassessmentlibrary.com' }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "The Assessment Library",
                        "url": "https://www.theassessmentlibrary.com",
                        "description": "Story-based DISC personality assessments for adults and kids",
                        "sameAs": []
                    }),
                    type: 'application/ld+json'
                },
                {
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "The Assessment Library",
                        "url": "https://www.theassessmentlibrary.com",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.theassessmentlibrary.com/library?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }),
                    type: 'application/ld+json'
                }
            ]
        }
    },
    methods: {
        closeFeaturedModal() {
            this.showFeaturedModal = false;
        },
        goToLibrary() {
            this.showFeaturedModal = false;
            this.$router.push('/library');
        },
        goToBook(book) {
            this.showFeaturedModal = false;
            this.$router.push('/library/' + book.slug);
        },
        jumpToLogin(event) {
            event?.target?.blur()
            this.$router.push('/auth/login')
        },
        goToDashboard(event) {
            event?.target?.blur()
            this.$router.push('/dashboard')
        }
    }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.home {
    .header {
        text-align: center;
        padding: 40px 16px 40px 16px;
        background-color: rgba(161, 156, 147, 0.521);
        position: relative;
        box-shadow: 5px 5px 10px #0814368e;
        margin-top: 64px;

        .teal {
            margin-top: 20px;
            margin-right: 20px;
        }

        .logo {
            width: 300px;
            position: absolute;
            left: 80px;
            top: -25px;
        }

        button,
        .teal {
            position: absolute;
            right: 20px;
            top: 20px;
        }

        h1 {
            margin-bottom: 20px;
        }

        h4 {
            margin-top: -20px;
            font-weight: 400;
            font-family: $nunito-family;
        }

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

        .type-wrap {
            position: relative;
            display: inline-block;
            vertical-align: baseline;
        }

        .hero-placeholder {
            visibility: hidden;
            white-space: nowrap;
            font-family: 'Merriweather', 'Georgia', serif;
        }

        .hero-typed {
            position: absolute;
            inset: 0 auto auto 0;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid currentColor;
            font-family: 'Merriweather', 'Georgia', serif;

            animation:
                typing 9s steps(28, end) 0.3s infinite,
                caret 1.2s step-end infinite;
            width: 0;
        }

        @keyframes typing {
            0% {
                width: 0;
            }

            35% {
                width: 100%;
            }

            88% {
                width: 100%;
            }

            100% {
                width: 0;
            }
        }

        @keyframes caret {

            0%,
            100% {
                border-right-color: transparent;
            }

            50% {
                border-right-color: currentColor;
            }
        }

    }

    .worlds-first {
        text-align: center;
        padding: 45px 16px 70px 16px;
        color: #12304d;
        background: url('~assets/backgrounds/landscape-background.webp');
        background-size: cover;
        background-position: center;

        .textSide {
            text-align: left;

            h1 {
                font-family: 'Merriweather', 'Georgia', serif;
                line-height: 40px;
                margin-top: 30px;
            }

            p {
                font-family: 'Merriweather', 'Georgia', serif;
            }

            button {
                margin-top: 40px;
            }
        }

        img {
            width: 700px;
            margin-top: 180px;
        }
    }

    .learn {
        padding: 60px 16px 80px;
        margin: 0 500px;
        box-shadow: 2px 0px 2px gray;
        position: relative;

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

        img {
            width: 400px;
        }

        .text {
            text-align: right;

            h1 {
                line-height: 40px;
                margin-bottom: 0;
                font-family: 'Merriweather', 'Georgia', serif;
            }

            button {
                margin-top: 40px;
            }
        }
    }

    .kids {
        padding: 0px 0px 0;
        text-align: center;
        font-family: 'Merriweather', 'Georgia', serif;

        .container {
            padding: 0 16px;
        }

        .classroom {
            width: 100%;
        }

        h4 {
            margin-top: 60px;
            margin-bottom: 0;
        }

        p {
            margin-bottom: 60px;
        }
    }

    .personality {
        padding: 80px 16px 0;
        position: relative;

        h1 {
            font-family: 'Merriweather', 'Georgia', serif;
            line-height: 40px;
            position: absolute;
        }

        .line {
            position: absolute;
            height: 6px;
        }

        .line1 {
            width: 350px;
            background-color: #e93f2fda;
            top: 120px;
        }

        .line2 {
            width: 300px;
            background-color: #ffbc05a6;
            top: 140px;
        }

        .line3 {
            width: 250px;
            background-color: #0dab4a62;
            top: 160px;
        }

        .line4 {
            width: 200px;
            background-color: #1668ff2f;
            top: 180px;
        }

        p {
            font-family: 'Merriweather', 'Georgia', serif;
            position: absolute;
            top: 40px;
            right: 0;
            text-align: right;
        }

        .green {
            position: absolute;
            top: 200px;
            right: 0;
            min-width: 210px;
        }

        img {
            width: 100%;
            margin-bottom: -70px;
        }
    }
}

@media (max-width: 600px) {
    .home {
        .line-break {
            display: none;
        }

        .header {
            padding: 30px 16px 30px 16px;

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
                font-size: 24px;
            }

            .teal {
                width: 120px;
                margin-top: 0;
                margin-right: 0;
                position: static;
            }
        }

        .worlds-first {
            padding: 20px 16px 60px;

            .image {
                text-align: right;

                img {
                    width: 300px;
                    margin-top: 0px;
                    margin-right: -20px;
                }
            }
        }

        .learn {
            padding: 40px 16px 60px;
            margin: 0 0;

            img {
                width: 60%;
            }
        }

        .personality {
            padding: 20px 16px 100px;

            h1 {
                position: relative;
                margin-bottom: 0px;
            }

            p {
                position: relative;
                top: 0px;
            }

            .green {
                position: relative;
                top: 30px;
            }

            img {
                width: 100%;
                margin-top: 60px;
                margin-bottom: 10px;
            }

            .line {
                position: relative;
            }

            .line1 {
                width: 90%;
                background-color: #e93f2fda;
                top: 20px;
            }

            .line2 {
                width: 70%;
                background-color: #ffbc05a6;
                top: 30px;
            }

            .line3 {
                width: 50%;
                background-color: #0dab4a62;
                top: 40px;
            }

            .line4 {
                width: 30%;
                background-color: #1668ff2f;
                top: 50px;
            }
        }
    }
}

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.3s ease; }
.modal-fade-enter, .modal-fade-leave-to { opacity: 0; }

.featured-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 9999;
    padding: 140px 20px 60px;
    overflow: hidden;
    backdrop-filter: blur(4px);
}
.featured-modal {
    background: #fff;
    border-radius: 20px;
    max-width: 780px;
    width: 100%;
    max-height: calc(100vh - 200px);
    overflow: hidden;
    position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,0.3);
}
.featured-header {
    position: relative;
    background: linear-gradient(135deg, #12304d 0%, #1a4a70 50%, #12304d 100%);
    padding: 24px 32px 20px;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    text-align: center;
}
.featured-shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 70%);
    background-size: 300% 100%;
    animation: featured-shimmer 4s ease-in-out infinite;
}
@keyframes featured-shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -100% 0; }
}
.featured-eyebrow {
    display: inline-block;
    background: linear-gradient(135deg, rgb(160,120,40), rgb(255,220,120), rgb(160,120,40));
    color: rgb(55,28,5);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 4px 16px;
    border-radius: 20px;
    margin-bottom: 12px;
    position: relative;
    z-index: 1;
}
.featured-title {
    color: #fff;
    font-family: Georgia, serif;
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 8px;
    position: relative;
    z-index: 1;
}
.featured-message {
    color: rgba(255,255,255,0.8);
    font-size: 13px;
    margin: 0;
    position: relative;
    z-index: 1;
    max-width: 500px;
    margin: 0 auto;
}
.featured-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255,255,255,0.15);
    border: none;
    color: #fff;
    font-size: 20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background 0.15s;
    line-height: 1;
    padding: 0;
}
.featured-close:hover { background: rgba(255,255,255,0.25); }
.featured-cards {
    display: flex;
    gap: 12px;
    padding: 16px 24px 0;
    overflow-x: auto;
    justify-content: center;
    flex-wrap: wrap;
}
.featured-card {
    flex: 0 0 180px;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    border: 0.5px solid rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background: #fff;
}
.featured-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}
.featured-card-img {
    position: relative;
    height: 100px;
    overflow: hidden;
    background: linear-gradient(135deg, #1a1a2e, #2d2d44);
}
.featured-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
}
.featured-card:hover .featured-card-img img { transform: scale(1.05); }
.featured-card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(18,48,77,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
}
.featured-card:hover .featured-card-overlay { opacity: 1; }
.featured-card-cta {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.05em;
}
.featured-card-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    font-family: Georgia, serif;
    padding: 12px;
    text-align: center;
}
.featured-card-info {
    padding: 8px 10px;
}
.featured-card-title {
    font-size: 13px;
    font-weight: 700;
    font-style: italic;
    margin: 0 0 4px;
    color: #12304d;
}
.featured-card-desc {
    font-size: 11px;
    color: #777;
    margin: 0 0 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
}
.featured-card-cost {
    font-size: 11px;
    font-weight: 700;
    color: #fff;
    background: #12304d;
    padding: 2px 8px;
    border-radius: 20px;
}
.featured-actions {
    display: flex;
    gap: 12px;
    padding: 14px 24px 20px;
    justify-content: center;
}
.featured-btn-primary {
    background: #12304d;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0 36px;
    height: 44px;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
}
.featured-btn-primary:hover { background: #1a4a70; }
.featured-btn-ghost {
    background: transparent;
    color: #666;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    padding: 0 36px;
    height: 44px;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
}
.featured-btn-ghost:hover { background: #f5f5f5; color: #333; }
</style>