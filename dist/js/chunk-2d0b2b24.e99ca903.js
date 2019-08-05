(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2b24"],{"24e1":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-clipboard-demo"}},[n("clipboard-directive"),n("clipboard-without-directive")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Using Directive",subtitle:"Use directive on button to copy text.","code-toggler":""}},[n("vs-input",{staticClass:"inline-flex mb-2 mr-2",model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.text,expression:"text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}]},[t._v("\n\t\t\tCopy!\n\t\t")]),n("template",{slot:"codeContainer"},[t._v("\n<template>\n    <vs-input v-model=\"text\" class=\"inline-flex\" />\n    <vs-button\n        v-clipboard:copy=\"text\"\n        v-clipboard:success=\"onCopy\"\n        v-clipboard:error=\"onError\">\n        Copy!\n    </vs-button>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            text: 'Copy Me!',\n        }\n    },\n    methods: {\n        onCopy() {\n            this.$vs.notify({\n                title: 'Success!',\n                text: 'Text copied successfully.',\n                color: 'success',\n                iconPack: 'feather',\n                position: 'top-center',\n                icon: 'icon-check-circle'\n            })\n        },\n        onError() {\n            this.$vs.notify({\n                title: 'Failed!',\n                text: 'Error in copying text.',\n                color: 'danger',\n                iconPack: 'feather',\n                position: 'top-center',\n                icon: 'icon-alert-circle'\n            })\n        },\n    }\n}\n<\/script>\n\t\t")])],2)},r=[],s={data:function(){return{text:"Copy Me!"}},methods:{onCopy:function(){this.$vs.notify({title:"Success!",text:"Text copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})},onError:function(){this.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})}}},l=s,a=n("2877"),p=Object(a["a"])(l,i,r,!1,null,null,null),u=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Without directive",subtitle:"You can copy text without a specific button. Use $copyText to copy text when event got fired.","code-toggler":""}},[n("vs-input",{staticClass:"inline-flex mb-2 mr-2",model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),n("vs-button",{on:{click:t.copyText}},[t._v("Copy!")]),n("template",{slot:"codeContainer"},[t._v("\n<template>\n    <vs-input v-model=\"text2\" class=\"inline-flex\" />\n    <vs-button @click=\"copyText\">Copy!</vs-button>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            text2: 'Copy Me Without Directive!',\n        }\n    },\n    methods: {\n        copyText() {\n            const thisIns = this;\n            this.$copyText(this.text2).then(function() {\n                thisIns.$vs.notify({\n                    title: 'Success!',\n                    text: 'Text copied successfully.',\n                    color: 'success',\n                    iconPack: 'feather',\n                    position: 'top-center',\n                    icon: 'icon-check-circle'\n                })\n            }, function() {\n                thisIns.$vs.notify({\n                    title: 'Failed!',\n                    text: 'Error in copying text.',\n                    color: 'danger',\n                    iconPack: 'feather',\n                    position: 'top-center',\n                    icon: 'icon-alert-circle'\n                })\n            })\n        }\n    }\n}\n<\/script>\n\t\t")])],2)},x=[],v={data:function(){return{text2:"Copy Me Without Directive!"}},methods:{copyText:function(){var t=this;this.$copyText(this.text2).then(function(){t.$vs.notify({title:"Success!",text:"Text copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})},function(){t.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})})}}},f=v,h=Object(a["a"])(f,d,x,!1,null,null,null),y=h.exports,b={components:{ClipboardDirective:u,ClipboardWithoutDirective:y}},m=b,k=Object(a["a"])(m,o,c,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0b2b24.e99ca903.js.map