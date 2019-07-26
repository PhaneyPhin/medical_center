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
            <form-wizard
                  ref="checkoutWizard"
                  color="rgba(var(--vs-primary), 1)"
                  :title="null"
                  :subtitle="null"
                  :hide-buttons="true">

                  <!-- tab 1 content -->

                  <tab-content :title="$t('general_data')" icon="feather icon-shopping-cart" class="mb-5" :before-change="validStep1">
                          <div class="mt-3">
                            <div class="vx-row">
                                  <div class="vx-col md:w-1/6 w-full mt-5">
                                      <label>{{$t('prefix')}} <span class="require">*</span></label>
                                    <vs-select class="w-full" v-model="newPatient.name_prefix" :danger="invalid.name_prefix">
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in prefixs_view" />
                                    </vs-select>
                                    <div class="error" v-if="invalid.name_prefix">{{$t("prefix_alert")}}</div>
                                  </div>
                                  <div class="vx-col md:w-1/3 w-full mt-5">
                                      <label>{{$t('name')}} <span class="require">*</span></label>
                                      <vs-input v-model="newPatient.name" class="w-full"  :danger="invalid.name"/>
                                      <div class="error" v-if="invalid.name">{{$t('name_alert')}}</div>
                                  </div>
                                  <div class="vx-col md:w-1/2 w-full mt-5">
                                      <label>{{$t('surname')}} <span class="require">*</span></label>
                                      <vs-input v-model="newPatient.surname" class="w-full"  :danger="invalid.surname"/>
                                      <div class="error" v-if="invalid.surname">{{$t('surname_alert')}}</div>
                                  </div>
                            </div>
                            <div class="vx-row">
                                  <div class="vx-col md:w-1/2 w-full mt-5">
                                      <label>{{$t('card_id')}} <span class="require">*</span></label>
                                        <vs-input v-model="newPatient.card_id" class="w-full" :danger="invalid.card_id"/>
                                          <div class="error" v-if="invalid.card_id">{{$t('card_id_alert')}}</div>
                                  </div>
                                  <div class="vx-col md:w-1/2 w-full mt-5">
                                        <label>{{$t('dob')}} </label>
                                        <datepicker format="yyyy-MM-dd" v-model="newPatient.birth_date" style="width:100%" class="w-full"></datepicker>

                                  </div>
                            </div>
                            <div class="vx-row">
                                <div class="vx-col md:w-1/3 w-full mt-5">
                                    <label>{{$t('religion')}}</label>
                                    <!-- <vs-input v-model="religion" class="w-full" /> -->
                                    <vs-select class="w-full" v-model="newPatient.religion" >
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in religion_view" />
                                    </vs-select>
                                </div>
                                <div class="vx-col md:w-1/3 w-full mt-5">
                                    <label>{{$t('nationality')}}</label>
                                    <vs-input v-model="newPatient.nationality" class="w-full" />
                                </div>
                                <div class="vx-col md:w-1/3 w-full mt-5">
                                    <label>{{$t('blood_group')}}</label>
                                    <vs-select class="w-full" v-model="newPatient.blood_group" >
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in blood_groups" />
                                    </vs-select>
                                    <!-- <vs-input type="text" v-model="blood_group" class="w-full" /> -->
                                </div>
                            </div>
                            <div class="vx-row">
                                  <div class="vx-col md:w-1/3 w-full mt-5">
                                      <label>{{$t('marital')}} </label>
                                      <vs-input v-model="newPatient.marital" class="w-full" />
                                  </div>
                                  <div class="vx-col md:w-1/3 w-full mt-5">
                                      <label>{{$t('home_tel')}} </label>
                                      <vs-input v-model="newPatient.home_tel" class="w-full" />
                                  </div>
                                  <div class="vx-col md:w-1/3 w-full mt-5">
                                      <label>{{$t('mobile_tel')}} </label>
                                      <vs-input v-model="newPatient.mobile_tel" class="w-full" />
                                  </div>

                            </div>



                            <div class="vx-row">
                              <div class="vx-col md:w-1/4 w-full mt-5">
                                      <label>{{$t('lat')}}</label>
                                      <vs-input v-model="newPatient.lat" class="w-full" disabled/>
                                  </div>
                                  <div class="vx-col md:w-1/4 w-full mt-5">
                                      <label>{{$t('lon')}}</label>
                                      <vs-input v-model="newPatient.lon" class="w-full" disabled/>
                                  </div>


                              </div>

                            <div class="vx-row">
                                <div class="vx-col md:w-1/3 w-full mt-5">
                                    <label>{{$t('address')}}</label>
                                    <vs-input v-model="newPatient.address" class="w-full" />
                                </div>
                                <div class="vx-col md:w-1/6 w-full mt-5">
                                    <label>{{$t('province')}}</label>
                                    <vs-select autocomplete class="w-full" v-model="newPatient.province">
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in province_view" />
                                    </vs-select>
                                </div>
                                <div class="vx-col md:w-1/6 w-full mt-5">
                                    <label>{{$t('amphur')}}</label>
                                    <vs-select autocomplete class="w-full" v-model="newPatient.amphur">
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in amphurs" />
                                    </vs-select>
                                </div>
                                <div class="vx-col md:w-1/6 w-full mt-5">
                                    <label>{{$t('tambon')}}</label>
                                    <vs-select autocomplete class="w-full" v-model="newPatient.tambon">
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in tambon_view" />
                                    </vs-select>
                                    <!-- <vs-input type="text" :label="$t('tambon')"  v-model="newPatient.now_tambon" class="w-full" /> -->
                                </div>


                                <div class="vx-col md:w-1/6 w-full mt-5">
                                    <label>{{$t('postcode')}}</label>
                                    <vs-select autocomplete class="w-full" v-model="newPatient.postcode">
                                      <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in postcodes" />
                                    </vs-select>
                                    <!-- <vs-input type="text" :label="$t('postcode')"  v-model="newPatient.now_postcode" class="w-full" /> -->
                                </div>
                            </div>
                          </div>
                          <div class="mt-3">
                              <div class="vx-row">
                                  <div class="vx-col md:w-1/2 w-full mt-5">
                                      <label>{{$t('choose_position')}}</label>
                                  </div>

                              </div>
                            <div class="vx-row" style="margin-top:20px" v-if="renderComponent">
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
                          <div class="mt-3">
                            <div class="vx-row">
                                 <div class="vx-col md:w-5/6 mt-5"></div>
                                <div class="vx-col md:w-1/6 mt-5">

                                  <!-- <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button> -->
                                  <vs-button class="w-full" @click="submitted=true;$refs.checkoutWizard.nextTab()">{{$t('next')}}</vs-button>

                                </div>
                            </div>
                          </div>
                  </tab-content>
                  <!-- tab 2 -->
                  <tab-content :title="$t('treeatment_rights')" icon="feather icon-shopping-cart" class="mb-5" >
                          <div class="mt-3">
                              <div class="vx-row">
                                 <div class="vx-col md:w-1/2 mt-5">
                                    <label>{{$t('treeatment_rights')}}</label>
                                    <vs-select class="w-full" v-model="newPatient.treeatment_rights" :danger="invalid.treeatment_rights">
                                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in treeatment_rights" />
                                    </vs-select>
                               </div>
                              </div>
                          </div>
                          <div class="mt-3">
                            <div class="vx-row">
                                 <div class="vx-col md:w-5/6 mt-5"></div>
                                <div class="vx-col md:w-1/6 mt-5">

                                  <!-- <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button> -->
                                  <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">{{$t('next')}}</vs-button>

                                </div>
                            </div>
                          </div>
                  </tab-content>
                  <!-- tab 3 -->
                  <tab-content :title="$t('disease_data')" icon="feather icon-shopping-cart" class="mb-5" >
                          <div class="mt-3">
                               <div class="vx-row">
                                  <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('congenital_diseas')}}</label>
                                        <vs-select class="w-full" v-model="newPatient.congenital_diseas" >
                                          <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in congenital_diseases" />
                                        </vs-select>
                                  </div>
                                  <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('other')}}</label>
                                        <vs-input v-model="other_congenital_diseas" class="w-full" :disabled="newPatient.congenital_diseas!='อื่นๆ'" />
                                  </div>
                               </div>
                               <div class="vx-row">
                                  <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('main_medicine')}}</label>
                                        <vs-input v-model="newPatient.main_medicine" class="w-full" />
                                  </div>
                                  <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('main_hospital')}}</label>
                                        <vs-input v-model="newPatient.main_hospital" class="w-full" />
                                  </div>
                               </div>
                               <div class="vx-row">
                                  <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('doctor_name')}}</label>
                                        <vs-input v-model="newPatient.doctor_name" class="w-full" />
                                  </div>
                                  <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('doctor_tel')}}</label>
                                        <vs-input v-model="newPatient.doctor_tel" class="w-full" />
                                  </div>
                               </div>
                               <div class="vx-row">
                                  <div class="vx-col w-full mt-5">
                                        <label>{{$t('allergic')}}</label>
                                        <vs-textarea v-model="newPatient.allergic" class="w-full"  />
                                  </div>
                                  <!-- <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('allergic')}}</label>
                                        <vs-input v-model="newPatient.allergic" class="w-full" />
                                  </div> -->
                               </div>
                          </div>
                          <div class="mt-3">
                            <div class="vx-row">
                                 <div class="vx-col md:w-5/6 mt-5"></div>
                                <div class="vx-col md:w-1/6 mt-5">
                                  <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">{{$t('next')}}</vs-button>

                                </div>
                            </div>
                          </div>
                  </tab-content>
                  <!-- tab 4 -->
                   <tab-content :title="$t('danger_disease_hostory_data')" icon="feather icon-shopping-cart" class="mb-5" >
                          <div class="mt-3">
                              <div class="vx-row">
                                 <div class="vx-col md:w-1/2 mt-5">
                                    <label>{{$t('serious_illness_type')}}</label>
                                    <vs-select class="w-full" v-model="newPatient.serious_illness_type">
                                      <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in serious_illness_types" />
                                    </vs-select>
                               </div>
                               <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('detail')}}</label>
                                        <vs-input v-model="detail" class="w-full" :disabled="newPatient.serious_illness_type=='ไม่มี'" />
                                  </div>
                              </div>
                          </div>
                          <div class="mt-3">
                            <div class="vx-row">
                                 <div class="vx-col md:w-5/6 mt-5"></div>
                                <div class="vx-col md:w-1/6 mt-5">

                                  <!-- <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button> -->
                                  <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">{{$t('next')}}</vs-button>

                                </div>
                            </div>
                          </div>
                  </tab-content>
                  <!-- tab 5 -->
                  <tab-content :title="$t('emergency_contact')" icon="feather icon-shopping-cart" class="mb-5" >
                          <div class="mt-3">
                              <div class="vx-row">
                                 <div class="vx-col md:w-1/2 mt-5">
                                    <label>{{$t('contact_name')}}</label>
                                     <vs-input v-model="newPatient.contact_name" class="w-full"  />
                               </div>
                               <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('contact_status')}}</label>
                                        <vs-input v-model="newPatient.contact_status" class="w-full" />
                                  </div>
                              </div>
                              <div class="vx-row">
                                 <div class="vx-col md:w-1/2 mt-5">
                                    <label>{{$t('address')}}</label>
                                     <vs-input v-model="newPatient.contact_address" class="w-full"  />
                               </div>
                               <div class="vx-col md:w-1/2 mt-5">
                                        <label>{{$t('contact_no')}}</label>
                                        <vs-input v-model="newPatient.contact_no" class="w-full" />
                                  </div>
                              </div>
                          </div>
                          <div class="mt-3">
                            <div class="vx-row">
                                 <div class="vx-col md:w-5/6 mt-5"></div>
                                <div class="vx-col md:w-1/6 mt-5">

                                  <!-- <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button> -->
                                  <vs-button  ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary" @click="save()">{{$t('save')}}</vs-button>

                                </div>
                            </div>
                          </div>
                  </tab-content>
              </form-wizard>
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
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    newPatient:{
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
        patient:{},
        patients:[],
        locations:[],
        tambons:[],
        provinces:[],
        other_congenital_diseas:"",
        prefixs:service.prefixs,
        religions:service.religions,
        blood_groups:service.blood_groups,
        congenital_diseases:service.congenital_diseases,
        treeatment_rights:service.treeatment_rights,
        serious_illness_types:service.serious_illness_types,
        renderComponent:true,
        other_congenital_diseas:"",
        detail:"",
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
     FormWizard, TabContent

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
    lang(){
       return this.$i18n.locale;
     },
      prefixs_view(){
        return this.prefixs.map((item)=>{
          if(this.$i18n.locale=='th'){
            return {value:item.id,text:item.th}
          }else{
            return {value:item.id,text:item.en}
          }
        })
      },
      religion_view(){
        return this.religions.map((item)=>{
          if(this.$i18n.locale=='th'){
            return {value:item.id,text:item.th}
          }else{
            return {value:item.id,text:item.en}
          }
        })
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
     province(){
       return this.newPatient.province;
     },
     amphur(){
       return this.newPatient.amphur;
     },
     postcodes(){
       return this.locations.filter((item)=>item.en_amphur==this.amphur&&item.en_tambon==this.newPatient.tambon).map((item)=>item.postcode)
     },
      invalid(){
       var c=(type)=>{
         return this.newPatient[type]==""&&this.submitted
       }
       return {name_prefix:c("name_prefix"),name:c("name"),surname:c("surname"),card_id:c("card_id")}
     },
     isInvalid(){
       return this.invalid.name_prefix||this.invalid.name||this.invalid.surname||this.invalid.card_id
     },
     congenital_diseas(){
       return this.newPatient.congenital_diseas;
     },
     serious_illness_type(){
       return this.newPatient.serious_illness_type;
     }

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
        this.newPatient.lon=this.overlayCoordinate[0];
        this.newPatient.lat=this.overlayCoordinate[1];
        this.isSelectCoordinate=true;
      },
      validStep1(){
        return new Promise((resolve,reject)=>{
          if(this.isInvalid){
            reject("please input standard vehicle id");
          }else{
            // alert(2);
            resolve(true)
          }
        })
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
            var data=JSON.parse(JSON.stringify(this.newPatient));
            if(data.congenital_diseas=='อื่นๆ'){
              data.congenital_diseas=this.other_congenital_diseas;
            }
            if(data.serious_illness_type!="ไม่มี"){
              data.serious_illness_type=data.serious_illness_type+this.detail;
            }
            service.postData('update_patient',data).then((result)=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              if(!result.code){
                this.submitted=false;
                // this.getData();
                this.isSidebarActiveLocal=false;
                this.forceRerender();
              }else{
                this.$swal(result.message,'','error');
              }
            },err=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              this.$swal('connection error','','error');
            })
          }
      },
      forceRerender() {
        this.renderComponent = false;
        this.$nextTick(() => {
          this.renderComponent = true;
        });
      },

    },
  watch: {

    isSidebarActiveLocal(val){
      // alert(11)
      this.forceRerender();
      // console.log(22)
      // console.log(val)

      // alert(this.newPatient.serious_illness_type);
      // if(this.newPatient.serious_illness_type!="ไม่มี"){

      //   if(this.newPatient.serious_illness_type.substr(10)=="อุบัติเหตุ"){
      //     this.detail=this.newPatient.serious_illness_type.substring(10,this.newPatient.serious_illness_type.length);
      //     this.newPatient.serious_illness_type="อุบัติเหตุ"
      //   }else if(this.newPatient.serious_illness_type.substr(10)=="โรคร้ายแรง"){
      //        this.detail=this.newPatient.serious_illness_type.substring(10,this.newPatient.serious_illness_type.length);
      //        this.newPatient.serious_illness_type="โรคร้ายแรง"
      //   }
      // }
    },
    congenital_diseas(val){
      if(this.congenital_diseases.indexOf(val)==-1&&val!=""){
          this.other_congenital_diseas=val.substring(5,val.legnth);
          this.newPatient.congenital_diseas="อื่นๆ";

      }
    },
    serious_illness_type(val){
         if(val.substr(0,10)=="อุบัติเหตุ"&&val.length!=10){
          this.detail=val.substring(10,val.length);
          this.newPatient.serious_illness_type="อุบัติเหตุ"
        }else if(val.substring(0,10)=="โรคร้ายแรง"&&val.length!=10){
             this.detail=val.substring(10,val.length);
             this.newPatient.serious_illness_type="โรคร้ายแรง"
        }
      }
    ,
      province(val){
          // alert(val);

          service.getExternalData('/get_location?province='+val).then((result)=>{
            if(!result.code){
              this.locations=result.data;

            }
          },err=>{
            console.log(err);
          })
        },
     amphur(val){
          this.tambons=this.locations.filter((item)=>item.en_amphur==val);
          // console.log(card_tambons);
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
