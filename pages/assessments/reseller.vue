<template>
    <section>
        <LazyHydrate when-visible><main-nav class="nav"></main-nav></LazyHydrate>
        <LazyHydrate when-visible>
            <hero></hero>
        </LazyHydrate>
        <LazyHydrate when-visible><stats-top></stats-top></LazyHydrate>
        <LazyHydrate when-visible>
            <catalyst></catalyst>
        </LazyHydrate>
        <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
        <LazyHydrate when-visible><success></success></LazyHydrate>
        <LazyHydrate when-visible><customize-it></customize-it></LazyHydrate>
        <LazyHydrate when-visible><stats-bottom></stats-bottom></LazyHydrate>
        <LazyHydrate when-visible><dynamic-tools></dynamic-tools></LazyHydrate>
        <LazyHydrate when-visible><testimonials></testimonials></LazyHydrate>
        <LazyHydrate when-visible><solution></solution></LazyHydrate>
        <LazyHydrate when-visible><start-using></start-using></LazyHydrate>
        <LazyHydrate when-visible><discover-assessments></discover-assessments></LazyHydrate>
        <LazyHydrate when-visible><contact-form></contact-form></LazyHydrate>
        <LazyHydrate when-visible><footer-fold class="foot"></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Nav from '@/components/Nav';
import Hero from '@/components/reseller/ResellerHero';
import StatsTop from '@/components/corporate/CorporateStatsTop';
import Catalyst from '@/components/reseller/ResellerCatalyst';
import ClientLogos from '@/components/ClientLogos';
import Success from '@/components/corporate/CorporateSuccess';
import CustomizeIt from '@/components/reseller/ResellerCustomizeIt';
import StatsBottom from '@/components/corporate/CorporateStatsBottom';
import DynamicTools from '@/components/reseller/ResellerDynamicTools';
import Testimonials from '@/components/reseller/ResellerTestimonials';
import Solutions from '@/components/reseller/ResellerSolutions';
import StartUsing from '@/components/reseller/ResellerStartUsing';
import DiscoverAssessments from '@/components/reseller/ResellerDiscoverAssessments';
import ContactForm from '@/components/reseller/ResellerContactForm';
import Footer from '@/components/Footer';


export default {
    components: {
        LazyHydrate,
        'main-nav': Nav,
        'hero': Hero,
        'stats-top': StatsTop,
        'catalyst': Catalyst,
        'client-logos': ClientLogos,
        'success': Success,
        'customize-it': CustomizeIt,
        'stats-bottom': StatsBottom,
        'dynamic-tools': DynamicTools,
        'testimonials': Testimonials,
        'solution': Solutions,
        'start-using': StartUsing,
        'discover-assessments': DiscoverAssessments,
        'contact-form': ContactForm,
        'footer-fold': Footer
    },
    head() {
        Testimonials
        return {
            title: 'Assessments - Reseller | Assessments 24x7',
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