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
                    
                    <h2 style="text-align:center;margin-bottom:0">Your information has been submitted</h2>

                    <div v-if="clientType !== 'Retail'">
                        <vue-calendly v-if="this.agent === 'suzette'" url="https://calendly.com/suzette-247/30min?text_color=000000&primary_color=0033c5" :height="650"></vue-calendly>
                        <vue-calendly v-if="this.agent === 'angie'" url="https://calendly.com/angiew-1/30min?text_color=000000&primary_color=0033c5" :height="650"></vue-calendly>
                        <vue-calendly v-if="this.agent === 'monica'" url="https://calendly.com/monica-saare/30min?text_color=000000&primary_color=0033c5" :height="650"></vue-calendly>

                        <br/>
                        <p style="text-align:center">
                            We’d like the opportunity to discuss your assessment and certification needs in detail. Please use the calendar below to schedule a 
                            quick call. You can also email us at <a class="hyperlink" href="mailto:sales@assessments24x7.com">sales@assessments24x7.com</a> 
                            or call us at <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                        </p><br/>
                    </div>

                    <div v-else>
                        <br/>
                        <p style="text-align:center">
                            We’d like the opportunity to discuss your assessment and certification needs in detail. A representative will contact you shortly. 
                            You can also email us at <a class="hyperlink" href="mailto:sales@assessments24x7.com">sales@assessments24x7.com</a> 
                            or call us at <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>
                        </p><br/>
                    </div>

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
                        src: 'https://assets.calendly.com/assets/external/widget.js'
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
                clientType: ''
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

            let salesPerson = {
                value: 'Suzette Chaparro'
            };

            if (this.$route.query.contactId) {
                const { data } = await axios.get(`/api/contact/${this.$route.query.contactId}`);
                salesPerson = data.fieldValues.find(obj => {
                    return obj.field === '79'; // 79 is the field id for Sales Person Assignment in AC
                });
            } else {
                this.agent = 'suzette';
            }

            if (this.$route.query.clientType) {
                this.clientType = this.$route.query.clientType;
            }

            if (salesPerson.value === 'Suzette Chaparro') {
                this.agent = 'suzette';
            } else if (salesPerson.value === 'Angie Warner') {
                this.agent = 'angie';
            } else if (salesPerson.value === 'Monica Saare') {
                this.agent = 'monica';
            }
        },
        methods: {
            onCalendlyEvent(e) {
                if (e.data.event && e.data.event.indexOf('calendly') === 0) {
                    if (e.data.event === 'calendly.event_scheduled') {

                        const data = {
                            contactId: this.$route.query.contactId
                        }

                        if (this.$route.query.contactId) {
                            // Tell Zapier to apply tags:
                            // Tag ID 7 - Call Booked
                            // Tag ID 849 - Booked on Thank You Page Promo
                            this.$zapier.post('/hooks/catch/2424937/bmtl8xa/', JSON.stringify(data), {
                                withCredentials: false,
                                transformRequest: [(data, headers) => {
                                    delete headers.post['Content-Type'];
                                    return data;
                                }]
                            });   
                        }
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