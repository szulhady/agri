(window.webpackJsonp=window.webpackJsonp||[]).push([[78,44,53,55,56],{1533:function(t,e,n){var content=n(1540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1aad47fc",content,!0,{sourceMap:!1})},1534:function(t,e,n){"use strict";n.r(e);var o={props:["title"]},r=(n(1539),n(122)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"48d66cb0",null);e.default=component.exports},1539:function(t,e,n){"use strict";n(1533)},1540:function(t,e,n){var o=n(41)(!1);o.push([t.i,".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=o},1543:function(t,e,n){var content=n(1549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("000ab7c4",content,!0,{sourceMap:!1})},1544:function(t,e,n){var content=n(1551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4377f036",content,!0,{sourceMap:!1})},1548:function(t,e,n){"use strict";n(1543)},1549:function(t,e,n){var o=n(41)(!1);o.push([t.i,".container-chart[data-v-6f99e610]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-6f99e610]{padding:0 auto}",""]),t.exports=o},1550:function(t,e,n){"use strict";n(1544)},1551:function(t,e,n){var o=n(41)(!1);o.push([t.i,".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}",""]),t.exports=o},1553:function(t,e,n){"use strict";n.r(e);n(68);var o={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},e=this.$echarts.init(document.getElementById(this.id));e.setOption(t,!0),window.addEventListener("resize",(function(){e.resize()}))},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","dailyMin","dailyMax","dailyAvg","dailyHour","xAxis","axisMin","axisMax","index"]},r=(n(1548),n(122)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,dailyMin:t.dailyMin,dailyMax:t.dailyMax,dailyAvg:t.dailyAvg,dailyHour:t.dailyHour,xAxis:t.xAxis}})])}),[],!1,null,"6f99e610",null);e.default=component.exports},1554:function(t,e,n){"use strict";n.r(e);n(68),n(139);var o={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t=this,e={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};setTimeout((function(){var n=t.$echarts.init(document.getElementById(t.id));n.setOption(e,!0),window.addEventListener("resize",(function(){n.resize()}))}),500)},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","data","dailyHour","xAxis","axisMin","axisMax","index"]},r=(n(1550),n(122)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,data:t.data,xAxis:t.xAxis}})])}),[],!1,null,"185f5285",null);e.default=component.exports},1642:function(t,e,n){var content=n(1684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("04d7ec20",content,!0,{sourceMap:!1})},1683:function(t,e,n){"use strict";n(1642)},1684:function(t,e,n){var o=n(41)(!1);o.push([t.i,".center[data-v-01c0665c]{justify-content:center;background:#11270b!important;color:#fff!important;border-top-left-radius:8px;border-top-right-radius:8px}.padding[data-v-01c0665c]{padding:0 1em}.active[data-v-01c0665c]{background:#58be3c!important}.card[data-v-01c0665c],.card-color[data-v-01c0665c]{border-radius:8px}.flex-column[data-v-01c0665c]{display:flex;flex-direction:column}.button[data-v-01c0665c]{margin:15px}.card-detail[data-v-01c0665c]{background-color:#f1f1f1!important;border-radius:8px}.flex-btn[data-v-01c0665c]{display:flex;justify-content:space-around;flex-wrap:wrap}",""]),t.exports=o},1732:function(t,e,n){"use strict";n.r(e);n(31),n(27),n(30),n(38),n(32),n(39);var o=n(14),r=n(1553),l=n(1554),c=n(92);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{index:"0",index2:"0",station:"Block 1",sensorsID:["SoilNitrogen","SoilPhosphorus","SoilPotassium","SoilPH","SoilEC","SoilMS"],sensors:["Soil Nitrogen","Soil Phosphorus","Soil Potassium","Soil pH","Soil EC","Soil MS"],theme:"blue-theme"}},methods:{console:function(t){this.station=this.items[t].title,this.index=t;document.getElementById(t).classList.add("active");for(var i=0;i<=1;i++)if(i!=t)document.getElementById(i).classList.remove("active")},console2:function(t,e){this.index2=e;document.getElementById(t).classList.add("active");for(var i=0;i<=5;i++){var n=this.sensorsID[i];if(n!=t)document.getElementById(n).classList.remove("active")}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)({trends:function(t){return t.trendsKongPo},arrayTime:function(t){return t.arrayTime}})),props:["items"],components:{LineChart:r.default,LineChartSingleData:l.default},mounted:function(){document.getElementById(0).classList.add("active"),document.getElementById("SoilNitrogen").classList.add("active")}},x=(n(1683),n(122)),m=n(154),y=n.n(m),h=n(488),v=n(464),S=n(121),M=n(1816),_=n(1817),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pb-3"},t._l(t.items,(function(e,o){return n("v-col",{key:e.title,attrs:{cols:e.cols,sm:"3"}},[n("v-card",{staticClass:"card card-color  elevation-12 ",attrs:{id:o},on:{click:function(e){return t.console(o)}}},[n("v-card-title",[t._v(t._s(e.block))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.description))])],1)],1)})),1),t._v(" "),n("v-card",{staticClass:"card-color elevation-12"},[n("v-card-title",{staticClass:"color"},[t._v("DETAILS")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"flex-btn"},t._l(t.sensorsID,(function(e,o){return n("v-btn",{key:e,staticClass:"button card card-color elevation-12",staticStyle:{width:"250px"},attrs:{id:e},on:{click:function(n){return t.console2(e,o)}}},[t._v(t._s(t.sensors[o]))])})),1)],1),t._v(" "),n("v-row",{staticClass:"padding"},[n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Current")]),t._v(" "),n("LineChartSingleData",{attrs:{id:"current",data:t.trends[t.index].current[t.index2],dailyHour:t.arrayTime[t.index],"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Hourly")]),t._v(" "),n("LineChart",{attrs:{id:"houry",dailyMax:t.trends[t.index].hourly[t.index2].max,dailyMin:t.trends[t.index].hourly[t.index2].min,dailyAvg:t.trends[t.index].hourly[t.index2].avg,dailyHour:t.trends[t.index].hourly[t.index2].hour,"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"right",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Daily")]),t._v(" "),n("LineChart",{attrs:{id:"weekly",dailyMax:t.trends[t.index].daily[t.index2].max,dailyMin:t.trends[t.index].daily[t.index2].min,dailyAvg:t.trends[t.index].daily[t.index2].avg,dailyHour:t.trends[t.index].daily[t.index2].day,"x-axis":"Day",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Monthly")]),t._v(" "),n("LineChart",{attrs:{id:"monthly",dailyMax:t.trends[t.index].monthly[t.index2].max,dailyMin:t.trends[t.index].monthly[t.index2].min,dailyAvg:t.trends[t.index].monthly[t.index2].avg,dailyHour:t.trends[t.index].monthly[t.index2].monthName,"x-axis":"Month",index:t.index2}})],1)],1)],1)],1)}),[],!1,null,"01c0665c",null);e.default=component.exports;y()(component,{VBtn:h.a,VCard:v.a,VCardSubtitle:S.a,VCardTitle:S.b,VCol:M.a,VRow:_.a})},1837:function(t,e,n){"use strict";n.r(e);n(31),n(27),n(30),n(38),n(39);var o=n(35),r=n(14),l=(n(123),n(32),n(1534)),c=n(1732),d=n(92);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={middleware:["isKongPo"],computed:x({},Object(d.d)({items:function(t){return t.stations[3].sensorSoil}})),components:{PageTitle:l.default,CardStationTrend:c.default},methods:x(x({},Object(d.c)({getHourlyKongPo:"getHourlyKongPo",getDailyKongPo:"getDailyKongPo",getMonthlyKongPo:"getMonthlyKongPo"})),{},{getDataHourly:function(table,t,e,n,o){var r=this;this.$axios.$get("http://139.59.109.48/api/hourly/",{params:{table:table,station:t,val:e}}).then((function(e){var data,l=[],c=[],d=[],f=[];e.forEach((function(t){l.push(t.max),d.push(t.avg),c.push(t.min),f.push(t.hour)})),data={station:t,indexStation:n,indexSensor:o,min:c,max:l,avg:d,hour:f},r.getHourlyKongPo(data)})).catch((function(t){console.log(t)}))},getDataDaily:function(table,t,e,n,o){var r=this;this.$axios.$get("http://127.0.0.1:5000/api/daily/",{params:{table:table,station:t,val:e}}).then((function(e){var data,l=[],c=[],d=[],f=[];e.forEach((function(t){c.push(t.max),d.push(t.avg),l.push(t.min),f.push(t.day)})),data={station:t,indexStation:n,indexSensor:o,min:l,max:c,avg:d,day:f},r.getDailyKongPo(data)})).catch((function(t){console.log(t)}))},getDataMonthly:function(table,t,e,n,o){var r=this;this.$axios.$get("http://139.59.109.48/api/monthly/",{params:{table:table,station:t,val:e}}).then((function(e){var data,l=[],c=[],d=[],f=[];e.forEach((function(t){c.push(t.max),d.push(t.avg),l.push(t.min),f.push(t.monthname)})),data={station:t,indexStation:n,indexSensor:o,min:l,max:c,avg:d,monthName:f},r.getMonthlyKongPo(data)})).catch((function(t){console.log(t)}))}}),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=["314","324"],o=["soilNitrogen_val","soilPhosphorus_val","soilPotassium_val","soilPH_val","soilEC_val","soilHMD_val"],i=0;i<n.length;i++)for(r=0;r<o.length;r++)t.getDataHourly("kongpo_data",n[i],o[r],i,r),t.getDataDaily("kongpo_data",n[i],o[r],i,r),t.getDataMonthly("kongpo_data",n[i],o[r],i,r);case 3:case"end":return e.stop()}}),e)})))()}},y=n(122),component=Object(y.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("PageTitle",{attrs:{title:"TRENDS"}}),t._v(" "),n("CardStationTrend",{staticClass:"pb-7",attrs:{items:t.items}})],1)}),[],!1,null,"178fb72a",null);e.default=component.exports;installComponents(component,{PageTitle:n(1534).default})}}]);