<template>
  <div>
    <h2 @click="showName">學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
  </div>
</template>

<script>
import { hunhe } from "../mixin";

export default {
  name: "Student",
  mixins: [hunhe],
  data() {
    return {
      name: "張三",
      sex: "女",
    };
  },
};
</script>

