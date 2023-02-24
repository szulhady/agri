exports.ids = [79,40,52,54,55];
exports.modules = {

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1aad47fc", content, true, context)
};

/***/ }),

/***/ 191:
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
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/PageTitle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
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
  "05180d84"
  
)

/* harmony default export */ var PageTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];

const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();

const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "D"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "D"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();

const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};

function breakpointClass(type, prop, val) {
  let className = type;

  if (val == null || val === false) {
    return undefined;
  }

  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageTitle_vue_vue_type_style_index_0_id_48d66cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title[data-v-48d66cb0]{color:#4e4e4e;font-size:1.5rem!important;font-weight:500;letter-spacing:2px!important}@media (max-width:500px){.title[data-v-48d66cb0]{font-size:17px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:360px){.title[data-v-48d66cb0]{font-size:15px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:320px){.title[data-v-48d66cb0]{font-size:13px!important;margin-top:5px!important;margin-bottom:10px!important}}@media (max-width:300px){.title[data-v-48d66cb0]{font-size:11px!important;margin-top:0!important;margin-bottom:5px!important}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("000ab7c4", content, true, context)
};

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4377f036", content, true, context)
};

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_6f99e610_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_6f99e610_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_6f99e610_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_6f99e610_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_style_index_0_id_6f99e610_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-chart[data-v-6f99e610]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-6f99e610]{padding:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trend/LineChart.vue?vue&type=template&id=6f99e610&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-chart"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("dailyMin",_vm.dailyMin))+(_vm._ssrAttr("dailyMax",_vm.dailyMax))+(_vm._ssrAttr("dailyAvg",_vm.dailyAvg))+(_vm._ssrAttr("dailyHour",_vm.dailyHour))+(_vm._ssrAttr("xAxis",_vm.xAxis))+" class=\"chart\" style=\"width: 100%;height:280px\" data-v-6f99e610></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Trend/LineChart.vue?vue&type=template&id=6f99e610&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trend/LineChart.vue?vue&type=script&lang=js&
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
/* harmony default export */ var LineChartvue_type_script_lang_js_ = ({
  data() {
    return {
      sensorUnit: ["mg/l", "°C", "unit", "ppt", "mg/l"]
    };
  },

  mounted() {
    var option2 = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: ["Min", "Max", "Avg"],
        textStyle: {
          fontSize: 12
        }
      },
      xAxis: {
        name: this.xAxis,
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom"
        },
        type: "category",
        data: this.dailyHour
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12
        },
        name: this.sensorUnit[this.index],
        type: "value",
        min: this.axisMin,
        max: this.axisMax,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12
        }
      },
      series: [{
        //min data set
        name: "Min",
        data: this.dailyMin,
        type: "line",
        fontSize: 30,
        color: "#36c25b",
        areaStyle: {
          color: "rgba(135, 211, 124, 1)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }, {
        //max data set
        name: "Max",
        data: this.dailyMax,
        type: "line",
        fontSize: 30,
        color: "#f52525",
        areaStyle: {
          color: "rgba(246, 36, 89, 0.2)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }, {
        //average data set
        name: "Avg",
        data: this.dailyAvg,
        type: "line",
        fontSize: 30,
        color: "#1930fc",
        areaStyle: {
          color: "rgba(137, 196, 244, 0.5)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }]
    }; // setTimeout(() => {

    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option2, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    }); // }, 2000);
  },

  updated() {
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: ["Min", "Max", "Avg"],
        textStyle: {
          fontSize: 12
        }
      },
      xAxis: {
        name: this.xAxis,
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom"
        },
        type: "category",
        data: this.dailyHour
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12
        },
        name: this.sensorUnit[this.index],
        type: "value",
        min: this.axisMin,
        max: this.axisMax,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12
        }
      },
      series: [{
        //min data set
        name: "Min",
        data: this.dailyMin,
        type: "line",
        fontSize: 30,
        color: "#36c25b",
        areaStyle: {
          color: "rgba(135, 211, 124, 1)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }, {
        //max data set
        name: "Max",
        data: this.dailyMax,
        type: "line",
        fontSize: 30,
        color: "#f52525",
        areaStyle: {
          color: "rgba(246, 36, 89, 0.2)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }, {
        //average data set
        name: "Avg",
        data: this.dailyAvg,
        type: "line",
        fontSize: 30,
        color: "#1930fc",
        areaStyle: {
          color: "rgba(137, 196, 244, 0.5)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }]
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },

  props: ["id", "dailyMin", "dailyMax", "dailyAvg", "dailyHour", "xAxis", "axisMin", "axisMax", "index"]
});
// CONCATENATED MODULE: ./components/Trend/LineChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var Trend_LineChartvue_type_script_lang_js_ = (LineChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/Trend/LineChart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Trend_LineChartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f99e610",
  "5a6693c0"
  
)

/* harmony default export */ var LineChart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trend/LineChartSingleData.vue?vue&type=template&id=185f5285&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-chart"},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("data",_vm.data))+(_vm._ssrAttr("xAxis",_vm.xAxis))+" class=\"chart\" style=\"width: 100%;height:280px\" data-v-185f5285></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Trend/LineChartSingleData.vue?vue&type=template&id=185f5285&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trend/LineChartSingleData.vue?vue&type=script&lang=js&
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
/* harmony default export */ var LineChartSingleDatavue_type_script_lang_js_ = ({
  data() {
    return {
      sensorUnit: ["mg/l", "°C", "unit", "ppt", "mg/l"]
    };
  },

  mounted() {
    var option2 = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: ["Current"],
        textStyle: {
          fontSize: 12
        }
      },
      xAxis: {
        name: this.xAxis,
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom"
        },
        type: "category",
        data: this.dailyHour
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12
        },
        name: this.sensorUnit[this.index],
        type: "value",
        min: this.axisMin,
        max: this.axisMax,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12
        }
      },
      series: [{
        //min data set
        name: "Current",
        data: this.data,
        type: "line",
        fontSize: 30,
        color: "#36c25b",
        areaStyle: {
          color: "rgba(135, 211, 124, 1)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }]
    };
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(option2, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 500);
  },

  updated() {
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      legend: {
        data: ["Current"],
        textStyle: {
          fontSize: 12
        }
      },
      xAxis: {
        name: this.xAxis,
        offset: 20,
        nameLocation: "center",
        nameTextStyle: {
          fontSize: 12
        },
        axisLabel: {
          fontSize: 12,
          verticalAlign: "bottom"
        },
        type: "category",
        data: this.dailyHour
      },
      yAxis: {
        nameTextStyle: {
          fontSize: 12
        },
        name: this.sensorUnit[this.index],
        type: "value",
        min: this.axisMin,
        max: this.axisMax,
        axisLabel: {
          // formatter: "{value} cm",
          fontSize: 12
        }
      },
      series: [{
        //min data set
        name: "Current",
        data: this.data,
        type: "line",
        fontSize: 30,
        color: "#36c25b",
        areaStyle: {
          color: "rgba(135, 211, 124, 1)"
        },
        label: {
          color: "black",
          fontSize: 15,
          formatter: function (d) {
            return d.name + d.data;
          }
        }
      }]
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },

  props: ["id", "data", "dailyHour", "xAxis", "axisMin", "axisMax", "index"]
});
// CONCATENATED MODULE: ./components/Trend/LineChartSingleData.vue?vue&type=script&lang=js&
 /* harmony default export */ var Trend_LineChartSingleDatavue_type_script_lang_js_ = (LineChartSingleDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./components/Trend/LineChartSingleData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Trend_LineChartSingleDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "185f5285",
  "7033e352"
  
)

