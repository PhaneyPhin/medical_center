<template src="./getjob.html"></template>
<style src="./getjob.css"></style>
<script>
import service from "@/service/service";
import GetJobTab from "./GetJobTab.vue";
export default {
  components: {
    GetJobTab
  },
  data() {
    return {
      savePage:false,
      selectedOperation_id:"",
      table_data: []
    };
  },
  computed: {},
  created() {
    service.postData("get_getjob")
    .then(result => {

        console.log(result);

      if (result.code) {
        this.$swal({
          title: $t("connection_error"),
          type: "error"
        });
      } else {
        this.table_data = result.data;
      }
    });
  },
  methods: {
    save(item){
      this.selectedOperation_id=item.operation_id;
      this.savePage=true;
    },
    canceljob(emergency_id) {
      console.log(emergency_id);
      this.$swal({
        title: this.$t("cancel_job?"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(result => {
        if (result.value) {
          let body = {
            emergency_reported_id: emergency_id,
            operator_name: service.getUser(),
            cancel_status: 1
          };
          service.postData("get_new_operation_id", body).then(res => {
            if (res.code) {
              this.$swal({
                title: res.message,
                type: "error"
              });
            } else {
              this.$swal({
                title: this.$t("complete"),
                type: "success",
                timer: 1500,
                showComfirmButton: false
              });
              setTimeout(() => {
                this.reloadScreen();
              }, 1500);
            }
          });
        }
      });
    },
    acceptjob(emergency_id) {
      this.$swal({
        title: this.$t("accept_job?"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(result => {
        if (result.value) {
          let body = {
            emergency_reported_id: emergency_id,
            operator_name: service.getUser(),
            cancel_status: 0
          };
          service.postData("get_new_operation_id", body).then(res => {
            if (res.code) {
              this.$swal({
                title: res.message,
                type: "error"
              });
            } else {
              this.$swal({
                title: this.$t("complete"),
                type: "success",
                timer: 1500,
                showComfirmButton: false
              });
              setTimeout(() => {
                this.reloadScreen();
              }, 1500);
            }
          });
        }
      });
    },
    reloadScreen() {
      service.postData("get_getjob").then(result => {
        if (result.code) {
          this.$swal({
            title: $t("connection_error"),
            type: "error"
          });
        } else {
          this.table_data = result.data;
        }
      });
    }
  }
};
</script>


