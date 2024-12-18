<template>
    <section class="related-posts">
        <img src="~/assets/home-page/homeHeroFoldUpperLeft.webp" alt="fold 4 graphic"
            style="position: absolute; left: 0px; margin-bottom: 900px;" class="accents">
        <div class="container-wrapper">
            <div class="container">
                <div class="related-posts-container">
                    <div v-for="post in paginatedPosts" :key="post.id" class="post">
                        <a :href="`https://blog.assessments24x7.com/${post.slug}`">
                            <h3 class="post-title" v-html="truncateTitle(post.title.rendered)"></h3>
                        </a>
                        <p class="post-meta">
                            <strong>Author:</strong> {{ getAuthorName(post) }} | {{ formatDate(post.date) }}
                        </p>
                        <div class="post-card">
                            <a :href="`https://blog.assessments24x7.com/${post.slug}`"><img class="post-image"
                                    :src="getImageUrl(post)" alt="post feature image" /></a>
                            <div class="post-content">
                                <p>{{ truncateContent(post.content.rendered) }}</p>
                                <a :href="`https://blog.assessments24x7.com/${post.slug}`" class="read-more">
                                    READ MORE >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <button class="pagination-btn prev" :disabled="currentPage === 1" @click="currentPage--">
                        ← Prev
                    </button>
                    <div v-for="page in totalPages" :key="page">
                        <button :class="['pagination-page', { active: currentPage === page }]"
                            @click="currentPage = page">
                            {{ page }}
                        </button>
                    </div>
                    <button class="pagination-btn blue" :disabled="currentPage === totalPages" @click="currentPage++">
                        Next →
                    </button>
                </div>
            </div>
            <img src="~/assets/home-page/homeHeroFoldBottomRight.webp" alt="fold 4 graphic" class="accents-right">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            active: 'd',
            interrupted: false,
            blogLoading: true,
            posts: [],
            currentPage: 1,
            postsPerPage: 3,
            structuredDataBreadcrumbs: {
                "@context": "http://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": "1",
                        "item": {
                            "@id": "https://assessments24x7.com/assessments",
                            "name": "Assessments"
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": "2",
                        "item": {
                            "@id": "https://assessments24x7.com/assessments/disc",
                            "name": "DISC Assessment"
                        }
                    }
                ]
            }
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.posts.length / this.postsPerPage);
        },
        paginatedPosts() {
            const start = (this.currentPage - 1) * this.postsPerPage;
            const end = start + this.postsPerPage;
            return this.posts.slice(start, end);
        }
    },
    methods: {
        getAuthorName(post) {
            return post._embedded?.author?.[0]?.name || "Unknown";
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        changeActive(active) {
            this.active = active;
            this.interrupted = true;
        },
        jumpToBlog(event) {
            window.location.href = 'https://blog.assessments24x7.com/';
            event.target.blur();
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        truncateContent(content) {
            const parser = new DOMParser();
            const textContent = parser.parseFromString(content, 'text/html').body.textContent;
            return textContent.split(' ').slice(0, 60).join(' ') + '...'; // First 60 words
        },
        truncateTitle(title) {
            const parser = new DOMParser();
            const decodedTitle = parser.parseFromString(`<!doctype html><body>${title}`, 'text/html').body.textContent;
            return decodedTitle;
        },
        getImageUrl(post) {
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                return post._embedded['wp:featuredmedia'][0].source_url;
            }
            return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80';
        },
        isValidSlug(slug) {
            if (!slug || typeof slug !== 'string' || slug.trim() === '') {
                console.warn("Invalid slug detected for post:", slug);
                return false;
            }
            return true;
        }
    },
    async created() {
        this.blogLoading = true;
        try {
            const response = await this.$axios.get(
                'https://blog.assessments24x7.com/wp-json/wp/v2/posts?per_page=4&order=desc&categories=7&_embed'
            );
            this.posts = response.data;
            console.log("this is the post data:", this.posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            this.blogLoading = false;
        }
    },

    mounted() {
        window.setInterval(() => {
            if (!this.interrupted) {
                if (this.active === 'd') {
                    this.active = 'i';
                } else if (this.active === 'i') {
                    this.active = 's';
                } else if (this.active === 's') {
                    this.active = 'c';
                } else {
                    this.active = 'd';
                }
            }
        }, 3000);
    }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
@import '~assets/scss/new-styles';

.related-posts {
    .container {
        padding-top: 100px;
        padding-bottom: 120px;
    }

    .container-wrapper {
        position: relative;
    }

    .accents-right {
        position: absolute;
        right: 0;
        bottom: 0px;
        width: 45%;
        z-index: -1;
    }

    .related-posts-container {
        display: flex;
        flex-direction: column;
        gap: 80px;

        .post {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .post-title {
                font-weight: bold;
                color: #213C85;
                margin: 0;
                text-decoration: underline;
            }

            .post-meta {
                font-size: 14px;
                color: #213C85;
                margin-top: 5px;
            }

            .post-card {
                display: flex;
                gap: 20px;
                padding: 15px;
                border-radius: 12px;
                border: 1px solid #E0AD2B;
                background: #FFF;
                box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

                .post-image {
                    width: 376px;
                    height: auto;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .post-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex: 1;
                    padding-bottom: 10px;

                    p {
                        color: #213C85;
                        margin: 0 0 10px;
                        flex-grow: 1;
                    }

                    .read-more {
                        color: #213C85;
                        font-weight: bold;
                        text-decoration: underline;
                        margin-top: auto;
                        transition: color 0.3s;

                        &:hover {
                            color: #0a1f5c;
                        }
                    }
                }
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 100px;

        .pagination-btn,
        .pagination-page {
            padding: 8px 5px;
            font-size: 14px;
            background: #FFF;
            color: #0033C5;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: #E0EFFF;
                border-color: #0033C5;
            }

            &:disabled {
                background: #e9e9e9;
                color: #969595;
                cursor: not-allowed;
            }
        }

        .pagination-page {
            width: 41px;

            &.active {
                background: #0033C5;
                color: white;
                border-color: #0033C5;
            }
        }

        .pagination-btn {
            width: 103px;
            font-weight: bold;

            &.prev {
                color: #888;
            }

            &.next {
                color: #0033C5;
            }
        }
    }
}

@media (max-width: 900px) {
    .related-posts {
        .container {
            padding-top: 60px;
            padding-bottom: 80px;
        }
    }

    .accents,
    .accents-right {
        display: none;
    }

    .hero {
        h1 {
            font-size: 23pt;
            text-align: center;
            line-height: 25pt;

            img {
                width: 40px !important;
                margin-right: 0 !important;
            }
        }
    }

    .related-posts {
        .related-posts-container {
            box-shadow: none;
            margin-bottom: -40px;
            border-radius: 0;

            .posts-title {
                text-align: center;
            }

            .post {
                min-height: 220px;
                padding: 0 10px !important;

                .post-card {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;

                    .post-image {
                        width: 100%;
                        height: auto;
                        margin-bottom: 10px;
                    }

                    .post-content {
                        padding: 0 10px;
                    }
                }
            }
        }
    }

    .pagination {
        gap: 10px !important;
    }
}
</style>