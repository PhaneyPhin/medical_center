<template src="./general.html">

</template>
<style lang="scss" src="./general.scss" scoped>

</style>

<script>
import service from '@/service/service'
export default {
  props:{
    operation_id:{
      type:String
    },
    general_editdata:{
      type:Object
    }
  },
  data(){
    return {
      perform_results:service.perform_results,
      screenings:[],
      screening_minor:{},
      screening_minors:[],
      operating_units:[],
      car_types:service.car_type,
      data:this.general_editdata
    }
  },
  computed:{
    perform_result_view(){
      return this.perform_results.filter((item)=>item.type==this.data.result_type);
    },
    detail_view(){
      return this.detail.filter((item)=>item.screening_id==data.screening_id);
    },
    screeings_view(){
      return this.screenings.map((item)=>{
        item.text=item.screening_id+" "+item.screening_name;
        return item;
      })
    },
    screening_minors_view(){
      return this.screening_minors.filter((item)=>item.screening_id==this.data.screening_id).map((item)=>{
        var color=service.screenings.filter((screen)=>screen.id=item.screening_lv)[0];
        console.log(color)
        item.text=item.screening_id+" "+color.level_text+" "+item.screening_no+" "+item.symptom;
        return item;
      })
    },
    body(){
        var item=this.data;
        item.operation_id=this.operation_id;
        item.screening_no=this.screening_minor.screening_no;
        item.screening_lv=this.screening_minor.screening_lv;
        item.perform_result=item.result_type+'0'+item.perform_result;
        return item;
    }
  },
  created(){   
    service.getData("/get_screening_minor").then((result)=>{
      if(!result.code){
        this.screening_minors=result.data;
      }else{
        this.$swal(result.message,'','error');
      }
    },err=>{
      this.$swal('connection error','','error');
    })
    service.getData("/get_mainsymptom").then((result)=>{
      if(!result.code){
        this.screenings=result.data;
      }else{
        this.$swal(result.message,'','error');
      }
    },err=>{
      this.$swal('connection error','','error');
    })
    service.getData("/get_operating").then((result)=>{
      if(!result.code){
        this.operating_units=result.data;
      }else{
        this.$swal(result.message,'','error');
      }
    },err=>{
      this.$swal('connection error','','error');
    })
  },
  mounted(){

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
    }
  },
  watch:{
    "data.screening_id"(val){
      // alert(val);
      this.screening_minor="";
    }
  }

}
</script>

