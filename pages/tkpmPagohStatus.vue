<template>
  <section>
    <PageTitle title="STATUS" />
    <v-card class="elevation-10">
      <v-card-title>
        OPERATION
      </v-card-title>
      <v-row>
        <v-col col="12" class="col-lg-9 pb-0 ">
          <TkpmPagohStatus
            sv1="red"
            sv2="green"
            :classSV1="tkpmPagohStatus.SV1 == 1 ? 'filter-green' : 'filter-red'"
            :classSV2="tkpmPagohStatus.SV2 == 1 ? 'filter-green' : 'filter-red'"
            :classSV3="tkpmPagohStatus.SV3 == 1 ? 'filter-green' : 'filter-red'"
            :classSV4="tkpmPagohStatus.SV4 == 1 ? 'filter-green' : 'filter-red'"
            :classSV5="tkpmPagohStatus.SV5 == 1 ? 'filter-green' : 'filter-red'"
            :classSV6="tkpmPagohStatus.SV6 == 1 ? 'filter-green' : 'filter-red'"
            :classSV7="tkpmPagohStatus.SV7 == 1 ? 'filter-green' : 'filter-red'"
            :classSV8="tkpmPagohStatus.SV8 == 1 ? 'filter-green' : 'filter-red'"
            :classSV9="tkpmPagohStatus.SV9 == 1 ? 'filter-green' : 'filter-red'"
            :classSV10="
              tkpmPagohStatus.SV10 == 1 ? 'filter-green' : 'filter-red'
            "
            :classSV11="
              tkpmPagohStatus.SV11 == 1 ? 'filter-green' : 'filter-red'
            "
            :classSV12="
              tkpmPagohStatus.SV12 == 1 ? 'filter-green' : 'filter-red'
            "
            :classSV13="
              tkpmPagohStatus.SV13 == 1 ? 'filter-green' : 'filter-red'
            "
            :classSV14="
              tkpmPagohStatus.SV14 == 1 ? 'filter-green' : 'filter-red'
            "
            :classDosingPump1="
              tkpmPagohStatus.DP1 == 1 ? 'filter-green' : 'filter-red'
            "
            :classDosingPump2="
              tkpmPagohStatus.DP2 == 1 ? 'filter-green' : 'filter-red'
            "
            :classPump1="
              tkpmPagohStatus.P1 == 1 ? 'filter-green' : 'filter-red'
            "
            :classPump2="
              tkpmPagohStatus.P2 == 1 ? 'filter-green' : 'filter-red'
            "
            :classPump3="
              tkpmPagohStatus.P3 == 1 ? 'filter-green' : 'filter-red'
            "
            :classPumpNaturalWater="
              tkpmPagohStatus.PNW == 1 ? 'filter-green' : 'filter-red'
            "
            ph="7"
            waterLvl="30"
            EC1="2"
            EC2="4"
            EC3="5"
          />
        </v-col>
        <v-col
          cols="12"
          class="col-lg-3 pr-lg-10 pt-0"
          style="display:flex;justify-content:center; align-items:center; flex-direction:column"
        >
          <v-card class="elevation-18 rounded-lg px-5 mb-5 ">
            <v-card-title>PROCESS</v-card-title>
            <v-card-subtitle style="font-size:1.2em">
              {{ tkpmPagohProcess }}
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
                <div style="display:flex; justify-content:center">
                  <v-btn class="mt-4 mb-4">Start Preparation</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
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
import TkpmPagohStatus from "~/components/Status/TkpmPagohStatus.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import { mapState, mapMutations } from "vuex";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  middleware: ["isTkpmPagoh"],
  layout: "status",
  methods: {
    ...mapMutations({
      setTkpmPagohManualFill: "setTkpmPagohManualFill",
      setTkpmPagohManualStop: "setTkpmPagohManualStop"
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
      this.setTkpmPagohManualFill(true);
      console.log("fill");
    },
    stop: function() {
      this.setTkpmPagohManualStop(true);
      console.log("stop");
    }
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
      switchPump1: false,
      switchPump2: false,
      switchPump3: false,
      switchDosingPump1: false,
      switchDosingPump2: false,
      switchSV1: false,
      switchSV2: false,
      switchSV3: false,
      switchSV4: false,
      switchSV5: false,
      switchSV6: false,
      switchSV7: false,
      switchSV8: false,
      switchSV9: false,
      switchSV10: false,
      switchSV11: false,
      switchSV12: false,
      switchSV13: false,
      switchSV14: false,
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5
      },
      substance: "(substance)",
      itemsSubstance: ["water", "fertilizer"],
      block: [],
      itemsBlock: ["Block 1", "Block 2", "Block 3"]
    };
  },
  computed: {
    ...mapState({
      tkpmPagohStatus: state => state.tkpmPagohStatus,
      tkpmPagohProcess: state => state.tkpmPagohProcess
    })
  },
  components: {
    PageTitle,
    TkpmPagohStatus,
    VueSlickCarousel
  }
};
</script>

<style>
.overlay {
  position: relative;
  /* display: inline-block; */
  /* transition: transform 150ms ease-in-out; */
}
.overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  /* display: inline-block; */
  /* transition: transform 150ms ease-in-out; */
}

.filter-green {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(90%) contrast(119%);
  -webkit-animation: blinkGreen 1s infinite;
  -moz-animation: blinkGreen 1s infinite;
  -ms-animation: blinkGreen 1s infinite;
  -o-animation: blinkGreen 1s infinite;
  animation: blinkGreen 1s infinite;
}

.filter-red {
  filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
    brightness(94%) contrast(117%);
  -webkit-animation: blinkRed 1s infinite;
  -moz-animation: blinkRed 1s infinite;
  -ms-animation: blinkRed 1s infinite;
  -o-animation: blinkRed 1s infinite;
  animation: blinkRed 1s infinite;
}

/* BLINK RED */
@-webkit-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    /* background-color: #f00; */
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-moz-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-ms-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-o-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}

/* BLINK GREEN */
@-webkit-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    /* background-color: #f00; */
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-moz-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-ms-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-o-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
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
.switch2 {
  /* max-width: 92%; */
  display: flex;
  align-items: center;
  justify-content: center;
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

.flex {
  display: flex;
  flex-direction: row;
}

.station {
  /* width: 350px; */
  width: 90%;
  /* min-width: 180px; */
}

.v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}

button.slick-prev:before,
button.slick-next:before {
  color: #271f40 !important;
}

.v-input--switch--inset .v-input--switch__track,
.v-input--switch--inset .v-input--selection-controls__input {
  width: 40px;
}

.v-application--is-ltr
  .v-input--switch--inset.v-input--is-dirty
  .v-input--selection-controls__ripple,
.v-application--is-ltr
  .v-input--switch--inset.v-input--is-dirty
  .v-input--switch__thumb {
  transform: translate(12px, 0) !important;
}

@media (max-width: 1264px) {
  .switch {
    /* max-width: 92%; */
    align-items: center;
    /* justify-content: center; */
  }
}
</style>
