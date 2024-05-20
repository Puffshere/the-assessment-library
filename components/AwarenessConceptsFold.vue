<template>
    <section class="awarenessConcepts">
        <img src="@/assets/disc-awareness/white-textured-background.png" alt="background image" class="background">
        <br />
        <br />
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-10">
                        <h1>
                            Benefits of Learning & Applying
                            <br />
                            DISC Awareness Concepts
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="col-7 conceptsList">
                            <div class="blackBoxes">
                                <span><img src="@/assets/disc-awareness/increase-commitment-cooperation.png"
                                        alt="rapport disc">
                                    <span style="padding-left: 15px;">Increase commitment & cooperation</span>
                                </span>
                            </div>
                            <div class="blackBoxes">
                                <span><img src="@/assets/disc-awareness/build-effective-teams.png" alt="rapport disc">
                                    <span style="padding-left: 15px;">Build effective teams</span>
                                </span>
                            </div>
                            <div class="blackBoxes">
                                <span><img src="@/assets/disc-awareness/resolve-prevent-conflict.png"
                                        alt="rapport disc">
                                        <span style="padding-left: 15px;">Resolve & prevent conflict</span>
                                </span>
                            </div>
                            <div class="blackBoxes">
                                <span><img src="@/assets/disc-awareness/gain-endorsement-credibility-rapport.png"
                                        alt="rapport disc">
                                        <span style="padding-left: 15px;">Gain endorsement, credibility, & rapport</span>
                                </span>
                            </div>
                            <div class="blackBoxes">
                                <span><img src="@/assets/disc-awareness/increase-sales.png" alt="rapport disc">
                                    <span style="padding-left: 15px;">Increase sales</span>
                                </span>
                            </div>
                            <div class="blackBoxes">
                                <span><img
                                        src="@/assets/disc-awareness/understand-interpersonal-communication-behavior.png"
                                        alt="rapport disc">
                                        <span style="padding-left: 15px;">Understand interpersonal communication & behavior</span>
                                </span>
                            </div>
                        </div>
                        <div class="col-6">
                            <img src="~/assets/disc-awareness/black-female-pointing.png" alt="black female pointing"
                                class="womanSmiling">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
.awarenessConcepts {
    position: relative;
    z-index: 1;
    min-height: 900px;
    padding-top: 40px;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .col-12 {
        margin-bottom: -8px;
    }

    .conceptsList {
        position: relative;
        z-index: 1;
    }

    .blackBoxes {
        display: flex; /* Use flexbox */
        align-items: center; /* Center items vertically */
        color: white;
        background-color: #1e222d;
        margin-bottom: 10px;
        border-radius: 20px;
        padding: 20px; /* Uniform padding */
        margin: 20px 50px;
        font-size: 21px;
        line-height: 22px;
        font-weight: 300;
        max-height: 64px;
        position: relative;

        img {
            margin-left: -50px; /* Space between icon and text */
            width: 75px; /* Adjust size as needed */
        }

        span {
            display: flex;
            align-items: center; /* Ensure text and icon are aligned */
        }
    }

    .womanSmilingContainer {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        width: 60%;
    }

    .womanSmiling {
        position: absolute;
        top: 60px;
        right: 10px;
        width: 50%;
        margin-top: 0px;
        z-index: 5;
    }

    h1 {
        color: #0033c5;
        margin: 0px;
        margin-left: 20px;
        font-size: 42px;
        line-height: 42px;
        margin-bottom: 40px;
    }
}

@media (max-width: 1100px) {
    .awarenessConcepts {
        min-height: 1000px;

        h1 {
            margin-top: -40px;
            font-size: 40px;
        }

        .blackBoxes {
            margin-bottom: 10px;
            padding: 20px;
            margin: 20px 5px;
            margin-left: 30px;
            font-size: 14px;
            line-height: 22px;
        }

        .womanSmiling {
            position: static;
            top: 60px;
            right: 10px;
            width: 100%;
            margin-top: 40px;
            margin-bottom: 100px;
            z-index: 5;
        }
    }
}
</style>