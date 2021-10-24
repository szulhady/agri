exports.ids = [30];
exports.modules = {

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("700b83d0", content, true, context)
};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(268);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Server_vue_vue_type_style_index_0_id_3d0fbfbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#server[data-v-3d0fbfbe]{width:100%;height:278px}@media (max-width:500px){#server[data-v-3d0fbfbe]{width:100%;height:220px}}@media (max-width:376px){#server[data-v-3d0fbfbe]{width:100%;height:210px}}@media (max-width:360px){#server[data-v-3d0fbfbe]{width:100%;height:200px}}@media (max-width:300px){#server[data-v-3d0fbfbe]{width:100%;height:170px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 323:
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
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Overview/Single/Server.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(316)
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
  "52c3265d"
  
)

/* harmony default export */ var Server = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=overview-single-server.js.map