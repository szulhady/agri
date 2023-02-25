<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="sidebar"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
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
    <v-app-bar fixed app class="app-bar-top" v-if="$vuetify.breakpoint.mdAndUp">
      <v-toolbar-title
        class="title-container"
        v-text="title"
        style="font-weight: bold"
      />
      <v-spacer />
      <div class="user-name-container" v-if="loggedInUser">
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <h4 class="user-name-title" style="color: white">
          {{ loggedInUser.username }}
        </h4>
        <!-- <h4>{{loggedInUser.topics}}</h4> -->
      </div>
      <div class="logout-container">
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon v-if="loggedInUser" color="success">mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- End of NavBar -->

    <v-navigation-drawer
      v-model="drawer2"
      fixed
      app
      class="sidebar"
      temporary
      v-if="$vuetify.breakpoint.mdAndDown"
    >
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
    <v-app-bar fixed app v-if="$vuetify.breakpoint.mdAndDown">
      <v-app-bar-nav-icon
        @click.stop="drawer2 = !drawer2"
        style="color: white"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" style="font-weight: bold" />
      <v-spacer />
      <div class="user-name" v-if="loggedInUser">
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <h4 style="color: white">{{ loggedInUser.username }}</h4>
        <!-- <h4>{{loggedInUser.topics}}</h4> -->
      </div>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon v-if="loggedInUser" color="success">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

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
        <v-card-title> Logout </v-card-title>
        <hr class="hr" />
        <v-card-subtitle> Are you sure? </v-card-subtitle>
        <div class="btn-div">
          <v-btn @click="logout" class="success logout-btn">Yes</v-btn>
          <v-btn @click="cancel" class="error logout-btn">Cancel</v-btn>
        </div>
      </v-card>
    </v-scroll-y-transition>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="300">
        <v-card>
          <v-card-title class="text-h5"> Alert </v-card-title>
          <hr class="hr" />
          <v-card-subtitle style="padding-top: 10px"
            >Cannot connect to server. There are several cause for this problem
            :</v-card-subtitle
          >
          <v-card-subtitle
            style="margin-top: -10px; justify-contents: center; display: flex"
            ><span
              style="font-weight: bold; font-size: 25px; padding-right: 10px"
              >•</span
            >
            No internet connection</v-card-subtitle
          >
          <v-card-subtitle
            style="margin-top: -10px; justify-contents: center; display: flex"
            ><span
              style="font-weight: bold; font-size: 25px; padding-right: 10px"
              >•</span
            >
            Server error (Please contact admin to resolve the
            issue)</v-card-subtitle
          >
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="success logout-btn" @click="dialog = false">
              Okay
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import { IsHigh } from "~/src/class";

