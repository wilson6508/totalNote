<template>
  <div>
    <button @click="frontExcel">OK</button>
  </div>
</template>

<script>
import { multipleSheetExport } from "@/tool/ExportExcel";

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          age: 21,
          name: "Larsen",
          department: "Marketing",
          dateOfBirth: "1984-05-20",
        },
        {
          age: 38,
          name: "Jami",
          department: "Accounting",
          dateOfBirth: "1984-05-20",
        },
        {
          age: 40,
          name: "Dickerson",
          department: "Development",
          dateOfBirth: "1984-05-20",
        },
        {
          age: 89,
          name: "Geneva",
          department: "中文測試",
          dateOfBirth: "1984-05-20",
        },
      ],
    };
  },
  methods: {
    frontExcel() {
      const excelData = [
        {
          tHeader: ["id", "姓名", "年齡"],
          filterVal: ["id", "name", "age"],
          tableDatas: [
            { id: 1, name: "Tom", age: 18 },
            { id: 2, name: "中文", age: 90.23 },
          ],
          sheetName: "first",
        },
        {
          tHeader: ["文章id", "文章標題"],
          filterVal: ["articleId", "articleTitle"],
          tableDatas: [
            { articleId: "abcd1234", articleTitle: "中文標題English Title" },
          ],
          sheetName: "第2頁",
        },
      ];
      multipleSheetExport(excelData, "數據表格", true, "xlsx");
    },
  },
};
</script>
