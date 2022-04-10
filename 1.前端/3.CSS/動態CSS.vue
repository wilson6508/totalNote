<template>
  <div class="text-center" style="margin: 5% 15%">
    <b-button @click="insert()" class="mb-2" variant="success" style="font: small-caption; float: right;" size="sm">新增庫存</b-button>
    <b-button @click="updateAllPrice()" class="mb-2" variant="danger" style="float: left;" size="sm">更新收盤價</b-button>
    <b-table 
    :items="items" 
    :fields="fields"
    class="table table-striped table-light"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"    
    >
      <template #cell(動作)="row">
        <button class="btn btn-dark btn-sm" style="margin-right: 5%" @click="update(row.item)">修改</button>
        <button class="btn btn-primary btn-sm" @click="deleteData(row.item.id)">刪除</button>
      </template>
      <template #cell(損益)="row">
        <div :class="forValue(row.item.損益)">{{ row.item.損益 }}</div>
      </template>
      <template #cell(損益百分比)="row">
        <div :class="forText(row.item.損益百分比)">{{ row.item.損益百分比 }}</div>
      </template>            
    </b-table>
    <IncomeStEditModal ref="editModal"></IncomeStEditModal>
  </div>
</template>

<style scoped>
</style>

<script>
// import axios from "axios";
import IncomeStEditModal from "@/components/stock/IncomeStEditModal";

export default {
  name: "IncomeSt",
  components: {
    // HelloWorld
    IncomeStEditModal
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background-color:#D4E6F8");
  },
  // beforeDestroy() {
  //   document.querySelector("body").removeAttribute("style");
  // },
  mounted() {
    this.query();
  },
  data() {
    return {
      sum: 0,
      items: [],
      fields: [
        {
          key: "stockId",
          label: "股票代號",
          // class: "text-center",
        },
        {
          key: "name",
          label: "股票名稱",
          // class: "text-center",
        },        
        {
          key: "資金比例",
          label: "資金比例",
          // class: "text-center",
        },
        {
          key: "cost",
          label: "成本",
          sortable: true,
          thStyle: "width: 6rem",
          // class: "text-center",
        },
        {
          key: "share",
          label: "持股",
          thStyle: "width: 5rem",
          // class: "text-center",
        },
        {
          key: "成本股價",
          label: "成本股價",
          // class: "text-center",
        },                                
        {
          key: "price",
          label: "市價",
          sortable: true,
          // class: "text-center",
        },
        {
          key: "損益百分比",
          label: "損益百分比",
          sortable: true,
          // class: "text-center",
        },
        {
          key: "損益",
          label: "損益",
          sortable: true,
          // class: "text-center",
        },
        {
          key: "動作",
          label: "",
          // class: "text-center",
        },        
      ],
    };
  },
  methods: {
    query() {
      this.sum = 0;
      this.items = [];
      this.$axios("query")
        .then((result) => {
          for (const element of result.data) {
            this.sum += parseInt(element.cost);
          }
          for (const element of result.data) {
            this.items.push({
              id: element.id,
              stockId: element.stockId,
              name: element.name,
              cost: element.cost,
              share: element.share,
              price: element.price,
              資金比例: this.transToPercent(element.cost, this.sum),
              成本股價: (element.cost / element.share).toFixed(2),
              損益百分比: this.transToPercent(
                this.calculate01(element.price, element.share, element.cost),
                element.cost
              ),
              損益: this.calculate01(element.price, element.share, element.cost),
            });
          }
        })
        .catch(() => {
          console.log("FAIL");
        });
    },
    transToPercent(num, total) {
      // return Math.round(((100 * num) / total) * 100 / 100) + "%";
      const str = ((100 * num) / total ) + "";
      const positon =  str.indexOf('.');
      return str.substring(0, positon + 2) + "%";
    },
    calculate01(x, y, z) {
      // 計算損益 x市價 y持股 z成本
      return parseInt(x * y * (1 - 0.003 - 0.28 * 0.001425) - z);
    },
    deleteData(id) {
      this.$axios({
        url: "delete",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: id,
        },
      }).then(() => {
          this.query();
      })
    },
    insert() {
      this.$refs.editModal.title = "新增庫存";
      this.$refs.editModal.testStockEntity = {};
      this.$refs.editModal.modalShow = true;
    },
    update(element) {
      this.$refs.editModal.title = "修改庫存";
      this.$refs.editModal.testStockEntity = element;
      this.$refs.editModal.modalShow = true;
    },
    updateAllPrice() {
      this.$axios({
        url: "updateAllPrice",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
          this.query();
      })
    },
    forText(str) {
      if (str.startsWith('-')) {
        return "text-success";
      } else {
        return "text-danger";
      }
    },
    forValue(value) {
      if (value < 0) {
        return "text-success";
      } else {
        return "text-danger";
      }
    }    
  },
};
</script>
