<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back()">上一步</button>
    <button @click="forward()">下一步</button>
    <button @click="test()">測試GO</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test() {
      this.$router.go(-2);
    },
  },
};
</script>
