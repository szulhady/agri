<template>
  <v-card class="elevation-10 weather-card py-5 rounded-xl">
    <v-card-subtitle>
      Today...
    </v-card-subtitle>
    <v-card-title class="display-2"> {{ feels_like }} °C </v-card-title>
    <div class="d-flex align-center">
      <!-- <div class="icon sunny">
        <div class="sun">
          <div class="rays"></div>
        </div>
      </div> -->
      <div v-if="weather === 'Clear'" class="icon sunny">
        <div class="sun">
          <div class="rays"></div>
        </div>
      </div>
      <!-- <div v-else-if="weather === 'shower rain'" class="icon sun-shower">
        <div class="cloud"></div>
        <div class="sun">
          <div class="rays"></div>
        </div>
        <div class="rain"></div>
      </div> -->
      <div v-else-if="weather === 'Thunderstorm'" class="icon thunder-storm">
        <div class="cloud"></div>
        <div class="lightning">
          <div class="bolt"></div>
          <div class="bolt"></div>
        </div>
      </div>
      <div v-else-if="weather === 'Rain'" class="icon rainy">
        <div class="cloud"></div>
        <div class="rain"></div>
      </div>
      <div v-else-if="weather === 'Clouds'" class="icon cloudy">
        <div class="cloud"></div>
        <div class="cloud"></div>
      </div>

      <div>
        <v-card-subtitle> Humidity: {{ humidity }}% </v-card-subtitle>
        <!-- <v-card-subtitle> Rainfall: {{ data.rainfall }}mm </v-card-subtitle> -->
        <v-card-subtitle>
          Wind: {{ windSpeed }}m/s, {{ windDeg }}°
        </v-card-subtitle>
        <v-card-subtitle> Pressure: {{ pressure }}Pa </v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: [
    "weather",
    "feels_like",
    "data",
    "humidity",
    "windSpeed",
    "windDeg",
    "pressure"
  ]
};
</script>

<style scoped>
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  /* height: 300px; */
  background: #11270b !important;
  color: white !important;
  /* border: 4px solid rgb(125, 176, 216); */
  /* background: inherit; */
}

.weather-card:before {
  filter: blur(10px);
}
.v-card__subtitle {
  padding: 4px;
  color: white !important;
}
.v-card__title {
  padding: 16px;
}

.display-3 {
  font-family: inherit !important;
}

.icon {
  position: relative;
  display: inline-block;
  width: 7em;
  height: 8em;
  font-size: 1em; /* control icon size here */
  transform: scale(0.7);
}

.cloud {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: currentColor;
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em, 2.0625em 0.9375em 0 -0.9375em,
    0 0 0 0.375em #fff, -2.1875em 0.6875em 0 -0.3125em #fff,
    2.0625em 0.9375em 0 -0.5625em #fff;
}
.cloud:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -0.5em;
  display: block;
  width: 4.5625em;
  height: 1em;
  background: currentColor;
  box-shadow: 0 0.4375em 0 -0.0625em #fff;
}
.cloud:nth-child(2) {
  z-index: 0;
  background: #fff;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em #fff,
    2.0625em 0.9375em 0 -0.9375em #fff, 0 0 0 0.375em #fff,
    -2.1875em 0.6875em 0 -0.3125em #fff, 2.0625em 0.9375em 0 -0.5625em #fff;
  opacity: 0.3;
  transform: scale(0.5) translate(6em, -3em);
  animation: cloud 4s linear infinite;
}
.cloud:nth-child(2):after {
  background: #fff;
}

.sun {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5em;
  height: 2.5em;
  margin: -1.25em;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em transparent;
  animation: spin 15s infinite linear;
}
.rays {
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  /* background: #fff; */
  background: white;
  border-radius: 0.25em;
  box-shadow: 0 5.375em white;
}
.rays:before,
.rays:after {
  content: "";
  position: absolute;
  top: 0em;
  left: 0em;
  display: block;
  width: 0.375em;
  height: 1.125em;
  transform: rotate(60deg);
  transform-origin: 50% 3.25em;
  background: white;
  border-radius: 0.25em;
  box-shadow: 0 5.375em white;
}
.rays:before {
  transform: rotate(120deg);
}
.cloud + .sun {
  margin: -2em 1em;
}

