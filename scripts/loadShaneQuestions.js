require('dotenv').config();
const mongoose = require('mongoose');
const Assessment = require('../api/models/Assessment');

const questions = [
                // -----------------------------------Chapter 1--------------------------------

                // --------------------------------Question1--------------------------------1
                {
                    chapter: 'Chapter 1: Welcome to the Park',
                    timeline: `Morning`,
                    question: `<p>The sun peeked over the trees as Shane stepped onto the soft grass, sneakers squeaking just a little. Today was a big park day—slides, swings, and maybe even a game on the big open field. He could feel the cool morning breeze and hear kids laughing in the distance.</p>
                    <p>Near the sandbox, a few kids were gathering soccer cones. By the picnic tables, others were trading snack ideas and silly jokes. At the climbing wall, a line was forming. Shane took a breath and thought about what to do first.</p>
                    <p>He looked around and made a plan to start his morning just right.</p>`,
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
                        `<p>Shane jogged to the field and pointed out a simple way to form teams: “Cones on that side, water bottles on this side!” Kids nodded, and the game started fast. The first kickoff whooshed across the grass, and everyone cheered.</p> 
                        <p>A taller kid smiled and said, “Nice idea, that made it easy.” Shane grinned but kept his eyes on the field—there was still plenty to do to keep things moving smoothly.</p>
                        <p>He wondered how to keep the game fair and the pace strong.</p>`,
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
                        `<p>Shane laughed along with the kids by the picnic tables and invited a few to try the big slide. Soon, a tiny parade of friends marched up the stairs, cheering when each person zoomed down.</p> 
                        <p>One kid asked, “What should we do next?” Shane liked how everyone was smiling and wanted the fun to keep rolling.</p>`,
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
                        `<p>Shane knelt by the swing and showed the younger kid how to kick their legs forward and back. “You’ve got it,” he said softly, giving a gentle push. The smile that followed made Shane’s chest feel warm.</p>
                    <p>Nearby, a few kids waved, inviting them to join a simple game on the grass. Shane wanted to help everyone feel included.</p>`,
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
                        `<p>Shane read the playground sign and pointed out where running was safe and where walking made sense. He noticed a perfect spot for a relay that wouldn’t bump into the sandbox line.</p>
                        <p>A kid said, “Good eye!” Shane smiled, thinking about the best way to start without any confusion.</p>`,
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
                        `<p>By snack time, Shane knew where the water fountain was and which bench had the best shade. Kids compared granola bars and swapped apple slices. The field was open again, and the swings had a shorter line.</p>
                        <p>Shane took a sip of water and looked around. The day still had plenty of adventure left. He thought about the next fun thing to try.</p>
                        <p>What should he do to keep the day rolling?</p>`,
                    answers: [
                        { text: "He mapped out a short obstacle course using cones, a hopscotch square, and the big tree as a marker.", value: 4, nextQuestion: 7 }, // C
                        { text: "He started a cheerful countdown and invited anyone nearby to join the next game.", value: 2, nextQuestion: 8 },                   // I
                        { text: "He checked on a couple of kids sitting out and asked if they wanted easy roles to feel included.", value: 3, nextQuestion: 9 },    // S
                        { text: "He challenged himself and a few others to try a timed run from the bench to the slide and back.", value: 1, nextQuestion: 7 },     // D
                    ],
                },

                // --------------------------------Question4D--------------------------------7
                {
                    chapter: 'Chapter 4: Game On',
                    timeline: `Early Afternoon`,
                    question:
                        `<p>The whistle Shane found in his pocket (okay, it was just a pretend whistle sound) made everyone laugh, but it also got attention. He set a quick pace: “Three rounds, short breaks, go!”</p>
                        <p>The games moved fast and felt exciting. Shane liked how everyone stayed focused and how the rounds finished strong. Now it was time to keep the fun sharp.</p>
                        <p>He considered the best next step.</p>`,
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
                        `<p>Shane’s countdown echoed across the grass and got more kids to join. He made a goofy team name for each group, and everyone giggled.</p>
                        <p>The air felt lighter, and the games went smoother when people smiled. Still, he wanted the next part to run even better.</p>`,
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
                        `<p>Shane made sure the kids on the bench had easy ways to join—counting, cheering, or holding a cone. Smiles started popping up like bubbles.</p>
                        <p>It felt good when everyone had a place. He wanted to keep the pace steady and kind.</p>`,
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
                        `<p>Shane drew a tiny course in the dust and showed where to start, turn, and tag. It made everything feel organized and easy to follow.</p>
                        <p>Watching people zip through the path, he thought about making the next rounds even smoother.</p>`,
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
                        `<p>By midday, the sun felt warmer and the games had a nice rhythm. Shane noticed a fresh group of kids arriving with skateboards and jump ropes.</p>
                        <p>There was time for one more big activity before the afternoon stretched long. Shane wanted it to feel awesome for everyone.</p>
                        <p>He thought about the best next idea.</p>`,
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
                        `<p>Shane pointed to the tree and said, “Let’s try to beat our best time!” Everyone lined up, bouncing on their toes.</p>
                        <p>He liked how a clear target made people focus. Now he just needed to keep things crisp and fair.</p>
                        <p>What should he do next?</p>`,
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
                        `<p>With giggles and pretend hats, the relay felt like a celebration. Shane could tell people tried harder when the mood was fun.</p>
                        <p>He wanted to guide the group toward a great finish while keeping the smiles going.</p>`,
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
                        `<p>Shane walked the line, offering gentle encouragement. A nervous look turned into a small grin after his quiet, “You’ve got this.”</p>
                        <p>He wanted the last stretch to feel steady and friendly.</p>`,
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
                        `<p>Shane stepped the cones a bit wider and drew a clean line for tagging. It felt organized and safe, which made people run better.</p>
                        <p>A few kids thanked him for making the turn easier to see. He nodded, already thinking ahead.</p>`,
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
                        `<p>When the relay wrapped, Shane noticed a kid named Jay arriving with a bright blue backpack and a curious smile. Jay waved shyly.</p>
                        <p>Shane liked meeting new friends at the park. He wanted Jay to feel welcome and ready to jump in.</p>
                        <p>He chose how to start.</p>`,
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
                        `<p>“Two steps: start here, tag there,” Shane said, smiling. Jay nodded, ready to try. The first dash was quick and clean.</p>
                        <p>Shane liked that simple plans helped people jump in fast. Now he wanted to keep the pace strong and the fun bright.</p>`,
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
                        `<p>Shane’s joke landed, and Jay laughed, choosing “Blue Rockets” as a team name. A couple of kids joined their side with big grins.</p>
                        <p>The group felt connected, and the next round started with cheers.</p>`,
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
                        `<p>Shane walked the course slowly with Jay, pointing to the start and finish while chatting about favorite snacks. Jay relaxed and smiled.</p>
                        <p>Now the group could keep going together, steady and friendly.</p>`,
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
                        `<p>Shane pointed to each cone and explained the tag spot. Jay nodded, grateful for the clear guide.</p>
                        <p>The next run could be even better with the right touch.</p>`,
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
                        `<p>The park buzzed with energy. Skateboards rolled past the path, and a kite wiggled in the sky. Shane felt proud of the day so far.</p>
                        <p>There was time for one more “big thing” before everyone had to head home. He wanted it to feel like a perfect finish.</p>
                        <p>He looked around and decided:</p>`,
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
                        `<p>“Last push!” Shane called. The plan was simple and bold, and kids loved the challenge. Shoes thumped the grass.</p>
                        <p>With the end of the day near, he wanted it to feel strong and fair.</p>
                        <p>What would make the finish awesome?</p>`,
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
                        `<p>Shane’s celebration round idea had everyone smiling. The air felt like a happy drumbeat.</p>
                        <p>He wanted to end on a note that felt big and kind.</p>`,
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
                        `<p>Shane looked at the line and gave a gentle nod. Every kid who wanted to play had a spot. That felt right.</p>
                        <p>Now it was time to wrap up in a friendly way.</p>`,
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
                        `<p>Two cones slid into better spots, and a simple chalk line made the finish clear. “That helps,” someone said.</p>
                        <p>The last part of the day was ready to shine.</p>`,
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
                        `<p>As the sky turned orange, Shane looked over the field where the cones still made neat triangles. He had a knack for getting things started and keeping them moving. When friends needed a plan, he gave one. When a game needed a push, he brought it.</p>
                        <p>Being a Go-Getter means he likes goals and action. He helps the group try new things and finish strong. People trust him to be brave and to make quick choices when it’s time to play.</p>
                        <p>Shane’s superpower is turning “let’s play” into “let’s do it!” He reminds others that courage plus kindness makes amazing days happen.</p>`,
                    influenceConclusion:
                        `<p>As the light softened, Shane heard echoes of cheers and friendly laughter. He had started chants, told jokes, and made new friends feel at home. Games felt brighter when he was around.</p>
                        <p>Being an Encourager means he spreads energy and helps people feel brave. He brings smiles to the group and keeps everyone excited to join in.</p>
                        <p>Shane’s superpower is lifting spirits. He reminds others that fun grows when we share it.</p>`,
                    steadinessConclusion:
                        `<p>As the swings slowed, Shane noticed calm faces and easy grins. He made sure everyone had a turn, and he stayed patient. Kids who were unsure at first finished the day feeling proud.</p>
                        <p>Being a Peacemaker means he’s steady and kind. He helps people feel safe and included, and he keeps the day moving at a gentle, friendly pace.</p>
                        <p>Shane’s superpower is caring. He reminds others that the best games include every kid.</p>`,
                    conscientiousnessConclusion:
                        `<p>As the sun slipped behind the trees, the chalk line and tidy cones made the field look just right. Shane noticed what helped the games run well and fixed tiny problems so everyone could focus on the fun.</p>
                        <p>Being a Problem Solver means he thinks ahead and cares about how things work. He keeps rules clear and plans smart, which makes playing easier for everyone.</p>
                        <p>Shane’s superpower is thoughtful planning. He reminds others that a little care makes big fun happen.</p>`
                }
            ];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Assessment.updateOne(
      { slug: 'shanes-day-at-the-park' },
      { $set: { questions } }
    );
    console.log('Updated questions for Shane’s Day at the Park');
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();