/* harmony default export */ var LineChartSingleData = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("04d7ec20", content, true, context)
};

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStationTrendKongPo_vue_vue_type_style_index_0_id_01c0665c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(347);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStationTrendKongPo_vue_vue_type_style_index_0_id_01c0665c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStationTrendKongPo_vue_vue_type_style_index_0_id_01c0665c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStationTrendKongPo_vue_vue_type_style_index_0_id_01c0665c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardStationTrendKongPo_vue_vue_type_style_index_0_id_01c0665c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".center[data-v-01c0665c]{justify-content:center;background:#11270b!important;color:#fff!important;border-top-left-radius:8px;border-top-right-radius:8px}.padding[data-v-01c0665c]{padding:0 1em}.active[data-v-01c0665c]{background:#58be3c!important}.card[data-v-01c0665c],.card-color[data-v-01c0665c]{border-radius:8px}.flex-column[data-v-01c0665c]{display:flex;flex-direction:column}.button[data-v-01c0665c]{margin:15px}.card-detail[data-v-01c0665c]{background-color:#f1f1f1!important;border-radius:8px}.flex-btn[data-v-01c0665c]{display:flex;justify-content:space-around;flex-wrap:wrap}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trend/CardStationTrendKongPo.vue?vue&type=template&id=01c0665c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-row',{staticClass:"pb-3"},_vm._l((_vm.items),function(item,index){return _c('v-col',{key:item.title,attrs:{"cols":item.cols,"sm":"3"}},[_c('v-card',{staticClass:"card card-color  elevation-12 ",attrs:{"id":index},on:{"click":function($event){return _vm.console(index)}}},[_c('v-card-title',[_vm._v(_vm._s(item.block))]),_vm._v(" "),_c('v-card-subtitle',[_vm._v(_vm._s(item.description))])],1)],1)}),1),_vm._ssrNode(" "),_c('v-card',{staticClass:"card-color elevation-12"},[_c('v-card-title',{staticClass:"color"},[_vm._v("DETAILS")]),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"flex-btn"},_vm._l((_vm.sensorsID),function(sensor,index){return _c('v-btn',{key:sensor,staticClass:"button card card-color elevation-12",staticStyle:{"width":"250px"},attrs:{"id":sensor},on:{"click":function($event){return _vm.console2(sensor, index)}}},[_vm._v(_vm._s(_vm.sensors[index]))])}),1)],1),_vm._v(" "),_c('v-row',{staticClass:"padding"},[_c('v-col',{staticClass:"left",attrs:{"cols":"6","lg":"6"}},[_c('v-card-subtitle',{staticClass:"center"},[_vm._v("Current")]),_vm._v(" "),_c('LineChartSingleData',{attrs:{"id":"current","data":_vm.trends[_vm.index].current[_vm.index2],"dailyHour":_vm.arrayTime[_vm.index],"x-axis":"Hour","index":_vm.index2}})],1),_vm._v(" "),_c('v-col',{staticClass:"left",attrs:{"cols":"6","lg":"6"}},[_c('v-card-subtitle',{staticClass:"center"},[_vm._v("Hourly")]),_vm._v(" "),_c('LineChart',{attrs:{"id":"houry","dailyMax":_vm.trends[_vm.index].hourly[_vm.index2].max,"dailyMin":_vm.trends[_vm.index].hourly[_vm.index2].min,"dailyAvg":_vm.trends[_vm.index].hourly[_vm.index2].avg,"dailyHour":_vm.trends[_vm.index].hourly[_vm.index2].hour,"x-axis":"Hour","index":_vm.index2}})],1),_vm._v(" "),_c('v-col',{staticClass:"right",attrs:{"cols":"6","lg":"6"}},[_c('v-card-subtitle',{staticClass:"center"},[_vm._v("Daily")]),_vm._v(" "),_c('LineChart',{attrs:{"id":"weekly","dailyMax":_vm.trends[_vm.index].daily[_vm.index2].max,"dailyMin":_vm.trends[_vm.index].daily[_vm.index2].min,"dailyAvg":_vm.trends[_vm.index].daily[_vm.index2].avg,"dailyHour":_vm.trends[_vm.index].daily[_vm.index2].day,"x-axis":"Day","index":_vm.index2}})],1),_vm._v(" "),_c('v-col',{staticClass:"left",attrs:{"cols":"6","lg":"6"}},[_c('v-card-subtitle',{staticClass:"center"},[_vm._v("Monthly")]),_vm._v(" "),_c('LineChart',{attrs:{"id":"monthly","dailyMax":_vm.trends[_vm.index].monthly[_vm.index2].max,"dailyMin":_vm.trends[_vm.index].monthly[_vm.index2].min,"dailyAvg":_vm.trends[_vm.index].monthly[_vm.index2].avg,"dailyHour":_vm.trends[_vm.index].monthly[_vm.index2].monthName,"x-axis":"Month","index":_vm.index2}})],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Trend/CardStationTrendKongPo.vue?vue&type=template&id=01c0665c&scoped=true&

