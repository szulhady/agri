<template>
  <!-- <v-layout> -->
  <!-- <v-flex v-for='(station, index) in stations' :key='index'> -->
  <v-card class="elevation-15 rounded-md">
    <v-card-title class="sidebar ">
      {{ jetty }}
    </v-card-title>
    <div class="reading-box">
      <div
        v-for="(data, index) in sensorData"
        :key="index"
        class="reading"
        :sensorData="sensorData"
      >
        <v-card-subtitle class="top" :class="data.class">
          <span>
            {{ data.description }}
          </span>
        </v-card-subtitle>
        <v-card-subtitle class="middle" :class="data.isHigh ? 'high' : 'low'">
          {{ data.data }}
        </v-card-subtitle>
        <v-card-subtitle class="bottom">
          {{ data.unit }}
        </v-card-subtitle>
      </div>
    </div>
    <!-- <hr /> -->
    <!-- <Duration :duration="duration" /> -->
  </v-card>
  <!-- </v-flex> -->
  <!-- </v-layout> -->
</template>

<script>
import Duration from "~/components/Duration";
export default {
  components: {
    Duration
  },
  props: ["jetty", "sensorData", "sensorUnit", "duration"]
};
</script>

<style scoped>
.v-card__title {
  color: aliceblue;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 0.95rem;
}
.v-card__subtitle {
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 0.9rem;
}
.top {
  font-weight: 600;
  padding-top: 20px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  min-height: 50px;
}
.bottom {
  padding-bottom: 20px;
}
.reading-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.reading {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* width: 50px; */
}

hr {
  margin: 0 20px;
}

.low {
  color: black !important;
  font: normal;
}
.high {
  color: rgb(255, 10, 10) !important;
  font: bold;
}

/* Oxygen */
/* .O2:hover span{
  display: none;
}

.O2:hover:after{
  content:"Oxygen";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;;
} */

/* Lower Explosive Limit */
/* .LEL:hover span{
  display: none;
}

.LEL:hover:after{
  content:"Lower Explosive Limit";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
  display: flex;
  flex-wrap: wrap;
} */

/* Volatile Organic Compounds */
/* .VOC:hover span{
  display: none;
}

.VOC:hover:after{
  content:"Volatile Organic Compounds";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
} */

/* Ammonia */
/* .NH3:hover span{
  display: none;
}

.NH3:hover:after{
  content:"Ammonia";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
} */

/* Chlorine */
/* .CL2:hover span{
  display: none;
}

.CL2:hover:after{
  content:"Chlorine";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
} */

/* Ammonia */
/* .H2S:hover span{
  display: none;
}

.H2S:hover:after{
  content:"H2S";
  position: absolute;
  font-style: italic;
  font-weight: bold;
  font-size:1.1em;
} */

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .v-card__title {
    font-size: 0.9rem;
  }
  .top,
  .bottom {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 0.8rem;
  }
  .middle {
    font-size: 0.9rem;
    padding-left: 0;
    padding-right: 0;
  }
}
/* Iphone XR */
@media (max-width: 376px) {
  .v-card__title {
    font-size: 0.9rem;
  }
  .top,
  .bottom {
    padding-left: 0px;
    padding-right: 0px;
    font-size: 0.8rem;
  }
  .middle {
    font-size: 0.85rem;
    padding-left: 0;
    padding-right: 0;
  }
}
/* MOTO G4/ Galaxy S5 */
@media (max-width: 360px) {
  .v-card__title {
    font-size: 0.85rem;
  }
  .top,
  .bottom {
    padding-left: 0px;
    padding-right: 0px;
    font-size: 0.8rem;
  }
  .middle {
    font-size: 0.85rem;
    padding-left: 0;
    padding-right: 0;
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .v-card__title {
    font-size: 0.8rem;
  }
  .top,
  .bottom {
    padding-left: 0px;
    padding-right: 0px;
    font-size: 0.65rem;
  }
  .middle {
    font-size: 0.75rem;
    padding-left: 0;
    padding-right: 0;
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .v-card__title {
    font-size: 0.8rem;
  }
  .top,
  .bottom {
    padding-left: 0px;
    padding-right: 0px;
    font-size: 0.6rem;
  }
  .middle {
    font-size: 0.7rem;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
