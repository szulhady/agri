<template>
  <section>
    <!-- <client-only> -->
    <PageTitle title="SCHEDULE" />
    <v-card class="mb-10">
      <v-card-title> Set schedule for nutrient preparation </v-card-title>
      <v-row
        style="display: flex; justify-content: center; align-items: center"
      >
        <v-col
          cols="12"
          class="pl-8 col-md-4 mb-5"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
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
        <v-col cols="12" class="mx-auto col-md-8">
          <v-row>
            <v-col class="ml-10 ml-lg-0 col-lg-11" cols="10">
              <v-row>
                <v-col>
                  <div>
                    <h4 style="text-align: justify; text-justify: inter-word">
                      Default time for nutrient preparation process on selected
                      date is on 3am. Please select date, tank option and volume
                      EC for dosing process.
                    </h4>
                    <!-- <h4>
                      Below is guideline for duration input:
                    </h4>
                    <h4>
                      - To get EC value 2.0, please select 30 minutes
                    </h4>
                    <h4>
                      - To get EC value 2.0, please select 30 minutes
                    </h4> -->
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="userInputNutriet">
                  <!-- <div
                    style="display: flex; justify-content: center; height:40px"
                  > -->
                  <!-- <v-select
                        :items="itemsDuration1"
                        label="Duration (minute)"
                        v-model="durationNutrient"
                        class="long"
                      ></v-select> -->
                  <!-- <v-text-field
                      label="Duration (minute)"
                      :rules="rules"
                      type="number"
                      v-model.number="durationNutrient"
                      class="long"
                    ></v-text-field> -->
                  <v-row>
                    <v-col
                      style="display:flex; justify-content:center; align-items:center"
                    >
                      <div class="mx-3">
                        <v-select
                          v-model="tank"
                          :items="items"
                          label="Tank"
                          multiple
                          style="width:100px"
                        ></v-select>
                        <!-- class="short" -->
                      </div>
                      <div>
                        <input
                          class="long2"
                          type="text"
                          v-mask="'#.##'"
                          v-model.number="durationNutrient"
                        />
                      </div>
                    </v-col>
                  </v-row>

                  <!-- </div> -->
                  <div style="display: flex; justify-content: center">
                    <v-btn class="mt-5" @click="checkScheduleNutrient">
                      SET SCHEDULE
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="px-10" cols="12">
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
      <v-card-title> Set schedule for fertigation </v-card-title>
      <v-row>
        <v-col
          cols="12"
          class="pl-8 col-lg-3"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <div>
            <h4>Select Date</h4>
            <h5>Can be a day or range of days</h5>
            <span>
              <vc-date-picker
                :min-date="today"
                :disabled-dates="disabled"
                v-model="range"
                is-range
              ></vc-date-picker>
            </span>
          </div>

          <div>
            <v-btn class="mt-5" @click="checkSchedule"> SET SCHEDULE </v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="mx-auto col-lg-9">
          <v-row>
            <v-col class="ml-10 ml-lg-0">
              <h4>
                Please fill first option first, then fill other options if
                needed.
              </h4>
            </v-col>
          </v-row>
          <v-row v-if="$vuetify.breakpoint.smAndUp">
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>1)</label>

                <vue-timepicker
                  v-model="yourStringTimeValue1"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block1"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block2"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block3"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block4"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block5"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block6"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block7"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block8"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block9"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  :items="items"
                  label="Block"
                  v-model="block10"
                  class="short"
                  multiple
                ></v-select>
              </div>
              <div class="mx-3">
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
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>11)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue11"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block11"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration11"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance11"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>12)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue12"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block12"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration12"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance12"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>13)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue13"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block13"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration13"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance13"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>14)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue14"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block14"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration14"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance14"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>15)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue15"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block15"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration15"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance15"
                  class="short"
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" class="userInput col-md-6">
              <div>
                <label>16)</label>
                <vue-timepicker
                  v-model="yourStringTimeValue16"
                  format="HH:mm"
                  :hour-range="[[7, 23]]"
                  hide-disabled-hours
                ></vue-timepicker>
              </div>
              <div class="mx-3">
                <v-select
                  v-model="block16"
                  :items="items"
                  label="Block"
                  multiple
                  class="short"
                ></v-select>
              </div>
              <div class="mx-3">
                <v-text-field
                  label="Duration (minute)"
                  :rules="rules"
                  type="number"
                  v-model.number="duration16"
                  class="short"
                ></v-text-field>
              </div>
              <div style="">
                <v-select
                  :items="itemsSubstance"
                  label="Substance"
                  v-model="substance16"
                  class="short"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-expansion-panels class="mx-5">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  List 1 - 10
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue1"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block1"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration1"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance1"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue2"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block2"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration2"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance2"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue3"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block3"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration3"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance3"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue4"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block4"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration4"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance4"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue5"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block5"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration5"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance5"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue6"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block6"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration6"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance6"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue7"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block7"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration7"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance7"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue8"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block8"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration8"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance8"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue9"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block9"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration9"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance9"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue10"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block10"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration10"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance10"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels class="mx-5">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  List 11 - 16
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue11"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block11"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration11"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance11"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue12"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block12"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration12"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance12"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue13"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block13"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration13"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance13"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue14"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block14"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration14"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance14"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #f7f7f7"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue15"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block15"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration15"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance15"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                  <div
                    style="display: flex; flex-wrap: wrap; background: #ffffff"
                    class="mx-8 mb-3"
                  >
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <!-- <label>1)</label> -->
                      <div class="short">
                        <vue-timepicker
                          v-model="yourStringTimeValue16"
                          format="HH:mm"
                          :hour-range="[[7, 23]]"
                          hide-disabled-hours
                        ></vue-timepicker>
                      </div>
                      <div>
                        <v-select
                          v-model="block16"
                          :items="items"
                          label="Block"
                          multiple
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      class="userInput col-md-6"
                      style="justify-content: space-evenly"
                    >
                      <div>
                        <v-text-field
                          label="Duration (minute)"
                          :rules="rules"
                          type="number"
                          v-model.number="duration16"
                          class="short"
                        ></v-text-field>
                      </div>
                      <div>
                        <v-select
                          :items="itemsSubstance"
                          label="Substance"
                          v-model="substance16"
                          class="short"
                        ></v-select>
                      </div>
                    </v-col>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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

    <!-- AFTER POST SCHEDULE -->
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title> Status </v-card-title>
        <hr class="hr" />
        <v-card-subtitle>{{ message }}</v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="message == 'Success'"
            text
            @click="reloadPage"
            class="success"
          >
            Okay
          </v-btn>
          <v-btn
            v-if="message != 'Success'"
            text
            @click="dialog = false"
            class="success"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- POST SCHEDULE CONFIRMATION -->
    <v-dialog v-model="dialogPost" persistent max-width="490">
      <v-card>
        <v-card-title> Action </v-card-title>
        <hr class="hr" />
        <v-card-subtitle
          >Are you confirm to set schedule as below?</v-card-subtitle
        >
        <v-card-subtitle
          >{{ dateStart }} -
          {{ dateEnd }}
        </v-card-subtitle>
        <v-card-subtitle v-for="(time, index) in allTime" :key="index"
          >({{ index + 1 }}) Time : {{ allTime[index] }}, Block :
          {{ allBlock[index] }}, Duration : {{ allDuration[index] }}, Substance
          :
          {{ allSubstance[index] }}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="sendSchedule" class="success"> Confirm </v-btn>
          <v-btn text @click="dialogPost = false" class="error"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- AFTER POST SCHEDULE NUTRIENT -->
    <v-dialog v-model="dialogNutrient" persistent max-width="290">
      <v-card>
        <v-card-title> Status </v-card-title>
        <hr class="hr" />
        <v-card-subtitle>{{ messageNutrient }}</v-card-subtitle>
        <v-card-subtitle></v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="messageNutrient == 'Success'"
            text
            @click="reloadPage"
            class="success"
          >
            Okay
          </v-btn>
          <v-btn
            v-if="messageNutrient != 'Success'"
            text
            @click="dialog = false"
            class="success"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- POST SCHEDULE CONFIRMATION NUTRIENT -->
    <v-dialog v-model="dialogPostNutrient" persistent max-width="490">
      <v-card>
        <v-card-title> Action </v-card-title>
        <hr class="hr" />
        <v-card-subtitle
          >Are you confirm to set schedule as below?</v-card-subtitle
        >
        <v-card-subtitle
          >{{ dateStartNutrient }} -
          {{ dateEndNutrient }}
        </v-card-subtitle>
        <v-card-subtitle
          >Tank : {{ tank }} , Volume : {{ durationNutrient }}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="sendScheduleNutrient" class="success">
            Confirm
          </v-btn>
          <v-btn text @click="dialogPostNutrient = false" class="error">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import mqtt from "mqtt";
