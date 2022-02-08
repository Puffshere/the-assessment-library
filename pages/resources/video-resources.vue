<template>
    <section class="video-resources">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Free Business Video Resources</h1>
                        <p>
                            Here are 11 professionally filmed business video lectures by Dr. Tony Alessandra – all yours for free!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img class="banner-image" src="~/assets/video-resources.jpg"><br/>
                    <h2 class="subtitle">Get 11 Professionally Filmed Business Video Lectures</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h4>Sending Out Your Best Silent Message</h4>
                    <p>
                        This video program identifies the key elements of a first impression and offers some skill-building tips on how to 
                        jumpstart your way to a better image. <br/><span class="badge">Duration: <strong>20:51</strong></span>
                    </p>

                    <h4>The Power of Listening Attentively</h4>
                    <p>
                        This video program offers a powerful set of tools to help you build your listening skills up to maximum effectiveness. 
                        Topics covered include roadblocks to effective listening, the different levels of listening and the six skills of active listening.
                        <br/><span class="badge">Duration: <strong>21:46</strong></span>
                    </p>

                    <h4>Goal Setting</h4>
                    <p>
                        “Most people aim at nothing in life... and hit it with amazing accuracy." This video 
                        program introduces several suggested processes to follow that can lead to both a more successful career and a happier life in 
                        general. <br/><span class="badge">Duration: <strong>21:43</strong></span>
                    </p>

                    <h4>Expanding Your Vision & Ideas</h4>
                    <p>
                        This video program explores the concept of vision—how to define it, how to attain it, and how to use it to become more 
                        inspiring to others. <br/><span class="badge">Duration: <strong>21:49</strong></span>
                    </p>

                    <h4>Using Space &amp; Time</h4>
                    <p>
                        This video program helps you communicate your message more skillfully and how to understand the signals others send. 
                        You’ll see how to use space and time to repair communications that somehow get off track, as well as how to create the greatest 
                        advantage for yourself while giving the most comfort to others. <br/><span class="badge">Duration: <strong>21:16</strong></span>
                    </p>

                    <h4>The Power of Nonverbal Communication</h4>
                    <p>
                        This video program helps you understand how to create a powerful nonverbal message that will support your verbal content. 
                        You will learn how to interpret and use body language to deliver the message you intend and how to project a vocal quality that 
                        matches your message. <br/><span class="badge">Duration: <strong>21:33</strong></span>
                    </p>
                </div>

                <div class="col-6">
                    <h4>Developing Your Charisma</h4>
                    <p>
                        What impact could you have on your family, friends, or colleagues, if you decided to unleash your 
                        TRUE Charisma? How would it feel to be in command of such influence? Can you imagine just how much this would enhance your life? 
                        Charisma is not based on genetics, I.Q., social position, or luck. Charisma is a skill that you can learn and master with the right 
                        information and tools. From business meetings, to sales calls, to getting your kids to do their homework, to getting help from a 
                        store clerk…charisma gives you an edge in life that few people have. <br/><span class="badge">Duration: <strong>21:44</strong></span>
                    </p>

                    <h4>Effective Presentation Skills</h4>
                    <p>
                        This video program helps you present confidently, which is one of the most marketable skills you can acquire. 
                        Organizations continually seek individuals who can sell products, present proposals, report findings, and explain ideas effectively.
                        <br/><span class="badge">Duration: <strong>21:18</strong></span>
                    </p>

                    <h4>10 Versatility Traits</h4>
                    <p>
                        This video program helps you change some of your habitual behaviors and knee-jerk reactions in order to become more 
                        versatile - and therefore increase your chances of success in any given situation, regardless of circumstances.
                        <br/><span class="badge">Duration: <strong>42:33</strong></span>
                    </p>

                    <h4>10 Flexibility Traits</h4>
                    <p>
                        This video program helps you reduce predetermined views, conclusions, or patterns of behavior that are driving your 
                        actions - and impairing your flexibility. When you voluntarily refrain from participating in certain situations or interacting with 
                        certain people because of your lack of flexibility - therefore limiting your horizons - you decrease your chances of personal and 
                        professional success. <br/><span class="badge">Duration: <strong>43:16</strong></span>
                    </p>

                    <h4>Time Management</h4>
                    <p>
                        This video program helps you determine your current time usage so you can find out where your time goes now, and how you 
                        can use it better. This video program will help you determine how you can improve your success through the productive use of your 
                        time. <br/><span class="badge">Duration: <strong>21:24</strong></span>
                    </p>
                </div>
            </div><br/>

            <div class="row">
                <div class="col-8">
                    <h3>Get Your <span>Free Video Resources</span></h3>
                    
                    <contact-form redirect="/resources/lock/video-resources" acFormId="11" />
                </div>

                <div class="col-4">
                    <LazyHydrate when-visible><contact-sidebar></contact-sidebar></LazyHydrate>
                </div>
            </div>
        </div><br/><br/>

        <footer-fold/>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';
    import LazyHydrate from 'vue-lazy-hydration';

    export default {
        components: {
            LazyHydrate,
            'main-nav': Nav,
            'contact-sidebar': () => import('@/components/ContactSidebar'),
            'contact-form': () => import('@/components/ContactForm'),
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'Video Resources | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Here are 11 professionally filmed business video lectures by Dr. Tony Alessandra – all yours for free!'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .video-resources {
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
            text-align: center;
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

        h4 {
            margin-bottom: 0;
            font-size: 16pt;
        }

        .badge {
            background: rgba(255, 189, 7, .5);
            border-radius: 20px;
            color: #333;
            font-size: 9pt;
            font-weight: 500;
            padding: 1px 8px;
        }
    }
</style>