(window.webpackJsonp=window.webpackJsonp||[]).push([[17,20,24,26,37],{1569:function(t,e,d){var content=d(1574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(43).default)("b191e5c8",content,!0,{sourceMap:!1})},1572:function(t,e,d){"use strict";d.r(e);var r={props:["duration"]},n=(d(1573),d(130)),o=d(160),c=d.n(o),l=d(129),f=d(479),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"duration"},[d("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),d("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"2ca3c490",null);e.default=component.exports;c()(component,{VCardSubtitle:l.b,VIcon:f.a})},1573:function(t,e,d){"use strict";d(1569)},1574:function(t,e,d){var r=d(42)(!1);r.push([t.i,".duration[data-v-2ca3c490]{display:flex;align-items:center;margin-left:20px}.detail[data-v-2ca3c490]{padding:12px}@media (max-width:500px){.detail[data-v-2ca3c490]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-2ca3c490]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-2ca3c490]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-2ca3c490]{font-size:.65rem}}",""]),t.exports=r},1577:function(t,e,d){var content=d(1581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(43).default)("80ba7a60",content,!0,{sourceMap:!1})},1578:function(t,e,d){"use strict";d(28),d(30),d(37),d(38);var r=d(15),n=(d(59),d(31),d(74),d(109),d(879),d(54),d(84),d(880),d(881),d(882),d(883),d(884),d(885),d(886),d(887),d(888),d(889),d(890),d(891),d(892),d(89),d(81),d(33),d(147),d(494),d(10)),o=d(148),c=d(14);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),x=m.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),h=m.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(x),order:Object.keys(h)};function O(t,e,d){var r=t;if(null!=d&&!1!==d){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==d&&!0!==d?(r+="-".concat(d)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=n.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var d=e.props,data=e.data,n=e.children,c=(e.parent,"");for(var l in d)c+=String(d[l]);var f=_.get(c);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var r=d[t],n=O(e,t,r);n&&f.push(n)}));var n=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!n||!d.cols},Object(r.a)(t,"col-".concat(d.cols),d.cols),Object(r.a)(t,"offset-".concat(d.offset),d.offset),Object(r.a)(t,"order-".concat(d.order),d.order),Object(r.a)(t,"align-self-".concat(d.alignSelf),d.alignSelf),t)),_.set(c,f)}(),t(d.tag,Object(o.a)(data,{class:f}),n)}})},1579:function(t,e,d){"use strict";d.r(e);var r={props:["title"]},n=(d(1580),d(130)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"36ab8302",null);e.default=component.exports},1580:function(t,e,d){"use strict";d(1577)},1581:function(t,e,d){var r=d(42)(!1);r.push([t.i,".title[data-v-36ab8302]{color:#4e4e4e;font-size:1.4rem!important;font-weight:500;letter-spacing:2px!important;padding-left:20px;padding-top:15px}@media (max-width:500px){.title[data-v-36ab8302]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-36ab8302]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-36ab8302]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-36ab8302]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=r},1582:function(t,e,d){var content=d(1598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(43).default)("e11a8a12",content,!0,{sourceMap:!1})},1591:function(t,e,d){"use strict";d.r(e);var r={components:{Duration:d(1572).default},props:["jetty","sensorData","sensorUnit","duration"]},n=(d(1597),d(130)),o=d(160),c=d.n(o),l=d(480),f=d(129),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-card",{staticClass:"elevation-15 rounded-md"},[d("v-card-title",{staticClass:"sidebar "},[t._v("\n    "+t._s(t.jetty)+"\n  ")]),t._v(" "),d("div",{staticClass:"reading-box"},t._l(t.sensorData,(function(data,e){return d("div",{key:e,staticClass:"reading",attrs:{sensorData:t.sensorData}},[d("v-card-subtitle",{staticClass:"top",class:data.class},[d("span",[t._v("\n          "+t._s(data.description)+"\n        ")])]),t._v(" "),d("v-card-subtitle",{staticClass:"middle",class:data.isHigh?"high":"low"},[t._v("\n        "+t._s(data.data)+"\n      ")]),t._v(" "),d("v-card-subtitle",{staticClass:"bottom"},[t._v("\n        "+t._s(data.unit)+"\n      ")])],1)})),0)],1)}),[],!1,null,"78cdbd4d",null);e.default=component.exports;c()(component,{VCard:l.a,VCardSubtitle:f.b,VCardTitle:f.c})},1597:function(t,e,d){"use strict";d(1582)},1598:function(t,e,d){var r=d(42)(!1);r.push([t.i,".v-card__title[data-v-78cdbd4d]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-78cdbd4d]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-78cdbd4d]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-78cdbd4d]{padding-bottom:20px}.reading-box[data-v-78cdbd4d]{justify-content:space-evenly}.reading[data-v-78cdbd4d],.reading-box[data-v-78cdbd4d]{display:flex;align-items:center}.reading[data-v-78cdbd4d]{flex-direction:column;flex-wrap:wrap;max-width:100px}hr[data-v-78cdbd4d]{margin:0 20px}.low[data-v-78cdbd4d]{color:#000!important;font:normal}.high[data-v-78cdbd4d]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-78cdbd4d]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-78cdbd4d]{font-size:.9rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-78cdbd4d]{font-size:.85rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.65rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-78cdbd4d]{font-size:.8rem}.bottom[data-v-78cdbd4d],.top[data-v-78cdbd4d]{font-size:.6rem}.bottom[data-v-78cdbd4d],.middle[data-v-78cdbd4d],.top[data-v-78cdbd4d]{padding-left:0;padding-right:0}.middle[data-v-78cdbd4d]{font-size:.7rem}}",""]),t.exports=r},1624:function(t,e,d){var content=d(1652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(43).default)("47a774b8",content,!0,{sourceMap:!1})},1651:function(t,e,d){"use strict";d(1624)},1652:function(t,e,d){var r=d(42)(!1);r.push([t.i,".reading-card-box[data-v-06f690ec]{padding:0 20px!important}",""]),t.exports=r},1681:function(t,e,d){"use strict";d.r(e);d(31),d(28),d(30),d(37),d(33),d(38);var r=d(15),n=d(100),o=d(1579);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}var l={components:{Data:d(1591).default,CardTitle:o.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.d)({stations2:function(t){return t.stations},durationPetrochemicalJetty:function(t){return t.durationPetrochemicalJetty}})),data:function(){return{}},props:["stations"]},f=(d(1651),d(130)),m=d(160),v=d.n(m),x=d(1578),h=d(1565),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-row",{staticClass:"reading-card-box"},t._l(t.stations,(function(e,r){return d("v-col",{key:r,staticClass:"col-md-6",attrs:{cols:"12"}},[d("Data",{attrs:{jetty:t.stations[r].description,sensorData:t.stations[r].sensorData,duration:t.durationPetrochemicalJetty}})],1)})),1)}),[],!1,null,"06f690ec",null);e.default=component.exports;v()(component,{VCol:x.a,VRow:h.a})}}]);