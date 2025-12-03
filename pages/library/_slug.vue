<template>
    <div>
        <section class="page">
            <main-nav></main-nav>

            <section class="title">
                <button @click="jumpToLibrary" class="teal">Library</button>

                <div class="shadow">
                    <div style="padding: 30px 0 20px 0;">
                        <h1>{{ displayTitle }}</h1>
                        <h3 v-if="questions[currentQuestion - 1]" class="chapter"
                            v-html="questions[currentQuestion - 1].chapter"></h3>
                    </div>
                </div>
            </section>

            <section class="questionnaire">
                <img :src="heroImage" :alt="heroAltText" :class="['hero-illustration', imageClass]" />

                <div class="container">
                    <!-- QUESTION FLOW -->
                    <div v-if="currentQuestion !== totalQuestions && questions[currentQuestion - 1]"
                        :key="currentQuestion">
                        <p style="font-weight: 700;" class="chapter" v-html="questions[currentQuestion - 1].timeline">
                        </p>

                        <div class="line"></div>

                        <div class="question-wrapper">
                            <div v-if="isClient" v-html="questions[currentQuestion - 1].question"></div>
                        </div>

                        <div class="answers">
                            <button class="answerButtons"
                                v-for="(answer, index) in questions[currentQuestion - 1].answers" :key="index"
                                @click="selectAnswer(answer)">
                                <span class="selection" v-html="answer.text"></span>
                            </button>
                        </div>
                    </div>

                    <!-- FINAL CONCLUSION PAGE -->
                    <div v-else-if="questions[currentQuestion - 1]">
                        <div v-if="topScore === 'D'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline"></p>
                            <div class="line dominance"></div>
                            <p v-html="questions[currentQuestion - 1].dominanceConclusion"></p>
                        </div>

                        <div v-if="topScore === 'I'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline"></p>
                            <div class="line influence"></div>
                            <p v-html="questions[currentQuestion - 1].influenceConclusion"></p>
                        </div>

                        <div v-if="topScore === 'S'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline"></p>
                            <div class="line steadiness" style="color: #0dab49;"></div>
                            <p v-html="questions[currentQuestion - 1].steadinessConclusion"></p>
                        </div>

                        <div v-else-if="topScore === 'C'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline"></p>
                            <div class="line consientousness"></div>
                            <p v-html="questions[currentQuestion - 1].conscientiousnessConclusion"></p>
                        </div>
                    </div>

                    <!-- BREAKDOWN BUTTON -->
                    <div v-if="currentQuestion === totalQuestions" class="button-wrapper">
                        <div v-if="topScore === 'D'">
                            <button class="gold disc" @click="breakdownModal = true">See Breakdown</button>
                        </div>
                        <div v-if="topScore === 'I'">
                            <button class="gold influence" @click="breakdownModal = true">See Breakdown</button>
                        </div>
                        <div v-if="topScore === 'S'">
                            <button class="gold steadiness" @click="breakdownModal = true">See Breakdown</button>
                        </div>
                        <div v-if="topScore === 'C'">
                            <button class="gold conscientiousness" @click="breakdownModal = true">
                                See Breakdown
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <!-- BREAKDOWN MODAL (unchanged) -->
        <transition name="fade">
            <section v-if="breakdownModal" class="modal-window">
                <div class="container" style="margin-top: 20px;">
                    <a title="Close" class="modal-close" @click="breakdownModal = false">Close</a>

                    <div class="row">
                        <div class="col-12">
                            <h1>Breakdown</h1>
                            <hr class="yellowLine" />

                            <div class="col-4">
                                <div class="chart">
                                    <div class="bar" :style="{ height: DPercentage + '%', backgroundColor: '#f44336' }"
                                        :title="'D: ' + DPercentage + '%'">
                                        <div class="label">D</div>
                                    </div>
                                    <div class="bar" :style="{ height: IPercentage + '%', backgroundColor: '#ffbd05' }"
                                        :title="'I: ' + IPercentage + '%'">
                                        <div class="label">I</div>
                                    </div>
                                    <div class="bar" :style="{ height: SPercentage + '%', backgroundColor: '#0dab49' }"
                                        :title="'S: ' + SPercentage + '%'">
                                        <div class="label">S</div>
                                    </div>
                                    <div class="bar" :style="{ height: CPercentage + '%', backgroundColor: '#1666ff' }"
                                        :title="'C: ' + CPercentage + '%'">
                                        <div class="label">C</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-8">
                                <h5>These are the results.</h5>
                                <hr class="shortLine top" />
                                <ul>
                                    <li>This is your D percentage: {{ DPercentage }}</li>
                                    <li>This is your I percentage: {{ IPercentage }}</li>
                                    <li>This is your S percentage: {{ SPercentage }}</li>
                                    <li>This is your C percentage: {{ CPercentage }}</li>
                                </ul>
                            </div>

                            <div class="col-8">
                                <h5>This your personality type and description.</h5>
                                <hr class="shortLine bottom" />

                                <div v-if="topScore === 'D'">
                                    <p class="type">
                                        <strong>{{ DstyleTitle }}</strong> {{ DstyleDescription }}
                                    </p>
                                </div>
                                <div v-if="topScore === 'I'">
                                    <p class="type">
                                        <strong>{{ IstyleTitle }}</strong> {{ IstyleDescription }}
                                    </p>
                                </div>
                                <div v-if="topScore === 'S'">
                                    <p class="type">
                                        <strong>{{ SstyleTitle }}</strong> {{ SstyleDescription }}
                                    </p>
                                </div>
                                <div v-else-if="topScore === 'C'">
                                    <p class="type">
                                        <strong>{{ CstyleTitle }}</strong> {{ CstyleDescription }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </transition>

        <LazyHydrate when-visible>
            <footer-fold></footer-fold>
        </LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    middleware: ['auth'],

    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: this.pageTitle,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.metaDescription
                }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                    type: 'application/ld+json'
                }
            ]
        };
    },
    data() {
        return {
            assessmentSlug: this.$route.params.slug,
            assessment: null,
            heroImageUrl: '',
            sessionId:
                this.$route.query.sessionId ||
                this.$route.query.session ||
                this.$route.params.sessionId ||
                null,
            valueToTrait: { 1: 'D', 2: 'I', 3: 'S', 4: 'C' },
            traitToValue: { D: 1, I: 2, S: 3, C: 4 },
            currentQuestion: 1,
            totalQuestions: 0,
            topScore: '',
            selectedAnswers: [],
            DPercentage: 0,
            IPercentage: 0,
            SPercentage: 0,
            CPercentage: 0,
            DstyleTitle: 'The Go-Getter',
            IstyleTitle: 'The Encourager',
            SstyleTitle: 'The Peacemaker',
            CstyleTitle: 'The Problem Solver',
            DstyleDescription:
                "You like to jump in, make things happen, and try new challenges. You're brave, you set goals, and you help the group get moving when it’s time to play.",
            IstyleDescription:
                'You bring smiles and energy. You love making friends, telling stories, and keeping everyone excited so the fun keeps going.',
            SstyleDescription:
                'You’re steady, kind, and patient. You make sure everyone is included and that games feel fair, friendly, and calm.',
            CstyleDescription:
                'You notice details and think things through. You like clear rules, careful plans, and helping the team solve tricky problems the right way.',
            breakdownModal: false,
            isClient: false,
            questions: []
        };
    },
    computed: {
        imageClass() {
            const slug = this.$route.params.slug;

            return {
                'boyAtThePark': slug === 'shanes-day-at-the-park',
                'bookcaseLeft': slug === 'allies-professional-journey',
                'firstJobLeft': slug === 'jessicas-first-job',
                'rogersBusinessLeft': slug === 'rogers-new-business',
                'trevorsDayAtSchool': slug === 'trevors-day-at-school',
                'westonsBirthday': slug === 'westons-birthday'
            };
        },
        displayTitle() {
            return (this.assessment && this.assessment.title) || "Assessment";
        },
        heroImage() {
            if (this.assessment && this.assessment.heroImageUrl) {
                return this.assessment && this.assessment.heroImageUrl;
            }
        },
        heroAltText() {
            return (
                (this.assessment && this.assessment.heroAltText) ||
                `${this.displayTitle} cover illustration`
            );
        },
        metaDescription() {
            return (
                (this.assessment && this.assessment.description) ||
                'Interactive DISC story assessment from The Assessment Library.'
            );
        },
        pageTitle() {
            return `The Assessment Library | ${this.displayTitle}`;
        },
        structuredDataBreadcrumbs() {
            const slug = this.assessmentSlug;
            return {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'The Assessment Library',
                        item: 'https://theassessmentlibrary.com/'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: this.displayTitle,
                        item: `https://theassessmentlibrary.com/library/${slug}`
                    }
                ]
            };
        }
    },
    async mounted() {
        this.isClient = true;

        await this.loadAssessment();

        if (!this.sessionId) return;

        try {
            await this.loadSession();
        } catch (err) {
            console.error('Error loading session:', err);
        }
    },
    methods: {
        async loadAssessment() {
            try {
                const res = await this.$axios.$get(`/api/assessments/${this.assessmentSlug}`);

                console.log('RAW /api/assessments response:', res);

                const assessment = res.assessment || res;

                console.log('Parsed assessment object:', assessment);
                console.log('heroImageUrl from API:', assessment && assessment.heroImageUrl);

                this.assessment = assessment || null;
                this.heroImageUrl = assessment && assessment.heroImageUrl ? assessment.heroImageUrl : '';

                if (assessment && Array.isArray(assessment.questions)) {
                    this.questions = assessment.questions;
                    this.totalQuestions = assessment.questions.length;
                } else {
                    console.warn('No questions found for assessment slug:', this.assessmentSlug);
                }
            } catch (err) {
                console.error('Error loading assessment:', err);
            }
        },
        async loadSession() {
            const res = await this.$axios.$get(
                `/api/sessions/${this.sessionId}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.token}`
                    }
                }
            );

            const session = res.session || res;
            if (!session) return;

            if (session.answers && session.answers.length) {
                const sorted = [...session.answers].sort(
                    (a, b) => Number(a.questionId) - Number(b.questionId)
                );
                this.selectedAnswers = sorted.map(
                    (a) => this.traitToValue[a.response]
                );
            }

            if (session.status === 'completed') {
                this.currentQuestion = this.totalQuestions || 1;
                if (this.selectedAnswers.length) {
                    this.calculateTotals();
                }
            } else {
                const idx =
                    typeof session.currentQuestionIndex === 'number'
                        ? session.currentQuestionIndex
                        : 0;
                this.currentQuestion = idx + 1;
            }
        },
        async selectAnswer(answer) {
            if (!answer) return;

            const questionNumber = this.currentQuestion;
            const questionId = String(questionNumber);
            const value = answer.value;
            const trait = this.valueToTrait[value];
            const nextQuestion = answer.nextQuestion;
            const nextQuestionIndex = nextQuestion - 1;
            const isFinal = nextQuestion === this.totalQuestions;

            this.selectedAnswers.push(value);
            this.currentQuestion = nextQuestion;

            if (this.sessionId) {
                try {
                    let scorePayload;

                    if (isFinal) {
                        this.calculateTotals();
                        scorePayload = {
                            total: this.selectedAnswers.length,
                            breakdown: {
                                D: Number(this.DPercentage),
                                I: Number(this.IPercentage),
                                S: Number(this.SPercentage),
                                C: Number(this.CPercentage)
                            }
                        };
                    }

                    await this.$axios.$post(
                        `/api/sessions/${this.sessionId}/answer`,
                        {
                            questionId,
                            response: trait,
                            nextQuestionIndex,
                            isFinal,
                            score: scorePayload
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${this.$store.state.token}`
                            }
                        }
                    );
                } catch (err) {
                    console.error('Error saving answer:', err);
                }
            } else if (isFinal) {
                this.calculateTotals();
            }
        },
        jumpToLibrary(event) {
            window.location.href = '/';
            if (event && event.target) {
                event.target.blur();
            }
        },
        calculateTotals() {
            let DCount = 0;
            let ICount = 0;
            let SCount = 0;
            let CCount = 0;

            this.selectedAnswers.forEach((answer) => {
                switch (answer) {
                    case 1:
                        DCount++;
                        break;
                    case 2:
                        ICount++;
                        break;
                    case 3:
                        SCount++;
                        break;
                    case 4:
                        CCount++;
                        break;
                    default:
                        break;
                }
            });

            const totalAnswers = this.selectedAnswers.length || 1;

            const DPercentage = ((DCount / totalAnswers) * 100).toFixed(2);
            const IPercentage = ((ICount / totalAnswers) * 100).toFixed(2);
            const SPercentage = ((SCount / totalAnswers) * 100).toFixed(2);
            const CPercentage = ((CCount / totalAnswers) * 100).toFixed(2);

            this.DPercentage = DPercentage;
            this.IPercentage = IPercentage;
            this.SPercentage = SPercentage;
            this.CPercentage = CPercentage;

            const topPercentage = Math.max(
                parseFloat(DPercentage),
                parseFloat(IPercentage),
                parseFloat(SPercentage),
                parseFloat(CPercentage)
            );

            if (topPercentage === parseFloat(this.DPercentage)) {
                this.topScore = 'D';
            } else if (topPercentage === parseFloat(this.IPercentage)) {
                this.topScore = 'I';
            } else if (topPercentage === parseFloat(this.SPercentage)) {
                this.topScore = 'S';
            } else {
                this.topScore = 'C';
            }
        }
    }
};
</script>


<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.page {
    z-index: 10;
    color: #213c85;
    position: relative;

    background: linear-gradient(to right, #1f232e 50%, #ffffff 50%);

    .container {
        padding: 0 20px 0 20px;
    }

    .shadow {
        box-shadow: 0px 30px 10px 10px rgba(0, 0, 0, 0.1);
    }

    .title {
        margin-top: 64px;
        padding: 0px 0 15px 0;
        margin-bottom: 0px;
        text-align: center;
        background-color: rgb(231, 231, 231);

        button {
            position: absolute;
            right: 20px;
            top: 20px;
        }

        h1 {
            margin: 0;
            font-family: Georgia, 'Times New Roman', Times, serif;
            line-height: 36px;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 5px;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    }

    .questionnaire {
        margin: 0;
        padding: 0;
        font-family: $nunito-family;
        position: relative;
        min-height: 58vh;

        .hero-illustration {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 360px;
            height: 100%;
            object-fit: cover;
            z-index: 1;
        }

        .container {
            position: relative;
            background: #fff;
            z-index: 2;
            min-height: 585px;
            padding: 0 20px 60px;
            margin-left: 360px;
            box-sizing: border-box;
        }

        .chapter {
            margin: 0;
            padding: 40px 0 20px 0;
        }

        .answers {
            .selection {
                opacity: 0.5;

                &:hover {
                    opacity: 1;
                }
            }
        }

        .answerButtons {
            text-decoration: none;
            font-weight: 400;
            font-family: $nunito-family;
            font-size: 1em;
            color: #213c85;
            width: 100%;
            background: #fff;
            text-align: left;
            line-height: 1.5em;
            margin: 0 0 0 20px;
            box-shadow: none;
        }

        .button-wrapper {
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 5000;
            margin-top: 50px;

            button {
                margin-bottom: 60px;
                padding: 10px 20px;
                transition: transform 0.2s ease;

                &:hover {
                    transform: scale(0.95);
                }

                &:active {
                    transform: none;
                }

                &:focus {
                    transform: scale(0.8);
                }

                &.disc {
                    background: #e93d2f;
                    color: #fff;
                }

                &.influence {
                    background: #ffbd05;
                    color: #fff;
                }

                &.steadiness {
                    background: #0dab49;
                    color: #fff;
                }

                &.conscientiousness {
                    background: #1666ff;
                    color: #fff;
                }
            }
        }
    }
}

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
        color: #143180;
    }
}

.modal-window {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 899999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 20px;
    color: #213c85;

    .yellowLine {
        background: #e0ad2b;
        height: 6px;
        width: 100%;
        margin: 0 auto 20px auto;
    }

    h5 {
        line-height: 1.25em;
        margin: 0;
    }

    .shortLine {
        background: #00a8ff;
        height: 6px;
        margin: 10px auto 0 auto;
        float: left;

        &.top {
            width: 250px;
        }

        &.bottom {
            width: 480px;
        }
    }

    ul {
        padding-top: 10px;
    }

    .type {
        padding-top: 10px;
    }
}

.modal-window .container {
    width: 100%;
    top: -70px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 40px 20px;
    background: #fff;
    position: relative;
    border-radius: 12px;

    h1 {
        margin: 0 0 20px 0;
        line-height: 35px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.reportOnly {
    font-size: 12px;
}

.chart {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    height: 300px;
    border: 1px solid #cccccc28;
    padding: 0 10px;
    margin-top: -10px;
    margin-bottom: 30px;
}

.bar {
    width: 10%;
    position: relative;
    bottom: 0;
    transition: height 0.3s ease;
}

.label {
    position: absolute;
    bottom: -30px;
    width: 100%;
    text-align: center;
    font-weight: bold;
}

.line {
    background: #00a8ff;
    margin-top: -10px;
    height: 6px;
    width: 170px;

    &.dominance {
        background: #e93d2f !important;
    }

    &.influence {
        background: #ffbd05 !important;
    }

    &.steadiness {
        background: #0dab49 !important;
    }

    &.consientousness {
        background: #1666ff !important;
    }
}

@media (max-width: 1200px) {
    .page {
        .questionnaire {
            .container {
                min-height: 543px !important;
                padding: 0 16px 60px;
            }
        }
    }

    .modal-window .container {
        top: 0px;
    }
}

@media (max-width: 768px) {
    .page {
        background: #f5f5f5;

        .questionnaire {
            .hero-illustration {
                display: none;
            }

            .container {
                margin-left: 0;
                padding: 20px 16px 40px;
                min-height: auto;
            }
        }
    }
}
</style>