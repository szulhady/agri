(window.webpackJsonp=window.webpackJsonp||[]).push([[87,56],{1570:function(t,n,o){var content=o(1576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("1aad47fc",content,!0,{sourceMap:!1})},1571:function(t,n,o){"use strict";o.r(n);var e={props:["title"]},r=(o(1575),o(130)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);n.default=component.exports},1575:function(t,n,o){"use strict";o(1570)},1576:function(t,n,o){var e=o(42)(!1);e.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=e},1866:function(t,n,o){"use strict";o.r(n);o(31),o(28),o(30),o(37),o(38);var e=o(35),r=o(15),l=(o(131),o(33),o(1571)),c=o(1841),m=o(100);function h(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d={middleware:["isKongPo"],computed:f({},Object(m.d)({items:function(t){return t.stations[3].sensorSoil}})),components:{PageTitle:l.default,CardStationTrend:c.default},methods:f(f({},Object(m.c)({getHourlyKongPo:"getHourlyKongPo",getDailyKongPo:"getDailyKongPo",getMonthlyKongPo:"getMonthlyKongPo"})),{},{getDataHourly:function(table,t,n,o,e){var r=this;this.$axios.$get("http://139.59.109.48/api/hourly/",{params:{table:table,station:t,val:n}}).then((function(n){var data,l=[],c=[],m=[],h=[];n.forEach((function(t){l.push(t.max),m.push(t.avg),c.push(t.min),h.push(t.hour)})),data={station:t,indexStation:o,indexSensor:e,min:c,max:l,avg:m,hour:h},r.getHourlyKongPo(data)})).catch((function(t){console.log(t)}))},getDataDaily:function(table,t,n,o,e){var r=this;this.$axios.$get("http://127.0.0.1:5000/api/daily/",{params:{table:table,station:t,val:n}}).then((function(n){var data,l=[],c=[],m=[],h=[];n.forEach((function(t){c.push(t.max),m.push(t.avg),l.push(t.min),h.push(t.day)})),data={station:t,indexStation:o,indexSensor:e,min:l,max:c,avg:m,day:h},r.getDailyKongPo(data)})).catch((function(t){console.log(t)}))},getDataMonthly:function(table,t,n,o,e){var r=this;this.$axios.$get("http://139.59.109.48/api/monthly/",{params:{table:table,station:t,val:n}}).then((function(n){var data,l=[],c=[],m=[],h=[];n.forEach((function(t){c.push(t.max),m.push(t.avg),l.push(t.min),h.push(t.monthname)})),data={station:t,indexStation:o,indexSensor:e,min:l,max:c,avg:m,monthName:h},r.getMonthlyKongPo(data)})).catch((function(t){console.log(t)}))}}),mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function n(){var o,e,i,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(o=["314","324"],e=["soilNitrogen_val","soilPhosphorus_val","soilPotassium_val","soilPH_val","soilEC_val","soilHMD_val"],i=0;i<o.length;i++)for(r=0;r<e.length;r++)t.getDataHourly("kongpo_data",o[i],e[r],i,r),t.getDataDaily("kongpo_data",o[i],e[r],i,r),t.getDataMonthly("kongpo_data",o[i],e[r],i,r);case 3:case"end":return n.stop()}}),n)})))()}},v=o(130),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",[o("PageTitle",{attrs:{title:"TRENDS"}}),t._v(" "),o("CardStationTrend",{staticClass:"pb-7",attrs:{items:t.items}})],1)}),[],!1,null,"178fb72a",null);n.default=component.exports;installComponents(component,{PageTitle:o(1571).default})}}]);