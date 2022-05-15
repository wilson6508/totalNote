<template>
  <div>
    <MyHeader :createTodo="createTodo" />
    <MyList
      :todoArr="todoArr"
      :updateTodo="updateTodo"
      :deleteTodo="deleteTodo"
    />
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
      // todoArr: [
      //   { id: "001", title: "抽菸", done: true },
      //   { id: "002", title: "喝酒", done: false },
      //   { id: "003", title: "開車", done: true },
      // ],
      todoArr: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  // 數據在哪個組件, 操作數據的methods就寫在那個組件
  methods: {
    createTodo(obj) {
      this.todoArr.unshift(obj);
    },
    updateTodo(id) {
      this.todoArr.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
      // const item = this.todoArr.find(todo => todo.id === .id);
      // item.done = !item.done;
    },
    deleteTodo(id) {
      this.todoArr = this.todoArr.filter((todo) => todo.id !== id);
      // const index = this.todoArr.findIndex(todo => todo.id === id);
      // this.todoArr.splice(index, 1);
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
};
</script>

<style>
</style>