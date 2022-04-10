<template>
  <div>
    <b-button @click="testButton()" variant="danger">{{ buttonName }}</b-button>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  props: {
    propsTest: {
      type: String,
      default: "",
    },
    buttonName: {
      type: String,
      default: "",
    },
  },
  methods: {
    testButton() {
      console.log(this.propsTest);
    },
  },
};
</script>
