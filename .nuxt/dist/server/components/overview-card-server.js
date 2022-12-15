exports.ids = [30,10,21,35];
exports.modules = {

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("b191e5c8", content, true, context)
};

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Duration.vue?vue&type=template&id=2ca3c490&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"duration"},[_c('v-icon',{staticClass:"mdi mdi-refresh icon-detail",attrs:{"size":"20","color":"grey"}}),_vm._ssrNode(" "),_c('v-card-subtitle',{staticClass:"detail"},[_vm._v("\n    "+_vm._s(_vm.duration)+"\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Duration.vue?vue&type=template&id=2ca3c490&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Duration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Durationvue_type_script_lang_js_ = ({
  props: ["duration"]
});
// CONCATENATED MODULE: ./components/Duration.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Durationvue_type_script_lang_js_ = (Durationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(20);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(52);

// CONCATENATED MODULE: ./components/Duration.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(195)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Durationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ca3c490",
  "697de62f"
  
)

/* harmony default export */ var Duration = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCardSubtitle: VCard["b" /* VCardSubtitle */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_2ca3c490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_2ca3c490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_2ca3c490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_2ca3c490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_2ca3c490_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".duration[data-v-2ca3c490]{display:flex;align-items:center;margin-left:20px}.detail[data-v-2ca3c490]{padding:12px}@media (max-width:500px){.detail[data-v-2ca3c490]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-2ca3c490]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-2ca3c490]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-2ca3c490]{font-size:.65rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("80ba7a60", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardTitle.vue?vue&type=template&id=36ab8302&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"mt-3 mb-5 title"},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.title)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CardTitle.vue?vue&type=template&id=36ab8302&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CardTitlevue_type_script_lang_js_ = ({
  props: ["title"]
});
// CONCATENATED MODULE: ./components/CardTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardTitlevue_type_script_lang_js_ = (CardTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/CardTitle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36ab8302",
  "cbb59fc6"
  
)

