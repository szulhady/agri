(window.webpackJsonp=window.webpackJsonp||[]).push([[36,44],{1559:function(t,e,n){var content=n(1581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1128d99e",content,!0,{sourceMap:!1})},1567:function(t,e,n){"use strict";n.r(e);var o=n(15),r=(n(139),{data:function(){var t;return{option:{tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(o.a)(t,"splitNumber",5),Object(o.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(o.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(o.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(o.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(o.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(o.a)(t,"data",[{value:this.data,name:this.unit}]),t)]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},updated:function(){var t,option={tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(o.a)(t,"splitNumber",5),Object(o.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(o.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(o.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(o.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(o.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(o.a)(t,"data",[{value:this.data,name:this.unit}]),t)]};this.$echarts.init(document.getElementById(this.id)).setOption(option,!0)},props:["description","id","max","unit","data"]}),l=(n(1580),n(122)),c=n(154),d=n.n(c),f=n(121),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level"},[n("v-card-title",{staticClass:"sidebar rounded-lg mb-3"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:t.id,data:t.data}})],1)}),[],!1,null,"125412f6",null);e.default=component.exports;d()(component,{VCardTitle:f.c})},1580:function(t,e,n){"use strict";n(1559)},1581:function(t,e,n){var o=n(41)(!1);o.push([t.i,".v-card__title[data-v-125412f6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}",""]),t.exports=o},1680:function(t,e,n){"use strict";n.r(e);var o={components:{Gauge:n(1567).default},props:["items"]},r=n(122),l=n(154),c=n.n(l),d=n(1840),f=n(1841),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"padding arragement"},[n("v-col",{attrs:{cols:"6",lg:"4"}},[n("Gauge",{attrs:{id:"LeafTemperature",data:t.items[0].LeafTemperature,max:"10",unit:"mg/L",description:"Leaf Temperature"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",lg:"4"}},[n("Gauge",{attrs:{id:"Humidity",data:t.items[0].Humidity,max:"40",unit:"°C",description:"Humidity"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VRow:f.a})}}]);