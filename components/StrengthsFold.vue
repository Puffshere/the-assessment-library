<template>
    <section class="strengths">
        <img src="@/assets/disc-awareness/white-textured-background.png" alt="background image" class="background">
        <br />
        <br />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <video autoplay muted loop id="myVideo">
                            <source
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/African+American+Female+Video.mp4"
                                type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div class="col-6 center-content">
                        <div class="text-container">
                            <h1>
                                Discover Your
                                <br />
                                Strengths
                            </h1>
                            <img src="~/assets/disc-awareness/underline.png" alt="underline" class="underline" />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div class="blackBoxes left">
                                <span><img src="@/assets/disc-awareness/increase-commitment-cooperation.png"
                                        alt="rapport disc">
                                    Increase commitment & cooperation
                                </span>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div class="blackBoxes right">
                                <span><img src="@/assets/disc-awareness/increase-commitment-cooperation.png"
                                        alt="rapport disc">
                                    Increase commitment & cooperation
                                </span>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="blackBoxes left">
                                <span><img src="@/assets/disc-awareness/increase-commitment-cooperation.png"
                                        alt="rapport disc">
                                    Increase commitment & cooperation
                                </span>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="blackBoxes right">
                                <span><img src="@/assets/disc-awareness/increase-commitment-cooperation.png"
                                        alt="rapport disc">
                                    Increase commitment & cooperation
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.strengths {
    position: relative;
    z-index: 1;
    min-height: 1020px;
    padding-top: 80px;

    video {
        width: 100%;
        height: 100%;
        z-index: 10;
        border-radius: 20px;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .col-12 {
        margin-bottom: -8px;
    }

    .center-content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .text-container {
        display: flex;
        flex-direction: column;
    }

    .blackBoxes .left {
        display: flex;
        flex-direction: column;
        align-items: left;
    }

    .blackBoxes .right {
        display: flex;
        flex-direction: column;
        align-items: right;
    }

    .womanSmilingContainer {
        position: relative;
        z-index: 2;
        width: 100%;
    }

    .womanSmiling {
        width: 100%;
        margin-top: 0px;
        z-index: 5;
    }

    .container {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .blackBoxes {
        color: white;
        background-color: #0033c5;
        margin-bottom: 10px;
        border-radius: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 0px;
        font-size: 16px;
        line-height: 22px;
        font-weight: 300;
        max-height: 60px;
        position: relative;
        width: 85%;

        .left {
align-content: left;
        }

        .right {

        }

        img {
            position: absolute;
            width: 45px;
            left: -20px;
            top: -20px;
        }
    }

    h1 {
        color: #0c0c0c;
        font-size: 52px;
        line-height: 52px;
        justify-content: center;
        align-content: center;
        margin-top: -40px;
    }

    .underline {
        width: 80%;
        margin-top: -50px;
        /* Add some margin to create space between the h1 and the underline */
    }
}

@media (max-width: 1100px) {
    .strengths {
        min-height: 1000px;

        h1 {
            margin-top: -40px;
            font-size: 40px;
        }

        .womanSmiling {
            position: static;
            top: 60px;
            right: 10px;
            width: 100%;
            margin-top: 40px;
            margin-bottom: 100px;
            z-index: 5;
        }
    }
}
</style>
