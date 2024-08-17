<template>
  <section>
    <LazyHydrate when-visible><main-nav class="nav"></main-nav></LazyHydrate>
    <LazyHydrate when-visible><hero></hero></LazyHydrate>
    <!-- <LazyHydrate when-visible><icf-credits></icf-credits></LazyHydrate>
    <LazyHydrate when-visible><strive></strive></LazyHydrate>
    <LazyHydrate when-visible><why-disc></why-disc></LazyHydrate>
    <LazyHydrate when-visible><client-success></client-success></LazyHydrate>
    <LazyHydrate when-visible><foundation></foundation></LazyHydrate>
    <LazyHydrate when-visible><what-you-recieve></what-you-recieve></LazyHydrate>
    <LazyHydrate when-visible><contact-form></contact-form></LazyHydrate> -->
    <LazyHydrate when-visible><footer-fold class="foot"></footer-fold></LazyHydrate>
  </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
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
    LazyHydrate,
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