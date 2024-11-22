<template>
    <div class="total">
        <section>
            <div class="container" style="padding-top: 10px;">
                <div class="row">
                    <div class="col-12" style="color: white;">
                        <h1 style="text-align: center; margin-bottom: -10px;">
                            Characteristics of an Effective <br />
                            Assessment Tool
                        </h1>
                        <div class="bottomContainer"
                            style="color: #252430; text-align: left; padding-top: 50px; margin-top: 50px; padding-bottom: 40px;">
                            <div class="row">
                                <div class="col-12">
                                    <div class="heading-container">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/checkmark.webp"
                                            alt="checkmark icon" class="checkmark-icon">
                                        <h5>Reliability</h5>
                                    </div>
                                    <p>
                                        Reliability refers to the consistency of an assessment tool.
                                        Reliable tools produce stable results across different scenarios and times,
                                        regardless of external factors. Assessments 24x7's tools are built on
                                        scientifically validated frameworks, ensuring that results remain consistent
                                        when administered to similar participants under the same conditions. This gives
                                        HR professionals, coaches, and leaders confidence in making data-driven
                                        decisions.
                                    </p>
                                    <br />
                                    <div class="heading-container">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/checkmark.webp"
                                            alt="checkmark icon" class="checkmark-icon">
                                        <h5>Validity</h5>
                                    </div>
                                    <p>
                                        A valid assessment tool accurately measures what it is intended
                                        to measure, ensuring that results are meaningful and reliable. At Assessments
                                        24x7,
                                        our assessments are rigorously tested for content, construct, and
                                        criterion-related
                                        validity. This means they reflect the characteristics, behaviors, and
                                        competencies
                                        they claim to measure, aligning with real-world outcomes. For example, a DISC
                                        assessment measures behavioral tendencies, providing accurate insights into how
                                        individuals communicate and work with others.
                                    </p>
                                    <br />
                                    <div class="heading-container">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/checkmark.webp"
                                            alt="checkmark icon" class="checkmark-icon">
                                        <h5>Fairness</h5>
                                    </div>
                                    <p>
                                        Fairness ensures that an assessment tool is free from bias and
                                        provides equal opportunities for all participants. Our assessments undergo
                                        thorough analysis to eliminate biases related to gender, age, ethnicity, and
                                        other
                                        factors, ensuring equitable results across diverse groups. Fair assessments
                                        create
                                        an inclusive environment where all participants can perform their best.
                                    </p>
                                    <br />
                                    <div class="heading-container">
                                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/checkmark.webp"
                                            alt="checkmark icon" class="checkmark-icon">
                                        <h5>Standardization</h5>
                                    </div>
                                    <p>
                                        Standardization in the questionnaire ensures consistency in testing methods.
                                        Standardized assessment tools offer a uniform process for
                                        administration, scoring, and interpretation, ensuring that all participants are
                                        assessed under the same conditions. This ensures that the results are comparable
                                        across individuals and groups. At Assessments 24x7, our tools follow a
                                        consistent
                                        structure and scoring system, allowing organizations to benchmark results and
                                        make
                                        informed decisions based on standardized data.
                                    </p>
                                    <div style="display: flex; justify-content: center; margin-top: 30px;">
                                        <button @click="learnMoreButton" class="blue" style="min-width: 325px;">
                                            Learn More About Our Validation Process
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="sectionMiddle">

        </section>
        <section class="sectionBottom">

        </section>
    </div>
</template>

<script>
export default {
    methods: {
        learnMoreButton(event) {
            window.location.href = '/about/validity';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

section {
    height: 282px;
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
}

.bottomContainer {
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid #FFDE59;
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 40px 10px 40px;
}

.heading-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

.checkmark-icon {
    margin-right: 5px;
    width: 23px;
    margin-bottom: -13px;
}

h5 {
    margin: 0;
    margin-bottom: -15px;
}

.sectionMiddle {
    background: white;
    height: 770px;
}

.sectionBottom {
    height: 63px;
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
}

@media (max-width: 1200px) {
    .total {
        height: auto;
        margin-bottom: 0px;
    }

    section {
        height: auto;
        margin-bottom: 0px;
    }

    .sectionMiddle {
        display: none !important;
    }

    .sectionBottom {
        display: none !important;
    }
}
</style>