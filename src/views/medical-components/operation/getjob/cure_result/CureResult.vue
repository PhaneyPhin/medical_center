<template src="./cure_result.html"></template>
<style src="./cure_result.css" lang="css" scoped></style>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      admit_status: null,
      admit_day: "",
      follower_name: "",
      admit_result: "",
      follow_date:null
    };
  }
};
</script>


