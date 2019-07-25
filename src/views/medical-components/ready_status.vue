<template >
  <div class="vx-col w-full mb-base" v-if="renderComponent">

    <edit-ready-operating-unit :isSidebarActive="addNewDataSidebar" :ReadyOperatingUnit="ready_operatingunit" @closeSidebar="addNewDataSidebar = false" />
    <vx-card>
        <vs-tabs>
            <vs-tab :label="$t('operating_unit')">
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
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
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
                <div class="vx-row">
                  <div class="vx-col w-full mt-5">
                    <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary" @click="save_operation()">{{$t('save')}}</vs-button>

                  </div>


                </div>
              </div>
               <div class="mt-3">
                 <vs-table pagination max-items="10" search :data="ready_operatingunits">

                    <template slot="thead">
                      <vs-th sort-key="operating_unit_name">{{$t('operating_unit')}}</vs-th>
                      <vs-th sort-key="start_date">{{$t('start_date')}}</vs-th>
                      <vs-th sort-key="end_date">{{$t('end_date')}}</vs-th>

                      <vs-th sort-key="reason">{{$t('reason')}}</vs-th>
                      <vs-th sort-key="detail">{{$t('detail')}}</vs-th>
                       <vs-th>{{$t('view')}}</vs-th>
                      <vs-th>{{$t("edit")}}</vs-th>
                      <vs-th>{{$t("delete")}}</vs-th>
                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :key="index" v-for="(tr, index) in data">

                        <vs-td :data="tr.operating_unit_name" width="250px">
                          {{tr.operating_unit_name}}
                        </vs-td>

                        <vs-td :data="tr.start_date">
                          {{ tr.start_date }}
                        </vs-td>

                        <vs-td :data="tr.end_date">
                          {{ tr.end_date }}
                        </vs-td>

                        <vs-td :data="tr.reason">
                          {{ tr.reason }}
                        </vs-td>
                        <vs-td :data="tr.detail">
                          {{ tr.detail }}
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="SearchIcon" class="cursor-pointer w-6 h-6" size="small"></feather-icon>

                        </vs-td>
                        <vs-td>
                          <feather-icon icon="EditIcon" class="cursor-pointer w-6 h-6" size="small" @click="ready_operatingunit=tr;addNewDataSidebar=true"></feather-icon>
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="Trash2Icon" class="cursor-pointer w-6 h-6" size="small" @click="delete_operator(tr)"></feather-icon>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
               </div>
            </vs-tab>
            <vs-tab :label="$t('emergency_room')">
              <div class="mt-3" style="border-bottom:1px solid gray;padding-bottom:20px;">


                <div class="vx-row">
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('hospital_name')}}</label>

                         </div>
                         <div class="vx-col  md:w-2/3 w-full mt-5">
                           <vs-select autocomplete class="w-full" v-model="newReadyHospital.hospital_id">
                            <vs-select-item :key="index" :value="item.hospital_id" :text="item.hospital_name" v-for="(item,index) in hospitals" />
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
                          <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" v-model="newReadyHospital.start_date"></datepicker>
                         </div>
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('start_time')}}</label>

                         </div>
                         <div class="vx-col  md:w-1/6 w-full mt-5">
                            <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newReadyHospital.start_time" placeholder="Choose time" />
                         </div>
                       </div>
                  </div>
                  <div class="vx-col md:w-1/2 w-full mt-5">
                       <div class="vx-row">
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('end_date')}}</label>

                         </div>
                         <div class="vx-col  md:w-1/2 w-full mt-5">
                            <datepicker format="yyyy-MM-dd"  placeholder="Select Date" class="w-full" v-model="newReadyHospital.end_date"></datepicker>
                         </div>
                         <div class="vx-col  md:w-1/6 w-full mt-5" style="text-align:right;padding:5px">
                           <label>{{$t('end_time')}}</label>

                         </div>
                         <div class="vx-col  md:w-1/6 w-full mt-5">
                          <flat-pickr :config="configdateTimePicker" class="w-full" v-model="newReadyHospital.end_time" placeholder="Choose time" />
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
                           <vs-select class="w-full" v-model="newReadyHospital.reason">
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
                            <vs-textarea class="w-full" v-model="detail"/>
                         </div>
                       </div>
                  </div>

                </div>
                <div class="vx-row">
                  <div class="vx-col w-full mt-5">
                    <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary" @click="save_hospital()">{{$t('save')}}</vs-button>

                  </div>


                </div>
              </div>
               <div class="mt-3">
                 <vs-table pagination max-items="10" search :data="ready_hospitals">

                    <template slot="thead">
                      <vs-th sort-key="hospital_name">{{$t('hospital_name')}}</vs-th>
                      <vs-th sort-key="start_date">{{$t('start_date')}}</vs-th>
                      <vs-th sort-key="end_date">{{$t('end_date')}}</vs-th>

                      <vs-th sort-key="reason">{{$t('reason')}}</vs-th>
                      <vs-th sort-key="detail">{{$t('detail')}}</vs-th>
                       <vs-th>{{$t('view')}}</vs-th>
                      <vs-th>{{$t("edit")}}</vs-th>
                      <vs-th>{{$t("delete")}}</vs-th>
                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :key="index" v-for="(tr, index) in data">

                        <vs-td :data="tr.hospital_name">
                          {{tr.hospital_name}}
                        </vs-td>

                        <vs-td :data="tr.start_date">
                          {{ tr.start_date }}
                        </vs-td>

                        <vs-td :data="tr.end_date">
                          {{ tr.end_date }}
                        </vs-td>

                        <vs-td :data="tr.reason">
                          {{ tr.reason }}
                        </vs-td>
                        <vs-td :data="tr.detail">
                          {{ tr.detail }}
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="SearchIcon" class="cursor-pointer w-6 h-6" size="small"></feather-icon>

                        </vs-td>
                        <vs-td>
                          <feather-icon icon="EditIcon" class="cursor-pointer w-6 h-6" size="small" @click="ready_operatingunit=tr;addNewDataSidebar=true"></feather-icon>
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="Trash2Icon" class="cursor-pointer w-6 h-6" size="small" @click="delete_operator(tr)"></feather-icon>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
               </div>
            </vs-tab>

        </vs-tabs>
    </vx-card>
  </div>
  <!-- <button>click</button> -->
