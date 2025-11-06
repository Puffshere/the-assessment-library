<template>
    <section class="not-found">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <h1 class="error" v-if="error.statusCode === 404">404 - Page Not Found</h1>
                    <br />
                    <h4>The page you are looking for does not exist...</h4>
                    <br />
                    <h1>Or this page is currently under construction!!!</h1>
                    <br />
                    <br />
                    <br />
                    <button class="teal" @click="jumpHome">Return Home</button>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>

export default {
    props: ['error'],
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: 'The Assessment Library | Error',
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
    created() {
        if (this.error.statusCode === 404) {
            if (process.browser) {
                this.$gtm.push({ event: 'Not Found' });
            }
        }
    },
    methods: {
        jumpHome(event) {
            window.location.href = '/';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.not-found {
    .header {
        color: #fff;
        text-align: center;
        padding: 40px 16px 80px;

        .error {
            color: #e93d2f;
        }

        h1 {
            margin-bottom: 0;
        }

        h4 {
            margin-bottom: 0;
        }
    }
}

@media (max-width: 600px) {
    .not-found {
        .header {
            padding: 20px 16px 100px;
        }
    }
}
</style>