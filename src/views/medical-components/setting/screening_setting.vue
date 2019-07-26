<template>
  <div class="vx-col w-full mb-base">
    <vx-card :title="$t('screening_setting')">
      <vs-row vs-w="12">
        <vs-col vs-w="2" vs-justify="flex-start" vs-type="flex">
          <vs-button
            color="success"
            type="filled"
            @click="addmainActive=true;"
          >{{$t("add_new_main")}}</vs-button>
        </vs-col>

        <vs-popup class="holamundo" :title="$t('add_new_main')" :active.sync="addmainActive">
          <vs-row vs-w="12">
            <vs-col vs-w="4" vs-justify="flex-end">
              <label>{{$t('screening_name')}}</label>
            </vs-col>
            <vs-col vs-w="8">
              <vs-input class="w-full" v-model="new_screening_name" />
              <div class="error" v-if="invalid_new">{{$t("add_screening_name_alert")}}</div>
              <div class="error" v-if="duplicated_new">{{$t("duplicated_screening_name_alert")}}</div>
            </vs-col>
            <vs-col vs-w="12">
              <vs-button
                color="success"
                type="filled"
                id="new-loading-button"
                @click="add_new_screening"
                ref="loadableButton"
                class="vs-con__container"
              >{{$t("save")}}</vs-button>
            </vs-col>
          </vs-row>
        </vs-popup>
      </vs-row>

      <vs-row vs-w="12" class="mt-3">
        <vs-col vs-w="2" vs-justify="center" vs-type="flex">
          <h5>{{$t('main_symptoms')}}</h5>
        </vs-col>
        <vs-col vs-w="8" vs-type="flex" vs-justify="flex-start">
          <vs-select class="w-full" v-model="main_symptom">
            <vs-select-item
              :key="index"
              :value="item.screening_id"
              :text="item.screening_name"
              v-for="(item,index) in main_symptom_list"
            />
          </vs-select>
        </vs-col>
        <vs-col vs-w="2" vs-justify="center" vs-type="flex">
          <vs-button
            color="danger"
            type="filled"
            @click="delete_screening"
            :disabled="!is_MainSymptom"
          >{{$t("delete")}}</vs-button>
        </vs-col>
      </vs-row>
    </vx-card>
    <vx-card class="mt-5" v-if="is_MainSymptom">
      <vs-tabs>
        <vs-tab :label="$t('question')">
          <vs-row vs-w="12" class="mt-2">
            <vs-col vs-w="2" vs-justify="flex-end" vs-type="flex">
              <label>{{$t('red_question')}}</label>
              <div class="h-4 w-4 rounded-full bg-danger ml-2 mt-1"></div>
            </vs-col>
            <vs-col vs-w="8">
              <quill-editor v-model="red_question"></quill-editor>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="2" vs-justify="flex-end" vs-type="flex">
              <label>{{$t('yellow_question')}}</label>
              <div class="h-4 w-4 rounded-full bg-warning ml-2 mt-1"></div>
            </vs-col>
            <vs-col vs-w="8">
              <quill-editor v-model="yellow_question"></quill-editor>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="2" vs-justify="flex-end" vs-type="flex">
              <label>{{$t('green_question')}}</label>
              <div class="h-4 w-4 rounded-full bg-success ml-2 mt-1"></div>
            </vs-col>
            <vs-col vs-w="8">
              <quill-editor v-model="green_question"></quill-editor>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="2" vs-justify="flex-end" vs-type="flex">
              <label>{{$t('white_question')}}</label>
              <div class="h-4 w-4 rounded-full white ml-2 mt-1"></div>
            </vs-col>
            <vs-col vs-w="8">
              <quill-editor v-model="white_question"></quill-editor>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="2" vs-justify="flex-end" vs-type="flex">
              <label>{{$t('black_question')}}</label>
              <div class="h-4 w-4 rounded-full black ml-2 mt-1"></div>
            </vs-col>
            <vs-col vs-w="8">
              <quill-editor v-model="black_question"></quill-editor>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="2" vs-justify="flex-end" vs-type="flex">
              <label>{{$t('recommend_command')}}</label>
            </vs-col>
            <vs-col vs-w="8">
              <quill-editor v-model="recommend_command"></quill-editor>
            </vs-col>
            <vs-col vs-w="2">
              <vs-button color="success" type="filled" @click="saveQuestion">{{$t("save")}}</vs-button>
            </vs-col>
          </vs-row>
        </vs-tab>
        <vs-tab :label="$t('symptom_detail')">
          <vs-row vs-w="12">
            <vs-col class="mt-4" vs-w="2" vs-justify="flex-start" vs-type="flex">
              <vs-button
                color="success"
                type="filled"
                @click="addsymptomActive=true;"
              >{{$t("add_new_symptom")}}</vs-button>
              <vs-popup
                class="holamundo"
                :title="$t('add_new_symptom')"
                :active.sync="addsymptomActive"
              >
                <vs-row vs-w="12">
                  <vs-col vs-w="4" vs-justify="flex-end">
                    <label>{{$t('screening_lv')}}</label>
                  </vs-col>
                  <vs-col vs-w="8">
                    <vs-select
                      class="w-full"
                      :danger="invalid_screening_lv"
                      v-model="new_screening_lv"
                    >
                      <vs-select-item :value="1" :text="$t('red')" />
                      <vs-select-item :value="2" :text="$t('yellow')" />
                      <vs-select-item :value="3" :text="$t('green')" />
                      <vs-select-item :value="4" :text="$t('white')" />
                      <vs-select-item :value="5" :text="$t('black')" />
                    </vs-select>
                    <div class="error" v-if="invalid_screening_lv">{{$t("screening_lv_alert")}}</div>
                  </vs-col>
                </vs-row>
                <vs-row vs-w="12" class="mt-2">
                  <vs-col vs-w="4" vs-justify="flex-end">
                    <label>{{$t('symptom')}}</label>
                  </vs-col>
                  <vs-col vs-w="8">
                    <vs-input :danger="invalid_symptom" class="w-full" v-model="new_symptom" />
                    <div class="error" v-if="invalid_symptom">{{$t("add_screening_name_alert")}}</div>
                    <div
                      class="error"
                      v-if="duplicated_symptom"
                    >{{$t("duplicated_screening_name_alert")}}</div>
                  </vs-col>
                  <vs-col vs-w="12">
                    <vs-button color="success" type="filled" @click="add_new_symptom">{{$t("save")}}</vs-button>
                  </vs-col>
                </vs-row>
              </vs-popup>
            </vs-col>
            <vs-table class="w-full" pagination max-items="10" search :data="screening_minor">
              <template slot="thead">
                <vs-th sort-key="screening_no">{{$t('screening_no')}}</vs-th>
                <vs-th sort-key="screening_lv">{{$t('screening_lv')}}</vs-th>
                <vs-th sort-key="symptom">{{$t('symptom')}}</vs-th>
                <vs-th>{{$t("edit")}}</vs-th>
                <vs-th>{{$t("delete")}}</vs-th>
              </template>
              <template slot-scope="{data}">
                <vs-tr :key="index" v-for="(tr, index) in data">
                  <vs-td :data="tr.screening_no">{{tr.screening_no}}</vs-td>
                  <vs-td
                    style="width:10%;padding-left:4%;"
                    vs-justify="center"
                    :data="tr.screening_lv"
                  >
                    <div class="h-4 w-4 rounded-full" :class="check_status(tr.screening_lv)"></div>
                  </vs-td>
                  <vs-td :data="tr.symptom">{{ tr.symptom }}</vs-td>
                  <vs-td>
                    <feather-icon
                      icon="EditIcon"
                      class="cursor-pointer w-6 h-6"
                      size="small"
                      @click="editsymptomActive=true;"
                    ></feather-icon>
                    <vs-popup
                      class="holamundo"
                      :title="$t('edit_symptom')"
                      :active.sync="editsymptomActive"
                    >
                      <vs-row vs-w="12" class="mt-2">
                        <vs-col vs-w="4" vs-justify="flex-end">
                          <label>{{$t('symptom')}}</label>
                        </vs-col>
                        <vs-col vs-w="8">
                          <vs-input
                            :danger="invalid_symptom"
                            class="w-full"
                            v-model="edit_symptom"
                          />
                          <div
                            class="error"
                            v-if="invalid_symptom2"
                          >{{$t("add_screening_name_alert")}}</div>
                          <div
                            class="error"
                            v-if="duplicated_symptom2"
                          >{{$t("duplicated_screening_name_alert")}}</div>
                        </vs-col>
                        <vs-col vs-w="12">
                          <vs-button
                            color="success"
                            type="filled"
                            @click="update_symptom(tr.screening_no,tr.screening_lv,symptom)"
                          >{{$t("save")}}</vs-button>
                        </vs-col>
                      </vs-row>
                    </vs-popup>
                  </vs-td>
                  <vs-td>
                    <feather-icon
                      icon="Trash2Icon"
                      class="cursor-pointer w-6 h-6"
                      size="small"
                      @click="delete_symptom(tr.screening_no,tr.screening_lv)"
                    ></feather-icon>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </vs-row>
        </vs-tab>
      </vs-tabs>
    </vx-card>
  </div>
