<template>
    <section class="account-plus-upgrade">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Account Plus Upgrade</h1>
                        <p>
                            Learn all about the Account Plus upgrade option available to Assessments 24x7 account holders. Account Plus offers highly 
                            customizable features to your existing Assessments 24x7 account.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Account Plus Upgrade Virtual Tour</h2>

                    <iframe style="width:100%;height:600px;max-height:100%;" height="600" src="https://www.youtube.com/embed/zwFJTKjrgzk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <br/><br/><br/>

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
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    }
                ],
                title: 'Account Plus Upgrade | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Learn all about the Account Plus upgrade option available to Assessments 24x7 account holders. Account Plus offers highly customizable features to your existing Assessments 24x7 account.'
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .account-plus-upgrade {
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