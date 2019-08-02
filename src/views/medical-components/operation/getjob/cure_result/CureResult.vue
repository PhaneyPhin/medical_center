<template src="./cure_result.html"></template>
<style src="./cure_result.css" lang="css" scoped></style>

<script>
import Datepicker from "vuejs-datepicker";
import service from '@/service/service'
export default {
  components: {
    Datepicker
  },props:{
    operation_id:{type:String}
  },
  data() {
    return {
     data:{
        admit_status: null,
        admit_day: "",
        follower_name: "",
        admit_result: "",
        follow_date:null
     }
    };
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
    }
  }
};
</script>


