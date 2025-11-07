<template>
    <section class="home">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <button v-if="loggedIn === true" class="teal">Dashboard</button>

            <div class="container">
                <div class="row">
                    <h1>
                        <span style="font-weight: 600;">Welcome to</span>
                        <span class="type-wrap">
                            <span class="hero-placeholder"> The Assessment Library!</span>
                            <span class="hero-typed" aria-hidden="true"> The Assessment Library!</span>
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

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: 'The Assessment Library | Home',
            meta: [
                { hid: 'description', name: 'description', content: '' }
            ]
        }
    },
    methods: {
        jumpToLogin(event) {
            event?.target?.blur()
            this.$router.push('/auth/login')
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
</style>
