<template >
  <div class="vx-col w-full mb-base" v-if="renderComponent">

    <edit-call :isSidebarActive="addNewDataSidebar" :consult="consult" @closeSidebar="addNewDataSidebar = false" />
    <vx-card>
        <vs-tabs>
            <vs-tab :label="$t('consult_data')">
               <div class="mt-3">
                 <vs-table pagination max-items="10" search :data="consults">

                    <template slot="thead">
                      <vs-th sort-key="index">{{$t('index')}}</vs-th>
                      <vs-th sort-key="consult_date_show">{{$t('date')}}</vs-th>
                      <vs-th sort-key="consult_time_show">{{$t('time')}}</vs-th>

                      <vs-th sort-key="name+surname">{{$t('consult_name')}}</vs-th>
                       <vs-th>{{$t('view')}}</vs-th>
                      <vs-th>{{$t("edit")}}</vs-th>
                      <vs-th>{{$t("delete")}}</vs-th>
                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :data="tr" :key="index" v-for="(tr, index) in data">

                        <vs-td :data="index">
                          {{index+1}}
                        </vs-td>

                        <vs-td :data="tr.consult_date_show">
                          {{ tr.consult_date_show }}
                        </vs-td>

                        <vs-td :data="tr.consult_time_show">
                          {{ tr.consult_time_show }}
                        </vs-td>

                        <vs-td :data="tr.name+tr.surname">
                          {{ tr.name+'-'+tr.surname }}
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="SearchIcon" class="cursor-pointer w-6 h-6" size="small"></feather-icon>

                        </vs-td>
                        <vs-td>
                          <feather-icon icon="EditIcon" class="cursor-pointer w-6 h-6" size="small" @click="consult=tr;addNewDataSidebar=true"></feather-icon>
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="Trash2Icon" class="cursor-pointer w-6 h-6" size="small" @click="delete_consult(tr)"></feather-icon>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
               </div>
            </vs-tab>
            <vs-tab :label="$t('consult_register')">
              <div class="mt-3">
                <div class="vx-row">
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
                       <div class="mt-5">
                         <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button>
                          <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary" @click="save">{{$t('save')}}</vs-button>
                       </div>
                    </div>
                </div>
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
</style>


<script>
import Datepicker from 'vuejs-datepicker';
import service from '@/service/service';
import EditCall from './edit/EditCall.vue'
import moment from "moment";
export default {
  components: {
    EditCall,
    Datepicker
  },
   data(){
      return {
        consult:{},
        renderComponent:true,
        addNewDataSidebar: false,
        newConsult:{},
        other:"",
        submitted:false,
        content_types:service.content_types,
        consults:[],
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
     this.getData();
     this.initValue();
   },
   methods: {
     initValue(){
       this.newConsult=JSON.parse('{"name":"","surname":"","gender":"","age":"","career":"","tel":"","content_type":"","content_etc":"","":"","consult_time":"","marital_status":""}')
     },
     getData(){
       service.getData("/get_consult").then((result)=>{
       console.log(result);
       if(!result.code){
         this.consults= JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
         this.consults=this.consults.map((item)=>{
           item.consult_date_show=moment(item.consult_time).format('DD/MM/YYYY');
           item.consult_time_show=moment(item.consult_time).format('HH:mm:ss');
           return item;
         })
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

            service.postData('add_consult',this.newConsult).then((result)=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              if(!result.code){
                this.submitted=false;
                this.$swal(this.$t('success_title'),'','success').then((result)=>{
                    this.getData();
                    this.initValue();
                    this.forceRerender();
                })

              }else{
                this.$swal(result.message,'','error');
              }
            },err=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              this.$swal('connection error','','error');
            })
          }
      },
       delete_consult(consult){
       this.$swal({
          title:this.$t('delete_consult_title'),
          text: this.$t('delete_text'),
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:this.$t('cancel'),
          confirmButtonText:this.$t('confirm_delete'),
          showLoaderOnConfirm: true,
          preConfirm:()=>{
            return service.deleteData(`delete_consult?consult_id=${consult.consult_id}`).then((result)=>{

              return result;
            },err=>{
              return {code:true,message:"connection error"}
            })

          }
        }).then((result) => {
          if(result.value){
             if(!result.value.code){
                this.$swal(
                  this.$t('deleted'),
                  '',
                  'success'
                ).then(result=>{
                   this.getData();
                })
              }else{
                this.$swal(result.value.message,'','error');
              }
          }

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

