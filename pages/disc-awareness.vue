<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
        <disc-awareness-hero></disc-awareness-hero>
        <enhancing></enhancing>
        <examples></examples>
        <awareness-concepts></awareness-concepts>
        <contact-form></contact-form>
        <asi></asi>
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import DiscAwarenessHero from '@/components/DiscAwarenessHeroFold';
  import Enhancing from '@/components/EnhancingFold';
  import Examples from '@/components/ExamplesFold';
  import AwarenessConcepts from '@/components/AwarenessConceptsFold';
  import ContactForm from '@/components/DiscAwarenessContactFormFold';
  import Asi from '@/components/ASIFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
      'disc-awareness-hero': DiscAwarenessHero,
      'enhancing': Enhancing,
      'examples': Examples,
      'awareness-concepts': AwarenessConcepts,
      'contact-form': ContactForm,
      'asi': Asi,
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