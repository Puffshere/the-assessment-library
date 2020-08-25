<template>
    <section class="ebook-resources-lock">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">eBook Resources</h1>
                        <p>
                            Here are 9 full published business eBooks by Dr. Tony Alessandra – all yours for free!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Here Are Your Free eBooks!</h2>

                    <p>
                        Thank you for submitting the form to receive these <strong>9 free sales &amp; business ebooks</strong>. If you are interested about
                        <nuxt-link class="hyperlink" to="/assessments/disc">DISC</nuxt-link> or any of our other 
                        <nuxt-link class="hyperlink" to="/assessments">assessment products</nuxt-link>, do not hesitate to email a representative at 
                        <a class="hyperlink" href="mailto:sales@assessments24x7.com">sales@assessments24x7.com</a> or give us a call at 
                        <a class="hyperlink" href="tel:12064006647">+1 (206) 400-6647</a>.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <ul class="resources">
                        <a href="/lock/ebooks/Collaborative Selling 143-page PDF eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Collaborative Selling
                            </li>
                        </a>

                        <a href="/lock/ebooks/Game-Changing_Life_Strategies_eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Game Changing Life Strategies
                            </li>
                        </a>

                        <a href="/lock/ebooks/Non-Manipulative Selling 179-page PDF eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Non-Manipulative Selling
                            </li>
                        </a>

                        <a href="/lock/ebooks/People Smart in Business 220-page eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                People Smart in Business
                            </li>
                        </a>

                        <a href="/lock/ebooks/People Smart with Family and Friends eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                People Smart with Family and Friends
                            </li>
                        </a>
                    </ul>
                </div>

                <div class="col-6">
                    <ul class="resources">
                        <a href="/lock/ebooks/Platinum Rule 163-page PDF eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Platinum Rule
                            </li>
                        </a>

                        <a href="/lock/ebooks/Platinum Rule for DISC Sales Mastery eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Platinum Rule for DISC Sales Mastery
                            </li>
                        </a>

                        <a href="/lock/ebooks/Platinum Rule for Small Business Mastery 176-page PDF eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Platinum Rule for Small Business Mastery
                            </li>
                        </a>

                        <a href="/lock/ebooks/Platinum Rule for Trade Show Mastery 224-page PDF eBook.pdf" target="_blank">
                            <li class="resource a24x7">
                                Platinum Rule for Trade Show Mastery
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>

        <stats style="margin-bottom: 0"/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Stats from '@/components/Stats';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'stats': Stats,
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'Download eBook Resources | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Here are 9 full published business eBooks by Dr. Tony Alessandra – all yours for free!'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ebook-resources-lock {
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

        .resources {
            padding-left: 0;
            list-style: none;

            a {
                text-decoration: none;
            }

            .resource {
                padding: 10px;
                background: #f7f7f7;
                margin-bottom: 6px;
                border-radius: 10px;
                color: #fff;
                font-weight: 600;

                &.a24x7 {
                    background: linear-gradient(268deg, #0999fe, #0249ec);
                }
            }
        }
    }
</style>