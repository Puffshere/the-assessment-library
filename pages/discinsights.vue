<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
       <!-- <contact-form></contact-form> -->
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import ContactForm from '@/components/discinsights/DiscInsightsContactFormFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
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