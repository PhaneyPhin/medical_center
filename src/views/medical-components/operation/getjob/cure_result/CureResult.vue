<template src="./cure_result.html"></template>
<style src="./cure_result.css" lang="css" scoped></style>

<script>
import Datepicker from "vuejs-datepicker";
import service from "@/service/service";
export default {
  components: {
    Datepicker
  },
  props: {
    operation_id: {
      type: String
    },
    cure_result_editdata: {
      type: Object
    }
  },
  data() {
    return {
      data: this.cure_result_editdata
    };
  },
  computed: {
    body() {
      var item = this.data;
      item.operation_id = this.operation_id;
      return item;
    }
  },
  methods: {
    save() {
      // alert(234);
      service.postData("update_operation_master", this.body).then(
        result => {
          if (!result.code) {
            this.$swal(this.$t("success_title"), "", "success");
            // this.$emit('close');
          } else {
            this.$swal(result.message, "", "error");
          }
        },
        err => {
          this.$swal("connection error", "", "error");
        }
      );
    }
  }
};
</script>


