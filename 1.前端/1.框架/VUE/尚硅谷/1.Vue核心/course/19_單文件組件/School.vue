<template>
  <div class="demo">
    <h2>學校名稱: {{ name }}</h2>
    <h2>學校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {},
};
// const school = Vue.extend({
//   data() {
//     return {
//       name: "尚硅谷",
//       address: "北京",
//     };
//   },
// });
// export { school }          // 統一暴露
// export default school      // 默認暴露
// export 加在const school前   // 分別暴露
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>