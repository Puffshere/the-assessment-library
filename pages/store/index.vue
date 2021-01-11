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

            <div class="row flex-wrap">
                <div class="col-3" v-for="product in products" :key="product.id">
                    <div class="product">
                        <img class="image" :src="require(`~/assets/shop/${product.slug}.jpg`)" :alt="product.name">
                        <h3 class="title">{{ product.name }}</h3>

                        <p class="price">{{ product.price | currencyFromCents }}</p>
                        
                        <button class="button primary" @click="addToCart(product)">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div><br/><br/><br/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    import { mapGetters, mapActions } from 'vuex';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer
        },
        computed: mapGetters({
            products: 'cart/allProducts'
        }),
        methods: {
            ...mapActions({
                addToCart: 'cart/addToCart'
            })
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
                border-radius: 5px;
                box-shadow: 0 10px 20px rgba(0,0,0,.1);
            }

            .title {
                margin: 8px 0 0;
                color: #000;
                font-style: none;
            }

            .price {
                font-weight: 600;
                font-size: 13pt;
                margin-top: 10px;

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