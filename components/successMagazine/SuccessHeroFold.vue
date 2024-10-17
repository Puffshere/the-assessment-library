<template>
    <section class="hero" style="padding-top: 10px;">
        <div class="container">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold1-graphic.png"
                alt="fold 1 graphic" style="position: absolute; right: 0px; margin-top: -10px;">
            <div class="row">
                <div class="col-12">
                    <div class="col-8">
                        <h1>
                            Powering Millions of Assessments.
                        </h1>
                        <h2
                            style="margin-top: -45px; margin-bottom: 60px; color: #F8CD55; font-style: italic; font-weight: 400;">
                            Empowering Transformation.
                        </h2>
                        <button @click="scrollToEmpowerSection" class="heroBtn btn" style="margin-right: 15px;">
                            Free DISC
                        </button>
                        <button @click="scrollToExploreSection" class="heroBtn" style="margin-right: 15px;">
                            Book Demo
                        </button>
                        <button @click="scrollToCertificationsSection" class="heroBtn">
                            Get Certified
                        </button>
                    </div>
                    <div class="col-4">
                        <img src="~/assets/success-magazine/success-magazine-female-holding-globe.png"
                            alt="woman holding globe" style="width: 244px; margin-bottom: -16px;" class="globe">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
    scrollToEmpowerSection(event) {
        const element = document.getElementById('freedisc?utm_source=success_magazine&utm_medium=digital_ad&utm_campaign=success_nov24');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = 'freedisc?utm_source=success_magazine&utm_medium=digital_ad&utm_campaign=success_nov24';
        }
        event.target.blur();
    },
    scrollToExploreSection(event) {
        const element = document.getElementById('bookdemo?utm_source=success_magazine&utm_medium=digital_ad&utm_campaign=success_nov24');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = 'bookdemo?utm_source=success_magazine&utm_medium=digital_ad&utm_campaign=success_nov24';
        }
        event.target.blur();
    },
    scrollToCertificationsSection(event) {
        const element = document.getElementById('getcertified?utm_source=success_magazine&utm_medium=digital_ad&utm_campaign=success_nov24');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = 'getcertified?utm_source=success_magazine&utm_medium=digital_ad&utm_campaign=success_nov24';
        }
        event.target.blur();
    }
}

}
</script>

<style scoped>
.hero {
    background: linear-gradient(90deg, #0C3ECC 11.76%, #5AAAD7 100%);
}

h1 {
    font-size: 27pt;
    font-weight: 700;
    color: white;
}

h2 {
    font-size: 18pt;
}

.heroBtn {
    width: 125px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 1px solid #E0AD2B;
    background: #FFF;
    color: #0033C5;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    font-weight: 700;
    line-height: 37.333px;
    text-decoration-line: underline;
    cursor: pointer
}

@media (max-width: 1200px) {
    .container {
        display: flex;
        justify-content: center;
    }

    .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .heroBtn {
        margin-right: 0px !important;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 20px !important;
    }
}
</style>
