<template >
  <div class="vx-col w-full mb-base" v-if="renderComponent">

    <edit-operator-data :isSidebarActive="addNewDataSidebar" :operator="edit_operator" @closeSidebar="addNewDataSidebar = false" />
    <vx-card>
        <!-- <pre>{{x}}</pre> -->
        <vs-tabs >
            <vs-tab :label="$t('operator_data')">
               <div class="mt-3">
                 <vs-table pagination max-items="10" search :data="operators">

                    <template slot="thead">
                      <vs-th sort-key="index">{{$t('order')}}</vs-th>
                      <vs-th sort-key="operator_id">{{$t('id')}}</vs-th>
                      <vs-th sort-key="name+surname">{{$t('name_surname')}}</vs-th>

                      <vs-th sort-key="operating_unit_name">{{$t('department')}}</vs-th>
                       <vs-th>{{$t('view')}}</vs-th>
                      <vs-th>{{$t("edit")}}</vs-th>
                      <vs-th>{{$t("delete")}}</vs-th>
                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :data="tr" :key="index" v-for="(tr, index) in data">

                        <vs-td :data="index">
                          {{index+1}}
                        </vs-td>

                        <vs-td :data="tr.operator_id">
                          {{ tr.operator_id }}
                        </vs-td>

                        <vs-td :data="tr.name+tr.surname">
                          {{ tr.name+" "+tr.surname }}
                        </vs-td>

                        <vs-td :data="tr.operating_unit_name">
                          {{ tr.operating_unit_name }}
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="SearchIcon" class="cursor-pointer w-6 h-6" size="small"></feather-icon>

                        </vs-td>
                        <vs-td>
                          <feather-icon icon="EditIcon" class="cursor-pointer w-6 h-6" size="small" @click="edit_operator=tr;addNewDataSidebar=true"></feather-icon>
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="Trash2Icon" class="cursor-pointer w-6 h-6" size="small" @click="delete_operator(tr)"></feather-icon>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
               </div>
            </vs-tab>
            <vs-tab :label="$t('operator_register')">
              <div class="mt-3">
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('possition')}} <span class="require">*</span></label>
                        <vs-select autocomplete class="w-full" v-model="position" :danger="invalid.position">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in positions_view" />
                        </vs-select>
                        <div class="error" v-if="invalid.position">{{$t("position_alert")}}</div>
                        <!-- <vs-input v-model="position" class="w-full" /> -->
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('department')}} <span class="require">*</span></label>
                        <vs-select autocomplete class="w-full" v-model="department" :danger="invalid.department">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in departments_view" />
                        </vs-select>
                        <div class="error" v-if="invalid.department">{{$t("department_alert")}}</div>
                        <!-- <vs-input type="text" v-model="department" class="w-full" /> -->
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/6 w-full mt-5">

                         <label>{{$t('prefix')}} <span class="require">*</span></label>
                         <vs-select class="w-full" v-model="prefix" :danger="invalid.prefix">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in prefixs_view" />
                        </vs-select>
                        <div class="error" v-if="invalid.prefix">{{$t("prefix_alert")}}</div>
                        <!-- <vs-input  v-model="prefix" class="w-full" /> -->
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('name')}} <span class="require">*</span></label>
                        <vs-input v-model="name" class="w-full" :danger="invalid.name" />
                        <div class="error" v-if="invalid.name">{{$t("name_alert")}}</div>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('surname')}} <span class="require">*</span></label>
                        <vs-input type="text" v-model="surname" class="w-full" :danger="invalid.surname"/>
                        <div class="error" v-if="invalid.surname">{{$t("surname_alert")}}</div>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('card_id')}} <span class="require">*</span></label>
                        <vs-input v-model="card_id" class="w-full" :danger="invalid.card_id" />
                        <div class="error" v-if="invalid.card_id">{{$t('card_id_alert')}}</div>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('dob')}}  <span class="require">*</span></label>
                        <datepicker format="yyyy-MM-dd" v-model="dob" style="width:100%" class="w-full" :class="{'danger':invalid.dob}"></datepicker>
                        <div class="error" v-if="invalid.dob">{{$t('dob_alert')}}</div>
                        <!-- <vs-input type="text"  v-model="dob" class="w-full" /> -->
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('religion')}}</label>
                        <!-- <vs-input v-model="religion" class="w-full" /> -->
                        <vs-select class="w-full" v-model="religion" >
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in religion_view" />
                        </vs-select>
                    </div>
                     <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('nationality')}}</label>
                        <vs-input v-model="nationality" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('blood_group')}}</label>
                         <vs-select class="w-full" v-model="blood_group" >
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in blood_groups" />
                        </vs-select>
                        <!-- <vs-input type="text" v-model="blood_group" class="w-full" /> -->
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('career')}}</label>
                        <vs-input v-model="career" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <label>{{$t('tel')}}</label>
                        <vs-input type="text" v-model="tel" class="w-full" />
                    </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col w-full mt-5">{{$t("current_address")}}</div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('address')}}</label>
                        <vs-input v-model="now_address" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('province')}}</label>
                        <vs-select autocomplete class="w-full" v-model="now_province">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in province_view" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('province')"  v-model="now_province" class="w-full" /> -->
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('amphur')}}</label>
                        <vs-select autocomplete class="w-full" v-model="now_amphur">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in now_amphurs" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('amphur')"  v-model="now_amphur" class="w-full" /> -->
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('tambon')}}</label>
                        <vs-select autocomplete class="w-full" v-model="now_tambon">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in now_tambon_view" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('tambon')"  v-model="now_tambon" class="w-full" /> -->
                    </div>


                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('postcode')}}</label>
                        <vs-select autocomplete class="w-full" v-model="now_postcode">
                          <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in now_postcodes" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('postcode')"  v-model="now_postcode" class="w-full" /> -->
                    </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col w-full mt-5">{{$t("card_address")}}</div>
                </div>
                <div class="vx-row">

                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('address')}}</label>
                        <vs-input v-model="card_address" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('province')}}</label>
                        <vs-select autocomplete class="w-full" v-model="card_province">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in province_view" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('province')"  v-model="card_province" class="w-full" /> -->
                    </div>


                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('amphur')}}</label>
                        <vs-select autocomplete class="w-full" v-model="card_amphur">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in amphurs" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('amphur')"  v-model="card_amphur" class="w-full" /> -->
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('amphur')}}</label>
                        <vs-select autocomplete class="w-full" v-model="card_tambon">
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in card_tambon_view" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('tambon')"  v-model="card_tambon" class="w-full" /> -->
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('postcode')}}</label>
                        <vs-select autocomplete class="w-full" v-model="card_postcode">
                          <vs-select-item :key="index" :value="item" :text="item" v-for="(item,index) in card_postcodes" />
                        </vs-select>
                        <!-- <vs-input type="text" :label="$t('postcode')"  v-model="card_postcode" class="w-full" /> -->
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('educational_background')}}</label>

                        <vs-select class="w-full" v-model="educational_background" >
                          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in educational_background_view" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('university')}}</label>
                        <vs-input type="text" v-model="university" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('graduate_year')}}</label>
                        <vs-input type="text"  v-model="graduate_year" class="w-full" :danger="invalid.graduate_year" />
                        <div class="error" v-if="invalid.graduate_year">
                          {{$t('year_alert')}}
                        </div>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('educational_backgroundEMS')}}</label>
                        <vs-input v-model="educational_backgroundEMS" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('universityEMS')}}</label>
                        <vs-input type="text"  v-model="universityEMS" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('graduate_yearEMS')}}</label>
                        <vs-input type="text"  v-model="graduate_yearEMS" class="w-full" :danger="invalid.graduate_yearEMS" />
                        <div class="error" v-if="invalid.graduate_yearEMS">
                          {{$t('year_alert')}}
                        </div>
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('trainOther')}}</label>
                        <vs-input v-model="trainOther" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('skill')}}</label>
                        <vs-input type="text"  v-model="skill" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('register_year')}}</label>
                        <vs-input type="text"  v-model="register_year" class="w-full" :danger="invalid.register_year"/>
                        <div class="error" v-if="invalid.register_year">
                          {{$t('year_alert')}}
                        </div>
                    </div>
                     <div class="vx-col md:w-1/6 w-full mt-5">
                        <label>{{$t('register_result')}}</label>
                        <vs-input type="text" v-model="register_result" class="w-full" />
                    </div>
                </div>
                <div class="vx-row">
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <label>{{$t('image')}}</label>
                         <vs-input type="file" id="file" ref="myFiles"  class="w-full"  @change="onFileChange" />
                         <!-- <vs-upload v-model="myfile" limit="1" :text="$t('upload')" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" /> -->
                    </div>
                    <div class="vx-col md:w-1/3 w-full mt-5">
                        <vs-input type="text" :label="$t('remark')"  v-model="remark" class="w-full" />
                    </div>

                </div>
                <div class="vx-row">
                  <div class="vx-vol md:w-1/6 w-full mt-5">
                    <img :src="url" class="responsive rounded-lg" alt="">
                  </div>
                </div>

                <div class="vx-row">
                    <div class="vx-col w-full mt-5">

                       <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button>
                      <vs-button ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary" @click="save">{{$t('save')}}</vs-button>
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
import EditOperatorData from './extra-components/EditOperatorData.vue'
export default {
  components: {
    EditOperatorData,
    Datepicker
  },
   data(){
      return {

        edit_operator:{},
        prefixs:service.prefixs,

        education_bgs:[
          {id:1,th:"ปริญญาตรี",en:"Bachelor Degree"},
          {id:2,th:"ปริญญาโท",en:"Master Degree"},
          {id:3,th:"ปริญญาเอก",en:"Doctor of Philosophy"}
        ],
        religions:service.religions,
        blood_groups:service.blood_groups,
        addNewDataSidebar: false,
        image:"",
         url:"",
         submitted:false,
         selected: [],
         locations:[],
         now_locations:[],
         now_tambons:[],
         card_tambons:[],
         departments:[],
         positions:[],
        locale: this.$i18n.locale,
        renderComponent:true,
        department:"",position:"",prefix:"",name:"",surname:"",card_id:"",dob:"",religion:"",nationality:"",blood_group:"",career:"",tel:"",now_address:"",now_tambon:"",now_amphur:"",now_province:"",now_postcode:"",card_address:"",card_tambon:"",card_amphur:"",card_province:"",card_postcode:"",educational_background:"",university:"",graduate_year:"",educational_backgroundEMS:"",universityEMS:"",graduate_yearEMS:"",trainOther:"",skill:"",register_year:"",register_result:"",image:"",remark:"",
         'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      users: [

      ],
      provinces:[],
      operators:[]
      }
   },

   computed:{
     lang(){
       return this.$i18n.locale;
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
     now_amphurs(){
       var temps= this.now_locations.map((item)=>{
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
     card_tambon_view(){
       var temps= this.card_tambons.map((item)=>{
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
     now_tambon_view(){
       var temps= this.now_tambons.map((item)=>{
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
     now_postcodes(){
       return this.now_locations.filter((item)=>item.en_amphur==this.now_amphur&&item.en_tambon==this.now_tambon).map((item)=>item.postcode)
     },
     card_postcodes(){
        return this.locations.filter((item)=>item.en_amphur==this.card_amphur&&item.en_tambon==this.card_tambon).map((item)=>item.postcode)
     },
     positions_view(){
         return this.positions.map((item)=>{
           if(this.$i18n.locale=='th'){
            return {value:item.position_id,text:item.th_name}
            }else{
                return { value:item.position_id,text:item.th_name}
            }
         })
     },
     departments_view(){
          return this.departments.map((item)=>{
           return { value:item.operating_unit_id,text:item.operating_unit_name}
         })
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
      educational_background_view(){
        return this.education_bgs.map((item)=>{
          if(this.$i18n.locale=='th'){
            return {value:item.id,text:item.th}
          }else{
            return {value:item.id,text:item.en}
          }
        })
      },
      invalid(){

        var checkyear=(item)=>{
          //  alert(this[item].length);
          if(this.submitted&&this[item].length!=0&&this[item].length!=4){
            //  alert(this[item].length);
              if(parseInt(this[item])&&this[item].length==4){
                return false;
                //  alert(this["graduate_year"])
              }else{
                return true;
              }

          }else{
            return false;
          }
        }

        return {position:this.submitted&&this.position=="",department:this.submitted&&this.department=="",prefix:this.submitted&&this.prefix=="",name:this.submitted&&this.name=="",surname:this.submitted&&this.surname=="",card_id:this.submitted&&this.card_id=="",dob:this.submitted&&this.dob=="",
            graduate_year:checkyear("graduate_year"),graduate_yearEMS:checkyear("graduate_yearEMS"),register_year:checkyear("register_year")
          }
      },
      isInvalid(){
        var invalid=this.invalid
        return invalid.position||invalid.department||invalid.prefix||invalid.name||invalid.surname||invalid.card_id||invalid.dob||invalid.graduate_year||invalid.graduate_yearEMS||invalid.register_year
      }
   },
   created(){
     this.getOperator();
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
     service.getData("get_position").then((result)=>{
       if(!result.code){
         this.positions=result.data;
       }else{
          this.$swal(result.message,'','error')
       }
     })
     service.getData("get_operating").then((result)=>{
       console.log(result);
       if(!result.code){
         this.departments=result.data;
       }else{
         this.$swal(result.message,'','error')
       }
     },err=>{
       this.$swal('connection error','','error')
     })
    // service.postData("test",{name:"phaney"}).then((result)=>{
    //   console.log(result);
    // })
   },
   methods: {
     getOperator(){
       service.getData("/get_operator").then((result)=>{
       console.log(result);
       if(!result.code){
         this.operators= JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
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
          var data={
              department:this.department,
              position:this.position,
              name_prefix:this.prefix,
              name:this.name,
              surname:this.surname,
              card_id:this.card_id,
              birth_date:this.dob,
              religion:this.religion,
              race:this.nationality,
              blood_type:this.blood_group,
              career:this.career,
              contact_no:this.tel,
              now_address:this.now_address,
              now_tambon:this.now_tambon,
              now_amphur:this.now_amphur,
              now_province:this.now_province,
              now_postcode:this.now_postcode,
              card_address:this.card_address,
              card_tambon:this.card_tambon,
              card_amphur:this.card_amphur,
              card_province:this.card_province,
              card_postcode:this.card_postcode,
              education_bg:this.educational_background,
              university:this.university,
              graduation_year:this.graduate_year,
              ems_lv:this.educational_backgroundEMS,
              ems_name:this.universityEMS,
              ems_year:this.graduate_yearEMS,
              training_skill:this.trainOther,
              expert_skill:this.skill,
              register_year:this.register_year,
              register_result:this.register_result,
              img:this.image,
              remark:this.remark
          }
          service.postData("/add_operator",data).then((result)=>{
            this.$vs.loading.close("#button-with-loading > .con-vs-loading")
            console.log(result);
            if(!result.code){
              this.getOperator();
              this.forceRerender();
            }else{
              this.$swal(result.message,'','error');
            }
          },err=>{
            this.$vs.loading.close("#button-with-loading > .con-vs-loading")
            this.$swal('connection error','','error')
            console.log(err);
          })
        }
      },
      delete_operator(operator){
        this.$swal({
          title:this.$t('delete_title'),
          text: this.$t('delete_text'),
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:this.$t('cancel'),
          confirmButtonText:this.$t('confirm_delete'),
          showLoaderOnConfirm: true,
          preConfirm:()=>{
            return service.deleteData(`delete_operator?operator_id=${operator.operator_id}`).then((result)=>{

              return result;
            },err=>{
              throw new Error(err)
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
                   this.getOperator();
                })
              }else{
                this.$swal(result.vaule.message,'','error');
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
        onFileChange(e) {
          const file = e.target.files[0];
          // this.url = URL.createObjectURL(file);
          console.log(this.url);
           var reader = new FileReader();

            reader.onload = (e)=> {
              // $('#blah').attr('src', e.target.result);
              console.log(e.target.result);
              var base64=e.target.result;
              var index=base64.indexOf('base64,');
              console.log(index)
              this.url=base64;
              this.image=base64.substring(index+7,base64.length);
              // this.image=this.image;
            }

          reader.readAsDataURL(file);
          console.log(e);
        }
    },
  watch: {
        addNewDataSidebar(val){
          if(val==false){
            this.getOperator();
          }
        },
        locale(val) {
            this.$i18n.locale = val;
            alert(val);
            // this.locale=val;

        },
        lang(val){
          // alert(val);
          this.forceRerender();
        },
        card_province(val){
          // alert(val);
          this.card_amphur="";
          this.locations=[];
          this.card_tambons=[];
          this.card_tambon=[];
          this.card_postcode="";
          service.getExternalData('/get_location?province='+val).then((result)=>{
            if(!result.code){
              this.locations=result.data;
            }
          },err=>{
            console.log(err);
          })
        },
        now_province(val){
          // alert(val);
          this.now_amphur="";
          this.now_locations=[];
          this.now_tambon=[];
          this.now_tambon="";
          this.now_postcode="";
          service.getExternalData('/get_location?province='+val).then((result)=>{
            if(!result.code){
              this.now_locations=result.data;

            }
          },err=>{
            console.log(err);
          })
        },
        card_amphur(val){
          this.card_tambon="";
          this.card_tambons=this.locations.filter((item)=>item.en_amphur==val);
          this.card_postcode="";
          // console.log(card_tambons);
        },
        now_amphur(val){
          this.now_tambon="";
          this.now_postcode="";
          this.now_tambons=this.now_locations.filter((item)=>item.en_amphur==val);
        },
        now_tambon(val){
          this.now_postcode="";
        },
        card_tambon(val){
          this.card_postcode="";
        }
    }
}
</script>

