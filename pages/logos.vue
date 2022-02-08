<template>
    <section class="logos">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Example logo sizes for PDF reports (In Pixels)</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Types: .JPG, .PNG, .GIF</h2>
                    <p>
                        Here are some examples of the sizes of 
                        logos that will work best on our PDF 
                        reports. You can choose a size that 
                        works best for you. Anything within a 
                        500 pixel by 300 pixel dimension will 
                        work just fine.
                    </p>
                    <img class="image" src="images/example1.png" width="500" height="200"><br/>
                    <img class="image" src="images/example2.png" width="300" height="200"><br/>
                    <img class="image" src="images/example3.png" width="400" height="150"><br/>
                    <img class="image" src="images/example4.png" width="200" height="200">
                </div>
            </div>
        </div>

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
    .logos {
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
            margin-bottom: 10px;
        }
    }
</style>