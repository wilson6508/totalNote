<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--跳轉路由, params參數(模板字符串)-->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->
        <!--跳轉路由, params參數(name)-->
        <router-link
          :to="{
            name: 'xiaoxi', // 不能配置path
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      // console.log(this.$router.__proto__);
      this.$router.push({
        name: "xiaoxi", // 不能配置path
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiaoxi",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>
