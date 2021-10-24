exports.ids = [17];
exports.modules = {

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("3dc27e0b", content, true, context)
};

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_style_index_0_id_654da8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_style_index_0_id_654da8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_style_index_0_id_654da8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_style_index_0_id_654da8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_style_index_0_id_654da8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".user-container[data-v-654da8e1]{background:#3c5a14}.icon-container[data-v-654da8e1]{display:flex}.icon-avatar[data-v-654da8e1]{padding-top:20px;padding-bottom:20px;margin:auto;width:20%}.v-card__subtitle[data-v-654da8e1]{padding-top:0;padding-bottom:15px;color:#f0f8ff!important;font-size:.9rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/General/UserInfo.vue?vue&type=template&id=654da8e1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"user-container elevation-10 rounded-lg"},[_c('div',{staticClass:"icon-container"},[_c('img',{staticClass:"icon-avatar",attrs:{"src":"avatar2.png","alt":"avatar-icon"}})]),_vm._v(" "),_c('v-card-subtitle',{staticStyle:{"text-align":"center","font-size":"1.4rem"}},[_vm._v("\n    Username\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    Name : Ali Bin Abu\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    Email : user@gmail.com\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    Location : Ipah 1\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    Plant area : 300m2\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    Type of plant system : a\n  ")]),_vm._v(" "),_c('v-card-subtitle',[_vm._v("\n    Type of irrigation system : b\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/General/UserInfo.vue?vue&type=template&id=654da8e1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/General/UserInfo.vue?vue&type=script&lang=js&
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
/* harmony default export */ var UserInfovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/General/UserInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var General_UserInfovue_type_script_lang_js_ = (UserInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(14);

// CONCATENATED MODULE: ./components/General/UserInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(332)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  General_UserInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "654da8e1",
  "70e42216"
  
)

/* harmony default export */ var UserInfo = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["a" /* VCardSubtitle */]})


/***/ })

};;
//# sourceMappingURL=general-user-info.js.map