<template>
    <div class="main">
        <main-nav active="home"></main-nav>
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+5+-+Bottom+right.png"
            alt="fold 4 graphic" style="position: absolute; right: 0px; padding-top: 145px; width: 45%;">
        <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
            alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 900px;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-6">
                        <br />
                        <h1>
                            Powering Millions of <br />
                            Assessments Worldwide
                        </h1>
                        <h2>
                            Online assessments that work for <br />
                            <div class="rotating-text-container">
                                <span class="rotating-text" style="color: #E0AD2B; font-weight: 700;">{{ currentText
                                    }}</span>
                            </div>
                        </h2>
                        <br />
                        <p>
                            Take your online assessments to the next level with the world’s most trusted assessment
                            technology! You’ll get infinite customizations and an intuitive platform with scientifically
                            validated assessments, exceptional customer support and flexible pricing plans — perfect for
                            coaches and consultants, corporations and organizations of all sizes.
                        </p>
                        <br />
                        <button @click="scrollToContactForm">
                            Book Live Demo
                        </button>
                    </div>
                    <div class="col-6">
                        <img src="~/assets/home-page/hero-fold-image.png" alt="image of man raising fist"
                            style="width: 100%;">
                    </div>
                </div>
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
            texts: ["you", "your business", "your teams", "your clients"],
            currentText: "",
            currentTextIndex: 0,
            typing: false
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

h2 {
    color: #213C85;
    font-family: Poppins;
    font-size: 18pt;
    font-weight: 400;
    overflow: hidden;
    position: relative;
    height: 3.5em;
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
    font-size: 10.5pt;
    font-weight: 400;
    margin-top: -30px;
    margin-bottom: 20px;
}

button {
    width: 184px;
    height: 41px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-decoration: underline;
    cursor: pointer;
    font-weight: 700;
    color: white;
    text-align: center;
    font-family: Poppins;
    font-size: 10.5pt;
    border: none;
    background: #0033C5;
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
</style>