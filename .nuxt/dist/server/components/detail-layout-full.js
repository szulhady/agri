exports.ids = [13];
exports.modules = {

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
// Styles
 // Mixins


/* harmony default export */ __webpack_exports__["a"] = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-divider',
  props: {
    inset: Boolean,
    vertical: Boolean
  },

  render(h) {
    // WAI-ARIA attributes
    let orientation;

    if (!this.$attrs.role || this.$attrs.role === 'separator') {
      orientation = this.vertical ? 'vertical' : 'horizontal';
    }

    return h('hr', {
      class: {
        'v-divider': true,
        'v-divider--inset': this.inset,
        'v-divider--vertical': this.vertical,
        ...this.themeClasses
      },
      attrs: {
        role: 'separator',
        'aria-orientation': orientation,
        ...this.$attrs
      },
      on: this.$listeners
    });
  }

}));

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("7132a15d", content, true)

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0d135400", content, true)

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/layoutFull.vue?vue&type=template&id=7ce2d08c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"mx-auto",attrs:{"max-width":"500"}},[_c('v-card-title',{staticClass:"text-h6 font-weight-regular justify-space-between"},[_c('span',[_vm._v(_vm._s(_vm.currentTitle))]),_vm._v(" "),_c('v-avatar',{staticClass:"subheading white--text",attrs:{"color":"primary lighten-2","size":"24"},domProps:{"textContent":_vm._s(_vm.step)}})],1),_vm._v(" "),_c('v-window',{model:{value:(_vm.step),callback:function ($$v) {_vm.step=$$v},expression:"step"}},[_c('v-window-item',{attrs:{"value":1}},[_c('v-card',{staticClass:"px-10 py-5"},[_c('table',{staticStyle:{"border-collapse":"collapse","border":"none","margin":"auto"}},[_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Full name\n                    ")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border":"solid windowtext 1.0pt","border-left":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.fullName)+"\n                  ")])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Width area")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.widthArea))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of plant")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfPlant))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Location")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.location))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of plant system")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfPlantSystem))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of irrigation system")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfIrrigationSystem))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of water source")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfWaterSource))])])])])])])])],1),_vm._v(" "),_c('v-window-item',{attrs:{"value":2}},[_c('v-card',{staticClass:"px-10 py-5"},[_c('table',{staticStyle:{"border-collapse":"collapse","border":"none","margin":"auto"}},[_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of water pump\n                    ")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border":"solid windowtext 1.0pt","border-left":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfWaterPump)+"\n                  ")])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Water pump output")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.waterPumpOutput))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of fertilizer")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfFertilizer))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of insecticide")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfInsecticide))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Type of nozzle")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.typeOfNozzle))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Duration of flush")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.durationOfFlush))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Date of planting")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.dateOfPlanting))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Date of crop yield")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.dateOfCropYield))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Fertilizing date")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.fertilizingDate))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Insecticide process date")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.insecticideProcessDate))])])])])])])])],1),_vm._v(" "),_c('v-window-item',{attrs:{"value":3}},[_c('v-card',{staticClass:"px-10 py-5"},[_c('table',{staticStyle:{"border-collapse":"collapse","border":"none","margin":"auto"}},[_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Date of planting\n                    ")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border":"solid windowtext 1.0pt","border-left":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.dateOfPlantingYieldCropInformation)+"\n                  ")])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Date of crop yield")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.dateOfCropYieldYieldCropInformation))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Yield quantity")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.yieldQuantity))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Damage yield quantity")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.damageYieldQuantity))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Selling price")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.sellingPrice))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Sales revenue")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.salesRevenue))])])])])])])])],1),_vm._v(" "),_c('v-window-item',{attrs:{"value":4}},[_c('v-card',{staticClass:"px-10 py-5"},[_c('table',{staticStyle:{"border-collapse":"collapse","border":"none","margin":"auto"}},[_c('tbody',[_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Seasonal result\n                    ")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border":"solid windowtext 1.0pt","border-left":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.seasonalResult)+"\n                  ")])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Annual result")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.annualResult))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Sales revenue")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.salesRevenueReport))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Yield improvement")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.yieldImprovement))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Irrigation period")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.irrigationPeriod))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Rain intensity")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.rainIntensity))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("Days of raining")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.daysOfRaining))])])])]),_vm._v(" "),_c('tr',[_c('td',{staticStyle:{"width":"162.8pt","border":"solid windowtext 1.0pt","border-top":"none","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('strong',[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v("System breakdown")])])])]),_vm._v(" "),_c('td',{staticStyle:{"width":"288.0pt","border-top":"none","border-left":"none","border-bottom":"solid windowtext 1.0pt","border-right":"solid windowtext 1.0pt","padding":"0cm 5.4pt 0cm 5.4pt","height":"26.0pt"}},[_c('p',{staticStyle:{"margin-top":"0cm","margin-right":"0cm","margin-bottom":"0cm","margin-left":"0cm","line-height":"normal","font-size":"15px","font-family":"\"Calibri\",sans-serif"}},[_c('span',{staticStyle:{"font-family":"\"Century Gothic\",sans-serif"}},[_vm._v(_vm._s(_vm.detail.systemBreakdown))])])])])])])])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-card-actions',[_c('v-btn',{attrs:{"disabled":_vm.step === 1,"text":""},on:{"click":function($event){_vm.step--}}},[_vm._v("\n      Back\n    ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"disabled":_vm.step === 4,"color":"primary","depressed":""},on:{"click":function($event){_vm.step++}}},[_vm._v("\n      Next\n    ")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detail/layoutFull.vue?vue&type=template&id=7ce2d08c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/layoutFull.vue?vue&type=script&lang=js&
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
/* harmony default export */ var layoutFullvue_type_script_lang_js_ = ({
  data: () => ({
    step: 1,
    fullName: "fullName",
    widthArea: "widthArea",
    typeOfPlant: "typeOfPlant",
    location: "location",
    typeOfPlantSystem: "typeOfPlantSystem",
    typeOfIrrigationSystem: "typeOfIrrigationSystem",
    typeOfWaterSource: "typeOfWaterSource",
    typeOfWaterPump: "typeOfWaterPump",
    waterPumpOutput: "waterPumpOutput",
    typeOfFertilizer: "typeOfFertilizer",
    typeOfInsecticide: "typeOfInsecticide",
    typeOfNozzle: "typeOfNozzle",
    durationOfFlush: "durationOfFlush",
    dateOfPlanting: "dateOfPlanting",
    dateOfCropYield: "dateOfCropYield",
    fertilizingDate: "fertilizingDate",
    insecticideProcessDate: "insecticideProcessDate",
    dateOfPlantingYieldCropInformation: "dateOfPlantingYieldCropInformation",
    dateOfCropYieldYieldCropInformation: "dateOfCropYieldYieldCropInformation",
    yieldQuantity: "yieldQuantity",
    damageYieldQuantity: "damageYieldQuantity",
    sellingPrice: "sellingPrice",
    salesRevenue: "salesRevenue",
    seasonalResult: "seasonalResult",
    annualResult: "annualResult",
    salesRevenueReport: "salesRevenueReport",
    yieldImprovement: "yieldImprovement",
    irrigationPeriod: "irrigationPeriod",
    rainIntensity: "rainIntensity",
    daysOfRaining: "daysOfRaining",
    systemBreakdown: "systemBreakdown"
  }),
  computed: {
    // ...mapState({
    //   user: state => state.activeUser
    // }),
    currentTitle() {
      switch (this.step) {
        case 1:
          return "User registration";

        case 2:
          return "Operation information";

        case 3:
          return "Yield crop information";

        default:
          return "Report";
      }
    }

  },
  methods: {// getDetails: function() {
    //   let api;
    //   if (this.user == 0) {
    //     api = "http://127.0.0.1:5000/api/report/ipah1";
    //   } else if (this.user == 1) {
    //     api = "http://127.0.0.1:5000/api/report/ipah2";
    //   } else if (this.user == 2) {
    //     api = "http://127.0.0.1:5000/api/report/tkpmPagoh";
    //   }
    //   this.$axios
    //     .$get(api)
    //     // .$get("http://139.59.109.48/api/schedule/nutrient/ipah1")
    //     .then(response => {
    //       // response.forEach(i => {
    //       //   this.isDateBeforeTodayNutrient(i);
    //       // });
    //       // this.getScheduleIpah1();
    //       console.log(response);
    //       if (this.user == 0) {
    //         this.setDetailIpah1(response);
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  },
  props: ["detail"],

  async mounted() {
    console.log(this.detail);
  }

});
// CONCATENATED MODULE: ./components/detail/layoutFull.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_layoutFullvue_type_script_lang_js_ = (layoutFullvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(20);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(211);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VWindow/VWindow.sass
var VWindow = __webpack_require__(313);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var components_VBtn = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindow.js
// Styles
 // Directives

 // Components




