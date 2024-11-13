<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-5">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/assessmentsToolsImage.webp"
                            alt="assessment tools image" style="width: 80%; margin-top: 30px;">
                    </div>
                    <div class="col-7" style="text-align: right;">
                        <h1>
                            Assessment Tools
                        </h1>
                        <p>
                            At Assessments 24x7, we provide the world’s most trusted assessment tools on an easy-to-use
                            platform, offering endless customization options. Designed to empower HR professionals,
                            coaches, recruiters, and businesses, our tools allow you to create deeper insights into
                            competencies, performance, and potential. By using assessment tools, organizations can
                            optimize recruitment processes, create targeted training programs, and provide effective
                            feedback to their teams.
                        </p>
                        <div class="button-container">
                            <button @click="learnMoreButton" class="blue">Learn More</button>
                            <button @click="contactButton" class="light">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        learnMoreButton(event) {
            window.location.href = '/about/why-use-assessments';
            event.target.blur();
        },
        contactButton(event) {
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
    padding-bottom: 30px;
}

.button-container {
    margin-top: 30px;
    display: flex;
    justify-content: right;
    gap: 20px;
}

@media (max-width: 1200px) {}
</style>