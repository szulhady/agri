(window.webpackJsonp=window.webpackJsonp||[]).push([[18,31],{1537:function(d,t,e){var content=e(1543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[d.i,content,""]]),content.locals&&(d.exports=content.locals);(0,e(42).default)("620099b6",content,!0,{sourceMap:!1})},1540:function(d,t,e){"use strict";e.r(t);var n={props:["duration"]},o=(e(1542),e(122)),r=e(154),c=e.n(r),l=e(121),v=e(467),component=Object(o.a)(n,(function(){var d=this,t=d.$createElement,e=d._self._c||t;return e("div",{staticClass:"duration"},[e("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),d._v(" "),e("v-card-subtitle",{staticClass:"detail"},[d._v("\n    "+d._s(d.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);t.default=component.exports;c()(component,{VCardSubtitle:l.b,VIcon:v.a})},1542:function(d,t,e){"use strict";e(1537)},1543:function(d,t,e){var n=e(41)(!1);n.push([d.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),d.exports=n},1553:function(d,t,e){var content=e(1576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[d.i,content,""]]),content.locals&&(d.exports=content.locals);(0,e(42).default)("e11a8a12",content,!0,{sourceMap:!1})},1566:function(d,t,e){"use strict";e.r(t);var n={components:{Duration:e(1540).default},props:["jetty","sensorData","sensorUnit","duration"]},o=(e(1575),e(122)),r=e(154),c=e.n(r),l=e(466),v=e(121),component=Object(o.a)(n,(function(){var d=this,t=d.$createElement,e=d._self._c||t;return e("v-card",{staticClass:"elevation-15 rounded-md"},[e("v-card-title",{staticClass:"sidebar "},[d._v("\n    "+d._s(d.jetty)+"\n  ")]),d._v(" "),e("div",{staticClass:"reading-box"},d._l(d.sensorData,(function(data,t){return e("div",{key:t,staticClass:"reading",attrs:{sensorData:d.sensorData}},[e("v-card-subtitle",{staticClass:"top",class:data.class},[e("span",[d._v("\n          "+d._s(data.description)+"\n        ")])]),d._v(" "),e("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[d._v("\n        "+d._s(data.data)+"\n      ")]),d._v(" "),e("v-card-subtitle",{staticClass:"bottom"},[d._v("\n        "+d._s(data.unit)+"\n      ")])],1)})),0)],1)}),[],!1,null,"78cdbd4d",null);t.default=component.exports;c()(component,{VCard:l.a,VCardSubtitle:v.b,VCardTitle:v.c})},1575:function(d,t,e){"use strict";e(1553)},1576:function(d,t,e){var n=e(41)(!1);n.push([d.i,".v-card__title[data-v-78cdbd4d]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-78cdbd4d]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-78cdbd4d]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-78cdbd4d]{padding-bottom:20px}.reading-box[data-v-78cdbd4d]{justify-content:space-evenly}.reading[data-v-78cdbd4d],.reading-box[data-v-78cdbd4d]{display:flex;align-items:center}.reading[data-v-78cdbd4d]{flex-direction:column;flex-wrap:wrap;max-width:100px}hr[data-v-78cdbd4d]{margin:0 20px}.low[data-v-78cdbd4d]{color:#000!important;font:normal}.high[data-v-78cdbd4d]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-78cdbd4d]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-78cdbd4d]{font-size:.85rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.65rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.6rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.7rem}}",""]),d.exports=n}}]);