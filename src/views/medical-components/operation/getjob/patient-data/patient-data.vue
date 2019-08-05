<template src="./patient-data.html"></template>


<style lang="scss" src="./patient-data.scss" scoped>
</style>
<script>
import service from "@/service/service";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    flatPickr
  },
  props: {
    operation_id: {
      type: String
    }
  },
  data() {
    let default_bone = service.bone_status.map(x => false)
    return {
      name_prefix: null,
      prefixs: service.prefixs,
      patient_name: "",
      patient_surname: "",
      patient_age: "",
      patient_month: "",
      patient_gender: "",
      patient_nation: "",
      patient_country: "",
      patient_cardid: "",
      treatment_right: "",
      private_insurance: "",
      accident_type: "",
      pulse_time: null,
      pulse_count: null,
      breathing_count: null,
      pressure_count: null,
      sense_status: "",
      breathing_status: "",
      wound_status: "",
      bone_status: default_bone,
      treat_breath: "",
      treat_bone: "",
      treat_bleed: "",
      cpr_status: "",
      primary_results: "",



      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      treatment_right_list: service.treatment_right2,
      private_insurance_list: service.private_insurance,
      primary_results: service.primary_results,
      rc_codes: service.rc_codes,
      sense_status_list: service.sense_status,
      breathing_status_list: service.breathing_status,
      wound_status_list: service.wound_status,
      bone_status_list: service.bone_status,
      treat_breath_list: service.treat_breath,
      treat_bone_list: service.treat_bone,
      treat_bleed_list: service.treat_bleed,
      cpr_status_list: service.cpr_status,
      primary_results_list: service.primary_results,
      nation_list: service.nation_list
    };
  },
  computed: {
    body() {
      var item = this.data;
      item.operation_id = this.operation_id;
      return item;
    },
    prefixs_view() {
      return this.prefixs.map(item => {
        if (this.$i18n.locale == "th") {
          return { value: item.id, text: item.th };
        } else {
          return { value: item.id, text: item.en };
        }
      });
    },
    bodydata() {
      return {
        operation_id: this.operation_id,
        name_prefix: this.name_prefix,
        patient_name: this.patient_name,
        patient_surname: this.patient_surname,
        patient_age: this.patient_age,
        patient_month: this.patient_month,
        patient_gender: this.patient_gender,
        patient_nation: this.patient_nation,
        patient_country: this.patient_country,
        patient_cardid: this.patient_cardid,
        treatment_right: this.treatment_right,
        private_insurance: this.private_insurance,
        accident_type: this.accident_type,
        pulse_time: this.pulse_time,
        pulse_count: this.pulse_count,
        breathing_count: this.breathing_count,
        pressure_count: this.pressure_count,
        sense_status: this.sense_status,
        breathing_status: this.breathing_status,
        wound_status: this.wound_status,
        bone_status: this.bone_status,
        treat_breath: this.treat_breath,
        treat_bone: this.treat_bone,
        treat_bleed: this.treat_bleed,
        cpr_status: this.cpr_status,
        primary_results: this.primary_results,
        patient_img1: this.patient_img1,
        patient_img2: this.patient_img2,
        patient_img3: this.patient_img3,
        patient_img4: this.patient_img4
      };
    }
  },
  methods: {
    save() {
      this.bodydata.bone_status = this.bodydata.bone_status
        .map(x => {
          if (x) return 1;
          else return 0;
        })
        .toString();
      debugger;
      service.postData("update_operation_master", this.bodydata).then(
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
    },
    onFileChange(e, type) {
      const file = e.target.files[0];
      // alert(2);
      // this.url = URL.createObjectURL(file);
      console.log(this.url);
      var reader = new FileReader();

      reader.onload = e => {
        // $('#blah').attr('src', e.target.result);
        console.log(e.target.result);
        var base64 = e.target.result;
        var index = base64.indexOf("base64,");
        console.log(index);
        // if(type=="font_img")

        this.data[type] = base64.substring(index + 7, base64.length);

        // this.image=this.image;
      };

      reader.readAsDataURL(file);
      console.log(e);
    }
  }
};
</script>
