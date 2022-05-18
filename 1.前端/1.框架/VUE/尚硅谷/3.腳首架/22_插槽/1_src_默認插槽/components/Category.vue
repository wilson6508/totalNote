<template>
  <div class="category">
    <h3>{{ title }}分類</h3>
    <!-- <slot /> -->
    <slot>我是默認值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>