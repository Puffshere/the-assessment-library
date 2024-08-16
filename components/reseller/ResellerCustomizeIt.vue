<template>
    <section class="reseller-customize-it" id="resellerCustomizeIt">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title rise-on-scroll" style="margin-bottom: 0px; margin-top: -10px;">
                        Customize it, Market it, <span style="color: #00a8ff;">and Sell it.</span>
                    </h1>
                    <div style="position: relative;">
                        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/reseller/Male+Graphic.png"
                            alt="man smilling" class="manSmiling">
                        <hr style="display: none;">
                    </div>
                    <p style="max-width: 720px; float: right;" class="rise-on-scroll">
                        Our globally recognized DISC Assessment Technology offers turnkey and customizable reports for
                        individual and team development. Empower your clients with solutions for Self-awareness,
                        Leadership, Sales, and more. With 25+ languages and a suite of supporting assessments, our
                        platform provides tailored solutions for every business need. Partnering with us gives you
                        access to limitless white-labeled solutions. Seamlessly integrate our tools through API,
                        generate detailed reports, and manage everything from one dashboard. Customize, market, and sell
                        the assessments however you want.
                    </p>
                    <p class="rise-on-scroll"
                        style="color: #ffbd59; margin-top: 10px; float: right; font-weight: 700; line-height: 26px;">
                        Trusted by thousands of coaches and consultants worldwide, we help <br />
                        elevate performance and drive success.
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
            const element = document.getElementById('resellerContactForm');
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
.reseller-customize-it {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/reseller/Copy+of+Blue+Light+Background.png");
    width: 100%;
}

.container {
    padding-top: 80px;
    padding-bottom: 75px;
}

.title {
    margin-top: 0px;
    margin-bottom: 80px;
    line-height: 60px;
}

.col-12 {
    text-align: right;
    color: white;

    .manSmiling {
        width: 480px;
        position: absolute;
        top: -29px;
        left: -60px;
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
    background-color: white;
    border-radius: 40px;
    color: #2729ff;
    border: 1px solid white;
    float: right;

    &:hover {
        color: white;
        background-color: #2729ff;
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
        .manSmiling {
            width: 100%;
            position: static;
            top: 0px;
            left: 0px;
        }
    }

    hr {
        display: block !important;
        margin-top: 0px;
        margin-bottom: 20px;
    }
}
</style>