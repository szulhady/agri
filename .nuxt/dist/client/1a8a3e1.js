(window.webpackJsonp=window.webpackJsonp||[]).push([[36,20],{1578:function(e,t,r){"use strict";r(28),r(30),r(37),r(38);var n=r(11),o=(r(59),r(31),r(74),r(109),r(879),r(54),r(84),r(880),r(881),r(882),r(883),r(884),r(885),r(886),r(887),r(888),r(889),r(890),r(891),r(892),r(89),r(81),r(33),r(147),r(494),r(10)),l=r(148),c=r(15);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],h=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=v.reduce((function(e,t){return e["offset"+Object(c.D)(t)]={type:[String,Number],default:null},e}),{}),O=v.reduce((function(e,t){return e["order"+Object(c.D)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(O)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var d in r)c+=String(r[d]);var f=w.get(c);return f||function(){var e,t;for(t in f=[],y)y[t].forEach((function(e){var n=r[e],o=j(t,e,n);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),w.set(c,f)}(),e(r.tag,Object(l.a)(data,{class:f}),o)}})},1626:function(e,t,r){"use strict";var n=r(11),o=(r(81),r(101),r(376),r(30),r(33),r(110),r(250),r(31),r(28),r(37),r(38),r(29)),l=r(205),c=r(293);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},1748:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{valid:!1,dateOfPlanting:"",dateOfCropYield:"",yieldQuantity:"",damageYieldQuantity:"",sellingPrice:"",salesRevenue:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},methods:{generateReport:function(){console.log("submited"),this.$axios.$post("http://127.0.0.1:5000/api/report/yieldCropInformation",{dateOfPlanting:this.dateOfPlanting,dateOfCropYield:this.dateOfCropYield,yieldQuantity:this.yieldQuantity,damageYieldQuantity:this.damageYieldQuantity,sellingPrice:this.sellingPrice,salesRevenue:this.salesRevenue}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},o=r(130),l=r(160),c=r.n(l),d=r(496),f=r(480),v=r(129),h=r(1578),m=r(1568),O=r(1626),y=r(1565),j=r(1856),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("v-card",[r("v-card-title",[e._v("\n      Yield crop information\n    ")]),e._v(" "),[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Date of planting",required:""},model:{value:e.dateOfPlanting,callback:function(t){e.dateOfPlanting=t},expression:"dateOfPlanting"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Date of crop yield",required:""},model:{value:e.dateOfCropYield,callback:function(t){e.dateOfCropYield=t},expression:"dateOfCropYield"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Yield quantity",required:""},model:{value:e.yieldQuantity,callback:function(t){e.yieldQuantity=t},expression:"yieldQuantity"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Damage yield quantity",required:""},model:{value:e.damageYieldQuantity,callback:function(t){e.damageYieldQuantity=t},expression:"damageYieldQuantity"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Selling price",required:""},model:{value:e.sellingPrice,callback:function(t){e.sellingPrice=t},expression:"sellingPrice"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Sales revenue",required:""},model:{value:e.salesRevenue,callback:function(t){e.salesRevenue=t},expression:"salesRevenue"}})],1)],1),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.generateReport}},[e._v("\n            Generate report\n          ")])],1)],1)]],2)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardTitle:v.c,VCol:h.a,VContainer:m.a,VForm:O.a,VRow:y.a,VTextField:j.a})}}]);