export default {
  middleware: ["isTkpmIpah"],
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
      tank: "",
      dialog: false,
      dialogNutrient: false,
      dialogPost: false,
      dialogPostNutrient: false,
      message: "",
      messageNutrient: "",
      detail: [],
      rules: [value => !!value || ""],
      items: ["1", "2", "3"],
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
      duration11: "",
      duration12: "",
      duration13: "",
      duration14: "",
      duration15: "",
      duration16: "",
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
      block11: "",
      block12: "",
      block13: "",
      block14: "",
      block15: "",
      block16: "",
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
      substance11: "",
      substance12: "",
      substance13: "",
      substance14: "",
      substance15: "",
      substance16: "",
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
      yourStringTimeValue11: "",
      yourStringTimeValue12: "",
      yourStringTimeValue13: "",
      yourStringTimeValue14: "",
      yourStringTimeValue15: "",
      yourStringTimeValue16: "",
      allTime: [],
      allBlock: [],
      allDuration: [],
      allBlock2: [],
      allDurationNutrient: [],
      allSubstance: [],
      detailNutrient: [],
      dateStart: "",
      dateEnd: "",
      dateStartNutrient: "",
      dateEndNutrient: "",
      connection: {
        host: this.$auth.$state.user.server_mqtt,
        port: 8083,
        endpoint: "/mqtt",
        clean: true, // Reserved session
        connectTimeout: 3000, // Time out
        reconnectPeriod: 3000 // Reconnection interval
      },
      subscription: {
        // topic: "geyzer/#",
        topic: [],
        qos: 0
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 }
      ],
      client: {
        connected: false
      },
      subscribeSuccess: false
    };
  },
  methods: {
    isDateBeforeToday: function(date) {
      // return (
      if (
        new Date(new Date(date.date).toDateString()) >=
        new Date(new Date().toDateString())
      ) {
        // console.log("here");
        // let data = {
        //   date: date.date,
        //   remarks: `Time : ${date.time} , Block : ${date.block} , duration : ${date.duration}`
        // };
        // this.detail2.push(data);
        this.detail.push(date);
        this.disabled.push(moment(date.date).format("YYYY-MM-DD"));
      }
      // );
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
        // .$get("http://127.0.0.1:5000/api/schedule/ipah2")
        .$get("http://159.223.55.150/api/schedule/ipah2")
        // .$get("http://139.59.109.48/api/schedule/ipah2")
        .then(response => {
          response.forEach(i => {
            // this.disabled.push(moment(i).format("YYYY-MM-DD"))
            this.isDateBeforeToday(i);
          });
          this.client.publish("np/tkpmIpah/table/dripping", "update");
        })
        .catch(error => {
          console.log(error);
        });
    },
    getScheduleIpah1Nutrient: function() {
      this.$axios
        // .$get("http://127.0.0.1:5000/api/schedule/ipah2/nutrient")
        .$get("http://159.223.55.150/api/schedule/ipah2/nutrient")
        // .$get("http://139.59.109.48/api/schedule/ipah2/nutrient")
        .then(response => {
          response.forEach(i => {
            this.isDateBeforeTodayNutrient(i);
          });
          this.client.publish("np/tkpmIpah/table/dosing", "update");
          this.getScheduleIpah1();
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendScheduleIpah2: function(date, time, block, duration, substance) {
      this.$axios
        // .$post("http://127.0.0.1:5000/api/setSchedule/ipah2", {
        .$post("http://159.223.55.150/api/setSchedule/ipah2", {
          // .$post("http://139.59.109.48/api/setSchedule/ipah2", {
          date: date,
          time: time,
          block: block,
          duration: duration,
          substance: substance
        })
        .then(response => {
          this.client.publish("qwazx/np/tkpmIpah/table/dripping", "update");
          setTimeout(() => {
            window.location.reload();
          }, 1);
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendScheduleIpah1Nutient: function(date, volume, tank) {
      console.log("date", date);
      console.log("volume", volume);
      console.log("tank", tank);
      this.$axios
        // .$post("http://139.59.109.48/api/setSchedule/ipah2/nutrient", {
        // .$post("http://127.0.0.1:5000/api/setSchedule/ipah2/nutrient", {
        .$post("http://159.223.55.150/api/setSchedule/ipah2/nutrient", {
          date: date,
          time: "05:00:00",
          tank: tank,
          volume: volume
        })
        .then(response => {
          this.client.publish("qwazx/np/tkmpIpah/table/dosing", "update");
          setTimeout(() => {
            window.location.reload();
          }, 1);
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
    checkSchedule: function() {
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

      if (this.yourStringTimeValue11) {
        if (
          this.yourStringTimeValue11.includes("mm") ||
          this.yourStringTimeValue11.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration11) || this.duration11 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block11) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance11) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue11);
        this.allBlock.push(this.block11);
        this.allDuration.push(this.duration11);
        this.allSubstance.push(this.substance11);
      }

      if (this.yourStringTimeValue12) {
        if (
          this.yourStringTimeValue12.includes("mm") ||
          this.yourStringTimeValue12.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration12) || this.duration12 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block12) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance12) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue12);
        this.allBlock.push(this.block12);
        this.allDuration.push(this.duration12);
        this.allSubstance.push(this.substance12);
      }

      if (this.yourStringTimeValue13) {
        if (
          this.yourStringTimeValue13.includes("mm") ||
          this.yourStringTimeValue13.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration13) || this.duration13 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block13) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance13) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue13);
        this.allBlock.push(this.block13);
        this.allDuration.push(this.duration13);
        this.allSubstance.push(this.substance13);
      }

      if (this.yourStringTimeValue14) {
        if (
          this.yourStringTimeValue14.includes("mm") ||
          this.yourStringTimeValue14.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration14) || this.duration14 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block14) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance14) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue14);
        this.allBlock.push(this.block14);
        this.allDuration.push(this.duration14);
        this.allSubstance.push(this.substance14);
      }

      if (this.yourStringTimeValue15) {
        if (
          this.yourStringTimeValue15.includes("mm") ||
          this.yourStringTimeValue15.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration15) || this.duration15 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block15) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance15) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue15);
        this.allBlock.push(this.block15);
        this.allDuration.push(this.duration15);
        this.allSubstance.push(this.substance15);
      }

      if (this.yourStringTimeValue16) {
        if (
          this.yourStringTimeValue16.includes("mm") ||
          this.yourStringTimeValue16.includes("HH")
        ) {
          alert("Please select valid time");
          return;
        }
        if (!Number.isInteger(this.duration16) || this.duration16 < 1) {
          alert("Please select valid duration (integer number).");
          return;
        }
        if (!this.block16) {
          alert("Please select valid block.");
          return;
        }
        if (!this.substance16) {
          alert("Please select valid substance.");
          return;
        }
        this.allTime.push(this.yourStringTimeValue16);
        this.allBlock.push(this.block16);
        this.allDuration.push(this.duration16);
        this.allSubstance.push(this.substance16);
      }

      this.allBlock2 = [];
      this.allBlock2.push(this.allBlock.join("/"));
      this.dialogPost = true;
    },
    sendSchedule: function() {
      this.sendScheduleIpah2(
        this.selectedDate,
        this.allTime,
        this.allBlock2,
        this.allDuration,
        this.allSubstance
      );
      this.dialogPost = false;
    },
    checkScheduleNutrient: function() {
      this.allDurationNutrient = [];
      if (this.selectedDateNutrient.length < 1) {
        alert("Please select valid date");
        return;
      }
      if (!this.durationNutrient) {
        alert("Please select valid volume EC");
        return;
      }
      if (!this.tank) {
        alert("Please select tank");
        return;
      }
      if (
        !this.durationNutrient.toFixed(2) ||
        this.durationNutrient < 0 ||
        !this.tank
      ) {
        // if (
        //   !Number.isInteger(this.durationNutrient) ||
        //   this.durationNutrient < 1
        // ) {
        alert("Please select and fill all details before submit");
        return;
      }
      // duration
      if (this.durationNutrient) {
        this.allDurationNutrient.push(this.durationNutrient.toFixed(2));
      }
      this.dialogPostNutrient = true;
      //
    },
    sendScheduleNutrient: function() {
      this.sendScheduleIpah1Nutient(
        this.selectedDateNutrient,
        this.allDurationNutrient,
        this.tank
      );
      this.dialogPostNutrient = false;
    },
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      // const connectUrl = `wss:${host}:${port}${endpoint}`;
      const connectUrl = `${host}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }

      this.client.on("connect", () => {
        console.log("Connection succeeded!");
        this.dialog = false;
        console.log("here");
        setTimeout(() => {
          this.client.publish("qwazx/np/tkmpIpah/table/dosing", "update");
          this.client.publish("qwazx/np/tkmpIpah/table/dripping", "update");
          console.log("publish");
        }, 1);
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
      });
      this.client.on("close", () => {
        this.dialog = true;
      });
      this.client.stream.on("error", error => {
        // This does trigger when the URL is invalid
        console.error("Connection error:", error);
        this.dialog = true;
      });
      this.client.on("message", (topic, message) => {});
    },
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          return;
        }
        this.subscribeSuccess = true;
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
      this.dateStart = moment(this.range.start).format("Do MMMM YYYY");
      this.dateEnd = moment(this.range.end).format("Do MMMM YYYY");
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
      this.dateStartNutrient = moment(this.rangeNutrient.start).format(
        "Do MMMM YYYY"
      );
      this.dateEndNutrient = moment(this.rangeNutrient.end).format(
        "Do MMMM YYYY"
      );
    }
  },
  async mounted() {
    this.getScheduleIpah1Nutrient();
    this.createConnection();
    this.doSubscribe();
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

.v-messages__message {
  font-size: 0.5rem !important;
}

/* .v-select .v-select__selections {
  width: 300px !important;
} */

/* .v-input {
  width: 80px;
} */
.long2 {
  border: black 1px solid;
  text-align: center;
}
.short {
  width: 80px;
}
.v-select__selection--comma {
  font-size: 0.8rem;
}
</style>
<style>
@media only screen and (max-width: 600px) {
  .vue__time-picker input.display-time {
    width: 6em !important;
  }
  .v-expansion-panel-content__wrap {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
