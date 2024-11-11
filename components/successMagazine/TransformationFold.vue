-<template>
    <section>
        <div class="container" style="padding-top: 190px; margin-top: -200px; padding-bottom: 100px;">
            <div class="row">
                <div class="col-12">

                    <div class="col-5">
                        <img ref="unlockImage" alt="image of woman" style="width: 100%;">
                    </div>
                    <div class="col-7" style="text-align: right; color: white; margin-top: -10px;">
                        <h2>
                            <span style="color: #FFDE59;">Empower your Transformation</span> <br />
                            through Assessment Certification
                        </h2>
                        <p>
                            An assessment certification from Assessments 24x7 demonstrates your expertise with specific
                            tools, backed by scientifically validated methodologies. It proves you have completed
                            comprehensive training and can apply these tools effectively, making you a valuable asset to
                            employers and clients. Our programs offer practical knowledge that builds your confidence in
                            using assessments, ensuring your certification is a powerful addition to your professional
                            toolkit.
                        </p>
                        <button @click="scrollToContactFormSection">
                            Speak to a Specialist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { detectOSMixin } from '@/mixins/detectOSMixin';

export default {
    mixins: [detectOSMixin],
    methods: {
        scrollToContactFormSection(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    },
    mounted() {
        const imgElement = this.$refs.unlockImage;
        this.setUnlockImage(
            imgElement,
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/DISC+Certificate+-+Interview.png",
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/DISC+Certificate+-+Interview.webp"
        );
    }
}

</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

section {
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
    background-position: center;
}

.container {
    padding-top: 45px;
    padding-bottom: 45px;
}

p {
    margin-top: 0px;
    font-family: $nunito-family;
    font-size: 10.5pt;
}

button {
    width: 184px;
    height: 41px;
    border-radius: 4px;
    border: 1px solid #E0AD2B;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
    text-decoration: underline;
    color: #0D3FCD;
    font-size: 10.5pt;
    font-weight: 700;
    cursor: pointer;
    font-family: Poppins;
}

img {
    border-radius: 10px;
}
</style>