</template>
<style lang="scss" scoped>
  button{
    float:right;
    margin-right:10px;
  }
  .require{
    color: red;
  }
  .vdp-datepicker input {
    padding: .7rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: #626262;
    width: 100%;
  }

  .danger input {
    padding: .7rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid red;
    color: #626262;
    width: 100%;
  }
   .error{
    color:red;
     font-size:80%;
  }
  label{
    text-emphasis: none;
  }
</style>

<style>
    .vdp-datepicker__calendar{
    z-index: 50000 !important;
  }
</style>

<script>
import Datepicker from 'vuejs-datepicker';
import service from '@/service/service';
import EditReadyOperatingUnit from './extra-components/EditReadyOperatingUnit.vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import moment from "moment";
export default {
  components: {
    EditReadyOperatingUnit,
    Datepicker,
    flatPickr
  },
   data(){
      return {
        time: null,
            configdateTimePicker: {
              enableTime: true,
              enableSeconds: true,
              noCalendar: true
            },
        reasons:service.reasons,
        ready_operatingunit:{},
        ready_operatingunits:[],
        hospitals:[],
        newReadyHospital:{},
        operating_units:[],
        newReadyOperatingUnit:{},
        ready_hospitals:[],
        renderComponent:true,
        addNewDataSidebar: false,
         'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],


      }
   },

   computed:{
     lang(){
       return this.$i18n.locale;
     },
   },
   created(){
     this.initValue();
     this.getReadyOperatingUnit();

     this.getReadyHospital();
   },
   methods: {
     initValue(){
       this.newReadyOperatingUnit=JSON.parse('{"operating_unit_id":"","start_time":"","end_time":"","start_date":"","reason":"","detail":"","":"","operating_unit_name":""}');
      this.newReadyHospital=JSON.parse('{"hospital_id":"","start_time":"","end_time":"","start_date":"","reason":"","detail":"","operating_unit_name":""}');

       service.getData('get_hospital_master').then((result)=>{
         if(!result.code){
           this.hospitals=result.data;
         }else{
           this.$swal(result.message,'','error');
         }
       },err=>{
         this.$swal('connection error','','error');
       })
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
     getReadyHospital(){
       service.getData('/get_ready_hospital').then((result)=>{
         if(!result.code){
          this.ready_hospitals=JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
         }else{
           this.$swal(result.message,'','error');
         }
       },err=>{
         this.$swal('connection error','','error');
       })
     },
     getReadyOperatingUnit(){
       service.getData("/get_ready_operatingunit").then((result)=>{
       console.log(result);
       if(!result.code){
         this.ready_operatingunits= JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
         this.ready_operatingunits=this.ready_operatingunits.map((item)=>{
           item.start_date=moment(item.start_date).format('DD/MM/YYYY HH:mm:ss');
           item.end_date=moment(item.end_date).format('DD/MM/YYYY HH:mm:ss');
           return item;
         })
       }else{
         this.$swal(result.message,'','error');
       }
     },err=>{
       this.$swal('connection error','','error');
     })
     },
      save_operation(){
        var data=JSON.parse(JSON.stringify(this.newReadyOperatingUnit));
        data.start_time=data.start_time==""?"00:00:00":data.start_time;
        data.end_time=data.end_time==""?"00:00:00":data.end_time;
        data.start_date=data.start_date!=""?data.start_date+'T'+data.start_time:"";
        data.end_date=data.end_date!=""?data.end_date+'T'+data.end_time:"";
         service.postData('add_ready_operatingunit',data).then((result)=>{
           if(!result.code){
             this.$swal(this.$t('success_title'),'','success');
             this.getReadyOperatingUnit();
           }else{
             this.$swal(result.message,'','error');
           }
         },err=>{
           this.$swal('connection error','','error');
         })
      },
      save_hospital(){
        var data=JSON.parse(JSON.stringify(this.newReadyHospital));
        data.start_time=data.start_time==""?"00:00:00":data.start_time;
        data.end_time=data.end_time==""?"00:00:00":data.end_time;
        data.start_date=data.start_date!=""?data.start_date.substring(0,10)+'T'+data.start_time:"";
        data.end_date=data.end_date!=""?data.end_date.substring(0,10)+'T'+data.end_time:"";
         service.postData('add_ready_hospital',data).then((result)=>{
           if(!result.code){
             this.$swal(this.$t('success_title'),'','success');
             this.getReadyHospital();
           }else{
             this.$swal(result.message,'','error');
           }
         },err=>{
           this.$swal('connection error','','error');
         })
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
  watch: {
        addNewDataSidebar(val){
          if(val==false){
            this.getData();
          }
        },
        locale(val) {
            this.$i18n.locale = val;
            alert(val);
            // this.locale=val;

        }

    }
}
</script>

