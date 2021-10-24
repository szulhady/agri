<template>
  <div>
    <v-card class="card-color elevation-12 ">
      <v-card-title class="color mb-4">REAL-TIME DATA</v-card-title>
      <v-row style="display:flex; justify-content:space-evenly">
        <v-col
          v-for="(category, index) in stations"
          :key="index"
          cols="3"
          class="mb-3 categories-container"
        >
          <v-card
            @click="button(index)"
            :class="{ active: index === activeStation }"
            class="category elevation-10"
          >
            <v-img
              :src="category.image"
              class="station-img"
              max-height="120px"
            ></v-img>
            <v-card-title class="button" style="justify-content:center">
              {{ category.station }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-row style="display:flex; justify-content:space-evenly">
        <v-col
          v-for="(category, index) in categories"
          :key="index"
          cols="3"
          class="mb-3 categories-container"
        >
          <v-card
            @click="button2(index)"
            :class="{ active: index === activeSensor }"
            class="category"
          >
            <v-card-title class="button" style="justify-content:center">
              {{ category }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row> -->
      <!-- <CardDataSoilAdmin
        v-if="activeSensor === 0"
        :items="items"
        :stations="stations[activeStation].sensorSoil"
      /> -->
      <!-- <CardDataLeafAdmin
        v-if="activeSensor === 1"
        :items="items"
        :stations="stations2[activeStation].sensorLeaf"
      /> -->
      <!-- <CardDataWaterAdmin
        v-if="activeSensor === 1"
        :items="items"
        :stations="stations[activeStation].sensorWater"
      /> -->
    </v-card>
    <!-- <v-row> -->
    <v-card class="elevation-10 mt-10">
      <div v-if="activeStation === 0">
        <ipahStatusAdmin />
      </div>
      <div v-if="activeStation === 1">
        <ipah2StatusAdmin />
      </div>
      <div v-if="activeStation === 2">
        <tkpmPagohStatusAdmin />
      </div>
    </v-card>
    <!-- </v-row> -->
  </div>
</template>
<script>
import CardTitle from "~/components/CardTitle";
import CardDataSoilAdmin from "~/components/Admin/Overview/CardDataSoilAdmin";
import CardDataLeafAdmin from "~/components/Admin/Overview/CardDataLeafAdmin";
import CardDataWaterAdmin from "~/components/Admin/Overview/CardDataWaterAdmin";

import ipahStatusAdmin from "~/components/Admin/Overview/ipahStatusAdmin";
import ipah2StatusAdmin from "~/components/Admin/Overview/ipah2StatusAdmin";
import tkpmPagohStatusAdmin from "~/components/Admin/Overview/tkpmPagohStatusAdmin";

import { mapState } from "vuex";

export default {
  components: {
    CardTitle,
    CardDataSoilAdmin,
    CardDataLeafAdmin,
    CardDataWaterAdmin,
    ipahStatusAdmin,
    ipah2StatusAdmin,
    tkpmPagohStatusAdmin
  },
  data() {
    return {
      items: [
        {
          NPK: 0,
          pH: 0,
          EC: 0,
          Moisture: 0,
          Temperature: 0,
          LeafTemperature: 0,
          Humidity: 0,
          WaterNPK: 0,
          WaterPH: 0,
          WaterEC: 0
        }
      ],
      categories: ["Soil", "Water"],
      // stations: ["IPAH 1", "IPAH 2", "TKPM PAGOH"],
      activeStation: 0,
      activeSensor: 0
    };
  },
  methods: {
    button: function(index) {
      console.log("button 1");
      this.activeStation = index;
      this.activeSensor = 0;
      console.log(this.stations2);
    },
    button2: function(index) {
      console.log("button 2");
      this.activeSensor = index;
      console.log(this.activeSensor);
    }
  },
  computed: {
    ...mapState({
      stations: state => state.stations
    })
  }
};
</script>

<style scoped>
.padding {
  padding: 0 1em;
}
.arragement {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  /* align-content: space-around; */
}

.button {
  padding: 5px;
}
.active {
  color: aliceblue;
  background: #395524;
}
.category:hover {
  background: #395524a4;
  color: aliceblue;
}
</style>
