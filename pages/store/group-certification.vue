<template>
    <section class="group-certification">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Group Certification</h1>
                        <p>
                            This training is an excellent opportunity to get DISC certified in a live, virtual, interactive setting with a specific time to 
                            focus on your learning and development. Class size is limited and there will be some required pre-work, so get registered today!
                        </p>
                    </div>
                </div>
            </div>
        </section><br/>

        <div class="container">
            <div class="row">
                <div class="col-5">
                    <img class="product-image" src="~/assets/group-cert-product-logo.png" alt="DISC Group Certification">
                </div>

                <div class="col-7">
                    <h2>Limited Time Offer</h2>
                    <h3>Register for your online LIVE Group DISC Certification by May 3rd. Includes Kids DISC Intro!</h3>

                    <p>
                        If you’ve been considering DISC certification, but self-directed learning isn’t your cup of tea, we’ve got you covered. We are 
                        offering a LIVE Group DISC Certification training on May 11th & 12th! This session is designed to help you set aside a specific 
                        time to engage with other practitioners, work on your certification, and give you opportunities to immediately practice and apply 
                        your new knowledge. 
                    </p>

                    <p>
                        Need another reason to register? We’ll also be introducing our brand new Kids DISC assessment during the training! The 
                        certification will be from 8:00 am to noon Pacific time on May 11th & 12th. <strong>Class size is limited, and there is 3.5 hours 
                        of required pre-work, so get registered now!</strong>
                    </p><br/>

                    <div class="form-group" style="max-width:150px;">
                        <label for="quantity">Quantity:</label>
                        <input min="1" id="quantity" class="input" type="number" v-model="quantity">
                    </div>

                    <button class="button warning" style="color: #1e222d;" @click="purchase">ENROLL NOW FOR ${{price}}</button>

                    <p class="price">
                        ${{price}}.00
                        <span class="shipping">*Prework Required</span>
                    </p>
                </div>
            </div>
        </div>

        <section class="gamify">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4>Virtual Training with a Group</h4>

                        <p>
                            Become an expert with our internationally accredited certification training. With training explicitly designed to foster a 
                            deeper understanding of the core assessments, you’ll discover how each assessment can be used to build more effective personal 
                            and professional relationships.
                        </p>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <h3 style="margin-bottom: -10px">Course Summary (12 hours):</h3>

                            <div class="col-6">
                                <ul class="course-summary">
                                    <li class="topic disc">Complete the online DISC Assessment</li>
                                    <li class="topic disc">Complete Required Pre-Work: Approximately 3.5 hours of Virtual Training to prepare for group certification sessions</li>
                                    <li class="topic disc">Complete the 2-day Group Certification Training Program; Includes comprehensive DISC training, guided practice on debriefing DISC reports, and an introduction to the new Kids DISC report</li>
                                </ul>
                            </div>

                            <div class="col-6">
                                <ul class="course-summary">
                                    <li class="topic disc">Review the online Resources for DISC Trainers</li>
                                    <li class="topic disc">Complete a 2-part DISC Final Knowledge Check for certification</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section class="credits">
                        <div class="row">
                            <div class="col-3 col-6-sm">
                                <img class="provider-image" src="~assets/shrm-dark.png" alt="shrm">
                                <span class="credit">12 Credits</span>
                                <p class="institute">SHRM**</p>
                            </div>

                            <div class="col-3 col-6-sm">
                                <img class="provider-image" src="~assets/hrci.png" alt="hrci">
                                <span class="credit">10 Credits</span>
                                <p class="institute">HRCI*</p>
                            </div>

                            <div class="col-3 col-6-sm">
                                <img class="provider-image" src="~assets/atd-dark.png" alt="atd">
                                <span class="credit">10 Credits</span>
                                <p class="institute">ATD</p>
                            </div>

                            <div class="col-3 col-6-sm">
                                <img class="provider-image" src="~assets/icf-dark.png" alt="icf">
                                <span class="credit">5.25/12.5</span>
                                <p class="institute">Core/RD ICF</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <p style="color: #777; font-size: 9pt; text-align: center; margin-top: -12px;">
                                    * HRCertification Institute's®️ (www.HRCI.org) official seal confirms that Assessments 24x7 meets the criteria for pre-approved 
                                    recertification credit(s) for any of HRCI’s eight credentials, including SPHR®️ and PHR®️. ** Assessments 24x7 is recognized by 
                                    SHRM to offer Professional Development Credits (PDCs) for SHRM-CP®️ or SHRM-SCP®️.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="image" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">

                    <h3>Increase Sales</h3>
                    <p>
                        Teach your sales team powerful behavior observation skills that work, applying them in an effective sales cycle. Help them to see their own sales strengths and development areas, and focus 
                        on going from good to great in their interactions with others. 
                    </p>
                </div>

                <div class="col-4">
                    <img class="image" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">

                    <h3>Increase Productivity</h3>
                    <p>
                        Measure performance and identify critical companywide issues. Identify with scientific accuracy the gaps across the organization’s key performance areas: culture, 
                        operations, leadership, training, service.
                    </p>
                </div>

                <div class="col-4">
                    <img class="image" src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
                    
                    <h3>Make the right, bright decisions</h3>
                    <p>
                        Critical thinking and decision making is a vital success skill. In day-to-day decisions or strategic plans, 
                        identifying what risks may exist is essential in building a strong organization capable of innovation and responding effectively to change. 
                    </p>
                </div>
            </div>
        </div>
        <br/><br/><br/>

        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';
    import LazyHydrate from 'vue-lazy-hydration';
    import { loadStripe } from '@stripe/stripe-js';

    export default {
        components: {
            'main-nav': Nav,
            'client-logos': () => import('@/components/ClientLogos'),
            'footer-fold': Footer
        },
        async created() {
            this.stripe = await loadStripe('pk_live_6Jq66rYmJ3XnKRrThahwThER00vVN8K8hW');
        },
        data() {
            return {
                quantity: 1,
                stripe: null
            }
        },
        computed: {
            price() {
                return 1595 * this.quantity;
            }
        },
        methods: {
            async purchase() {
                const {error} = await this.stripe.redirectToCheckout({
                    lineItems: [
                        {
                            price: 'price_1IgzSLBPiAffrwryjZblkFhM',
                            quantity: parseInt(this.quantity)
                        }
                    ],
                    mode: 'payment',
                    successUrl: 'https://www.assessments24x7.com/store/purchase-confirmation',
                    cancelUrl: 'https://www.assessments24x7.com/store/group-certification',
                    //billingAddressCollection: 'required'
                });

                if (error) {
                    console.log(error.message);
                } 
            }
        },
        head() {
            return {
                title: 'DISC Group Certification | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'This training is an excellent opportunity to get DISC certified in a live, virtual, interactive setting with a specific time to focus on your learning and development.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .group-certification {
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
            font-size: 26pt;
            line-height: 24pt;
            margin: 0;
        }

        .lp-icon {
            width: 250px;
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

        .gamify {
            margin: 80px 0 40px;

            .tall-image {
                margin: 0 auto;
                display: block;
                max-height: 550px;
                border-radius: 20px;
            }

            h4 {
                font-size: 26pt;
                line-height: 24pt;
                margin: 20px 0 0;
            }

            .button {
                margin-top: 15px;
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

        .credits {
            padding: 34px 0 10px;
            margin-bottom: 0px;

            .credit {
                font-size: 23pt;
                text-align: center;
                display: block;
                font-weight: 700;
            }

            .institute {
                text-align: center;
                font-size: 18pt;
                margin-top: -2px;
            }

            .provider-image {
                margin: 0 auto 14px;
                display: block;
                height: 100px;
            }
        }

        .course-summary {
            list-style: none;
            padding-left: 0;

            .topic {
                padding: 10px;
                background: #f7f7f7;
                margin-bottom: 6px;
                border-radius: 10px;
                color: #fff;
                font-weight: 600;

                &.disc { background: linear-gradient(268deg, #0999fe, #0249ec); }
                &.mot { background: linear-gradient(268deg, #ffa518, #fc542a); }
                &.hvp { background: linear-gradient(268deg, #8ef03a, #11bd04); }
                &.eiq { background: linear-gradient(268deg, #fa4ca6, #ff2f4c); }
                &.learning { background: linear-gradient(268deg, #b82cff, #540bfb); }
                &.pgi { background: linear-gradient(268deg, #666, #333); }
            }
        }
    }
</style>