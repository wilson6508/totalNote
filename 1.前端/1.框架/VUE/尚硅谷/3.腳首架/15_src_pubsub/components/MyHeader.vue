<template>
  <div>
    <input
      type="text"
      placeholder="請輸入你的任務名稱, 按回車確認."
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// npm i nanoid (原理: 根據地理位置、網卡內存、時間製造出全世界唯一的字串)
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  props: ["createTodo"],
  methods: {
    add(event) {
      if (!event.target.value.trim()) {
        return alert("輸入不可為空");
      }
      const obj = {
        id: nanoid(),
        title: event.target.value,
        done: false,
      };
      this.createTodo(obj);
      event.target.value = "";
    },
  },
};
</script>

