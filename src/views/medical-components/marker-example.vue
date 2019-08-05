<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
    <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-overlay :id="'overlay'+index" :position="item.overlayCoordinate" :key="index" v-for="(item,index) in marker">
      <template slot-scope="scope">
        <span v-if="false">{{scope}}</span>
        <img :src="require(`@/assets/marker.png`)" alt="content-img" style="width:50px;height:50px;margin-top:-50px;margin-left:-25px;">
      </template>
    </vl-overlay>
  </vl-map>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 8,
        center: [100.6037284, 13.6768896],
        rotation: 0,
        rotation: 0,
        marker:[
          {name:"df",overlayCoordinate: [100.6037284, 13.9037284]},
          {name:"dfdsaf",overlayCoordinate:[100.6037284, 13.6768896]},
           {name:"dfdsaf",overlayCoordinate: [101.6037284, 13.6768896]},
        ]
      }
    },
  }
</script>
