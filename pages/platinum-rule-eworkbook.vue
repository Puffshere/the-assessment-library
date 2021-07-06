<template>
    <section class="platinum-rule-eworkbook">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Platinum Rule eWorkbook</h1>
                        <p>
                            The DISC Platinum Rule workbook is what you need to understand what people REALLY want. With this discovery you’ll understand 
                            how to spot each behavioral style. You start seeing your family and friends, as well as your customers and co-workers, in a 
                            whole new—more understanding—way.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="banner-image" src="~/assets/platinum-rule-eworkbook-banner.jpg">

                    <h2 class="subtitle">How to Connect with Anybody and Everybody</h2>

                    <p>
                        The DISC Platinum Rule workbook is what you need to understand what people REALLY want. With this discovery you’ll understand how 
                        to spot each behavioral style. You start seeing your family and friends, as well as your customers and co-workers, in a whole 
                        new—more understanding—way. The response you’ll get from them will astonish you.
                    </p>

                    <p>
                        Discover which style seeks power and which one wants data. Who loves enthusiasm and who fears change. This knowledge shows you how 
                        to sell your ideas and win people over. Use the DISC Platinum Rule workbook to put yourself and your projects in the best position 
                        to win.
                    </p>

                    <strong>Topics include:</strong>
                    <ul>
                        <li>Building personal chemistry</li>
                        <li>Behavioral style characteristics</li>
                        <li>Understanding the four behavioral styles</li>
                        <li>How to quickly and accurately identify each of the four styles</li>
                        <li>Relationship stress</li>
                        <li>Behavioral adaptability</li>
                        <li>And much more</li>
                    </ul>

                    <p>
                        <strong>Bottom line...</strong> The DISC Platinum Rule eWorkbook can help you make more money. Be a better parent. Be a better 
                        manager. Be a better friend. You will effortlessly get along with anyone you choose to...ANYONE.
                    </p>

                    <div class="quote-container">
                        <img class="headshot" src="~/assets/tony-headshot.jpg">

                        <p>
                            "I'm sure you've heard of the Golden Rule: 'Do unto others as you would have done unto you.' After over 40 years of 
                            relationship research and development, I have learned that people don't want you treating them like you want to be treated. 
                            They want you to treat them like <b><i>they</i></b> want to be treated. That is why I developed The Platinum Rule®: 'Do unto others as they 
                            would like done unto them!'
                        </p>

                        <p>
                            Now you can learn these powerful, proven strategies. Just download <b><i>DISC Relationship Strategies</i></b> and listen to it in your car, 
                            on the way to the office, or when you are out exercising or doing sales calls. (This will help you sell more than you can 
                            possibly imagine.) This audio series includes more than five hours of entertaining and powerful content peppered with numerous 
                            professional actor vignettes and live story segments. I'll wager that it just might be the very best audio program you've ever 
                            heard - in terms of content, delivery, and production value.
                        </p>

                        <p>
                            After you listen to this powerful series and take my advice, people will instantly notice your transformation. They'll start 
                            coming to you for guidance because you will have become a leader in their eyes. When conflicts arise, you'll notice how quickly 
                            you're able to bring arguments to a halt. By being able to build rapport with anyone you choose, your ability to communicate 
                            will get the results you want in any business situation, no matter if you are closing a sale or motivating your team."
                        </p>

                        <p style="text-align:center;font-weight:800">Dr. Tony Alessandra</p>
                    </div>
                </div>
            </div><br/>

            <div class="row">
                <div class="col-8">
                    <h3>Get Your <span>Free DISC eWorkbook</span></h3>

                    <contact-form redirect="/platinum-rule-eworkbook-thankyou" acFormId="4" />
                </div>

                <div class="col-4">
                    <contact-sidebar></contact-sidebar>
                </div>
            </div>
        </div><br/><br/>

        <footer-fold/>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'contact-form': () => import('@/components/ContactForm'),
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'DISC Platinum Rule eWorkbook | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The DISC Platinum Rule workbook is what you need to understand what people REALLY want. With this discovery you’ll understand how to spot each behavioral style.'
                    }
                ],
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .platinum-rule-eworkbook {
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

        .banner-image {
            width: 100%;
            max-width: 800px;
            display: block;
            margin: 0 auto;
            border-radius: 20px;
        }

        .subtitle {
            margin-top: 50px;
        }

        .quote-container {
            padding: 20px;
            border: 2px solid #eaeaea;
            border-radius: 20px;
            margin-top: 120px;
            margin-bottom: 40px;

            .headshot {
                width: 100%;
                max-width: 180px;
                display: block;
                margin: -80px auto 0;
                border-radius: 50%;
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

        h3 {
            font-size: 18pt;
            margin-top: 0;
            border-bottom: 3px solid #eaeaea;

            span {
                color: #0033c5;
            }
        }
    }
</style>