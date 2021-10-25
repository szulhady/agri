<template>
  <div>
    <v-card class="card-color elevation-12 ">
      <v-card-title class="color mb-4">STATUS</v-card-title>
      <v-row style="display:flex; justify-content:space-evenly">
        <v-col
          v-for="(category, index) in stations.slice(0, -1)"
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
        <ipahStatusAdmin
          :classSV1="ipahStatus.SV1 == 1 ? 'filter-green' : 'filter-red'"
          :classSV2="ipahStatus.SV2 == 1 ? 'filter-green' : 'filter-red'"
          :classSV3="ipahStatus.SV3 == 1 ? 'filter-green' : 'filter-red'"
          :classSV4="ipahStatus.SV4 == 1 ? 'filter-green' : 'filter-red'"
          :classSV5="ipahStatus.SV5 == 1 ? 'filter-green' : 'filter-red'"
          :classSV6="ipahStatus.SV6 == 1 ? 'filter-green' : 'filter-red'"
          :classPump="ipahStatus.P == 1 ? 'filter-green' : 'filter-red'"
          :classDosingPump="ipahStatus.DP == 1 ? 'filter-green' : 'filter-red'"
        />
      </div>
      <div v-if="activeStation === 1">
        <ipah2StatusAdmin
          :classSV1="tkpmIpahStatus.SV1 == 1 ? 'filter-green' : 'filter-red'"
          :classSV2="tkpmIpahStatus.SV2 == 1 ? 'filter-green' : 'filter-red'"
          :classSV3="tkpmIpahStatus.SV3 == 1 ? 'filter-green' : 'filter-red'"
          :classSV4="tkpmIpahStatus.SV4 == 1 ? 'filter-green' : 'filter-red'"
          :classSV5="tkpmIpahStatus.SV5 == 1 ? 'filter-green' : 'filter-red'"
          :classSV6="tkpmIpahStatus.SV6 == 1 ? 'filter-green' : 'filter-red'"
          :classSV7="tkpmIpahStatus.SV7 == 1 ? 'filter-green' : 'filter-red'"
          :classSV8="tkpmIpahStatus.SV8 == 1 ? 'filter-green' : 'filter-red'"
          :classSV9="tkpmIpahStatus.SV9 == 1 ? 'filter-green' : 'filter-red'"
          :classSV10="tkpmIpahStatus.SV10 == 1 ? 'filter-green' : 'filter-red'"
          :classSV11="tkpmIpahStatus.SV11 == 1 ? 'filter-green' : 'filter-red'"
          :classSV12="tkpmIpahStatus.SV12 == 1 ? 'filter-green' : 'filter-red'"
          :classSV13="tkpmIpahStatus.SV13 == 1 ? 'filter-green' : 'filter-red'"
          :classSV14="tkpmIpahStatus.SV14 == 1 ? 'filter-green' : 'filter-red'"
          :classSV15="tkpmIpahStatus.SV15 == 1 ? 'filter-green' : 'filter-red'"
          classPump="filter-green"
          :classDosingPump="
            tkpmIpahStatus.DP == 1 ? 'filter-green' : 'filter-red'
          "
          classPumpNaturalWater="filter-green"
          :classPump1="tkpmIpahStatus.P1 == 1 ? 'filter-green' : 'filter-red'"
          :classPump2="tkpmIpahStatus.P2 == 1 ? 'filter-green' : 'filter-red'"
          :classPump3="tkpmIpahStatus.P3 == 1 ? 'filter-green' : 'filter-red'"
          ph="7"
        />
      </div>
      <div v-if="activeStation === 2">
        <tkpmPagohStatusAdmin
          :classSV1="tkpmPagohStatus.SV1 == 1 ? 'filter-green' : 'filter-red'"
          :classSV2="tkpmPagohStatus.SV2 == 1 ? 'filter-green' : 'filter-red'"
          :classSV3="tkpmPagohStatus.SV3 == 1 ? 'filter-green' : 'filter-red'"
          :classSV4="tkpmPagohStatus.SV4 == 1 ? 'filter-green' : 'filter-red'"
          :classSV5="tkpmPagohStatus.SV5 == 1 ? 'filter-green' : 'filter-red'"
          :classSV6="tkpmPagohStatus.SV6 == 1 ? 'filter-green' : 'filter-red'"
          :classSV7="tkpmPagohStatus.SV7 == 1 ? 'filter-green' : 'filter-red'"
          :classSV8="tkpmPagohStatus.SV8 == 1 ? 'filter-green' : 'filter-red'"
          :classSV9="tkpmPagohStatus.SV9 == 1 ? 'filter-green' : 'filter-red'"
          :classSV10="tkpmPagohStatus.SV10 == 1 ? 'filter-green' : 'filter-red'"
          :classSV11="tkpmPagohStatus.SV11 == 1 ? 'filter-green' : 'filter-red'"
          :classSV12="tkpmPagohStatus.SV12 == 1 ? 'filter-green' : 'filter-red'"
          :classSV13="tkpmPagohStatus.SV13 == 1 ? 'filter-green' : 'filter-red'"
          :classSV14="tkpmPagohStatus.SV14 == 1 ? 'filter-green' : 'filter-red'"
          :classDosingPump1="
            tkpmPagohStatus.DP1 == 1 ? 'filter-green' : 'filter-red'
          "
          :classDosingPump2="
            tkpmPagohStatus.DP2 == 1 ? 'filter-green' : 'filter-red'
          "
          :classPump1="tkpmPagohStatus.P1 == 1 ? 'filter-green' : 'filter-red'"
          :classPump2="tkpmPagohStatus.P2 == 1 ? 'filter-green' : 'filter-red'"
          :classPump3="tkpmPagohStatus.P3 == 1 ? 'filter-green' : 'filter-red'"
          :classPumpNaturalWater="
            tkpmPagohStatus.PNW == 1 ? 'filter-green' : 'filter-red'
          "
        />
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

import ipahStatusAdmin from "~/components/Status/Ipah1Status";
import ipah2StatusAdmin from "~/components/Status/Ipah2Status";
import tkpmPagohStatusAdmin from "~/components/Status/TkpmPagohStatus";

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
      stations: state => state.stations,
      ipahStatus: state => state.ipahStatus,
      tkpmIpahStatus: state => state.tkpmIpahStatus,
      tkpmPagohStatus: state => state.tkpmPagohStatus
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
