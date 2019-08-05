<template src="./user_master.html"></template>
<style src="./user_master.css"></style>

<script>
import service from '@/service/service';
import EditUser from './EditUser.vue';
export default {
    components:{
      EditUser
    },
    data(){
        return{
          user:{},
          popupActive:false,
          renderComponent:true,
          addNewDataSidebar:false,
          newUser:{},
          roles:service.roles,
          operating_units:[],
          name_prefixs:service.prefixs,
          submitted:false,
          popupActive:false,
            table_data:[]
        }
    },
    computed:{
      prefixs(){

          return this.name_prefixs.map((item)=>{
            return {id:item.id,text:item[this.$i18n.locale]}
          })

      },
      invalid(){
        var c=type=>this.newUser[type]==""&&this.submitted;
        return {card_id:c("card_id"),name_prefix:c("name_prefix"),name:c("name"),surname:c("surname"),role_id:c("role_id")}
      },
      isInvalid(){
        return this.invalid.card_id||this.invalid.name_prefix||this.invalid.name||this.invalid.surname||this.invalid.role_id
      }
    },
    created(){

      this.getData();
    },
    methods:{
        getData(){
           this.newUser=JSON.parse('{"card_id":"","name_prefix":"","name":"","surname":"","operating_unit_id":"","role_id":"","email":"","last_login":""}');
          service.getData("get_usermaster")
          .then((r1)=>{
              if(r1.code){
                  this.$swal({
                      title:$t('connection_error'),
                      type:"error"
                  })
              }else{
                  this.table_data = r1.data.map(x=>{
                      if(x.role_id == "1")
                          x.role_name = "admin"
                      else if(x.role_id == "2")
                          x.role_name = "call_center"
                      else if(x.role_id == "3")
                          x.role_name = "operator"
                      return x
                  })
              }
          })
          service.getData("get_operating").then((result)=>{
            if(result.code){
              this.$swal(result.message,'','error')
            }else{
              this.operating_units=result.data;
            }
          },err=>{
            this.$swal('connection error','','error')
          })

        },
        deleteUser(user){
          this.$swal({
          title:this.$t('delete_user_title'),
          text: this.$t('delete_text'),
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:this.$t('cancel'),
          confirmButtonText:this.$t('confirm_delete'),
          showLoaderOnConfirm: true,
          preConfirm:()=>{
            return service.deleteData(`delete_usermaster?card_id=${user.card_id}`).then((result)=>{

              return result;
            },err=>{
              return {code:true,message:"connection error"}
            })

          }
        }).then((result) => {
          if(result.value){
             if(!result.value.code){
                this.$swal(
                  this.$t('deleted'),
                  '',
                  'success'
                ).then(result=>{
                   this.getData();
                })
              }else{
                this.$swal(result.value.message,'','error');
              }
          }

        })
        },
        view(user){
          this.user=user;
          var prefix=this.prefixs.filter((item)=>item.id==user.name_prefix)[0];
          this.user.prefix=prefix.text;
          var role=this.roles.filter((item)=>item.id==user.role_id)[0];
          this.user.role=role.name;
          this.popupActive=true;
        },
        save(){
          this.submitted=true;
          if(!this.isInvalid){
            service.postData('add_usermaster',this.newUser).then((result)=>{
              if(!result.code){
                this.submitted=false;
                this.$swal(this.$t('success_title'),'','success').then((result)=>{
                  this.getData();
                  this.forceRerender()
                });
              }else{
                this.$swal(result.message,'','error')
              }
            },err=>{
              this.$swal('connection error','','error');
            })
          }
        },
        forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },
    },
    watch:{
      addNewDataSidebar(val){
        if(!val){
          this.getData();
          this.$forceUpdate()
        }
      },
      "$i18n.locale"(val){
        this.forceRerender();
      }
    }
};
</script>


