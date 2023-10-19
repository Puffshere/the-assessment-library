<template>
    <section>
        <div class="acquisitions lazyload"></div>
        <div class="background">
            <h1 class="text">Assessments 24x7 Acquires DISCcert, Enhancing</h1>
            <h1 class="text">Assessment Offerings and Client Support</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="offerings spacingTop">
                        Assessments 24x7, a leading provider of assessments and resources for
                        personal and professional development, is thrilled to announce its recent
                        acquisition of DISCcert, a prominent DISC assessment provider previously
                        owned by Bonnie Burn. The acquisition was completed on
                        signifies a significant step June 1, 2023, and forward for both companies.
                    </p>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-9">
                    <p class="offeringsMiddle">

                        Bonnie Burn, the former owner of DISCcert,
                        expressed her enthusiasm for the acquisition in a
                        heartfelt letter to her clients. She emphasized her
                        commitment to constant process improvement
                        and highlighted the opportunities this acquisition
                        presents for clients to access a broader range of
                        assessments and resources while continuing to
                        receive outstanding support.
                    </p>
                </div>
                <div class="col-3 logo-container">
                    <img class="icons" src="../assets/gold-logo.png" />
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-12">
                    <p class="offerings spacingBottom">
                        Brandon Parker, CEO of Assessments 24x7 is excited to offer DISCcert clients
                        an opportunity to upgrade their DISC reports and assessment dashboards to
                        make the most of the acquisition. “We are really looking forward to showing off
                        our updated dashboard to all the existing DISCcert clients. I truly think they will
                        be blown away by the technology,
                        ” says Brandon.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';


.acquisitions {
    background-size: cover !important;
    background-position: bottom !important;
    width: 100%;
    min-height: 65vh;

    &.lazyloaded {
        background: url('~assets/acquisitions-top.png');
    }
}

h2 {
    font-size: 20pt;
    line-height: 24pt;
}

.background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #1666ff;
    margin-top: -20px;
    min-height: 170pt;
    color: white;
}

.text {
    margin: 0px;
    font-size: 30pt;
}

.offerings {
    line-height: 30px;
}

.spacingTop {
    margin-top: 60px;
}

.offeringsMiddle {
    line-height: 30px;
    margin-top: -25px;
    margin-bottom: -190px;
}

.spacingBottom {
    margin-bottom: 20px;
}

.icons {
    margin-top: -50px;
    width: 160px;
    margin-left: -20px;
    margin-bottom: -18px;
}

@media only screen and (max-width: 1122px) {

    .offeringsMiddle {
        margin-left: 0px !important;
        margin-bottom: 0px !important;
    }

    .icons {
        margin-top: 5px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

}
</style>
