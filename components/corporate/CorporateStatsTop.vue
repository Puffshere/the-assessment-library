<template>
    <section id="corporateStatsTop">
        <div class="container">
            <div class="row">
                <div class="col-12" style="margin-top: -40px; margin-bottom: -20px;">
                    <div class="col-3">
                        <p><span class="topLine" data-target="20">0</span><span
                                style="font-weight: 700; font-size: 48px; color: #ffbd59;">+</span> <br />
                            <span class="bottomLine">Years in <br />
                                Business</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <p><span class="topLine" data-target="25">0</span><span
                                style="font-weight: 700; font-size: 48px; color: #ffbd59;">+</span> <br />
                            <span class="bottomLine">Assessment <br />
                                Languages</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <p><span class="topLine" data-target="50">0</span><span
                                style="font-weight: 700; font-size: 48px; color: #ffbd59;">+</span> <br />
                            <span class="bottomLine">Supporting <br />
                                Assessments</span>
                        </p>
                    </div>
                    <div class="col-3">
                        <p><span class="topLine" data-target="34">0</span><span
                                style="font-weight: 700; font-size: 48px; color: #ffbd59;">M+</span> <br />
                            <span class="bottomLine">Assessments <br />
                                Completed</span>
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
        this.animateNumbers();
    },
    methods: {
        animateNumbers() {
            const counters = document.querySelectorAll('.topLine');
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const increment = target / 90; // Adjust 60 to change speed

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 90); // Adjust delay for smoothness
                    } else {
                        if (counter.parentElement.innerText.includes('M+')) {
                            counter.innerText = target;
                        } else {
                            counter.innerText = target;
                        }
                    }
                };

                updateCount();
            });
        }
    }
}
</script>

<style scoped>
.container {
    padding-top: 10px;
}

.topLine {
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
    background: url('~assets/artifacts/content-bg.webp');
    background-size: cover !important;
    background-position: center;
}
</style>