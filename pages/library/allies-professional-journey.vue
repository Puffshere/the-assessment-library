<template>
    <div>
        <section class="page">

            <section class="title">
                <button @click="jumpToLibrary" class="teal">Library</button>
                <div class="shadow">
                    <div style="padding: 30px 0 20px 0;">
                        <h1>Allie's Professional Journey!</h1>
                        <h3 class="chapter" v-html="questions[currentQuestion - 1].chapter"></h3>
                    </div>
                </div>
            </section>

            <section class="questionnaire">
                <img src="~/assets/story0514/bookcase.webp" alt="image of a bookcase" class="bookcaseLeft" />
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
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
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
                    chapter: 'Chapter 1: The First Day',
                    timeline: `Month 1`,
                    question: `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie stepped into the sleek, modern office, her heart racing with anticipation. It was her first day at a competitive, fast-paced tech company, and the atmosphere buzzed with a mix of excitement and tension. She couldn’t help but notice the subtle glances from her new colleagues, sizing her up as she settled into her desk. The unfamiliar scent of fresh coffee and printer ink filled the air, and she knew the day ahead would be full of challenges.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her manager, Daniel, handed her a stack of files, mentioning an important meeting happening in the conference room. As Allie quickly glanced through the files, she noted the strategic decisions and complex reports that she would have to manage. Walking toward the conference room, she mentally prepared for how she could best approach the meeting ahead.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The meeting room was already filled with senior executives when she arrived.</p>`,
                    answers: [
                        { text: `She confidently entered the room, immediately identifying key players present and began guiding the discussion toward decisive actions.`, value: 1, nextQuestion: 2 },
                        { text: `She warmly greeted her new colleagues, sparking conversation and establishing a friendly atmosphere.`, value: 2, nextQuestion: 3 },
                        { text: `She quietly took her seat, carefully observing interactions and waiting for the right moment to contribute.`, value: 3, nextQuestion: 4 },
                        { text: `She settled in quietly, taking detailed notes to understand the established group routines.`, value: 4, nextQuestion: 5 },
                    ]
                },

                // -----------------------------------Chapter 2--------------------------------

                // --------------------------------Question2D--------------------------------2
                {
                    chapter: 'Chapter 2: The First Meeting',
                    timeline: `Month 1 - Week 2`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the meeting progressed, Allie's assertiveness caught the attention of the senior leadership. Later, Daniel approached her, clearly impressed. "Allie, you showed great initiative in there," he praised. "We need someone who can step up and lead. I think you might be just the person we're looking for."</p> 
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Back at her desk, Allie reflected on Daniel’s words, realizing the importance of this early recognition. She knew building upon this momentum would be crucial to her success at the company. With opportunities opening up, she recognized the need to make strategic decisions about her next steps.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie knew this was a pivotal moment to solidify her reputation and position herself effectively for future opportunities. She considered her next step carefully.</p>
                        `,
                    answers: [
                        { text: "She volunteered immediately to take charge of the upcoming project, ready to prove her leadership capabilities.", value: 1, nextQuestion: 6 },
                        { text: "She enthusiastically proposed a casual gathering after work to build connections and boost team morale.", value: 2, nextQuestion: 6 },
                        { text: "She quietly reassured Daniel of her steady commitment to supporting the team and maintaining consistent performance.", value: 3, nextQuestion: 6 },
                        { text: "She asked detailed questions to fully understand expectations, ensuring she was prepared before accepting further responsibilities.", value: 4, nextQuestion: 6 },
                    ]
                },

                // --------------------------------Question2I--------------------------------3
                {
                    chapter: 'Chapter 2: The First Meeting',
                    timeline: `Month 1 - Week 2`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie took a deep breath and walked into the conference room, her eyes focused on the group gathered around the table. Her mind was sharp, and she knew this was her moment to build immediate rapport. With a bright smile and warm greeting, she introduced herself energetically, instantly creating an engaging atmosphere. As the conversation unfolded, she guided the discussion, highlighting team collaboration and fostering an environment where everyone's voice was heard.</p> 
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The meeting wrapped up, and Allie felt a sense of accomplishment, but the day was far from over. Her manager, noticing her ability to engage the team, asked her to oversee a new project that would involve a tight deadline and a high level of coordination. Allie knew this was another chance to leverage her interpersonal strengths, but she had to decide how to approach the next phase of her journey.</p>
                        `,
                    answers: [
                        { text: "She could rally the team and maintain the momentum with high energy, driving them to meet deadlines and push forward with strong direction.", value: 1, nextQuestion: 6 },
                        { text: "She could energize the team by enthusiastically promoting collaboration and open communication.", value: 2, nextQuestion: 6 },
                        { text: "She could build a strong relationship with key team members to ensure long-term success, offering support and a steady hand throughout the project.", value: 3, nextQuestion: 6 },
                        { text: "She could push the team to meet deadlines while keeping spirits high, ensuring that quality and precision are never sacrificed in the pursuit of results.", value: 4, nextQuestion: 6 },
                    ],
                },

                // --------------------------------Question2S--------------------------------4
                {
                    chapter: 'Chapter 2: The First Meeting',
                    timeline: `Month 1 - Week 2`,
                    question:
                        `
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie quietly observed the meeting, taking in every detail and carefully listening to what each colleague had to say. She appreciated the calm energy of the room and took her time to process the information, making sure she understood everyone’s perspectives. As the discussion unfolded, Allie asked thoughtful questions, ensuring that everyone’s voice was heard and that no one felt left out. Her approach created a harmonious atmosphere, and she felt good about how the team was communicating and working together.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After the meeting, Allie’s manager approached her, recognizing the calming presence she brought to the team. He asked her to help manage a new project that required strong coordination and stability, and he thought her steady approach would be a great fit. Allie knew this was a big responsibility, but she felt confident that her careful and thoughtful approach would lead the team to success. She needed to decide how to proceed with managing the project:</p>
                    `,
                    answers: [
                        { text: "She could create a detailed, step-by-step plan for the team, setting clear deadlines and goals to ensure the project moves forward efficiently.", value: 1, nextQuestion: 6 },
                        { text: "She could offer ongoing support and check-ins to ensure everyone feels comfortable, creating an open line of communication and fostering positivity throughout the process.", value: 2, nextQuestion: 6 },
                        { text: "She could work at a steady pace without rushing the team, focusing on consistency and ensuring that each team member has the time and resources they need.", value: 3, nextQuestion: 6 },
                        { text: "She could help resolve conflicts and ensure everyone stays aligned on the project’s goals, paying attention to details and ensuring that all expectations are clearly defined.", value: 4, nextQuestion: 6 },
                    ],
                },

                // --------------------------------Question2C--------------------------------5
                {
                    chapter: 'Chapter 2: The First Meeting',
                    timeline: `Month 1 - Week 2`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie sat back during the meeting, carefully listening to every detail and analyzing the situation. As the conversation moved forward, she took notes and examined the data, thinking through each point before offering any input. When it was her turn to speak, Allie shared a well-researched, logical perspective, ensuring that every piece of information was accounted for and that the team had all the facts. Her thorough approach helped clarify complex issues and added a level of precision to the conversation that others appreciated.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After the meeting, Allie’s manager asked her to take the lead on a new project, knowing her attention to detail and analytical skills would be crucial. Allie felt ready for the challenge, but she knew that the project would require a careful and methodical approach. She needed to decide how to proceed:</p>
                        `,
                    answers: [
                        { text: `She could meticulously plan out every detail of the project, setting clear objectives and creating a strong, goal-oriented strategy to drive the team toward success.`, value: 1, nextQuestion: 6 },
                        { text: "She could create a checklist to track progress and ensure everything is done correctly, while maintaining positive morale and keeping the team motivated.", value: 2, nextQuestion: 6 },
                        { text: "She could delegate tasks based on team members’ strengths, overseeing the quality of the work while ensuring everyone feels supported and valued in their roles.", value: 3, nextQuestion: 6 },
                        { text: "She could gather data from multiple sources before making any major decisions, analyzing every detail and ensuring that the project is based on well-founded, accurate information.", value: 4, nextQuestion: 6 },
                    ],
                },

                // -----------------------------------Chapter 3--------------------------------6

                {
                    chapter: 'Chapter 3: The Challenge',
                    timeline: `Month 2 - Month 4`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the time the project kicked off, Allie was already familiar with the team’s strengths and weaknesses. She had quickly assembled a detailed project timeline, setting clear, attainable deadlines for each task. The team was working hard, but there were signs of friction. Some members were unsure of how to prioritize their work, and the project’s complexity was causing delays.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s focus was on pushing through the obstacles. Every morning, she checked in with the project leads, streamlined the communication process, and personally reviewed all progress reports.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One morning, her phone buzzed with a critical notification: her manager had set a meeting with her to review progress, and the deadline was fast approaching. It was clear to Allie that the project needed to be completed on time, no exceptions. There was no room for hesitation.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her thoughts raced as she considered how to handle the pressure:</p>
                        `,
                    answers: [
                        { text: "She could take the lead on the project, organizing everything herself, pushing for fast results and setting a no-compromise attitude for the team.", value: 1, nextQuestion: 7 },
                        { text: "She could gather her team and hold a brainstorming session to inspire fresh ideas and collaboration.", value: 2, nextQuestion: 8 },
                        { text: "She could focus on planning everything thoroughly before making any moves, ensuring every detail is accounted for.", value: 3, nextQuestion: 9 },
                        { text: "She could seek advice from a trusted colleague to ensure her approach aligns with the company’s culture.", value: 4, nextQuestion: 10 },
                    ],
                },

                // --------------------------------Question4D--------------------------------7
                {
                    chapter: 'Chapter 4: Making Decisions',
                    timeline: `Month 4 - Month 6`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The deadline was fast approaching, and Allie felt the weight of the project on her shoulders. With her team stretched thin and a few of the tasks behind schedule, Allie knew she needed to make decisive moves. She spent long nights refining the project’s details, finding ways to cut down on inefficiencies. She knew her style—streamlined, direct, and results-oriented—was going to get them across the finish line.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie held a meeting to assess the situation. She asked for daily updates from each department, emphasizing that there would be no room for delays. The team responded to her assertiveness; they appreciated the clarity and direction. As the day of the final presentation drew closer, Allie ensured that every team member was aligned with the company’s goals. She pushed them to maintain focus.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However, there was still pressure to ensure everything was aligned perfectly. Allie’s focus shifted to handling these final stages with utmost precision:</p>
                        `,
                    answers: [
                        { text: "She could push ahead with full force, making sure every detail was accounted for and managing any unforeseen obstacles to ensure results.", value: 1, nextQuestion: 11 },
                        { text: "She could rally the team, sharing her excitement and enthusiasm, motivating them to reach deadlines together.", value: 2, nextQuestion: 11 },
                        { text: "She could take a step back and ensure each team member is supported, focusing on steady progress with minimal disruption.", value: 3, nextQuestion: 11 },
                        { text: "She could break down the project into detailed steps, ensuring everything is thoroughly planned and executed with precision.", value: 4, nextQuestion: 11 },
                    ],
                },

                // --------------------------------Question4I--------------------------------8
                {
                    chapter: 'Chapter 4: Making Decisions',
                    timeline: `Month 4 - Month 6`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie paced back and forth in her office, trying to shake off the nervous energy from the meeting earlier. The team was clearly passionate about the project, and she wanted to harness that energy for the task at hand. She knew that fostering strong relationships with her colleagues would be key to building a collaborative and successful team dynamic. </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie decided to focus on energizing the team and ensuring that everyone felt connected to the project’s success. The office was buzzing with ideas, and she knew that by creating a supportive and open environment, she could inspire her team to reach their full potential. She had to figure out the best way to keep everyone engaged, excited, and motivated:</p>
                        `,
                    answers: [
                        { text: "She could take charge, pushing the team toward immediate action and pushing for results without delay.", value: 1, nextQuestion: 11 },
                        { text: "She could energize the team, holding regular brainstorming sessions to generate ideas and keep morale high.", value: 2, nextQuestion: 11 },
                        { text: "She could check in with each team member individually, making sure everyone feels comfortable and heard throughout the project.", value: 3, nextQuestion: 11 },
                        { text: "She could provide the team with clear guidelines and expectations, making sure everyone understands their role and the steps ahead.", value: 4, nextQuestion: 11 },
                    ],
                },

                // --------------------------------Question4S--------------------------------9
                {
                    chapter: 'Chapter 4: Making Decisions',
                    timeline: `Month 4 - Month 6`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie sat down with a cup of tea, reviewing the project details for the hundredth time. She had been feeling a little overwhelmed, but she found peace in the steady rhythm of her work. Allie knew that to succeed, she needed to make sure everyone on the team felt supported and confident. The last thing she wanted was for anyone to feel lost or overburdened. </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her focus shifted toward ensuring the team felt comfortable with the work ahead. Allie realized that clear communication and stability were key in maintaining a smooth workflow. She wanted to create a calm, consistent environment where everyone could focus without feeling pressured. Now, she needed to figure out how to best manage this:</p>
                        `,
                    answers: [
                        { text: "She could take control of the project and push the team forward at a fast pace to meet the tight deadline.", value: 1, nextQuestion: 11 },
                        { text: "She could encourage collaboration and make sure the team is having fun, even under pressure, to boost their engagement.", value: 2, nextQuestion: 11 },
                        { text: "She could ensure each team member has a clear understanding of their tasks and is comfortable with their responsibilities.", value: 3, nextQuestion: 11 },
                        { text: "She could focus on managing the timeline carefully, ensuring the team is methodically hitting each milestone.", value: 4, nextQuestion: 11 },
                    ],
                },

                // --------------------------------Question4C--------------------------------10
                {
                    chapter: 'Chapter 4: Making Decisions',
                    timeline: `Month 4 - Month 6`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie stared at the project timeline, carefully calculating the steps ahead. She was determined to approach this project with precision, ensuring that no detail was overlooked. As she reviewed the resources available, she made sure to assess every possibility to ensure the project’s success. Every step had to be planned, and every resource had to be optimized. </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She needed to ensure that every decision made was based on data and well-thought-out reasoning. Allie knew that while speed was important, accuracy was paramount. She had to ensure the team was aligned with her vision of delivering the project with the highest standard of quality. Her next move was crucial, and she had to consider every option carefully:</p>
                        `,
                    answers: [
                        { text: "She could take a more aggressive approach, taking charge of the project’s direction and demanding results without overthinking.", value: 1, nextQuestion: 11 },
                        { text: "She could make sure the team feels engaged by offering praise and encouragement while ensuring they stay on track.", value: 2, nextQuestion: 11 },
                        { text: "She could ensure that each team member has all the resources they need and is working in a comfortable, supportive environment.", value: 3, nextQuestion: 11 },
                        { text: "She could create a detailed project plan, outlining every step and ensuring all deadlines are met with no compromises on quality.", value: 4, nextQuestion: 11 },
                    ],
                },

                // --------------------------------Question5--------------------------------11
                {
                    chapter: 'Chapter 5: Moving Forward',
                    timeline: `Month 6 - Month 9`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s leadership was becoming more apparent as she guided the project through its final stages. The team had been working late nights, but Allie knew the final stretch was the hardest part. She’d already established herself as someone who could command results under pressure, and now she was about to prove it again.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On the day of the big presentation, Allie stood confidently in front of the executive team. She presented the results of the project—successfully completed ahead of schedule, under budget, and with high-impact outcomes. Her ability to think strategically and act decisively had won her the team’s respect.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But Allie knew that this success was only the beginning. Her manager now trusted her to handle larger, more complex projects. There was a buzz around the office—Allie had become the go-to leader for high-stakes challenges.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The email notification arrived with the subject line: “Next Phase: Major Project Involving Multiple Teams and Deadlines.” Allie could feel the pressure building again, but she was more than ready for the challenge:</p>
                        `,
                    answers: [
                        { text: "She could take charge of the final stretch, driving the team toward the finish line with a no-nonsense approach and a focus on results.", value: 1, nextQuestion: 12 },
                        { text: "She could keep the energy high, motivating the team with a sense of excitement and enthusiasm, ensuring everyone stays engaged and focused.", value: 2, nextQuestion: 13 },
                        { text: "She could check in with each team member to ensure they have what they need, offering steady support and encouragement to keep everyone on track.", value: 3, nextQuestion: 14 },
                        { text: "She could double-check the details, making sure everything is in order and that nothing is overlooked before the deadline.", value: 4, nextQuestion: 15 },
                    ],
                },

                // --------------------------------Question6D--------------------------------12
                {
                    chapter: 'Chapter 6: Final Hours',
                    timeline: `Month 9 - Month 12`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the next project loomed on the horizon, Allie quickly assessed the scope and scale. The project involved multiple teams, cross-departmental collaboration, and complex deliverables. As the deadlines approached, she knew that the team’s success depended on her unwavering leadership and constant drive for results.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She scheduled daily meetings with the project leads, checking every detail, reviewing progress, and making swift decisions when things went off track. Allie’s reputation as someone who could maintain momentum under pressure was well-known in the office, and now, more than ever, her determination to keep pushing was evident.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There was no room for error, and Allie remained steadfast. As the deadline approached, she made sure each task was completed on time, even if it meant leading from the front in a more hands-on way:</p>
                        `,
                    answers: [
                        { text: "She could push the team to focus solely on results, setting strict deadlines and ensuring every task is completed as quickly as possible.", value: 1, nextQuestion: 16 },
                        { text: "She could motivate the team with a sense of urgency, encouraging them with enthusiasm to keep pushing forward while maintaining their energy.", value: 2, nextQuestion: 16 },
                        { text: "She could break the tasks down into smaller pieces, ensuring each team member knows exactly what they need to do and feels supported in the process.", value: 3, nextQuestion: 16 },
                        { text: "She could ensure that every detail is reviewed one last time, making sure the project is flawless and that every component meets the highest standard.", value: 4, nextQuestion: 16 },
                    ],
                },

                // --------------------------------Question6I--------------------------------13
                {
                    chapter: 'Chapter 6: Final Hours',
                    timeline: `Month 9 - Month 12`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie stood at the front of the room, scanning the faces of her team. They were all working hard, but the atmosphere was growing tense with the approaching deadline. Allie knew the key to success in this final stretch wasn’t just about deadlines or results; it was about keeping the team motivated and excited about the progress they had made. She could sense that morale was starting to dip, and she knew it was time to inject some energy into the room.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie clapped her hands together, smiling brightly. She reminded everyone of how far they had come, the progress they’d made, and how close they were to reaching their goal. She urged them to keep the energy up, to stay positive, and to believe in their ability to meet the deadline. But now, as she looked around the room, Allie realized she needed to decide whether to focus on maintaining enthusiasm or make sure the tasks ahead were delegated efficiently.</p>
                        `,
                    answers: [
                        { text: "She could set clear tasks and deadlines, ensuring everyone stays focused on results while maintaining a sense of urgency.", value: 1, nextQuestion: 16 },
                        { text: "She could keep the energy high, organizing team-building activities or breaks to keep morale up while ensuring productivity.", value: 2, nextQuestion: 16 },
                        { text: "She could speak to each person individually, offering encouragement and support to make sure no one feels overwhelmed.", value: 3, nextQuestion: 16 },
                        { text: "She could delegate tasks carefully, ensuring each person knows exactly what to do to meet the standard of quality required.", value: 4, nextQuestion: 16 },
                    ],
                },

                // --------------------------------Question6S--------------------------------14
                {
                    chapter: 'Chapter 6: Final Hours',
                    timeline: `Month 9 - Month 12`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie paused for a moment, reflecting on how much had been accomplished in such a short time. The team was working hard, but Allie noticed a few members seemed to be under pressure. She had always believed that taking a steady, patient approach would yield the best results, and now, with the deadline on the horizon, it was more important than ever to ensure everyone felt supported and comfortable. Allie decided that before they dove into the final push, she would check in with each person individually to ensure everyone had the tools they needed. </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;She walked around the room, offering words of encouragement and offering a calming presence. She could sense that a few people were feeling the weight of the deadline, and Allie made sure to remind them of how far they had come and how close they were to finishing. Now, Allie had to decide how best to manage the final hours—would she continue offering support or step up the pace to meet the deadline?</p>
                        `,
                    answers: [
                        { text: "She could push the team harder, setting a faster pace and focusing on getting things done efficiently to meet the deadline.", value: 1, nextQuestion: 16 },
                        { text: "She could maintain the positive atmosphere by encouraging collaboration and boosting the team’s morale while ensuring progress continues.", value: 2, nextQuestion: 16 },
                        { text: "She could continue providing individual support, making sure no one feels overwhelmed while keeping the work steady and balanced.", value: 3, nextQuestion: 16 },
                        { text: "She could step back and assess the progress carefully, reviewing each aspect of the project to ensure nothing is missed.", value: 4, nextQuestion: 16 },
                    ],
                },

                // --------------------------------Question6C--------------------------------15
                {
                    chapter: 'Chapter 6: Final Hours',
                    timeline: `Month 9 - Month 12`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie sat at her desk, reviewing the project for the hundredth time. Every detail was important, and as the deadline loomed, Allie knew she couldn’t afford to overlook anything. She meticulously went through each part of the project, checking tasks, revisiting the initial plan, and ensuring everything aligned with the company’s high standards. She felt the pressure building, but she was focused and determined to make sure the project was flawless.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As she went over the project details, Allie began to feel confident that they were on the right track. But there was one more step before they could move forward—she needed to ensure everything was perfect. Now, Allie had to decide whether to keep reviewing and refining the details or shift focus to the bigger picture and help guide the team through the final stretch.</p>
                        `,
                    answers: [
                        { text: "She could step in and lead the final push, making quick decisions to ensure the project moves forward and is completed on time.", value: 1, nextQuestion: 16 },
                        { text: "She could keep the team engaged and energized, making sure they stay focused on the big picture while trusting their capabilities to meet the deadline.", value: 2, nextQuestion: 16 },
                        { text: "She could offer steady encouragement, checking in with team members to ensure no one is overwhelmed by the looming deadline.", value: 3, nextQuestion: 16 },
                        { text: "She could conduct one final thorough review of the project, double-checking every detail to make sure the quality and accuracy are flawless before the deadline.", value: 4, nextQuestion: 16 },
                    ],
                },

                // --------------------------------Question7--------------------------------16
                {
                    chapter: 'Chapter 7: Reflection',
                    timeline: `Month 12 - Month 14`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the time the project was completed, Allie had not only gained the respect of her colleagues, but she had also started to make a name for herself as someone who could take charge and achieve results when others might hesitate. Her decisiveness and direct approach had earned her the admiration of her peers and senior management.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the days passed, her role in the company began to evolve. She was entrusted with handling the high-level strategies, coordinating large teams, and making decisions that would directly impact the company’s growth. But her journey had only just begun. A new challenge lay ahead, and it would require more leadership than ever before.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her phone buzzed with an exciting announcement: a new team member, Jake, would be joining their group to help with a project involving cross-departmental work. His reputation for driving efficiency and meeting deadlines had preceded him.</p>
                        `,
                    answers: [
                        { text: "She could take charge of the situation, setting clear expectations for Jake from the start and ensuring the team’s pace and direction remain focused on results.", value: 1, nextQuestion: 17 },
                        { text: "She could welcome Jake with enthusiasm, working to integrate him into the team and ensuring that everyone feels excited about the collaboration ahead.", value: 2, nextQuestion: 18 },
                        { text: "She could focus on ensuring that Jake feels supported in his new role, building a steady foundation of trust and communication with him while maintaining team harmony.", value: 3, nextQuestion: 19 },
                        { text: "She could work closely with Jake, analyzing the project’s needs and creating a detailed plan together, ensuring all aspects are carefully reviewed before moving forward.", value: 4, nextQuestion: 20 },
                    ],
                },

                // --------------------------------Question8D--------------------------------17
                {
                    chapter: 'Chapter 8: New Challenges',
                    timeline: `Month 14 - Month 18`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With Jake now onboard, Allie took the reins of their next project, an international product launch that was set to go live in just a few months. She quickly evaluated the scope of the project and knew it was going to be a test of both her leadership and her ability to make quick decisions.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake was quick to get to work, complementing Allie’s leadership style. Allie immediately set a course of action, defining each team’s responsibilities and implementing systems to track progress in real-time. She delegated with confidence but kept a tight hold on the major decisions. Jake’s presence brought a fresh perspective, but Allie knew it was her decisive approach that would ultimately lead the team to success.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the project progressed, Allie pushed for results but also ensured Jake was empowered to take ownership of parts of the project. Her balanced leadership, clear vision, and focus on the bigger picture kept everyone aligned:</p>
                        `,
                    answers: [
                        { text: "She could continue driving the team forward with clear directives and deadlines, making sure Jake and the team stayed focused on results without distractions.", value: 1, nextQuestion: 21 },
                        { text: "She could encourage Jake to foster excitement within the team, while still holding the group to a strong timeline and pushing for results.", value: 2, nextQuestion: 21 },
                        { text: "She could check in regularly with the team, ensuring that they feel supported in the fast-paced environment while maintaining the necessary momentum.", value: 3, nextQuestion: 21 },
                        { text: "She could work with Jake to break down tasks in a methodical way, making sure that all the details are covered before the team starts executing.", value: 4, nextQuestion: 21 },
                    ],
                },

                // --------------------------------Question8I--------------------------------18
                {
                    chapter: 'Chapter 8: New Challenges',
                    timeline: `Month 14 - Month 18`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie smiled as Jake joined the team meeting. She had worked hard to integrate him into the group, and now that he was here, she knew it was time to build a strong, collaborative atmosphere. She shared her excitement with the team about what Jake’s experience could bring to the project, encouraging everyone to embrace the changes. The energy in the room shifted as everyone began discussing the upcoming tasks, their enthusiasm matching Allie’s.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake, naturally charismatic, quickly matched Allie’s energy, sparking ideas and engaging the team in conversation. Allie was pleased to see the team opening up and feeding off Jake’s enthusiasm. However, she also realized that maintaining this level of excitement was crucial to keeping the momentum up. She needed to ensure that the project remained on track while also keeping the team engaged. Now, Allie had to decide how best to keep the enthusiasm alive while ensuring progress.</p>
                        `,
                    answers: [
                        { text: "She could set ambitious goals, ensuring that the team stays focused on reaching those goals while continuing to motivate everyone with a sense of urgency.", value: 1, nextQuestion: 21 },
                        { text: "She could continue fostering enthusiasm, organizing brainstorming sessions to keep everyone’s energy high while also working toward the project’s deadlines.", value: 2, nextQuestion: 21 },
                        { text: "She could check in with team members individually to make sure they’re feeling supported, all while keeping the energy level high in the group.", value: 3, nextQuestion: 21 },
                        { text: "She could ensure that the details of the project are being carefully addressed while still maintaining a positive and engaging work environment for the team.", value: 4, nextQuestion: 21 },
                    ],
                },

                // --------------------------------Question8S--------------------------------19
                {
                    chapter: 'Chapter 8: New Challenges',
                    timeline: `Month 14 - Month 18`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie stood in front of her team, welcoming Jake into the fold. She knew that a steady, supportive approach was key to getting everyone on the same page, especially with the new addition to the team. She focused on making sure Jake felt comfortable in his new role, checking in with him and the team to ensure they were all aligned and ready for the next phase. Allie knew that by fostering a stable environment, the team would be able to handle the pressures ahead with confidence.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake was a quick learner, but Allie made sure to provide him with the support he needed to integrate smoothly. She emphasized the importance of communication and making sure everyone felt heard and supported, especially in such a high-pressure environment. Allie’s approach helped establish trust, but she also realized that it was important to keep the project moving forward without losing sight of the team’s well-being. Now, Allie had to decide how to balance the steady, supportive approach with the need to stay on top of the project’s progress.</p>
                        `,
                    answers: [
                        { text: "She could take charge and set a faster pace, ensuring the team stays on track to meet the project’s deadlines, while making sure Jake can handle the workload.", value: 1, nextQuestion: 21 },
                        { text: "She could keep the team motivated and engaged, ensuring that everyone stays connected and energized while working toward their common goal.", value: 2, nextQuestion: 21 },
                        { text: "She could focus on making sure Jake and the team feel comfortable and confident in their roles, providing consistent support and guidance throughout.", value: 3, nextQuestion: 21 },
                        { text: "She could ensure that the project stays on track by regularly checking in on each task’s progress, making sure everything is running smoothly and on schedule.", value: 4, nextQuestion: 21 },
                    ],
                },

                // --------------------------------Question8C--------------------------------20
                {
                    chapter: 'Chapter 8: New Challenges',
                    timeline: `Month 14 - Month 18`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie sat down with Jake to go over the details of the next phase of the project. As a meticulous planner, she knew that focusing on the fine details was key to maintaining quality while meeting the deadline. She worked with Jake to break down the tasks into manageable steps, ensuring that each part of the project had a clear plan and timeline. Allie knew that by being thorough in her preparation, they would be able to execute everything flawlessly.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake, impressed with Allie’s attention to detail, quickly adapted to her structured approach. He appreciated the careful planning and knew that this method would set the project up for success. However, Allie also realized that while the project needed precision, there was a need for the team to move forward with confidence. She had to decide whether to stick strictly to the plan or allow some flexibility to keep the team motivated and moving forward.<p/>
                        `,
                    answers: [
                        { text: "She could push for speed and efficiency, ensuring the team sticks to the timeline while making sure every task is completed with precision.", value: 1, nextQuestion: 21 },
                        { text: "She could keep the team engaged, making sure they understand the importance of each detail while encouraging them to stay motivated and excited about the project.", value: 2, nextQuestion: 21 },
                        { text: "She could ensure that the team feels supported in the process, checking in regularly to make sure no one is feeling overwhelmed by the detail-oriented work.", value: 3, nextQuestion: 21 },
                        { text: "She could double down on thoroughness, ensuring every part of the project is reviewed and adjusted as needed, while maintaining a focus on the project’s overall quality.", value: 4, nextQuestion: 21 },
                    ],
                },

                // --------------------------------Question9--------------------------------21
                {
                    chapter: 'Chapter 9: The Next Big Challenge',
                    timeline: `Month 18 - Month 20`,
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first international product launch had been a resounding success, and Allie’s leadership was recognized across the organization. With Jake’s continued involvement, the company had exceeded revenue projections, and Allie was now ready for a new challenge: expanding into multiple new regions with a flagship product.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake was integral to the strategy, but Allie knew the scale of this project required her vision to guide the team. She kept a tight rein on the overall strategy, but was keen to let Jake lead the day-to-day execution. The project involved multiple regions, new marketing strategies, and complex logistics, all of which needed to be executed flawlessly.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s leadership had proven itself time and time again, and she was eager to tackle this challenge head-on:</p>
                        `,
                    answers: [
                        { text: "She could take the reins on the high-level strategy, outlining clear goals and deadlines, and assigning Jake to handle the day-to-day execution, ensuring that everyone stayed focused on the big picture.", value: 1, nextQuestion: 22 },
                        { text: "Allie could work with Jake to inspire the team, setting an enthusiastic tone for the project while collaborating closely to make sure everyone felt involved and motivated every step of the way.", value: 2, nextQuestion: 23 },
                        { text: "Allie could focus on maintaining a steady rhythm for the project, ensuring that both she and Jake keep the team feeling supported while carefully managing the workflow and everyone’s well-being.", value: 3, nextQuestion: 24 },
                        { text: "Allie could collaborate with Jake to carefully analyze the project’s scope, planning each step in detail to ensure that nothing was overlooked and every aspect was executed with precision.", value: 4, nextQuestion: 25 },
                    ],
                },

                // --------------------------------Question10D--------------------------------22
                {
                    chapter: 'Chapter 10: A New Era',
                    timeline: 'Month 20 - Month 24',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The expansion project was well underway, and Allie’s leadership had set the pace. She was handling multiple teams, coordinating efforts across departments, and ensuring the company’s expansion was smooth. The project was on track to exceed expectations, and the leadership team trusted Allie’s vision.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake continued to play a pivotal role, executing Allie’s strategy with precision. However, Allie remained at the helm, making strategic decisions that would determine the success of the expansion. As the final stages of the project approached, she began to think ahead about her next move within the company.<p/>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the successful launch of the new product line, Allie knew it was time to move into more senior leadership roles, focusing on shaping the long-term strategy for the company’s growth. Her focus on results and her ability to drive high-impact decisions had earned her the trust of the executive team:<p/>
                        `,
                    answers: [
                        { text: "She could push the team even harder, setting an ambitious final deadline and ensuring everything is completed with laser focus and precision.", value: 1, nextQuestion: 26 },
                        { text: "She could push for a final team meeting to rally the group, motivating everyone to deliver their best work and stay committed to the project.", value: 2, nextQuestion: 26 },
                        { text: "She could slow down a bit, giving the team some breathing room to make sure they weren’t rushed and everyone had the resources they needed.", value: 3, nextQuestion: 26 },
                        { text: "She could meticulously review every detail one final time, ensuring the product was flawless before the launch.", value: 4, nextQuestion: 26 },
                    ],
                },

                // --------------------------------Question10I--------------------------------23
                {
                    chapter: 'Chapter 10: A New Era',
                    timeline: 'Month 20 - Month 24',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the new project progressed, Allie knew that maintaining the team’s morale would be just as important as meeting deadlines. She had worked hard to foster an environment where collaboration and enthusiasm could thrive, and with Jake’s support, the team had come together beautifully. The product launch was fast approaching, but the energy in the office was palpable. The team was excited, and Allie was determined to keep that positive momentum going until the very end.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake had been instrumental in keeping the energy levels high, and Allie knew the final stretch would require them to work even more closely together. The team had proven they could collaborate well, but Allie needed to make sure that everyone felt appreciated and motivated as they worked toward the finish line. She was ready to give the final push, but she knew it had to be done in a way that kept the team engaged and excited. What would be her next move?<p/>
                        `,
                    answers: [
                        { text: "She could set even clearer expectations, urging the team to push through the final stretch with urgency and a focus on results.", value: 1, nextQuestion: 26 },
                        { text: "She could organize a celebratory meeting to inspire the team, reminding them of all the progress they’d made and how close they were to completing the project.", value: 2, nextQuestion: 26 },
                        { text: "She could check in with every team member to ensure they were feeling supported and that no one felt overwhelmed by the final stretch.", value: 3, nextQuestion: 26 },
                        { text: "She could ask Jake to do one final review of the project with her, making sure every detail was accounted for and no mistakes were made.", value: 4, nextQuestion: 26 },
                    ],
                },

                // --------------------------------Question810S--------------------------------24
                {
                    chapter: 'Chapter 10: A New Era',
                    timeline: 'Month 20 - Month 24',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie could feel the weight of the final phase of the project pressing down on her. The team had been working hard, and while they had made significant progress, she knew the finishing stretch needed to be handled with care. Jake had done a great job keeping the team on track, but Allie felt it was time to ensure that no one felt rushed or overwhelmed. It was crucial to her that the team stayed comfortable and confident, knowing that they had all the resources they needed to succeed.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the final deadlines approached, Allie decided to take a step back and assess the team’s well-being. She wanted to ensure that everyone felt supported in the final push, but she knew she couldn’t allow them to lose focus. Allie also knew it was time to step up her involvement and provide the necessary guidance while maintaining a calm, steady presence. The team needed balance, and Allie had to find the best way to give them the support they needed without losing the momentum they had built.<p/>
                        `,
                    answers: [
                        { text: "She could make the final stretch more demanding, pushing the team to meet the deadline with urgency while providing clear direction.", value: 1, nextQuestion: 26 },
                        { text: "She could keep the team motivated and engaged, encouraging them to stay positive and reminding them of how close they were to reaching the finish line.", value: 2, nextQuestion: 26 },
                        { text: "She could continue providing steady support, ensuring that everyone had what they needed to complete their tasks comfortably and without stress.", value: 3, nextQuestion: 26 },
                        { text: "She could closely monitor the progress of the tasks, ensuring each part of the project was completed with high attention to detail before moving forward.", value: 4, nextQuestion: 26 },
                    ],
                },

                // --------------------------------Question10C--------------------------------25
                {
                    chapter: 'Chapter 10: A New Era',
                    timeline: 'Month 20 - Month 24',
                    question:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie looked over the final stages of the project with a critical eye. She knew the importance of getting everything right before the launch, and her meticulous nature had led her to ensure that every detail was accounted for. Jake had proven to be a strong partner throughout, but Allie couldn’t shake the feeling that there were still a few small things that needed to be ironed out. She wasn’t going to let anything slip through the cracks, no matter how close the deadline loomed.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jake had suggested that they push forward quickly, but Allie had always been someone who believed that precision mattered above all. She wanted to be thorough, reviewing every aspect of the project to make sure nothing was left undone. The team had worked hard, and Allie was proud of what they had accomplished—but she needed to ensure the project was flawless. It was time to make the final decision: should she push for speed or continue perfecting the work?<p/>
                        `,
                    answers: [
                        { text: "She could push the team to finish the project quickly, cutting through any final steps and moving forward with a focus on delivering results.", value: 1, nextQuestion: 26 },
                        { text: "She could continue to motivate the team, emphasizing the importance of quality while maintaining a positive, collaborative atmosphere.", value: 2, nextQuestion: 26 },
                        { text: "She could slow things down and ensure that everyone has enough time to finish their tasks to the best of their ability, without the stress of rushing.", value: 3, nextQuestion: 26 },
                        { text: "She could continue reviewing every detail carefully, ensuring that the project meets the highest standards of quality before officially closing it out.", value: 4, nextQuestion: 26 },
                    ],
                },

                // --------------------------------QuestionEND--------------------------------26
                {
                    chapter: 'The Conclusion',
                    timeline: '20 Years Later',
                    dominanceConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s career soared over the next two decades. Her unwavering focus on results and her ability to make quick, decisive decisions set her apart. Within two years, she had become the Chief Operating Officer (COO) of the company, overseeing company-wide operations and driving efficiency across departments. Her leadership style was known for its no-nonsense approach, and she consistently delivered outstanding results under tight deadlines.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By her 10th year, Allie had expanded her role beyond the company, becoming a sought-after consultant for tech startups and major corporations looking to optimize their operations. Her ability to turn failing projects around, streamline processes, and create high-performing teams made her an industry leader.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the 20th year of her career, Allie was named Chief Executive Officer (CEO), leading the company through global expansion, acquisitions, and new product innovations. Under her leadership, the company grew to become one of the most successful tech firms in the world, expanding into international markets and redefining industry standards.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s future was firmly anchored in her ability to make tough decisions, maintain relentless drive, and inspire her teams to push for excellence. Her legacy was one of fierce leadership, and her influence would continue to shape the tech industry for years to come.</p>
                        `,
                    influenceConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the end of Allie’s first day, she had already established strong connections with her team, particularly with Jake. Her infectious enthusiasm and ability to motivate others helped bring the project to life, with the team feeling energized and committed under her leadership. Allie’s influence was felt not just through her ideas but through her ability to uplift the entire team’s spirit. She knew how to bring people together, keep morale high, and maintain momentum even during challenging moments. Her energy proved that collaboration and positivity were essential to her leadership style.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the following months, Allie’s natural charisma and people skills opened doors to even more opportunities. As the team flourished, she found herself not only leading successful projects but also mentoring others, helping them develop their own careers. Over the next two years, Allie took on a leadership development role, where she was responsible for guiding and inspiring new leaders within the organization. Her path to becoming a Senior Leadership Coach was clear, and she began to train others in the skills that had helped her rise through the ranks.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Her career flourished as she combined her expertise in motivating teams with her passion for leadership development. Allie became the go-to person for advice on team dynamics and was soon recognized for her ability to turn any team into a high-performing group. Within two years, Allie found herself being considered for a global leadership role, tasked with shaping the leadership culture for the entire company.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s future was bright, filled with opportunities to connect with people and inspire change. As a charismatic and persuasive leader, she would continue to build teams, mentor individuals, and help organizations achieve their highest potential. In two years, Allie’s career would have taken her to the top of the leadership development field, where she would coach leaders across the world.</p>
                        `,
                    steadinessConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As Allie wrapped up her first day, she realized that her quiet but steady approach had worked wonders. She had created a calm, supportive atmosphere on the team, and Jake appreciated her steady hand in keeping everyone focused and balanced. She didn’t rush decisions but took the time to ensure every detail was in place. The team thrived under her leadership, with Allie offering thoughtful guidance and consistent support, especially during stressful moments. It was clear that Allie’s strength was in maintaining harmony and stability within the group.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the coming months, Allie’s reputation for being a reliable and supportive leader spread across the organization. Her calm demeanor in the face of challenges allowed her to manage projects with grace. She moved into a role as a Project Manager, where her ability to keep things running smoothly and ensure that deadlines were met with a consistent pace became her trademark. Her leadership style allowed her to foster a sense of security within the team, and she was trusted to handle the most sensitive projects.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By the 20th year of her career, Allie was named Chief Executive Officer (CEO), leading the company through global expansion, acquisitions, and new product innovations. Under her leadership, the company grew to become one of the most successful tech firms in the world, expanding into international markets and redefining industry standards.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking ahead, Allie’s future lay in roles that valued stability, trust, and long-term relationship building. Her career trajectory would likely lead her to a position in senior management, where she would continue to create supportive environments for employees. In two years, Allie would be regarded as the glue that held the organization together, ensuring that its core values and culture remained intact despite external pressures.</p>
                        `,
                    conscientiousnessConclusion:
                        `
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s first day concluded with her demonstrating a level of precision and careful analysis that was truly impressive. She led the project with a meticulous attention to detail, ensuring every aspect was accounted for. While Jake took on the day-to-day execution, Allie ensured the project was on track by reviewing every component and making adjustments as needed. Her logical, well-thought-out approach to problem-solving helped guide the team through complex issues and ultimately led to the successful completion of the project.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the months that followed, Allie’s attention to detail and ability to analyze situations from all angles made her the go-to person for quality control and process improvement. Her ability to spot inefficiencies and improve systems quickly earned her recognition, and she was promoted to a role in process optimization. Within two years, Allie was managing a team of analysts, refining business processes, and overseeing quality assurance across multiple projects. She became known for her methodical approach and unwavering commitment to excellence.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Allie’s career path continued to evolve as she embraced roles that required strategic thinking and a commitment to precision. In two years, she could be found in a Senior Project Management or Quality Assurance position, where she would drive improvements in the company’s systems and processes. Her attention to detail and love for perfection made her ideal for roles that required constant review and improvement. Allie’s reputation for excellence would follow her wherever she went, and she would likely be sought after for her ability to optimize and enhance operations.</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking to the future, Allie’s career would revolve around roles that required high levels of analysis, planning, and execution. She would continue to thrive in environments where structure and precision were valued, ultimately moving into leadership positions in operational strategy or process management. In two years, Allie would be leading efforts to improve the company’s overall efficiency, ensuring that every aspect of its operations met the highest standards of quality.</p>
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
            window.location.href = '/library';
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
                }

                &.influence {
                    background: #ffbd05;
                }

                &.steadiness {
                    background: #0dab49;
                }

                &.conscientiousness {
                    background: #1666ff;
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
            }
        }
    }
}
</style>