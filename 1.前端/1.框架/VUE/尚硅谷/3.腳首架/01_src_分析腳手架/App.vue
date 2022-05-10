<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
  </div>
</template>

<script>
// < + v + enter 快速生成模板
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
};
</script>
