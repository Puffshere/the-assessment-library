<template>
    <section class="corporate-start-using-fold">
        <video autoplay muted loop playsinline>
            <source
                src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/start-using-fold-background-video.mp4"
                type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="container">
            <div class="row">
                <h1 style="color: #0033c5;">
                    Start Using Assessments
                </h1>
            </div>
            <div class="custom-row">
                <div class="custom-col">
                    <div class="custom-card" style="background-color: #00a8ff; color: white;">
                        <h2 style="text-decoration: underline; margin-top: 60px;">
                            Small Assessment Purchase of Any Variety
                        </h2>
                        <h3>
                            Tailored to your specific needs.
                        </h3>
                        <h2 style="text-decoration: underline; margin-top: 60px;">
                            Purchase 1 Assessment Certification
                        </h2>
                        <h3>
                            Equip your teams with the skills they need.
                        </h3>
                    </div>
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
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
.corporate-start-using-fold {
    position: relative;
    width: 100%;
    height: 74vh;
    overflow: hidden;
}

.corporate-start-using-fold video {
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

.card {
    width: 256px;
    height: 315px;
    border-radius: 20px;
    padding: 5px 5px;
    text-align: center;
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
}

.custom-row {
    display: flex;
    justify-content: center;
    margin-top: -30px;
}

.custom-col {
    flex: 0 0 auto;
}

.custom-card {
    width: 1000px;
    height: 315px;
    border-radius: 30px;
    padding: 5px;
    text-align: center;
}

</style>