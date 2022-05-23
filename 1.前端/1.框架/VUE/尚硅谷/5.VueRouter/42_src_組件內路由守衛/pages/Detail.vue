<template>
  <ul>
    <li>消息編號:{{ id }}</li>
    <li>消息標題:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"], // 接收第2,3種
  //   mounted() {
  //     console.log(this.$route);
  //     console.log(this.$route.query);
  //     console.log(this.$route.params);
  //   },
};
</script>
