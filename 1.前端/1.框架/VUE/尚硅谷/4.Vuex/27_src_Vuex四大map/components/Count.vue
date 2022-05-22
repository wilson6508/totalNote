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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇數加</button>
    <button @click="incrementWait(n)">等一下加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 對象寫法
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // increment(value) {
    //   this.$store.commit("JIA", value);
    // }
    // 數組寫法
    // ...mapActions(["jiaOdd", "jiaWait"]),
    // ...mapMutations(["JIA", "JIAN"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>