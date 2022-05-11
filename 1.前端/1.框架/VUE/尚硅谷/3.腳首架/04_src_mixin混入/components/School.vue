<template>
  <div>
    <h2 @click="showName">學校姓名: {{ name }}</h2>
    <h2>學校地址: {{ address }}</h2>
  </div>
</template>

<script>
import { hunhe, hunhe2 } from "../mixin";

export default {
  name: "School",
  mixins: [hunhe, hunhe2],
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>

