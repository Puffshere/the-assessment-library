<template>
    <section id="freedisc">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-graphic.png"
            alt="fold 4 graphic" style="position: absolute; right: 0px; margin-top: -10px;">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-left-graphic.png"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-top: 60px;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-8">
                        <h1>
                            Empower Your Success with DISC
                        </h1>
                        <p>
                            The DISC assessment measures and provides insight into four primary <br />
                            behavioral tendencies and emotions, exploring how they combine into a unique <br />
                            personal blend:
                        </p>
                        <ul>
                            <li>
                                <strong>D (Dominance):</strong> Direct and guarded, fast-paced, task-oriented, focusing
                                on problems and
                                challenges, assertive.
                            </li>
                            <li>
                                <strong>I (Influence):</strong> Direct and open, fast-paced, people-oriented, focuses on
                                building
                                relationships and contacts, persuasive.
                            </li>
                            <li>
                                <strong>S (Steadiness):</strong> Indirect and open, slow-paced, people-oriented,
                                emphasizes pace and
                                consistency, supportive.
                            </li>
                            <li>
                                <strong>C (Conscientious):</strong> Indirect and guarded, slow-paced, task-oriented,
                                meticulous about
                                procedures and constraints, analytical.
                            </li>
                        </ul>
                        <p style="margin-bottom: 40px;">
                            By understanding your DISC Style and whether you are assertive, <br />
                            persuasive, supportive, or analytical helps you align your communication <br />
                            to complement your colleagues' styles, thereby enhancing collaboration <br />
                            and reducing workplace friction. Enhance your interpersonal dynamics <br />
                            today—click below for your complimentary assessment.
                        </p>
                        <button @click="scrollToContactFormSection">
                            Take Free Assessment
                        </button>
                    </div>
                    <div class="col-4">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/high-five.png"
                            alt="high five image" style="width: 180%; margin-top: 60px; margin-left: -40px;"
                            class="image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactFormSection(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style scoped>
.container {
    padding-top: 20px;
    padding-bottom: 80px;
}

h1 {
    font-size: 27pt;
    color: #213985;
    font-weight: 700;
}

button {
    color: #FFF;
    background: #0033C5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 184px;
    height: 41px;
    border-radius: 7px;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    font-weight: 700;
    text-decoration-line: underline;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .image {
        width: 100% !important;
        margin: 0 auto !important;
        margin-top: 50px !important;
        margin-bottom: -100px !important;
    }
}
</style>