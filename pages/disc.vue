<template>
  <section>
    <main-nav class="nav"></main-nav>
    <section class="body">
      <section class="hero">

      </section>
      <section class="ourDifference">

      </section>
      <section class="quickLinks">

      </section>
      <section class="application">

      </section>
      <section class="implementation">

      </section>
      <section class="whyCertification">

      </section>
      <section class="results">

      </section>
      <section class="draftKings">

      </section>
      <section class="sampleReports">

      </section>
      <section class="sectionAboveForm">

      </section>
      <br />
      <br />
      <br />
      <br />
      <section class="form">
        <div class="container flex-container" id="form">
          <div class="row flex-container">
            <div class="col-12">
              <h1 class="formTitle">
                Get Started
              </h1>
            </div>
          </div>
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
                  <img src="~/assets/submit-icon.png" alt="submit icon" class="submitIcon" />
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
    </section>
    <section class="underBody">

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
    font-size: 55px;
    margin-top: -10px;
    margin-bottom: -15px;
  }

  h2 {
    color: white;
    font-size: 45px;
    margin-top: -10px;
    margin-bottom: -10px;
    font-weight: 400;
  }

  h3 {
    font-size: 28px;
    margin-bottom: 10px;
  }
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00a8ff;
  min-height: 700px;
}

.ourDifference {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 700px;
}

.quickLinks {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 700px;
}

.application {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00a8ff;
  min-height: 700px;
}

.implementation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e222d;
  min-height: 700px;
}

.whyCertification {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 700px;
}

.results {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e222d;
  min-height: 700px;
}

.draftKings {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00a8ff;
  min-height: 700px;
}

.sampleReports {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  min-height: 700px;
}

.sectionAboveForm {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e222d;
  min-height: 700px;
}

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
      width: 24%;
    }

    .submitIcon {
      width: 100%;
    }
  }
}

.underBody {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00a8ff;
  min-height: 400px;
}

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