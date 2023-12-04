<template>
    <section class="social-media-templates">
        <main-nav />

        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <img class="titleImage" src="~assets/iconTitle.png" alt="template icons">
                            <p class="titleText">
                                Utilize these branded Social Media templates in Canva to customize within your Canva Pro
                                Accounts for sharing on social media. Please be aware that the additional information is
                                provided exclusively for branding and language guidance; refrain from copying it verbatim.
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="image" src="~assets/template-icons.png" alt="template icons">
                    </div>
                </div>
            </div>
        </div>

        <div class="template-library">
            <div class="templateBanner">
                <h1>TEMPLATE LIBRARY</h1>
            </div>
            <br>
            <br>
            <div class="row template-library-row">
                <div v-for="template in topRowTemplates" :key="template.name" class="btn template-button">
                    <nuxt-link :to="template.url" class="hyperlink">{{ template.name }}</nuxt-link>
                </div>
            </div>
            <div class="row template-library-row">
                <div v-for="template in bottomRowTemplates" :key="template.name" class="btn template-button">
                    <nuxt-link :to="template.url" class="hyperlink">{{ template.name }}</nuxt-link>
                </div>
            </div>
            <br>
            <h2>
                Important:
            </h2>
            <p>
                These template links are not to be shared with anyone outside of the
            </p>
            <p class="important-note">
                Organization, including clients—they are intended for internal use only.
            </p>
            <br>
            <br>
            <br>
            <br>
        </div>

        <footer-fold />
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    name: 'TemplateLibrary',
    data() {
        return {
            topRowTemplates: [
                { name: 'DISC Assessments', url: '/resources/social-media-template/disc-assessments' },
                { name: 'DISC General Knowledge', url: '/resources/social-media-template/disc-general-knowledge' },
                { name: 'Promotional', url: '/resources/social-media-template/promotional' },
            ],
            bottomRowTemplates: [
                { name: 'Holidays', url: '/resources/social-media-template/holidays' },
                { name: 'Educational', url: '/resources/social-media-template/educational' },
                { name: 'Humor', url: '/resources/social-media-template/humor' },
                { name: 'Inspirational', url: '/resources/social-media-template/inspirational' },
            ],
        };
    },
    head() {
        return {
            title: 'Social Media Templates | Assessments 24x7',
            meta: [
                {
                    hid: 'robots',
                    name: 'robots',
                    content: 'noindex'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.col-4 {
    display: flex;
    justify-content: center;
}

.col-4 img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.col-8 {
    padding: 0 20px;
}

.hero {
    padding: 30px 20px;
    min-height: 300px;
}

.titleText {
    margin-left: 20px;
}

.titleImage {
    width: 100%;
    margin-left: -30px;
}

.image {
    padding: 20px 0;
}

.templateBanner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #1666ff;
    height: 60pt;
    color: white;
    font-size: 20pt;
}

.template-library {
    text-align: center;
}

.template-library-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.btn {
    min-width: 200px;
}

.template-button {
    border: 2px solid #5a5959;
    border-radius: 7px;
    padding: 10px 20px;
    margin: 3px 15px;
    background-color: #f4f4f4;
    cursor: pointer;
    box-shadow: 4px 4px 0px rgb(36, 35, 35);
}

.template-button:hover {
    background-color: #e0e0e0;
}

.important-note {
    color: rgb(27, 27, 27);
    max-width: 90%;
    margin: -15px auto;
}

@media (max-width: 1000px) {
    .template-library-row {
        flex-direction: column;
        align-items: center;
    }

    .template-button {
        width: 80%;
        margin: 10px 0;
    }
}
</style>