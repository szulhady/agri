<template>
  <v-row class="padding arragement">
    <v-col
      v-for="(station, index) in stations"
      :key="index"
      :class="station.cols === 4 ? 'col-md-4' : 'col-md-6'"
    >
      <!-- :class="station.cols === 4 ? 'col-md-4' : 'col-md-6'" -->
      <Data :jetty="station.description" :sensorData="station.sensorData" />
    </v-col>
    <!-- <v-col cols="6" lg="4">
      <Gauge
        id="DO"
        :data="items[0].NPK"
        max="10"
        unit="mg/L"
        description="Soil NPK"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <Gauge
        id="TEMP"
        :data="items[0].pH"
        max="40"
        unit="°C"
        description="Soil pH"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <Gauge
        id="PH"
        :data="items[0].EC"
        max="14"
        unit="unit"
        description="Soil EC"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <Gauge
        id="DD"
        :data="items[0].Moisture"
        max="20"
        unit="ppt"
        description="Soil Moisture"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <Gauge
        id="NH3"
        :data="items[0].Temperature"
        max="0.6"
        unit="mg/L"
        description="Soil Temperature"
      />
    </v-col> -->
  </v-row>
</template>

<script>
import Gauge from "~/components/Overview/Single/Gauge";
import Data from "~/components/Overview/Single/Data.vue";

import { mapState } from "vuex";

export default {
  components: {
    Gauge,
    Data
  },
  props: ["items", "stations"]
};
</script>

<style scoped>
.col-6,
.col {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
</style>
