<template>
    <section>
        <LazyHydrate when-visible>
            <main-nav class="nav"></main-nav>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <hero></hero>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <stats-top></stats-top>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <tools></tools>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <client-logos></client-logos>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <success></success>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <stats-bottom></stats-bottom>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <dynamic-tools></dynamic-tools>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <testimonials></testimonials>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <solution></solution>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <start-using></start-using>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <discover-assessments></discover-assessments>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <contact-form></contact-form>
        </LazyHydrate>
        <LazyHydrate when-visible>
            <footer-fold class="foot"></footer-fold>
        </LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import Nav from '@/components/Nav';
import Hero from '@/components/corporate/CorporateHero';
import StatsTop from '@/components/corporate/CorporateStatsTop';
import Tools from '@/components/corporate/CorporateTools';
import ClientLogos from '@/components/ClientLogos';
import Success from '@/components/corporate/CorporateSuccess';
import StatsBottom from '@/components/corporate/CorporateStatsBottom';
import DynamicTools from '@/components/corporate/CorporateDynamicTools';
import Testimonials from '@/components/corporate/CorporateTestimonials';
import Solutions from '@/components/corporate/CorporateSolutions';
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
        'success': Success,
        'stats-bottom': StatsBottom,
        'dynamic-tools': DynamicTools,
        'testimonials': Testimonials,
        'solution': Solutions,
        'start-using': StartUsing,
        'discover-assessments': DiscoverAssessments,
        'contact-form': ContactForm,
        'footer-fold': Footer
    },
    mounted() {
        this.debugLazyHydration();
    },
    methods: {
        debugLazyHydration() {
            const components = [
                { name: 'Nav', component: 'main-nav' },
                { name: 'Hero', component: 'hero' },
                { name: 'StatsTop', component: 'stats-top' },
                { name: 'Tools', component: 'tools' },
                { name: 'ClientLogos', component: 'client-logos' },
                { name: 'Success', component: 'success' },
                { name: 'StatsBottom', component: 'stats-bottom' },
                { name: 'DynamicTools', component: 'dynamic-tools' },
                { name: 'Testimonials', component: 'testimonials' },
                { name: 'Solutions', component: 'solution' },
                { name: 'StartUsing', component: 'start-using' },
                { name: 'DiscoverAssessments', component: 'discover-assessments' },
                { name: 'ContactForm', component: 'contact-form' },
                { name: 'Footer', component: 'footer-fold' },
            ];

            components.forEach(({ name, component }) => {
                const element = this.$el.querySelector(component);
                if (element) {
                    console.time(`${name} Mount`);
                    new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                console.log(`${name} is now visible and being hydrated.`);
                                console.timeEnd(`${name} Mount`);
                                observer.unobserve(entry.target);
                            }
                        });
                    }).observe(element);
                }
            });
        }
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