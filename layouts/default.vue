<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app class="sidebar">
      <div class="brand">
        <img src="nex-plex-h.png" alt="nex-plex-logo" class="brand-logo" />
      </div>
      <hr class="horizontal-line" />
      <v-list>
        <!-- <v-list> -->
        <div v-for="(item, i) in items" :key="i">
          <v-list-item
            :to="item.to"
            router
            exact
            active-class="active_list"
            v-if="item.state"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>

        <!-- </v-list> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" style="font-weight:bold" />
      <v-spacer />
      <div class="user-name" v-if="loggedInUser">
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <h4 style="color:white">{{ loggedInUser.username }}</h4>
        <!-- <h4>{{loggedInUser.topics}}</h4> -->
      </div>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon v-if="loggedInUser" color="success">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- End of NavBar -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-scroll-y-transition>
      <div class="layer" v-if="rightDrawer" id="layer"></div>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card class="logout elevation-12" v-if="rightDrawer">
        <v-card-title>
          Logout
        </v-card-title>
        <hr class="hr" />
        <v-card-subtitle>
          Are you sure?
        </v-card-subtitle>
        <div class="btn-div">
          <v-btn @click="logout" class="success logout-btn">Yes</v-btn>
          <v-btn @click="cancel" class="error logout-btn">Cancel</v-btn>
        </div>
      </v-card>
    </v-scroll-y-transition>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { IsHigh } from "~/src/class";