/* harmony default export */ var CardTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_style_index_0_id_36ab8302_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_style_index_0_id_36ab8302_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_style_index_0_id_36ab8302_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_style_index_0_id_36ab8302_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardTitle_vue_vue_type_style_index_0_id_36ab8302_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-36ab8302]{color:#4e4e4e;font-size:1.4rem!important;font-weight:500;letter-spacing:2px!important;padding-left:20px;padding-top:15px}@media (max-width:500px){.title[data-v-36ab8302]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-36ab8302]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-36ab8302]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-36ab8302]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(356);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("700b83d0", content, true, context)
};

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#server[data-v-3d0fbfbe]{width:100%;height:278px}@media (max-width:500px){#server[data-v-3d0fbfbe]{width:100%;height:220px}}@media (max-width:376px){#server[data-v-3d0fbfbe]{width:100%;height:210px}}@media (max-width:360px){#server[data-v-3d0fbfbe]{width:100%;height:200px}}@media (max-width:300px){#server[data-v-3d0fbfbe]{width:100%;height:170px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("25e6b466", content, true, context)
};

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/Single/Server.vue?vue&type=template&id=3d0fbfbe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_vm._ssrNode("<div id=\"server\""+(_vm._ssrAttr("speed",_vm.speed))+(_vm._ssrAttr("temperature",_vm.temperature))+(_vm._ssrAttr("disc",_vm.disc))+" data-v-3d0fbfbe></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Overview/Single/Server.vue?vue&type=template&id=3d0fbfbe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/Single/Server.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
var myChart;
/* harmony default export */ var Servervue_type_script_lang_js_ = ({
  data() {
    return {
      option: {
        tooltip: {
          formatter: "{a} <br/>{c}"
        },
        series: [{
          name: "Disc",
          type: "gauge",
          z: 3,
          min: 0,
          max: 100,
          splitNumber: 10,
          center: ["35%", "50%"],
          radius: "90%",
          axisLine: {
            lineStyle: {
              width: 10,
              color: [[0.2, "#91c7ae"], [0.8, "#63869e"], [1, "#c23531"]]
            }
          },
          pointer: {
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            distance: 0,
            length: 5,
            lineStyle: {
              color: "auto"
            }
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: "auto"
            }
          },
          axisLabel: {
            // borderRadius: 2,
            // distance:12,
            color: "#333",
            padding: 3,
            fontSize: "0.8em"
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "80%"]
          },
          detail: {
            show: false
          },
          data: [{
            value: this.disc,
            name: "Disc (%)"
          }]
        }, {
          name: "Temperature",
          type: "gauge",
          center: ["75%", "45%"],
          radius: "70%",
          min: 0,
          max: 100,
          startAngle: 135,
          endAngle: 45,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[0.2, "#91c7ae"], [0.8, "#63869e"], [1, "#c23531"]]
            }
          },
          pointer: {
            width: 4,
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            splitNumber: 5,
            distance: 0,
            length: 5,
            lineStyle: {
              color: "auto"
            }
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "-115%"]
          },
          axisLabel: {
            distance: 12,
            color: "#333",
            padding: 3,
            fontSize: "0.8em"
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: "auto"
            }
          },
          detail: {
            show: false
          },
          data: [{
            value: this.temperature,
            name: "Temperature (°C)"
          }]
        }, {
          name: "Speed",
          type: "gauge",
          center: ["75%", "45%"],
          radius: "70%",
          min: 0,
          max: 3000,
          startAngle: 315,
          endAngle: 225,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[0.2, "#91c7ae"], [0.8, "#63869e"], [1, "#c23531"]]
            }
          },
          pointer: {
            width: 4,
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            splitNumber: 5,
            distance: 0
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: "auto"
            }
          },
          axisLabel: {
            distance: 10,
            color: "#333",
            padding: 3,
            fontSize: "0.8em"
          },
          pointer: {
            width: 4,
            itemStyle: {
              color: "auto"
            }
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "118%"]
          },
          detail: {
            show: false
          },
          data: [{
            value: this.speed,
            name: "Speed (MHz)"
          }]
        }]
      }
    };
  },

  methods: {
    interval1: function () {
      setInterval(() => {
        this.option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        this.option.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        this.option.series[2].data[0].value = (Math.random() * 3000).toFixed(2) - 0;
        myChart.setOption(this.option, true);
      }, 2000);
    }
  },

  mounted() {
    setTimeout(() => {
      myChart = this.$echarts.init(document.getElementById("server"));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 100); // this.interval1()
  },

  updated() {
    const option = {
      tooltip: {
        formatter: "{a} <br/>{c}"
      },
      series: [{
        name: "Disc",
        type: "gauge",
        z: 3,
        min: 0,
        max: 100,
        splitNumber: 10,
        center: ["35%", "50%"],
        radius: "90%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [[0.2, "#91c7ae"], [0.8, "#63869e"], [1, "#c23531"]]
          }
        },
        pointer: {
          itemStyle: {
            color: "auto"
          }
        },
        axisTick: {
          distance: 0,
          length: 5,
          lineStyle: {
            color: "auto"
          }
        },
        splitLine: {
          distance: 0,
          length: 10,
          lineStyle: {
            color: "auto"
          }
        },
        axisLabel: {
          // borderRadius: 2,
          // distance:12,
          color: "#333",
          padding: 3,
          fontSize: "0.8em"
        },
        title: {
          fontSize: "0.8em",
          offsetCenter: ["0", "80%"]
        },
        detail: {
          show: false
        },
        data: [{
          value: this.disc,
          name: "Disc (%)"
        }]
      }, {
        name: "Temperature",
        type: "gauge",
        center: ["75%", "45%"],
        radius: "70%",
        min: 0,
        max: 100,
        startAngle: 135,
        endAngle: 45,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            width: 8,
            color: [[0.2, "#91c7ae"], [0.8, "#63869e"], [1, "#c23531"]]
          }
        },
        pointer: {
          width: 4,
          itemStyle: {
            color: "auto"
          }
        },
        axisTick: {
          splitNumber: 5,
          distance: 0,
          length: 5,
          lineStyle: {
            color: "auto"
          }
        },
        title: {
          fontSize: "0.8em",
          offsetCenter: ["0", "-115%"]
        },
        axisLabel: {
          distance: 12,
          color: "#333",
          padding: 3,
          fontSize: "0.8em"
        },
        splitLine: {
          distance: 0,
          length: 10,
          lineStyle: {
            color: "auto"
          }
        },
        detail: {
          show: false
        },
        data: [{
          value: this.temperature,
          name: "Temperature (°C)"
        }]
      }, {
        name: "Speed",
        type: "gauge",
        center: ["75%", "45%"],
        radius: "70%",
        min: 0,
        max: 3000,
        startAngle: 315,
        endAngle: 225,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            width: 8,
            color: [[0.2, "#91c7ae"], [0.8, "#63869e"], [1, "#c23531"]]
          }
        },
        pointer: {
          width: 4,
          itemStyle: {
            color: "auto"
          }
        },
        axisTick: {
          splitNumber: 5,
          distance: 0
        },
        splitLine: {
          distance: 0,
          length: 10,
          lineStyle: {
            color: "auto"
          }
        },
        axisLabel: {
          distance: 10,
          color: "#333",
          padding: 3,
          fontSize: "0.8em"
        },
        pointer: {
          width: 4,
          itemStyle: {
            color: "auto"
          }
        },
        title: {
          fontSize: "0.8em",
          offsetCenter: ["0", "118%"]
        },
        detail: {
          show: false
        },
        data: [{
          value: this.speed,
          name: "Speed (MHz)"
        }]
      }]
    };
    myChart = this.$echarts.init(document.getElementById("server"));
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },

  props: ["disc", "temperature", "speed"]
});
// CONCATENATED MODULE: ./components/Overview/Single/Server.vue?vue&type=script&lang=js&
 /* harmony default export */ var Single_Servervue_type_script_lang_js_ = (Servervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/Overview/Single/Server.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(355)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Single_Servervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3d0fbfbe",
  "1682938f"
  
)

