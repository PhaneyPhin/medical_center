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
                 <div class="vx-col w-full mt-5">
                      <div class="vx-row mt-5">
                        <div class="vx-col md:w-1/2">
                             <label>{{$t('consult_name')}} <span class="require">*</span></label>
                              <vs-input v-model="newConsult.name" class="w-full" :danger="invalid.name" />
                              <div class="error" v-if="invalid.name">{{$t("name_alert")}}</div>
                        </div>
                        <div class="vx-col md:w-1/2">
                             <label>{{$t('consult_name')}} <span class="require">*</span></label>
                              <vs-input v-model="newConsult.surname" class="w-full" :danger="invalid.surname" />
                              <div class="error" v-if="invalid.surname">{{$t("surname_alert")}}</div>
                        </div>
                      </div>
                      <div class="vx-row mt-5">
                        <div class="vx-col md:w-1/3">
                             <label>{{$t('gender')}} <span class="require">*</span></label>
                              <vs-input v-model="newConsult.gender" class="w-full" :danger="invalid.gender" />
                              <div class="error" v-if="invalid.gender">{{$t("gender_alert")}}</div>
                        </div>
                        <div class="vx-col md:w-1/3">
                             <label>{{$t('age')}} <span class="require">*</span></label>
                              <vs-input v-model="newConsult.age" class="w-full" :danger="invalid.age" />
                              <div class="error" v-if="invalid.age">{{$t("age_alert")}}</div>
                        </div>
                        <div class="vx-col md:w-1/3">
                             <label>{{$t('marital_status')}} </label>
                              <vs-input v-model="newConsult.marital_status" class="w-full" />
                        </div>
                      </div>
                      <div class="vx-row mt-5">
                        <div class="vx-col md:w-1/2">
                             <label>{{$t('career')}} </label>
                              <vs-input v-model="newConsult.career" class="w-full" />
                        </div>
                        <div class="vx-col md:w-1/2">
                             <label>{{$t('tel')}} </label>
                              <vs-input v-model="newConsult.tel" class="w-full" />
                        </div>
                      </div>

                      <div class="mt-5">
                      <div class="vx-row">
                        <div class="vx-col md:w-1/5 align-center justify-center">
                          <p class="text-lg-right">
                            {{$t('content_type')}}

                          </p>
                        </div>
                        <div class="vx-col md:w-4/5  bg-grid-color-secondary">
                          <div class="vx-row">
                              <div class="vx-col md:w-1/3 bg-grid-color-secondary h-12" v-for="(item,index) in content_types" :key="index">
                                <vs-radio
                                v-model="newConsult.content_type"
                                :vs-value="index">{{item}}</vs-radio>
                              </div>

                          </div>
                        </div>

                      </div>
                      <div class="vx-row"  v-if="newConsult.content_type==content_types.length-1" >
                          <div class="vx-col md:w-1/5" style="text-align:right">
                              <label>{{$t('detail')}}</label>
                          </div>
                          <div class="vx-col  md:w-1/3">
                              <vs-input v-model="newConsult.content_etc" class="w-full" />
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
    consult:{
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
      submitted:false,
      content_types:service.content_types,
      newConsult:{}
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
    invalid(){
       var c=type=>{
         return this.newConsult[type]==""&&this.submitted;
       }
       return {name:c("name"),surname:c("surname"),age:c("age"),gender:c("gender")}
     },
     isInvalid(){
       return this.invalid.name||this.invalid.surname||this.invalid.gender
     }

   },
   created(){

   },
   methods: {
      save(){
          this.submitted=true;
          if(!this.isInvalid){
            this.$vs.loading({
                  background: this.backgroundLoading,
                  color: this.colorLoading,
                  container: "#button-with-loading",
                  scale: 0.45
            })

            service.postData('update_consult',this.newConsult).then((result)=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              if(!result.code){
                this.isSidebarActive=false;

                this.$swal(this.$t('success_title'),'','success').then((result)=>{
                  this.isSidebarActiveLocal=false;
                });
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
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },

    },


  watch: {
      consult(val){
        this.newConsult=val;
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
