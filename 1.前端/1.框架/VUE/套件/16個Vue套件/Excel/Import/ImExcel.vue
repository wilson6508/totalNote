<template>
  <div>
    <b-container class="mt-5">
      <b-card>
        <UploadExcel :on-success="handleSuccess" :before-upload="beforeUpload" />
      </b-card>
    </b-container>
    <b-container class="mt-5">
      <b-card>
        <b-table :items="tableData"></b-table>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import UploadExcel from "@/components/UploadExcel.vue";
export default {
  components: { UploadExcel },
  data() {
    return {
      tableData: [],
      tableHeader: [],
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    },
  },
};
</script>
