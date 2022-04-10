<template>
  <div class="home">
    <Button :buttonName="'abcd'" :propsTest="'KKK'"></Button>
    <EmitTest @clickCounts="test456()"></EmitTest>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import EmitTest from "@/components/EmitTest.vue";

export default {
  name: "Home",
  components: {
    Button,
    EmitTest,
  },
  data() {
    return {
      color: "color: blue",
      color2: "color: red",
      inputs: "",
    };
  },
  methods: {
    vonTest() {
      this.$refs.div1.innerText = 123;
      // console.log(this.$refs.div1);
    },
    test456() {
      console.log(777);
    },
  },
  updated() {
    console.log(888);
  },
};
</script>
