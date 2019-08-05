<template src="./sending-decision.html"></template>
<style src="./sending-decision.css"></style>
<script>
import service from "@/service/service";
export default {
  props: {
    operation_id: {
      type: String
    },
    sending_decision_editdata: {
      type: Object
    }
  },
  data() {
    let reason = [false, false, false, false];
    if (this.sending_decision_editdata.hospital_reason != null) {
      reason = this.sending_decision_editdata.hospital_reason.split(",");
    }
    return {
      hospital_list: [],
      hospital_name: this.sending_decision_editdata.hospital_name,
      hospital_type: this.sending_decision_editdata.hospital_type,
      reason1: reason[0] == "1",
      reason2: reason[1] == "1",
      reason3: reason[2] == "1",
      reason4: reason[3] == "1"
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
      return temp;
    },
    body() {
      return {
        operation_id: this.operation_id,
        hospital_name: this.hospital_name,
        hospital_type: this.hospital_type,
        hospital_reason: this.hospital_reason
      };
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
  methods: {
    save() {
      service.postData("update_operation_master", this.body).then(
        result => {
          if (result.code) {
            this.$swal(result.message, "", "error");
          } else {
            this.$swal(this.$t("success_title"), "", "success");
            // this.$emit('close');
          }
        },
        err => {
          this.$swal("connection error", "", "error");
        }
      );
    }
  },
  watch: {}
};
</script>


