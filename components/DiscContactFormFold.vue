<template>
  <section class="contactFormSection">
    <div class="container-wrapper">
      <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
        <div class="row">
          <h1 style="text-align: center;">
            Get in Touch
          </h1>
          <br />
          <div class="col-12 justify-content-center">
            <div class="form-container">
              <contact-form style="background: white;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  components: {
    'contact-form': () => import('@/components/ContactForm'),
  }
}
</script>


<style lang="scss" scoped>
.contactFormSection {
  background-size: cover;
  background-position: center;
  min-height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .container-wrapper {
    position: relative;
    width: 100%;
  }

  h1 {
    color: #0033c5;
    font-weight: bold;
    font-size: 55px;
    margin-top: 80px;
    margin-bottom: -15px;
  }

  h2 {
    margin-top: 0px;
    font-weight: 700;
    text-align: center;
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
}
</style>