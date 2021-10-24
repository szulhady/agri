<template>
  <v-row class="reading-card-box" style="justify-content:space-evenly">
    <v-col
      cols="12"
      v-for="(station, index) in stations"
      :class="station.cols === 4 ? 'col-md-4' : 'col-md-6'"
      :key="index"
    >
      <Data
        :jetty="stations[index].description"
        :sensorData="stations[index].sensorData"
        :duration="durationPetrochemicalJetty"
      />
    </v-col>
    <!-- <v-col cols="12" class="col-md-4">
      <Data
        :jetty="stations[0].jetty"
        :sensorData="stations[0].sensorData"
        :duration="durationPetrochemicalJetty"
      />
    </v-col>
    <v-col cols="12" class="col-md-4">
      <Data
        :jetty="stations[1].jetty"
        :sensorData="stations[1].sensorData"
        :duration="durationWhaftJetty"
      />
    </v-col>
    <v-col cols="12" class="col-md-4">
      <Data
        :jetty="stations[2].jetty"
        :sensorData="stations[2].sensorData"
        :duration="durationMP10Jetty"
      />
    </v-col> -->
    <!-- <v-col cols="12">
        <Data
          :jetty="stations[3].jetty"
          :sensorData="stations[3].sensorData"
          :duration="durationDGYard"
        />
      </v-col> -->
    <!-- <v-col cols="12">
        <Data
          class="mb-5"
          :jetty="stations[4].jetty"
          :sensorData="stations[4].sensorData"
          :duration="durationLNG"
        />
      </v-col> -->
  </v-row>
</template>

<script>
import { mapState } from "vuex";

import CardTitle from "~/components/CardTitle";
import Data from "~/components/Admin/Overview/Single/Data";
export default {
  components: {
    Data,
    CardTitle
  },
  computed: {
    ...mapState({
      stations2: state => state.stationsWater,
      durationPetrochemicalJetty: state => state.durationPetrochemicalJetty,
      durationWhaftJetty: state => state.durationWhaftJetty,
      durationMP10Jetty: state => state.durationMP10Jetty,
      durationDGYard: state => state.durationDGYard,
      durationLNG: state => state.durationLNG
    })
  },
  data() {
    return {};
  },
  props: ["stations"]
};
</script>

<style scoped>
.reading-card-box {
  padding: 0 20px !important;
  /* max-width: 600px; */
}
</style>
