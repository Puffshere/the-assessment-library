<template>
    <div class="blog-post">
        <LazyHydrate when-visible><main-nav active="blog"></main-nav></LazyHydrate>

        <div v-if="post">
            <div class="blog-header" :style="`background: url('${post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'}')`"></div>

            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="title">{{ post.title }}</h1>
                        <p class="date">Posted {{ post.published_at | moment('from') }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <p class="body wp" v-html="post.html"></p>
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
        head() {
            return {
                title: this.post ? `${this.post.meta_title || this.post.title} | Assessments 24x7` : 'Latest Assessment News & Resources | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.post ? this.post.meta_description || 'Articles, how-to guides, and industry news from the global leader in assessment technology.' : 'Articles, how-to guides, and industry news from the global leader in assessment technology.'
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    },
                    {
                        property: 'og:url',
                        content: `https://assessments24x7.com${this.$route.path}`
                    },
                    {
                        property: 'og:title',
                        content: this.post ? this.post.og_title || this.post.title : 'Latest Assessment News & Resources | Assessments 24x7'
                    },
                    {
                        property: 'og:description',
                        content: this.post ? this.post.og_description || this.post.meta_description || 'Articles, how-to guides, and industry news from the global leader in assessment technology.' : 'Articles, how-to guides, and industry news from the global leader in assessment technology.'
                    },
                    {
                        property: 'og:image',
                        content: this.post ? this.post.og_image || this.post.feature_image : ''
                    },
                    {
                        property: 'twitter:card',
                        content: 'summary_large_image'
                    },
                    {
                        property: 'twitter:url',
                        content: `https://assessments24x7.com${this.$route.path}`
                    },
                    {
                        property: 'twitter:title',
                        content: this.post ? this.post.og_title || this.post.title : 'Latest Assessment News & Resources | Assessments 24x7'
                    },
                    {
                        property: 'twitter:description',
                        content: this.post ? this.post.og_description || this.post.meta_description || 'Articles, how-to guides, and industry news from the global leader in assessment technology.' : 'Articles, how-to guides, and industry news from the global leader in assessment technology.'
                    },
                    {
                        property: 'twitter:image',
                        content: this.post ? this.post.og_image || this.post.feature_image : ''
                    },
                ],
                __dangerouslyDisableSanitizers: ['script'],
                script: [
                    {
                        innerHTML: JSON.stringify(this.structuredDataBreadcrumbs),
                        type: 'application/ld+json'
                    }
                ]
            }
        },
        async created() {
            const response = await this.$axios.get(`/posts/slug/${this.$route.params.slug}?key=1cd8f26ccc1cb09274574d0e00`);
            this.post = response.data.posts[0];
            
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
        .blog-header {
            margin: 0 auto;
            display: block;
            width: 100%;
            height: 600px;
            background-size: cover !important;
            background-position-y: 65% !important;
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
                height: 400px;
            }
        }
    }
</style>