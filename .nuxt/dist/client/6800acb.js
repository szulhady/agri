(window.webpackJsonp=window.webpackJsonp||[]).push([[49,37],{1569:function(t,e,d){var content=d(1574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(43).default)("b191e5c8",content,!0,{sourceMap:!1})},1572:function(t,e,d){"use strict";d.r(e);var n={props:["duration"]},c=(d(1573),d(130)),o=d(160),r=d.n(o),l=d(129),v=d(479),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"duration"},[d("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),d("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"2ca3c490",null);e.default=component.exports;r()(component,{VCardSubtitle:l.b,VIcon:v.a})},1573:function(t,e,d){"use strict";d(1569)},1574:function(t,e,d){var n=d(42)(!1);n.push([t.i,".duration[data-v-2ca3c490]{display:flex;align-items:center;margin-left:20px}.detail[data-v-2ca3c490]{padding:12px}@media (max-width:500px){.detail[data-v-2ca3c490]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-2ca3c490]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-2ca3c490]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-2ca3c490]{font-size:.65rem}}",""]),t.exports=n},1590:function(t,e,d){var content=d(1621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(43).default)("39d1b476",content,!0,{sourceMap:!1})},1603:function(t,e,d){"use strict";d.r(e);var n={components:{Duration:d(1572).default},props:["jetty","sensorData","sensorUnit","duration","lastUpdate"]},c=(d(1620),d(130)),o=d(160),r=d.n(o),l=d(480),v=d(129),m=d(479),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-card",{staticClass:"elevation-15 rounded-md"},[d("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),d("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,e){return d("div",{key:e,staticClass:"reading",staticStyle:{"text-align":"center"},attrs:{sensorData:t.sensorData}},[d("v-card-subtitle",{staticClass:"top",class:data.class},[d("span",{staticStyle:{display:"flex"}},[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),d("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),d("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0),t._v(" "),d("hr",{staticClass:"hrData"}),t._v(" "),d("div",{staticStyle:{display:"flex","justify-contents":"center","align-items":"center","margin-left":"25px"}},[d("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),d("v-card-subtitle",{staticStyle:{display:"flex","justify-contents":"center","align-items":"center","padding-bottom":"15px"}},[t._v("\n      Updated on "+t._s(t.lastUpdate)+"\n    ")])],1)],1)}),[],!1,null,"60aaecea",null);e.default=component.exports;r()(component,{VCard:l.a,VCardSubtitle:v.b,VCardTitle:v.d,VIcon:m.a})},1620:function(t,e,d){"use strict";d(1590)},1621:function(t,e,d){var n=d(42)(!1);n.push([t.i,".v-card__title[data-v-60aaecea]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-60aaecea]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-60aaecea]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-60aaecea]{padding-bottom:20px}.left[data-v-60aaecea]{padding-left:10px}.reading-box[data-v-60aaecea]{justify-content:space-evenly}.reading[data-v-60aaecea],.reading-box[data-v-60aaecea]{display:flex;align-items:center}.reading[data-v-60aaecea]{flex-direction:column;flex-wrap:wrap}.hrData[data-v-60aaecea]{margin:-20px 20px 0}.low[data-v-60aaecea]{color:#000!important;font:normal}.high[data-v-60aaecea]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-60aaecea]{font-size:.9rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-60aaecea]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-60aaecea]{font-size:.9rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-60aaecea]{font-size:.85rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.65rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-60aaecea]{font-size:.8rem}.bottom[data-v-60aaecea],.top[data-v-60aaecea]{font-size:.6rem}.bottom[data-v-60aaecea],.middle[data-v-60aaecea],.top[data-v-60aaecea]{padding-left:0;padding-right:0}.middle[data-v-60aaecea]{font-size:.7rem}}",""]),t.exports=n}}]);