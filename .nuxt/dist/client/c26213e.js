(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1596:function(e,t,n){var content=n(1657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("700b83d0",content,!0,{sourceMap:!1})},1656:function(e,t,n){"use strict";n(1596)},1657:function(e,t,n){var o=n(41)(!1);o.push([e.i,"#server[data-v-3d0fbfbe]{width:100%;height:278px}@media (max-width:500px){#server[data-v-3d0fbfbe]{width:100%;height:220px}}@media (max-width:376px){#server[data-v-3d0fbfbe]{width:100%;height:210px}}@media (max-width:360px){#server[data-v-3d0fbfbe]{width:100%;height:200px}}@media (max-width:300px){#server[data-v-3d0fbfbe]{width:100%;height:170px}}",""]),e.exports=o},1668:function(e,t,n){"use strict";n.r(t);var o,l=n(12),r=(n(139),n(870),{data:function(){var e;return{option:{tooltip:{formatter:"{a} <br/>{c}"},series:[{name:"Disc",type:"gauge",z:3,min:0,max:100,splitNumber:10,center:["35%","50%"],radius:"90%",axisLine:{lineStyle:{width:10,color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]]}},pointer:{itemStyle:{color:"auto"}},axisTick:{distance:0,length:5,lineStyle:{color:"auto"}},splitLine:{distance:0,length:10,lineStyle:{color:"auto"}},axisLabel:{color:"#333",padding:3,fontSize:"0.8em"},title:{fontSize:"0.8em",offsetCenter:["0","80%"]},detail:{show:!1},data:[{value:this.disc,name:"Disc (%)"}]},{name:"Temperature",type:"gauge",center:["75%","45%"],radius:"70%",min:0,max:100,startAngle:135,endAngle:45,splitNumber:2,axisLine:{lineStyle:{width:8,color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]]}},pointer:{width:4,itemStyle:{color:"auto"}},axisTick:{splitNumber:5,distance:0,length:5,lineStyle:{color:"auto"}},title:{fontSize:"0.8em",offsetCenter:["0","-115%"]},axisLabel:{distance:12,color:"#333",padding:3,fontSize:"0.8em"},splitLine:{distance:0,length:10,lineStyle:{color:"auto"}},detail:{show:!1},data:[{value:this.temperature,name:"Temperature (°C)"}]},(e={name:"Speed",type:"gauge",center:["75%","45%"],radius:"70%",min:0,max:3e3,startAngle:315,endAngle:225,splitNumber:2,axisLine:{lineStyle:{width:8,color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]]}},pointer:{width:4,itemStyle:{color:"auto"}},axisTick:{splitNumber:5,distance:0},splitLine:{distance:0,length:10,lineStyle:{color:"auto"}},axisLabel:{distance:10,color:"#333",padding:3,fontSize:"0.8em"}},Object(l.a)(e,"pointer",{width:4,itemStyle:{color:"auto"}}),Object(l.a)(e,"title",{fontSize:"0.8em",offsetCenter:["0","118%"]}),Object(l.a)(e,"detail",{show:!1}),Object(l.a)(e,"data",[{value:this.speed,name:"Speed (MHz)"}]),e)]}}},methods:{interval1:function(){var e=this;setInterval((function(){e.option.series[0].data[0].value=(100*Math.random()).toFixed(2)-0,e.option.series[1].data[0].value=(100*Math.random()).toFixed(2)-0,e.option.series[2].data[0].value=(3e3*Math.random()).toFixed(2)-0,o.setOption(e.option,!0)}),2e3)}},mounted:function(){var e=this;setTimeout((function(){(o=e.$echarts.init(document.getElementById("server"))).setOption(e.option,!0),window.addEventListener("resize",(function(){o.resize()}))}),100)},updated:function(){var e,option={tooltip:{formatter:"{a} <br/>{c}"},series:[{name:"Disc",type:"gauge",z:3,min:0,max:100,splitNumber:10,center:["35%","50%"],radius:"90%",axisLine:{lineStyle:{width:10,color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]]}},pointer:{itemStyle:{color:"auto"}},axisTick:{distance:0,length:5,lineStyle:{color:"auto"}},splitLine:{distance:0,length:10,lineStyle:{color:"auto"}},axisLabel:{color:"#333",padding:3,fontSize:"0.8em"},title:{fontSize:"0.8em",offsetCenter:["0","80%"]},detail:{show:!1},data:[{value:this.disc,name:"Disc (%)"}]},{name:"Temperature",type:"gauge",center:["75%","45%"],radius:"70%",min:0,max:100,startAngle:135,endAngle:45,splitNumber:2,axisLine:{lineStyle:{width:8,color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]]}},pointer:{width:4,itemStyle:{color:"auto"}},axisTick:{splitNumber:5,distance:0,length:5,lineStyle:{color:"auto"}},title:{fontSize:"0.8em",offsetCenter:["0","-115%"]},axisLabel:{distance:12,color:"#333",padding:3,fontSize:"0.8em"},splitLine:{distance:0,length:10,lineStyle:{color:"auto"}},detail:{show:!1},data:[{value:this.temperature,name:"Temperature (°C)"}]},(e={name:"Speed",type:"gauge",center:["75%","45%"],radius:"70%",min:0,max:3e3,startAngle:315,endAngle:225,splitNumber:2,axisLine:{lineStyle:{width:8,color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]]}},pointer:{width:4,itemStyle:{color:"auto"}},axisTick:{splitNumber:5,distance:0},splitLine:{distance:0,length:10,lineStyle:{color:"auto"}},axisLabel:{distance:10,color:"#333",padding:3,fontSize:"0.8em"}},Object(l.a)(e,"pointer",{width:4,itemStyle:{color:"auto"}}),Object(l.a)(e,"title",{fontSize:"0.8em",offsetCenter:["0","118%"]}),Object(l.a)(e,"detail",{show:!1}),Object(l.a)(e,"data",[{value:this.speed,name:"Speed (MHz)"}]),e)]};(o=this.$echarts.init(document.getElementById("server"))).setOption(option,!0),window.addEventListener("resize",(function(){o.resize()}))},props:["disc","temperature","speed"]}),d=(n(1656),n(122)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level"},[n("div",{attrs:{id:"server",speed:e.speed,temperature:e.temperature,disc:e.disc}})])}),[],!1,null,"3d0fbfbe",null);t.default=component.exports}}]);