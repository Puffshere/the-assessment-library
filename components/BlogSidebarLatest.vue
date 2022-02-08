<template>
    <section class="blog-sidebar">
        <h4>Latest News from our <span>Blog</span></h4>
        <div v-for="post in posts" :key="post.id" class="col-12 post">
            <nuxt-link :to="`/blog/${post.slug}`">
                <img class="image" :src="post.feature_image">

                <p class="date">Posted {{ post.published_at | moment('from') }}</p>
                <h5 class="title">{{ post.title }}</h5>
            </nuxt-link>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            count: {
                default: 6,
                type: String
            }
        },
        data() {
            return {
                posts: [],
                loading: true
            }
        },
        async created() {
            const response = await this.$axios.get(`posts/?key=1cd8f26ccc1cb09274574d0e00&limit=${this.count}`);
            this.posts = response.data.posts;
            this.loading = false;
        }
    }
</script>

<style lang="scss" scoped>
    .blog-sidebar {
        h4 {
            font-size: 18pt;
            margin-top: 0;
            margin-bottom: 18px;
            border-bottom: 3px solid #eaeaea;

            span {
                color: #0033c5;
            }
        }

        .post {
            min-height: 70px;

            .image {
                width: 60px;
                height: 60px;
                position: absolute;
                background-size: cover !important;
                background-position: center !important;
                object-fit: cover;
                border-radius: 6px;
                transition: transform .3s ease;

                &:hover {
                    transform: scale(1.05);
                }
            }

            .date {
                margin-top: 5px;
                margin-left: 70px;
                margin-bottom: -20px;
                font-size: 8pt;
                color: #666;
            }

            a {
                text-decoration: none;

                .title {
                    color: initial;
                    font-size: 11pt;
                    line-height: 15pt;
                    margin-top: 20px;
                    margin-bottom: 0;
                    margin-left: 70px;
                }
            }

            &:last-of-type {
                margin-bottom: 60px;
            }
        }
    }
</style>