<template>
    <section class="coaches-directory">
        <LazyHydrate when-visible><main-nav></main-nav></LazyHydrate>
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 style="text-align: center;">
                            <span style="color: #00a8ff">INTERNATION DIRECTORY</span> <br />
                            OF CERTIFIED PRACTITIONERS
                        </h1>
                        <h3 style="text-align: center; font-weight: 400; margin-top: -30px;">
                            Each of our Practitioners completes 10-15 hours of additional training per assessment
                            certification. <br />
                            Our Advanced Certified Practitioners have the most comprehensive skillset due to their
                            extensive
                            training.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1
                            style="text-align: center; color: #0033c5; text-shadow: #0033c566 2.12132px 2.12132px 0px; margin-bottom: -30px;">
                            Find an Assessment Practitioner
                        </h1>
                        <h2 style="text-align: center; font-weight: 400; margin-bottom: 0px;">
                            Want to be listed? <span style="color: #0033c5; text-decoration: underline;">Get
                                certified</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <search-bar></search-bar>
        <br />
        <br />
        <br />
        <br />
        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import SearchBar from '@/components/coachesDirectory/SearchBar';

export default {
    components: {
        LazyHydrate,
        'search-bar': SearchBar,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    }
}
</script>


<style scoped>
.header {
    background: url('~assets/coaches-directory/coaches-directory-header-image.png');
    background-size: cover;
    color: #fff;
    padding-top: 30px;
    padding-bottom: 90px;
}

h1 {
    font-size: 48px;
    line-height: 58px;
}

h2 {
    font-size: 32px;
    line-height: 38px;
}

h3 {
    font-size: 18px;
    line-height: 22px;
}

h4 {
    font-size: 16px;
    line-height: 24px;
}

h5 {
    font-size: 13.28px;
    line-height: 21.2px;
}
</style>