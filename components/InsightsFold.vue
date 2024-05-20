<template>
    <section class="insights" id="insights">
        <div class="container">
            <div class="row">
                <div class="full-width">
                    <div class="flex-container">
                        <div class="boxes" style="background-color: #0453f1">
                            <h3>Leadership Insights
                                <br />
                                Tailored to You
                            </h3>
                            <img src="~/assets/disc-leadership/left-icon.png" alt="d circle" class="icon" />
                            <br />
                            <p>Unlock personalized leadership strategies based on the unique DISC style to maximize impact
                                and effectiveness in leading teams.</p>
                        </div>
                        <div class="boxes" style="background-color: #1e222d;">
                            <h3>Enhance Team
                                <br />
                                Collaboration
                            </h3>
                            <img src="~/assets/disc-leadership/middle-icon.png" alt="i circle" class="icon" />
                            <br />
                            <p>Learn customized communication techniques to connect authentically with diverse styles,
                                fostering a more harmonious and productive team environment.</p>
                        </div>
                        <div class="boxes" style="background-color: #00a8ff;">
                            <h3>Drive Organizational
                                <br />
                                Success
                            </h3>
                            <img src="~/assets/disc-leadership/right-icon.png" alt="s circle" class="icon" />
                            <br />
                            <p>Elevate performance & organizational success by leveraging tailored leadership strategies to
                                enhance communication, motivation, & collaboration based on individual DISC styles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.insights {
    background-color: #1e222d27;

    .full-width {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;

        .flex-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 0px;
            margin-bottom: -75px;
            width: 100%;
        }
    }
    
    .boxes {
        flex: 1 1 calc(33.3333%);
        text-align: center;
        padding: 20px 15px;
        color: white;
        align-items: center;

        .icon {
            width: 15%;
            display: block;
            margin: 0 auto;
            margin-bottom: -10px;
        }

        h3 {
            font-size: 21px;
            line-height: 28px;
        }

        p {
            margin-top: 0px;
            line-height: 22px;
            padding: 0px clamp(0px, 30%, 135px);
        }
    }
}

@media (max-width: 1100px) {
    .insights {
        background-color: white;
        
        .flex-container {
            flex-direction: column;
            align-items: center;
        }

        .boxes {
            flex: 1 1 100%;
            margin-bottom: 20px;

            .icons {
                width: 28%;
            }
        }
    }
}
</style>
