<template>
  <div>
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "張三",
      sex: "女",
    };
  },
};
</script>

