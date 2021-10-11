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

                    <h3 v-if="!isBooked" style="text-align:center;font-size:16pt;text-transform:uppercase;letter-spacing:1px;margin-bottom:-15px"><span style="color:#e93d2f">Don't leave yet!</span></h3>
                    <h3 v-if="!isBooked" style="text-align:center;font-size:18pt"><span style="background:#ffbd05">&nbsp;Claim your FREE Assessment Credit!&nbsp;</span></h3>

                    <p v-if="!isBooked" style="text-align:center">
                        <strong>Book now</strong> on this page and receive a <strong>free assessment credit</strong> of your choice when you create an account.<br/>Click 
                        the button below to book an appointment to qualify for the free credit.
                    </p><br v-if="!isBooked"/>

                    <button v-if="!isBooked" @click="showCalendlyPopup" style="margin:0 auto;display:block;" class="button danger">Book an Appointment Now</button>
                    <br v-if="!isBooked"/>
                    <br v-if="!isBooked"/>

                    <p style="text-align:center">
                        We’d like the opportunity to discuss your assessment and certification needs in detail. Please use the calendar below to schedule a 
                        quick call. You can also email us at <a class="hyperlink" href="mailto:support@assessments24x7.com">support@assessments24x7.com</a> 
                        or call us at <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                    </p><br/>

                    <br/><br/><br/>
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
                agent: '',
                isBooked: false
            }
        },
        mounted() {
            window.addEventListener('message', this.onCalendlyEvent);
        },
        destroyed() {
            window.removeEventListener('message', this.onCalendlyEvent);
        },
        async created() {
            if (process.browser) {
                this.$gtm.push({ event: 'Thank You' });
            }

            const { data } = await axios.get(`/api/contact/${this.$route.query.contactId}`);
            const salesPersonInt = data.fieldValues.find(obj => {
                return obj.field === '79'; // 79 is the field id for Sales Person Assignment in AC
            });

            const suzette = 'suzette-247/30min';
            const angie = 'angiew-1/30min';
            const monica = 'monica-saare/30min';

            if (salesPersonInt.value === '1') {
                this.agent = suzette;
            } else if (salesPersonInt.value === '2') {
                this.agent = angie;
            } else if (salesPersonInt.value === '3') {
                this.agent = monica;
            }

            this.showCalendlyPopup();
        },
        methods: {
            onCalendlyEvent(e) {
                if (e.data.event && e.data.event.indexOf('calendly') === 0) {
                    if (e.data.event === 'calendly.event_scheduled') {
                        this.isBooked = true;
                        axios.post(`/api/contact/${this.$route.query.contactId}/tag/7`);
                        axios.post(`/api/contact/${this.$route.query.contactId}/tag/849`);
                    }
                }
            },
            showCalendlyPopup() {
                Calendly.showPopupWidget(`https://calendly.com/${this.agent}?text_color=000000&primary_color=0033c5`);
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