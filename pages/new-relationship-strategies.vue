<template>
    <section class="tprSlides">
        <main-nav />
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">NEW Relationship Strategies</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="slides">
            <div class="container">
                <div class="row slides-container">
                    <div class="col-3 col-6-sm tprSlideSection">
                        <img class="image" src="images/the_new_relationship_strategies_audio.png"
                            alt="The New Relationship Strategies">
                    </div>

                    <div class="col-9">
                        <ul class="slideList">
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/1+A+Proven+Way+to+Build+Rapport+%26+Understanding+the+Four+Basic+Styles.mp3">
                                <li class="mp3Links mp3Buttons"><span class="numbers">1.</span>
                                    <span>
                                        <img class="imageMp3" src="images/beeping.png">
                                    </span>
                                    A Proven Way to Build Rapport & Understanding the Four Basic Styles
                                </li>
                            </a>
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/2+Getting+a+Quick+Handle+on+Anyone+%26+The+Platinum+Grid.mp3">
                                <li class="mp3Links mp3Buttons"><span class="numbers">2.</span>
                                    <span>
                                        <img class="imageMp3" src="images/beeping.png">
                                    </span>
                                    Getting a Quick Handle on Anyone & The Platinum Grid
                                </li>
                            </a>
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/3+Pinpointing+Your+Blend+of+Personal+Styles+%26+Building+the+Bridges+of+Compatibility.mp3">
                                <li class="mp3Links mp3Buttons"><span class="numbers">3.</span>
                                    <span>
                                        <img class="imageMp3" src="images/beeping.png">
                                    </span>
                                    Pinpointing Your Blend of Personal Styles & Building the Bridges of Compatibility
                                </li>
                            </a>
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/4+Mastering+the+Skill+of+Adaptability+%26+Bringing+Out+the+Best+in+Groups.mp3">
                                <li class="mp3Links mp3Buttons"><span class="numbers">4.</span>
                                    <span>
                                        <img class="imageMp3" src="images/beeping.png">
                                    </span>
                                    Mastering the Skill of Adaptability & Bringing Out the Best in Groups
                                </li>
                            </a>
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/5+High-Performance+Leadership+%26+Five+Steps+to+Successful+Sales.mp3">
                                <li class="mp3Links mp3Buttons"><span class="numbers">5.</span>
                                    <span>
                                        <img class="imageMp3" src="images/beeping.png">
                                    </span>
                                    High-Performance Leadership & Five Steps to Successful Sales
                                </li>
                            </a>
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/6+Five+Steps+to+Successful+Sales+(cont%E2%80%99d)+%26+Creating+a+Web+of+Rich+Relationships.mp3">
                                <li class="mp3Links mp3Buttons"><span class="numbers">6.</span>
                                    <span>
                                        <img class="imageMp3" src="images/beeping.png">
                                    </span>
                                    Five Steps to Successful Sales (cont’d) & Creating a Web of Rich Relationships
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>




        <br>
        <br>
        <section class="slides">
            <div class="container">
                <div class="row slides-container">
                    <div class="col-4 col-6-sm tprSlideSection">
                        <img class="image" src="images/the_platinum_rule.png" alt="TPR eBook">
                        <ul class="slideList">
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR_eBook.pdf">
                                <li class="slideLink slideButtons">
                                    The Platinum Rule
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-4 col-6-sm tprSlideSection">
                        <img class="image" src="images/the_platinum_rule_for_sales_mastery.png"
                            alt="TPR for Sales Mastery Ebook">
                        <ul class="slideList">
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR_for_sales_mastery_ebook.pdf">
                                <li class="slideLink slideButtons">
                                    TPR for Sales Mastery
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div class="col-4 col-6-sm tprSlideSection">
                        <img class="image" src="images/the_platinum_rule_workbook.png" alt="TPR eWorkbook">
                        <ul class="slideList">
                            <a target="_blank"
                                href="https://f002.backblazeb2.com/file/assessments24x7-media/platinum-rule/TPR_eWorkbook.pdf">
                                <li class="slideLink slideButtons">
                                    The Platinum Rule Workbook
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <footer-fold />
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
            title: 'NEW Relationship Strategies | Assessments 24x7',
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.tprSlides {
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

    .slideList {
        padding-left: 0;
        list-style: none;
        margin-bottom: 15px;

        a {
            text-decoration: none;
        }

        .numbers {
            float: left;
        }

        .imageMp3 {
            width: 3%;
            float: left;
            margin-left: 20px;
        }

        .slideLink {
            margin-bottom: 4px;
            padding: 10px;
            background: #f7f7f7;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;
            text-align: center;

            &:hover {
                transform: scale(1.01);
            }

            &:active {
                transform: scale(1.02);
            }

            &.slideButtons {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }
        }

        .mp3Links {
            margin-bottom: 4px;
            padding: 10px;
            background: #f7f7f7;
            border-radius: 10px;
            color: #fff;
            font-weight: 600;
            text-align: right;

            &:hover {
                transform: scale(1.01);
            }

            &:active {
                transform: scale(1.02);
            }

            &.mp3Buttons {
                color: rgb(24, 24, 24);
            }
        }
    }
}

.slides {
    margin: -50px 0 30px;

    .slides-container {
        background: #fff;
        border-radius: 20px;
        padding: 14px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

        .tprSlideSection {
            .image {
                width: 100%;
                height: 100%;
                background-size: cover !important;
                background-position: center !important;
                object-fit: cover;
                box-shadow: 0 0 20px rgba(0, 0, 0, .1);
                border-radius: 20px;
                margin-bottom: 10px;
                margin-top: 10px;
            }

            a {
                text-decoration: none;
            }

        }
    }
}
</style>