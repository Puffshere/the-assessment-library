<template>
    <section class="corporate-tools" id="corporateTools">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title rise-on-scroll" style="margin-bottom: 0px;">
                        Comprehensive DISC Tools <br />
                        for <span style="color: #00a8ff;">Organizational Success</span>
                    </h1>
                    <div style="position: relative;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/fold-3-coworkers-revised.png"
                            alt="coworkers smiling" class="workersSmiling">
                            <hr style="display: none;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/increase-icon.png"
                            alt="increase icon" class="pop-up-on-scroll increaseIcon">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/ladder-icon.png"
                            alt="ladder-icon" class="pop-up-on-scroll ladderIcon">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/light-bulb-icon.png"
                            alt="light-bulb-icon" class="pop-up-on-scroll lightBulbIcon">
                    </div>
                    <p style="max-width: 560px; float: right;" class="rise-on-scroll">
                        Our globally recognized DISC Assessment Technology offers turnkey and customizable reports for
                        individual and team development. Choose from options like Self-awareness, Leadership, Sales, &
                        more. With 25+ languages & a suite of supporting assessments, our platform provides tailored
                        solutions for every business need. Seamlessly integrate our tools, generate detailed reports, &
                        manage everything from one powerful dashboard.
                    </p>
                </div>
                <button class="button rise-on-scroll" style="margin-top: 20px;" @click="scrollToContactForm">
                    Explore More
                </button>
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
        scrollToContactForm(event) {
            const element = document.getElementById('corporateContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        observeElements() {
            const options = {
                threshold: 0.1
            };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('rise');
                        entry.target.classList.add('pop-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            const riseElements = document.querySelectorAll('.rise-on-scroll');
            const popUpElements = document.querySelectorAll('.pop-up-on-scroll');
            riseElements.forEach(el => {
                observer.observe(el);
            });
            popUpElements.forEach(el => {
                observer.observe(el);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.corporate-tools {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-light-background.png");
    width: 100%;
}

.container {
    padding-top: 80px;
    padding-bottom: 80px;
}

.title {
    margin-top: 0px;
    margin-bottom: 80px;
    line-height: 60px;
}

.col-12 {
    text-align: right;
    color: white;

    .workersSmiling {
        width: 77%;
        position: absolute;
        top: -39px;
        left: -275px;
    }
}

.increaseIcon {
    width: 50px;
    position: absolute;
    left: -40px;
}

.ladderIcon {
    width: 50px;
    position: absolute;
    left: 100px;
    top: -100px;
}

.lightBulbIcon {
    width: 50px;
    position: absolute;
    left: 230px;
    top: -80px;
}

h1 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 700;
}

p {
    font-size: 18.6666px;
    line-height: 30px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: #00a8ff;
    border-radius: 40px;
    color: white;
    border: 1px solid #00a8ff;
    float: right;

    &:hover {
        color: #00a8ff;
        background-color: white;
    }

    &:active {
        background-color: rgb(131, 130, 130);
    }
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

.pop-up-on-scroll {
    transition: transform 0.8s ease-out, opacity 0.8s ease-out;
    transform: scale(0);
    opacity: 0;
}

.pop-up-on-scroll.pop-up {
    transform: scale(1);
    opacity: 1;
}

@media (max-width: 1050px) {
    .increaseIcon {
        position: static;
    }

    .ladderIcon {
        position: static;
    }

    .lightBulbIcon {
        position: static;
    }

    .col-12 {
        .workersSmiling {
            width: 100%;
            position: static;
            top: 0px;
            left: 0px;
        }
    }

    hr {
        display: block !important;
        margin-top: -3px;
        margin-bottom: 20px;
    }
}
</style>