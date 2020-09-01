<template>
    <section class="video-resources-lock">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Free Business Video Resources</h1>
                        <p>
                            Here are 11 professionally filmed business video lectures by Dr. Tony Alessandra – all yours for free!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Here Are Your Free Videos!</h2>

                    <p>
                        Thank you for submitting the form to receive these <strong>11 free business videos</strong>. If you are interested about
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
                        <a href="https://www.youtube.com/watch?v=_78TmA_Y-h8" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Using Space and Time
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=XeDe485iZXg" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Time Management Skills
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=-3UqsxgnRZ0" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                The Power of Nonverbal Communication
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=aA7n9Y5XzSo" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                The Power of Listening
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=nEh1hIXlcbM" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Silent Messages
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=GRmidQEzUUU" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Goal Setting
                            </li>
                        </a>
                    </ul>
                </div>

                <div class="col-6">
                    <ul class="resources">
                        <a href="https://www.youtube.com/watch?v=dnlnz6eaMRM" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Expanding Your Vision &amp; Ideas
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=qfD6ZFWUAKY" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Effective Presentation Skills
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=JiNvF-FB2jU" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                10 Versatility Traits
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=mw0iTwGNRFU" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                10 Flexibility Traits
                            </li>
                        </a>

                        <a href="https://www.youtube.com/watch?v=o4is7gYDMY0" target="_blank" rel="noopener">
                            <li class="resource a24x7">
                                Developing Your Charisma
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
                title: 'Download Video Resources | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Here are 11 professionally filmed business video lectures by Dr. Tony Alessandra – all yours for free!'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-resources-lock {
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