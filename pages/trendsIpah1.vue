<template>
  <section>
    <PageTitle title="TRENDS" />
    <CardStationTrend :items="items" class="pb-7" />
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import CardStationTrend from "~/components/Trend/CardStationTrendIpah1";
import { mapMutations, mapState } from "vuex";
export default {
  middleware: ["isIpah"],
  computed: {
    ...mapState({
      items: state => state.stations[0].sensorSoil
    })
  },
  components: {
    PageTitle,
    CardStationTrend
  },
  methods: {
    ...mapMutations({
      getHourlyIpah1: "getHourlyIpah1",
      getDailyIpah1: "getDailyIpah1",
      getMonthlyIpah1: "getMonthlyIpah1"
    }),
    getDataHourly: function(
      table,
      station,
      sensorVal,
      indexStation,
      indexSensor
    ) {
      // console.log(this.loggedInUser.deviceID)
      this.$axios
        .$get(`http://139.59.109.48/api/hourly/`, {
          params: {
            // .$get(`/daily/`,{params:{
            table: table,
            station: station,
            val: sensorVal
          }
        })
        .then(response => {
          let data = {};
          let max = [];
          let min = [];
          let avg = [];
          let hour = [];
          response.forEach(item => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            hour.push(item.hour);
          });
          data = { station, indexStation, indexSensor, min, max, avg, hour };
          // console.log(data)
          this.getHourlyIpah1(data);
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDataDaily: function(
      table,
      station,
      sensorVal,
      indexStation,
      indexSensor
    ) {
      this.$axios
        .$get(`http://127.0.0.1:5000/api/daily/`, {
          // .$get(`http://139.59.109.48/api/daily/`, {
          // .$get(`/api/daily`, {
          params: {
            // .$get("/api/weekly/",{params:{
            table: table,
            station: station,
            val: sensorVal
          }
        })
        .then(response => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let day = [];
          response.forEach(item => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            day.push(item.day);
          });
          data = { station, indexStation, indexSensor, min, max, avg, day };
          this.getDailyIpah1(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDataMonthly: function(
      table,
      station,
      sensorVal,
      indexStation,
      indexSensor
    ) {
      this.$axios
        .$get("http://139.59.109.48/api/monthly/", {
          params: {
            // .$get("/api/monthly/",{params:{
            table: table,
            station: station,
            val: sensorVal
          }
        })
        .then(response => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let month = [];
          let monthName = [];

          response.forEach(item => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            monthName.push(item.monthname);
          });
          data = {
            station,
            indexStation,
            indexSensor,
            min,
            max,
            avg,
            monthName
          };
          this.getMonthlyIpah1(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  async mounted() {
    const station = ["311", "321", "331", "341"];
    const val = [
      "soilNitrogen_val",
      "soilPhosphorus_val",
      "soilPotassium_val",
      "soilPH_val",
      "soilEC_val",
      "soilHMD_val",
      "soilTEMP_val"
    ];
    // daily
    for (let i = 0; i < station.length; i++) {
      for (let j = 0; j < val.length; j++) {
        this.getDataHourly("ipah_data", station[i], val[j], i, j);
        this.getDataDaily("ipah_data", station[i], val[j], i, j);
        this.getDataMonthly("ipah_data", station[i], val[j], i, j);
      }
    }
    // weekly
    //  for(let i=0;i<station.length;i++){
    // for (let j = 0; j < val.length; j++) {
    //   this.getDataDaily(this.loggedInUser.deviceID, val[j], j);
    // }
    // }
    //monthly
    // for(let i=0;i<station.length;i++){
    //   for (let j = 0; j < val.length; j++) {
    //     this.getDataMonthly(this.loggedInUser.deviceID, val[j], j);
    //   }
  }
};
</script>

<style scoped></style>
