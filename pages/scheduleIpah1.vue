<template>
  <section>
    <!-- <client-only> -->
    <PageTitle title="SCHEDULE" />
    <v-card class="mb-10">
      <v-card-title>
        Set schedule for nutrient preparation
      </v-card-title>
      <v-row style="display:flex; justify-content:center; align-items:center">
        <v-col
          cols="12"
          class="pl-8 col-lg-3 mb-5"
          style="display:flex;flex-direction:column;justify-content:center;align-items:center"
        >
          <div>
            <h4>Select Date</h4>
            <h5>Can be a day or range of days</h5>
            <!-- <span> -->
            <vc-date-picker
              :min-date="today"
              :disabled-dates="disabledNutrient"
              v-model="rangeNutrient"
              is-range
            ></vc-date-picker>
            <!-- </span> -->
          </div>
        </v-col>
        <v-col cols="12" class="mx-auto col-lg-9">
          <v-row>
            <v-col class="ml-10 ml-lg-0" cols="4">
              <v-row>
                <v-col>
                  <h4>
                    Default time for nutrient preparation process on selected
                    date is on 12am. Please select date and duration (minute)
                    for dosing process.
                  </h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="userInputNutriet">
                  <div>
                    <!-- <v-select
                        :items="itemsDuration1"
                        label="Duration (minute)"
                        v-model="durationNutrient"
                        class="long"
                      ></v-select> -->
                    <v-text-field
                      label="Duration (minute)"
                      :rules="rules"
                      type="number"
                      v-model.number="durationNutrient"
                      class="long"
                    ></v-text-field>
                  </div>
                  <div>
                    <v-btn class="mt-5" @click="sendScheduleNutrient">
                      SET SCHEDULE
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="ml-10 ml-lg-0 px-10" cols="8">
              <TableScheduleNutrient
                :allDate="detailNutrient"
                description="Nutrient preparation schedule"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-card-title>
        Set schedule for fertigation / irrigation
      </v-card-title>
      <v-row>
        <v-col
          cols="12"
          class="pl-8 col-lg-3"
          style="display:flex;flex-direction:column;justify-content:center;align-items:center"
        >
          <div>
            <h4>Select Date</h4>
            <h5>Can be a day or range of days</h5>
            <vc-date-picker
              :min-date="today"
              :disabled-dates="disabled"
              v-model="range"
              is-range
            ></vc-date-picker>
          </div>
          <div>
            <v-btn class="mt-5" @click="sendSchedule">
              SET SCHEDULE
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="mx-auto col-lg-9">
          <v-row>
            <v-col class="ml-10 ml-lg-0">
              <h4>
                Please fill first option first, then fill other options if
                needed. Options for 7am and 1pm are not available due to
                nutrient preparation process ongoing.
              </h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>1)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue1"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 13],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items1"
                  label="Block"
                  v-model="block1"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration1"
                    label="Duration"
                    v-model="duration1"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration1"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance1"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>2)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue2"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 13],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items2"
                  label="Block"
                  v-model="block2"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration2"
                    label="Duration"
                    v-model="duration2"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration2"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance2"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>3)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue3"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 13],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items3"
                  label="Block"
                  v-model="block3"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration3"
                    label="Duration"
                    v-model="duration3"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration3"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance3"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>4)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue4"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items4"
                  label="Block"
                  v-model="block4"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration4"
                    label="Duration"
                    v-model="duration4"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration4"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance4"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>5)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue5"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items5"
                  label="Block"
                  v-model="block5"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration5"
                    label="Duration"
                    v-model="duration5"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration5"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance5"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>6)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue6"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items6"
                  label="Block"
                  v-model="block6"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration6"
                    label="Duration"
                    v-model="duration6"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration6"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance6"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>7)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue7"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items7"
                  label="Block"
                  v-model="block7"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration7"
                    label="Duration"
                    v-model="duration7"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration7"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance7"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>8)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue8"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items8"
                  label="Block"
                  v-model="block8"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration8"
                    label="Duration"
                    v-model="duration8"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration8"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance8"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>9)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue9"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items9"
                  label="Block"
                  v-model="block9"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration9"
                    label="Duration"
                    v-model="duration9"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration9"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance9"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>10)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue10"
                  format="HH:mm"
                  :hour-range="[
                    [0, 6],
                    [8, 12],
                    [14, 23]
                  ]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items10"
                  label="Block"
                  v-model="block10"
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <!-- <v-select
                    :items="itemsDuration10"
                    label="Duration"
                    v-model="duration10"
                    class="short"
                  ></v-select> -->
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration10"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance10"
                  class="short"
                ></v-select>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <TableSchedule
            :allDate="detail"
            description="Fertigation / Irrigation schedule"
            class="mx-10 mb-5"
          />
        </v-col>
      </v-row>
    </v-card>
    <!-- </client-only> -->
  </section>
