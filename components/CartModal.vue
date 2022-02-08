<template>
    <transition name="fade">
        <section v-if="isOpen" class="cart-modal-window">
            <div class="container">
                <a href="#" title="Close" class="modal-close" @click="close">Close</a>
                <h1>Shopping Cart</h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th class="center">Quantity</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(product, index) in products" :key="product.id">
                            <td><button type="button" class="remove" @click="removeFromCart(product)">&times;</button> {{ product.name }}</td>
                            <td class="center"><input type="number" style="text-align:center;max-width:80px;height:34px;font-size:12pt;" v-model="products[index].quantity" min="1" @change="changeQuantity(product)"></td>
                            <td class="right" style="padding-left:30px">{{ product.price * product.quantity | currencyFromCents }}</td>
                        </tr>
                    </tbody>
                </table><br/>

                <div class="shipping">Free Shipping: $0.00</div><br/>
                <div class="total">Cart Total: {{ cartTotal | currencyFromCents }}</div><br/>

                <button class="button" @click="purchase">Checkout {{ cartTotal | currencyFromCents }}</button>
                <nuxt-link to="/store" class="hyperlink">Continue Shopping &rarr;</nuxt-link>
            </div>
        </section>
    </transition>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { loadStripe } from '@stripe/stripe-js';

    export default {
        data() {
            return {
                stripe: null,
                isOpen: false
            }
        },
        async created() {
            this.stripe = await loadStripe('pk_live_6Jq66rYmJ3XnKRrThahwThER00vVN8K8hW');

            this.$nuxt.$on('openCartModal', () => {
                this.isOpen = true;
            });
        },
        methods: {
            ...mapActions({
                removeFromCart: 'cart/removeFromCart',
                changeQuantity: 'cart/changeQuantity'
            }),
            close() {
                this.isOpen = false;

                this.$nuxt.$on('openCartModal', () => {
                    this.isOpen = true;
                });
            },
            async purchase() {
                const {error} = await this.stripe.redirectToCheckout({
                    lineItems: this.lineItems,
                    mode: 'payment',
                    successUrl: 'https://www.assessments24x7.com/store/purchase-confirmation',
                    cancelUrl: 'https://www.assessments24x7.com/store',
                    billingAddressCollection: 'required',
                    clientReferenceId: 'physical',
                    shippingAddressCollection: {
                        allowedCountries: ['US']
                    }
                });

                if (error) {
                    console.log(error.message);
                } 
            }
        },
        computed: {
            ...mapGetters({
                products: 'cart/cartProducts'
            }),
            cartTotal() {
                let total = 0;

                for (let product of this.products) {
                    console.log(product.price);
                    total += parseInt(product.price) * product.quantity;
                }

                return total;
            },
            lineItems() {
                let itemsArray = [];

                for (let product of this.products) {
                    itemsArray.push({
                        price: product.stripeId,
                        quantity: product.quantity
                    });
                }

                return itemsArray;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cart-modal-window {
        position: fixed;
        background-color: rgba(0,0,0,.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999999;
        transition: all 0.25s;

        .container {
            width: 100%;
            max-width: 650px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 40px 20px;
            background: #fff;
            border-radius: 20px;

            .modal-close {
                color: #aaa;
                line-height: 50px;
                font-size: 12pt;
                position: absolute;
                right: 0;
                text-align: center;
                top: 0;
                width: 70px;
                text-decoration: none;

                &:hover {
                    color: #000;
                }
            }

            h1 {
                margin: 0;
                font-size: 18pt;
            }

            .table {
                width: 100%;
                margin-top: 20px;

                thead {
                    text-align: left;
                }

                .center {
                    text-align: center;
                }

                .right {
                    text-align: right;
                }

                .remove {
                    border-radius: 50%;
                    background: #bbb;
                    color: #fff;
                    text-align: center;
                    border: 0;
                    height: 18px;
                    width: 18px;
                    line-height: 18px;
                    font-size: 10pt;
                    margin-right: 6px;
                    cursor: pointer;
                }
            }

            .total, .shipping {
                float: right;
                font-weight: 600;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>