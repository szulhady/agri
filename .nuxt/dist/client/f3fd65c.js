(window.webpackJsonp=window.webpackJsonp||[]).push([[34,20],{1578:function(e,t,r){"use strict";r(28),r(30),r(37),r(38);var n=r(11),o=(r(59),r(31),r(74),r(109),r(879),r(54),r(84),r(880),r(881),r(882),r(883),r(884),r(885),r(886),r(887),r(888),r(889),r(890),r(891),r(892),r(89),r(81),r(33),r(147),r(494),r(10)),l=r(148),c=r(15);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=["sm","md","lg","xl"],m=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=v.reduce((function(e,t){return e["offset"+Object(c.D)(t)]={type:[String,Number],default:null},e}),{}),y=v.reduce((function(e,t){return e["order"+Object(c.D)(t)]={type:[String,Number],default:null},e}),{}),O={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(y)};function w(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;t.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var d in r)c+=String(r[d]);var f=j.get(c);return f||function(){var e,t;for(t in f=[],O)O[t].forEach((function(e){var n=r[e],o=w(t,e,n);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),j.set(c,f)}(),e(r.tag,Object(l.a)(data,{class:f}),o)}})},1626:function(e,t,r){"use strict";var n=r(11),o=(r(81),r(101),r(376),r(30),r(33),r(110),r(250),r(31),r(28),r(37),r(38),r(29)),l=r(205),c=r(293);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},1749:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{valid:!1,seasonalResult:"",annualResult:"",salesRevenue:"",yieldImprovement:"",irrigationPeriod:"",rainIntensity:"",daysOfRaining:"",systemBreakdown:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},methods:{generateReport:function(){console.log("submited"),this.$axios.$post("http://127.0.0.1:5000/api/report/report",{seasonalResult:this.seasonalResult,annualResult:this.annualResult,salesRevenue:this.salesRevenue,yieldImprovement:this.yieldImprovement,irrigationPeriod:this.irrigationPeriod,rainIntensity:this.rainIntensity,daysOfRaining:this.daysOfRaining,systemBreakdown:this.systemBreakdown}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}},o=r(130),l=r(160),c=r.n(l),d=r(496),f=r(480),v=r(129),m=r(1578),h=r(1568),y=r(1626),O=r(1565),w=r(1856),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("v-card",[r("v-card-title",[e._v("\n      Report\n    ")]),e._v(" "),[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Seasonal result",required:""},model:{value:e.seasonalResult,callback:function(t){e.seasonalResult=t},expression:"seasonalResult"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Annual result",required:""},model:{value:e.annualResult,callback:function(t){e.annualResult=t},expression:"annualResult"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Sales revenue",required:""},model:{value:e.salesRevenue,callback:function(t){e.salesRevenue=t},expression:"salesRevenue"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Yield improvement",required:""},model:{value:e.yieldImprovement,callback:function(t){e.yieldImprovement=t},expression:"yieldImprovement"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Irrigation period",required:""},model:{value:e.irrigationPeriod,callback:function(t){e.irrigationPeriod=t},expression:"irrigationPeriod"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Rain intensity",required:""},model:{value:e.rainIntensity,callback:function(t){e.rainIntensity=t},expression:"rainIntensity"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Days of raining",required:""},model:{value:e.daysOfRaining,callback:function(t){e.daysOfRaining=t},expression:"daysOfRaining"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"System breakdown",required:""},model:{value:e.systemBreakdown,callback:function(t){e.systemBreakdown=t},expression:"systemBreakdown"}})],1)],1),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.generateReport}},[e._v("\n            Generate report\n          ")])],1)],1)]],2)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardTitle:v.c,VCol:m.a,VContainer:h.a,VForm:y.a,VRow:O.a,VTextField:w.a})}}]);