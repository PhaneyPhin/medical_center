<template src="./patient-data.html">

</template>


<style lang="scss" src="./patient-data.scss" scoped>

</style>
<script>
import service from '@/service/service';
export default {
  props:{
    operation_id:{
      type:String
    }
  },
  data(){
    return{

      trauma_wounds:service.trauma_wounds,
      trauma_bones:service.trauma_bones,
      trauma_bloods:service.trauma_bloods,
      trauma_bodys:service.trauma_bodys,

      ntrauma_medicines:service.ntrauma_medicines,
      ntrauma_obstetricians:service.ntrauma_obstetricians,
      ntrauma_childs:service.ntrauma_childs,
      ntrauma_surgerys:service.ntrauma_surgerys,
      ntruama_others:service.ntruama_others,

      treatment_breaths:service.treatment_breaths,
      treatment_wounds:service.treatment_wounds,
      treatment_waters:service.treatment_waters,
      treatment_bones:service.treatment_bones,
      treatment_cprs:service.treatment_cprs,

      primary_results:service.primary_results,
      rc_codes:service.rc_codes,
      broken_bones:service.broken_bones,
      data:{
        trauma_wound:[],
        trauma_bone:[],
        trauma_blood:[],
        trauma_body:[],
        ntrauma_medicine:[],
        ntrauma_obstetrician:[],
        ntrauma_child:[],
        ntrauma_surgery:[],
        ntruama_other:[],
        treatment_breath:[],
        treatment_wound:[],
        treatment_water:[],
        treatment_bone:[],
        treatment_cpr:[],
        medicine_suggestion:"",
        primary_result:"",
        rc_code:"",
        patient_img1:"",
        patient_img2:"",
        patient_img3:"",
        patient_img4:"",
        broken_bone:[]
      }
    }


  },
   computed:{
        body(){
          var item=this.data;
          item.operation_id=this.operation_id
          return item;
        }
      },
      methods:{
        save(){
          // alert(234);
          service.postData("update_operation_master",this.body).then((result)=>{
            if(!result.code){
              this.$swal(this.$t('success_title'),'','success');
              // this.$emit('close');
            }else{
              this.$swal(result.message,'','error');
            }
          },err=>{
            this.$swal('connection error','','error')
          })
        },
        onFileChange(e,type) {
          const file = e.target.files[0];
          // alert(2);
          // this.url = URL.createObjectURL(file);
          console.log(this.url);
           var reader = new FileReader();

            reader.onload = (e)=> {
              // $('#blah').attr('src', e.target.result);
              console.log(e.target.result);
              var base64=e.target.result;
              var index=base64.indexOf('base64,');
              console.log(index)
                // if(type=="font_img")

                this.data[type]=base64.substring(index+7,base64.length);

              // this.image=this.image;
            }

          reader.readAsDataURL(file);
          console.log(e);
        },
      }
}
</script>
