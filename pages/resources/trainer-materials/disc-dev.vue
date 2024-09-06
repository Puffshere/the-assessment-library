<template>
    <section class="skeleton">
        <main-nav />

        <section class="body">
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <h1 style="text-align: left; color: #0033c5; margin-top: 40px; margin-bottom: 0px;">DISC</h1>
                        <h3 style="text-align: left; color: #0033c5; margin-top: 0px; margin-bottom: 5px;">Trainer
                            Materials</h3>
                        <p style="text-align: left; margin-top: 0px; margin-bottom: 40px;">
                            The Training Materials library is your comprehensive resource for coaching and debriefing
                            tools,
                            additional insight & information on the assessment,
                            reports and models, and gives quick access to class/workshop materials you may need. Explore
                            these at your leisure - you will find there are many
                            useful and valuable resources to support your continued development, understanding and
                            application!
                        </p>
                    </div>
                    <div class="col-5">
                        <img src="~/assets/coaches-directory/trainer-materials-header-image.png"
                            alt="coaches directory hero image" class="heroImage">
                    </div>
                </div>
            </div>
        </section>

        <div class="body" v-if="unlocked">
            <div class="container">
                <br />
                <!-- Add search and filter dropdown inputs here -->
                <div class="input-container">
                    <div class="search-bar">
                        <input type="text" placeholder="Search" class="input-search" />
                        <i class="search-icon">&#x1F50D;</i>
                    </div>
                    <div class="filter-dropdown">
                        <select class="filter-select">
                            <option>Filter by file type</option>
                            <option>PDF</option>
                            <option>DOC</option>
                            <option>PPT</option>
                            <option>MP3</option>
                            <option>MP4</option>
                            <option>ZIP</option>
                            <option>URL</option>
                        </select>
                        <i class="dropdown-icon">&#x25BC;</i>
                    </div>
                </div>

                <div class="row" @click="handleClick">
                    <div class="col-6">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+The+Fundamentals_+DISC.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="fundamentals">The Fundamentals: DISC</h4>
                                <p>Foundations of DISC & advanced development resources.</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['fundamentals']" class="subcard">
                            <p class="subcard-title">Understanding foundations of DISC</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC Assessment History</a></li>
                                <li><a href="#">DISC Direct/Indirect</a></li>
                                <li><a href="#">DISC Open/Guarded</a></li>
                                <li><a href="#">Description - All 4 Styles</a></li>
                                <li><a href="#">Description - High D</a></li>
                                <li><a href="#">Description - High I</a></li>
                                <li><a href="#">Description - High S</a></li>
                                <li><a href="#">Description - High C</a></li>
                                <li><a href="#">Adaptability - All 4 Styles</a></li>
                                <li><a href="#">Adaptability - High D</a></li>
                                <li><a href="#">Adaptability - High I</a></li>
                                <li><a href="#">Adaptability - High S</a></li>
                                <li><a href="#">Adaptability - High C</a></li>
                            </ul>
                            <p class="subcard-title">Understanding foundations of DISC</p>
                            <ul class="subcard-links">
                                <li><a href="#">Over-Under Extensions and DISC Emotions</a></li>
                                <li><a href="#">Extensions</a></li>
                                <li><a href="#">15 Classical DISC Style Behavioral Patterns</a></li>
                                <li><a href="#">15 Classic DISC Styles Summary Overview</a></li>
                                <li><a href="#">15 Classical DISC Styles: Wheel Plotting</a></li>
                                <li><a href="#">15 Classical DISC Styles: Wheel Plotting</a></li>
                                <li><a href="#">Tensions between the Same DISC styles</a></li>
                            </ul>
                        </div>
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Training+%26+Workshops.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="t&w">Training & Workshops</h4>
                                <p>Training presentations, Facilitator guides, DISC group exercises, & delivery
                                    resources.</p>
                            </div>
                        </div>
                        <div v-if="toggleStates['t&w']" class="subcard">
                            <p class="subcard-title">Training Presentations & Facilitator Guides</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC 2-hour Facilitator Guide</a></li>
                                <li><a href="#">DISC 2-hour Training Presentation</a></li>
                                <li><a href="#">DISC 4-hour Facilitator Guide</a></li>
                                <li><a href="#">DISC 4-hour Training Presentation</a></li>
                                <li><a href="#">Mini-DISC Presentation</a></li>
                                <li><a href="#">Team Dynamics PPT</a></li>
                                <li><a href="#">Riddles and Team Practice PPT</a></li>
                            </ul>
                            <p class="subcard-title">DISC Specific Group Exercises</p>
                            <ul class="subcard-links">
                                <li><a href="#">Planning a Vacation</a></li>
                                <li><a href="#">Making a Movie</a></li>
                                <li><a href="#">Game Show</a></li>
                                <li><a href="#">Mazes & Labyrinths</a></li>
                                <li><a href="#">Jigsaw Puzzles</a></li>
                                <li><a href="#">DISC Adaptability Scenario Practice</a></li>
                                <li><a href="#">DISC Style Situations</a></li>
                                <li><a href="#">Coffee Break</a></li>
                            </ul>
                            <p class="subcard-title">General Group Exercises</p>
                            <ul class="subcard-links">
                                <li><a href="#">40 Ice breakers for Small Groups</a></li>
                                <li><a href="#">Lost on the Moon Exercise</a></li>
                                <li><a href="#">Lost at Sea Exercise</a></li>
                                <li><a href="#">Paper Tower Exercise</a></li>
                            </ul>
                            <p class="subcard-title">DISC Activity Resources</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC Word Sketches (blank)</a></li>
                                <li><a href="#">Behavior Pattern View (blank wheel)</a></li>
                                <li><a href="#">Contract for Change (blank)</a></li>
                                <li><a href="#">DISC Summary Editable Document</a></li>
                                <li><a href="#">Adapting to DISC Styles (blank)</a></li>
                                <li><a href="#">Creating Better Relationships (blank)</a></li>
                                <li><a href="#">Tensions Worksheet (blank)</a></li>
                                <li><a href="#">DISC Blocks – Benefits & Applications</a></li>
                            </ul>
                            <p class="subcard-title">Enhancing Delivery Resources - Training & Presentations</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC Platinum Rule Participant eWorkbook (84 pages)</a></li>
                                <li><a href="#">Peer Feedback Form</a></li>
                                <li><a href="#">Facilitator Feedback Guide</a></li>
                                <li><a href="#">Self-Feedback Form</a></li>
                                <li><a href="#">Development Plan Sample</a></li>
                                <li><a href="#">Coaching Guide Questions</a></li>
                            </ul>
                            <p class="subcard-title">Enhancing Delivery Resources - Audio and video files</p>
                            <ul class="subcard-links">
                                <li><a href="#">Identifying the Styles</a></li>
                                <li><a href="#">Songs for each Style</a></li>
                                <li><a href="#">Leaving Voicemails for each Style</a></li>
                                <li><a href="#">Complimenting each Style</a></li>
                                <li><a href="#">Counseling each Style</a></li>
                                <li><a href="#">Delegating to each Style</a></li>
                                <li><a href="#">Motivating each Style</a></li>
                                <li><a href="#">Making contact with each Style</a></li>
                                <li><a href="#">Exploring with each Style</a></li>
                                <li><a href="#">Collaborating with each Style</a></li>
                                <li><a href="#">Getting commitment from each Style</a></li>
                                <li><a href="#">Assuring Customer Satisfaction with each Style</a></li>
                                <li><a href="#">KnowDISC</a></li>
                            </ul>
                        </div>
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Implementation+%26+Application.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="i&a">Implementation & Application</h4>
                                <p>DISC Email Series, Target Applications Tips, & Behavioral Style Interview Guide.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['i&a']" class="subcard">
                            <ul class="subcard-links">
                                <li><a href="#">52 Week Email Series</a></li>
                                <li><a href="#">DISC Behavioral Style Interview Guide</a></li>
                            </ul>
                            <p class="subcard-title">DISC in Action Series</p>
                            <ul class="subcard-links">
                                <li><a href="#">During Change</a></li>
                                <li><a href="#">On the Phone</a></li>
                                <li><a href="#">Leading a Meeting</a></li>
                            </ul>
                            <p class="subcard-title">DISC Target Applications Tips</p>
                            <ul class="subcard-links">
                                <li><a href="#">Coaching Tips</a></li>
                                <li><a href="#">Leadership Tips</a></li>
                                <li><a href="#">Sales Tips</a></li>
                                <li><a href="#">Service Tips</a></li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+360+Resources.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="360">360 Resources</h4>
                                <p>Supporting materials to help you with 360 Assessments.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['360']" class="subcard">
                            <ul class="subcard-links">
                                <li><a href="#">Debrief Guide</a></li>
                                <li><a href="#">Setting up a 360 Assessment Link in Dashboard</a></li>
                                <li><a href="#">Setting up a 360 Assessment Link in Dashboard</a></li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Additional+Support+Materials.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="support">Additional Support Materials</h4>
                                <p>Supplementary materials to enhance your understanding & application of DISC.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['support']" class="subcard">
                            <p class="subcard-title">Other Materials</p>
                            <ul class="subcard-links">
                                <li><a href="#">The 12 Integrated DISC Style Relationships-Advanced (Retired)</a></li>
                                <li><a href="#">People Smart in Business PDF ebook</a></li>
                                <li><a href="#">The Platinum Rule for DISC Sales Mastery</a></li>
                                <li><a href="#">DISC Reliability Analysis</a></li>
                                <li><a href="#">DISC History Chart</a></li>
                                <li><a href="#">Are You Mad at Me? Article</a></li>
                                <li><a href="#">DISC World Map</a></li>
                                <li><a href="#">DISC Careers</a></li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-6">
                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Assessment+Report+Tools.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="report&tools">Assessment Report Tools</h4>
                                <p>Debriefing & Assessment Report Details.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['report&tools']" class="subcard">
                            <p class="subcard-title">Debriefing and Assessment Report Details</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC Debrief Guide</a></li>
                                <li><a href="#">DISC Report Highlights</a></li>
                                <li><a href="#">Natural & Adapted Graphs</a></li>
                                <li><a href="#">Design & Explanation of the DISC Behavioral Diamond</a></li>
                                <li><a href="#">12 Behavioral Tendencies Definitions & Explanations</a></li>
                                <li><a href="#">Behavior Needs Under Stress</a></li>
                                <li><a href="#">Typical Behaviors in Conflict</a></li>
                            </ul>
                            <p class="subcard-title">Video Resources</p>
                            <ul class="subcard-links">
                                <li><a href="#">Practice Videos for Debriefing Graphs</a></li>
                                <li><a href="#">Understanding Your DISC Report (for your clients)</a></li>
                                <li><a href="#">Communicating with all 4 Styles (DISC)</a></li>
                                <li><a href="#">Communicating with all 4 Styles (with Birds)</a></li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Coaching+with+DISC.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="coaches">Coaching with DISC</h4>
                                <p>DISC Coaching resources.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['coaches']" class="subcard">
                            <p class="subcard-title">Coaching Guide for DISC</p>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Marketing.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="marketing">Marketing</h4>
                                <p>DISC marketing materials to help you support your business.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['marketing']" class="subcard">
                            <ul class="subcard-links">
                                <li><a href="#">Mini DISC Presentation</a></li>
                            </ul>
                            <p class="subcard-title">Information Sheets</p>
                            <ul class="subcard-links">
                                <li><a href="#">52 Week Email Series</a></li>
                                <li><a href="#">DISC vs MBTI Article</a></li>
                                <li><a href="#">DISC & Other Assessments Articles</a></li>
                                <li><a href="#">Comparing 4 quadrants and 5 factors Article</a></li>
                                <li><a href="#">Assessment 24x7 Store</a></li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Product+Specific+Resources.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="product">Product Specific Resources</h4>
                                <p>Infused & Non-infused.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['product']" class="subcard">
                            <p class="subcard-title">Infused</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC Workplace Insights - Report Guide</a></li>
                                <li><a href="#">DISC Workplace Insights - Report Overview – Get it from Shawn (YT
                                        link)</a></li>
                                <li><a href="#">DISC Executive Insights - Introduction</a></li>
                                <li><a href="#">DISC Leadership - Debrief Guide (Coming soon!)</a></li>
                                <li><a href="#">DISC Leadership - Introduction</a></li>
                                <li><a href="#">DISC Awareness - Debrief guide</a></li>
                                <li><a href="#">DISC Awareness - Introduction</a></li>
                            </ul>
                            <p class="subcard-title">Non-Infused</p>
                            <ul class="subcard-links">
                                <li><a href="#">DISC & Motivators (Coming soon!)</a></li>
                                <li><a href="#">DISC & EIQ (Coming soon!)</a></li>
                            </ul>
                        </div>

                        <div class="card">
                            <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Quick+Links.png"
                                alt="icon" class="icon" />
                            <div>
                                <h4 data-category="quick&links">Quick Links</h4>
                                <p>Latest updates, Store, FAQs, Support info, & more.</p>
                            </div>
                        </div>

                        <div v-if="toggleStates['quick&links']" class="subcard">
                            <p class="subcard-title">Latest Updates</p>
                            <ul class="subcard-links">
                                <li><a href="#">Assessment 24x7 Store</a></li>
                                <li><a href="#">DISC FAQ</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <br />
        </div>

        <section v-else class="skeleton" style="background-color: white;">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="password-prompt">
                            <div class="info">
                                <h3>This resource is password protected</h3>
                                <p>
                                    These trainer material resources are only available for Assessments 24x7 account
                                    holders.
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
                                <input type="password" class="form-control" id="password" v-model="password"
                                    v-on:keyup.enter="unlock">
                            </div>

                            <p style="margin-top:-10px;font-size:10pt;margin-bottom:30px">
                                Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact
                                    our
                                    support team &rarr;</a>
                            </p>

                            <button class="button" style="width:100%" @click="unlock">Access the Trainer
                                Materials</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-fold></footer-fold>
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
    data() {
        return {
            unlocked: false,
            password: '',
            certified: false,
            validationError: false,
            toggleStates: {} // Store toggle states for each category
        }
    },
    methods: {
        unlock() {
            if (this.password === 'disc2024a24x7') {
                this.unlocked = true;
                this.validationError = false;
            } else if (this.password === 'certified') {
                this.unlocked = true;
                this.certified = true;
                this.validationError = false;
            } else {
                this.validationError = true;
                this.password = '';
            }
        },
        handleClick(event) {
            if (event.target.tagName === 'H4') {
                // Get the value of the data-category attribute
                const category = event.target.dataset.category;

                // Toggle the state of the clicked category
                this.$set(this.toggleStates, category, !this.toggleStates[category]);

                // Now you can perform actions based on the clicked card
                console.log("Clicked category:", category);
                console.log("Toggle state:", this.toggleStates[category]);
            }
        }
    },
    head() {
        return {
            title: 'DISC Trainer Materials | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'The DISC Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.skeleton {
    background-color: #00a8ff;

    .body {
        background-color: white;
        text-align: center;
        margin: 20px;
        border-radius: 20px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .heroImage {
        width: 100%;
        margin-top: 40px;
    }

    h1 {
        font-size: 90.6665px;
        line-height: 100px;
        font-weight: 700;
    }

    h3 {
        font-size: 37.334px;
        line-height: 52px;
    }

    .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        padding: 0 35px;
    }

    .search-bar {
        position: relative;
        width: 68%;
    }

    .input-search {
        width: 100%;
        padding: 10px;
        padding-left: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
    }

    .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #888;
    }

    .filter-dropdown {
        position: relative;
        width: 30%;
    }

    .filter-select {
        width: 100%;
        padding: 10px;
        padding-right: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
        appearance: none;
    }

    .dropdown-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #888;
    }

    .icon {
        width: 80px;
        margin-right: 20px;
        margin-left: -25px;
        vertical-align: middle;
    }

    .card {
        background-color: #00a8ff;
        color: white;
        padding: 0px 30px;
        border-radius: 50px 0 0 50px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        width: 100%;
        position: relative;
        z-index: 1;
        height: 90px;
    }

    .subcard {
        background-color: #00a8ff;
        color: white;
        padding: 15px 30px;
        margin-top: -15px;
        margin-bottom: 30px;
        margin-left: 40px;
        /* Adjust margin to align subcard */
        border-radius: 0 0 7px 7px;
        width: calc(100% - 40px);
        position: relative;
        z-index: 0;
    }

    .subcard-title {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: -10px;
        margin-top: -10px;
        text-align: left;
        margin-left: 35px;
    }

    .subcard-links {
        list-style-type: none;
        padding-left: 0;
        font-size: 14.6667px;
        text-align: left;
        margin-left: 35px;
    }

    .subcard-links li {
        margin-bottom: 5px;
    }

    .subcard-links a {
        color: white;
        text-decoration: underline;
        font-weight: 500;
    }

    .subcard-links a:hover {
        text-decoration: none;
    }

    .card h4 {
        font-size: 21.333px;
        text-decoration: underline;
        margin: 0;
        cursor: pointer;
    }

    .card p {
        font-size: 14.666px;
        margin: 0;
    }

    .row {
        display: flex;
        flex-wrap: nowrap;
    }

    .col-6 {
        width: 50%;
        padding: 10px;
        box-sizing: border-box;
    }

    .password-prompt {
        width: 100%;
        max-width: 500px;
        padding: 20px;
        margin: 60px auto;
        display: block;

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

    /* Media query for screens less than 768px wide */
    @media (max-width: 768px) {
        .row {
            flex-wrap: wrap;
        }

        .col-6 {
            width: 100%;
        }
    }
}
</style>