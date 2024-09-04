<template>
    <section class="reseller-testimonials-fold">
        <div class="container">
            <div class="row title" style="margin-bottom: 18px;">
                <h1>Don't just take our word for it, take theirs.</h1>
                <h3 class="subTitle">We're here to fuel your business success.</h3>
                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/quotations.png"
                    alt="image of quotation marks"
                    style="position: absolute; z-index: 5; width: 140px; top: 100px; left: 40px;"
                    class="quotationMarks">
            </div>
            <div class="col-12" style="display: flex; flex-direction: column; align-items: center; position: relative;">
                <transition :name="transitionName" :mode="transitionMode">
                    <div :key="activeImageIndex" class="testimonial-card">
                        <img :src="images[activeImageIndex]" alt="client photo" class="testimonial-image" />
                        <div>
                            <h5 style="font-weight: 600; margin-bottom: -10px; margin-top: 0px;">{{
                                testimonialNames[activeImageIndex] }}</h5>
                            <h5 class="testimonial-text">
                                <span v-if="showFullText || testimonialTexts[activeImageIndex].length <= 150">{{
                                    testimonialTexts[activeImageIndex] }}</span>
                                <span v-else>{{ testimonialTexts[activeImageIndex].substring(0, 150) }}...</span>
                            </h5>
                            <button v-if="testimonialTexts[activeImageIndex].length > 150" @click="toggleText"
                                class="read-more-btn">
                                {{ showFullText ? 'Show Less' : 'Read More' }}
                                <span>
                                    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/DISC+Insights/right-arrow.png"
                                        style="width: 20px; float: right; margin-top: 0px; margin-left: 10px;"
                                        alt="right arrow icon">
                                </span>
                            </button>
                        </div>
                    </div>
                </transition>
                <div class="arrow-container-wrapper">
                    <div class="arrow-container left-arrow" @click="prevImage"
                        :class="{ 'disabled': activeImageIndex === 0 }">
                        <div class="arrow" style="transform: rotate(-45deg); margin-left: 5px;"></div>
                    </div>
                    <div class="arrow-container right-arrow" @click="nextImage"
                        :class="{ 'disabled': activeImageIndex === images.length - 1 }">
                        <div class="arrow" style="transform: rotate(135deg); margin-right: 5px;"></div>
                    </div>
                </div>
            </div>
            <div class="row button-container">
                <button class="button" @click="scrollToContactForm">Get Started</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeImageIndex: 0,
            showFullText: false,
            transitionName: 'testimonial-fade',
            transitionMode: 'out-in',
            images: [
                'https://cdn.assessments24x7.com/file/assessments24x7-media/reseller/Brad+Yoho.png',
                'https://cdn.assessments24x7.com/file/assessments24x7-media/reseller/Liz+Hanson.png',
                'https://cdn.assessments24x7.com/file/assessments24x7-media/reseller/Roeland+C.+Schaart.png'
            ],
            testimonialNames: [
                "Brad Yoho, Dave Yoho Associates",
                "Liz Hanson, Athlete Assessments",
                "Roeland C. Schaart, Vitae-Coaching"
            ],
            testimonialTexts: [
                "We have utilized the DISC Profile in our business for over 40 years. We have had several providers during this time and have for the most part been satisfied, but in 2015 a situation arose where we had to find a new provider immediately. Tony Alessandra and his team sold us on their custom solution and consequently it was one of the best business decisions we have ever made. Our current customers were thrilled at the ease of use of the new system, and as a result, it has been incredibly easy to onboard new customers……..",
                "Confidence — that is what I love about working with Assessments 24x7 — the confidence I have in their team, their back office, their excellence in support and service, and their \"can do\" approach to our requests! Our business relies on them and I always know that we are in very capable hands. Thank you Assessments 24x7!",
                "As an international peak performance impact coach and International Coach Federation Master Certified Coach, I help leaders and entrepreneurs have more impact in what they do. Before starting a coaching project, I always have clients complete an assessment in one of the evidence-based coaching solutions to better understand their behavior and their internal motivators…."
            ]
        };
    },
    mounted() {
        this.preloadImages();
    },
    methods: {
        preloadImages() {
            this.images.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        },
        toggleText() {
            this.showFullText = !this.showFullText;
        },
        prevImage() {
            if (this.activeImageIndex > 0) {
                this.activeImageIndex--;
                this.showFullText = false;
            }
        },
        nextImage() {
            if (this.activeImageIndex < this.images.length - 1) {
                this.activeImageIndex++;
                this.showFullText = false;
            }
        },
        scrollToContactForm(event) {
            const element = document.getElementById('resellerContactForm');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    },
    watch: {
        '$vuetify.breakpoint.smAndDown'(isSmallScreen) {
            this.transitionName = isSmallScreen ? '' : 'testimonial-fade';
            this.transitionMode = isSmallScreen ? '' : 'out-in';
        }
    }
}
</script>

<style lang="scss" scoped>
.reseller-testimonials-fold {
    background-image: url("https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/white-textured-background.png");
    margin-top: -20px;
}

.container {
    padding-top: 5px;
    padding-bottom: 70px;
}

h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: #0033c5;
    margin-top: 25px;
    margin-bottom: -44px;
}

h3 {
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    color: #0033c5;
}

.button-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
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
    width: 220px;
    margin-top: -20px;


    &:hover {
        color: #00a8ff;
        background-color: white;
    }

    &:active {
        background-color: rgb(124, 123, 123);
    }
}

.arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: #0033c5;
    border-radius: 50%;
    cursor: pointer;
}

.arrow-container-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.arrow-container:hover {
    background-color: #3258c0;
}

.arrow-container:active {
    background-color: #5a76c4;
}

.left-arrow {
    margin-right: 10px;
    position: absolute;
    left: 50px;
    top: 90px;
}

.right-arrow {
    margin-left: 10px;
    position: absolute;
    right: 50px;
    top: 90px;
}

.arrow-container.disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.arrow {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-top: 2px solid white;
    border-left: 2px solid white;
}

.testimonial-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #0033c5;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
    min-height: 220px;
}

.testimonial-image {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    margin-right: 40px;
    margin-left: 20px;
}

.testimonial-text {
    font-size: 14.6667px;
    line-height: 20px;
    font-weight: 400;
    color: white;
    text-align: left;
}

.read-more-btn {
    margin-top: 10px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18.6667px;
    font-weight: 700;
    padding: 0;
}

.read-more-btn:hover {
    color: #9d9e9e;
}

.read-more-btn:active {
    color: #666666;
}

.testimonial-fade-enter-active,
.testimonial-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.testimonial-fade-enter,
.testimonial-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

@media (max-width: 1000px) {
    .title {
        margin-top: 50px;

        .subTitle {
            margin-top: 60px;
        }
    }

    .quotationMarks {
        display: none;
    }

    .testimonial-card {
        justify-content: center;
        text-align: center;
        flex-direction: column;
        margin-left: 4%;
    }

    .testimonial-image {
        margin: 0 auto 20px;
    }

    .arrow-container-wrapper {
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
        margin-left: 4%;
    }

    .arrow-container {
        position: static;
    }

    .left-arrow {
        position: static;
    }

    .right-arrow {
        position: static;
    }

    .button {
        margin-top: 10px;
    }
}
</style>