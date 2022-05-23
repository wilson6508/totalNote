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
  // 通過路由規則, 進入該組件時被調用
  beforeRouteEnter(to, from, next) {
    console.log(5566);
    next();
  },
  // 通過路由規則, 離開該組件時被調用
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>
