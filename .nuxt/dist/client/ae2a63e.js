(window.webpackJsonp=window.webpackJsonp||[]).push([[21,20,37,52],{1569:function(t,e,n){var content=n(1574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("b191e5c8",content,!0,{sourceMap:!1})},1572:function(t,e,n){"use strict";n.r(e);var r={props:["duration"]},c=(n(1573),n(130)),o=n(160),l=n.n(o),d=n(129),f=n(479),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"duration"},[n("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),n("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"2ca3c490",null);e.default=component.exports;l()(component,{VCardSubtitle:d.b,VIcon:f.a})},1573:function(t,e,n){"use strict";n(1569)},1574:function(t,e,n){var r=n(42)(!1);r.push([t.i,".duration[data-v-2ca3c490]{display:flex;align-items:center;margin-left:20px}.detail[data-v-2ca3c490]{padding:12px}@media (max-width:500px){.detail[data-v-2ca3c490]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-2ca3c490]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-2ca3c490]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-2ca3c490]{font-size:.65rem}}",""]),t.exports=r},1578:function(t,e,n){"use strict";n(28),n(30),n(37),n(38);var r=n(15),c=(n(59),n(31),n(74),n(109),n(879),n(54),n(84),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(888),n(889),n(890),n(891),n(892),n(89),n(81),n(33),n(147),n(494),n(10)),o=n(148),l=n(14);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),x=m.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y=m.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(v),offset:Object.keys(x),order:Object.keys(y)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var j=new Map;e.a=c.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=j.get(l);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var r=n[t],c=O(e,t,r);c&&f.push(c)}));var c=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),j.set(l,f)}(),t(n.tag,Object(o.a)(data,{class:f}),c)}})},1585:function(t,e,n){var content=n(1609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("187f9cc3",content,!0,{sourceMap:!1})},1608:function(t,e,n){"use strict";n(1585)},1609:function(t,e,n){var r=n(42)(!1);r.push([t.i,".summary-detail[data-v-5dac4606]{display:flex}.icon-detail[data-v-5dac4606]{flex:2}.detail[data-v-5dac4606]{flex:4;display:flex;flex-direction:column;align-items:flex-end}.v-icon[data-v-5dac4606]{font-size:70px}.detail .text[data-v-5dac4606]{font-size:1.3rem}.display-2[data-v-5dac4606]{font-size:2rem!important}.v-card__subtitle[data-v-5dac4606]{padding-bottom:4px;padding-top:10px}hr[data-v-5dac4606]{margin:0 20px}@media only screen and (max-width:600px){.display-2[data-v-5dac4606]{line-height:1.125rem}.duration[data-v-5dac4606]{height:40px}}@media only screen and (max-width:750px){.detail .text[data-v-5dac4606]{font-size:1.2rem}.display-2[data-v-5dac4606]{font-size:1.3rem!important;line-height:1.125rem}.detail[data-v-5dac4606]{height:70px}.duration[data-v-5dac4606]{height:60px}}@media only screen and (max-width:1050px){.display-2[data-v-5dac4606]{font-size:1.3rem!important;line-height:2.125rem}}",""]),t.exports=r},1632:function(t,e,n){"use strict";n.r(e);var r={props:["detail","icon","data","classIcon"],components:{Duration:n(1572).default}},c=(n(1608),n(130)),o=n(160),l=n.n(o),d=n(480),f=n(129),m=n(479),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"elevation-15 rounded-lg"},[n("div",{staticClass:"summary-detail"},[n("v-icon",{staticClass:"icon-detail d-none d-md-flex",class:t.icon,attrs:{color:t.classIcon}}),t._v(" "),n("div",{staticClass:"detail"},[n("v-card-subtitle",{staticClass:"text"},[t._v("\n        "+t._s(t.detail)+"\n      ")]),t._v(" "),n("v-card-subtitle",{staticClass:"display-2"},[t._v("\n        "+t._s(t.data)+"\n      ")])],1)],1),t._v(" "),n("hr",{staticClass:"d-none d-md-flex"}),t._v(" "),n("Duration",{attrs:{duration:"Updated just now"}})],1)}),[],!1,null,"5dac4606",null);e.default=component.exports;l()(component,{Duration:n(1572).default}),l()(component,{VCard:d.a,VCardSubtitle:f.b,VIcon:m.a})},1751:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{summary:[{detail:"Stations",icon:"mdi mdi-map-marker-radius",data:"3",class:"primary"},{detail:"SPH",icon:"mdi mdi-checkbox-multiple-marked",data:"1",class:"accent"},{detail:"Warnings",icon:"mdi mdi-alert-rhombus-outline",data:"0",class:"error"}]}},components:{Summary:n(1632).default}},c=n(130),o=n(160),l=n.n(o),d=n(1578),f=n(1565),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.summary,(function(t,e){return n("v-col",{key:e},[n("Summary",{attrs:{detail:t.detail,icon:t.icon,data:t.data,classIcon:t.class}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VRow:f.a})}}]);