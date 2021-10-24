exports.ids = [29];
exports.modules = {

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1128d99e", content, true, context)
};

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/Single/Gauge.vue?vue&type=template&id=125412f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"level"},[_c('v-card-title',{staticClass:"sidebar rounded-lg mb-3"},[_vm._v("\n    "+_vm._s(_vm.description)+"\n  ")]),_vm._ssrNode(" <div"+(_vm._ssrAttr("id",_vm.id))+(_vm._ssrAttr("data",_vm.data))+" style=\"width: 100%; height: 250px\" data-v-125412f6></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Overview/Single/Gauge.vue?vue&type=template&id=125412f6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/Single/Gauge.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Gaugevue_type_script_lang_js_ = ({
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
          max: this.max,
          splitNumber: 10,
          radius: "90%",
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              width: 20,
              color: [[0.3, "#0fa463"], [0.7, "#eb8934"], [1, "#db3b38"]]
            }
          },
          pointer: {
            itemStyle: {
              color: "auto"
            }
          },
          axisTick: {
            distance: -20,
            length: 10,
            lineStyle: {
              color: "#ffffff"
            }
          },
          splitLine: {
            distance: -20,
            length: 20,
            lineStyle: {
              color: "#ffffff"
            }
          },
          axisLabel: {
            // borderRadius: 2,
            distance: 30,
            color: "auto",
            padding: 3,
            fontSize: "0.9em"
          },
          title: {
            fontSize: "0.8em",
            offsetCenter: ["0", "95%"] // show:false

          },
          detail: {
            fontSize: "1.4em",
            formatter: "{value}",
            offsetCenter: ["0", "75%"],
            color: "auto"
          },
          data: [{
            value: this.data,
            name: this.unit
          }]
        }]
      }
    };
  },

  mounted() {
    setTimeout(() => {
      var myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(this.option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, 100);
  },

  updated() {
    var option = {
      tooltip: {
        formatter: "{a} <br/>{c}"
      },
      series: [{
        name: "Disc",
        type: "gauge",
        z: 3,
        min: 0,
        max: this.max,
        splitNumber: 10,
        radius: "90%",
        splitNumber: 5,
        axisLine: {
          lineStyle: {
            width: 20,
            color: [[0.3, "#0fa463"], [0.7, "#eb8934"], [1, "#db3b38"]]
          }
        },
        pointer: {
          itemStyle: {
            color: "auto"
          }
        },
        axisTick: {
          distance: -20,
          length: 10,
          lineStyle: {
            color: "#ffffff"
          }
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: "#ffffff"
          }
        },
        axisLabel: {
          // borderRadius: 2,
          distance: 30,
          color: "auto",
          padding: 3,
          fontSize: "0.9em"
        },
        title: {
          fontSize: "0.8em",
          offsetCenter: ["0", "95%"] // show:false

        },
        detail: {
          fontSize: "1.4em",
          formatter: "{value}",
          offsetCenter: ["0", "75%"],
          color: "auto"
        },
        data: [{
          value: this.data,
          name: this.unit
        }]
      }]
    };
    var myChart = this.$echarts.init(document.getElementById(this.id));
    myChart.setOption(option, true);
  },

  props: ["description", "id", "max", "unit", "data"]
});
// CONCATENATED MODULE: ./components/Overview/Single/Gauge.vue?vue&type=script&lang=js&
 /* harmony default export */ var Single_Gaugevue_type_script_lang_js_ = (Gaugevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(14);

// CONCATENATED MODULE: ./components/Overview/Single/Gauge.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(251)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Single_Gaugevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "125412f6",
  "580678cf"
  
)

/* harmony default export */ var Gauge = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VCardTitle: VCard["b" /* VCardTitle */]})


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_125412f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_125412f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_125412f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_125412f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gauge_vue_vue_type_style_index_0_id_125412f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-125412f6]{font-size:1rem;padding:8px 10px 8px 20px;color:#f0f8ff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=overview-single-gauge.js.map