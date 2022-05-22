<template>
  <div>
    <h2>我是Home</h2>
    <ul>
      <ol>
        <!--要帶上父親的路由-->
        <router-link active-class="active" to="/home/news">News</router-link>
      </ol>
      <ol>
        <router-link active-class="active" to="/home/message"
          >Message</router-link
        >
      </ol>
    </ul>
    <!-- :include="['News', 'Message']" -->
    <!-- include寫的是組件名 -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
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