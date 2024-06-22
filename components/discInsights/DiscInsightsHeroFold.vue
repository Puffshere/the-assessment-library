<template>
    <section>
        <div class="body" style="padding: 0 270px;">
            <div class="row">
                <div class="col-12">
                    <div class="col-6" style="padding-left: 50px;">
                        <h2
                            style="line-height: 59px; font-size: 48px; font-weight: 700; color: #1e222d; text-align: center; text-shadow: #00000053 0px 1.8px 7.64998px;">
                            Hire Smart <br />
                            with <span style="color: #00a8ff;">DISC Insights</span>
                        </h2>
                        <p
                            style="font-weight: 400; color: #1e222d; font-size: 21px; line-height: 29px; text-align: justify; padding: 0 40px; padding-bottom: 60px;">
                            Empower your team with actionable insights from our DISC Workplace Insights and Executive
                            Insights Reports.
                        </p>
                    </div>
                    <div class="col-6" style="position: relative;">
                        <img src="~/assets/disc-insights/hero-main-graphic.png" alt="hero main graphic image"
                            style="position: absolute; z-index: 5; right: 20px;" />
                    </div>
                    <div class="col-12" style="position: relative;">
                        <img src="~/assets/disc-insights/hero-black-graphic.png" alt="hero black graphic image"
                            style="width: 100%; z-index: 1; max-height: 205px;" />
                        <div style="margin-top: -125px;">
                            <button @click="scrollToWorkplaceInsights" class="button light-blue"
                                style="margin-left: 50px;">
                                DISC <span style="text-decoration: underline;">Workplace</span> Insights
                                <span>
                                    <img src="~/assets/disc-insights/right-arrow.png"
                                        style="width: 35px; float: right; margin-top: -3px; margin-right: -16px;"
                                        alt="right arrow icon">
                                </span>
                            </button>
                            <button @click="scrollToExecutiveInsights" class="button light-blue">
                                DISC <span style="text-decoration: underline;">Executive</span> Insights
                                <span>
                                    <img src="~/assets/disc-insights/right-arrow.png"
                                        style="width: 35px; float: right; margin-top: -3px; margin-right: -16px;"
                                        alt="right arrow icon">
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        scrollToSection(event) {
            const element = document.getElementById('icfSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToWorkplaceInsights(event) {
            const element = document.getElementById('workplaceInsights');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToExecutiveInsights(event) {
            const element = document.getElementById('executiveInsights');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        scrollToSectionButton(event) {
            const element = document.getElementById('cdcContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        },
        // handleIntersection(entries) {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('animate-rise');
        //         } else {
        //             entry.target.classList.remove('animate-rise');
        //         }
        //     });
        // }
    },
    // mounted() {
    //     const observer = new IntersectionObserver(this.handleIntersection, {
    //         threshold: 0 // Adjust this as needed
    //     });

    //     // Select each child element to be observed
    //     const elements = document.querySelectorAll('.col-7 h2, .col-7 h4, .col-7 button');
    //     elements.forEach(element => {
    //         observer.observe(element);
    //     });
    // }
}
</script>

<style scoped>
@import './DiscInsights.scss';

.body {
    padding: 50px 0;
    margin-top: 40px;
    margin-bottom: 120px;
}

h4 {
    line-height: 38px;
}

.col-7 .arrow {
    width: 5%;
    margin-top: -40px;
}

.col-6 img {
    width: 85%;
    margin-top: 10px;
    opacity: 1 !important;
    transform: none !important;
}

.button {
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    cursor: pointer;
    /* background-color: #00a8ff; */
    min-width: 300px;
    border-radius: 40px;
}

/* @keyframes rise {
    from {
        transform: translateY(1in);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.col-7 h2,
.col-7 h4,
.col-7 button {
    opacity: 0;
    transform: translateY(1in);
    transition: all 0.5s ease-out;
}

.animate-rise {
    animation: rise 1.25s ease-out forwards;
} */
</style>
