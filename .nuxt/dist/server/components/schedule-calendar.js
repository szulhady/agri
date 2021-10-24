exports.ids = [37];
exports.modules = {

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Schedule/Calendar.vue?vue&type=template&id=ed032e10&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('vc-date-picker',{attrs:{"min-date":_vm.today,"disabled-dates":_vm.disabled,"is-range":""},model:{value:(_vm.range),callback:function ($$v) {_vm.range=$$v},expression:"range"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Schedule/Calendar.vue?vue&type=template&id=ed032e10&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(162);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Schedule/Calendar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  data: () => ({
    today: external_moment_default()().format("YYYY-MM-DD"),
    availableDates: [],
    disabled: [],
    days: [],
    selectedDate: [],
    date: new Date(),
    timezone: "",
    range: {
      start: new Date(2020, 8, 19),
      end: new Date(2020, 8, 20)
    },
    start: "",
    end: ""
  }),
  computed: {// dates() {
    //   return this.days.map(day => day.date);
    // },
    // attributes() {
    //   return this.dates.map(date => ({
    //     highlight: true,
    //     dates: date
    //   }));
    // }
  },
  methods: {
    // onDayClick(day) {
    //   const idx = this.days.findIndex(d => d.id === day.id);
    //   if (idx >= 0) {
    //     this.days.splice(idx, 1);
    //   } else {
    //     this.days.push({
    //       id: day.id,
    //       date: day.date
    //     });
    //     this.selectedDate.push(day.id);
    //   }
    //   console.log(this.selectedDate);
    // },
    getScheduleIpah1: function () {
      this.$axios.$get("http://localhost:5000/api/schedule/ipah1").then(response => {
        // console.log(response);
        response.forEach(i => this.disabled.push(external_moment_default()(i).format("YYYY-MM-DD")));
      }).catch(error => {
        console.log(error);
      });
    },
    getDatesBetweenDates: function (startDate, endDate) {
      let dates = []; //to avoid modifying the original date

      const theDate = new Date(startDate);
      console.log(endDate);

      while (theDate < endDate) {
        dates = [...dates, external_moment_default()(new Date(theDate)).format("YYYY-MM-DD")];
        theDate.setDate(theDate.getDate() + 1);
      }

      dates = [...dates, external_moment_default()(endDate).format("YYYY-MM-DD")];
      return dates;
    }
  },
  watch: {
    range: function (val) {
      this.start = external_moment_default()(this.range.start).format("YYYY-MM-DD");
      this.end = external_moment_default()(this.range.end).format("YYYY-MM-DD");
      var dateList = this.getDatesBetweenDates(this.range.start, this.range.end);
      console.log(dateList);
      console.log(this.start, this.end);
    }
  },

  async mounted() {
    this.getScheduleIpah1();
  }

});
// CONCATENATED MODULE: ./components/Schedule/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var Schedule_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Schedule/Calendar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Schedule_Calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ee55e82c"
  
)

/* harmony default export */ var Calendar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=schedule-calendar.js.map