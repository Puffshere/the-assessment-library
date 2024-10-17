<template>
    <section>
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 0px;">
        <div class="container" style="padding-top: 50px; padding-bottom: 40px;">
            <div class="row">
                <div class="col-12">
                    <h2>
                        Platform and plans <span style="color: #FFDE59">FAQ</span>
                    </h2>
                </div>
            </div>
            <div class="faq">
                <div class="faq-item" @click="toggleFaq(0)">
                    <div class="faq-question">
                        <p>Why should I choose Assessments 24x7 over other assessment providers?</p>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Arrow+-+FAQ.png"
                            class="faq-icon" :class="{ open: openFaqIndex === 0 }" alt="Arrow Icon">
                    </div>
                    <div class="faq-answer" v-if="openFaqIndex === 0">
                        <p>At Assessments 24x7, we proudly serve world-renowned coaches, top corporations, and leading
                            organizations with our powerful assessment platform. Our proprietary system efficiently
                            processes 3000+ DISC, Motivators, and other behavioral assessments daily, providing over
                            10,000 customized reports in a wide range of languages. Seamlessly integrating with LMS,
                            CRM, HR and recruiting systems, our platform ensures a smooth, cohesive experience for
                            users.</p>
                    </div>
                </div>
                <div class="faq-item" @click="toggleFaq(1)">
                    <div class="faq-question">
                        <p>What if I'm not sure which plan is best for me?</p>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Arrow+-+FAQ.png"
                            class="faq-icon" :class="{ open: openFaqIndex === 1 }" alt="Arrow Icon">
                    </div>
                    <div class="faq-answer" v-if="openFaqIndex === 1">
                        <p>No worries! Our friendly and knowledgeable customer service team is here to help you, 24x7!
                            Just give us a call at 206-400-6647 or <span style="text-decoration: underline;"><a href="#contactFormSection">complete our contact form above.</a></span> We’ll talk you
                            through our plan options and help you
                            choose the one that’s just right for you. And remember, you can change plans at any time to
                            suit your needs.</p>
                    </div>
                </div>
                <div class="faq-item" @click="toggleFaq(2)">
                    <div class="faq-question">
                        <p>What kind of customization options are available with each plan?</p>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Arrow+-+FAQ.png"
                            class="faq-icon" :class="{ open: openFaqIndex === 2 }" alt="Arrow Icon">
                    </div>
                    <div class="faq-answer" v-if="openFaqIndex === 2">
                        <p>Each plan offers unique customization features, from adding your logo to reports in the
                            Essentials plan, to creating fully private-labeled interfaces and branded assessments in the
                            Enhanced and Enterprise plans. Our Enterprise plan even allows for custom API integrations
                            to seamlessly connect assessment data with your CRM, LMS, or other business software.</p>
                    </div>
                </div>
                <div class="faq-item" @click="toggleFaq(3)">
                    <div class="faq-question">
                        <p>Can I upgrade or downgrade my plan at any time?</p>
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Arrow+-+FAQ.png"
                            class="faq-icon" :class="{ open: openFaqIndex === 3 }" alt="Arrow Icon">
                    </div>
                    <div class="faq-answer" v-if="openFaqIndex === 3">
                        <p>Yes, you have the flexibility to change your plan as your needs evolve. Whether you need more
                            advanced features or want to scale back, upgrading or downgrading can be done quickly and
                            easily to ensure you have the right tools for your assessment success.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            openFaqIndex: null
        };
    },
    methods: {
        toggleFaq(index) {
            this.openFaqIndex = this.openFaqIndex === index ? null : index;
        },
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

<style lang="scss" scoped>
@import '~assets/scss/vars';

section {
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
    background-position: center;
    width: 100%;
    height: auto;
    padding-bottom: 40px;
}

h2 {
    color: white;
    font-size: 18pt;
    text-align: center;
    font-weight: 700;
}

p {
    font-family: $nunito-family;
}

.faq {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.faq-item {
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: underline;
}

.faq-question p {
    font-weight: 700;
    color: #0033C5;
    margin: 0;
}

.faq-icon {
    transition: transform 0.3s ease;
    width: 30px;
}

.faq-icon.open {
    transform: rotate(180deg);
}

.faq-answer {
    margin-top: 10px;
    color: #333;
}
</style>