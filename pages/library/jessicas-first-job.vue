<template>
    <div>
        <section class="page">
            <main-nav></main-nav>

            <section class="title">
                <button @click="jumpToLibrary" class="teal">Library</button>
                <div class="shadow">
                    <div style="padding: 30px 0 20px 0;">
                        <h1>Jessica's First Job!</h1>
                        <h3 class="chapter" v-html="questions[currentQuestion - 1].chapter"></h3>
                    </div>
                </div>
            </section>

            <section class="questionnaire">
                <img src="~/assets/library/first-job.jpg" alt="image of a woman at job" class="bookcaseLeft" />
                <div class="container">
                    <div v-if="currentQuestion !== totalQuestions" :key="currentQuestion">
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

                    <div v-else>
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
                            <button class="gold conscientiousness" @click="breakdownModal = true">See Breakdown</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <!-- Breakdown MODAL -->
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
                                    <li>This is your D percentage: {{ this.DPercentage }}</li>
                                    <li>This is your I percentage: {{ this.IPercentage }}</li>
                                    <li>This is your S percentage: {{ this.SPercentage }}</li>
                                    <li>This is your C percentage: {{ this.CPercentage }}</li>
                                </ul>
                            </div>
                            <div class="col-8">
                                <h5>This your personality type and description.</h5>
                                <hr class="shortLine bottom" />
                                <div v-if="topScore === 'D'">
                                    <p class="type"><strong>{{ this.DstyleTitle }}</strong> {{ this.DstyleDescription }}
                                    </p>
                                </div>
                                <div v-if="topScore === 'I'">
                                    <p class="type"><strong>{{ this.IstyleTitle }}</strong> {{ this.IstyleDescription }}
                                    </p>
                                </div>
                                <div v-if="topScore === 'S'">
                                    <p class="type"><strong>{{ this.SstyleTitle }}</strong> {{ this.SstyleDescription }}
                                    </p>
                                </div>
                                <div v-else-if="topScore === 'C'">
                                    <p class="type"><strong>{{ this.CstyleTitle }}</strong> {{ this.CstyleDescription }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </transition>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: 'The Assessment Library | Jessica\'s First Job',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: ''
                }
            ],
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                    type: 'application/ld+json'
                }
            ]
        }
    },
    data() {
        return {
            currentQuestion: 1,
            totalQuestions: 26,
            topScore: '',
            selectedAnswers: [],
            DPercentage: 0,
            IPercentage: 0,
            SPercentage: 0,
            CPercentage: 0,
            DstyleTitle: 'The Leader',
            IstyleTitle: 'The Motivator',
            SstyleTitle: 'The Supporter',
            CstyleTitle: 'The Analyzer',
            DstyleDescription: ` - Driven and focused on results, individuals with a dominant personality are natural leaders. They thrive in high-pressure environments and excel at making decisions quickly. Motivated by challenges, they take charge and lead with confidence.`,
            IstyleDescription: ` - Social, enthusiastic, and persuasive, Influential individuals excel in inspiring and motivating others. They are natural communicators and thrive in collaborative environments. Their positivity and energy help them connect with and engage their teams.`,
            SstyleDescription: ` - Calm, dependable, and empathetic, Steady individuals provide stability in their teams. They are great listeners, value harmony, and excel in creating supportive environments. Their patience and consistency make them reliable team players.`,
            CstyleDescription: ` - Methodical and precise, Conscientious individuals are detail-oriented and strive for perfection. They excel in analyzing data, ensuring accuracy, and maintaining high standards. Their focus on quality and structure makes them invaluable in tasks requiring attention to detail.`,
            breakdownModal: false,
            isClient: false,
            questions: [

                // -----------------------------------Chapter 1--------------------------------

                // --------------------------------Question1--------------------------------1
                {
                    chapter: "Chapter 1: First Day, Fresh Start",
                    timeline: `Orientation Morning`,
                    question: `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica, 30, stepped through the revolving doors of BrightPath Analytics—her first role since finishing college. The lobby hummed with elevator chimes and the smell of fresh coffee. She smoothed her blazer, feeling a mix of nerves and excitement as she clipped on a visitor badge and followed the signs to onboarding.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her new supervisor, Maya, handed her a slim laptop and a welcome folder. “Team kickoff in the glass conference room in ten,” Maya said with a warm smile. Jessica glanced over the agenda—introductions, project preview, and a short working session.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica paused outside the conference room, hearing friendly chatter inside and seeing slides queued on a big screen.</p>
          `,
                    answers: [
                        { text: `She took a steady breath, walked in first, and opened with a crisp introduction that set a focused tone for the meeting.`, value: 1, nextQuestion: 2 }, // D
                        { text: `She entered with an easy smile, greeting people by name from their badges and sparking light conversation.`, value: 2, nextQuestion: 3 }, // I
                        { text: `She slipped into a seat, watched how the group interacted, and waited for the right moment to contribute.`, value: 3, nextQuestion: 4 }, // S
                        { text: `She settled quietly near the slides, reviewing the agenda and noting the structure so she could follow along.`, value: 4, nextQuestion: 5 }, // C
                    ]
                },

                // -----------------------------------Chapter 2--------------------------------

                // --------------------------------Question2D--------------------------------2
                {
                    chapter: 'Chapter 2: The Kickoff',
                    timeline: `Late Morning – Team Kickoff`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica’s confident opener helped the meeting start on time. The team reviewed a customer-retention project with a tight pilot date. Afterward, Maya pulled her aside. “Nice presence,” she said. “We’ll need someone to drive a workstream. Interested?”</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica knew first impressions mattered. Taking visible responsibility could build momentum—if she chose her next move wisely.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Considering her options, she decided to respond in a way that matched how she wanted to show up.</p>
            `,
                    answers: [
                        { text: "Volunteer to own a deliverable and outline a quick action plan to get the pilot moving.", value: 1, nextQuestion: 6 }, // D
                        { text: "Suggest a short meet-and-greet later so teammates can connect and swap ideas.", value: 2, nextQuestion: 6 }, // I
                        { text: "Offer to support an existing workstream and keep things running smoothly.", value: 3, nextQuestion: 6 }, // S
                        { text: "Ask clarifying questions about scope, data sources, and success criteria before accepting.", value: 4, nextQuestion: 6 }, // C
                    ]
                },

                // --------------------------------Question2I--------------------------------3
                {
                    chapter: 'Chapter 2: The Kickoff',
                    timeline: `Late Morning – Team Kickoff`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inside the glass room, Jessica’s friendly intro loosened shoulders and sparked chatter. The project brief promised cross-team collaboration and a fast pilot. Maya noticed the way the group leaned in when Jessica spoke and asked if she’d help coordinate early communication.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica weighed how to keep energy high without losing focus on the deadline.</p>
            `,
                    answers: [
                        { text: "Set bold targets and energize the group to move quickly toward them.", value: 1, nextQuestion: 6 }, // D
                        { text: "Plan quick huddles and an open chat to keep ideas flowing and people engaged.", value: 2, nextQuestion: 6 }, // I
                        { text: "Pair up with key teammates to build supportive relationships for the long haul.", value: 3, nextQuestion: 6 }, // S
                        { text: "Create a shared checklist so everyone sees expectations and quality bars.", value: 4, nextQuestion: 6 }, // C
                    ],
                },

                // --------------------------------Question2S--------------------------------4
                {
                    chapter: 'Chapter 2: The Kickoff',
                    timeline: `Late Morning – Team Kickoff`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica observed quietly, noting who asked questions and who preferred to listen. When she spoke, it was to connect dots and make sure quieter voices were included. The room relaxed.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Afterward, Maya asked her to help keep coordination calm and consistent as the pilot ramped up.</p>
            `,
                    answers: [
                        { text: "Draft a simple path to milestone one and keep everyone marching toward it.", value: 1, nextQuestion: 6 }, // D
                        { text: "Plan a short, positive check-in where people can share wins and ideas.", value: 2, nextQuestion: 6 }, // I
                        { text: "Offer steady support and predictable updates so no one feels rushed.", value: 3, nextQuestion: 6 }, // S
                        { text: "Clarify roles, timelines, and definitions of done to prevent surprises.", value: 4, nextQuestion: 6 }, // C
                    ],
                },

                // --------------------------------Question2C--------------------------------5
                {
                    chapter: 'Chapter 2: The Kickoff',
                    timeline: `Late Morning – Team Kickoff`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica listened and captured details: data fields, sample sizes, and handoffs. When she chimed in, she framed trade-offs clearly. Heads nodded around the table.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maya asked if she’d take point on requirements for the first test cohort.</p>
            `,
                    answers: [
                        { text: "Map the objective and set near-term goals to keep velocity high.", value: 1, nextQuestion: 6 }, // D
                        { text: "Invite a short brainstorming session to keep the team excited and connected.", value: 2, nextQuestion: 6 }, // I
                        { text: "Offer to coordinate quietly, keeping progress steady and predictable.", value: 3, nextQuestion: 6 }, // S
                        { text: "Create a concise spec: inputs, outputs, and acceptance tests.", value: 4, nextQuestion: 6 }, // C
                    ],
                },

                // -----------------------------------Chapter 3--------------------------------6

                {
                    chapter: 'Chapter 3: The First Sprint',
                    timeline: `Afternoon – Week 1`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the afternoon of her first week, Jessica understood the team’s rhythms. A sprint board filled with sticky notes showed promise—and bottlenecks. A pilot review loomed on the calendar.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maya pinged her for a status chat. “We’ll need strong progress before Friday,” she said.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica considered how to respond under pressure:</p>
            `,
                    answers: [
                        { text: "Own the most critical tasks and push for quick wins to unblock the team.", value: 1, nextQuestion: 7 }, // D
                        { text: "Host a creative huddle to surface ideas and re-energize everyone.", value: 2, nextQuestion: 8 }, // I
                        { text: "Lay out a calm plan and sequence the work to reduce stress.", value: 3, nextQuestion: 9 }, // S
                        { text: "Audit the board, clarify dependencies, and reset estimates.", value: 4, nextQuestion: 10 }, // C
                    ],
                },

                // --------------------------------Question4D--------------------------------7
                {
                    chapter: 'Chapter 4: Making Calls',
                    timeline: `End of Week 1`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Owning the hard tasks gave the sprint a jolt. Jessica set daily touchpoints and trimmed distractions. People appreciated the clarity.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the review neared, she had to choose how to drive the final push.</p>
            `,
                    answers: [
                        { text: "Press forward decisively and remove any blockers on the spot.", value: 1, nextQuestion: 11 }, // D
                        { text: "Rally the team with a quick, upbeat sync to finish strong together.", value: 2, nextQuestion: 11 }, // I
                        { text: "Slow the pace slightly to ensure each person feels supported.", value: 3, nextQuestion: 11 }, // S
                        { text: "Break remaining work into precise, trackable steps.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question4I--------------------------------8
                {
                    chapter: 'Chapter 4: Making Calls',
                    timeline: `End of Week 1`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The brainstorm lifted the mood. Ideas flowed, and volunteers stepped up. Now the team needed direction without losing the spark.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica weighed her next move.</p>
            `,
                    answers: [
                        { text: "Channel the energy into bold, immediate actions.", value: 1, nextQuestion: 11 }, // D
                        { text: "Keep morale high with brief, fun check-ins during the push.", value: 2, nextQuestion: 11 }, // I
                        { text: "Touch base one-on-one to make sure each person is comfortable.", value: 3, nextQuestion: 11 }, // S
                        { text: "Publish crisp guidelines so everyone knows the bar and the plan.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question4S--------------------------------9
                {
                    chapter: 'Chapter 4: Making Calls',
                    timeline: `End of Week 1`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A clear, calm plan steadied the sprint. Tension faded. With the review tomorrow, Jessica considered how to keep momentum without creating chaos.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She decided to…</p>
            `,
                    answers: [
                        { text: "Drive the team faster toward the deadline with firm priorities.", value: 1, nextQuestion: 11 }, // D
                        { text: "Add a touch of levity and collaboration to keep spirits up.", value: 2, nextQuestion: 11 }, // I
                        { text: "Confirm everyone’s tasks and be available for support.", value: 3, nextQuestion: 11 }, // S
                        { text: "Tighten the timeline and milestone checklist.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question4C--------------------------------10
                {
                    chapter: 'Chapter 4: Making Calls',
                    timeline: `End of Week 1`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clarifying dependencies revealed a few risks. Jessica flagged them early and aligned handoffs across teams.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now she needed the best final-stretch approach.</p>
            `,
                    answers: [
                        { text: "Adopt a bolder stance and push the pace to deliver.", value: 1, nextQuestion: 11 }, // D
                        { text: "Keep people engaged with recognition and quick wins.", value: 2, nextQuestion: 11 }, // I
                        { text: "Ensure each person has what they need and feels supported.", value: 3, nextQuestion: 11 }, // S
                        { text: "Lock the plan with detailed steps and quality gates.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question5--------------------------------11
                {
                    chapter: 'Chapter 5: Review Day',
                    timeline: `Week 2 – Morning`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Review day arrived. Jessica walked the room through the pilot progress, crisp slides and real results. The executive panel nodded along.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A new email popped up afterward: “Phase Two: Larger Cohort, Multi-team Coordination.” The stakes rose—and so did the opportunity.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica chose how to guide the next leg:</p>
            `,
                    answers: [
                        { text: "Take command of the most impactful path to the goal.", value: 1, nextQuestion: 12 }, // D
                        { text: "Keep energy high and celebrate milestones to sustain momentum.", value: 2, nextQuestion: 13 }, // I
                        { text: "Check in with each partner team to ensure smooth handoffs.", value: 3, nextQuestion: 14 }, // S
                        { text: "Double-check data quality and refine the plan before scaling.", value: 4, nextQuestion: 15 }, // C
                    ],
                },

                // --------------------------------Question6D--------------------------------12
                {
                    chapter: 'Chapter 6: Bigger Stage',
                    timeline: `Week 3 – Midweek`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With more teams involved, Jessica drove crisp stand-ups and decisions. When blockers surfaced, she cleared them swiftly.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As deadlines converged, she picked a finish-line tactic.</p>
            `,
                    answers: [
                        { text: "Tighten focus: results first, distractions later.", value: 1, nextQuestion: 16 }, // D
                        { text: "Motivate with urgency while keeping spirits up.", value: 2, nextQuestion: 16 }, // I
                        { text: "Break work into tiny, supported steps for each owner.", value: 3, nextQuestion: 16 }, // S
                        { text: "Run one last quality sweep to ensure no surprises.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question6I--------------------------------13
                {
                    chapter: 'Chapter 6: Bigger Stage',
                    timeline: `Week 3 – Midweek`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica amped up connection—quick recognitions, open chat, and shared wins. The room buzzed again.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To land the phase, she decided to…</p>
            `,
                    answers: [
                        { text: "Set sharp targets and pace the team toward them.", value: 1, nextQuestion: 16 }, // D
                        { text: "Keep enthusiasm high with brief, energizing touchpoints.", value: 2, nextQuestion: 16 }, // I
                        { text: "Offer supportive one-on-ones for anyone feeling stretched.", value: 3, nextQuestion: 16 }, // S
                        { text: "Delegate clearly with quality expectations documented.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question6S--------------------------------14
                {
                    chapter: 'Chapter 6: Bigger Stage',
                    timeline: `Week 3 – Midweek`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica noticed the pace wearing on a few teammates. She brought a steady presence, reducing noise and clarifying priorities.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the close, she chose to…</p>
            `,
                    answers: [
                        { text: "Push a bit faster and keep eyes on the deadline.", value: 1, nextQuestion: 16 }, // D
                        { text: "Maintain positivity and collaboration to finish strong.", value: 2, nextQuestion: 16 }, // I
                        { text: "Continue one-to-one support to balance workload.", value: 3, nextQuestion: 16 }, // S
                        { text: "Review progress carefully to catch any gaps.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question6C--------------------------------15
                {
                    chapter: 'Chapter 6: Bigger Stage',
                    timeline: `Week 3 – Midweek`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica triple-checked the metrics and felt confident the plan would hold. One more decision remained: how to steer the final sprint.</p>
            `,
                    answers: [
                        { text: "Lead the charge with crisp, timely calls.", value: 1, nextQuestion: 16 }, // D
                        { text: "Keep people energized and focused on the impact.", value: 2, nextQuestion: 16 }, // I
                        { text: "Encourage balance and prevent last-minute stress.", value: 3, nextQuestion: 16 }, // S
                        { text: "Conduct a thorough last review to ensure accuracy.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question7--------------------------------16
                {
                    chapter: 'Chapter 7: Growing Trust',
                    timeline: `Month 2 – Monday`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phase Two shipped. Jessica’s judgment earned trust beyond her immediate team. Soon, a cross-functional initiative launched—and a seasoned analyst named Priya joined to partner with her.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica considered how to set the tone with her new teammate.</p>
            `,
                    answers: [
                        { text: "Set clear expectations early and define ownership.", value: 1, nextQuestion: 17 }, // D
                        { text: "Welcome Priya enthusiastically and spark collaborative energy.", value: 2, nextQuestion: 18 }, // I
                        { text: "Build a reliable cadence and create space for questions.", value: 3, nextQuestion: 19 }, // S
                        { text: "Co-design a detailed plan with data checks and milestones.", value: 4, nextQuestion: 20 }, // C
                    ],
                },

                // --------------------------------Question8D--------------------------------17
                {
                    chapter: 'Chapter 8: Wider Impact',
                    timeline: `Month 2 – Late Week`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With roles set, velocity rose. Jessica tracked outcomes and kept the bigger picture visible. Priya appreciated the decisiveness.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As scope expanded, Jessica weighed how to keep results sharp.</p>
            `,
                    answers: [
                        { text: "Maintain firm goals and deadlines that cut through noise.", value: 1, nextQuestion: 21 }, // D
                        { text: "Invite Priya to champion team energy while staying on pace.", value: 2, nextQuestion: 21 }, // I
                        { text: "Offer frequent check-ins to keep everyone supported.", value: 3, nextQuestion: 21 }, // S
                        { text: "Refine the plan into crisp tasks before execution.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question8I--------------------------------18
                {
                    chapter: 'Chapter 8: Wider Impact',
                    timeline: `Month 2 – Late Week`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica and Priya energized meetings, turning updates into idea sessions. Momentum grew, and leadership noticed.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next, Jessica focused on sustaining both pace and connection.</p>
            `,
                    answers: [
                        { text: "Set ambitious but reachable targets to aim for together.", value: 1, nextQuestion: 21 }, // D
                        { text: "Use short, creative jams to keep the spark alive.", value: 2, nextQuestion: 21 }, // I
                        { text: "Check individually that workload feels healthy.", value: 3, nextQuestion: 21 }, // S
                        { text: "Mind the details without losing the upbeat tone.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question8S--------------------------------19
                {
                    chapter: 'Chapter 8: Wider Impact',
                    timeline: `Month 2 – Late Week`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica prioritized stability. Priya settled in quickly, trusting the predictable rhythm.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To balance care with speed, Jessica chose to…</p>
            `,
                    answers: [
                        { text: "Nudge the pace forward with clear priority calls.", value: 1, nextQuestion: 21 }, // D
                        { text: "Keep engagement high with collaborative moments.", value: 2, nextQuestion: 21 }, // I
                        { text: "Maintain steady support and approachable check-ins.", value: 3, nextQuestion: 21 }, // S
                        { text: "Track tasks closely and align on schedule details.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question8C--------------------------------20
                {
                    chapter: 'Chapter 8: Wider Impact',
                    timeline: `Month 2 – Late Week`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica and Priya diagrammed the next phase on a whiteboard—inputs, owners, quality checks. Confidence rose.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Still, she had to decide how tightly to hold to process versus speed.</p>
            `,
                    answers: [
                        { text: "Prioritize rapid delivery while guarding key standards.", value: 1, nextQuestion: 21 }, // D
                        { text: "Keep people engaged and aware of why the work matters.", value: 2, nextQuestion: 21 }, // I
                        { text: "Check that the team feels supported as details intensify.", value: 3, nextQuestion: 21 }, // S
                        { text: "Lean into thorough reviews to keep quality high.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question9--------------------------------21
                {
                    chapter: 'Chapter 9: The Cross-Company Launch',
                    timeline: `Month 3 – Planning Week`,
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The pilot’s success unlocked a company-wide launch. Leaders asked Jessica to help shape strategy while Priya coordinated execution.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With more eyes watching, Jessica chose her approach.</p>
            `,
                    answers: [
                        { text: "Own the strategic outline and let Priya drive daily motion.", value: 1, nextQuestion: 22 }, // D
                        { text: "Inspire the broader team and co-lead upbeat working sessions.", value: 2, nextQuestion: 23 }, // I
                        { text: "Keep a steady cadence and protect team well-being.", value: 3, nextQuestion: 24 }, // S
                        { text: "Co-author a robust plan with metrics and reviews.", value: 4, nextQuestion: 25 }, // C
                    ],
                },

                // --------------------------------Question10D--------------------------------22
                {
                    chapter: 'Chapter 10: Visible Leadership',
                    timeline: 'Month 3 – Execution Window',
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica’s clear strategy aligned multiple groups. Status meetings were crisp and outcomes-oriented. Confidence in the launch grew.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near the finish, she considered one last push.</p>
            `,
                    answers: [
                        { text: "Raise the bar and drive toward an ambitious final date.", value: 1, nextQuestion: 26 }, // D
                        { text: "Rally the org with one motivating all-hands checkpoint.", value: 2, nextQuestion: 26 }, // I
                        { text: "Create breathing room so teams finish well without burnout.", value: 3, nextQuestion: 26 }, // S
                        { text: "Run a final quality pass across every stream.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------Question10I--------------------------------23
                {
                    chapter: 'Chapter 10: Visible Leadership',
                    timeline: 'Month 3 – Execution Window',
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The cross-company energy was contagious. Jessica and Priya kept recognition front and center, and updates felt like celebrations of progress.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To land the launch, Jessica chose to…</p>
            `,
                    answers: [
                        { text: "Clarify expectations and push through the final yards.", value: 1, nextQuestion: 26 }, // D
                        { text: "Host a brief, inspiring sync to carry momentum over the line.", value: 2, nextQuestion: 26 }, // I
                        { text: "Check individually that no one is overloaded before go-live.", value: 3, nextQuestion: 26 }, // S
                        { text: "Conduct a last joint review with Priya for accuracy.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------Question10S--------------------------------24
                {
                    chapter: 'Chapter 10: Visible Leadership',
                    timeline: 'Month 3 – Execution Window',
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The final stretch can fray nerves, but Jessica kept a calm center. She ensured resources were available and no one felt stranded.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her closing approach would be to…</p>
            `,
                    answers: [
                        { text: "Increase urgency with clear direction for the home stretch.", value: 1, nextQuestion: 26 }, // D
                        { text: "Keep morale high and celebrate near-wins on the way.", value: 2, nextQuestion: 26 }, // I
                        { text: "Provide steady support so tasks finish comfortably.", value: 3, nextQuestion: 26 }, // S
                        { text: "Track each checklist item carefully before moving on.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------Question10C--------------------------------25
                {
                    chapter: 'Chapter 10: Visible Leadership',
                    timeline: 'Month 3 – Execution Window',
                    question:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica scanned dashboards and spot-checked samples. Quality looked strong, but time was tight. She weighed speed against polish.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her final decision:</p>
            `,
                    answers: [
                        { text: "Prioritize swift delivery and resolve small items post-launch.", value: 1, nextQuestion: 26 }, // D
                        { text: "Motivate the group while keeping attention on what matters most.", value: 2, nextQuestion: 26 }, // I
                        { text: "Slow slightly so teams can finish at a sustainable pace.", value: 3, nextQuestion: 26 }, // S
                        { text: "Perfect details now to launch with exceptional quality.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------QuestionEND--------------------------------26
                {
                    chapter: 'The Conclusion',
                    timeline: 'Five Years Later',
                    dominanceConclusion:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica quickly became known for decisive execution. Within a year, she was leading complex launches that cut through red tape and delivered visible results. Her direct style inspired confidence when timelines were tight.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By year three she was a senior program lead, trusted to set strategy for high-impact efforts. Teams rallied around her clear calls and bias for action.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Five years in, she owned a portfolio of initiatives that reshaped customer retention at scale. Colleagues sought her when outcomes mattered most.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you lead with bold goals, fast decisions, and accountability, your natural Dominance style is your edge—keep pairing it with quick listening and win-win alignment to multiply your impact.</p>
            `,
                    influenceConclusion:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica’s gift for connection lifted every room she entered. In her first year she built cross-team bridges that accelerated pilots and made work feel fun and purposeful.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By year three she was the culture carrier for major initiatives—facilitating creative jams, telling the story of the work, and bringing out the best in partners and stakeholders.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Five years later, she guided change efforts that depended on collaboration and buy-in. Engagement scores rose wherever she worked.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you naturally energize and influence, your Strength is connection—keep pairing it with clear priorities and follow-through to turn enthusiasm into durable outcomes.</p>
            `,
                    steadinessConclusion:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica built her reputation on steadiness. She calmed hectic launches with clear rhythms, reliable updates, and a genuine care for people.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By year three, leaders tapped her to stabilize complex programs and mentor new teammates. Projects under her guidance met deadlines without drama.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Five years in, she led operations that valued trust, continuity, and thoughtful change. Teams thrived because they felt safe to do great work.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you bring balance, patience, and support, your Steadiness is a superpower—keep pairing it with timely assertiveness so your voice shapes the path, not just the pace.</p>
            `,
                    conscientiousnessConclusion:
                        `
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jessica’s precision became legendary. She prevented issues before they surfaced and elevated quality across teams.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By year three, she owned analytics and process improvements that made launches predictable and trustworthy.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Five years later, she led initiatives where accuracy and clarity were the difference between good and great. Her standards elevated everyone’s work.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you’re naturally thorough and exacting, your Conscientious style sets the bar—keep pairing it with speed decisions and visible storytelling so your insights drive action at scale.</p>
            `
                }
            ],
        };
    },
    mounted() {
        this.isClient = true;
    },
    methods: {
        selectAnswer(answer) {
            if (this.selectedAnswers.length <= 8) {
                this.selectedAnswers.push(answer.value); // Storing the value (D=1, I=2, S=3, C=4)
                this.currentQuestion = answer.nextQuestion;
            } else {
                this.currentQuestion = answer.nextQuestion;
                this.calculateTotals();
            }
        },
        jumpToLibrary(event) {
            window.location.href = '/';
            event.target.blur();
        },
        calculateTotals() {
            // Initialize counts for each personality trait
            let DCount = 0;
            let ICount = 0;
            let SCount = 0;
            let CCount = 0;

            // Loop through the selected answers and count each personality trait
            this.selectedAnswers.forEach(answer => {
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

            // Calculate total answers to get percentage
            const totalAnswers = this.selectedAnswers.length;
            const DPercentage = ((DCount / totalAnswers) * 100).toFixed(2);
            const IPercentage = ((ICount / totalAnswers) * 100).toFixed(2);
            const SPercentage = ((SCount / totalAnswers) * 100).toFixed(2);
            const CPercentage = ((CCount / totalAnswers) * 100).toFixed(2);

            // You can also store these percentages in a new data property for further use
            this.DPercentage = DPercentage;
            this.IPercentage = IPercentage;
            this.SPercentage = SPercentage;
            this.CPercentage = CPercentage;

            let topPercentage = Math.max(
                parseFloat(DPercentage),
                parseFloat(IPercentage),
                parseFloat(SPercentage),
                parseFloat(CPercentage)
            );

            if (topPercentage === parseFloat(this.DPercentage)) {
                this.topScore = 'D';
                console.log("Top personality trait: ", this.topScore);
            } else if (topPercentage === parseFloat(this.IPercentage)) {
                this.topScore = 'I';
                console.log("Top personality trait: ", this.topScore);
            } else if (topPercentage === parseFloat(this.SPercentage)) {
                this.topScore = 'S';
                console.log("Top personality trait: ", this.topScore);
            } else {
                this.topScore = 'C';
                console.log("Top personality trait: ", this.topScore);
            }

        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';


.page {
    z-index: 10;
    color: #213C85;
    position: relative;
    background: linear-gradient(to right, #1f232e 50%, #ffffff 50%);

    .container {
        padding: 0 20px 0 20px;
    }

    .shadow {
        box-shadow: 0px 30px 10px 10px rgba(0, 0, 0, 0.1);
    }

    .title {
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
            margin-bottom: 0px;
            margin-top: 0px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            line-height: 36px;
        }

        h3 {
            margin-top: 0px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            margin-bottom: 5px;
        }
    }

    .questionnaire {
        margin: 0 0 0px 0;
        padding: 0 0 0px 0;
        font-family: $nunito-family;
        min-height: 58vh;
        position: relative;

        .container {
            position: relative;
            background: #fff;
            z-index: 1;
            min-height: 585px;
        }

        .bookcaseLeft {
            position: absolute;
            z-index: -10000;
            max-height: 61.03vh;
        }

        .chapter {
            margin: 0 0 0 0;
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
            color: #213C85;
            width: 100%;
            background: #fff;
            box-shadow: none;
            text-align: left;
            height: auto;
            line-height: 1.5em;
            margin: 0 0 0 20px;
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
                    transform: scale(.95);
                }

                &:focus {
                    transform: scale(.80);
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
    background-color: rgba(0, 0, 0, .6);
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
    color: #213C85;

    .yellowLine {
        background: #E0AD2B;
        height: 6px;
        width: 100%;
        margin: 0 auto 20px auto;
    }

    h5 {
        line-height: 1em;
        margin: 0 0 0 0;
    }

    .shortLine {
        background: #00A8FF;
        height: 6px;
        width: 250px;
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
    transition: opacity .5s;
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
    background: #00A8FF;
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
                padding: 0 16px 60px ;
            }
        }
    }

    .modal-window .container {
        top: 0px;
    }
}
</style>