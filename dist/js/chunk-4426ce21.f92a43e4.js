(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4426ce21"],{"14e1":function(t,e,s){},5051:function(t,e,s){},"50ee":function(t,e,s){"use strict";var n=s("5051"),i=s.n(n);i.a},5118:function(t,e,s){(function(t){var n="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},s("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("24aa"))},6017:function(t,e,s){(function(t,e){(function(t,s){"use strict";if(!t.setImmediate){var n,i=1,o={},a=!1,l=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?d():v()?f():t.MessageChannel?p():l&&"onreadystatechange"in l.createElement("script")?w():y(),c.setImmediate=r,c.clearImmediate=m}function r(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var a={callback:t,args:e};return o[i]=a,n(i),i++}function m(t){delete o[t]}function u(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(s,n);break}}function _(t){if(a)setTimeout(_,0,t);else{var e=o[t];if(e){a=!0;try{u(e)}finally{m(t),a=!1}}}}function d(){n=function(t){e.nextTick(function(){_(t)})}}function v(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}function f(){var e="setImmediate$"+Math.random()+"$",s=function(s){s.source===t&&"string"===typeof s.data&&0===s.data.indexOf(e)&&_(+s.data.slice(e.length))};t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),n=function(s){t.postMessage(e+s,"*")}}function p(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;_(e)},n=function(e){t.port2.postMessage(e)}}function w(){var t=l.documentElement;n=function(e){var s=l.createElement("script");s.onreadystatechange=function(){_(e),s.onreadystatechange=null,t.removeChild(s),s=null},t.appendChild(s)}}function y(){n=function(t){setTimeout(_,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,s("24aa"),s("f28c"))},"9df3":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vx-col w-full mb-base"},[s("vx-card",{attrs:{title:t.$t("screening_setting")}},[s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-start","vs-type":"flex"}},[s("vs-button",{attrs:{color:"success",type:"filled"},on:{click:function(e){t.addmainActive=!0}}},[t._v(t._s(t.$t("add_new_main")))])],1),s("vs-popup",{staticClass:"holamundo",attrs:{title:t.$t("add_new_main"),active:t.addmainActive},on:{"update:active":function(e){t.addmainActive=e}}},[s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"4","vs-justify":"flex-end"}},[s("label",[t._v(t._s(t.$t("screening_name")))])]),s("vs-col",{attrs:{"vs-w":"8"}},[s("vs-input",{staticClass:"w-full",model:{value:t.new_screening_name,callback:function(e){t.new_screening_name=e},expression:"new_screening_name"}}),t.invalid_new?s("div",{staticClass:"error"},[t._v(t._s(t.$t("add_screening_name_alert")))]):t._e(),t.duplicated_new?s("div",{staticClass:"error"},[t._v(t._s(t.$t("duplicated_screening_name_alert")))]):t._e()],1),s("vs-col",{attrs:{"vs-w":"12"}},[s("vs-button",{ref:"loadableButton",staticClass:"vs-con__container",attrs:{color:"success",type:"filled",id:"new-loading-button"},on:{click:t.add_new_screening}},[t._v(t._s(t.$t("save")))])],1)],1)],1)],1),s("vs-row",{staticClass:"mt-3",attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"center","vs-type":"flex"}},[s("h5",[t._v(t._s(t.$t("main_symptoms")))])]),s("vs-col",{attrs:{"vs-w":"8","vs-type":"flex","vs-justify":"flex-start"}},[s("vs-select",{staticClass:"w-full",model:{value:t.main_symptom,callback:function(e){t.main_symptom=e},expression:"main_symptom"}},t._l(t.main_symptom_list,function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.screening_id,text:t.screening_name}})}),1)],1),s("vs-col",{attrs:{"vs-w":"2","vs-justify":"center","vs-type":"flex"}},[s("vs-button",{attrs:{color:"danger",type:"filled",disabled:!t.is_MainSymptom},on:{click:t.delete_screening}},[t._v(t._s(t.$t("delete")))])],1)],1)],1),t.is_MainSymptom?s("vx-card",{staticClass:"mt-5"},[s("vs-tabs",[s("vs-tab",{attrs:{label:t.$t("question")}},[s("vs-row",{staticClass:"mt-2",attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-end","vs-type":"flex"}},[s("label",[t._v(t._s(t.$t("red_question")))]),s("div",{staticClass:"h-4 w-4 rounded-full bg-danger ml-2 mt-1"})]),s("vs-col",{attrs:{"vs-w":"8"}},[s("quill-editor",{model:{value:t.red_question,callback:function(e){t.red_question=e},expression:"red_question"}})],1)],1),s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-end","vs-type":"flex"}},[s("label",[t._v(t._s(t.$t("yellow_question")))]),s("div",{staticClass:"h-4 w-4 rounded-full bg-warning ml-2 mt-1"})]),s("vs-col",{attrs:{"vs-w":"8"}},[s("quill-editor",{model:{value:t.yellow_question,callback:function(e){t.yellow_question=e},expression:"yellow_question"}})],1)],1),s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-end","vs-type":"flex"}},[s("label",[t._v(t._s(t.$t("green_question")))]),s("div",{staticClass:"h-4 w-4 rounded-full bg-success ml-2 mt-1"})]),s("vs-col",{attrs:{"vs-w":"8"}},[s("quill-editor",{model:{value:t.green_question,callback:function(e){t.green_question=e},expression:"green_question"}})],1)],1),s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-end","vs-type":"flex"}},[s("label",[t._v(t._s(t.$t("white_question")))]),s("div",{staticClass:"h-4 w-4 rounded-full white ml-2 mt-1"})]),s("vs-col",{attrs:{"vs-w":"8"}},[s("quill-editor",{model:{value:t.white_question,callback:function(e){t.white_question=e},expression:"white_question"}})],1)],1),s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-end","vs-type":"flex"}},[s("label",[t._v(t._s(t.$t("black_question")))]),s("div",{staticClass:"h-4 w-4 rounded-full black ml-2 mt-1"})]),s("vs-col",{attrs:{"vs-w":"8"}},[s("quill-editor",{model:{value:t.black_question,callback:function(e){t.black_question=e},expression:"black_question"}})],1)],1),s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"2","vs-justify":"flex-end","vs-type":"flex"}},[s("label",[t._v(t._s(t.$t("recommend_command")))])]),s("vs-col",{attrs:{"vs-w":"8"}},[s("quill-editor",{model:{value:t.recommend_command,callback:function(e){t.recommend_command=e},expression:"recommend_command"}})],1),s("vs-col",{attrs:{"vs-w":"2"}},[s("vs-button",{attrs:{color:"success",type:"filled"},on:{click:t.saveQuestion}},[t._v(t._s(t.$t("save")))])],1)],1)],1),s("vs-tab",{attrs:{label:t.$t("symptom_detail")}},[s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{staticClass:"mt-4",attrs:{"vs-w":"2","vs-justify":"flex-start","vs-type":"flex"}},[s("vs-button",{attrs:{color:"success",type:"filled"},on:{click:function(e){t.addsymptomActive=!0}}},[t._v(t._s(t.$t("add_new_symptom")))]),s("vs-popup",{staticClass:"holamundo",attrs:{title:t.$t("add_new_symptom"),active:t.addsymptomActive},on:{"update:active":function(e){t.addsymptomActive=e}}},[s("vs-row",{attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"4","vs-justify":"flex-end"}},[s("label",[t._v(t._s(t.$t("screening_lv")))])]),s("vs-col",{attrs:{"vs-w":"8"}},[s("vs-select",{staticClass:"w-full",attrs:{danger:t.invalid_screening_lv},model:{value:t.new_screening_lv,callback:function(e){t.new_screening_lv=e},expression:"new_screening_lv"}},[s("vs-select-item",{attrs:{value:1,text:t.$t("red")}}),s("vs-select-item",{attrs:{value:2,text:t.$t("yellow")}}),s("vs-select-item",{attrs:{value:3,text:t.$t("green")}}),s("vs-select-item",{attrs:{value:4,text:t.$t("white")}}),s("vs-select-item",{attrs:{value:5,text:t.$t("black")}})],1),t.invalid_screening_lv?s("div",{staticClass:"error"},[t._v(t._s(t.$t("screening_lv_alert")))]):t._e()],1)],1),s("vs-row",{staticClass:"mt-2",attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"4","vs-justify":"flex-end"}},[s("label",[t._v(t._s(t.$t("symptom")))])]),s("vs-col",{attrs:{"vs-w":"8"}},[s("vs-input",{staticClass:"w-full",attrs:{danger:t.invalid_symptom},model:{value:t.new_symptom,callback:function(e){t.new_symptom=e},expression:"new_symptom"}}),t.invalid_symptom?s("div",{staticClass:"error"},[t._v(t._s(t.$t("add_screening_name_alert")))]):t._e(),t.duplicated_symptom?s("div",{staticClass:"error"},[t._v(t._s(t.$t("duplicated_screening_name_alert")))]):t._e()],1),s("vs-col",{attrs:{"vs-w":"12"}},[s("vs-button",{attrs:{color:"success",type:"filled"},on:{click:t.add_new_symptom}},[t._v(t._s(t.$t("save")))])],1)],1)],1)],1),s("vs-table",{staticClass:"w-full",attrs:{pagination:"","max-items":"10",search:"",data:t.screening_minor},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,function(e,n){return s("vs-tr",{key:n},[s("vs-td",{attrs:{data:e.screening_no}},[t._v(t._s(e.screening_no))]),s("vs-td",{staticStyle:{width:"10%","padding-left":"4%"},attrs:{"vs-justify":"center",data:e.screening_lv}},[s("div",{staticClass:"h-4 w-4 rounded-full",class:t.check_status(e.screening_lv)})]),s("vs-td",{attrs:{data:e.symptom}},[t._v(t._s(e.symptom))]),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"EditIcon",size:"small"},on:{click:function(e){t.editsymptomActive=!0}}}),s("vs-popup",{staticClass:"holamundo",attrs:{title:t.$t("edit_symptom"),active:t.editsymptomActive},on:{"update:active":function(e){t.editsymptomActive=e}}},[s("vs-row",{staticClass:"mt-2",attrs:{"vs-w":"12"}},[s("vs-col",{attrs:{"vs-w":"4","vs-justify":"flex-end"}},[s("label",[t._v(t._s(t.$t("symptom")))])]),s("vs-col",{attrs:{"vs-w":"8"}},[s("vs-input",{staticClass:"w-full",attrs:{danger:t.invalid_symptom},model:{value:t.edit_symptom,callback:function(e){t.edit_symptom=e},expression:"edit_symptom"}}),t.invalid_symptom2?s("div",{staticClass:"error"},[t._v(t._s(t.$t("add_screening_name_alert")))]):t._e(),t.duplicated_symptom2?s("div",{staticClass:"error"},[t._v(t._s(t.$t("duplicated_screening_name_alert")))]):t._e()],1),s("vs-col",{attrs:{"vs-w":"12"}},[s("vs-button",{attrs:{color:"success",type:"filled"},on:{click:function(s){return t.update_symptom(e.screening_no,e.screening_lv,t.symptom)}}},[t._v(t._s(t.$t("save")))])],1)],1)],1)],1),s("vs-td",[s("feather-icon",{staticClass:"cursor-pointer w-6 h-6",attrs:{icon:"Trash2Icon",size:"small"},on:{click:function(s){return t.delete_symptom(e.screening_no,e.screening_lv)}}})],1)],1)})}}],null,!1,337408336)},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"screening_no"}},[t._v(t._s(t.$t("screening_no")))]),s("vs-th",{attrs:{"sort-key":"screening_lv"}},[t._v(t._s(t.$t("screening_lv")))]),s("vs-th",{attrs:{"sort-key":"symptom"}},[t._v(t._s(t.$t("symptom")))]),s("vs-th",[t._v(t._s(t.$t("edit")))]),s("vs-th",[t._v(t._s(t.$t("delete")))])],1)],2)],1)],1)],1)],1):t._e()],1)},i=[],o=(s("c1df"),s("67cf")),a=s("5118"),l=(s("a753"),s("8096"),s("14e1"),s("953d")),c={components:{quillEditor:l["quillEditor"]},data:function(){return{main_symptom_list:[],main_symptom:"",addmainActive:!1,new_screening_name:"",new_submitted:!1,red_question:"",yellow_question:"",green_question:"",white_question:"",black_question:"",recommend_command:"",screening_minor:[],addsymptomActive:!1,new_screening_lv:null,new_symptom:"",new_submitted2:!1,new_submitted3:!1,editsymptomActive:!1,edit_symptom:""}},computed:{invalid_new:function(){return this.new_submitted&&""==this.new_screening_name},new_isInvalid:function(){return this.invalid_new||this.duplicated_new},duplicated_new:function(){var t=this,e=this.main_symptom_list.filter(function(e){return e.screening_name==t.new_screening_name});return e.length>0},invalid_symptom:function(){return this.new_submitted2&&""==this.new_symptom.trim()},invalid_screening_lv:function(){return this.new_submitted2&&null==this.new_screening_lv},new_isInvalid2:function(){return this.invalid_symptom||this.invalid_screening_lv||this.duplicated_symptom},duplicated_symptom:function(){var t=this,e=this.screening_minor.filter(function(e){return e.screening_lv==t.new_screening_lv&&t.new_symptom.trim()==e.symptom});return e.length>0},is_MainSymptom:function(){return""!=this.main_symptom},duplicated_symptom2:function(){var t=this,e=this.screening_minor.filter(function(e){return e.screening_lv==t.new_screening_lv&&t.edit_symptom.trim()==e.symptom});return e.length>0},invalid_symptom2:function(){return this.new_submitted3&&""==this.edit_symptom.trim()},edit_isInvalid:function(){return this.invalid_symptom2||this.duplicated_symptom2}},created:function(){var t=this;o["a"].getData("get_mainsymptom").then(function(e){e.code?t.$swal({title:"Connection lost",type:"error"}):t.main_symptom_list=e.data})},methods:{get_screening_data:function(){var t=this;o["a"].getData("get_screening_detail?screening_id="+this.main_symptom).then(function(e){if(e.code)t.$swal({title:t.$t("get_data_error"),type:"error"});else{var s=e.data;t.red_question=s.red_question,t.yellow_question=s.yellow_question,t.green_question=s.green_question,t.white_question=s.white_question,t.black_question=s.black_question,t.recommend_command=s.recommend_command,t.screening_minor=s.minor}})},add_new_screening:function(){var t=this,e=this.new_screening_name;this.new_submitted=!0,this.new_isInvalid||this.duplicated_new||(this.addmainActive=!1,this.$swal({title:this.$t("do_you_want_to_add_new_screening"),type:"question",allowClickOutside:!1,showCancelButton:!0,confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then(function(s){s.value?o["a"].postData("add_new_main_symptom",{screening_name:e}).then(function(e){e.code?t.$swal({title:e.message,type:"error"}).then(function(){t.addmainActive=!0}):(t.$swal({title:t.$t("complete"),type:"success",timer:1500,showComfirmButton:!1}),Object(a["setTimeout"])(function(){t.$router.go()},1500))}):t.addmainActive=!0}))},delete_screening:function(){var t=this;this.$swal({title:this.$t("do_you_want_to_delete_screening"),type:"question",allowClickOutside:!1,showCancelButton:!0,confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel"),showLoaderOnConfirm:!0}).then(function(e){e.value&&o["a"].deleteData("delete_main_symptom?screening_id="+t.main_symptom).then(function(e){e.code?t.$swal({title:e.message,type:"error"}):(t.$swal({title:t.$t("complete"),type:"success",timer:1500,showComfirmButton:!1}),Object(a["setTimeout"])(function(){t.$router.go()},1500))})})},check_status:function(t){return 1==t?"bg-danger":2==t?"bg-warning":3==t?"bg-success":4==t?"white":5==t?"black":void 0},add_new_symptom:function(){var t=this;this.new_submitted2=!0,this.new_isInvalid2||(this.addsymptomActive=!1,o["a"].postData("add_screening_minor",{screening_id:this.main_symptom,screening_lv:this.new_screening_lv,symptom:this.new_symptom}).then(function(e){e.code?t.$swal({title:e.message,type:"error"}).then(function(){t.addsymptomActive=!0}):(t.$swal({title:t.$t("complete"),type:"success",timer:1500,showComfirmButton:!1}),Object(a["setTimeout"])(function(){t.$router.go()},1500))}))},saveQuestion:function(){var t=this;this.$swal({title:this.$t("do_you_want_to_edit_question"),type:"question",allowClickOutside:!1,showCancelButton:!0,confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then(function(e){if(e.value){var s={screening_id:t.main_symptom,red_question:t.red_question,yellow_question:t.yellow_question,green_question:t.green_question,white_question:t.white_question,black_question:t.black_question,recommend_command:t.recommend_command};o["a"].postData("add_screening_question",s).then(function(e){e.code?t.$swal({title:e.message,type:"error"}).then(function(){t.addmainActive=!0}):(t.$swal({title:t.$t("complete"),type:"success",timer:1500,showComfirmButton:!1}),Object(a["setTimeout"])(function(){t.$router.go()},1500))})}})},delete_symptom:function(t,e){var s=this;this.$swal({title:this.$t("do_you_want_to_delete_symptom"),type:"question",allowClickOutside:!1,showCancelButton:!0,confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then(function(n){n.value&&o["a"].deleteData("delete_minor_symptom?screening_id="+s.main_symptom+"&screening_no="+t+"&screening_lv="+e).then(function(t){t.code?s.$swal({title:t.message,type:"error"}):(s.$swal({title:s.$t("complete"),type:"success",timer:1500,showComfirmButton:!1}),Object(a["setTimeout"])(function(){s.$router.go()},1500))})})},update_symptom:function(t,e){var s=this;this.edit_isInvalid||(this.editsymptomActive=!1,this.$swal({title:this.$t("do_you_want_to_update_symptom"),type:"question",allowClickOutside:!1,showCancelButton:!0,confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then(function(n){if(n.value){var i={symptom:s.edit_symptom,screening_id:s.main_symptom,screening_no:t,screening_lv:e};o["a"].postData("update_minor_symptom",i).then(function(t){t.code?s.$swal({title:t.message,type:"error"}).then(function(){s.editsymptomActive=!0}):(s.$swal({title:s.$t("complete"),type:"success",timer:1500,showComfirmButton:!1}),Object(a["setTimeout"])(function(){s.get_screening_data()},1500))})}}))}},watch:{addmainActive:function(t){t||(this.new_submitted=!1,this.new_screening_name="")},main_symptom:function(t){var e=this;t&&o["a"].getData("get_screening_detail?screening_id="+t).then(function(t){if(t.code)e.$swal({title:e.$t("get_data_error"),type:"error"});else{var s=t.data;e.red_question=s.red_question,e.yellow_question=s.yellow_question,e.green_question=s.green_question,e.white_question=s.white_question,e.black_question=s.black_question,e.recommend_command=s.recommend_command,e.screening_minor=s.minor}})}}},r=c,m=(s("50ee"),s("2877")),u=Object(m["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4426ce21.f92a43e4.js.map