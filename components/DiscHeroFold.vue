<template>
    <section class="hero">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h1>
                        Drive
                    </h1>
                    <br />
                    <h1>
                        Organizational
                    </h1>
                    <br />
                    <h1>
                        Success
                    </h1>
                    <h2 class="heroSubtext">
                        Let DISC Lead the way.
                    </h2>
                    <a href="#form"><img src="~/assets/disc/learn-button.png" alt="learn button"
                            class="learnButton" /></a>
                </div>
                <div class="col-7">
                    <div class="video-container">
                        <video ref="videoElement" class="video-player" controls>
                            <source
                                src="https://cdn.assessments24x7.com/file/assessments24x7-media/ATD+DISC+Video+-+05.09.2024+_____.mp4"
                                type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <img v-if="showThumbnail" src="~/assets/disc/disc-video-thumbnail.png" @click="playVideo"
                            class="video-thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showThumbnail: true,
        };
    },
    methods: {
        playVideo() {
            this.$refs.videoElement.play();
            this.showThumbnail = false;
        }
    }
}
</script>


<style lang="scss" scoped>
.nav {
    position: relative;
}

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

//  Hero Section

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #1e222d 40%, #00a8ff 40%);

    .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin: 0 auto;
    }

    .video-player {
        position: absolute;
        top: 15px;
        left: 50%;
        width: 88%;
        height: 100%;
        transform: translateX(-50%);
    }

    .video-thumbnail {
        position: absolute;
        top: 30px;
        left: 50%;
        width: 90%;
        height: 98%;
        transform: translateX(-50%);
        cursor: pointer;
    }

    .logo {
        max-width: 100%;
    }

    .flex-container {
        display: flex;
        align-items: center;

        .titleHr {
            width: 100%;
        }
    }

    .learnButton {
        margin-left: 30px;
        margin-top: 35px;
        width: 210px;
        cursor: pointer;
    }
}

h1 {
    font-size: 48px;
    padding: 20px;
    margin-bottom: -150px;
    margin-left: 10px;
}

.hero .col-12 {
    width: 100%;
}

.hero .col-7 {
    background-color: #00a8ff;
    min-height: 440px;
    margin: 0px;
    width: 60%;
}

.hero .col-5 {
    background-color: #1e222d;
    width: 40%;
    margin: 0px;
    min-height: 440px;
    margin-top: -1px;
}

.hero .col-5 .heroSubtext {
    color: #00a8ff;
    font-size: xx-large;
    padding: 20px;
    margin-top: 100px;
    margin-left: 10px;
}

@media (max-width: 1000px) {
    .hero .row {
        flex-direction: column;
    }

    .hero .col-5,
    .hero .col-7 {
        width: 100%;
        min-height: 300px;
    }

    .hero {
        .col-5 {
            padding-bottom: 60px;
        }

        .learnButton {
            margin-top: 20px;
            width: 160px;
            padding-bottom: 60px;
        }
    }

    .video-container {
        padding-bottom: 56.25%;
        margin: 0 auto;
    }

    .video-player {
        margin-top: 5px;
        left: 50%;
        width: 90%;
        height: 100%;
        transform: translateX(-50%);
    }

    .video-thumbnail {
        position: absolute;
        top: 25px;
        left: 50%;
        width: 90%;
        height: 100%;
        transform: translateX(-50%);
        cursor: pointer;
    }
}

@media (max-width: 350px) {
    .hero {
        h1 {
            font-size: 38px;
            line-height: 80px;
        }
    }
}
</style>
