<template>
  <ul>
    <li>消息編號:{{ $route.params.id }}</li>
    <li>消息標題:{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  //   mounted() {
  //     console.log(this.$route);
  //     console.log(this.$route.query);
  //     console.log(this.$route.params);
  //   },
};
</script>
