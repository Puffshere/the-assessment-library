<template>
    <section class="discover-assessments-fold">
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <h1 class="rise-on-scroll" style="color: white;">
                        Build High-Performing Teams, <br />
                        Empower Leadership, & <br />
                        Drive Success
                    </h1>
                    <p class="rise-on-scroll" style="margin-bottom: 40px;">
                        DISC isn't just for recruitment—it's a daily game changer. <br />
                        Use DISC to enhance meeting dynamics, tackle workplace <br />
                        challenges, and refine leadership, sales, and customer service <br />
                        strategies. Foster a culture of understanding, efficiency, and <br />
                        growth by embedding DISC into your business strategy.
                    </p>
                    <div class="row buttonRow" style="margin-bottom: 160px;">
                        <button class="button" @click="scrollToContactForm">
                            <span>Discover Assessments</span>
                        </button>
                    </div>
                </div>
                <div class="col-3">
                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/team-standing-image.png"
                        alt="team of employees smiling image" class="groupSmiling rise-on-scroll" />
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

<style lang="scss" scoped>
.discover-assessments-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/reseller/Copy+of+Blue+Light+Background.png");
}

.container {
    position: relative;
    z-index: 2;
    height: 605px;
}

.groupSmiling {
    width: 550px;
    position: relative;
    bottom: -140px;
    right: 310px;
}

.button {
    font-weight: 600;
    font-size: 18.6667px;
    line-height: 26px;
    cursor: pointer;
    background-color: white;
    border-radius: 40px;
    color: #0033c5;
    border: 1px solid white;

    &:hover {
        color: white;
        background-color: #0033c5;
    }

    &:active {
        background-color: #001757;
    }
}

h1 {
    font-size: 48px;
    line-height: 57px;
    font-weight: 700;
}

p {
    font-size: 14.6667px;
    line-height: 20px;
    font-weight: 400;
    color: white;
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

@media (max-width: 1050px) {
    .container {
        height: 100%;
    }

    .groupSmiling {
        width: 100%;
        position: static;
        margin-bottom: -8px;
    }

    .buttonRow {
        margin-bottom: 0px !important;
    }
}
</style>