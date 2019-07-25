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
            <div class="mt-3" style="border-bottom:1px solid gray;padding-bottom:20px;">


                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('operating_unit_name')}}</label>

                         </div>
                         <div class="vx-col  md:w-2/3 w-full mt-5">
                           <vs-select autocomplete class="w-full" v-model="newReadyOperatingUnit.operating_unit_id">
                            <vs-select-item :key="index" :value="item.operating_unit_id" :text="item.operating_unit_name" v-for="(item,index) in operating_units" />
                            </vs-select>
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
                          <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" v-model="newReadyOperatingUnit.start_date"></datepicker>
                         </div>

                         <div class="vx-col  md:w-1/3 w-full mt-5">
                            <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newReadyOperatingUnit.start_time" placeholder="Choose time" />
                         </div>
                       </div>
                  </div>
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('end_date')}}</label>

                         </div>
                         <div class="vx-col  md:w-1/2 w-full mt-5">
                            <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" v-model="newReadyOperatingUnit.end_date"></datepicker>
                         </div>

                         <div class="vx-col  md:w-1/3 w-full mt-5">
                          <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newReadyOperatingUnit.end_time" placeholder="Choose time" />
                         </div>
                       </div>
                  </div>
                </div>

                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" >
                           <label>{{$t('reason')}}</label>

                         </div>
                         <div class="vx-col  md:w-5/6 w-full mt-5">
                           <vs-select class="w-full" v-model="newReadyOperatingUnit.reason">
                            <vs-select-item :key="index" :value="item.id" :text="item.value" v-for="(item,index) in reasons" />
                            </vs-select>
                         </div>
                       </div>
                  </div>
                   <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('detail_')}}</label>

                         </div>
                         <div class="vx-col  md:w-5/6 w-full mt-5">
                            <vs-textarea class="w-full" v-model="newReadyOperatingUnit.detail"/>
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
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    ReadyOperatingUnit:{
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
      operating_units:[],
        addNewDataSidebar: false,
    }
  },

  components: {
    Datepicker,
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

      }
    },
  watch: {
    ReadyOperatingUnit(val){
       this.newReadyOperatingUnit=val;
       this.newReadyOperatingUnit.start_date=moment(this.newReadyOperatingUnit.start_date).format('YYYY-MM-DD');
        this.newReadyOperatingUnit.start_time=moment(this.newReadyOperatingUnit.start_date).format('HH:mm:ss');
        this.newReadyOperatingUnit.end_date=moment(this.newReadyOperatingUnit.end_date).format('YYYY-MM-DD');
        this.newReadyOperatingUnit.end_time=moment(this.newReadyOperatingUnit.end_date).format('HH:mm:ss');
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
