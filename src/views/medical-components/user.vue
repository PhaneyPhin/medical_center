<template >
  <div class="vx-col w-full mb-base" v-if="renderComponent">

    <edit-operator-data :isSidebarActive="addNewDataSidebar" :operator="volunteer" @closeSidebar="addNewDataSidebar = false" />
    <vx-card>
        <vs-tabs>
            <vs-tab :label="$t('user_data')">
               <div class="mt-3">
                 <vs-table pagination max-items="10" search :data="volunteers">

                    <template slot="thead">
                      <vs-th sort-key="card_id">{{$t('card_id')}}</vs-th>
                      <vs-th sort-key="name+surnae">{{$t('name_surname')}}</vs-th>
                      <vs-th sort-key="email">{{$t('email')}}</vs-th>

                      <vs-th sort-key="operating_unit_name">{{$t('operating_unit_name')}}</vs-th>
                      <vs-th sort-key="role_id">{{$t('role_id')}}</vs-th>
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
                          <feather-icon icon="EditIcon" class="cursor-pointer w-6 h-6" size="small" @click="volunteer=tr;addNewDataSidebar=true"></feather-icon>
                        </vs-td>
                        <vs-td>
                          <feather-icon icon="Trash2Icon" class="cursor-pointer w-6 h-6" size="small" @click="delete_operator(tr)"></feather-icon>
                        </vs-td>
                      </vs-tr>
                    </template>
                  </vs-table>
               </div>
            </vs-tab>
            <vs-tab :label="$t('user_register')">
              <div class="mt-3">
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
import EditOperatorData from './extra-components/EditOperatorData.vue'
export default {
  components: {
    EditOperatorData,
    Datepicker
  },
   data(){
      return {
        volunteer:{},
        volunteers:[],
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
     console.log(service.getUser())
     this.getData();
   },
   methods: {
     getData(){
       service.getData("/get_volunteer").then((result)=>{
       console.log(result);
       if(!result.code){
         this.volunteers= JSON.parse(JSON.stringify(result.data).replace(/\:null/gi, "\:\"\""));
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

