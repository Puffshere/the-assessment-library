<template>
    <section class="virtual-tour">
        <main-nav></main-nav>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Virtual Tour</h1>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row" v-show="step === 1">
                <div class="col-12">
                    <h2>Introduction To Your Online Assessment Account</h2>

                    <p>
                        The steps provided are our recommendations based off thousands of account set ups. Feel free to skip sections and move at your own 
                        pace. We also offer one-on-one training via the phone/web. If you feel this will assist, we encourage you to contact us and set up 
                        a meeting.
                    </p>

                    <p>
                        Schedule with <nuxt-link to="/suzette" class="hyperlink">Suzette Chaparro</nuxt-link>
                    </p>

                    <p>
                        If we can make any modifications to our software to better meet your needs, please don't hesitate to ask. For additional resources 
                        on our entire assessment catalog, pricing and additional resources feel free to contact us at 
                        <a class="hyperlink" href="mailto:support@assessments24x7.com">support@assessments24x7.com</a>.
                    </p>

                    <button class="button" @click="navToStep(2)">Start Full Tour</button><br/><br/>

                    <h3>Jump to an individual section:</h3>
                    <ul>
                        <li><a href="#" @click="navToStep(2)" class="hyperlink">General Account Settings/Upload Your Logo/Modify Your Site Design</a></li>
                        <li><a href="#" @click="navToStep(3)" class="hyperlink">Features on Your Home Page</a></li>
                        <li><a href="#" @click="navToStep(4)" class="hyperlink">Setting Up Assessment Access Links</a></li>
                        <li><a href="#" @click="navToStep(5)" class="hyperlink">Managing Assessment Users and Accessing Reports</a></li>
                    </ul><br/>

                    <h3>Additional Videos:</h3>
                    <ul>
                        <li><a href="#" @click="navToStep(6)" class="hyperlink">Group Reporting</a></li>
                        <li><a href="#" @click="navToStep(7)" class="hyperlink">DISC Collaboration Reporting</a></li>
                        <li><a href="#" @click="navToStep(8)" class="hyperlink">360 Instruction Video</a></li>
                    </ul><br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 2">
                <div class="col-12">
                    <h2>General Account Settings/Upload Your Logo/Modify Your Site Design</h2>
                    <button class="button secodary" @click="navToStep(1)">Go Back</button>
                    <button class="button" @click="navToStep(3)">Next Step</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/b0ee18iEhkU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="https://assessments123.com/Account/adminguide.pdf" class="hyperlink" target="_blank">Download full PDF instruction guide (see pages 30-34)</a>
                    <br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 3">
                <div class="col-12">
                    <h2>Features on Your Home Page</h2>
                    <button class="button secodary" @click="navToStep(2)">Go Back</button>
                    <button class="button" @click="navToStep(4)">Next Step</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/UZKHHav3INY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="https://assessments123.com/Account/adminguide.pdf" class="hyperlink" target="_blank">Download full PDF instruction guide (see pages 3-11)</a>
                    <br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 4">
                <div class="col-12">
                    <h2>Setting up Assessment Access Links</h2>
                    <button class="button secodary" @click="navToStep(3)">Go Back</button>
                    <button class="button" @click="navToStep(5)">Next Step</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/-xnQzh6gnvk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="https://assessments123.com/Account/adminguide.pdf" class="hyperlink" target="_blank">Download full PDF instruction guide (see pages 14-18)</a>
                    <br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 5">
                <div class="col-12">
                    <h2>Managing Assessment Users and Accessing Reports</h2>
                    <button class="button secodary" @click="navToStep(4)">Go Back</button>
                    <button class="button" @click="navToStep(1)">Next Step</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/outCzOuSXXg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="https://assessments123.com/Account/adminguide.pdf" class="hyperlink" target="_blank">Download full PDF instruction guide (see pages 19-24)</a>
                    <br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 6">
                <div class="col-12">
                    <h2>Group Reporting</h2>
                    <button class="button secodary" @click="navToStep(1)">Go Back</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/7ZOuCBoXIhQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="/pdfs/IGgroupreporting.pdf" class="hyperlink" target="_blank">Download group reporting full instruction PDF</a>
                    <br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 7">
                <div class="col-12">
                    <h2>DISC Collaboration Reporting</h2>
                    <button class="button secodary" @click="navToStep(1)">Go Back</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/nyeaI6Qba2c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="/pdfs/IGcollaboration.pdf" class="hyperlink" target="_blank">Download DISC collaboration full instruction PDF</a>
                    <br/><br/>
                </div>
            </div>

            <div class="row" v-show="step === 8">
                <div class="col-12">
                    <h2>360 Assessment Instructions</h2>
                    <button class="button secodary" @click="navToStep(1)">Go Back</button><br/><br/>

                    <iframe style="width:100%" height="540" src="https://www.youtube.com/embed/IFEiJmud3WI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/><br/>
                    <a href="https://cdn.assessments24x7.com/file/assessments24x7-media/trainer-materials/disc/360Instructions2021.pdf" class="hyperlink" target="_blank">Download 360 assessment full instruction PDF</a>
                    <br/><br/>
                </div>
            </div>
        </div>

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
                step: 1
            }
        },
        methods: {
            navToStep(step) {
                this.step = step;
            }
        },
        head() {
            return {
                title: 'Virtual Tour | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'The steps provided are our recommendations based off thousands of account set ups. Feel free to skip sections and move at your own pace.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .virtual-tour {
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
        }
    }
</style>