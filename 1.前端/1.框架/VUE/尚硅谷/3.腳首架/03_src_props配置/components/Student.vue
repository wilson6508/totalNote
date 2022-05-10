<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <h2>學生年齡: {{ myAge }}</h2>
    <button @click="addAge">OK</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props: ["name", "sex", "age"],
  data() {
    return {
      msg: "我是一個學生",
      myAge: this.age, // props層級更高, 先處理props, 再處理data.
    };
  },
  methods: {
    addAge() {
      this.myAge++;
    },
  },
  // 1. 簡單接收
  // props: ["name", "sex", "age"], // <Student age="18" /> 收到必為字串, 可用age*1轉數值
  // 2. 對接收的數據進行類型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // },
  // 3.完整版
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  //   age: {
  //     type: Number,
  //     default: 99,
  //   },
  // },
};
</script>