import { mapState, mapGetters, mapMutations } from "vuex";
import mqtt from "mqtt";
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      drawer: true,
      right: true,
      rightDrawer: false,
      items: [
        // {
        //   icon: "mdi-view-dashboard",
        //   title: "USER",
        //   state: this.$auth.hasScope("user"),
        //   to: "/detail"
        // },
        {
          icon: "mdi-view-dashboard",
          title: "OVERVIEW",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] !== null,
          to: "/"
        },

        {
          icon: "mdi-desktop-classic",
          title: "CONTROL PANEL",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "ipah1",
          // this.$auth.user.userId == 1,
          to: "/ipahStatus"
        },
        {
          icon: "mdi-desktop-classic",
          title: "CONTROL PANEL",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "ipah2",
          // this.$auth.user.userId == 3,
          to: "/ipah2Status"
        },
        {
          icon: "mdi-desktop-classic",
          title: "CONTROL PANEL",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "tkpmPagoh",
          // this.$auth.user.userId == 8,
          to: "/tkpmPagohStatus"
        },
        {
          icon: "mdi-desktop-classic",
          title: "CONTROL PANEL",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "kongPo",
          // this.$auth.user.userId == 9,
          to: "/kongPoStatus"
        },
        {
          icon: "mdi-view-dashboard",
          title: "OVERVIEW",
          state: this.$auth.hasScope("admin"),
          to: "/overview-admin"
        },
        {
          icon: "mdi-desktop-classic",
          title: "STATUS",
          state: this.$auth.hasScope("admin"),
          to: "/adminStatus"
        },
        // {
        //   icon: "mdi-gauge",
        //   title: "CURRENT",
        //   to: "/current"
        // },
        {
          icon: "mdi-calendar",
          title: "SCHEDULE",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "ipah1",
          // this.$auth.user.userId == 1,
          to: "/scheduleIpah1"
        },
        {
          icon: "mdi-calendar",
          title: "SCHEDULE",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "ipah2",
          // this.$auth.user.userId == 3,
          to: "/scheduleIpah2"
        },
        {
          icon: "mdi-calendar",
          title: "SCHEDULE",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "tkpmPagoh",
          // this.$auth.user.userId == 8,
          to: "/scheduleTkpmPagoh"
        },
        {
          icon: "mdi-calendar",
          title: "SCHEDULE",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "kongPo",
          // this.$auth.user.userId == 9,
          to: "/scheduleKongPo"
        },
        {
          icon: "mdi-chart-areaspline",
          title: "TRENDS",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "ipah1",
          // this.$auth.user.userId == 1,
          to: "/trendsIpah1"
        },
        {
          icon: "mdi-chart-areaspline",
          title: "TRENDS",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "ipah2",
          // this.$auth.user.userId == 3,
          to: "/trendsIpah2"
        },
        {
          icon: "mdi-chart-areaspline",
          title: "TRENDS",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "tkpmPagoh",
          // this.$auth.user.userId == 8,
          to: "/trendsTkpmPagoh"
        },
        {
          icon: "mdi-chart-areaspline",
          title: "TRENDS",
          state:
            this.$auth.hasScope("user") &&
            this.$auth.$state.user.station[0] == "kongPo",
          // this.$auth.user.userId == 8,
          to: "/trendsKongPo"
        }
      ],
      miniVariant: false,
      title: "SMART FERTIGATION DASHBOARD",
      connection: {
        host: "tron.airmode.live",
        port: 8083,
        endpoint: "/mqtt",
        clean: true, // Reserved session
        connectTimeout: 4000, // Time out
        reconnectPeriod: 4000 // Reconnection interval
      },
      subscription: {
        // topic: "geyzer/#",
        topic: "nexplex/sense/#",
        qos: 0
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 }
      ],
      client: {
        connected: false
      },
      subscribeSuccess: false
    };
  },
  methods: {
    ...mapMutations({
      setActiveUser: "setActiveUser",
      getCurrentDataIpah1: "getCurrentDataIpah1",
      getCurrentTimeArrayIpah1: "getCurrentTimeArrayIpah1",
      getCurrentDataArrayIpah1: "getCurrentDataArrayIpah1",
      getCurrentDataIpah2: "getCurrentDataIpah2",
      getCurrentTimeArrayIpah2: "getCurrentTimeArrayIpah2",
      getCurrentDataArrayIpah2: "getCurrentDataArrayIpah2",
      getCurrentDataTkpmPagoh: "getCurrentDataTkpmPagoh",
      getCurrentTimeArrayTkpmPagoh: "getCurrentTimeArrayTkpmPagoh",
      getCurrentDataArrayTkpmPagoh: "getCurrentDataArrayTkpmPagoh",
      getCurrentDataKongPo: "getCurrentDataKongPo",
      getCurrentTimeArrayKongPo: "getCurrentTimeArrayKongPo",
      getCurrentDataArrayKongPo: "getCurrentDataArrayKongPo",

      checkWarning: "checkWarning",
      countWarningsIpah: "countWarningsIpah",
      countWarningsTkpmIpah: "countWarningsTkpmIpah",
      countWarningsTkpmPagoh: "countWarningsTkpmPagoh",
      stringArray: "stringArray",
      ipahStatus: "ipahStatus",
      SET_WEATHER: "SET_WEATHER"
    }),
    logout: async function() {
      await this.$auth.logout();
      this.doUnSubscribe();
      // this.resetState()
      this.rightDrawer = false;
    },
    cancel: function() {
      this.rightDrawer = false;
    },
    track: function() {
      window.onclick = event => {
        const modal = document.getElementById("layer");
        if (event.target == modal) {
          this.rightDrawer = false;
        }
      };
    },
    addDataIpah1: function(index) {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      this.realTime = h + ":" + m + ":" + s;
      const data = { index: index, realTime: this.realTime };
      this.getCurrentTimeArrayIpah1(data);
    },
    addDataIpah2: function(index) {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      this.realTime = h + ":" + m + ":" + s;
      const data = { index: index, realTime: this.realTime };
      this.getCurrentTimeArrayIpah2(data);
    },
    addDataTkpmPagoh: function(index) {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      this.realTime = h + ":" + m + ":" + s;
      const data = { index: index, realTime: this.realTime };
      this.getCurrentTimeArrayTkpmPagoh(data);
    },
    // Create connection
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `wss://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        if (topic === "nexplex/sense/ipah/block1") {
          message = JSON.parse(message);
          // console.log("block 1", message, new Date());
          let payload = {
            station: 0,
            block: 0,
            soilNitrogen: message.NTR,
            soilPhosphorus: message.PHOS,
            soilPotassium: message.POT,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            soilTEMP: message.TMP
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 0, 0, " Nitrogen", message.NTR, 20);
          this.check(0, 0, 1, " Phosphorus", message.PHOS, 20);
          this.check(0, 0, 2, " Potassium", message.POT, 20);
          this.check(0, 0, 3, " pH", message.pH, 7);
          this.check(0, 0, 4, " EC", message.EC, 10);
          this.check(0, 0, 5, " MS", message.HMD, 10);
          this.check(0, 0, 6, " Temp", message.TMP, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 0
          };
          this.stringArray(payloadStringArray);
          const val = [
            "soilNitrogen",
            "soilPhosphorus",
            "soilPotassium",
            "soilPH",
            "soilEC",
            "soilMS",
            "soilTEMP"
          ];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 0;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah1(data);
          }
          this.addDataIpah1(0);

          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }

        if (topic === "nexplex/sense/ipah/block2") {
          message = JSON.parse(message);
          // console.log("block 2", message, new Date());
          let payload = {
            station: 0,
            block: 1,
            soilNitrogen: message.NTR,
            soilPhosphorus: message.PHOS,
            soilPotassium: message.POT,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            soilTEMP: message.TMP
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 1, 0, " Nitrogen", message.NTR, 10);
          this.check(0, 1, 1, " Phosphorus", message.PHOS, 10);
          this.check(0, 1, 2, " Potassium", message.POT, 10);
          this.check(0, 1, 3, " pH", message.pH, 7);
          this.check(0, 1, 4, " EC", message.EC, 10);
          this.check(0, 1, 5, " MS", message.HMD, 10);
          this.check(0, 1, 6, " Temp", message.TMP, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 1
          };
          this.stringArray(payloadStringArray);
          const val = [
            "soilNitrogen",
            "soilPhosphorus",
            "soilPotassium",
            "soilPH",
            "soilEC",
            "soilMS",
            "soilTEMP"
          ];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 1;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah1(data);
          }
          this.addDataIpah1(1);
          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }

        if (topic === "nexplex/sense/ipah/block3") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            block: 2,
            soilNitrogen: message.NTR,
            soilPhosphorus: message.PHOS,
            soilPotassium: message.POT,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            soilTEMP: message.TMP
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 2, 0, " Nitrogen", message.NTR, 10);
          this.check(0, 2, 1, " Phosphorus", message.PHOS, 10);
          this.check(0, 2, 2, " Potassium", message.POT, 10);
          this.check(0, 2, 3, " pH", message.pH, 7);
          this.check(0, 2, 4, " EC", message.EC, 10);
          this.check(0, 2, 5, " MS", message.HMD, 10);
          this.check(0, 2, 6, " Temp", message.TMP, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 2
          };
          this.stringArray(payloadStringArray);
          const val = [
            "soilNitrogen",
            "soilPhosphorus",
            "soilPotassium",
            "soilPH",
            "soilEC",
            "soilMS",
            "soilTEMP"
          ];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 2;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah1(data);
          }
          this.addDataIpah1(2);
          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }

        if (topic === "nexplex/sense/ipah/block4") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            block: 3,
            soilNitrogen: message.NTR,
            soilPhosphorus: message.PHOS,
            soilPotassium: message.POT,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            soilTEMP: message.TMP
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 3, 0, " Nitrogen", message.NTR, 10);
          this.check(0, 3, 1, " Phosphorus", message.PHOS, 10);
          this.check(0, 3, 2, " Potassium", message.POT, 10);
          this.check(0, 3, 3, " pH", message.pH, 7);
          this.check(0, 3, 4, " EC", message.EC, 10);
          this.check(0, 3, 5, " MS", message.HMD, 10);
          this.check(0, 3, 6, " Temp", message.TMP, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 3
          };
          this.stringArray(payloadStringArray);
          const val = [
            "soilNitrogen",
            "soilPhosphorus",
            "soilPotassium",
            "soilPH",
            "soilEC",
            "soilMS",
            "soilTEMP"
          ];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 3;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah1(data);
          }
          this.addDataIpah1(3);
          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }

        if (topic === "nexplex/sense/tkpmIpah/block1") {
          message = JSON.parse(message);
          let payload = {
            station: 1,
            block: 0,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD
          };
          this.getCurrentDataIpah2(payload);

          this.check(1, 0, 0, " pH", message.pH, 7);
          this.check(1, 0, 1, " EC", message.EC, 10);
          this.check(1, 0, 2, " SM", message.HMD, 10);

          const payloadStringArray = {
            indexStation: 1,
            indexBlock: 0
          };
          this.stringArray(payloadStringArray);

          const val = ["soilPH", "soilEC", "soilMS"];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 0;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah2(data);
          }
          this.addDataIpah2(0);
          let data = { station: 1, block: 3 };
          this.countWarningsTkpmIpah(data);
        }

        if (topic === "nexplex/sense/tkpmIpah/block2") {
          message = JSON.parse(message);
          let payload = {
            station: 1,
            block: 1,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD
          };
          this.getCurrentDataIpah2(payload);
          this.check(1, 1, 0, " pH", message.pH, 7);
          this.check(1, 1, 1, " EC", message.EC, 10);
          this.check(1, 1, 2, " SM", message.HMD, 10);

          const payloadStringArray = {
            indexStation: 1,
            indexBlock: 1
          };
          this.stringArray(payloadStringArray);
          const val = ["soilPH", "soilEC", "soilMS"];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 1;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah2(data);
          }
          this.addDataIpah2(1);
          let data = { station: 1, block: 3 };
          this.countWarningsTkpmIpah(data);
        }

        if (topic === "nexplex/sense/tkpmIpah/block3") {
          message = JSON.parse(message);
          let payload = {
            station: 1,
            block: 2,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD
          };
          this.getCurrentDataIpah2(payload);
          this.check(1, 2, 0, " pH", message.pH, 7);
          this.check(1, 2, 1, " EC", message.EC, 10);
          this.check(1, 2, 2, " SM", message.HMD, 0.5);

          const payloadStringArray = {
            indexStation: 1,
            indexBlock: 2
          };
          this.stringArray(payloadStringArray);
          const val = ["soilPH", "soilEC", "soilMS"];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 2;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayIpah2(data);
          }
          this.addDataIpah2(2);
          let data = { station: 1, block: 3 };
          this.countWarningsTkpmIpah(data);
        }

        if (topic === "nexplex/sense/tkpmPagoh/block1") {
          message = JSON.parse(message);
          let payload = {
            station: 2,
            block: 0,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD
          };
          this.getCurrentDataTkpmPagoh(payload);
          this.check(2, 0, 0, " pH", message.pH, 7);
          this.check(2, 0, 1, " EC", message.EC, 0.2);
          this.check(2, 0, 2, " SM", message.HMD, 10);

          const payloadStringArray = {
            indexStation: 2,
            indexBlock: 0
          };
          this.stringArray(payloadStringArray);

          const val = ["soilEC", "soilPH", "soilMS"];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 0;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayTkpmPagoh(data);
          }
          this.addDataTkpmPagoh(0);
          let data = { station: 2, block: 3 };
          this.countWarningsTkpmPagoh(data);
        }

        if (topic === "nexplex/sense/tkpmPagoh/block2") {
          message = JSON.parse(message);
          let payload = {
            station: 2,
            block: 1,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD
          };
          this.getCurrentDataTkpmPagoh(payload);
          this.check(2, 1, 0, " pH", message.pH, 7);
          this.check(2, 1, 1, " EC", message.EC, 10);
          this.check(2, 1, 2, " SM", message.HMD, 10);

          const payloadStringArray = {
            indexStation: 2,
            indexBlock: 1
          };
          this.stringArray(payloadStringArray);
          const val = ["soilPH", "soilEC", "soilMS"];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 1;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayTkpmPagoh(data);
          }
          this.addDataTkpmPagoh(1);
          let data = { station: 2, block: 3 };
          this.countWarningsTkpmPagoh(data);
        }

        if (topic === "nexplex/sense/tkpmPagoh/block3") {
          message = JSON.parse(message);
          let payload = {
            station: 2,
            block: 2,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD
          };
          this.getCurrentDataTkpmPagoh(payload);
          this.check(2, 2, 0, " pH", message.pH, 7);
          this.check(2, 2, 1, " EC", message.EC, 10);
          this.check(2, 2, 2, " SM", message.HMD, 10);

          const payloadStringArray = {
            indexStation: 2,
            indexBlock: 2
          };
          this.stringArray(payloadStringArray);
          const val = ["soilPH", "soilEC", "soilMS"];
          // //currentTrend
          for (let j = 0; j < val.length; j++) {
            let sensor = val[j];
            let indexStation = 2;
            let indexSensor = j;
            let data = { sensor, indexStation, indexSensor };
            this.getCurrentDataArrayTkpmPagoh(data);
          }
          this.addDataTkpmPagoh(2);
          let data = { station: 2, block: 3 };
          this.countWarningsTkpmPagoh(data);
        }

        if (topic === "nexplex/sense") {
          message = JSON.parse(message);
          console.log(message);
          if (message.ID == 301) {
            let payload1 = {
              station: 3,
              block: 0,
              soilNitrogen: message.NTR1,
              soilPhosphorus: message.PHOS1,
              soilPotassium: message.POT1,
              soilPH: message.pH1,
              soilEC: message.EC1,
              soilMS: message.HMD1
            };
            let payload2 = {
              station: 3,
              block: 1,
              soilNitrogen: message.NTR2,
              soilPhosphorus: message.PHOS2,
              soilPotassium: message.POT2,
              soilPH: message.pH2,
              soilEC: message.EC2,
              soilMS: message.HMD2
            };
            this.getCurrentDataKongPo(payload1);
            this.getCurrentDataKongPo(payload2);
            this.check(3, 0, 0, " Nitrogen", message.NTR1, 20);
            this.check(3, 0, 1, " Phosphorus", message.PHOS1, 20);
            this.check(3, 0, 2, " Potassium", message.POT1, 20);
            this.check(3, 0, 3, " pH", message.pH1, 7);
            this.check(3, 0, 4, " EC", message.EC1, 10);
            this.check(3, 0, 5, " MS", message.HMD1, 10);

            this.check(3, 1, 0, " Nitrogen", message.NTR2, 20);
            this.check(3, 1, 1, " Phosphorus", message.PHOS2, 20);
            this.check(3, 1, 2, " Potassium", message.POT2, 20);
            this.check(3, 1, 3, " pH", message.pH2, 7);
            this.check(3, 1, 4, " EC", message.EC2, 10);
            this.check(3, 1, 5, " MS", message.HMD2, 10);

            const payloadStringArray = {
              indexStation: 0,
              indexBlock: 0
            };
            this.stringArray(payloadStringArray);
            const val = [
              "soilNitrogen",
              "soilPhosphorus",
              "soilPotassium",
              "soilPH",
              "soilEC",
              "soilMS",
              "soilTEMP"
            ];
            // //currentTrend
            for (let j = 0; j < val.length; j++) {
              let sensor = val[j];
              let indexStation = 0;
              let indexSensor = j;
              let data = { sensor, indexStation, indexSensor };
              this.getCurrentDataArrayIpah1(data);
            }
          }
        }
      });
    },
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          return;
        }
        this.subscribeSuccess = true;
      });
    },
    doUnSubscribe() {
      const { topic } = this.subscription;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    check(indexStation, indexBlock, indexSensor, sensor, value, maxValue) {
      if (value > maxValue) {
        const warningString = sensor + " is high";
        const payload = {
          ...new IsHigh(indexStation, indexBlock, indexSensor, true, 1),
          warningString: warningString
        };
        this.checkWarning(payload);
      } else {
        const warningString = null;
        const payload = {
          ...new IsHigh(indexStation, indexBlock, indexSensor, false, 0),
          warningString: warningString
        };
        this.checkWarning(payload);
      }
    },
    getWeatherIpah1: function() {
      this.$axios
        .$get("http://127.0.0.1:5000/api/openWeatherMap/ipah1")
        .then(response => {
          console.log(response);
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getWeatherIpah2: function() {
      this.$axios
        .$get("http://127.0.0.1:5000/api/openWeatherMap/ipah2")
        .then(response => {
          console.log(response);
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getWeatherPagoh: function() {
      this.$axios
        .$get("http://127.0.0.1:5000/api/openWeatherMap/tkpmPagoh")
        .then(response => {
          console.log(response);
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getWeatherKongPo: function() {
      this.$axios
        .$get("http://127.0.0.1:5000/api/openWeatherMap/kongPo")
        .then(response => {
          console.log(response);
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"]),
    ...mapState({
      weather: state => state.weatherIpah
    })
  },
  async created() {
    // this.$store.dispatch("setForecasts");
    this.setActiveUser();
    // this.$store.dispatch("setForecasts");
  },
  async mounted() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
    this.createConnection();
    this.doSubscribe();
    if (this.$auth.$state.user.station[0] == "ipah1") {
      this.getWeatherIpah1();
    } else if (this.$auth.$state.user.station[0] == "ipah2") {
      this.getWeatherIpah2();
    } else if (this.$auth.$state.user.station[0] == "tkpmPagoh") {
      this.getWeatherPagoh();
    } else if (this.$auth.$state.user.station[0] == "kongPo") {
      this.getWeatherKongPo();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
/* Sidebar */
.v-navigation-drawer {
  max-height: 100vh !important;
  /* width: 250px !important; */
}
.brand {
  display: flex;
}
.brand-logo {
  padding-top: 25px;
  padding-bottom: 10px;
  margin: auto;
  width: 50%;
}

.horizontal-line {
  margin: 5px 50px 10px 50px;
}

.v-list {
  padding: 10px 0px;
}
.v-list-item {
  margin: 0 20px 15px 20px;
}
.v-list-item .v-list-item__title {
  font-family: "Montserrat", sans-serif;
  font-size: 0.85rem;
  color: #f0f2f0;
}
.v-icon.v-icon {
  color: #f0f2f0;
}
.v-list-item--active .v-list-item__title {
  color: #71b340 !important;
}
.v-list-item--active .v-icon {
  color: #71b340 !important;
}
/* End of sidebar */

/* Table */
tbody tr:nth-of-type(even) {
  /* background-color:  rgb(240,244,230); */
  /* background-color: rgb(238,248,248); */
  /* background-color: rgb(238, 248, 248); */
  background-color: rgb(255, 255, 255);
}

tbody tr:nth-of-type(odd) {
  /* background-color: rgb(255, 255, 255); */
  background-color: #83aa653d;
}
.v-data-table__wrapper {
  border-bottom-left-radius: 8px !important ;
  border-bottom-right-radius: 8px !important ;
}

.v-data-table-header {
  border-top-left-radius: 8px !important ;
  border-top-right-radius: 8px !important ;
  background-color: rgb(255, 255, 255);
  /* background-color: rgb(238,248,248); */
}
.v-data-footer {
  background-color: rgb(238, 248, 248) !important;
  border-radius: 8px;
}
/* End of table */
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #395524;
  color: aliceblue;
}

/* logout */
.logout {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 300px;
}

.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.btn-div {
  display: flex;
  justify-content: flex-end;
}

.logout-btn {
  width: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* layer */

.layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 999;
}

.v-messages__message {
  font-size: 1rem !important;
  letter-spacing: 2px;
  color: gray;
}

.v-messages__message {
  line-height: 20px;
}

.v-list-item--highlighted {
  background: #3c5a14;
  /* color: green; */
}
.v-menu__content .v-list-item--highlighted .v-list-item__title {
  color: aliceblue !important;
}
.v-menu__content .v-list-item__title {
  color: black !important;
}
</style>
