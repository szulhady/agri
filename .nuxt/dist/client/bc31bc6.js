(window.webpackJsonp=window.webpackJsonp||[]).push([[51,35],{1572:function(t,e,r){"use strict";r.r(e);var n={name:"Notification",props:["message"]},o=r(122),c=r(154),l=r.n(c),d=r(466),f=r(121),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"notification is-danger"},[r("v-card",{staticClass:"my-4"},t._l(t.message,(function(e,n){return r("v-card-subtitle",{key:n},[t._v("\n      "+t._s(e.msg)+"\n    ")])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.b})},1598:function(t,e,r){"use strict";var n=r(15),o=(r(102),r(124),r(369),r(30),r(32),r(139),r(367),r(31),r(27),r(38),r(39),r(33)),c=r(201),l=r(285);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},1655:function(t,e,r){var content=r(1689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(42).default)("d2149a5c",content,!0,{sourceMap:!1})},1688:function(t,e,r){"use strict";r(1655)},1689:function(t,e,r){var n=r(41)(!1);n.push([t.i,".container2[data-v-16601fea]{margin:50px auto;display:flex;flex-direction:column;justify-content:center;max-width:350px;align-items:center}.control[data-v-16601fea]{outline:1px;width:300px}.register[data-v-16601fea]{margin-top:10px;font-size:15px!important}a[data-v-16601fea]{color:#5f9ea0;text-decoration:none}.input[data-v-16601fea]{font-size:18px}",""]),t.exports=n},1745:function(t,e,r){"use strict";r.r(e);var n=r(34),o=(r(123),{layout:"login",components:{Notification:r(1572).default},data:function(){return{username:"",email:"",password:"",password2:"",error:null}},methods:{register:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.post("http://159.223.55.150/api/user/register",{username:t.username,email:t.email,password:t.password,password2:t.password2}).then((function(e){t.error=e.data,"Success. You can log in now"==e.data[0].msg&&(t.username="",t.email="",t.password="",t.password2="")}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),t.error=e.t0.response.data.message;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},track:function(){var t=this;window.onclick=function(e){var r=document.getElementById("notification");e.target!=r&&(t.error=null)}}},mounted:function(){this.track()}}),c=(r(1688),r(122)),l=r(154),d=r.n(l),f=r(484),v=r(1598),h=r(1835),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section"},[r("div",{staticClass:"container2"},[r("h2",{staticClass:"title has-text-centered"},[t._v("Register")]),t._v(" "),t.error?r("Notification",{attrs:{message:t.error,id:"notification"}}):t._e(),t._v(" "),r("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"text",label:"Full Name"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"email",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("v-text-field",{staticClass:"input",attrs:{type:"password",label:"Confirm Password"},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1)]),t._v(" "),r("div",{staticClass:"control"},[r("v-btn",{attrs:{block:"",type:"submit",outlined:""}},[t._v("Register")])],1),t._v(" "),r("p",{staticClass:"title has-text-centered register"},[t._v("\n        Already got an account?\n        "),r("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")])],1)])],1)])}),[],!1,null,"16601fea",null);e.default=component.exports;d()(component,{Notification:r(1572).default}),d()(component,{VBtn:f.a,VForm:v.a,VTextField:h.a})}}]);