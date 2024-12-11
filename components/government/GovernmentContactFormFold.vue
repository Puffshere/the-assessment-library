<template>
  <section id="GovernmentContactFormSection">
    <div class="container-wrapper">
      <div class="container d-flex justify-content-center align-items-center" style="padding-bottom: 60px;">
        <div class="row">
          <h3 style="margin-top: 40px; margin-bottom: 30px;">
            <span style="color: #1E222D;"><span style="color: #00A8FF;">Enhance</span> your mission success today</span>
            <br />
          </h3>
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
    'contact-form': () => import('@/components/GovernmentContactForm')
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

section {
  background-size: cover;
  background-position: center;
  min-height: 660px;
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

h3 {
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

@media (max-width: 1200px) {}

@media (max-width: 450px) {

  p {
    padding: 0 20px !important;
  }
}
</style>
