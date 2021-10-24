exports.ids = [9,35];
exports.modules = {

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1aad47fc", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageTitle.vue?vue&type=template&id=48d66cb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"mt-3 mb-5 title"},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.title)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PageTitle.vue?vue&type=template&id=48d66cb0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageTitle.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var PageTitlevue_type_script_lang_js_ = ({
  props: ["title"]
});
// CONCATENATED MODULE: ./components/PageTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageTitlevue_type_script_lang_js_ = (PageTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/PageTitle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48d66cb0",
  "00c53df0"
  
)

/* harmony default export */ var PageTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("548aa708", content, true, context)
};

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tkpmPagohStatusAdmin_vue_vue_type_style_index_0_id_1ebe192d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tkpmPagohStatusAdmin_vue_vue_type_style_index_0_id_1ebe192d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tkpmPagohStatusAdmin_vue_vue_type_style_index_0_id_1ebe192d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tkpmPagohStatusAdmin_vue_vue_type_style_index_0_id_1ebe192d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tkpmPagohStatusAdmin_vue_vue_type_style_index_0_id_1ebe192d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".overlay[data-v-1ebe192d]{position:relative}.overlay2[data-v-1ebe192d]{position:absolute;top:0;left:0}.filter-green[data-v-1ebe192d]{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%);-webkit-animation:blinkGreen-data-v-1ebe192d 1s infinite;animation:blinkGreen-data-v-1ebe192d 1s infinite}.filter-red[data-v-1ebe192d]{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%);-webkit-animation:blinkRed-data-v-1ebe192d 1s infinite;animation:blinkRed-data-v-1ebe192d 1s infinite}@-webkit-keyframes blinkRed-data-v-1ebe192d{0%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}50%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(50%) contrast(117%)}to{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}}@keyframes blinkRed-data-v-1ebe192d{0%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}50%{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(50%) contrast(117%)}to{filter:invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg) brightness(94%) contrast(117%)}}@-webkit-keyframes blinkGreen-data-v-1ebe192d{0%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}50%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(70%) contrast(119%)}to{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}}@keyframes blinkGreen-data-v-1ebe192d{0%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}50%{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(70%) contrast(119%)}to{filter:invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(90%) contrast(119%)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/Overview/tkpmPagohStatusAdmin.vue?vue&type=template&id=1ebe192d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',{staticClass:"elevation-10"},[_c('div',[_c('div',{staticClass:"overlay"},[_c('v-img',{attrs:{"src":"tkpmPagoh.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv1.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv2.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv3.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv4.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv5.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv6.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv7.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv8.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv9.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv10.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv11.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv12.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohsv13.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohsv14.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohdpA1.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"overlay2",attrs:{"src":"tkpmPagohdpA1Frame.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohdpB1.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"overlay2",attrs:{"src":"tkpmPagohdpB1Frame.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohdpA2.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"overlay2",attrs:{"src":"tkpmPagohdpA2Frame.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-green overlay2",attrs:{"src":"tkpmPagohdpB2.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"overlay2",attrs:{"src":"tkpmPagohdpB2Frame.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"filter-red overlay2",attrs:{"src":"tkpmPagohwp.svg"}}),_vm._v(" "),_c('v-img',{staticClass:"overlay2",attrs:{"src":"tkpmPagohwpFrame.svg"}})],1)])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Admin/Overview/tkpmPagohStatusAdmin.vue?vue&type=template&id=1ebe192d&scoped=true&

// EXTERNAL MODULE: ./components/PageTitle.vue + 4 modules
var PageTitle = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin/Overview/tkpmPagohStatusAdmin.vue?vue&type=script&lang=js&
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
//
//
//

/* harmony default export */ var tkpmPagohStatusAdminvue_type_script_lang_js_ = ({
  components: {
    PageTitle: PageTitle["default"]
  }
});
// CONCATENATED MODULE: ./components/Admin/Overview/tkpmPagohStatusAdmin.vue?vue&type=script&lang=js&
 /* harmony default export */ var Overview_tkpmPagohStatusAdminvue_type_script_lang_js_ = (tkpmPagohStatusAdminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(39);

// CONCATENATED MODULE: ./components/Admin/Overview/tkpmPagohStatusAdmin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(328)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Overview_tkpmPagohStatusAdminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ebe192d",
  "57adf41f"
  
)

/* harmony default export */ var tkpmPagohStatusAdmin = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VImg: VImg["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=admin-overview-tkpm-pagoh-status-admin.js.map