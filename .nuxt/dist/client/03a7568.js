(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1550:function(t,e,n){var content=n(1558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("4377f036",content,!0,{sourceMap:!1})},1557:function(t,e,n){"use strict";n(1550)},1558:function(t,e,n){var o=n(41)(!1);o.push([t.i,".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}",""]),t.exports=o},1561:function(t,e,n){"use strict";n.r(e);n(68),n(139);var o={data:function(){return{sensorUnit:["mg/l","°C","unit","ppt","mg/l"]}},mounted:function(){var t=this,e={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};setTimeout((function(){var n=t.$echarts.init(document.getElementById(t.id));n.setOption(e,!0),window.addEventListener("resize",(function(){n.resize()}))}),500)},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["Current"],textStyle:{fontSize:12}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12},axisLabel:{fontSize:12,verticalAlign:"bottom"},type:"category",data:this.dailyHour},yAxis:{nameTextStyle:{fontSize:12},name:this.sensorUnit[this.index],type:"value",min:this.axisMin,max:this.axisMax,axisLabel:{fontSize:12}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]},t=this.$echarts.init(document.getElementById(this.id));t.setOption(option,!0),window.addEventListener("resize",(function(){t.resize()}))},props:["id","data","dailyHour","xAxis","axisMin","axisMax","index"]},r=(n(1557),n(122)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-chart"},[n("div",{staticClass:"chart",staticStyle:{width:"100%",height:"280px"},attrs:{id:t.id,data:t.data,xAxis:t.xAxis}})])}),[],!1,null,"185f5285",null);e.default=component.exports}}]);