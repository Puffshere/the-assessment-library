<template>
    <section class="home">
        <main-nav />

        <section class="header">
            <img src="~assets/logo-without-background.png" alt="image of logo" class="logo" />
            <button v-if="loggedIn === true" class="teal">Dashboard</button>

            <div class="container">
                <div class="row">
                    <h1>Welcome to The Assessment Library!</h1>
                    <h4>
                        Scenario-based, story-driven DISC assessments that grow with you. <br />The more you read the
                        more you learn!
                    </h4>
                </div>
            </div>
        </section>

        <section class="welcome">
            <div class="container">
                <div class="row">
                    <p>
                        Explore interactive stories that reveal your DISC style through choices you make.
                        Sign in to check out a book and begin your assessment journey.
                    </p>
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
            left: 40px;
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
    }

    .welcome {
        text-align: center;
        padding: 40px 16px 80px 16px;
        color: #12304d;

        p {
            max-width: 760px;
            margin: 0 auto;
        }
    }
}

@media (max-width: 600px) {
    .home {
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
                position: static;
            }
        }
    }
}
</style>