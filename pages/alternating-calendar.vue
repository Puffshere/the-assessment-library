<template>
  <div>Hello</div>
</template>


<script>
export default {
  async asyncData({ $axios, redirect }) {
    console.log("this is the first console log");
    try {
      const response = await $axios.get('/api/getCalendarPage');
      console.log("this is the response", response);
      const page = response.data.page;
      console.log("this is the page", page);
      redirect(`/${page}`);
    } catch (error) {
      console.error('Error fetching calendar page:', error);
    }
  }
};
</script>