<template>
  <v-row class="padding arragement">
    <v-col
      v-for="(station, index) in stations"
      :class="station.cols === 4 ? 'col-md-4' : 'col-md-6'"
      :key="index"
    >
      <Data :jetty="station.description" :sensorData="station.sensorData" />
    </v-col>
    <!-- <v-col cols="6" lg="4">
      <Gauge
        id="WaterLevel"
        :data="items[0].WaterLevel"
        max="10"
        unit="mg/L"
        description="Water Level"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <Gauge
        id="WaterPH"
        :data="items[0].WaterPH"
        max="40"
        unit="°C"
        description="Water pH"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <Gauge
        id="WaterEC"
        :data="items[0].WaterEC"
        max="14"
        unit="unit"
        description="Water EC"
      />
    </v-col> -->
  </v-row>
</template>

<script>
import Gauge from "~/components/Overview/Single/Gauge";
import Data from "~/components/Overview/Single/Data.vue";
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
