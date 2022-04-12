<template>
  <div>
    <button @click="clickCount()">Emit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickCount() {
      this.$emit("clickCounts", true, 5566);
    },
  },
};
</script>

https://www.itread01.com/content/1545354219.html
