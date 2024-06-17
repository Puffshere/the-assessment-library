<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 words">
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
                    <div class="timeline-content" style="cursor: pointer;">
                        <a class="item" target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/DISCSelfSampleReport.pdf">DISC Self</a>
                        <a class="item" target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Leadership.pdf">DISC <br /> Leadership</a>
                        <a class="item" target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Awareness_(EI).pdf">DISC <br /> Awareness</a>
                        <a class="item" target="_blank" rel="noopener" href="https://cdn.assessments24x7.com/file/assessments24x7-media/reports/Report_Sample_DISC_Executive_Insights.pdf">DISC <br /> Executive <br /> Insights</a>
                        <a class="item" href="https://www.assessments24x7.com/sample-reports"> & Beyond <br /> 30+ Assessments <br /> 20+ Languages </a>
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
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-rise');
                } else {
                    entry.target.classList.remove('animate-rise');
                }
            });
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: 0.1 // Adjust this as needed
        });

        // Select each child element to be observed
        const elements = document.querySelectorAll('.row > .words, .row > .timeline-container, .row > .button-container');
        elements.forEach(element => {
            observer.observe(element);
        });
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
    margin-top: 120px;
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
    font-size: 28px;
    line-height: 34px;
}

.item {
    text-align: left;
    color: rgb(209, 209, 209);
    font-weight: 400;
    text-decoration: underline;
    transition: transform 0.3s ease, color 0.3s ease;
}

.item:hover {
    transform: scale(1.1);
    color: #ffffff;
    /* Optional: change color slightly to enhance the effect */
}


@keyframes rise {
    from {
        transform: translateX(-4in);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.row .words,
.row .timeline-container,
.row .button-container {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.animate-on-scroll {
    opacity: 0;
    transform: translateX(2in);
    transition: all 0.5s ease-out;
}

.animate-rise {
    animation: rise 1s ease-out forwards;
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

    @keyframes rise {
        from {
            transform: translateX(-1in);
            opacity: 0;
        }

        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .row .words,
    .row .timeline-container,
    .row .button-container {
        opacity: 0;
        transform: translateY(1in);
        transition: all 0.5s ease-out;
    }

    .animate-on-scroll {
        opacity: 0;
        transform: translateX(2in);
        transition: all 0.5s ease-out;
    }

    .animate-rise {
        animation: rise .5s ease-out forwards;
    }
}
</style>
