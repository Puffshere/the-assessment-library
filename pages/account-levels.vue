<template>
    <section>
        <main-nav class="nav"></main-nav>
        <section class="body">
            <hero-fold></hero-fold>
            <harness-fold></harness-fold>
            <explore-cards-fold></explore-cards-fold>
            <contact-form-fold></contact-form-fold>
        </section>
        <footer-fold class="foot"></footer-fold>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Nav from '@/components/Nav';
import HeroFold from '@/components/accountLevels/HeroFold';
import HarnessFold from '@/components/accountLevels/HarnessFold';
import ExploreCardsFold from '@/components/accountLevels/ExploreCardsFold';
import ContactFormFold from '@/components/accountLevels/ContactFormFold';
import Footer from '@/components/Footer';

export default {
    components: {
        LazyHydrate,
        'main-nav': Nav,
        'hero-fold': HeroFold,
        'harness-fold': HarnessFold,
        'explore-cards-fold': ExploreCardsFold,
        'contact-form-fold': ContactFormFold,
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'Account Levels | Assessments 24x7',
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