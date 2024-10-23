<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12" style="text-align: center;">
                    <h1>
                        Choosing Assessment 24x7 as Your <br />
                        Right Assessment Tool Provider
                    </h1>
                    <p>
                        When choosing an <strong>assessment tool</strong> provider, select one that offers customizable solutions to fit
                        your needs. Assessments 24x7 provides user-friendly options that accurately measure skills,
                        performance, and potential. Whether in the classroom or corporate setting, our tools support
                        your goals with reliable, valid, and fair assessments.
                    </p>
                    <button class="blue" style="margin-top: 10px; margin-bottom: 30px;">
                        Book Live Demo
                    </button>
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/choosing-grahpic.webp" alt="choosing image" style="width: 100%;">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
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