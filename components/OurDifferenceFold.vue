<template>
    <section class="ourDifference">
        <video autoplay muted loop id="myVideo">
            <source src="https://cdn.assessments24x7.com/file/assessments24x7-media/our-difference-video.mp4"
                type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        Our
                    </h1>
                    <h1>
                        Difference
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>
                        Discover our comprehensive suite of <span style="color: #00a8ff; font-weight: 600">DISC
                            assessments</span>, offering the flexibility to align with
                        YOUR
                        organization's mission, vision, and core values. Seamlessly integrate our technology <span
                            style="color: #00a8ff; font-weight: 600">Into your
                            current
                            system via our robust API service</span>, empowering you to infuse your organization's
                        culture into
                        customized
                        reports.
                    </h3>
                    <h3>
                        Manage assessments through your personalized dashboard and utilize our extensive training
                        materials
                        library, which includes coaching resources, workshop facilitator materials, and a 52-week email
                        series.
                    </h3>
                    <h3>
                        Take your knowledge to the next level with DISC certification to maximize the benefits of our
                        platform.
                        Enjoy exceptional customer service supported by decades of expertise in customer satisfaction,
                        ensuring
                        prompt and thorough answers to your questions.
                    </h3>
                    <a href="#form"><img src="~/assets/disc/get-started-button.png" alt="submit icon"
                            class="submitIcon" /></a>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.body {
    .flex-container {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    h1 {
        color: white;
        font-weight: bold;
    }

    h2 {
        color: white;
        font-size: 45px;
        margin-top: -5px;
        margin-bottom: -10px;
        font-weight: 400;
    }

    h3 {
        font-size: 28px;
        color: #00a8ff;
    }
}

h1 {
    font-size: 48px;
    padding: 20px;
    margin-bottom: -150px;
    margin-left: 10px;
}


.ourDifference {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.ourDifference video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.ourDifference .container {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: -20px;
}

.ourDifference .submitIcon {
    position: absolute;
    right: 20px;
    bottom: 95px;
    width: 220px;
    height: auto;
}

.ourDifference .container h1 {
    color: #00a8ff;
    font-size: 65px;
    text-align: right;
}

.ourDifference .container h3 {
    color: black;
    font-size: 23px;
    text-align: left;
    font-weight: 400;
    padding: 0 46px;
}

@media (max-width: 1100px) {

    .ourDifference {
    }
}
</style>