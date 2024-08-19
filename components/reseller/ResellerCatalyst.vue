<template>
    <section class="reseller-catalyst" id="resellerCatalyst">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img src="~/assets/reseller/fold-3-icon.png"
                        alt="fold 3 icon image" class="icon">
                    <h1 class="title rise-on-scroll" style="margin-bottom: 0px; text-align: center;">
                        <span style="color: #00a8ff;">The Catalyst</span> for Leading <br />
                        Assessment Providers
                    </h1>
                    <p style="text-align: center; padding: 0px 60px;" class="rise-on-scroll">
                        Discover the assessment technology trusted by top industry players. We are the engine powering
                        many mainstream assessment companies, offering private labeling services that coaches, business
                        owners, and recruiters can customize and brand as their own. Integrate our technology seamlessly
                        into your systems, choose turnkey solutions to quickly add your logos and branding, or go full
                        scale with custom reports, domains, payment systems, and more. By partnering with us, you're
                        tapping into the source that fuels success for countless professionals and organizations.
                        Elevate your business and provide unmatched assessment solutions directly from the experts.
                    </p>
                </div>
                <button class="button rise-on-scroll" @click="scrollToContactForm">
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
.reseller-catalyst {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/blue-light-background.png");
    width: 100%;
}

.container {
    padding-top: 80px;
    padding-bottom: 70px;
}

.title {
    margin-top: 0px;
    margin-bottom: 80px;
    line-height: 60px;
}

.icon {
    width: 130px;
    margin-top: -30px;
    margin-bottom: 20px;
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

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.col-12 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

    .workersSmiling {
        display: none;
    }
}
</style>