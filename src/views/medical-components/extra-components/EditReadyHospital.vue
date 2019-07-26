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
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('hospital_name')}}</label>

                         </div>
                         <div class="vx-col  md:w-2/3 w-full mt-5">
                            <vs-select autocomplete class="w-full" v-model="newReadyHospital.hospital_id" :danger="invalid_hospital.hospital">
                              <vs-select-item :key="index" :value="item.hospital_id" :text="item.hospital_name" v-for="(item,index) in hospitals" />
                            </vs-select>
                            <div class="error" v-if="invalid_hospital.hospital">{{$t("hospital_alert")}}</div>
                         </div>
                       </div>
                  </div>

                </div>
                <div class="vx-row">

                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('start_date')}}</label>

                         </div>
                         <div class="vx-col  md:w-1/2 w-full mt-5">
                          <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" :class="{'danger':invalid_hospital.new_start_date}" v-model="newReadyHospital.new_start_date"></datepicker>
                          <div class="error" v-if="invalid_hospital.new_start_date">{{$t("start_date_alert")}}</div>
                         </div>

                         <div class="vx-col  md:w-1/3 w-full mt-5">
                            <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newReadyHospital.new_start_time" placeholder="Choose time" />
                         </div>
                       </div>
                  </div>
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('end_date')}}</label>

                         </div>
                         <div class="vx-col  md:w-1/2 w-full mt-5">
                            <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full"  :class="{'danger':invalid_hospital.new_end_date||invalid_hospital.new_end_date_less}" v-model="newReadyHospital.new_end_date"></datepicker>
                            <div class="error" v-if="invalid_hospital.new_end_date">{{$t('end_date_alert')}}</div>
                            <div class="error" v-if="!invalid_hospital.new_end_date&&invalid_hospital.new_end_date_less">{{$t("end_date_less")}}</div>
                         </div>

                         <div class="vx-col  md:w-1/3 w-full mt-5">
                          <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newReadyHospital.new_end_time" placeholder="Choose time" />
                         </div>
                       </div>
                  </div>
                </div>

                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('reason')}}</label>

                         </div>
                         <div class="vx-col  md:w-5/6 w-full mt-5">
                           <vs-select class="w-full" v-model="newReadyHospital.reason"  :danger="invalid_hospital.reason">
                            <vs-select-item :key="index" :value="item.id" :text="item.value" v-for="(item,index) in reason_hospitals" />
                            </vs-select>
                           <div class="error" v-if="invalid_hospital.reason">{{$t("reason_alert")}}</div>
                         </div>
                       </div>
                  </div>
                   <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('detail_')}}</label>

                         </div>
                         <div class="vx-col  md:w-5/6 w-full mt-5">
                            <vs-textarea class="w-full" v-model="newReadyHospital.detail"/>
                         </div>
                       </div>
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
// import moment from "moment";
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
      configdateTimePicker: {
              enableTime: true,
              enableSeconds: true,
              noCalendar: true
            },
      reason_hospitals:service.reason_hospitals,
      newReadyHospital:{},
      submitted:false,
      hospitals:[],
      operating_units:[],
        addNewDataSidebar: false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },

  components: {
    Datepicker,
    flatPickr,
    VuePerfectScrollbar,

  },
    computed:{

      isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar');
          this.initValues();
        }
      }
    },
    invalid_hospital(){
       var c=type=>{
         return this.submitted&&this.body_hospital[type]=="";
       };
       return {hospital:c("hospital_id"),new_start_date:c("new_start_date"),new_end_date:c("new_end_date"),reason:c("reason"),
        new_end_date_less:this.submitted&&!moment(this.body_hospital.new_end_date).isAfter(monent(this.body_hospital.new_start_date))}
     },
     isInvalid_hospital(){
       return this.invalid_hospital.hospital||this.invalid_hospital.new_start_date||this.invalid_hospital.new_end_date||this.invalid_hospital.new_end_date_less||this.invalid_hospital.reason;
     },
      body_hospital(){

        var data=this.newReadyHospital;
        data.new_start_time=data.new_start_time==""?"00:00:00":data.new_start_time;
        data.new_end_time=data.new_end_time==""?"00:00:00":data.new_end_time;
        data.new_start_date=data.new_start_date!=""?moment(data.new_start_date).format("YYYY-MM-DD")+'T'+data.new_start_time:"";
        data.new_end_date=data.new_end_date!=""?moment(data.new_end_date).format("YYYY-MM-DD")+'T'+data.new_end_time:"";
        return data;
     }
   },
   created(){
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
   methods: {

      save(){
          this.submitted=true;
          if(!this.isInvalid_hospital){
            this.$vs.loading({
                  background: this.backgroundLoading,
                  color: this.colorLoading,
                  container: "#button-with-loading",
                  scale: 0.45
            })

            service.postData('update_ready_hospital',this.body_hospital).then((result)=>{
              if(!result.code){

                 this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                this.$swal(this.$t('success_title'),'','success');
                 this.isSidebarActiveLocal=false;
                // this.getReadyHospital();
              }else{
                 this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                 this.isSidebarActive=false;
                this.$swal(result.message,'','error').then((result)=>{
                  this.isSidebarActive=true;
                });
              }
            },err=>{
               this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              this.$swal('connection error','','error');
            })
          }
      },
    },
  watch: {
    ReadyHospital(val){
      // alert(JSON.stringify(val))
        this.newReadyHospital=val;
        this.newReadyHospital.new_start_date=moment(val.start_date).format('YYYY-MM-DD');
        this.newReadyHospital.new_start_time=moment(val.start_date).format('HH:mm:ss');
        this.newReadyHospital.new_end_date=moment(val.end_date).format('YYYY-MM-DD');
        this.newReadyHospital.new_end_time=moment(val.end_date).format('HH:mm:ss');
     },
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
    width: 80%;
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
