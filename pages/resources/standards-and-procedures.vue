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
                            <div class="wrapper" v-if="unlocked && tonysNotes.length === 0">
                                <br>
                            </div>
                            <div v-if="unlocked && announcements.length !== 0">
                                <div class="announcementText announcementBody">
                                    <template v-if="announcements_name">
                                        Announcement From {{ announcements_name }}
                                        <hr>
                                        {{ announcements }}
                                    </template>
                                    <template v-else>
                                        Announcements
                                        <hr>
                                        {{ announcements }}
                                    </template>
                                </div>
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
        <div class="wrapper" v-if="unlocked && tonysNotes.length !== 0">
            <div class="container">
                <div class="row">
                    <div class="col-11">
                        <div class="tonyNotes announcementBody">
                            Notes From Tony
                            <hr>
                            <ul>
                                <li v-for="(note, index) in tonysNotes" :key="index" v-html="note.announcement_text">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br>
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
                                <span class="footNotes" style="text-align: left;">{{ link.footNote }}</span>
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
                                <span class="footNote2 footNotes">{{ link.footNote }}</span>
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
                                <span class="footNote3 footNotes">{{ link.footNote }}</span>
                                <br>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row document-library-row">
                <div v-for="document in fourthRowLinks" :key="document.id">
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
                                <span class="footNotes" style="text-align: left;">{{ link.footNote }}</span>
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
                                Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact
                                    our
                                    support team &rarr;</a>
                            </p>

                            <button type="submit" class="button" style="width:100%">Access the Employee
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
            tonysNotes: [],
            firstRowLinks: [
                {
                    id: 1,
                    name: 'Mission, Vision, Core Values',
                    links: [
                        {
                            url: 'https://youtu.be/n-XvxjzRMSc',
                            mainText: 'Mission, Vision, & Core Values video',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/A247-VMCV.pptx',
                            mainText: 'Mission, Vision, Core Values PowerPoint',
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
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/247-Account+Plans+2024.pdf",
                            mainText: "Account Plans 2024"
                        },
                        {
                            url: "https://www.youtube.com/watch?v=DYHhhMePdRw",
                            mainText: "DISC Awareness Sales - Merrick"
                        }
                    ]
                },
                {
                    id: 3,
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
                            url: 'https://docs.google.com/spreadsheets/d/1Vhgz4OqXdN3KIKMsWKp5z4Md0_Da2uzos1O6WUXYGSY/edit#gid=713753388',
                            mainText: 'Employee Roster',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/PTO++Holiday+Policy_Final.pdf',
                            mainText: 'PTO Holiday Policy',
                        },
                        {
                            url: 'https://youtu.be/jRbJySDg5g0',
                            mainText: '401k Information Video',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/A24x7CyberandLiabilityInsCertificate+1-24+to+1-25.pdf',
                            mainText: 'A24x7 Liability & Cyber Insurance',
                            footNote: '*exp. 01/05/25'
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Slack+Guidelines_Final.pdf',
                            mainText: 'Slack guidelines'
                        }
                    ]
                }
            ],
            secondRowLinks: [
                {
                    id: 4,
                    name: 'Conference & Travel Info',
                    links: [
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Travel+and+Expense+Reimbursements+SOP.pdf',
                            mainText: 'Travel & Expense Reimbursement ',
                            footNote: "*Instructions"
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/SOP_TRAVEL+ADVANCE+REQUEST.docx',
                            mainText: 'Travel Advance Request',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Dress+Code+for+Events_SOP.pdf',
                            mainText: 'Dress Code for Events',
                        },
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Expense+Reimbursement+Form.xlsx',
                            mainText: 'Expense Reimbursement Form',
                        }
                    ]
                },
                {
                    id: 5,
                    name: 'Certification',
                    links: [
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Upskill_Training_Sales_Instructions.pdf',
                            mainText: 'Upskill Certification Sales Instructions',
                        },
                        {
                            url: 'https://docs.google.com/document/d/12fuqZv5N27fD8FVXpBz2fvK1Lwrlz22sxYWtEreIPx0/edit#heading=h.r58x6jaucvn',
                            mainText: 'Certification Automation Sequences',
                        }
                    ]
                },
                {
                    id: 6,
                    name: 'Support',
                    links: [
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Do+Not+Contact+-+SOP+Support+Department.pdf",
                            mainText: "Do Not Contact (SOP)"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Locating+an+Account+Sales+Rep+-+SOP+-+Support.pdf",
                            mainText: "Locating an Account Sales Rep"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Credit+Transfers+of+Unequal+Value+SOP+-+Support.pdf",
                            mainText: "Credit Transfers of Unequal Value"
                        }
                    ]
                }
            ],
            thirdRowLinks: [
                {
                    id: 7,
                    name: 'Translations/Custom Work',
                    links: [
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Activating+a+Custom+Domain.pdf",
                            mainText: "New Custom Domain SOP"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Translation+Project+SOP.docx",
                            mainText: "Translation Project SOP"
                        },
                        {
                            url: "https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Deactivating+a+Custom+Domain+SOP.pdf",
                            mainText: "Deactivating a Custom Domain SOP"
                        },
                    ]
                },
                {
                    id: 8,
                    name: 'Marketing',
                    links: [
                        {
                            url: 'https://docs.google.com/spreadsheets/d/1fqxFWCx70mT4cPVZTfEfwibgwJPsj9-qXGY_cEEi15g/edit#gid=17462517',
                            mainText: 'Social Media Calendar'
                        },
                    ]
                },
                {
                    id: 9,
                    name: 'Affiliate Info',
                    links: [
                        {
                            url: 'https://cdn.assessments24x7.com/file/assessments24x7-media/employee-docs/Global+Affiliate+Lead+Distribution_Contact+Sheet.pdf',
                            mainText: 'Global Affiliate Lead Distribution',
                            footNote: "*Contact Sheet"
                        }
                    ]
                }

            ],
            fourthRowLinks: [
                {
                    id: 10,
                    name: 'Landing Page Links',
                    links: [
                        {
                            url: 'https://www.assessments24x7.com/customizations',
                            mainText: 'Customizations',
                        },
                        {
                            url: 'https://www.assessments24x7.com/disc',
                            mainText: 'DISC',
                        },
                        {
                            url: 'https://www.assessments24x7.com/disc-blocks',
                            mainText: 'DISC Blocks',
                        },
                        {
                            url: 'https://www.assessments24x7.com/resources/affiliate-partner-materials',
                            mainText: 'Partners and Affiliates',
                        },
                        {
                            url: '',
                            mainText: 'DISC Awareness Assessment',
                            footNote: "*Coming Soon"
                        },
                        {
                            url: '',
                            mainText: 'DISC Leadership Assessment',
                            footNote: "*Coming Soon"
                        }
                    ]
                },
                {
                    id: 11,
                    name: 'Meeting Recordings',
                    links: [
                        {
                            url: 'https://www.youtube.com/watch?v=lfKgsDDW_Ng',
                            mainText: 'A24x7 Team Meeting - 6/6/24 ',
                            footNote: "*New Meeting Structure"
                        }
                    ]
                },
                {
                    id: 12,
                    name: 'Development/Training',
                    image: '/images/comingSoonYellow.webp',
                }
            ],
        };
    },
    mounted() {
        this.checkEmployeePassword();
        this.fetchAnnouncements();
        this.fetchTonyAnnouncements();
        setTimeout(() => {
            localStorage.removeItem('employeePassword');
            this.unlocked = false;
            this.password = '';
        }, 20 * 60 * 1000); // 20 minutes
    },
    methods: {
        // This is the old method that stored the password in the store, going to come up with a token system instead of using local storage

        // async attemptLogin() {
        //     const success = await this.$store.dispatch('employeeAuth/login', this.password);
        //     if (success) {
        //         this.unlocked = true;
        //         this.validationError = false;
        //         localStorage.setItem('employeePassword', this.password);
        //     } else {
        //         this.validationError = true;
        //         this.password = '';
        //     }
        // },
        async attemptLogin() {
            try {
                const response = await axios.post('/api/verify-password', { password: this.password });

                if (response.data.success) {
                    this.unlocked = true;
                    this.validationError = false;
                    // Handle successful authentication, e.g., redirecting the user or storing the session token (if provided by the server)
                } else {
                    this.validationError = true;
                    this.password = '';
                }
            } catch (error) {
                console.error("Login error:", error);
                this.validationError = true;
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
        async fetchTonyAnnouncements() {
            try {
                const response = await axios.get('/api/announcementsTony');
                console.log("This is Tony's response", response);
                this.tonysNotes = response.data.announcements;
                console.log("This is the notes from Tony", this.tonysNotes);
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

.announcementBody {
    background: linear-gradient(to top, lightgray, rgb(238, 238, 238));
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(83, 83, 83);
    color: rgb(43, 43, 43);
}

.announcementText {
    margin-left: 20px;
    margin-top: -30px;
}

.tonyNotes {
    margin-left: 60px;
    margin-top: -20px;
    overflow: hidden;
}

.tonyNotes li {
    word-wrap: break-word;
}

.tonyNotes a {
    word-wrap: break-word;
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

    .placement2 {
        margin-top: 25px !important;
    }

    .link {
        font-style: normal !important;
        font-size: 14px !important;
        position: absolute;
        left: 15px;
        margin-top: 20px;
    }
}

.footNotes {
    position: relative;
    font-size: 12px !important;
    top: 55px;
    margin-top: -60px !important;
    display: block;
    width: 305px;
    color: rgb(56, 56, 56);
}

.footNote2 {
    left: -110px;
}

.footNote3 {
    left: -105px;
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