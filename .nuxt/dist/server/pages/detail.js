exports.ids = [62,13,17,18,19,20,40];
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _colorable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
// Mixins


 // Utilities




const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_colorable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], Object(_registrable__WEBPACK_IMPORTED_MODULE_2__[/* inject */ "a"])('form'), _themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend({
  name: 'validatable',
  props: {
    disabled: Boolean,
    error: Boolean,
    errorCount: {
      type: [Number, String],
      default: 1
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    messages: {
      type: [String, Array],
      default: () => []
    },
    readonly: Boolean,
    rules: {
      type: Array,
      default: () => []
    },
    success: Boolean,
    successMessages: {
      type: [String, Array],
      default: () => []
    },
    validateOnBlur: Boolean,
    value: {
      required: false
    }
  },

  data() {
    return {
      errorBucket: [],
      hasColor: false,
      hasFocused: false,
      hasInput: false,
      isFocused: false,
      isResetting: false,
      lazyValue: this.value,
      valid: false
    };
  },

  computed: {
    computedColor() {
      if (this.isDisabled) return undefined;
      if (this.color) return this.color; // It's assumed that if the input is on a
      // dark background, the user will want to
      // have a white color. If the entire app
      // is setup to be dark, then they will
      // like want to use their primary color

      if (this.isDark && !this.appIsDark) return 'white';else return 'primary';
    },

    hasError() {
      return this.internalErrorMessages.length > 0 || this.errorBucket.length > 0 || this.error;
    },

    // TODO: Add logic that allows the user to enable based
    // upon a good validation
    hasSuccess() {
      return this.internalSuccessMessages.length > 0 || this.success;
    },

    externalError() {
      return this.internalErrorMessages.length > 0 || this.error;
    },

    hasMessages() {
      return this.validationTarget.length > 0;
    },

    hasState() {
      if (this.isDisabled) return false;
      return this.hasSuccess || this.shouldValidate && this.hasError;
    },

    internalErrorMessages() {
      return this.genInternalMessages(this.errorMessages);
    },

    internalMessages() {
      return this.genInternalMessages(this.messages);
    },

    internalSuccessMessages() {
      return this.genInternalMessages(this.successMessages);
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', val);
      }

    },

    isDisabled() {
      return this.disabled || !!this.form && this.form.disabled;
    },

    isInteractive() {
      return !this.isDisabled && !this.isReadonly;
    },

    isReadonly() {
      return this.readonly || !!this.form && this.form.readonly;
    },

    shouldValidate() {
      if (this.externalError) return true;
      if (this.isResetting) return false;
      return this.validateOnBlur ? this.hasFocused && !this.isFocused : this.hasInput || this.hasFocused;
    },

    validations() {
      return this.validationTarget.slice(0, Number(this.errorCount));
    },

    validationState() {
      if (this.isDisabled) return undefined;
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor) return this.computedColor;
      return undefined;
    },

    validationTarget() {
      if (this.internalErrorMessages.length > 0) {
        return this.internalErrorMessages;
      } else if (this.successMessages && this.successMessages.length > 0) {
        return this.internalSuccessMessages;
      } else if (this.messages && this.messages.length > 0) {
        return this.internalMessages;
      } else if (this.shouldValidate) {
        return this.errorBucket;
      } else return [];
    }

  },
  watch: {
    rules: {
      handler(newVal, oldVal) {
        if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* deepEqual */ "i"])(newVal, oldVal)) return;
        this.validate();
      },

      deep: true
    },

    internalValue() {
      // If it's the first time we're setting input,
      // mark it with hasInput
      this.hasInput = true;
      this.validateOnBlur || this.$nextTick(this.validate);
    },

    isFocused(val) {
      // Should not check validation
      // if disabled
      if (!val && !this.isDisabled) {
        this.hasFocused = true;
        this.validateOnBlur && this.$nextTick(this.validate);
      }
    },

    isResetting() {
      setTimeout(() => {
        this.hasInput = false;
        this.hasFocused = false;
        this.isResetting = false;
        this.validate();
      }, 0);
    },

    hasError(val) {
      if (this.shouldValidate) {
        this.$emit('update:error', val);
      }
    },

    value(val) {
      this.lazyValue = val;
    }

  },

  beforeMount() {
    this.validate();
  },

  created() {
    this.form && this.form.register(this);
  },

  beforeDestroy() {
    this.form && this.form.unregister(this);
  },

  methods: {
    genInternalMessages(messages) {
      if (!messages) return [];else if (Array.isArray(messages)) return messages;else return [messages];
    },

    /** @public */
    reset() {
      this.isResetting = true;
      this.internalValue = Array.isArray(this.internalValue) ? [] : null;
    },

    /** @public */
    resetValidation() {
      this.isResetting = true;
    },

    /** @public */
    validate(force = false, value) {
      const errorBucket = [];
      value = value || this.internalValue;
      if (force) this.hasInput = this.hasFocused = true;

      for (let index = 0; index < this.rules.length; index++) {
        const rule = this.rules[index];
        const valid = typeof rule === 'function' ? rule(value) : rule;

        if (valid === false || typeof valid === 'string') {
          errorBucket.push(valid || '');
        } else if (typeof valid !== 'boolean') {
          Object(_util_console__WEBPACK_IMPORTED_MODULE_4__[/* consoleError */ "b"])(`Rules should return a string or boolean, received '${typeof valid}' instead`, this);
        }
      }

      this.errorBucket = errorBucket;
      this.valid = errorBucket.length === 0;
      return this.valid;
    }

  }
}));

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VLabel

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VLabel/VLabel.sass
var VLabel = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLabel/VLabel.js
// Styles
 // Mixins



 // Helpers


/* @vue/component */

