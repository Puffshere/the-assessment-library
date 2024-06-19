<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
        <hero-fold></hero-fold>
        <workplace-sample-fold></workplace-sample-fold>
        <executive-sample-fold></executive-sample-fold>
       <contact-form></contact-form>
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import HeroFold from '@/components/discInsights/DiscInsightsHeroFold';
  import WorkplaceSampleFold from '@/components/discInsights/WorkplaceSampleFold';
  import ExecutiveSampleFold from '@/components/discInsights/ExecutiveSampleFold';
  import ContactForm from '@/components/discInsights/DiscInsightsContactFormFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
      'hero-fold': HeroFold,
      'workplace-sample-fold': WorkplaceSampleFold,
      'executive-sample-fold': ExecutiveSampleFold,
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