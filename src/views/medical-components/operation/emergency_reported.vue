<template>
  <div class="vx-col w-full mb-base" v-if="renderComponent">
    <vx-card>
      <vs-tabs>
        <vs-tab :label="$t('add_emergency_reported')">
          <div class="mt-3">
            <div class="flex">
              <div class="flex">
                <h4>{{$t("reporting_form")}}</h4>
              </div>
            </div>
            <vs-divider></vs-divider>
            <!-- ============= ============Report Type===== =====================-->
            <div class="flex">
              <div class="w-1/5 flex align-center justify-center">
                <p class="text-lg-right">{{$t('reporter_type')}}</p>
                <span class="require">*</span>
              </div>
              <div class="w-1/5 bg-grid-color-secondary h-12 flex">
                <vs-radio
                  v-model="bodydata.reporter_type"
                  vs-value="1"
                >{{$t('reported_from_civil')}}</vs-radio>
              </div>
              <div class="w-3/5 bg-grid-color h-12 flex">
                <vs-radio
                  v-model="bodydata.reporter_type"
                  vs-value="2"
                >{{$t('narenlet_operation_unit')}}</vs-radio>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/5 bg-grid-color h-12 flex"></div>
              <div class="w-1/5 bg-grid-color-secondary h-12 flex">
                <vs-radio v-model="bodydata.reporter_type" vs-value="3">{{$t('ems')}}</vs-radio>
              </div>
              <div class="w-3/5 bg-grid-color h-12 flex">
                <vs-radio v-model="bodydata.reporter_type" vs-value="4">{{$t('voluteer')}}</vs-radio>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/5 bg-grid-color h-12 flex"></div>
              <div class="w-3/5 bg-grid-color-secondary h-12 flex">
                <vs-radio v-model="bodydata.reporter_type" vs-value="5">{{$t('etc')}}</vs-radio>
              </div>
              <div class="w-1/5 bg-grid-color h-12 flex"></div>
            </div>
            <div class="error" v-if="invalid.reporter_type">{{$t("reporter_type_alert")}}</div>
            <vs-divider></vs-divider>
            <!-- ============= ============How to Report===== =====================-->
            <div class="flex">
              <div class="w-1/5 flex align-center justify-center">
                <p class="text-lg-right">
                  {{$t('how_to_report')}}
                  <span class="require">*</span>
                </p>
              </div>
              <div class="w-1/5 bg-grid-color-secondary h-12 flex">
                <vs-radio
                  v-model="bodydata.how_to_report"
                  vs-value="talkie_walkie"
                >{{$t('talkie_walkie')}}</vs-radio>
              </div>
              <div class="w-3/5 bg-grid-color h-12 flex">
                <vs-radio v-model="bodydata.how_to_report" vs-value="tel_1646">{{$t('tel_1646')}}</vs-radio>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/5 flex align-center justify-center"></div>
              <div class="w-1/5 bg-grid-color-secondary h-12 flex">
                <vs-radio v-model="bodydata.how_to_report" vs-value="tel_1669">{{$t('tel_1669')}}</vs-radio>
              </div>
              <div class="w-3/5 bg-grid-color h-12 flex">
                <vs-radio v-model="bodydata.how_to_report" vs-value="etc">{{$t('etc')}}</vs-radio>
              </div>
            </div>
            <div class="error" v-if="invalid.how_to_report">{{$t("how_to_report_alert")}}</div>
            <vs-divider></vs-divider>
            <!-- ============= ============Event Type===== =====================-->
            <div class="flex">
              <div class="w-1/5 flex align-center justify-center">
                <p class="text-lg-right">
                  {{$t('event_type')}}
                  <span class="require">*</span>
                </p>
              </div>
              <div class="w-1/5 bg-grid-color-secondary h-12 flex">
                <vs-radio v-model="bodydata.event_type" vs-value="sick">{{$t('sick')}}</vs-radio>
              </div>
              <div class="w-3/5 bg-grid-color h-12 flex">
                <vs-radio
                  v-model="bodydata.event_type"
                  vs-value="traffic_accident"
                >{{$t('traffic_accident')}}</vs-radio>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/5 flex align-center justify-center"></div>
              <div class="w-1/5 bg-grid-color-secondary h-12 flex">
                <vs-radio
                  v-model="bodydata.event_type"
                  vs-value="other_accident"
                >{{$t('other_accident')}}</vs-radio>
              </div>
              <div class="w-3/5 bg-grid-color h-12 flex">
                <vs-radio v-model="bodydata.event_type" vs-value="disaster">{{$t('disaster')}}</vs-radio>
              </div>
            </div>
            <div class="error" v-if="invalid.event_type">{{$t("event_type_alert")}}</div>

            <vs-divider></vs-divider>
            <!-- ============= ============Reporter ===== =====================-->
            <div class="flex">
              <h4>{{$t('reporter_infomation')}}</h4>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-1/3 mr-2">
                <vs-input :label="$t('name')" class="w-full" v-model="bodydata.reporter_name" />
              </div>
              <div class="vx-vol md:w-1/3 ml-3">
                <vs-input
                  :label="$t('surname')"
                  class="w-full"
                  v-model="bodydata.reporter_surname"
                />
              </div>
              <div class="md:w-1/3"></div>
            </div>
            <div class="vx-row">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-1/3 mr-2">
                <label class="ml-2 menu-text">
                  {{$t('tel')}}
                  <span class="require">*</span>
                </label>
                <vs-input
                  class="w-full"
                  @keyup="onlynumber($event)"
                  v-model="bodydata.reporter_tel"
                />
                <div class="error" v-if="invalid.reporter_tel">{{$t("reporter_tel")}}</div>
              </div>
              <div class="vx-vol md:w-1/3 ml-3">
                <vs-input
                  :label="$t('frequency')"
                  class="w-full"
                  v-model="bodydata.reporter_frequency"
                />
              </div>
              <div class="md:w-1/3"></div>
            </div>
            <vs-divider></vs-divider>
            <!-- ============= ============Patient info ===== =====================-->
            <div class="flex">
              <h4>{{$t('patient_infomation')}}</h4>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-1/3 mr-2">
                <vs-input :label="$t('name')" class="w-full" v-model="bodydata.patient_name" />
              </div>
              <div class="vx-vol md:w-1/3 ml-3">
                <vs-input :label="$t('surname')" class="w-full" v-model="bodydata.patient_surname" />
              </div>
              <div class="md:w-1/3"></div>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-1/3 mr-2">
                <p class="ml-2 menu-text">
                  {{$t('patient_gender')}}
                  <span class="require">*</span>
                </p>
                <vs-select class="w-full" v-model="bodydata.patient_gender">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in gender_view"
                  />
                </vs-select>
                <div class="error" v-if="invalid.patient_gender">{{$t("gender_alert")}}</div>
              </div>
              <div class="vx-vol md:w-1/3 ml-3">
                <p class="ml-2 menu-text">
                  {{$t('age')}}
                  <span class="require">*</span>
                </p>
                <vs-input-number
                  v-model="bodydata.patient_age"
                  icon-inc="expand_less"
                  icon-dec="expand_more"
                />
                <div class="error" v-if="invalid.patient_age">{{$t("patient_age_alert")}}</div>
              </div>
              <div class="md:w-1/3"></div>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-3/4">
                <p class="ml-2 menu-text">
                  {{$t('basic_illness')}}
                  <span class="require">*</span>
                </p>
                <vs-textarea v-model="bodydata.basic_illness" />
                <div class="error" v-if="invalid.basic_illness">{{$t("basic_illness_alert")}}</div>
              </div>
            </div>
            <vs-divider></vs-divider>
            <!-- ============= ============Location ===== =====================-->
            <div class="flex">
              <h4>{{$t('accident_location')}}</h4>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-2/3">
                <label class="ml-2 menu-text">
                  {{$t('location_name')}}
                  <span class="require">*</span>
                </label>
                <vs-input class="w-full" v-model="bodydata.location_name" />
                <div class="error" v-if="invalid.location_name">{{$t("location_name_alert")}}</div>
              </div>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-2/3">
                <vs-input
                  :label="$t('place_detail')"
                  class="w-full"
                  v-model="bodydata.place_detail"
                />
              </div>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-1/5 mr-3">
                <label class="ml-2 menu-text">
                  {{$t('lat')}}
                  <span class="require">*</span>
                </label>
                <vs-input class="w-full" v-model="bodydata.lat" disabled />
              </div>
              <div class="vx-vol md:w-1/5 mr-3">
                <label class="ml-2 menu-text">
                  {{$t('lon')}}
                  <span class="require">*</span>
                </label>
                <vs-input class="w-full" v-model="bodydata.lon" disabled />
              </div>
              <div class="vx-vol md:w-1/5 mr-3">
                <label class="ml-2 menu-text">{{$t('zone')}}</label>
                <vs-input class="w-full" v-model="bodydata.zone" />
              </div>
            </div>
            <div class="vx-row mt-3">
              <div class="md:w-1/12"></div>
              <div class="vx-vol md:w-2/5 mr-3">
                <div class="error" v-if="invalid.lat || invalid.lon">{{$t("lat_lon_alert")}}</div>
              </div>
              <div class="vx-vol md:w-1/5 mr-3"></div>
            </div>

            <div class="mt-3">
              <div class="vx-row">
                <vl-map
                  :load-tiles-while-animating="true"
                  :load-tiles-while-interacting="true"
                  style="height: 400px"
                  @click="myfunc($event)"
                >
                  <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

                  <vl-layer-tile id="osm">
                    <vl-source-osm></vl-source-osm>
                  </vl-layer-tile>

                  <vl-overlay v-if="isSelectCoordinate" id="overlay" :position="overlayCoordinate">
                    <template slot-scope="scope">
                      <div class="overlay-content">
                        <p v-if="false">{{scope}}</p>
                        <img
                          :src="require(`@/assets/marker.png`)"
                          alt="content-img"
                          style="width:50px;height:50px;margin-top:-50px;margin-left:-25px;"
                        />
                      </div>
                    </template>
                  </vl-overlay>
                </vl-map>
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col w-full mt-5">
                <div class="demo-alignment">
                  <vs-button color="success" type="border" @click="save">{{$t('save')}}</vs-button>
                  <vs-button color="danger" type="border">{{$t('cancel')}}</vs-button>
                </div>
              </div>
            </div>
          </div>
        </vs-tab>
        <vs-tab :label="$t('emergency_view')" @click="getTabledata">
          <div class="mt-3">
            <vs-table pagination max-items="10" search :data="operation">
              <template slot="thead">
                <vs-th sort-key="operation_id">{{$t('operation_id')}}</vs-th>
                <vs-th sort-key="date">{{$t('date')}}</vs-th>
                <vs-th sort-key="time">{{$t('time')}}</vs-th>
                <vs-th sort-key="location_name">{{$t('location_name')}}</vs-th>

                <vs-th sort-key="receiver_name">{{$t('receiver_name')}}</vs-th>
                <vs-th>{{$t('Status')}}</vs-th>
                <vs-th sort-key="reporter_tel">{{$t('reporter_tel')}}</vs-th>
                <vs-th>{{$t("edit")}}</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="index" v-for="(tr, index) in data">
                  <vs-td :data="tr.operation_id">{{tr.operation_id}}</vs-td>

                  <vs-td :data="tr.date">{{ tr.date }}</vs-td>

                  <vs-td :data="tr.time">{{ tr.time }}</vs-td>
                  <vs-td :data="tr.location_name">{{ tr.location_name }}</vs-td>
                  <vs-td :data="tr.receiver_name">{{ tr.receiver_name }}</vs-td>
                  <vs-td>
                    <div class="vx-row">
                      <div class="md:w-1/5">
                        <vx-tooltip :text="$t('reported')"  position="left">
                          <div class="h-4 w-4 rounded-full bg-success"></div>
                        </vx-tooltip>
                      </div>
                      <div class="md:w-1/5">
                        <vx-tooltip :text="$t('screening')"  position="left">
                          <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.screening_id)"></div>
                        </vx-tooltip>
                      </div>
                      <div class="md:w-1/5">
                        <vx-tooltip :text="$t('command')"  position="left">
                          <div
                            class="h-4 w-4 rounded-full"
                            :class="checkstatus(tr.operation_unit_id)"
                          ></div>
                        </vx-tooltip>
                      </div>
                      <div class="md:w-1/5">
                        <vx-tooltip :text="$t('getjob')"  position="left">
                          <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.operation_id)"></div>
                        </vx-tooltip>
                      </div>
                      <div class="md:w-1/5">
                        <vx-tooltip :text="$t('finish')"  position="left">
                          <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.cure_result)"></div>
                        </vx-tooltip>
                      </div>
                    </div>
                  </vs-td>
                  <vs-td :data="tr.reporter_tel">{{ tr.reporter_tel }}</vs-td>
                  <vs-td>
                    <feather-icon
                      icon="EditIcon"
                      class="cursor-pointer w-6 h-6"
                      size="small"
                      @click="popupActive=true;edit_bodydata=tr;test(tr)"
                    ></feather-icon>
                  </vs-td>
                  <vs-popup class="holamundo" :title="$t('edit_report')" :active.sync="popupActive">
                    <div class="mt-3">
                      <!-- ============= ============Report Type===== =====================-->
                      <div class="vx-row">
                        <div class="md:w-1/5 align-center justify-center flex">
                          <p class="text-lg-right">{{$t('reporter_type')}}</p>
                          <span class="require">*</span>
                        </div>
                        <div class="md:w-4/5">
                          <vs-select class="w-full" v-model="edit_bodydata.reporter_type">
                            <vs-select-item
                              :key="index"
                              :value="item.id"
                              :text="$t(item.value)"
                              v-for="(item,index) in report_type_list"
                            />
                          </vs-select>
                        </div>
                      </div>
                      <!-- <div class="flex">
                        <div class="w-1/5 bg-grid-color h-12 flex"></div>
                        <div class="w-2/5 bg-grid-color-secondary h-12 flex">
                          <vs-radio v-model="edit_bodydata.reporter_type" vs-value="3">{{$t('ems')}}</vs-radio>
                        </div>
                        <div class="w-2/5 bg-grid-color h-12 flex">
                          <vs-radio
                            v-model="edit_bodydata.reporter_type"
                            vs-value="4"
                          >{{$t('voluteer')}}</vs-radio>
                        </div>
                      </div>
                      <div class="flex">
                        <div class="w-1/5 bg-grid-color h-12 flex"></div>
                        <div class="w-2/5 bg-grid-color-secondary h-12 flex">
                          <vs-radio v-model="edit_bodydata.reporter_type" vs-value="5">{{$t('etc')}}</vs-radio>
                        </div>
                        <div class="w-2/5 bg-grid-color h-12 flex"></div>
                      </div>-->
                      <div class="error" v-if="invalid2.reporter_type">{{$t("reporter_type_alert")}}</div>
                      <vs-divider></vs-divider>
                      <!-- ============= ============How to Report===== =====================-->
                      <div class="vx-row">
                        <div class="md:w-1/5 align-center justify-center flex">
                          <p class="text-lg-right">{{$t('how_to_report')}}</p>
                          <span class="require">*</span>
                        </div>
                        <div class="md:w-4/5">
                          <vs-select class="w-full" v-model="edit_bodydata.how_to_report">
                            <vs-select-item
                              :key="index"
                              :value="item.id"
                              :text="$t(item.value)"
                              v-for="(item,index) in how_to_report_list"
                            />
                          </vs-select>
                        </div>
                      </div>
                      <div class="error" v-if="invalid2.how_to_report">{{$t("how_to_report_alert")}}</div>
                      <vs-divider></vs-divider>
                      <!-- ============= ============Event Type===== =====================-->
                      <div class="vx-row">
                        <div class="md:w-1/5 align-center justify-center flex">
                          <p class="text-lg-right">{{$t('event_type')}}</p>
                          <span class="require">*</span>
                        </div>
                        <div class="md:w-4/5">
                          <vs-select class="w-full" v-model="edit_bodydata.event_type">
                            <vs-select-item
                              :key="index"
                              :value="item.id"
                              :text="$t(item.value)"
                              v-for="(item,index) in event_type_list"
                            />
                          </vs-select>
                        </div>
                      </div>
                      <div class="error" v-if="invalid2.event_type">{{$t("event_type_alert")}}</div>

                      <vs-divider></vs-divider>
                      <!-- ============= ============Reporter ===== =====================-->
                      <div class="flex">
                        <h4>{{$t('reporter_infomation')}}</h4>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-1/3 mr-2">
                          <vs-input
                            :label="$t('name')"
                            class="w-full"
                            v-model="edit_bodydata.reporter_name"
                          />
                        </div>
                        <div class="vx-vol md:w-1/3 ml-3">
                          <vs-input
                            :label="$t('surname')"
                            class="w-full"
                            v-model="edit_bodydata.reporter_surname"
                          />
                        </div>
                        <div class="md:w-1/3"></div>
                      </div>
                      <div class="vx-row">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-1/3 mr-2">
                          <label class="ml-2 menu-text">
                            {{$t('tel')}}
                            <span class="require">*</span>
                          </label>
                          <vs-input
                            class="w-full"
                            @keyup="onlynumber($event)"
                            v-model="edit_bodydata.reporter_tel"
                          />
                          <div class="error" v-if="invalid2.reporter_tel">{{$t("reporter_tel")}}</div>
                        </div>
                        <div class="vx-vol md:w-1/3 ml-3">
                          <vs-input
                            :label="$t('frequency')"
                            class="w-full"
                            v-model="edit_bodydata.reporter_frequency"
                          />
                        </div>
                        <div class="md:w-1/3"></div>
                      </div>
                      <vs-divider></vs-divider>
                      <!-- ============= ============Patient info ===== =====================-->
                      <div class="flex">
                        <h4>{{$t('patient_infomation')}}</h4>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-1/3 mr-2">
                          <vs-input
                            :label="$t('name')"
                            class="w-full"
                            v-model="edit_bodydata.patient_name"
                          />
                        </div>
                        <div class="vx-vol md:w-1/3 ml-3">
                          <vs-input
                            :label="$t('surname')"
                            class="w-full"
                            v-model="edit_bodydata.patient_surname"
                          />
                        </div>
                        <div class="md:w-1/3"></div>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="md:w-1/3 mr-2">
                          <p class="ml-2 menu-text">
                            {{$t('patient_gender')}}
                            <span class="require">*</span>
                          </p>
                          <vs-select class="w-full" v-model="edit_bodydata.patient_gender">
                            <vs-select-item
                              :key="index"
                              :value="item.value"
                              :text="item.text"
                              v-for="(item,index) in gender_view"
                            />
                          </vs-select>
                          <div class="error" v-if="invalid2.patient_gender">{{$t("gender_alert")}}</div>
                        </div>
                        <div class="vx-vol md:w-1/3 ml-3">
                          <p class="ml-2 menu-text">
                            {{$t('age')}}
                            <span class="require">*</span>
                          </p>
                          <vs-input-number
                            v-model="edit_bodydata.patient_age"
                            icon-inc="expand_less"
                            icon-dec="expand_more"
                          />
                          <div class="error" v-if="invalid2.patient_age">{{$t("patient_age_alert")}}</div>
                        </div>
                        <div class="md:w-1/3"></div>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-3/4">
                          <p class="ml-2 menu-text">
                            {{$t('basic_illness')}}
                            <span class="require">*</span>
                          </p>
                          <vs-textarea v-model="edit_bodydata.basic_illness" />
                          <div
                            class="error"
                            v-if="invalid2.basic_illness"
                          >{{$t("basic_illness_alert")}}</div>
                        </div>
                      </div>
                      <vs-divider></vs-divider>
                      <!-- ============= ============Location ===== =====================-->
                      <div class="flex">
                        <h4>{{$t('accident_location')}}</h4>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-2/3">
                          <label class="ml-2 menu-text">
                            {{$t('location_name')}}
                            <span class="require">*</span>
                          </label>
                          <vs-input class="w-full" v-model="edit_bodydata.location_name" />
                          <div
                            class="error"
                            v-if="invalid2.location_name"
                          >{{$t("location_name_alert")}}</div>
                        </div>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-2/3">
                          <vs-input
                            :label="$t('place_detail')"
                            class="w-full"
                            v-model="edit_bodydata.place_detail"
                          />
                        </div>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-1/5 mr-3">
                          <label class="ml-2 menu-text">
                            {{$t('lat')}}
                            <span class="require">*</span>
                          </label>
                          <vs-input class="w-full" v-model="edit_bodydata.lat" disabled />
                        </div>
                        <div class="vx-vol md:w-1/5 mr-3">
                          <label class="ml-2 menu-text">
                            {{$t('lon')}}
                            <span class="require">*</span>
                          </label>
                          <vs-input class="w-full" v-model="edit_bodydata.lon" disabled />
                        </div>
                        <div class="vx-vol md:w-1/5 mr-3">
                          <label class="ml-2 menu-text">{{$t('zone')}}</label>
                          <vs-input class="w-full" v-model="edit_bodydata.zone" />
                        </div>
                      </div>
                      <div class="vx-row mt-3">
                        <div class="md:w-1/12"></div>
                        <div class="vx-vol md:w-2/5 mr-3">
                          <div
                            class="error"
                            v-if="invalid2.lat || invalid2.lon"
                          >{{$t("lat_lon_alert")}}</div>
                        </div>
                        <div class="vx-vol md:w-1/5 mr-3"></div>
                      </div>

                      <div class="mt-3">
                        <div class="vx-row">
                          <vl-map
                            :load-tiles-while-animating="true"
                            :load-tiles-while-interacting="true"
                            style="height: 400px"
                            v-if="mapload"
                            @click="myfunc($event)"
                          >
                            <vl-view
                              :zoom.sync="zoom"
                              :center.sync="center"
                              :rotation.sync="rotation"
                            ></vl-view>

                            <vl-layer-tile id="osm">
                              <vl-source-osm></vl-source-osm>
                            </vl-layer-tile>

                            <vl-overlay
                              v-if="isSelectCoordinate"
                              id="overlay"
                              :position="overlayCoordinate"
                            >
                              <template slot-scope="scope">
                                <div class="overlay-content">
                                  <p v-if="false">{{scope}}</p>
                                  <img
                                    :src="require(`@/assets/marker.png`)"
                                    alt="content-img"
                                    style="width:50px;height:50px;margin-top:-50px;margin-left:-25px;"
                                  />
                                </div>
                              </template>
                            </vl-overlay>
                          </vl-map>
                        </div>
                      </div>

                      <div class="vx-row">
                        <div class="vx-col w-full mt-5">
                          <div class="demo-alignment">
                            <vs-button color="success" type="border" @click="update">{{$t('save')}}</vs-button>
                            <vs-button
                              color="danger"
                              type="border"
                              @click="popupActive=false"
                            >{{$t('cancel')}}</vs-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </vs-popup>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-tab>
      </vs-tabs>
    </vx-card>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import service from "@/service/service";
