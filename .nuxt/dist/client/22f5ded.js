(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1583:function(t,e,n){var content=n(1602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("1128d99e",content,!0,{sourceMap:!1})},1592:function(t,e,n){"use strict";n.r(e);var o=n(11),c=(n(110),{data:function(){var t;return{option:{tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(o.a)(t,"splitNumber",5),Object(o.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(o.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(o.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(o.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(o.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(o.a)(t,"data",[{value:this.data,name:this.unit}]),t)]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},updated:function(){var t,option={tooltip:{formatter:"{a} <br/>{c}"},series:[(t={name:"Disc",type:"gauge",z:3,min:0,max:this.max,splitNumber:10,radius:"90%"},Object(o.a)(t,"splitNumber",5),Object(o.a)(t,"axisLine",{lineStyle:{width:20,color:[[.3,"#0fa463"],[.7,"#eb8934"],[1,"#db3b38"]]}}),Object(o.a)(t,"pointer",{itemStyle:{color:"auto"}}),Object(o.a)(t,"axisTick",{distance:-20,length:10,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"splitLine",{distance:-20,length:20,lineStyle:{color:"#ffffff"}}),Object(o.a)(t,"axisLabel",{distance:30,color:"auto",padding:3,fontSize:"0.9em"}),Object(o.a)(t,"title",{fontSize:"0.8em",offsetCenter:["0","95%"]}),Object(o.a)(t,"detail",{fontSize:"1.4em",formatter:"{value}",offsetCenter:["0","75%"],color:"auto"}),Object(o.a)(t,"data",[{value:this.data,name:this.unit}]),t)]};this.$echarts.init(document.getElementById(this.id)).setOption(option,!0)},props:["description","id","max","unit","data"]}),l=(n(1601),n(130)),r=n(160),f=n.n(r),d=n(129),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level"},[n("v-card-title",{staticClass:"sidebar rounded-lg mb-3"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"250px"},attrs:{id:t.id,data:t.data}})],1)}),[],!1,null,"125412f6",null);e.default=component.exports;f()(component,{VCardTitle:d.c})},1601:function(t,e,n){"use strict";n(1583)},1602:function(t,e,n){var o=n(42)(!1);o.push([t.i,".v-card__title[data-v-125412f6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}",""]),t.exports=o}}]);