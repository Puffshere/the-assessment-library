<template>
    <section class="skeleton">
        <LazyHydrate when-visible><main-nav active="training"></main-nav></LazyHydrate>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Virtual Training</h1>
                        <p>
                            The DISC Virtual Training Program teaches you powerful life skills that will serve you well in all your 
                            all your relationships, whether business or personal, through interactive and enjoyable learning modules.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>DISC Virtual Training Program</h2>
                    <p>
                        The DISC Virtual Training Program isn't just a simple set of videos; it’s a fully interactive program. Produced with cutting-edge multimillion-dollar training 
                        and communication technology, the DISC VT teaches, monitors and tracks students in real time through a series of modules. If you are seeking greater 
                        understanding through a DISC Training tool that's both comprehensive and simple to use, this self-paced, interactive solution brings you DISC in a user-friendly 
                        training system that is entertaining, engaging and effective.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <iframe style="width:100%" height="315" src="//www.youtube.com/embed/IL2sSqkG_to" frameborder="0" allowfullscreen=""></iframe>
                </div>

                <div class="col-6">
                    <h3>Train When You Want, Where You Want</h3>

                    <p>
                        DISC's behavioral style communication strategies are renowned for increasing sales, customer loyalty, communication and team building. 
                        It has never been easier to access the keys to understanding people. It's almost like having Dr. Tony Alessandra in-person, training 
                        you to become proficient in knowing and applying DISC. 
                    </p>

                    <p>
                        The value is double: understanding, retention and successful implementation of this powerful content and the opportunity to revisit it 
                        anytime you need a refresher on DISC. 
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <iframe style="width:100%" height="315" src="//www.youtube.com/embed/i-k-KVGPSgg" frameborder="0" allowfullscreen=""></iframe>
                </div>

                <div class="col-6">
                    <h3>Learning & Practicing</h3>

                    <p>
                        The DISC VT tool teaches life-long skills to quickly identify any person’s DISC style — whether it’s a customer, employee, 
                        colleague, vendor, friend, family member, etc. With built-in real-time reporting and notification metrics, it is easy to 
                        make sure everyone is learning and progressing.
                    </p>

                    <p>
                        Dr. Tony Alessandra walks the learner though a series of modules offering information about DISC styles, behaviors, and 
                        interactions typical of different DISC styles. Then, he follows up with questions to check your knowledge along the way like, 
                        “Do you recognize this person’s DISC style?”
                    </p>
                    
                    <ul>
                        <li>If you answer YES, then you are asked to choose whether that person is a D, I, S, or C style. Once you choose a style, 
                            you receive more information about adaptability and subsequent reinforcement and training.</li>

                        <li>If you choose NO, you are asked to make two either/or decisions based on a series of observable behaviors. 
                        First, you’re asked if the person is more Open or Guarded, (using a list of observable behaviors,) and then you’re asked 
                        if the person is more Direct or Indirect, (again using a list of observable behaviors.) These questions logically walk you 
                        through the learning process, engaging your ability to identify style based on observation, and then allow you to learn 
                        more about adaptability and reinforcement. </li>

                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <iframe style="width:100%" height="315" src="//www.youtube.com/embed/Il08xb_A16g" frameborder="0" allowfullscreen=""></iframe>
                </div>

                <div class="col-6">
                    <h3>Improve Performance &amp; Productivity</h3>

                    <p>
                        As a resource for individuals or organizations desiring to improve performance, increase productivity and to positively persuade 
                        other people, the DISC VT addresses the best ways to begin to build mutually beneficial relationships. When used on its own, 
                        it’s a great introduction. 
                    </p>

                    <p>
                        However, when used in partnership with the DISC assessment, this program becomes a behavioral and communication skills powerhouse.  
                        Unlike most behavioral assessments, the 38-page reports generated from our DISC assessment are as much prescriptive as they are descriptive!  
                        This investment allows you fast, simple, practical and effective strategies that get you immediate results. 
                    </p>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><validation-mini></validation-mini></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': () => import('@/components/Nav'),
            'validation-mini': () => import('@/components/ValidationMini'),
            'footer-fold': () => import('@/components/Footer')
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
                                "@id": "https://assessments24x7.com/certifications",
                                "name": "Certifications" 
                            } 
                        },
                        {
                            "@type": "ListItem",
                            "position": "2",
                            "item": {
                                "@id": "https://assessments24x7.com/certifications/disc-virtual-training",
                                "name": "DISC Virtual Training" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                title: 'DISC Virtual Training | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The DISC Interactive Virtual Training System isn\'t just a simple set of videos, it\'s a fully interactive program. Produced with cutting-edge multi-million dollar training and communication technology, it trains, tracks, monitors and measures each and every student in real time.'
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
    .skeleton {
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
            font-size: 20pt;
            line-height: 24pt;
        }

        h3 {
            font-size: 20pt;
            margin: -10px 0 0;
        }
    }
</style>