<template>
  <span>
    <vc-date-picker
      :min-date="today"
      :disabled-dates="disabled"
      v-model="range"
      is-range
    ></vc-date-picker>
    <!-- :attributes="attributes" -->
    <!-- @dayclick="onDayClick" -->
  </span>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    today: moment().format("YYYY-MM-DD"),
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
  computed: {
    // dates() {
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
    getScheduleIpah1: function() {
      this.$axios
        .$get("http://localhost:5000/api/schedule/ipah1")
        .then(response => {
          // console.log(response);
          response.forEach(i =>
            this.disabled.push(moment(i).format("YYYY-MM-DD"))
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDatesBetweenDates: function(startDate, endDate) {
      let dates = [];
      //to avoid modifying the original date
      const theDate = new Date(startDate);
      console.log(endDate);
      while (theDate < endDate) {
        dates = [...dates, moment(new Date(theDate)).format("YYYY-MM-DD")];
        theDate.setDate(theDate.getDate() + 1);
      }
      dates = [...dates, moment(endDate).format("YYYY-MM-DD")];
      return dates;
    }
  },
  watch: {
    range: function(val) {
      this.start = moment(this.range.start).format("YYYY-MM-DD");
      this.end = moment(this.range.end).format("YYYY-MM-DD");
      var dateList = this.getDatesBetweenDates(
        this.range.start,
        this.range.end
      );
      console.log(dateList);
      console.log(this.start, this.end);
    }
  },
  async mounted() {
    this.getScheduleIpah1();
  }
};
</script>

<style></style>
