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
                    <h2>Schedule a Meeting with<br />Monica Saare</h2>

                    <p>
                        <strong>About Me: </strong>Hello! I'm Monica Saare, President of the Corporate Division at
                        Assessments 24x7 and passionate about working with my clients from
                        around the world. With extensive experience in corporate sales, account management, program
                        creation and innovation, I've happily
                        used assessments, especially DISC with sales initiatives, team building and business expansion.
                        We are a family and friends
                        business and I look forward to working with you!
                        <br /><br />

                        <strong>Hobbies & Fun Facts: </strong>I play pickle ball, love to travel, have two adorable cats
                        who are sisters and I love to sing.<br /><br />

                        My DISC Style is: <strong>ISc</strong>
                    </p><br />
                </div>

                <div class="col-6">
                    <vue-calendly url="https://calendly.com/monica-saare/30min?text_color=000000&primary_color=0033c5"
                        :height="650" style="width: 100%; min-height: 650px !important; overflow: hidden;">
                    </vue-calendly>

                    <p style="text-align: center; font-size: 10pt;">
                        You can also email me at <a class="hyperlink"
                            href="mailto:monica@assessments24x7.com">monica@assessments24x7.com</a><br />
                        or call <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">

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