<template>
  <section id="contactFormSection">
    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+5+-+Bottom+right.png"
      alt="fold 4 graphic" style="position: absolute; right: 0px; margin-bottom: -835px; width: 45%;">
    <img src="https://cdn.assessments24x7.com/file/assessments24x7-media/Account+Levels/Fold+1_3_5+-+Upper+Left.png"
      alt="fold 4 graphic" style="position: absolute; left: 0px; margin-bottom: 980px;">
    <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
      <div class="row">
        <h2 style="margin-top: 12px; margin-bottom: -20px;">
          <span style="color: #0033C5;">Let's connect</span> <br />
        </h2>
        <p>
          Connect with us to get instant support and answers to all your assessment-related questions.
        </p>
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

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

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
  font-weight: 700;
  text-align: center;
}

p {
  color: #213C85;
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