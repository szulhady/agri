(window.webpackJsonp=window.webpackJsonp||[]).push([[43,25],{1532:function(t,e,r){var content=r(1537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("620099b6",content,!0,{sourceMap:!1})},1535:function(t,e,r){"use strict";r.r(e);var n={props:["duration"]},o=(r(1536),r(122)),c=r(154),d=r.n(c),f=r(121),l=r(465),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"duration"},[r("v-icon",{staticClass:"mdi mdi-refresh icon-detail",attrs:{size:"20",color:"grey"}}),t._v(" "),r("v-card-subtitle",{staticClass:"detail"},[t._v("\n    "+t._s(t.duration)+"\n  ")])],1)}),[],!1,null,"0dd70816",null);e.default=component.exports;d()(component,{VCardSubtitle:f.a,VIcon:l.a})},1536:function(t,e,r){"use strict";r(1532)},1537:function(t,e,r){var n=r(41)(!1);n.push([t.i,".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}",""]),t.exports=n},1538:function(t,e,r){var n=r(138),o=r(865);t.exports=n?o:function(t){return Map.prototype.entries.call(t)}},1598:function(t,e,r){"use strict";var n=r(28),o=r(57),c=r(286),d=r(93),f=r(864),l=r(862),v=r(368),h=r(71),m=r(40),E=r(479),x=r(202),T=r(483);t.exports=function(t,e,r){var R=-1!==t.indexOf("Map"),S=-1!==t.indexOf("Weak"),I=R?"set":"add",y=o[t],_=y&&y.prototype,O=y,k={},w=function(t){var e=_[t];d(_,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(S&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return S&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(S&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof y||!(S||_.forEach&&!m((function(){(new y).entries().next()})))))O=r.getConstructor(e,t,R,I),f.REQUIRED=!0;else if(c(t,!0)){var M=new O,A=M[I](S?{}:-0,1)!=M,N=m((function(){M.has(1)})),P=E((function(t){new y(t)})),j=!S&&m((function(){for(var t=new y,e=5;e--;)t[I](e,e);return!t.has(-0)}));P||((O=e((function(e,r){v(e,O,t);var n=T(new y,e,O);return null!=r&&l(r,n[I],{that:n,AS_ENTRIES:R}),n}))).prototype=_,_.constructor=O),(N||j)&&(w("delete"),w("has"),R&&w("get")),(j||A)&&w(I),S&&_.clear&&delete _.clear}return k[t]=O,n({global:!0,forced:O!=y},k),x(O,t),S||r.setStrong(O,t,R),O}},1599:function(t,e,r){"use strict";var n=r(85).f,o=r(180),c=r(481),d=r(199),f=r(368),l=r(862),v=r(480),h=r(482),m=r(79),E=r(864).fastKey,x=r(142),T=x.set,R=x.getterFor;t.exports={getConstructor:function(t,e,r,v){var h=t((function(t,n){f(t,h,e),T(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=n&&l(n,t[v],{that:t,AS_ENTRIES:r})})),x=R(e),S=function(t,e,r){var n,o,c=x(t),d=I(t,e);return d?d.value=r:(c.last=d={index:o=E(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=d),n&&(n.next=d),m?c.size++:t.size++,"F"!==o&&(c.index[o]=d)),t},I=function(t,e){var r,n=x(t),o=E(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,r=x(e),n=I(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),m?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=x(this),n=d(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!I(this,t)}}),c(h.prototype,r?{get:function(t){var e=I(this,t);return e&&e.value},set:function(t,e){return S(this,0===t?0:t,e)}}:{add:function(t){return S(this,t=0===t?0:t,t)}}),m&&n(h.prototype,"size",{get:function(){return x(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=R(e),c=R(n);v(t,e,(function(t,e){T(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},1600:function(t,e,r){"use strict";var n=r(67),o=r(179);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,d=0,f=arguments.length;d<f;d++)t=r.call(e,arguments[d]),c=c&&t;return!!c}},1601:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},1608:function(t,e,r){"use strict";var n=r(1598),o=r(1599);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},1609:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(1600);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},1610:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(199),f=r(1538),l=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=d(t,arguments.length>1?arguments[1]:void 0,3);return!l(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1611:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(140),d=r(67),f=r(179),l=r(199),v=r(366),h=r(1538),m=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=d(this),e=h(map),r=l(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return m(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},1612:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(199),f=r(1538),l=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=d(t,arguments.length>1?arguments[1]:void 0,3);return l(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},1613:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(199),f=r(1538),l=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=d(t,arguments.length>1?arguments[1]:void 0,3);return l(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},1614:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(1538),f=r(1601),l=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return l(d(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1615:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(1538),f=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(d(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},1616:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(140),d=r(67),f=r(179),l=r(199),v=r(366),h=r(1538),m=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=d(this),e=h(map),r=l(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return m(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},1617:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(140),d=r(67),f=r(179),l=r(199),v=r(366),h=r(1538),m=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=d(this),e=h(map),r=l(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return m(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},1618:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(179),f=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=d(map.set),i=0;i<arguments.length;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},1619:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(179),f=r(1538),l=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(d(t),l(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},1620:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(199),f=r(1538),l=r(862);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=d(t,arguments.length>1?arguments[1]:void 0,3);return l(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1621:function(t,e,r){"use strict";var n=r(28),o=r(138),c=r(67),d=r(179);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;d(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):d(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},1649:function(t,e,r){var content=r(1690);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("62e62e8c",content,!0,{sourceMap:!1})},1689:function(t,e,r){"use strict";r(1649)},1690:function(t,e,r){var n=r(41)(!1);n.push([t.i,".card-border[data-v-a548458a]{border-radius:8px}.card-color[data-v-a548458a]{border-radius:8px!important}.v-data-table[data-v-a548458a]{background:#f0f4e6}.hr[data-v-a548458a]{margin:0 20px;border-top:1px solid #bdc7c7}.card-subtitle[data-v-a548458a]{padding-left:20px}.flex-card[data-v-a548458a]{display:flex;padding:12px 0 0 10px}.v-card__subtitle[data-v-a548458a]{padding:12px}.no-padding[data-v-a548458a]{padding-bottom:5px}",""]),t.exports=n},1736:function(t,e,r){"use strict";r.r(e);r(31),r(27),r(30),r(38),r(32),r(39);var n=r(14),o=(r(1535),r(92));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{headers:[{text:"Block",align:"start",sortable:!1,value:"name"},{text:"Remarks",value:"remarks"}],status2:[{name:"Soil NPK",remarks:""},{name:"Soil pH",remarks:""},{name:"Soil EC",remarks:""},{name:"Soil Moisture",remarks:""},{name:"Soil Temperature",remarks:""},{name:"Leaf Temperature",remarks:""},{name:"Humidity",remarks:""},{name:"Water NPK",remarks:""},{name:"Water pH",remarks:""},{name:"Water EC",remarks:""}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)({status:function(t){return t.stations[t.activeUser].status}}))},f=(r(1689),r(122)),l=r(154),v=r.n(l),h=r(464),m=r(121),E=r(1818),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"elevation-12 card-border card-color"},[r("v-card-title",{staticClass:"color no-padding"},[t._v("SUMMARY")]),t._v(" "),r("v-data-table",{attrs:{headers:t.headers,items:t.status,"items-per-page":5}})],1)],1)}),[],!1,null,"a548458a",null);e.default=component.exports;v()(component,{VCard:h.a,VCardTitle:m.b,VDataTable:E.a})}}]);