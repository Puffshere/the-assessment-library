<template>
    <div>
        <section>
            <div class="container" style="margin-bottom: -160px;">
                <div class="row">
                    <div class="col-12">
                        <h1 style="text-align: center;">
                            Explore Our Powerful Assessment Platform
                        </h1>
                        <p style="margin-top: -35px;">
                            Unlock maximum potential with Assessments 24x7, a platform engineered to enhance and
                            streamline your assessment processes. Experience a suite of tools designed to provide deep
                            insights, seamless integration, and unparalleled customization that can transform how you
                            interact with clients and manage your services. Here's how our platform can elevate your
                            professional capabilities:
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-6">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/Success+Magazine/explore-graphic.png"
                                alt="image of woman in front of computer" style="width: 100%;">
                        </div>
                        <div class="col-6">
                            <h2>
                                Advanced, Customizable Technology
                            </h2>
                            <p style="text-align: right;">
                                Experience the power of Assessments 24x7 with a platform that powers millions of
                                assessments
                                globally. Our proprietary system is not only streamlined for ease of use but fully
                                customizable to meet all your assessment needs. From ordering to administering
                                assessments,
                                accessing detailed reports, and integrating seamlessly with LMS, CRM, HR, and recruiting
                                systems—our platform does it all.
                            </p>
                            <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
                                <button class="topButton">
                                    Book Live Demo
                                </button>
                            </div>
                        </div>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/curly-arrow.png"
                            alt="curly arrow image" style="position: relative; right: 80px; top: -60px;">
                    </div>
                </div>
            </div>
        </section>
        <section class="cards">
            <div class="container" style="padding-bottom: 80px;">
                <div class="row">
                    <div class="col-12" style="display: flex; justify-content: center; flex-wrap: wrap;">
                        <div class="col-6 card-column">
                            <div class="card" style="margin-top: -30px; margin-bottom: 100px;">

                            </div>
                            <div class="card" style="margin-bottom: 100px;">

                            </div>
                            <div class="card mobileCard">

                            </div>
                        </div>
                        <div class="col-6 card-column">
                            <div class="card" style="margin-top: -30px; margin-bottom: 100px;">

                            </div>
                            <div class="card" style="margin-bottom: 100px;">

                            </div>
                            <div class="card">

                            </div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; margin-top: 80px;">
                    <button class="bottomButton">
                        Book Live Demo
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
h1 {
    font-size: 27pt;
    font-weight: 700;
    color: #213C85;
}

h2 {
    font-size: 18pt;
    color: #213C85;
    text-align: right;
    font-weight: 700;
}

img {
    margin-top: -20px;
}

p {
    font-size: 10.5pt;
}

button {
    width: 184px;
    height: 36px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    color: #FFF;
    text-align: center;
    font-size: 8.25pt;
    font-weight: 700;
    text-decoration-line: underline;
}

.topButton {
    background: #E0AD2B;
}

.bottomButton {
    background: #0C3ECC;
}

.cards {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
    min-height: 1440px;
}

.card {
    width: 438px;
    height: 321px;
    border-radius: 10px;
    border: 1px solid #E6E153;
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.card-column {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Media query for stacking columns vertically on screens smaller than 1200px */
@media screen and (max-width: 1200px) {
    .row {
        flex-direction: column;
        align-items: center;
    }

    .col-6 {
        width: 100%;
        /* Make columns take full width */
    }

    .mobileCard {
        margin-bottom: 100px;
    }
}
</style>