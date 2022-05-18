<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.google.com.tw">更多美食</a>
    </Category>
    <Category title="遊戲" :listData="gamses">
      <ul slot="center">
        <li v-for="(item, index) in gamses" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://www.google.com.tw">單機遊戲</a>
        <a href="https://www.google.com.tw">網路遊戲</a>
      </div>
    </Category>
    <Category title="電影">
      <video
        slot="center"
        :controls="false"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- <template slot="footer"> -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.google.com.tw">經典</a>
          <a href="https://www.google.com.tw">熱門</a>
          <a href="https://www.google.com.tw">推薦</a>
        </div>
        <h4>歡迎前來觀影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>