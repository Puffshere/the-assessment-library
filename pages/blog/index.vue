<template>
    <div class="blog">
        <LazyHydrate when-visible><main-nav active="blog"></main-nav></LazyHydrate>
        <LazyHydrate when-visible><blog-header></blog-header></LazyHydrate>

        <div v-if="loading" class="container">
            <div class="row">
                <div class="col-6 skeleton" v-for="index in 10" :key="index">
                    <div class="skeleton-item">
                        <div class="image"></div>
                        <div class="date"></div>
                        <div class="title"></div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="container">
            <div class="row">
                <div class="col-6 post" v-for="post in posts" :key="post.id">
                    <nuxt-link :to="`/blog/${post.slug}`">
                        <img class="image" :src="post._embedded['wp:featuredmedia'][0].source_url">

                        <p class="date">Posted {{ post.date | moment('from') }}</p>
                        <h3 class="title">{{ post.title.rendered }}</h3>
                    </nuxt-link>
                </div>
            </div>

            <a class="button" style="margin-top: 30px; margin-bottom: 60px; display: inline-block" :href="`/blog?page=${Number(currentPage) + 1}`">Next Page</a>
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
            'blog-header': () => import('@/components/BlogHeader'),
            'footer-fold': () => import('@/components/Footer')
        },
        data() {
            return {
                loading: true,
                posts: [],
                currentPage: 1,
                totalPages: 0,
                structuredDataBreadcrumbs: {
                    "@context": "http://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": "1",
                            "item": {
                                "@id": "https://assessments24x7.com/blog",
                                "name": "Blog" 
                            } 
                        }
                    ]
                }
            }
        },
        head() {
            return {
                title: 'Latest Assessment News & Resources | Assessments 24x7',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Articles, how-to guides, and industry news from the global leader in assessment technology.'
                    }
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
            this.currentPage = this.$route.query.page || 1;
            const response = await this.$axios.get(`posts?_embed&page=${this.currentPage}`);
            this.posts = response.data;
            this.totalPages = response.headers['x-wp-totalpages'];
            this.loading = false;
        },
        methods: {
            nextPage() {
                this.$router.push({
                    path: '/blog',
                    query: {
                        page: this.currentPage + 1
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog {
        .skeleton {
            @mixin background-gradient {
                background-image: linear-gradient(90deg, #eaeaea 0px, #fff 100px, #eaeaea 200px);
                background-size: 600px;
            }

            .skeleton-item {
                .image {
                    width: 100%;
                    height: 340px;
                    background: #eaeaea;
                    border-radius: 20px;
                    @include background-gradient;
                    animation: shine .7s infinite ease-out;
                }

                .date {
                    width: 20%;
                    height: 14px;
                    margin-top: 10px;
                    background: #eaeaea;
                    @include background-gradient;
                    animation: shine .7s infinite ease-out;
                }

                .title {
                    width: 100%;
                    height: 20px;
                    margin-top: 8px;
                    margin-bottom: 20px;
                    background: #eaeaea;
                    @include background-gradient;
                    animation: shine .7s infinite ease-out;
                }
            }

            	@keyframes shine {
                    0% {
                        background-position: -400px
                    }
                    
                    100% {
                        background-position: 600px;
                    }
                }
        }

        .post {
            min-height: 450px;
            
            .image {
                width: 100%;
                height: 340px;
                background-size: cover !important;
                background-position: center !important;
                object-fit: cover;
                box-shadow: 0 0 20px rgba(0,0,0,.1);
                border-radius: 20px;
                transition: transform .3s ease;

                &:hover {
                    transform: scale(1.03);
                }
            }

            .date {
                margin: 10px 0 -20px;
                font-size: 10pt;
                color: #666;
            }

            a {
                text-decoration: none;

                .title {
                    color: initial;
                }
            }
        }
    }
</style>