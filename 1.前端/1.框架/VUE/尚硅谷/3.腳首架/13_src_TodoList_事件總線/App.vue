<template>
  <div>
    <MyHeader :createTodo="createTodo" />
    <MyList :todoArr="todoArr" />
    <MyFooter
      :todoArr="todoArr"
      :checkTodo="checkTodo"
      :clearTodo="clearTodo"
    />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todoArr: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    createTodo(obj) {
      this.todoArr.unshift(obj);
    },
    updateTodo(id) {
      const item = this.todoArr.find((todo) => todo.id === id);
      item.done = !item.done;
    },
    deleteTodo(id) {
      this.todoArr = this.todoArr.filter((todo) => todo.id !== id);
    },
    checkTodo(val) {
      this.todoArr.forEach((todo) => (todo.done = val));
    },
    clearTodo() {
      this.todoArr = this.todoArr.filter((todo) => !todo.done);
    },
  },
  watch: {
    todoArr: {
      deep: true,
      handler(val) {
        localStorage.setItem("todos", JSON.stringify(val));
      },
    },
  },
  mounted() {
    this.$bus.$on("updateTodo", this.updateTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("updateTodo");
    this.$bus.$off("deleteTodo");
  },
};
</script>
