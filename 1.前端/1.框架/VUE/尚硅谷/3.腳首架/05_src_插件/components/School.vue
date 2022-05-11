<template>
  <div>
    <h2>學校姓名: {{ name }}</h2>
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
};
</script>

