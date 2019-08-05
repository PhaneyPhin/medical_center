<template >
  <div class="vx-col w-full mb-base" v-if="renderComponent">

    <!-- <edit-operator-data :isSidebarActive="addNewDataSidebar" :operator="volunteer" @closeSidebar="addNewDataSidebar = false" /> -->
    <vx-card  v-if="emergency_page">
         <div class="mt-3">
                 <vs-table pagination max-items="10" search :data="emergency_reports">

                    <template slot="thead">
                      <vs-th sort-key="operation_id">{{$t('operation_id')}}</vs-th>
                      <vs-th sort-key="reported_date">{{$t('date')}}</vs-th>
                      <vs-th sort-key="reported_time">{{$t('time')}}</vs-th>
                      <vs-th sort-key="location_name">{{$t('locatio_name')}}</vs-th>
                      <vs-th sort-key="screening_id+level_text+screening_no+symptom">{{$t("screening_sympton")}}</vs-th>
                       <vs-th>{{$t('command')}}</vs-th>

                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :key="index" v-for="(tr, index) in data">

                        <vs-td :data="tr.operation_id" style="width:150px">
                          {{tr.operation_id}}
                        </vs-td>

                        <vs-td :data="tr.reported_date">
                          {{ tr.reported_date }}
                        </vs-td>

                        <vs-td :data="tr.reported_time">
                          {{ tr.reported_time }}
                        </vs-td>

                        <vs-td :data="tr.location_name">
                          {{ tr.location_name }}
                        </vs-td>
                        <vs-td :data="tr.screening_id + tr.level_text+ tr.screening_no + tr.symptom ">
                          {{tr.screening_id }} {{ tr.level_text }} {{ tr.screening_no }} {{ tr.symptom }}
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="SearchIcon" class="cursor-pointer w-6 h-6" size="small" @click="command(tr)"></feather-icon>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
               </div>

    </vx-card>
    <div class="w-full" v-if="!emergency_page">
        <vx-card >
            <h5>{{$t("emergency_data")}}</h5>
            <vs-divider></vs-divider>
            <div class="vx-row">
              <div class="vx-col md:w-1/2 mt-5">
                  <div class="vx-row">
                    <div class="vx-col md:w-1/2" style="text-align:right">{{$t("accident_place")}}:</div>
                    <div class="vx-col md:w-1/2" style="color:blue">{{emergency.location_name}}</div>
                  </div>
              </div>
              <div class="vx-col md:w-1/2 mt-5">
                    <div class="vx-col md:w-1/2" style="text-align:right">{{$t("detail_more")}}:</div>
                    <div class="vx-col md:w-1/2" style="color:blue">{{emergency.place_detail}}</div>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/4 mt-5" style="text-align:right">
                  {{$t("screening_sympton")}}:
              </div>
              <div class="vx-col md:w-3/4 mt-5" style="color:blue">
                  {{emergency.screening_id }} {{ emergency.level_text }} {{ emergency.screening_no }} {{ emergency.symptom }}
              </div>
            </div>
            <!-- <button @click="select()">click me!</button> -->
        </vx-card>
         <vx-card class="mt-5">
            <h5>{{$t("commanding")}}</h5>
            <vs-divider></vs-divider>
            <div class="vx-row">
              <div class="vx-col md:w-1/6 mt-5">{{$t("choose_unit")}}</div>
              <div class="vx-col md:w-5/6 mt-5">
                <div id="ag-grid-demo">


                    <!-- TABLE ACTION ROW -->
                    <div class="flex flex-wrap justify-between items-center">

                      <!-- ITEMS PER PAGE -->
                      <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
                        <vs-dropdown vs-trigger-click class="cursor-pointer">
                          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                            <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ vehicles.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : vehicles.length }} of {{ vehicles.length }}</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                          </div>
                          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
                          <vs-dropdown-menu>

                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                              <span>20</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                              <span>50</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                              <span>100</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">
                              <span>150</span>
                            </vs-dropdown-item>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </div>

                      <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                      <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                        <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Search..." />
                        <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button>
                      </div>
                    </div>
                    <ag-grid-vue
                      :gridOptions="gridOptions"
                      class="ag-theme-material w-100 my-4 ag-grid-table"
                      :columnDefs="columnDefs"
                      :defaultColDef="defaultColDef"
                      :rowData="vehicles"
                      rowSelection="multiple"
                      colResizeDefault="shift"
                      :animateRows="true"
                      :floatingFilter="true"
                      :pagination="true"
                      :paginationPageSize="paginationPageSize"
                      @grid-ready="onGridReady"
                      :suppressPaginationPanel="true" style="border:1px solid rgba(0,0,0,0.2)">
                    </ag-grid-vue>
                    <vs-pagination
                      :total="totalPages"
                      :max="maxPageNumbers"
                      v-model="currentPage" />

                </div>
              </div>
            </div>
            <div class="mt-5" v-if="!emergency_page">
              <div class="vx-row">
              <div class="vx-col md:w-1/6 mt-5">{{$t("choose_hospital")}}</div>
              <div class="vx-col md:w-5/6 mt-5">
                <div id="ag-grid-demo" class="w-full">


                    <!-- TABLE ACTION ROW -->
                    <div class="flex flex-wrap justify-between items-center">

                      <!-- ITEMS PER PAGE -->
                      <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
                        <vs-dropdown vs-trigger-click class="cursor-pointer">
                          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                            <span class="mr-2">{{ currentPage_hospital * paginationPageSize_hospital - (paginationPageSize_hospital - 1) }} - {{ hospitals.length - currentPage_hospital * paginationPageSize_hospital > 0 ? currentPage_hospital * paginationPageSize_hospital : hospitals.length }} of {{ hospitals.length }}</span>
                            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                          </div>
                          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
                          <vs-dropdown-menu>

                            <vs-dropdown-item @click="gridApi_hospital.paginationSetPageSize(20)">
                              <span>20</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi_hospital.paginationSetPageSize(50)">
                              <span>50</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi_hospital.paginationSetPageSize(100)">
                              <span>100</span>
                            </vs-dropdown-item>
                            <vs-dropdown-item @click="gridApi_hospital.paginationSetPageSize(150)">
                              <span>150</span>
                            </vs-dropdown-item>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </div>

                      <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
                      <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
                        <vs-input class="mb-4 md:mb-0 mr-4" v-model="searchQuery_hospital" @input="updateSearchQuery_hospital" placeholder="Search..." />
                        <vs-button class="mb-4 md:mb-0" @click="gridApi_hospital.exportDataAsCsv()">Export as CSV</vs-button>
                      </div>
                    </div>
                    <ag-grid-vue
                      :gridOptions="gridOptions_hospital"
                      class="ag-theme-material w-100 my-4 ag-grid-table"
                      :columnDefs="columnDefs_hospital"
                      :defaultColDef="defaultColDef_hospital"
                      :rowData="hospitals"
                      rowSelection="multiple"
                      colResizeDefault="shift"
                      :animateRows="true"
                      :floatingFilter="true"
                      :pagination="true"
                      :paginationPageSize="paginationPageSize_hospital"
                      @grid-ready="onGridReady_hospital"
                      :suppressPaginationPanel="true" style="border:1px solid rgba(0,0,0,0.2)">
                    </ag-grid-vue>
                    <vs-pagination
                      :total="totalPages_hospital"
                      :max="maxPageNumbers_hospital"
                      v-model="currentPage_hospital" />

                </div>
              </div>
            </div>

            </div>
            <div class="vx-row mt-5">
                <div class="vx-col w-full">
                   <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary"  @click="save()">{{$t('save')}}</vs-button>
                </div>
            </div>
        </vx-card>
    </div>
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
  .ag-grid-table {
    height: 400px;
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
</style>


<script>
import Datepicker from 'vuejs-datepicker';
import service from '@/service/service';
import EditOperatorData from '../extra-components/EditOperatorData.vue';
import { AgGridVue } from "ag-grid-vue"
import contacts from './data.json'
const VxTour = () => import('@/components/VxTour.vue')

import '@/assets/scss/vuesax/extraComponents/agGridStyleOverride.scss'
import { setTimeout } from 'timers';
export default {
  components: {
    EditOperatorData,
    Datepicker,
     AgGridVue,
    VxTour,
  },
   data(){
      return {
        service:service,
        rowSelection:[],
        volunteer:{},
        emergency_reports:[],
        renderComponent:true,
        addNewDataSidebar: false,
        emergency_page:true,
        emergency:{},
        vehicles:[],
         'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],

      vehicles:[],
      searchQuery: '',
      gridOptions:{
      },
      maxPageNumbers: 7,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: this.$t('operating_unit_name'),
          field: 'operating_unit_name',
          filter: true,
          resizable: true

        },
        {
          headerName: this.$t("vehicle_type"),
          field: 'unit_type',
          filter: true,
          resizable: true
        },
        {
          headerName: this.$t('plate_number'),
          field: 'plate_number',
          filter: true,
          resizable: true
        },{
          headerName:this.$t('distance')+" (Km)",
          field:"distance",
          resizable: true
        },
        {
          headerName:this.$t('travel_time')+" (min)",
          field:"travel_time",
          resizable: true
        },{
           checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
          resizable: true
         }
      ],
      hospitals:[],
      searchQuery_hospital: '',
      gridOptions_hospital:{
      },
      maxPageNumbers_hospital: 7,
      gridApi_hospital: null,
      defaultColDef_hospital: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs_hospital: [
        {
          headerName: this.$t('hospital_name'),
          field: 'hospital_name',
          filter: true,
          resizable: true

        },
        {
          headerName: this.$t("potential"),
          field: 'potential',
          filter: true,
          resizable: true
        },{
          headerName:this.$t('distance')+" (Km)",
          field:"distance",
          resizable: true
        },{
          headerName:this.$t('travel_time')+" (min)",
          field:"travel_time",
          resizable: true
        },{
           checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
          resizable: true
         }
      ],
      contacts: contacts,
      }


   },

   computed:{
     lang(){
       return this.$i18n.locale;
     },
     paginationPageSize() {
      if(this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 50
    },
    totalPages() {
      if(this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get() {
        if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set(val) {
          if(this.gridApi)
          this.gridApi.paginationGoToPage(val - 1);
      }
    },
     paginationPageSize_hospital() {
      if(this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 50
    },
    totalPages_hospital() {
      if(this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage_hospital: {
      get() {
        if(this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set(val) {
        if(this.gridApi_hospital)  this.gridApi.paginationGoToPage(val - 1);
      }
    },
    selectedRow(){
      return this.gridApi.getSelectedNodes();
    }
   },
   created(){
    //  var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnZW5fdG9rZW4iOnsidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiIxIn0sImlhdCI6MTU2NDU2MjM4NSwiZXhwIjoxNTY0NTY0MTg1fQ.yKflDEsF1CvVxIvTtcaGOY1vC4ma9E9dHOh1Dicq-8s";

// function decodeToken(token){
// 	var playload = JSON.parse(atob(token.split('.')[1]));
//     console.log(playload);

// };

// decodeToken(token);
     this.getData();

   },
   methods: {
     select(){
        // this.gridApi.forEachNode( (node) => {
        //   node.setSelected(true);
        // });
      //  return this.gridApi.getSelectedNodes();
     },
     getData(){
       service.getData("/get_emergency_reported?command=command").then((result)=>{
       console.log(result);
        if(!result.code){
          this.emergency_reports= JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
          this.emergency_reports=this.emergency_reports.map((item)=>{
            var s={level_text:"",screening_color:""};
            var screening=service.screenings.filter((screen)=>screen.id==item.screening_lv);
            if(screening.length>0){
              s=screening[0];
            }
            item.level_text=s.level_text;
            item.screening_color=s.screening_color;
            return item;
          })
        }
      })



     },
     onGridReady(grid){
      //  alert(11);
       this.gridApi=grid.api;
       console.log(grid.api);
       setTimeout(()=>{
           this.gridApi.forEachNode( (node) => {
          // node.setSelected(true);
        });
       },500);

     },
     onGridReady_hospital(grid){
       this.gridApi_hospital=grid.api;
     },
      command(emergency_report){
         this.emergency=emergency_report;
          this.emergency_page=false;
          service.getData("get_command_vehicle?emergency_reported_id="+this.emergency.emergency_reported_id+"&lat="+emergency_report.lat+"&lon="+emergency_report.lon).then((result)=>{
            if(!result.code){
                this.vehicles=result.data.map((item)=>{
                  item.distance=(parseInt(item.distance)/1000).toFixed(2);
                  item.travel_time=(parseInt(item.travel_time)/60).toFixed(2);
                  return item;
                });
                this.$nextTick(()=>{
                    console.log(this.gridOptions);
                    this.gridApi = this.gridOptions.api;
                    console.log(this.gridOptions.api)
                })
            }else{
              this.$swal(result.message,'','error');
            }
          },err=>{
            this.$swal('connection error','','error')
          })
          service.getData("/get_closest_hospital?lat="+emergency_report.lat+"&lon="+emergency_report.lon).then((result)=>{
            // console.log(result);
            if(!result.code){

              this.hospitals=result.data.map((item)=>{
                   item.distance=(parseInt(item.distance)/1000).toFixed(2);
                  item.travel_time=(parseInt(item.travel_time)/60).toFixed(2);
                  return item;
              });
            }else{

              this.$swal(result.message,'','error')
            }
          },err=>{
            this.$swal('connection error','','error')
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
      updateSearchQuery(val) {
        this.gridApi.setQuickFilter(val);
      },
      updateSearchQuery_hospital(val) {
        this.gridApi.setQuickFilter(val);
      },
      save(){
         var operating_unit_id=this.gridApi.getSelectedNodes().map((item)=>item.data.operating_unit_id);
         var hospital_id=this.gridApi_hospital.getSelectedNodes().map((item)=>item.data.hospital_id);
         var data = {emergency_reported_id:this.emergency.emergency_reported_id, operating_unit_id ,hospital_id};
         console.log(data);
         service.postData("command_operating_unit",data).then((result)=>{
           if(!result.code){
             this.$swal(this.$t('success_tite'),'','success');
             this.emergency_page=true;
           }else{
             this.$swal(result.message,'','error');
           }
         },err=>{
           this.$swal('connection error','','error')
         })
      }
    },
  mounted() {

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

        },
        emergency_page(val){
          this.getData();
        },
      '$store.state.windowWidth'(val) {
          if(val <= 576) {
            this.maxPageNumbers = 4;
            this.maxPageNumbers_hospital = 4;
            // this.gridOptions.columnApi.setColumnPinned('email', null);
          }
          // else this.gridOptions.columnApi.setColumnPinned('email', 'left')
        }
    }
}
</script>

