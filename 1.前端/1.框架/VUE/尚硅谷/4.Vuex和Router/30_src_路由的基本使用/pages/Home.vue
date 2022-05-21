<template>
  <h2>我是Home</h2>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
};
</script>

<style>
</style>