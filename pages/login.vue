<template>
    <section class="login">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Select Your Login Domain</h1>
                        <p>
                            If you are having trouble remembering your login domain, use the list below to jog your memory. Click the domain that your 
                            account belongs to and log in with your credentials.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="domains">
                        <div class="domain" v-for="domain in domains" :key="domain.name">
                            <div class="icon" :style="`background: url('/domains/${domain.icon}')`"></div>
                            <div class="info">
                                <a class="link" :href="domain.url" target="_blank">
                                    <h2 class="name">{{ domain.name }}</h2>
                                    <p class="url">{{ domain.url }}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="help">
                        <p>
                            <strong>Still having trouble?</strong> If you are unable to locate your login domain, please contact us at 
                            <a class="hyperlink" target="_blank" href="mailto:support@assessents24x7.com">support@assessents24x7.com</a> for assistance.
                        </p>
                    </div>
                </div>
            </div>
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
                domains: [
                    {
                        name: 'Assessments247.net',
                        url: 'https://assessments247.net/account',
                        icon: 'a24x7.jpg'
                    },
                    {
                        name: 'Assessments123.com',
                        url: 'https://assessments123.com/account',
                        icon: 'a24x7.jpg'
                    },
                    {
                        name: 'a24x7.co',
                        url: 'https://a24x7.co/account',
                        icon: 'a24x7.jpg'
                    },
                    {
                        name: 'a24x7.biz',
                        url: 'https://a24x7.biz/account',
                        icon: 'a24x7.jpg'
                    },
                    {
                        name: 'ActionCOACHAssessments.com',
                        url: 'https://ActionCOACHAssessments.com/account',
                        icon: 'actioncoach.jpg'
                    },
                ]
            }
        },
        head() {
            return {
                title: 'Login | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'If you are having trouble remembering your login domain, use the list below to jog your memory. Click the domain that your account belongs to and log in with your credentials.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
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

        .domains {
            width: 100%;
            max-width: 600px;
            margin: 30px auto 0;

            .domain {
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,.1);
                margin: 20px 0;
                padding: 20px;

                .icon {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-size: cover !important;
                    margin-right: 10px;
                    box-shadow: 0 0 5px rgba(0,0,0,0.05);
                }

                .info {
                    display: inline-block;

                    .link {
                        text-decoration: none;

                        .name {
                            color: #000;
                            font-size: 14pt;
                            margin: 0;
                        }

                        .url {
                            color: #666;
                            margin: 0;
                            font-size: 10pt;
                        }
                    }
                }
            }
        }

        .help {
            width: 100%;
            max-width: 600px;
            text-align: center;
            color: #444;
            margin: 0 auto 60px;

            a {
                color: #444;
            }
        }
    }
</style>