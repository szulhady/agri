(window.webpackJsonp=window.webpackJsonp||[]).push([[75,20,56],{1570:function(t,e,r){var content=r(1576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("1aad47fc",content,!0,{sourceMap:!1})},1571:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},o=(r(1575),r(130)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);e.default=component.exports},1575:function(t,e,r){"use strict";r(1570)},1576:function(t,e,r){var n=r(42)(!1);n.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=n},1578:function(t,e,r){"use strict";r(28),r(30),r(37),r(38);var n=r(11),o=(r(59),r(31),r(74),r(109),r(879),r(54),r(84),r(880),r(881),r(882),r(883),r(884),r(885),r(886),r(887),r(888),r(889),r(890),r(891),r(892),r(89),r(81),r(33),r(147),r(494),r(10)),c=r(148),l=r(15);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y=v.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(y)};function S(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=_.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),_.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},1719:function(t,e,r){var content=r(1800);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("5c8ff100",content,!0,{sourceMap:!1})},1799:function(t,e,r){"use strict";r(1719)},1800:function(t,e,r){var n=r(42)(!1);n.push([t.i,".overlay[data-v-2f0c7c6f]{position:relative}.overlay2[data-v-2f0c7c6f]{position:absolute;top:0;left:0}.filter-green[data-v-2f0c7c6f]{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%);-webkit-animation:blinkGreen-data-v-2f0c7c6f 1s infinite;animation:blinkGreen-data-v-2f0c7c6f 1s infinite}.filter-red[data-v-2f0c7c6f]{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%);-webkit-animation:blinkRed-data-v-2f0c7c6f 1s infinite;animation:blinkRed-data-v-2f0c7c6f 1s infinite}@-webkit-keyframes blinkRed-data-v-2f0c7c6f{0%{-webkit-filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}50%{-webkit-filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(50%) contrast(117%)}to{-webkit-filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}}@keyframes blinkRed-data-v-2f0c7c6f{0%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}50%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(50%) contrast(117%)}to{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}}@-webkit-keyframes blinkGreen-data-v-2f0c7c6f{0%{-webkit-filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}50%{-webkit-filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(70%) contrast(119%)}to{-webkit-filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}}@keyframes blinkGreen-data-v-2f0c7c6f{0%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}50%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(70%) contrast(119%)}to{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}}.switch[data-v-2f0c7c6f]{display:flex;align-items:center}.v-card__text[data-v-2f0c7c6f],.v-card__title[data-v-2f0c7c6f]{word-break:normal}.logout[data-v-2f0c7c6f]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;width:300px}.hr[data-v-2f0c7c6f]{margin:0 20px;border-top:1px solid #bdc7c7}.btn-div[data-v-2f0c7c6f]{display:flex;justify-content:flex-end}.logout-btn[data-v-2f0c7c6f]{width:100px;margin-right:10px;margin-bottom:10px}.long2[data-v-2f0c7c6f]{border:1px solid #000;text-align:center}.layer2[data-v-2f0c7c6f]{position:absolute;width:100%;height:100%;background:#000;opacity:.6;top:0;left:0}@media (max-width:1264px){.switch[data-v-2f0c7c6f]{align-items:center}}",""]),t.exports=n},1867:function(t,e,r){"use strict";r.r(e);r(31),r(28),r(30),r(37),r(33),r(38);var n=r(35),o=r(11),c=(r(894),r(131),r(1571)),l=r(1677),f=r(100);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h,m={middleware:["isIpah"],layout:"status",methods:v(v({},Object(f.c)({setIpah1ManualFill:"setIpah1ManualFill",setIpah1ManualStop:"setIpah1ManualStop",setIpah1ManualNutrient:"setIpah1ManualNutrient",setIpah1ManualNutrientDuration:"setIpah1ManualNutrientDuration"})),{},{trigger:function(t,e,r){this.state2=!1,this.layerDrawer=!0,this.activeDevice=t,this.activeSwitch=r,this.stateDevice=1==e?"turn off":"turn on",console.log(this.activeDevice),console.log(this.activeSwitch)},yes:(h=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.layerDrawer=!1,this[e]=!this[e];case 2:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)}),cancel:function(){this.layerDrawer=!1},track:function(){var t=this;window.onclick=function(e){var r=document.getElementById("layerDrawer");e.target==r&&(t.layerDrawer=!1)}},fill:function(){this.setIpah1ManualFill(!0),console.log("fill")},stop:function(){this.setIpah1ManualStop(!0),console.log("stop")},nutrient:function(){this.duration?!this.duration.toFixed(2)||this.duration<0?alert("Please select valid EC value (eg:1.00)"):(this.setIpah1ManualNutrientDuration(this.duration.toFixed(2)),this.setIpah1ManualNutrient(!0)):alert("Please select valid duration")}}),components:{PageTitle:c.default,Ipah1Status:l.default},data:function(){return{activeDevice:"",stateDevice:"",activeSwitch:"",layerDrawer:!1,state2:!0,rightDrawer:!1,switchPump:!1,switchDosingPump:!1,switchSV1:!1,switchSV2:!1,switchSV3:!1,switchSV4:!1,switchSV5:!1,switchSV6:!1,substance:"(substance)",itemsSubstance:["water","fertilizer"],block:"(SPH)",itemsBlock:["SPH 1","SPH 2","All SPH"],itemsDuration:["10","20","30"],duration:""}},computed:v({},Object(f.d)({ipahStatus:function(t){return t.ipahStatus},ipahProcess:function(t){return t.ipahProcess}}))},y=(r(1799),r(130)),w=r(160),S=r.n(w),_=r(496),x=r(480),O=r(129),k=r(1578),j=r(1565),P=r(150),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("PageTitle",{attrs:{title:"STATUS"}}),t._v(" "),r("v-card",{staticClass:"elevation-10"},[r("v-card-title",[t._v("\n      OPERATION\n    ")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"col-md-9 pb-0",attrs:{col:"12"}},[r("Ipah1Status",{attrs:{sv1:"red",sv2:"green",classSV1:1==t.ipahStatus.SV1?"filter-green":"filter-red",classSV2:1==t.ipahStatus.SV2?"filter-green":"filter-red",classSV3:1==t.ipahStatus.SV3?"filter-green":"filter-red",classSV4:1==t.ipahStatus.SV4?"filter-green":"filter-red",classSV5:1==t.ipahStatus.SV5?"filter-green":"filter-red",classSV6:1==t.ipahStatus.SV6?"filter-green":"filter-red",classPump:1==t.ipahStatus.P?"filter-green":"filter-red",classDosingPump:1==t.ipahStatus.DP?"filter-green":"filter-red",ph:"7",waterLvl:"30",EC:"2"}})],1),t._v(" "),r("v-col",{staticClass:"col-md-3 pr-md-10 pt-0",staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"},attrs:{cols:"12"}},[r("v-card",{staticClass:"elevation-18 rounded-lg px-5 mb-5 "},[r("v-card-title",[t._v("PROCESS")]),t._v(" "),r("v-card-subtitle",{staticStyle:{"font-size":"1.2em"}},[t._v("\n            "+t._s(t.ipahProcess)+"\n          ")])],1),t._v(" "),r("v-card",{staticClass:"elevation-18 rounded-lg px-5 "},[r("v-card-title",{staticStyle:{"font-size":"1.3rem"}},[t._v("\n            MANUAL FERTIGATION CONTROL\n          ")]),t._v(" "),r("v-row",[r("v-col",[r("v-card-title",[t._v("\n                Water Filling for fetilizer solution tank\n              ")]),t._v(" "),r("div",[r("h4",{staticStyle:{"text-align":"justify"}},[t._v("\n                  Press "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v("FILL")]),t._v(" button to\n                  start filling water manually into fetilizer solution tank.\n                  Press "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v("STOP")]),t._v(" button to\n                  stop filling process.\n                ")]),t._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"space-evenly"}},[r("v-btn",{staticClass:"mt-4 mb-4",on:{click:t.fill}},[t._v("FILL")]),t._v(" "),r("v-btn",{staticClass:"mt-4 mb-4",on:{click:t.stop}},[t._v("STOP")])],1)]),t._v(" "),r("v-card-title",[t._v("\n                Nutrient Preparation\n              ")]),t._v(" "),r("div",[r("h4",{staticStyle:{"text-align":"justify"}},[t._v("\n                  Nutrient preparation is done via schedule set by user on\n                  schedule panel. It is done on\n                  "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v("5.00am on choosen date")]),t._v(". Please fill EC value input ( eg: 1.00 ) and click button\n                  below to start nutrient preparation manually.\n                ")])]),t._v(" "),r("div",{}),t._v(" "),r("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[r("input",{directives:[{name:"mask",rawName:"v-mask",value:"#.##",expression:"'#.##'"},{name:"model",rawName:"v-model.number",value:t.duration,expression:"duration",modifiers:{number:!0}}],staticClass:"long2",attrs:{type:"text"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("v-btn",{staticClass:"mt-4 mb-4",on:{click:t.nutrient}},[t._v("Start Preparation")])],1)],1)],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"mt-5"})],1)],1)],1)],1),t._v(" "),r("v-scroll-y-transition",[t.layerDrawer?r("div",{staticClass:"layer2",attrs:{id:"layerDrawer"}}):t._e()]),t._v(" "),r("v-scroll-y-transition",[t.layerDrawer?r("v-card",{staticClass:"logout elevation-12"},[r("v-card-title",[t._v("\n        Action\n      ")]),t._v(" "),r("hr",{staticClass:"hr"}),t._v(" "),r("v-card-subtitle",[t._v("\n        Are you sure you want to "+t._s(t.stateDevice)+" the "+t._s(t.activeDevice)+"?\n      ")]),t._v(" "),r("div",{staticClass:"btn-div"},[r("v-btn",{staticClass:"success logout-btn",on:{click:function(e){return t.yes(t.activeSwitch)}}},[t._v("Yes")]),t._v(" "),r("v-btn",{staticClass:"error logout-btn",on:{click:t.cancel}},[t._v("Cancel")])],1)],1):t._e()],1)],1)}),[],!1,null,"2f0c7c6f",null);e.default=component.exports;S()(component,{PageTitle:r(1571).default}),S()(component,{VBtn:_.a,VCard:x.a,VCardSubtitle:O.b,VCardTitle:O.d,VCol:k.a,VRow:j.a,VScrollYTransition:P.d})}}]);