// EXTERNAL MODULE: ./components/Trend/LineChart.vue + 4 modules
var LineChart = __webpack_require__(242);

// EXTERNAL MODULE: ./components/Trend/LineChartSingleData.vue + 4 modules
var LineChartSingleData = __webpack_require__(243);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Trend/CardStationTrendKongPo.vue?vue&type=script&lang=js&
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



/* harmony default export */ var CardStationTrendKongPovue_type_script_lang_js_ = ({
  data() {
    return {
      index: "0",
      index2: "0",
      station: "Block 1",
      sensorsID: ["SoilNitrogen", "SoilPhosphorus", "SoilPotassium", "SoilPH", "SoilEC", "SoilMS"],
      // sensorsID: ["SoilNPK", "SoilPH", "SoilEC", "SoilMS", "SoilTEMP"],
      sensors: ["Soil Nitrogen", "Soil Phosphorus", "Soil Potassium", "Soil pH", "Soil EC", "Soil MS"],
      // sensors: ["Soil NPK", "Soil pH", "Soil EC", "Soil MS", "Soil Temp"],
      theme: "blue-theme"
    };
  },

  methods: {
    console: function (index) {
      this.station = this.items[index].title;
      this.index = index;
      const active = document.getElementById(index).classList.add("active");

      for (let i = 0; i <= 1; i++) {
        if (i != index) {
          let deactive = document.getElementById(i).classList.remove("active");
        }
      }
    },
    console2: function (sensor, index) {
      this.index2 = index;
      const active2 = document.getElementById(sensor).classList.add("active");

      for (let i = 0; i <= 5; i++) {
        let Classes = this.sensorsID[i];

        if (Classes != sensor) {
          let deactive = document.getElementById(Classes).classList.remove("active");
        }
      }
    }
  },
  computed: { ...Object(external_vuex_["mapState"])({
      trends: state => state.trendsKongPo,
      arrayTime: state => state.arrayTime
    })
  },
  props: ["items"],
  components: {
    LineChart: LineChart["default"],
    LineChartSingleData: LineChartSingleData["default"]
  },

  mounted() {
    const active = document.getElementById(0).classList.add("active");
    const active2 = document.getElementById("SoilNitrogen").classList.add("active");
  }

});
// CONCATENATED MODULE: ./components/Trend/CardStationTrendKongPo.vue?vue&type=script&lang=js&
 /* harmony default export */ var Trend_CardStationTrendKongPovue_type_script_lang_js_ = (CardStationTrendKongPovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(20);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(184);

// CONCATENATED MODULE: ./components/Trend/CardStationTrendKongPo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(379)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Trend_CardStationTrendKongPovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "01c0665c",
  "5385aa22"
  
)

