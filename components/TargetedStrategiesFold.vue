<template>
    <section class="targetedStrategies" id="targetedStrategies">
        <img src="@/assets/disc-awareness/white-textured-background.png" alt="background image" class="background">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Targeted Strategies for
                        <br />
                        Leadership Success
                    </h1>
                </div>
                <div class="col-12">
                    <p class="">Discover specific techniques & approaches to enhance
                    <br />
                    your leadership capabilities based on your DISC profile. </p>
                    <p style="font-weight: bold;">Explore actionable guidance to navigate various leadership scenarios successfully:</p>
                </div>
                <img src="@/assets/disc-leadership/female-with-descriptors-around-her.png"
                    alt="female-with-descriptors-around-her" class="female">
                <div class="col-12 button-container">
                    <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf"
                        class="btn btn-download" target="_blank" rel="noopener" style="cursor: pointer;">
                        <img src="@/assets/disc-awareness/download-samples-button.png" alt="Download Sample">
                    </a>
                    <a href="#discLeadershipContactForm" class="btn btn-learn" style="cursor: pointer;">
                        <img src="@/assets/disc-awareness/learn-more-button.png" alt="Learn More">
                    </a>
                </div>
            </div>
            <br /><br /><br />
        </div>
    </section>
</template>


<style lang="scss" scoped>
@import '~assets/scss/vars';

.targetedStrategies {
    .background {
        position: absolute;
        width: 100%;
        z-index: -1;
    }

    .container {
        .female {
            display: block;
            margin: 0 auto;
            width: 70%;
            border-radius: 15px;
            padding-top: 20px;
        }
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;

        .btn {
            display: inline-block;
            width: 200px;
            height: 50px;
            margin-top: 50px;
            margin-bottom: 20px;

            img {
                border-radius: 5px;
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    h1 {
        text-align: center;
        margin-top: 75px;
        margin-bottom: -10px;
        font-size: 38px;
        color: #0453f1;
        line-height: 50px;
    }

    p {
        text-align: center;
    }
}

@media (max-width: 768px) {
    .targetedStrategies {
        h1 {
            margin-top: 50px;
            font-size: 34px;
        }

        .button-container {
            flex-direction: column;
            align-items: center;
            margin-bottom: 60px;
            

            .btn {
                width: 80%;
                max-width: 220px;
                margin-bottom: -40px;
            }
        }
    }
}
</style>