</template>

<script>
import VueTimepicker from "vue2-timepicker";

// CSS
import "vue2-timepicker/dist/VueTimepicker.css";
import PageTitle from "~/components/PageTitle";
import Calendar from "~/components/Schedule/Calendar.vue";
import Time from "~/components/Schedule/Time.vue";
import TableSchedule from "~/components/Schedule/TableSchedule.vue";
import TableScheduleNutrient from "~/components/Schedule/TableScheduleNutrient.vue";
import moment from "moment";

export default {
  middleware: ["isIpah"],
  layout: "status",
  components: {
    PageTitle,
    Calendar,
    Time,
    VueTimepicker,
    TableSchedule,
    TableScheduleNutrient
  },
  data() {
    return {
      detail2: [],
      rules: [value => !!value || ""],
      items1: ["1", "2", "All"],
      items2: ["1", "2", "All"],
      items3: ["1", "2", "All"],
      items4: ["1", "2", "All"],
      items5: ["1", "2", "All"],
      items6: ["1", "2", "All"],
      items7: ["1", "2", "All"],
      items8: ["1", "2", "All"],
      items9: ["1", "2", "All"],
      items10: ["1", "2", "All"],
      itemsDuration1: ["10", "20", "30"],
      itemsDuration2: ["10", "20", "30"],
      itemsDuration3: ["10", "20", "30"],
      itemsDuration4: ["10", "20", "30"],
      itemsDuration5: ["10", "20", "30"],
      itemsDuration6: ["10", "20", "30"],
      itemsDuration7: ["10", "20", "30"],
      itemsDuration8: ["10", "20", "30"],
      itemsDuration9: ["10", "20", "30"],
      itemsDuration10: ["10", "20", "30"],
      duration1: "",
      duration2: "",
      duration3: "",
      duration4: "",
      duration5: "",
      duration6: "",
      duration7: "",
      duration8: "",
      duration9: "",
      duration10: "",
      durationNutrient: "",
      block1: "",
      block2: "",
      block3: "",
      block4: "",
      block5: "",
      block6: "",
      block7: "",
      block8: "",
      block9: "",
      block10: "",
      substance1: "",
      substance2: "",
      substance3: "",
      substance4: "",
      substance5: "",
      substance6: "",
      substance7: "",
      substance8: "",
      substance9: "",
      substance10: "",
      itemsSubstance: ["water", "fertilizer"],
      today: moment().format("YYYY-MM-DD"),
      availableDates: [],
      disabled: [],
      disabledNutrient: [],
      days: [],
      selectedDate: [],
      selectedDateNutrient: [],
      date: new Date(),
      timezone: "",
      range: {
        start: new Date(2020, 8, 19),
        end: new Date(2020, 8, 20)
      },
      start: "",
      end: "",
      rangeNutrient: {
        startNutrient: new Date(2020, 8, 19),
        endNutrient: new Date(2020, 8, 20)
      },
      startNutrient: "",
      endNutrient: "",
      //
      time: [],
      time1: "",
      yourStringTimeValue1: "",
      yourStringTimeValue2: "",
      yourStringTimeValue3: "",
      yourStringTimeValue4: "",
      yourStringTimeValue5: "",
      yourStringTimeValue6: "",
      yourStringTimeValue7: "",
      yourStringTimeValue8: "",
      yourStringTimeValue9: "",
      yourStringTimeValue10: "",
      allTime: [],
      allBlock: [],
      allDuration: [],
      allDurationNutrient: [],
      allSubstance: [],
      detail: [],
      detailNutrient: []
    };
  },
  methods: {
    isDateBeforeToday: function(date) {
      // return (
      if (
        new Date(new Date(date.date).toDateString()) >=
        new Date(new Date().toDateString())
      ) {
        // console.log(date);
        this.detail.push(date);
        this.disabled.push(moment(date.date).format("YYYY-MM-DD"));
      }
    },
    isDateBeforeTodayNutrient: function(date2) {
      if (
        new Date(new Date(date2.date).toDateString()) >=
        new Date(new Date().toDateString())
      ) {
        // console.log(date2);
        this.detailNutrient.push(date2);
        this.disabledNutrient.push(moment(date2.date).format("YYYY-MM-DD"));
      }
    },
    getScheduleIpah1: function() {
      this.$axios
        // .$get("http://127.0.0.1:5000/api/schedule/ipah1")
        .$get("http://139.59.109.48/api/schedule/ipah1")
        .then(response => {
          response.forEach(i => {
            // console.log(i);
            this.isDateBeforeToday(i);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    getScheduleIpah1Nutrient: function() {
      this.$axios
        .$get("http://127.0.0.1:5000/api/schedule/ipah1/nutrient")
        // .$get("http://139.59.109.48/api/schedule/nutrient/ipah1")
        .then(response => {
          response.forEach(i => {
            this.isDateBeforeTodayNutrient(i);
          });
          this.getScheduleIpah1();
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendScheduleIpah1: function(date, time, block, duration, substance) {
      this.$axios
        // .$post("http://127.0.0.1:5000/api/setSchedule/ipah1", {
        .$post("http://139.59.109.48/api/setSchedule/ipah1", {
          date: date,
          time: time,
          block: block,
          duration: duration,
          substance: substance
        })
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendScheduleIpah1Nutient: function(date, duration) {
      this.$axios
        .$post("http://139.59.109.48/api/setSchedule/ipah1/nutrient", {
          date: date,
          time: "23:00:00",
          duration: duration
        })
        .then(response => {
          console.log(response);
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDatesBetweenDates: function(startDate, endDate) {
      let dates = [];
      //to avoid modifying the original date
      const theDate = new Date(startDate);
      while (theDate < endDate) {
        dates = [...dates, moment(new Date(theDate)).format("YYYY-MM-DD")];
        theDate.setDate(theDate.getDate() + 1);
      }
      dates = [...dates, moment(endDate).format("YYYY-MM-DD")];
      return dates;
    },
    sendSchedule: function() {
      this.allTime = [];
      this.allBlock = [];
      this.allDuration = [];
      this.allSubstance = [];

      if (this.selectedDate.length < 1) {
        alert("Please select valid date");
        return;
      }

      if (!this.yourStringTimeValue1) {
        alert("Please fill in the first slot");
        return;
      }

      // time

      if (this.yourStringTimeValue1) {
        if (
          this.yourStringTimeValue1.includes("mm") ||
          this.yourStringTimeValue1.includes("HH")
        ) {
          alert("Please select valid time");

          return;
        }
        if (!Number.isInteger(this.duration1) || this.duration1 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block1) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance1) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue1);
        this.allBlock.push(this.block1);
        this.allDuration.push(this.duration1);
        this.allSubstance.push(this.substance1);
        console.log(this.allTime);
      }

      if (this.yourStringTimeValue2) {
        if (
          this.yourStringTimeValue2.includes("mm") ||
          this.yourStringTimeValue2.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration2) || this.duration2 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block2) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance2) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue2);
        this.allBlock.push(this.block2);
        this.allDuration.push(this.duration2);
        this.allSubstance.push(this.substance2);
      }

      if (this.yourStringTimeValue3) {
        if (
          this.yourStringTimeValue3.includes("mm") ||
          this.yourStringTimeValue3.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration3) || this.duration3 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block3) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance3) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue3);
        this.allBlock.push(this.block3);
        this.allDuration.push(this.duration3);
        this.allSubstance.push(this.substance3);
      }

      if (this.yourStringTimeValue4) {
        if (
          this.yourStringTimeValue4.includes("mm") ||
          this.yourStringTimeValue4.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration4) || this.duration4 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block4) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance4) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue4);
        this.allBlock.push(this.block4);
        this.allDuration.push(this.duration4);
        this.allSubstance.push(this.substance4);
      }

      if (this.yourStringTimeValue5) {
        if (
          this.yourStringTimeValue5.includes("mm") ||
          this.yourStringTimeValue5.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration5) || this.duration5 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block5) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance5) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue5);
        this.allBlock.push(this.block5);
        this.allDuration.push(this.duration5);
        this.allSubstance.push(this.substance5);
      }

      if (this.yourStringTimeValue6) {
        if (
          this.yourStringTimeValue6.includes("mm") ||
          this.yourStringTimeValue6.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration6) || this.duration6 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block6) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance6) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue6);
        this.allBlock.push(this.block6);
        this.allDuration.push(this.duration6);
        this.allSubstance.push(this.substance6);
      }

      if (this.yourStringTimeValue7) {
        if (
          this.yourStringTimeValue7.includes("mm") ||
          this.yourStringTimeValue7.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration7) || this.duration7 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block7) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance7) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue7);
        this.allBlock.push(this.block7);
        this.allDuration.push(this.duration7);
        this.allSubstance.push(this.substance7);
      }

      if (this.yourStringTimeValue8) {
        if (
          this.yourStringTimeValue8.includes("mm") ||
          this.yourStringTimeValue8.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration8) || this.duration8 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block8) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance8) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue8);
        this.allBlock.push(this.block8);
        this.allDuration.push(this.duration8);
        this.allSubstance.push(this.substance8);
      }

      if (this.yourStringTimeValue9) {
        if (
          this.yourStringTimeValue9.includes("mm") ||
          this.yourStringTimeValue9.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration9) || this.duration9 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block9) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance9) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue9);
        this.allBlock.push(this.block9);
        this.allDuration.push(this.duration9);
        this.allSubstance.push(this.substance9);
      }

      if (this.yourStringTimeValue10) {
        if (
          this.yourStringTimeValue10.includes("mm") ||
          this.yourStringTimeValue10.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration10) || this.duration10 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block10) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance10) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue10);
        this.allBlock.push(this.block10);
        this.allDuration.push(this.duration10);
        this.allSubstance.push(this.substance10);
      }

      this.selectedDate.forEach(date => {
        this.sendScheduleIpah1(
          date,
          this.allTime,
          this.allBlock,
          this.allDuration,
          this.allSubstance
        );
      });
    },
    sendScheduleNutrient: function() {
      if (this.selectedDateNutrient.length < 1) {
        alert("Please select valid date");
        return;
      }
      if (!this.durationNutrient) {
        alert("Please select valid duration");
        return;
      }
      if (
        !Number.isInteger(this.durationNutrient) ||
        this.durationNutrient < 1
      ) {
        alert("Please select valid duration (integer number)");
        return;
      }
      // duration
      if (this.durationNutrient) {
        this.allDurationNutrient.push(this.durationNutrient);
      }

      //
      this.selectedDateNutrient.forEach(date => {
        this.sendScheduleIpah1Nutient(date, this.allDurationNutrient);
      });
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
      this.selectedDate = dateList;
    },
    rangeNutrient: function(val) {
      this.startNutrient = moment(this.rangeNutrient.start).format(
        "YYYY-MM-DD"
      );
      this.endNutrient = moment(this.rangeNutrient.end).format("YYYY-MM-DD");
      var dateListNutrient = this.getDatesBetweenDates(
        this.rangeNutrient.start,
        this.rangeNutrient.end
      );
      this.selectedDateNutrient = dateListNutrient;
    }
  },
  mounted() {
    this.getScheduleIpah1Nutrient();
    // setTimeout(() => {
    //   this.getScheduleIpah1();
    // }, 200);
  }
};
</script>

<style>
.userInput {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.userInputNutrient {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-messages__message {
  font-size: 0.5rem !important;
}

.short {
  width: 80px;
}
.long {
  width: 150px;
}
</style>
