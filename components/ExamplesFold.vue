<template>
    <section class="examples" id="examples">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Examples</h1>
                </div>
                <div class="col-12 flex-container">
                    <div class="boxes">
                        <img src="~/assets/disc-awareness/d-circle.png" alt="d circle" class="icon" />
                        <br />
                        <p>High D styles are naturally higher in <span style="font-weight: bold">Goal-Directed
                                Performance</span>, but lower in <span style="font-weight: bold">Self-Awareness</span>,
                            as they focus on tasks and outcomes more than the self.</p>
                    </div>
                    <div class="boxes">
                        <img src="~/assets/disc-awareness/i-circle.png" alt="i circle" class="icon" />
                        <br />
                        <p>High I styles are naturally higher in <span style="font-weight: bold">Teamwork &
                                Collaboration</span>, as they thrive in social
                            interactions and connection with others, but lower in <span
                                style="font-weight: bold">Self-Control and Discipline</span>, as they
                            are energized by new and exciting pursuits rather than routine, dedication, and
                            follow-through.</p>
                    </div>
                    <div class="boxes">
                        <img src="~/assets/disc-awareness/s-circle.png" alt="s circle" class="icon" />
                        <br />
                        <p>High S styles are naturally higher in <span style="font-weight: bold">Empathy, Sensitivity,
                                and Appreciation</span> because they are
                            so supportive and focused on relationships with others, but naturally lower in <span
                                style="font-weight: bold">Change
                                Catalyst</span>, because they do not like sudden changes and value stability and
                            predictability.
                        </p>
                    </div>
                    <div class="boxes">
                        <img src="~/assets/disc-awareness/c-circle.png" alt="c circle" class="icon" />
                        <br />
                        <p>High C styles are naturally higher in <span style="font-weight: bold">Connections of Cause &
                                Effect</span> because they are very
                            attentive to the details, perceived risks, and weighing positive and negative
                            considerations. They are naturally lower in <span style="font-weight: bold">Interpersonal
                                Development</span> because they pay more
                            attention to the tasks and details over the dynamics of people and relationships.</p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.examples {
    min-height: 600px;
    background-color: #1e222d;

    .flex-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        /* Set space between boxes */
    }

    .boxes {
        background-color: white;
        min-height: 460px;
        border-radius: 15px;
        flex: 1 1 calc(25% - 20px);
        /* Adjust width of boxes with spacing */
        margin-top: 30px;
        margin-bottom: 50px;
        text-align: left;
        padding: 0px 14px;
        padding-top: 15px;

        .icon {
            width: 32%;
            display: block;
            float: left;
        }

        p {
            margin-top: 75px;
        }
    }

    h1 {
        text-align: center;
        margin: 40px;
        font-size: 48px;
        color: #ffffff;
    }
}

@media (max-width: 1100px) {
    .examples {
        h1 {
            margin: 0px;
            margin-top: 60px;
            margin-bottom: 40px;
            font-size: 38px;
            line-height: 60px;
        }

        .boxes {
            padding-bottom: 30px;
        }
    }
}

@media (max-width: 768px) {
    .examples {
        .flex-container {
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
        }

        .boxes {
            flex: 1 1 auto;
            /* Full width for each box */
            width: calc(100% - 40px);
            /* Full width minus 20px padding on each side */
            margin-bottom: 20px;
            padding-left: 20px;
            padding-right: 20px;

            .icon {
                margin-top: 10px;
            }

            p {
                margin-top: 120px;
            }
        }
    }
}
</style>
