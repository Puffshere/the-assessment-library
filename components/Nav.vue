<template>
    <header v-if="!hidden">
        <cart-modal/>

        <div class="info-bar">
            <p>
                <strong>Available Now:</strong> Kids DISC! Each child's bird style is their superpower. <nuxt-link class="hyperlink light" to="/assessments/kids-disc">Discover Kids DISC &rarr;</nuxt-link>
            </p>
        </div>

        <nav class="container">
            <div class="row">
                <div class="col-3">
                    <logo></logo>
                </div>

                <div class="col-9 nav-collapse-container">
                    <div class="nav-collapse">
                        <ul class="nav-bar">
                            <li class="nav-item" @mouseover="hover.assessments = true" @mouseleave="hover.assessments = false">
                                <a href="/assessments" :class="{ active: active == 'assessments' }">Assessments</a>

                                <ul :class="{ active: hover.assessments, 'sub-nav-category': true }">
                                    <span class="title">Core Assessments</span>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/disc">DISC</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/motivators">Motivators</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/sample-reports">Sample Reports</a>
                                    </li>

                                    <span class="title">360&deg; Assessments</span>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/360/disc">DISC 360&deg;</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/360/eiq">EIQ-2 360&deg;</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/360/leadership-effectiveness">Leadership Effectiveness</a>
                                    </li>

                                    <span class="title">Additional Assessments</span>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/kids-disc">Kids DISC</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/emotional-intelligence">Emotional Intelligence</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/learning-styles">Learning Styles</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/assessments/sales-iq">Sales IQ Plus</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="https://www.hiresense.com" target="_blank" rel="noopener">Hiring &amp; Selection</a>
                            </li>
                            
                            <li class="nav-item" @mouseover="hover.training = true" @mouseleave="hover.training = false">
                                <a href="/certifications" :class="{ active: active == 'training' }">Certifications</a>

                                <ul :class="{ active: hover.training, 'sub-nav-category': true }">
                                    <span class="title">Training Topics</span>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/assessment">Assessment Certifications</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/workshop-certification">Workshop Certification</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/directory/coaches">Coach Directory</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/certifications/directory/workshop-leaders">Workshop Leaders</a>
                                    </li>

                                    <!--<li class="sub-nav-item">
                                        <a href="/certifications/continuing-education">Continuing Education</a>
                                    </li>-->
                                </ul>
                            </li>

                            <li class="nav-item" @mouseover="hover.about = true" @mouseleave="hover.about = false">
                                <a href="/about" :class="{ active: active == 'about' }">About</a>

                                <ul :class="{ active: hover.about, 'sub-nav-category': true }">
                                    <span class="title">About Us</span>

                                    <li class="sub-nav-item">
                                        <a href="/about/difference">Our Difference</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/testimonials">Testimonials</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/account-plus">Account Plus</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/partners">Partners</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item" @mouseover="hover.resources = true" @mouseleave="hover.resources = false">
                                <a href="javascript:void(0)" :class="{ active: active == 'resources' }">Resources</a>

                                <ul :class="{ active: hover.resources, 'sub-nav-category': true }">
                                    <span class="title">Resources</span>

                                    <li class="sub-nav-item">
                                        <a href="/blog">Blog</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/why-use-assessments">Why Use Assessments?</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/what-is-disc">What is DISC?</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/validity">Validity Studies</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/resources/webinars">Webinars</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/store">Store</a>
                                    </li>

                                    <li class="sub-nav-item">
                                        <a href="/about/faq">FAQs</a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a href="/contact" :class="{ active: active == 'contact' }">Contact</a>
                            </li>

                            <li class="nav-item shopping-cart desktop" @click="openCart" v-show="cartTotalProducts">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#fff" stroke-width="2" class="cart-icon">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>

                                <span class="cart-total-items" v-show="cartTotalProducts">{{ cartTotalProducts }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="hamburger">
                        <input type="checkbox" @click="toggleMobileMenu()" aria-label="Open mobile navigation menu" />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="shopping-cart mobile" @click="openCart" v-show="cartTotalProducts">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#fff" stroke-width="2" class="cart-icon">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>

                        <span class="cart-total-items" v-show="cartTotalProducts">{{ cartTotalProducts }}</span>
                    </div>
                </div>
            </div>
        </nav>

        <div :class="{ 'mobile-menu': true, 'show': showMobileMenu }">
            <ul class="nav-bar">
                <li class="nav-item">
                    <a href="/assessments">Assessments</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/disc">DISC</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/motivators">Motivators</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/emotional-intelligence">Emotional Intelligence</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/learning-styles">Learning Styles</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/kids-disc">Kids DISC</a>
                </li>

                <li class="nav-item indent">
                    <a href="/sample-reports">Sample Reports</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/360/disc">DISC 360</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/360/eiq">EIQ-2 360</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/360/leadership-effectiveness">Leadership Effectiveness</a>
                </li>

                <li class="nav-item indent">
                    <a href="/assessments/sales-iq">Sales IQ Plus</a>
                </li>
                
                <li class="nav-item">
                    <a href="https://www.hiresense.com" target="_blank" rel="noopener">Hiring & Selection</a>
                </li>

                <li class="nav-item">
                    <a href="/certifications">Certifications</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/assessment">Assessment Certifications</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/workshop-certification">Workshop Certification</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/directory/coaches">Coach Directory</a>
                </li>

                <li class="nav-item indent">
                    <a href="/certifications/directory/workshop-leaders">Workshop Leaders</a>
                </li>
                
                <li class="nav-item">
                    <a href="/about">About</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/difference">Our Difference</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/testimonials">Testimonials</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/account-plus">Account Plus</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/partners">Partners</a>
                </li>

                <li class="nav-item">
                    <a href="javascript:void(0)">Resources</a>
                </li>

                <li class="nav-item indent">
                    <a href="/blog">Blog</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/why-use-assessments">Why Use Assessments</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/what-is-disc">What is DISC?</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/validity">Validity Studies</a>
                </li>

                <li class="nav-item indent">
                    <a href="/resources/webinars">Webinars</a>
                </li>

                <li class="nav-item indent">
                    <a href="/store">Store</a>
                </li>

                <li class="nav-item indent">
                    <a href="/about/faq">FAQs</a>
                </li>
                
                <li class="nav-item">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import Logo from './Logo';
    import CartModal from '@/components/CartModal';

    import { mapGetters } from 'vuex';

    export default {
        props: ['active'],
        components: {
            'logo': Logo,
            'cart-modal': CartModal
        },
        data() {
            return {
                showMobileMenu: false,
                hover: {
                    assessments: false,
                    training: false,
                    selection: false,
                    about: false,
                    resources: false
                },
                hidden: false
            }
        },
        created() {
            if (this.$route.query.noframe) {
                this.hidden = true;
            }

            if (process.browser) {
                if (this.$route.query.utm_campaign) {
                    localStorage.setItem('ppc_event', `ppc_${this.$route.query.utm_campaign}`);
                }
            }
        },
        methods: {
            toggleMobileMenu() {
                if (this.showMobileMenu) {
                    this.showMobileMenu = false;
                } else {
                    this.showMobileMenu = true;
                }
            },
            openCart() {
                $nuxt.$emit('openCartModal');
            }
        },
        computed: mapGetters({
            cartTotalProducts: 'cart/getNumberOfCartItems'
        })
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    header {
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        background-color: #1e222d;
        box-shadow: 0 4px 6px 0 rgba(12,0,46,.06);
        transition: all .3s ease-in-out;

        .info-bar {
            background-color: #01a8ff;
            text-align: center;
            padding: 10px;
            color: #fff;

            .hyperlink {
                box-shadow: inset 0 -3px 0 0 rgba(255, 255, 255, .3);
            }
            
            p {
                margin: 0;
            }
        }

        .nav-item a {
            color: #fff !important;
            
            &.active {
                color: $secondary !important;
                border-bottom: 2px solid $secondary !important;
            }
        }

        nav {
            .nav-collapse {
                .nav-bar {
                    float: right;
                    margin: -12px 0;
                    z-index: 1000;
                    position: relative;

                    .nav-item {
                        display: inline-block;
                        font-family: $font-family;
                        font-weight: 600;
                        line-height: 83px;

                        &:not(:first-child) {
                            margin-left: 20px;
                        }

                        a {
                            font-size: 15px;
                            color: #666;
                            text-decoration: none;
                            transition: color .2s ease-out;

                            &:hover {
                                color: #000;
                            }

                            &.active {
                                color: $primary;
                                border-bottom: 2px solid $primary;
                                padding-bottom: 7px;
                            }
                        }

                        .sub-nav-category {
                            display: none;
                            position: absolute;
                            padding-left: 0;
                            list-style: none;
                            margin-left: 0;
                            background: #161921;
                            margin-top: -5px;
                            box-shadow: 0 4px 6px 0 rgba(12,0,46,.06);
                            line-height: 20px;

                            &.active {
                                display: block;
                            }

                            .title {
                                font-weight: 600;
                                font-size: 8pt;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                                color: #00bbff;
                                display: block;
                                background: #0d0f15;
                                padding: 5px 10px;
                                border-bottom: 1px solid #252a3a;
                                border-top: 1px solid #000;
                            }

                            .sub-nav-item {
                                margin: 11px 13px;

                                a {
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }

            .hamburger {
                display: none;
                position: absolute;
                top: 15px;
                right: 22px;
                z-index: 1;

                input {
                    display: block;
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: -15px;
                    right: -11px;
                    opacity: 0;
                    cursor: pointer;
                    z-index: 2;
                    -webkit-touch-callout: none;

                    &:checked ~ span {
                        opacity: 1;
                        transform: rotate(-45deg) translate(0, -1px);

                        &:nth-last-child(2) {
                            opacity: 0;
                            transform: rotate(0deg) scale(0.2, 0.2);
                        }

                        &:nth-last-child(3) {
                            transform: rotate(45deg) translate(2px, 1px);
                        }
                    }
                }
                 
                span {
                    display: block;
                    width: 24px;
                    height: 2px;
                    margin-bottom: 5px;
                    background: #fff;
                    border-radius: 2px;
                    transform-origin: 4px 0px;
                    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
                                opacity 0.3s ease;

                    &:first-child {
                        transform-origin: 0% 0%;
                    }

                    &:nth-last-child(2) {
                        transform-origin: 0% 100%;
                    }
                }
            }
            
            .shopping-cart {
                position: relative;
                cursor: pointer;

                .cart-total-items {
                    background: #e93d2f;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 21px;
                    right: -16px;
                    line-height: 20px;
                    text-align: center;
                    color: #fff;
                    font-size: 7pt;
                }

                &.mobile {
                    display: none;
                    position: absolute;
                    top: 11px;
                    right: 82px;
                    z-index: 1;

                    .cart-total-items {
                        top: -10px
                    }
                }

                &.desktop {
                    .cart-icon {
                        vertical-align: middle;
                    }
                }
            }
        }

        .mobile-menu {
            display: none;
            opacity: 0;
            width: 100%;
            background: linear-gradient(0deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
            margin-top: -16px;
            overflow-y: scroll;
            transition: height 0.3s cubic-bezier(0.77,0.2,0.05,1.0);

            &.show {
                display: block;
                opacity: 1;
            }

            .nav-bar {
                list-style: none;
                padding-left: 0;

                .nav-item {
                    padding: 10px 20px;
                    font-size: 16pt;
                    background: rgba(0,0,0,0.1);
                    margin-bottom: 2px;

                    svg {
                        stroke: #5d616b;
                        vertical-align: middle;
                        margin-right: 6px;
                    }

                    a {
                        text-decoration: none;
                        width: 100%;
                        display: block;

                        &:hover {
                            color: #00a8ff !important;
                        }
                    }

                    &.indent {
                        padding-left: 40px;
                        font-size: 13pt;
                    }
                }
            }
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        header {
            nav {
                .nav-collapse-container {
                    position: absolute;
                }

                .nav-collapse {
                    display: none;
                }

                .hamburger {
                    display: block;
                }

                .shopping-cart.mobile {
                    display: block;
                }
            }
        }
    }
</style>
