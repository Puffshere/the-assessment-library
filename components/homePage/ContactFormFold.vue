<template>
  <section id="contactFormSection">
    <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
      style="position: absolute; left: 0px; margin-bottom: 855px;" class="accents">
    <div class="container-wrapper">
      <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 100px;">
        <div class="row">
          <h2 style="margin-top: 12px; margin-bottom: -20px;">
            <span style="color: #0033C5;">Let's connect</span> <br />
          </h2>
          <p>
            Connect with us to get instant support and answers to all your assessment-related questions.
          </p>
          <div class="col-12 justify-content-center">
            <div class="form-container">
              <contact-form style="background: white;" />
            </div>
          </div>
        </div>
      </div>
      <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
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
  min-height: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  position: relative;
}

.container-wrapper {
  position: relative;
  width: 100%;
}

.accents-right {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 45%;
  z-index: -1;
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

@media (max-width: 1200px) {

  .accents,
  .accents-right {
    display: none;
  }
}

@media (max-width: 450px) {

  p {
    padding: 0 20px !important;
  }
}
</style>
