<template>
    <section class="thank-you-page">
        <main-nav />

        <section class="header">
            <div class="container">
                <div class="row">
                    <h1>Thank You!</h1>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="container">
                <div class="thank-you-card">
                    <h2 class="thank-you-title">Thank you for helping {{ childName }} grow!</h2>
                    <p class="thank-you-subtitle">
                        Your perspective has been recorded. The parent will be able to see how others
                        perceive {{ childName }}'s personality style.
                    </p>
                    <button class="cta-btn" @click="$router.push('/')">
                        Visit The Assessment Library
                    </button>
                </div>
            </div>
        </section>

        <footer-fold />
    </section>
</template>

<script>
export default {
    components: {
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    computed: {
        childName() {
            return this.$route.query.childName || 'this child';
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.thank-you-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.header {
    background: linear-gradient(135deg, #0d4ca5 0%, #143180 100%);
    color: #fff;
    text-align: center;
    padding: 40px 20px 30px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #e93d2f 25%, #ffbd05 25%, #ffbd05 50%, #0dab49 50%, #0dab49 75%, #1666ff 75%);
    }

    h1 {
        font-family: $font-family;
        font-size: 32px;
        margin: 0;
    }
}

.content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
}

.thank-you-card {
    text-align: center;
    max-width: 520px;
    margin: 0 auto;
}

.thank-you-title {
    font-family: $font-family;
    font-size: 28px;
    color: #12304d;
    margin: 0 0 16px;
}

.thank-you-subtitle {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    margin: 0 0 32px;
}

.cta-btn {
    background: linear-gradient(135deg, #0033c5, #00a8ff);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 14px 32px;
    font-family: $font-family;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
}
</style>
