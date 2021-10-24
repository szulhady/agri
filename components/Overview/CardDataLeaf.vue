<template>
  <v-row class="padding arragement">
    <v-col cols="6" lg="4">
      <!-- <v-card-subtitle class="center">NPK</v-card-subtitle> -->
      <Gauge
        id="LeafTemperature"
        :data="items[0].LeafTemperature"
        max="10"
        unit="mg/L"
        description="Leaf Temperature"
      />
    </v-col>
    <v-col cols="6" lg="4">
      <!-- <v-card-subtitle class="center">pH</v-card-subtitle> -->
      <Gauge
        id="Humidity"
        :data="items[0].Humidity"
        max="40"
        unit="°C"
        description="Humidity"
      />
    </v-col>
  </v-row>
</template>

<script>
import Gauge from "~/components/Overview/Single/Gauge";
export default {
  components: {
    Gauge
  },
  props: ["items"]
};
</script>

<style></style>
