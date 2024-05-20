<template>
    <section class="asi">
        <img src="@/assets/disc-awareness/white-textured-background.png" alt="background image" class="background">
        <div class="container">
            <div class="box">
                <div class="row">
                    <img src="@/assets/disc-awareness/asi-certified.png" alt="certified logo" class="certified">
                </div>
                <div class="content">
                    <h1>
                        <span class="check"><img src="@/assets/disc-awareness/checkmark.png" alt="checkmark"></span>
                        <span class="words" style="padding-right: 20px;">Validated</span>
                        <span class="check"><img src="@/assets/disc-awareness/checkmark.png" alt="checkmark"></span>
                        <span class="words" style="padding-right: 20px;">Reliable</span>
                        <span class="check"><img src="@/assets/disc-awareness/checkmark.png" alt="checkmark"></span>
                        <span class="words">Compliant</span>
                    </h1>
                    <p>Our assessments are leading by example with independent validation meeting APA, EEOC, AERA, and
                        NCME standards. Our goal is to ensure the trust of both our members and end-users alike by
                        providing the most accurate and reliable assessments available. This is why we believe in a
                        policy of total transparency, with every study's report available for your review, and to be
                        shared with your clients and colleagues. In an apples-to-apples comparison, we believe our
                        assessments and reports will prove to be the top choice among industry professionals who value
                        accuracy, compliance, and objectivity.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.asi {
    position: relative;
    width: 100%;
    min-height: 700px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.asi .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.asi .container {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.asi .box {
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px;
    max-width: 1100px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    border: solid 2px #cfced4;
}

.asi .row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.asi .certified {
    width: 14%;
    margin-top: -100px;
    position: absolute;
    padding-bottom: 20px;
}

.asi .content {
    padding-top: 22px;
}

.asi .content h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.asi .content .check img {
    color: #ffcc00;
    width: 48px;
    margin-top: -15px;
}

.asi .content p {
    font-size: 19px;
    line-height: 1.3;
    color: #333;
}

.asi .content .words {
    font-size: 48px;
    line-height: 1.5;
    color: #333;
}

@media (max-width: 768px) {
    .asi {
        min-height: 900px;
    }

    .asi .certified {
        width: 30%;
        margin-top: -70px; 
    }

    .asi .box {
        padding: 20px;
    }

    .asi .content h1 {
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .asi .content .check img {
        width: 36px;
        margin: 0;
    }

    .asi .content .words {
        font-size: 24px;
        line-height: 1.2;
        padding: 0;
    }

    .asi .content p {
        font-size: 16px;
        line-height: 1.4;
    }
}

@media (max-width: 350px) {
    .asi {
        min-height: 900px;
    }

    .asi .certified {
        width: 40%;
        margin-top: -75px; 
    }

    .asi .box {
        padding: 20px;
    }

    .asi .content h1 {
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .asi .content .check img {
        width: 36px;
        margin: 0;
    }

    .asi .content .words {
        font-size: 24px;
        line-height: 1.2;
        padding: 0;
    }

    .asi .content p {
        font-size: 16px;
        line-height: 1.4;
    }
}
</style>
