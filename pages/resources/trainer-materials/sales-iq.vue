<template>
    <section class="skeleton">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Sales IQ Trainer Materials</h1>
                        <p>
                            The Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, 
                            reports and models, and gives quick access to class/workshop materials you may need. Explore these at your leisure - you will find there are many 
                            useful and valuable resources to support your continued development, understanding and application!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container" v-if="unlocked">
            <div class="row">
                <div class="col-6">
                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/background-materials.png" alt="eBooks">
                        eBooks
                    </h2>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Resource</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/49%20Marketing%20Secrets%20298-page%20PDF%20eBook.pdf" target="_blank" rel="noopener">49 Marketing Secrets</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Art%20of%20Asking%20Questions%206-page%20eReport.pdf" target="_blank" rel="noopener">Art of Asking Questions</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Collaborative%20Selling%2066-page%20PDF%20eWorkbook.pdf" target="_blank" rel="noopener">Collaborative Selling</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Connecting%20With%20Your%20Customer%20-%20Understanding%20the%20Buyer's%20Needs.pdf" target="_blank" rel="noopener">Connecting With Your Customer - Understanding the Buyer's Needs</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Cross%20Selling%2026-page%20PDF%20eWorkbook.pdf" target="_blank" rel="noopener">Cross Selling</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Customer%20Loyalty%20-%20Assure%20That%20Your%20Customers%20are%20Satisfied%20Now%20and%20Loyal%20Forever.pdf" target="_blank" rel="noopener">Customer Loyalty - Assure That Your Customers are Satisfied Now and Loyal Forever</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Customer-Driven%20Service%2053-page%20PDF%20eWorkbook.pdf" target="_blank" rel="noopener">Customer-Driven Service</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Finding%20the%20Buyers%20-%20How%20to%20Reach%20Those%20Who%20Want%20What%20You've%20Got.pdf" target="_blank" rel="noopener">Finding the Buyers - How to Reach Those Who Want What You've Got</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Getting%20the%20Sale%20-%20Confirming%20the%20Commitment%20to%20Buy.pdf" target="_blank" rel="noopener">Getting the Sale - Confirming the Commitment to Buy</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Introduction%20to%20Relationship%20Selling.pdf" target="_blank" rel="noopener">Introduction to Relationship Selling</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Making%20Sure%20with%20Feedback%207-page%20eReport.pdf" target="_blank" rel="noopener">Making Sure with Feedback</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Nonverbal%20Communications%2010-page%20PDF%20eReport.pdf" target="_blank" rel="noopener">Nonverbal Communications</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Power%20of%20Listening%2050-page%20PDF%20eWorkbook.pdf" target="_blank" rel="noopener">Power of Listening</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Presentation%20Skills%209-page%20PDF%20eReport.pdf" target="_blank" rel="noopener">Presentation Skills</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Sales%20Presentations%20-%20Solving%20Problems%20and%20Filling%20Needs.pdf" target="_blank" rel="noopener">Sales Presentations - Solving Problems and Filling Needs</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Sales%20Psychology%20-%20Understanding%20the%20Mind%20of%20the%20Buyer.pdf" target="_blank" rel="noopener">Sales Psychology - Understanding the Mind of the Buyer</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Sales%20Readiness%20-%20How%20Preparation%20Leads%20to%20Opportunity.pdf" target="_blank" rel="noopener">Sales Readiness - How Preparation Leads to Opportunity</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Silent%20Messages%2014-page%20PDF%20eReport.pdf" target="_blank" rel="noopener">Silent Messages</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Stairs%20Of%20Customer%20Loyalty%205-page%20PDF%20eReport.pdf" target="_blank" rel="noopener">Stairs Of Customer Loyalty</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Telephone%20Skills%205-page%20PDF%20eReport.pdf" target="_blank" rel="noopener">Telephone Skills</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/Time%20Management%2037-page%20PDF%20eWorkbook.pdf" target="_blank" rel="noopener">Time Management</nuxt-link></td></tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-6">
                    <!---<h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/video.png" alt="Sales IQ Videos">
                        Sales IQ Videos
                    </h2>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Resource</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=9B7SBjT_pbo&feature=youtu.be" target="_blank" rel="noopener">Sales Preparation</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=4t7NWFq55SY&index=1&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Self Preparation</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=8idC0LsV1pw&index=3&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Targeting the Right Markets</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=DHJSKxuZiYE&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=7" target="_blank" rel="noopener">Targeting the Right Methods</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=esW67U0cmv0&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=12" target="_blank" rel="noopener">Connecting with the Head</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=5fUUvQai81c&index=9&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Connecting with the Heart</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=ObYkBrmmD_g&index=6&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Assessing the Person</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=TbTrQ8zcRJY&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=8" target="_blank" rel="noopener">Assessing the Situation</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=j8KBuoiZrMM&index=10&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Collaborating with the Buyer</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=BBwA3YbaVZo&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=2" target="_blank" rel="noopener">Educating the Buyer</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=EEv6cQ7bUcM&index=15&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Confirming the Solution</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=QFz41dqOYYc&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=16" target="_blank" rel="noopener">Confirming the Purchase</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=Pitexhag3qQ&index=11&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Assuring Current Satisfaction</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=p8td401u_ww&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=4" target="_blank" rel="noopener">Assuring Continuing Loyalty</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=etImw5omYP8&index=14&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7" target="_blank" rel="noopener">Managing Sales</a></td></tr>
                            <tr><td><a class="hyperlink" href="https://www.youtube.com/watch?v=Pgo6MhXYuu8&list=PLABzl3mL7BBaDiDJJQMRffbx_qEzuBEh7&index=5" target="_blank" rel="noopener">Managing Yourself</a></td></tr>
                        </tbody>
                    </table>-->

                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/debrief-guide.png" alt="DISC Debrief Resources">
                        Sales IQ Training Resources
                    </h2>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Resource</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="http://www.teachersource.com/category/engineering" target="_blank" rel="noopener">Educational Innovations</a>
                            <small>A wonderful place to find ideas for your team-building sessions and workshops. This link points to just one of the categories, but you can look at all of them on the sidebar.</small></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/sales-iq-trainer-materials/SalesIQPlus-Managers-Coaching-Guide.pdf" target="_blank" rel="noopener">Download Managers Guide</nuxt-link></td></tr>
                            <tr><td><nuxt-link class="hyperlink" to="/reports/SalesIQPlus.pdf" target="_blank" rel="noopener">Download Sample Team Report</nuxt-link></td></tr>
                        </tbody>
                    </table>

                    <h2>
                        <img class="icon" src="~/assets/trainer-materials-icons/bios.png" alt="Sales IQ Author Bios">
                        Sales IQ Author Bios
                    </h2>

                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Resource</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr><td><a class="hyperlink" href="http://alessandra.com/tony-alessandra.asp" target="_blank" rel="noopener">Dr. Tony Alessandra</a></td></tr>
                            <tr><td><a class="hyperlink" href="http://cathcart.com/about-jim-cathcart/" target="_blank" rel="noopener">Jim Cathcart</a></td></tr>
                            <tr><td><a class="hyperlink" href="http://premierespeakers.com/jeffrey_gitomer/bio" target="_blank" rel="noopener">Jeffery Gitomer</a></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="container" v-else>
            <div class="row">
                <div class="col-12">
                    <div class="password-prompt">
                        <div class="info">
                            <h3>This resource is password protected</h3>
                            <p>
                                These trainer material resources are only available for Assessments 24x7 account holders. Please use the password provided to you in your Resource Center.
                            </p>
                        </div>

                        <div v-if="validationError" class="error">
                            <p>
                                The password you have entered is invalid. Please try again.
                            </p>
                        </div>
                        
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" v-model="password" v-on:keyup.enter="unlock">
                        </div>

                        <p style="margin-top:-10px;font-size:10pt;margin-bottom:30px">
                            Having trouble? <a class="hyperlink" href="mailto:support@assessments24x7.com">Contact our support team &rarr;</a>
                        </p>

                        <button class="button" style="width:100%" @click="unlock">Access the Trainer Materials</button>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/>

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
                validationError: false
            }
        },
        methods: {
            unlock() {
                if (this.password === 'a24x72022siq') {
                //  Tophat
                    this.unlocked = true;
                } else {
                    this.validationError = true;
                    this.password = '';
                }
            }
        },
        head() {
            return {
                title: 'Sales IQ Trainer Materials | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The Sales IQ Plus Training Materials library is your comprehensive resource for coaching and debriefing tools, additional insight & information on the assessment, reports and models, and gives quick access to class/workshop materials you may need.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skeleton {
        .header {
            background: url('~assets/about.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 70px 0;
            margin-bottom: 30px;

            .section-title {
                font-size: 30pt;
                margin-top: 0;
            }
        }

        h1 {
            font-size: 30pt;
            line-height: 34pt;
            margin-bottom: 0;
        }

        h2 {
            font-size: 20pt;
            line-height: 24pt;
            margin-bottom: -20px;
        }

        .icon {
            width: 60px;
            vertical-align: text-bottom;
        }

        .password-prompt {
            width: 100%;
            max-width: 500px;
            padding: 20px;
            margin: 60px auto;
            display: block;

            .info {
                background: rgba(255,189,7,.2);
                padding: 20px;
                border-radius: 10px;
                border: 1px solid rgba(255,189,7,.3);
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
                background: rgba(255,0,0,.2);
                padding: 20px;
                border-radius: 10px;
                border: 1px solid rgba(255,0,0,.3);
                margin-bottom: 18px;

                p {
                    margin: 0;
                    font-size: 11pt;
                }
            }
        }

        table {
            border-collapse: collapse;
            margin: 30px 0 60px;
            text-align: left;

            thead {
                background: #1e222d;
                color: #fff;

                th {
                    border: 1px solid #58617d;
                }
            }

            tbody {
                tr {
                    td {
                        border: 1px solid #ddd;

                        small {
                            display: block;
                        }

                        a {
                            font-weight: 700;
                            color: #1e222d;
                        }
                    }

                    &:nth-child(even) {
                        background-color: #f5f5f5;
                    }
                }
            }

            td, th {
                padding: 8px;
            }
        }
    }
</style>