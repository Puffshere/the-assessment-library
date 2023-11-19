<template>
    <div class="main">
        <LazyHydrate when-visible><main-nav active="about"></main-nav></LazyHydrate>
        <LazyHydrate when-visible><about-header></about-header></LazyHydrate>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="image" src="~assets/our-journey.jpg" alt="our-journey">

                    <p>
                        Assessments 24x7 was founded by Dr. Tony Alessandra and Brandon Parker. Separated by 30 years of life experience, 
                        the New Yorker got paired up with the California kid. This unlikely match was a result of a wrong turn, a random 
                        airline flight, sitting next to the right person, the confidence of a 22-year-old junior programmer and Tony’s 
                        intuition to trust. Tony had a vision and Brandon had the technical skills. This was the recipe for the beginning 
                        days of Assessments 24x7 over two decades ago. 
                    </p>

                    <p>
                        With that said, Tony’s history in the assessment industry goes way back. From many years of studying the field of 
                        communication and persuasion, Dr. Tony developed <strong><em>The Platinum Rule®</em></strong>. Its goal is personal 
                        chemistry and productive relationships. Respect for others goes beyond the Golden Rule "Do unto others as you would 
                        have others do unto you." However, when it comes to one-to-one communication—whether it is simple conversation with 
                        family and friends, a sales situation, customer service, managing, motivating, counseling, coaching employees—the 
                        Golden Rule can backfire. The reason is that not everybody wants to be treated the same exact way as you do. 
                        The world today is all about diversity—gender diversity, generational diversity, such as Gen X, Gen Y, Baby Boomers, 
                        personality diversity, such as outgoing, shy, right-brained, left-brained, ethnic diversity, religious diversity, 
                        racial diversity, etc.  
                    </p>

                    <img class="image-wrap" src="~assets/tony-brandon.jpg" alt="tony-brandon">

                    <p>
                        The Platinum Rule, "Do unto others as they want done unto them," helps us avoid the possible conflicts the Golden 
                        Rule could unintentionally set up. In other words, treat people the way that they want and need to be treated. 
                        It’s no different than that age-old saying, “When in Rome, do as the Romans.” 
                    </p>

                    <p>
                        When Tony went into professional speaking, one of his biggest frustrations was how to change people’s behavior 
                        in a one-hour speech. He could motivate them, he could give them a tip here or there, but when he left (considering 
                        education theory and brain theory), within two weeks they’ve lost probably at least 75 percent of what he’d taught them. 
                    </p>
                    
                    <p>
                        Tony has always been looking for ways to make education and learning stick. That’s how and why he developed, with Brandon, 
                        the DISC Virtual Training Program and Assessments24x7.com. Learning mastery is the ability to remember, recall, and 
                        effectively use the material you’ve learned. A lot of e-learning programs simply have people go through it, and as 
                        long as they can pass a test at the end, they’re happy. But a week or two later, could they pass that test again?     
                    </p>

                    <p>
                        Our Assessments24x7.com platform has over twenty-five different assessments that measure everything from behavioral, 
                        thinking, and learning styles to emotional intelligence and company culture.    
                    </p>

                    <p>
                        Back to the inception of Assessments 24x7. The initial meetings revolved around website updates and general brainstorming. 
                        One day Dr. Alessandra expressed his desire to bring his Platinum Rule paper assessment into the world of the internet. 
                        Brandon had recently been involved in developing online software for a healthcare company and presented the path to accomplish the goals. 
                    </p>

                    <p>
                        Round one of the software was just that, the Platinum Rule online assessment. At that time, very few comparisons were available. There weren't  
                        many competitors to analyze or guidelines to follow. The two used their unique experiences and intuition to produce a software system that 
                        gained so much traction, there was no looking back. 
                    </p>

                    <img class="image-wrap right" src="~assets/about-us.jpg" alt="about-us">

                    <p>
                        Over the years, the system has undergone countless improvements. Hundreds of assessments have been programmed with thousands of 
                        clients around the world using Assessments 24x7 as their assessment technology platform. Millions of lives have been impacted. 
                    </p>

                    <p>
                        Beyond the technology component of Assessments 24x7, our company grew to encompass a broader umbrella of services to support our 
                        customers and technology. We built our certification and training department, developed marketing platforms and best practices for our 
                        clients, created a complete white label environment to give our clients the ability to brand and promote assessment products and services 
                        as if they were their own. You can read more about our services all throughout the website, but the point is, we never stop and always have 
                        identified what our clients need so they can be successful. 
                    </p>

                    <p>
                        You can only imagine all the stories that could be told over these years— the countless tradeshows, phone conversations, negotiations, 
                        learning opportunities, difficult decisions, conferences, life-changing moments, etc. The one thing that has always stayed solid is the 
                        bond created by Tony and Brandon. It has been one of the great stories in business. The company has become one of the top assessment 
                        providers and platforms in the industry. We employ people across the US and cover all the needs in the assessment, training, hiring 
                        and selection environments.
                    </p>

                    <p>
                        Throughout this journey we have created a foundation of always putting the customers first, going the extra mile, and making a difference. 
                        We greatly appreciate everyone involved and are thankful for each opportunity. 
                    </p>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><stats style="margin-bottom: 0"></stats></LazyHydrate>
        <LazyHydrate when-visible><steven-lozada></steven-lozada></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'about-header': () => import('@/components/AboutHeader'),
            'about-feature-image': () => import('@/components/AboutFeatureImage'),
            'stats': () => import('@/components/Stats'),
            'steven-lozada': () => import('@/components/testimonials/StevenLozada'),
            'footer-fold': () => import('@/components/Footer'),
            'blog-sidebar': () => import('@/components/BlogSidebarLatest')
        },
        data() {
            return {
                structuredDataBreadcrumbs: {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": "1",
                            "item": {
                                "@id": "https://assessments24x7.com/about",
                                "name": "About" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                title: 'About Assessments 24x7 | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Leading organizations and coaches utilize our assessment technology to guide their strategy for hiring & selection, performance evaluations, skills training, team-building, conflict management, promotion & succession planning, organizational restructuring, employee retention, and leadership development.'
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
    .title {
        margin-top: 60px;
        margin-bottom: 20px;
        font-size: 24pt;
        text-align: center;
    }

    .image {
        width: 100%;
        margin: 30px auto 40px;
        display: block;
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    .image-wrap {
        float: left;
        width: 20%;
        border-radius: 20px;
        margin: 10px 30px 10px 0;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

        &.right {
            float: right;
            margin: 10px 0 10px 30px;
        }
    }
</style>
