(window.webpackJsonp=window.webpackJsonp||[]).push([[64,12,13,14,18,20,31],{1537:function(t,e,r){var content=r(1543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("620099b6",content,!0,{sourceMap:!1})},1540:function(t,e,r){"use strict";r.r(e);var n={props:["duration"]},o=(r(1542),r(122)),d=r(154),c=r.n(d),l=r(121),f=r(467),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"duration"},[r("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),r("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);e.default=component.exports;c()(component,{VCardSubtitle:l.b,VIcon:f.a})},1542:function(t,e,r){"use strict";r(1537)},1543:function(t,e,r){var n=r(41)(!1);n.push([t.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),t.exports=n},1546:function(t,e,r){var content=r(1551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("80ba7a60",content,!0,{sourceMap:!1})},1547:function(t,e,r){"use strict";r.r(e);var n={props:["title"]},o=(r(1550),r(122)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"36ab8302",null);e.default=component.exports},1550:function(t,e,r){"use strict";r(1546)},1551:function(t,e,r){var n=r(41)(!1);n.push([t.i,".title[data-v-36ab8302]{color:#4e4e4e;font-size:1.4rem!important;font-weight:500;letter-spacing:2px!important;padding-left:20px;padding-top:15px}@media (max-width:500px){.title[data-v-36ab8302]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-36ab8302]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-36ab8302]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-36ab8302]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=n},1553:function(t,e,r){var content=r(1576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("e11a8a12",content,!0,{sourceMap:!1})},1566:function(t,e,r){"use strict";r.r(e);var n={components:{Duration:r(1540).default},props:["jetty","sensorData","sensorUnit","duration"]},o=(r(1575),r(122)),d=r(154),c=r.n(d),l=r(466),f=r(121),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"elevation-15 rounded-md"},[r("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),r("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,e){return r("div",{key:e,staticClass:"reading",attrs:{sensorData:t.sensorData}},[r("v-card-subtitle",{staticClass:"top",class:data.class},[r("span",[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),r("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),r("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0)],1)}),[],!1,null,"78cdbd4d",null);e.default=component.exports;c()(component,{VCard:l.a,VCardSubtitle:f.b,VCardTitle:f.c})},1575:function(t,e,r){"use strict";r(1553)},1576:function(t,e,r){var n=r(41)(!1);n.push([t.i,".v-card__title[data-v-78cdbd4d]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-78cdbd4d]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-78cdbd4d]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-78cdbd4d]{padding-bottom:20px}.reading-box[data-v-78cdbd4d]{justify-content:space-evenly}.reading[data-v-78cdbd4d],.reading-box[data-v-78cdbd4d]{display:flex;align-items:center}.reading[data-v-78cdbd4d]{flex-direction:column;flex-wrap:wrap;max-width:100px}hr[data-v-78cdbd4d]{margin:0 20px}.low[data-v-78cdbd4d]{color:#000!important;font:normal}.high[data-v-78cdbd4d]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-78cdbd4d]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-78cdbd4d]{font-size:.85rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.65rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.6rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.7rem}}",""]),t.exports=n},1593:function(t,e,r){var content=r(1644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("3a75d035",content,!0,{sourceMap:!1})},1594:function(t,e,r){var content=r(1646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("47a774b8",content,!0,{sourceMap:!1})},1595:function(t,e,r){var content=r(1648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("6628ab80",content,!0,{sourceMap:!1})},1643:function(t,e,r){"use strict";r(1593)},1644:function(t,e,r){var n=r(41)(!1);n.push([t.i,".reading-card-box[data-v-92f5f7be]{padding:0 20px!important}",""]),t.exports=n},1645:function(t,e,r){"use strict";r(1594)},1646:function(t,e,r){var n=r(41)(!1);n.push([t.i,".reading-card-box[data-v-06f690ec]{padding:0 20px!important}",""]),t.exports=n},1647:function(t,e,r){"use strict";r(1595)},1648:function(t,e,r){var n=r(41)(!1);n.push([t.i,".reading-card-box[data-v-ff6af972]{padding:0 20px!important}",""]),t.exports=n},1671:function(t,e,r){"use strict";r.r(e);r(31),r(27),r(30),r(38),r(32),r(39);var n=r(17),o=r(92),d=r(1547);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{Data:r(1566).default,CardTitle:d.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)({durationPetrochemicalJetty:function(t){return t.durationPetrochemicalJetty},durationWhaftJetty:function(t){return t.durationWhaftJetty},durationMP10Jetty:function(t){return t.durationMP10Jetty},durationDGYard:function(t){return t.durationDGYard},durationLNG:function(t){return t.durationLNG}})),data:function(){return{}},props:["stations"]},f=(r(1643),r(122)),m=r(154),v=r.n(m),S=r(1836),h=r(1837),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"reading-card-box"},t._l(t.stations,(function(e,n){return r("v-col",{key:n,class:4===e.cols?"col-md-4":"col-md-6",attrs:{cols:"12"}},[r("Data",{attrs:{jetty:t.stations[n].description,sensorData:t.stations[n].sensorData,duration:t.durationPetrochemicalJetty}})],1)})),1)}),[],!1,null,"92f5f7be",null);e.default=component.exports;v()(component,{VCol:S.a,VRow:h.a})},1672:function(t,e,r){"use strict";r.r(e);r(31),r(27),r(30),r(38),r(32),r(39);var n=r(17),o=r(92),d=r(1547);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{Data:r(1566).default,CardTitle:d.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)({stations2:function(t){return t.stations},durationPetrochemicalJetty:function(t){return t.durationPetrochemicalJetty}})),data:function(){return{}},props:["stations"]},f=(r(1645),r(122)),m=r(154),v=r.n(m),S=r(1836),h=r(1837),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"reading-card-box"},t._l(t.stations,(function(e,n){return r("v-col",{key:n,staticClass:"col-md-6",attrs:{cols:"12"}},[r("Data",{attrs:{jetty:t.stations[n].description,sensorData:t.stations[n].sensorData,duration:t.durationPetrochemicalJetty}})],1)})),1)}),[],!1,null,"06f690ec",null);e.default=component.exports;v()(component,{VCol:S.a,VRow:h.a})},1673:function(t,e,r){"use strict";r.r(e);r(31),r(27),r(30),r(38),r(32),r(39);var n=r(17),o=r(92),d=r(1547);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{Data:r(1566).default,CardTitle:d.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)({stations2:function(t){return t.stationsWater},durationPetrochemicalJetty:function(t){return t.durationPetrochemicalJetty},durationWhaftJetty:function(t){return t.durationWhaftJetty},durationMP10Jetty:function(t){return t.durationMP10Jetty},durationDGYard:function(t){return t.durationDGYard},durationLNG:function(t){return t.durationLNG}})),data:function(){return{}},props:["stations"]},f=(r(1647),r(122)),m=r(154),v=r.n(m),S=r(1836),h=r(1837),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"reading-card-box",staticStyle:{"justify-content":"space-evenly"}},t._l(t.stations,(function(e,n){return r("v-col",{key:n,class:4===e.cols?"col-md-4":"col-md-6",attrs:{cols:"12"}},[r("Data",{attrs:{jetty:t.stations[n].description,sensorData:t.stations[n].sensorData,duration:t.durationPetrochemicalJetty}})],1)})),1)}),[],!1,null,"ff6af972",null);e.default=component.exports;v()(component,{VCol:S.a,VRow:h.a})},1711:function(t,e,r){var content=r(1766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("e182aa60",content,!0,{sourceMap:!1})},1765:function(t,e,r){"use strict";r(1711)},1766:function(t,e,r){var n=r(41)(!1);n.push([t.i,".padding[data-v-7773977b]{padding:0 1em}.arragement[data-v-7773977b]{display:flex;justify-content:space-around}.button[data-v-7773977b]{padding:5px}.active[data-v-7773977b]{color:#f0f8ff;background:#395524}.category[data-v-7773977b]:hover{background:rgba(57,85,36,.64314);color:#f0f8ff}",""]),t.exports=n},1841:function(t,e,r){"use strict";r.r(e);r(31),r(27),r(30),r(38),r(32),r(39);var n=r(17),o=r(1547),d=r(1671),c=r(1672),l=r(1673),f=r(1703),m=r(1704),v=r(1705),S=r(92);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={components:{CardTitle:o.default,CardDataSoilAdmin:d.default,CardDataLeafAdmin:c.default,CardDataWaterAdmin:l.default,ipahStatusAdmin:f.default,ipah2StatusAdmin:m.default,tkpmPagohStatusAdmin:v.default},data:function(){return{items:[{NPK:0,pH:0,EC:0,Moisture:0,Temperature:0,LeafTemperature:0,Humidity:0,WaterNPK:0,WaterPH:0,WaterEC:0}],categories:["Soil","Water"],activeStation:0,activeSensor:0}},methods:{button:function(t){console.log("button 1"),this.activeStation=t,this.activeSensor=0,console.log(this.stations2)},button2:function(t){console.log("button 2"),this.activeSensor=t,console.log(this.activeSensor)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(S.d)({stations:function(t){return t.stations},ipahStatus:function(t){return t.ipahStatus},tkpmIpahStatus:function(t){return t.tkpmIpahStatus},tkpmPagohStatus:function(t){return t.tkpmPagohStatus}}))},x=(r(1765),r(122)),P=r(154),V=r.n(P),O=r(466),_=r(121),j=r(1836),w=r(363),k=r(1837),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"card-color elevation-12 "},[r("v-card-title",{staticClass:"color mb-4"},[t._v("STATUS")]),t._v(" "),r("v-row",{staticStyle:{display:"flex","justify-content":"space-evenly"}},t._l(t.stations.slice(0,-1),(function(e,n){return r("v-col",{key:n,staticClass:"mb-3 categories-container",attrs:{cols:"3"}},[r("v-card",{staticClass:"category elevation-10",class:{active:n===t.activeStation},on:{click:function(e){return t.button(n)}}},[r("v-img",{staticClass:"station-img",attrs:{src:e.image,"max-height":"120px"}}),t._v(" "),r("v-card-title",{staticClass:"button",staticStyle:{"justify-content":"center"}},[t._v("\n            "+t._s(e.station)+"\n          ")])],1)],1)})),1)],1),t._v(" "),r("v-card",{staticClass:"elevation-10 mt-10"},[0===t.activeStation?r("div",[r("ipahStatusAdmin",{attrs:{classSV1:1==t.ipahStatus.SV1?"filter-green":"filter-red",classSV2:1==t.ipahStatus.SV2?"filter-green":"filter-red",classSV3:1==t.ipahStatus.SV3?"filter-green":"filter-red",classSV4:1==t.ipahStatus.SV4?"filter-green":"filter-red",classSV5:1==t.ipahStatus.SV5?"filter-green":"filter-red",classSV6:1==t.ipahStatus.SV6?"filter-green":"filter-red",classPump:1==t.ipahStatus.P?"filter-green":"filter-red",classDosingPump:1==t.ipahStatus.DP?"filter-green":"filter-red"}})],1):t._e(),t._v(" "),1===t.activeStation?r("div",[r("ipah2StatusAdmin",{attrs:{classSV1:1==t.tkpmIpahStatus.SV1?"filter-green":"filter-red",classSV2:1==t.tkpmIpahStatus.SV2?"filter-green":"filter-red",classSV3:1==t.tkpmIpahStatus.SV3?"filter-green":"filter-red",classSV4:1==t.tkpmIpahStatus.SV4?"filter-green":"filter-red",classSV5:1==t.tkpmIpahStatus.SV5?"filter-green":"filter-red",classSV6:1==t.tkpmIpahStatus.SV6?"filter-green":"filter-red",classSV7:1==t.tkpmIpahStatus.SV7?"filter-green":"filter-red",classSV8:1==t.tkpmIpahStatus.SV8?"filter-green":"filter-red",classSV9:1==t.tkpmIpahStatus.SV9?"filter-green":"filter-red",classSV10:1==t.tkpmIpahStatus.SV10?"filter-green":"filter-red",classSV11:1==t.tkpmIpahStatus.SV11?"filter-green":"filter-red",classSV12:1==t.tkpmIpahStatus.SV12?"filter-green":"filter-red",classSV13:1==t.tkpmIpahStatus.SV13?"filter-green":"filter-red",classSV14:1==t.tkpmIpahStatus.SV14?"filter-green":"filter-red",classSV15:1==t.tkpmIpahStatus.SV15?"filter-green":"filter-red",classPump:"filter-green",classDosingPump:1==t.tkpmIpahStatus.DP?"filter-green":"filter-red",classPumpNaturalWater:"filter-green",classPump1:1==t.tkpmIpahStatus.P1?"filter-green":"filter-red",classPump2:1==t.tkpmIpahStatus.P2?"filter-green":"filter-red",classPump3:1==t.tkpmIpahStatus.P3?"filter-green":"filter-red",ph:"7"}})],1):t._e(),t._v(" "),2===t.activeStation?r("div",[r("tkpmPagohStatusAdmin",{attrs:{classSV1:1==t.tkpmPagohStatus.SV1?"filter-green":"filter-red",classSV2:1==t.tkpmPagohStatus.SV2?"filter-green":"filter-red",classSV3:1==t.tkpmPagohStatus.SV3?"filter-green":"filter-red",classSV4:1==t.tkpmPagohStatus.SV4?"filter-green":"filter-red",classSV5:1==t.tkpmPagohStatus.SV5?"filter-green":"filter-red",classSV6:1==t.tkpmPagohStatus.SV6?"filter-green":"filter-red",classSV7:1==t.tkpmPagohStatus.SV7?"filter-green":"filter-red",classSV8:1==t.tkpmPagohStatus.SV8?"filter-green":"filter-red",classSV9:1==t.tkpmPagohStatus.SV9?"filter-green":"filter-red",classSV10:1==t.tkpmPagohStatus.SV10?"filter-green":"filter-red",classSV11:1==t.tkpmPagohStatus.SV11?"filter-green":"filter-red",classSV12:1==t.tkpmPagohStatus.SV12?"filter-green":"filter-red",classSV13:1==t.tkpmPagohStatus.SV13?"filter-green":"filter-red",classSV14:1==t.tkpmPagohStatus.SV14?"filter-green":"filter-red",classDosingPump1:1==t.tkpmPagohStatus.DP1?"filter-green":"filter-red",classDosingPump2:1==t.tkpmPagohStatus.DP2?"filter-green":"filter-red",classPump1:1==t.tkpmPagohStatus.P1?"filter-green":"filter-red",classPump2:1==t.tkpmPagohStatus.P2?"filter-green":"filter-red",classPump3:1==t.tkpmPagohStatus.P3?"filter-green":"filter-red",classPumpNaturalWater:1==t.tkpmPagohStatus.PNW?"filter-green":"filter-red"}})],1):t._e()])],1)}),[],!1,null,"7773977b",null);e.default=component.exports;V()(component,{VCard:O.a,VCardTitle:_.c,VCol:j.a,VImg:w.a,VRow:k.a})}}]);