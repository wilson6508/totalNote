<template>
  <div>
    <div class="text-center" style="margin: 5% 15%">
      <b-button @click="insert()" class="mb-2" variant="warning" style="font: small-caption; float: right"
        >新增</b-button
      >
      <b-button
        @click="orderControl()"
        class="mb-2"
        variant="info"
        style="font: small-caption; float: right; margin-right: 1%"
        >{{ orderDisplay }}</b-button
      >
      <b-table :items="items" :fields="fields">
        <template #cell(type)="row">
          <span>{{ transType(row.item.type) }}</span>
        </template>
        <template #cell(sequence)="row">
          <b-button
            v-if="row.item.sequence !== 1"
            class="btn-sm"
            variant="danger"
            style="margin-right: 5%"
            @click="changeSequence(row.item.sequence, '上移')"
            >上移</b-button
          >

          <b-button
            v-if="row.item.sequence !== items.length"
            class="btn-sm"
            variant="success"
            style="margin-right: 5%"
            @click="changeSequence(row.item.sequence, '下移')"
            >下移</b-button
          >
          <span>{{ row.item.sequence }}</span>
        </template>
        <template #cell(action)="row">
          <b-button class="btn-sm" variant="primary" style="margin-right: 5%">修改</b-button>
          <b-button class="btn-sm" variant="dark" @click="deleteStockInfo(row.item.id)">刪除</b-button>
        </template>
      </b-table>
    </div>
    <StockInfoModal ref="editModal"></StockInfoModal>
  </div>
</template>

<style scoped>
.stockTable {
  background-color: #76d7c4;
}
</style>

<script>
import StockInfoModal from "@/components/stock/StockInfoModal";

export default {
  components: {
    StockInfoModal,
  },
  data() {
    return {
      items: [],
      fields: [
        {
          key: "stockId",
          label: "股票代號",
          thStyle: "width: 8rem",
        },
        {
          key: "stockName",
          label: "股票名稱",
          thStyle: "width: 18rem",
        },
        {
          key: "type",
          label: "性質",
          thStyle: "width: 8rem",
        },
        {
          key: "sequence",
          label: "順序",
          thStyle: "width: 12rem",
        },
        {
          key: "action",
          label: "動作",
          thStyle: "width: 12rem",
        },
      ],
      orderDisplay: "隱藏順序",
    };
  },
  mounted() {
    this.queryStockInfo();
  },
  methods: {
    saveStockInfo(stockInfo) {
      return new Promise(() => {
        this.$store
          .dispatch("request", {
            url: "stockInfo",
            method: "POST",
            data: {
              action: "save",
              id: stockInfo.id,
              stockId: stockInfo.stockId,
              stockName: stockInfo.stockName,
              sequence: stockInfo.sequence,
              type: stockInfo.type,
            },
          })
          .then(() => {})
          .catch(() => {
            console.log("error");
          });
      });
    },
    queryStockInfo() {
      return new Promise(() => {
        this.$store
          .dispatch("request", {
            url: "stockInfo",
            method: "POST",
            data: {
              action: "query",
            },
          })
          .then((result) => {
            this.items = result.data.data;
            this.items.sort((a, b) => {
              return a.sequence - b.sequence;
            });
          })
          .catch(() => {
            console.log("error");
          });
      });
    },
    deleteStockInfo(id) {
      return new Promise(() => {
        this.$store
          .dispatch("request", {
            url: "stockInfo",
            method: "POST",
            data: {
              action: "delete",
              id: id,
            },
          })
          .then(() => {
            this.queryStockInfo();
          })
          .catch(() => {
            console.log("error");
          });
      });
    },
    findStockInfoBySequence(sequence) {
      return this.items.find((item) => {
        return item.sequence === sequence;
      });
    },
    orderControl() {
      if (this.orderDisplay === "隱藏順序") {
        const deleteItem = this.fields.find((item) => {
          return item.key === "sequence";
        });
        this.fields.splice(this.fields.indexOf(deleteItem), 1);
        this.orderDisplay = "顯示順序";
      } else {
        // window.location.reload();
        this.fields.pop();
        this.fields.push(
          {
            key: "sequence",
            label: "順序",
            thStyle: "width: 12rem",
          },
          {
            key: "action",
            label: "動作",
            thStyle: "width: 12rem",
          }
        );
        this.orderDisplay = "隱藏順序";
      }
    },
    transType(type) {
      if (type) {
        return "一般股票";
      } else {
        return "ETF";
      }
    },
    changeSequence(sequence, moveUpOrDown) {
      switch (moveUpOrDown) {
        case "上移":
          const item01 = this.findStockInfoBySequence(sequence);
          const item02 = this.findStockInfoBySequence(--sequence);
          item01.sequence--;
          this.saveStockInfo(item01);
          item02.sequence++;
          this.saveStockInfo(item02);
          this.queryStockInfo();
          break;
        case "下移":
          const item03 = this.findStockInfoBySequence(sequence);
          const item04 = this.findStockInfoBySequence(++sequence);
          item03.sequence++;
          this.saveStockInfo(item03);
          item04.sequence--;
          this.saveStockInfo(item04);
          this.queryStockInfo();
          break;
      }
    },
    insert() {
      this.$refs.editModal.title = "新增庫存";
      this.$refs.editModal.modalShow = true;
    },
  },
};
</script>
