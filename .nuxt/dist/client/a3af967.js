(window.webpackJsonp=window.webpackJsonp||[]).push([[65,20,26,29],{1577:function(t,e,n){var content=n(1581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("80ba7a60",content,!0,{sourceMap:!1})},1578:function(t,e,n){"use strict";n(28),n(30),n(37),n(38);var r=n(11),o=(n(59),n(31),n(74),n(109),n(879),n(54),n(84),n(880),n(881),n(882),n(883),n(884),n(885),n(886),n(887),n(888),n(889),n(890),n(891),n(892),n(89),n(81),n(33),n(147),n(494),n(10)),c=n(148),l=n(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),m=h.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(w),order:Object.keys(m)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var v in n)l+=String(n[v]);var d=O.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=y(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},1579:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},o=(n(1580),n(130)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",{staticClass:"mt-3 mb-5 title"},[t._v("\n  "+t._s(t.title)+"\n")])}),[],!1,null,"36ab8302",null);e.default=component.exports},1580:function(t,e,n){"use strict";n(1577)},1581:function(t,e,n){var r=n(42)(!1);r.push([t.i,".title[data-v-36ab8302]{color:#4e4e4e;font-size:1.4rem!important;font-weight:500;letter-spacing:2px!important;padding-left:20px;padding-top:15px}@media (max-width:500px){.title[data-v-36ab8302]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-36ab8302]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-36ab8302]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-36ab8302]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}",""]),t.exports=r},1604:function(t,e,n){var content=n(1605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("7132a15d",content,!0,{sourceMap:!1})},1605:function(t,e,n){var r=n(42)(!1);r.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},1639:function(t,e,n){var content=n(1640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("0d135400",content,!0,{sourceMap:!1})},1640:function(t,e,n){var r=n(42)(!1);r.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=r},1646:function(t,e,n){"use strict";n(31),n(28),n(30),n(37),n(33),n(38);var r=n(11),o=(n(1604),n(67));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},1688:function(t,e,n){"use strict";n(31),n(28),n(30),n(37),n(33),n(38);var r=n(11),o=(n(60),n(250),n(495),n(1639),n(497)),c=n(878),l=n(204),v=n(297);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=v.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return h(h({},v.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var r,o=this,v={click:function(t){t.stopPropagation(),o.changedByDelimiters=!0,n()}},d={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},h=null!=(r=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:v,attrs:d}))?r:[this.$createElement(c.a,{props:{icon:!0},attrs:d,on:v},[this.$createElement(l.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},h)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){var o=this.genIcon("next",r,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,r=n-1;return n<=2?t<e:t===r&&0===e||(0!==t||e!==r)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},1689:function(t,e,n){"use strict";var r=n(295),o=n(294),c=n(497),l=n(15),v=n(29),d=Object(v.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},1711:function(t,e,n){var content=n(1769);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("4190eb1f",content,!0,{sourceMap:!1})},1768:function(t,e,n){"use strict";n(1711)},1769:function(t,e,n){var r=n(42)(!1);r.push([t.i,".padding[data-v-7d6062d5]{padding:0 1em}.arragement[data-v-7d6062d5]{display:flex;justify-content:space-around}.button[data-v-7d6062d5]{padding:5px}.active[data-v-7d6062d5]{color:#f0f8ff;background:#395524}.category[data-v-7d6062d5]:hover{background:rgba(57,85,36,.64314);color:#f0f8ff}",""]),t.exports=r},1859:function(t,e,n){"use strict";n.r(e);n(31),n(28),n(30),n(37),n(33),n(38);var r=n(35),o=n(11),c=(n(131),n(1579)),l=n(1677),v=n(1678),d=n(1679),h=n(1706),f=n(100);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{CardTitle:c.default,ipahStatusAdmin:l.default,ipah2StatusAdmin:v.default,tkpmPagohStatusAdmin:d.default,Layout:h.default},data:function(){return{activeStation:0,activeSensor:0}},methods:m(m({},Object(f.c)({setDetailIpah1:"setDetailIpah1",setDetailIpah2:"setDetailIpah2",setDetailTkpmPagoh:"setDetailTkpmPagoh"})),{},{button:function(t){console.log("button 1"),this.activeStation=t,this.activeSensor=0,console.log(this.stations2)},button2:function(t){console.log("button 2"),this.activeSensor=t,console.log(this.activeSensor)},getDetailsIpah1:function(){var t=this;this.$axios.$get("http://139.59.109.48/api/report/ipah1").then((function(e){t.setDetailIpah1(e)})).catch((function(t){console.log(t)}))},getDetailsIpah2:function(){var t=this;this.$axios.$get("http://139.59.109.48/api/report/ipah2").then((function(e){t.setDetailIpah2(e)})).catch((function(t){console.log(t)}))},getDetailsTkpmPagoh:function(){var t=this;this.$axios.$get("http://139.59.109.48/api/report/tkpmPagoh").then((function(e){t.setDetailTkpmPagoh(e)})).catch((function(t){console.log(t)}))}}),computed:m({},Object(f.d)({stations:function(t){return t.stations},ipahStatus:function(t){return t.ipahStatus},tkpmIpahStatus:function(t){return t.tkpmIpahStatus},tkpmPagohStatus:function(t){return t.tkpmPagohStatus},detailIpah1:function(t){return t.detailIpah1},detailIpah2:function(t){return t.detailIpah2},detailTkpmPagoh:function(t){return t.detailTkpmPagoh}})),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getDetailsIpah1(),t.getDetailsIpah2(),t.getDetailsTkpmPagoh();case 3:case"end":return e.stop()}}),e)})))()}},y=(n(1768),n(130)),O=n(160),j=n.n(O),_=n(480),S=n(129),P=n(1578),I=n(373),T=n(1565),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"card-color elevation-12 "},[n("v-card-title",{staticClass:"color mb-4"},[t._v("STATUS")]),t._v(" "),n("v-row",{staticStyle:{display:"flex","justify-content":"space-evenly"}},t._l(t.stations.slice(0,-1),(function(e,r){return n("v-col",{key:r,staticClass:"mb-3 categories-container",attrs:{cols:"3"}},[n("v-card",{staticClass:"category elevation-10",class:{active:r===t.activeStation},on:{click:function(e){return t.button(r)}}},[n("v-img",{staticClass:"station-img",attrs:{src:e.image,"max-height":"120px"}}),t._v(" "),n("v-card-title",{staticClass:"button",staticStyle:{"justify-content":"center"}},[t._v("\n            "+t._s(e.station)+"\n          ")])],1)],1)})),1)],1),t._v(" "),n("v-card",{staticClass:"elevation-10 mt-10 py-5"},[0===t.activeStation?n("div",[n("Layout",{attrs:{detail:t.detailIpah1}})],1):t._e(),t._v(" "),1===t.activeStation?n("div",[n("Layout",{attrs:{detail:t.detailIpah2}})],1):t._e(),t._v(" "),2===t.activeStation?n("div",[n("Layout",{attrs:{detail:t.detailTkpmPagoh}})],1):t._e()])],1)}),[],!1,null,"7d6062d5",null);e.default=component.exports;j()(component,{VCard:_.a,VCardTitle:S.d,VCol:P.a,VImg:I.a,VRow:T.a})},878:function(t,e,n){"use strict";var r=n(496);e.a=r.a}}]);