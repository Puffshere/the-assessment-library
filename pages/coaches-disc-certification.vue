<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
        <hero></hero>
        <icf-credits></icf-credits>
        <strive></strive>
        <contact-form></contact-form>
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import Hero from '@/components/coachesDISCCertification/CDCHeroFold';
  import ICFCredits from '@/components/coachesDISCCertification/ICFCreditsFold';
  import Strive from '@/components/coachesDISCCertification/StriveFold';
  import ContactForm from '@/components/coachesDISCCertification/ContactFormFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
      'hero': Hero,
      'icf-credits': ICFCredits,
      'strive': Strive,
      'contact-form': ContactForm,
      'footer-fold': Footer
    },
    head() {
      return {
        title: 'Coaches DISC Certification | Assessments 24x7',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: ''
          }
        ]
      }
    }
  }
  </script>