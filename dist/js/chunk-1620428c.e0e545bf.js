(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1620428c"],{2854:function(t,e,a){},"2fda":function(t,e,a){"use strict";var s=a("2854"),i=a.n(s);i.a},"332b":function(t,e,a){},"62ca":function(t,e,a){"use strict";var s=a("332b"),i=a.n(s);i.a},"7fa8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v(t._s(t.$t("edit_data")))]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a("VuePerfectScrollbar",{staticClass:"scroll-area--data-list-add-new pt-4 pb-6",attrs:{settings:t.settings}},[a("div",{staticClass:"vx-col w-full mb-base",staticStyle:{padding:"20px"}},[a("div",{staticClass:"mt-3"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("possition"))+" "),a("span",{staticClass:"require"},[t._v("*")])]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",danger:t.invalid.position},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},t._l(t.positions_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1),t.invalid.position?a("div",{staticClass:"error"},[t._v(t._s(t.$t("position_alert")))]):t._e()],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("department"))+" "),a("span",{staticClass:"require"},[t._v("*")])]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",danger:t.invalid.department},model:{value:t.department,callback:function(e){t.department=e},expression:"department"}},t._l(t.departments_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1),t.invalid.department?a("div",{staticClass:"error"},[t._v(t._s(t.$t("department_alert")))]):t._e()],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("prefix"))+" "),a("span",{staticClass:"require"},[t._v("*")])]),a("vs-select",{staticClass:"w-full",attrs:{danger:t.invalid.prefix},model:{value:t.prefix,callback:function(e){t.prefix=e},expression:"prefix"}},t._l(t.prefixs_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1),t.invalid.prefix?a("div",{staticClass:"error"},[t._v(t._s(t.$t("prefix_alert")))]):t._e()],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("name"))+" "),a("span",{staticClass:"require"},[t._v("*")])]),a("vs-input",{staticClass:"w-full",attrs:{danger:t.invalid.name},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t.invalid.name?a("div",{staticClass:"error"},[t._v(t._s(t.$t("name_alert")))]):t._e()],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("surname"))+" "),a("span",{staticClass:"require"},[t._v("*")])]),a("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.surname},model:{value:t.surname,callback:function(e){t.surname=e},expression:"surname"}}),t.invalid.surname?a("div",{staticClass:"error"},[t._v(t._s(t.$t("surname_alert")))]):t._e()],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("card_id"))+" "),a("span",{staticClass:"require"},[t._v("*")])]),a("vs-input",{staticClass:"w-full",attrs:{danger:t.invalid.card_id},model:{value:t.card_id,callback:function(e){t.card_id=e},expression:"card_id"}}),t.invalid.card_id?a("div",{staticClass:"error"},[t._v(t._s(t.$t("card_id_alert")))]):t._e()],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("dob"))+"  "),a("span",{staticClass:"require"},[t._v("*")])]),a("datepicker",{staticClass:"w-full",class:{danger:t.invalid.dob},staticStyle:{width:"100%"},attrs:{format:"yyyy-MM-dd"},model:{value:t.dob,callback:function(e){t.dob=e},expression:"dob"}}),t.invalid.dob?a("div",{staticClass:"error"},[t._v(t._s(t.$t("dob_alert")))]):t._e()],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("religion")))]),a("vs-select",{staticClass:"w-full",model:{value:t.religion,callback:function(e){t.religion=e},expression:"religion"}},t._l(t.religion_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("nationality")))]),a("vs-input",{staticClass:"w-full",model:{value:t.nationality,callback:function(e){t.nationality=e},expression:"nationality"}})],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("blood_group")))]),a("vs-select",{staticClass:"w-full",model:{value:t.blood_group,callback:function(e){t.blood_group=e},expression:"blood_group"}},t._l(t.blood_groups,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("career")))]),a("vs-input",{staticClass:"w-full",model:{value:t.career,callback:function(e){t.career=e},expression:"career"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",[t._v(t._s(t.$t("tel")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-5"},[t._v(t._s(t.$t("current_address")))])]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("address")))]),a("vs-input",{staticClass:"w-full",model:{value:t.now_address,callback:function(e){t.now_address=e},expression:"now_address"}})],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("province")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.now_province,callback:function(e){t.now_province=e},expression:"now_province"}},t._l(t.province_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("amphur")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.now_amphur,callback:function(e){t.now_amphur=e},expression:"now_amphur"}},t._l(t.now_amphurs,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("tambon")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.now_tambon,callback:function(e){t.now_tambon=e},expression:"now_tambon"}},t._l(t.now_tambon_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("postcode")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.now_postcode,callback:function(e){t.now_postcode=e},expression:"now_postcode"}},t._l(t.now_postcodes,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t,text:t}})}),1)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mt-5"},[t._v(t._s(t.$t("card_address")))])]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("address")))]),a("vs-input",{staticClass:"w-full",model:{value:t.card_address,callback:function(e){t.card_address=e},expression:"card_address"}})],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("province")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.card_province,callback:function(e){t.card_province=e},expression:"card_province"}},t._l(t.province_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("amphur")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.card_amphur,callback:function(e){t.card_amphur=e},expression:"card_amphur"}},t._l(t.amphurs,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("amphur")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.card_tambon,callback:function(e){t.card_tambon=e},expression:"card_tambon"}},t._l(t.card_tambon_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("postcode")))]),a("vs-select",{staticClass:"w-full",attrs:{autocomplete:""},model:{value:t.card_postcode,callback:function(e){t.card_postcode=e},expression:"card_postcode"}},t._l(t.card_postcodes,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t,text:t}})}),1)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("educational_background")))]),a("vs-select",{staticClass:"w-full",model:{value:t.educational_background,callback:function(e){t.educational_background=e},expression:"educational_background"}},t._l(t.educational_background_view,function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.value,text:t.text}})}),1)],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("university")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.university,callback:function(e){t.university=e},expression:"university"}})],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("graduate_year")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.graduate_year},model:{value:t.graduate_year,callback:function(e){t.graduate_year=e},expression:"graduate_year"}}),t.invalid.graduate_year?a("div",{staticClass:"error"},[t._v("\n                        "+t._s(t.$t("year_alert"))+"\n                      ")]):t._e()],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("educational_backgroundEMS")))]),a("vs-input",{staticClass:"w-full",model:{value:t.educational_backgroundEMS,callback:function(e){t.educational_backgroundEMS=e},expression:"educational_backgroundEMS"}})],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("universityEMS")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.universityEMS,callback:function(e){t.universityEMS=e},expression:"universityEMS"}})],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("graduate_yearEMS")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.graduate_yearEMS},model:{value:t.graduate_yearEMS,callback:function(e){t.graduate_yearEMS=e},expression:"graduate_yearEMS"}}),t.invalid.graduate_yearEMS?a("div",{staticClass:"error"},[t._v("\n                        "+t._s(t.$t("year_alert"))+"\n                      ")]):t._e()],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("trainOther")))]),a("vs-input",{staticClass:"w-full",model:{value:t.trainOther,callback:function(e){t.trainOther=e},expression:"trainOther"}})],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("skill")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.skill,callback:function(e){t.skill=e},expression:"skill"}})],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("register_year")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text",danger:t.invalid.register_year},model:{value:t.register_year,callback:function(e){t.register_year=e},expression:"register_year"}}),t.invalid.register_year?a("div",{staticClass:"error"},[t._v("\n                        "+t._s(t.$t("year_alert"))+"\n                      ")]):t._e()],1),a("div",{staticClass:"vx-col md:w-1/6 w-full mt-5"},[a("label",[t._v(t._s(t.$t("register_result")))]),a("vs-input",{staticClass:"w-full",attrs:{type:"text"},model:{value:t.register_result,callback:function(e){t.register_result=e},expression:"register_result"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("label",[t._v(t._s(t.$t("image")))]),a("vs-input",{ref:"myFiles",staticClass:"w-full",attrs:{type:"file",id:"file"},on:{change:t.onFileChange}})],1),a("div",{staticClass:"vx-col md:w-1/3 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{type:"text",label:t.$t("remark")},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-vol md:w-1/6 w-full mt-5"},[a("img",{staticClass:"responsive rounded-lg",attrs:{src:t.url,alt:""}})])])])])]),a("div",{staticClass:"flex flex-wrap p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container",attrs:{id:"button-with-loading",vslor:"primary"},on:{click:t.save}},[t._v("\n     "+t._s(t.$t("save"))+"\n     ")]),a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){t.isSidebarActiveLocal=!1}}},[t._v("Cancel")])],1)],1)},i=[],r=(a("7f7f"),a("a322")),n=a("9d63"),l=a.n(n),o=a("fa33"),c=a("67cf"),u=a("5118"),d={props:{isSidebarActive:{type:Boolean,required:!0},operator:{type:Object,required:!0}},data:function(){var t;return t={edit_operator:{},prefixs:[{id:1,th:"นาย",en:"Mr"},{id:2,th:"นางสาว",en:"Miss"}],religions:[{id:1,th:"ศาสนาพุทธ",en:"Buddhism"},{id:2,th:"ศาสนาอิสลาม",en:"Islam"},{id:3,th:"ศาสนาฮินดู",en:"Hindu"},{id:4,th:"ศาสนาคริสต์",en:"Christ"},{id:5,th:"อื่นๆ",en:"Other"}],education_bgs:[{id:1,th:"ปริญญาตรี",en:"Bachelor Degree"},{id:2,th:"ปริญญาโท",en:"Master Degree"},{id:3,th:"ปริญญาเอก",en:"Doctor of Philosophy"}],blood_groups:[{value:1,text:"A"},{value:2,text:"B"},{value:3,text:"O"},{value:4,text:"AB"},{value:5,text:"A+"},{value:6,text:"B+"},{value:7,text:"O+"},{value:8,text:"AB+"},{value:9,text:"A-"},{value:10,text:"B-"},{value:11,text:"O-"},{value:12,text:"AB-"}],addNewDataSidebar:!1,image:"",x:this.operator,submitted:!1,selected:[],locations:[],now_locations:[],now_tambons:[],card_tambons:[],departments:[],positions:[],locale:this.$i18n.locale,renderComponent:!0,department:"",position:"",prefix:"",name:"",surname:"",card_id:"",dob:"",religion:"",nationality:"",blood_group:"",career:"",tel:"",now_address:"",now_tambon:"",now_amphur:"",now_province:"",now_postcode:"",card_address:"",card_tambon:"",card_amphur:"",card_province:"",card_postcode:"",educational_background:"",university:"",graduate_year:"",educational_backgroundEMS:"",universityEMS:"",graduate_yearEMS:"",trainOther:"",skill:"",register_year:"",register_result:""},Object(r["a"])(t,"image",""),Object(r["a"])(t,"remark",""),Object(r["a"])(t,"settings",{maxScrollbarLength:60,wheelSpeed:.6}),Object(r["a"])(t,"users",[]),Object(r["a"])(t,"provinces",[]),Object(r["a"])(t,"operators",[]),Object(r["a"])(t,"settings",{maxScrollbarLength:60,wheelSpeed:.6}),t},components:{Datepicker:o["a"],VuePerfectScrollbar:l.a},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||(this.$emit("closeSidebar"),this.initValues())}},lang:function(){return this.$i18n.locale},province_view:function(){return"th"==this.$i18n.locale?this.provinces.map(function(t){return{value:t.en_province,text:t.th_province}}):this.provinces.map(function(t){return{value:t.en_province,text:t.en_province}})},amphurs:function(){var t=this,e=this.locations.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_amphur,text:e.th_amphur}):JSON.stringify({value:e.en_amphur,text:e.en_amphur})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},now_amphurs:function(){var t=this,e=this.now_locations.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_amphur,text:e.th_amphur}):JSON.stringify({value:e.en_amphur,text:e.en_amphur})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},card_tambon_view:function(){var t=this,e=this.card_tambons.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_tambon,text:e.th_tambon}):JSON.stringify({value:e.en_tambon,text:e.en_tambon})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},now_tambon_view:function(){var t=this,e=this.now_tambons.map(function(e){return"th"==t.$i18n.locale?JSON.stringify({value:e.en_tambon,text:e.th_tambon}):JSON.stringify({value:e.en_tambon,text:e.en_tambon})});return e.filter(function(t,e,a){return a.indexOf(t)==e}).map(function(t){return JSON.parse(t)})},now_postcodes:function(){var t=this;return this.now_locations.filter(function(e){return e.en_amphur==t.now_amphur&&e.en_tambon==t.now_tambon}).map(function(t){return t.postcode})},card_postcodes:function(){var t=this;return this.locations.filter(function(e){return e.en_amphur==t.card_amphur&&e.en_tambon==t.card_tambon}).map(function(t){return t.postcode})},positions_view:function(){var t=this;return this.positions.map(function(e){return t.$i18n.locale,{value:e.position_id,text:e.th_name}})},departments_view:function(){return this.departments.map(function(t){return{value:t.operating_unit_id,text:t.operating_unit_name}})},prefixs_view:function(){var t=this;return this.prefixs.map(function(e){return"th"==t.$i18n.locale?{value:e.id,text:e.th}:{value:e.id,text:e.en}})},religion_view:function(){var t=this;return this.religions.map(function(e){return"th"==t.$i18n.locale?{value:e.id,text:e.th}:{value:e.id,text:e.en}})},educational_background_view:function(){var t=this;return this.education_bgs.map(function(e){return"th"==t.$i18n.locale?{value:e.id,text:e.th}:{value:e.id,text:e.en}})},invalid:function(){var t=this,e=function(e){return!(!t.submitted||""==t[e]||4==t[e].length)&&(!parseInt(t[e])||4!=t[e].length)};return{position:this.submitted&&""==this.position,department:this.submitted&&""==this.department,prefix:this.submitted&&""==this.prefix,name:this.submitted&&""==this.name,surname:this.submitted&&""==this.surname,card_id:this.submitted&&""==this.card_id,dob:this.submitted&&""==this.dob,graduate_year:e("graduate_year"),graduate_yearEMS:e("graduate_yearEMS"),register_year:e("register_year")}},isInvalid:function(){var t=this.invalid;return t.position||t.department||t.prefix||t.name||t.surname||t.card_id||t.dob||t.graduate_year||t.graduate_yearEMS||t.register_year},url:function(){return"data:image/png;base64,"+this.image}},created:function(){var t=this;console.log(this.operator),c["a"].getExternalData("get_province").then(function(e){console.log(e),e.code?t.$swal(e.message,"","error"):t.provinces=e.data},function(e){t.$swal("connection error","","error"),console.log(e)}),c["a"].getData("get_position").then(function(e){e.code?t.$swal(e.message,"","error"):t.positions=e.data},function(e){t.$swal(result.message,"","error")}),c["a"].getData("get_operating").then(function(e){e.code?t.$swal(e.message,"","error"):t.departments=e.data},function(e){t.$swal(result.message,"","error")})},methods:{openLoadingContained:function(){},initValues:function(){this.name="",this.category="audio",this.order_status="pending",this.price=""},save:function(){var t=this;if(this.submitted=!0,!this.isInvalid){this.$vs.loading({background:this.backgroundLoading,color:this.colorLoading,container:"#button-with-loading",scale:.45});var e={department:this.department,position:this.position,name_prefix:this.prefix,name:this.name,surname:this.surname,card_id:this.card_id,birth_date:this.dob,religion:this.religion,race:this.nationality,blood_type:this.blood_group,career:this.career,contact_no:this.tel,now_address:this.now_address,now_tambon:this.now_tambon,now_amphur:this.now_amphur,now_province:this.now_province,now_postcode:this.now_postcode,card_address:this.card_address,card_tambon:this.card_tambon,card_amphur:this.card_amphur,card_province:this.card_province,card_postcode:this.card_postcode,education_bg:this.educational_background,university:this.university,graduation_year:this.graduate_year,ems_lv:this.educational_backgroundEMS,ems_name:this.universityEMS,ems_year:this.graduate_yearEMS,training_skill:this.trainOther,expert_skill:this.skill,register_year:this.register_year,register_result:this.register_result,img:this.image,remark:this.remark,operator_id:this.operator.operator_id};c["a"].postData("/update_operator",e).then(function(e){Object(u["setTimeout"])(function(){t.$vs.loading.close("#button-with-loading > .con-vs-loading"),e.code?(t.isSidebarActiveLocal=!1,t.$swal(e.message,"","error").then(function(e){t.isSidebarActive=!0})):(t.addNewDataSidebar=!1,t.$emit("closeSidebar"))},500),console.log(e)},function(e){t.isInvalid=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading"),t.$swal("connection error","","error").then(function(e){t.isSidebarActive=!0}),console.log(e)})}},forceRerender:function(){var t=this;this.renderComponent=!1,this.$nextTick(function(){t.renderComponent=!0})},onFileChange:function(t){var e=this,a=t.target.files[0];console.log(this.url);var s=new FileReader;s.onload=function(t){console.log(t.target.result);var a=t.target.result,s=a.indexOf("base64,");console.log(s),e.url=a,e.image=a.substring(s+7,a.length)},s.readAsDataURL(a),console.log(t)}},watch:{operator:function(t){"{}"!=JSON.stringify(t)&&(this.department=t.operating_unit_id,this.position=t.position,this.prefix=t.name_prefix,this.name=t.name,this.surname=t.surname,this.card_id=t.card_id,this.dob=t.birth_date,this.religion=t.religion,this.nationality=t.race,this.blood_type=t.blood_group,this.career=t.career,this.tel=t.contact_no,this.now_address=t.now_address,this.now_tambon=t.now_tambon,this.now_amphur=t.now_amphur,this.now_province=t.now_province,this.now_postcode=t.now_postcode,this.card_address=t.card_address,this.card_tambon=t.card_tambon,this.card_amphur=t.card_amphur,this.card_province=t.card_province,this.card_postcode=t.card_postcode,this.educational_background=t.education_bg,this.university=t.university,this.graduate_year=t.graduation_year,this.ems_lv=t.educational_backgroundEMS,this.universityEMS=t.ems_name,this.graduate_yearEMS=t.ems_year,this.trainOther=t.training_skill,this.skill=t.expert_skill,this.register_year=t.register_year,this.register_result=t.register_result,this.image=t.img,this.remark=t.remark)},locale:function(t){this.$i18n.locale=t,alert(t)},lang:function(t){this.forceRerender()},card_province:function(t){var e=this;c["a"].getExternalData("/get_location?province="+t).then(function(t){t.code?e.$swal(t.message,"","error"):e.locations=t.data},function(t){e.$swal("connection error","","error"),console.log(t)})},now_province:function(t){var e=this;c["a"].getExternalData("/get_location?province="+t).then(function(t){t.code?e.$swal(t.message,"","error"):e.now_locations=t.data},function(t){e.$swal("connection error","","error"),console.log(t)})},card_amphur:function(t){this.card_tambons=this.locations.filter(function(e){return e.en_amphur==t})},now_amphur:function(t){this.now_tambons=this.now_locations.filter(function(e){return e.en_amphur==t})}}},v=d,_=(a("62ca"),a("2fda"),a("2877")),m=Object(_["a"])(v,s,i,!1,null,"5455d24e",null);e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-1620428c.e0e545bf.js.map