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
            <about-fold></about-fold>
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
import AboutFold from '@/components/successMagazine/AboutFold';
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
        'about-fold': AboutFold,
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