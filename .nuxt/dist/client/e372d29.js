(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1587:function(t,e,r){"use strict";var n=r(14),o=(r(102),r(124),r(367),r(30),r(32),r(139),r(365),r(31),r(27),r(38),r(39),r(33)),l=r(201),c=r(285);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},1723:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{valid:!1,typeOfWaterPump:"",waterPumpOutput:"",typeOfFertilizer:"",typeOfInsecticide:"",typeOfNozzle:"",durationOfFlush:"",dateOfPlanting:"",dateOfCropYield:"",fertilizingDate:"",insecticideProcessDate:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},methods:{generateReport:function(){console.log("submited"),this.$axios.$post("http://127.0.0.1:5000/api/report/operationInformation",{typeOfWaterPump:this.typeOfWaterPump,waterPumpOutput:this.waterPumpOutput,typeOfFertilizer:this.typeOfFertilizer,typeOfInsecticide:this.typeOfInsecticide,typeOfNozzle:this.typeOfNozzle,durationOfFlush:this.durationOfFlush,dateOfPlanting:this.dateOfPlanting,dateOfCropYield:this.dateOfCropYield,fertilizingDate:this.fertilizingDate,insecticideProcessDate:this.insecticideProcessDate}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},o=r(122),l=r(154),c=r.n(l),d=r(488),f=r(464),v=r(121),h=r(1816),m=r(1531),O=r(1587),y=r(1817),P=r(1813),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-card",[r("v-card-title",[t._v("\n      Operation information\n    ")]),t._v(" "),[r("v-form",{on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Type of water pump",required:""},model:{value:t.typeOfWaterPump,callback:function(e){t.typeOfWaterPump=e},expression:"typeOfWaterPump"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Water pump output",required:""},model:{value:t.waterPumpOutput,callback:function(e){t.waterPumpOutput=e},expression:"waterPumpOutput"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Type of fertilizer",required:""},model:{value:t.typeOfFertilizer,callback:function(e){t.typeOfFertilizer=e},expression:"typeOfFertilizer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Type of insecticide",required:""},model:{value:t.typeOfInsecticide,callback:function(e){t.typeOfInsecticide=e},expression:"typeOfInsecticide"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Type of nozzle",required:""},model:{value:t.typeOfNozzle,callback:function(e){t.typeOfNozzle=e},expression:"typeOfNozzle"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Duration of flush",required:""},model:{value:t.durationOfFlush,callback:function(e){t.durationOfFlush=e},expression:"durationOfFlush"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Date of planting",required:""},model:{value:t.dateOfPlanting,callback:function(e){t.dateOfPlanting=e},expression:"dateOfPlanting"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Date of crop yield",required:""},model:{value:t.dateOfCropYield,callback:function(e){t.dateOfCropYield=e},expression:"dateOfCropYield"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Fertilizing date",required:""},model:{value:t.fertilizingDate,callback:function(e){t.fertilizingDate=e},expression:"fertilizingDate"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Insecticide process date",required:""},model:{value:t.insecticideProcessDate,callback:function(e){t.insecticideProcessDate=e},expression:"insecticideProcessDate"}})],1)],1),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.generateReport}},[t._v("\n            Generate report\n          ")])],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardTitle:v.b,VCol:h.a,VContainer:m.a,VForm:O.a,VRow:y.a,VTextField:P.a})}}]);