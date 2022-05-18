<template>
  <div class="container">
    <Category title="遊戲">
      <template scope="atguigu">
        <!-- {{ atguigu }} -->
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="遊戲">
      <template scope="{ games, msg }">
        <ol>
          <li style="color: red" v-for="(g, index) in games" :key="index">
            {{ g }}
          </li>
        </ol>
        <h4>{{ msg }}</h4>
      </template>
    </Category>

    <Category title="遊戲">
      <!-- <template slot-scope="{ games }"> -->
      <!--多個 v-slot:name="{ user, fruit }" -->
      <template v-slot="{ games }">
        <h4 v-for="(g, index) in games" :key="index">
          {{ g }}
        </h4>
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