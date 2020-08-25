<template>
    <section class="shop">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Product Shop</h1>
                        <p>
                            As the global leader in assessment technology, we know there is still a need for physical assessment products. These useful physical
                            tools can be helpful for almost any business looking for something extra.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Product Catalog</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="product">
                        <nuxt-link to="/store/disc-profiler-deck" class="link">
                            <img class="image" src="~/assets/shop/disc-cards-1.jpg" alt="DISC Profiler Card Deck">
                            <h3 class="title">DISC Profiler Card Deck</h3>
                        </nuxt-link>

                        <p class="price"><span class="discount">$99.00</span> $34.95</p>
                        
                        <nuxt-link to="/store/disc-profiler-deck" class="button primary">View Details</nuxt-link>
                    </div>
                </div>

                <div class="col-3">
                    <div class="product">
                        <img class="image" src="~/assets/shop/coming-soon.jpg" alt="Coming Soon">
                        <h3 class="title">Product Coming Soon</h3>

                        <p class="price">$0.00</p>
                        
                        <button class="button primary disabled">Not Available</button>
                    </div>
                </div>

                <div class="col-3">
                    <div class="product">
                        <img class="image" src="~/assets/shop/coming-soon.jpg" alt="Coming Soon">
                        <h3 class="title">Product Coming Soon</h3>

                        <p class="price">$0.00</p>
                        
                        <button class="button primary disabled">Not Available</button>
                    </div>
                </div>

                <div class="col-3">
                    <div class="product">
                        <img class="image" src="~/assets/shop/coming-soon.jpg" alt="Coming Soon">
                        <h3 class="title">Product Coming Soon</h3>

                        <p class="price">$0.00</p>
                        
                        <button class="button primary disabled">Not Available</button>
                    </div>
                </div>
            </div>
        </div><br/>

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
        }
    }
</script>

<style lang="scss" scoped>
    .shop {
        .header {
            background: url('~assets/shop.jpg');
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

        .product {
            margin-bottom: 30px;

            .link {
                text-decoration: none;
            }

            .image {
                width: 100%;
                max-width: 300px;
                margin: 0 auto;
                display: block;
            }

            .title {
                margin: 8px 0 0;
                color: #000;
                font-style: none;
            }

            .price {
                font-weight: 600;
                font-size: 13pt;
                margin-top: 0;

                .discount {
                    color: red;
                    text-decoration: line-through;
                    opacity: .5;
                }
            }

            .button {
                display: block;
                width: 100%;
            }
        }
    }
</style>