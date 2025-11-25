<template>
  <section class="assessment-session">
    <main-nav />

    <div class="container">
      <h1>{{ slugTitle }}</h1>

      <div v-if="loading">Loading assessment...</div>
      <div v-else>
        <!-- Your assessment UI goes here -->
        <p>Assessment session page for session: {{ sessionId }}</p>
      </div>
    </div>

    <footer-fold />
  </section>
</template>

<script>
export default {
  middleware: ['auth'],

  data() {
    return {
      loading: true,
      slugTitle: '',
    };
  },

  computed: {
    sessionId() {
      return this.$route.params.sessionId;
    },
    slug() {
      return this.$route.params.slug;
    }
  },

  async mounted() {
    this.slugTitle = this.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    await this.markSessionStarted();
    this.loading = false;
  },

  methods: {
    async markSessionStarted() {
      try {
        const token = this.$store.state.token;
        await this.$axios.$post(
          `/api/library/sessions/${this.sessionId}/mark-started`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
      } catch (err) {
        console.error("Failed to mark session started:", err);
      }
    }
  }
};
</script>

<style scoped>
/* style optionally */
</style>
