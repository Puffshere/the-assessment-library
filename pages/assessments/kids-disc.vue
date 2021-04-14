<template>
    <section class="kids-disc">
        <main-nav active="assessments" />
 
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h1><img class="ass-icon" data-aos="zoom-in" src="~/assets/disc-kids-icon.png" alt="Kids DISC by Assessments 24x7"> Kids DISC</h1>
                        <p>
                            The Kids DISC assessment is a chance for children to learn about themselves! Inside the report, kids will discover how special and 
                            unique they are. Each child's bird style is their superpower, and the Kids DISC assessment by Assessments 24x7 helps them be 
                            the best that they can be.
                        </p>
                        <nuxt-link to="/contact" class="button">Download Sample Report</nuxt-link>
                        <nuxt-link to="/contact" class="button secondary">Learn More</nuxt-link>
                    </div>

                    <div class="col-6">
                        <img class="hero-image" src="~/assets/disc-kids-school.png" alt="Kids DISC birds around a schoolhouse">
                    </div>
                </div>
            </div>
        </div>

        <!--<section class="related-posts">
            <div class="container">
                <div class="row related-posts-container">
                    <p class="posts-title">Recent Posts with the Tag <span class="tag">DISC</span></p>
                    <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
                        <nuxt-link :to="`/blog/${post.slug}`">
                            <img class="image" :src="post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'">

                            <h2 class="title" v-html="post.title"></h2>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>-->

        <section class="bird-explainer right">
            <div class="container">
                <img class="bird-image" data-aos="fade-left" data-aos-duration="2000" src="~assets/eagle-branch.png" alt="Eagle Kids DISC">

                <div class="row">
                    <div class="col-8">
                        <h3 class="title">The Eagle</h3>
                        <p class="motto eagle">Motto: I got this!</p>

                        <p>
                            When you picture an <strong>Eagle</strong>, what do you see? Eagles are powerful birds who fly high in the sky above the 
                            forests, lakes, and rivers. They are at the top of the food chain! If they see something they want... WHOOSH! They dive down 
                            and get it.
                        </p>

                        <p>
                            Kids with the Eagle style are confident, determined, and competitive. They say what they think and do what they want. They take 
                            charge and take action. They make quick decisions and aren’t afraid of risks. They love to win and hate to lose.
                        </p>

                        <nuxt-link to="/contact" class="hyperlink">Learn more about the Eagle &rarr;</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="bird-explainer left">
            <div class="container">
                <img class="bird-image" data-aos="fade-right" data-aos-duration="2000" src="~assets/parrot-branch.png" alt="Parrot Kids DISC">

                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-8">
                        <h3 class="title">The Parrot</h3>
                        <p class="motto parrot">Motto: We can do it!</p>

                        <p>
                            Imagine a Parrot in the canopy of the jungle with all their bird friends. Can you hear the noisy Parrot cawing out loud? Do you 
                            see the bright, colorful feathers that attract everyone’s attention? Can you picture all the fun that Parrot has flapping 
                            around with other birds?
                        </p>

                        <p>
                            Kids with the Parrot style are enthusiastic, smiley, and social. They love to talk, laugh, and joke around with friends. They 
                            try new things and come up with wild ideas. To be a Parrot is to be the life of the party—and a bit of a mischief maker!
                        </p>

                        <nuxt-link to="/contact" class="hyperlink">Learn more about the Parrot &rarr;</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="bird-explainer right">
            <div class="container">
                <img class="bird-image" data-aos="fade-left" data-aos-duration="2000" src="~assets/dove-branch.png" alt="Dove Kids DISC">

                <div class="row">
                    <div class="col-8">
                        <h3 class="title">The Dove</h3>
                        <p class="motto dove">Motto: Let's help each other!</p>

                        <p>
                            Picture a white Dove on a shady, quiet tree branch. The Dove coos softly and kindly with a few other birds. The Dove would 
                            never hurt anyone. The Dove is there to support other birds and keep them out of trouble.
                        </p>

                        <p>
                            Kids with the Dove style are thoughtful, helpful, and caring. They love to do nice things for others. They think about how 
                            others feel and always try to serve their needs. Doves have big hearts and share their love freely.
                        </p>

                        <nuxt-link to="/contact" class="hyperlink">Learn more about the Dove &rarr;</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="bird-explainer left">
            <div class="container">
                <img class="bird-image" data-aos="fade-right" data-aos-duration="2000" src="~assets/owl-branch.png" alt="Owl Kids DISC">

                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-8">
                        <h3 class="title">The Owl</h3>
                        <p class="motto owl">Motto: Be smart about it!</p>

                        <p>
                            Picture an Owl perched in a nest with wide-open eyes. The Owl notices every little detail of the forest—every color, every 
                            animal, every gust of wind. The forest is fascinating and fills the Owl with curiosity and questions. The Owl wants to know 
                            everything.
                        </p>

                        <p>
                            Kids with the Owl style are precise, analytical, and careful. They have a reason for everything they do and say. They are 
                            organized and consistent. They like to plan ahead and learn everything they can before making decisions.
                        </p>

                        <nuxt-link to="/contact" class="hyperlink">Learn more about the Owl &rarr;</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-the-report">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="title">At school, with friends, and around family...</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem! Laborum nesciunt velit consequatur! Error rem ipsum 
                            consequatur expedita sunt molestiae dolorem dolor vero obcaecati in velit labore, molestias itaque! Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Debitis sunt modi a. Veniam corporis beatae maiores dignissimos ipsam provident incidunt expedita 
                            voluptatem enim adipisci reiciendis libero assumenda illum, quidem odio!
                        </p><br/>

                        <nuxt-link to="/contact" class="button">Learn More</nuxt-link>
                        <nuxt-link to="/assessments" class="button secondary">See Our Other Assessments</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <validation-mini />

        <section class="call-to-action">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <img class="image" src="~/assets/kids-disc-teach-coach.png" alt="DISC Kids for teaching and coaching children">
                    </div>

                    <div class="col-7">
                        <h5 class="title">Strong foundations help support a bright future.</h5>
                        
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorem! Laborum nesciunt velit consequatur! Error rem ipsum 
                            consequatur expedita sunt molestiae dolorem dolor vero obcaecati in velit labore, molestias itaque! Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Debitis sunt modi a. Veniam corporis beatae maiores dignissimos ipsam provident incidunt expedita 
                            voluptatem enim adipisci reiciendis libero assumenda illum, quidem odio!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta consequatur, provident sed hic quisquam.
                        </p><br/>

                        <nuxt-link to="/contact" class="button">Learn More</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
        
        <footer-fold />
    </section>
