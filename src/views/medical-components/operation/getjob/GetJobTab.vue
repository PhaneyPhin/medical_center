<template src="./GetJobTab.html"></template>
<style src="./GetJobTab.scss" lang="scss" scoped></style>
<script>
import service from "@/service/service";
import general from "./general/general.vue";
import TimeData from "./time-data/time-data.vue";
import PatientData from "./patient-data/patient-data.vue";
import CureConclusion from "./cure_conclusion/cure_conclusion.vue";
import CureResult from "./cure_result/CureResult.vue";
import AccessSending from "./assess-sending/assess_sending.vue";
import SendingDecision from "./sending-decision/sending-decision.vue";
import moment from "moment";
export default {
  props: {
    operation_id: {
      type: String
    },
    editdata: {
      type: Object
    }
  },
  components: {
    general,
    TimeData,
    PatientData,
    CureConclusion,
    CureResult,
    AccessSending,
    SendingDecision
  },
  data() {
    return {
      savePage: false,
      active: true,
      table_data: [],
      tabs: [
        "general_data",
        "time_data",
        "patient_data",
        "sending_decision",
        "access_sending",
        "cure_result",
        "cure_conclusion"
      ],
      tab: "",
      tabs_show: [],
      general_editdata: {
        operating_unit_id: this.editdata.operating_unit_id,
        car_type: this.editdata.car_type,
        perform_place: this.editdata.perform_place,
        zone: this.editdata.zone,
        police_office: this.editdata.police_office,
        plate_number: this.editdata.plate_number,
        officer1: this.editdata.officer1,
        officer2: this.editdata.officer2,
        officer3: this.editdata.officer3,
        officer4: this.editdata.officer4,
        result_type: this.editdata.result_type,
        perform_result: this.editdata.perform_result,
        perform_inside_zone: this.editdata.perform_inside_zone,
        place_detail: this.editdata.place_detail,
        screening_id: this.editdata.screening_id
      },
      time_data_editdata: {
        // leave_base_date:this.editdata.leave_base_time.split(" ")[0],
        // arrive_accident_date:this.editdata.arrive_accident_time.split(" ")[0],
        // leave_accident_date:this.editdata.leave_accident_time.split(" ")[0],
        // arrive_hospital_date:this.editdata.arrive_hospital_time.split(" ")[0],
        // arrive_base_date:this.editdata.arrive_base_time.split(" ")[0],
        // command_date:this.editdata.command_time.split(" ")[0],
        // reported_date:this.editdata.reported_time.split(" ")[0],
        // leave_base_time:this.editdata.leave_base_time.split(" ")[1],
        // arrive_accident_time:this.editdata.arrive_accident_time.split(" ")[1],
        // leave_accident_time:this.editdata.leave_accident_time.split(" ")[1],
        // arrive_hospital_time:this.editdata.arrive_hospital_time.split(" ")[1],
        // arrive_base_time:this.editdata.arrive_base_time.split(" ")[1],
        // command_time:this.editdata.command_time.split(" ")[1],
        // reported_time:this.editdata.reported_time.split(" ")[1],
      },
      sending_decision_editdata: {
        hospital_name: this.editdata.hospital_name,
        hospital_type: this.editdata.hospital_type,
        hospital_reason: this.editdata.hospital_reason
      },
      access_sending_editdata: {
        sending_hn: this.editdata.sending_hn,
        sending_diagnose: this.editdata.sending_diagnose,
        sending_lv: this.editdata.sending_lv,
        sending_breating: this.editdata.sending_breating,
        sending_bleeding: this.editdata.sending_bleeding,
        sending_watering: this.editdata.sending_watering,
        sending_bone: this.editdata.sending_bone,
        diagnose_role: this.editdata.diagnose_role,
        diagnose_name: this.editdata.diagnose_name
      },
      cure_result_editdata: {
        admit_status: this.editdata.admit_status,
        admit_day: this.editdata.admit_day,
        follower_name: this.editdata.follower_name,
        admit_result: this.editdata.admit_result,
        follow_date: moment(this.editdata.follow_date).format("YYYY-MM-DD")
      },
      cure_conclusion_editdata: {
        cure_result: this.editdata.cure_result,
        cure_reason: this.editdata.cure_reason
      }
    };
  },
  computed: {},
  created() {
    this.init();
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
  },
  methods: {
    save() {
      this.savePage = true;
    },
    init() {
      this.tab = this.tabs[0];
    },
    goto(tab) {
      this.tab = tab;
    }
  },
  watch: {
    active(val) {
      alert(2345678);
    }
  }
};
</script>


