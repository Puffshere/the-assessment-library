<template>
    <section class="affiliate-partner-logo-files">
        <main-nav />

        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <img class="titleImage" src="~assets/affiliate_partner_logo_files_title_image.png"
                                alt="affiliate partner logo files title image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="template-library">
            <div class="row template-library-row">
                <div v-for="template in topRowTemplates" :key="template.name">
                    <div class="template-box">
                        {{ template.name }}
                        <img :src="template.image" alt="Template image" class="partner-logo">
                        <a v-if="template.link1" :href="template.link1.url" class="link hyperlink" target="_blank"
                            rel="noopener">{{ template.link1.text }}</a>
                        <span style="display: block; margin-bottom: -20px;"></span>
                        <br>
                        <a v-if="template.link2" :href="template.link2.url" class="link hyperlink" target="_blank"
                            rel="noopener">{{
                                template.link2.text }}</a>
                    </div>
                </div>
            </div>
            <div class="row template-library-row">
                <div v-for="template in bottomRowTemplates" :key="template.name">
                    <div class="template-box">
                        {{ template.name }}
                        <img :src="template.image" alt="Template image" class="partner-logo">
                        <a v-if="template.link1" :href="template.link1.url" class="link hyperlink" target="_blank"
                            rel="noopener">{{ template.link1.text }}</a>
                        <span style="display: block; margin-bottom: -20px;"></span>
                        <br>
                        <a v-if="template.link2" :href="template.link2.url" class="link hyperlink" target="_blank"
                            rel="noopener">{{
                                template.link2.text }}</a>
                    </div>
                </div>
            </div>
            <br>
        </div>

        <nuxt-link to="/resources/affiliate-partner-materials">
            <img class="backIcon" src="~assets/back_to_affiliate.webp" alt="back to affiliate image">
        </nuxt-link>
        <br>
        <br>
        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    middleware: 'auth',
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    name: 'AffiliatePartnerLogoFiles',
    data() {
        return {
            topRowTemplates: [
                {
                    image: '/images/australasia-logo.png',
                    link1: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/A24x7-australasia-logo..png', text: 'A24x7 – Australasia Logo (.png version)' },
                    link2: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Assessments+24x7+Australasia+Logo+Vector.ai', text: 'A24x7 – Australasia logo (.ai version)' },
                },
                // {
                //     image: '/images/canada-logo.png',
                //     link1: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/A24x7-canada-logo.png', text: 'A24x7 – Canada Logo (.png version)' },
                //     link2: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Assessments+24x7+Canada+Logo+Vector.ai', text: 'A24x7 – Canada logo (.ai version)' },
                // }
                {
                    image: '/images/netherlands-belgium-logo.png',
                    link1: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/A24x7-netherlands-belgium-logo.png', text: 'A24x7 – Netherlands/Belgium Logo (.png version)' },
                    link2: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Assessments+24x7+Netherlands-Belgium+Logo+Vector.ai', text: 'A24x7 – Netherlands/Belgium logo (.ai version)' },
                }
            ],
            bottomRowTemplates: [
                {
                    image: '/images/europe-logo.png',
                    link1: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/A24x7-europe-logo.png', text: 'A24x7 – Europe Logo (.png version)' },
                    link2: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Assessments+24x7+Europe+Logo+Vector.ai', text: 'A24x7 – Europe logo (.ai version)' },
                },
                {
                    image: '/images/vietnam-logo.png',
                    link1: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/A24x7-vietnam-logo.png', text: 'A24x7 – Vietnam Logo (.png version)' },
                    link2: { url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Assessments+24x7+Logo+Vector+Vietnam.ai', text: 'A24x7 – Vietnam logo (.ai version)' },
                }
            ],
        };
    },


    computed: {
        isAuthenticated() {
            return this.$store.state.auth.isAuthenticated;
        }
    },
    head() {
        return {
            title: 'Affiliate Partner Logo Files | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Partner logo files.'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.col-8 {
    padding: 0 20px;
}

.hero {
    padding: 30px 20px;
    margin-bottom: 0px;
}

.titleImage {
    width: 87%;
    margin-left: -28px;
    margin-top: 6px;
}

.partner-logo {
    width: 85%;
    display: block;
    margin: 0 auto;
    margin-bottom: 40px;
    padding-top: 10px;
}

.template-library {
    text-align: center;
}

.template-library-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.template-box {
    border: 2px solid #5a5959;
    border-radius: 7px;
    padding: 10px 10px;
    margin: 10px 15px;
    font-style: italic;
    font-size: 21px;
    font-weight: 500;
    height: 260px;
    width: 475px;
    box-shadow: 4px 6px 0px rgb(36, 35, 35);
}

.link {
    font-size: 18px;
    padding: 0px 2px;
    margin: 0px auto;
}

.backIcon {
    display: flex;
    margin: 0 auto 40px;
    margin-top: 40px;
    cursor: pointer;
}

@media (max-width: 1200px) {

    .backIcon {
        max-width: 90%;
    }
}

@media (max-width: 1000px) {

    .template-library-row {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 480px) {

    .titleImage {
        width: 115%;
    }

    .template-box {
        width: calc(100% - 20px);
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 16px;
    }
}

@media (max-width: 300px) {

    .titleImage {
        width: 125%;
        margin-top: -10px;
        margin-bottom: -15px;
    }

    .backIcon {
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
</style>