<template>
  <section>
    <main-nav class="nav"></main-nav>
    <section class="body">
      <hero></hero>
      <icf-credits></icf-credits>
      <strive></strive>
      <why-disc></why-disc>
      <client-success></client-success>
      <foundation></foundation>
      <what-you-recieve></what-you-recieve>
      <contact-form></contact-form>
    </section>
    <footer-fold class="foot"></footer-fold>
  </section>
</template>

<script>
import Nav from '@/components/Nav';
import Hero from '@/components/coachesDISCCertification/CDCHeroFold';
import ICFCredits from '@/components/coachesDISCCertification/CDCICFCreditsFold';
import Strive from '@/components/coachesDISCCertification/CDCStriveFold';
import WhyDISC from '@/components/coachesDISCCertification/CDCWhyDISCCertification';
import ClientSuccess from '@/components/coachesDISCCertification/CDCClientSuccess';
import Foundation from '@/components/coachesDISCCertification/CDCFoundation';
import WhatYouRecieve from '@/components/coachesDISCCertification/CDCWhatYouRecieve';
import ContactForm from '@/components/coachesDISCCertification/CDCContactFormFold';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-nav': Nav,
    'hero': Hero,
    'icf-credits': ICFCredits,
    'strive': Strive,
    'why-disc': WhyDISC,
    'client-success': ClientSuccess,
    'foundation': Foundation,
    'what-you-recieve': WhatYouRecieve,
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