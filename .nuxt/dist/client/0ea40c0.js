(window.webpackJsonp=window.webpackJsonp||[]).push([[45,20,26,37,42,43,44,49,50],{1569:function(t,e,n){var content=n(1574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("b191e5c8",content,!0,{sourceMap:!1})},1572:function(t,e,n){"use strict";n.r(e);var r={props:["duration"]},o=(n(1573),n(130)),c=n(160),l=n.n(c),d=n(129),f=n(479),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"duration"},[n("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),n("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"2ca3c490",null);e.default=component.exports;l()(component,{VCardSubtitle:d.b,VIcon:f.a})},1573:function(t,e,n){"use strict";n(1569)},1574:function(t,e,n){var r=n(42)(!1);r.push([t.i,".duration[data-v-2ca3c490]{display:flex;align-items:center;margin-left:20px}.detail[data-v-2ca3c490]{padding:12px}@media (max-width:500px){.detail[data-v-2ca3c490]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-2ca3c490]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-2ca3c490]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-2ca3c490]{font-size:.65rem}}",""]),t.exports=r},1577:function(t,e,n){var content=n(1581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("80ba7a60",content,!0,{sourceMap:!1})},1578:function(t,e,n){"use strict";n(28),n(30),n(37),n(38);var r=n(11),o=(n(59),n(31),n(74),n(109),n(879),n(54),n(84),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(888),n(889),n(890),n(891),n(892),n(89),n(81),n(33),n(147),n(494),n(10)),c=n(148),l=n(15);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),x=m.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y=m.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(v),offset:Object.keys(x),order:Object.keys(y)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},1579:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},o=(n(1580),n(130)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"36ab8302",null);e.default=component.exports},1580:function(t,e,n){"use strict";n(1577)},1581:function(t,e,n){var r=n(42)(!1);r.push([t.i,".title[data-v-36ab8302]{color:#4e4e4e;font-size:1.4rem!important;font-weight:500;letter-spacing:2px!important;padding-left:20px;padding-top:15px}@media (max-width:500px){.title[data-v-36ab8302]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-36ab8302]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-36ab8302]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-36ab8302]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=r},1583:function(t,e,n){var content=n(1602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("1128d99e",content,!0,{sourceMap:!1})},1590:function(t,e,n){var content=n(1621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("39d1b476",content,!0,{sourceMap:!1})},1592:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(110),{data:function(){var t;return{option:{tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(r.a)(t,"splitNumber",5),Object(r.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(r.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(r.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(r.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(r.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(r.a)(t,"data",[{value:this.data,name:this.unit}]),t)]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},updated:function(){var t,option={tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(r.a)(t,"splitNumber",5),Object(r.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(r.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(r.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(r.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(r.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(r.a)(t,"data",[{value:this.data,name:this.unit}]),t)]};this.$echarts.init(document.getElementById(this.id)).setOption(option,!0)},props:["description","id","max","unit","data"]}),c=(n(1601),n(130)),l=n(160),d=n.n(l),f=n(129),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level"},[n("v-card-title",{staticClass:"sidebar rounded-lg mb-3"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:t.id,data:t.data}})],1)}),[],!1,null,"125412f6",null);e.default=component.exports;d()(component,{VCardTitle:f.c})},1601:function(t,e,n){"use strict";n(1583)},1602:function(t,e,n){var r=n(42)(!1);r.push([t.i,".v-card__title[data-v-125412f6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}",""]),t.exports=r},1603:function(t,e,n){"use strict";n.r(e);var r={components:{Duration:n(1572).default},props:["jetty","sensorData","sensorUnit","duration","lastUpdate"]},o=(n(1620),n(130)),c=n(160),l=n.n(c),d=n(480),f=n(129),m=n(479),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-15 rounded-md"},[n("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),n("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,e){return n("div",{key:e,staticClass:"reading",staticStyle:{"text-align":"center"},attrs:{sensorData:t.sensorData}},[n("v-card-subtitle",{staticClass:"top",class:data.class},[n("span",{staticStyle:{display:"flex"}},[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),n("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),n("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0),t._v(" "),n("hr",{staticClass:"hrData"}),t._v(" "),n("div",{staticStyle:{display:"flex","justify-contents":"center","align-items":"center","margin-left":"25px"}},[n("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),n("v-card-subtitle",{staticStyle:{display:"flex","justify-contents":"center","align-items":"center","padding-bottom":"15px"}},[t._v("\n      Updated on "+t._s(t.lastUpdate)+"\n    ")])],1)],1)}),[],!1,null,"60aaecea",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.b,VCardTitle:f.c,VIcon:m.a})},1620:function(t,e,n){"use strict";n(1590)},1621:function(t,e,n){var r=n(42)(!1);r.push([t.i,".v-card__title[data-v-60aaecea]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-60aaecea]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-60aaecea]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-60aaecea]{padding-bottom:20px}.left[data-v-60aaecea]{padding-left:10px}.reading-box[data-v-60aaecea]{justify-content:space-evenly}.reading[data-v-60aaecea],.reading-box[data-v-60aaecea]{display:flex;align-items:center}.reading[data-v-60aaecea]{flex-direction:column;flex-wrap:wrap}.hrData[data-v-60aaecea]{margin:-20px 20px 0}.low[data-v-60aaecea]{color:#000!important;font:normal}.high[data-v-60aaecea]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-60aaecea]{font-size:.9rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-60aaecea]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-60aaecea]{font-size:.9rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-60aaecea]{font-size:.85rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.65rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.6rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.7rem}}",""]),t.exports=r},1629:function(t,e,n){var content=n(1669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("c5597bf4",content,!0,{sourceMap:!1})},1630:function(t,e,n){var content=n(1671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("72e13944",content,!0,{sourceMap:!1})},1668:function(t,e,n){"use strict";n(1629)},1669:function(t,e,n){var r=n(42)(!1);r.push([t.i,".col[data-v-14d67aef],.col-6[data-v-14d67aef]{padding-left:4px!important;padding-right:4px!important}",""]),t.exports=r},1670:function(t,e,n){"use strict";n(1630)},1671:function(t,e,n){var r=n(42)(!1);r.push([t.i,".col[data-v-9c036c3e],.col-6[data-v-9c036c3e]{padding-left:4px!important;padding-right:4px!important}",""]),t.exports=r},1672:function(t,e,n){var content=n(1701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("09ef7548",content,!0,{sourceMap:!1})},1684:function(t,e,n){"use strict";n.r(e);var r=n(1592),o=n(1603),c={components:{Gauge:r.default,Data:o.default},props:["items","stations"]},l=(n(1668),n(130)),d=n(160),f=n.n(d),m=n(1578),v=n(1565),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"padding arragement"},[t.$vuetify.breakpoint.mdAndUp?n("div",{staticStyle:{width:"100%",display:"flex","flex-wrap":"wrap"}},t._l(t.stations,(function(t,e){return n("v-col",{key:e,class:4===t.cols?"col-md-4":"col-md-6"},[n("Data",{attrs:{jetty:t.description,sensorData:t.sensorData,lastUpdate:t.lastUpdate}})],1)})),1):n("div",{staticStyle:{width:"100%"}},t._l(t.stations,(function(t,e){return n("v-col",{key:e,attrs:{cols:"12"}},[n("Data",{attrs:{jetty:t.description,sensorData:t.sensorData,lastUpdate:t.lastUpdate}})],1)})),1)])}),[],!1,null,"14d67aef",null);e.default=component.exports;f()(component,{VCol:m.a,VRow:v.a})},1685:function(t,e,n){"use strict";n.r(e);var r={components:{Gauge:n(1592).default},props:["items"]},o=n(130),c=n(160),l=n.n(c),d=n(1578),f=n(1565),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"padding arragement"},[n("v-col",{attrs:{cols:"6",lg:"4"}},[n("Gauge",{attrs:{id:"LeafTemperature",data:t.items[0].LeafTemperature,max:"10",unit:"mg/L",description:"Leaf Temperature"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",lg:"4"}},[n("Gauge",{attrs:{id:"Humidity",data:t.items[0].Humidity,max:"40",unit:"°C",description:"Humidity"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VRow:f.a})},1686:function(t,e,n){"use strict";n.r(e);var r=n(1592),o=n(1603),c={components:{Gauge:r.default,Data:o.default},props:["items","stations"]},l=(n(1670),n(130)),d=n(160),f=n.n(d),m=n(1578),v=n(1565),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"padding arragement"},t._l(t.stations,(function(t,e){return n("v-col",{key:e,class:4===t.cols?"col-md-4":"col-md-6"},[n("Data",{attrs:{jetty:t.description,sensorData:t.sensorData}})],1)})),1)}),[],!1,null,"9c036c3e",null);e.default=component.exports;f()(component,{VCol:m.a,VRow:v.a})},1700:function(t,e,n){"use strict";n(1672)},1701:function(t,e,n){var r=n(42)(!1);r.push([t.i,".padding[data-v-79080712]{padding:0 1em}.arragement[data-v-79080712]{display:flex;justify-content:space-around}.button[data-v-79080712]{padding:5px;display:flex;justify-content:center}.active[data-v-79080712]{color:#f0f8ff;background:#395524}.category[data-v-79080712]:hover{background:rgba(57,85,36,.64314);color:#f0f8ff}@media (max-width:500px){.button[data-v-79080712]{width:100%;display:block;font-size:16px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:3px 15px}}",""]),t.exports=r},1754:function(t,e,n){"use strict";n.r(e);n(31),n(28),n(30),n(37),n(33),n(38);var r=n(11),o=n(1579),c=n(1684),l=n(1685),d=n(1686),f=n(100);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={components:{CardTitle:o.default,CardDataSoil:c.default,CardDataLeaf:l.default,CardDataWater:d.default},data:function(){return{items:[{NPK:0,pH:0,EC:0,Moisture:0,Temperature:0,LeafTemperature:0,Humidity:0,WaterLevel:0,WaterPH:0,WaterEC:0}],categories:["Soil","Nutrient House"],activeView:0}},methods:{button:function(t){console.log("button 1"),this.activeView=t}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.d)({activeUser:function(t){return t.activeUser},stations:function(t){return t.stations}}))},x=(n(1700),n(130)),y=n(160),h=n.n(y),_=n(480),O=n(129),j=n(1578),w=n(373),C=n(1565),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"card-color elevation-12 "},[n("v-card-title",{staticClass:"color mb-4"},[t._v("REAL-TIME DATA")]),t._v(" "),n("v-row",{staticStyle:{display:"flex","justify-content":"space-evenly"}},t._l(t.stations[t.activeUser].sensorType,(function(e,r){return n("v-col",{key:r,staticClass:"mb-3 categories-container",attrs:{cols:"4"}},[n("v-card",{staticClass:"category elevation-10",class:{active:r===t.activeView},on:{click:function(e){return t.button(r)}}},[n("v-img",{staticClass:"station-img",staticStyle:{"object-fit":"cover"},attrs:{src:e.image,"max-height":"150px"}}),t._v(" "),n("v-card-title",{staticClass:"button"},[t._v("\n            "+t._s(e.name)+"\n          ")])],1)],1)})),1),t._v(" "),0===t.activeView?n("CardDataSoil",{attrs:{items:t.items,stations:t.stations[t.activeUser].sensorSoil}}):t._e(),t._v(" "),1===t.activeView?n("CardDataWater",{attrs:{items:t.items,stations:t.stations[t.activeUser].sensorWater}}):t._e()],1)],1)}),[],!1,null,"79080712",null);e.default=component.exports;h()(component,{VCard:_.a,VCardTitle:O.c,VCol:j.a,VImg:w.a,VRow:C.a})}}]);