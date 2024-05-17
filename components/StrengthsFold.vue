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
                            <div class="blueBoxes position1">
                                <span><img src="@/assets/disc-awareness/blue-checkmark.png" alt="rapport disc">
                                    Gain insights with Emotional Intelligence (EI) by exploring the relationship with
                                    your DISC styles.
                                </span>
                            </div>
                            <img src="@/assets/disc-awareness/line-1.png" alt="line 1" class="line1">
                            <img src="@/assets/disc-awareness/line-4.png" alt="line 2" class="line2">
                            <div class="blueBoxes position2">
                                <span><img src="@/assets/disc-awareness/blue-checkmark.png" alt="rapport disc">
                                    Deepen your awareness of key Emotional Intelligence components & talents.
                                </span>
                            </div>
                            <img src="@/assets/disc-awareness/line-3.png" alt="line 3" class="line3">
                            <div class="blueBoxes position3">
                                <span><img src="@/assets/disc-awareness/blue-checkmark.png" alt="rapport disc">
                                    Identify strengths and areas for development based on your EI and style.
                                </span>
                            </div>
                            <img src="@/assets/disc-awareness/line-4.png" alt="line 4" class="line4">
                            <div class="blueBoxes position4">
                                <span><img src="@/assets/disc-awareness/blue-checkmark.png" alt="rapport disc">
                                    Utilize a structured framework to foster personal and professional growth.
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

    .blueBoxes {
        display: flex;
        align-items: center;
        color: white;
        background-color: #0033c5;
        margin-bottom: 10px;
        border-radius: 20px;
        padding: 20px 30px;
        font-size: 14px;
        line-height: 22px;
        font-weight: 300;
        max-height: 60px;
        max-width: 400px;
        position: relative;
        width: 85%;

        img {
            position: absolute;
            width: 42px;
            left: -20px;
            top: -20px;
        }
    }

    .line1 {
        margin-left: -180px;
        margin-bottom: -32px;
        width: 40%;
        margin-top: -8px;
    }

    .line2 {
        margin-left: -177px;
        width: 100%;
        margin-bottom: -88px;
        margin-top: 42px;
    }

    .line3 {
        margin-left: -175px;
        width: 75%;
        margin-bottom: -82px;
        margin-top: 20px;
    }

    .line4 {
        margin-left: -177px;
        width: 100%;
        margin-top: 22px;
        margin-bottom: -68px;
    }

    .position1 {
        margin-top: 84px;
    }

    .position2 {
        margin-top: 90px;
        margin-left: 120px;
    }

    .position3 {
        margin-top: 70px;
        margin-left: 40px;
    }

    .position4 {
        margin-top: 70px;
        margin-left: 100px;
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
        margin-left: 50px;
    }
}

@media (max-width: 1100px) {
    .strengths {
        min-height: 1525px;
        padding-top: 30px;

        .position1,
        .position3 {
            margin-left: 10px;
            padding: 40px 20px;
        }

        .position2,
        .position4 {
            padding: 40px 20px;
            margin-left: 60px;
        }

        .line1 {
            margin-left: -100px;
            margin-bottom: -32px;
            width: 40%;
            margin-top: -10px;
        }

        .line3 {
            margin-left: -175px;
            width: 75%;
            margin-bottom: -78px;
            margin-top: 20px;
        }

        h1 {
            margin-top: 0px;
            font-size: 40px;
        }

        .underline {
            margin-bottom: -40px;
        }
    }
}

@media (max-width: 350px) {
    .strengths {
        min-height: 1350px;
        padding-top: 30px;

        .position2,
        .position4 {
            margin-left: 50px;
        }

        h1 {
            margin-top: 0px;
            font-size: 40px;
        }

    }
}
</style>