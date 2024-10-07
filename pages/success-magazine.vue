<template>
    <section>
        <main-nav class="nav"></main-nav>
        <section class="body">
            <hero></hero>
            <video-fold></video-fold>
            <LazyHydrate when-visible><client-logos></client-logos></LazyHydrate>
            <empower-fold></empower-fold>
            <stats-top-fold></stats-top-fold>
            <unlock-fold></unlock-fold>
            <testimonial-fold></testimonial-fold>
            <explore-fold></explore-fold>
            <enhance-fold></enhance-fold>
            <certification-fold></certification-fold>
            <stats-bottom-fold></stats-bottom-fold>
            <about-fold></about-fold>
            <transformation-fold></transformation-fold>
            <contact-form-fold></contact-form-fold>
        </section>
        <footer-fold class="foot"></footer-fold>
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Hero from '@/components/successMagazine/SuccessHeroFold';
import VideoFold from '@/components/successMagazine/VideoFold';
import LazyHydrate from 'vue-lazy-hydration';
import EmpowerFold from '@/components/successMagazine/EmpowerFold';
import StatsTopFold from '@/components/successMagazine/StatsTopFold';
import UnlockFold from '@/components/successMagazine/UnlockFold';
import TestimonialFold from '@/components/successMagazine/TestimonialFold';
import ExploreFold from '@/components/successMagazine/ExploreFold';
import EnhanceFold from '@/components/successMagazine/EnhanceFold';
import CertificationFold from '@/components/successMagazine/CertificationFold';
import StatsBottomFold from '@/components/successMagazine/StatsBottomFold';
import AboutFold from '@/components/successMagazine/AboutFold';
import TransformationFold from '@/components/successMagazine/TransformationFold';
import ContactFormFold from '@/components/successMagazine/ContactFormFold';
import Footer from '@/components/Footer';

export default {
    components: {
        LazyHydrate,
        'main-nav': Nav,
        'hero': Hero,
        'video-fold': VideoFold,
        'client-logos': () => import('@/components/ClientLogos'),
        'empower-fold': EmpowerFold,
        'stats-top-fold': StatsTopFold,
        'unlock-fold': UnlockFold,
        'testimonial-fold': TestimonialFold,
        'explore-fold': ExploreFold,
        'enhance-fold': EnhanceFold,
        'certification-fold': CertificationFold,
        'stats-bottom-fold': StatsBottomFold,
        'about-fold': AboutFold,
        'transformation-fold': TransformationFold,
        'contact-form-fold': ContactFormFold,
        'footer-fold': Footer
    },
    head() {
        return {
            title: 'Success Magazine | Assessments 24x7',
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