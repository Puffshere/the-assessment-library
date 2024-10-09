-<template>
    <section>
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
                alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 0px;">
        <div class="container" style="padding-top: 50px; padding-bottom: 40px;">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Account+Levels+Graphics+(5).png"
                            alt="image of woman" style="width: 100%;">
                    </div>
                    <div class="col-6" style="text-align: left; color: white; margin-top: -10px;">
                        <h2>
                            <span style="color: #FFDE59;">Harness the full potential</span> <br />
                            of your dashboard
                        </h2>
                        <p>
                            Manage every aspect of the assessment process — from ordering and administering assessments
                            to accessing comprehensive reports and insights — with Assessments 24x7’s robust and
                            customizable dashboard. Our powerful benchmarking tools and comprehensive assessment
                            options, from standard to 360s, provide in-depth analysis tailored to your needs. Plus,
                            private labeling ensures your assessments reflect your brand. <br />
                            <br />
                            Easily navigate, track, and
                            export reports, while accessing trainer materials like debrief guides, multimedia content,
                            and facilitator resources right from your dashboard.
                        </p>
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
    font-family: Nunito Sans;
    line-height: 14.33pt;
}

img {
    border-radius: 10px;
}
</style>