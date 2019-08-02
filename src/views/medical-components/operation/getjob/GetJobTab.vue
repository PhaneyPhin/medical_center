<template src="./GetJobTab.html"></template>
<style src="./GetJobTab.scss" lang="scss" scoped></style>
<script>
import service from "@/service/service";
import general from "./general/general.vue";
import TimeData from "./time-data/time-data.vue";
import PatientData from "./patient-data/patient-data.vue";
import DivisionStatus from "./division-status/division-status.vue";
import evaluation from "./evaluation/evaluation.vue";
import EvaluationExport from "./evaluation-export/evaluation-export.vue";
import TreatmentResult from "./treatement-result/treatment-result.vue";
import CureConclusion from "./cure_conclusion/cure_conclusion.vue";
import CureResult from "./cure_result/CureResult.vue";
import AccessSending from"./assess-sending/assess_sending.vue";
import SendingDecision from "./sending-decision/sending-decision.vue";
export default {
  props:{
    operation_id:{
      type:Object
    }
  },
  components: {
    general,
    TimeData,
    PatientData,
    DivisionStatus,
    evaluation,
    EvaluationExport,
    CureConclusion,
    CureResult,
    AccessSending,
    SendingDecision
  },
  data() {
    return {
      savePage:false,
      active:true,
      table_data: [],
      tabs:[
        "general_data","time_data","patient_data","sending_decision","access_sending","cure_result","cure_conclusion"
      ],
      tab:"",
      tabs_show:[]
    };
  },
  computed: {},
  created() {
    this.init();
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
    save(){
      this.savePage=true;
    },
    init(){
     this.tab=this.tabs[0];
    },
    goto(tab){
      this.tab=tab;
    }
  },
  watch:{
    active(val){
      alert(2345678);
    }
  }
};
</script>


