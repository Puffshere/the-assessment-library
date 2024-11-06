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
                    <h2>Schedule a Meeting with<br/>Cristina Moore</h2>

                    <p>
                        <strong>About Me: </strong>Hi there! My name is Cristina Moore, Senior Account Manager here at Assessments 24x7. My background includes extensive Corporate Sales experience in the Clean Beauty and Wellness industries for national beauty retailers. I leverage my attention to detail and analytical skills to discover synergy between companies and establish thriving partnerships. I'm dedicated to providing outstanding customer service and developing innovative strategies to maximize your success with Assessments!
                        <br/><br/>

                        <strong>Hobbies & Fun Facts: </strong>My favorite movies of all time are The Godfather trilogy. Even named my dog Sonny! Outside of movies, I love to be outdoors. I'm currently learning to golf and enjoy hiking all over San Diego with my family.<br/><br/>

                        My DISC Style is: <strong>ICs</strong>
                    </p><br/>
                </div>

                <div class="col-6">
                    <div class="calendly-inline-widget"
                        data-url="https://calendly.com/cristina-moore/30min?text_color=000000&primary_color=0033c5"
                        data-resize="true" style="min-width:320px; max-height:650px;">
                    </div>
                
                    <p style="text-align: center; font-size: 10pt;">
                        You can also email me at <a class="hyperlink" href="mailto:cristina@assessments24x7.com">cristina@assessments24x7.com</a><br/>
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