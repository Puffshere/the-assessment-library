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

      <our-difference></our-difference>
      <quick-links></quick-links>
      <application></application>
      <implementation></implementation>

      <section class="whyCertification" id="certification">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Why DISC Certification?
              </h1>
            </div>
          </div>
        </div>
      </section>

      <results></results>

      <section class="quote" id="quote">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>
                Quote
              </h1>
            </div>
          </div>
        </div>
      </section>

      <sample-reports></sample-reports>
      <empowers></empowers>
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

      <interest></interest>

    </section>
    <footer-fold class="foot"></footer-fold>
  </section>
</template>

<script>
import axios from 'axios';
import Nav from '@/components/Nav';
import OurDifference from '@/components/OurDifferenceFold';
import QuickLinks from '@/components/QuickLinksFold';
import Application from '@/components/ApplicationFold';
import Implementation from '@/components/ImplementationFold';
import Results from '@/components/ResultsFold';
import SampleReports from '@/components/SampleReportsFold';
import Empowers from '@/components/EmpowersFold';
import Interest from '@/components/InterestFold';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-nav': Nav,
    'our-difference': OurDifference,
    'quick-links': QuickLinks,
    'application': Application,
    'implementation': Implementation,
    'results': Results,
    'sample-reports': SampleReports,
    'empowers': Empowers,
    'interest': Interest,
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

//  Why Certification Section

.whyCertification {
  min-height: 700px;

  h1 {
    color: #1e222d;
    margin: 0px;
    font-size: 65px;
  }
}

//  Quote Section

.quote {
  min-height: 600px;
  background-color: #00a8ff;

  h1 {
    margin: 0px;
    font-size: 65px;
    position: absolute;
    left: 60px;
    top: 60px;
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

@media (max-width: 600px) {}

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