<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-9" style="text-align: right; color: white;">
                        <p>
                            <span style="font-weight: 700;">One of the best business decisions I made as a certified
                                coach was to explore the solutions
                                offered by Assessments 24x7.</span> The online certification courses, forums, training
                            materials
                            and support are world-class. Additionally, the assessment reports are personally branded and
                            easy to assess. Working with Assessments 24x7 has supercharged my coaching practice and
                            they've become an integral extension of my professional service offering. I highly recommend
                            Assessments 24x7 to any coach, consultant, or corporate trainer looking for a one-stop
                            solution that will ensure their business continues to innovate and stay forward-thinking.
                            <br />
                            <br />
                            <strong>Susan Merli, Founder & CEO <span style="text-decoration: underline;">Authentika
                                    Consulting Inc.</span></strong>
                        </p>
                        <button @click="testimonialLink">
                            View Testimonials
                        </button>
                    </div>
                    <div class="col-3">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Susan+Merli.jpg"
                            alt="image of woman" style="width: 100%;">
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
    height: 36px;
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid #E0AD2B;
    margin-top: 10px;
    text-decoration: underline;
    color: #0C3ECC;
    font-size: 10.5pt;
    font-weight: 700;
    cursor: pointer;
}

img {
    border-radius: 10px;
}
</style>