(window.webpackJsonp=window.webpackJsonp||[]).push([[14,20,62,63],{1578:function(t,e,n){"use strict";n(28),n(30),n(37),n(38);var r=n(15),o=(n(59),n(31),n(74),n(109),n(879),n(54),n(84),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(888),n(889),n(890),n(891),n(892),n(89),n(81),n(33),n(147),n(494),n(10)),l=n(148),c=n(14);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=["sm","md","lg","xl"],y=x.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=x.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),v=x.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(y),offset:Object.keys(m),order:Object.keys(v)};function S(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=O.get(c);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),o)}})},1588:function(t,e,n){var content=n(1617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("000ab7c4",content,!0,{sourceMap:!1})},1589:function(t,e,n){var content=n(1619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("4377f036",content,!0,{sourceMap:!1})},1616:function(t,e,n){"use strict";n(1588)},1617:function(t,e,n){var r=n(42)(!1);r.push([t.i,".container-chart[data-v-6f99e610]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-6f99e610]{padding:0 auto}",""]),t.exports=r},1618:function(t,e,n){"use strict";n(1589)},1619:function(t,e,n){var r=n(42)(!1);r.push([t.i,".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}",""]),t.exports=r},1637:function(t,e,n){"use strict";n.r(e);n(66);var r={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},e=this.$echarts.init(document.getElementById(this.id));e.setOption(t,!0),window.addEventListener("resize",(function(){e.resize()}))},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","dailyMin","dailyMax","dailyAvg","dailyHour","xAxis","axisMin","axisMax","index"]},o=(n(1616),n(130)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,dailyMin:t.dailyMin,dailyMax:t.dailyMax,dailyAvg:t.dailyAvg,dailyHour:t.dailyHour,xAxis:t.xAxis}})])}),[],!1,null,"6f99e610",null);e.default=component.exports},1638:function(t,e,n){"use strict";n.r(e);n(66),n(110);var r={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t=this,e={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};setTimeout((function(){var n=t.$echarts.init(document.getElementById(t.id));n.setOption(e,!0),window.addEventListener("resize",(function(){n.resize()}))}),500)},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","data","dailyHour","xAxis","axisMin","axisMax","index"]},o=(n(1618),n(130)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,data:t.data,xAxis:t.xAxis}})])}),[],!1,null,"185f5285",null);e.default=component.exports},1738:function(t,e,n){var content=n(1839);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("7a273038",content,!0,{sourceMap:!1})},1838:function(t,e,n){"use strict";n(1738)},1839:function(t,e,n){var r=n(42)(!1);r.push([t.i,".center[data-v-7f820f52]{justify-content:center;background:#11270b!important;color:#fff!important;border-top-left-radius:8px;border-top-right-radius:8px}.padding[data-v-7f820f52]{padding:0 1em}.active[data-v-7f820f52]{background:#58be3c!important}.card[data-v-7f820f52],.card-color[data-v-7f820f52]{border-radius:8px}.flex-column[data-v-7f820f52]{display:flex;flex-direction:column}.button[data-v-7f820f52]{margin:15px}.card-detail[data-v-7f820f52]{background-color:#f1f1f1!important;border-radius:8px}.flex-btn[data-v-7f820f52]{display:flex;justify-content:space-around;flex-wrap:wrap}",""]),t.exports=r},1855:function(t,e,n){"use strict";n.r(e);n(31),n(28),n(30),n(37),n(33),n(38);var r=n(15),o=n(1637),l=n(1638),c=n(100);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{index:"0",index2:"0",station:"Block 1",sensorsID:["SoilPH","SoilEC","SoilMS"],sensors:["Soil pH","Soil EC","Soil MS"],theme:"blue-theme"}},methods:{console:function(t){this.station=this.items[t].title,this.index=t;document.getElementById(t).classList.add("active");for(var i=0;i<=2;i++)if(i!=t)document.getElementById(i).classList.remove("active")},console2:function(t,e){this.index2=e;document.getElementById(t).classList.add("active");for(var i=0;i<=2;i++){var n=this.sensorsID[i];if(n!=t)document.getElementById(n).classList.remove("active")}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)({trends:function(t){return t.trendsTkpmPagoh},arrayTime:function(t){return t.arrayTimeTkpmPagoh}})),props:["items"],components:{LineChart:o.default,LineChartSingleData:l.default},mounted:function(){document.getElementById(0).classList.add("active"),document.getElementById("SoilPH").classList.add("active")}},x=(n(1838),n(130)),y=n(160),m=n.n(y),v=n(496),h=n(480),S=n(129),O=n(1578),M=n(1565),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pb-3"},t._l(t.items,(function(e,r){return n("v-col",{key:e.title,attrs:{cols:e.cols,sm:"4"}},[n("v-card",{staticClass:"card card-color  elevation-12 ",attrs:{id:r},on:{click:function(e){return t.console(r)}}},[n("v-card-title",[t._v(t._s(e.block))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.description))])],1)],1)})),1),t._v(" "),n("v-card",{staticClass:"card-color elevation-12"},[n("v-card-title",{staticClass:"color"},[t._v("DETAILS")]),t._v(" "),n("v-row",[n("v-col",{staticClass:"flex-btn"},t._l(t.sensorsID,(function(e,r){return n("v-btn",{key:e,staticClass:"button card card-color elevation-12",staticStyle:{width:"200px"},attrs:{id:e},on:{click:function(n){return t.console2(e,r)}}},[t._v(t._s(t.sensors[r]))])})),1)],1),t._v(" "),n("v-row",{staticClass:"padding"},[n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Current")]),t._v(" "),n("LineChartSingleData",{attrs:{id:"current",data:t.trends[t.index].current[t.index2],dailyHour:t.arrayTime[t.index],"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Hourly")]),t._v(" "),n("LineChart",{attrs:{id:"houry",dailyMax:t.trends[t.index].hourly[t.index2].max,dailyMin:t.trends[t.index].hourly[t.index2].min,dailyAvg:t.trends[t.index].hourly[t.index2].avg,dailyHour:t.trends[t.index].hourly[t.index2].hour,"x-axis":"Hour",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"right",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Daily")]),t._v(" "),n("LineChart",{attrs:{id:"weekly",dailyMax:t.trends[t.index].daily[t.index2].max,dailyMin:t.trends[t.index].daily[t.index2].min,dailyAvg:t.trends[t.index].daily[t.index2].avg,dailyHour:t.trends[t.index].daily[t.index2].day,"x-axis":"Day",index:t.index2}})],1),t._v(" "),n("v-col",{staticClass:"left",attrs:{cols:"6",lg:"6"}},[n("v-card-subtitle",{staticClass:"center"},[t._v("Monthly")]),t._v(" "),n("LineChart",{attrs:{id:"monthly",dailyMax:t.trends[t.index].monthly[t.index2].max,dailyMin:t.trends[t.index].monthly[t.index2].min,dailyAvg:t.trends[t.index].monthly[t.index2].avg,dailyHour:t.trends[t.index].monthly[t.index2].monthName,"x-axis":"Month",index:t.index2}})],1)],1)],1)],1)}),[],!1,null,"7f820f52",null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VCardSubtitle:S.b,VCardTitle:S.c,VCol:O.a,VRow:M.a})}}]);