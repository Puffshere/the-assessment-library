<template>
    <section class="workshop-leader-profile">
        <LazyHydrate when-visible><main-nav active="training"></main-nav></LazyHydrate>

        <section class="header" v-if="leader">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <img v-if="!leader.name === 'jean-noel-puissant'"  class="image" :src="`/workshop-leaders/${leader.stub}.jpg`" :alt="leader.name">
                        <h1 class="section-title">{{ leader.name }}</h1>
                        <p>
                            {{ leader.city }}<span v-if="leader.state"> {{ leader.state }}</span>, {{ leader.country }}

                            <span v-if="leader.country === 'United States'">🇺🇸</span>
                            <span
                                v-else-if="leader.country === 'Canada' || leader.country === 'Nova Scotia'">🇨🇦</span>
                            <span v-else-if="leader.country === 'United Kingdom'">🇬🇧</span>
                            <span v-else-if="leader.country === 'Vietnam'">🇻🇳</span>
                            <span
                                v-else-if="leader.country === 'Australia' || leader.country === 'Western Australia'">🇦🇺</span>
                            <span v-else-if="leader.country === 'India'">🇮🇳</span><br />

                            <span v-if="leader.website">
                                <a style="color: #fff" :href="leader.website.split(',')[0]" target="blank" rel="noopener">
                                    <b>
                                        {{
                                        leader.website.indexOf(",") === -1
                                        ? leader.website
                                        : leader.website.split(",")[0]
                                        }}
                                    </b>
                                </a><br />
                                <a style="color: #fff" :href="leader.website.split(',')[1]" target="blank" rel="noopener">
                                    <b>
                                        {{
                                        leader.website.indexOf(",") === -1
                                        ? null
                                        : leader.website.split(",")[1]
                                        }}
                                    </b>
                                </a><br />
                            </span>

                            <span v-if="leader.linkedin">
                                <a style="color: #fff" :href="leader.linkedin" target="blank" rel="noopener">
                                    <b>{{ leader.linkedin }}</b>
                                </a><br />
                            </span>

                            {{ leader.email }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container" style="margin-bottom: 80px;">
            <div class="row" v-if="leader">
                <div class="col-8">
                    <div v-if="leader.bio" class="col-12">
                        <h2>Workshop Leader Bio</h2>
                        <p v-html="leader.bio"></p>
                    </div>

                    <div v-if="leader.experience" class="col-12">
                        <h2>Experience</h2>
                        <p v-html="leader.experience"></p>
                    </div>

                    <div v-if="leader.specialties" class="col-12">
                        <h2>Specialties</h2>
                        <p v-html="leader.specialties"></p>
                    </div>

                    <div v-if="leader['hometown-love']" class="col-12">
                        <h2>What I Love About My Hometown</h2>
                        <p v-html="leader['hometown-love']"></p>
                    </div>
                </div>

                <div class="col-4" style="margin-top: 40px;">
                    <LazyHydrate when-visible><blog-sidebar></blog-sidebar></LazyHydrate>
                </div>
            </div>
        </div>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </section>
</template>

<script>
import axios from 'axios';
import LazyHydrate from 'vue-lazy-hydration';

export default {
    components: {
        LazyHydrate,
        'main-nav': () => import('@/components/Nav'),
        'blog-sidebar': () => import('@/components/BlogSidebarLatest'),
        'footer-fold': () => import('@/components/Footer')
    },
    head() {
        return {
            title: 'DISC Workshop Leader Bio | Assessments 24x7',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'These experienced trainers have been selected for their abilities to engage, teach, and WOW learners - challenging participants to think differently, and leave our training sessions eager to apply new skills.'
                }
            ]
        }
    },
    data() {
        return {
            leader: {}
        }
    },
    async created() {
        const response = await axios.get(`/api/workshop-leaders/${this.$route.params.slug}`);
        this.leader = response.data.leader;
    }
}
</script>

<style lang="scss" scoped>
.workshop-leader-profile {
    .header {
        background: url('~assets/about.jpg');
        background-size: cover;
        color: #fff;
        text-align: center;
        margin-bottom: 40px;
        padding: 70px 0;

        .section-title {
            font-size: 30pt;
            margin-top: 0;
        }
    }

    h2 {
        margin-bottom: 0;
        font-size: 20pt;
        line-height: 24pt;
    }

    h1 {
        font-size: 30pt;
        line-height: 34pt;
        margin-bottom: 0;
    }

    .image {
        border-radius: 20px;
        width: 150px;
        margin-bottom: 20px;
    }
}
</style>