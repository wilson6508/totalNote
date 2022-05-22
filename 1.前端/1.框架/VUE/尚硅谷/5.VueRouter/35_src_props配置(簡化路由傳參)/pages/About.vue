<template>
  <h2>我是About</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;
  },
};
</script>
