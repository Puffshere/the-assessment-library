<template></template>

<script>
    export default {
        created() {
            if (process.client) {
                const qs = Object.keys(this.$route.query).map(key => key + '=' + this.$route.query[key]).join('&');
                window.location.href = `https://publishing.assessments24x7.com/wp-json/wp/v2/${this.$route.params.endpoint}?${qs}`;
            }
        }
    }
</script>
