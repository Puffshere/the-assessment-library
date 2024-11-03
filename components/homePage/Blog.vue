<template>
    <section class="related-posts">
      <div class="container" style="margin-top: 0px;">
        <div class="row related-posts-container">
          <h3 class="posts-title">Read our blog</h3>
          <div class="col-3 col-6-sm post" v-for="post in posts" :key="post.id">
            <nuxt-link :to="`/blog/${post.slug}`">
              <img
                class="image"
                :src="getImageUrl(post)"
                alt="post feature image"
              />
              <h3 class="title" :title="post.title.rendered">
                {{ truncateTitle(post.title.rendered) }}
              </h3>
            </nuxt-link>
          </div>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 60px;">
          <button class="blue" @click="jumpToBlog">
            Read More
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        active: 'd',
        interrupted: false,
        blogLoading: true, // Renamed loading state to avoid conflicts
        posts: [],
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
    methods: {
      changeActive(active) {
        this.active = active;
        this.interrupted = true;
      },
      jumpToBlog(event) {
        window.location.href = 'https://blog.assessments24x7.com/';
        event.target.blur();
      },
      getImageUrl(post) {
        return post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]
          ? post._embedded['wp:featuredmedia'][0].source_url
          : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80';
      },
      truncateTitle(title) {
        const maxLength = 100; // Adjust to match approximately 2 lines
        if (title.length > maxLength) {
          return title.slice(0, maxLength) + '...';
        }
        return title;
      }
    },
    async created() {
      this.blogLoading = true; // Set loading to true before request
      try {
        const response = await this.$axios.get(
          'https://blog.assessments24x7.com/wp-json/wp/v2/posts?per_page=4&order=desc&categories=6&_embed'
        );
        this.posts = response.data; // Assign the response data directly to posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        this.blogLoading = false; // Set loading to false after the request completes
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
    margin: 0px 0 100px;
  
    .related-posts-container {
      padding: 14px 0;
  
      .posts-title {
        margin-top: 40px;
        margin-bottom: 50px;
        text-align: center;
        color: #213C85;
      }
  
      .post {
        .image {
          width: 100%;
          height: 140px;
          background-size: cover !important;
          background-position: center !important;
          object-fit: cover;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          transition: transform 0.3s ease;
  
          &:hover {
            transform: scale(1.03);
          }
        }
  
        a {
          text-decoration: none;
  
          .title {
            color: initial;
            font-size: 12pt;
            line-height: 15pt;
            margin-top: 20px;
            margin-bottom: 0;
            color: #213C85;
            text-align: center;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            &:hover {
              overflow: visible;
            }
          }
        }
      }
    }
  }
  
  @media screen and (max-width: $breakpoint-med) {
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
  
          .title {
            font-size: 11pt !important;
          }
        }
      }
    }
  }
  </style>