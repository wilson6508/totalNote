<template>
  <div class="school">
    <h2>學校名稱: {{ name }}</h2>
    <h2>學校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log(msgName, data);
    },
  },
  mounted() {
    // this.pubId = pubsub.subscribe("hello", function (msgName, data) {
    //   console.log(this); // undefined
    //   console.log(msgName, data);
    // });
    this.pubId = pubsub.subscribe("hello", this.demo);
    // this.pubId = pubsub.subscribe("hello", (msgName, data) => {
    //   console.log(this); // vc
    //   console.log(msgName, data);
    // });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>