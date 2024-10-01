<template>
    <section>
        <main-nav class="nav"></main-nav>
        <section class="body">
            <hero></hero>
            <video-fold></video-fold>
            <hr>
            <empower-fold></empower-fold>
        </section>
        <footer-fold class="foot"></footer-fold>
    </section>
</template>

<script>
import Nav from '@/components/Nav';
import Hero from '@/components/successMagazine/SuccessHeroFold';
import VideoFold from '@/components/successMagazine/VideoFold';
import EmpowerFold from '@/components/successMagazine/EmpowerFold';
import Footer from '@/components/Footer';

export default {
    components: {
        'main-nav': Nav,
        'hero': Hero,
        'video-fold': VideoFold,
        'empower-fold': EmpowerFold,
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