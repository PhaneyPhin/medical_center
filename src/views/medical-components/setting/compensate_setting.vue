<template>
   <vx-card>
     <div class="mat-5">
       <div class="vx-row divide" v-for="(tr, index) in compensate" :key="index">
          <div class="vx-col w-full mt-5">
              <h6>{{$t(tr.type+'_title')}} </h6>
                <!-- <vs-input type="text" v-model="newHospital.hospital_name" class="w-full" :danger="invalid.hospital_name"/> -->

            </div>
            <div class="vx-col md:w-1/4 w-full mt-5">

              <label class="vx-row" style="padding-left:20px;padding-bottom:5px;">
                {{$t('reds')}}
                <div class="ml-1 h-4 w-4 rounded-full mr-4 bg-danger" style="margin-top:5px;"></div>
              </label>
              <vs-input type="text" v-model="tr.red" class="w-full"/>
              <!-- <div class="error" v-if="invalid.als_danger_patient"></div> -->
            </div>
            <div class="vx-col md:w-1/4 w-full mt-5">
              <label class="vx-row" style="padding-left:20px;padding-bottom:5px;">
                {{$t('yellows')}}
                <div class="ml-1 h-4 w-4 rounded-full mr-4 bg-warning" style="margin-top:5px;"></div>
              </label>
              <vs-input type="text" v-model="tr.yellow" class="w-full"/>
              <!-- <div class="error" v-if="invalid.als_danger_patient"></div> -->
            </div>
            <div class="vx-col md:w-1/4 w-full mt-5">
              <label class="vx-row" style="padding-left:20px;padding-bottom:5px;">
                {{$t('greens')}}
                <div class="ml-1 h-4 w-4 rounded-full mr-4 bg-success" style="margin-top:5px;"></div>
              </label>
              <vs-input type="text" v-model="tr.green" class="w-full"/>
              <!-- <div class="error" v-if="invalid.als_danger_patient"></div> -->
            </div>
            <div class="vx-col md:w-1/4 w-full mt-5">
              <label>{{$t('cancel')}}</label>
              <vs-input type="text" v-model="tr.cancel" class="w-full"/>
              <!-- <div class="error" v-if="invalid.als_danger_patient"></div> -->
            </div>
       </div>
        <div class="vx-row" style="border-bottom:none">
           <div class="vx-col w-full mt-5">
              <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button>
              <vs-button  ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" vslor="primary" @click="save">{{$t('save')}}</vs-button>
       </div>
        </div>
     </div>
   </vx-card>
</template>

<script>
import service from '@/service/service';
export default {
    data(){
      return {
        compensate:""
      }
    },
    computed:{

    },
    created(){
      this.getData();
    },
    methods:{
        getData(){
            service.getData('get_compensate').then((result)=>{
                if(!result.code){
                        this.compensate=result.data;
                    }else{
                      this.$swal(result.message,'','error');
                    }
                  },err=>{
                    this.$swal('connection error','','error');
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

            service.postData('update_compensate',this.compensate).then((result)=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              if(!result.code){
                this.submitted=false;

                this.$swal(this.$t('success_title'),'','success').then((result=>{
                  this.getData();
                }))
                // this.forceRerender();
              }else{
                this.$swal(result.message,'','error');
              }
            },err=>{
              this.$vs.loading.close("#button-with-loading > .con-vs-loading")
              this.$swal('connection error','','error');
            })
          }
      }
    },
    watch:{

    }
}
</script>

<style lang="scss" scoped>
h6{
  color:blue;
}
  .divide{
    padding-bottom:40px;
    border-bottom:1px solid gray;
  }
  button{
    float:right;
    margin-right:10px;
  }
</style>
