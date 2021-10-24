<template>
  <div>
    <v-card class="card-color elevation-12 ">
      <v-card-title class="color mb-4">REAL-TIME DATA</v-card-title>
      <v-row style="display:flex; justify-content:space-evenly">
        <v-col
          v-for="(category, index) in stations[activeUser].sensorType"
          :key="index"
          cols="4"
          class="mb-3 categories-container"
        >
          <v-card
            @click="button(index)"
            :class="{ active: index === activeView }"
            class="category elevation-10"
          >
            <v-img
              :src="category.image"
              class="station-img"
              max-height="150px"
              style="object-fit: cover;"
            ></v-img>
            <v-card-title class="button" style="justify-content:center">
              {{ category.name }}
            </v-card-title>
          </v-card>
          <!-- <v-card @click="button1">
            <v-card-title
              class="button"
              style="justify-content:center"
              active-class="success"
            >
              Soil
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card @click="button2">
            <v-card-title class="button" style="justify-content:center">
              Leaf
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card @click="button3">
            <v-card-title class="button" style="justify-content:center">
              Water
            </v-card-title>
          </v-card> -->
        </v-col>
      </v-row>
      <!-- <CardDataSoil v-if="activeView === 0" :items="items" /> -->
      <CardDataSoil
        v-if="activeView === 0"
        :items="items"
        :stations="stations[activeUser].sensorSoil"
      />
      <!-- <CardDataLeaf v-if="activeView === 1" :items="items" /> -->
      <CardDataWater
        v-if="activeView === 1"
        :items="items"
        :stations="stations[activeUser].sensorWater"
      />
      <!-- <CardDataWater v-if="activeView === 1" :items="items" /> -->
    </v-card>
  </div>
</template>
<script>
import CardTitle from "~/components/CardTitle";
import CardDataSoil from "~/components/Overview/CardDataSoil";
import CardDataLeaf from "~/components/Overview/CardDataLeaf";
import CardDataWater from "~/components/Overview/CardDataWater";

import { mapState } from "vuex";

export default {
  components: {
    CardTitle,
    CardDataSoil,
    CardDataLeaf,
    CardDataWater
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
          WaterLevel: 0,
          WaterPH: 0,
          WaterEC: 0
        }
      ],
      categories: ["Soil", "Nutrient House"],
      activeView: 0
    };
  },
  methods: {
    button: function(index) {
      console.log("button 1");
      this.activeView = index;
    }
  },
  computed: {
    ...mapState({
      activeUser: state => state.activeUser,
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
