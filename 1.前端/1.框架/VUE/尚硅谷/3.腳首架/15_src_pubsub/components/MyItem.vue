<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleUpdate(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button @click="handleDelete(todo.id)">刪除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleUpdate(id) {
      this.$bus.$emit("updateTodo", id);
    },
    handleDelete(id) {
      if (confirm("確定要刪除嗎?")) {
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
li:hover {
  background-color: #ddd;
}
li button {
  float: right;
  background-color: orange;
  display: none;
}
li:hover button {
  display: block;
}
</style>