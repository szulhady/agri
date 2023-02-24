<template>
  <v-row class="padding arragement">
    <div
      v-if="$vuetify.breakpoint.mdAndUp"
      style="width:100%; display:flex;flex-wrap: wrap; justify-content:center"
    >
      <v-col
        v-for="(station, index) in stations"
        :key="index"
        :class="station.cols === 4 ? 'col-md-4' : 'col-md-6'"
      >
        <Data
          :jetty="station.description"
          :sensorData="station.sensorData"
          :lastUpdate="station.lastUpdate"
        />
      </v-col>
    </div>
    <div v-else style="width:100%">
      <v-col v-for="(station, index) in stations" :key="index" cols="12">
        <Data
          :jetty="station.description"
          :sensorData="station.sensorData"
          :lastUpdate="station.lastUpdate"
        />
      </v-col>
    </div>
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
