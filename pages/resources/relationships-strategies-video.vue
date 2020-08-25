<template>
    <section class="skeleton">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Relationship Strategies Video</h1>
                        <p>
                            The Assessments 24x7 (A24x7) team is a close-knit group of family & friends, with experience at the highest levels in business. 
                            With proven success and 25 years’ experience in the industry, we serve a diverse portfolio of clients from individual coaches 
                            to large corporations that include Coca-Cola, Nationwide Insurance, and Tony Robbins.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <iframe style="width:100%" height="650" src="https://www.youtube.com/embed/1-dcoPHKMOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        head() {
            return {
                title: 'DISC Relationship Strategies Video | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The Assessments 24x7 (A24x7) team is a close-knit group of family & friends, with experience at the highest levels in business.'
                    }
                ]
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