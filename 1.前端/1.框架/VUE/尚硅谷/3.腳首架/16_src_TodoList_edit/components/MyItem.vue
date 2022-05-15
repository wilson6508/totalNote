<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleUpdate(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button @click="handleDelete(todo.id)">刪除</button>
    <button v-show="!todo.isEdit" @click="handleEdit(todo)">編輯</button>
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
    handleEdit(todo) {
      // todo.hasOwnProperty("isEdit")
      // todo.isEdit !== undefined
      // "isEdit" in todo
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus();
      // }, 200);
      // nextTick所指定的回調函數, 會在DOM節點更新之後再持行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, $event) {
      todo.isEdit = false;
      if (!$event.target.value.trim()) return alert("輸入不能為空");
      this.$bus.$emit("editTodo", todo.id, $event.target.value);
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