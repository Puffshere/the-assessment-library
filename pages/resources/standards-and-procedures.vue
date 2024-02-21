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
                            <div class="announce" v-if="unlocked && announcements.length !== 0">
                                <p class="announcementText"> {{ announcements_name }}:  {{ announcements }}</p>
                            </div>
                            <div v-else>
                                <p class="titleText">
                                    A company page for SOPs and other employee only links.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <img class="mainRoundImage" src="~assets/employee_procedures_med.png"
                            alt="affiliate partner materials logo">
                    </div>
                </div>
            </div>
        </div>
        <div class="document-library" v-if="unlocked">
            <div class="row document-library-row">
                <div v-for="document in firstRowLinks" :key="document.id">
                    <div class="document-box centering" :class="{ 'scrollable-vertical': isScrollable(document) }">
                        {{ document.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <img :src="document.image" v-if="document.image" class="comingSoon">
                        <div v-for="link in document.links" :key="link.url">
                            <a :href="link.url" class="link hyperlink placement" target="_blank" rel="noopener">
                                {{ link.mainText }}
                            </a>
                            <br>
                            <div v-if="link.footNote">
                                <span class="footNote">{{ link.footNote }}</span>
                                <br>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row document-library-row">
                <div v-for="document in secondRowLinks" :key="document.id">
                    <div class="document-box centering" :class="{ 'scrollable-vertical': isScrollable(document) }">
                        {{ document.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <img :src="document.image" v-if="document.image" class="comingSoon">
                        <div v-for="link in document.links" :key="link.url">
                            <a :href="link.url" class="link hyperlink placement" target="_blank" rel="noopener">
                                {{ link.mainText }}
                            </a>
                            <br>
                            <div v-if="link.footNote">
                                <span class="footNote">{{ link.footNote }}</span>
                                <br>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row document-library-row">
                <div v-for="document in thirdRowLinks" :key="document.id">
                    <div class="document-box centering" :class="{ 'scrollable-vertical': isScrollable(document) }">
                        {{ document.name }}
                        <br>
                        <div class="titlePadding"></div>
                        <img :src="document.image" v-if="document.image" class="comingSoon">
                        <div v-for="link in document.links" :key="link.url">
                            <div v-if="link.mainText === 'Forms & Calendar'">
                                <a :href="link.url" class="link hyperlink placement">
                                    {{ link.mainText }}
                                </a>
                            </div>
                            <div v-else>
                                <a :href="link.url" class="link hyperlink placement" target="_blank" rel="noopener">
                                    {{ link.mainText }}
                                </a>
                            </div>
                            <br>
                            <div v-if="link.footNote">
                                <span class="footNote">{{ link.footNote }}</span>
                                <br>
                                <br>
                            </div>
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
            announcements: [],
            announcements_name: [],
            firstRowLinks: [
                {
                    id: 1,
                    name: 'Certification',
                    links: [
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Upskill_Training_Sales_Instructions.pdf',
                            mainText: 'Upskill Certification Sales Instructions',
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Sales & Retention",
                    links: [
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Report_Pricing_Full_list-editable.docx",
                            mainText: "Full Report List (Editable)",
                            footNote: "*NOTE Save as a pdf before sending to clients"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Pricing+CP+Q1-2024.pdf",
                            mainText: "CP Pricing Q1-2024"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Pricing+CP+Q1-2024%2BDWL.pdf",
                            mainText: "CP Pricing Q1-2024+DWL"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Additional+Reports+Sheet_CP.pdf",
                            mainText: "CP Additional Reports page"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Pricing+RS+Q1-2024.pdf",
                            mainText: "RS Pricing Q1-2024"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Pricing+RS+Q1-2024%2BDWL.pdf",
                            mainText: "RS Pricing Q1-2024+DWL"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Additional+Reports+Sheet_RS.pdf",
                            mainText: "RS Additional Reports page"
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Support',
                    image: '/images/comingSoonYellow.webp',
                    links: [
                        {
                            url: "",
                            main: ""
                        }
                    ]
                }
            ],
            secondRowLinks: [
                {
                    id: 4,
                    name: 'Translations/Custom Work',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    id: 5,
                    name: 'Training',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    id: 6,
                    name: 'Development',
                    image: '/images/comingSoonYellow.webp',
                }
            ],
            thirdRowLinks: [
                {
                    id: 7,
                    name: 'Marketing',
                    links: [
                        {
                            url: 'https://docs.google.com/spreadsheets/d/1fqxFWCx70mT4cPVZTfEfwibgwJPsj9-qXGY_cEEi15g/edit#gid=17462517',
                            mainText: 'Social Media Calendar',
                        },
                    ]
                },
                {
                    id: 8,
                    name: 'Coaching',
                    image: '/images/comingSoonYellow.webp',
                },
                {
                    id: 9,
                    name: 'Misc',
                    links: [
                        {
                            url: 'https://www.assessments24x7.com/forms',
                            mainText: 'Forms & Calendar',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/IRSform.pdf',
                            mainText: 'IRS W9 Form',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/liablility-insurance.pdf',
                            mainText: 'A24x7 Liability Insurance',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/cyber-liability-insurance.pdf',
                            mainText: 'A24x7 Cyber Liability Insurance',
                        }
                    ]
                }
            ],
        };
    },
    mounted() {
        this.checkEmployeePassword();
        this.fetchAnnouncements();
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
                const databasePassword = response.data.settings[0].hashedPassword;
                const currentPassword = localStorage.getItem('employeePassword');
                if (databasePassword === currentPassword) {
                    this.unlocked = true;
                }
            } catch (error) {
                console.error("Error verifying password", error);
                this.unlocked = false;
            }
        },
        async fetchAnnouncements() {
            try {
                const response = await axios.get('/api/announcements');
                this.announcements = response.data.announcement;
                this.announcements_name = response.data.user_name;
            } catch (error) {
                console.error('There was an error fetching the announcements:', error);
            }
        },
        isScrollable(document) {
            const isLinksArray = Array.isArray(document.links);
            const linkCount = isLinksArray ? document.links.length : 0;
            return linkCount > 4;
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
                    content: 'A company page for SOPs and other employee only links.'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
$pixel: 15px;

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

.announce {
    position: relative;

    .announcementText {
        margin-left: 20px;
        background: linear-gradient(to top, lightgray, rgb(238, 238, 238));
        padding: 20px 30px;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgb(83, 83, 83);
        color: rgb(43, 43, 43);
    }
}

.titleText {
    margin-left: 20px;
    background: linear-gradient(to top, lightgray, rgb(238, 238, 238));
    padding: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgb(83, 83, 83);
    color: rgb(43, 43, 43);
}

.mainRoundImage {
    margin-top: 30px;
}

.pageTitle {
    letter-spacing: 1px;
    font-size: xxx-large;
    margin-left: 90px;
    color: #191919;
}

.titleText {
    padding-left: 60px;
}

.titleImageLogo {
    width: 100%;
    margin-top: 20px;
    margin-left: -30px;
    margin-bottom: -58px;
}

.centering {
    text-align: center !important;
}

.scrollable-vertical {
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
}

/* Style the scrollbar itself (background) */
.scrollable-vertical::-webkit-scrollbar {
    width: 10px;
    /* width of the entire scrollbar */
}

/* Style the scrollbar handle */
.scrollable-vertical::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    /* color of the scroll thumb */
    border-radius: 10px;
    /* roundness of the scroll thumb */
    border: 2px solid white;
    /* creates padding around scroll thumb */
}

/* Style the scrollbar track */
.scrollable-vertical::-webkit-scrollbar-track {
    background: white;
    /* color of the track */
}

/* Optional: style the scrollbar button (up and down arrows) */
.scrollable-vertical::-webkit-scrollbar-button {
    background-color: #666;
}

.document-library-row {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.titlePadding {
    min-height: 20px;
}

.document-box {
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
    max-width: 100%;
    box-sizing: border-box;

    .placement {
        margin-top: 0px !important;
    }

    .link {
        font-style: normal !important;
        font-size: 14px !important;
        position: absolute;
        left: 15px;
        margin-top: 20px;
    }
}

.footNote {
    position: relative;
    font-size: 12px !important;
    top: 55px;
    margin-top: -60px !important;
    left: -30px;
    display: block;
    width: 305px;
    color: rgb(56, 56, 56);
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
    margin-top: -10px;
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

@media (max-width: 1100px) {

    .document-library-row {
        flex-direction: column;
        align-items: center;
    }

    .titleText {
        padding-left: 30px;
        margin-left: -20px;
    }
}


@media (max-width: 350px) {

    .document-library-row {
        flex-direction: column;
    }

    .document-box {
        margin: 20px auto;
    }

    .titleImageLogo {
        width: 120%;
        margin-top: 0px;
        margin-left: -30px;
        margin-bottom: 0px;
    }

    .pageTitle {
        letter-spacing: 1px;
        font-size: x-large;
        margin-top: -6px;
        margin-left: 30px;
        color: #191919;
    }

    .mainRoundImage {
        margin-top: 0px;
        width: 70%;
        margin-bottom: -30px;
    }

    .password-prompt {
        width: 100%;
        max-width: 700px;
        padding: 20px;
        margin: -40px auto;
        display: block;
        margin-top: -10px;
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
    }
}
</style>