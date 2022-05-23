<template>
  <div>
    <Banner />
    <router-link active-class="active" :to="{ name: 'guanyu' }"
      >About</router-link
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

<style>
.active {
  background-color: yellow;
}
</style>
