<template src="./sending-decision.html"></template>
<style src="./sending-decision.css"></style>
<script>
import service from "@/service/service";
export default {
  data() {
    return {
      hospital_list: [],
      hospital_name: "",
      hospital_type: "",
      reason1: false,
      reason2: false,
      reason3: false,
      reason4: false
    };
  },
  computed: {
    reason() {
      return [this.reason1, this.reason2, this.reason3, this.reason4];
    },
    hospital_reason() {
    let temp = this.reason.map(x => {
        if (x) {
          return 1;
        }
        return 0;
      });
      return temp
    }
  },
  created() {
    service.getData("get_hospital_master").then(result => {
      if (result.code) {
        this.$swal({
          title: this.$t("connection_error"),
          type: "error"
        });
      } else {
        if (result.data.length == 0) {
          this.$swal({
            title: this.$t("no_data"),
            type: "error"
          });
        } else {
          this.hospital_list = result.data.map(x => {
            return { label: x.hospital_name, value: x.hospital_id };
          });
        }
      }
    });
  },
  method: {},
  watch: {}
};
</script>


