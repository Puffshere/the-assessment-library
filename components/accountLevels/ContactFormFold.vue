<template>
  <section id="contactFormSection">
    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-left-graphic.png"
      alt="fold 4 graphic" style="position: absolute; right: 0px; margin-bottom: -800px;">
    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Success+Magazine/fold4-left-graphic.png"
      alt="fold 4 graphic" style="position: absolute; left: 0px; margin-top: -900px;">
    <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
      <div class="row">
        <h2>
          <span style="color: #0033C5;">Experience our platform — Book a live demo!</span> <br />
        </h2>
        <div class="col-12 d-flex justify-content-center">
          <div class="form-container">
            <contact-form style="background: white;" />
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
  background-size: cover;
  background-position: center;
  min-height: 1088px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
}

h2 {
  font-size: 18pt;
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
</style>