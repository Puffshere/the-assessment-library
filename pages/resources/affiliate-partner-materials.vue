<template>
    <section class="affiliate-partner-materials">
        <main-nav />

        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <img class="titleImage" src="~assets/affiliate_partner_materials.png"
                                alt="affiliate partner materials title image">
                            <p class="titleText">
                                Welcome to our Affiliate Partner Materials hub – your go-to resource for standardized and
                                impactful brand representation. Utilize these tools, including email templates, social media
                                posts, and logos, to ensure a cohesive global presence and maximize the effectiveness of our
                                partnership. Please feel free to leverage these resources as needed to amplify our brand
                                consistently across all channels.
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="image" src="~assets/affiliate_partner_materials_logo.png"
                            alt="affiliate partner materials logo">
                    </div>
                </div>
            </div>
        </div>
        <div class="template-library" v-if="unlocked">
            <div class="row template-library-row">
                <div v-for="template in topRowTemplates" :key="template.name">
                    <div class="template-box">{{ template.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <div v-if="template.name === 'Affiliate Partner Logos' || template.name === 'Social Media'">
                            <nuxt-link v-if="template.link1" :to="template.link1.url" class="link hyperlink">
                                {{ template.link1.mainText }}
                                <br>
                                {{ template.link1.subText }}
                            </nuxt-link>
                            <span style="display: block; margin-bottom: -20px;"></span>
                            <br>
                            <nuxt-link v-if="template.link2" :to="template.link2.url" class="link hyperlink">
                                {{ template.link2.mainText }}
                                <br>
                                {{ template.link2.subText }}
                            </nuxt-link>
                        </div>
                        <div v-else>
                            <a v-if="template.link1" :href="template.link1.url" class="link hyperlink" target="_blank"
                                rel="noopener">
                                {{ template.link1.mainText }}
                                <br>
                                {{ template.link1.subText }}
                            </a>
                            <span style="display: block; margin-bottom: -20px;"></span>
                            <br>
                            <a v-if="template.link2" :href="template.link2.url" class="link hyperlink" target="_blank"
                                rel="noopener">
                                {{ template.link2.mainText }}
                                <br>
                                {{ template.link2.subText }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row template-library-row">
                <div v-for="template in bottomRowTemplates" :key="template.name">
                    <div class="template-box">{{ template.name }}
                        <img v-if="template.image" :src="template.image" alt="coming soon image" class="comingSoon">
                        <br>
                        <div class="titlePadding"></div>
                        <a v-if="template.link1" :href="template.link1.url" class="link hyperlink" target="_blank"
                            rel="noopener">
                            {{ template.link1.mainText }}
                            <br>
                            {{ template.link1.subText }}
                        </a>
                        <span style="display: block; margin-bottom: -20px;"></span>
                        <br>
                        <a v-if="template.link2" :href="template.link2.url" class="link hyperlink" target="_blank"
                            rel="noopener">
                            {{ template.link2.mainText }}
                            <br>
                            {{ template.link2.subText }}
                        </a>
                    </div>
                </div>
            </div>
            <br>
        </div>
        <div class="container" v-else>
            <div class="row">
                <div class="col-12">
                    <div class="password-prompt">
                        <form @submit.prevent="attemptLogin">
                            <div class="info">
                                <h3>This resource is password protected</h3>
                                <p>
                                    These resources are only available for Assessments 24x7 account holders.
                                    Please use the password provided to you in your Resource Center.
                                </p>
                            </div>

                            <div v-if="validationError" class="error">
                                <p>
                                    The password you have entered is invalid. Please try again.
                                </p>
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password">
                            </div>

                            <p style="margin-top:-10px;font-size:10pt;margin-bottom:30px">
                                Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact our
                                    support team &rarr;</a>
                            </p>

                            <button type="submit" class="button" style="width:100%">Access the Affiliate Partner
                                Materials</button>
                        </form>
                    </div>
                </div>
            </div>
            <br>
            <br>
        </div>
        <br>
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
    name: 'AffiliatePartnerMaterials',
    data() {
        return {
            unlocked: false,
            password: '',
            validationError: false,
            topRowTemplates: [
                {
                    name: 'Affiliate Partner Logos',
                    link1: {
                        url: '/resources/affiliate-partner-logo-files',
                        mainText: 'Affiliate Partner',
                        subText: 'Logo Files'
                    },
                },
                {
                    name: 'Rate Sheets',
                    link1: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Pricing+%26+Instruction+Sheets/A24x7+Pricing+Guide+CP+Q223.pdf',
                        mainText: 'Corp Rate Sheet',
                        subText: '(PDF Download)'
                    },
                    link2: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Pricing+%26+Instruction+Sheets/A24x7+Pricing+Guide+RS+Q223.pdf',
                        mainText: 'RS Rate Sheet',
                        subText: '(PDF Download)'
                    },
                },
                {
                    name: 'Social Media',
                    link1: {
                        url: '/resources/social-media-templates',
                        mainText: 'Social Media',
                        subText: 'Templates'
                    },
                }
            ],
            bottomRowTemplates: [
                {
                    name: 'Website Banners',
                    image: '/images/comingSoonYellow.webp'
                },
                {
                    name: 'Email Templates',
                    link1: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Support+email+-+affiliate+partners.pdf',
                        mainText: 'Support Template',
                        subText: '(PDF Download)'
                    },
                    link2: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Sales+email+series.pdf',
                        mainText: 'Sales Template',
                        subText: '(PDF Download)'
                    },
                },
                {
                    name: 'Email Series',
                    link1: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Email+retention+series+-+for+all+customers.pdf',
                        mainText: 'Customer Retention',
                        subText: '(PDF Download)'
                    },
                    link2: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/Partners+%26+Affiliates/Retention+emails+for+DISC+Certification+customers.pdf',
                        mainText: 'DISC Certification',
                        subText: '(PDF Download)'
                    },
                }
            ],
        };
    },
    mounted() {
        this.checkStoredPassword();
        setTimeout(() => {
            localStorage.removeItem('storedPassword');
            this.unlocked = false;
            this.password = '';
        }, 20 * 60 * 1000); // 20 minutes
    },
    methods: {
        async attemptLogin() {
            const success = await this.$store.dispatch('auth/login', this.password);
            if (success) {
                this.unlocked = true;
                this.validationError = false;
                localStorage.setItem('storedPassword', this.password);
            } else {
                this.validationError = true;
                this.password = '';
            }
        },
        checkStoredPassword() {
            const storedPassword = localStorage.getItem('storedPassword');
            if (storedPassword === 'a24x7partnersocial1207') {
                this.unlocked = true;
            }
            else {
                this.unlocked = false;
            }
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.auth.isAuthenticated;
        }
    },
    head() {
        return {
            title: 'Affiliate Partner Materials | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Enhance your social media presence using our branded templates on Canva. Customize these professionally crafted designs to incorporate your preferred language, logos, and more within your Canva Pro Account. Leverage the provided information exclusively for branding guidance, maintaining authenticity by avoiding verbatim copying. Establish credibility and captivate your audience with visually stunning content that resonates. Elevate your brand effortlessly!'
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

.template-library {
    text-align: center;
}

.template-library-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.titlePadding {
    min-height: 20px;
}

.template-box {
    border: 2px solid #5a5959;
    border-radius: 7px;
    padding: 10px 20px;
    margin: 30px 25px;
    font-style: italic;
    font-size: 21px;
    font-weight: 500;
    height: 240px;
    width: 300px;
    box-shadow: 4px 6px 0px rgb(36, 35, 35);
    color: #0749c4;
    position: relative;

    .link {
        font-style: normal !important;
        font-size: 18px !important;
        color: black !important;
    }
}

.comingSoon {
    position: absolute;
    top: -30px;
    right: -30px;
    width: auto;
    height: auto;

}

.password-prompt {
    width: 100%;
    max-width: 700px;
    padding: 20px;
    margin: -40px auto;
    display: block;
    margin-bottom: -30px;

    .info {
        background: rgba(255, 189, 7, .2);
        padding: 20px;
        border-radius: 10px;
        border: 1px solid rgba(255, 189, 7, .3);
        margin-bottom: 18px;

        h3 {
            margin: 0 0 5px;
        }

        p {
            margin: 0;
            font-size: 11pt;
        }
    }

    .error {
        background: rgba(255, 0, 0, .2);
        padding: 20px;
        border-radius: 10px;
        border: 1px solid rgba(255, 0, 0, .3);
        margin-bottom: 18px;

        p {
            margin: 0;
            font-size: 11pt;
        }
    }
}

@media (max-width: 1000px) {

    .template-library-row {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 480px) {

    .image {
        width: 50%;
    }

    .template-box {
        min-width: calc(100% - 20px);
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
}

@media (max-width: 300px) {

    .titleImage {
        width: 125%;
    }

    .titleText {
        font-size: 14px;
        margin-left: 5px;
    }

    .image {
        width: 50%;
    }

    .template-box {
        width: calc(100% - 20px);
        margin: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>