/* harmony default export */ var Server = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardServer_vue_vue_type_style_index_0_id_58b26d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(357);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardServer_vue_vue_type_style_index_0_id_58b26d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardServer_vue_vue_type_style_index_0_id_58b26d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardServer_vue_vue_type_style_index_0_id_58b26d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardServer_vue_vue_type_style_index_0_id_58b26d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hr[data-v-58b26d9e]{margin:0 20px;border-top:1px solid #bdc7c7}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/CardServer.vue?vue&type=template&id=58b26d9e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"elevation-15 rounded-lg"},[_c('v-card-title',{staticClass:"color"},[_vm._v("SERVER")]),_vm._v(" "),_c('Server',{attrs:{"disc":"20","temperature":"50","speed":"2000"}}),_vm._v(" "),_c('hr',{staticClass:"hr"}),_vm._v(" "),_c('Duration',{attrs:{"duration":"Updated just now"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Overview/CardServer.vue?vue&type=template&id=58b26d9e&scoped=true&

// EXTERNAL MODULE: ./components/CardTitle.vue + 4 modules
var CardTitle = __webpack_require__(210);

// EXTERNAL MODULE: ./components/Overview/Single/Server.vue + 4 modules
var Server = __webpack_require__(362);

// EXTERNAL MODULE: ./components/Duration.vue + 4 modules
var Duration = __webpack_require__(192);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/CardServer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CardServervue_type_script_lang_js_ = ({
  components: {
    CardTitle: CardTitle["default"],
    Server: Server["default"],
    Duration: Duration["default"]
  },
  computed: {}
});
// CONCATENATED MODULE: ./components/Overview/CardServer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Overview_CardServervue_type_script_lang_js_ = (CardServervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(20);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Overview/CardServer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(387)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Overview_CardServervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "58b26d9e",
  "a55e8eea"
  
)

/* harmony default export */ var CardServer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Duration: __webpack_require__(192).default})


/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */]})


/***/ })

};;
//# sourceMappingURL=overview-card-server.js.map