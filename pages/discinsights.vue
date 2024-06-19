<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
        <hero-fold></hero-fold>
       <contact-form></contact-form>
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import HeroFold from '@/components/discInsights/DiscInsightsHeroFold';
  import ContactForm from '@/components/discInsights/DiscInsightsContactFormFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
      'hero-fold': HeroFold,
      'contact-form': ContactForm,
      'footer-fold': Footer
    },
    head() {
      return {
        title: 'DISC Insights | Assessments 24x7',
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