<template>
  <section>
    <main-nav class="nav"></main-nav>
    <section class="body">

      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <h1>
                Drive
              </h1>
              <br />
              <h1>
                Organizational
              </h1>
              <br />
              <h1>
                Success
              </h1>
              <h2 class="heroSubtext">
                Let DISC Lead the way.
              </h2>
              <a href="#form"><img src="~/assets/disc/learn-button.png" alt="learn button" class="learnButton" /></a>
            </div>
            <div class="col-7">
              <div class="video-container">
                <video ref="videoElement" class="video-player" controls>
                  <source src="https://cdn.assessments24x7.com/file/assessments24x7-media/get-in-touch-video.mp4"
                    type="video/mp4">
                  Your browser does not support the video tag.
                </video>
                <img v-if="showThumbnail" src="~/assets/get-in-touch-video-image.png" @click="playVideo"
                  class="video-thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ourDifference">
        <video autoplay muted loop id="myVideo">
          <source src="https://cdn.assessments24x7.com/file/assessments24x7-media/our-difference-video.mp4"
            type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Our
              </h1>
              <h1>
                Difference
              </h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3>
                Discover our comprehensive suite of DISC assessments, offering the flexibility to align with YOUR
                organization's mission, vision, and core values. Seamlessly integrate our technology Into your current
                system via our robust API service, empowering you to infuse your organization's culture into customized
                reports.
              </h3>
              <h3>
                Manage assessments through your personalized dashboard and utilize our extensive training materials
                library, which includes coaching resources, workshop facilitator materials, and a 52-week email series.
              </h3>
              <h3>
                Take your knowledge to the next level with DISC certification to maximize the benefits of our platform.
                Enjoy exceptional customer service supported by decades of expertise in customer satisfaction, ensuring
                prompt and thorough answers to your questions.
              </h3>
              <a href="#form"><img src="~/assets/disc/get-started-button.png" alt="submit icon"
                  class="submitIcon" /></a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section class="quickLinks">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Quick Links
              </h1>
              <br />
              <div class="row">
                <a href="#application" style="cursor: pointer;">
                  <div class="col-6">
                    <h2>Application</h2>
                    <img src="~/assets/disc/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                  </div>
                </a>
                <a href="#results" style="cursor: pointer;">
                  <div class="col-6">
                    <h2>Results</h2>
                    <img src="~/assets/disc/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                  </div>
                </a>
              </div>
              <div class="row">
                <a href="#implementation" style="cursor: pointer;">
                  <div class="col-6">
                    <h2>Implementation</h2>
                    <img src="~/assets/disc/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                  </div>
                </a>
                <a href="#quote" style="cursor: pointer;">
                  <div class="col-6">
                    <h2>What our Clients say</h2>
                    <img src="~/assets/disc/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                  </div>
                </a>
              </div>
              <div class="row">
                <a href="#certification" style="cursor: pointer;">
                  <div class="col-6">
                    <h2>Certification</h2>
                    <img src="~/assets/disc/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                  </div>
                </a>
                <a href="https://www.assessments24x7.com/sample-reports" style="cursor: pointer;">
                  <div class="col-6">
                    <h2>Sample Reports</h2>
                    <img src="~/assets/disc/white-arrow.png" alt="white arrow icon" class="whiteArrow">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="application" id="application">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Application
              </h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>
                DISC offers versatile applications that can revolutionize various aspects of your organization.
              </h2>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-12">
              <div class="col-4 boxes">
                <img src="~/assets/disc/applicationIcon1.png" alt="api icon" class="icon" />
                <h3>
                  Team
                </h3>
                <h3>
                  Training
                </h3>
                <br />
                <br />
                <hr />
                <p>
                  Enhance team dynamics and collaboration by leveraging DISC insights to
                  understand each team member's communication style, strengths, and areas for development.
                  Tailor training sessions to foster effective communication, conflict resolution, and synergy
                  among team members, ultimately boosting productivity and morale.
                </p>
              </div>
              <div class="col-4 boxes">
                <img src="~/assets/disc/applicationIcon2.png" alt="custom reports icon" class="icon" />
                <h3>
                  Leadership
                </h3>
                <h3>
                  Development
                </h3>
                <br />
                <br />
                <hr />
                <p>
                  Empower leaders to understand their own leadership style and adapt their approach to effectively
                  lead diverse teams. DISC assessments provide valuable insights into leadership behaviors,
                  decision-making preferences, and motivational drivers, enabling leaders to inspire, motivate,
                  and mentor their team members more effectively.
                </p>
              </div>
              <div class="col-4 boxes">
                <img src="~/assets/disc/applicationIcon3.png" alt="branding and user experience icon" class="icon" />
                <h3>
                  Hiring &
                </h3>
                <h3>
                  Selection
                </h3>
                <br />
                <br />
                <hr />
                <p>
                  Streamline your recruitment process by incorporating DISC assessments to identify candidates who
                  not only possess the necessary skills and qualifications but also align with your organization's
                  culture and values. Use DISC insights to assess candidates' communication styles, work
                  preferences, and potential fit within specific roles, ensuring better hiring decisions and
                  long-term employee success.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>

      <section class="implementation" id="implementation">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="col-5">
              </div>
              <div class="col-7">
                <h1>
                  Implementation
                </h1>
              </div>
            </div>"
          </div>
        </div>
      </section>

      <section class="whyCertification" id="certification">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Why Certification
              </h1>
            </div>"
          </div>
        </div>
      </section>

      <section class="results" id="results">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Results
              </h1>
            </div>"
          </div>
        </div>
      </section>

      <section class="quote" id="quote">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Quote
              </h1>
            </div>"
          </div>
        </div>
      </section>

      <section class="sampleReports">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Sample Reports
              </h1>
            </div>"
          </div>
        </div>
      </section>

      <section class="empowers" id="empowers">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Empowers
              </h1>
            </div>"
          </div>
        </div>
      </section>
      <br />

      <section class="form" id="form">
        <div class="container flex-container" id="form">
          <div class="row flex-container">
            <div class="col-12">
              <h1 class="formTitle">
                Get Started
              </h1>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-12">
                <div class="col-6">
                  <div>
                    <label for="name">Name</label>
                    <input v-model="form.name" type="text" id="name" required>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <label for="email">Email</label>
                    <input v-model="form.email" type="email" id="email" required>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="col-6">
                  <div>
                    <label for="phoneNumber">Phone Number</label>
                    <input v-model="form.phoneNumber" type="text" id="phoneNumber" required>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <label for="company">Company</label>
                    <input v-model="form.company" type="text" id="company" required>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="col-12">
                  <div>
                    <label for="message">Message</label>
                    <input v-model="form.message" type="text" id="message" class="messageBox" required>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col-12">
                <button type="submit" class="submitBtn">
                  <img src="~/assets/disc/blue-submit-button.png" alt="submit icon" class="submitIcon" />
                </button>
              </div>
            </div>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>

      <section class="interest">
        <br />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 style="color: white;">
                Interested in learning more abour our
              </h1>
              <h1 style="color: black;">
                Customizations & API Intergration?
              </h1>
              <br />
              <a href="https://www.assessments24x7.com/customizations"><img
                  src="~/assets/disc/black-learn-more-button.png" alt="black learn more button"
                  class="learnButton" /></a>
              <img src="~/assets/disc/curvy-white-arrow.png" alt="curvy white arrow" class="whiteArrow" />
            </div>
          </div>
        </div>
      </section>

    </section>
    <footer-fold class="foot"></footer-fold>
  </section>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import axios from 'axios';

