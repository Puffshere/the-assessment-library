<template>
    <div>
        <section>
            <h1>Coming Soon governmentassessments.com!</h1>
        </section>

        <contact-form-fold></contact-form-fold>
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>

    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    name: 'government-page', // This name is referenced in the middleware
    components: {
        LazyHydrate,
        'contact-form-fold': () => import('@/components/government/GovernmentContactFormFold'),
        'footer-fold': () => import('@/components/Footer')
    },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';


/* Add any styles specific to this page here */
section {
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
}
</style>