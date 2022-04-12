<template>
<b-modal v-model="modalShow" id="editModal" :title="title">
  <template #modal-footer = "{ cancel }">
  <b-button variant="primary" @click="save()">儲存</b-button>
  <b-button variant="danger" @click="cancel()">取消</b-button>
  </template>
    <b-container>
    <!-- <b-row>
    <label>日期:</label>
    <b-form-datepicker placeholder="請選擇日期" locale="zh-tw"></b-form-datepicker>
    </b-row> -->
    <b-row>
    <label>股票代號:</label>
    <b-form-input v-model="testStockEntity.stockId"></b-form-input>  
    </b-row>
    <div class="forMargin">
    <b-row>
    <label>股票名稱:</label>
    <b-form-input v-model="testStockEntity.name"></b-form-input>  
    </b-row>
    <b-row>
    <label>股票成本:</label>
    <b-form-input v-model="testStockEntity.cost"></b-form-input>  
    </b-row>
    <b-row>
    <label>買入股數:</label>
    <b-form-input v-model="testStockEntity.share"></b-form-input>
    </b-row>
    <b-row v-show="showPrice">
    <label>現在股價:</label>
    <b-form-input v-model="testStockEntity.price"></b-form-input>  
    </b-row>        
    </div>
    </b-container>
</b-modal>
</template>

<style scoped>
.forMargin > div {
  margin-top: 24px;
}
</style>

<script>
export default {
  name: "IncomeStEditModal",
  components: {},
  mounted() {},
  data() {
    return {
      modalShow: false,
      testStockEntity: {},
      title: "",
      showPrice: false,
      api: "",
    };
  },
  methods: {
    save() {
      this.$axios({
        url: this.api,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: this.testStockEntity,
      }).then(() => {
          this.$parent.query();
          this.modalShow = false;
      })
    },
  },
  watch: {
    modalShow() {
      switch(this.title) {
        case "新增庫存":
        this.showPrice = true;
        this.api = "insert";
        break;
        case "修改庫存":
        this.showPrice = false;
        this.api = "update";
        break;
      }
    }
  },
};
</script>
