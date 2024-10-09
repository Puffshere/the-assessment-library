-<template>
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
    width: 100%;
    height: 548px;
}

h2 {
    color: white;
    font-size: 18pt;
    text-align: center;
    font-weight: 700;
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