.rain,
.lightning,
.snow {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  /* background: currentColor; */
}

.rain:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 1.125em;
  height: 1.125em;
  margin: -1em 0 0 -0.25em;
  background: #0cf;
  border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
    -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
    -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  transform: rotate(-28deg);
  animation: rain 3s linear infinite;
}

.bolt {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -0.25em 0 0 -0.125em;
  color: #fff;
  opacity: 0.3;
  animation: lightning 2s linear infinite;
}
.bolt:nth-child(2) {
  width: 0.5em;
  height: 0.25em;
  margin: -1.75em 0 0 -1.875em;
  transform: translate(2.5em, 2.25em);
  opacity: 0.2;
  animation: lightning 1.5s linear infinite;
}
.bolt:before,
.bolt:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: -1.625em 0 0 -1.0125em;
  border-top: 1.25em solid transparent;
  border-right: 0.75em solid;
  border-bottom: 0.75em solid;
  border-left: 0.5em solid transparent;
  transform: skewX(-10deg);
}
.bolt:after {
  margin: -0.25em 0 0 -0.25em;
  border-top: 0.75em solid;
  border-right: 0.5em solid transparent;
  border-bottom: 1.25em solid transparent;
  border-left: 0.75em solid;
  transform: skewX(-10deg);
}
.bolt:nth-child(2):before {
  margin: -0.75em 0 0 -0.5em;
  border-top: 0.625em solid transparent;
  border-right: 0.375em solid;
  border-bottom: 0.375em solid;
  border-left: 0.25em solid transparent;
}
.bolt:nth-child(2):after {
  margin: -0.125em 0 0 -0.125em;
  border-top: 0.375em solid;
  border-right: 0.25em solid transparent;
  border-bottom: 0.625em solid transparent;
  border-left: 0.375em solid;
}

.flake:before,
.flake:after {
  content: "\2744";
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.025em 0 0 -1.0125em;
  color: #fff;
  list-height: 1em;
  opacity: 0.2;
  animation: spin 8s linear infinite reverse;
}
.flake:after {
  margin: 0.125em 0 0 -1em;
  font-size: 1.5em;
  opacity: 0.4;
  animation: spin 14s linear infinite;
}
.flake:nth-child(2):before {
  margin: -0.5em 0 0 0.25em;
  font-size: 1.25em;
  opacity: 0.2;
  animation: spin 10s linear infinite;
}
.flake:nth-child(2):after {
  margin: 0.375em 0 0 0.125em;
  font-size: 2em;
  opacity: 0.4;
  animation: spin 16s linear infinite reverse;
}

/* Animations */

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes cloud {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
}

@keyframes rain {
  0% {
    background: #0cf;
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  }
  50% {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 #0cf;
  }
}

@keyframes lightning {
  45% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
  50% {
    color: #0cf;
    background: #0cf;
    opacity: 1;
  }
  55% {
    color: #fff;
    background: #fff;
    opacity: 0.2;
  }
}

@media (max-width: 720px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .v-card__subtitle {
    font-size: 0.8rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.6);
  }
  .display-3 {
    font-size: 2rem !important;
    padding: 0;
  }
}

/* Iphone XR */
@media (max-width: 376px) {
  .v-card__subtitle {
    font-size: 0.75rem;
    padding: 2px;
  }
}
/* MOTO G4/ Galaxy S5 */
@media (max-width: 360px) {
  .v-card__subtitle {
    font-size: 0.7rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.5);
  }
  .display-3 {
    font-size: 1.7rem !important;
    padding: 0;
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .v-card__subtitle {
    font-size: 0.65rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.4);
  }
  .display-3 {
    font-size: 1.5rem !important;
    padding: 0;
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .v-card__subtitle {
    font-size: 0.6rem;
    padding: 2px;
  }
  .icon {
    transform: scale(0.4);
  }
  .display-3 {
    font-size: 1.5rem !important;
    padding: 0;
  }
}
</style>
