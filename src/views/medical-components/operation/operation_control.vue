<template>
  <div class="vx-col w-full mb-base">
    <vx-card :title="$t('control')">
      <vs-table :stripe="true" class="w-full" search pagination max-items="10" :data="table_data">
        <template slot="thead">
          <vs-th sort-key="operation_id">{{$t('operation_id')}}</vs-th>
          <vs-th style="width:15%;" sort-key="reported_time">{{ $t('reported_time')}}</vs-th>
          <vs-th sort-key="location_name">{{ $t('location_name')}}</vs-th>
          <vs-th sort-key="screening_symptom">{{ $t('screening_symptom')}}</vs-th>
          <vs-th sort-key="reporter_tel">{{ $t('reporter_tel')}}</vs-th>
          <vs-th sort-key="operation_unit_name">{{ $t('operating_unit_name')}}</vs-th>
          <vs-th>{{ $t('media_file')}}</vs-th>
          <vs-th>{{ $t('data_status')}}</vs-th>
          <vs-th>{{ $t('map_show')}}</vs-th>
          <vs-th>{{ $t('edit')}}</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="index" v-for="(tr, index) in data">
            <vs-td :data="tr.operation_id">{{ tr.operation_id }}</vs-td>
            <vs-td :data="tr.reported_time">{{ tr.reported_time }}</vs-td>
            <vs-td :data="tr.location_name">{{ tr.location_name }}</vs-td>
            <vs-td>
              <vs-row vs-w="12">
                <div class="h-4 w-4 rounded-full mt-1 mr-2" :class="tr.screening_color"></div>
                {{tr.screening_id }} {{ tr.level_text }} {{ tr.screening_no }} {{ tr.symptom }}
              </vs-row>
            </vs-td>
            <vs-td :data="tr.reporter_tel">{{ tr.reporter_tel }}</vs-td>
            <vs-td :data="tr.operation_unit_name">{{ tr.operation_unit_name }}</vs-td>
            <vs-td>
              <vs-row vs-type="flex" vs-justify="center">
                <vs-col vs-w="12">
                  <feather-icon
                    icon="ImageIcon"
                    class="cursor-pointer w-6 h-6"
                    size="small"
                    @click="imageActive = true;"
                  ></feather-icon>
                </vs-col>
              </vs-row>
              <vs-popup class="holamundo" :title="$t('media_file')" :active.sync="imageActive">
                <vs-row>
                  <vs-col>
                    <label>{{$t('patient_img_1')}}</label>
                    <img
                      v-if="tr.patient_img1"
                      :src="'data:image/png;base64,'+tr.patient_img1"
                      alt="content-img"
                      class="responsive rounded-lg"
                    />
                  </vs-col>
                  <vs-divider />
                  <vs-col>
                    <label>{{$t('patient_img_2')}}</label>
                    <img
                      v-if="tr.patient_img2"
                      :src="'data:image/png;base64,'+tr.patient_img2"
                      alt="content-img"
                      class="responsive rounded-lg"
                    />
                  </vs-col>
                  <vs-divider />
                  <vs-col>
                    <label>{{$t('patient_img_3')}}</label>
                    <img
                      v-if="tr.patient_img3"
                      :src="'data:image/png;base64,'+tr.patient_img3"
                      alt="content-img"
                      class="responsive rounded-lg"
                    />
                  </vs-col>
                  <vs-divider />
                  <vs-col>
                    <label>{{$t('patient_img_4')}}</label>
                    <img
                      v-if="tr.patient_img4"
                      :src="'data:image/png;base64,'+tr.patient_img4"
                      alt="content-img"
                      class="responsive rounded-lg"
                    />
                  </vs-col>
                  <vs-divider />
                </vs-row>
              </vs-popup>
            </vs-td>
            <vs-td>
              <div class="vx-row">
                <div class="md:w-1/5">
                  <vx-tooltip :text="$t('reported')" position="left">
                    <div class="h-4 w-4 rounded-full bg-success"></div>
                  </vx-tooltip>
                </div>
                <div class="md:w-1/5">
                  <vx-tooltip :text="$t('screening')" position="left">
                    <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.main_symptom)"></div>
                  </vx-tooltip>
                </div>
                <div class="md:w-1/5">
                  <vx-tooltip :text="$t('command')" position="left">
                    <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.operating_unit_id)"></div>
                  </vx-tooltip>
                </div>
                <div class="md:w-1/5">
                  <vx-tooltip :text="$t('getjob')" position="left">
                    <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.operation_id)"></div>
                  </vx-tooltip>
                </div>
                <div class="md:w-1/5">
                  <vx-tooltip :text="$t('finish')" position="left">
                    <div class="h-4 w-4 rounded-full" :class="checkstatus(tr.cure_result)"></div>
                  </vx-tooltip>
                </div>
              </div>
            </vs-td>
            <vs-td>
              <vs-row vs-type="flex" vs-justify="center">
                <vs-col vs-w="12">
                  <feather-icon
                    icon="MapIcon"
                    class="cursor-pointer w-6 h-6"
                    size="small"
                    @click="focusMarker(tr.lat, tr.lon, tr.screening_lv)"
                  ></feather-icon>
                </vs-col>
              </vs-row>
            </vs-td>
            <vs-td>
              <vs-row vs-type="flex" vs-justify="center">
                <vs-col vs-w="12">
                  <feather-icon icon="EditIcon" class="cursor-pointer w-6 h-6" size="small"></feather-icon>
                </vs-col>
              </vs-row>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
    <vx-card>
      <div class="mt-3">
        <div class="vx-row">
          <vl-map
            :load-tiles-while-animating="true"
            :load-tiles-while-interacting="true"
            style="height: 400px"
          >
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

            <vl-layer-tile id="osm">
              <vl-source-osm></vl-source-osm>
            </vl-layer-tile>

            <vl-overlay
              :key="index"
              v-for="(marker,index) in markerArr"
              :id="'overlay'+index"
              :position="[marker.lon,marker.lat]"
            >
              <template slot-scope="scope">
                <div class="overlay-content">
                  <p v-if="false">{{scope}}</p>
                  <img
                    :src="require(`@/assets/marker/${marker.marker_name}.png`)"
                    alt="content-img"
                    style="width:50px;height:50px;margin-top:-50px;margin-left:-25px;"
                  />
                </div>
              </template>
            </vl-overlay>
          </vl-map>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import service from "@/service/service";
