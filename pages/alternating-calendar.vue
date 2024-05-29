<template>
  <div></div>
</template>

<script>
export default {
  async mounted() {
    try {
      const response = await this.$axios.get(`/api/getCalendarPage`);
      const page = response.data.page;
      this.$router.push(`/${page}`);
    } catch (error) {
      console.error('Error fetching calendar page:', error);
      this.$router.push('/error');
    }
  }
};
</script>
