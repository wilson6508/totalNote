<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>
    <Category title="遊戲" :listData="gamses">
      <ul>
        <li v-for="(item, index) in gamses" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="電影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["牛排", "小龍蝦", "燒烤", "火鍋"],
      gamses: ["紅色警戒", "穿越火線", "勁舞團", "超級馬里"],
      films: ["《教父》", "《拆但專家》", "《你好，李煥英》", "《上硅谷》"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>