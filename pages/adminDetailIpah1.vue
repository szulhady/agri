<template>
  <div>
    <v-card class="card-color elevation-12 ">
      <v-card-title class="color mb-4">STATUS</v-card-title>
      <v-row style="display:flex; justify-content:space-evenly">
        <v-col
          v-for="(category, index) in stations.slice(0, -3)"
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
    </v-card>
    <!-- <v-row> -->
    <v-card class="elevation-10 mt-10 py-5">
      <div v-if="activeStation === 0">
        <Layout :detail="detailIpah1" />
      </div>
      <div v-if="activeStation === 1">
        <Layout :detail="detailIpah2" />
      </div>
      <div v-if="activeStation === 2">
        <Layout :detail="detailTkpmPagoh" />
      </div>
    </v-card>
    <!-- </v-row> -->
  </div>
</template>
<script>
import CardTitle from "~/components/CardTitle";

import ipahStatusAdmin from "~/components/Status/Ipah1Status";
import ipah2StatusAdmin from "~/components/Status/Ipah2Status";
import tkpmPagohStatusAdmin from "~/components/Status/TkpmPagohStatus";

import Layout from "~/components/detail/layoutFull";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    CardTitle,
    ipahStatusAdmin,
    ipah2StatusAdmin,
    tkpmPagohStatusAdmin,
    Layout
  },
  data() {
    return {
      // stations: ["IPAH 1", "IPAH 2", "TKPM PAGOH"],
      activeStation: 0,
      activeSensor: 0
    };
  },
  methods: {
    ...mapMutations({
      setDetailIpah1: "setDetailIpah1",
      setDetailIpah2: "setDetailIpah2",
      setDetailTkpmPagoh: "setDetailTkpmPagoh"
    }),
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
    },
    getDetailsIpah1: function() {
      this.$axios
        // .$get("http://127.0.0.1:5000/api/report/ipah1")
        .$get("http://139.59.109.48/api/report/ipah1")
        .then(response => {
          this.setDetailIpah1(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDetailsIpah2: function() {
      this.$axios
        // .$get("http://127.0.0.1:5000/api/report/ipah2")
        .$get("http://139.59.109.48/api/report/ipah2")
        .then(response => {
          this.setDetailIpah2(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDetailsTkpmPagoh: function() {
      this.$axios
        // .$get("http://127.0.0.1:5000/api/report/tkpmPagoh")
        .$get("http://139.59.109.48/api/report/tkpmPagoh")
        .then(response => {
          this.setDetailTkpmPagoh(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapState({
      stations: state => state.stations,
      ipahStatus: state => state.ipahStatus,
      tkpmIpahStatus: state => state.tkpmIpahStatus,
      tkpmPagohStatus: state => state.tkpmPagohStatus,
      detailIpah1: state => state.detailIpah1,
      detailIpah2: state => state.detailIpah2,
      detailTkpmPagoh: state => state.detailTkpmPagoh
    })
  },
  async mounted() {
    this.getDetailsIpah1();
    this.getDetailsIpah2();
    this.getDetailsTkpmPagoh();
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
