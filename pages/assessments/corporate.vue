<template>
    <section>
        <LazyHydrate when-visible><main-nav class="nav"></main-nav></LazyHydrate>
        <LazyHydrate when-visible>
            <hero></hero>
        </LazyHydrate>
        <LazyHydrate when-visible><stats-top></stats-top></LazyHydrate>
        <LazyHydrate when-visible>
            <tools></tools>
        </LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <LazyHydrate when-visible><stats-bottom></stats-bottom></LazyHydrate>
        <LazyHydrate when-visible><dynamic-tools></dynamic-tools></LazyHydrate>
        <LazyHydrate when-visible><start-using></start-using></LazyHydrate>
        <LazyHydrate when-visible><discover-assessments></discover-assessments></LazyHydrate>
        <LazyHydrate when-visible><contact-form></contact-form></LazyHydrate>
        <LazyHydrate when-visible><footer-fold class="foot"></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Nav from '@/components/Nav';
import Hero from '@/components/corporate/CorporateHero';
import StatsTop from '@/components/corporate/CorporateStatsTop';
import Tools from '@/components/corporate/CorporateTools';
import ClientLogos from '@/components/ClientLogos';
import StatsBottom from '@/components/corporate/CorporateStatsBottom';
import DynamicTools from '@/components/corporate/CorporateDynamicTools';
import StartUsing from '@/components/corporate/CorporateStartUsing';
import DiscoverAssessments from '@/components/corporate/CorporateDiscoverAssessments';
import ContactForm from '@/components/corporate/CorporateContactForm';
import Footer from '@/components/Footer';

export default {
    components: {
        LazyHydrate,
        'main-nav': Nav,
        'hero': Hero,
        'stats-top': StatsTop,
        'tools': Tools,
        'client-logos': ClientLogos,
        'stats-bottom': StatsBottom,
        'dynamic-tools': DynamicTools,
        'start-using': StartUsing,
        'discover-assessments': DiscoverAssessments,
        'contact-form': ContactForm,
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'Assessments - Corporate | Assessments 24x7',
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