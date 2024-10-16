<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>
                        <span style="color: #E0AD2B;">Right</span> for your budget
                    </h2>
                    <p>
                        No matter the size or scope of your assessment requirements, Assessments 24x7 has a plan that
                        fits your budget. <br />
                        All of our plans are backed by our renowned, 24x7 customer support.
                    </p>
                    <div class="card-container">
                        <div class="card">
                            <div class="card-title">
                                Essentials
                            </div>
                            <div class="card-text">
                                For Fundamental Features
                            </div>
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/Home+Page/Level+1.png" alt="Essentials Plan Image" class="card-image">
                        </div>
                        <div class="card">
                            <div class="card-title">
                                Enhanced
                            </div>
                            <div class="card-text">
                                For Next-Level Benefits
                            </div>
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/Home+Page/Level+2.png" alt="Enhanced Plan Image" class="card-image">
                        </div>
                        <div class="card">
                            <div class="card-title">
                                Enterprise
                            </div>
                            <div class="card-text">
                                For Ultimate Customization
                            </div>
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/Home+Page/level+3.png" alt="Enterprise Plan Image" class="card-image">
                        </div>
                    </div>
                    <div class="row" style="display: flex; justify-content: center; padding-top: 0px;">
                        <button @click="jumpToPlatformPageChecklist">
                            Compare Plans
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
        jumpToPlatformPageChecklist(event) {
            window.location.href = 'https://www.assessments24x7.com/';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

section {
    background: linear-gradient(180deg, #0033C5 -2.43%, #0459DF 45.98%, #B9C5D9 96.95%);
}

.container {
    padding-top: 50px;
    padding-bottom: 80px;
}

h2 {
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 18pt;
    font-weight: 700;
}

p {
    color: white;
    text-align: center;
    font-family: $nunito-family;
    font-size: 10.5pt;
    font-weight: 400;
    margin-bottom: 40px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    max-width: 1043px;
    margin: auto;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid #E0AD2B;
    background: #FFF;
    box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);
}

.card {
    flex: 1;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 20px 10px 20px;
}

.card-title {
    color: #0033C5;
    font-family: Poppins;
    font-size: 15pt;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: -20px;
}

.card-text {
    color: #0033C5;
    font-family: $nunito-family;
    font-size: 10.5pt;
    font-weight: 400;
    margin-bottom: 20px;
}

.card-image {
    width: 220px;
    height: auto;
}

button {
    width: 184px;
    height: 41px;
    border-radius: 8px;
    text-decoration: underline;
    cursor: pointer;
    font-family: Poppins;
    font-size: 10.5pt;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #0033C5;
    text-align: center;
    font-weight: 700;
    background-color: white;
    border: 1px solid #E0AD2B;
    margin-top: 60px;
}

@media (max-width: 1200px) {
    .card-container {
        flex-direction: column;
        align-items: center;
    }
    .card {
        width: 90%;
        margin-bottom: 20px;
    }
    .card-image {
        width: 150px;
        margin-bottom: 20px;
    }
}
</style>