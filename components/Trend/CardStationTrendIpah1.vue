<template>
  <div>
    <v-row class="pb-3">
      <v-col
        v-for="(item, index) in items"
        :key="item.title"
        :cols="item.cols"
        sm="3"
      >
        <v-card
          @click="console(index)"
          :id="index"
          class="card card-color  elevation-12 "
        >
          <!-- <v-img :src="item.image" height="180px"></v-img> -->
          <v-card-title>{{ item.block }}</v-card-title>
          <v-card-subtitle>{{ item.description }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="card-color elevation-12">
      <v-card-title class="color">DETAILS</v-card-title>
      <v-row>
        <v-col class="flex-btn">
          <v-btn
            v-for="(sensor, index) in sensorsID"
            :id="sensor"
            :key="sensor"
            @click="console2(sensor, index)"
            class="button card card-color elevation-12"
            style="width:250px"
            >{{ sensors[index] }}</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="padding">
        <v-col cols="6" lg="6" class="left">
          <v-card-subtitle class="center">Current</v-card-subtitle>
          <LineChartSingleData
            id="current"
            :data="trends[index].current[index2]"
            :dailyHour="arrayTime[index]"
            x-axis="Hour"
            :index="index2"
          />
        </v-col>
        <v-col cols="6" lg="6" class="left">
          <v-card-subtitle class="center">Hourly</v-card-subtitle>
          <LineChart
            id="houry"
            :dailyMax="trends[index].hourly[index2].max"
            :dailyMin="trends[index].hourly[index2].min"
            :dailyAvg="trends[index].hourly[index2].avg"
            :dailyHour="trends[index].hourly[index2].hour"
            x-axis="Hour"
            :index="index2"
          />
        </v-col>
        <v-col cols="6" lg="6" class="right">
          <v-card-subtitle class="center">Daily</v-card-subtitle>
          <LineChart
            id="weekly"
            :dailyMax="trends[index].daily[index2].max"
            :dailyMin="trends[index].daily[index2].min"
            :dailyAvg="trends[index].daily[index2].avg"
            :dailyHour="trends[index].daily[index2].day"
            x-axis="Day"
            :index="index2"
          />
        </v-col>

        <v-col cols="6" lg="6" class="left">
          <v-card-subtitle class="center">Monthly</v-card-subtitle>
          <LineChart
            id="monthly"
            :dailyMax="trends[index].monthly[index2].max"
            :dailyMin="trends[index].monthly[index2].min"
            :dailyAvg="trends[index].monthly[index2].avg"
            :dailyHour="trends[index].monthly[index2].monthName"
            x-axis="Month"
            :index="index2"
          />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import LineChart from "~/components/Trend/LineChart";
import LineChartSingleData from "~/components/Trend/LineChartSingleData";

import { mapState } from "vuex";

export default {
  data() {
    return {
      index: "0",
      index2: "0",
      station: "Block 1",
      sensorsID: [
        "SoilNitrogen",
        "SoilPhosphorus",
        "SoilPotassium",
        "SoilPH",
        "SoilEC",
        "SoilMS",
        "SoilTEMP"
      ],
      // sensorsID: ["SoilNPK", "SoilPH", "SoilEC", "SoilMS", "SoilTEMP"],
      sensors: [
        "Soil Nitrogen",
        "Soil Phosphorus",
        "Soil Potassium",
        "Soil pH",
        "Soil EC",
        "Soil MS",
        "Soil Temp"
      ],
      // sensors: ["Soil NPK", "Soil pH", "Soil EC", "Soil MS", "Soil Temp"],
      theme: "blue-theme"
    };
  },

  methods: {
    console: function(index) {
      this.station = this.items[index].title;
      this.index = index;
      const active = document.getElementById(index).classList.add("active");
      for (let i = 0; i <= 3; i++) {
        if (i != index) {
          let deactive = document.getElementById(i).classList.remove("active");
        }
      }
    },

    console2: function(sensor, index) {
      this.index2 = index;
      const active2 = document.getElementById(sensor).classList.add("active");
      for (let i = 0; i <= 6; i++) {
        let Classes = this.sensorsID[i];
        if (Classes != sensor) {
          let deactive = document
            .getElementById(Classes)
            .classList.remove("active");
        }
      }
    }
  },

  computed: {
    ...mapState({
      trends: state => state.trendsIpah1,
      arrayTime: state => state.arrayTime
    })
  },

  props: ["items"],

  components: { LineChart, LineChartSingleData },

  mounted() {
    const active = document.getElementById(0).classList.add("active");
    const active2 = document
      .getElementById("SoilNitrogen")
      .classList.add("active");
  }
};
</script>

<style scoped>
.center {
  justify-content: center;
  background: #11270b !important;
  color: #fff !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.padding {
  padding: 0 1em;
}

.active {
  background: #58be3c !important;
}

.card {
  border-radius: 8px;
}

.card-color {
  /* background: rgb(240, 244, 230); */
  /* background: rgb(238, 248, 248); */
  border-radius: 8px;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.button {
  margin: 15px;
}

.card-detail {
  background-color: rgb(241, 241, 241) !important;
  border-radius: 8px;
}

.flex-btn {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
