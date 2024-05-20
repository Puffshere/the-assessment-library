<template>
  <section>
    <main-nav class="nav"></main-nav>
    <section class="body">
      <disc-leadership-hero></disc-leadership-hero>
      <insights></insights>
      <targeted-strategies></targeted-strategies>
      <intergrating></intergrating>
      <adapt></adapt>
      <contact-form></contact-form>
      <asi></asi>
    </section>
    <footer-fold class="foot"></footer-fold>
  </section>
</template>

<script>
import Nav from '@/components/Nav';
import DiscLeadershipHero from '@/components/DiscLeadershipHeroFold';
import Insights from '@/components/InsightsFold';
import TargetedStrategies from '@/components/TargetedStrategiesFold';
import Intergrating from '@/components/IntergratingFold';
import Adapt from '@/components/AdaptFold';
import ContactForm from '@/components/DiscLeadershipContactFormFold';
import Asi from '@/components/ASIFold';
import Footer from '@/components/Footer';

export default {
  components: {
    'main-nav': Nav,
    'disc-leadership-hero': DiscLeadershipHero,
    'insights': Insights,
    'targeted-strategies': TargetedStrategies,
    'intergrating': Intergrating,
    'adapt': Adapt,
    'contact-form': ContactForm,
    'asi': Asi,
    'footer-fold': Footer
  },
  head() {
    return {
      title: 'DISC Leadership | Assessments 24x7',
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
