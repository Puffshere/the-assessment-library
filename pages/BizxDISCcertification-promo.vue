<template>
    <section class="bizx">
        <main-nav />
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-8">
                            <h1><strong>
                                    Live Group <br />
                                    DISC Certification
                                </strong>
                            </h1>
                            <h3 style="margin-bottom: 30px;">
                                A comprehensive 2-day DISC Certification program <br />
                                designed to master the DISC Assessment.
                            </h3>
                            <img src="~/assets/bizx/rectangle90.png" alt="yellow rectangle"
                                style="width: 320px; margin-bottom: 80px;">
                            <p
                                style="color: white; font-size: 36px; margin-top: -155px; margin-left: 15px; text-shadow: 0px 2px 4px black;">
                                $995 SPECIAL
                            </p>
                            <p style="font-size: 10px; margin-left: 18px; margin-top: -40px; margin-bottom: 88px;">
                                Regular $1,595 | Sign up by Nov 15
                            </p>
                        </div>
                        <div class="col-4">
                            <img src="~/assets/bizx/female.png" alt="Picture of a female smiling"
                                style="width: 100%; margin-top: 15px;">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container box-container"
                style="background-color: white; border-radius: 20px; min-height: 250px; margin-top: -60px; box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25); text-align: center;">
                <div class="row">
                    <div class="col-12" style="margin-top: -60px;">
                        <h3 style="color: #213C85;">
                            <strong>Select Your Dates Below to Register and Secure Your Spot!</strong>
                        </h3>
                        <p style="font-size: 14px; margin-top: -20px; margin-bottom: -10px;">
                            2 half-days; 4 hours/day | 12 people max per program | Zoom only; computer required
                        </p>
                    </div>
                </div>

                <!-- Date Selection Section -->
                <div class="row date-selection">
                    <div class="col-4">
                        <h4 style="text-decoration: underline; margin-bottom: 0px;"><a href="https://buy.stripe.com/8wM14E9znfL177y151" style="color: #213C85;">NOVEMBER</a></h4>
                        <div class="date-box">6th & 7th</div>
                    </div>
                    <div class="col-4" style="margin-left: -100px; margin-right: -100px;">
                        <h4 style="text-decoration: underline; margin-bottom: 0px;"><a href="https://buy.stripe.com/9AQdRq9znaqHdvW296" style="color: #213C85;">DECEMBER</a></h4>
                        <div class="date-box">4th & 5th</div>
                    </div>
                    <div class="col-4">
                        <h4 style="text-decoration: underline; margin-bottom: 0px;"><a href="https://buy.stripe.com/3cs4gQ8vj7ev9fGbJH" style="color: #213C85;">JANUARY</a></h4>
                        <div class="date-box">15th & 16th</div>
                    </div>
                </div>

                <!-- Features Section -->
                <div class="row features">
                    <div class="col-12">
                        <ul class="features-list">
                            <li><img src="~/assets/bizx/checkmark.png" alt="Checkmark"> Explore valuable DISC Training
                                Resources</li>
                            <li><img src="~/assets/bizx/checkmark.png" alt="Checkmark"> Gain a practical foundation of
                                DISC</li>
                            <li><img src="~/assets/bizx/checkmark.png" alt="Checkmark"> Develop strong DISC
                                Implementation Skills</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">

                <div class="row">
                    <h2 style="padding-top: 50px">2-Day Group Course Summary:</h2>
                    <div class="col-12">

                        <div class="col-6">
                            <ul class="course-summary">
                                <li class="topic disc">Choose a two-day session that works for you</li>
                                <li class="topic disc">Take the online DISC assessment</li>
                                <li class="topic disc">Attend the two-day session (4 hours per day)</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="course-summary">
                                <li class="topic disc">Small group practice with trainer guidance</li>
                                <li class="topic disc">Receive access to the DISC Trainer Materials library</li>
                                <li class="topic disc">Fully certified after workshop completion</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <credits :isLight="true" shrm="12" hrci="10" atd="10" icfCore="5.25" icfRD="12.5"
                    hrciProgramId="582706" />
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold /></LazyHydrate>
    </section>
</template>


<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    data() {
        return {

        }
    },
    head() {
        return {
            title: 'BIZX DISC Certification - Promo | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ]
        }
    },
    components: {
        LazyHydrate,
        "main-nav": () => import("@/components/Nav"),
        "footer-fold": () => import("@/components/Footer"),
        'credits': () => import('@/components/Credits')
    },
    methods: {

    }
};
</script>


<style lang="scss" scoped>
.bizx {
    h1 {
        font-size: 36px;
        color: white;
        text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    }

    h2 {
        font-size: 20pt;
        line-height: 24pt;
    }

    h3 {
        font-size: 24px;
        color: white;
        font-weight: 400;
    }

    .hero {
        background: linear-gradient(180deg, #0033C5 0%, #077FF8 100%);
    }

    .body {
        .box-container {
            padding: 20px 30px;

            .date-selection {
                display: flex;
                justify-content: center;
                gap: 0px;
                /* Adjust spacing between the columns */
                margin-top: 10px;
                /* Adjust margin to bring content closer */
                margin-bottom: 20px;
                /* Adjust as needed to maintain design balance */

                h4 {
                    color: #213C85;
                    font-weight: bold;
                    text-align: center;
                    /* Center-aligns the month titles */
                }

                .date-box {
                    background-color: #FFDE59;
                    padding: 10px 20px;
                    /* Adjust padding to balance the box */
                    border-radius: 10px;
                    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
                    font-weight: bold;
                    color: #213C85;
                    max-width: 200px;
                    font-size: 24px;
                    text-align: center;
                    margin: 0 auto;
                    /* Centers the box within the flex item */
                }
            }


            .features-list {
                list-style: none;
                padding: 0;
                display: flex;
                justify-content: center;
                margin-bottom: -5px;

                li {
                    margin: 0 15px;
                    font-size: 14px;
                    color: #0033C5;
                    font-weight: 700;
                    display: flex;
                    align-items: center;

                    img {
                        width: 20px;
                        margin-right: 8px;
                    }
                }
            }
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

            &.disc {
                background: linear-gradient(268deg, #0999fe, #0249ec);
            }
        }
    }
}

@media (max-width: 1200px) {

    .bizx {}
}
</style>