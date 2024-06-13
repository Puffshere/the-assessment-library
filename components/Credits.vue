<template>
    <section :class="{ 'credits': true, 'light': isLight }">
        <div class="container">
            <div class="row">
                <div class="col-3 col-6-sm">
                    <img v-if="isLight" class="provider-image" src="~assets/shrm-credits-logo.png" alt="shrm">
                    <img v-else class="provider-image" src="~assets/shrm.png" alt="shrm">
                    <span class="credit">{{ shrm }} Credits</span>
                    <p class="institute">SHRM**</p>
                </div>

                <div class="col-3 col-6-sm">
                    <img class="provider-image" src="~assets/hrci-logo.png" alt="hrci">
                    <span class="credit">{{ hrci }} Credits</span>
                    <p class="institute">HRCI*</p>
                </div>

                <div class="col-3 col-6-sm">
                    <img v-if="isLight" class="provider-image" src="~assets/atd-dark.png" alt="atd">
                    <img v-else class="provider-image" src="~assets/atd.png" alt="atd">
                    <span class="credit">{{ atd }} Credits</span>
                    <p class="institute">ATD</p>
                </div>

                <div class="col-3 col-6-sm">
                    <img v-if="isLight" class="provider-image" src="~assets/icf-dark.png" alt="icf">
                    <img v-else class="provider-image" src="~assets/icf.png" alt="icf">
                    <span class="credit">{{ icfCore }}/{{ icfRD }}</span>
                    <p class="institute">Core/RD ICF</p>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <p style="color: #777; font-size: 9pt; text-align: center; margin-top: -12px;">
                        * The use of this official seal confirms that this Activity has met HR Certification Institute's&reg; (HRCI&reg;) criteria for
                        recertification credit pre-approval. This Program, ID No. {{ hrciProgramId }}, has been approved for {{ hrci }} HR (General)
                        recertification credit hours toward aPHR&trade;, aPHRi&trade;, PHR&reg;, PHRca&reg;, SPHR&reg;, GPHR&reg;, PHRi&trade; and 
                        SPHRi&trade; recertification through HR Certification Institute&reg; (HRCI&reg;).
                        
                        ** Assessments 24x7 is recognized by SHRM to offer Professional Development Credits (PDCs) for SHRM-CP&reg; or SHRM-SCP&reg;.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Credits',
        props: ['shrm', 'hrci', 'atd', 'icfCore', 'icfRD', 'hrciProgramId', 'isLight']
    }
</script>

<style lang="scss" scoped>
    .credits {
        padding: 34px 0 10px;
        background: linear-gradient(90deg, rgba(30,34,45,1) 0%, rgba(48,53,66,1) 100%);
        margin-bottom: 80px;

        &.light {
            background: transparent;

            .credit, .institute {
                color: #000;
            }
        }

        .credit {
            font-size: 23pt;
            text-align: center;
            color: #fff;
            display: block;
            font-weight: 700;
        }

        .institute {
            text-align: center;
            font-size: 18pt;
            margin-top: -2px;
            color: #fff;
        }

        .provider-image {
            margin: 0 auto 14px;
            display: block;
            height: 100px;
        }
    }
</style>