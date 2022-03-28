<template>
    <section class="bizx">
        <main-nav/>

        <section class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img class="bizx-logo" src="~/assets/bizx-logo.png" alt="BizX">
                        <h2>DISC Certification</h2>
                        <h3>Sale</h3>
                        <h4>Online & Self-Paced</h4>
                    </div>
                </div>
            </div>

            <img class="banner-texture" src="~/assets/bizx-texture.png" alt="">
        </section>

        <section class="promo-body">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5>25% OFF</h5>
                        <h6>Limited time offer<br/>Must be purchased during the conference</h6>
                    </div>
                </div>

                <div class="row certifications">
                    <div class="col-2"></div>

                    <div class="col-4">
                        <img class="certification-badge" src="~/assets/badges/new/disc-cert-badge-color-label.png" alt="DISC Certification"><br/>
                        <h6 class="certification-title color-disc">DISC Certification<br/>$1,195 USD</h6>
                        <a href="https://buy.stripe.com/eVa28I12RbuL1Ne4gM" target="_blank" class="button">Buy DISC Certification</a>
                    </div>

                    <div class="col-4">
                        <img class="certification-badge" src="~/assets/badges/new/mot-cert-badge-color-label.png" alt="Motivators Certification"><br/>
                        <h6 class="certification-title color-mot">Motivators Certification<br/>$1,195 USD</h6>
                        <a href="https://buy.stripe.com/aEU6oYeTH7ev4Zq28F" target="_blank" class="button mot">Buy Motivators Certification</a>
                    </div>
                </div>

                <div class="row" style="margin-top: 75px">
                    <div class="col-12" style="text-align: center">
                        <h6 style="margin-bottom: 20px;">Save even more! Purchase both certifications for $2,300</h6>
                        <a href="https://buy.stripe.com/28odRq9zn7ev4Zq5kS" target="_blank" class="button secondary">Purchase Certification Bundle</a>
                    </div>
                </div>
            </div>
        </section>

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
    .bizx {
        .banner {
            background: url('~assets/hero.jpg');
            background-size: cover;
            background-position: center;
            color: #fff;
            text-align: center;
            padding: 40px 0 80px;
            margin-bottom: 30px;
            position: relative;

            .bizx-logo {
                width: 100%;
                max-width: 200px;
            }

            h2 {
                font-size: 30pt;
                margin-top: 20px;
                margin-bottom: 0;
            }

            h3 {
                font-size: 90pt;
                margin-bottom: 0;
                margin-top: -20px;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            h4 {
                font-size: 26pt;
                margin-top: -20px;
            }

            .banner-texture {
                position: absolute;
                width: 100%;
                left: 0;
                bottom: 0;
            }
        }

        .promo-body {
            margin-bottom: 80px;

            h5 {
                text-align: center;
                font-size: 50pt;
                margin-bottom: 0;
                margin-top: 0;
            }

            h6 {
                text-align: center;
                font-size: 18pt;
                margin-top: 0;
                text-transform: uppercase;
            }

            .certifications {
                text-align: center;

                .certification-badge {
                    width: 100%;
                    max-width: 200px;
                    margin-bottom: 20px;
                }

                .certification-title  {
                    font-size: 16pt;
                    margin-top: -10px;
                    margin-bottom: 20px;
                }

                .color-disc {
                    color: #0033c5;
                }

                .color-mot {
                    color: #f9690e;
                }

                .button {
                    margin-right: 0;
                }
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