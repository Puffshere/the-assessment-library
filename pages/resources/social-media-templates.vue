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
        </div>
        <br>
        <br>
        <div class="template-library" v-if="unlocked">
            <div class="row template-library-row">
                <div v-for="template in topRowTemplates" :key="template.name">
                    <nuxt-link :to="template.url" class="hyperlink">
                        <div class="btn template-button">{{ template.name }}</div>
                    </nuxt-link>
                </div>
            </div>
            <div class="row template-library-row">
                <div v-for="template in bottomRowTemplates" :key="template.name">
                    <nuxt-link :to="template.url" class="hyperlink">
                        <div class="btn template-button">{{ template.name }}</div>
                    </nuxt-link>
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

        <div class="container" v-else>
            <div class="row">
                <div class="col-12">
                    <div class="password-prompt">
                        <form @submit.prevent="attemptLogin">
                            <div class="info">
                                <h3>This resource is password protected</h3>
                                <p>
                                    These resource templates are only available for Assessments 24x7 account holders.
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

                            <button type="submit" class="button" style="width:100%">Access the Template Library</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <br>
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
    name: 'TemplateLibrary',
    data() {
        return {
            unlocked: false,
            password: '',
            validationError: false,
            topRowTemplates: [
                { name: 'DISC Assessments', url: '/resources/social-media-template/disc-assessments' },
                { name: 'DISC General Knowledge', url: '/resources/social-media-template/disc-general-knowledge' },
                { name: 'Promotional', url: '/resources/social-media-template/promotional' },
            ],
            bottomRowTemplates: [
                { name: 'Holidays', url: '/resources/social-media-template/holidays' },
                { name: 'Educational', url: '/resources/social-media-template/educational' },
                { name: 'Humor', url: '/resources/social-media-template/humor' },
                { name: 'Inspirational Quotes', url: '/resources/social-media-template/inspirational-quotes' },
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
            console.log("this is the success", success);
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
            console.log("this is the password", storedPassword);
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
            title: 'Social Media Templates | Assessments 24x7',
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

    .templateBanner {
        font-size: medium;
    }

    .template-library-row {
        flex-direction: column;
        align-items: center;
    }

    .template-button {
        width: 100%;
        margin: 10px 0;
        min-width: 250px;
    }
}
</style>