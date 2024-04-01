<template>
  <section class="bizx">
    <main-nav />
    <section class="banner1">
      <div class="container">
        <br />
        <div class="row">
          <div class="col-12">
            <div class="col-6">
              <img class="bizx-logo" src="~/assets/ATD_New_Orleans_Logo.png" alt="ATD" />
              <br />
              <img class="blocks" src="~/assets/DISC_Blocks_top_image.png" alt="blocks" />
            </div>
            <div class="col-6">
              <img src="~/assets/logo-footer.png" alt="assessments24x7 logo" class="logo">
              <br />
              <br />
              <h3>DISC</h3>
              <h3>BLOCKS</h3>
              <h4>A Practical Tool for Enhanced</h4>
              <h4>Collaboration and Understanding</h4>
              <br />
              <br />
              <button class="orderBtn" @click="orderButton">ORDER NOW</button>
              <br />
              <br />
              <img class="whiteArrow" src="~/assets/White_Arrow_Pointing.png" alt="white arrow" />
              <br />
              <img class="findUs" src="~/assets/Find_us_at_ATD_Navy_blue_background.png" alt="find us logo" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12"></div>
        </div>
      </div>
      <img class="bannerBottomWave" src="~/assets/Wave_1.png" alt="bottom wave" />
    </section>
    <br />
    <section class="whiteSection1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>DISC BLOCKS SERVE AS...</h1>
            <br />
            <p>
              Effective tools for style awareness, team building, stress relief,
              and communication enhancement. With their vibrant colors and
              versatility, DISC Blocks offer a practical and engaging way to
              enhance collaboration and understanding within groups and teams.
            </p>
            <p>
              These blocks are four, soft Lego®-like pieces, each representing
              one of the DISC styles and a corresponding Adaptability phrase to
              immediately set the tone for interaction:
            </p>
            <br />
            <div class="row">
              <div class="col-3">
                <img src="~/assets/dominance.png" alt="red block" class="block" />
              </div>
              <div class="col-3">
                <img src="~/assets/influence.png" alt="yellow block" class="block" />
              </div>
              <div class="col-3">
                <img src="~/assets/steadiness.png" alt="green block" class="block" />
              </div>
              <div class="col-3">
                <img src="~/assets/conscientiousness.png" alt="blue block" class="block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <section class="banner2">
      <img src="~/assets/Wave_2.png" alt="top wave" class="bannerTopWave" />
      <div class="container">
        <br />
        <div class="row">
          <div class="col-12">
            <br />
            <br />
            <div class="col-5">
              <h3>Why</h3>
              <h3>DISC BLOCKS?</h3>
              <br />
              <P>
                By integrating DISC Blocks into the workplace, you can create a
                dynamic, engaging environment that not only highlights
                individual communication preferences but also promotes a deeper
                understanding of how these styles contribute to the collective
                success of the team's efforts.
              </P>
              <br />
              <br />
              <br />
              <button class="orderBtn" @click="orderButton">ORDER NOW</button>
            </div>
            <div class="col-7">
              <br />
              <img class="a-f-l-m" src="~/assets/asian_female_leading_meeting.png" alt="female leading meeting" />
              <br />
              <br />
              <img class="whiteArrow" src="~/assets/White_Arrow_Pointing.png" alt="white arrow" />
              <br />
              <img class="findUs" src="~/assets/Find_us_at_ATD_Navy_blue_background.png" alt="find us logo" />
            </div>
          </div>
        </div>
        <br />
      </div>
      <img class="bannerBottomWave" src="~/assets/Wave_1.png" alt="bottom wave" />
    </section>
    <br />
    <section class="whiteSection2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>BENEFITS</h1>
            <br />
            <div class="row">
              <div class="col-5">
                <img src="~/assets/male_business_man.png" alt="male business man" class="manSmiling" />
              </div>
              <div class="col-7">
                <h2>
                  <span class="benefitsPlus">
                    <img v-if="ITD_Modal === false" src="~/assets/bluePlus.png" alt="blue plus symbol"
                      @click="ITD_Modal = true">
                    <img v-else src="~/assets/blueMinus.png" alt="open modal" @click="ITD_Modal = false"
                      class="blueMinus">
                  </span>
                  <span @click="ITD_Modal = !ITD_Modal" style="cursor: pointer;" class="benefitsTitle">IMPROVED TEAM
                    DYNAMICS</span>
                </h2>
                <div v-if="ITD_Modal === true">
                  <p class="benefitsModalText">
                    By visualizing and acknowledging distinct communication styles, teams can better understand and
                    leverage the diversity of perspectives, leading to improved collaboration and productivity.
                  </p>
                  <br />
                </div>
                <hr>
                <h2>
                  <span class="benefitsPlus">
                    <img v-if="CR_Modal === false" src="~/assets/bluePlus.png" alt="blue plus symbol"
                      @click="CR_Modal = true">
                    <img v-else src="~/assets/blueMinus.png" alt="open modal" @click="CR_Modal = false"
                      class="blueMinus">
                  </span>
                  <span @click="CR_Modal = !CR_Modal" style="cursor: pointer;" class="benefitsTitle">CONFLICT
                    REDUCTION</span>
                </h2>
                <div v-if="CR_Modal === true">
                  <p class="benefitsModalText">
                    The use of DISC Blocks can help preempt misunderstandings and conflicts by providing a clear
                    framework for interpreting team members' behaviors and responses.
                  </p>
                  <br />
                </div>
                <hr>
                <h2>
                  <span class="benefitsPlus">
                    <img v-if="CL_Modal === false" src="~/assets/bluePlus.png" alt="blue plus symbol"
                      @click="CL_Modal = true">
                    <img v-else src="~/assets/blueMinus.png" alt="open modal" @click="CL_Modal = false"
                      class="blueMinus">
                  </span>
                  <span @click="CL_Modal = !CL_Modal" style="cursor: pointer;" class="benefitsTitle">CONTINUOUS
                    LEARING</span>
                </h2>
                <div v-if="CL_Modal === true">
                  <p class="benefitsModalText">
                    Implementing DISC Blocks promotes an environment of continuous learning and development, as team
                    members regularly assess and discuss communication styles, leading to ongoing improvements in team
                    efficacy.
                  </p>
                  <br />
                </div>
                <hr>
                <h2>
                  <span class="benefitsPlus">
                    <img v-if="ESA_Modal === false" src="~/assets/bluePlus.png" alt="blue plus symbol"
                      @click="ESA_Modal = true">
                    <img v-else src="~/assets/blueMinus.png" alt="open modal" @click="ESA_Modal = false"
                      class="blueMinus">
                  </span>
                  <span @click="ESA_Modal = !ESA_Modal" style="cursor: pointer;" class="benefitsTitle">ENHANCED
                    SELF-AWARENESS</span>
                </h2>
                <div v-if="ESA_Modal === true">
                  <p class="benefitsModalText">
                    DISC Blocks encourage individuals to reflect on their communication styles, fostering
                    self-awareness
                    and personal growth, which can lead to more effective interactions and leadership within the
                    organization.
                  </p>
                  <br />
                </div>
                <hr>
                <h2>
                  <span class="benefitsPlus">
                    <img v-if="TA_Modal === false" src="~/assets/bluePlus.png" alt="blue plus symbol"
                      @click="TA_Modal = true">
                    <img v-else src="~/assets/blueMinus.png" alt="open modal" @click="TA_Modal = false"
                      class="blueMinus">
                  </span>
                  <span @click="TA_Modal = !TA_Modal" style="cursor: pointer;" class="benefitsTitle">TAILORED
                    APPROACH</span>
                </h2>
                <div v-if="TA_Modal === true">
                  <p class="benefitsModalText">
                    DISC Blocks enable team members to adapt their communication strategies to suit different
                    situations
                    and audiences within the organization, allowing for more tailored and successful interactions.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
    <br>
    <br>
    <br>
    <br>
    <br>
    <section class="banner3">
      <img src="~/assets/Wave_2.png" alt="top wave" class="bannerTopWave" />
      <div class="container">
        <div class="row">
          <div class="col-12">
            <br />
            <h1>APPLICATION</h1>
            <br />
            <h2>
              <span class="applicationTitle">Building Communication & Understanding as a Team/Group</span>
            </h2>
            <br />
            <div class="row">
              <div class="col-12 peopleSmiling">
                <img src="~/assets/team_smiling.png" alt="team smiling" />
              </div>
              <div class="col-12">
                <h2>
                  <span class="appPlus">
                    <img v-if="SGP_EC_Modal === false" src="~/assets/whitePlus.png" alt="white plus symbol"
                      @click="SGP_EC_Modal = true">
                    <img v-else src="~/assets/whiteMinus.png" alt="white minus symbol" @click="SGP_EC_Modal = false">
                  </span>
                  <span @click="SGP_EC_Modal = !SGP_EC_Modal" style="cursor: pointer;">
                    <span class="appText">
                      Small Group Practice |</span><span class="applicationTitle"> DISC Block Challenge: Effective
                      Communication</span></span>
                </h2>
                <div v-if="SGP_EC_Modal === true">
                  <p class="appModalText">
                    In this activity, the team is divided into 4 small groups, with each given one DISC Block. Each
                    group is presented with a message, and they must craft an effective way to communicate the message
                    to their assigned DISC Block style. Each message is then shared with the group at large to gather
                    feedback on if that message has been communicated appropriately, or if there should be something
                    different in the communication. Discuss the implications of differing audiences, mindsets, the kind
                    of message (modality), context and timing of the message, and what the intention is of the message
                    compared to the perception of what may be received to ensure the message is effective. Then, switch
                    style blocks, and repeat with a new message to practice adaptability and incorporate feedback from
                    the first time through.
                  </p>
                  <br />
                </div>
                <hr>
                <h2>
                  <div v-if="SGP_S_Modal === true" class="expanseMargins"></div>
                  <span class="appPlus">
                    <img v-if="SGP_S_Modal === false" src="~/assets/whitePlus.png" alt="white plus symbol"
                      @click="SGP_S_Modal = true">
                    <img v-else src="~/assets/whiteMinus.png" alt="white minus symbol" @click="SGP_S_Modal = false">
                  </span>
                  <span @click="SGP_S_Modal = !SGP_S_Modal" style="cursor: pointer;">
                    <span class="appText">
                      Small Group Practice |</span><span class="applicationTitle"> DISC Block Challenge:
                      Scenarios</span></span>
                </h2>
                <div v-if="SGP_S_Modal === true">
                  <p class="appModalText">
                    In this activity, the team is divided into small groups, with each member given a full set of DISC
                    Blocks. Each group is presented with a series of hypothetical workplace scenarios requiring
                    cooperation, leadership, negotiation, and adaptability. Members silently choose the DISC Block that
                    they feel represents the best communication style to handle the situation. After revealing their
                    choices, each group discusses the benefits and potential drawbacks of the collective styles
                    represented. Through this engaging exercise, team members can gain a deeper understanding of how
                    different communication styles can be effective in a variety of contexts, fostering a sense of
                    empathy and strategic thinking within the team.
                  </p>
                  <br />
                </div>
                <hr>
                <h2>
                  <div v-if="WGP_Modal === true" class="expanseMargins"></div>
                  <span class="appPlus">
                    <img v-if="WGP_Modal === false" src="~/assets/whitePlus.png" alt="white plus symbol"
                      @click="WGP_Modal = true">
                    <img v-else src="~/assets/whiteMinus.png" alt="white minus symbol" @click="WGP_Modal = false">
                  </span>
                  <span @click="WGP_Modal = !WGP_Modal" style="cursor: pointer;">
                    <span class="appText">
                      Workshop/Large group Practice |</span><span class="applicationTitle"> Fostering Participation &
                      Understanding</span></span>
                </h2>
                <div v-if="WGP_Modal === true">
                  <div class="appModalText">
                    <ol>
                      <li>
                        <span class="appModalTextTitle">Ice Breaker Option 1: Introductions:</span> Start the workshop
                        by having each participant select a DISC
                        Block that they feel currently represents their communication style. Ask them to share why they
                        chose that block, encouraging a discussion about how different styles can positively impact a
                        workshop setting.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Ice Breaker Option 1: Observations:</span> Start the workshop by
                        having each participant introduce
                        themselves and share their name, role, something they love about their work, and something they
                        expanseMargins to learn about in the session. Ask each participant to choose the block that they
                        think
                        represents that person’s style, based on their observations of the short introduction.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Group Activities:</span> Divide participants into groups and
                        give each group a scenario to work through
                        using their complete set of DISC Blocks. Instruct them to clearly note which styles are being
                        used for which part of the solution. For example, tackling a problem that requires a balance of
                        assertiveness and careful planning might see both Red and Blue Blocks being used prominently.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Role Swap:</span> Challenge participants to swap blocks with
                        someone demonstrating a different style
                        and take on that style for an assigned time. This will encourage them to consider alternative
                        perspectives and approaches, emphasizing adaptability and empathy in communication.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Active Reflection:</span> Throughout the workshop, integrate
                        moments where participants reflect on the
                        activities in the session or their use of the DISC Blocks and what insights they've gained. They
                        can reflect in their own style, and then consider how another style would likely reflect on the
                        same activity. They could share how using a different style affected their interaction in the
                        group activity or their problem-solving approach.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Debrief Session:</span> Conclude the workshop with a debrief,
                        encouraging participants to discuss how
                        the use of DISC Blocks influenced the workshop dynamics and what they learned about other
                        communication styles. Gather ideas of how they may plan to use the DISC Blocks and encourage
                        them to teach someone else they know about the DISC styles using the blocks.
                      </li>
                    </ol>
                  </div>
                  <br />
                </div>
                <hr>
                <h2>
                  <div v-if="ZM_Modal === true" class="expanseMargins"></div>
                  <span class="appPlus">
                    <img v-if="ZM_Modal === false" src="~/assets/whitePlus.png" alt="white plus symbol"
                      @click="ZM_Modal = true">
                    <img v-else src="~/assets/whiteMinus.png" alt="white minus symbol" @click="ZM_Modal = false">
                  </span>
                  <span @click="ZM_Modal = !ZM_Modal" style="cursor: pointer;">
                    <span class="appText">
                      Zoom Meetings |</span><span class="applicationTitle"> Application in Virtual
                      settings</span></span>
                </h2>
                <div v-if="ZM_Modal === true">
                  <div class="appModalText">
                    <p>
                      To effectively use DISC Blocks in a <span class="appModalTextTitle1">virtual setting</span> like a
                      Zoom meeting, teams can follow these
                      steps:
                    </p>

                    <ol>
                      <li>
                        <span class="appModalTextTitle">Preparation:</span> Prior to the meeting, ensure each team
                        member has a set of DISC Blocks. In a
                        remote
                        work environment, this might mean mailing a set to each participant or using a digital
                        representation if physical blocks are not an option.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Introductions:</span> At the start of the Zoom call, have each
                        participant introduce themselves along
                        with
                        their chosen DISC Block for the meeting. Encourage team members to place their physical block or
                        digital representation in view of the camera.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Meeting Guidelines:</span> Establish guidelines for using DISC
                        Blocks during the meeting. For
                        instance,
                        if
                        a team member wishes to display a change in their communication style, they would hold up a
                        different color block to the camera.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Active Use:</span> Incorporate active block usage during
                        discussions. For example, when brainstorming,
                        a
                        team member could hold up their 'I' (Yellow) Block to indicate a preference for open, creative
                        dialogue, or display the 'D' (Red) Block when the conversation needs a more decisive turn.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Reflection:</span> At the end of the meeting, allow time for
                        participants to reflect on the
                        effectiveness
                        of the DISC Blocks. Ask for feedback on whether the visual cues helped facilitate better
                        communication and understanding.
                      </li>
                      <br />
                      <li>
                        <span class="appModalTextTitle">Follow-Up:</span> After the meeting, send out a quick survey or
                        have an asynchronous discussion in
                        your
                        team’s chat platform about the use of DISC Blocks and any insights gained from the exercise.
                      </li>
                    </ol>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div class="row">
            </div>
          </div>
        </div>
      </div>
      <img class="bannerBottomWave" src="~/assets/Wave_1.png" alt="bottom wave" />
    </section>
    <br />
    <br />
    <br />
    <div class="findUsFooter">
      <img src="~/assets/ATD_Find_us_at.png" alt="find us at white background" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <section class="banner4">
      <img src="~/assets/Wave_2.png" alt="top wave" class="bannerTopWave" />
    </section>
    <LazyHydrate when-visible><footer-fold /></LazyHydrate>
  </section>
