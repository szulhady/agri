(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17,19,25],{1532:function(t,d,e){var content=e(1537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("620099b6",content,!0,{sourceMap:!1})},1535:function(t,d,e){"use strict";e.r(d);var n={props:["duration"]},o=(e(1536),e(122)),r=e(154),c=e.n(r),l=e(121),m=e(465),component=Object(o.a)(n,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",{staticClass:"duration"},[e("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),e("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);d.default=component.exports;c()(component,{VCardSubtitle:l.a,VIcon:m.a})},1536:function(t,d,e){"use strict";e(1532)},1537:function(t,d,e){var n=e(41)(!1);n.push([t.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),t.exports=n},1541:function(t,d,e){var content=e(1546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("80ba7a60",content,!0,{sourceMap:!1})},1542:function(t,d,e){"use strict";e.r(d);var n={props:["title"]},o=(e(1545),e(122)),component=Object(o.a)(n,(function(){var t=this,d=t.$createElement;return(t._self._c||d)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"36ab8302",null);d.default=component.exports},1545:function(t,d,e){"use strict";e(1541)},1546:function(t,d,e){var n=e(41)(!1);n.push([t.i,".title[data-v-36ab8302]{color:#4e4e4e;font-size:1.4rem!important;font-weight:500;letter-spacing:2px!important;padding-left:20px;padding-top:15px}@media (max-width:500px){.title[data-v-36ab8302]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-36ab8302]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-36ab8302]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-36ab8302]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=n},1547:function(t,d,e){var content=e(1568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("e11a8a12",content,!0,{sourceMap:!1})},1560:function(t,d,e){"use strict";e.r(d);var n={components:{Duration:e(1535).default},props:["jetty","sensorData","sensorUnit","duration"]},o=(e(1567),e(122)),r=e(154),c=e.n(r),l=e(464),m=e(121),component=Object(o.a)(n,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("v-card",{staticClass:"elevation-15 rounded-md"},[e("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),e("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,d){return e("div",{key:d,staticClass:"reading",attrs:{sensorData:t.sensorData}},[e("v-card-subtitle",{staticClass:"top",class:data.class},[e("span",[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),e("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),e("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0)],1)}),[],!1,null,"78cdbd4d",null);d.default=component.exports;c()(component,{VCard:l.a,VCardSubtitle:m.a,VCardTitle:m.b})},1567:function(t,d,e){"use strict";e(1547)},1568:function(t,d,e){var n=e(41)(!1);n.push([t.i,".v-card__title[data-v-78cdbd4d]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-78cdbd4d]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-78cdbd4d]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-78cdbd4d]{padding-bottom:20px}.reading-box[data-v-78cdbd4d]{justify-content:space-evenly}.reading[data-v-78cdbd4d],.reading-box[data-v-78cdbd4d]{display:flex;align-items:center}.reading[data-v-78cdbd4d]{flex-direction:column;flex-wrap:wrap;max-width:100px}hr[data-v-78cdbd4d]{margin:0 20px}.low[data-v-78cdbd4d]{color:#000!important;font:normal}.high[data-v-78cdbd4d]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-78cdbd4d]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-78cdbd4d]{font-size:.85rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.65rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.6rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.7rem}}",""]),t.exports=n},1585:function(t,d,e){var content=e(1627);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("47a774b8",content,!0,{sourceMap:!1})},1626:function(t,d,e){"use strict";e(1585)},1627:function(t,d,e){var n=e(41)(!1);n.push([t.i,".reading-card-box[data-v-06f690ec]{padding:0 20px!important}",""]),t.exports=n},1654:function(t,d,e){"use strict";e.r(d);e(31),e(27),e(30),e(38),e(32),e(39);var n=e(14),o=e(92),r=e(1542);function c(object,t){var d=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),d.push.apply(d,e)}return d}var l={components:{Data:e(1560).default,CardTitle:r.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(d){Object(n.a)(t,d,source[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(d){Object.defineProperty(t,d,Object.getOwnPropertyDescriptor(source,d))}))}return t}({},Object(o.d)({stations2:function(t){return t.stations},durationPetrochemicalJetty:function(t){return t.durationPetrochemicalJetty}})),data:function(){return{}},props:["stations"]},m=(e(1626),e(122)),f=e(154),v=e.n(f),x=e(1816),h=e(1817),component=Object(m.a)(l,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("v-row",{staticClass:"reading-card-box"},t._l(t.stations,(function(d,n){return e("v-col",{key:n,staticClass:"col-md-6",attrs:{cols:"12"}},[e("Data",{attrs:{jetty:t.stations[n].description,sensorData:t.stations[n].sensorData,duration:t.durationPetrochemicalJetty}})],1)})),1)}),[],!1,null,"06f690ec",null);d.default=component.exports;v()(component,{VCol:x.a,VRow:h.a})}}]);