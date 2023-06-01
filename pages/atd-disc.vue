<template>
    <section class="skeleton">
        <main-nav></main-nav>
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Free Complete DISC Report</h1>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-6 textBox">
                    <h2>Schedule a Meeting with<br />{{ salesperson }}</h2>
                    <h4>Connect with Assessments 24x7 Team member. Dive into your full DISC report, explore certification
                        options, and gain insights on opening an account.</h4>
                    <img class="heroImage" src="~/assets/discRoundLogo.png">
                </div>
                <div class="col-6">
                    <div v-if="this.salesperson === 'Suzette Chaparro'">
                        <vue-calendly url="https://calendly.com/suzette-247/30min?text_color=000000&primary_color=0033c5"
                            :height="650"></vue-calendly>
                    </div>
                    <div v-else-if="this.salesperson === 'Monica Saare'">
                        <vue-calendly url="https://calendly.com/monica-saare/30min?text_color=000000&primary_color=0033c5"
                            :height="650"></vue-calendly>
                    </div>
                    <div v-else-if="this.salesperson === 'Angie Warner'">
                        <vue-calendly url="https://calendly.com/angiew-1/30min?text_color=000000&primary_color=0033c5"
                            :height="650"></vue-calendly>
                    </div>
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
    data() {
        return {
            salesperson: ''
        }
    },
    created() {
        this.fetchData();
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
        },
        async fetchData() {
            const salesperson = await axios.get('/api/lead/next-assignment');
            this.salesperson = salesperson.data;
            // const lead = await axios.post('/api/lead', {
            //             salesperson: salesperson.data
            //         });
            // const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);
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

    .heroImage {
        padding-top: 100px;
        width: 150px;
    }

    .textBox {
        background: linear-gradient(268deg, #c9c9c92e, #f5f5f52e);
        border-radius: 5px;
        color: rgb(24, 24, 24);
        padding: 20px;
    }
}
</style>