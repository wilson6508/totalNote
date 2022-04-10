<template>
  <div>
    <b-container class="mt-5">
      <b-card>
        <b-button @click="test01()" style="float: right" variant="success">下載Excel檔</b-button>
        <b-table :items="items"></b-table>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { age: 21, name: "Larsen", department: "Marketing", dateOfBirth: "1984-05-20" },
      { age: 38, name: "Jami", department: "Accounting", dateOfBirth: "1984-05-20" },
      { age: 40, name: "Dickerson", department: "Development", dateOfBirth: "1984-05-20" },
      { age: 89, name: "Geneva", department: "中文測試", dateOfBirth: "1984-05-20" },
    ],
  }),
  methods: {
    downloadExcel(excelHeader, excelData) {
      import("@/vendor/Export2Excel")
        .then((excel) => {
          excel.export_json_to_excel({
            header: excelHeader,
            data: excelData,
            filename: "AAA",
            autoWidth: true,
            bookType: "xlsx",
          });
        })
        .catch((xhr) => {
          console.log(xhr);
        });
    },
    test01() {
      const excelHeader = [];
      for (const prop in this.items[0]) {
        excelHeader.push(prop);
      }
      const excelData = this.items.map((item) => excelHeader.map((prop) => item[prop]));
      this.downloadExcel(excelHeader, excelData);
    },
  },
};
</script>
