<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app class="sidebar" temporary>
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
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        style="color:white"
      ></v-app-bar-nav-icon>
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
import { mapGetters, mapMutations, mapState } from "vuex";
import mqtt from "mqtt";
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      drawer: false,
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
        topic: ["np/#"],
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
      ipahStatus: "ipahStatus",
      ipahStatus: "ipahStatus",
      tkpmIpahStatus: "tkpmIpahStatus",
      tkpmPagohStatus: "tkpmPagohStatus",
      setActiveUser: "setActiveUser",
      setIpah1ManualFill: "setIpah1ManualFill",
      setIpah1ManualStop: "setIpah1ManualStop",
      setIpah2ManualFill: "setIpah2ManualFill",
      setIpah2ManualStop: "setIpah2ManualStop",
      setTkpmPagohManualFill: "setTkpmPagohManualFill",
      setTkpmPagohManualStop: "setTkpmPagohManualStop",
      setKongPoManualFill: "setKongPoManualFill",
      setKongPoManualStop: "setKongPoManualStop",
      setKongPoManualNutrient: "setKongPoManualNutrient"
    }),
    logout: async function() {
      await this.$auth.logout();
      // this.resetState()
      this.doUnSubscribe();
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
        if (topic === "debug/test") {
          console.log("here");
          this.ipahStatus();
        }
        if (topic === "np/s/ipah/c") {
          message = JSON.parse(message);
          // console.log(message);
          this.ipahStatus(message);
        }

        if (topic === "np/s/tkpmIpah/c") {
          message = JSON.parse(message);
          // console.log(message);
          this.tkpmIpahStatus(message);
        }

        if (topic === "np/s/tkpmPagoh/c") {
          message = JSON.parse(message);
          // console.log(message);
          this.tkpmPagohStatus(message);
        }

        if (topic === "ipah/test") {
          message = JSON.parse(message);
          // console.log(message);
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
    }
    // ...mapMutations({
    //   setActiveUser: "setActiveUser",
    //   setIpah1ManualFill: "setIpah1ManualFill",
    //   setIpah1ManualStop: "setIpah1ManualStop",
    //   setIpah2ManualFill: "setIpah2ManualFill",
    //   setIpah2ManualStop: "setIpah2ManualStop"
    // })
  },
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"]),
    ...mapState({
      updatedDate: state => state.updated,
      updatedDate2: state => state.updated2,
      updatedDate3: state => state.updated3,
      updatedDate4: state => state.updated4,
      ipah1ManualFill: state => state.ipah1ManualFill,
      ipah1ManualStop: state => state.ipah1ManualStop,
      ipah2ManualFill: state => state.ipah2ManualFill,
      ipah2ManualStop: state => state.ipah2ManualStop,
      tkpmPagohManualFill: state => state.tkpmPagohManualFill,
      tkpmPagohManualStop: state => state.tkpmPagohManualStop,
      kongPoManualFill: state => state.kongPoManualFill,
      kongPoManualStop: state => state.kongPoManualStop,
      kongPoManualNutrient: state => state.kongPoManualNutrient
    })
  },
  mounted: function() {
    // let elHtml = document.getElementsByTagName("html")[0];
    // elHtml.style.overflowY = null;
  },
  async created() {
    // this.$store.dispatch("setForecasts");
    this.setActiveUser();
  },
  updated() {
    // this.setActiveUser();
  },
  async mounted() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
    this.createConnection();
    this.doSubscribe();
  },
  watch: {
    updatedDate: function() {
      if (this.updatedDate == true) {
        console.log("here");
        // this.client.publish("debug/test/database/ipah1", "updated");
      }
    },
    updatedDate2: function() {
      if (this.updatedDate2 == true) {
        console.log("here2");
        // this.client.publish("debug/test/database/ipah2", "updated");
      }
    },
    updatedDate3: function() {
      if (this.updatedDate3 == true) {
        console.log("here2");
        // this.client.publish("debug/test/database/tkpmPagoh", "updated");
      }
    },
    updatedDate4: function() {
      if (this.updatedDate4 == true) {
        console.log("here2");
        // this.client.publish("debug/test/database/kongPo", "updated");
      }
    },
    ipah1ManualFill: function() {
      if (this.ipah1ManualFill == true) {
        this.client.publish("debug/ipah/wf", "100");
      }
      this.setIpah1ManualFill(false);
      console.log(this.ipah1ManualFill);
    },
    ipah1ManualStop: function() {
      if (this.ipah1ManualStop == true) {
        this.client.publish("debug/ipah/wf", "200");
      }
      this.setIpah1ManualStop(false);
      console.log(this.ipah1ManualStop);
    },
    ipah2ManualFill: function() {
      if (this.ipah2ManualFill == true) {
        this.client.publish("debug/ipah2/wf", "100");
      }
      this.setIpah2ManualFill(false);
      console.log(this.ipah2ManualFill);
    },
    ipah2ManualStop: function() {
      if (this.ipah2ManualStop == true) {
        this.client.publish("debug/ipah2/wf", "200");
      }
      this.setIpah2ManualStop(false);
      console.log(this.ipah2ManualStop);
    },

    tkpmPagohManualFill: function() {
      if (this.tkpmPagohManualFill == true) {
        this.client.publish("debug/tkpmPagoh/wf", "100");
      }
      this.setTkpmPagohManualFill(false);
      console.log(this.tkpmPagohManualFill);
    },
    tkpmPagohManualStop: function() {
      if (this.tkpmPagohManualStop == true) {
        this.client.publish("debug/tkpmPagoh/wf", "200");
      }
      this.setTkpmPagohManualStop(false);
      console.log(this.tkpmPagohManualStop);
    },

    kongPoManualFill: function() {
      if (this.kongPoManualFill == true) {
        this.client.publish("np/c/kongpo/wf", "10");
      }
      this.setKongPoManualFill(false);
      console.log(this.kongPoManualFill);
    },
    kongPoManualStop: function() {
      if (this.kongPoManualStop == true) {
        this.client.publish("np/c/kongpo/wf", "20");
      }
      this.setKongPoManualStop(false);
      console.log(this.kongPoManualStop);
    },
    kongPoManualNutrient: function() {
      if (this.kongPoManualNutrient == true) {
        this.client.publish("filter/np/c/kongpo/n", `{"D1":10,"D2":1}`);
        console.log("here");
      }
      this.setKongPoManualNutrient(false);
      console.log(this.kongPoManualNutrient);
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

.container {
  max-width: 90vw;
}

.v-label {
  font-size: 0.8rem !important;
}
</style>
