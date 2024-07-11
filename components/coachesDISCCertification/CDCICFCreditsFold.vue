<template>
    <section id="icfSection">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-3">
                        <img class="icon1" src="~/assets/coaches-disc-certification/icf-logo.png" alt="icf image" style="width: 100%; margin-bottom: -12px;">
                        <p><span class="topLine">8.25/6.75</span> <br />
                            <span class="bottomLine">Core/RD ICF</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <img class="icon2" src="~/assets/coaches-disc-certification/shrm-logo.png" alt="shrm image">
                        <p><span class="topLine">12 Credits</span> <br />
                            <span class="bottomLine">SHRM**</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <img class="icon3" src="~/assets/coaches-disc-certification/hrci-logo.png" alt="hrci image">
                        <p><span class="topLine">7.5 Credits</span> <br />
                            <span class="bottomLine">HRCI*</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <img class="icon4" src="~/assets/coaches-disc-certification/atd-logo.png" alt="atd image">
                        <p><span class="topLine">7.5 Credits</span> <br />
                            <span class="bottomLine">ATD</span>
                        </p>
                    </div>
                </div>
                <div class="col-12">
                    <p style="color: white; font-size: 9pt; text-align: center; margin-top: 0px;">* The use of this
                        official seal confirms that this Activity has met HR Certification
                        Institute's®️ (HRCI®️) criteria for recertification credit pre-approval. This Program, ID No.
                        582706, has been approved for 10 HR (General) recertification credit hours toward aPHR™️,
                        aPHRi™️, PHR®️, PHRca®️, SPHR®️, GPHR®️, PHRi™️ and SPHRi™️ recertification through HR
                        Certification Institute®️ (HRCI®️). ** Assessments 24x7 is recognized by SHRM to offer
                        Professional Development Credits (PDCs) for SHRM-CP®️ or SHRM-SCP®️.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding-top: 40px;
    padding-bottom: 30px;
}

.topLine {
    font-size: 30px;
    font-weight: 700;
}

.bottomLine {
    font-size: 24px;
    font-weight: 400;
}

.col-3 {
    text-align: center;
    color: white;

    .icon1 {
        width: 85%;
        padding-bottom: 20px;
        margin-top: 5px;
    }

    .icon2 {
        width: 60%;
        margin-bottom: -17px;
        margin-top: -15px;
    }

    .icon3 {
        width: 45%;
        margin-bottom: 2px;
    }

    .icon4 {
        width: 45%;
        margin-bottom: 2px;
    }
}

section {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
    background-size: cover;
}
</style>
