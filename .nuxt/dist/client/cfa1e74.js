(window.webpackJsonp=window.webpackJsonp||[]).push([[31,25,37,38],{1532:function(t,e,d){var content=d(1537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(42).default)("620099b6",content,!0,{sourceMap:!1})},1535:function(t,e,d){"use strict";d.r(e);var n={props:["duration"]},o=(d(1536),d(122)),r=d(154),l=d.n(r),c=d(121),f=d(465),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"duration"},[d("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),d("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);e.default=component.exports;l()(component,{VCardSubtitle:c.a,VIcon:f.a})},1536:function(t,e,d){"use strict";d(1532)},1537:function(t,e,d){var n=d(41)(!1);n.push([t.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),t.exports=n},1552:function(t,e,d){var content=d(1572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(42).default)("1128d99e",content,!0,{sourceMap:!1})},1559:function(t,e,d){var content=d(1583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(42).default)("cff4b3e2",content,!0,{sourceMap:!1})},1561:function(t,e,d){"use strict";d.r(e);var n=d(14),o=(d(139),{data:function(){var t;return{option:{tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(n.a)(t,"splitNumber",5),Object(n.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(n.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(n.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(n.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(n.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(n.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(n.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(n.a)(t,"data",[{value:this.data,name:this.unit}]),t)]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},updated:function(){var t,option={tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(n.a)(t,"splitNumber",5),Object(n.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(n.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(n.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(n.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(n.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(n.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(n.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(n.a)(t,"data",[{value:this.data,name:this.unit}]),t)]};this.$echarts.init(document.getElementById(this.id)).setOption(option,!0)},props:["description","id","max","unit","data"]}),r=(d(1571),d(122)),l=d(154),c=d.n(l),f=d(121),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"level"},[d("v-card-title",{staticClass:"sidebar rounded-lg mb-3"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),d("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:t.id,data:t.data}})],1)}),[],!1,null,"125412f6",null);e.default=component.exports;c()(component,{VCardTitle:f.b})},1571:function(t,e,d){"use strict";d(1552)},1572:function(t,e,d){var n=d(41)(!1);n.push([t.i,".v-card__title[data-v-125412f6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}",""]),t.exports=n},1573:function(t,e,d){"use strict";d.r(e);var n={components:{Duration:d(1535).default},props:["jetty","sensorData","sensorUnit","duration"]},o=(d(1582),d(122)),r=d(154),l=d.n(r),c=d(464),f=d(121),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-card",{staticClass:"elevation-15 rounded-md"},[d("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),d("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,e){return d("div",{key:e,staticClass:"reading",attrs:{sensorData:t.sensorData}},[d("v-card-subtitle",{staticClass:"top",class:data.class},[d("span",[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),d("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),d("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0)],1)}),[],!1,null,"e24908a4",null);e.default=component.exports;l()(component,{VCard:c.a,VCardSubtitle:f.a,VCardTitle:f.b})},1582:function(t,e,d){"use strict";d(1559)},1583:function(t,e,d){var n=d(41)(!1);n.push([t.i,".v-card__title[data-v-e24908a4]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-e24908a4]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-e24908a4]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-e24908a4]{padding-bottom:20px}.reading-box[data-v-e24908a4]{justify-content:space-evenly}.reading[data-v-e24908a4],.reading-box[data-v-e24908a4]{display:flex;align-items:center}.reading[data-v-e24908a4]{flex-direction:column;flex-wrap:wrap}hr[data-v-e24908a4]{margin:0 20px}.low[data-v-e24908a4]{color:#000!important;font:normal}.high[data-v-e24908a4]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-e24908a4]{font-size:.9rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-e24908a4]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-e24908a4]{font-size:.9rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-e24908a4]{font-size:.85rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.65rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.6rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.7rem}}",""]),t.exports=n},1589:function(t,e,d){var content=d(1645);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(42).default)("5c7fa191",content,!0,{sourceMap:!1})},1644:function(t,e,d){"use strict";d(1589)},1645:function(t,e,d){var n=d(41)(!1);n.push([t.i,".col[data-v-677952c8],.col-6[data-v-677952c8]{padding-left:4px!important;padding-right:4px!important}",""]),t.exports=n},1657:function(t,e,d){"use strict";d.r(e);var n=d(1561),o=d(1573),r={components:{Gauge:n.default,Data:o.default},props:["items","stations"]},l=(d(1644),d(122)),c=d(154),f=d.n(c),m=d(1816),v=d(1817),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-row",{staticClass:"padding arragement"},t._l(t.stations,(function(t,e){return d("v-col",{key:e,class:4===t.cols?"col-md-4":"col-md-6"},[d("Data",{attrs:{jetty:t.description,sensorData:t.sensorData}})],1)})),1)}),[],!1,null,"677952c8",null);e.default=component.exports;f()(component,{VCol:m.a,VRow:v.a})}}]);