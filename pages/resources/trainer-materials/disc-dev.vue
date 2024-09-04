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
                <div class="row" @click="handleClick">
                    <div class="col-6">
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+The+Fundamentals_+DISC.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="fundamentals">The Fundamentals: DISC</h4>
                                <p>Foundations of DISC & advanced development resources.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Training+%26+Workshops.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="t&w">Training & Workshops</h4>
                                <p>Training presentations, Facilitator guides, DISC group exercises, & delivery
                                    resources.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Implementation+%26+Application.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="i&a">Implementation & Application</h4>
                                <p>DISC Email Series, Target Applications Tips, & Behavioral Style Interview Guide.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+360+Resources.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="360">360 Resources</h4>
                                <p>Supporting materials to help you with 360 Assessments.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Additional+Support+Materials.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="support">Additional Support Materials</h4>
                                <p>Supplementary materials to enhance your understanding & application of DISC.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Assessment+Report+Tools.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="report&tools">Assessment Report Tools</h4>
                                <p>Debriefing & Assessment Report Details.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Coaching+with+DISC.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="coaches">Coaching with DISC</h4>
                                <p>DISC Coaching resources.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Marketing.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="marketing">Marketing</h4>
                                <p>DISC marketing materials to help you support your business.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Product+Specific+Resources.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="product">Product Specific Resources</h4>
                                <p>Infused & Non-infused.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/trainer-materials/disc/2024+disc/%2B+Quick+Links.png" alt="icon" class="icon" />
                            <div>
                                <h4 data-category="quick&links">Quick Links</h4>
                                <p>Latest updates, Store, FAQs, Support info, & more.</p>
                            </div>
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
            toggleSubcategories: false,
            activeCategory: null // Store the active category when an h4 is clicked
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
                
                // Update the activeCategory based on the clicked h4
                this.activeCategory = category;
                
                // Now you can perform actions based on the clicked card
                console.log("Clicked category:", category);
                
                // Example: Toggle subcategories based on the category
                this.toggleSubcategories = !this.toggleSubcategories;
                console.log("this is the toggle value", this.toggleSubcategories);
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

    .icon {
        width: 80px;
        margin-right: 20px;
        margin-left: -25px;
        vertical-align: middle;
    }

    .card {
        background-color: #00a8ff;
        height: 90px;
        color: white;
        padding: 0px 30px;
        border-radius: 50px 0 0 50px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        width: 100%;
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

    /* Flexbox for row */
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
            width: 100%; /* Stack the columns on mobile */
        }
    }
}

</style>
