<template>
    <section id="contactFormSection">
      <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
        <div class="row">
          <h1>
            <span style="color: #213C85;">Experience the Transformation:</span> <br />
            <span style="color: #E0AD2B;">Speak to a Specialist today</span>
          </h1>
          <div class="col-12 d-flex justify-content-center">
            <div class="form-container">
              <contact-form style="background: white;"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    components: {
      'contact-form': () => import('@/components/ContactForm')
    }
  }
  </script>
  
  <style scoped>
  section {
    background: url('https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/skyline-background.png');
    background-size: cover;
    background-position: center;
    min-height: 1088px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  h1 {
    font-size: 27pt;
    font-weight: 700;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .form-container {
    width: 100%; 
    max-width: 800px; 
    padding: 20px;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.col-12 {
    display: flex;
    justify-content: center;
  }
  </style>
  