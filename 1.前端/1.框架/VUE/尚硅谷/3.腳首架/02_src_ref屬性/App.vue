<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">OK</button>
    <School ref="sch" id="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "歡迎學習Vue",
    };
  },
  methods: {
    showDOM() {
      //   console.log(typeof this.$refs); // object
      //   console.log(this.$refs); // 所有的refs
      //   console.log(this.$refs.title); // 真實DOM元素
      //   console.log(this.$refs.btn); // 真實DOM元素
      //   console.log(document.getElementById("sch")); // 真實DOM元素
      //   console.log(this.$refs.sch); // School組件實例對象(vc)
      //   ref結論用來給元素or子組件註冊引用信息(id的替代者)
    },
  },
};
</script>

<style>
</style>