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
// 需要數據的組件訂閱消息, 提供數據的組件發布消息
import pubsub from "pubsub-js";
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
    deleteTodo(_, id) {
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
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("updateTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>