import EditOperatorData from "../extra-components/EditOperatorData";
import moment from "moment";
import { setTimeout } from "timers";
export default {
  components: {
    EditOperatorData,
    Datepicker
  },
  data() {
    return {
      operation: [],
      renderComponent: true,
      addNewDataSidebar: false,
      bodydata: {
        reporter_type: null,
        event_type: null,
        reporter_name: "",
        reporter_tel: "",
        reporter_surname: "",
        how_to_report: null,
        reporter_frequency: null,
        patient_name: "",
        patient_surname: "",
        patient_gender: "",
        patient_age: 30,
        basic_illness: "",
        lat: "",
        lon: "",
        zone: "",
        location_name: "",
        place_detail: "",
        reciever:JSON.stringify(service.getUser()).username
      },
      edit_bodydata: {
        reporter_type: null,
        event_type: null,
        reporter_name: "",
        reporter_tel: "",
        reporter_surname: "",
        how_to_report: null,
        reporter_frequency: null,
        patient_name: "",
        patient_surname: "",
        patient_gender: "",
        patient_age: 30,
        basic_illness: "",
        lat: "",
        lon: "",
        zone: "",
        location_name: "",
        place_detail: ""
      },
      gender_list: [
        { id: 1, en: "Male", th: "ชาย" },
        { id: 2, en: "Female", th: "หญิง" }
      ],
      report_type_list: service.reporter_type,
      how_to_report_list: service.how_to_report,
      event_type_list: service.event_type,
      //map
      overlayCoordinate: [],
      zoom: 8,
      center: [100.6037284, 13.6768896],
      rotation: 0,
      isSelectCoordinate: false,
      submitted: false,
      locale: this.$i18n.locale,
      popupActive: false,
      mapload: false
    };
  },
  computed: {
    gender_view() {
      return this.gender_list.map(item => {
        if (this.$i18n.locale == "th") {
          return { value: item.id, text: item.th };
        } else {
          return { value: item.id, text: item.en };
        }
      });
    },
    invalid() {
      var c = type => {
        return this.submitted && this.bodydata[type] == "";
      };
      return {
        patient_gender: c("patient_gender"),
        reporter_tel: c("reporter_tel"),
        reporter_type: c("reporter_type"),
        event_type: c("event_type"),
        patient_age: c("patient_age"),
        location_name: c("location_name"),
        lat: c("lat"),
        lon: c("lon"),
        basic_illness: c("basic_illness"),
        how_to_report: c("how_to_report")
      };
    },
    invalid2() {
      var c = type => {
        return this.submitted && this.edit_bodydata[type] == "";
      };
      return {
        patient_gender: c("patient_gender"),
        reporter_tel: c("reporter_tel"),
        reporter_type: c("reporter_type"),
        event_type: c("event_type"),
        patient_age: c("patient_age"),
        location_name: c("location_name"),
        lat: c("lat"),
        lon: c("lon"),
        basic_illness: c("basic_illness"),
        how_to_report: c("how_to_report")
      };
    },
    isInvalid() {
      return (
        this.invalid.patient_gender ||
        this.invalid.reporter_type ||
        this.invalid.event_type ||
        this.invalid.reporter_tel ||
        this.invalid.patient_age ||
        this.invalid.location_name ||
        this.invalid.lat ||
        this.invalid.lon ||
        this.invalid.basic_illness ||
        this.invalid.how_to_report
      );
    },
    isInvalid2() {
      return (
        this.invalid2.patient_gender ||
        this.invalid2.reporter_type ||
        this.invalid2.event_type ||
        this.invalid2.reporter_tel ||
        this.invalid2.patient_age ||
        this.invalid2.location_name ||
        this.invalid2.lat ||
        this.invalid2.lon ||
        this.invalid2.basic_illness ||
        this.invalid2.how_to_report
      );
    },
    lang() {
      return this.$i18n.locale;
    },
    tel() {
      return this.bodydata.reporter_tel;
    }
  },
  created() {
    service.getData("get_emergency_reported").then(result => {
      if (!result.code) {
        let temp_data = result.data.map(x => {
          x.date = moment(x.report_time).format("YYYY-MM-DD");
          x.time = moment(x.report_time).format("HH:mm:ss");
          // x.event_type = service.event_type.filter(y => {
          //   if(x.event_type == y.id)return y.value
          // })[0];
          // x.how_to_report = service.how_to_report.filter(y => {
          //   if(x.how_to_report == y.id)return y.value
          // })[0];
          return x;
        });
        this.operation = temp_data;
      }
    });
  },
  methods: {
    myfunc(e) {
      console.log(e);
      this.overlayCoordinate = e.coordinate;
      this.bodydata.lon = this.overlayCoordinate[0];
      this.bodydata.lat = this.overlayCoordinate[1];
      this.isSelectCoordinate = true;
    },
    save() {
      this.submitted = true;
      if (!this.isInvalid) {
        this.$swal({
          title: this.$t("register_emergency?"),
          type: "warning",
          showCancelButton: true,
          confirmButtonText: this.$t("confirm"),
          cancelButtonText: this.$t("cancel")
        }).then(result => {
          if (result.value) {
            this.bodydata.how_to_report = service.how_to_report.filter(
              x => this.bodydata.how_to_report == x.value
            )[0].id;
            this.bodydata.event_type = service.event_type.filter(
              x => this.bodydata.event_type == x.value
            )[0].id;
            service
              .postData("add_emergency_reported", this.bodydata)
              .then(result => {
                console.log(result);
                if (result.code) {
                  this.$swal({
                    title: result.message,
                    type: "error"
                  });
                } else {
                  this.$router.go();
                }

                //   this.$swal()
              });
          }
        });
      }
    },
    update() {
      this.submitted = true;
      if (!this.isInvalid2) {
        this.popupActive = false;
        this.$swal({
          title: this.$t("update_emergency?"),
          type: "warning",
          showCancelButton: true,
          confirmButtonText: this.$t("confirm"),
          cancelButtonText: this.$t("cancel"),
          allowOutsideClick: false
        }).then(result => {
          this.popupActive = true;
          if (result.value) {
            service
              .postData("update_emergency_reported", this.edit_bodydata)
              .then(result => {
                console.log(result);
                if (result.code) {
                  this.$swal({
                    title: result.message,
                    type: "error"
                  });
                } else {
                  this.$router.go();
                }

                //   this.$swal()
              });
          }
        });
      }
    },
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    onlynumber(event) {
      let regex = new RegExp(/^[ู0-9]{1,}$/g);
      let specialKeys = [
        "Backspace",
        "Tab",
        "End",
        "Home",
        "ArrowRight",
        "ArrowLeft"
      ];
      if (specialKeys.indexOf(event.key) !== -1) {
        return;
      } else {
        if (regex.test(event.key)) {
          return true;
        } else {
          this.bodydata.reporter_tel = this.bodydata.reporter_tel.slice(0, -1);
        }
      }
    },
    getTabledata() {
      service.getData("get_emergency_reported").then(result => {
        if (!result.code) {
          let temp_data = result.data.map(x => {
            x.date = moment(x.reported_time).format("YYYY-MM-DD");
            x.time = moment(x.reported_time).format("HH:mm:ss");
            // x.event_type = service.event_type.filter(y => {
            //   if(x.event_type == y.id)return y.value
            // })[0];
            // x.how_to_report = service.how_to_report.filter(y => {
            //   if(x.how_to_report == y.id)return y.value
            // })[0];
            return x;
          });

          this.operation = temp_data;
        }
      });
    },
    rerenderMap() {
      this.mapload = false;
      this.$nextTick(() => {
        this.mapload = true;
      });
    },
    test(x) {
      console.log(x.reporter_type);
    },
    checkstatus(value) {
      if (value == null || value == "") {
        return "gray";
      }
      return "bg-success";
    }
  },
  watch: {
    lang(val) {
      this.forceRerender();
    },
    popupActive(val) {
      if (val) {
        this.rerenderMap();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-text {
  color: rgb(150, 148, 148);
  font-size: 13px;
}
li {
  padding-top: 10px;
  margin-right: 10px;
  float: left;
}
button {
  float: right;
  margin-right: 10px;
}
.require {
  color: red;
}
.vdp-datepicker input {
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #626262;
  width: 100%;
}
.danger input {
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid red;
  color: #626262;
  width: 100%;
}
.error {
  color: red;
  font-size: 80%;
}
.gray {
  background-color: #948d8d;
}
</style>
