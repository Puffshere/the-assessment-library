<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Motivators Assessment Badge</h1>
                        <p>
                            Put the official Certified Motivators Practitioner badge on your website or in your email signature! 
                            Simply copy & paste the code below OR drag & drop the logo above to your desktop to upload.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="image" src="/images/motivators-cert-badge.png" alt="Motivators Certification">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2>For your email signature:</h2>
                    <code>
                        <pre>
&lt;img src="https://www.assessments24x7.com/images/motivators-cert-badge.png" alt="Motivators Certification"/&gt;</pre>
                    </code>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h2>For your website:</h2>
                    <code>
                        <pre>
&lt;a href="https://www.assessments24x7.com" title="Assessments 24x7" target="_blank"&gt;
    &lt;img src="http://www.assessments24x7.com/images/motivators-cert-badge.png" alt="Motivators Certification" style="border:none;" /&gt;
&lt;/a&gt;</pre>
                    </code>
                </div>
            </div>
        </div><br/><br/><br/>

        <footer-fold></footer-fold>
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

        .image {
            margin: 0 auto;
            display: block;
        }

        code {
            display: block;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            overflow-x: scroll;
            background: #eaeaea;
            color: #272b37;

            pre {
                padding: 0;
            }
        }
    }
</style>