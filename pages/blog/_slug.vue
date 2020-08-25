<template>
    <div class="blog-post">
        <LazyHydrate when-visible><main-nav active="blog"></main-nav></LazyHydrate>

        <div v-if="post">
            <svg class="svg1" xmlns="http://www.w3.org/2000/svg" version="1.1" height="0">
                <filter id="blur-filter" width="110%" height="100%">
                    <feColorMatrix type="saturate" in="SourceGraphic" values="3"/>
                    <feGaussianBlur stdDeviation="20" result="blur" />
                </filter>
            </svg>

            <svg 
                class="svg2"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                :style="`
                    width: 105%;
                    height: 400px;
                    margin-left: -30px;
                    margin-top: -25px;
                    z-index: -1;
                    position: relative;
                `"> 
                <image x="0" class="bg-blur" width="100%" height="400px" :xlink:href="post._embedded['wp:featuredmedia'][0].source_url"/>
            </svg>

            <img class="blog-header" :src="post._embedded['wp:featuredmedia'][0].source_url">

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">{{ post.title.rendered }}</h1>
                        <p class="date">Posted {{ post.date | moment('from') }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <p class="body wp" v-html="post.content.rendered"></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div id="disqus_thread"></div>
                    </div>
                </div>
            </div>
        </div>

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
        data() {
            return {
                post: null
            }
        },
        async created() {
            const response = await this.$axios.get(`/posts?slug=${this.$route.params.slug}&_embed`);
            let post = response.data[0];

            // Replace Wordpress Dropcap tag
            post.content.rendered = post.content.rendered
                .replace('[dropcap type=&#8221;square or circle&#8221;]', '<span class="dropcap">')
                .replace('[/dropcap]', '</span>');

            this.post = post;
            
            // 
            var disqus_config = function () {
                this.page.url = `https://www.assessments24x7.com${this.$route.path}`;
                this.page.identifier = this.post.slug;
            };
            
            (function() {
                var d = document, s = d.createElement('script');
                s.src = 'https://assessments-24x7.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }
    }
</script>

<style lang="scss" scoped>
    @import '~assets/scss/vars';

    .blog-post {
        .bg-blur {
            filter: url('#blur-filter');
            height: auto;
            opacity: .55;
            margin-top:-20px;
        }

        .blog-header {
            margin: -300px auto 0;
            display: block;
            box-shadow: 0 0 20px rgba(0,0,0,.4);
            border-radius: 20px;
            width: 100%;
            max-width: fit-content;
        }

        .date, .title {
            text-align: center;
        }

        .date {
            margin: -20px 0;
            color: #666;
        }

        .body {
            margin-bottom: 60px;
        }

        @media screen and (max-width: $breakpoint-med) {
            .svg1, .svg2 {
                display: none;
            }

            .blog-header {
                border-radius: 0;
            }
        }
    }
</style>