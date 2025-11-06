<template>
    <section class="not-found">

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 v-if="error.statusCode === 404" class="section-title">404 - Page Not Found</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h2>The page you are looking for does not exist...</h2>
                    <br />
                    <h1>Or this page is currently under construction!!!</h1>
                    <nuxt-link class="button" to="/">Go To The Homepage</nuxt-link>
                    <br /><br />
                </div>


            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: ['error'],
    components: {
    },
    created() {
        if (this.error.statusCode === 404) {
            if (process.browser) {
                this.$gtm.push({ event: 'Not Found' });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.not-found {
    .header {
        color: #fff;
        text-align: center;
        padding: 70px 0;
        margin-bottom: 30px;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }
}
</style>
