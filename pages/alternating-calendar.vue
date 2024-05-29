<template>
  <div></div>
</template>

<script>
import axios from 'axios';


export default {
  async mounted() {
    try {
      const response = await axios.get('/api/getCalendarPage');
      const page = response.data.page;
      this.$router.push(`/${page}`);
    } catch (error) {
      console.error('Error fetching calendar page:', error);
      this.$router.push('/error');
    }
  }
};
</script>
