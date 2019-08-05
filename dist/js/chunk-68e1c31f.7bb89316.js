(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68e1c31f"],{3060:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.renderComponent?s("div",{staticClass:"vx-col w-full mb-base"},[s("edit-hospital",{attrs:{isSidebarActive:t.addNewDataSidebar,newHospital:t.hospital},on:{closeSidebar:function(e){t.addNewDataSidebar=!1}}}),s("vx-card",[s("vs-tabs",[s("vs-tab",{attrs:{label:t.$t("hospital_data")}},[s("div",{staticClass:"mt-3"},[s("vs-table",{attrs:{pagination:"","max-items":"10",search:"",data:t.hospitals},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",{attrs:{data:e.hospital_id}},[t._v("\n                        "+t._s(e.hospital_id)+"\n                      ")]),s("vs-td",{attrs:{data:e.hospital_name}},[t._v("\n                        "+t._s(e.hospital_name)+"\n                      ")]),s("vs-td",{attrs:{data:e.type_name}},[t._v("\n                        "+t._s(e.type_name)+"\n                      ")]),s("vs-td",{attrs:{data:e.tel}},[t._v("\n                        "+t._s(e.tel)+"\n                      ")]),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"SearchIcon",size:"small"}})],1),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"EditIcon",size:"small"},on:{click:function(a){t.hospital=e,t.addNewDataSidebar=!0}}})],1),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"Trash2Icon",size:"small"},on:{click:function(a){return t.delete_hospital(e)}}})],1)],1)})}}],null,!1,3800933103)},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"hospital_id"}},[t._v(t._s(t.$t("id")))]),s("vs-th",{attrs:{"sort-key":"hospital_name"}},[t._v(t._s(t.$t("hospital_name")))]),s("vs-th",{attrs:{"sort-key":"type_name"}},[t._v(t._s(t.$t("type_name")))]),s("vs-th",{attrs:{"sort-key":"tel"}},[t._v(t._s(t.$t("tel")))]),s("vs-th",[t._v(t._s(t.$t("view")))]),s("vs-th",[t._v(t._s(t.$t("edit")))]),s("vs-th",[t._v(t._s(t.$t("delete")))])],1)],2)],1)]),s("vs-tab",{attrs:{label:t.$t("hospital_register")}},[s("div",{staticClass:"mt-3"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("hospital_name"))+" "),s("span",{staticClass:"require"},[t._v("*")])]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.hospital_name},model:{value:t.newHospital.hospital_name,callback:function(e){t.$set(t.newHospital,"hospital_name",e)},expression:"newHospital.hospital_name"}}),t.invalid.hospital_name?s("div",{staticClass:"error"},[t._v(t._s(t.$t("hospital_name_alert")))]):t._e()],1),s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("hospital_department"))+" ")]),s("vs-select",{staticClass:"w-full",model:{value:t.newHospital.under_status,callback:function(e){t.$set(t.newHospital,"under_status",e)},expression:"newHospital.under_status"}},t._l(t.under_status,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("hospital_type")))]),s("vs-select",{staticClass:"w-full",model:{value:t.newHospital.hospital_type,callback:function(e){t.$set(t.newHospital,"hospital_type",e)},expression:"newHospital.hospital_type"}},t._l(t.hospital_types,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("bed_count"))+"  "),s("span",{staticClass:"require"},[t._v("*")])]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.bed_count},model:{value:t.newHospital.bed_count,callback:function(e){t.$set(t.newHospital,"bed_count",e)},expression:"newHospital.bed_count"}}),t.invalid.bed_count?s("div",{staticClass:"error"},[t._v(t._s(t.$t("bed_count_alert")))]):t._e()],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("potential")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.newHospital.potential,callback:function(e){t.$set(t.newHospital,"potential",e)},expression:"newHospital.potential"}})],1),s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("tel")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.newHospital.tel,callback:function(e){t.$set(t.newHospital,"tel",e)},expression:"newHospital.tel"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[s("label",[t._v(t._s(t.$t("address")))]),s("vs-input",{staticClass:"w-full",model:{value:t.newHospital.address,callback:function(e){t.$set(t.newHospital,"address",e)},expression:"newHospital.address"}})],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("province")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.province,callback:function(e){t.$set(t.newHospital,"province",e)},expression:"newHospital.province"}},t._l(t.province_view,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("amphur")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.amphur,callback:function(e){t.$set(t.newHospital,"amphur",e)},expression:"newHospital.amphur"}},t._l(t.amphurs,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("tambon")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.tambon,callback:function(e){t.$set(t.newHospital,"tambon",e)},expression:"newHospital.tambon"}},t._l(t.tambon_view,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("postcode")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.postcode,callback:function(e){t.$set(t.newHospital,"postcode",e)},expression:"newHospital.postcode"}},t._l(t.postcodes,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t,text:t}})}),1)],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/4 w-full mt-5"},[s("label",[t._v(t._s(t.$t("lat")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",disabled:""},model:{value:t.newHospital.lat,callback:function(e){t.$set(t.newHospital,"lat",e)},expression:"newHospital.lat"}})],1),s("div",{staticClass:"vx-col md:w-1/4 w-full mt-5"},[s("label",[t._v(t._s(t.$t("tel")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",disabled:""},model:{value:t.newHospital.lon,callback:function(e){t.$set(t.newHospital,"lon",e)},expression:"newHospital.lon"}})],1)])]),s("div",{staticClass:"mt-3"},[s("div",{staticClass:"vx-row"},[s("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0},on:{click:function(e){return t.myfunc(e)}}},[s("vl-view",{attrs:{zoom:t.zoom,center:t.center,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:rotation":function(e){t.rotation=e}}}),s("vl-layer-tile",{attrs:{id:"osm"}},[s("vl-source-osm")],1),t.isSelectCoordinate?s("vl-overlay",{attrs:{id:"overlay",position:t.overlayCoordinate},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"overlay-content"},[t._e(),s("img",{staticStyle:{width:"50px",height:"50px","margin-top":"-50px","margin-left":"-25px"},attrs:{src:a("3b84"),alt:"content-img"}})])]}}],null,!1,4127816944)}):t._e()],1)],1)]),s("div",{staticClass:"mt-3"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full mt-5"},[s("vs-button",{attrs:{color:"danger",type:"border"}},[t._v(t._s(t.$t("cancel")))]),s("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container",attrs:{id:"button-with-loading",vslor:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("save")))])],1)])])])],1)],1)],1):t._e()},n=[],i=(a("a481"),a("fa33")),o=a("67cf"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[s("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[s("h4",[t._v(t._s(t.$t("edit_data")))]),s("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),s("vs-divider",{staticClass:"mb-0"}),s("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:t.settings}},[s("div",{staticClass:"vx-col w-full mb-base",staticStyle:{padding:"20px"}},[s("div",{staticClass:"mt-3"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("hospital_name"))+" "),s("span",{staticClass:"require"},[t._v("*")])]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.hospital_name},model:{value:t.newHospital.hospital_name,callback:function(e){t.$set(t.newHospital,"hospital_name",e)},expression:"newHospital.hospital_name"}}),t.invalid.hospital_name?s("div",{staticClass:"error"},[t._v(t._s(t.$t("hospital_name_alert")))]):t._e()],1),s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("hospital_department"))+" ")]),s("vs-select",{staticClass:"w-full",model:{value:t.newHospital.under_status,callback:function(e){t.$set(t.newHospital,"under_status",e)},expression:"newHospital.under_status"}},t._l(t.under_status,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("hospital_type")))]),s("vs-select",{staticClass:"w-full",model:{value:t.newHospital.hospital_type,callback:function(e){t.$set(t.newHospital,"hospital_type",e)},expression:"newHospital.hospital_type"}},t._l(t.hospital_types,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("bed_count"))+"  "),s("span",{staticClass:"require"},[t._v("*")])]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.bed_count},model:{value:t.newHospital.bed_count,callback:function(e){t.$set(t.newHospital,"bed_count",e)},expression:"newHospital.bed_count"}}),t.invalid.bed_count?s("div",{staticClass:"error"},[t._v(t._s(t.$t("bed_count_alert")))]):t._e()],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("potential")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.newHospital.potential,callback:function(e){t.$set(t.newHospital,"potential",e)},expression:"newHospital.potential"}})],1),s("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[s("label",[t._v(t._s(t.$t("tel")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.newHospital.tel,callback:function(e){t.$set(t.newHospital,"tel",e)},expression:"newHospital.tel"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[s("label",[t._v(t._s(t.$t("address")))]),s("vs-input",{staticClass:"w-full",model:{value:t.newHospital.address,callback:function(e){t.$set(t.newHospital,"address",e)},expression:"newHospital.address"}})],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("province")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.province,callback:function(e){t.$set(t.newHospital,"province",e)},expression:"newHospital.province"}},t._l(t.province_view,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("amphur")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.amphur,callback:function(e){t.$set(t.newHospital,"amphur",e)},expression:"newHospital.amphur"}},t._l(t.amphurs,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("tambon")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.tambon,callback:function(e){t.$set(t.newHospital,"tambon",e)},expression:"newHospital.tambon"}},t._l(t.tambon_view,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),s("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[s("label",[t._v(t._s(t.$t("postcode")))]),s("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.newHospital.postcode,callback:function(e){t.$set(t.newHospital,"postcode",e)},expression:"newHospital.postcode"}},t._l(t.postcodes,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t,text:t}})}),1)],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/4 w-full mt-5"},[s("label",[t._v(t._s(t.$t("lat")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",disabled:""},model:{value:t.newHospital.lat,callback:function(e){t.$set(t.newHospital,"lat",e)},expression:"newHospital.lat"}})],1),s("div",{staticClass:"vx-col md:w-1/4 w-full mt-5"},[s("label",[t._v(t._s(t.$t("tel")))]),s("vs-input",{staticClass:"w-full",attrs:{type:"text",disabled:""},model:{value:t.newHospital.lon,callback:function(e){t.$set(t.newHospital,"lon",e)},expression:"newHospital.lon"}})],1)])]),s("div",{staticClass:"mt-3"},[t.renderComponent?s("div",{staticClass:"vx-row"},[s("vl-map",{staticStyle:{height:"400px"},attrs:{"load-tiles-while-animating":!0,"load-tiles-while-interacting":!0},on:{click:function(e){return t.myfunc(e)}}},[s("vl-view",{attrs:{zoom:t.zoom,center:t.center,rotation:t.rotation},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},"update:rotation":function(e){t.rotation=e}}}),s("vl-layer-tile",{attrs:{id:"osm"}},[s("vl-source-osm")],1),t.isSelectCoordinate?s("vl-overlay",{attrs:{id:"overlay",position:t.overlayCoordinate},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"overlay-content"},[t._e(),s("img",{staticStyle:{width:"50px",height:"50px","margin-top":"-50px","margin-left":"-25px"},attrs:{src:a("3b84"),alt:"content-img"}})])]}}],null,!1,4127816944)}):t._e()],1)],1):t._e()])])]),s("div",{staticClass:"flex flex-wrap p-6",attrs:{slot:"footer"},slot:"footer"},[s("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container",attrs:{id:"button-with-loading",vslor:"primary"},on:{click:t.save}},[t._v("\n     "+t._s(t.$t("save"))+"\n     ")]),s("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){t.isSidebarActiveLocal=!1}}},[t._v("Cancel")])],1)],1)},r=[],c=a("9d63"),u=a.n(c),p=(a("5118"),{props:{isSidebarActive:{type:Boolean,required:!0},newHospital:{type:Object,required:!0}},data:function(){return{zoom:8,submitted:!1,center:[100.6037284,13.6768896],rotation:0,isSelectCoordinate:!1,overlayCoordinate:[],hospital:{},hospitals:[],renderComponent:!0,locations:[],tambons:[],provinces:[],under_status:o["a"].under_status,hospital_types:o["a"].hospital_types,addNewDataSidebar:!1,settings:{maxScrollbarLength:60,wheelSpeed:.6}}},components:{Datepicker:i["a"],VuePerfectScrollbar:u.a},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||(this.$emit("closeSidebar"),this.initValues())}},lang:function(){return this.$i18n.locale},invalid:function(){var t=this,e=function(e){return""==t.newHospital[e]&&t.submitted};return{hospital_name:e("hospital_name"),bed_count:e("bed_count")}},isInvalid:function(){return this.invalid.hospital_name||this.invalid.bed_count},amphurs:function(){var t=this,e=this.locations.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_amphur,text:e.th_amphur}):JSON.stringify({value:e.en_amphur,text:e.en_amphur})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},province_view:function(){return"th"==this.$i18n.locale?this.provinces.map(function(t){return{value:t.en_province,text:t.th_province}}):this.provinces.map(function(t){return{value:t.en_province,text:t.en_province}})},tambon_view:function(){var t=this,e=this.tambons.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_tambon,text:e.th_tambon}):JSON.stringify({value:e.en_tambon,text:e.en_tambon})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},postcodes:function(){var t=this;return this.locations.filter(function(e){return e.en_amphur==t.newHospital.amphur&&e.en_tambon==t.newHospital.tambon}).map(function(t){return t.postcode})},now_province:function(){return this.newHospital.province},now_amphur:function(){return this.newHospital.amphur}},created:function(){var t=this;o["a"].getExternalData("get_province").then(function(e){console.log(e),e.code?t.$swal(e.message,"","error"):(t.provinces=JSON.parse(JSON.stringify(e.data).replace(/\:null/gi,':""')),console.log("province",t.provinces))},function(e){t.$swal("connection error","","error"),console.log(e)})},methods:{myfunc:function(t){console.log(t),this.overlayCoordinate=t.coordinate,this.newHospital.lon=this.overlayCoordinate[0],this.newHospital.lat=this.overlayCoordinate[1],this.isSelectCoordinate=!0},forceRerender:function(){var t=this;this.renderComponent=!1,this.$nextTick(function(){t.renderComponent=!0})},save:function(){var t=this;this.submitted=!0,this.isInvalid||(this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:"#button-with-loading",scale:.45}),o["a"].postData("update_hospital",this.newHospital).then(function(e){t.$vs.loading.close("#button-with-loading > .con-vs-loading"),e.code?(t.isSidebarActive=!1,t.$swal(e.message,"","error").then(function(e){t.isSidebarActive=!0})):(t.submitted=!1,t.isSidebarActiveLocal=!1,t.forceRerender())},function(e){t.isSidebarActive=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading"),t.$swal("connection error","","error").then(function(e){t.isSidebarActive=!0})}))}},watch:{isSidebarActive:function(t){this.forceRerender()},now_province:function(t){var e=this;o["a"].getExternalData("/get_location?province="+t).then(function(t){t.code||(e.locations=t.data)},function(t){console.log(t)})},now_amphur:function(t){this.tambons=this.locations.filter(function(e){return e.en_amphur==t})}}}),d=p,v=(a("7ea8"),a("3131"),a("2877")),m=Object(v["a"])(d,l,r,!1,null,"2ef5aa69",null),_=m.exports,f={components:{EditHospital:_,Datepicker:i["a"]},data:function(){return{zoom:8,submitted:!1,center:[100.6037284,13.6768896],rotation:0,isSelectCoordinate:!1,overlayCoordinate:[],hospital:{},hospitals:[],renderComponent:!0,locations:[],tambons:[],provinces:[],under_status:o["a"].under_status,hospital_types:o["a"].hospital_types,newHospital:{},addNewDataSidebar:!1,tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"]}},computed:{locale:function(){return this.$i18n.locale},invalid:function(){var t=this,e=function(e){return""==t.newHospital[e]&&t.submitted};return{hospital_name:e("hospital_name"),bed_count:e("bed_count")}},isInvalid:function(){return this.invalid.hospital_name||this.invalid.bed_count},amphurs:function(){var t=this,e=this.locations.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_amphur,text:e.th_amphur}):JSON.stringify({value:e.en_amphur,text:e.en_amphur})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},province_view:function(){return"th"==this.$i18n.locale?this.provinces.map(function(t){return{value:t.en_province,text:t.th_province}}):this.provinces.map(function(t){return{value:t.en_province,text:t.en_province}})},tambon_view:function(){var t=this,e=this.tambons.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_tambon,text:e.th_tambon}):JSON.stringify({value:e.en_tambon,text:e.en_tambon})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},postcodes:function(){var t=this;return this.locations.filter(function(e){return e.en_amphur==t.newHospital.amphur&&e.en_tambon==t.newHospital.tambon}).map(function(t){return t.postcode})},now_province:function(){return this.newHospital.province},now_amphur:function(){return this.newHospital.amphur}},created:function(){var t=this;this.getData(),this.initValue(),o["a"].getExternalData("get_province").then(function(e){console.log(e),e.code?t.$swal(e.message,"","error"):(t.provinces=JSON.parse(JSON.stringify(e.data).replace(/\:null/gi,':""')),console.log("province",t.provinces))},function(e){t.$swal("connection error","","error"),console.log(e)})},methods:{initValue:function(){this.newHospital=JSON.parse('{"hospital_id":"","hospital_name":"","under_status":"","hospital_type":"","bed_count":"","potential":"","tel":"","address":"","tambon":"","amphur":"","province":"","postcode":"","lat":"","lon":""}')},getData:function(){var t=this;o["a"].getData("/get_hospital_master").then(function(e){console.log(e),e.code||(t.hospitals=JSON.parse(JSON.stringify(e.data).replace(/\:null/gi,':""')),t.hospitals=t.hospitals.map(function(e){var a=t.hospital_types.filter(function(t){return t.value==e.hospital_type});return a.length>0?e.type_name=a[0].text:e.type_name="",e}))})},delete_hospital:function(t){var e=this;this.$swal({title:this.$t("delete_hospital_title"),text:this.$t("delete_text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("cancel"),confirmButtonText:this.$t("confirm_delete"),showLoaderOnConfirm:!0,preConfirm:function(){return o["a"].deleteData("delete_hospital?hospital_id=".concat(t.hospital_id)).then(function(t){return t},function(t){return{code:!0,message:"connection error"}})}}).then(function(t){t.value&&(t.value.code?e.$swal(t.value.message,"","error"):e.$swal(e.$t("deleted"),"","success").then(function(t){e.getData()}))})},myfunc:function(t){console.log(t),this.overlayCoordinate=t.coordinate,this.newHospital.lon=this.overlayCoordinate[0],this.newHospital.lat=this.overlayCoordinate[1],this.isSelectCoordinate=!0},forceRerender:function(){var t=this;this.renderComponent=!1,this.$nextTick(function(){t.renderComponent=!0})},save:function(){var t=this;this.submitted=!0,this.isInvalid||(this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:"#button-with-loading",scale:.45}),o["a"].postData("add_hospital",this.newHospital).then(function(e){t.$vs.loading.close("#button-with-loading > .con-vs-loading"),e.code?t.$swal(e.message,"","error"):(t.submitted=!1,t.initValue(),t.getData(),t.forceRerender())},function(e){t.$vs.loading.close("#button-with-loading > .con-vs-loading"),t.$swal("connection error","","error")}))}},watch:{addNewDataSidebar:function(t){0==t&&this.getData()},locale:function(t){this.forceRerender()},now_province:function(t){var e=this;o["a"].getExternalData("/get_location?province="+t).then(function(t){t.code||(e.locations=t.data)},function(t){console.log(t)})},now_amphur:function(t){this.tambons=this.locations.filter(function(e){return e.en_amphur==t})}}},h=f,w=(a("e595"),Object(v["a"])(h,s,n,!1,null,"74993cf6",null));e["default"]=w.exports},3131:function(t,e,a){"use strict";var s=a("d530"),n=a.n(s);n.a},"5ae3":function(t,e,a){},"6e94":function(t,e,a){},"7ea8":function(t,e,a){"use strict";var s=a("6e94"),n=a.n(s);n.a},d530:function(t,e,a){},e595:function(t,e,a){"use strict";var s=a("5ae3"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-68e1c31f.7bb89316.js.map