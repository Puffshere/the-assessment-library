<template>
    <section class="testimonials-fold">
        <div class="container">
            <div class="row" style="margin-bottom: 18px;">
                <h1>Don't just take our word, take theirs.</h1>
                <h3>How We Help Organizations Succeed</h3>
                <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/quotations.png"
                    alt="image of quotation marks"
                    style="position: absolute; z-index: 5; width: 140px; top: 100px; left: 40px;">
            </div>
            <div class="col-12" style="display: flex; flex-direction: column; align-items: center; position: relative;">
                <div class="arrow-container left-arrow" @click="prevImage"
                    :class="{ 'disabled': activeImageIndex === 0 }" style="padding-left: 5px;">
                    <div class="arrow" style="transform: rotate(-45deg);"></div>
                </div>
                <div class="rise-on-scroll" style="display: flex; justify-content: center; min-height: 180px;">
                    <div v-if="activeImageIndex === 0" class="testimonial-card">
                        <img :src="images[0]" alt="client photo" class="testimonial-image" />
                        <div>
                            <h5 style="font-weight: 600; margin-bottom: -10px; margin-top: 0px;">Will Mahon, DraftKings
                            </h5>
                            <h5 class="testimonial-text">
                                <span v-if="showFullText || testimonialTexts[0].length <= 150">{{ testimonialTexts[0]
                                    }}</span>
                                <span v-else>{{ testimonialTexts[0].substring(0, 150) }}...</span>
                            </h5>
                            <button v-if="testimonialTexts[0].length > 150" @click="toggleText" class="read-more-btn">
                                {{ showFullText ? 'Show Less' : 'Read More' }}
                            </button>
                        </div>
                    </div>
                    <div v-if="activeImageIndex === 1" class="testimonial-card">
                        <img :src="images[1]" alt="client photo" class="testimonial-image" />
                        <div>
                            <h5 style="font-weight: 600; margin-bottom: -10px; margin-top: 0px;">Kristin M. Stevens,
                                Fortune 100 Insurance Company</h5>
                            <h5 class="testimonial-text">
                                <span v-if="showFullText || testimonialTexts[1].length <= 150">{{ testimonialTexts[1]
                                    }}</span>
                                <span v-else>{{ testimonialTexts[1].substring(0, 150) }}...</span>
                            </h5>
                            <button v-if="testimonialTexts[1].length > 150" @click="toggleText" class="read-more-btn">
                                {{ showFullText ? 'Show Less' : 'Read More' }}
                            </button>
                        </div>
                    </div>
                    <div v-if="activeImageIndex === 2" class="testimonial-card">
                        <img :src="images[2]" alt="client photo" class="testimonial-image" />
                        <div>
                            <h5 style="font-weight: 600; margin-bottom: -10px; margin-top: 0px;">Mamawa Daboh, Respace
                            </h5>
                            <h5 class="testimonial-text">
                                <span v-if="showFullText || testimonialTexts[2].length <= 150">{{ testimonialTexts[2]
                                    }}</span>
                                <span v-else>{{ testimonialTexts[2].substring(0, 150) }}...</span>
                            </h5>
                            <button v-if="testimonialTexts[2].length > 150" @click="toggleText" class="read-more-btn">
                                {{ showFullText ? 'Show Less' : 'Read More' }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="arrow-container right-arrow" @click="nextImage"
                    :class="{ 'disabled': activeImageIndex === images.length - 1 }" style="padding-right: 5px;">
                    <div class="arrow" style="transform: rotate(135deg);"></div>
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
            images: [
                'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/will-mahon-headshot.png',
                'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/kristin-m.-stevens-headshot.png',
                'https://cdn.assessments24x7.com/file/assessments24x7-media/corporate/mamawa-daboh-headshot.png'
            ],
            testimonialTexts: [
                "I am happy to say that we use Assessments 24x7 as our global DISC solution. We started to work with Assessments 24x7 because we were interested in the breadth of instruments that they offer. There are instruments for a large variety of cases and lots of different team dynamics. Since then, we have been really happy with the ease of using their platform. We have also been happy with the customer service that we have been provided. Every question that we have ever asked the team has been responded to really quickly and professionally. That gives Assessments 24x7 our highest recommendation.",
                "Our Fortune 100 Insurance Company uses Assessments 24x7 Leadership Assessments for our premier Leadership Development program which all new leaders are invited to attend. The reports are in-depth and thorough and provide an exceptional foundation of self-awareness for our participants. Assessments 24x7 has been a tremendous partner to work with on this project and has bent over backward to help us customize the reports to our specifications and create an efficient administration process. The level of responsiveness, dedication, and service has been above and beyond, and we highly recommend Assessments 24x7 to others who may be searching for an assessment provider.",
                "We are happy to recommend Assessments 24x7 for your assessment needs. Purchasing the assessments was probably one of the best decisions we've made so far. They have been a great tool to help guide our hiring efforts, and the results are spot-on."
            ]
        };
    },
    mounted() {
        this.observeElements();
    },
    methods: {
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
.testimonials-fold {
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
        background-color: #3258c0;
    }

    &:active {
        background-color: #5a76c4;
    }
}

.left-arrow {
    left: 50px;
}

.right-arrow {
    right: 50px;
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