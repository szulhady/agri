exports.ids = [50];
exports.modules = {

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(220);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4377f036", content, true, context)
};

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChartSingleData_vue_vue_type_style_index_0_id_185f5285_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-chart[data-v-185f5285]{display:flex;justify-content:center;margin-bottom:5px}.chart[data-v-185f5285]{padding:0 auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 223:
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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Trend/LineChartSingleData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(219)
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
  "32ccf7f8"
  
)

/* harmony default export */ var LineChartSingleData = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=trend-line-chart-single-data.js.map