(window.webpackJsonp=window.webpackJsonp||[]).push([[45,38,49,50],{1569:function(t,e,n){var content=n(1574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("620099b6",content,!0,{sourceMap:!1})},1572:function(t,e,n){"use strict";n.r(e);var r={props:["duration"]},o=(n(1573),n(130)),d=n(160),l=n.n(d),c=n(129),f=n(480),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"duration"},[n("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),n("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);e.default=component.exports;l()(component,{VCardSubtitle:c.b,VIcon:f.a})},1573:function(t,e,n){"use strict";n(1569)},1574:function(t,e,n){var r=n(42)(!1);r.push([t.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),t.exports=r},1578:function(t,e,n){"use strict";n(28),n(30),n(37),n(38);var r=n(15),o=(n(59),n(31),n(74),n(109),n(879),n(54),n(84),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(888),n(889),n(890),n(891),n(892),n(89),n(81),n(33),n(147),n(493),n(10)),d=n(148),l=n(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),x=m.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),h=m.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(x),order:Object.keys(h)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var c in n)l+=String(n[c]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(l,f)}(),t(n.tag,Object(d.a)(data,{class:f}),o)}})},1584:function(t,e,n){var content=n(1599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("1128d99e",content,!0,{sourceMap:!1})},1590:function(t,e,n){var content=n(1618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("6ebe8d30",content,!0,{sourceMap:!1})},1592:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(110),{data:function(){var t;return{option:{tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(r.a)(t,"splitNumber",5),Object(r.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(r.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(r.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(r.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(r.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(r.a)(t,"data",[{value:this.data,name:this.unit}]),t)]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},updated:function(){var t,option={tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(r.a)(t,"splitNumber",5),Object(r.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(r.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(r.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(r.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(r.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(r.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(r.a)(t,"data",[{value:this.data,name:this.unit}]),t)]};this.$echarts.init(document.getElementById(this.id)).setOption(option,!0)},props:["description","id","max","unit","data"]}),d=(n(1598),n(130)),l=n(160),c=n.n(l),f=n(129),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level"},[n("v-card-title",{staticClass:"sidebar rounded-lg mb-3"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:t.id,data:t.data}})],1)}),[],!1,null,"125412f6",null);e.default=component.exports;c()(component,{VCardTitle:f.c})},1598:function(t,e,n){"use strict";n(1584)},1599:function(t,e,n){var r=n(42)(!1);r.push([t.i,".v-card__title[data-v-125412f6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}",""]),t.exports=r},1601:function(t,e,n){"use strict";n.r(e);var r={components:{Duration:n(1572).default},props:["jetty","sensorData","sensorUnit","duration","lastUpdate"]},o=(n(1617),n(130)),d=n(160),l=n.n(d),c=n(478),f=n(129),m=n(480),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-15 rounded-md"},[n("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),n("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,e){return n("div",{key:e,staticClass:"reading",attrs:{sensorData:t.sensorData}},[n("v-card-subtitle",{staticClass:"top",class:data.class},[n("span",[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),n("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),n("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0),t._v(" "),n("hr",{staticClass:"hrData"}),t._v(" "),n("div",{staticStyle:{display:"flex","justify-contents":"center","align-items":"center","margin-left":"25px"}},[n("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),n("v-card-subtitle",{staticStyle:{display:"flex","justify-contents":"center","align-items":"center","padding-bottom":"15px"}},[t._v("\n      Updated on "+t._s(t.lastUpdate)+"\n    ")])],1)],1)}),[],!1,null,"63890844",null);e.default=component.exports;l()(component,{VCard:c.a,VCardSubtitle:f.b,VCardTitle:f.c,VIcon:m.a})},1617:function(t,e,n){"use strict";n(1590)},1618:function(t,e,n){var r=n(42)(!1);r.push([t.i,".v-card__title[data-v-63890844]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-63890844]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-63890844]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-63890844]{padding-bottom:20px}.left[data-v-63890844]{padding-left:10px}.reading-box[data-v-63890844]{justify-content:space-evenly}.reading[data-v-63890844],.reading-box[data-v-63890844]{display:flex;align-items:center}.reading[data-v-63890844]{flex-direction:column;flex-wrap:wrap}.hrData[data-v-63890844]{margin:-20px 20px 0}.low[data-v-63890844]{color:#000!important;font:normal}.high[data-v-63890844]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-63890844]{font-size:.9rem}.bottom[data-v-63890844],.top[data-v-63890844]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-63890844]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-63890844]{font-size:.9rem}.bottom[data-v-63890844],.top[data-v-63890844]{font-size:.8rem}.bottom[data-v-63890844],.middle[data-v-63890844],.top[data-v-63890844]{padding-left:0;padding-right:0}.middle[data-v-63890844]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-63890844]{font-size:.85rem}.bottom[data-v-63890844],.top[data-v-63890844]{font-size:.8rem}.bottom[data-v-63890844],.middle[data-v-63890844],.top[data-v-63890844]{padding-left:0;padding-right:0}.middle[data-v-63890844]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-63890844]{font-size:.8rem}.bottom[data-v-63890844],.top[data-v-63890844]{font-size:.65rem}.bottom[data-v-63890844],.middle[data-v-63890844],.top[data-v-63890844]{padding-left:0;padding-right:0}.middle[data-v-63890844]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-63890844]{font-size:.8rem}.bottom[data-v-63890844],.top[data-v-63890844]{font-size:.6rem}.bottom[data-v-63890844],.middle[data-v-63890844],.top[data-v-63890844]{padding-left:0;padding-right:0}.middle[data-v-63890844]{font-size:.7rem}}",""]),t.exports=r},1625:function(t,e,n){var content=n(1653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("72e13944",content,!0,{sourceMap:!1})},1652:function(t,e,n){"use strict";n(1625)},1653:function(t,e,n){var r=n(42)(!1);r.push([t.i,".col[data-v-9c036c3e],.col-6[data-v-9c036c3e]{padding-left:4px!important;padding-right:4px!important}",""]),t.exports=r},1667:function(t,e,n){"use strict";n.r(e);var r=n(1592),o=n(1601),d={components:{Gauge:r.default,Data:o.default},props:["items","stations"]},l=(n(1652),n(130)),c=n(160),f=n.n(c),m=n(1578),v=n(1564),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"padding arragement"},t._l(t.stations,(function(t,e){return n("v-col",{key:e,class:4===t.cols?"col-md-4":"col-md-6"},[n("Data",{attrs:{jetty:t.description,sensorData:t.sensorData}})],1)})),1)}),[],!1,null,"9c036c3e",null);e.default=component.exports;f()(component,{VCol:m.a,VRow:v.a})}}]);