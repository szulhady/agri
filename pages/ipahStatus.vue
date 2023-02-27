<template>
  <section>
    <PageTitle title="STATUS" />
    <v-card class="elevation-10">
      <v-card-title>
        OPERATION
      </v-card-title>
      <v-row>
        <v-col col="12" class="col-lg-8 pb-0">
          <Ipah1Status
            sv1="red"
            sv2="green"
            :classSV1="ipahStatus.SV1 == 1 ? 'filter-green' : 'filter-red'"
            :classSV2="ipahStatus.SV2 == 1 ? 'filter-green' : 'filter-red'"
            :classSV3="ipahStatus.SV3 == 1 ? 'filter-green' : 'filter-red'"
            :classSV4="ipahStatus.SV4 == 1 ? 'filter-green' : 'filter-red'"
            :classSV5="ipahStatus.SV5 == 1 ? 'filter-green' : 'filter-red'"
            :classSV6="ipahStatus.SV6 == 1 ? 'filter-green' : 'filter-red'"
            :classPump="ipahStatus.P == 1 ? 'filter-green' : 'filter-red'"
            :classDosingPump="
              ipahStatus.DP == 1 ? 'filter-green' : 'filter-red'
            "
            ph="7"
            waterLvl="30"
            EC="2"
          />
        </v-col>
        <v-col
          cols="12"
          class="col-lg-4 pr-md-10 pt-0"
          style="display:flex;justify-content:center; align-items:center; flex-direction:column"
        >
          <v-card class="elevation-18 rounded-lg px-5 mb-5 ">
            <v-card-title>PROCESS</v-card-title>
            <v-card-subtitle style="font-size:1.2em">
              {{ ipahProcess }}
            </v-card-subtitle>
          </v-card>
          <v-card class="elevation-18 rounded-lg px-5 ">
            <v-card-title style="font-size:1.3rem">
              MANUAL DRIPPING CONTROL
            </v-card-title>
            <v-row>
              <v-col>
                <div>
                  <h4 style="text-align: justify">
                    Click button bellow to start / stop manual water / nutrient
                    dripping process or to stop all process. (W - water, N -
                    nutrient, B - block)
                  </h4>
                  <div style="display:flex; justify-content:space-evenly">
                    <v-btn
                      :color="
                        ipahStatusControllino.WDB1 == 1 ? 'success' : 'error'
                      "
                      @click="waterBlock(1)"
                      width="90px"
                      :disabled="
                        ipahStatusControllino.NDB1 == 1
                          ? true
                          : ipahStatusControllino.NDB2 == 1
                          ? true
                          : false
                      "
                      >W B-1</v-btn
                    >
                    <v-btn
                      :color="
                        ipahStatusControllino.WDB2 == 1 ? 'success' : 'error'
                      "
                      @click="waterBlock(2)"
                      width="90px"
                      :disabled="
                        ipahStatusControllino.NDB1 == 1
                          ? true
                          : ipahStatusControllino.NDB2 == 1
                          ? true
                          : false
                      "
                      >W B-2</v-btn
                    >
                  </div>

                  <div
                    style="display:flex; justify-content:space-evenly;margin-top:20px"
                  >
                    <v-btn
                      :color="
                        ipahStatusControllino.NDB1 == 1 ? 'success' : 'error'
                      "
                      @click="waterBlock(3)"
                      width="90px"
                      :disabled="
                        ipahStatusControllino.WDB1 == 1
                          ? true
                          : ipahStatusControllino.WDB2 == 1
                          ? true
                          : false
                      "
                      >N B-1</v-btn
                    >
                    <v-btn
                      :color="
                        ipahStatusControllino.NDB2 == 1 ? 'success' : 'error'
                      "
                      @click="waterBlock(4)"
                      width="90px"
                      :disabled="
                        ipahStatusControllino.WDB1 == 1
                          ? true
                          : ipahStatusControllino.WDB2 == 1
                          ? true
                          : false
                      "
                      >N B-2</v-btn
                    >
                  </div>
                  <div
                    style="padding-top:20px; display:flex;justify-content:center"
                  >
                    <v-btn color="error" @click="masterStop" width="190px"
                      >STOP ALL PROCESS</v-btn
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-card-title style="font-size:1.3rem">
              MANUAL FERTIGATION CONTROL
            </v-card-title>
            <v-row>
              <v-col>
                <v-card-title>
                  Water Filling for fetilizer solution tank
                </v-card-title>
                <div>
                  <h4 style="text-align: justify">
                    Press <span style="font-weight:bold">FILL</span> button to
                    start filling water manually into fetilizer solution tank.
                    Press <span style="font-weight:bold">STOP</span> button to
                    stop filling process.
                  </h4>
                  <div style="display:flex; justify-content:space-evenly">
                    <v-btn @click="fill" class="mt-4 mb-4">FILL</v-btn>
                    <v-btn @click="stop" class="mt-4 mb-4">STOP</v-btn>
                  </div>
                </div>
                <v-card-title>
                  Nutrient Preparation
                </v-card-title>
                <div>
                  <h4 style="text-align: justify">
                    Nutrient preparation is done via schedule set by user on
                    schedule panel. It is done on
                    <span style="font-weight:bold">3.00am on choosen date</span
                    >. Please fill
                    <span style="font-weight:bold">
                      Volume EC value input ( in litre )</span
                    >
                    and click button below to start nutrient preparation
                    manually.
                  </h4>
                </div>

                <div style=""></div>
                <div
                  style="display:flex; flex-direction:column;justify-content:center; align-items:center"
                >
                  <!-- <v-text-field
                    label="Duration (minute)"
                    type="number"
                    v-model.number="duration"
                    class="short"
                  ></v-text-field> -->
                  <input
                    class="long2"
                    type="text"
                    v-mask="'##.##'"
                    v-model.number="duration"
                  />
                  <v-btn @click="nutrient" class="mt-4 mb-4"
                    >Start Preparation</v-btn
                  >
                </div>
                <v-card-title>
                  CUT OFF SETTING
                </v-card-title>
                <div>
                  <h4 style="text-align: justify">
                    Cut off system will stop the dripping process if reach the
                    maximum amount of humidity on plants. Cut off system setting
                    can be pre-set wether to enable or disable, and can be set
                    the value of maximum humidity of soil sensor for each tank.
                  </h4>
                </div>
                <div
                  style="display:flex; justify-content:center; margin-bottom:20px"
                >
                  <v-btn
                    :color="cutOffState == 'enable' ? 'success' : 'error'"
                    @click="
                      cutOffState == 'enable'
                        ? openEditDisanbleDialogCutOff()
                        : openDialogCutOff()
                    "
                    width="220px"
                    :disabled="cutOffState == '' ? true : false"
                    >{{
                      cutOffState == ""
                        ? "Waiting from server"
                        : cutOffState == "disable"
                        ? "Disable"
                        : "Enable"
                    }}</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-row>
            <v-col class="mt-5"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-scroll-y-transition>
      <div class="layer2" v-if="layerDrawer" id="layerDrawer"></div>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card class="logout elevation-12" v-if="layerDrawer">
        <v-card-title>
          Action
        </v-card-title>
        <hr class="hr" />
        <v-card-subtitle>
          Are you sure you want to {{ stateDevice }} the {{ activeDevice }}?
        </v-card-subtitle>
        <div class="btn-div">
          <v-btn @click="yes(activeSwitch)" class="success logout-btn"
            >Yes</v-btn
          >
          <v-btn @click="cancel" class="error logout-btn">Cancel</v-btn>
        </div>
      </v-card>
    </v-scroll-y-transition>
    <v-dialog
      v-model="dialogCutOff"
      persistent
      max-width="500px"
      style="overflow:hidden"
    >
      <v-card>
        <v-card-title class="text-h5">
          Enable cut off system?
        </v-card-title>
        <v-card-text
          >Please input the maximum value of humidity for each block. If not
          require for block, please empty the input section for that
          block.</v-card-text
        >
        <v-row>
          <v-col>
            <div
              style="display:flex; height:30px; align-items:center; justify-content:center"
            >
              <v-card-subtitle>Block 1</v-card-subtitle>
              <input
                class="long2"
                type="text"
                v-mask="'##.##'"
                v-model.number="cutOffValueBlock1"
              />
            </div>
            <div
              style="display:flex; height:30px; align-items:center; justify-content:center"
            >
              <v-card-subtitle>Block 2</v-card-subtitle>
              <input
                class="long2"
                type="text"
                v-mask="'##.##'"
                v-model.number="cutOffValueBlock2"
              />
            </div>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" variant="text" @click="dialogCutOff = false">
            Cancel
          </v-btn>
          <v-btn
            color="success"
            variant="text"
            @click="
              updateCutOff('enable', cutOffValueBlock1, cutOffValueBlock2)
            "
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="editDisableDialogCutOff"
      persistent
      max-width="500px"
      style="overflow:hidden"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit value or disable cut off system?
        </v-card-title>
        <v-card-text
          >Please input new maximum value of humidity for each block. If not
          require for block, please empty the input section for that block.
          Click disable to disable cut off system.</v-card-text
        >
        <v-row>
          <v-col>
            <div
              style="display:flex; height:30px; align-items:center; justify-content:center"
            >
              <v-card-subtitle
                >Block 1 - old value ({{
                  cutOffValueBlock1Read
                }})</v-card-subtitle
              >
              <input
                class="long2"
                type="text"
                v-mask="'##.##'"
                v-model.number="newCutOffValueBlock1"
              />
            </div>
            <div
              style="display:flex; height:30px; align-items:center; justify-content:center"
            >
              <v-card-subtitle
                >Block 2 - old value ({{
                  cutOffValueBlock2Read
                }})</v-card-subtitle
              >
              <input
                class="long2"
                type="text"
                v-mask="'##.##'"
                v-model.number="newCutOffValueBlock2"
              />
            </div>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            variant="text"
            @click="editDisableDialogCutOff = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="success"
            variant="text"
            @click="
              updateCutOff(
                'enableEdit',
                newCutOffValueBlock1,
                newCutOffValueBlock2
              )
            "
          >
            Edit
          </v-btn>
          <v-btn
            color="warning"
            variant="text"
            @click="
              updateCutOff('disable', 'cutOffValueBlock1', 'cutOffValueBlock2')
            "
          >
            Disable
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import Ipah1Status from "~/components/Status/Ipah1Status.vue";

