(window.webpackJsonp=window.webpackJsonp||[]).push([[15,31,46],{1538:function(t,d,e){var content=e(1544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("620099b6",content,!0,{sourceMap:!1})},1541:function(t,d,e){"use strict";e.r(d);var n={props:["duration"]},l=(e(1543),e(122)),r=e(154),o=e.n(r),c=e(121),f=e(467),component=Object(l.a)(n,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",{staticClass:"duration"},[e("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),e("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);d.default=component.exports;o()(component,{VCardSubtitle:c.b,VIcon:f.a})},1543:function(t,d,e){"use strict";e(1538)},1544:function(t,d,e){var n=e(41)(!1);n.push([t.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),t.exports=n},1562:function(t,d,e){var content=e(1586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("c43512f6",content,!0,{sourceMap:!1})},1585:function(t,d,e){"use strict";e(1562)},1586:function(t,d,e){var n=e(41)(!1);n.push([t.i,".summary-detail[data-v-5b109fdb]{display:flex}.icon-detail[data-v-5b109fdb]{flex:2}.detail[data-v-5b109fdb]{flex:4;display:flex;flex-direction:column;align-items:flex-end}.v-icon[data-v-5b109fdb]{font-size:70px}.detail .text[data-v-5b109fdb]{font-size:1.3rem}.display-2[data-v-5b109fdb]{font-size:2.2rem!important}.v-card__subtitle[data-v-5b109fdb]{padding-bottom:0}hr[data-v-5b109fdb]{margin:0 20px}",""]),t.exports=n},1603:function(t,d,e){"use strict";e.r(d);var n={props:["detail","icon","data","classIcon"],components:{Duration:e(1541).default}},l=(e(1585),e(122)),r=e(154),o=e.n(r),c=e(466),f=e(121),m=e(467),component=Object(l.a)(n,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("v-card",{staticClass:"elevation-15 rounded-lg"},[e("div",{staticClass:"summary-detail"},[e("v-icon",{staticClass:"icon-detail d-none d-md-flex",class:t.icon,attrs:{color:t.classIcon}}),t._v(" "),e("div",{staticClass:"detail"},[e("v-card-subtitle",{staticClass:"text"},[t._v("\n        "+t._s(t.detail)+"\n      ")]),t._v(" "),e("v-card-subtitle",{staticClass:"display-2"},[t._v("\n        "+t._s(t.data)+"\n      ")])],1)],1),t._v(" "),e("hr",{staticClass:"d-none d-md-flex"}),t._v(" "),e("Duration",{attrs:{duration:"Updated just now"}})],1)}),[],!1,null,"5b109fdb",null);d.default=component.exports;o()(component,{Duration:e(1541).default}),o()(component,{VCard:c.a,VCardSubtitle:f.b,VIcon:m.a})},1744:function(t,d,e){"use strict";e.r(d);var n={data:function(){return{summary:[{detail:"Stations",icon:"mdi mdi-map-marker-radius",data:"3",class:"primary"},{detail:"SPH",icon:"mdi mdi-checkbox-multiple-marked",data:"1",class:"accent"},{detail:"Warnings",icon:"mdi mdi-alert-rhombus-outline",data:"0",class:"error"}]}},components:{Summary:e(1603).default}},l=e(122),r=e(154),o=e.n(r),c=e(1837),f=e(1838),component=Object(l.a)(n,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("v-row",t._l(t.summary,(function(t,d){return e("v-col",{key:d},[e("Summary",{attrs:{detail:t.detail,icon:t.icon,data:t.data,classIcon:t.class}})],1)})),1)}),[],!1,null,null,null);d.default=component.exports;o()(component,{VCol:c.a,VRow:f.a})}}]);