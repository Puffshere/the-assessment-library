<template>
    <section class="results" id="results">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/results-background-graphic.png" alt="results background graphic"
                            class="graphic">
                    </div>
                    <div class="col-6">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC/results-icon.png" alt="results icon" class="resultsIcon">
                        <h1>
                            Results
                        </h1>
                        <p><span style="color: #abd7ff; font-weight: bold;">Enhanced Communication</span><br />
                            Provides a common language for teams, leading to better understanding and collaboration.
                            <br />
                            <br />
                            <span style="color: #abd7ff; font-weight: bold;">Improved Customer Interactions</span><br />
                            Customer communication becomes more individualized and empathetic, resulting in greater
                            success and loyalty.
                            <br />
                            <br />
                            <span style="color: #abd7ff; font-weight: bold;">Strengthened Leadership</span><br />
                            Empowers leaders to understand and adapt to their team's behaviors, enhancing productivity
                            and morale.
                            <br />
                            <br />
                            <span style="color: #abd7ff; font-weight: bold;">Conflict Resolution</span><br />
                            Help teams navigate conflicts by recognizing and accommodating differences in Behavioral and
                            working styles.
                            <br />
                            <br />
                            <span style="color: #abd7ff; font-weight: bold;">Enhanced Teamwork</span><br />
                            Improve understanding and communication among team members to drive projects to successful
                            completion.
                        </p><br />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
h1 {
    font-size: 65px;
    color: white;
    font-weight: bold;
    margin: 0px;
}

p {
    color: white;

}

.results {
    background-color: #1e222d;
    min-height: 860px;

    .col-12 {
        margin-top: -8px;
        margin-bottom: -34px;
    }

    .graphic {
        max-height: 860px;
    }

    img {
        width: 100%;
    }

    .col-6 {
        text-align: right;
    }

    .resultsIcon {
        margin-top: 70px;
        width: 28%;
    }
}

@media (max-width: 1100px) {

    .results {
        padding-bottom: 80px;
    }
}
</style>