/* @vue/component */

/* harmony default export */ var VWindow_VWindow = (VItemGroup["a" /* BaseItemGroup */].extend({
  name: 'v-window',
  directives: {
    Touch: touch["a" /* default */]
  },

  provide() {
    return {
      windowGroup: this
    };
  },

  props: {
    activeClass: {
      type: String,
      default: 'v-window-item--active'
    },
    continuous: Boolean,
    mandatory: {
      type: Boolean,
      default: true
    },
    nextIcon: {
      type: [Boolean, String],
      default: '$next'
    },
    prevIcon: {
      type: [Boolean, String],
      default: '$prev'
    },
    reverse: Boolean,
    showArrows: Boolean,
    showArrowsOnHover: Boolean,
    touch: Object,
    touchless: Boolean,
    value: {
      required: false
    },
    vertical: Boolean
  },

  data() {
    return {
      changedByDelimiters: false,
      internalHeight: undefined,
      transitionHeight: undefined,
      transitionCount: 0,
      isBooted: false,
      isReverse: false
    };
  },

  computed: {
    isActive() {
      return this.transitionCount > 0;
    },

    classes() {
      return { ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-window--show-arrows-on-hover': this.showArrowsOnHover
      };
    },

    computedTransition() {
      if (!this.isBooted) return '';
      const axis = this.vertical ? 'y' : 'x';
      const reverse = this.internalReverse ? !this.isReverse : this.isReverse;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    },

    hasActiveItems() {
      return Boolean(this.items.find(item => !item.disabled));
    },

    hasNext() {
      return this.continuous || this.internalIndex < this.items.length - 1;
    },

    hasPrev() {
      return this.continuous || this.internalIndex > 0;
    },

    internalIndex() {
      return this.items.findIndex((item, i) => {
        return this.internalValue === this.getValue(item, i);
      });
    },

    internalReverse() {
      return this.$vuetify.rtl ? !this.reverse : this.reverse;
    }

  },
  watch: {
    internalIndex(val, oldVal) {
      this.isReverse = this.updateReverse(val, oldVal);
    }

  },

  mounted() {
    window.requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genContainer() {
      const children = [this.genDefaultSlot()];

      if (this.showArrows) {
        children.push(this.genControlIcons());
      }

      return this.$createElement('div', {
        staticClass: 'v-window__container',
        class: {
          'v-window__container--is-active': this.isActive
        },
        style: {
          height: this.internalHeight || this.transitionHeight
        }
      }, children);
    },

    genIcon(direction, icon, click) {
      var _ref;

      const on = {
        click: e => {
          e.stopPropagation();
          this.changedByDelimiters = true;
          click();
        }
      };
      const attrs = {
        'aria-label': this.$vuetify.lang.t(`$vuetify.carousel.${direction}`)
      };
      const children = (_ref = this.$scopedSlots[direction] == null ? void 0 : this.$scopedSlots[direction]({
        on,
        attrs
      })) != null ? _ref : [this.$createElement(components_VBtn["a" /* default */], {
        props: {
          icon: true
        },
        attrs,
        on
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          large: true
        }
      }, icon)])];
      return this.$createElement('div', {
        staticClass: `v-window__${direction}`
      }, children);
    },

    genControlIcons() {
      const icons = [];
      const prevIcon = this.$vuetify.rtl ? this.nextIcon : this.prevIcon;
      /* istanbul ignore else */

      if (this.hasPrev && prevIcon && typeof prevIcon === 'string') {
        const icon = this.genIcon('prev', prevIcon, this.prev);
        icon && icons.push(icon);
      }

      const nextIcon = this.$vuetify.rtl ? this.prevIcon : this.nextIcon;
      /* istanbul ignore else */

      if (this.hasNext && nextIcon && typeof nextIcon === 'string') {
        const icon = this.genIcon('next', nextIcon, this.next);
        icon && icons.push(icon);
      }

      return icons;
    },

    getNextIndex(index) {
      const nextIndex = (index + 1) % this.items.length;
      const item = this.items[nextIndex];
      if (item.disabled) return this.getNextIndex(nextIndex);
      return nextIndex;
    },

    getPrevIndex(index) {
      const prevIndex = (index + this.items.length - 1) % this.items.length;
      const item = this.items[prevIndex];
      if (item.disabled) return this.getPrevIndex(prevIndex);
      return prevIndex;
    },

    next() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasNext) return;
      const nextIndex = this.getNextIndex(this.internalIndex);
      const item = this.items[nextIndex];
      this.internalValue = this.getValue(item, nextIndex);
    },

    prev() {
      /* istanbul ignore if */
      if (!this.hasActiveItems || !this.hasPrev) return;
      const lastIndex = this.getPrevIndex(this.internalIndex);
      const item = this.items[lastIndex];
      this.internalValue = this.getValue(item, lastIndex);
    },

    updateReverse(val, oldVal) {
      const itemsLength = this.items.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) return val < oldVal;

      if (val === lastIndex && oldVal === 0) {
        return true;
      } else if (val === 0 && oldVal === lastIndex) {
        return false;
      } else {
        return val < oldVal;
      }
    }

  },

  render(h) {
    const data = {
      staticClass: 'v-window',
      class: this.classes,
      directives: []
    };

    if (!this.touchless) {
      const value = this.touch || {
        left: () => {
          this.$vuetify.rtl ? this.prev() : this.next();
        },
        right: () => {
          this.$vuetify.rtl ? this.next() : this.prev();
        },
        end: e => {
          e.stopPropagation();
        },
        start: e => {
          e.stopPropagation();
        }
      };
      data.directives.push({
        name: 'touch',
        value
      });
    }

    return h('div', data, [this.genContainer()]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/bootable/index.js
var bootable = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VWindow/VWindowItem.js
// Mixins

 // Directives

 // Utilities



const baseMixins = Object(mixins["a" /* default */])(bootable["a" /* default */], Object(groupable["a" /* factory */])('windowGroup', 'v-window-item', 'v-window'));
/* harmony default export */ var VWindowItem = (baseMixins.extend().extend().extend({
  name: 'v-window-item',
  directives: {
    Touch: touch["a" /* default */]
  },
  props: {
    disabled: Boolean,
    reverseTransition: {
      type: [Boolean, String],
      default: undefined
    },
    transition: {
      type: [Boolean, String],
      default: undefined
    },
    value: {
      required: false
    }
  },

  data() {
    return {
      isActive: false,
      inTransition: false
    };
  },

  computed: {
    classes() {
      return this.groupClasses;
    },

    computedTransition() {
      if (!this.windowGroup.internalReverse) {
        return typeof this.transition !== 'undefined' ? this.transition || '' : this.windowGroup.computedTransition;
      }

      return typeof this.reverseTransition !== 'undefined' ? this.reverseTransition || '' : this.windowGroup.computedTransition;
    }

  },
  methods: {
    genDefaultSlot() {
      return this.$slots.default;
    },

    genWindowItem() {
      return this.$createElement('div', {
        staticClass: 'v-window-item',
        class: this.classes,
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: this.$listeners
      }, this.genDefaultSlot());
    },

    onAfterTransition() {
      if (!this.inTransition) {
        return;
      } // Finalize transition state.


      this.inTransition = false;

      if (this.windowGroup.transitionCount > 0) {
        this.windowGroup.transitionCount--; // Remove container height if we are out of transition.

        if (this.windowGroup.transitionCount === 0) {
          this.windowGroup.transitionHeight = undefined;
        }
      }
    },

    onBeforeTransition() {
      if (this.inTransition) {
        return;
      } // Initialize transition state here.


      this.inTransition = true;

      if (this.windowGroup.transitionCount === 0) {
        // Set initial height for height transition.
        this.windowGroup.transitionHeight = Object(helpers["g" /* convertToUnit */])(this.windowGroup.$el.clientHeight);
      }

      this.windowGroup.transitionCount++;
    },

    onTransitionCancelled() {
      this.onAfterTransition(); // This should have the same path as normal transition end.
    },

    onEnter(el) {
      if (!this.inTransition) {
        return;
      }

      this.$nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!this.computedTransition || !this.inTransition) {
          return;
        } // Set transition target height.


        this.windowGroup.transitionHeight = Object(helpers["g" /* convertToUnit */])(el.clientHeight);
      });
    }

  },

  render(h) {
    return h('transition', {
      props: {
        name: this.computedTransition
      },
      on: {
        // Handlers for enter windows.
        beforeEnter: this.onBeforeTransition,
        afterEnter: this.onAfterTransition,
        enterCancelled: this.onTransitionCancelled,
        // Handlers for leave windows.
        beforeLeave: this.onBeforeTransition,
        afterLeave: this.onAfterTransition,
        leaveCancelled: this.onTransitionCancelled,
        // Enter handler for height transition.
        enter: this.onEnter
      }
    }, this.showLazyContent(() => [this.genWindowItem()]));
  }

}));
// CONCATENATED MODULE: ./components/detail/layoutFull.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_layoutFullvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ca6a09ce"
  
)

/* harmony default export */ var layoutFull = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardActions: components_VCard["a" /* VCardActions */],VCardTitle: components_VCard["c" /* VCardTitle */],VDivider: VDivider["a" /* default */],VSpacer: VSpacer["a" /* default */],VWindow: VWindow_VWindow,VWindowItem: VWindowItem})


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=detail-layout-full.js.map