import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import service from '@/service/service'
import moment from 'moment';
export default {
  props:{
    operation_id:{
      type:String
    }
  },
  components: {
    Datepicker,
    flatPickr
  },
  data() {
    return {
      data:{leave_base_time:"",arrive_accident_time:"",leave_accident_time:"",arrive_hospital_time:"",arrive_base_time:""},
      leave_base_time:"",arrive_accident_time:"",leave_accident_time:"",arrive_hospital_time:"",arrive_base_time:"",
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
    }
  },
  computed:{
    body(){
      var item=this.data;
      for(var x in this.data){
       if(this[x]!=""&&this.data[x]!=""){
        item[x]=this.data[x]+"T"+this[x];
       }else{
         item[x]=this.data[x];
       }
      }
      item.operation_id=this.operation_id;
      return item;
    }
  },
  methods:{
    save(){
      service.postData("update_operation_master",this.body).then((result)=>{
        if(result.code){
          this.$swal(result.message,'','error');
        }else{
          this.$swal(this.$t('success_title'),'','success');
          // this.$emit('close');
        }
      },err=>{
        this.$swal('connection error','','error');
      })
    },
    now(item){
      var now=moment(new Date());
      this.data[item]=now.format('YYYY-MM-DD');
      this[item]=now.format("HH:mm:ss");
    }
  }

}
