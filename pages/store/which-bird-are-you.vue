<template>
    <section class="disc-profiler-deck">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img class="take-flight-icon" src="~/assets/partner-logos/take-flight-learning-white.png" alt="Take Flight Learning Logo">
                        <h1 class="section-title">Teacher's Guide & Materials</h1>
                        <p>
                            In collaboration with Take Flight Learning, Assessments 24x7 is proud to offer the "Which Bird Are You?" guides. This product enables 
                            teachers to help children enhance their social and emotional skills as they discover what makes them special.
                        </p>
                    </div>
                </div>
            </div>
        </section><br/>

        <div class="container">
            <div class="row">
                <div class="col-5">
                    <img class="product-image" src="~/assets/shop/which-bird-are-you.jpg" alt="Which Bird Are You?: Teachers Guide">
                </div>

                <div class="col-7">
                    <h2>Which Bird Are You?</h2>
                    <h3>Ten-Lesson Curriculum for Teaching Personality in the Classroom </h3>

                    <p>
                        The Which Bird Are You?: Ten-Lesson Curriculum for Teaching Personality in the Classroom Teacher’s Guide & Teacher’s Supplemental 
                        Materials teaches 8 to 12-year-old children about the four styles we call Eagles, Parrots, Doves, and Owls. The birds bring personality 
                        to life with imagery that is instantly recognizable and memorable. The Which Bird Are You? Teacher’s Guide makes it easy for teachers to 
                        lead ten fun and interactive lessons to help children learn about the styles, themselves, and others.
                    </p><br/>

                    <button class="button success" @click="addToCart">BUY NOW FOR $50.00 (FREE SHIPPING)</button>

                    <p class="price">
                        <span class="discount">$99.00</span>
                        $50.00
                        <span class="shipping">FREE SHIPPING</span>
                    </p>
                </div>
            </div>
        </div>

        <section class="how-it-works">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3>Product Description</h3>

                        <p>
                            In the first lesson, students discover the four bird styles in the read-aloud book, Flight School. In the next four lessons, 
                            students learn about the Eagle, Parrot, Dove, and Owl styles. In the next four lessons, students learn how to answer the four 
                            questions of The Chameleon Code found in the book, Which Bird Are You?. The questions include: Which bird are you?, Is my bird at 
                            its best?, Which bird are they?, and What would the Chameleon do?. In the final lesson, students review and summarize their learning 
                            about the styles and themselves.
                        </p>

                        <p>
                            The Teachers’ Guide will enable teachers to help children enhance their social and emotional skills as they discover what makes them 
                            special. As teachers learn about the four styles, they will learn how to flex their teaching style to match the personality needs of 
                            their students. In addition, they will learn to create an engaging and inclusive environment for all students.
                        </p>

                        <p>
                            <small>
                                <i>Shipping is only available to the United States.</i><br/>
                                Dimensions: 11 &times; 8.5 &times; .4 in<br/>
                                Weight: .4 lbs
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <br/><br/>

        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            'main-nav': Nav,
            'client-logos': () => import('@/components/ClientLogos'),
            'footer-fold': Footer
        },
        data() {
            return {}
        },
        methods: {
            addToCart() {
                this.$toast.open({
                    message: '"Which Bird Are You?: Ten-Lesson Curriculum" has been added to your shopping cart.',
                    onClick: () => {
                        $nuxt.$emit('openCartModal');
                    }
                });
                this.$store.dispatch('cart/addToCart', {
                    id: '1',
                    stripeId: 'price_1LVEPrBPiAffrwrymaFeTdCZ',
                    name: 'Which Bird Are You?: Ten-Lesson Curriculum...',
                    price: '5000',
                    slug: 'which-bird-are-you'
                });
            }
        },
        head() {
            return {
                title: 'Which Bird Are You? | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'In collaboration with Take Flight Learning, Assessments 24x7 is proud to offer the "Which Bird Are You?" guides. This product enables teachers to help children enhance their social and emotional skills as they discover what makes them special.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .disc-profiler-deck {
        .header {
            background: url('~assets/disc-kids-hero-bg.jpg');
            background-size: cover;
            background-position: bottom;
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
            font-size: 26pt;
            line-height: 24pt;
            margin: 0;
        }

        .take-flight-icon {
            width: 300px;
            margin-bottom: 20px;
        }

        .product-image {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            display: block;
            border-radius: 20px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .price {
            font-weight: 600;
            font-size: 22pt;
            margin-top: -12px;
            float: right;
            line-height: 24px;

            .discount {
                color: red;
                text-decoration: line-through;
                opacity: .5;
                display: block;
                font-size: 12pt;
            }

            .shipping {
                font-size: 12pt;
                display: block;
                color: #666;
            }
        }

        .how-it-works {
            margin: 30px 0;

            h3 {
                font-size: 17pt;
                line-height: 24pt;
                margin: 0;
            }

            .button {
                color: #1e222d;
            }
        }

        .image {
            width: 100%;
            height: 230px;
            margin-top: 20px;
            margin-right: 30px;
            margin-bottom: 14px;
            border-radius: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
    }
</style>
