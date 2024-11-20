<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12" style="text-align: center;">
                    <h1>
                        Choosing Assessment 24x7 as Your <br />
                        Assessment Tool Provider
                    </h1>
                    <p>
                        Assessments 24x7 offers intuitive, customizable tools that effectively gauge behavioral styles,
                        communication dynamics, and interpersonal tendencies. Our assessments support diverse
                        environments, from educational settings to corporate landscapes, ensuring insights that are
                        reliable, valid, and equitable.
                    </p>
                    <button @click="learnMoreButton" class="blue" style="margin-top: 10px; margin-bottom: 30px;">
                        Book Live Demo
                    </button>
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/choosingGraphic.webp"
                        alt="choosing image" style="width: 100%;">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        learnMoreButton(event) {
            window.location.href = '/contact';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.container {
    padding-top: 50px;
    padding-bottom: 50px;
}

@media (max-width: 1200px) {}
</style>