<template src="./cure_conclusion.html"></template>
<style src="./cure_conclusion.css" lang="css" scoped></style>
<script>
import service from '@/service/service'
export default {
  props:{
    operation_id:{
      type:String
    }
  },
  data() {
    return {
      cure_result_list: [
        { label: this.$t("is_cure"), value: 1 },
        { label: this.$t("not_cure"), value: 0 }
      ],
     data:{
        cure_result: null,
        cure_reason:""
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


