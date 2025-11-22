<template>
    <div>
        <section class="page">
            <main-nav></main-nav>
            
            <section class="title">
                <button @click="jumpToLibrary" class="teal">Library</button>
                <div class="shadow">
                    <div style="padding: 30px 0 20px 0;">
                        <h1>Shane's Day at the Park!</h1>
                        <h3 class="chapter" v-html="questions[currentQuestion - 1].chapter"></h3>
                    </div>
                </div>
            </section>

            <section class="questionnaire">
                <img src="~/assets/library/boy-at-the-park.webp" alt="image of a boy at the park"
                    class="boyAtThePark" />
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
                                v-html="questions[currentQuestion - 1].timeline">
                            </p>
                            <div class="line dominance"></div>
                            <p v-html="questions[currentQuestion - 1].dominanceConclusion"></p>
                        </div>
                        <div v-if="topScore === 'I'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline">
                            </p>
                            <div class="line influence"></div>
                            <p v-html="questions[currentQuestion - 1].influenceConclusion"></p>
                        </div>
                        <div v-if="topScore === 'S'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline">
                            </p>
                            <div class="line steadiness" style="color: #0dab49;"></div>
                            <p v-html="questions[currentQuestion - 1].steadinessConclusion"></p>
                        </div>
                        <div v-else-if="topScore === 'C'">
                            <p style="font-weight: 700;" class="chapter"
                                v-html="questions[currentQuestion - 1].timeline">
                            </p>
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
    middleware: ['auth'],
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: 'The Assessment Library | Shane\'s Day At The Park',
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

            // Kid-friendly style titles/descriptions for the modal
            DstyleTitle: 'The Go-Getter',
            IstyleTitle: 'The Encourager',
            SstyleTitle: 'The Peacemaker',
            CstyleTitle: 'The Problem Solver',
            DstyleDescription: ` - You like to jump in, make things happen, and try new challenges. You’re brave, you set goals, and you help the group get moving when it’s time to play.`,
            IstyleDescription: ` - You bring smiles and energy. You love making friends, telling stories, and keeping everyone excited so the fun keeps going.`,
            SstyleDescription: ` - You’re steady, kind, and patient. You make sure everyone is included and that games feel fair, friendly, and calm.`,
            CstyleDescription: ` - You notice details and think things through. You like clear rules, careful plans, and helping the team solve tricky problems the right way.`,

            breakdownModal: false,
            isClient: false,
            questions: [

                // -----------------------------------Chapter 1--------------------------------

                // --------------------------------Question1--------------------------------1
                {
                    chapter: 'Chapter 1: Welcome to the Park',
                    timeline: `Morning`,
                    question: `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The sun peeked over the trees as Shane stepped onto the soft grass, sneakers squeaking just a little. Today was a big park day—slides, swings, and maybe even a game on the big open field. He could feel the cool morning breeze and hear kids laughing in the distance.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near the sandbox, a few kids were gathering soccer cones. By the picnic tables, others were trading snack ideas and silly jokes. At the climbing wall, a line was forming. Shane took a breath and thought about what to do first.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He looked around and made a plan to start his morning just right.</p>`,
                    answers: [
                        // Order mixed so mapping isn’t obvious
                        { text: `He walked over to the group by the cones and suggested a quick way to split teams so a game could start right away.`, value: 1, nextQuestion: 2 },   // D
                        { text: `He waved at a few kids by the picnic tables and asked if anyone wanted to try the new slide together.`, value: 2, nextQuestion: 3 },          // I
                        { text: `He noticed a younger kid looking unsure near the swings and offered to help them get started.`, value: 3, nextQuestion: 4 },                 // S
                        { text: `He checked the park map and read the sign with playground rules to decide the safest, smartest place to begin.`, value: 4, nextQuestion: 5 }, // C
                    ]
                },

                // -----------------------------------Chapter 2--------------------------------

                // --------------------------------Question2D--------------------------------2
                {
                    chapter: 'Chapter 2: First Moves',
                    timeline: `Late Morning`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane jogged to the field and pointed out a simple way to form teams: “Cones on that side, water bottles on this side!” Kids nodded, and the game started fast. The first kickoff whooshed across the grass, and everyone cheered.</p> 
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A taller kid smiled and said, “Nice idea, that made it easy.” Shane grinned but kept his eyes on the field—there was still plenty to do to keep things moving smoothly.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He wondered how to keep the game fair and the pace strong.</p>
                        `,
                    answers: [
                        { text: "He offered to be the timekeeper for quick rounds so everyone got turns and the game stayed lively.", value: 4, nextQuestion: 6 }, // C (mixed order)
                        { text: "He clapped and encouraged both teams, keeping spirits high whenever a round ended.", value: 2, nextQuestion: 6 },           // I
                        { text: "He made sure the newer players knew where to stand and felt comfortable joining in.", value: 3, nextQuestion: 6 },         // S
                        { text: "He suggested a quick challenge—first team to three goals—so everyone focused and played their best.", value: 1, nextQuestion: 6 }, // D
                    ]
                },

                // --------------------------------Question2I--------------------------------3
                {
                    chapter: 'Chapter 2: First Moves',
                    timeline: `Late Morning`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane laughed along with the kids by the picnic tables and invited a few to try the big slide. Soon, a tiny parade of friends marched up the stairs, cheering when each person zoomed down.</p> 
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One kid asked, “What should we do next?” Shane liked how everyone was smiling and wanted the fun to keep rolling.</p>
                        `,
                    answers: [
                        { text: "He proposed a quick group vote on the next activity so everyone felt part of the plan.", value: 3, nextQuestion: 6 },    // S
                        { text: "He pointed to the field and said, “Let’s try a mini relay—first team to tag the cone wins!”", value: 1, nextQuestion: 6 }, // D
                        { text: "He suggested telling a short, silly story while taking turns on the swings to keep the mood bright.", value: 2, nextQuestion: 6 }, // I
                        { text: "He grabbed a scrap paper to jot simple rules for the relay so nobody got confused.", value: 4, nextQuestion: 6 },      // C
                    ],
                },

                // --------------------------------Question2S--------------------------------4
                {
                    chapter: 'Chapter 2: First Moves',
                    timeline: `Late Morning`,
                    question:
                        `
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane knelt by the swing and showed the younger kid how to kick their legs forward and back. “You’ve got it,” he said softly, giving a gentle push. The smile that followed made Shane’s chest feel warm.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nearby, a few kids waved, inviting them to join a simple game on the grass. Shane wanted to help everyone feel included.</p>
                    `,
                    answers: [
                        { text: "He suggested partners so nobody felt left out, making sure everyone had a buddy.", value: 3, nextQuestion: 6 },        // S
                        { text: "He cheered for each try and kept everyone laughing between turns.", value: 2, nextQuestion: 6 },                      // I
                        { text: "He outlined quick turns and a clear order so the game stayed smooth.", value: 4, nextQuestion: 6 },                   // C
                        { text: "He set a goal—first team to tag all cones—so the group had something exciting to finish.", value: 1, nextQuestion: 6 }, // D
                    ],
                },

                // --------------------------------Question2C--------------------------------5
                {
                    chapter: 'Chapter 2: First Moves',
                    timeline: `Late Morning`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane read the playground sign and pointed out where running was safe and where walking made sense. He noticed a perfect spot for a relay that wouldn’t bump into the sandbox line.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A kid said, “Good eye!” Shane smiled, thinking about the best way to start without any confusion.</p>
                        `,
                    answers: [
                        { text: `He drew a quick path in the dirt so everyone could see where to go and when to tag.`, value: 4, nextQuestion: 6 },      // C
                        { text: "He called out teams and shouted, “Ready, set, go!” to get things going right away.", value: 1, nextQuestion: 6 },     // D
                        { text: "He asked if anyone was nervous and paired them with a friendly partner.", value: 3, nextQuestion: 6 },               // S
                        { text: "He hyped up the group with a fun chant before the first run.", value: 2, nextQuestion: 6 },                         // I
                    ],
                },

                // -----------------------------------Chapter 3--------------------------------6
                {
                    chapter: 'Chapter 3: Snack Time Strategy',
                    timeline: `Snack Time`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By snack time, Shane knew where the water fountain was and which bench had the best shade. Kids compared granola bars and swapped apple slices. The field was open again, and the swings had a shorter line.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane took a sip of water and looked around. The day still had plenty of adventure left. He thought about the next fun thing to try.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What should he do to keep the day rolling?</p>
                        `,
                    answers: [
                        { text: "He mapped out a short obstacle course using cones, a hopscotch square, and the big tree as a marker.", value: 4, nextQuestion: 7 }, // C -> to 7? original mapping: answers go to 7/8/9/10. Keep same mapping as original: 1->7, 2->8, 3->9, 4->10. Adjust:
                        { text: "He started a cheerful countdown and invited anyone nearby to join the next game.", value: 2, nextQuestion: 8 },                   // I
                        { text: "He checked on a couple of kids sitting out and asked if they wanted easy roles to feel included.", value: 3, nextQuestion: 9 },    // S
                        { text: "He challenged himself and a few others to try a timed run from the bench to the slide and back.", value: 1, nextQuestion: 7 },     // D (we need a D path to 7)
                    ],
                },

                // --------------------------------Question4D--------------------------------7
                {
                    chapter: 'Chapter 4: Game On',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The whistle Shane found in his pocket (okay, it was just a pretend whistle sound) made everyone laugh, but it also got attention. He set a quick pace: “Three rounds, short breaks, go!”</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The games moved fast and felt exciting. Shane liked how everyone stayed focused and how the rounds finished strong. Now it was time to keep the fun sharp.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He considered the best next step.</p>
                        `,
                    answers: [
                        { text: "He kept the rounds short and speedy so everyone stayed pumped.", value: 1, nextQuestion: 11 }, // D
                        { text: "He paused to cheer for both sides, making sure high-fives kept coming.", value: 2, nextQuestion: 11 }, // I
                        { text: "He checked that each person had a simple role they felt good about.", value: 3, nextQuestion: 11 }, // S
                        { text: "He wrote tiny score marks in the dirt so the results were clear.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question4I--------------------------------8
                {
                    chapter: 'Chapter 4: Game On',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s countdown echoed across the grass and got more kids to join. He made a goofy team name for each group, and everyone giggled.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The air felt lighter, and the games went smoother when people smiled. Still, he wanted the next part to run even better.</p>
                        `,
                    answers: [
                        { text: "He introduced a quick “switch spots” rule to keep the game moving.", value: 4, nextQuestion: 11 }, // C
                        { text: "He kept the energy up with claps and chants between turns.", value: 2, nextQuestion: 11 }, // I
                        { text: "He set a target—first team to reach the tree wins—so there was a clear finish.", value: 1, nextQuestion: 11 }, // D
                        { text: "He checked that shy kids had partners to help them feel comfy.", value: 3, nextQuestion: 11 }, // S
                    ],
                },

                // --------------------------------Question4S--------------------------------9
                {
                    chapter: 'Chapter 4: Game On',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane made sure the kids on the bench had easy ways to join—counting, cheering, or holding a cone. Smiles started popping up like bubbles.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It felt good when everyone had a place. He wanted to keep the pace steady and kind.</p>
                        `,
                    answers: [
                        { text: "He created gentle turns so no one felt rushed or skipped.", value: 3, nextQuestion: 11 }, // S
                        { text: "He encouraged quick mini-challenges so the rhythm stayed lively.", value: 1, nextQuestion: 11 }, // D
                        { text: "He suggested a cheer after each round to keep things bright.", value: 2, nextQuestion: 11 }, // I
                        { text: "He marked a simple route with two cones to prevent crowding.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question4C--------------------------------10
                {
                    chapter: 'Chapter 4: Game On',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane drew a tiny course in the dust and showed where to start, turn, and tag. It made everything feel organized and easy to follow.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Watching people zip through the path, he thought about making the next rounds even smoother.</p>
                        `,
                    answers: [
                        { text: "He added a small challenge: two hops at the turn to keep focus sharp.", value: 1, nextQuestion: 11 }, // D
                        { text: "He taught a quick chant so kids remembered the steps with a smile.", value: 2, nextQuestion: 11 }, // I
                        { text: "He paired faster runners with helpers so everyone felt supported.", value: 3, nextQuestion: 11 }, // S
                        { text: "He kept a neat tally so turns and scores stayed clear.", value: 4, nextQuestion: 11 }, // C
                    ],
                },

                // --------------------------------Question5--------------------------------11
                {
                    chapter: 'Chapter 5: Midday Momentum',
                    timeline: `Midday`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By midday, the sun felt warmer and the games had a nice rhythm. Shane noticed a fresh group of kids arriving with skateboards and jump ropes.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There was time for one more big activity before the afternoon stretched long. Shane wanted it to feel awesome for everyone.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He thought about the best next idea.</p>
                        `,
                    answers: [
                        { text: "He set a bold goal—beat the best time from earlier—so everyone had something exciting to chase.", value: 1, nextQuestion: 12 }, // D -> 12
                        { text: "He suggested a silly-hat relay (imaginary hats totally count) to keep everyone laughing.", value: 2, nextQuestion: 13 }, // I -> 13
                        { text: "He checked with each kid to see what they wanted to try and offered gentle roles for anyone unsure.", value: 3, nextQuestion: 14 }, // S -> 14
                        { text: "He reviewed the course and moved a cone to make the turns clearer and safer.", value: 4, nextQuestion: 15 }, // C -> 15
                    ],
                },

                // --------------------------------Question6D--------------------------------12
                {
                    chapter: 'Chapter 6: The Push',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane pointed to the tree and said, “Let’s try to beat our best time!” Everyone lined up, bouncing on their toes.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He liked how a clear target made people focus. Now he just needed to keep things crisp and fair.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What should he do next?</p>
                        `,
                    answers: [
                        { text: "He kept the clock tight and called quick starts to keep the pace strong.", value: 1, nextQuestion: 16 }, // D -> 16
                        { text: "He hyped each run with cheers so the energy stayed high.", value: 2, nextQuestion: 16 }, // I
                        { text: "He offered calm reminders and gave nervous runners a thumbs-up before they began.", value: 3, nextQuestion: 16 }, // S
                        { text: "He double-checked the finish line so the timing felt clear to everyone.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question6I--------------------------------13
                {
                    chapter: 'Chapter 6: The Push',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With giggles and pretend hats, the relay felt like a celebration. Shane could tell people tried harder when the mood was fun.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He wanted to guide the group toward a great finish while keeping the smiles going.</p>
                        `,
                    answers: [
                        { text: "He set quick, simple goals for each round so progress felt exciting.", value: 1, nextQuestion: 16 }, // D
                        { text: "He kept the cheers rolling and joked about “hat styles” between turns.", value: 2, nextQuestion: 16 }, // I
                        { text: "He checked in with quiet kids and made sure they felt ready for their part.", value: 3, nextQuestion: 16 }, // S
                        { text: "He clarified the tagging spot so nobody got mixed up at the finish.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question6S--------------------------------14
                {
                    chapter: 'Chapter 6: The Push',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane walked the line, offering gentle encouragement. A nervous look turned into a small grin after his quiet, “You’ve got this.”</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He wanted the last stretch to feel steady and friendly.</p>
                        `,
                    answers: [
                        { text: "He nudged the pace a little faster to keep things moving well.", value: 1, nextQuestion: 16 }, // D
                        { text: "He led a quick clap pattern to keep spirits up between runs.", value: 2, nextQuestion: 16 }, // I
                        { text: "He maintained simple turns so nobody felt rushed or skipped.", value: 3, nextQuestion: 16 }, // S
                        { text: "He reviewed the route one more time so it stayed smooth.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question6C--------------------------------15
                {
                    chapter: 'Chapter 6: The Push',
                    timeline: `Early Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane stepped the cones a bit wider and drew a clean line for tagging. It felt organized and safe, which made people run better.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A few kids thanked him for making the turn easier to see. He nodded, already thinking ahead.</p>
                        `,
                    answers: [
                        { text: "He kicked off the final round with a strong countdown and quick starts.", value: 1, nextQuestion: 16 }, // D
                        { text: "He boosted the crowd with cheers so each runner felt brave.", value: 2, nextQuestion: 16 }, // I
                        { text: "He paired a newer runner with a buddy to help them feel calm.", value: 3, nextQuestion: 16 }, // S
                        { text: "He watched the finish line closely to record times fairly.", value: 4, nextQuestion: 16 }, // C
                    ],
                },

                // --------------------------------Question7--------------------------------16
                {
                    chapter: 'Chapter 7: New Faces',
                    timeline: `Mid-Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When the relay wrapped, Shane noticed a kid named Jay arriving with a bright blue backpack and a curious smile. Jay waved shyly.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane liked meeting new friends at the park. He wanted Jay to feel welcome and ready to jump in.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He chose how to start.</p>
                        `,
                    answers: [
                        { text: "He explained the game in two quick steps and suggested they try a short round right away.", value: 1, nextQuestion: 17 }, // D -> 17
                        { text: "He told a friendly joke and invited Jay to pick a team name.", value: 2, nextQuestion: 18 }, // I -> 18
                        { text: "He offered to walk the course with Jay so it felt easy and comfortable.", value: 3, nextQuestion: 19 }, // S -> 19
                        { text: "He pointed out the cones and finish line so Jay understood exactly how it worked.", value: 4, nextQuestion: 20 }, // C -> 20
                    ],
                },

                // --------------------------------Question8D--------------------------------17
                {
                    chapter: 'Chapter 8: Team Spark',
                    timeline: `Later Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Two steps: start here, tag there,” Shane said, smiling. Jay nodded, ready to try. The first dash was quick and clean.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane liked that simple plans helped people jump in fast. Now he wanted to keep the pace strong and the fun bright.</p>
                        `,
                    answers: [
                        { text: "He set a tiny target for the next run so Jay could feel a win right away.", value: 1, nextQuestion: 21 }, // D -> 21
                        { text: "He cheered loudly for Jay and made a silly drumbeat on his knees.", value: 2, nextQuestion: 21 }, // I
                        { text: "He checked if Jay wanted a buddy for the next round.", value: 3, nextQuestion: 21 }, // S
                        { text: "He added a cone to make the turn clearer before they tried again.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question8I--------------------------------18
                {
                    chapter: 'Chapter 8: Team Spark',
                    timeline: `Later Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s joke landed, and Jay laughed, choosing “Blue Rockets” as a team name. A couple of kids joined their side with big grins.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The group felt connected, and the next round started with cheers.</p>
                        `,
                    answers: [
                        { text: "He set a playful challenge to keep everyone buzzing.", value: 1, nextQuestion: 21 }, // D
                        { text: "He led a chant so the Blue Rockets felt unstoppable.", value: 2, nextQuestion: 21 }, // I
                        { text: "He checked that no one was left out and that everyone had a turn coming.", value: 3, nextQuestion: 21 }, // S
                        { text: "He clarified where to tag so finishes stayed neat.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question8S--------------------------------19
                {
                    chapter: 'Chapter 8: Team Spark',
                    timeline: `Later Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane walked the course slowly with Jay, pointing to the start and finish while chatting about favorite snacks. Jay relaxed and smiled.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now the group could keep going together, steady and friendly.</p>
                        `,
                    answers: [
                        { text: "He nudged the pace with a short, exciting round next.", value: 1, nextQuestion: 21 }, // D
                        { text: "He kept the mood light with a quick clap rhythm.", value: 2, nextQuestion: 21 }, // I
                        { text: "He made sure everyone had a clear turn in the order.", value: 3, nextQuestion: 21 }, // S
                        { text: "He used a soft voice to remind people of the route so it stayed smooth.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question8C--------------------------------20
                {
                    chapter: 'Chapter 8: Team Spark',
                    timeline: `Later Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane pointed to each cone and explained the tag spot. Jay nodded, grateful for the clear guide.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The next run could be even better with the right touch.</p>
                        `,
                    answers: [
                        { text: "He launched a quick round to build momentum.", value: 1, nextQuestion: 21 }, // D
                        { text: "He added a happy cheer so the start felt brave.", value: 2, nextQuestion: 21 }, // I
                        { text: "He paired Jay with a teammate who promised kind support.", value: 3, nextQuestion: 21 }, // S
                        { text: "He kept the course tidy so the turn was easy to spot.", value: 4, nextQuestion: 21 }, // C
                    ],
                },

                // --------------------------------Question9--------------------------------21
                {
                    chapter: 'Chapter 9: Big Afternoon Plan',
                    timeline: `Afternoon`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The park buzzed with energy. Skateboards rolled past the path, and a kite wiggled in the sky. Shane felt proud of the day so far.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There was time for one more “big thing” before everyone had to head home. He wanted it to feel like a perfect finish.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He looked around and decided:</p>
                        `,
                    answers: [
                        { text: "He set a final target—beat the best team time by one second—and explained it fast.", value: 1, nextQuestion: 22 }, // D -> 22
                        { text: "He suggested a celebration round where everyone runs once and the group cheers the loudest.", value: 2, nextQuestion: 23 }, // I -> 23
                        { text: "He arranged the line so every kid who wanted a turn got one, no rush.", value: 3, nextQuestion: 24 }, // S -> 24
                        { text: "He adjusted two cones and marked a clearer finish to avoid ties.", value: 4, nextQuestion: 25 }, // C -> 25
                    ],
                },

                // --------------------------------Question10D--------------------------------22
                {
                    chapter: 'Chapter 10: Final Dash',
                    timeline: 'Late Afternoon',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“Last push!” Shane called. The plan was simple and bold, and kids loved the challenge. Shoes thumped the grass.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the end of the day near, he wanted it to feel strong and fair.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What would make the finish awesome?</p>
                        `,
                    answers: [
                        { text: "He kept the starts quick and the focus sharp for one more run.", value: 1, nextQuestion: 26 }, // D -> end
                        { text: "He got the crowd cheering to boost bravery for the last dash.", value: 2, nextQuestion: 26 }, // I
                        { text: "He checked that everyone who wanted a turn had one lined up.", value: 3, nextQuestion: 26 }, // S
                        { text: "He counted down clearly and watched the line to record the time right.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------Question10I--------------------------------23
                {
                    chapter: 'Chapter 10: Final Dash',
                    timeline: 'Late Afternoon',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s celebration round idea had everyone smiling. The air felt like a happy drumbeat.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;He wanted to end on a note that felt big and kind.</p>
                        `,
                    answers: [
                        { text: "He set a quick end-goal to keep the last run exciting.", value: 1, nextQuestion: 26 }, // D
                        { text: "He led one last cheer so the park echoed with laughter.", value: 2, nextQuestion: 26 }, // I
                        { text: "He made sure the turn order included anyone still waiting.", value: 3, nextQuestion: 26 }, // S
                        { text: "He checked the route so the finish line was easy to see.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------Question10S--------------------------------24
                {
                    chapter: 'Chapter 10: Final Dash',
                    timeline: 'Late Afternoon',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane looked at the line and gave a gentle nod. Every kid who wanted to play had a spot. That felt right.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now it was time to wrap up in a friendly way.</p>
                        `,
                    answers: [
                        { text: "He suggested a short, exciting final round to finish strong.", value: 1, nextQuestion: 26 }, // D
                        { text: "He kept the clapping going so each turn felt special.", value: 2, nextQuestion: 26 }, // I
                        { text: "He stayed near the line to help quieter kids feel ready.", value: 3, nextQuestion: 26 }, // S
                        { text: "He reminded everyone where to tag so the end felt neat.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------Question10C--------------------------------25
                {
                    chapter: 'Chapter 10: Final Dash',
                    timeline: 'Late Afternoon',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Two cones slid into better spots, and a simple chalk line made the finish clear. “That helps,” someone said.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The last part of the day was ready to shine.</p>
                        `,
                    answers: [
                        { text: "He kicked off one focused last round with a strong countdown.", value: 1, nextQuestion: 26 }, // D
                        { text: "He started a cheerful chant to power people to the finish.", value: 2, nextQuestion: 26 }, // I
                        { text: "He checked that the line felt calm and fair for the final turns.", value: 3, nextQuestion: 26 }, // S
                        { text: "He watched the finish closely to keep time right and clear.", value: 4, nextQuestion: 26 }, // C
                    ],
                },

                // --------------------------------QuestionEND--------------------------------26
                {
                    chapter: 'The Conclusion',
                    timeline: 'Sunset',
                    dominanceConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the sky turned orange, Shane looked over the field where the cones still made neat triangles. He had a knack for getting things started and keeping them moving. When friends needed a plan, he gave one. When a game needed a push, he brought it.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being a Go-Getter means he likes goals and action. He helps the group try new things and finish strong. People trust him to be brave and to make quick choices when it’s time to play.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s superpower is turning “let’s play” into “let’s do it!” He reminds others that courage plus kindness makes amazing days happen.</p>
                        `,
                    influenceConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the light softened, Shane heard echoes of cheers and friendly laughter. He had started chants, told jokes, and made new friends feel at home. Games felt brighter when he was around.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being an Encourager means he spreads energy and helps people feel brave. He brings smiles to the group and keeps everyone excited to join in.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s superpower is lifting spirits. He reminds others that fun grows when we share it.</p>
                        `,
                    steadinessConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the swings slowed, Shane noticed calm faces and easy grins. He made sure everyone had a turn, and he stayed patient. Kids who were unsure at first finished the day feeling proud.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being a Peacemaker means he’s steady and kind. He helps people feel safe and included, and he keeps the day moving at a gentle, friendly pace.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s superpower is caring. He reminds others that the best games include every kid.</p>
                        `,
                    conscientiousnessConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the sun slipped behind the trees, the chalk line and tidy cones made the field look just right. Shane noticed what helped the games run well and fixed tiny problems so everyone could focus on the fun.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Being a Problem Solver means he thinks ahead and cares about how things work. He keeps rules clear and plans smart, which makes playing easier for everyone.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shane’s superpower is thoughtful planning. He reminds others that a little care makes big fun happen.</p>
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

        .boyAtThePark {
            position: absolute;
            z-index: -10000;
            width: 21%;
            max-height: 585px;
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
        line-height: 1.25em;
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