/* harmony default export */ var VLabel_VLabel = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-label',
  functional: true,
  props: {
    absolute: Boolean,
    color: {
      type: String,
      default: 'primary'
    },
    disabled: Boolean,
    focused: Boolean,
    for: String,
    left: {
      type: [Number, String],
      default: 0
    },
    right: {
      type: [Number, String],
      default: 'auto'
    },
    value: Boolean
  },

  render(h, ctx) {
    const {
      children,
      listeners,
      props
    } = ctx;
    const data = {
      staticClass: 'v-label',
      class: {
        'v-label--active': props.value,
        'v-label--is-disabled': props.disabled,
        ...Object(themeable["b" /* functionalThemeClasses */])(ctx)
      },
      attrs: {
        for: props.for,
        'aria-hidden': !props.for
      },
      on: listeners,
      style: {
        left: Object(helpers["g" /* convertToUnit */])(props.left),
        right: Object(helpers["g" /* convertToUnit */])(props.right),
        position: props.absolute ? 'absolute' : 'relative'
      },
      ref: 'label'
    };
    return h('label', colorable["a" /* default */].options.methods.setTextColor(props.focused && props.color, data), children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js


/* harmony default export */ var components_VLabel = __webpack_exports__["a"] = (VLabel_VLabel);

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

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("4f4f805e", content, true)

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: VInput

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VInput/VInput.sass
var VInput = __webpack_require__(201);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VMessages/VMessages.sass
var VMessages = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMessages/VMessages.js
// Styles
 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ var VMessages_VMessages = (Object(mixins["a" /* default */])(colorable["a" /* default */], themeable["a" /* default */]).extend({
  name: 'v-messages',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    genChildren() {
      return this.$createElement('transition-group', {
        staticClass: 'v-messages__wrapper',
        attrs: {
          name: 'message-transition',
          tag: 'div'
        }
      }, this.value.map(this.genMessage));
    },

    genMessage(message, key) {
      return this.$createElement('div', {
        staticClass: 'v-messages__message',
        key
      }, Object(helpers["r" /* getSlot */])(this, 'default', {
        message,
        key
      }) || [message]);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.color, {
      staticClass: 'v-messages',
      class: this.themeClasses
    }), [this.genChildren()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VMessages/index.js


/* harmony default export */ var components_VMessages = (VMessages_VMessages);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/validatable/index.js
var validatable = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VInput/VInput.js
// Styles
 // Components



 // Mixins


 // Utilities




const baseMixins = Object(mixins["a" /* default */])(binds_attrs["a" /* default */], validatable["a" /* default */]);
/* @vue/component */

/* harmony default export */ var VInput_VInput = (baseMixins.extend().extend({
  name: 'v-input',
  inheritAttrs: false,
  props: {
    appendIcon: String,
    backgroundColor: {
      type: String,
      default: ''
    },
    dense: Boolean,
    height: [Number, String],
    hideDetails: [Boolean, String],
    hint: String,
    id: String,
    label: String,
    loading: Boolean,
    persistentHint: Boolean,
    prependIcon: String,
    value: null
  },

  data() {
    return {
      lazyValue: this.value,
      hasMouseDown: false
    };
  },

  computed: {
    classes() {
      return {
        'v-input--has-state': this.hasState,
        'v-input--hide-details': !this.showDetails,
        'v-input--is-label-active': this.isLabelActive,
        'v-input--is-dirty': this.isDirty,
        'v-input--is-disabled': this.isDisabled,
        'v-input--is-focused': this.isFocused,
        // <v-switch loading>.loading === '' so we can't just cast to boolean
        'v-input--is-loading': this.loading !== false && this.loading != null,
        'v-input--is-readonly': this.isReadonly,
        'v-input--dense': this.dense,
        ...this.themeClasses
      };
    },

    computedId() {
      return this.id || `input-${this._uid}`;
    },

    hasDetails() {
      return this.messagesToDisplay.length > 0;
    },

    hasHint() {
      return !this.hasMessages && !!this.hint && (this.persistentHint || this.isFocused);
    },

    hasLabel() {
      return !!(this.$slots.label || this.label);
    },

    // Proxy for `lazyValue`
    // This allows an input
    // to function without
    // a provided model
    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit(this.$_modelEvent, val);
      }

    },

    isDirty() {
      return !!this.lazyValue;
    },

    isLabelActive() {
      return this.isDirty;
    },

    messagesToDisplay() {
      if (this.hasHint) return [this.hint];
      if (!this.hasMessages) return [];
      return this.validations.map(validation => {
        if (typeof validation === 'string') return validation;
        const validationResult = validation(this.internalValue);
        return typeof validationResult === 'string' ? validationResult : '';
      }).filter(message => message !== '');
    },

    showDetails() {
      return this.hideDetails === false || this.hideDetails === 'auto' && this.hasDetails;
    }

  },
  watch: {
    value(val) {
      this.lazyValue = val;
    }

  },

  beforeCreate() {
    // v-radio-group needs to emit a different event
    // https://github.com/vuetifyjs/vuetify/issues/4752
    this.$_modelEvent = this.$options.model && this.$options.model.event || 'input';
  },

  methods: {
    genContent() {
      return [this.genPrependSlot(), this.genControl(), this.genAppendSlot()];
    },

    genControl() {
      return this.$createElement('div', {
        staticClass: 'v-input__control',
        attrs: {
          title: this.attrs$.title
        }
      }, [this.genInputSlot(), this.genMessages()]);
    },

    genDefaultSlot() {
      return [this.genLabel(), this.$slots.default];
    },

    genIcon(type, cb, extraData = {}) {
      const icon = this[`${type}Icon`];
      const eventName = `click:${Object(helpers["v" /* kebabCase */])(type)}`;
      const hasListener = !!(this.listeners$[eventName] || cb);
      const data = Object(mergeData["a" /* default */])({
        attrs: {
          'aria-label': hasListener ? Object(helpers["v" /* kebabCase */])(type).split('-')[0] + ' icon' : undefined,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          light: this.light
        },
        on: !hasListener ? undefined : {
          click: e => {
            e.preventDefault();
            e.stopPropagation();
            this.$emit(eventName, e);
            cb && cb(e);
          },
          // Container has g event that will
          // trigger menu open if enclosed
          mouseup: e => {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }, extraData);
      return this.$createElement('div', {
        staticClass: `v-input__icon`,
        class: type ? `v-input__icon--${Object(helpers["v" /* kebabCase */])(type)}` : undefined
      }, [this.$createElement(VIcon["a" /* default */], data, icon)]);
    },

    genInputSlot() {
      return this.$createElement('div', this.setBackgroundColor(this.backgroundColor, {
        staticClass: 'v-input__slot',
        style: {
          height: Object(helpers["g" /* convertToUnit */])(this.height)
        },
        on: {
          click: this.onClick,
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp
        },
        ref: 'input-slot'
      }), [this.genDefaultSlot()]);
    },

    genLabel() {
      if (!this.hasLabel) return null;
      return this.$createElement(VLabel["a" /* default */], {
        props: {
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: this.hasState,
          for: this.computedId,
          light: this.light
        }
      }, this.$slots.label || this.label);
    },

    genMessages() {
      if (!this.showDetails) return null;
      return this.$createElement(components_VMessages, {
        props: {
          color: this.hasHint ? '' : this.validationState,
          dark: this.dark,
          light: this.light,
          value: this.messagesToDisplay
        },
        attrs: {
          role: this.hasMessages ? 'alert' : null
        },
        scopedSlots: {
          default: props => Object(helpers["r" /* getSlot */])(this, 'message', props)
        }
      });
    },

    genSlot(type, location, slot) {
      if (!slot.length) return null;
      const ref = `${type}-${location}`;
      return this.$createElement('div', {
        staticClass: `v-input__${ref}`,
        ref
      }, slot);
    },

    genPrependSlot() {
      const slot = [];

      if (this.$slots.prepend) {
        slot.push(this.$slots.prepend);
      } else if (this.prependIcon) {
        slot.push(this.genIcon('prepend'));
      }

      return this.genSlot('prepend', 'outer', slot);
    },

    genAppendSlot() {
      const slot = []; // Append icon for text field was really
      // an appended inner icon, v-text-field
      // will overwrite this method in order to obtain
      // backwards compat

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    onClick(e) {
      this.$emit('click', e);
    },

    onMouseDown(e) {
      this.hasMouseDown = true;
      this.$emit('mousedown', e);
    },

    onMouseUp(e) {
      this.hasMouseDown = false;
      this.$emit('mouseup', e);
    }

  },

  render(h) {
    return h('div', this.setTextColor(this.validationState, {
      staticClass: 'v-input',
      class: this.classes
    }), this.genContent());
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VInput/index.js


/* harmony default export */ var components_VInput = __webpack_exports__["a"] = (VInput_VInput);

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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2);
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field--filled>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{background:#fff}.theme--light.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:hsla(0,0%,100%,.7)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.38)}.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:rgba(0,0,0,.86)}.theme--light.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:rgba(0,0,0,.26)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state):hover>.v-input__control>.v-input__slot:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled .v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field--filled>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.08)}.theme--dark.v-text-field--filled:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{background:#1e1e1e}.theme--dark.v-text-field--solo-inverted>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot input::placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-text-field--solo-inverted.v-input--is-focused>.v-input__control>.v-input__slot .v-label{color:rgba(0,0,0,.6)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.24)}.theme--dark.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset{color:#fff}.theme--dark.v-text-field--outlined:not(.v-input--is-focused).v-input--is-disabled>.v-input__control>.v-input__slot fieldset{color:hsla(0,0%,100%,.16)}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field__prefix,.v-text-field__suffix{line-height:20px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__control,.v-text-field .v-input__slot,.v-text-field fieldset{border-radius:inherit}.v-text-field.v-input--has-state .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-counter,.v-text-field.v-input--is-disabled .v-input__control>.v-text-field__details>.v-messages,.v-text-field .v-input__control,.v-text-field fieldset{color:inherit}.v-text-field.v-input--dense{padding-top:0}.v-text-field.v-input--dense .v-label{top:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,.v-text-field.v-input--dense:not(.v-text-field--outlined) input{padding:4px 0 2px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix{padding-right:4px}.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix{padding-left:4px}.v-text-field.v-input--dense[type=text]::-ms-clear{display:none}.v-text-field.v-input--dense .v-input__append-inner,.v-text-field.v-input--dense .v-input__prepend-inner{margin-top:0}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-application--is-ltr .v-text-field .v-input__append-inner,.v-application--is-rtl .v-text-field .v-input__prepend-inner{margin-left:auto;padding-left:4px}.v-application--is-rtl .v-text-field .v-input__append-inner{margin-right:auto;padding-right:4px}.v-text-field .v-counter{white-space:nowrap}.v-application--is-ltr .v-text-field .v-counter{margin-left:8px}.v-application--is-rtl .v-text-field .v-counter{margin-right:8px}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;white-space:nowrap;pointer-events:none}.v-application--is-ltr .v-text-field .v-label{transform-origin:top left}.v-application--is-rtl .v-text-field .v-label{transform-origin:top right}.v-text-field .v-label--active{max-width:133%;transform:translateY(-18px) scale(.75);pointer-events:auto}.v-text-field>.v-input__control>.v-input__slot{cursor:text}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-color:inherit;border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{background-color:currentColor;border-color:currentcolor;border-style:solid;border-width:thin 0;transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;min-height:14px;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default;transition:color .3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-text-field__prefix{text-align:right;padding-right:4px}.v-application--is-rtl .v-text-field__prefix{text-align:left;padding-left:4px}.v-text-field__suffix{white-space:nowrap}.v-application--is-ltr .v-text-field__suffix{padding-left:4px}.v-application--is-rtl .v-text-field__suffix{padding-right:4px}.v-application--is-ltr .v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-right:4px;padding-left:0}.v-application--is-ltr .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:4px;padding-right:0}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field:not(.v-text-field--is-booted) .v-label,.v-text-field:not(.v-text-field--is-booted) legend{transition:none}.v-text-field--filled,.v-text-field--full-width,.v-text-field--outlined{position:relative}.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outlined>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--filled.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{min-height:52px}.v-text-field--filled.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--filled.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--full-width.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined.v-text-field--filled>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot,.v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot{min-height:40px}.v-text-field--outlined{border-radius:4px}.v-text-field--enclosed .v-input__append-inner,.v-text-field--enclosed .v-input__append-outer,.v-text-field--enclosed .v-input__prepend-inner,.v-text-field--enclosed .v-input__prepend-outer,.v-text-field--full-width .v-input__append-inner,.v-text-field--full-width .v-input__append-outer,.v-text-field--full-width .v-input__prepend-inner,.v-text-field--full-width .v-input__prepend-outer{margin-top:17px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo) .v-input__prepend-outer{margin-top:14px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--single-line .v-input__prepend-outer{margin-top:9px}.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-outer,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-inner,.v-text-field--full-width.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__prepend-outer{margin-top:8px}.v-text-field--filled .v-label,.v-text-field--full-width .v-label{top:18px}.v-text-field--filled .v-label--active,.v-text-field--full-width .v-label--active{transform:translateY(-6px) scale(.75)}.v-text-field--filled.v-input--dense .v-label,.v-text-field--full-width.v-input--dense .v-label{top:17px}.v-text-field--filled.v-input--dense .v-label--active,.v-text-field--full-width.v-input--dense .v-label--active{transform:translateY(-10px) scale(.75)}.v-text-field--filled.v-input--dense.v-text-field--single-line .v-label,.v-text-field--full-width.v-input--dense.v-text-field--single-line .v-label{top:11px}.v-text-field--filled{border-radius:4px 4px 0 0}.v-text-field--filled:not(.v-text-field--single-line) input{margin-top:22px}.v-text-field--filled.v-input--dense:not(.v-text-field--single-line).v-text-field--outlined input{margin-top:0}.v-text-field--filled .v-text-field__prefix,.v-text-field--filled .v-text-field__suffix{max-height:32px;margin-top:20px}.v-text-field--full-width{border-radius:0}.v-text-field--outlined .v-text-field__slot,.v-text-field--single-line .v-text-field__slot{align-items:center}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-text-field.v-text-field--enclosed.v-text-field--single-line .v-text-field__suffix{margin-top:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--filled) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{padding-top:0;margin-bottom:8px}.v-application--is-ltr .v-text-field--reverse input{text-align:right}.v-application--is-rtl .v-text-field--reverse input{text-align:left}.v-application--is-ltr .v-text-field--reverse .v-label{transform-origin:top right}.v-application--is-rtl .v-text-field--reverse .v-label{transform-origin:top left}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--outlined>.v-input__control>.v-input__slot:after,.v-text-field--outlined>.v-input__control>.v-input__slot:before,.v-text-field--rounded>.v-input__control>.v-input__slot:after,.v-text-field--rounded>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outlined,.v-text-field--solo{border-radius:4px}.v-text-field--outlined{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outlined .v-label{top:18px}.v-text-field--outlined .v-label--active{transform:translateY(-24px) scale(.75)}.v-text-field--outlined.v-input--dense .v-label{top:10px}.v-text-field--outlined.v-input--dense .v-label--active{transform:translateY(-16px) scale(.75)}.v-text-field--outlined fieldset{border-collapse:collapse;border:1px solid;bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:-5px;transition-duration:.3s;transition-property:color,border-width;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-application--is-ltr .v-text-field--outlined fieldset{padding-left:8px}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse fieldset,.v-application--is-rtl .v-text-field--outlined fieldset{padding-right:8px}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse fieldset{padding-left:8px}.v-text-field--outlined legend{line-height:11px;padding:0;transition:width .3s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-text-field--outlined legend{text-align:left}.v-application--is-rtl .v-text-field--outlined legend{text-align:right}.v-application--is-ltr .v-text-field--outlined.v-text-field--reverse legend{margin-left:auto}.v-application--is-rtl .v-text-field--outlined.v-text-field--reverse legend{margin-right:auto}.v-application--is-ltr .v-text-field--outlined.v-text-field--rounded legend{margin-left:12px}.v-application--is-rtl .v-text-field--outlined.v-text-field--rounded legend{margin-right:12px}.v-text-field--outlined>.v-input__control>.v-input__slot{background:transparent}.v-text-field--outlined .v-text-field__prefix{max-height:32px}.v-text-field--outlined .v-input__append-outer,.v-text-field--outlined .v-input__prepend-outer{margin-top:18px}.v-text-field--outlined.v-input--has-state fieldset,.v-text-field--outlined.v-input--is-focused fieldset{border:2px solid}.v-text-field--rounded{border-radius:28px}.v-text-field--rounded>.v-input__control>.v-input__slot{padding:0 24px}.v-text-field--shaped{border-radius:16px 16px 0 0}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 9px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo .v-input__control input{caret-color:auto}.v-text-field.v-text-field--solo.v-input--dense>.v-input__control{min-height:38px}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-text-field--solo.v-input--dense .v-input__append-outer,.v-text-field.v-text-field--solo.v-input--dense .v-input__prepend-outer{margin-top:7px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("22487aae", content, true)

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-input,.theme--light.v-input input,.theme--light.v-input textarea{color:rgba(0,0,0,.87)}.theme--light.v-input input::-moz-placeholder,.theme--light.v-input textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input:-ms-input-placeholder,.theme--light.v-input textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::placeholder,.theme--light.v-input textarea::placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input--is-disabled,.theme--light.v-input--is-disabled input,.theme--light.v-input--is-disabled textarea{color:rgba(0,0,0,.38)}.theme--dark.v-input,.theme--dark.v-input input,.theme--dark.v-input textarea{color:#fff}.theme--dark.v-input input::-moz-placeholder,.theme--dark.v-input textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input:-ms-input-placeholder,.theme--dark.v-input textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::placeholder,.theme--dark.v-input textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input--is-disabled,.theme--dark.v-input--is-disabled input,.theme--dark.v-input--is-disabled textarea{color:hsla(0,0%,100%,.5)}.v-input{align-items:flex-start;display:flex;flex:1 1 auto;font-size:16px;letter-spacing:normal;max-width:100%;text-align:left}.v-input .v-progress-linear{top:calc(100% - 1px);left:0}.v-input input{max-height:32px}.v-input input:invalid,.v-input textarea:invalid{box-shadow:none}.v-input input:active,.v-input input:focus,.v-input textarea:active,.v-input textarea:focus{outline:none}.v-input .v-label{height:20px;line-height:20px;letter-spacing:normal}.v-input__append-outer,.v-input__prepend-outer{display:inline-flex;margin-bottom:4px;margin-top:4px;line-height:1}.v-input__append-outer .v-icon,.v-input__prepend-outer .v-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-input__append-outer{margin-left:9px}.v-application--is-ltr .v-input__prepend-outer,.v-application--is-rtl .v-input__append-outer{margin-right:9px}.v-application--is-rtl .v-input__prepend-outer{margin-left:9px}.v-input__control{display:flex;flex-direction:column;height:auto;flex-grow:1;flex-wrap:wrap;min-width:0;width:100%}.v-input__icon{align-items:center;display:inline-flex;height:24px;flex:1 0 auto;justify-content:center;min-width:24px;width:24px}.v-input__icon--clear{border-radius:50%}.v-input__icon--clear .v-icon--disabled{visibility:hidden}.v-input__slot{align-items:center;color:inherit;display:flex;margin-bottom:8px;min-height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-input--dense>.v-input__control>.v-input__slot{margin-bottom:4px}.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--is-loading>.v-input__control>.v-input__slot:after,.v-input--is-loading>.v-input__control>.v-input__slot:before{display:none}.v-input--hide-details>.v-input__control>.v-input__slot{margin-bottom:0}.v-input--has-state.error--text .v-label{-webkit-animation:v-shake .6s cubic-bezier(.25,.8,.5,1);animation:v-shake .6s cubic-bezier(.25,.8,.5,1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("371f82d0", content, true)

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-label{color:rgba(0,0,0,.6)}.theme--light.v-label--is-disabled{color:rgba(0,0,0,.38)}.theme--dark.v-label{color:hsla(0,0%,100%,.7)}.theme--dark.v-label--is-disabled{color:hsla(0,0%,100%,.5)}.v-label{font-size:16px;line-height:1;min-height:8px;transition:.3s cubic-bezier(.25,.8,.5,1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("2bb34da4", content, true)

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-messages{color:rgba(0,0,0,.6)}.theme--dark.v-messages{color:hsla(0,0%,100%,.7)}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;position:relative}.v-application--is-ltr .v-messages{text-align:left}.v-application--is-rtl .v-messages{text-align:right}.v-messages__message{line-height:12px;word-break:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(208);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("3dc908a0", content, true)

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-counter{color:rgba(0,0,0,.6)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VTextField/VTextField.sass
var VTextField = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VInput/index.js + 3 modules
var VInput = __webpack_require__(194);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCounter/VCounter.sass
var VCounter = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/VCounter.js
// Styles
 // Mixins



/* @vue/component */

/* harmony default export */ var VCounter_VCounter = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-counter',
  functional: true,
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    max: [Number, String]
  },

  render(h, ctx) {
    const {
      props
    } = ctx;
    const max = parseInt(props.max, 10);
    const value = parseInt(props.value, 10);
    const content = max ? `${value} / ${max}` : String(props.value);
    const isGreater = max && value > max;
    return h('div', {
      staticClass: 'v-counter',
      class: {
        'error--text': isGreater,
        ...Object(themeable["b" /* functionalThemeClasses */])(ctx)
      }
    }, content);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCounter/index.js


/* harmony default export */ var components_VCounter = (VCounter_VCounter);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VLabel/index.js + 1 modules
var VLabel = __webpack_require__(190);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(4);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/intersectable/index.js
// Directives
 // Utilities

 // Types


function intersectable(options) {
  return external_vue_default.a.extend({
    name: 'intersectable',

    mounted() {
      intersect["a" /* default */].inserted(this.$el, {
        name: 'intersect',
        value: this.onObserve
      });
    },

    destroyed() {
      intersect["a" /* default */].unbind(this.$el);
    },

    methods: {
      onObserve(entries, observer, isIntersecting) {
        if (!isIntersecting) return;

        for (let i = 0, length = options.onVisible.length; i < length; i++) {
          const callback = this[options.onVisible[i]];

          if (typeof callback === 'function') {
            callback();
            continue;
          }

          Object(console["c" /* consoleWarn */])(options.onVisible[i] + ' method is not available on the instance but referenced in intersectable mixin options');
        }
      }

    }
  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js + 2 modules
var loadable = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/validatable/index.js
var validatable = __webpack_require__(189);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/ripple/index.js
var ripple = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/dom.js
var dom = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Directives


 // Utilities



 // Types


const baseMixins = Object(mixins["a" /* default */])(VInput["a" /* default */], intersectable({
  onVisible: ['onResize', 'tryAutofocus']
}), loadable["a" /* default */]);
const dirtyTypes = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'];
/* @vue/component */

/* harmony default export */ var VTextField_VTextField = __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-text-field',
  directives: {
    resize: resize["a" /* default */],
    ripple: ripple["a" /* default */]
  },
  inheritAttrs: false,
  props: {
    appendOuterIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    clearIcon: {
      type: String,
      default: '$clear'
    },
    counter: [Boolean, Number, String],
    counterValue: Function,
    filled: Boolean,
    flat: Boolean,
    fullWidth: Boolean,
    label: String,
    outlined: Boolean,
    placeholder: String,
    prefix: String,
    prependInnerIcon: String,
    persistentPlaceholder: Boolean,
    reverse: Boolean,
    rounded: Boolean,
    shaped: Boolean,
    singleLine: Boolean,
    solo: Boolean,
    soloInverted: Boolean,
    suffix: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data: () => ({
    badInput: false,
    labelWidth: 0,
    prefixWidth: 0,
    prependWidth: 0,
    initialValue: null,
    isBooted: false,
    isClearing: false
  }),
  computed: {
    classes() {
      return { ...VInput["a" /* default */].options.computed.classes.call(this),
        'v-text-field': true,
        'v-text-field--full-width': this.fullWidth,
        'v-text-field--prefix': this.prefix,
        'v-text-field--single-line': this.isSingle,
        'v-text-field--solo': this.isSolo,
        'v-text-field--solo-inverted': this.soloInverted,
        'v-text-field--solo-flat': this.flat,
        'v-text-field--filled': this.filled,
        'v-text-field--is-booted': this.isBooted,
        'v-text-field--enclosed': this.isEnclosed,
        'v-text-field--reverse': this.reverse,
        'v-text-field--outlined': this.outlined,
        'v-text-field--placeholder': this.placeholder,
        'v-text-field--rounded': this.rounded,
        'v-text-field--shaped': this.shaped
      };
    },

    computedColor() {
      const computedColor = validatable["a" /* default */].options.computed.computedColor.call(this);
      if (!this.soloInverted || !this.isFocused) return computedColor;
      return this.color || 'primary';
    },

    computedCounterValue() {
      if (typeof this.counterValue === 'function') {
        return this.counterValue(this.internalValue);
      }

      return [...(this.internalValue || '').toString()].length;
    },

    hasCounter() {
      return this.counter !== false && this.counter != null;
    },

    hasDetails() {
      return VInput["a" /* default */].options.computed.hasDetails.call(this) || this.hasCounter;
    },

    internalValue: {
      get() {
        return this.lazyValue;
      },

      set(val) {
        this.lazyValue = val;
        this.$emit('input', this.lazyValue);
      }

    },

    isDirty() {
      var _this$lazyValue;

      return ((_this$lazyValue = this.lazyValue) == null ? void 0 : _this$lazyValue.toString().length) > 0 || this.badInput;
    },

    isEnclosed() {
      return this.filled || this.isSolo || this.outlined;
    },

    isLabelActive() {
      return this.isDirty || dirtyTypes.includes(this.type);
    },

    isSingle() {
      return this.isSolo || this.singleLine || this.fullWidth || // https://material.io/components/text-fields/#filled-text-field
      this.filled && !this.hasLabel;
    },

    isSolo() {
      return this.solo || this.soloInverted;
    },

    labelPosition() {
      let offset = this.prefix && !this.labelValue ? this.prefixWidth : 0;
      if (this.labelValue && this.prependWidth) offset -= this.prependWidth;
      return this.$vuetify.rtl === this.reverse ? {
        left: offset,
        right: 'auto'
      } : {
        left: 'auto',
        right: offset
      };
    },

    showLabel() {
      return this.hasLabel && !(this.isSingle && this.labelValue);
    },

    labelValue() {
      return this.isFocused || this.isLabelActive || this.persistentPlaceholder;
    }

  },
  watch: {
    // labelValue: 'setLabelWidth', // moved to mounted, see #11533
    outlined: 'setLabelWidth',

    label() {
      this.$nextTick(this.setLabelWidth);
    },

    prefix() {
      this.$nextTick(this.setPrefixWidth);
    },

    isFocused: 'updateValue',

    value(val) {
      this.lazyValue = val;
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('box')) {
      Object(console["a" /* breaking */])('box', 'filled', this);
    }
    /* istanbul ignore next */


    if (this.$attrs.hasOwnProperty('browser-autocomplete')) {
      Object(console["a" /* breaking */])('browser-autocomplete', 'autocomplete', this);
    }
    /* istanbul ignore if */


    if (this.shaped && !(this.filled || this.outlined || this.isSolo)) {
      Object(console["c" /* consoleWarn */])('shaped should be used with either filled or outlined', this);
    }
  },

  mounted() {
    // #11533
    this.$watch(() => this.labelValue, this.setLabelWidth);
    this.autofocus && this.tryAutofocus();
    requestAnimationFrame(() => this.isBooted = true);
  },

  methods: {
    /** @public */
    focus() {
      this.onFocus();
    },

    /** @public */
    blur(e) {
      // https://github.com/vuetifyjs/vuetify/issues/5913
      // Safari tab order gets broken if called synchronous
      window.requestAnimationFrame(() => {
        this.$refs.input && this.$refs.input.blur();
      });
    },

    clearableCallback() {
      this.$refs.input && this.$refs.input.focus();
      this.$nextTick(() => this.internalValue = null);
    },

    genAppendSlot() {
      const slot = [];

      if (this.$slots['append-outer']) {
        slot.push(this.$slots['append-outer']);
      } else if (this.appendOuterIcon) {
        slot.push(this.genIcon('appendOuter'));
      }

      return this.genSlot('append', 'outer', slot);
    },

    genPrependInnerSlot() {
      const slot = [];

      if (this.$slots['prepend-inner']) {
        slot.push(this.$slots['prepend-inner']);
      } else if (this.prependInnerIcon) {
        slot.push(this.genIcon('prependInner'));
      }

      return this.genSlot('prepend', 'inner', slot);
    },

    genIconSlot() {
      const slot = [];

      if (this.$slots.append) {
        slot.push(this.$slots.append);
      } else if (this.appendIcon) {
        slot.push(this.genIcon('append'));
      }

      return this.genSlot('append', 'inner', slot);
    },

    genInputSlot() {
      const input = VInput["a" /* default */].options.methods.genInputSlot.call(this);
      const prepend = this.genPrependInnerSlot();

      if (prepend) {
        input.children = input.children || [];
        input.children.unshift(prepend);
      }

      return input;
    },

    genClearIcon() {
      if (!this.clearable) return null; // if the text field has no content then don't display the clear icon.
      // We add an empty div because other controls depend on a ref to append inner

      if (!this.isDirty) {
        return this.genSlot('append', 'inner', [this.$createElement('div')]);
      }

      return this.genSlot('append', 'inner', [this.genIcon('clear', this.clearableCallback)]);
    },

    genCounter() {
      var _ref;

      if (!this.hasCounter) return null;
      const max = this.counter === true ? this.attrs$.maxlength : this.counter;
      const props = {
        dark: this.dark,
        light: this.light,
        max,
        value: this.computedCounterValue
      };
      return (_ref = this.$scopedSlots.counter == null ? void 0 : this.$scopedSlots.counter({
        props
      })) != null ? _ref : this.$createElement(components_VCounter, {
        props
      });
    },

    genControl() {
      return VInput["a" /* default */].options.methods.genControl.call(this);
    },

    genDefaultSlot() {
      return [this.genFieldset(), this.genTextFieldSlot(), this.genClearIcon(), this.genIconSlot(), this.genProgress()];
    },

    genFieldset() {
      if (!this.outlined) return null;
      return this.$createElement('fieldset', {
        attrs: {
          'aria-hidden': true
        }
      }, [this.genLegend()]);
    },

    genLabel() {
      if (!this.showLabel) return null;
      const data = {
        props: {
          absolute: true,
          color: this.validationState,
          dark: this.dark,
          disabled: this.isDisabled,
          focused: !this.isSingle && (this.isFocused || !!this.validationState),
          for: this.computedId,
          left: this.labelPosition.left,
          light: this.light,
          right: this.labelPosition.right,
          value: this.labelValue
        }
      };
      return this.$createElement(VLabel["a" /* default */], data, this.$slots.label || this.label);
    },

    genLegend() {
      const width = !this.singleLine && (this.labelValue || this.isDirty) ? this.labelWidth : 0;
      const span = this.$createElement('span', {
        domProps: {
          innerHTML: '&#8203;'
        }
      });
      return this.$createElement('legend', {
        style: {
          width: !this.isSingle ? Object(helpers["g" /* convertToUnit */])(width) : undefined
        }
      }, [span]);
    },

    genInput() {
      const listeners = Object.assign({}, this.listeners$);
      delete listeners.change; // Change should not be bound externally

      const {
        title,
        ...inputAttrs
      } = this.attrs$;
      return this.$createElement('input', {
        style: {},
        domProps: {
          value: this.type === 'number' && Object.is(this.lazyValue, -0) ? '-0' : this.lazyValue
        },
        attrs: { ...inputAttrs,
          autofocus: this.autofocus,
          disabled: this.isDisabled,
          id: this.computedId,
          placeholder: this.persistentPlaceholder || this.isFocused || !this.hasLabel ? this.placeholder : undefined,
          readonly: this.isReadonly,
          type: this.type
        },
        on: Object.assign(listeners, {
          blur: this.onBlur,
          input: this.onInput,
          focus: this.onFocus,
          keydown: this.onKeyDown
        }),
        ref: 'input',
        directives: [{
          name: 'resize',
          modifiers: {
            quiet: true
          },
          value: this.onResize
        }]
      });
    },

    genMessages() {
      if (!this.showDetails) return null;
      const messagesNode = VInput["a" /* default */].options.methods.genMessages.call(this);
      const counterNode = this.genCounter();
      return this.$createElement('div', {
        staticClass: 'v-text-field__details'
      }, [messagesNode, counterNode]);
    },

    genTextFieldSlot() {
      return this.$createElement('div', {
        staticClass: 'v-text-field__slot'
      }, [this.genLabel(), this.prefix ? this.genAffix('prefix') : null, this.genInput(), this.suffix ? this.genAffix('suffix') : null]);
    },

    genAffix(type) {
      return this.$createElement('div', {
        class: `v-text-field__${type}`,
        ref: type
      }, this[type]);
    },

    onBlur(e) {
      this.isFocused = false;
      e && this.$nextTick(() => this.$emit('blur', e));
    },

    onClick() {
      if (this.isFocused || this.isDisabled || !this.$refs.input) return;
      this.$refs.input.focus();
    },

    onFocus(e) {
      if (!this.$refs.input) return;
      const root = Object(dom["a" /* attachedRoot */])(this.$el);
      if (!root) return;

      if (root.activeElement !== this.$refs.input) {
        return this.$refs.input.focus();
      }

      if (!this.isFocused) {
        this.isFocused = true;
        e && this.$emit('focus', e);
      }
    },

    onInput(e) {
      const target = e.target;
      this.internalValue = target.value;
      this.badInput = target.validity && target.validity.badInput;
    },

    onKeyDown(e) {
      if (e.keyCode === helpers["w" /* keyCodes */].enter) this.$emit('change', this.internalValue);
      this.$emit('keydown', e);
    },

    onMouseDown(e) {
      // Prevent input from being blurred
      if (e.target !== this.$refs.input) {
        e.preventDefault();
        e.stopPropagation();
      }

      VInput["a" /* default */].options.methods.onMouseDown.call(this, e);
    },

    onMouseUp(e) {
      if (this.hasMouseDown) this.focus();
      VInput["a" /* default */].options.methods.onMouseUp.call(this, e);
    },

    setLabelWidth() {
      if (!this.outlined) return;
      this.labelWidth = this.$refs.label ? Math.min(this.$refs.label.scrollWidth * 0.75 + 6, this.$el.offsetWidth - 24) : 0;
    },

    setPrefixWidth() {
      if (!this.$refs.prefix) return;
      this.prefixWidth = this.$refs.prefix.offsetWidth;
    },

    setPrependWidth() {
      if (!this.outlined || !this.$refs['prepend-inner']) return;
      this.prependWidth = this.$refs['prepend-inner'].offsetWidth;
    },

    tryAutofocus() {
      if (!this.autofocus || typeof document === 'undefined' || !this.$refs.input) return false;
      const root = Object(dom["a" /* attachedRoot */])(this.$el);
      if (!root || root.activeElement === this.$refs.input) return false;
      this.$refs.input.focus();
      return true;
    },

    updateValue(val) {
      // Sets validationState from validatable
      this.hasColor = val;

      if (val) {
        this.initialValue = this.lazyValue;
      } else if (this.initialValue !== this.lazyValue) {
        this.$emit('change', this.lazyValue);
      }
    },

    onResize() {
      this.setLabelWidth();
      this.setPrefixWidth();
      this.setPrependWidth();
    }

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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
// Mixins



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__[/* provide */ "b"])('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));

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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/users.vue?vue&type=template&id=7b883bc6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',[[_c('v-form',{on:{"submit":function($event){$event.preventDefault();}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-container',[_c('v-card-title',[_vm._v(" FORM ")]),_vm._v(" "),_c('v-card-title',[_vm._v(" User registration ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"rules":_vm.nameRules,"label":"Full name","required":""},model:{value:(_vm.fullName),callback:function ($$v) {_vm.fullName=$$v},expression:"fullName"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Width area","required":""},model:{value:(_vm.widthArea),callback:function ($$v) {_vm.widthArea=$$v},expression:"widthArea"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of plant","required":""},model:{value:(_vm.typeOfPlant),callback:function ($$v) {_vm.typeOfPlant=$$v},expression:"typeOfPlant"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Location","required":""},model:{value:(_vm.location),callback:function ($$v) {_vm.location=$$v},expression:"location"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of plant system","required":""},model:{value:(_vm.typeOfPlantSystem),callback:function ($$v) {_vm.typeOfPlantSystem=$$v},expression:"typeOfPlantSystem"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of irrigation system","required":""},model:{value:(_vm.typeOfIrrigationSystem),callback:function ($$v) {_vm.typeOfIrrigationSystem=$$v},expression:"typeOfIrrigationSystem"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of water source","required":""},model:{value:(_vm.typeOfWaterSource),callback:function ($$v) {_vm.typeOfWaterSource=$$v},expression:"typeOfWaterSource"}})],1)],1),_vm._v(" "),_c('v-card-title',[_vm._v(" Operation information ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of water pump","required":""},model:{value:(_vm.typeOfWaterPump),callback:function ($$v) {_vm.typeOfWaterPump=$$v},expression:"typeOfWaterPump"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Water pump output","required":""},model:{value:(_vm.waterPumpOutput),callback:function ($$v) {_vm.waterPumpOutput=$$v},expression:"waterPumpOutput"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of fertilizer","required":""},model:{value:(_vm.typeOfFertilizer),callback:function ($$v) {_vm.typeOfFertilizer=$$v},expression:"typeOfFertilizer"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of insecticide","required":""},model:{value:(_vm.typeOfInsecticide),callback:function ($$v) {_vm.typeOfInsecticide=$$v},expression:"typeOfInsecticide"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of nozzle","required":""},model:{value:(_vm.typeOfNozzle),callback:function ($$v) {_vm.typeOfNozzle=$$v},expression:"typeOfNozzle"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Duration of flush","required":""},model:{value:(_vm.durationOfFlush),callback:function ($$v) {_vm.durationOfFlush=$$v},expression:"durationOfFlush"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of planting","required":""},model:{value:(_vm.dateOfPlanting),callback:function ($$v) {_vm.dateOfPlanting=$$v},expression:"dateOfPlanting"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of crop yield","required":""},model:{value:(_vm.dateOfCropYield),callback:function ($$v) {_vm.dateOfCropYield=$$v},expression:"dateOfCropYield"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Fertilizing date","required":""},model:{value:(_vm.fertilizingDate),callback:function ($$v) {_vm.fertilizingDate=$$v},expression:"fertilizingDate"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Insecticide process date","required":""},model:{value:(_vm.insecticideProcessDate),callback:function ($$v) {_vm.insecticideProcessDate=$$v},expression:"insecticideProcessDate"}})],1)],1),_vm._v(" "),_c('v-card-title',[_vm._v(" Yield crop information ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of planting","required":""},model:{value:(_vm.dateOfPlantingYieldCropInformation),callback:function ($$v) {_vm.dateOfPlantingYieldCropInformation=$$v},expression:"dateOfPlantingYieldCropInformation"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of crop yield","required":""},model:{value:(_vm.dateOfCropYieldYieldCropInformation),callback:function ($$v) {_vm.dateOfCropYieldYieldCropInformation=$$v},expression:"dateOfCropYieldYieldCropInformation"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Yield quantity","required":""},model:{value:(_vm.yieldQuantity),callback:function ($$v) {_vm.yieldQuantity=$$v},expression:"yieldQuantity"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Damage yield quantity","required":""},model:{value:(_vm.damageYieldQuantity),callback:function ($$v) {_vm.damageYieldQuantity=$$v},expression:"damageYieldQuantity"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Selling price","required":""},model:{value:(_vm.sellingPrice),callback:function ($$v) {_vm.sellingPrice=$$v},expression:"sellingPrice"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Sales revenue","required":""},model:{value:(_vm.salesRevenue),callback:function ($$v) {_vm.salesRevenue=$$v},expression:"salesRevenue"}})],1)],1),_vm._v(" "),_c('v-card-title',[_vm._v(" Report ")]),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Seasonal result","required":""},model:{value:(_vm.seasonalResult),callback:function ($$v) {_vm.seasonalResult=$$v},expression:"seasonalResult"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Annual result","required":""},model:{value:(_vm.annualResult),callback:function ($$v) {_vm.annualResult=$$v},expression:"annualResult"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Sales revenue","required":""},model:{value:(_vm.salesRevenueReport),callback:function ($$v) {_vm.salesRevenueReport=$$v},expression:"salesRevenueReport"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Yield improvement","required":""},model:{value:(_vm.yieldImprovement),callback:function ($$v) {_vm.yieldImprovement=$$v},expression:"yieldImprovement"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Irrigation period","required":""},model:{value:(_vm.irrigationPeriod),callback:function ($$v) {_vm.irrigationPeriod=$$v},expression:"irrigationPeriod"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Rain intensity","required":""},model:{value:(_vm.rainIntensity),callback:function ($$v) {_vm.rainIntensity=$$v},expression:"rainIntensity"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Days of raining","required":""},model:{value:(_vm.daysOfRaining),callback:function ($$v) {_vm.daysOfRaining=$$v},expression:"daysOfRaining"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"System breakdown","required":""},model:{value:(_vm.systemBreakdown),callback:function ($$v) {_vm.systemBreakdown=$$v},expression:"systemBreakdown"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.generateReport}},[_vm._v(" Submit ")])],1)],1)]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detail/users.vue?vue&type=template&id=7b883bc6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/users.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      user: state => state.activeUser
    })
  },
  data: () => ({
    valid: false,
    fullName: "",
    widthArea: "",
    typeOfPlant: "",
    location: "",
    typeOfPlantSystem: "",
    typeOfIrrigationSystem: "",
    typeOfWaterSource: "",
    typeOfWaterPump: "",
    waterPumpOutput: "",
    typeOfFertilizer: "",
    typeOfInsecticide: "",
    typeOfNozzle: "",
    durationOfFlush: "",
    dateOfPlanting: "",
    dateOfCropYield: "",
    fertilizingDate: "",
    insecticideProcessDate: "",
    dateOfPlantingYieldCropInformation: "",
    dateOfCropYieldYieldCropInformation: "",
    yieldQuantity: "",
    damageYieldQuantity: "",
    sellingPrice: "",
    salesRevenue: "",
    seasonalResult: "",
    annualResult: "",
    salesRevenueReport: "",
    yieldImprovement: "",
    irrigationPeriod: "",
    rainIntensity: "",
    daysOfRaining: "",
    systemBreakdown: "",
    nameRules: [v => !!v || "Name is required", v => v.length <= 1000 || "Must be less than 1000 characters"],
    email: "",
    emailRules: [v => !!v || "E-mail is required", v => /.+@.+/.test(v) || "E-mail must be valid"]
  }),
  methods: {
    generateReport: function () {
      console.log("submited");
      this.$axios // .$post("http://139.59.109.48/api/setSchedule/ipah2/nutrient", {
      // .$post("http://127.0.0.1:5000/api/report/form", {
      // .$post("http://139.59.109.48/api/report/form", {
      .$post("http://159.223.55.150/api/report/form", {
        user_id: this.user,
        fullName: this.fullName,
        widthArea: this.widthArea,
        typeOfPlant: this.typeOfPlant,
        location: this.location,
        typeOfPlantSystem: this.typeOfPlantSystem,
        typeOfIrrigationSystem: this.typeOfIrrigationSystem,
        typeOfWaterSource: this.typeOfWaterSource,
        typeOfWaterPump: this.typeOfWaterPump,
        waterPumpOutput: this.waterPumpOutput,
        typeOfFertilizer: this.typeOfFertilizer,
        typeOfInsecticide: this.typeOfInsecticide,
        typeOfNozzle: this.typeOfNozzle,
        durationOfFlush: this.durationOfFlush,
        dateOfPlanting: this.dateOfPlanting,
        dateOfCropYield: this.dateOfCropYield,
        fertilizingDate: this.fertilizingDate,
        insecticideProcessDate: this.insecticideProcessDate,
        dateOfPlantingYieldCropInformation: this.dateOfPlantingYieldCropInformation,
        dateOfCropYieldYieldCropInformation: this.dateOfCropYieldYieldCropInformation,
        yieldQuantity: this.yieldQuantity,
        damageYieldQuantity: this.damageYieldQuantity,
        sellingPrice: this.sellingPrice,
        salesRevenue: this.salesRevenue,
        seasonalResult: this.seasonalResult,
        annualResult: this.annualResult,
        salesRevenueReport: this.salesRevenueReport,
        yieldImprovement: this.yieldImprovement,
        irrigationPeriod: this.irrigationPeriod,
        rainIntensity: this.rainIntensity,
        daysOfRaining: this.daysOfRaining,
        systemBreakdown: this.systemBreakdown
      }).then(response => {
        // console.log(response);
        // window.location.reload();
        window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  },

  mounted() {// console.log(this.$auth.$state.user.userId);
  }

});
// CONCATENATED MODULE: ./components/detail/users.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(214);

// CONCATENATED MODULE: ./components/detail/users.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "148a1378"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/operationInformation.vue?vue&type=template&id=5a44b93e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',[_c('v-card-title',[_vm._v("\n      Operation information\n    ")]),_vm._v(" "),[_c('v-form',{on:{"submit":function($event){$event.preventDefault();}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of water pump","required":""},model:{value:(_vm.typeOfWaterPump),callback:function ($$v) {_vm.typeOfWaterPump=$$v},expression:"typeOfWaterPump"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Water pump output","required":""},model:{value:(_vm.waterPumpOutput),callback:function ($$v) {_vm.waterPumpOutput=$$v},expression:"waterPumpOutput"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of fertilizer","required":""},model:{value:(_vm.typeOfFertilizer),callback:function ($$v) {_vm.typeOfFertilizer=$$v},expression:"typeOfFertilizer"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of insecticide","required":""},model:{value:(_vm.typeOfInsecticide),callback:function ($$v) {_vm.typeOfInsecticide=$$v},expression:"typeOfInsecticide"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Type of nozzle","required":""},model:{value:(_vm.typeOfNozzle),callback:function ($$v) {_vm.typeOfNozzle=$$v},expression:"typeOfNozzle"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Duration of flush","required":""},model:{value:(_vm.durationOfFlush),callback:function ($$v) {_vm.durationOfFlush=$$v},expression:"durationOfFlush"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of planting","required":""},model:{value:(_vm.dateOfPlanting),callback:function ($$v) {_vm.dateOfPlanting=$$v},expression:"dateOfPlanting"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of crop yield","required":""},model:{value:(_vm.dateOfCropYield),callback:function ($$v) {_vm.dateOfCropYield=$$v},expression:"dateOfCropYield"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Fertilizing date","required":""},model:{value:(_vm.fertilizingDate),callback:function ($$v) {_vm.fertilizingDate=$$v},expression:"fertilizingDate"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Insecticide process date","required":""},model:{value:(_vm.insecticideProcessDate),callback:function ($$v) {_vm.insecticideProcessDate=$$v},expression:"insecticideProcessDate"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.generateReport}},[_vm._v("\n            Generate report\n          ")])],1)],1)]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detail/operationInformation.vue?vue&type=template&id=5a44b93e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/operationInformation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var operationInformationvue_type_script_lang_js_ = ({
  data: () => ({
    valid: false,
    typeOfWaterPump: "",
    waterPumpOutput: "",
    typeOfFertilizer: "",
    typeOfInsecticide: "",
    typeOfNozzle: "",
    durationOfFlush: "",
    dateOfPlanting: "",
    dateOfCropYield: "",
    fertilizingDate: "",
    insecticideProcessDate: "",
    nameRules: [v => !!v || "Name is required", v => v.length <= 10 || "Name must be less than 10 characters"],
    email: "",
    emailRules: [v => !!v || "E-mail is required", v => /.+@.+/.test(v) || "E-mail must be valid"]
  }),
  methods: {
    generateReport: function () {
      console.log("submited");
      this.$axios // .$post("http://139.59.109.48/api/setSchedule/ipah2/nutrient", {
      .$post("http://127.0.0.1:5000/api/report/operationInformation", {
        typeOfWaterPump: this.typeOfWaterPump,
        waterPumpOutput: this.waterPumpOutput,
        typeOfFertilizer: this.typeOfFertilizer,
        typeOfInsecticide: this.typeOfInsecticide,
        typeOfNozzle: this.typeOfNozzle,
        durationOfFlush: this.durationOfFlush,
        dateOfPlanting: this.dateOfPlanting,
        dateOfCropYield: this.dateOfCropYield,
        fertilizingDate: this.fertilizingDate,
        insecticideProcessDate: this.insecticideProcessDate
      }).then(response => {
        console.log(response); // window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/detail/operationInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_operationInformationvue_type_script_lang_js_ = (operationInformationvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(214);

// CONCATENATED MODULE: ./components/detail/operationInformation.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_operationInformationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38e8d0f6"
  
)

/* harmony default export */ var operationInformation = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/yieldCropInformation.vue?vue&type=template&id=1953fa75&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',[_c('v-card-title',[_vm._v("\n      Yield crop information\n    ")]),_vm._v(" "),[_c('v-form',{on:{"submit":function($event){$event.preventDefault();}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of planting","required":""},model:{value:(_vm.dateOfPlanting),callback:function ($$v) {_vm.dateOfPlanting=$$v},expression:"dateOfPlanting"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Date of crop yield","required":""},model:{value:(_vm.dateOfCropYield),callback:function ($$v) {_vm.dateOfCropYield=$$v},expression:"dateOfCropYield"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Yield quantity","required":""},model:{value:(_vm.yieldQuantity),callback:function ($$v) {_vm.yieldQuantity=$$v},expression:"yieldQuantity"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Damage yield quantity","required":""},model:{value:(_vm.damageYieldQuantity),callback:function ($$v) {_vm.damageYieldQuantity=$$v},expression:"damageYieldQuantity"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Selling price","required":""},model:{value:(_vm.sellingPrice),callback:function ($$v) {_vm.sellingPrice=$$v},expression:"sellingPrice"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Sales revenue","required":""},model:{value:(_vm.salesRevenue),callback:function ($$v) {_vm.salesRevenue=$$v},expression:"salesRevenue"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.generateReport}},[_vm._v("\n            Generate report\n          ")])],1)],1)]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detail/yieldCropInformation.vue?vue&type=template&id=1953fa75&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/yieldCropInformation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var yieldCropInformationvue_type_script_lang_js_ = ({
  data: () => ({
    valid: false,
    dateOfPlanting: "",
    dateOfCropYield: "",
    yieldQuantity: "",
    damageYieldQuantity: "",
    sellingPrice: "",
    salesRevenue: "",
    nameRules: [v => !!v || "Name is required", v => v.length <= 10 || "Name must be less than 10 characters"],
    email: "",
    emailRules: [v => !!v || "E-mail is required", v => /.+@.+/.test(v) || "E-mail must be valid"]
  }),
  methods: {
    generateReport: function () {
      console.log("submited");
      this.$axios // .$post("http://139.59.109.48/api/setSchedule/ipah2/nutrient", {
      .$post("http://127.0.0.1:5000/api/report/yieldCropInformation", {
        dateOfPlanting: this.dateOfPlanting,
        dateOfCropYield: this.dateOfCropYield,
        yieldQuantity: this.yieldQuantity,
        damageYieldQuantity: this.damageYieldQuantity,
        sellingPrice: this.sellingPrice,
        salesRevenue: this.salesRevenue
      }).then(response => {
        console.log(response); // window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/detail/yieldCropInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_yieldCropInformationvue_type_script_lang_js_ = (yieldCropInformationvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(214);

// CONCATENATED MODULE: ./components/detail/yieldCropInformation.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_yieldCropInformationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6e37b66f"
  
)

/* harmony default export */ var yieldCropInformation = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/report.vue?vue&type=template&id=42af3108&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('v-card',[_c('v-card-title',[_vm._v("\n      Report\n    ")]),_vm._v(" "),[_c('v-form',{on:{"submit":function($event){$event.preventDefault();}},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-container',[_c('v-row',[_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Seasonal result","required":""},model:{value:(_vm.seasonalResult),callback:function ($$v) {_vm.seasonalResult=$$v},expression:"seasonalResult"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Annual result","required":""},model:{value:(_vm.annualResult),callback:function ($$v) {_vm.annualResult=$$v},expression:"annualResult"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Sales revenue","required":""},model:{value:(_vm.salesRevenue),callback:function ($$v) {_vm.salesRevenue=$$v},expression:"salesRevenue"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Yield improvement","required":""},model:{value:(_vm.yieldImprovement),callback:function ($$v) {_vm.yieldImprovement=$$v},expression:"yieldImprovement"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Irrigation period","required":""},model:{value:(_vm.irrigationPeriod),callback:function ($$v) {_vm.irrigationPeriod=$$v},expression:"irrigationPeriod"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Rain intensity","required":""},model:{value:(_vm.rainIntensity),callback:function ($$v) {_vm.rainIntensity=$$v},expression:"rainIntensity"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"Days of raining","required":""},model:{value:(_vm.daysOfRaining),callback:function ($$v) {_vm.daysOfRaining=$$v},expression:"daysOfRaining"}})],1),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","md":"3"}},[_c('v-text-field',{attrs:{"label":"System breakdown","required":""},model:{value:(_vm.systemBreakdown),callback:function ($$v) {_vm.systemBreakdown=$$v},expression:"systemBreakdown"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.generateReport}},[_vm._v("\n            Generate report\n          ")])],1)],1)]],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/detail/report.vue?vue&type=template&id=42af3108&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/detail/report.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var reportvue_type_script_lang_js_ = ({
  data: () => ({
    valid: false,
    seasonalResult: "",
    annualResult: "",
    salesRevenue: "",
    yieldImprovement: "",
    irrigationPeriod: "",
    rainIntensity: "",
    daysOfRaining: "",
    systemBreakdown: "",
    nameRules: [v => !!v || "Name is required", v => v.length <= 10 || "Name must be less than 10 characters"],
    email: "",
    emailRules: [v => !!v || "E-mail is required", v => /.+@.+/.test(v) || "E-mail must be valid"]
  }),
  methods: {
    generateReport: function () {
      console.log("submited");
      this.$axios // .$post("http://139.59.109.48/api/setSchedule/ipah2/nutrient", {
      .$post("http://127.0.0.1:5000/api/report/report", {
        seasonalResult: this.seasonalResult,
        annualResult: this.annualResult,
        salesRevenue: this.salesRevenue,
        yieldImprovement: this.yieldImprovement,
        irrigationPeriod: this.irrigationPeriod,
        rainIntensity: this.rainIntensity,
        daysOfRaining: this.daysOfRaining,
        systemBreakdown: this.systemBreakdown
      }).then(response => {
        console.log(response); // window.location.reload();
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/detail/report.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_reportvue_type_script_lang_js_ = (reportvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(186);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(214);

// CONCATENATED MODULE: ./components/detail/report.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_reportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5e1d11f4"
  
)

/* harmony default export */ var report = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VForm: VForm["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detail.vue?vue&type=template&id=0e10d20d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('PageTitle',{attrs:{"title":"DETAILS"}}),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.change(1)}}},[_vm._v(" Form ")]),_vm._ssrNode(" "),_c('v-btn',{on:{"click":function($event){return _vm.change(2)}}},[_vm._v("Detail ")]),_vm._ssrNode(" "),(_vm.page == 1)?_c('Users'):_vm._e(),_vm._ssrNode(" "),(_vm.page == 2)?_c('Layout',{attrs:{"detail":_vm.detailActive}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/detail.vue?vue&type=template&id=0e10d20d&

// EXTERNAL MODULE: ./components/PageTitle.vue + 4 modules
var PageTitle = __webpack_require__(191);

// EXTERNAL MODULE: ./components/detail/users.vue + 4 modules
var users = __webpack_require__(414);

// EXTERNAL MODULE: ./components/detail/layoutFull.vue + 6 modules
var layoutFull = __webpack_require__(327);

// EXTERNAL MODULE: ./components/detail/operationInformation.vue + 4 modules
var operationInformation = __webpack_require__(415);

// EXTERNAL MODULE: ./components/detail/yieldCropInformation.vue + 4 modules
var yieldCropInformation = __webpack_require__(416);

// EXTERNAL MODULE: ./components/detail/report.vue + 4 modules
var report = __webpack_require__(417);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  components: {
    PageTitle: PageTitle["default"],
    Users: users["default"],
    OperationInformation: operationInformation["default"],
    YieldCropInformation: yieldCropInformation["default"],
    Report: report["default"],
    Layout: layoutFull["default"]
  },
  methods: { ...Object(external_vuex_["mapMutations"])({
      setDetailActive: "setDetailActive",
      setDetailIpah1: "setDetailIpah1",
      setDetailIpah2: "setDetailIpah2",
      setDetailTkpmPagoh: "setDetailTkpmPagoh"
    }),
    change: function (val) {
      this.page = val;
    },
    getDetails: function () {
      let api;

      if (this.user == 0) {
        // api = "http://127.0.0.1:5000/api/report/ipah1";
        // api = "http://139.59.109.48/api/report/ipah1";
        api = "http://159.223.55.150/api/report/ipah1";
      } else if (this.user == 1) {
        // api = "http://127.0.0.1:5000/api/report/ipah2";
        // api = "http://139.59.109.48/api/report/ipah2";
        api = "http://159.223.55.150/api/report/ipah2";
      } else if (this.user == 2) {
        // api = "http://127.0.0.1:5000/api/report/tkpmPagoh";
        // api = "http://139.59.109.48/api/report/tkpmPagoh";
        api = "http://159.223.55.150/api/report/tkpmPagoh";
      }

      this.$axios.$get(api) // .$get("http://139.59.109.48/api/schedule/nutrient/ipah1")
      .then(response => {
        // response.forEach(i => {
        //   this.isDateBeforeTodayNutrient(i);
        // });
        // this.getScheduleIpah1();
        // console.log(response);
        if (this.user == 0) {
          this.setDetailActive(response);
          this.setDetailIpah1(response);
        } else if (this.user == 1) {
          this.setDetailActive(response);
          this.setDetailIpah2(response);
        } else if (this.user == 2) {
          this.setDetailActive(response);
          this.setDetailTkpmPagoh(response);
        }
      }).catch(error => {
        console.log(error);
      });
    }
  },

  data() {
    return {
      page: 1
    };
  },

  async mounted() {
    this.getDetails(); // console.log(this.detailIpah1);
  },

  computed: { ...Object(external_vuex_["mapState"])({
      user: state => state.activeUser,
      detailActive: state => state.detailActive,
      detailIpah1: state => state.detailIpah1,
      detailIpah2: state => state.detailIpah2,
      detailTkpmPagoh: state => state.detailTkpmPagoh
    })
  }
});
// CONCATENATED MODULE: ./pages/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(20);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(62);

// CONCATENATED MODULE: ./pages/detail.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0e1dd104"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {PageTitle: __webpack_require__(191).default})


/* vuetify-loader */


installComponents_default()(component, {VBtn: VBtn["a" /* default */]})


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ })

};;
//# sourceMappingURL=detail.js.map