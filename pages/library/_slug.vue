<template>
    <div>
        <section class="page">
            <main-nav></main-nav>

            <section class="title">
                <div class="shadow">
                    <div style="padding: 30px 0 20px 0;">
                        <h1>{{ displayTitle }}</h1>
                        <h3 v-if="questions[currentQuestion - 1]" class="chapter"
                            v-html="questions[currentQuestion - 1].chapter"></h3>
                    </div>
                </div>
            </section>

            <section class="questionnaire">
                <!-- Guest Banner (child participant guest, not logged in) -->
                <div v-if="isGuest && !$store.state.loggedIn" class="third-person-banner" style="background:#fff3cd;color:#856404;margin-bottom:0;">
                  <span>You are completing this as a guest. Your results will only be saved if you complete the full assessment. <a href="/auth/login" style="color:#856404;font-weight:700;text-decoration:underline;">Sign in or register</a> to earn 1 free credit.</span>
                </div>
                <!-- 3rd Person Banner -->
                <div v-if="isThirdPerson && thirdPersonInviterName" class="third-person-banner">
                  <span>You're answering these questions as you think <strong>{{ thirdPersonInviterName }}</strong> would answer them.</span>
                </div>
                <img :src="heroImage" :alt="heroAltText" :class="['hero-illustration', imageClass]" />

                <div class="container">
                    <!-- QUESTION FLOW -->
                    <div v-if="currentQuestion !== totalQuestions && questions[currentQuestion - 1]"
                        :key="currentQuestion">
                        <p style="font-weight: 700;" class="chapter" v-html="questions[currentQuestion - 1].timeline">
                        </p>

                        <div class="line"></div>

                        <div class="question-wrapper">
                            <div v-if="isClient" v-html="visibleQuestionPage"></div>
                            <div v-if="questionPages.length > 1" class="pagination-controls">
                                <button v-if="questionPage > 0" class="page-btn" @click="questionPage--">← Back</button>
                                <span class="page-indicator">{{ questionPage + 1 }} / {{ questionPages.length }}</span>
                                <button v-if="questionPage < questionPages.length - 1" class="page-btn next-btn" @click="questionPage++">Continue reading →</button>
                            </div>
                        </div>

                        <div v-if="questionPage === questionPages.length - 1" class="answers">
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
                            <button class="gold disc" @click="openBreakdown">See Breakdown</button>
                        </div>
                        <div v-if="topScore === 'I'">
                            <button class="gold influence" @click="openBreakdown">See Breakdown</button>
                        </div>
                        <div v-if="topScore === 'S'">
                            <button class="gold steadiness" @click="openBreakdown">See Breakdown</button>
                        </div>
                        <div v-if="topScore === 'C'">
                            <button class="gold conscientiousness" @click="openBreakdown">
                                See Breakdown
                            </button>
                        </div>
                    </div>

                    <!-- POST-BREAKDOWN ACTIONS (shown after modal is closed for the first time) -->
                    <div v-if="currentQuestion === totalQuestions && hasViewedBreakdown && !breakdownModal" class="post-breakdown-card-wrap">
                        <div class="post-breakdown-card">
                            <p v-if="!kidsViewActive" class="pba-label">What would you like to do next?</p>
                            <div class="pba-buttons">
                                <button class="pba-filled" @click="$router.push('/dashboard')">
                                    <svg class="pba-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                                    Return to Dashboard
                                </button>
                                <button v-if="!kidsViewActive" class="pba-outline" @click="goToInvite">
                                    <svg class="pba-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    Invite Someone to Take This Assessment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <!-- BREAKDOWN MODAL (unchanged) -->
        <transition name="fade">
            <section v-if="breakdownModal" class="modal-window">
                <div class="container" style="margin-top: 20px;">
                    <a title="Close" class="modal-close" @click="closeBreakdown">Close</a>

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

        <!-- INVITE MODAL -->
        <transition name="fade">
            <div v-if="showInviteModal" class="invite-backdrop" @click.self="closeInviteModal">
                <div class="invite-modal">
                    <button class="invite-modal__close" @click="closeInviteModal" aria-label="Close">&times;</button>

                    <h3 class="invite-modal__title">Invite Someone</h3>

                    <div class="invite-modal__badge">
                        <svg class="invite-modal__badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        {{ displayTitle }}
                    </div>

                    <!-- Existing contacts -->
                    <div v-if="inviteParticipants.length" class="invite-modal__section">
                        <p class="invite-modal__section-label">Your contacts</p>
                        <ul class="invite-modal__contacts">
                            <li v-for="p in inviteParticipants" :key="p._id"
                                class="invite-modal__contact"
                                :class="{ 'is-selected': inviteSelectedId === p._id }"
                                @click="selectParticipant(p._id)">
                                <span class="invite-modal__radio">
                                    <span v-if="inviteSelectedId === p._id" class="invite-modal__radio-dot"></span>
                                </span>
                                <span class="invite-modal__contact-info">
                                    <span class="invite-modal__contact-name">{{ p.name }}</span>
                                    <span class="invite-modal__contact-email">{{ p.email }}</span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div v-else class="invite-modal__empty">
                        <p>You don't have any contacts yet. Add one below to send your first invite.</p>
                    </div>

                    <!-- New contact (collapsible) -->
                    <div class="invite-modal__new-section">
                        <button class="invite-modal__new-toggle" @click="toggleNewContact">
                            <svg class="invite-modal__chevron" :class="{ 'is-open': inviteNewExpanded }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                            Invite someone new
                        </button>

                        <transition name="slide-down">
                            <div v-if="inviteNewExpanded" class="invite-modal__new-fields">
                                <input v-model="inviteNewName" type="text" placeholder="Name" class="invite-modal__input" />
                                <input v-model="inviteNewEmail" type="email" placeholder="Email address" class="invite-modal__input" />
                            </div>
                        </transition>
                    </div>

                    <!-- Error / Success -->
                    <p v-if="inviteError" class="invite-modal__error">{{ inviteError }}</p>
                    <p v-if="inviteSuccess" class="invite-modal__success">{{ inviteSuccess }}</p>

                    <!-- Actions -->
                    <div class="invite-modal__actions">
                        <button class="invite-modal__send" :disabled="inviteLoading" @click="submitInvite">
                            {{ inviteLoading ? 'Sending...' : 'Send Invite' }}
                        </button>
                        <button class="invite-modal__cancel" @click="closeInviteModal">Cancel</button>
                    </div>
                </div>
            </div>
        </transition>

        <star-rating-popup v-if="showRatingPopup"
            :show="showRatingPopup"
            :assessment-id="assessment ? (assessment._id || assessment.id || '') : ''"
            :assessment-title="displayTitle"
            @close="showRatingPopup = false"
        />

        <LazyHydrate when-visible>
            <footer-fold></footer-fold>
        </LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    middleware({ store, redirect, route }) {
        // Allow guest access for child participant invite links or explicit guest mode
        if (route.query.guest === 'true' || (route.query.childParticipant && route.query.invitation)) {
            return;
        }
        if (!store.state.loggedIn) {
            return redirect('/auth/login?next=' + encodeURIComponent(route.fullPath));
        }
    },

    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer'),
        'star-rating-popup': () => import('@/components/StarRatingPopup')
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
            hasViewedBreakdown: false,
            showRatingPopup: false,
            isClient: false,
            questions: [],
            isThirdPerson: false,
            thirdPersonInviterName: '',
            thirdPersonParticipantId: this.$route.query.participant || null,
            thirdPersonInvitationId: this.$route.query.invitation || null,
            thirdPersonForUserId: null,

            isChildThirdPerson: false,
            isGuest: this.$route.query.guest === 'true',
            childProfileId: null,

            // Invite modal state
            showInviteModal: false,
            inviteParticipants: [],
            inviteSelectedId: null,
            inviteNewExpanded: false,
            inviteNewName: '',
            inviteNewEmail: '',
            inviteLoading: false,
            inviteError: '',
            inviteSuccess: '',
            questionPage: 0,
        };
    },
    computed: {
        questionPages() {
            if (!this.isClient) return [''];
            const q = this.questions[this.currentQuestion - 1];
            if (!q || !q.question) return [''];
            const div = document.createElement('div');
            div.innerHTML = q.question;
            const paragraphs = Array.from(div.querySelectorAll('p'));
            if (paragraphs.length <= 4) return [q.question];
            const pages = [];
            for (let i = 0; i < paragraphs.length; i += 4) {
                pages.push(paragraphs.slice(i, i + 4).map(p => p.outerHTML).join(''));
            }
            return pages;
        },
        visibleQuestionPage() {
            return this.questionPages[this.questionPage] || '';
        },
        kidsViewActive() {
            return this.$store.state.kidsViewActive;
        },
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

        // Handle child participant invite
        if (this.$route.query.childParticipant && this.$route.query.invitation) {
            await this.loadInviteContext();
            // Guest mode: track answers in memory only, no session created
            if (!this.isGuest && !this.sessionId) {
                await this.createThirdPersonSession();
            }
        }
        // Handle regular 3rd-person invite
        else if (this.$route.query.participant && this.$route.query.invitation) {
            await this.loadInviteContext();
            if (this.isThirdPerson && !this.sessionId) {
                await this.createThirdPersonSession();
            }
        }

        // Guest mode doesn't create sessions — answers tracked in memory
        if (this.isGuest) {
            return;
        }

        // If no sessionId but user is logged in and assessment is loaded,
        // create or retrieve a session so answers are always saved to the DB
        if (!this.sessionId && this.$store.state.loggedIn && this.assessment) {
            try {
                const payload = {
                    assessmentId: this.assessment._id || this.assessment.id
                };
                const activeChild = this.$store.state.activeChildProfile;
                if (activeChild && activeChild._id) {
                    payload.childProfileId = activeChild._id;
                }
                const res = await this.$axios.$post('/api/sessions', payload, {
                    headers: { Authorization: `Bearer ${this.$store.state.token}` }
                });
                const session = res.session || res;
                this.sessionId = session._id || session.id;
            } catch (err) {
                console.error('Error creating session:', err);
            }
        }

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
        async loadInviteContext() {
            try {
                if (this.$route.query.childParticipant && this.$route.query.invitation) {
                    const headers = this.$store.state.token
                        ? { Authorization: `Bearer ${this.$store.state.token}` }
                        : {};
                    const res = await this.$axios.$get('/api/child-participants/verify-invite', {
                        params: {
                            childParticipant: this.$route.query.childParticipant,
                            invitation: this.$route.query.invitation
                        },
                        headers
                    });
                    this.isThirdPerson = true;
                    this.isChildThirdPerson = true;
                    this.thirdPersonInviterName = res.childName;
                    this.thirdPersonParticipantId = res.participantId;
                    this.thirdPersonInvitationId = res.invitationId;
                    this.childProfileId = res.childProfileId;
                } else {
                    const res = await this.$axios.$get('/api/participants/verify-invite', {
                        params: {
                            participant: this.$route.query.participant,
                            invitation: this.$route.query.invitation
                        },
                        headers: { Authorization: `Bearer ${this.$store.state.token}` }
                    });
                    this.isThirdPerson = true;
                    this.thirdPersonInviterName = res.inviterName;
                    this.thirdPersonForUserId = res.inviterUserId;
                }
            } catch (err) {
                console.error('Error loading invite context:', err);
                // Don't block the page — just proceed normally if invite context fails
            }
        },
        async createThirdPersonSession() {
            try {
                if (!this.assessment || !(this.assessment._id || this.assessment.id)) return;
                if (!this.$store.state.token) return;

                const payload = {
                    assessmentId: this.assessment._id || this.assessment.id,
                    isThirdPerson: true,
                    thirdPersonParticipantId: this.thirdPersonParticipantId,
                    thirdPersonInvitationId: this.thirdPersonInvitationId,
                    thirdPersonForUserId: this.thirdPersonForUserId
                };

                if (this.isChildThirdPerson) {
                    payload.isChildThirdPerson = true;
                    payload.childThirdPersonParticipantId = this.thirdPersonParticipantId;
                    payload.childThirdPersonProfileId = this.childProfileId;
                }

                const res = await this.$axios.$post('/api/sessions', payload, {
                    headers: { Authorization: `Bearer ${this.$store.state.token}` }
                });
                const session = res.session || res;
                this.sessionId = session._id || session.id;
            } catch (err) {
                console.error('Error creating 3rd-person session:', err);
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
            this.questionPage = 0;

            // Guest mode: track in memory, save on completion via guest-complete endpoint
            if (this.isGuest) {
                if (isFinal) {
                    this.calculateTotals();
                    await this.submitGuestCompletion();
                }
            } else if (this.sessionId) {
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

                    const answerPayload = {
                        questionId,
                        response: trait,
                        nextQuestionIndex,
                        isFinal,
                        score: scorePayload
                    };

                    const activeChild = this.$store.state.activeChildProfile;
                    if (activeChild && activeChild._id) {
                        answerPayload.childProfileId = activeChild._id;
                    }

                    await this.$axios.$post(
                        `/api/sessions/${this.sessionId}/answer`,
                        answerPayload,
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
        async submitGuestCompletion() {
            try {
                await this.$axios.$post('/api/child-participants/guest-complete', {
                    childParticipantId: this.thirdPersonParticipantId,
                    invitationId: this.thirdPersonInvitationId,
                    scoreBreakdown: {
                        D: Number(this.DPercentage),
                        I: Number(this.IPercentage),
                        S: Number(this.SPercentage),
                        C: Number(this.CPercentage)
                    }
                });
            } catch (err) {
                console.error('Error saving guest completion:', err);
            }
        },
        openBreakdown() {
            this.breakdownModal = true;
        },
        closeBreakdown() {
            this.breakdownModal = false;
            this.hasViewedBreakdown = true;
            if (this.isGuest) {
                this.$router.push('/thank-you-participant?childName=' + encodeURIComponent(this.thirdPersonInviterName));
            } else if (this.$store.state.loggedIn && !this.showRatingPopup) {
                setTimeout(() => { this.showRatingPopup = true; }, 500);
            }
        },
        async goToInvite() {
            this.showInviteModal = true;
            this.inviteSelectedId = null;
            this.inviteNewExpanded = false;
            this.inviteNewName = '';
            this.inviteNewEmail = '';
            this.inviteError = '';
            this.inviteSuccess = '';

            try {
                const res = await this.$axios.$get('/api/participants');
                this.inviteParticipants = res || [];
            } catch (err) {
                console.error('Error fetching participants:', err);
                this.inviteParticipants = [];
            }
        },
        closeInviteModal() {
            this.showInviteModal = false;
        },
        selectParticipant(id) {
            this.inviteNewExpanded = false;
            this.inviteNewName = '';
            this.inviteNewEmail = '';
            this.inviteSelectedId = id;
            this.inviteError = '';
        },
        toggleNewContact() {
            this.inviteNewExpanded = !this.inviteNewExpanded;
            if (this.inviteNewExpanded) {
                this.inviteSelectedId = null;
            }
            this.inviteError = '';
        },
        async submitInvite() {
            this.inviteError = '';
            this.inviteSuccess = '';

            const isNew = this.inviteNewExpanded && (this.inviteNewName || this.inviteNewEmail);

            if (!isNew && !this.inviteSelectedId) {
                this.inviteError = 'Please select a contact or add a new one.';
                return;
            }

            if (isNew) {
                if (!this.inviteNewName.trim() || !this.inviteNewEmail.trim()) {
                    this.inviteError = 'Name and email are required for a new contact.';
                    return;
                }
            }

            this.inviteLoading = true;

            try {
                let participantId;

                if (isNew) {
                    const created = await this.$axios.$post('/api/participants', {
                        name: this.inviteNewName.trim(),
                        email: this.inviteNewEmail.trim()
                    });
                    participantId = created._id;
                    this.inviteParticipants.push(created);
                } else {
                    participantId = this.inviteSelectedId;
                }

                await this.$axios.$post(`/api/participants/${participantId}/invite`, {
                    assessmentSlug: this.assessmentSlug
                });

                this.inviteSuccess = 'Invite sent!';
                setTimeout(() => { this.closeInviteModal(); }, 1200);
            } catch (err) {
                const status = err.response && err.response.status;
                if (status === 409) {
                    this.inviteError = 'This person has already been invited to this assessment.';
                } else {
                    this.inviteError = (err.response && err.response.data && err.response.data.message) || 'Failed to send invite. Please try again.';
                }
            } finally {
                this.inviteLoading = false;
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

        .third-person-banner {
            position: relative;
            z-index: 3;
            background: linear-gradient(135deg, #12304d, #1666ff);
            color: #fff;
            text-align: center;
            padding: 10px 20px;
            font-size: 14px;
            font-family: $nunito-family;
            strong { color: #ffbd05; }
        }

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
            min-height: 100vh;
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
                margin-bottom: 20px;
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

        .post-breakdown-card-wrap {
            display: flex;
            justify-content: center;
            margin-top: 24px;
            margin-bottom: 60px;
            position: relative;
            z-index: 5000;
        }

        .post-breakdown-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
            padding: 24px 32px;
            width: fit-content;

            .pba-label {
                margin: 0 0 16px;
                font-size: 13px;
                font-weight: 600;
                color: #999;
                text-align: center;
                letter-spacing: 0.02em;
            }

            .pba-buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 16px;
            }

            .pba-icon {
                width: 16px;
                height: 16px;
                flex-shrink: 0;
            }

            button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                width: auto;
                height: auto;
                padding: 13px 28px;
                font-size: 15px;
                font-family: $nunito-family;
                font-weight: 700;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: none;
                transition: transform 0.2s ease, box-shadow 0.2s ease;

                &:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                &:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
                }
            }

            .pba-filled {
                background-color: #008b67;
                color: #fff;
                border: none;
            }

            .pba-outline {
                background: transparent;
                color: #008b67;
                border: 1.5px solid #008b67;
            }
        }
    }
}

.modal-close {
    color: #e93d2f;
    font-size: 12pt;
    position: absolute;
    right: 30px;
    top: 10px;
    width: 32px;
    height: 32px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    overflow-x: hidden;
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

        .title button {
            display: none;
        }

        .questionnaire {
            .hero-illustration {
                display: none;
            }

            .container {
                margin-left: 0;
                padding: 20px 16px 40px;
                min-height: auto;
            }

            .post-breakdown-card-wrap {
                padding: 0 8px;
            }

            .post-breakdown-card {
                padding: 20px 16px;
                width: auto;

                .pba-buttons {
                    flex-direction: column;
                    gap: 12px;
                }

                button {
                    width: 100%;
                    justify-content: center;
                }
            }
        }
    }
}

/* ── Invite Modal ─────────────────────────────────── */

.invite-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 900000;
    padding: 20px;
}

.invite-modal {
    position: relative;
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    width: 100%;
    max-width: 460px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
    font-family: $nunito-family;
    color: #12304d;

    &__close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        border: none;
        background: none;
        font-size: 22px;
        color: #999;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: none;
        transition: background 0.15s;

        &:hover {
            background: #f0f0f0;
            color: #333;
            transform: none;
        }
    }

    &__title {
        margin: 0 0 16px;
        font-size: 20px;
        font-weight: 700;
        color: #12304d;
    }

    &__badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #f0f7f4;
        color: #008b67;
        font-size: 13px;
        font-weight: 700;
        padding: 8px 16px;
        border-radius: 50px;
        border: 1px solid #d0e8dd;
        margin-bottom: 20px;
    }

    &__badge-icon {
        width: 15px;
        height: 15px;
        flex-shrink: 0;
    }

    &__section {
        margin-bottom: 12px;
    }

    &__section-label {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #999;
        margin: 0 0 8px;
    }

    &__contacts {
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 200px;
        overflow-y: auto;
        border: 1px solid #e8ecf0;
        border-radius: 10px;
    }

    &__contact {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 14px;
        cursor: pointer;
        transition: background 0.12s;

        &:not(:last-child) {
            border-bottom: 1px solid #f0f2f5;
        }

        &:hover {
            background: #f8fafb;
        }

        &.is-selected {
            background: #f0f7f4;
        }
    }

    &__radio {
        width: 18px;
        height: 18px;
        border: 2px solid #c0c8d0;
        border-radius: 50%;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.15s;

        .is-selected & {
            border-color: #008b67;
        }
    }

    &__radio-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #008b67;
    }

    &__contact-info {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    &__contact-name {
        font-size: 14px;
        font-weight: 700;
        color: #12304d;
        line-height: 1.2;
    }

    &__contact-email {
        font-size: 12px;
        color: #888;
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__empty {
        background: #f8fafb;
        border-radius: 10px;
        padding: 16px 20px;
        margin-bottom: 12px;

        p {
            margin: 0;
            font-size: 13px;
            color: #888;
            text-align: center;
        }
    }

    /* Collapsible new contact */
    &__new-section {
        margin-bottom: 20px;
    }

    &__new-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: auto;
        height: auto;
        padding: 8px 0;
        background: none;
        border: none;
        box-shadow: none;
        font-size: 13px;
        font-weight: 700;
        color: #008b67;
        cursor: pointer;
        font-family: $nunito-family;

        &:hover {
            color: darken(#008b67, 8%);
            transform: none;
        }
    }

    &__chevron {
        width: 16px;
        height: 16px;
        transition: transform 0.2s ease;

        &.is-open {
            transform: rotate(180deg);
        }
    }

    &__new-fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 10px;
    }

    &__input {
        width: 100%;
        padding: 10px 14px;
        font-size: 14px;
        font-family: $nunito-family;
        border: 1.5px solid #dde3ea;
        border-radius: 10px;
        outline: none;
        box-sizing: border-box;
        transition: border-color 0.15s;

        &:focus {
            border-color: #008b67;
        }

        &::placeholder {
            color: #b0b8c0;
        }
    }

    &__error {
        font-size: 13px;
        font-weight: 600;
        color: #e93d2f;
        margin: 0 0 12px;
    }

    &__success {
        font-size: 13px;
        font-weight: 600;
        color: #008b67;
        margin: 0 0 12px;
    }

    &__actions {
        display: flex;
        gap: 12px;
    }

    &__send {
        flex: 1;
        width: auto;
        height: auto;
        padding: 12px 24px;
        border: none;
        border-radius: 50px;
        background: #008b67;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        font-family: $nunito-family;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.15s;

        &:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 139, 103, 0.3);
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }
    }

    &__cancel {
        width: auto;
        height: auto;
        padding: 12px 24px;
        border: 1.5px solid #dde3ea;
        border-radius: 50px;
        background: #fff;
        color: #666;
        font-size: 15px;
        font-weight: 700;
        font-family: $nunito-family;
        cursor: pointer;
        box-shadow: none;
        transition: background 0.15s;

        &:hover {
            background: #f5f5f5;
            transform: none;
        }
    }
}

/* slide-down transition for new contact fields */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.2s ease;
    overflow: hidden;
}

.slide-down-enter,
.slide-down-leave-to {
    opacity: 0;
    max-height: 0;
    padding-top: 0;
}

.slide-down-enter-to,
.slide-down-leave {
    opacity: 1;
    max-height: 120px;
}

@media (max-width: 480px) {
    .invite-modal {
        padding: 24px 20px;
        border-radius: 12px;

        &__actions {
            flex-direction: column;
        }
    }
}
.pagination-controls {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid #eee;
    flex-wrap: wrap;
}
.page-btn {
    background: transparent;
    border: 1.5px solid #213c85;
    color: #213c85;
    border-radius: 50px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    box-shadow: none;
    transition: all 0.15s;
    width: auto;
    height: auto;
    line-height: 1.4;
}
.page-btn:hover {
    background: #213c85;
    color: #fff;
    transform: none;
}
.next-btn {
    margin-left: auto;
}
.page-indicator {
    font-size: 13px;
    color: #999;
}
</style>