<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Let DISC be your foundation <br />
                        <span style="font-weight: 400">But don't stop there...</span>
                    </h1>
                </div>
                <div class="timeline-container">
                    <div class="timeline">
                        <div class="circle"></div>
                        <div class="line"></div>
                        <div class="circle"></div>
                        <div class="line"></div>
                        <div class="circle"></div>
                        <div class="line"></div>
                        <div class="circle"></div>
                        <div class="line"></div>
                        <div class="circle"></div>
                    </div>
                    <div class="timeline-content">
                        <div class="item">DISC Self</div>
                        <div class="item">DISC Leadership</div>
                        <div class="item">DISC Awareness</div>
                        <div class="item">DISC Executive Insights</div>
                        <div class="item"> & Beyond <br> 30+ Assessments <br> 20+ Languages </div>
                    </div>
                </div>
                <div class="col-12 button-container">
                    <button class="white btn" @click="scrollToSection">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import './CDC.scss';


.container {
    padding-top: 10px;
    padding-bottom: 110px;
}

h1 {
    color: white;
    line-height: 70px;
}

.col-3 {
    text-align: center;
    color: white;

    img {
        width: 40%;
    }
}

section {
    background: url('~assets/coaches-disc-certification/blue-geo-background.png');
    background-size: cover;
}

.col-12.button-container {
    display: flex;
    justify-content: center;
    margin-top: 80px;
}

.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 0 auto;
}

.timeline {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}

.circle {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    z-index: 1;
}

.line {
    flex: 1;
    height: 4px;
    background-color: white;
    margin: 0 10px;
}

.timeline-content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}

.item {
    text-align: center;
    color: white;
    font-weight: bold;
    text-decoration: underline;
}

@media (max-width: 768px) {
    .timeline {
        flex-direction: column;
    }

    .line {
        width: 4px;
        height: 50px;
        margin: 10px 0;
    }

    .timeline-content {
        flex-direction: column;
        align-items: center;
    }

    .item {
        margin-top: 10px;
    }
}
</style>
