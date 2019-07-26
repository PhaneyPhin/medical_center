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
                        <label>{{$t('hospital_name')}} <span class="require">*</span></label>
                        <vs-input type="text" v-model="newHospital.hospital_name" class="w-full" :danger="invalid.hospital_name"/>
                        <div class="error" v-if="invalid.hospital_name">{{$t("hospital_name_alert")}}</div>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                       <label>{{$t('hospital_department')}} </label>
                         <vs-select class="w-full" v-model="newHospital.under_status" >
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in under_status" />
                        </vs-select>
                    </div>

                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('hospital_type')}}</label>
                        <vs-select class="w-full" v-model="newHospital.hospital_type" >
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in hospital_types" />
                        </vs-select>
                        <!-- <vs-input type="text" v-model="newHospital.hospital_type" class="w-full"/> -->
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                       <label>{{$t('bed_count')}}  <span class="require">*</span></label>
                        <vs-input type="text" v-model="newHospital.bed_count" :danger="invalid.bed_count" class="w-full"/>
                        <div class="error" v-if="invalid.bed_count">{{$t("bed_count_alert")}}</div>
                    </div>

                </div>
                <div class="vx-row">

                    <div class="vx-col md:w-1/2 w-full mt-5">
                       <label>{{$t('potential')}}</label>
                        <vs-input type="text" v-model="newHospital.potential" class="w-full"/>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                       <label>{{$t('tel')}}</label>
                        <vs-input type="text" v-model="newHospital.tel" class="w-full"/>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('address')}}</label>
                        <vs-input v-model="newHospital.address" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('province')}}</label>
                        <vs-select autocomplete class="w-full" v-model="newHospital.province">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in province_view" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('amphur')}}</label>
                        <vs-select autocomplete class="w-full" v-model="newHospital.amphur">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in amphurs" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('tambon')}}</label>
                        <vs-select autocomplete class="w-full" v-model="newHospital.tambon">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in tambon_view" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('tambon')"  v-model="newHospital.now_tambon" class="w-full" /> -->
                    </div>


                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('postcode')}}</label>
                        <vs-select autocomplete class="w-full" v-model="newHospital.postcode">
                          <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in postcodes" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('postcode')"  v-model="newHospital.now_postcode" class="w-full" /> -->
                    </div>
                </div>
                <div class="vx-row">

                    <div class="vx-col md:w-1/4 w-full mt-5">
                       <label>{{$t('lat')}}</label>
                        <vs-input type="text" v-model="newHospital.lat" class="w-full" disabled/>
                    </div>
                    <div class="vx-col md:w-1/4 w-full mt-5">
                       <label>{{$t('tel')}}</label>
                        <vs-input type="text" v-model="newHospital.lon" class="w-full" disabled/>
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
    newHospital:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
        zoom: 8,
        submitted:false,
        center: [100.6037284, 13.6768896],
        rotation: 0,
        isSelectCoordinate:false,
        overlayCoordinate: [],
        hospital:{},
        hospitals:[],
        renderComponent:true,
        locations:[],
        tambons:[],
        provinces:[],
        under_status:service.under_status,
        hospital_types:service.hospital_types,
        addNewDataSidebar: false,
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
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
        return this.$i18n.locale;
      },
      invalid(){
        var c=(type)=>{
          return this.newHospital[type]==""&&this.submitted
        }
        return {hospital_name:c("hospital_name"),bed_count:c("bed_count")}
      },
      isInvalid(){
        return this.invalid.hospital_name||this.invalid.bed_count
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
        return this.locations.filter((item)=>item.en_amphur==this.newHospital.amphur&&item.en_tambon==this.newHospital.tambon).map((item)=>item.postcode)
      },
      now_province(){
        return this.newHospital.province;
      },
      now_amphur(){
        return this.newHospital.amphur;
      },


   },
   created(){
      service.getExternalData("get_province").then((result)=>{
            console.log(result);
            if(!result.code){

              this.provinces=JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
              console.log("province",this.provinces);

            }else{
              this.$swal(result.message,'','error')
            }
          },err=>{
            this.$swal('connection error','','error')
            console.log(err);
          })
   },
   methods: {
      myfunc(e){
        console.log(e);
        this.overlayCoordinate=e.coordinate;
        this.newHospital.lon=this.overlayCoordinate[0];
        this.newHospital.lat=this.overlayCoordinate[1];
        this.isSelectCoordinate=true;
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

            service.postData('update_hospital',this.newHospital).then((result)=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              if(!result.code){
                this.submitted=false;
                this.isSidebarActiveLocal=false;
                this.forceRerender();
              }else{
                this.isSidebarActive=false;
                this.$swal(result.message,'','error').then((result)=>{
                  this.isSidebarActive=true;
                });
              }
            },err=>{
                this.isSidebarActive=false;
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              this.$swal('connection error','','error').then((result)=>{
                   this.isSidebarActive=true;
                });;
            })
          }
      }

    },
  watch: {
       isSidebarActive(val){
         this.forceRerender();
       },
       now_province(val){
          service.getExternalData('/get_location?province='+val).then((result)=>{
            if(!result.code){
              this.locations=result.data;
            }
          },err=>{
            console.log(err);
          })
        },
        now_amphur(val){
          this.tambons=this.locations.filter((item)=>item.en_amphur==val);
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