export default {
  components: {},
  data() {
    return {
      table_data: [
        {
          operation_id: "",
          reported_time: "",
          location_name: "",
          reporter_tel: "",
          operation_unit_name: ""
        }
      ],
      imageActive: false,
      zoom: 8,
      submitted: false,
      center: [100.6037284, 13.6768896],
      rotation: 0,
      isSelectCoordinate: false,
      markerArr: []
    };
  },
  methods: {
    checkstatus(value) {
      if (value == null || value == "") {
        return "gray";
      }
      return "bg-success";
    },
    coordinate(lat, lon) {
      return [lon, lat];
    },
    focusMarker(lat, lon, lv) {
      if (lat == undefined || lon == undefined) {
        this.$swal({
          title: "error",
          type: "error"
        });
      } else {
        console.log({ lat, lon });

        let marker_name = "";
        switch (lv) {
          case 1:
            marker_name = "red_marker";
            break;
          case 2:
            marker_name = "yellow_marker";
            break;
          case 3:
            marker_name = "green_marker";
            break;
          case 4:
            marker_name = "white_marker";
            break;
          case 5:
            marker_name = "black_marker";
            break;
          default:
            marker_name = "non_marker";
            break;
        }
        this.markerArr[{ marker_name, marker_name, lat: lat, lon: lon }];
        this.center = [lon, lat];
      }
    }
  },
  created() {
    service.postData("get_getjob", { operating_unit_id: "" }).then(result => {
      if (result.code) {
        this.$swal({
          title: $t("connection_error"),
          type: "error"
        });
      } else {
        this.table_data = result.data;
        this.markerArr = result.data
          .filter(x => x.lat != null || x.lon != null)
          .map(x => {
            switch (x.screening_lv) {
              case 1:
                x.marker_name = "red_marker";
                break;
              case 2:
                x.marker_name = "yellow_marker";
                break;
              case 3:
                x.marker_name = "green_marker";
                break;
              case 4:
                x.marker_name = "white_marker";
                break;
              case 5:
                x.marker_name = "black_marker";
                break;
              default:
                x.marker_name = "non_marker";
                break;
            }
            return { lat: x.lat, lon: x.lon, marker_name: x.marker_name };
          });
        console.log(this.markerArr);
      }
    });
  }
};
</script>

<style>
.error {
  color: red;
  font-size: 80%;
}
.gray {
  background-color: #948d8d;
}
</style>
