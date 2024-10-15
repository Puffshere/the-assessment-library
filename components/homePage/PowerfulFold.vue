<template>
    <section>
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+5+-+Bottom+right.png"
            alt="fold 4 graphic" style="position: absolute; right: -150px; padding-top: 53px; width: 45%;">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 900px;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-5">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Homepage+Graphic+-+Fold+4.png"
                            alt="image of black woman and computer" style="width: 100%; margin-top: -50px;">
                        <div class="lightBox">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/light-bulb.png"
                                alt="image of a light bulb" style="margin-left: -20px;">
                            <span class="lightBoxText">Ask about our API integration, customization and white-label
                                options</span>
                        </div>
                    </div>
                    <div class="col-7" style="text-align: right;">
                        <h2>
                            Powerful platform
                        </h2>
                        <p>
                            Assessments 24x7 powers millions of assessments worldwide through our proprietary platform —
                            streamlined and customizable, with the horsepower to tackle all your requirements. Order and
                            administer assessments, access reports, view insights, analyze group and conflict resolution
                            reports, manage sub-accounts, access certification materials and online training resources,
                            seamlessly integrate with LMS, CRM, HR, and recruiting systems — and more!
                        </p>
                        <button @click="scrollToContactForm" style="margin-top: 50px;">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    padding-top: 50px;
    padding-bottom: 85px;
}

h2 {
    color: #213C85;
    text-align: right;
    font-family: Poppins;
    font-size: 18pt;
    font-weight: 700;
}

p {
    color: #213C85;
    text-align: right;
    font-family: "Nunito Sans";
    font-size: 10.5;
    font-weight: 400;
}

button {
    width: 184px;
    height: 41px;
    border-radius: 8px;
    text-decoration: underline;
    cursor: pointer;
    font-family: Poppins;
    font-size: 10.5pt;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #0033C5;
    text-align: center;
    font-weight: 700;
    background-color: white;
    border: 1px solid #E0AD2B;
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
    font-family: "Nunito Sans";
    font-size: 10.5pt;
    font-weight: 400;
    line-height: 1.5;
}

@media (max-width: 1200px) {
    .lightBox {
        width: 100%;
        padding: 30px 10px !important;
    }
}
</style>