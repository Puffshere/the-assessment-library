<template>
    <div class="body">
        <section id="getcertified" class="topSection" style="padding-bottom: 180px;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 style="color: white; text-align: center;">
                            Our Assessment Certification Programs
                        </h1>
                        <p style="color: white; text-align: center; margin-top: -20px;">
                            Whether independent facilitators, corporate trainers, coaches, or consultants, Certified
                            Practitioners offer unique expertise and perspective, receive higher contracts and salaries,
                            rate stronger when interacting with others, and succeed in attracting more clients and
                            referrals. Not only does certification training differentiate our clients, each of our
                            assessment certifications are recognized for continuing education (CE) credits with SHRM,
                            HRCI,
                            ATD and ICF.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container" style="padding-bottom: 100px;">
                <div class="row" style="margin-top: -160px;">
                    <div class="col-12">
                        <div class="col-4">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Assessments24x7_Badge_DISC.png"
                                alt="disc cert badge image" style="width: 100%;">
                            <h3>
                                DISC <br />
                                Assessment Certification
                            </h3>
                            <p>
                                Are you looking for mastery-level understanding of DISC with the expertise and training
                                to differentiate you from other coaches, consultants, and trainers? Our DISC Assessment
                                Certification is designed to provide you with the ability to debrief a client’s DISC
                                report with confidence and accuracy and to use the assessment for a variety of client
                                needs.
                            </p>
                            <div style="display: flex; justify-content: center; margin-top: 50px;">
                                <button @click="discCertification">
                                    DISC Certification
                                </button>
                            </div>
                        </div>
                        <div class="col-4">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Assessments24x7_Badge_Motivators.png"
                                alt="motivators cert badge image" style="width: 100%;">
                            <h3>
                                Motivators <br />
                                Assessment Certification
                            </h3>
                            <p>
                                The Motivators Assessment Certification program will substantially enhance your
                                knowledge of the seven Dimensions of Motivation, showing core values individually and
                                how they interact together to drive our satisfaction. Through a curriculum designed to
                                help guide the implementation of this remarkable tool, you can take a deeper dive into
                                the “why” behind
                                behavior and emotions.
                            </p>
                            <div style="display: flex; justify-content: center; margin-top: 50px;">
                                <button @click="motCertification">
                                    Motivators Certification
                                </button>
                            </div>
                        </div>
                        <div class="col-4">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/Assessments24x7_Badge_EIQ.png"
                                alt="eiq cert badge image" style="width: 100%;">
                            <h3>
                                Emotional Intelligence <br />
                                Assessment Certification
                            </h3>
                            <p>
                                The EIQ Certification examines at a much more comprehensive level how people perceive
                                and apply their Emotional Intelligence. Developed with author Robert Jerus, the EIQ
                                Certification empowers practitioners with enhanced clarity and insights necessary to
                                consistently support and share what’s needed for creating beneficial interpersonal
                                outcomes with strong EIQ.
                            </p>
                            <div style="display: flex; justify-content: center; margin-top: 29px;">
                                <button @click="eiqCertification">
                                    EIQ Certification
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        discCertification(event) {
            window.location.href = 'https://www.assessments24x7.com/certifications/assessment/#fold5';
            event.target.blur();
        },
        motCertification(event) {
            window.location.href = 'https://www.assessments24x7.com/certifications/assessment/#fold7';
            event.target.blur();
        },
        eiqCertification(event) {
            window.location.href = 'https://www.assessments24x7.com/certifications/assessment/#fold8';
            event.target.blur();
        },
    }
}

</script>


<style lang="scss" scoped>
.topSection {
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
    background-position: center;
}

h1 {
    font-size: 27pt;
    font-weight: 700;
    color: #213C85;
}

h2 {
    font-size: 18pt;
    color: #213C85;
    text-align: right;
    font-weight: 700;
}

h3 {
    font-size: 20px;
    text-align: center;
    font-weight: 700;
}

p {
    font-size: 14px;
    text-align: center;
}

button {
    width: 184px;
    height: 36px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    color: #FFF;
    text-align: center;
    font-size: 8.25pt;
    font-weight: 700;
    text-decoration-line: underline;
    background: #0C3ECC;
}
</style>