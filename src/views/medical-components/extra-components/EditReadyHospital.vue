<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">

        <h4>{{$t('edit_data')}}</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">
        <div class="vx-col w-full mb-base" style="padding:20px">
            <!-- <pre>{{operator}}</pre> -->
            <div class="mt-3">


                 <div class="vx-row">

                         <div class="vx-col w-full mt-5">
                            <label>{{$t('operating_unit_name')}}</label>
                           <vs-select autocomplete class="w-full" :danger="invalid_hospital.hospital_id" v-model="newHospital.hospital_id" disabled>
                            <vs-select-item :key="index" :value="item.hospital_id" :text="item.hospital_name" v-for="(item,index) in hospitals"  />
                            </vs-select>
                            <div class="error" v-if="invalid_hospital.operatingunit">{{$t("hospital_alert")}}</div>
                         </div>
                       </div>
                        <div class="vx-row">

                         <div class="vx-col  md:w-full w-full mt-5">
                         <label>{{$t('start_date')}}</label>

                          <div class="vx-row">
                            <div class="vx-col md:w-2/3 w-ful">
                                <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" :class="{'danger':invalid_hospital.start_date}" v-model="newHospital.start_date"></datepicker>
                                <div class="error" v-if="invalid_hospital.start_date">{{$t("start_date_alert")}}</div>
                            </div>
                            <div class="vx-col md:w-1/3">
                                 <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newHospital.start_time" placeholder="Choose time" />
                            </div>
                          </div>
                         </div>


                       </div>
                        <div class="vx-row">

                         <div class="vx-col w-full mt-5">
                           <label>{{$t('end_date')}}</label>
                            <div class="vx-row">
                              <div class="vx-col md:w-2/3">
                                <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" :class="{'danger':invalid_hospital.end_date||invalid_hospital.end_date_less}" v-model="newHospital.end_date"></datepicker>
                                <div class="error" v-if="invalid_hospital.end_date">{{$t('end_date_alert')}}</div>
                                <div class="error" v-if="!invalid_hospital.end_date&&invalid_hospital.end_date_less">{{$t("end_date_less")}}</div>

                              </div>
                              <div class="vx-col md:w-1/3">
                                <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newHospital.end_time" placeholder="Choose time" />
                              </div>
                            </div>
                         </div>

                       </div>
                          <div class="vx-row">

                            <div class="vx-col md:w-full mt-5">
                              <label>{{$t('reason')}}</label>

                              <vs-select class="w-full" v-model="newHospital.reason" :danger="invalid_hospital.reason">
                                <vs-select-item :key="index" :value="item.id" :text="item.value" v-for="(item,index) in reasons" />
                                </vs-select>
                                <div class="error" v-if="invalid_hospital.reason">{{$t("reason_alert")}}</div>
                            </div>
                          </div>

                       <div class="vx-row">

                         <div class="vx-col  md:w-full w-full mt-5">
                             <label>{{$t('detail_')}}</label>
                            <vs-textarea class="w-full" v-model="newHospital.detail"/>
                         </div>
                       </div>
              </div>
        </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap p-6" slot="footer">
      <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="save" vslor="primary">
       {{$t('save')}}
       </vs-button>
      <!-- <vs-button class="mr-6" @click="save">{{$t('save')}}</vs-button> -->
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Datepicker from 'vuejs-datepicker';
import service from '@/service/service';
import { setTimeout } from 'timers';
import moment from "moment";
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    ReadyHospital:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
        addNewDataSidebar: false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
      hospitals:[],
      reasons:service.reasons,
      original:{},
      newHospital:{},
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
    }
  },

  components: {
    Datepicker,
    VuePerfectScrollbar,
    flatPickr

  },
    computed:{

      isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar');
          // this.initValues();
        }
      }
    },
    invalid_hospital(){
       var c=type=>{
         return this.submitted&&this.body_operation[type]=="";
       };
       return {hospital_id:c("hospital_id"),start_date:c("start_date"),end_date:c("end_date"),reason:c("reason"),
        end_date_less:this.submitted&&!moment(this.body_operation.end_date).isAfter(moment(this.body_operation.start_date))}
     },
       isinvalid_hospital(){
       return this.invalid_hospital.hospital_id||this.invalid_hospital.start_date||this.invalid_hospital.end_date||this.invalid_hospital.end_date_less||this.invalid_hospital.reason;
     },

    body_operation(){
        var data=this.newHospital;
        data.start_time=data.start_time==""?"00:00:00":data.start_time;
        data.end_time=data.end_time==""?"00:00:00":data.end_time;
        data.start_date=data.start_date!=""?moment(data.start_date).format("YYYY-MM-DD")+'T'+data.start_time:"";
        data.end_date=data.end_date!=""?moment(data.end_date).format("YYYY-MM-DD")+'T'+data.end_time:"";
        return data;
     },

   },
   created(){
     this.init();
   },
   methods: {
     init(){
       service.getData('get_hospital_master').then((result)=>{
         if(!result.code){
           this.hospitals=result.data;
         }else{
           this.$swal(result.message,'','error');
         }
       },err=>{
         this.$swal('connection error','','error');
       })
     },
     save(){

         this.submitted=true;

         if(!this.isinvalid_hospital){
          console.log(this.original);
           service.postData('update_ready_hospital',{
             hospital_id:this.original.hospital_id,
             start_date:this.original.start_date,
             end_date:this.original.end_date,
             new_start_date:this.body_operation.start_date,
             new_end_date:this.body_operation.end_date,
             reason:this.body_operation.reason,
             detail:this.body_operation.detail
           }).then((result)=>{
           if(!result.code){
              this.isSidebarActiveLocal=(false);
             this.$swal(this.$t('success_title'),'','success').then((result)=>{
                 this.init();
                this.submitted=false;

                // this.$swal(this.$t('success_title'),'','success');
                this.init();
             });

           }else{
             this.$swal(result.message,'','error');
           }
         },err=>{
           this.$swal('connection error','','error');
         })
         }
      },

    },
  watch: {
    ReadyHospital(val){

      this.original=JSON.parse(JSON.stringify(val));
      console.log(val);
      this.newHospital=val;
      // conole.log(val);
      this.newHospital.start_time=moment(val.start_date).format('HH:mm:ss');
       this.newHospital.end_time=moment(val.end_date).format('HH:mm:ss');
       console.log(this.newHospital);
    }

    }

}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}
li{
    padding-top:10px;
    margin-right:10px;
    float:left;
  }
.scroll-area--data-list-add-new {
    height: calc(100% - 4.3rem);
}
button{
    float:right;
    margin-right:10px;
  }

</style>
<style>
.require{
    color: red;
  }
  .vdp-datepicker input {
    padding: .7rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #626262;
    width: 100% !important;
  }
  .danger input {
    padding: .7rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid red;
    color: #626262;
    width: 100%;
  }

</style>
