<template src="./assess-sending.html"></template>
<style src="./assess-sending.css" lang="css" scoped></style>

<script>
import service from '@/service/service'

export default {
  props:{
    operation_id:{type:String}
  },
  data() {
    return {
      data:{
      sending_hn: "",
      sending_diagnose: "",
      sending_lv: "",
      sending_breating: "",
      sending_bleeding: "",
      sending_watering:"",
      sending_bone:"",
      diagnose_role:"",
      diagnose_name:"",
      }
    };
  },
  computed:{
    body(){
      var item=this.data;
      item.operation_id=this.operation_id;
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
    }
  }
};
</script>

