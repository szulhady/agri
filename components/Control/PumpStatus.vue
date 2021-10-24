<template>
  <section>
    <v-scroll-y-transition>
      <div class="layer" v-if="rightDrawer" id="layer"></div>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card class="logout elevation-12" v-if="rightDrawer">
        <v-card-title>
          Pump Control
        </v-card-title>
        <hr class="hr" />
        <v-card-subtitle v-if="pumpStatus === false && command === true">
          The pump is off now, are you sure to on?
        </v-card-subtitle>
        <v-card-subtitle v-if="pumpStatus === false && command === false">
          The pump is currently off
        </v-card-subtitle>
        <v-card-subtitle v-if="pumpStatus === true && command === false">
          The pump is on now, are you sure to off?
        </v-card-subtitle>
        <v-card-subtitle v-if="pumpStatus === true && command === true">
          The pump is currently on
        </v-card-subtitle>
        <div class="btn-div">
          <v-btn
            v-if="
              (pumpStatus === false && command === false) ||
                (pumpStatus === true && command === true)
            "
            @click="action"
            class="success logout-btn"
            >Okay</v-btn
          >
          <v-btn
            v-if="
              (pumpStatus === false && command === true) ||
                (pumpStatus === true && command === false)
            "
            @click="action"
            class="success logout-btn"
            >Yes</v-btn
          >
          <v-btn
            v-if="
              (pumpStatus === false && command === true) ||
                (pumpStatus === true && command === false)
            "
            @click="cancel"
            class="error logout-btn"
            >Cancel</v-btn
          >
        </div>
      </v-card>
    </v-scroll-y-transition>
    <v-row>
      <v-col cols="3">
        <v-card class="elevation-10 rounded-lg user-container">
          <v-card-title>
            PUMP STATUS
          </v-card-title>
          <div class="led-green" id="box"></div>
          <v-card-title style="justify-content:center">
            ON
          </v-card-title>
          <!-- <div class="led-green" id="box"></div>
        <v-card-title style="justify-content:center">
          ON
        </v-card-title> -->
        </v-card>
      </v-col>
      <v-col cols="9">
        <div class="mb-8">
          <v-card-title class="less">AUTO SETUP</v-card-title>
          <v-row align="center">
            <v-col cols="3">
              <v-card-title>
                Rate per day
              </v-card-title>
              <v-subheader>Default setting is 5 times a day</v-subheader>
            </v-col>

            <v-col cols="5">
              <v-select
                v-model="select"
                :hint="`Schedule:  ${select.abbr}`"
                :items="items"
                item-text="state"
                item-value="abbr"
                label="Select"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-card-title>MANUAL SETUP</v-card-title>
          <v-row>
            <v-col cols="12">
              <v-btn
                class="mx-5"
                style="width:120px"
                @click.stop="rightDrawer = !rightDrawer"
                @click="info(true)"
                >ON PUMP</v-btn
              >
              <v-btn
                class="mx-5"
                style="width:120px"
                @click.stop="rightDrawer = !rightDrawer"
                @click="info(false)"
                >OFF PUMP</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      command: "",
      pumpStatus: true,
      rightDrawer: false,
      select: { state: "5", abbr: "09:00, 11:00, 13:00, 15:00, 17:00" },
      items: [
        { state: "5 times", abbr: "09:00, 11:00, 13:00, 15:00, 17:00" },
        { state: "6 times", abbr: "07:00,09:00, 11:00, 13:00, 15:00, 17:00" },
        {
          state: "7 times",
          abbr: "07:00,09:00, 11:00, 13:00, 15:00, 17:00, 19:00"
        }
      ]
    };
  },
  methods: {
    info: function(info) {
      this.command = info;
    },
    action: async function() {
      // await this.$auth.logout();
      // this.resetState()
      console.log("action");
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
    }
  }
};
</script>

<style scoped>
.user-container {
  background: #3c5a14;
  color: aliceblue;
}
.led-red {
  margin: 0 auto;
  width: 88px;
  height: 88px;
  background-color: #f00;
  border-radius: 50% !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
    rgba(255, 0, 0, 0.5) 0 2px 12px;
  -webkit-animation: blinkRed 0.5s infinite;
  -moz-animation: blinkRed 0.5s infinite;
  -ms-animation: blinkRed 0.5s infinite;
  -o-animation: blinkRed 0.5s infinite;
  animation: blinkRed 0.5s infinite;
}

@-webkit-keyframes blinkRed {
  from {
    background-color: #f00;
  }
  50% {
    background-color: #a00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0;
  }
  to {
    background-color: #f00;
  }
}
@-moz-keyframes blinkRed {
  from {
    background-color: #f00;
  }
  50% {
    background-color: #a00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0;
  }
  to {
    background-color: #f00;
  }
}
@-ms-keyframes blinkRed {
  from {
    background-color: #f00;
  }
  50% {
    background-color: #a00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0;
  }
  to {
    background-color: #f00;
  }
}
@-o-keyframes blinkRed {
  from {
    background-color: #f00;
  }
  50% {
    background-color: #a00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0;
  }
  to {
    background-color: #f00;
  }
}
@keyframes blinkRed {
  from {
    background-color: #f00;
  }
  50% {
    background-color: #a00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0;
  }
  to {
    background-color: #f00;
  }
}

.led-green {
  margin: 0 auto;
  width: 88px;
  height: 88px;
  background-color: #abff00;
  border-radius: 50% !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
    #96ff00 0 2px 12px;
  -webkit-animation: blinkGreen 0.5s infinite;
  -moz-animation: blinkGreen 0.5s infinite;
  -ms-animation: blinkGreen 0.5s infinite;
  -o-animation: blinkGreen 0.5s infinite;
  animation: blinkGreen 0.5s infinite;
}

@-webkit-keyframes blinkGreen {
  from {
    background-color: #abff00;
  }
  50% {
    background-color: #8cff00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      #96ff00 0 2px 0;
  }
  to {
    background-color: #abff00;
  }
}
@-moz-keyframes blinkGreen {
  from {
    background-color: #abff00;
  }
  50% {
    background-color: #8cff00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      #96ff00 0 2px 0;
  }
  to {
    background-color: #abff00;
  }
}
@-ms-keyframes blinkGreen {
  from {
    background-color: #abff00;
  }
  50% {
    background-color: #8cff00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      #96ff00 0 2px 0;
  }
  to {
    background-color: #abff00;
  }
}
@-o-keyframes blinkGreen {
  from {
    background-color: #abff00;
  }
  50% {
    background-color: #8cff00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      #96ff00 0 2px 0;
  }
  to {
    background-color: #abff00;
  }
}
@keyframes blinkGreen {
  from {
    background-color: #abff00;
  }
  50% {
    background-color: #8cff00;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      #96ff00 0 2px 0;
  }
  to {
    background-color: #abff00;
  }
}

.v-card__title.less {
  padding-bottom: 0;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 999;
}
</style>
