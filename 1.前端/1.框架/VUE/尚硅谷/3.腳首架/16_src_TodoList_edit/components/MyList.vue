<template>
  <div>
    <MyItem v-for="todoObj in todoArr" :key="todoObj.id" :todo="todoObj" />
  </div>
</template>

<script>
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  props: ["todoArr"],
};
</script>

<style>
</style>