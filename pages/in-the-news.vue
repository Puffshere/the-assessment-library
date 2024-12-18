<template>
    <div>
        <main-nav active="home"></main-nav>

        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="yellowCircle">
                            <img src="https://f002.backblazeb2.com/file/assessments24x7-media/InTheNews/Yellow+circle.webp"
                                alt="image of a yellow circle" style="width: 66px; height: 66px;">
                            <h1 style="margin-left: -25px; margin-top: 15px;">
                                In the News
                            </h1>
                        </div>
                        <h3 style="font-weight: 400; padding: 0 10px 0 10px;">
                            Stay current with Assessments24x7's latest news and milestones. <br />
                            Discover our recent press releases and company updates.
                        </h3>
                    </div>
                </div>
            </div>
        </section>

        <section class="curious">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 style="padding: 0 10px 20px 10px;">
                            Curious about our Assessments, Platform, or Certification?
                        </h3>
                        <button @click="learnMoreButton" class="light">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'footer-fold': () => import('@/components/Footer')
    },
    methods: {
        learnMoreButton(event) {
            window.location.href = 'https://www.assessments24x7.com/';
            event.target.blur();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.hero {
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
    color: white;
    text-align: center;
    margin: 0 0px;

    .container {
        padding: 60px 0 40px 0;
    }

    .yellowCircle {
        display: flex;
        justify-content: center;
        margin-bottom: -20px;
    }
}

.curious {
    background: linear-gradient(180deg, #0033C5 -2.43%, #077FF8 97.57%);
    color: white;
    text-align: center;
    margin: 0 0px;

    .container {
        padding: 80px 0 120px 0;
    }
}
</style>