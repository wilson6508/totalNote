<template>
  <li>
    <label>
      <!--v-model就是checked跟@change, 因為這裡todo是props傳來的, 不推薦直接修改-->
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
export default {
  name: "MyItem",
  props: ["todo", "updateTodo", "deleteTodo"],
  methods: {
    handleUpdate(id) {
      this.updateTodo(id);
    },
    handleDelete(id) {
      if (confirm("確定要刪除嗎?")) {
        this.deleteTodo(id);
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