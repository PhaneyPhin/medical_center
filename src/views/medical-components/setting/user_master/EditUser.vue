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
            <div class="vx-row mt-5 mr-10 ml-10">
                <div class="vx-col md:w-1/2">
                  <label for="">{{$t('card_id')}} <span class="require">*</span></label>
                  <vs-input v-model="newUser.card_id" class="w-full" :danger="invalid.card_id" ></vs-input>
                  <div class="error" v-if="invalid.card_id">{{$t('card_id_alert')}}</div>
                </div>
                <div class="vx-col md:w-1/2">
                  <label for="">{{$t('email')}}</label>
                  <vs-input v-model="newUser.email" class="w-full" ></vs-input>

                </div>
              </div>
              <div class="vx-row mt-5 mr-10 ml-10">
                  <div class="vx-col md:w-1/6">
                    <label for="">{{$t('prefix')}} <span class="require">*</span></label>
                    <vs-select class="w-full" v-model="newUser.name_prefix" :danger="invalid.name_prefix">
                        <vs-select-item :key="index" :value="item.id" :text="item.text" v-for="(item,index) in prefixs" />
                    </vs-select>
                    <div class="error" v-if="invalid.name_prefix">{{$t('prefix_alert')}}</div>
                  </div>
                  <div class="vx-col md:w-1/3">
                    <label for="">{{$t('name')}} <span class="require">*</span></label>
                    <vs-input class="w-full" v-model="newUser.name" :danger="invalid.name"></vs-input>
                    <div class="error" v-if="invalid.name">{{$t('name_alert')}}</div>
                  </div>
                  <div class="vx-col md:w-1/2">
                    <label for="">{{$t('surname')}} <span class="require">*</span></label>
                    <vs-input class="w-full" v-model="newUser.surname" :danger="invalid.surname"></vs-input>
                    <div class="error" v-if="invalid.surname">{{$t('surname_alert')}}</div>
                  </div>
                </div>
                <div class="vx-row mt-5 mr-10 ml-10">
                    <div class="vx-col md:w-1/2">
                      <label for="">{{$t('operating_unit_name')}}</label>
                      <vs-select autocomplete class="w-full" v-model="newUser.operating_unit_id">
                          <vs-select-item :key="index" :value="item.operating_unit_id" :text="item.operating_unit_name" v-for="(item,index) in operating_units" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/3">
                      <label for="">{{$t('role')}} <span class="require">*</span></label>
                      <vs-select class="w-full" v-model="newUser.role_id" :danger="invalid.role_id" >
                          <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item,index) in roles" />
                      </vs-select>
                      <div class="error" v-if="invalid.role_id">{{$t('role_id_alert')}}</div>
                    </div>
                    <!-- <div class="vx-col md:w-1/3">
                      <label for="">{{$t('surname')}}</label>
                      <vs-input class="w-full" ></vs-input>
                    </div> -->
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
    newUser:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
       roles:service.roles,
          operating_units:[],
          name_prefixs:service.prefixs,
          submitted:false,
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
      prefixs(){

          return this.name_prefixs.map((item)=>{
            return {id:item.id,text:item[this.$i18n.locale]}
          })

      },
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
        var c=type=>this.newUser[type]==""&&this.submitted;
        return {card_id:c("card_id"),name_prefix:c("name_prefix"),name:c("name"),surname:c("surname"),role_id:c("role_id")}
      },
      isInvalid(){
        return this.invalid.card_id||this.invalid.name_prefix||this.invalid.name||this.invalid.surname||this.invalid.role_id
      }

   },
   created(){
      service.getData("get_operating").then((result)=>{
            if(result.code){
              this.$swal(result.message,'','error')
            }else{
              this.operating_units=result.data;
            }
          },err=>{
            this.$swal('connection error','','error')
          })
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

            service.postData('update_usermaster',this.newUser).then((result)=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              if(!result.code){
                this.isSidebarActive=false;

                this.$swal(this.$t('success_title'),'','success').then((result)=>{
                  this.isSidebarActiveLocal=false;
                });
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
