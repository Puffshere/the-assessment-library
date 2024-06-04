<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Let DISC be your foundation <br />
                        <span style="font-weight: 400">But don't stop there...</span>
                    </h1>
                </div>
                <div class="col-12 button-container">
                    <button class="white btn" @click="scrollToSection">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';

.container {
    padding-top: 10px;
    padding-bottom: 120px;
}

h1 {
    color: white;
    line-height: 70px;
}

.col-3 {
    text-align: center;
    color: white;

    img {
        width: 40%;
    }
}

section {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
    background-size: cover;
}

.col-12.button-container {
    display: flex;
    justify-content: center;
}
</style>
