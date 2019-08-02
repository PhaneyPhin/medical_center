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
                        <label>{{$t('operating_unit_name')}} <span class="require">*</span></label>
                        <vs-input type="text" v-model="operating_unit_name" class="w-full" :danger="invalid.operating_unit_name"/>
                        <div class="error" v-if="invalid.operating_unit_name">{{$t("operating_unit_name_alert")}}</div>
                    </div>
                     <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('department_')}} <span class="require">*</span></label>
                        <vs-input v-model="department" class="w-full" :danger="invalid.department" />
                        <div class="error" v-if="invalid.department">{{$t("department_alert")}}</div>
                    </div>
                </div>
                <div class="vx-row">

                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('zone_bangkok')}}</label>
                        <vs-input v-model="zone" class="w-full"  />

                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('unit_type')}}</label>
                        <ul class="centerx">
                            <li>
                              <vs-radio v-model="unit_type" vs-value="1">พื้นฐาน</vs-radio>
                            </li>
                            <li>
                              <vs-radio v-model="unit_type" vs-value="2">ชั้นสูง</vs-radio>
                            </li>
                        </ul>
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('unit_size')}} </label>
                        <ul class="centerx">
                            <li>
                              <vs-radio v-model="unit_size" vs-value="3">แม่โซน</vs-radio>
                            </li>
                            <li>
                              <vs-radio v-model="unit_size" vs-value="4">ลูกโซน</vs-radio>
                            </li>
                        </ul>

                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('unit_status')}} </label>
                        <ul class="centerx">
                            <li>
                              <vs-radio v-model="unit_status" vs-value="5">พร้อม</vs-radio>
                            </li>
                            <li>
                              <vs-radio v-model="unit_status" vs-value="6">ไม่พร้อม</vs-radio>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('address')}}</label>
                        <vs-input v-model="address" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('province')}}</label>
                        <vs-select autocomplete class="w-full" v-model="province">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in province_view" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('amphur')}}</label>
                        <vs-select autocomplete class="w-full" v-model="amphur">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in amphurs" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('tambon')}}</label>
                        <vs-select autocomplete class="w-full" v-model="tambon">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in tambon_view" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('tambon')"  v-model="now_tambon" class="w-full" /> -->
                    </div>


                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('postcode')}}</label>
                        <vs-select autocomplete class="w-full" v-model="postcode">
                          <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in postcodes" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('postcode')"  v-model="now_postcode" class="w-full" /> -->
                    </div>
                </div>
                 <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('tel')}} </label>
                        <vs-input type="text" v-model="tel" class="w-full" />
                    </div>
                     <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('employee_number')}} </label>
                        <vs-input v-model="employee_number" class="w-full"  />
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('ambulance_number')}} </label>
                        <vs-input type="text" v-model="ambulance_number" class="w-full" />
                    </div>
                     <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('manager_name')}} </label>
                        <vs-input v-model="manager_name" class="w-full"  />
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('remark')}} </label>
                        <vs-input type="text" v-model="remark" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/4 w-full mt-5">
                        <label>{{$t('lat')}} </label>
                        <vs-input type="text" v-model="lat" class="w-full" disabled />
                    </div>
                     <div class="vx-col md:w-1/4 w-full mt-5">
                        <label>{{$t('lon')}} </label>
                        <vs-input type="text" v-model="lon" class="w-full" disabled />
                    </div>
                </div>

              </div>
              <div class="mt-3">
                <div class="vx-row" v-if="renderComponent">

                   <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px"  @click="myfunc($event)">
                    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

                    <vl-layer-tile id="osm">
                      <vl-source-osm></vl-source-osm>
                    </vl-layer-tile>

                    <vl-overlay v-if="isSelectCoordinate" id="overlay" :position="overlayCoordinate">
                      <template slot-scope="scope">
                        <div class="overlay-content">
                          <p v-if="false">{{scope}}</p>
                          <img :src="require(`@/assets/marker.png`)" alt="content-img" style="width:50px;height:50px;margin-top:-50px;margin-left:-25px;">
                        </div>
                      </template>
                    </vl-overlay>
                  </vl-map>
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
     edit_operating_unit:{},
     zoom: 8,
        center: [100.6037284, 13.6768896],
        rotation: 0,
        renderComponent:false,
        submitted:false,
        overlayCoordinate:[],
        isSelectCoordinate:false,
        addNewDataSidebar: false,
        operating_units:[],
        locale: this.$i18n.locale,
        operator:{},
        locations:[],
        tambons:[],
        provinces:[],
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
        operating_unit_name:"","department":"","zone":"","unit_type":"","unit_size":"","unit_status":"","address":"","tambon":"","amphur":"","province":"","postcode":"","tel":"","employee_number":"","ambulance_number":"","manager_name":"","remark":"","lat":"0","lon":"0","perform_count":"","decline_count":"",
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
    lang(){
       return this.$i18n.locale
     },
     invalid(){
       var c=(type)=>{
          return this.submitted&&this[type]==""
       }
       return {operating_unit_name:c("operating_unit_name"),department:c("department")}
     },
     isInvalid(){
       return this.invalid.operating_unit_name||this.invalid.department
     },
     amphurs(){
       var temps= this.locations.map((item)=>{
          if(this.$i18n.locale=='th'){
            return JSON.stringify({value:item.en_amphur,text:item.th_amphur})
         }else{
            return JSON.stringify({ value:item.en_amphur,text:item.en_amphur})
         }
       });
       return temps.filter((x, i, a) => a.indexOf(x) == i).map((item)=>{
         return JSON.parse(item);
       })
     },
     province_view(){
       if(this.$i18n.locale=='th'){
         return this.provinces.map((item)=>{
            return { value:item.en_province,text:item.th_province}
          })
       }else{
         return this.provinces.map((item)=>{
           return { value:item.en_province,text:item.en_province}
         })
       }
     },
     tambon_view(){
       var temps= this.tambons.map((item)=>{
          if(this.$i18n.locale=='th'){
            return JSON.stringify({value:item.en_tambon,text:item.th_tambon})
         }else{
            return JSON.stringify({ value:item.en_tambon,text:item.en_tambon})
         }
       });
       return temps.filter((x, i, a) => a.indexOf(x) == i).map((item)=>{
         return JSON.parse(item);
       })
     },
     postcodes(){
       return this.locations.filter((item)=>item.en_amphur==this.amphur&&item.en_tambon==this.tambon).map((item)=>item.postcode)
     },

   },
   created(){
        service.getExternalData("get_province").then((result)=>{
          console.log(result);
          if(!result.code){

            this.provinces=JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
            console.log("province",this.provinces);

          }else{
            this.$swal(result.message,'','error');
          }
        },err=>{
          this.$swal('connection error','','error');
          console.log(err);
        })
   },
   methods: {
     myfunc(e){
        console.log(e);
        this.overlayCoordinate=e.coordinate;
        this.lon= e.coordinate[0];
        this.lat= e.coordinate[1];
        this.isSelectCoordinate=true;
      },
      openLoadingContained(){


      },
      forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },
      save(){

        this.submitted=true;
        if(!this.isInvalid){
            this.$vs.loading({
                background: this.backgroundLoading,
                color: this.colorLoading,
                container: "#button-with-loading",
                scale: 0.45
            })
           service.postData("update_operating_unit",{
            operating_unit_id:this.operating_unit.operating_unit_id,            operating_unit_name:this.operating_unit_name,department:this.department,zone:this.zone,unit_type:this.unit_type,unit_size:this.unit_size-2>0?this.unit_size-2:"",unit_status:this.unit_status-4>0?this.unit_status-4:"",address:this.address,tambon:this.tambon,amphur:this.amphur,province:this.province,postcode:this.postcode,tel:this.tel,employee_number:this.employee_number,ambulance_number:this.ambulance_number,manager_name:this.manager_name,remark:this.remark,lat:this.lat,lon:this.lon

        }).then((result)=>{
          if(!result.code){
              setTimeout(()=>{
                  this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                  this.isSidebarActiveLocal=false;
              },500)
              console.log(result);
            }else{
                this.isSidebarActiveLocal=false;
                this.$swal(result.message,'','error').then((result)=>{

                  this.$vs.loading.close("#button-with-loading > .con-vs-loading")
                  this.isSidebarActive=true;
                  // this.addNewDataSidebar=false;
                });
            }
          },err=>{
            this.$vs.loading.close("#button-with-loading > .con-vs-loading")
            this.isSidebarActiveLocal=false;
            this.$swal('connectio  error','','error').then((result)=>{
              this.isSidebarActive=true;
            });
          })

        }
      }

    },
  watch: {
        operating_unit (val){

           console.log(val);
          val.unit_size=parseInt(val.unit_size);
          val.unit_status=parseInt(val.unit_status);
          this.operating_unit_name=val.operating_unit_name;
          this.department=val.department,this.zone=val.zone;
          this.unit_type=val.unit_type;
          this.unit_size=val.unit_size!=""?val.unit_size+2:val.unit_size;
          this.unit_status=val.unit_status!=""?val.unit_status+4:val.unit_status,
          this.address=val.address;
          this.tambon=val.tambon;
          this.amphur=val.amphur;
          this.province=val.province;
          this.postcode=val.postcode;
          this.tel=val.tel;
          this.employee_number=val.employee_number;
          this.ambulance_number=val.ambulance_number;
          this.manager_name=val.manager_name;
          this.remark=val.remark;
          this.lat=val.lat;
          this.lon=val.lon;
          if(this.lat!=""){
              this.isSelectCoordinate=true
            }
            this.overlayCoordinate=[this.lon,this.lat];
            this.center=this.overlayCoordinate;
          this.forceRerender() ;
        },
        locale(val) {
            this.$i18n.locale = val;
            alert(val);
        },
        lang(val){
          // alert(val);

        },
        operating_units(val){
        console.log(val);
      },
      province(val){
          // alert(val);

          service.getExternalData('/get_location?province='+val).then((result)=>{
            if(!result.code){
              this.locations=result.data;

            }else{
              this.$swal(result.message,'','error');
            }
          },err=>{
            this.$swal('connection error','','error');
            console.log(err);
          })
        },
    amphur(val){
          this.tambons=this.locations.filter((item)=>item.en_amphur==val);
          // console.log(card_tambons);
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
