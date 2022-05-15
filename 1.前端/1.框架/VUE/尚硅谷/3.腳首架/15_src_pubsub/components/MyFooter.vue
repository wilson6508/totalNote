<template>
  <div v-show="total">
    <!-- <label><input type="checkbox" :checked="idAll" @change="checkAll" /></label>  e.target.checked -->
    <label><input type="checkbox" v-model="selectAll" /></label>
    <span>已完成{{ doneTotal }} / 全部{{ total }}</span
    ><br />
    <button @click="clear">清除已完成的任務</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoArr", "checkTodo", "clearTodo"],
  computed: {
    doneTotal() {
      // this.todoArr.reduce((pre, current) => {
      //   console.log(pre);
      //   console.log(current);
      // }, 0)
      return this.todoArr.reduce((acc, todo) => acc + (todo.done ? 1 : 0), 0);
      // return this.todoArr.filter((todo) => todo.done).length;
    },
    total() {
      return this.todoArr.length;
    },
    selectAll: {
      set(val) {
        this.checkTodo(val);
      },
      get() {
        return this.doneTotal === this.total;
      },
    },
  },
  methods: {
    clear() {
      this.clearTodo();
    },
  },
};
</script>

<style>
</style>