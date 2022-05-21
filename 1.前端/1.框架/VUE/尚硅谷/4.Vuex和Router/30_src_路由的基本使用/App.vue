<template>
  <div>
    <Banner />
    <!-- <a href="./about.html">About</a><br /><br /> -->
    <!-- <a href="./home.html">Home</a> -->
    <!--vue會將router-link標籤轉為a標籤-->
    <router-link active-class="active" to="/about">About</router-link
    ><br /><br />
    <router-link active-class="active" to="/home">Home</router-link>
    <router-view />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style scoped>
.active {
  background-color: yellow;
}
</style>