import { mapState, mapMutations } from "vuex";

import mqtt from "mqtt";

export default {
  middleware: ["isIpah"],
  layout: "status",
  methods: {
    openEditDisanbleDialogCutOff: function() {
      this.editDisableDialogCutOff = true;
    },
    openDialogCutOff: function() {
      this.dialogCutOff = true;
    },
    updateCutOff: function(state, value1, value2) {
      this.cutOffValueBlock1 = "";
      this.cutOffValueBlock2 = "";
      this.newCutOffValueBlock1 = "";
      this.newCutOffValueBlock2 = "";
      if (state == "enable") {
        let payload = {
          state: "enable",
          cutOffValueBlock1: value1,
          cutOffValueBlock2: value2
        };

        payload = JSON.stringify(payload);
        this.client.publish("qwazx/np/ipah/table/cutoff/update", payload);
        this.editDisableDialogCutOff = false;
        this.dialogCutOff = false;
        setTimeout(() => {
          this.client.publish("qwazx/np/ipah/table/cutoff/request", "request");
        }, 2000);
      } else if (state == "disable") {
        let payload = {
          state: "disable",
          cutOffValueBlock1: "",
          cutOffValueBlock2: ""
        };
        payload = JSON.stringify(payload);
        this.editDisableDialogCutOff = false;
        this.dialogCutOff = false;
        this.client.publish("qwazx/np/ipah/table/cutoff/update", payload);
        setTimeout(() => {
          this.client.publish("qwazx/np/ipah/table/cutoff/request", "request");
        }, 2000);
      } else {
        let payload = {
          state: "enable",
          cutOffValueBlock1: value1,
          cutOffValueBlock2: value2
        };
        payload = JSON.stringify(payload);
        this.editDisableDialogCutOff = false;
        this.dialogCutOff = false;
        this.client.publish("qwazx/np/ipah/table/cutoff/update", payload);
        setTimeout(() => {
          this.client.publish("qwazx/np/ipah/table/cutoff/request", "request");
        }, 2000);
      }
    },
    masterStop: function() {
      console.log("stop");
      this.client.publish("qwazx/np/ipah/c/m/s", "404");
    },
    waterBlock: function(block) {
      console.log(block);
      if (block == 1) {
        if (this.ipahStatusControllino.WDB1 == 1) {
          this.client.publish("qwazx/np/ipah/c/d", "D1:19");
        } else {
          this.client.publish("qwazx/np/ipah/c/d", "D1:1");
        }
      }
      if (block == 2) {
        if (this.ipahStatusControllino.WDB2 == 1) {
          this.client.publish("qwazx/np/ipah/c/d", "D1:29");
        } else {
          this.client.publish("qwazx/np/ipah/c/d", "D1:2");
        }
      }
      if (block == 3) {
        if (this.ipahStatusControllino.NDB1 == 1) {
          this.client.publish("qwazx/np/ipah/c/d", "D1:39");
        } else {
          this.client.publish("qwazx/np/ipah/c/d", "D1:3");
        }
      }

      if (block == 4) {
        if (this.ipahStatusControllino.NDB2 == 1) {
          this.client.publish("qwazx/np/ipah/c/d", "D1:49");
        } else {
          this.client.publish("qwazx/np/ipah/c/d", "D1:4");
        }
      }
    },
    ...mapMutations({
      setIpah1ManualFill: "setIpah1ManualFill",
      setIpah1ManualStop: "setIpah1ManualStop",
      setIpah1ManualNutrient: "setIpah1ManualNutrient",
      setIpah1ManualNutrientDuration: "setIpah1ManualNutrientDuration"
    }),
    trigger: function(device, state, deviceName) {
      this.state2 = false;
      this.layerDrawer = true;
      this.activeDevice = device;
      this.activeSwitch = deviceName;
      if (state == true) {
        this.stateDevice = "turn off";
      } else {
        this.stateDevice = "turn on";
      }
      console.log(this.activeDevice);
      console.log(this.activeSwitch);
      // this.switchPump = !this.switchPump;
    },
    yes: async function(Device) {
      // console.log(Device);
      this.layerDrawer = false;
      // this.switchPump = !this.switchPump;
      this[Device] = !this[Device];
    },
    cancel: function() {
      this.layerDrawer = false;
    },
    track: function() {
      window.onclick = event => {
        const modal = document.getElementById("layerDrawer");
        if (event.target == modal) {
          this.layerDrawer = false;
        }
      };
    },
    fill: function() {
      this.setIpah1ManualFill(true);
      console.log("fill");
    },
    stop: function() {
      this.setIpah1ManualStop(true);
      console.log("stop");
    },
    nutrient: function() {
      if (!this.duration) {
        alert("Please select valid volume EC");
        return;
      }

      this.setIpah1ManualNutrientDuration(this.duration.toFixed(2));
      this.setIpah1ManualNutrient(true);
      // console.log("heree");
    },
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `${host}`;
      // const connectUrl = `wss://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
        this.dialog = false;
        this.client.publish("qwazx/np/ipah/table/cutoff/request", "request");
        setInterval(() => {
          this.client.publish("qwazx/np/ipah/table/cutoff/request", "request");
        }, 6000);
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
        if (topic === "qwazx/np/ipah/table/cutoff/response") {
          message = JSON.parse(message);
          console.log("here", message);
          // message = message.toString();
          this.cutOffState = message.state;
          this.cutOffValueBlock1Read = message.cutoffblock1;
          this.cutOffValueBlock2Read = message.cutoffblock2;
          console.log("cutoff state", message.state);
          // let payload = {
          //   tank: 0,
          //   EC: message.EC
          // };
          // this.getCurrentDataNutrientIpah2(payload);
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
    }
  },
  components: {
    PageTitle,
    Ipah1Status
  },
  data() {
    return {
      newCutOffValueBlock1: "",
      newCutOffValueBlock2: "",
      editDisableDialogCutOff: false,
      cutOffValueBlock1: "",
      cutOffValueBlock2: "",

      dialogCutOff: false,
      cutOffState: "",
      activeDevice: "",
      stateDevice: "",
      activeSwitch: "",
      layerDrawer: false,
      state2: true,
      rightDrawer: false,
      switchPump: false,
      switchDosingPump: false,
      switchSV1: false,
      switchSV2: false,
      switchSV3: false,
      switchSV4: false,
      switchSV5: false,
      switchSV6: false,
      substance: "(substance)",
      itemsSubstance: ["water", "fertilizer"],
      block: "(SPH)",
      itemsBlock: ["SPH 1", "SPH 2", "All SPH"],
      itemsDuration: ["10", "20", "30"],
      duration: "",
      connection: {
        host: this.$auth.$state.user.server_mqtt,
        port: 8083,
        endpoint: "/mqtt",
        clean: true, // Reserved session
        connectTimeout: 4000, // Time out
        reconnectPeriod: 4000 // Reconnection interval
      },
      subscription: {
        // topic: "geyzer/#",
        topic: ["np/#", "new/#", "qwazx/np/ipah/#"],
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
  computed: {
    ...mapState({
      ipahStatus: state => state.ipahStatus,
      ipahProcess: state => state.ipahProcess,
      ipahStatusControllino: state => state.ipahStatusControllino
    })
  },
  async mounted() {
    // let elHtml = document.getElementsByTagName("html")[0];
    // elHtml.style.overflowY = null;
    this.createConnection();
    this.doSubscribe();
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
}
.overlay2 {
  position: absolute;
  top: 0;
  left: 0;
}

.filter-green {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(90%) contrast(119%);
  /* -webkit-animation-name: blinkGreen;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite; */
  -webkit-animation: blinkGreen 1s infinite;
  -moz-animation: blinkGreen 1s infinite;
  -ms-animation: blinkGreen 1s infinite;
  -o-animation: blinkGreen 1s infinite;
  animation: blinkGreen 1s infinite;
}

.filter-red {
  filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
    brightness(94%) contrast(117%);
  /* -webkit-animation-name: blinkRed;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite; */
  -webkit-animation: blinkRed 1s infinite;
  -moz-animation: blinkRed 1s infinite;
  -ms-animation: blinkRed 1s infinite;
  -o-animation: blinkRed 1s infinite;
  animation: blinkRed 1s infinite;
}

/* BLINK RED */
@-webkit-keyframes blinkRed {
  0% {
    -webkit-filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    -webkit-filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
  }
  100% {
    -webkit-filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-moz-keyframes blinkRed {
  0% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
  }
  100% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-ms-keyframes blinkRed {
  0% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
  }
  100% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-o-keyframes blinkRed {
  0% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
  }
  100% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@keyframes blinkRed {
  0% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
  }
  100% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}

/* BLINK GREEN */
@-webkit-keyframes blinkGreen {
  0% {
    -webkit-filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    -webkit-filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
  }
  100% {
    -webkit-filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-moz-keyframes blinkGreen {
  0% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
  }
  100% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-ms-keyframes blinkGreen {
  0% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
  }
  100% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-o-keyframes blinkGreen {
  0% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
  }
  100% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@keyframes blinkGreen {
  0% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
  }
  100% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
.switch {
  /* max-width: 92%; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
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

.long2 {
  border: black 1px solid;
  text-align: center;
}

/* layer */

.layer2 {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  /* z-index: 999; */
  top: 0;
  left: 0;
}

@media (max-width: 1264px) {
  .switch {
    /* max-width: 92%; */
    align-items: center;
    /* justify-content: center; */
  }
}
</style>
