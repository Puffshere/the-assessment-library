<template>
    <section class="trainer-materials">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Trainer Materials</h1>
                        <p>
                            The Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, 
                            reports and models, and gives quick access to class/workshop materials you may need. Explore these at your leisure - you will find there are many 
                            useful and valuable resources to support your continued development, understanding and application!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-4">
                    <nuxt-link class="link" to="/resources/trainer-materials/disc">
                        <img class="badge" src="~/assets/badges/new/disc-cert-badge-color-label.png" alt="DISC Trainer Materials">
                        <h2>DISC Trainer Materials</h2>
                        <p class="description">Click here to access the DISC trainer materials login portal.</p>
                    </nuxt-link>
                </div>

                <div class="col-4">
                    <nuxt-link class="link" to="/resources/trainer-materials/motivators">
                        <img class="badge" src="~/assets/badges/new/mot-cert-badge-color-label.png" alt="Motivators Trainer Materials">
                        <h2>Motivators Trainer Materials</h2>
                        <p class="description">Click here to access the Motivators trainer materials login portal.</p>
                    </nuxt-link>
                </div>

                <div class="col-4">
                    <nuxt-link class="link" to="/resources/trainer-materials/emotional-intelligence">
                        <img class="badge" src="~/assets/badges/new/eiq-cert-badge-color-label.png" alt="EIQ-2 Trainer Materials">
                        <h2>EIQ-2 Trainer Materials</h2>
                        <p class="description">Click here to access the EIQ-2 trainer materials login portal.</p>
                    </nuxt-link>
                </div>
            </div><br/>

            <div class="row">
                <div class="col-4">
                    <nuxt-link class="link" to="/resources/trainer-materials/critical-thinking">
                        <img class="badge" src="~/assets/badges/new/hartman-cert-badge-color-label.png" alt="Critical Thinking Trainer Materials">
                        <h2>Critical Thinking (HVP) Trainer Materials</h2>
                        <p class="description">Click here to access the Critical Thinking trainer materials login portal.</p>
                    </nuxt-link>
                </div>

                <div class="col-4">
                    <nuxt-link class="link" to="/resources/trainer-materials/learning-styles">
                        <img class="badge" src="~/assets/badges/new/learning-cert-badge-color-label.png" alt="Learning Styles Trainer Materials">
                        <h2>Learning Styles Trainer Materials</h2>
                        <p class="description">Click here to access the Learning Styles trainer materials login portal.</p>
                    </nuxt-link>
                </div>

                <div class="col-4">
                    <nuxt-link class="link" to="/resources/trainer-materials/sales-iq">
                        <img class="badge" src="~/assets/badges/new/sales-iq-cert-badge-color-label.png" alt="Sales IQ Trainer Materials">
                        <h2>Sales IQ Trainer Materials</h2>
                        <p class="description">Click here to access the Sales IQ trainer materials login portal.</p>
                    </nuxt-link>
                </div>
            </div><br/><br/>
        </div>

        <footer-fold/>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .trainer-materials {
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
            margin-bottom: 0;
        }

        .link {
            color: #000;
            text-decoration: none;
            text-align: center;

            .badge {
                width: 100%;
                max-width: 250px;
                margin: 0 auto;
                display: block;
            }

            p {
                margin-top: 8px;
            }

            .button {
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>