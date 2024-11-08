<template>
    <section>
        <main-nav class="nav"></main-nav>
        <section class="body">
            <hero></hero>
            <video-fold></video-fold>
            <client-logos></client-logos>
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
import ClientLogos from '@/components/ClientLogos';
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
        'main-nav': Nav,
        'hero': Hero,
        'video-fold': VideoFold,
        'client-logos': ClientLogos,
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
            title: 'Success Magazine Features Assessments 24x7 - DISC Leadership & Team Growth',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Discover how Assessments 24x7, featured in Success Magazine, empowers leaders and teams with trusted DISC tools for improving communication, performance, and self-awareness.'
                }
            ]
        }
    }
}
</script>