<template>
  <section>
    <main-nav class="nav"></main-nav>
    <section class="body">
      <hero></hero>
      <our-difference></our-difference>
      <quick-links></quick-links>
      <application></application>
      <implementation></implementation>
      <certification></certification>
      <results></results>
      <quote></quote>
      <sample-reports></sample-reports>
      <empowers></empowers>
      <contact-form></contact-form>
      <interest></interest>
    </section>
    <footer-fold class="foot"></footer-fold>
  </section>
</template>

<script>
import Nav from '@/components/Nav';
import Hero from '@/components/DiscHeroFold';
import OurDifference from '@/components/OurDifferenceFold';
import QuickLinks from '@/components/QuickLinksFold';
import Application from '@/components/ApplicationFold';
import Implementation from '@/components/ImplementationFold';
import Certification from '../components/CertificationFold.vue';
import Results from '@/components/ResultsFold';
import Quote from '@/components/QuoteFold';
import SampleReports from '@/components/SampleReportsFold';
import Empowers from '@/components/EmpowersFold';
import ContactForm from '@/components/DiscContactFormFold';
import Interest from '@/components/InterestFold';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-nav': Nav,
    'hero': Hero,
    'our-difference': OurDifference,
    'quick-links': QuickLinks,
    'application': Application,
    'implementation': Implementation,
    'certification': Certification,
    'results': Results,
    'quote': Quote,
    'sample-reports': SampleReports,
    'empowers': Empowers,
    'contact-form': ContactForm,
    'interest': Interest,
    'footer-fold': Footer
  },
  head() {
    return {
      title: 'DISC | Assessments 24x7',
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


<style lang="scss" scoped>
.nav {
  position: relative;
}

.foot {
  position: relative;
}
</style>