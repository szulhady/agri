<template>
  <section>
    <PageTitle title="STATUS" />
    <v-card class="elevation-10">
      <v-card-title>
        OPERATION
      </v-card-title>
      <v-row>
        <v-col col="12" class="col-md-9 pb-0">
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
          class="col-md-3 pr-md-10 pt-0"
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
              MANUAL FERTIGATION CONTROL
            </v-card-title>
            <v-row>
              <v-col>
                <v-card-title>
                  Water Filling for fetilizer solution tank
                </v-card-title>
                <div>
                  <h4>
                    Press FILL button to start filling water manually into
                    fetilizer solution tank. Press STOP button to stop filling
                    process.
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
                  <h4>
                    Nutrient preparation is done via schedule set by user on
                    schedule panel. It is done on 11.00pm on choosen date.
                    Please fill duration input and click button below to start
                    nutrient preparation manually.
                  </h4>
                </div>

                <div style=""></div>
                <div
                  style="display:flex; flex-direction:column;justify-content:center; align-items:center"
                >
                  <v-select
                    :items="itemsDuration"
                    label="Duration (minute)"
                    v-model="duration"
                    class="short"
                  ></v-select>
                  <v-btn class="mt-4 mb-4">Start Preparation</v-btn>
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
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import Ipah1Status from "~/components/Status/Ipah1Status.vue";

import { mapState, mapMutations } from "vuex";

export default {
  middleware: ["isIpah"],
  layout: "status",
  methods: {
    ...mapMutations({
      setIpah1ManualFill: "setIpah1ManualFill",
      setIpah1ManualStop: "setIpah1ManualStop"
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
    }
  },
  components: {
    PageTitle,
    Ipah1Status
  },
  data() {
    return {
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
      duration: ""
    };
  },
  computed: {
    ...mapState({
      ipahStatus: state => state.ipahStatus,
      ipahProcess: state => state.ipahProcess
    })
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
  -webkit-animation-name: blinkGreen;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation: blinkGreen 1s infinite;
  -ms-animation: blinkGreen 1s infinite;
  -o-animation: blinkGreen 1s infinite;
  animation: blinkGreen 1s infinite;
}

.filter-red {
  filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
    brightness(94%) contrast(117%);
  -webkit-animation-name: blinkRed;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation: blinkRed 1s infinite;
  -ms-animation: blinkRed 1s infinite;
  -o-animation: blinkRed 1s infinite;
  animation: blinkRed 1s infinite;
}

/* BLINK RED */
@-webkit-keyframes blinkRed {
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