</template>

<script>
import moment from "moment";
import service from "@/service/service";
import { setTimeout } from "timers";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      main_symptom_list: [],
      main_symptom: "",
      addmainActive: false,
      new_screening_name: "",
      new_submitted: false,
      red_question: "",
      yellow_question: "",
      green_question: "",
      white_question: "",
      black_question: "",
      recommend_command: "",
      screening_minor: [],
      addsymptomActive: false,
      new_screening_lv: null,
      new_symptom: "",
      new_submitted2: false,
      new_submitted3: false,
      editsymptomActive: false,
      edit_symptom: ""
    };
  },
  computed: {
    invalid_new() {
      return this.new_submitted && this.new_screening_name == "";
    },
    new_isInvalid() {
      return this.invalid_new || this.duplicated_new;
    },
    duplicated_new() {
      let temp = this.main_symptom_list.filter(
        x => x.screening_name == this.new_screening_name
      );
      return temp.length > 0;
    },
    invalid_symptom() {
      return this.new_submitted2 && this.new_symptom.trim() == "";
    },
    invalid_screening_lv() {
      return this.new_submitted2 && this.new_screening_lv == null;
    },
    new_isInvalid2() {
      return (
        this.invalid_symptom ||
        this.invalid_screening_lv ||
        this.duplicated_symptom
      );
    },
    duplicated_symptom() {
      let temp = this.screening_minor.filter(
        x =>
          x.screening_lv == this.new_screening_lv &&
          this.new_symptom.trim() == x.symptom
      );
      return temp.length > 0;
    },
    is_MainSymptom() {
      return this.main_symptom != "";
    },
    duplicated_symptom2() {
      let temp = this.screening_minor.filter(
        x =>
          x.screening_lv == this.new_screening_lv &&
          this.edit_symptom.trim() == x.symptom
      );
      return temp.length > 0;
    },
    invalid_symptom2() {
      return this.new_submitted3 && this.edit_symptom.trim() == "";
    },
    edit_isInvalid() {
      return this.invalid_symptom2 || this.duplicated_symptom2;
    }
  },
  created() {
    service.getData("get_mainsymptom").then(result => {
      if (!result.code) {
        this.main_symptom_list = result.data;
      } else {
        this.$swal({
          title: "Connection lost",
          type: "error"
        });
      }
    });
  },
  methods: {
    get_screening_data() {
      service
          .getData("get_screening_detail?screening_id=" + this.main_symptom)
          .then(result => {
            if (result.code) {
              this.$swal({
                title: this.$t("get_data_error"),
                type: "error"
              });
            } else {
              let data = result.data;
              this.red_question = data.red_question;
              this.yellow_question = data.yellow_question;
              this.green_question = data.green_question;
              this.white_question = data.white_question;
              this.black_question = data.black_question;
              this.recommend_command = data.recommend_command;
              this.screening_minor = data.minor;
            }
          });
    },
    add_new_screening() {
      let temp = this.new_screening_name;
      this.new_submitted = true;
      if (this.new_isInvalid || this.duplicated_new) {
        return;
      }
      this.addmainActive = false;
      this.$swal({
        title: this.$t("do_you_want_to_add_new_screening"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(result => {
        if (result.value) {
          service
            .postData("add_new_main_symptom", {
              screening_name: temp
            })
            .then(result => {
              if (result.code) {
                this.$swal({
                  title: result.message,
                  type: "error"
                }).then(() => {
                  this.addmainActive = true;
                });
              } else {
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
            });
        } else {
          this.addmainActive = true;
        }
      });
    },
    delete_screening() {
      this.$swal({
        title: this.$t("do_you_want_to_delete_screening"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel"),
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          service
            .deleteData("delete_main_symptom?screening_id=" + this.main_symptom)
            .then(result => {
              if (result.code) {
                this.$swal({
                  title: result.message,
                  type: "error"
                });
              } else {
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
            });
        }
      });
    },
    check_status(value) {
      if (value == 1)
        //red
        return "bg-danger";
      if (value == 2)
        //yellow
        return "bg-warning";
      if (value == 3)
        //green
        return "bg-success";
      if (value == 4)
        //white
        return "white";
      if (value == 5)
        //white
        return "black";
    },
    add_new_symptom() {
      this.new_submitted2 = true;
      if (this.new_isInvalid2) {
        return;
      }
      this.addsymptomActive = false;
      service
        .postData("add_screening_minor", {
          screening_id: this.main_symptom,
          screening_lv: this.new_screening_lv,
          symptom: this.new_symptom
        })
        .then(result => {
          if (result.code) {
            this.$swal({
              title: result.message,
              type: "error"
            }).then(() => {
              this.addsymptomActive = true;
            });
          } else {
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
        });
    },
    saveQuestion() {
      this.$swal({
        title: this.$t("do_you_want_to_edit_question"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(result => {
        if (result.value) {
          let body = {
            screening_id: this.main_symptom,
            red_question: this.red_question,
            yellow_question: this.yellow_question,
            green_question: this.green_question,
            white_question: this.white_question,
            black_question: this.black_question,
            recommend_command: this.recommend_command
          };
          service.postData("add_screening_question", body).then(r1 => {
            if (r1.code) {
              this.$swal({
                title: r1.message,
                type: "error"
              }).then(() => {
                this.addmainActive = true;
              });
            } else {
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
          });
        }
      });
    },
    delete_symptom(screening_no, screening_lv) {
      this.$swal({
        title: this.$t("do_you_want_to_delete_symptom"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(result => {
        if (result.value) {
          service
            .deleteData(
              "delete_minor_symptom?screening_id=" +
                this.main_symptom +
                "&screening_no=" +
                screening_no +
                "&screening_lv=" +
                screening_lv
            )
            .then(result => {
              if (result.code) {
                this.$swal({
                  title: result.message,
                  type: "error"
                });
              } else {
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
            });
        }
      });
    },
    update_symptom(screening_no, screening_lv) {
      if (this.edit_isInvalid) {
        return;
      }
      this.editsymptomActive = false;
      this.$swal({
        title: this.$t("do_you_want_to_update_symptom"),
        type: "question",
        allowClickOutside: false,
        showCancelButton: true,
        confirmButtonText: this.$t("confirm"),
        cancelButtonText: this.$t("cancel")
      }).then(result => {
        if (result.value) {
          let body = {
            symptom: this.edit_symptom,
            screening_id: this.main_symptom,
            screening_no: screening_no,
            screening_lv: screening_lv
          };
          service.postData("update_minor_symptom", body).then(result => {
            if (result.code) {
              this.$swal({
                title: result.message,
                type: "error"
              }).then(() => {
                this.editsymptomActive = true;
              });
            } else {
              this.$swal({
                title: this.$t("complete"),
                type: "success",
                timer: 1500,
                showComfirmButton: false
              });
              setTimeout(() => {
                this.get_screening_data()
              }, 1500);
            }
          });
        }
      });
    }
  },
  watch: {
    addmainActive(val) {
      if (!val) {
        this.new_submitted = false;
        this.new_screening_name = "";
      }
    },
    main_symptom(id) {
      if (id) {
        service
          .getData("get_screening_detail?screening_id=" + id)
          .then(result => {
            if (result.code) {
              this.$swal({
                title: this.$t("get_data_error"),
                type: "error"
              });
            } else {
              let data = result.data;
              this.red_question = data.red_question;
              this.yellow_question = data.yellow_question;
              this.green_question = data.green_question;
              this.white_question = data.white_question;
              this.black_question = data.black_question;
              this.recommend_command = data.recommend_command;
              this.screening_minor = data.minor;
            }
          });
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.white {
  background-color: wheat;
}
.black {
  background-color: black;
}
</style>
