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
                    <span class="credit">5.25 Core / 12.5 RD Credits</span>
                    <p class="institute">ICF</p>
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
                color: #213C85;
            }
        }

        .credit {
            text-align: center;
            color: white;
            display: block;
            font-weight: 700;
        }

        .institute {
            text-align: center;
            margin-top: -2px;
            color: white;
        }

        .provider-image {
            margin: 0 auto 14px;
            display: block;
            height: 100px;
        }
    }
</style>