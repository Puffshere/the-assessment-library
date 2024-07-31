<template>
    <section class="discover-assessments-fold">
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <h1 style="color: white;">
                        Build High-Performing Teams, <br />
                        Empower Leadership, & <br />
                        Drive Success
                    </h1>
                    <p style="margin-bottom: 40px;">
                        DISC isn't just for recruitment—it's a daily game-changer. <br /> 
                        Use DISC to enhance meeting dynamics, tackle workplace <br />
                        challenges, and refine leadership, sales, and customer service <br />
                        strategies. Foster a culture of understanding, efficiency, and <br />
                        growth by embedding DISC into your business strategy.
                    </p>
                    <div class="row" style="margin-bottom: 160px;">
                        <button class="button" @click="scrollToContactForm">
                            <span>Discover Assessments</span>
                        </button>
                    </div>
                </div>
                <div class="col-3">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/team-standing-image.png"
                        alt="team of employees smiling image" class="groupSmiling" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
.discover-assessments-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-light-background.png");
}

.container {
    position: relative;
    z-index: 2;
}

.groupSmiling {
    width: 550px;
    position: relative;
    bottom: -169px;
    right: 310px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: white;
    border-radius: 40px;
    color: #0033c5;
    border: 1px solid white;

    &:hover {
        color: white;
        background-color: #0033c5;
    }
}

h1 {
    font-size: 48px;
    line-height: 57px;
    font-weight: 700;
}

p {
    font-size: 14.6667px;
    line-height: 20px;
    font-weight: 400;
    color: white;
}

</style>