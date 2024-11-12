<template>
    <div class="main">
        <main-nav active="home"></main-nav>
        <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
            style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
        <div class="container-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex">
                        <div class="col-6">
                            <br />
                            <h1>
                                Powering Millions of <br />
                                Assessments Worldwide
                            </h1>
                            <h3>
                                Online assessments that work for <br />
                                <div class="rotating-text-container">
                                    <span class="rotating-text" style="color: #E0AD2B; font-weight: 700;">{{ currentText
                                        }}</span>
                                </div>
                            </h3>
                            <br />
                            <p>
                                Take your online assessments to the next level with the world’s most trusted assessment
                                technology! You’ll get infinite customizations and an intuitive platform with
                                scientifically
                                validated assessments, exceptional customer support, and flexible pricing plans —
                                perfect
                                for
                                coaches and consultants, corporations and organizations of all sizes.
                            </p>
                            <br />
                            <button class="blue" @click="scrollToContactForm">
                                Book Live Demo
                            </button>
                        </div>
                        <div class="col-6">
                            <img src="~/assets/home-page/hero-fold-image.webp" alt="image of man raising fist"
                                class="hero-image">
                        </div>
                    </div>
                </div>
                <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
            </div>
        </div>

        <LazyHydrate when-visible>
            <worlds-leading></worlds-leading>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <powerful-fold></powerful-fold>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <budget-fold></budget-fold>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <asi-fold></asi-fold>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <reviews></reviews>
        </LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <LazyHydrate when-visible>
            <blog></blog>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <catalysts></catalysts>
        </LazyHydrate>
        <LazyHydrate when-visible><contact-form-fold></contact-form-fold></LazyHydrate>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'worlds-leading': () => import('@/components/homePage/WorldsLeadingFold'),
        'powerful-fold': () => import('@/components/homePage/PowerfulFold'),
        'budget-fold': () => import('@/components/homePage/BudgetFold'),
        'asi-fold': () => import('@/components/homePage/ASIFold'),
        'reviews': () => import('@/components/homePage/Reviews'),
        'client-logos': () => import('@/components/ClientLogos'),
        'blog': () => import('@/components/homePage/Blog'),
        'catalysts': () => import('@/components/homePage/Catalysts'),
        'contact-form-fold': () => import('@/components/homePage/ContactFormFold'),
        'footer-fold': () => import('@/components/Footer')
    },
    data() {
        return {
            texts: ["you.", "your business.", "your teams.", "your clients."],
            currentText: "",
            currentTextIndex: 0,
            typing: false,
        };
    },
    mounted() {
        this.startTypingEffect();
    },
    methods: {
        startTypingEffect() {
            const typeSpeed = 100;
            const deleteSpeed = 50;
            const delayBetweenPhrases = 1000;

            const typeText = () => {
                const fullText = this.texts[this.currentTextIndex];
                let charIndex = 0;
                this.typing = true;

                const typeChar = () => {
                    if (charIndex < fullText.length) {
                        this.currentText += fullText.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeChar, typeSpeed);
                    } else {
                        setTimeout(deleteText, delayBetweenPhrases);
                    }
                };

                typeChar();
            };

            const deleteText = () => {
                let charIndex = this.currentText.length;

                const deleteChar = () => {
                    if (charIndex > 0) {
                        this.currentText = this.currentText.substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(deleteChar, deleteSpeed);
                    } else {
                        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                        setTimeout(typeText, delayBetweenPhrases);
                    }
                };

                deleteChar();
            };
            typeText();
        },
        scrollToContactForm(event) {
            const element = document.getElementById('contactFormSection');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.container-wrapper {
    position: relative;
}

.accents-right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45%;
    z-index: -1;
}

.container {
    padding-top: 50px;
    padding-bottom: 70px;
}

h1 {
    color: #213C85;
    font-family: Poppins;
    font-size: 27pt;
    font-weight: 700;
}

h3 {
    color: #213C85;
    font-family: Poppins;
    font-weight: 400;
    overflow: hidden;
    position: relative;
}

.rotating-text-container {
    position: relative;
    margin-top: 0em;
    height: 1.5em;
    overflow: hidden;
    display: inline-block;
}

.rotating-text {
    display: inline;
    white-space: nowrap;
}

p {
    color: #213C85;
    font-family: $nunito-family;
    font-size: 1em;
    font-weight: 400;
    margin-top: -30px;
    margin-bottom: 20px;
}

.rotating-text-container::after {
    content: '|';
    animation: blink 0.7s infinite;
    color: #E0AD2B;
    font-weight: 700;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.hero-image {
    width: 100%;
}

@media (max-width: 1200px) {
    img {
        margin-top: 20px !important;
        width: 70% !important;
    }

    .container {
        padding-top: 0px;
        padding-bottom: 30px;
    }

    h1 {
        margin-top: 0px;
    }

    .accents,
    .accents-right {
        display: none;
    }

    .hero-image {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
        object-fit: contain;
        align-self: center;
    }
}
</style>