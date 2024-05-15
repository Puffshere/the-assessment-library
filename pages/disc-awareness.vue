<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
        <enhancing></enhancing>
        <examples></examples>
        <contact-form></contact-form>
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import Enhancing from '@/components/EnhancingFold';
  import Examples from '@/components/ExamplesFold';
  import ContactForm from '@/components/DiscAwarenessContactFormFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
      'enhancing': Enhancing,
      'examples': Examples,
      'contact-form': ContactForm,
      'footer-fold': Footer
    },
    head() {
      return {
        title: 'DISC Awareness | Assessments 24x7',
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