<template>
    <section class="hero" style="padding-top: 10px;">
        <div class="container">
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
                        <button class="heroBtn" style="margin-right: 15px;">
                            Free DISC
                        </button>
                        <button class="heroBtn" style="margin-right: 15px;">
                            Book Demo
                        </button>
                        <button class="heroBtn">
                            Get Certified
                        </button>
                    </div>
                    <div class="col-4">
                        <img src="~/assets/success-magazine/success-magazine-female-holding-globe.png"
                            alt="woman holding globe" style="width: 244px; margin-bottom: -16px;">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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
    flex-shrink: 0;
    border-radius: 6px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #00A7FE;
    text-align: center;
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .heroBtn {
        margin-right: 0px !important;
    }
}
</style>