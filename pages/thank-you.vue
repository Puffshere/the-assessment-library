<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Thank You!</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img alt="Message Sent"
                        src="https://cdn.assessments24x7.com/file/assessments24x7-media/illustrations/sent-message.png"
                        width="200">
                    <h2 style="text-align:center;margin-bottom:0">Your information has been submitted</h2>
                    <p style="text-align: center;">
                        We’d like the opportunity to discuss your assessment and certification needs in detail. Please
                        email us at <a class="hyperlink"
                            href="mailto:sales@assessments24x7.com">sales@assessments24x7.com</a> or call us at <a
                            class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>.
                    </p>
                    <br /><br /><br />
                </div>
            </div>
        </div>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.skeleton {
    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        padding: 70px 0;
        margin-bottom: 30px;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }
    }

    img {
        margin: 20px auto 0 auto;
        display: block
    }

    h1 {
        margin-bottom: 0px;
    }
}
</style>