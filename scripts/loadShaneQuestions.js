require('dotenv').config();
const mongoose = require('mongoose');
const Assessment = require('../api/models/Assessment');

const questions = [

    // -----------------------------------Chapter 1--------------------------------

    // --------------------------------Question1--------------------------------1
    {
        chapter: "Chapter 1: First Day, Fresh Start",
        timeline: `Orientation Morning`,
        question: `Jessica, 30, stepped through the revolving doors of BrightPath Analytics—her first role since finishing college. The lobby hummed with elevator chimes and the smell of fresh coffee. She smoothed her blazer, feeling a mix of nerves and excitement as she clipped on a visitor badge and followed the signs to onboarding.</p>Her new supervisor, Maya, handed her a slim laptop and a welcome folder. “Team kickoff in the glass conference room in ten,” Maya said with a warm smile. Jessica glanced over the agenda—introductions, project preview, and a short working session.</p>Jessica paused outside the conference room, hearing friendly chatter inside and seeing slides queued on a big screen.</p>
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
            `Jessica’s confident opener helped the meeting start on time. The team reviewed a customer-retention project with a tight pilot date. Afterward, Maya pulled her aside. “Nice presence,” she said. “We’ll need someone to drive a workstream. Interested?”</p>Jessica knew first impressions mattered. Taking visible responsibility could build momentum—if she chose her next move wisely.</p>Considering her options, she decided to respond in a way that matched how she wanted to show up.</p>
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
            `Inside the glass room, Jessica’s friendly intro loosened shoulders and sparked chatter. The project brief promised cross-team collaboration and a fast pilot. Maya noticed the way the group leaned in when Jessica spoke and asked if she’d help coordinate early communication.</p>Jessica weighed how to keep energy high without losing focus on the deadline.</p>
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
            `Jessica observed quietly, noting who asked questions and who preferred to listen. When she spoke, it was to connect dots and make sure quieter voices were included. The room relaxed.</p>Afterward, Maya asked her to help keep coordination calm and consistent as the pilot ramped up.</p>
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
            `Jessica listened and captured details: data fields, sample sizes, and handoffs. When she chimed in, she framed trade-offs clearly. Heads nodded around the table.</p>Maya asked if she’d take point on requirements for the first test cohort.</p>
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
            `By the afternoon of her first week, Jessica understood the team’s rhythms. A sprint board filled with sticky notes showed promise—and bottlenecks. A pilot review loomed on the calendar.</p>Maya pinged her for a status chat. “We’ll need strong progress before Friday,” she said.</p>Jessica considered how to respond under pressure:</p>
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
            `Owning the hard tasks gave the sprint a jolt. Jessica set daily touchpoints and trimmed distractions. People appreciated the clarity.</p>As the review neared, she had to choose how to drive the final push.</p>
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
            `The brainstorm lifted the mood. Ideas flowed, and volunteers stepped up. Now the team needed direction without losing the spark.</p>Jessica weighed her next move.</p>
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
            `A clear, calm plan steadied the sprint. Tension faded. With the review tomorrow, Jessica considered how to keep momentum without creating chaos.</p>She decided to…</p>
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
            `Clarifying dependencies revealed a few risks. Jessica flagged them early and aligned handoffs across teams.</p>Now she needed the best final-stretch approach.</p>
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
            `Review day arrived. Jessica walked the room through the pilot progress, crisp slides and real results. The executive panel nodded along.</p>A new email popped up afterward: “Phase Two: Larger Cohort, Multi-team Coordination.” The stakes rose—and so did the opportunity.</p>Jessica chose how to guide the next leg:</p>
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
            `With more teams involved, Jessica drove crisp stand-ups and decisions. When blockers surfaced, she cleared them swiftly.</p>As deadlines converged, she picked a finish-line tactic.</p>
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
            `Jessica amped up connection—quick recognitions, open chat, and shared wins. The room buzzed again.</p>To land the phase, she decided to…</p>
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
            `Jessica noticed the pace wearing on a few teammates. She brought a steady presence, reducing noise and clarifying priorities.</p>For the close, she chose to…</p>
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
            `Jessica triple-checked the metrics and felt confident the plan would hold. One more decision remained: how to steer the final sprint.</p>
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
            `Phase Two shipped. Jessica’s judgment earned trust beyond her immediate team. Soon, a cross-functional initiative launched—and a seasoned analyst named Priya joined to partner with her.</p>Jessica considered how to set the tone with her new teammate.</p>
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
            `With roles set, velocity rose. Jessica tracked outcomes and kept the bigger picture visible. Priya appreciated the decisiveness.</p>As scope expanded, Jessica weighed how to keep results sharp.</p>
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
            `Jessica and Priya energized meetings, turning updates into idea sessions. Momentum grew, and leadership noticed.</p>Next, Jessica focused on sustaining both pace and connection.</p>
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
            `Jessica prioritized stability. Priya settled in quickly, trusting the predictable rhythm.</p>To balance care with speed, Jessica chose to…</p>
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
            `Jessica and Priya diagrammed the next phase on a whiteboard—inputs, owners, quality checks. Confidence rose.</p>Still, she had to decide how tightly to hold to process versus speed.</p>
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
            `The pilot’s success unlocked a company-wide launch. Leaders asked Jessica to help shape strategy while Priya coordinated execution.</p>With more eyes watching, Jessica chose her approach.</p>
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
            `Jessica’s clear strategy aligned multiple groups. Status meetings were crisp and outcomes-oriented. Confidence in the launch grew.</p>Near the finish, she considered one last push.</p>
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
            `The cross-company energy was contagious. Jessica and Priya kept recognition front and center, and updates felt like celebrations of progress.</p>To land the launch, Jessica chose to…</p>
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
            `The final stretch can fray nerves, but Jessica kept a calm center. She ensured resources were available and no one felt stranded.</p>Her closing approach would be to…</p>
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
            `Jessica scanned dashboards and spot-checked samples. Quality looked strong, but time was tight. She weighed speed against polish.</p>Her final decision:</p>
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
            `Jessica quickly became known for decisive execution. Within a year, she was leading complex launches that cut through red tape and delivered visible results. Her direct style inspired confidence when timelines were tight.</p>By year three she was a senior program lead, trusted to set strategy for high-impact efforts. Teams rallied around her clear calls and bias for action.</p>Five years in, she owned a portfolio of initiatives that reshaped customer retention at scale. Colleagues sought her when outcomes mattered most.</p>If you lead with bold goals, fast decisions, and accountability, your natural Dominance style is your edge—keep pairing it with quick listening and win-win alignment to multiply your impact.</p>
            `,
        influenceConclusion:
            `Jessica’s gift for connection lifted every room she entered. In her first year she built cross-team bridges that accelerated pilots and made work feel fun and purposeful.</p>By year three she was the culture carrier for major initiatives—facilitating creative jams, telling the story of the work, and bringing out the best in partners and stakeholders.</p>Five years later, she guided change efforts that depended on collaboration and buy-in. Engagement scores rose wherever she worked.</p>If you naturally energize and influence, your Strength is connection—keep pairing it with clear priorities and follow-through to turn enthusiasm into durable outcomes.</p>
            `,
        steadinessConclusion:
            `Jessica built her reputation on steadiness. She calmed hectic launches with clear rhythms, reliable updates, and a genuine care for people.</p>By year three, leaders tapped her to stabilize complex programs and mentor new teammates. Projects under her guidance met deadlines without drama.</p>Five years in, she led operations that valued trust, continuity, and thoughtful change. Teams thrived because they felt safe to do great work.</p>If you bring balance, patience, and support, your Steadiness is a superpower—keep pairing it with timely assertiveness so your voice shapes the path, not just the pace.</p>
            `,
        conscientiousnessConclusion:
            `Jessica’s precision became legendary. She prevented issues before they surfaced and elevated quality across teams.</p>By year three, she owned analytics and process improvements that made launches predictable and trustworthy.</p>Five years later, she led initiatives where accuracy and clarity were the difference between good and great. Her standards elevated everyone’s work.</p>If you’re naturally thorough and exacting, your Conscientious style sets the bar—keep pairing it with speed decisions and visible storytelling so your insights drive action at scale.</p>
            `
    }
];

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Assessment.updateOne(
            { slug: 'jessicas-first-job' },
            { $set: { questions } }
        );
        console.log('Updated questions for Jessica\'s First Job');
    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
})();