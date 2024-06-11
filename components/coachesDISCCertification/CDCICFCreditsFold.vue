<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-3">
                        <img class="icon1" src="~/assets/coaches-disc-certification/icf-logo.png" alt="image">
                        <p><span class="topLine">8.25/6.75</span> <br />
                            <span class="bottomLine">Core/RD ICF</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <img class="icon2" src="~/assets/coaches-disc-certification/icf-logo.png" alt="image">
                        <p><span class="topLine">12 Credits</span> <br />
                            <span class="bottomLine">SHRM**</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <img class="icon3" src="~/assets/coaches-disc-certification/hrci-logo.png" alt="image">
                        <p><span class="topLine">7.5 Credits</span> <br />
                            <span class="bottomLine">HRCI*</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <img class="icon4" src="~/assets/coaches-disc-certification/atd-logo.png" alt="image">
                        <p><span class="topLine">7.5 Credits</span> <br />
                            <span class="bottomLine">ATD</span>
                        </p>
                    </div>
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
    }

    .icon2 {
        width: 85%;
        padding-bottom: 20px;
    }

    .icon3 {
        width: 45%;
    }

    .icon4 {
        width: 45%;
    }
}

section {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
    background-size: cover;
}
</style>
