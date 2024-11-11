<template>
    <section class="about" style="margin-top: -120px;">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-graphic.png"
            alt="fold 4 graphic" style="position: absolute; right: 0px; margin-top: -10px;">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-left-graphic.png"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-top: 60px;">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-graphic.png"
            alt="fold 4 graphic" style="position: absolute; right: 0px; margin-top: -10px;">
        <div class="container" style="margin-top: 0px;">
            <div class="row">
                <div class="col-12 column" style="box-shadow: 3px 4px 4px 0px #00000040; border: 1px solid #FFDE59; border-radius: 10px; background-color: white;
                        position: relative; z-index: 2;">
                    <h2
                        style="text-align: center; margin-top: 40px; margin-bottom: -10px; color: #213C85; font-size: 18pt; font-weight: 700;">
                        About our Certification Programs
                    </h2>
                    <div style="padding-left: 30px; padding-right: 20px;">
                        <img ref="curriculumImage" alt="icon 48"
                            style="width: 60px; margin-top: 30px; margin-bottom: -15px;">
                        <h4 style="font-weight: 700; margin-bottom: -10px;">
                            Comprehensive Curriculum
                        </h4>
                        <p style="margin-bottom: 30px;">
                            Our programs include video-based training to enhance clarity and foundational
                            knowledge, followed by practical applications to help cement understanding. Led by
                            our expert instructors, these real-world sessions ensure all concepts are thoroughly
                            understood. This structure is designed to optimize each participant’s certification
                            journey, providing both robust resources and personalized instructional support.
                        </p>
                    </div>
                    <div style="padding-left: 30px; padding-right: 20px;">
                        <img ref="expertInstructorsImage" alt="icon 48"
                            style="width: 60px; margin-top: -5px; margin-bottom: -15px;">
                        <h4 style="font-weight: 700; margin-bottom: -10px;">
                            Expert Instructors
                        </h4>
                        <p style="margin-bottom: 30px;">
                            Our instructors are skilled professionals with years of experience and extensive
                            knowledge in our core assessments. They guide participants with clear and concise
                            instructions. Each instructor is committed to student success and provides valuable
                            insight and practical advice, ensuring a productive learning experience.
                        </p>
                    </div>
                    <div style="padding-left: 30px; padding-right: 20px;">
                        <img ref="flexibleImage" alt="icon 48"
                            style="width: 60px; margin-top: -5px; margin-bottom: -15px;">
                        <h4 style="font-weight: 700; margin-bottom: -10px;">
                            Flexible Learning Options
                        </h4>
                        <p style="margin-bottom: 30px;">
                            Our courses are designed to fit your schedule. You can choose from live group
                            courses or self-paced online sessions. Both options provide the same quality of
                            instruction. Students can access materials at any time. This flexibility helps
                            balance learning with other commitments. Whether you prefer a group setting or
                            learning at your own pace, we have an option for you.
                        </p>
                    </div>
                    <div style="padding-left: 30px; padding-right: 20px;">
                        <img ref="practicalImage" alt="icon 48"
                            style="width: 60px; margin-top: -5px; margin-bottom: -15px;">
                        <h4 style="font-weight: 700; margin-bottom: -10px;">
                            Practical Application
                        </h4>
                        <p style="margin-bottom: 30px;">
                            Our group training courses emphasize real-world application, allowing participants
                            to practice skills with peers in the course. This hands-on method not only builds
                            confidence but ensures knowledge is applied effectively, making the learning process
                            both relevant and engaging.
                        </p>
                    </div>
                    <div style="padding-left: 30px; padding-right: 20px;">
                        <img ref="supportImage" alt="icon 48"
                            style="width: 60px; margin-top: -5px; margin-bottom: -15px;">
                        <h4 style="font-weight: 700; margin-bottom: -10px;">
                            Support and Resources
                        </h4>
                        <p style="margin-bottom: 60px;">
                            Throughout the certification process, participants benefit from continuous support
                            and have access to an extensive array of resources, including study guides, videos,
                            and reference documents. Our dedicated team is always available to provide
                            assistance, helping you navigate any challenges and ensuring a successful learning
                            journey.
                        </p>
                    </div>
                    <div style="display: flex; justify-content: center; padding-bottom: 60px;">
                        <nuxt-link to="/certifications" class="button firstButton">Certification Options</nuxt-link>
                        <button class="secondButton" @click="scrollToContactFormSection">
                            Get Certified
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
        const imgElement1 = this.$refs.curriculumImage;
        const imgElement2 = this.$refs.expertInstructorsImage;
        const imgElement3 = this.$refs.flexibleImage;
        const imgElement4 = this.$refs.practicalImage;
        const imgElement5 = this.$refs.supportImage;

        this.setUnlockImage(
            imgElement1,
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Comprehensive+Curriculum.png",
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Comprehensive+Curriculum+(1).webp"
        );

        this.setUnlockImage(
            imgElement2,
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Success+Magazine_Expert+Instructors+1.png",
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Expert+Instructors+(1).webp"
        );

        this.setUnlockImage(
            imgElement3,
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Flexible+Learning+(2).png",
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Flexible+Learning+(2).webp"
        );

        this.setUnlockImage(
            imgElement4,
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Practical+Application+(1).png",
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Practical+Application+(1).webp"
        );

        this.setUnlockImage(
            imgElement5,
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Support+and+Resources+(1).png",
            "https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Support+and+Resources+(1).webp"
        );
    }

}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.about {
    padding-top: 40px;
    padding-bottom: 80px;
}

p {
    font-family: $nunito-family;
    font-size: 10.5pt;
}

.button {
    color: #FFF;
    background: #0033C5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 184px;
    height: 41px;
    border-radius: 4px;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    font-weight: 700;
    text-decoration-line: underline;
    cursor: pointer;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 8px;
}

button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 184px;
    height: 41px;
    border-radius: 4px;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    font-weight: 700;
    text-decoration-line: underline;
    cursor: pointer;
    border: 1px solid #E0AD2B;
    background: white;
    color: #0D3FCD;
}

@media (max-width: 768px) {
    .about .row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about .button-container,
    .about .row div {
        display: flex;
        flex-direction: column !important;
        align-items: center !important;
        width: 100%;
    }

    .button,
    .firstButton,
    .secondButton {
        margin-bottom: 15px !important;
        width: 80% !important;
        max-width: 300px !important;
        text-align: center;
    }
}
</style>