</template>

<script>
    import Nav from '../../components/Nav';
    import ValidationMini from '../../components/ValidationMini';
    import Footer from '../../components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'validation-mini': ValidationMini,
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'Kids DISC | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Each child\'s bird style is their superpower, and the Kids DISC assessment by Assessments 24x7 helps them be the best that they can be.'
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
        },
        data() {
            return {
                active: 'd',
                interrupted: false,
                posts: [],
                loading: true,
                structuredDataBreadcrumbs: {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": "1",
                            "item": {
                                "@id": "https://assessments24x7.com/assessments",
                                "name": "Assessments" 
                            } 
                        },
                        {
                            "@type": "ListItem",
                            "position": "2",
                            "item": {
                                "@id": "https://assessments24x7.com/assessments/kids-disc",
                                "name": "Kids DISC" 
                            } 
                        }
                    ]
                }
            }
        },
        async created() {
            const response = await this.$axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=4&filter=tag:disc`);
            this.posts = response.data.posts;
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .call-to-action {
        margin-bottom: 100px;

        .image {
            width: 130%;
            max-width: 800px;
            margin: 0 auto;
            display: block;
            margin-left: -30%;
        }

        .title {
            font-size: 24pt;
            margin: 0;
        }
    }

    .about-the-report {
        background: url('~assets/kids-disc-bg-2.jpg');
        background-size: cover;
        background-position: bottom;
        padding: 120px 0;
        color: #fff;

        .title {
            font-size: 24pt;
            margin: 0;
        }
    }

    .bird-explainer {
        position: relative;
        padding: 100px 0;

        .title {
            font-size: 24pt;
            margin: 0;
        }

        .motto {
            margin-top: 0;
            display: inline-block;
            border: 2px solid #999;
            background: #ccc;
            border-radius: 20px;
            padding: 5px 15px;
            font-weight: 600;
            font-size: 10pt;

            &.eagle {
                border-color: #B40E98;
                background: #E9BBE2;
            }

            &.parrot {
                border-color: #F5D70C;
                background: #FFFFAA;
            }

            &.dove {
                border-color: #187C08;
                background: #D1ECB9;
            }

            &.owl {
                border-color: #0071BD;
                background: #AADCF5;
            }
        }

        .bird-image {
            position: absolute;
            width: 100%;
            max-width: 550px;
        }

        &.right {
            .bird-image {
                right: 0;
            }
        }

        &.left {
            background: #f7f7f7;

            .bird-image {
                left: 0;
            }
        }
    }

    .related-posts {
        margin: -20px 0;

        .related-posts-container {
            background: #fff;
            border-radius: 20px;
            padding: 14px 0;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);

            .posts-title {
                margin: 6px 0 8px 25px;
                font-size: 12pt;
                font-weight: 500;

                span {
                    background: #0249ec;
                    color: #fff;
                    padding: 2px 10px;
                    border-radius: 20px;
                }
            }

            .post {
                .image {
                    width: 100%;
                    height: 140px;
                    background-size: cover !important;
                    background-position: center !important;
                    object-fit: cover;
                    box-shadow: 0 0 20px rgba(0,0,0,.1);
                    border-radius: 20px;
                    transition: transform .3s ease;

                    &:hover {
                        transform: scale(1.03);
                    }
                }

                .date {
                    margin: 10px 0 -20px;
                    font-size: 8pt;
                    color: #666;
                }

                a {
                    text-decoration: none;

                    .title {
                        color: initial;
                        font-size: 12pt;
                        line-height: 15pt;
                        margin-top: 20px;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    .hero {
        background: url('~assets/disc-kids-hero-bg.jpg');
        background-size: cover;
        background-position: bottom;
        z-index: 0;
        position: relative;
        color: #fff;
        padding: 150px 0 170px 0;

        h1 {
            font-size: 36pt;
            margin: 0;

            .ass-icon {
                width: 80px;
                vertical-align: middle;
                margin-right: -10px;
            }
        }

        .hero-image {
            position: absolute;
            top: -190px;
        }

        p {
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .hero {
            h1 {
                font-size: 23pt;
                text-align: center;
                line-height: 25pt;

                img {
                    width: 40px !important;
                    margin-right: 0 !important;
                }
            }
        }

        .related-posts {
            .related-posts-container {
                box-shadow: none;
                margin-bottom: -40px;
                border-radius: 0;

                .posts-title {
                    text-align: center;
                }

                .post {
                    min-height: 220px;
                    
                    .title {
                        font-size: 11pt !important;
                    }
                }
            }
        }
    }
</style>