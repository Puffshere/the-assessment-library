<template>
    <section class="skeleton">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">DISC Relationship Strategies Audio Program</h1>
                        <p>
                            Many people think that learning relationship strategies is boring and complicated. Rest assured, nothing is further from the truth. In this 5+ 
                            hours MP3 series, Dr. Tony Alessandra delivers entertaining and powerful content peppered with numerous professional actor vignettes and live 
                            story segments.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Award Winning Audio Program</h2>

                    <p>
                        I'm sure you've heard of the Golden Rule: 'Do unto others as you would have done unto you.' After 46 years of relationship research and development, 
                        Dr. Tony Alessandra learned that people don't want you treating them like you want to be treated. They want you to treat them like they want to be 
                        treated. That is why he developed The Platinum Rule®: 'Do unto others as they would like done unto them!'
                    </p>

                    <p>
                        Now you can learn these powerful, proven strategies. Just download DISC Relationship Strategies and listen to this powerful 12-part audio series that 
                        includes 5+ hours of entertaining and powerful content peppered with numerous professional actor vignettes and live story segments. We'll wager that 
                        it just might be the very best audio album you've ever heard - in terms of content, delivery, and production value.
                    </p>

                    <p>
                        After you listen to this powerful series and take Dr. Tony’s advice, people will instantly notice your transformation. They'll start coming to you for 
                        guidance because you will have become a leader in their eyes. When conflicts arise, you'll notice how quickly you're able to bring arguments to a halt. 
                        By being able to build rapport with anyone you choose, your ability to communicate will get the results you want in any business or personal situation, 
                        no matter if you are closing a sale, motivating your team or communicating with family and friends.
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <ul class="resources">
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/01_DISC Relationship Strategies Introduction.mp3" target="_blank">
                            <li class="resource a24x7">
                                01 - DISC Relationship Strategies Introduction
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/02_Open vs. Guarded Behaviors.mp3" target="_blank">
                            <li class="resource a24x7">
                                02 - Open vs. Guarded Behaviors
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/03_Direct vs. Indirect Behaviors.mp3" target="_blank">
                            <li class="resource a24x7">
                                03 - Direct vs. Indirect Behaviors
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/04_Describing the Four DISC Styles.mp3" target="_blank">
                            <li class="resource a24x7">
                                04 - Describing the Four DISC Styles
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/05_Compatibility Among DISC Styles.mp3" target="_blank">
                            <li class="resource a24x7">
                                05 - Compatibility Among DISC Styles
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/06_Adaptability with all Four DISC Styles.mp3" target="_blank">
                            <li class="resource a24x7">
                                06 - Adaptability with all Four DISC Styles
                            </li>
                        </a>
                    </ul>
                </div>

                <div class="col-6">
                    <ul class="resources">
                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/07_Flexibility & Versatility.mp3" target="_blank">
                            <li class="resource a24x7">
                                07 - Flexibility & Versatility
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/08_DISC Styles and Teams.mp3" target="_blank">
                            <li class="resource a24x7">
                                08 - DISC Styles and Teams
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/09_Managing the Four Styles.mp3" target="_blank">
                            <li class="resource a24x7">
                                09 - Managing the Four Styles
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/10_DISC Styles and the Sales Process – Part 1.mp3" target="_blank">
                            <li class="resource a24x7">
                                10 - DISC Styles and the Sales Process – Part I
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/11_DISC Styles and the Sales Process – Part 2.mp3" target="_blank">
                            <li class="resource a24x7">
                                11 - DISC Styles and the Sales Process – Part II
                            </li>
                        </a>

                        <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/audio-program/12_DISC Relationship Strategies Summary.mp3" target="_blank">
                            <li class="resource a24x7">
                                12 - DISC Relationship Strategies Summary
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div><br/><br/>

        <footer-fold></footer-fold>
    </section>
</template>

<script>
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer
        },
        head() {
            return {
                title: 'DISC Relationship Strategies Audio Program | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Many people think that learning relationship strategies is boring and complicated. Rest assured, nothing is further from the truth. In this 5+ hours MP3 series, Dr. Tony Alessandra delivers entertaining and powerful content.'
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

        .resources {
            padding-left: 0;
            list-style: none;

            a {
                text-decoration: none;
            }

            .resource {
                padding: 10px;
                background: #f7f7f7;
                margin-bottom: 6px;
                border-radius: 10px;
                color: #fff;
                font-weight: 600;

                &.a24x7 {
                    background: linear-gradient(268deg, #0999fe, #0249ec);
                }
            }
        }
    }
</style>