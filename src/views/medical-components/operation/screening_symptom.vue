<template>
  <div class="vx-col w-full mb-base" id="big-parent">
    <vx-card :title="$t('screening_symptom_list')">
      <vs-tabs>
        <vs-tab :label="$t('screening_view')">
          <vs-row vs-w="12">
            <vs-col vs-w="12">
              <vs-table
                :stripe="true"
                class="w-full"
                search
                pagination
                max-items="10"
                :data="screening_data"
              >
                <template slot="thead">
                  <vs-th sort-key="operation_id">{{$t('operation_id')}}</vs-th>
                  <!-- <vs-th sort-key="date">{{$t('date')}}</vs-th> -->
                  <vs-th style="width:15%;" sort-key="reported_time">{{ $t('reported_time')}}</vs-th>
                  <vs-th sort-key="receiver_name">{{ $t('receiver_name')}}</vs-th>
                  <vs-th sort-key="location_name">{{ $t('location_name')}}</vs-th>
                  <vs-th sort-key="basic_illness">{{ $t('basic_illness')}}</vs-th>
                  <vs-th style="width:30%" sort-key="symtom">{{ $t('main_symptoms')}}</vs-th>
                  <vs-th>{{ $t('edit')}}</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="index" v-for="(tr, index) in data">
                    <vs-td :data="tr.operating_id">{{ tr.operating_id }}</vs-td>
                    <!-- <vs-td :data="tr.date">{{ tr.date }}</vs-td> -->
                    <vs-td :data="tr.reported_time">{{ tr.reported_time }}</vs-td>
                    <vs-td :data="tr.receiver_name">{{ tr.receiver_name }}</vs-td>
                    <vs-td :data="tr.location_name">{{ tr.location_name }}</vs-td>
                    <vs-td :data="tr.basic_illness">{{ tr.basic_illness }}</vs-td>
                    <vs-td :data="tr.symptom">
                      <vs-row vs-w="12">
                        <div class="h-4 w-4 rounded-full mt-1 mr-2" :class="tr.screening_color"></div>
                        {{tr.screening_id }} {{ tr.level_text }} {{ tr.screening_no }} {{ tr.symptom }}
                      </vs-row>
                    </vs-td>
                    <vs-td>
                      <feather-icon
                        icon="EditIcon"
                        class="cursor-pointer w-6 h-6"
                        size="small"
                        @click="editscreeningActive=true;geteditdata(tr)"
                      ></feather-icon>
                    </vs-td>
                    <vs-popup
                      fullscreen
                      :title="$t('edit_screening_symptom')"
                      :active.sync="editscreeningActive"
                    >
                      <vs-row vs-w="12">
                        <h5 class="ml-3">{{$t('patient_infomation')}}</h5>
                      </vs-row>
                      <vs-divider />
                      <vs-row class="mt-4" vs-w="12">
                        <vs-col vs-type="flex" vs-lg="2" vs-sm="6" vs-justify="center">
                          <label>{{$t('name')}}</label>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                          <vs-input class="w-full" v-model="patient_fullname" disabled />
                        </vs-col>
                        <vs-col vs-lg="2" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('reporter_tel')}}</label>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                          <vs-input class="w-full" v-model="tr.reporter_tel" disabled />
                        </vs-col>
                      </vs-row>
                      <vs-row class="mt-4" vs-w="12">
                        <vs-col vs-lg="2" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('location_name')}}</label>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                          <vs-input class="w-full" v-model="tr.location_name" disabled />
                        </vs-col>
                        <vs-col vs-lg="2" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('place_detail')}}</label>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                          <vs-input class="w-full" v-model="tr.place_detail" disabled />
                        </vs-col>
                      </vs-row>
                      <vs-row class="mt-4" vs-w="12">
                        <vs-col vs-lg="2" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('patient_gender')}}</label>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                          <vs-select class="w-full" v-model="tr.patient_gender" disabled>
                            <vs-select-item :value="1" :text="$t('male')" />
                            <vs-select-item :value="2" :text="$t('female')" />
                          </vs-select>
                        </vs-col>
                        <vs-col vs-lg="2" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('age')}}</label>
                        </vs-col>
                        <vs-col vs-lg="4" vs-sm="6">
                          <vs-input class="w-full" v-model="tr.patient_age" disabled />
                        </vs-col>
                      </vs-row>
                      <vs-row vs-w="12" class="mt-4">
                        <vs-col vs-lg="2" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('basic_illness')}}</label>
                        </vs-col>
                        <vs-col vs-lg="8" vs-sm="6">
                          <vs-textarea v-model="tr.basic_illness" disabled />
                        </vs-col>
                      </vs-row>
                      <vs-divider />
                      <vs-row vs-w="12">
                        <h5 class="ml-3">{{$t('screening_symptom_form')}}</h5>
                      </vs-row>
                      <vs-row class="mt-4" vs-w="12">
                        <vs-col vs-lg="4" vs-sm="6" vs-type="flex" vs-justify="center">
                          <label>{{$t('select_main_symptom')}}</label>
                        </vs-col>
                        <vs-col vs-lg="8" vs-sm="6">
                          <vs-row vs-w="12">
                            <vs-select
                              class="w-full"
                              v-model="edit_main_symptom"
                              :danger="invalid_edit_main_symptom_filter"
                            >
                              <vs-select-item
                                v-for="(tr2, index2) in main_symptom_list"
                                :key="index2"
                                :value="tr2.screening_id"
                                :text="tr2.screening_name"
                              />
                            </vs-select>
                            <div
                              class="error"
                              v-if="invalid_edit_main_symptom_filter"
                            >{{$t("edit_main_symptom_alert")}}</div>
                          </vs-row>
                        </vs-col>
                      </vs-row>
                      <vs-divider />
                      <h5 class="ml-3">{{$t('question_for_main_symptom')}}</h5>
                      <vs-row class="mt-4" vs-w="12">
                        <vs-col vs-lg="6" vs-sm="12" v-if="red_question">
                          <vx-card
                            :title="$t('red_question')"
                            title-color="#fff"
                            card-background="#d4170d"
                            content-color="#fff"
                            class="mt-2"
                          >
                            <p class="mb-3" v-html="red_question"></p>
                          </vx-card>
                        </vs-col>
                        <vs-col vs-lg="6" vs-sm="12" v-if="yellow_question">
                          <vx-card
                            :title="$t('yellow_question')"
                            title-color="#fff"
                            card-background="#d4d10d"
                            content-color="#fff"
                            class="mt-2"
                          >
                            <p class="mb-3" v-html="yellow_question"></p>
                          </vx-card>
                        </vs-col>
                        <vs-col vs-lg="6" vs-sm="12" v-if="green_question">
                          <vx-card
                            :title="$t('green_question')"
                            title-color="#fff"
                            card-background="#117509"
                            content-color="#fff"
                            class="mt-2"
                          >
                            <p class="mb-3" v-html="green_question"></p>
                          </vx-card>
                        </vs-col>
                        <vs-col vs-lg="6" vs-sm="12" v-if="white_question">
                          <vx-card
                            :title="$t('white_question')"
                            title-color="#000"
                            card-background="#fff"
                            content-color="#000"
                            class="mt-2"
                          >
                            <p class="mb-3" v-html="white_question"></p>
                          </vx-card>
                        </vs-col>
                        <vs-col vs-lg="6" vs-sm="12" v-if="black_question">
                          <vx-card
                            :title="$t('black_question')"
                            title-color="#000"
                            card-background="#fff"
                            content-color="#000"
                            class="mt-2"
                          >
                            <p class="mb-3" v-html="black_question"></p>
                          </vx-card>
                        </vs-col>
                      </vs-row>
                      <template v-if="!invalid_edit_main_symptom_filter">
                        <vs-divider />
                        <vs-row class="mt-5" vs-w="12" v-if="!invalid_edit_main_symptom_filter">
                          <vs-col vs-lg="2" vs-sm="4">
                            <label>{{$t('screening_symptom_filter')}}</label>
                          </vs-col>
                          <vs-col vs-lg="10" vs-sm="8">
                            <vs-select
                              class="w-full"
                              :danger="invalid_screening_symptom_filter"
                              v-model="edit_symptom"
                            >
                              <vs-select-item
                                v-for="(item, id) in edit_symptom_list"
                                :key="id"
                                :value="item.value"
                                :text="item.label"
                              />
                            </vs-select>
                            <div
                              class="error"
                              v-if="invalid_screening_symptom_filter"
                            >{{$t("screening_symptom_filter_alert")}}</div>
                          </vs-col>
                        </vs-row>
                        <vs-row class="mt-3" vs-w="12" v-if="!invalid_edit_main_symptom_filter">
                          <vs-col vs-lg="2" vs-sm="4">
                            <label>{{$t('other_symptom')}}</label>
                          </vs-col>
                          <vs-col vs-lg="10" vs-sm="8">
                            <vs-input class="w-full" v-model="edit_other_symptom" />
                          </vs-col>
                        </vs-row>
                        <vs-divider />
                        <vs-row class="mt-3" vs-w="12" v-if="!invalid_edit_main_symptom_filter">
                          <vs-col vs-lg="2" vs-sm="4">
                            <label>{{$t('recommend_command')}}</label>
                          </vs-col>
                          <vs-col vs-lg="10" vs-sm="8">
                            <vx-card card-background="#d1d1d1" content-color="#000" class="mt-2">
                              <p class="mb-3" v-html="recommend_command"></p>
                            </vx-card>
                          </vs-col>
                        </vs-row>
                        <vs-divider />
                        <vs-row vs-w="12">
                          <vs-button
                            color="success"
                            type="filled"
                            @click="update_screening_symptom"
                            class="vs-con__container"
                          >{{$t("save")}}</vs-button>
                        </vs-row>
                      </template>
                    </vs-popup>
                  </vs-tr>
                </template>
              </vs-table>
            </vs-col>
          </vs-row>
        </vs-tab>
      </vs-tabs>
    </vx-card>
  </div>
