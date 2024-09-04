<template>
    <section class="reseller-start-using-fold">
        <video autoplay muted loop playsinline>
            <source
                src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/start-using-fold-background-video.mp4"
                type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="container">
            <div class="row">
                <h1 class="title" style="color: #0033c5;">
                    Kickstart Your Assessment Solutions
                </h1>
            </div>
            <div class="custom-row">
                <div class="card" style="background-color: #00a8ff; color: white;">
                    <div>
                        <h2 style="text-decoration: underline; margin-top: 60px;">
                            Small Assessment Purchase of Any Variety
                        </h2>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/slider-button-image.png"
                            alt="slider button image"
                            style="width: 100px; float: right; margin-top: -60px; margin-right: 40px;" class="slider">
                        <h3>
                            Tailored to your specific needs.
                        </h3>
                    </div>
                    <h2 style="text-decoration: underline; margin-top: 40px;">
                        Purchase 1 Assessment Certification
                    </h2>
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/slider-button-image.png"
                        alt="slider button image"
                        style="width: 100px; float: right; margin-top: -60px; margin-right: 40px;" class="slider">
                    <h3>
                        Equip your teams with the skills they need.
                    </h3>
                </div>
            </div>
            <div class="row button-container">
                <button class="button" @click="scrollToContactForm">
                    Get Started
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('resellerContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
.reseller-start-using-fold {
    position: relative;
    width: 100%;
    height: 730px;
    overflow: hidden;
}

.reseller-start-using-fold video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
}

.container {
    padding-top: 60px;
    padding-bottom: 80px;
}

h1 {
    font-size: 48px;
    line-height: 60px;
    font-weight: 700;
    text-align: center;
}

h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 41px;
    text-align: left;
    margin-left: 60px;
}

h3 {
    font-size: 21.3334px;
    line-height: 29px;
    text-align: left;
    margin-left: 60px;
    margin-top: -25px;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: #0033c5;
    border-radius: 40px;
    color: white;
    border: 1px solid #0033c5;
    width: 240px;

    &:hover {
        color: #0033c5;
        background-color: white;
    }

    &:active {
        background-color: rgb(126, 126, 126);
    }
}

.custom-row {
    display: flex;
    justify-content: center;
    margin-top: -30px;
}

.card {
    width: 1000px;
    height: 315px;
    border-radius: 30px;
    padding: 5px;
    text-align: center;
}

@media (max-width: 1050px) {
    .reseller-start-using-fold {
        height: 100%;
    }

    .title {
        margin-top: 0px !important;
    }

    .card {
        height: 100%;
        margin: 10px;
    }

    .slider {
        padding-top: 10px;
        width: 60px !important;
    }
}
</style>