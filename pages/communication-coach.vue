<template>
    <section class="communication-coach">
        <main-nav/>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="section-title">Communication Coach</h1>
                        <p>
                            This is your online DISC interactive communications tool known as the Assessments 24x7 Communication Coach. Use this tool to 
                            quickly identify any person's DISC style and learn how to communicate with them in various situations.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="false"></loading>

            <div class="row">
                <div class="col-12">
                    <h2>DISC Communication Coach</h2>
                    <p>
                        The DISC Communication Coach is an all-in-one solution to identify and adapt to each communication style. Use the DISC 
                        Communication Coach in two ways:
                    </p>

                    <ol>
                        <li>
                            Don’t know your associate’s communication style? Answer 2 key questions to quickly establish their basic style. 
                        </li>
                        <li>
                            Need help adapting your style to improve your communication? Once you’ve identified your associate’s DISC style, let Dr. Tony 
                            Alessandra direct you in adapting your communication in specific situations via the video library provided for each style. 
                        </li>
                    </ol>

                    <a href="#" v-if="step !== '1'" class="hyperlink" @click="restart()">&#8635; Start Over</a>

                    <section class="section-container" v-if="step === '1'">
                        <h3>Do you know the person's DISC style?</h3>

                        <div class="row">
                            <div class="col-6-sm">
                                <button class="button large success" @click="navigate('2a')">Yes</button>
                            </div>

                            <div class="col-6-sm">
                                <button class="button large danger" @click="navigate('2b')">No</button>
                            </div>
                        </div>
                    </section>

                    <section class="section-container" v-if="step === '2a'">
                        <h3>Select the person's DISC style.</h3>

                        <div class="disc-badge d selectable" @click="style = 'D'; navigate('3')">
                            <span class="floating-badge">D</span>
                            <strong>Dominant</strong>
                            <p>Direct, Assertive, Decisive</p>
                        </div>

                        <div class="disc-badge i selectable" @click="style = 'I'; navigate('3')">
                            <span class="floating-badge">I</span>
                            <strong>Influencing</strong>
                            <p>Expressive, Likeable, Life of the Party</p>
                        </div>

                        <div class="disc-badge s selectable" @click="style = 'S'; navigate('3')">
                            <span class="floating-badge">S</span>
                            <strong>Steady</strong>
                            <p>Friendly, Team Player, Friends/Family Focused</p>
                        </div>

                        <div class="disc-badge c selectable" @click="style = 'C'; navigate('3')">
                            <span class="floating-badge">C</span>
                            <strong>Conscientious</strong>
                            <p>Correct, Critical, Quiet</p>
                        </div>
                    </section>

                    <section class="section-container" v-if="step === '2b'">
                        <div v-if="assessment.direct == 0 && assessment.indirect === 0">
                            <h3>Is the person more Direct or Indirect?</h3>

                            <div class="row">
                                <div class="col-6-sm">
                                    <button class="button large" @click="assessment.direct = 1; navigate('2b')">Direct</button>
                                </div>

                                <div class="col-6-sm">
                                    <button class="button secondary large" @click="assessment.indirect = 1; navigate('2b')">Indirect</button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6-sm">
                                    <div class="trait">
                                        Usually reacts quickly/decisively
                                    </div>

                                    <div class="trait">
                                        Usually makes emphatic statements or directly expresses opinions
                                    </div>

                                    <div class="trait">
                                        Usually contributes frequently to group conversations
                                    </div>

                                    <div class="trait">
                                        Makes quick decisions
                                    </div>

                                    <div class="trait">
                                        Less patient than average
                                    </div>

                                    <div class="trait">
                                        Comes across as more assertive
                                    </div>

                                    <div class="trait">
                                        Risk-taker
                                    </div>

                                    <div class="trait">
                                        Tends to talk more than listen
                                    </div>

                                    <div class="trait">
                                        Usually responds to conflict quickly and directly
                                    </div>
                                </div>

                                <div class="col-6-sm">
                                    <div class="trait">
                                        Usually reacts slowly/deliberately
                                    </div>

                                    <div class="trait">
                                        Usually asks questions or speaks more tentatively and indirectly
                                    </div>

                                    <div class="trait">
                                        Usually contributes infrequently to group conversations
                                    </div>

                                    <div class="trait">
                                        Likes to think over decisions before making them
                                    </div>

                                    <div class="trait">
                                        More patient than average
                                    </div>

                                    <div class="trait">
                                        Comes across as more reserved
                                    </div>

                                    <div class="trait">
                                        Risk-avoider
                                    </div>

                                    <div class="trait">
                                        Tends to listen more than talk
                                    </div>

                                    <div class="trait">
                                        Usually responds to conflict slowly and indirectly
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else>
                            <h3>Is the person more Guarded or Open?</h3>

                            <div class="row">
                                <div class="col-6-sm">
                                    <button class="button secondary large" @click="assessment.open = 1; calculateStyle()">Open</button>
                                </div>

                                <div class="col-6-sm">
                                    <button class="button large" @click="assessment.guarded = 1; calculateStyle()">Guarded</button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6-sm">
                                    <div class="trait">
                                        Finds it easy to share/discuss personal feelings with others
                                    </div>

                                    <div class="trait">
                                        Tends to take the initiative and introduce self to others
                                    </div>

                                    <div class="trait">
                                        Usually responsive to others' agendas, interests, and concerns
                                    </div>

                                    <div class="trait">
                                        Usually interacts with others in a relaxed and informal manner
                                    </div>

                                    <div class="trait">
                                        Usually prefers to work with others as part of a group or team
                                    </div>

                                    <div class="trait">
                                        Tends to focus primarily on relationships over tasks
                                    </div>

                                    <div class="trait">
                                        When making decisions, relies more on feelings over facts
                                    </div>

                                    <div class="trait">
                                        Easy to get to know
                                    </div>

                                    <div class="trait">
                                        Open to establishing relationships with people
                                    </div>
                                </div>

                                <div class="col-6-sm">
                                    <div class="trait">
                                        Keeps personal feelings private, sharing only when necessary
                                    </div>

                                    <div class="trait">
                                        Tends to wait for others to introduce themselves
                                    </div>

                                    <div class="trait">
                                        Usually directed toward their own agenda, interests, and concerns
                                    </div>

                                    <div class="trait">
                                        Usually interacts with others in a more formal and proper manner
                                    </div>

                                    <div class="trait">
                                        Prefers to work independently
                                    </div>

                                    <div class="trait">
                                        Tends to focus primarily on tasks over relationships
                                    </div>

                                    <div class="trait">
                                        When making decisions, relies more on facts over feelings
                                    </div>

                                    <div class="trait">
                                        It takes time to get to know them
                                    </div>

                                    <div class="trait">
                                        Guarded about establishing relationships with people
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="section-container" v-if="step === '3'">
                        <div class="disc-badge d" v-if="style === 'D'">
                            <span class="floating-badge">D</span>
                            <strong>Dominant</strong>
                            <p>Direct, Assertive, Decisive</p>
                        </div>

                        <div class="disc-badge i" v-else-if="style === 'I'">
                            <span class="floating-badge">I</span>
                            <strong>Influencing</strong>
                            <p>Expressive, Likeable, Life of the Party</p>
                        </div>

                        <div class="disc-badge s" v-else-if="style === 'S'">
                            <span class="floating-badge">S</span>
                            <strong>Steady</strong>
                            <p>Friendly, Team Player, Friends/Family Focused</p>
                        </div>

                        <div class="disc-badge c" v-else-if="style === 'C'">
                            <span class="floating-badge">C</span>
                            <strong>Conscientious</strong>
                            <p>Correct, Critical, Quiet</p>
                        </div>

                        <br/>

                        <div class="category" v-for="part in parts" :key="part._id">
                            <h3>{{ part.title }}</h3>

                            <ul class="topics">
                                <li class="topic" v-for="topic in part.topics" :key="topic._id" @click="selectTopic(topic)">{{ topic.title }}</li>
                            </ul>
                        </div>
                    </section>
                    
                    <br/><br/><br/>
                </div>
            </div>
        </div>

        <transition name="fade">
            <section v-if="sectionModal" class="modal-window">
                <div class="container">
                    <iframe
                        style="width: 100%"
                        height="315"
                        frameborder="0"
                        :src="selectedTopic.video[style.toLowerCase()]"
                        allowfullscreen allowtransparency playsinline showinfo allow="autoplay">
                    </iframe>
                    
                    <a title="Close" class="modal-close" @click="sectionModal = false">Close</a>

                    <div class="row">
                        <div class="col-12">
                            <h4>{{ selectedTopic.title }}</h4>

                            <div class="sections">
                                <div class="section" v-for="section in sections" :key="section._id">
                                    {{ section.body }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </transition>

        <footer-fold/>
    </section>
</template>

<script>
    import axios from 'axios';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Nav from '@/components/Nav';
    import Footer from '@/components/Footer';

    export default {
        components: {
            'main-nav': Nav,
            'footer-fold': Footer,
            Loading
        },
        data() {
            return {
                step: '1',
                style: '',
                assessment: {
                    direct: 0,
                    indirect: 0,
                    open: 0,
                    guarded: 0
                },
                categories: [],
                topics: [],
                sections: [],
                selectedTopic: {
                    title: '',
                    video: {
                        d: '',
                        i: '',
                        s: '',
                        c: ''
                    }
                },
                sectionModal: false,
                isLoading: false
            }
        },
        async created() {
            let response = await axios.get('/api/communication-coach/categories');
            this.categories = response.data.categories;

            response = await axios.get('/api/communication-coach/topics');
            this.topics = response.data.topics;
        },
        methods: {
            calculateStyle() {
                if (this.assessment.direct == 1 && this.assessment.guarded == 1) {
                    this.style = 'D';
                } else if (this.assessment.direct == 1 && this.assessment.open == 1) {
                    this.style = 'I';
                } else if (this.assessment.indirect == 1 && this.assessment.open == 1) {
                    this.style = 'S';
                } else if (this.assessment.indirect == 1 && this.assessment.guarded == 1) {
                    this.style = 'C';
                }

                this.navigate('3');
            },
            async selectTopic(topic) {
                this.selectedTopic = topic;

                const response = await axios.get(`/api/communication-coach/sections/${topic._id}/${this.style}`);
                this.sections = response.data.sections;

                this.sectionModal = true;
            },
            restart() {
                this.style = '';
                this.assessment = {
                    direct: 0,
                    indirect: 0,
                    open: 0,
                    guarded: 0
                };

                this.navigate('1');
            },
            navigate(step) {
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                    this.step = step;
                }, 250);
            }
        },
        computed: {
            parts: function() {
                return this.categories.map(category => {
                    const topicPart = this.topics.filter(topic => topic.category === category._id);

                    category.topics = topicPart;

                    return category;
                });
            }
        },
        head() {
            return {
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    }
                ],
                title: 'Communication Coach | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'This is your online DISC interactive communications tool known as the Assessments 24x7 Communication Coach. Use this tool to quickly identify any person\'s DISC style and learn how to communicate with them in various situations.'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .communication-coach {
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

        h3 {
            font-size: 18pt;
            line-height: 20pt;
            margin-top: 0;
        }

        .button {
            &.large {
                font-size: 20pt;
                width: 100%;
            }
        }

        .trait {
            padding: 10px;
            border-bottom: 1px solid #eaeaea;

            &:first-of-type {
                border-top: 1px solid #eaeaea;
            }
        }

        .section-container {
            border-radius: 8px;
            padding: 30px;
            margin-bottom: 30px;
            margin-top: 30px;
        }

        .topics {
            margin: -10px 0 40px 0;
            list-style: none;
            padding-left: 0;

            .topic {
                padding: 10px;
                border-bottom: 1px solid #eaeaea;
                cursor: pointer;
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    right: 10px;
                    top: 18px;
                    border: solid #bbb;
                    border-width: 0 3px 3px 0;
                    display: inline-block;
                    padding: 3px;
                    transform: rotate(-45deg);
                }

                &:hover {
                    background: #fafafa;
                }

                &:first-of-type {
                    border-top: 1px solid #eaeaea;
                }
            }
        }

        .disc-badge {
            padding: 16px;
            color: #fff;
            position: relative;
            margin: 0 0 20px 0;
            border-radius: 8px;

            .floating-badge {
                position: absolute;
                top: 12px;
                left: -16px;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                font-weight: 700;
                box-shadow: 0 0 10px rgba(0,0,0,.1);
                text-align: center;
                line-height: 34px;
                border: 2px solid rgba(255,255,255,.1);
                text-shadow: 1px 1px 1px rgba(0,0,0,.2);
                transition: all .5s linear;
            }

            strong {
                font-size: 16pt;
            }

            p {
                margin: 0;
            }

            strong, p {
                padding-left: 14px;
                text-shadow: 1px 1px 1px rgba(0,0,0,.2);
            }

            &.d {
                background-color: $color-d;
                .floating-badge { background: lighten($color-d, 10); }
            }

            &.i {
                background-color: $color-i;
                .floating-badge { background: lighten($color-i, 10); }
            }

            &.s {
                background-color: $color-s;
                .floating-badge { background: lighten($color-s, 10); }
            }

            &.c {
                background-color: $color-c;
                .floating-badge { background: lighten($color-c, 10); }
            }

            &.selectable {
                cursor: pointer;
                transition: all .15s linear;

                &:hover {
                    &.d { background-color: lighten($color-d, 5); }
                    &.i { background-color: lighten($color-i, 5); }
                    &.s { background-color: lighten($color-s, 5); }
                    &.c { background-color: lighten($color-c, 5); }
                }
            }
        }

        .modal-window {
            position: fixed;
            background-color: rgba(0,0,0,.6);
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 999999;
            transition: all 0.25s;

            .container {
                width: 100%;
                max-width: 600px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 40px 20px;
                background: #fff;
                max-height: 90%;
                overflow-y: scroll;

                .modal-close {
                    color: #aaa;
                    line-height: 50px;
                    font-size: 12pt;
                    position: absolute;
                    right: 0;
                    text-align: center;
                    top: 0;
                    width: 70px;
                    text-decoration: none;
                    cursor: pointer;

                    &:hover {
                        color: #000;
                    }
                }

                h4 {
                    margin: 10px 0 20px;
                    font-size: 18pt;
                }

                iframe {
                    border-radius: 8px;
                }

                .sections {
                    .section {
                        box-shadow: 0 0 10px rgba(0,0,0,.1);
                        margin-bottom: 20px;
                        padding: 20px;
                        border-radius: 8px;
                    }
                }
            }
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }

    @media only screen and (max-width: 600px) {
        .communication-coach {
            .section-container {
                padding: 20px 0;
                border: none;
            }

            h3 {
                padding: 0 10px;
            }

            .modal-window {
                .container {
                    max-height: 100% !important;
                }
            }

            .disc-badge {
                .floating-badge {
                    display: none;
                }

                strong, p {
                    padding-left: 0;
                }
            }
        }
    }
</style>