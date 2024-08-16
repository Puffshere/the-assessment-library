<template>
    <section id="corporateStatsBottom">
        <div class="container">
            <div class="row">
                <div class="col-12" style="margin-top: -40px; margin-bottom: -20px;">
                    <div class="col-3 rise-on-scroll">
                        <p><span class="topLine2">10-12 <span style="font-size: 40px;">min.</span></span> <br />
                            <span class="bottomLine">Avg. Completion Time</span>
                        </p>
                    </div>
                    <div class="col-3 rise-on-scroll">
                        <p><span class="topLine2">7+</span> <br />
                            <span class="bottomLine">Free Team <br />
                                Reports</span>
                        </p>
                    </div>
                    <div class="col-3 rise-on-scroll">
                        <p><span class="topLine2">360°</span> <br />
                            <span class="bottomLine">Assessments <br />
                                Availiable</span>
                        </p>
                    </div>
                    <div class="col-3 rise-on-scroll">
                        <p><span class="topLine2">ASI</span> <br />
                            <span class="bottomLine">Validated & <br />
                                Compliant</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.observeElements();
    },
    methods: {
        observeElements() {
            const options = {
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rise');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            const elements = document.querySelectorAll('.rise-on-scroll');
            elements.forEach(el => {
                observer.observe(el);
            });
        }
    }
}
</script>

<style scoped>
.container {
    padding-top: 10px;
}

.topLine2 {
    font-size: 48px;
    font-weight: 700;
    color: #ffbd59;
}

.bottomLine {
    font-size: 21.3333px;
    font-weight: 400;
    line-height: 22px;
}

.col-3 {
    text-align: center;
    color: white;
}

.icon1 {
    width: 85%;
    padding-bottom: 20px;
    margin-top: 5px;
}

.icon2 {
    width: 60%;
    margin-bottom: -17px;
    margin-top: -15px;
}

.icon3 {
    width: 45%;
    margin-bottom: 2px;
}

.icon4 {
    width: 45%;
    margin-bottom: 2px;
}

section {
    margin: 0px 0 0;
    padding: 30px 0;
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Artifacts/content-bg.webp');
    background-size: cover !important;
    background-position: center;
}

.rise-on-scroll {
    transition: transform 1s ease-out;
    transform: translateY(1in);
    opacity: 0;
}

.rise-on-scroll.rise {
    transform: translateY(0);
    opacity: 1;
}
</style>