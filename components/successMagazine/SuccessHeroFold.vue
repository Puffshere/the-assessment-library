<template>
    <section class="hero" style="padding-top: 10px;">
        <div class="container">
            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold1-graphic.png" alt="fold 1 graphic" style="position: absolute; right: 0px; margin-top: -10px;">
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
                        <button @click="scrollToEmpowerSection" class="heroBtn" style="margin-right: 15px;">
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
            const element = document.getElementById('freedisc');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToExploreSection(event) {
            const element = document.getElementById('exploreSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToCertificationsSection(event) {
            const element = document.getElementById('getcertified');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
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
    height: 36px;
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #00A7FE;
    text-align: center;
    font-size: 8.25pt;
    font-weight: 700;
    text-decoration-line: underline;
    cursor: pointer;
    border: none;
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
    }
}
</style>