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
                    <img alt="Message Sent" src="https://cdn.assessments24x7.com/file/assessments24x7-media/illustrations/sent-message.png" width="200" style="margin:20px auto 0 auto;display:block">
                    
                    <h2 style="text-align:center">Your information has been submitted</h2>

                    <p style="text-align:center">
                        We’d like the opportunity to discuss your assessment and certification needs in detail. You will receive an email with a link to 
                        choose a time slot on our calendar. You can also email us at <a class="hyperlink" href="mailto:support@assessments24x7.com">support@assessments24x7.com</a> 
                        or call us at <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                    </p><br/><br/><br/>

                    <!--<div class="calendly-inline-widget" :data-url="`https://calendly.com/${agent}?text_color=000000&primary_color=0033c5`" style="min-width:320px;height:700px;margin-bottom:60px;margin-top:-40px"></div>-->
                </div>
            </div>
        </div>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import axios from 'axios';
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        head() {
            return {
                script: [
                    {
                        src: 'https://assets.calendly.com/assets/external/widget.js',
                        async: true
                    }
                ]
            }
        },
        components: {
            'main-nav': Nav,
            'footer-fold': Footer
        },
        data() {
            return {
                agent: ''
            }
        },
        mounted() {
            window.addEventListener('message', this.onCalendlyEvent);
        },
        destroyed() {
            window.removeEventListener('message', this.onCalendlyEvent);
        },
        created() {
            if (process.browser) {
                this.$gtm.push({ event: 'Thank You' });
            }

            const monica = 'monica-saare/30min';
            const suzette = 'suzette-247/30min';

            this.agent = monica;
            const clientType = this.$route.query.clientType;

            if (clientType === 'Reseller') {
                // Reseller
                this.agent = suzette;
            } else if (clientType === 'Corporate') {
                // Corporate
                this.agent = monica;
            }
        },
        methods: {
            onCalendlyEvent(e) {
                if (e.data.event && e.data.event.indexOf('calendly') === 0) {
                    if (e.data.event === 'calendly.event_scheduled') {
                        axios.post(`/api/contact/${this.$route.query.contactId}/tag/7`);
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
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