export default {
  components: {
    'main-nav': Nav,
    'footer-fold': Footer
  },
  data() {
    return {
      showThumbnail: true,
      form: {
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        message: ''
      }
    };
  },
  head() {
    return {
      title: 'DISC | Assessments 24x7',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  methods: {
    playVideo() {
      this.$refs.videoElement.play();
      this.showThumbnail = false;
    },
    async submitForm() {
      console.log('Form submitted:', this.form);

      // Split the name input into firstName and lastName
      const names = this.form.name.split(' ');
      this.firstName = names[0];
      this.lastName = names.length > 1 ? names.slice(1).join(' ') : ''; // Join the rest in case of middle names

      try {
        const salesPerson = await axios.get('/api/lead/next-assignment');

        const lead = await axios.post('/api/lead', {
          salesPerson: salesPerson.data,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.form.phoneNumber,
          email: this.form.email,
          company: this.form.company,
          message: this.form.message
        });

        const { data } = await axios.post('/api/contact', {
          contact: {
            email: this.form.email,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.form.phoneNumber,
            company: this.form.company,
            message: this.form.message,
            fieldValues: [
              {
                field: '79', // Sales Person Assignment
                value: salesPerson.data
              }
            ]
          }
        });

        const updatedLead = await axios.put(`/api/lead/${lead.data._id}/${data.contact.id}`);

        // Apply the "Contact Form -> Filled Out Contact Form" tag (tag id 43)
        await axios.post(`/api/contact/${data.contact.id}/tag/43`);

        // Apply the "ATD 2024 Get in Touch Form" tag (tag id 998)
        await axios.post(`/api/contact/${data.contact.id}/tag/998`);

        // Create an account and associate the contact to it
        await axios.post(`/api/contact/${data.contact.id}/account`, {
          company: this.form.company
        });

        this.$toast.open({
          message: 'Your information has been successfully submitted!',
          position: 'top',
          duration: 8000,
          type: 'success'
        });

        this.$router.push(this.redirect || `/thank-you?clientType=${this.form.clientType}&contactId=${data.contact.id}`);

      } catch (err) {
        this.isDisabled = false;
        this.loading = false;
        this.$toast.open({
          message: 'An unexpected error has occurred. Please try again later.',
          position: 'top',
          duration: 8000,
          type: 'error'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
}

.body {
  .flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h1 {
    color: white;
    font-weight: bold;
  }

  h2 {
    color: white;
    font-size: 45px;
    margin-top: -5px;
    margin-bottom: -10px;
    font-weight: 400;
  }

  h3 {
    font-size: 28px;
    color: #00a8ff;
  }
}

//  Hero Section

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #1e222d 40%, #00a8ff 40%);

  .video-container {
    position: relative;
    width: 90%;
    padding: 40px;
    margin: 0 auto;
  }

  .video-player {
    width: 100%;
  }

  .video-thumbnail {
    position: absolute;
    left: 0;
    width: 100%;
    cursor: pointer;
  }

  .logo {
    max-width: 100%;
  }

  .flex-container {
    display: flex;
    align-items: center;

    .titleHr {
      width: 100%;
    }
  }

  .learnButton {
    margin-left: 30px;
    margin-top: 35px;
    width: 210px;
    cursor: pointer;
  }
}

h1 {
  font-size: 48px;
  padding: 20px;
  margin-bottom: -150px;
  margin-left: 10px;
}

.hero .col-12 {
  width: 100%;
}

.hero .col-7 {
  background-color: #00a8ff;
  min-height: 440px;
  margin: 0px;
  width: 60%;
}

.hero .col-5 {
  background-color: #1e222d;
  width: 40%;
  margin: 0px;
  min-height: 440px;
}

.hero .col-5 .heroSubtext {
  color: #00a8ff;
  font-size: xx-large;
  padding: 20px;
  margin-top: 100px;
  margin-left: 10px;
}

//  Our Difference Section

.ourDifference {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.ourDifference video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.ourDifference .container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: -20px;
}

.ourDifference .submitIcon {
  position: absolute;
  right: 20px;
  bottom: 95px;
  width: 220px;
  height: auto;
}

.ourDifference .container h1 {
  color: #00a8ff;
  font-size: 65px;
  text-align: right;
}

.ourDifference .container h3 {
  color: black;
  font-size: 23px;
  text-align: left;
  font-weight: 400;
  padding: 0 46px;
}

//  Quick Links Section

.quickLinks {
  min-height: 590px;
  display: flex;
  text-align: center;

  .whiteArrow {
    max-width: 24px;
  }

  img {
    float: right;
    margin-top: -22px;
  }


  .col-6 {
    background-color: #00a8ff;
    padding: 20px;
    border-radius: 20px;
    min-height: 90px;
    align-content: center;
    text-align: left;
    max-width: 450px;
    margin-left: 60px;
  }

  h1 {
    color: #1e222d;
    margin: 0px;
    font-size: 53px;
    font-weight: 700;
    margin-top: 14px;
  }

  h2 {
    font-size: 26px;
  }
}

//  Application Section

.application {
  min-height: 700px;
  background-color: #00a8ff;

  .row {
    label {
      text-align: left;
      display: block;
    }
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  hr {
    margin: 0px 20px;
    margin-top: -6px;
  }

  .paragraph {
    font-weight: 700;
  }

  p {
    padding: 0 22px;
  }

  .boxes {
    background-color: white;
    min-height: 485px;
    border-radius: 10px;
    margin-bottom: 60px;
    text-align: left;
  }

  img {
    max-width: 100%;
    border-radius: 20px;
    padding: 5px;
  }

  .icon {
    width: 22%;
    margin-top: -35px;
    margin-right: 10px;
    float: right;
  }

  label {
    color: white;
    font-weight: bold;
    font-size: 22px;
  }

  input {
    width: 100%;
    min-height: 70px;
    border-radius: 8px;
    padding: 0 20px;
    font-size: 24px;
  }

  .messageBox {
    min-height: 110px;
  }

  .submitBtn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 230px;
  }

  .submitIcon {
    width: 100%;
  }

  h1 {
    margin: 0px;
    font-size: 65px;
    position: absolute;
    top: 60px;
    color: white;
  }

  h2 {
    margin-left: 20px;
    font-size: 23px;
    position: absolute;
    color: white;
  }

  h3 {
    margin-left: 20px;
    margin-bottom: -30px;
    font-size: 24px;
  }
}

//  Implementiation Section

.implementation {
  background-color: #1e222d;
  min-height: 700px;

  h1 {
    font-size: 65px;
    float: right;
  }
}

//  Why Certification Section

.whyCertification {
  min-height: 700px;

  h1 {
    color: #1e222d;
    margin: 0px;
    font-size: 65px;
  }
}

//  Results Section

.results {
  background-color: #1e222d;
  min-height: 700px;

  h1 {
    font-size: 65px;
    float: right;
  }
}

//  Quote Section

.quote {
  min-height: 700px;
  background-color: #00a8ff;

  h1 {
    margin: 0px;
    font-size: 65px;
    position: absolute;
    left: 60px;
    top: 60px;
  }
}

//  Sample Reports Section

.sampleReports {
  min-height: 700px;

  h1 {
    color: #1e222d;
    margin: 0px;
    font-size: 65px;
  }
}

//  Empowers Section

.empowers {
  background-color: #1e222d;
  min-height: 700px;

  h1 {
    font-size: 65px;
    float: right;
  }
}

//  Form Section

.form {
  .row {
    label {
      text-align: left;
      display: block;
    }
  }

  .container {
    .formTitle {
      color: #0033c5;
    }

    label {
      color: #0033c5;
      font-weight: bold;
      font-size: 22px;
    }

    input {
      background-color: #abd7ff;
      border: none;
      width: 100%;
      min-height: 70px;
      border-radius: 8px;
      padding: 0 20px;
      font-size: 24px;
    }

    .messageBox {
      min-height: 110px;
    }

    .submitBtn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      width: 230px;
    }

    .submitIcon {
      width: 100%;
    }
  }
}

//  Interest Section

.interest {
  background-color: #00a8ff;
  min-height: 400px;

  h1 {
    margin: 0px;
    padding: 0px;
    font-size: 47px;
    letter-spacing: 3px;
    margin-bottom: -15px;
    font-weight: 600;
  }

  .learnButton {
    width: 240px;
  }

  .whiteArrow {
    width: 140px;
    padding-left: 30px;
  }
}

//  Footer

.foot {
  position: relative;
}

@media (max-width: 1025px) {

  .body {
    .submitBtn {
      width: 50%;
    }
  }
}

@media (max-width: 600px) {

  .body {

    .quickLinks,
    .col-6 {
      margin-left: 5px;
    }

    .quickLinks,
    .row {
      padding: 0px;
    }
  }
}

@media (max-width: 390px) {

  .body {
    h1 {
      font-size: 45px;
    }

    h2 {
      font-size: 35px;
    }
  }
}
</style>