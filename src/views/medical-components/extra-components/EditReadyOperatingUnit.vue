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

                         <div class="vx-col  w-full mt-5">
                           <label>{{$t('operating_unit_name')}}</label>
                            <vs-select autocomplete class="w-full" v-model="newReadyOperatingUnit.operating_unit_id" :danger="invalid_operating_unit.operating_unit">
                              <vs-select-item :key="index" :value="item.operating_unit_id" :text="item.operating_unit_name" v-for="(item,index) in operating_units" />
                            </vs-select>
                            <div class="error" v-if="invalid_operating_unit.operating_unit">{{$t("operating_unit_alert")}}</div>
                         </div>
                </div>
                 <div class="vx-row">


                         <div class="vx-col  w-full mt-5">
                            <label>{{$t('start_date')}}</label>
                            <div class="vx-row w-full">
                              <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="vx-col md:w-2/3 w-full" :class="{'danger':invalid_operating_unit.new_start_date}" v-model="newReadyOperatingUnit.new_start_date"></datepicker>
                              <flat-pickr :config="configdateTimePicker"  class="vx-col md:w-1/3 w-full"  v-model="newReadyOperatingUnit.new_start_time" placeholder="Choose time" />
                            </div>
                            <div class="error" v-if="invalid_operating_unit.new_start_date">{{$t("start_date_alert")}}</div>
                         </div>
                </div>
                <div class="vx-row">

                         <div class="vx-col  w-full mt-5">
                            <label>{{$t('end_date')}}</label>
                            <div class="vx-row w-full">
                              <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="vx-col md:w-2/3 w-full" :class="{'danger':invalid_operating_unit.new_end_date}" v-model="newReadyOperatingUnit.new_end_date"></datepicker>
                              <flat-pickr :config="configdateTimePicker"  class="vx-col md:w-1/3 w-full"  v-model="newReadyOperatingUnit.new_end_time" placeholder="Choose time" />
                            </div>
                            <div class="error" v-if="invalid_operating_unit.new_end_date">{{$t("end_date_alert")}}</div>
                             <div class="error" v-if="!invalid_operating_unit.new_end_date&&invalid_operating_unit.new_end_date_less">{{$t("end_date_alert")}}</div>
                         </div>
                </div>
                <div class="vx-row">
                         <div class="vx-col  w-full mt-5">
                          <label>{{$t('reason')}}</label>
                           <vs-select class="w-full" v-model="newReadyOperatingUnit.reason"  :danger="invalid_operating_unit.reason">
                            <vs-select-item :key="index" :value="item.id" :text="item.value" v-for="(item,index) in reasons" />
                            </vs-select>
                           <div class="error" v-if="invalid_operating_unit.reason">{{$t("reason_alert")}}</div>
                         </div>

              </div>
                 <div class="vx-row">
                  <div class="vx-col w-full mt-5">
                      <label>{{$t('detail_')}}</label>
                      <vs-textarea class="w-full" v-model="newReadyOperatingUnit.detail"/>
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
    Readyoperating_unit:{
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
      reasons:service.reasons,
      newReadyOperatingUnit:{},
      submitted:false,
      operating_units:[],
      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
        addNewDataSidebar: false,
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
    invalid_operating_unit(){
       var c=type=>{
         return this.submitted&&this.body_operating_unit[type]=="";
       };
       return {operating_unit:c("operating_unit_id"),new_start_date:c("new_start_date"),end_date:c("new_end_date"),reason:c("reason"),
        new_end_date_less:this.submitted&&!moment(this.body_operating_unit.new_end_date).isAfter(moment(this.body_operating_unit.new_start_date))}
     },
     isInvalid_operating_unit(){
       return this.invalid_operating_unit.operating_unit||this.invalid_operating_unit.new_start_date||this.invalid_operating_unit.new_end_date||this.invalid_operating_unit.new_end_date_less||this.invalid_operating_unit.reason;
     },
      body_operating_unit(){

        var data=this.newReadyOperatingUnit;
        data.new_start_time=data.new_start_time==""?"00:00:00":data.new_start_time;
        data.new_end_time=data.new_end_time==""?"00:00:00":data.new_end_time;
        data.new_start_date=data.new_start_date!=""?moment(data.new_start_date).format("YYYY-MM-DD")+'T'+data.new_start_time:"";
        data.new_start_date=data.new_end_date!=""?moment(data.new_end_date).format("YYYY-MM-DD")+'T'+data.new_end_time:"";
        return data;
     }
   },
   created(){
      service.getData('get_operating').then((result)=>{
         if(!result.code){
           this.operating_units=result.data;
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
          console.log(this.newReadyOperatingUnit)
          if(!this.isInvalid_operating_unit){
            this.$vs.loading({
                  background: this.backgroundLoading,
                  color: this.colorLoading,
                  container: "#button-with-loading",
                  scale: 0.45
            })

            service.postData('update_ready_operatingunit',this.body_operating_unit).then((result)=>{
              if(!result.code){

                 this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                this.$swal(this.$t('success_title'),'','success');
                 this.isSidebarActiveLocal=false;
                // this.getReadyoperating_unit();
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
    Readyoperating_unit(val){
      // alert(JSON.stringify(val))
        this.newReadyOperatingUnit=val;
        this.newReadyOperatingUnit.new_start_date=moment(val.start_date).format('YYYY-MM-DD');
        this.newReadyOperatingUnit.new_start_time=moment(val.start_date).format('HH:mm:ss');
        this.newReadyOperatingUnit.new_end_date=moment(val.end_date).format('YYYY-MM-DD');
        this.newReadyOperatingUnit.new_end_time=moment(val.end_date).format('HH:mm:ss');
        console.log(this.newReadyOperatingUnit)
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
    width:400px;
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