import { mapState, mapGetters, mapMutations } from "vuex";
import mqtt from "mqtt";
export default {
  data() {
    return {
      dialog: false,
      clipped: false,
      fixed: false,
      drawer: true,
      drawer2: false,
      right: true,
      rightDrawer: false,
      items: [
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
        {
          icon: "mdi-book-open-variant",
          title: "DETAILS",
          state: this.$auth.hasScope("admin"),
          to: "/adminDetail"
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
        }
        // {
        //   icon: "mdi-chart-areaspline",
        //   title: "TRENDS",
        //   state:
        //     this.$auth.hasScope("user") &&
        //     this.$auth.$state.user.station[0] == "ipah1",
        //   // this.$auth.user.userId == 1,
        //   to: "/trendsIpah1"
        // },
        // {
        //   icon: "mdi-chart-areaspline",
        //   title: "TRENDS",
        //   state:
        //     this.$auth.hasScope("user") &&
        //     this.$auth.$state.user.station[0] == "ipah2",
        //   // this.$auth.user.userId == 3,
        //   to: "/trendsIpah2"
        // },
        // {
        //   icon: "mdi-chart-areaspline",
        //   title: "TRENDS",
        //   state:
        //     this.$auth.hasScope("user") &&
        //     this.$auth.$state.user.station[0] == "tkpmPagoh",
        //   // this.$auth.user.userId == 8,
        //   to: "/trendsTkpmPagoh"
        // },
        // {
        //   icon: "mdi-chart-areaspline",
        //   title: "TRENDS",
        //   state:
        //     this.$auth.hasScope("user") &&
        //     this.$auth.$state.user.station[0] == "kongPo",
        //   // this.$auth.user.userId == 8,
        //   to: "/trendsKongPo"
        // },
        // {
        //   icon: "mdi-book-open-variant",
        //   title: "INPUT",
        //   state: this.$auth.hasScope("user"),
        //   to: "/detail"
        // }
      ],
      miniVariant: false,
      title: "SMART FERTIGATION DASHBOARD",
      connection: {
        host: this.$auth.$state.user.server_mqtt,
        port: 8083,
        endpoint: "/mqtt",
        clean: true, // Reserved session
        connectTimeout: 3000, // Time out
        reconnectPeriod: 3000 // Reconnection interval
      },
      subscription: {
        // topic: "geyzer/#",
        topic: [
          "nexplex/sense/#",
          "new/nexplex/#",
          "np/s/#",
          "new/nexplex/#",
          "new2/nexplex/#",
          "nexplex/sense",
          "kongkong/topic/#",
          "qwazx/np/tkpmIpah/#"
        ],
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
      getCurrentDataNutrientIpah1: "getCurrentDataNutrientIpah1",
      getCurrentDataNutrientIpah1EC: "getCurrentDataNutrientIpah1EC",
      getCurrentTimeArrayIpah1: "getCurrentTimeArrayIpah1",
      getCurrentDataArrayIpah1: "getCurrentDataArrayIpah1",
      getCurrentDataIpah2: "getCurrentDataIpah2",
      getCurrentDataNutrientIpah2: "getCurrentDataNutrientIpah2",
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
      SET_WEATHER: "SET_WEATHER",
      setDetailActive: "setDetailActive"
    }),
    logout: async function() {
      await this.$auth.logout();
      this.setDetailActive("");
      this.doUnSubscribe();
      // this.resetState()
      this.rightDrawer = false;
    },
    cancel: function() {
      this.rightDrawer = false;
      this.dialog2 = true;
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
      // const connectUrl = `wss:${host}:${port}${endpoint}`;
      // const connectUrl = `ws://www.txio.live:8083/mqtt`;
      // const connectUrl = `ws://txio.uitm.edu.my:8083/mqtt`;
      const connectUrl = `${host}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }

      this.client.on("connect", () => {
        console.log("Connection succeeded!");
        this.dialog = false;
        console.log("here");
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
      });
      this.client.on("close", () => {
        this.dialog = true;
      });
      this.client.stream.on("error", error => {
        // This does trigger when the URL is invalid
        console.error("Connection error:", error);
        this.dialog = true;
      });
      this.client.on("message", (topic, message) => {
        if (topic === "new2/nexplex/ipah/sense/block1") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            block: 0,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 0, 0, " Nitrogen", message.nt, 20);
          this.check(0, 0, 1, " Phosphorus", message.ps, 20);
          this.check(0, 0, 2, " Potassium", message.po, 20);
          this.check(0, 0, 3, " pH", message.ph, 7);
          this.check(0, 0, 4, " EC", message.ec, 10);
          this.check(0, 0, 5, " Humidity", message.mo, 10);
          this.check(0, 0, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 0
          };
          this.stringArray(payloadStringArray);
          // const val = [
          //   "soilNitrogen",
          //   "soilPhosphorus",
          //   "soilPotassium",
          //   "soilPH",
          //   "soilEC",
          //   "soilMS",
          //   "soilTEMP"
          // ];
          // // //currentTrend
          // for (let j = 0; j < val.length; j++) {
          //   let sensor = val[j];
          //   let indexStation = 0;
          //   let indexSensor = j;
          //   let data = { sensor, indexStation, indexSensor };
          //   this.getCurrentDataArrayIpah1(data);
          // }
          this.addDataIpah1(0);

          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }

        if (topic === "new3/nexplex/ipah/sense/block1") {
          message = JSON.parse(message);
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
          // this.addDataIpah1(0);
        }

        if (topic === "new2/nexplex/ipah/sense/block2") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            block: 1,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 1, 0, " Nitrogen", message.nt, 10);
          this.check(0, 1, 1, " Phosphorus", message.ps, 10);
          this.check(0, 1, 2, " Potassium", message.po, 10);
          this.check(0, 1, 3, " pH", message.ph, 7);
          this.check(0, 1, 4, " EC", message.ec, 10);
          this.check(0, 1, 5, " Humidity", message.mo, 10);
          this.check(0, 1, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 1
          };
          this.stringArray(payloadStringArray);
          this.addDataIpah1(1);
          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }
        if (topic === "new3/nexplex/ipah/sense/block2") {
          message = JSON.parse(message);
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
        }

        if (topic === "new2/nexplex/ipah/sense/block3") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            block: 2,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 2, 0, " Nitrogen", message.nt, 10);
          this.check(0, 2, 1, " Phosphorus", message.ps, 10);
          this.check(0, 2, 2, " Potassium", message.po, 10);
          this.check(0, 2, 3, " pH", message.ph, 7);
          this.check(0, 2, 4, " EC", message.ec, 10);
          this.check(0, 2, 5, " Humidity", message.mo, 10);
          this.check(0, 2, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 2
          };
          this.stringArray(payloadStringArray);
          this.addDataIpah1(2);
          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }
        if (topic === "new3/nexplex/ipah/sense/block3") {
          message = JSON.parse(message);
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
        }

        if (topic === "new2/nexplex/ipah/sense/block4") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            block: 3,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah1(payload);
          this.check(0, 3, 0, " Nitrogen", message.nt, 10);
          this.check(0, 3, 1, " Phosphorus", message.ps, 10);
          this.check(0, 3, 2, " Potassium", message.po, 10);
          this.check(0, 3, 3, " pH", message.ph, 7);
          this.check(0, 3, 4, " EC", message.ec, 10);
          this.check(0, 3, 5, " Humidity", message.mo, 10);
          this.check(0, 3, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 0,
            indexBlock: 3
          };
          this.stringArray(payloadStringArray);
          this.addDataIpah1(3);
          let data = { station: 0, block: 4 };
          this.countWarningsIpah(data);
        }
        if (topic === "new3/nexplex/ipah/sense/block4") {
          message = JSON.parse(message);
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
        }

        if (topic === "np/s/ipah/n") {
          message = JSON.parse(message);
          let payload = {
            station: 0,
            waterTankLevel: message.WL1,
            fertilizerTankLevel: message.WL2,
            pH: message.pH
            // EC: message.EC
          };
          // console.log(message);
          // console.log(payload);
          this.getCurrentDataNutrientIpah1(payload);
        }

        if (topic == "nexplex/sense") {
          // console.log("here");
          message = JSON.parse(message);
          console.log(message);
          if (message.TID == 381) {
            let payload = {
              station: 0,
              EC: message.EC
            };
            console.log(payload);
            this.getCurrentDataNutrientIpah1EC(payload);
          }
        }

        if (topic === "new2/nexplex/tkpmIpah/sense/block1/retain") {
          message = JSON.parse(message);
          let payload = {
            station: 1,
            block: 0,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah2(payload);
          this.check(1, 0, 0, " Nitrogen", message.nt, 20);
          this.check(1, 0, 1, " Phosphorus", message.ps, 20);
          this.check(1, 0, 2, " Potassium", message.po, 20);
          this.check(1, 0, 3, " pH", message.ph, 7);
          this.check(1, 0, 4, " EC", message.ec, 10);
          this.check(1, 0, 5, " Humidity", message.mo, 10);
          this.check(1, 0, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 1,
            indexBlock: 0
          };
          this.stringArray(payloadStringArray);
          this.addDataIpah2(0);

          let data = { station: 1, block: 3 };
          this.countWarningsTkpmIpah(data);
        }

        if (topic === "new3/nexplex/tkpmIpah/sense/block1") {
          message = JSON.parse(message);
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
            this.getCurrentDataArrayIpah2(data);
          }
          // this.addDataIpah1(0);
        }

        // if (topic === "new2/nexplex/tkpmIpah/sense/block1/retain") {
        //   // if (topic === "nexplex/sense/tkpmIpah/block1/retain") {
        //   message = JSON.parse(message);
        //   console.log(message);
        //   let payload = {
        //     station: 1,
        //     block: 0,
        //     soilPH: message.ph,
        //     soilEC: message.ec,
        //     soilMS: message.mo,
        //     ts: message.ts
        //   };
        //   this.getCurrentDataIpah2(payload);

        //   this.check(1, 0, 0, " pH", message.ph, 7);
        //   this.check(1, 0, 1, " EC", message.ec, 10);
        //   this.check(1, 0, 2, " Humidity", message.mo, 10);

        //   const payloadStringArray = {
        //     indexStation: 1,
        //     indexBlock: 0
        //   };
        //   this.stringArray(payloadStringArray);

        //   const val = ["soilPH", "soilEC", "soilMS"];
        //   // //currentTrend
        //   for (let j = 0; j < val.length; j++) {
        //     let sensor = val[j];
        //     let indexStation = 0;
        //     let indexSensor = j;
        //     let data = { sensor, indexStation, indexSensor };
        //     this.getCurrentDataArrayIpah2(data);
        //   }
        //   this.addDataIpah2(0);
        //   let data = { station: 1, block: 3 };
        //   this.countWarningsTkpmIpah(data);
        // }

        if (topic === "new2/nexplex/tkpmIpah/sense/block2/retain") {
          message = JSON.parse(message);
          let payload = {
            station: 1,
            block: 1,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah2(payload);
          this.check(1, 1, 0, " Nitrogen", message.nt, 20);
          this.check(1, 1, 1, " Phosphorus", message.ps, 20);
          this.check(1, 1, 2, " Potassium", message.po, 20);
          this.check(1, 1, 3, " pH", message.ph, 7);
          this.check(1, 1, 4, " EC", message.ec, 10);
          this.check(1, 1, 5, " Humidity", message.mo, 10);
          this.check(1, 1, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 1,
            indexBlock: 1
          };
          this.stringArray(payloadStringArray);
          this.addDataIpah2(1);

          let data = { station: 1, block: 3 };
          this.countWarningsTkpmIpah(data);
        }

        if (topic === "new3/nexplex/tkpmIpah/sense/block2") {
          message = JSON.parse(message);
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
            this.getCurrentDataArrayIpah2(data);
          }
          // this.addDataIpah1(0);
        }

        // if (topic === "nexplex/sense/tkpmIpah/block2/retain") {
        //   message = JSON.parse(message);
        //   let payload = {
        //     station: 1,
        //     block: 1,
        //     soilPH: message.ph,
        //     soilEC: message.ec,
        //     soilMS: message.mo,
        //     ts: message.ts
        //   };
        //   this.getCurrentDataIpah2(payload);
        //   this.check(1, 1, 0, " pH", message.ph, 7);
        //   this.check(1, 1, 1, " EC", message.ec, 10);
        //   this.check(1, 1, 2, " Humidity", message.mo, 10);

        //   const payloadStringArray = {
        //     indexStation: 1,
        //     indexBlock: 1
        //   };
        //   this.stringArray(payloadStringArray);
        //   const val = ["soilPH", "soilEC", "soilMS"];
        //   // //currentTrend
        //   for (let j = 0; j < val.length; j++) {
        //     let sensor = val[j];
        //     let indexStation = 1;
        //     let indexSensor = j;
        //     let data = { sensor, indexStation, indexSensor };
        //     this.getCurrentDataArrayIpah2(data);
        //   }
        //   this.addDataIpah2(1);
        //   let data = { station: 1, block: 3 };
        //   this.countWarningsTkpmIpah(data);
        // }

        if (topic === "new2/nexplex/tkpmIpah/sense/block3/retain") {
          message = JSON.parse(message);
          let payload = {
            station: 1,
            block: 2,
            soilNitrogen: message.nt,
            soilPhosphorus: message.ps,
            soilPotassium: message.po,
            soilPH: message.ph,
            soilEC: message.ec,
            soilMS: message.mo,
            soilTEMP: message.tp,
            ts: message.ts
          };
          this.getCurrentDataIpah2(payload);
          this.check(1, 2, 0, " Nitrogen", message.nt, 20);
          this.check(1, 2, 1, " Phosphorus", message.ps, 20);
          this.check(1, 2, 2, " Potassium", message.po, 20);
          this.check(1, 2, 3, " pH", message.ph, 7);
          this.check(1, 2, 4, " EC", message.ec, 10);
          this.check(1, 2, 5, " Humidity", message.mo, 10);
          this.check(1, 2, 6, " Temp", message.tp, 10);
          const payloadStringArray = {
            indexStation: 1,
            indexBlock: 2
          };
          this.stringArray(payloadStringArray);
          this.addDataIpah2(2);

          let data = { station: 1, block: 3 };
          this.countWarningsTkpmIpah(data);
        }

        if (topic === "new3/nexplex/tkpmIpah/sense/block3") {
          message = JSON.parse(message);
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
            this.getCurrentDataArrayIpah2(data);
          }
          // this.addDataIpah1(0);
        }

        // if (topic === "nexplex/sense/tkpmIpah/block3/retain") {
        //   message = JSON.parse(message);
        //   let payload = {
        //     station: 1,
        //     block: 2,
        //     soilPH: message.ph,
        //     soilEC: message.ec,
        //     soilMS: message.mo,
        //     ts: message.ts
        //   };
        //   this.getCurrentDataIpah2(payload);
        //   this.check(1, 2, 0, " pH", message.ph, 7);
        //   this.check(1, 2, 1, " EC", message.ec, 10);
        //   this.check(1, 2, 2, " Humidity", message.mo, 0.5);

        //   const payloadStringArray = {
        //     indexStation: 1,
        //     indexBlock: 2
        //   };
        //   this.stringArray(payloadStringArray);
        //   const val = ["soilPH", "soilEC", "soilMS"];
        //   // //currentTrend
        //   for (let j = 0; j < val.length; j++) {
        //     let sensor = val[j];
        //     let indexStation = 2;
        //     let indexSensor = j;
        //     let data = { sensor, indexStation, indexSensor };
        //     this.getCurrentDataArrayIpah2(data);
        //   }
        //   this.addDataIpah2(2);
        //   let data = { station: 1, block: 3 };
        //   this.countWarningsTkpmIpah(data);
        // }

        if (topic === "qwazx/np/tkpmIpah/s/ec/t1") {
          message = JSON.parse(message);
          if (!message.tid == 342) return;
          let payload = {
            tank: 0,
            EC: message.EC
          };
          this.getCurrentDataNutrientIpah2(payload);
        }
        if (topic === "qwazx/np/tkpmIpah/s/ec/t2") {
          message = JSON.parse(message);
          if (!message.tid == 352) return;
          let payload = {
            tank: 1,
            EC: message.EC
          };
          this.getCurrentDataNutrientIpah2(payload);
        }
        if (topic === "qwazx/np/tkpmIpah/s/ec/t3") {
          message = JSON.parse(message);
          if (!message.tid == 362) return;
          let payload = {
            tank: 2,
            EC: message.EC
          };
          this.getCurrentDataNutrientIpah2(payload);
        }
        // if (topic === "np/s/tkpmIpah/n") {
        //   message = JSON.parse(message);
        //   // console.log(message);
        // }

        if (topic === "new/nexplex/tkpmPagoh/sense/block1") {
          message = JSON.parse(message);
          let payload = {
            station: 2,
            block: 0,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            ts: message.ts
          };
          this.getCurrentDataTkpmPagoh(payload);
          this.check(2, 0, 0, " pH", message.pH, 7);
          this.check(2, 0, 1, " EC", message.EC, 0.2);
          this.check(2, 0, 2, " Humidity", message.HMD, 10);

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

        if (topic === "new/nexplex/tkpmPagoh/sense/block2") {
          message = JSON.parse(message);
          let payload = {
            station: 2,
            block: 1,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            ts: message.ts
          };
          this.getCurrentDataTkpmPagoh(payload);
          this.check(2, 1, 0, " pH", message.pH, 7);
          this.check(2, 1, 1, " EC", message.EC, 10);
          this.check(2, 1, 2, " Humidity", message.HMD, 10);

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

        if (topic === "new/nexplex/tkpmPagoh/sense/block3") {
          message = JSON.parse(message);
          console.log(message);
          let payload = {
            station: 2,
            block: 2,
            soilPH: message.pH,
            soilEC: message.EC,
            soilMS: message.HMD,
            ts: message.ts
          };
          this.getCurrentDataTkpmPagoh(payload);
          this.check(2, 2, 0, " pH", message.pH, 7);
          this.check(2, 2, 1, " EC", message.EC, 10);
          this.check(2, 2, 2, " Humidity", message.HMD, 10);

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

        if (topic === "kongkong/topic/data") {
          try {
            message = JSON.parse(message);

            // if (message.TID == 381) {
            //   // console.log(message);
            //   let payload = {
            //     station: 0,
            //     EC: message.EC
            //   };
            //   this.getCurrentDataNutrientIpah1EC(payload);
            // }
            // if (message.ID == 301) {
            // console.log(message);
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
            // let payload2 = {
            //   station: 3,
            //   block: 1,
            //   soilNitrogen: message.NTR2,
            //   soilPhosphorus: message.PHOS2,
            //   soilPotassium: message.POT2,
            //   soilPH: message.pH2,
            //   soilEC: message.EC2,
            //   soilMS: message.HMD2
            // };
            this.getCurrentDataKongPo(payload1);
            // this.getCurrentDataKongPo(payload2);
            this.check(3, 0, 0, " Nitrogen", message.NTR1, 20);
            this.check(3, 0, 1, " Phosphorus", message.PHOS1, 20);
            this.check(3, 0, 2, " Potassium", message.POT1, 20);
            this.check(3, 0, 3, " pH", message.pH1, 7);
            this.check(3, 0, 4, " EC", message.EC1, 10);
            this.check(3, 0, 5, " Humidity", message.HMD1, 10);

            // this.check(3, 1, 0, " Nitrogen", message.NTR2, 20);
            // this.check(3, 1, 1, " Phosphorus", message.PHOS2, 20);
            // this.check(3, 1, 2, " Potassium", message.POT2, 20);
            // this.check(3, 1, 3, " pH", message.pH2, -7);
            // this.check(3, 1, 4, " EC", message.EC2, -10);
            // this.check(3, 1, 5, " Humidity", message.HMD2, -10);

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
            // }
          } catch (e) {
            return false;
          }
          // if (message.ID == 301) {
          //   let payload1 = {
          //     station: 3,
          //     block: 0,
          //     soilNitrogen: message.NTR1,
          //     soilPhosphorus: message.PHOS1,
          //     soilPotassium: message.POT1,
          //     soilPH: message.pH1,
          //     soilEC: message.EC1,
          //     soilMS: message.HMD1
          //   };
          //   let payload2 = {
          //     station: 3,
          //     block: 1,
          //     soilNitrogen: message.NTR2,
          //     soilPhosphorus: message.PHOS2,
          //     soilPotassium: message.POT2,
          //     soilPH: message.pH2,
          //     soilEC: message.EC2,
          //     soilMS: message.HMD2
          //   };
          //   this.getCurrentDataKongPo(payload1);
          //   this.getCurrentDataKongPo(payload2);
          //   this.check(3, 0, 0, " Nitrogen", message.NTR1, 20);
          //   this.check(3, 0, 1, " Phosphorus", message.PHOS1, 20);
          //   this.check(3, 0, 2, " Potassium", message.POT1, 20);
          //   this.check(3, 0, 3, " pH", message.pH1, 7);
          //   this.check(3, 0, 4, " EC", message.EC1, 10);
          //   this.check(3, 0, 5, " MS", message.HMD1, 10);

          //   this.check(3, 1, 0, " Nitrogen", message.NTR2, 20);
          //   this.check(3, 1, 1, " Phosphorus", message.PHOS2, 20);
          //   this.check(3, 1, 2, " Potassium", message.POT2, 20);
          //   this.check(3, 1, 3, " pH", message.pH2, 7);
          //   this.check(3, 1, 4, " EC", message.EC2, 10);
          //   this.check(3, 1, 5, " MS", message.HMD2, 10);

          //   const payloadStringArray = {
          //     indexStation: 0,
          //     indexBlock: 0
          //   };
          //   this.stringArray(payloadStringArray);
          //   const val = [
          //     "soilNitrogen",
          //     "soilPhosphorus",
          //     "soilPotassium",
          //     "soilPH",
          //     "soilEC",
          //     "soilMS",
          //     "soilTEMP"
          //   ];
          //   // //currentTrend
          //   for (let j = 0; j < val.length; j++) {
          //     let sensor = val[j];
          //     let indexStation = 0;
          //     let indexSensor = j;
          //     let data = { sensor, indexStation, indexSensor };
          //     this.getCurrentDataArrayIpah1(data);
          //   }
          // }
        }
        if (topic === "kongkong/topic/data2") {
          try {
            message = JSON.parse(message);

            // if (message.TID == 381) {
            //   // console.log(message);
            //   let payload = {
            //     station: 0,
            //     EC: message.EC
            //   };
            //   this.getCurrentDataNutrientIpah1EC(payload);
            // }
            // if (message.ID == 301) {
            // console.log(message);
            // let payload1 = {
            //   station: 3,
            //   block: 0,
            //   soilNitrogen: message.NTR1,
            //   soilPhosphorus: message.PHOS1,
            //   soilPotassium: message.POT1,
            //   soilPH: message.pH1,
            //   soilEC: message.EC1,
            //   soilMS: message.HMD1
            // };
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
            // this.getCurrentDataKongPo(payload1);
            this.getCurrentDataKongPo(payload2);
            // this.check(3, 0, 0, " Nitrogen", message.NTR1, 20);
            // this.check(3, 0, 1, " Phosphorus", message.PHOS1, 20);
            // this.check(3, 0, 2, " Potassium", message.POT1, 20);
            // this.check(3, 0, 3, " pH", message.pH1, 7);
            // this.check(3, 0, 4, " EC", message.EC1, 10);
            // this.check(3, 0, 5, " Humidity", message.HMD1, 10);

            this.check(3, 1, 0, " Nitrogen", message.NTR2, 20);
            this.check(3, 1, 1, " Phosphorus", message.PHOS2, 20);
            this.check(3, 1, 2, " Potassium", message.POT2, 20);
            this.check(3, 1, 3, " pH", message.pH2, -7);
            this.check(3, 1, 4, " EC", message.EC2, -10);
            this.check(3, 1, 5, " Humidity", message.HMD2, -10);

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
            // }
          } catch (e) {
            return false;
          }
          // if (message.ID == 301) {
          //   let payload1 = {
          //     station: 3,
          //     block: 0,
          //     soilNitrogen: message.NTR1,
          //     soilPhosphorus: message.PHOS1,
          //     soilPotassium: message.POT1,
          //     soilPH: message.pH1,
          //     soilEC: message.EC1,
          //     soilMS: message.HMD1
          //   };
          //   let payload2 = {
          //     station: 3,
          //     block: 1,
          //     soilNitrogen: message.NTR2,
          //     soilPhosphorus: message.PHOS2,
          //     soilPotassium: message.POT2,
          //     soilPH: message.pH2,
          //     soilEC: message.EC2,
          //     soilMS: message.HMD2
          //   };
          //   this.getCurrentDataKongPo(payload1);
          //   this.getCurrentDataKongPo(payload2);
          //   this.check(3, 0, 0, " Nitrogen", message.NTR1, 20);
          //   this.check(3, 0, 1, " Phosphorus", message.PHOS1, 20);
          //   this.check(3, 0, 2, " Potassium", message.POT1, 20);
          //   this.check(3, 0, 3, " pH", message.pH1, 7);
          //   this.check(3, 0, 4, " EC", message.EC1, 10);
          //   this.check(3, 0, 5, " MS", message.HMD1, 10);

          //   this.check(3, 1, 0, " Nitrogen", message.NTR2, 20);
          //   this.check(3, 1, 1, " Phosphorus", message.PHOS2, 20);
          //   this.check(3, 1, 2, " Potassium", message.POT2, 20);
          //   this.check(3, 1, 3, " pH", message.pH2, 7);
          //   this.check(3, 1, 4, " EC", message.EC2, 10);
          //   this.check(3, 1, 5, " MS", message.HMD2, 10);

          //   const payloadStringArray = {
          //     indexStation: 0,
          //     indexBlock: 0
          //   };
          //   this.stringArray(payloadStringArray);
          //   const val = [
          //     "soilNitrogen",
          //     "soilPhosphorus",
          //     "soilPotassium",
          //     "soilPH",
          //     "soilEC",
          //     "soilMS",
          //     "soilTEMP"
          //   ];
          //   // //currentTrend
          //   for (let j = 0; j < val.length; j++) {
          //     let sensor = val[j];
          //     let indexStation = 0;
          //     let indexSensor = j;
          //     let data = { sensor, indexStation, indexSensor };
          //     this.getCurrentDataArrayIpah1(data);
          //   }
          // }
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
        // .$get("http://139.59.109.48/api/openWeatherMap/ipah1")
        .$get("http://159.223.55.150/api/openWeatherMap/ipah1")
        // .$get("http://127.0.0.1:5000/api/openWeatherMap/ipah1")
        .then(response => {
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getWeatherIpah2: function() {
      this.$axios
        // .$get("http://139.59.109.48/api/openWeatherMap/ipah2")
        .$get("http://159.223.55.150/api/openWeatherMap/ipah2")
        // .$get("http://127.0.0.1:5000/api/openWeatherMap/ipah2")
        .then(response => {
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getWeatherPagoh: function() {
      this.$axios
        // .$get("http://139.59.109.48/api/openWeatherMap/tkpmPagoh")
        .$get("http://159.223.55.150/api/openWeatherMap/tkpmPagoh")
        // .$get("http://127.0.0.1:5000/api/openWeatherMap/tkpmPagoh")
        .then(response => {
          this.SET_WEATHER(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    },
    getWeatherKongPo: function() {
      this.$axios
        // .$get("http://139.59.109.48/api/openWeatherMap/kongPo")
        .$get("http://159.223.55.150/api/openWeatherMap/kongPo")
        // .$get("http://127.0.0.1:5000/api/openWeatherMap/kongPo")
        .then(response => {
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
.app-bar-top {
  max-width: 100%;
}
.user-name-title {
  margin-bottom: 0 !important;
}
/* .title-container {
  max-width: 60%;
}
.user-name-container {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
.logout-container {
  width: 10%;
  display: flex;
  justify-content: center;
  padding-right: 10px;
} */
@media (max-width: 500px) {
  .app-bar-top {
    max-width: 100%;
  }
  .user-name-title {
    margin-bottom: 0 !important;
  }
  .title-container {
    max-width: 50%;
  }
  .user-name-container {
    width: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
  }
  .logout-container {
    width: 10%;
    display: flex;
    justify-content: center;
    padding-right: 10px;
  }
}
</style>
