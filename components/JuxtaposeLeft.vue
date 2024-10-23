<template>
    <section class="juxtapose left">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img v-if="image == 'disc'" class="image"
                        src="https://cdn.assessments24x7.com/file/assessments24x7-media/Assessments/DISC+Icon+for+Assessments.webp"
                        :alt="alt">
                    <img v-if="image == 'eiq'" class="image" src="~/assets/eiq.png" :alt="alt">
                    <img v-if="image == 'learning-styles'" class="image" src="~/assets/learning-styles.png" :alt="alt">
                </div>

                <div class="col-8">
                    <h3>{{ title }}</h3>
                    <span v-for="badge in badges" :key="badge.class" :class="'badge ' + badge.class">{{ badge.label
                        }}</span>
                    <p v-html="body"></p>

                    <div class="languages" v-if="lang">
                        <span v-if="lang.indexOf('english') !== -1"><img
                                src="~assets/flags/united-states-of-america.svg" alt="DISC Assessments"> English</span>
                        <span v-if="lang.indexOf('uk-english') !== -1"><img src="~assets/flags/united-kingdom.svg"
                                alt="UK DISC Assessments"> UK English</span>
                        <span v-if="lang.indexOf('spanish') !== -1"><img src="~assets/flags/mexico.svg"
                                alt="Spanish DISC Assessments"> Español</span>
                        <span v-if="lang.indexOf('arabic') !== -1"><img src="~assets/flags/algeria.svg"
                                alt="Arabic DISC Assessments"> العربية</span>
                        <span v-if="lang.indexOf('chinese') !== -1"><img src="~assets/flags/china.svg"
                                alt="Chinese DISC Assessments"> 中文</span>
                        <span v-if="lang.indexOf('italian') !== -1"><img src="~assets/flags/italy.svg"
                                alt="Italian DISC Assessments"> Italiano</span>
                        <span v-if="lang.indexOf('polish') !== -1"><img src="~assets/flags/republic-of-poland.svg"
                                alt="Polish DISC Assessments"> Polskie</span>
                        <span v-if="lang.indexOf('dutch') !== -1"><img src="~assets/flags/netherlands.svg"
                                alt="Dutch DISC Assessments"> Nederlands</span>
                        <span v-if="lang.indexOf('french') !== -1"><img src="~assets/flags/france.svg"
                                alt="French DISC Assessments"> Français</span>
                        <span v-if="lang.indexOf('german') !== -1"><img src="~assets/flags/germany.svg"
                                alt="German DISC Assessments"> Deutsch</span>
                        <span v-if="lang.indexOf('indonesian') !== -1"><img src="~assets/flags/indonesia.svg"
                                alt="Indonesian DISC Assessments"> Indonesian</span>
                        <span v-if="lang.indexOf('japanese') !== -1"><img src="~assets/flags/japan.svg"
                                alt="Japanese DISC Assessments"> 日本語</span>
                        <span v-if="lang.indexOf('cambodian') !== -1"><img src="~assets/flags/cambodia.svg"
                                alt="Cambodian DISC Assessments"> ភាសាខ្មែរ</span>
                        <span v-if="lang.indexOf('korean') !== -1"><img src="~assets/flags/south-korea.svg"
                                alt="Korean DISC Assessments"> 한국어</span>
                        <span v-if="lang.indexOf('norwegian') !== -1"><img src="~assets/flags/norway.svg"
                                alt="Norwegian DISC Assessments"> Norsk</span>
                        <span v-if="lang.indexOf('malaysian') !== -1"><img src="~assets/flags/malaysia.svg"
                                alt="Malaysian DISC Assessments"> Bahasa Melayu</span>
                        <span v-if="lang.indexOf('portugese') !== -1"><img src="~assets/flags/portugal.svg"
                                alt="Portugese DISC Assessments"> Português</span>
                        <span v-if="lang.indexOf('portugese-brazil') !== -1"><img src="~assets/flags/brazil.svg"
                                alt="Brazilian Portugese DISC Assessments"> Português (Brazil)</span>
                        <span v-if="lang.indexOf('russian') !== -1"><img src="~assets/flags/russia.svg"
                                alt="Russian DISC Assessments"> Россия</span>
                        <span v-if="lang.indexOf('swedish') !== -1"><img src="~assets/flags/sweden.svg"
                                alt="Swedish DISC Assessments"> Svenska</span>
                        <span v-if="lang.indexOf('turkish') !== -1"><img src="~assets/flags/turkey.svg"
                                alt="Turkish DISC Assessments"> Türkçe</span>
                        <span v-if="lang.indexOf('vietnamese') !== -1"><img src="~assets/flags/vietnam.svg"
                                alt="Vietnamese DISC Assessments"> Tiếng Việt</span>
                    </div>

                    <nuxt-link class="button" :to="href">{{ linkText }} &rarr;</nuxt-link>
                    <nuxt-link class="goldButton" to="/contact">Contact Us</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'body', 'href', 'linkText', 'image', 'alt', 'badges', 'lang']
}
</script>


<style lang="scss" scoped>
@import '~assets/scss/juxtapose';

.goldButton {
    width: 184px !important;
    padding: 12px;
    border-radius: 8px;
    text-decoration: underline;
    cursor: pointer;
    font-family: Poppins;
    font-size: 10.5pt;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: #0033C5;
    text-align: center;
    font-weight: 700;
    background-color: white;
    border: 1px solid #E0AD2B;

    &:hover {
        border: 1px solid #b68c23;
    }
}

@media (max-width: 1200px) {
    .button {
        margin-bottom: 20px !important;
    }

    .goldButton {
        padding-left: 20px !important;
        padding-right: 20px !important;
    }
}
</style>
