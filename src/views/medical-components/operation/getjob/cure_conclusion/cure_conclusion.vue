<template src="./cure_conclusion.html"></template>
<style src="./cure_conclusion.css" lang="css" scoped></style>
<script>
export default {
  data() {
    return {
      cure_result_list: [
        { label: this.$t("is_cure"), value: 1 },
        { label: this.$t("not_cure"), value: 0 }
      ],
      cure_result: null,
      cure_reason:""
    };
  }
};
</script>


