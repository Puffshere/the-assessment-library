-<template>
    <section>
        <div class="container" style="padding-top: 190px; margin-top: -200px; padding-bottom: 100px;">
            <div class="row">
                <div class="col-12">

                    <div class="col-5">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/transformation-graphic.png"
                            alt="image of woman" style="width: 100%;">
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
                        <button @click="testimonialLink">
                            Speak to a Specialist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        testimonialLink(event) {
            window.location.href = 'https://www.assessments24x7.com/about/testimonials';
            event.target.blur();
        }
    }
}

</script>

<style scoped>
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
    font-size: 10.5pt;
}

button {
    width: 184px;
    height: 36px;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    margin-top: 10px;
    text-decoration: underline;
    color: #E0AD2B;
    font-size: 8.25pt;
    font-weight: 700;
    cursor: pointer;
}

img {
    border-radius: 10px;
}
</style>