<template>
    <section class="standards-and-procedures">
        <main-nav />

        <div class="wrapper">
            <div class="container hero">
                <div class="row rowItems">
                    <div class="col-8">
                        <div>
                            <img class="titleImageLogo" src="~assets/logo.png">
                            <h1 class="pageTitle">Intranet</h1>
                            <p class="titleText">
                                A company page for SOPs and other employee only links.
                            </p>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="image" src="~assets/employee_med.png" alt="affiliate partner materials logo">
                    </div>
                </div>
            </div>
        </div>
        <div class="template-library" v-if="unlocked">
            <div class="row template-library-row">
                <div v-for="template in firstRowLinks" :key="template.name">
                    <div class="template-box">{{ template.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <img :src="template.image" v-if="template.image" class="comingSoon">
                        <div v-if="template.name === '' || template.name === ''">
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
                <div v-for="template in secondRowLinks" :key="template.name">
                    <div class="template-box">{{ template.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <img :src="template.image" v-if="template.image" class="comingSoon">
                        <div v-if="template.name === '' || template.name === ''">
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
                <div v-for="template in thirdRowLinks" :key="template.name">
                    <div class="template-box">{{ template.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <img :src="template.image" v-if="template.image" class="comingSoon">
                        <div v-if="template.name === '' || template.name === ''">
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
                            <a v-if="template.link1" :href="template.link1.url" class="link hyperlink">
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
            <br>
        </div>
        <div class="container" v-else>
            <div class="row">
                <div class="col-12">
                    <div class="password-prompt">
                        <form @submit.prevent="attemptLogin">
                            <div class="info">
                                <h3>These resources are password protected</h3>
                                <p>
                                    These resources are only available for Assessments 24x7 Employees.
                                    Please use the password provided by your team leader.
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

                            <button type="submit" class="button" style="width:100%">Access the Employee Materials</button>
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
import axios from 'axios';


export default {
    components: {
        'main-nav': Nav,
        'footer-fold': Footer
    },
    name: 'StandardsAndProcedures',
    data() {
        return {
            unlocked: false,
            password: '',
            validationError: false,
            firstRowLinks: [
                {
                    name: 'Certification',
                    link1: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Upskill_Certification_Sales_Instructions.pdf',
                        mainText: 'Upskill Certification',
                        subText: 'Sales Instructions'
                    }
                },
                {
                    name: 'Sales & Retention',
                    link1: {
                        url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Report_Pricing_Full_list-editable.docx',
                        mainText: 'Report Pricing Full List',
                        subText: '*NOTE Save as a pdf before sending to clients'
                    }
                },
                {
                    name: 'Support',
                    image: '/images/comingSoonYellow.webp',
                }
            ],
            secondRowLinks: [
                {
                    name: 'Translations/Custom Work',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    name: 'Training',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    name: 'Development',
                    image: '/images/comingSoonYellow.webp',
                }
            ],
            thirdRowLinks: [
                {
                    name: 'Marketing',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    name: 'Coaching',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    name: 'Misc',
                    link1: {
                        url: 'https://www.assessments24x7.com/forms',
                        mainText: 'Company',
                        subText: 'Forms & Calendar'
                    }
                }
            ],
        };
    },
    mounted() {
        this.checkEmployeePassword();
        setTimeout(() => {
            localStorage.removeItem('employeePassword');
            this.unlocked = false;
            this.password = '';
        }, 20 * 60 * 1000); // 20 minutes
    },
    methods: {
        async attemptLogin() {
            const success = await this.$store.dispatch('employeeAuth/login', this.password);
            if (success) {
                this.unlocked = true;
                this.validationError = false;
                localStorage.setItem('employeePassword', this.password);
            } else {
                this.validationError = true;
                this.password = '';
            }
        },
        async checkEmployeePassword() {
            try {
                const response = await axios.post('/api/settings');
                const currentPassword = localStorage.getItem('employeePassword');
                const databasePassword = response.data.settings[0].hashedPassword;
                if (databasePassword === currentPassword) {
                    this.unlocked = true;
                }
            } catch (error) {
                console.error("Error verifying password", error);
                this.unlocked = false;
            }
        }

    },
    computed: {
        isAuthenticated() {
            return this.$store.state.employeeAuth.isAuthenticated;
        }
    },
    head() {
        return {
            title: 'Assessments 24x7 Intranet | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
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
    background-color: lightgray;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px black;
}

.pageTitle {
    letter-spacing: 1px;
    font-size: xxx-large;
    margin-left: 90px;
    color: #191919;
}

.titleImageLogo {
    width: 100%;
    margin-top: 20px;
    margin-left: -30px;
    margin-bottom: -58px;
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