</template>


<script>
export default {
  data() {
    return {
      ITD_Modal: false,
      CR_Modal: false,
      CL_Modal: false,
      ESA_Modal: false,
      TA_Modal: false,
      SGP_EC_Modal: false,
      SGP_S_Modal: false,
      WGP_Modal: false,
      ZM_Modal: false
    }
  },
  components: {
    "main-nav": () => import("@/components/Nav"),
    "footer-fold": () => import("@/components/Footer"),
  },
  methods: {
    orderButton() {
      window.open('https://store.assessments24x7.com/products/disc-blocks', '_blank');
    }
  }
};
</script>


<style lang="scss" scoped>
.bizx {
  .banner1 {
    background-color: #1e222d;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
    position: relative;

    .logo {
      width: 65%;
      margin-left: 60px;
    }

    h1 {
      font-size: 34pt;
      line-height: 34pt;
      margin-bottom: 0;
    }

    h2 {
      font-size: 30pt;
      margin-top: 20px;
      margin-bottom: 0;
    }

    h3 {
      font-size: 60pt;
      margin-bottom: -35px;
      margin-top: 0;
      margin-left: 120px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: left;
    }

    h4 {
      margin-left: 120px;
      font-size: 15pt;
      font-weight: 300;
      margin-bottom: -30px;
      text-align: left;
    }

    .bizx-logo {
      width: 100%;
      max-width: 220px;
      left: 40px;
      position: absolute;
    }

    .blocks {
      margin-top: 110px;
      margin-left: 80px;
    }

    .orderBtn {
      margin-left: -120px;
    }

    .findUs {
      max-width: 280px;
      margin-left: 120px;
      margin-top: -30px;
    }

    .bannerBottomWave {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -170px;
      z-index: -10;
    }
  }

  .whiteSection1 {
    h1 {
      font-size: 34pt;
      line-height: 34pt;
      margin-bottom: 0;
      margin-left: 20px;
    }

    p {
      margin-left: 20px;
    }

    .block {
      width: 100%;
      min-height: 55px;
    }
  }

  .banner2 {
    background-color: #1e222d;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
    position: relative;

    h3 {
      font-size: 40pt;
      margin-bottom: -35px;
      margin-top: 0;
      margin-left: 0px;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-align: left;
    }

    h4 {
      font-size: 15pt;
      font-weight: 300;
      margin-bottom: -30px;
      text-align: left;
    }

    P {
      font-weight: 300;
      margin-bottom: -30px;
      text-align: left;
    }

    .a-f-l-m {
      width: 100%;
    }

    .orderBtn {
      float: left;
    }

    .findUs {
      max-width: 380px;
      margin-left: 220px;
      margin-top: -80px;
    }

    .bannerBottomWave {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -170px;
      z-index: -10;
    }

    .bannerTopWave {
      position: absolute;
      width: 100%;
      left: 0;
      top: -180px;
      z-index: -10;
    }
  }

  .whiteSection2 {
    h1 {
      font-size: 36pt;
      line-height: 34pt;
      margin-bottom: 0;
      margin-left: 20px;
    }

    h2 {
      font-size: 24pt;
      margin-left: 60px;
    }

    hr {
      height: 4px;
      background-color: #1e222d;
      width: 95%;
      float: left;
      margin-top: -15px;
      margin-left: 20px;
    }

    .benefitsPlus {
      margin-left: -40px;
      margin-right: 20px;
      cursor: pointer;

      img {
        margin-bottom: 5px;
      }

      .blueMinus {
        cursor: pointer;
      }
    }

    .benefitsModalText {
      margin-left: 90px;
      margin-top: -20px;
    }

    .manSmiling {
      width: 100%;
    }
  }

  .banner3 {
    background-color: #1e222d;
    color: #fff;
    text-align: center;
    margin-bottom: 60px;
    position: relative;

    h1 {
      font-size: 36pt;
      line-height: 34pt;
      margin-bottom: -20px;
      text-align: left;
      margin-left: 20px;
    }

    h2 {
      font-size: 18pt;
      line-height: 0px;
      text-align: left;
      margin-left: 20px;
      margin-bottom: 0px;
      font-weight: 400;
    }

    hr {
      margin-bottom: -5px;
      margin-top: 10px;
    }

    .peopleSmiling {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }

    .expanseMargins {
      min-height: 7px;
    }

    .appPlus {
      margin-left: -20px;
      margin-right: 10px;
      cursor: pointer;

      img {
        margin-bottom: 5px;
      }
    }

    .appText {
      font-weight: 700;
    }

    ol li {
      padding-left: 20px;
    }

    .appModalText {
      text-align: left;
      margin-top: 25px;
      margin-bottom: -5px;

      .appModalTextTitle1 {
        font-weight: 700;
      }

      .appModalTextTitle {
        font-weight: 700;
        padding-right: 10px;
      }
    }

    .bannerBottomWave {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -170px;
      z-index: -10;
    }

    .bannerTopWave {
      position: absolute;
      width: 100%;
      left: 0;
      top: -180px;
      z-index: -10;
    }
  }

  .banner4 {
    position: relative;

    .bannerTopWave {
      position: absolute;
      width: 100%;
      left: 0;
      top: -180px;
      z-index: -10;
    }
  }

  .orderBtn {
    background-color: #095edd;
    color: white;
    border-radius: 10px;
    height: 50px;
    width: 140px;
    cursor: pointer;
  }

  .whiteArrow {
    max-width: 100px;
    margin-left: -300px;
  }

  .findUsFooter {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
}

@media (max-width: 1100px) {

  .bizx {
    .banner1 {
      .container {
        margin-top: -5px;

        h3,
        h4 {
          margin-left: 0px;
        }

        .orderBtn {
          display: block;
          margin-left: 0;
        }
      }

      .logo {
        margin: 0px 0px;
      }

      .blocks {
        width: 100%;
        margin-left: 0px;
      }
    }

    .banner1,
    .banner2,
    .banner3 {
      .bannerTopWave {
        top: -115px;
      }

      .bannerBottomWave {
        bottom: -110px;
      }

      .applicationTitle {
        line-height: 1.5;
      }
    }

    .col-5 h3 {
      margin: 0;
      line-height: 1;
    }

    .banner4 {
      .bannerTopWave {
        top: -115px;
      }
    }
  }
}

@media (max-width: 550px) {

  .bizx {
    .banner1 {
      .container {
        margin-top: -5px;
      }
    }

    .banner1,
    .banner2,
    .banner3 {
      .bannerTopWave {
        top: -80px;
      }

      .bannerBottomWave {
        bottom: -80px;
      }

      .whiteArrow {
        max-width: 20%;
      }

      .findUs {
        display: block;
        max-width: 60%;
        margin-top: -20px;
        margin-left: 30%;
      }
    }

    .whiteSection2 {
      .benefitsTitle {
        font-size: 20px;
      }
    }

    .banner4 {
      .bannerTopWave {
        top: -80px;
      }
    }
  }
}

@media (max-width: 430px) {

  .bizx {
    .banner1 {
      .container {
        margin-top: -5px;
      }
    }

    .banner1,
    .banner2,
    .banner3 {
      .bannerTopWave {
        top: -60px;
      }

      .bannerBottomWave {
        bottom: -60px;
      }
    }

    .banner4 {
      .bannerTopWave {
        top: -60px;
      }
    }
  }
}

@media (max-width: 390px) {

  .bizx {
    .banner1 {
      .container {
        margin-top: -5px;
      }
    }

    .banner1,
    .banner2,
    .banner3 {
      .bannerTopWave {
        top: -50px;
      }

      .bannerBottomWave {
        bottom: -50px;
      }
    }

    .banner4 {
      .bannerTopWave {
        top: -55px;
      }
    }
  }
}

@media (max-width: 300px) {

  .bizx {
    .banner1 {
      .container {
        margin-top: -5px;
      }
    }

    .banner1,
    .banner2,
    .banner3 {
      .bannerTopWave {
        top: -40px;
      }

      .bannerBottomWave {
        bottom: -40px;
      }
    }

    .whiteSection2 {
      .benefitsTitle {
        font-size: 18px;
      }
    }

    .banner4 {
      .bannerTopWave {
        top: -40px;
      }
    }
  }
}
</style>