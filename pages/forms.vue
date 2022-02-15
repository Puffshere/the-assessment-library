<template>
    <section class="forms">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Request Forms</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Official Request Forms</h2>
                    
                    <p>
                        This page is for internal use only. You can bookmark this page as a quick reference to Assessments 24x7 department request forms. 
                        Each request form is for submitting tickets for the corresponding department. These links may change over time, so please reference 
                        this page first. When in doubt, use the form!
                    </p>
                </div>
            </div>

            <div class="row flex-center">
                <div class="col-6">
                    <ul class="resources">
                        <a target="_blank" href="https://form.asana.com/?k=GaI7gFjDe0froa_H4koKNw&d=460673300006490">
                            <li class="resource marketing">
                                Marketing Team Request Form
                            </li>
                        </a>

                        <a target="_blank" href="https://form.asana.com/?k=YCSB-IWeQgLnQUMNxxiEjQ&d=460673300006490">
                            <li class="resource training">
                                Training Team Request Form
                            </li>
                        </a>

                        <a target="_blank" href="https://form.asana.com/?k=imQ5iceoN9QkK7VkpLiYQQ&d=460673300006490">
                            <li class="resource support">
                                Support Team Request Form
                            </li>
                        </a>

                        <a target="_blank" href="https://form.asana.com/?k=-yxazr6big4-S5muOfIHXw&d=460673300006490">
                            <li class="resource development">
                                Development Team Request Form
                            </li>
                        </a>

                        <a target="_blank" href="https://form.asana.com/?k=8wVHOZo8OayfLFz9UhjCbA&d=460673300006490">
                            <li class="resource custom">
                                Custom Work (Client Facing)
                            </li>
                        </a>
                    </ul>
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
        head() {
            return {
                title: 'Forms | Assessments 24x7',
                meta: [
                    {
                        hid: 'robots',
                        name: 'robots',
                        content: 'noindex'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .forms {
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
            margin-bottom: 60px;

            a {
                text-decoration: none;
            }

            .resource {
                padding: 10px;
                background: #f7f7f7;
                margin-bottom: 12px;
                border-radius: 10px;
                color: #fff;
                font-weight: 600;

                &.marketing {
                    background: linear-gradient(268deg, #0999fe, #0249ec);
                }

                &.training {
                    background: linear-gradient(268deg, #ffa518, #fc542a);
                }

                &.support {
                    background: linear-gradient(268deg, #fa4ca6, #ff2f4c);
                }

                &.development {
                    background: linear-gradient(268deg, #303542, #1e222d);
                }

                &.custom {
                    background: linear-gradient(268deg, #b82cff, #540bfb);
                }
            }
        }
    }
</style>