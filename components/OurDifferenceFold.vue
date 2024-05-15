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
                    <h1>Our
                        <br />
                        Difference
                    </h1>
                    <h3>
                        Discover our comprehensive suite of <span style="color: #00a8ff; font-weight: 600">DISC
                            assessments</span>, offering the flexibility to align with
                        YOUR organization's mission, vision, and core values. Seamlessly integrate our technology <span
                            style="color: #00a8ff; font-weight: 600">Into your current system via our robust API
                            service</span>, empowering you to infuse your organization's culture into customized
                        reports.
                    </h3>
                    <h3>
                        Manage assessments through your personalized dashboard and utilize our extensive training
                        materials library, which includes coaching resources, workshop facilitator materials, and a
                        52-week email series.
                    </h3>
                    <h3>
                        Take your knowledge to the next level with DISC certification to maximize the benefits of our
                        platform.
                        Enjoy exceptional customer service supported by decades of expertise in customer satisfaction,
                        ensuring
                        prompt and thorough answers to your questions.
                    </h3>
                    <div class="button-container">
                        <a href="#form"><img src="~/assets/disc/get-started-button.png" alt="submit icon"
                                class="submitIcon" /></a>
                    </div>
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

    h3 {
        font-size: 28px;
        color: #00a8ff;
    }
}

h1 {
    font-size: 48px;
    padding: 20px;
    line-height: 74px;
    margin: 0 0;
    margin-top: -50px;
    margin-bottom: 40px;
}

.ourDifference {
    position: relative;
    width: 100%;
    min-height: 100vh;
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
}

.ourDifference .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.ourDifference .button-container {
    display: flex;
    justify-content: flex-end;
}

.ourDifference .submitIcon {
    margin-top: 80px;
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

@media (max-width: 768px) {


    .ourDifference .container h1 {
        font-size: 48px;
        margin: 0;
        line-height: 50px;
    }

    .ourDifference .row {
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 50px;
    }

    .ourDifference .container {
        padding: 20px;
    }

    .ourDifference .button-container {
        justify-content: flex-end;
    }

    .ourDifference .submitIcon {
        margin-top: 20px;
        margin-bottom: 40px;
        width: 180px;
    }

    .ourDifference .container h3 {
        font-size: 20px;
        padding: 0 0px;
    }
}
</style>