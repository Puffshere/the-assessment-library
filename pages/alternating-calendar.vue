<!-- <template>
  <div></div>
</template>


<script>
export default {
  async asyncData({ $axios, redirect }) {
    try {
      const response = await $axios.get('/api/getCalendarPage');
      const page = response.data.page;
      redirect(`/${page}`);
    } catch (error) {
      console.error('Error fetching calendar page:', error);
    }
  }
};
</script> -->