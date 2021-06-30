<template>
    <section class="kids-disc">
        <main-nav active="assessments" />
 
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h1><img class="ass-icon" data-aos="zoom-in" src="~/assets/disc-kids-icon.png" alt="Kids DISC by Assessments 24x7"> Kids DISC</h1>
                        <p>
                            The Kids DISC assessment is an opportunity for children to learn more about themselves! Inside the report, kids, and the adults 
                            around them, will discover how special and unique they are. Each child’s bird style is their superpower, and the Kids DISC 
                            assessment by Assessments 24x7 helps them be the best that they can be.
                        </p>
                        <a href="https://assessments247.net/?R*5iy*lt==R" target="_blank" rel="noopener" class="button">Take the Assessment</a>
                        <nuxt-link to="/contact" class="button secondary">Questions? Bulk Order?</nuxt-link>

                        <br/><br/>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-Birds.pdf" target="_blank" rel="noopener" class="button pdf" style="display:inline-block; width:424px;">
                            <img src="~assets/pdf-icon.svg" style="width:30px; width: 25px; margin-right: 2px;"> Download Sample Report
                        </a>
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

                        <a href="https://assessments247.net/?R*5iy*lt==R" target="_blank" class="hyperlink">Take the Assessment &rarr;</a>
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

                        <nuxt-link to="/contact" class="hyperlink">Questions? Bulk Order? &rarr;</nuxt-link>
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

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-Birds.pdf" target="_blank" class="hyperlink">Download the Report &rarr;</a>
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

                        <nuxt-link to="/contact" class="hyperlink">Learn more about Kids DISC &rarr;</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <div class="about-assess">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <h2>Kids DISC was designed for kids, parents, teachers, and more</h2>
                        <p>
                            Gain a deeper understanding of a child and their behavior with the Kids DISC assessment. Created especially for kids, using 
                            language that they understand, the Kids DISC report offers significant insights based on the assessment. With three distinct 
                            sections for kids, parents, and teachers, this report contains helpful information for the child and the adults in their lives.
                        </p>

                        <div class="sample-reports">
                            <h2>Sample Reports</h2>
                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-Birds.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> Kids DISC - Full Report
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                             <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/KidsDISC-ChildOnly.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> Kids DISC - Child Only
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>

                            <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/AdultDISC-Birds.pdf" target="_blank" rel="noopener">
                                <div class="sample">
                                    <img src="~assets/pdf-icon.svg"> Adult Birds Sample Report
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343">
                                        <path style="fill:#05bbff;" d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                                            l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                                            c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        <nuxt-link to="/sample-reports" class="hyperlink">View All Sample Reports &rarr;</nuxt-link>

                        <div class="languages">
                            <span><img src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                        </div>
                    </div>

                    <div class="col-5">
                        <img class="image" data-aos="fade-left" data-aos-duration="2000" src="~/assets/kids-disc-parenting.png" alt="Kids DISC for parenting and leading children">
                    </div>
                </div>
            </div>
        </div>

        <section class="about-the-report">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="title">At school, with friends, and around family</h4>
                        <p>
                            The Kids DISC report is far more than simply an examination of a single child’s behavioral style. It is packed with details 
                            designed to teach children to adapt, interact, and better communicate with their peers, teachers, and families. In the parent 
                            and teacher sections, you’ll discover what the child needs from you to thrive and specific suggestions to support them in ways 
                            they will understand.
                        </p><br/>

                        <nuxt-link to="/contact" class="button">Questions? Bulk Order?</nuxt-link>
                        <nuxt-link to="/assessments" class="button secondary">See Our Other Assessments</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <validation-mini :birdVersion="true" />

        <section class="testimonial">
        <div class="container">
            <div class="row">                
                <div class="col-8">
                    <blockquote>
                        <p>
                            "Everyone working with children should incorporate the What is your Bird Style? - Kids DISC assessment from Assessments 24x7! 
                            Understanding the basic foundation of differences in behavioral styles was an eye opener for our staff. Then applying this to 
                            the various styles of our students has dramatically improved the overall communication, and specifically one on one 
                            instruction. We even watch the kids talk amongst themselves regarding their Bird Styles. Exceptional, thank you!"
                        </p>

                        <footer>
                            <cite>Julie Sand</cite>
                            Pioneer Junior High School
                        </footer>
                    </blockquote>
                </div>

                <div class="col-4">
                    <img class="image" src="~/assets/testimonials/banner/julie-sand.png" alt="Julie Sand">
                </div>
            </div>
        </div>
    </section>

        <section class="call-to-action">
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <img class="image" data-aos="fade-right" data-aos-duration="2000" src="~/assets/kids-disc-teach-coach.png" alt="Kids DISC for teaching and coaching children">
                    </div>

                    <div class="col-7">
                        <h5 class="title">Strong foundations help support a bright future.</h5>
                        
                        <p>
                            Birds represent the behavioral styles of Kids DISC, and just like our internationally recognized DISC Self assessment, no 
                            single Bird (DISC Style) is the “right” one to be. All the Birds have strengths and challenges. However, one thing is certain; 
                            they help make up who we are, enabling each of us to lead happy and productive lives. 
                        </p><br/>

                        <nuxt-link to="/contact" class="button">Questions? Bulk Order?</nuxt-link>
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
                        content: 'Each child’s bird style is their superpower, and the Kids DISC assessment by Assessments 24x7 helps them be the best that they can be.'
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

    .testimonial {
        background: url('~assets/kids-disc-bg-3.jpg');
        background-size: cover;
        background-position: bottom;
        padding: 40px 0;
        color: #fff;
        margin: 10px 0 100px;

        .image {
            width: 100%;
            max-width: 250px;
            margin: 20px auto 0;
            display: block;
            border-radius: 50%;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        blockquote {
            margin-top: 40px;
            display: block;

            footer {
                font-size: 10pt;

                cite {
                    font-weight: 800;
                    display: block;
                    font-size: 12pt;
                }

                .hyperlink {
                    color: #fff;
                }
            }
        }
    }

    .about-assess {
        margin: 70px 0;

        .sample-reports {
            background: #1f222d;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,.1);
            width: 100%;
            padding: 20px;
            margin-bottom: 20px;
            color: #fff;

            h2 {
                font-size: 18pt;
                margin: 5px 0 16px 0;
            }

            a {
                color: #fff;
                text-decoration: none;
            }

            .sample {
                border: 2px solid #2d3040;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 10px;
                font-weight: 500;
                transition: background .3s ease;
                cursor: pointer;

                &:hover {
                    background: #2d3040;
                }

                img {
                    width: 24px;
                    margin-right: 5px;
                }

                svg {
                    width: 17px;
                    float: right;
                    margin-top: 7px;
                }
            }
        }

        h2 {
            font-size: 24pt;
            margin-bottom: 0;
            line-height: 28pt;
        }

        .image {
            width: 150%;
            max-width: 800px;
            margin: 40px auto 0;
            display: block;
        }
    }

    .languages {
        margin-top: 10px;
        
        img {
            width: 14px;
        }

        span {
            font-size: 9pt;
            margin-bottom: 5px;
            display: inline-block;
            background: #eaeaea;
            padding: 0 7px 0 0;
            border-radius: 20px;
            font-weight: 600;
        }
    }

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
            background: url('~assets/tree-right.png');
            background-size: 50%;
            background-repeat: no-repeat;
            background-position-x: right;

            .bird-image {
                right: 0;
            }
        }

        &.left {
            background: url('~assets/tree-left.png') #f7f7f7;
            background-size: 50%;
            background-repeat: no-repeat;

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
            top: -155px;
            max-height: 750px;
        }

        p {
            margin-bottom: 30px;
        }
    }

    @media screen and (max-width: 1375px) {
        .bird-explainer {
            .bird-image {
                width: 40%;
            }
        }
    }

    @media screen and (max-width: $breakpoint-med) {
        .hero {
            padding: 80px 0 90px 0;

            h1 {
                text-align: center;
                font-size: 28pt;

                .ass-icon {
                    width: 65px;
                }
            }

            .hero-image {
                display: none;
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

        .bird-explainer {
            .bird-image {
                position: relative;
                width: 60%;
            }

            &.right .bird-image {
                float: right;
                margin-bottom: -30px;
            }
        }

        .about-assess {
            .image {
                width: 100%;
            }
        }

        .call-to-action {
            .image {
                margin-left: 0;
                width: 100%;
            }
        }
    }
</style>