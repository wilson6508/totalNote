<template>
  <div>
    <h1>當前和 = {{ sum }}</h1>
    <h3>當前和 * 10 = {{ bigSum }}</h3>
    <h3>我在{{ school }}, 學習{{ subject }}</h3>
    <h3 style="color: red">下方組件總人數是{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇數加</button>
    <button @click="incrementWait(n)">等一下加</button>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // ...mapState(["a", "b"]),
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
  methods: {
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),
  },
  // mounted() {
  //   const x = mapState({he: 'sum'})
  //   console.log(x);
  //   console.log(this);
  // },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>