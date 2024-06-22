<template>
    <section>
      <main-nav class="nav"></main-nav>
      <section class="body">
        <hero-fold></hero-fold>
        <workplace-sample-fold></workplace-sample-fold>
        <workplace-benefits></workplace-benefits>
        <executive-sample-fold></executive-sample-fold>
        <executive-benefits></executive-benefits>
        <compare></compare>
       <contact-form></contact-form>
      </section>
      <footer-fold class="foot"></footer-fold>
    </section>
  </template>
  
  <script>
  import Nav from '@/components/Nav';
  import HeroFold from '@/components/discInsights/DiscInsightsHeroFold';
  import WorkplaceSampleFold from '@/components/discInsights/WorkplaceSampleFold';
  import WorkplaceBenefits from '@/components/discInsights/WorkplaceBenefitsFold';
  import ExecutiveSampleFold from '@/components/discInsights/ExecutiveSampleFold';
  import ExecutiveBenefits from '@/components/discInsights/ExecutiveBenefitsFold';
  import Compare from '@/components/discInsights/CompareFold';
  import ContactForm from '@/components/discInsights/DiscInsightsContactFormFold';
  import Footer from '@/components/Footer';
  
  export default {
    components: {
      'main-nav': Nav,
      'hero-fold': HeroFold,
      'workplace-sample-fold': WorkplaceSampleFold,
      'workplace-benefits': WorkplaceBenefits,
      'executive-sample-fold': ExecutiveSampleFold,
      'executive-benefits': ExecutiveBenefits,
      'compare': Compare,
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