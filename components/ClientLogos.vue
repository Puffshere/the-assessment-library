<template>
    <section class="client-logos">
        <div class="container">
            <div class="logo-row">
                <div class="logo-item">
                    <img src="~/assets/partner-logos/astra-zeneca.webp" alt="Astra Zeneca uses Assessments 24x7">
                </div>
                <div class="logo-item">
                    <img src="~/assets/partner-logos/verizon.webp" alt="Verizon uses Assessments 24x7">
                </div>
                <div class="logo-item">
                    <img src="~/assets/partner-logos/canon.webp" alt="Canon uses Assessments 24x7">
                </div>
                <div class="logo-item">
                    <img src="~/assets/partner-logos/boston-scientific.webp" alt="Boston Scientific uses Assessments 24x7">
                </div>
                <div class="logo-item">
                    <img src="~/assets/partner-logos/panasonic.webp" alt="Panasonic uses Assessments 24x7">
                </div>
                <div class="logo-item">
                    <img src="~/assets/partner-logos/tony-robbins.webp" alt="Tony Robbins uses Assessments 24x7">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.client-logos {
    margin: 0;
    padding: 30px 0;
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Artifacts_content-bg.webp');
    background-size: cover !important;
    background-position: center;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .logo-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .logo-item {
        flex: 1 1 15%;
        max-width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
    }

    @media (max-width: 768px) {
        .logo-item {
            flex: 1 1 30%;
            max-width: 30%;
        }
    }

    @media (max-width: 480px) {
        .logo-item {
            flex: 1 1 45%;
            max-width: 45%;
        }
    }
}
</style>

