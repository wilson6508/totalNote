<template>
  <div>
    <h3>當前和 = {{ sum }}</h3>
    <h3>當前和 * 10 = {{ bigSum }}</h3>
    <h3>我在{{ school }}, 學習{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇數加</button>
    <button @click="incrementWait">等一下加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 對象寫法
    // ...mapState({
    //   he: "sum",
    //   demo: "school",
    //   test: "subject",
    // }),
    // ...mapGetters({
    //   bs: "bigSum",
    // }),

    // 數組寫法
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>