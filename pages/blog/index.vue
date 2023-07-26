<template>
    <div class="blog">
        <LazyHydrate when-visible><main-nav active="blog"></main-nav></LazyHydrate>
        <LazyHydrate when-visible><blog-header></blog-header></LazyHydrate>

        <div v-if="loading" class="container">
            <div class="row">
                <div class="col-6 skeleton" v-for="index in 4" :key="index">
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
                <div class="col-12">
                    <div class="form-group">
                        <input class="input search" type="text" @input="search" v-model="term"
                            placeholder="Search for a blog post by title or topic...">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 post" v-for="post in posts" :key="post.id">
                    <nuxt-link :to="`/blog/${post.slug}`">
                        <img class="image"
                            :src="post.feature_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'">

                        <p class="date">Posted {{ post.published_at | moment('from') }}</p>
                        <h3 class="title">{{ post.title }}</h3>
                    </nuxt-link>
                </div>
            </div>

            <ul class="pagination" v-if="pagination">
                <li class="pagination-item">
                    <button type="button" @click="changePage('first')" :disabled="currentPage === 1"
                        aria-label="Go to first page">First</button>
                </li>

                <li class="pagination-item">
                    <button type="button" @click="changePage('previous')" :disabled="currentPage === 1"
                        aria-label="Go to previous page">Previous</button>
                </li>

                <li class="pagination-item" v-for="page in pageRange" :key="page.number">
                    <button type="button" :class="{ 'active': currentPage == page.number, 'page': true }"
                        @click="changePage(page.number)" :aria-label="`Go to page ${page.number}`">{{ page.number
                        }}</button>
                </li>

                <li class="pagination-item">
                    <button type="button" @click="changePage('next')" :disabled="currentPage == pagination.pages"
                        aria-label="Go to next page">Next</button>
                </li>

                <li class="pagination-item">
                    <button type="button" @click="changePage('last')" :disabled="currentPage == pagination.pages"
                        aria-label="Go to last page">Last</button>
                </li>
            </ul>
        </div>

        <LazyHydrate when-visible><footer-fold></footer-fold></LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import debounce from 'debounce';

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
            pagination: {},
            currentPage: 1,
            maxVisibleButtons: 7,
            term: '',
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
            title: 'Insights and Inspiration: Explore the Assessments 24x7 Blog',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Immerse yourself in a world of insights and inspiration through the Assessments 24x7 blog. Discover valuable articles, tips, and resources on personal and professional development, and stay up-to-date with the latest trends and strategies.'
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
    async asyncData({ $axios, query }) {
        let currentPage = parseInt(query.page) || 1;
        const response = await $axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=12&page=${currentPage}`);

        const pagination = response.data.meta.pagination;
        const posts = response.data.posts;

        const loading = false;

        return {
            currentPage,
            pagination,
            posts,
            loading
        }
    },
    watchQuery: ['page'],
    scrollToTop: true,
    methods: {
        changePage(page) {
            if (page === 'first') {
                page = 1;
            } else if (page === 'last') {
                page = this.pagination.pages;
            } else if (page === 'next') {
                page = this.currentPage + 1
            } else if (page === 'previous') {
                page = this.currentPage - 1
            }

            this.$router.push({ path: '/blog', query: { page } });
        },
        search: debounce(async function (e) {
            if (this.term) {
                const result = await fetch(`/api/blog/search?term=${this.term}`).then(res => res.json());
                this.posts = result.posts;
                this.pagination = null;
            } else {
                this.$router.push({ path: '/blog', query: { page: 1 } });
            }
        }, 400)
    },
    computed: {
        startPage() {
            if (this.currentPage <= 3) {
                return 1;
            }

            if (this.currentPage === this.pagination.pages) {
                return this.pagination.pages - this.maxVisibleButtons + 1;
            }

            return this.currentPage - 3;
        },
        endPage() {
            return Math.min(this.startPage + this.maxVisibleButtons - 1, this.pagination.pages);
        },
        pageRange() {
            let range = [];

            for (let i = this.startPage; i <= this.endPage; i += 1) {
                range.push({
                    number: i
                });
            }

            return range;
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

    .form-group {
        .search {
            height: 55px;
            border: 2px solid #eaeaea;
            font-size: 14pt;
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
            box-shadow: 0 0 20px rgba(0, 0, 0, .1);
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

    .pagination {
        list-style-type: none;
        padding-left: 0;
        text-align: center;
        margin-bottom: 80px;

        .pagination-item {
            display: inline-block;
            cursor: pointer;

            button {
                border-radius: 5px;
                border: 0;
                padding: 8px 14px;
                font-family: 'Poppins', sans-serif;
                margin: 0 3px;
                cursor: pointer;

                &.page {
                    border-radius: 50%;
                    padding: 0;
                    width: 36px;
                    height: 36px;
                    text-align: center;
                }

                &.active {
                    background-color: #0033c5;
                    color: #fff;
                }
            }
        }
    }
}</style>