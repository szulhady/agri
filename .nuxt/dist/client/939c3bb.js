(window.webpackJsonp=window.webpackJsonp||[]).push([[74,56],{1570:function(t,e,r){var content=r(1576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("1aad47fc",content,!0,{sourceMap:!1})},1571:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},l=(r(1575),r(130)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);e.default=component.exports},1575:function(t,e,r){"use strict";r(1570)},1576:function(t,e,r){var n=r(42)(!1);n.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=n},1599:function(t,e,r){r(24)({target:"Number",stat:!0},{isInteger:r(1600)})},1600:function(t,e,r){var n=r(71),l=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&l(t)===t}},1718:function(t,e,r){var content=r(1798);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("08013b1a",content,!0,{sourceMap:!1})},1797:function(t,e,r){"use strict";r(1718)},1798:function(t,e,r){var n=r(42)(!1);n.push([t.i,".overlay{position:relative}.overlay2{position:absolute;top:0;left:0}.switch,.switch2{display:flex;align-items:center}.switch2{justify-content:center}.v-card__text,.v-card__title{word-break:normal}.logout{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;width:300px}.hr{margin:0 20px;border-top:1px solid #bdc7c7}.btn-div{display:flex;justify-content:flex-end}.logout-btn{width:100px;margin-right:10px;margin-bottom:10px}.layer2{position:absolute;width:100%;height:100%;background:#000;opacity:.6;top:0;left:0}.flex{display:flex;flex-direction:row}.station{width:90%}.v-slide-group__wrapper{overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.v-slide-group__wrapper::-webkit-scrollbar{display:none;width:0;background:transparent}button.slick-next:before,button.slick-prev:before{color:#271f40!important}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:40px}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(12px)!important}@media (max-width:1264px){.switch{align-items:center}}",""]),t.exports=n},1866:function(t,e,r){"use strict";r.r(e);r(31),r(28),r(30),r(37),r(33),r(38);var n=r(35),l=r(15),o=(r(1599),r(59),r(131),r(1571)),c=r(1678),d=r(1657),f=r.n(d),v=(r(1658),r(1659),r(100));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S,w={middleware:["isTkpmIpah"],layout:"status",methods:m(m({},Object(v.c)({setIpah2ManualFill:"setIpah2ManualFill",setIpah2ManualStop:"setIpah2ManualStop",setIpah2ManualNutrient:"setIpah2ManualNutrient",setIpah2ManualNutrientDuration:"setIpah2ManualNutrientDuration"})),{},{trigger:function(t,e,r){this.state2=!1,this.layerDrawer=!0,this.activeDevice=t,this.activeSwitch=r,this.stateDevice=1==e?"turn off":"turn on",console.log(this.activeDevice),console.log(this.activeSwitch)},yes:(S=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.layerDrawer=!1,this[e]=!this[e];case 2:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)}),cancel:function(){this.layerDrawer=!1},track:function(){var t=this;window.onclick=function(e){var r=document.getElementById("layerDrawer");e.target==r&&(t.layerDrawer=!1)}},fill:function(){this.setIpah2ManualFill(!0),console.log("fill")},stop:function(){this.setIpah2ManualStop(!0),console.log("stop")},nutrient:function(){this.duration?!Number.isInteger(this.duration)||this.duration<1?alert("Please select valid duration (integer number)"):(this.setIpah2ManualNutrientDuration(this.duration),this.setIpah2ManualNutrient(!0),console.log("heree")):alert("Please select valid duration")}}),data:function(){return{activeDevice:"",stateDevice:"",activeSwitch:"",layerDrawer:!1,state2:!0,rightDrawer:!1,switchPump:!1,switchPump1:!1,switchPump2:!1,switchPump3:!1,switchDosingPump:!1,switchSV1:!1,switchSV2:!1,switchSV3:!1,switchSV4:!1,switchSV5:!1,switchSV6:!1,switchSV7:!1,switchSV8:!1,switchSV9:!1,switchSV10:!1,switchSV11:!1,switchSV12:!1,switchSV13:!1,switchSV14:!1,switchSV15:!1,settings:{dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1,touchThreshold:5},substance:"(substance)",itemsSubstance:["water","fertilizer"],block:[],itemsBlock:["Block 1","Block 2","Block 3"],itemsDuration:["10","20","30"],duration:""}},components:{PageTitle:o.default,Ipah2Status:c.default,VueSlickCarousel:f.a},computed:m({},Object(v.d)({tkpmIpahStatus:function(t){return t.tkpmIpahStatus},tkpmIpahProcess:function(t){return t.tkpmIpahProcess}}))},_=(r(1797),r(130)),y=r(160),x=r.n(y),k=r(496),V=r(480),I=r(129),P=r(1578),O=r(1565),C=r(150),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("PageTitle",{attrs:{title:"STATUS"}}),t._v(" "),r("v-card",{staticClass:"elevation-10 "},[r("v-card-title",[t._v("\n      OPERATION\n    ")]),t._v(" "),r("v-row",[r("v-col",{staticClass:"col-lg-9 pb-0 ",attrs:{col:"12"}},[r("Ipah2Status",{attrs:{sv1:"red",sv2:"green",classSV1:1==t.tkpmIpahStatus.SV1?"filter-green":"filter-red",classSV2:1==t.tkpmIpahStatus.SV2?"filter-green":"filter-red",classSV3:1==t.tkpmIpahStatus.SV3?"filter-green":"filter-red",classSV4:1==t.tkpmIpahStatus.SV4?"filter-green":"filter-red",classSV5:1==t.tkpmIpahStatus.SV5?"filter-green":"filter-red",classSV6:1==t.tkpmIpahStatus.SV6?"filter-green":"filter-red",classSV7:1==t.tkpmIpahStatus.SV7?"filter-green":"filter-red",classSV8:1==t.tkpmIpahStatus.SV8?"filter-green":"filter-red",classSV9:1==t.tkpmIpahStatus.SV9?"filter-green":"filter-red",classSV10:1==t.tkpmIpahStatus.SV10?"filter-green":"filter-red",classSV11:1==t.tkpmIpahStatus.SV11?"filter-green":"filter-red",classSV12:1==t.tkpmIpahStatus.SV12?"filter-green":"filter-red",classSV13:1==t.tkpmIpahStatus.SV13?"filter-green":"filter-red",classSV14:1==t.tkpmIpahStatus.SV14?"filter-green":"filter-red",classSV15:1==t.tkpmIpahStatus.SV15?"filter-green":"filter-red",classPump:"filter-green",classDosingPump:1==t.tkpmIpahStatus.DP?"filter-green":"filter-red",classPumpNaturalWater:"filter-green",classPump1:1==t.tkpmIpahStatus.P1?"filter-green":"filter-red",classPump2:1==t.tkpmIpahStatus.P2?"filter-green":"filter-red",classPump3:1==t.tkpmIpahStatus.P3?"filter-green":"filter-red",ph:"",waterLvl:"",EC1:"",EC2:"",EC3:""}})],1),t._v(" "),r("v-col",{staticClass:"col-lg-3 pr-lg-10 pt-0",staticStyle:{display:"flex","justify-contents":"center","align-items":"center","flex-direction":"column"},attrs:{cols:"12"}},[r("v-card",{staticClass:"elevation-18 rounded-lg px-5 mb-5 "},[r("v-card-title",[t._v("PROCESS")]),t._v(" "),r("v-card-subtitle",{staticStyle:{"font-size":"1.2em"}},[t._v("\n            "+t._s(t.tkpmIpahProcess)+"\n          ")])],1),t._v(" "),r("v-card",{staticClass:"elevation-18 rounded-lg px-5 "},[r("v-card-title",{staticStyle:{"font-size":"1.3rem"}},[t._v("\n            MANUAL FERTIGATION CONTROL\n          ")]),t._v(" "),r("v-row",[r("v-col",[r("v-card-title",[t._v("\n                Water Filling for fetilizer solution tank\n              ")]),t._v(" "),r("div",[r("h4",{staticStyle:{"text-align":"justify"}},[t._v("\n                  Press "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v("FILL")]),t._v(" button to\n                  start filling water manually into fetilizer solution tank.\n                  Press "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v("STOP")]),t._v(" button to\n                  stop filling process.\n                ")]),t._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"space-evenly"}},[r("v-btn",{staticClass:"mt-4 mb-4",on:{click:t.fill}},[t._v("FILL")]),t._v(" "),r("v-btn",{staticClass:"mt-4 mb-4",on:{click:t.stop}},[t._v("STOP")])],1)]),t._v(" "),r("v-card-title",[t._v("\n                Nutrient Preparation\n              ")]),t._v(" "),r("div",[r("h4",{staticStyle:{"text-align":"justify"}},[t._v("\n                  Nutrient preparation is done via schedule set by user on\n                  schedule panel. It is done on\n                  "),r("span",{staticStyle:{"font-weight":"bold"}},[t._v("5.00am on choosen date")]),t._v(". Please fill EC value input ( eg: 1.00 ) and click button\n                  below to start nutrient preparation manually.\n                ")])]),t._v(" "),r("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[r("input",{directives:[{name:"mask",rawName:"v-mask",value:"#.##",expression:"'#.##'"},{name:"model",rawName:"v-model.number",value:t.duration,expression:"duration",modifiers:{number:!0}}],staticClass:"long2",attrs:{type:"text"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("v-btn",{staticClass:"mt-4 mb-4",on:{click:t.nutrient}},[t._v("Start Preparation")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-scroll-y-transition",[t.layerDrawer?r("div",{staticClass:"layer2",attrs:{id:"layerDrawer"}}):t._e()]),t._v(" "),r("v-scroll-y-transition",[t.layerDrawer?r("v-card",{staticClass:"logout elevation-12"},[r("v-card-title",[t._v("\n        Action\n      ")]),t._v(" "),r("hr",{staticClass:"hr"}),t._v(" "),r("v-card-subtitle",[t._v("\n        Are you sure you want to "+t._s(t.stateDevice)+" the "+t._s(t.activeDevice)+"?\n      ")]),t._v(" "),r("div",{staticClass:"btn-div"},[r("v-btn",{staticClass:"success logout-btn",on:{click:function(e){return t.yes(t.activeSwitch)}}},[t._v("Yes")]),t._v(" "),r("v-btn",{staticClass:"error logout-btn",on:{click:t.cancel}},[t._v("Cancel")])],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{PageTitle:r(1571).default}),x()(component,{VBtn:k.a,VCard:V.a,VCardSubtitle:I.b,VCardTitle:I.c,VCol:P.a,VRow:O.a,VScrollYTransition:C.d})}}]);