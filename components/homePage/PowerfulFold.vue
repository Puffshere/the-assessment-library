<template>
    <section>
        <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
        <div class="container-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="col-5">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/powerfulFoldHomePageImage.webp"
                                alt="image of black woman and computer" style="width: 100%; margin-top: -50px;"
                                class="woman">
                            <div class="lightBox">
                                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/light-bulb.webp"
                                    alt="image of a light bulb" style="margin-left: -20px;">
                                <span class="lightBoxText">Ask about our API integration, customization and white-label
                                    options</span>
                            </div>
                        </div>
                        <div class="col-7" style="text-align: right;">
                            <h3>
                                Powerful platform
                            </h3>
                            <p>
                                Assessments 24x7 powers millions of assessments worldwide through our proprietary
                                platform —
                                streamlined and customizable, with the processing power to tackle all your requirements. Order
                                and
                                administer assessments, access reports, view insights, analyze group and conflict
                                resolution
                                reports, manage sub-accounts, access certification materials and online training
                                resources,
                                seamlessly integrate with LMS, CRM, HR, and recruiting systems — and more!
                            </p>
                            <button class="light" @click="scrollToContactForm" style="margin-top: 50px;">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img src="~/assets/home-page/homeHeroFoldBottomRight.webp"
                alt="fold 4 graphic" class="accents-right">
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.container-wrapper {
    position: relative;
}

.accents-right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45%;
    z-index: -1;
}

.container {
    padding-top: 50px;
    padding-bottom: 85px;
}

h3 {
    color: #213C85;
    text-align: right;
    font-family: Poppins;
}

p {
    color: #213C85;
    text-align: right;
}

.lightBox {
    display: flex;
    align-items: center;
    width: 565px;
    height: 33px;
    border-radius: 7px;
    border: 1px solid #F5F5F5;
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 35px;
    margin-left: 10px;
}

.light-bulb {
    width: 70px;
    margin-left: -20px;
}

.lightBoxText {
    color: #213C85;
    font-family: $nunito-family;
    font-size: 10.5pt;
    font-weight: 400;
    line-height: 1.5;
}

@media (max-width: 1200px) {
    .lightBox {
        width: 100%;
        padding: 30px 10px !important;
    }

    .accents,
    .accents-right {
        display: none;
    }

    .woman {
        width: 70% !important;
    }
}
</style>