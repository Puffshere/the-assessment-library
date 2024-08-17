<template>
  <section>
    <main-nav class="nav"></main-nav>
    <section class="body">
      <disc-awareness-hero></disc-awareness-hero>
      <enhancing></enhancing>
      <strengths></strengths>
      <examples></examples>
      <awareness-concepts></awareness-concepts>
      <contact-form></contact-form>
      <asi></asi>
    </section>
    <footer-fold class="foot"></footer-fold>
  </section>
</template>

<script>
export default {
  components: {
    'main-nav': () => import('@/components/Nav'),
    'disc-awareness-hero': () => import('@/components/DiscAwarenessHeroFold'),
    'enhancing': () => import('@/components/EnhancingFold'),
    'strengths': () => import('@/components/StrengthsFold'),
    'examples': () => import('@/components/ExamplesFold'),
    'awareness-concepts': () => import('@/components/AwarenessConceptsFold'),
    'contact-form': () => import('@/components/DiscAwarenessContactFormFold'),
    'asi': () => import('@/components/ASIFold'),
    'footer-fold': () => import('@/components/Footer'),
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