<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Schedule a Meeting</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h2>Schedule a Meeting with<br/>Suzette Chaparro</h2>

                    <p>
                        <strong>About Me: </strong>Hello, I’m Suzette Chaparro, VP of client success here at Assessments 24x7. My business experience includes working in the client 
                        support/service and hospitality business for over 10 years. My primary roles with Assessments 24x7 since I joined this company in 
                        2014 have been client success driven. I am available for all of your assessment, certification, and dashboard questions and 
                        strategies. I primarily work with our clients to ensure 100% satisfaction with their assessments, accounts, training, and more.
                        <br/><br/>

                        <strong>Hobbies & Fun Facts: </strong>When I am not working, you can find me hiking in the backcountry, cooking new and exciting 
                        meals for loved ones, or hanging out with my two sweet dogs.<br/><br/>

                        My DISC Style is: <strong>Di</strong>
                    </p>
                </div>

                <div class="col-6">
                    <vue-calendly url="https://calendly.com/suzette-247?text_color=000000&primary_color=0033c5" :height="650"></vue-calendly>
                
                    <p style="text-align: center; font-size: 10pt;">
                        You can also email me at <a class="hyperlink" href="mailto:suzette@assessments24x7.com">suzette@assessments24x7.com</a><br/>
                        or call <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                    </p>
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
        mounted() {
            window.addEventListener('message', this.onCalendlyEvent);
        },
        destroyed() {
            window.removeEventListener('message', this.onCalendlyEvent);
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