(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1588:function(t,e,n){var content=n(1617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("000ab7c4",content,!0,{sourceMap:!1})},1616:function(t,e,n){"use strict";n(1588)},1617:function(t,e,n){var o=n(42)(!1);o.push([t.i,".container-chart[data-v-6f99e610]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-6f99e610]{padding:0 auto}",""]),t.exports=o},1637:function(t,e,n){"use strict";n.r(e);n(66);var o={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},e=this.$echarts.init(document.getElementById(this.id));e.setOption(t,!0),window.addEventListener("resize",(function(){e.resize()}))},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Min",data:this.dailyMin,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.dailyMax,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.dailyAvg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","dailyMin","dailyMax","dailyAvg","dailyHour","xAxis","axisMin","axisMax","index"]},r=(n(1616),n(130)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,dailyMin:t.dailyMin,dailyMax:t.dailyMax,dailyAvg:t.dailyAvg,dailyHour:t.dailyHour,xAxis:t.xAxis}})])}),[],!1,null,"6f99e610",null);e.default=component.exports}}]);