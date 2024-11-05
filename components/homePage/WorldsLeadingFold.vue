<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>
                        The World's Leading Assessment Platform
                    </h1>
                </div>

                <div class="col-12 cards-container">
                    <div class="card">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Fold+2+-+Yrs+in+business.png"
                            alt="card 1 image" class="card-image">
                        <div class="cardNumber">
                            25+
                        </div>
                        <div class="cardText">
                            Years <br />
                            in Business
                        </div>
                    </div>
                    <a style="text-decoration: none; color: #0033C5" href="/certifications">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Fold+2+-+Certified+Practitioners.png"
                                alt="card 2 image" class="card-image">
                            <div class="cardNumber">
                                2300+
                            </div>
                            <div class="cardText">
                                Certified <br />
                                Practitioners
                            </div>
                        </div>
                    </a>
                    <a style="text-decoration: none; color: #0033C5" href="/assessments">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Fold+2+-+Assessments+administered.png"
                                alt="card 3 image" class="card-image">
                            <div class="cardNumber">
                                34m+
                            </div>
                            <div class="cardText">
                                Assessments <br />
                                Administered
                            </div>
                        </div>
                    </a>
                    <a style="text-decoration: none; color: #0033C5" href="/about/partners">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Home+Page/Fold+2+-+Countries.png"
                                alt="card 4 image" class="card-image">
                            <div class="cardNumber">
                                54
                            </div>
                            <div class="cardText">
                                Countries Around <br />
                                the Globe
                            </div>
                        </div>
                    </a>
                </div>
                <div class="row" style="display: flex; justify-content: center; padding-top: 80px;">
                    <button class="blue" @click="scrollToContactForm">
                        Book Live Demo
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
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
@import '~assets/scss/new-styles';

section {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
}

.container {
    padding-top: 30px;
    padding-bottom: 70px;
}

h1 {
    color: #213C85;
    font-family: Poppins;
    text-align: center;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
}

.card {
    width: 202px;
    height: 226px;
    border-radius: 10px;
    border: 1px solid #E6E153;
    background: #FFF;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    padding: 10px;
}

.card-image {
    width: 50px;
    margin-top: -20px;
    margin-bottom: -10px;
}

.cardNumber {
    color: #E0AD2B;
    font-family: Poppins;
    font-size: 36pt;
    font-weight: 700;
    margin-top: -20px;
}

.cardText {
    color: #0033C5;
    font-family: $nunito-family;
    font-size: 15pt;
    font-weight: 400;
    margin-top: -30px;
}

@media (max-width: 900px) {
    .cards-container {
        display: grid;
        grid-template-columns: 202px 202px; 
        grid-auto-rows: 226px; 
        gap: 20px; 
        justify-content: center;
    }

    .card {
        width: 202px; 
        height: 226px; 
    }
}

@media (max-width: 500px) {
    .cards-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px; 
    }

    .card {
        width: 202px; 
        height: 226px; 
    }
}

</style>