</template>

<script>
import moment from "moment";
import service from "@/service/service";
export default {
  components: {},
  data() {
    return {
      screening_data: [],
      editscreeningActive: false,
      editdata: {
        screening_id: null,
        screening_lv: null,
        screening_no: null,
        screening_detail: ""
      },
      main_symptom_list: [],
      edit_main_symptom: null,
      edit_symptom_list: [],
      patient_fullname: "",
      edit_symptom: null,
      red_question: null,
      yellow_question: null,
      green_question: null,
      white_question: null,
      black_question: null,
      recommend_command: null,
      edit_id: null,
      submitted:false,
      edit_other_symptom:""
    };
  },
  computed: {
    invalid_screening_symptom_filter() {
      return !this.edit_symptom && this.submitted;
    },
    invalid_edit_main_symptom_filter() {
      return !this.edit_main_symptom && this.submitted;
    }
  },
  created() {
    service.getData("get_emergency_reported").then(result => {
      if (result.code) {
        this.$swal({
          title: $t("connection_error"),
          type: "error"
        });
      } else {
        let temp = result.data.map(x => {
          x.reported_time = moment(x.reported_time).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          switch (x.screening_lv) {
            case 1:
              x.level_text = this.$t("red");
              x.screening_color = "bg-danger";
              break;
            case 2:
              x.level_text = this.$t("yellow");
              x.screening_color = "bg-warning";
              break;
            case 3:
              x.level_text = this.$t("green");
              x.screening_color = "bg-success";
              break;
            case 4:
              x.level_text = this.$t("white");
              x.screening_color = "white";
              break;
            case 5:
              x.level_text = this.$t("black");
              x.screening_color = "black";
              break;
            default:
              x.level_text = "";
              x.screening_color = "";
          }
          return x;
        });
        this.screening_data = temp;
      }
    });
    service.getData("get_mainsymptom").then(result => {
      if (result.code) {
        this.$swal({
          title: $t("connection_error"),
          type: "error"
        });
      } else {
        let res_temp = result.data;
        this.main_symptom_list = res_temp;
      }
    });
  },
  methods: {
    update(val) {
      this.edit_main_symptom = val.target.value;
    },
    geteditdata(val) {
      this.edit_id = val.emergency_reported_id;
      this.patient_fullname = val.patient_name + " " + val.patient_surname;
      this.edit_other_symptom = val.screening_detail
      if (val.screening_id == null) this.edit_main_symptom = null;
      else this.edit_main_symptom = val.screening_id.toString();
      this.edit_symptom = val.screening_lv + ":" + val.screening_no;

      service
        .getData("get_screening_detail?screening_id=" + val.screening_id)
        .then(result => {
          if (result.code) {
            this.edit_symptom_list = [];
            this.red_question = null;
            this.yellow_question = null;
            this.green_question = null;
            this.white_question = null;
            this.black_question = null;
          } else {
            this.red_question = result.data.red_question;
            this.yellow_question = result.data.yellow_question;
            this.green_question = result.data.green_question;
            this.white_question = result.data.white_question;
            this.black_question = result.data.black_question;
            let temp = result.data.minor.map(x => {
              let t = "";
              switch (x.screening_lv) {
                case 1:
                  t = this.$t("red");
                  break;
                case 2:
                  t = this.$t("yellow");
                  break;
                case 3:
                  t = this.$t("green");
                  break;
                case 4:
                  t = this.$t("white");
                  break;
                case 5:
                  t = this.$t("black");
                  break;
                default:
                  t = "";
              }
              return {
                value: {
                  screening_lv: x.screening_lv,
                  screening_no: x.screening_no
                },
                label: t + x.screening_no + x.symptom
              };
            });
            if (temp.length == 0) {
            }
            this.edit_symptom_list = temp;
          }
        });
    },
    update_screening_symptom() {
      console.log(this.edit_symptom)
      this.submitted = true
      if(this.invalid_screening_symptom_filter || this.invalid_edit_main_symptom_filter){
        return;
      }
      this.editscreeningActive = false
      this.$swal({
        title: this.$t("do_you_want_to_update_screening"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then((result)=>{
        if(result.value){
          let screening_lv = this.edit_symptom.split(":")[0]
          let screening_no = this.edit_symptom.split(":")[1]
          let body = {emergency_reported_id:this.edit_id,screening_id:this.edit_main_symptom,screening_detail:this.edit_other_symptom,screening_lv:screening_lv,screening_no:screening_no}
          service.postData("update_emergency_reported",body)
          .then((result)=>{
            if(result.code){
              this.$swal({
                title:result.message,
                type:"error"
              }).then(() => {
                this.editsymptomActive = true;
              });
            }else{
              this.$swal({
                title: this.$t("complete"),
                type: "success",
                timer: 1500,
                showComfirmButton: false
              });
              setTimeout(() => {
                this.$router.go();
              }, 1500);
            }
          })
        }
      })
    }
  },
  watch: {
    edit_main_symptom(val) {
      service
        .getData("get_screening_detail?screening_id=" + val)
        .then(result => {
          if (result.code) {
            this.edit_symptom_list = [];
            this.red_question = null;
            this.yellow_question = null;
            this.green_question = null;
            this.white_question = null;
            this.black_question = null;
            this.recommend_command = null;
          } else {
            this.red_question = result.data.red_question;
            this.yellow_question = result.data.yellow_question;
            this.green_question = result.data.green_question;
            this.white_question = result.data.white_question;
            this.black_question = result.data.black_question;
            this.recommend_command = result.data.recommend_command;
            let temp = result.data.minor.map(x => {
              let t = "";
              switch (x.screening_lv) {
                case 1:
                  t = this.$t("red");
                  break;
                case 2:
                  t = this.$t("yellow");
                  break;
                case 3:
                  t = this.$t("green");
                  break;
                case 4:
                  t = this.$t("white");
                  break;
                case 5:
                  t = this.$t("black");
                  break;
                default:
                  t = "";
              }
              return {
                value: x.screening_lv + ":" + x.screening_no,
                label: t + x.screening_no + x.symptom
              };
            });
            if (temp.length == 0) {
            }
            this.edit_symptom_list = temp;
          }
        });
    }
  }
};
</script>

<style>
.white {
  background-color: wheat;
}
.black {
  background-color: black;
}
</style>
