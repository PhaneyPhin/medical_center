import Datepicker from 'vuejs-datepicker';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
export default {
  components: {
    Datepicker,
    flatPickr
  },
  data() {
    return {
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
    }
  }

}
