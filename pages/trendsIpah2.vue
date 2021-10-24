<template>
  <section>
    <PageTitle title="TRENDS" />
    <CardStationTrend :items="items" class="pb-7" />
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import CardStationTrend from "~/components/Trend/CardStationTrendIpah2";
import { mapMutations, mapState } from "vuex";
export default {
  middleware: ["isTkpmIpah"],
  computed: {
    ...mapState({
      items: state => state.stations[1].sensorSoil
    })
  },
  components: {
    PageTitle,
    CardStationTrend
  },
  methods: {
    ...mapMutations({
      getHourlyIpah2: "getHourlyIpah2",
      getDailyIpah2: "getDailyIpah2",
      getMonthlyIpah2: "getMonthlyIpah2"
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
          this.getHourlyIpah2(data);
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
        .$get(`http://139.59.109.48/api/daily/`, {
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
          this.getDailyIpah2(data);
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
          this.getMonthlyIpah2(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  async mounted() {
    const station = ["312", "322", "332"];
    const val = ["soilPH_val", "soilEC_val", "soilMS_val"];
    // daily
    for (let i = 0; i < station.length; i++) {
      for (let j = 0; j < val.length; j++) {
        this.getDataHourly("tkmpipah_data", station[i], val[j], i, j);
        this.getDataDaily("tkmpipah_data", station[i], val[j], i, j);
        this.getDataMonthly("tkpmipah_data", station[i], val[j], i, j);
      }
    }
  }
};
</script>

<style></style>