/* harmony default export */ var CardStationTrendKongPo = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["b" /* VCardSubtitle */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trendsKongPo.vue?vue&type=template&id=178fb72a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('PageTitle',{attrs:{"title":"TRENDS"}}),_vm._ssrNode(" "),_c('CardStationTrend',{staticClass:"pb-7",attrs:{"items":_vm.items}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/trendsKongPo.vue?vue&type=template&id=178fb72a&scoped=true&

// EXTERNAL MODULE: ./components/PageTitle.vue + 4 modules
var PageTitle = __webpack_require__(191);

// EXTERNAL MODULE: ./components/Trend/CardStationTrendKongPo.vue + 4 modules
var CardStationTrendKongPo = __webpack_require__(425);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trendsKongPo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var trendsKongPovue_type_script_lang_js_ = ({
  middleware: ["isKongPo"],
  computed: { ...Object(external_vuex_["mapState"])({
      items: state => state.stations[3].sensorSoil
    })
  },
  components: {
    PageTitle: PageTitle["default"],
    CardStationTrend: CardStationTrendKongPo["default"]
  },
  methods: { ...Object(external_vuex_["mapMutations"])({
      getHourlyKongPo: "getHourlyKongPo",
      getDailyKongPo: "getDailyKongPo",
      getMonthlyKongPo: "getMonthlyKongPo"
    }),
    getDataHourly: function (table, station, sensorVal, indexStation, indexSensor) {
      // console.log(this.loggedInUser.deviceID)
      this.$axios.$get(`http://139.59.109.48/api/hourly/`, {
        params: {
          // .$get(`/daily/`,{params:{
          table: table,
          station: station,
          val: sensorVal
        }
      }).then(response => {
        let data = {};
        let max = [];
        let min = [];
        let avg = [];
        let hour = [];
        response.forEach(item => {
          max.push(item.max);
          avg.push(item.avg);
          min.push(item.min);
          hour.push(item.hour);
        });
        data = {
          station,
          indexStation,
          indexSensor,
          min,
          max,
          avg,
          hour
        }; // console.log(data)

        this.getHourlyKongPo(data); // console.log(response);
      }).catch(error => {
        console.log(error);
      });
    },
    getDataDaily: function (table, station, sensorVal, indexStation, indexSensor) {
      this.$axios.$get(`http://127.0.0.1:5000/api/daily/`, {
        // .$get(`http://139.59.109.48/api/daily/`, {
        // .$get(`/api/daily`, {
        params: {
          // .$get("/api/weekly/",{params:{
          table: table,
          station: station,
          val: sensorVal
        }
      }).then(response => {
        let data = {};
        let min = [];
        let max = [];
        let avg = [];
        let day = [];
        response.forEach(item => {
          max.push(item.max);
          avg.push(item.avg);
          min.push(item.min);
          day.push(item.day);
        });
        data = {
          station,
          indexStation,
          indexSensor,
          min,
          max,
          avg,
          day
        };
        this.getDailyKongPo(data);
      }).catch(error => {
        console.log(error);
      });
    },
    getDataMonthly: function (table, station, sensorVal, indexStation, indexSensor) {
      this.$axios.$get("http://139.59.109.48/api/monthly/", {
        params: {
          // .$get("/api/monthly/",{params:{
          table: table,
          station: station,
          val: sensorVal
        }
      }).then(response => {
        let data = {};
        let min = [];
        let max = [];
        let avg = [];
        let month = [];
        let monthName = [];
        response.forEach(item => {
          max.push(item.max);
          avg.push(item.avg);
          min.push(item.min);
          monthName.push(item.monthname);
        });
        data = {
          station,
          indexStation,
          indexSensor,
          min,
          max,
          avg,
          monthName
        };
        this.getMonthlyKongPo(data);
      }).catch(error => {
        console.log(error);
      });
    }
  },

  async mounted() {
    const station = ["314", "324"];
    const val = ["soilNitrogen_val", "soilPhosphorus_val", "soilPotassium_val", "soilPH_val", "soilEC_val", "soilHMD_val"]; // daily

    for (let i = 0; i < station.length; i++) {
      for (let j = 0; j < val.length; j++) {
        this.getDataHourly("kongpo_data", station[i], val[j], i, j);
        this.getDataDaily("kongpo_data", station[i], val[j], i, j);
        this.getDataMonthly("kongpo_data", station[i], val[j], i, j);
      }
    } // weekly
    //  for(let i=0;i<station.length;i++){
    // for (let j = 0; j < val.length; j++) {
    //   this.getDataDaily(this.loggedInUser.deviceID, val[j], j);
    // }
    // }
    //monthly
    // for(let i=0;i<station.length;i++){
    //   for (let j = 0; j < val.length; j++) {
    //     this.getDataMonthly(this.loggedInUser.deviceID, val[j], j);
    //   }

  }

});
// CONCATENATED MODULE: ./pages/trendsKongPo.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_trendsKongPovue_type_script_lang_js_ = (trendsKongPovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// CONCATENATED MODULE: ./pages/trendsKongPo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_trendsKongPovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "178fb72a",
  "43d70705"
  
)

/* harmony default export */ var trendsKongPo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PageTitle: __webpack_require__(191).default})


/***/ })

};;
//# sourceMappingURL=trendsKongPo.js.map