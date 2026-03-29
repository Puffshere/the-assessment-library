<template>
    <div></div>
</template>

<script>
export default {
    middleware: ['auth'],
    mounted() {
        this.$router.replace('/kids/onboarding')
    }
}
</script>
