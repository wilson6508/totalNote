<template>
  <div class="category">
    <h3>{{ title }}分類</h3>
    <slot :games="games" msg="hello"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["紅色警戒", "穿越火線", "勁舞團", "超級馬里"],
    };
  },
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