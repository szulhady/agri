<template>
  <v-card class="elevation-15 rounded-lg pb-8">
    <!-- <CardTitle title="Weather" class="pb-3" /> -->
    <v-card-title class="color mb-4">WEATHER</v-card-title>
    <div class="container2" v-if="$vuetify.breakpoint.smAndUp">
      <WeatherMain
        class=" mb-3 mb-md-0 mx-4"
        :weather="weather[0].weatherMain"
        :feels_like="weather[0].feels_like"
        :humidity="weather[0].humidity"
        :windSpeed="weather[0].windSpeed"
        :windDeg="weather[0].windDeg"
        :pressure="weather[0].pressure"
      />
      <!-- :data="weather" -->
      <!-- <WeatherMain
        class=" mb-3 mb-md-0"
        :weather="forecasts[0].weather[0].main"
        :data="weather"
      /> -->
      <!-- :weather="forecasts[0].weather[0].description" -->
      <!-- <div class='d-flex forecastContainer'> -->
      <v-row class=" forecastContainer">
        <v-col cols="6" class="col-md-3">
          <Weather
            day="Monday"
            :date="weather[1].dt_txt"
            :weather="weather[1].weatherMain"
            :description="weather[1].weatherDescription"
            :feels_like="weather[1].feels_like"
            :temp_max="weather[1].temp_max"
            :temp_min="weather[1].temp_min"
            :humidity="weather[1].humidity"
          />
          <!-- 
            :feels_like_day="forecasts[1].main.temp"
            :description="forecasts[1].weather[0].description"
            :date="forecasts[1].dt_txt" -->
        </v-col>
        <v-col cols="6" class="col-md-3">
          <Weather
            day="Monday"
            :date="weather[2].dt_txt"
            :weather="weather[2].weatherMain"
            :description="weather[2].weatherDescription"
            :feels_like="weather[2].feels_like"
            :temp_max="weather[2].temp_max"
            :temp_min="weather[2].temp_min"
            :humidity="weather[2].humidity"
          />
          <!-- <Weather
            day="Tuesday"
            :weather="forecasts[2].weather[0].main"
            :temp="forecasts[2].main.temp"
            :description="forecasts[2].weather[0].description"
            :date="forecasts[2].dt_txt"
          /> -->
        </v-col>
        <v-col cols="6" class="col-md-3 d-none d-md-block">
          <Weather
            day="Monday"
            :date="weather[3].dt_txt"
            :weather="weather[3].weatherMain"
            :description="weather[3].weatherDescription"
            :feels_like="weather[3].feels_like"
            :temp_max="weather[3].temp_max"
            :temp_min="weather[3].temp_min"
            :humidity="weather[3].humidity"
          />
          <!-- <Weather
            day="Wednesday"
            :weather="forecasts[3].weather[0].main"
            :temp="forecasts[3].main.temp"
            :description="forecasts[3].weather[0].description"
            :date="forecasts[3].dt_txt"
          /> -->
        </v-col>
        <v-col cols="6" class="col-md-3 d-none d-md-block">
          <Weather
            day="Monday"
            :date="weather[4].dt_txt"
            :weather="weather[4].weatherMain"
            :description="weather[4].weatherDescription"
            :feels_like="weather[4].feels_like"
            :temp_max="weather[4].temp_max"
            :temp_min="weather[4].temp_min"
            :humidity="weather[4].humidity"
          />
          <!-- <Weather
            day="Thursday"
            :weather="forecasts[4].weather[0].main"
            :temp="forecasts[4].main.temp"
            :description="forecasts[4].weather[0].description"
            :date="forecasts[4].dt_txt"
          /> -->
        </v-col>
      </v-row>
      <!-- </div> -->
    </div>
    <div v-else>
      <div style="display:flex; justify-content:center">
        <WeatherMain
          :weather="weather[0].weatherMain"
          :feels_like="weather[0].feels_like"
          :humidity="weather[0].humidity"
          :windSpeed="weather[0].windSpeed"
          :windDeg="weather[0].windDeg"
          :pressure="weather[0].pressure"
        />
      </div>
      <div class="mt-5">
        <VueSlickCarousel
          :arrows="true"
          :dots="true"
          v-bind="settings"
          style="display:flex; justify-content:center"
        >
          <Weather
            day="Monday"
            :date="weather[1].dt_txt"
            :weather="weather[1].weatherMain"
            :description="weather[1].weatherDescription"
            :feels_like="weather[1].feels_like"
            :temp_max="weather[1].temp_max"
            :temp_min="weather[1].temp_min"
            :humidity="weather[1].humidity"
          />
          <Weather
            day="Monday"
            :date="weather[2].dt_txt"
            :weather="weather[2].weatherMain"
            :description="weather[2].weatherDescription"
            :feels_like="weather[2].feels_like"
            :temp_max="weather[2].temp_max"
            :temp_min="weather[2].temp_min"
            :humidity="weather[2].humidity"
          />
          <Weather
            day="Monday"
            :date="weather[3].dt_txt"
            :weather="weather[3].weatherMain"
            :description="weather[3].weatherDescription"
            :feels_like="weather[3].feels_like"
            :temp_max="weather[3].temp_max"
            :temp_min="weather[3].temp_min"
            :humidity="weather[3].humidity"
          />
          <Weather
            day="Monday"
            :date="weather[4].dt_txt"
            :weather="weather[4].weatherMain"
            :description="weather[4].weatherDescription"
            :feels_like="weather[4].feels_like"
            :temp_max="weather[4].temp_max"
            :temp_min="weather[4].temp_min"
            :humidity="weather[4].humidity"
          />
        </VueSlickCarousel>
      </div>
    </div>
  </v-card>
</template>

<script>
import CardTitle from "~/components/CardTitle";
import WeatherMain from "~/components/Overview/Single/WeatherMain";
import Weather from "~/components/Overview/Single/Weather";
import { mapState } from "vuex";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        dots: true,
        // "focusOnSelect": true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5
      }
    };
  },
  components: {
    CardTitle,
    WeatherMain,
    Weather,
    VueSlickCarousel
  },
  computed: {
    ...mapState({
      forecasts: state => state.forecasts,
      weather: state => state.weatherIpah
    })
  },
  mounted() {
    // console.log(this.forecasts);
    // console.log("this.forecasts");
  }
};
</script>

<style>
.slick-initialized .slick-slide {
  display: flex !important;
  justify-content: center !important;
}

button.slick-prev:before,
button.slick-next:before {
  color: black !important;
}
.slick-prev {
  margin-left: 50px;
  z-index: 100;
}

.slick-next {
  margin-right: 50px;
  z-index: 100;
}
</style>
<style scoped>
.row {
  margin: 0;
}
.container2 {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.forecastContainer {
  flex-grow: inherit;
  justify-content: center;
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
}
/* Iphone XR */
@media (max-width: 376px) {
}
/* MOTO G4/ Galaxy S5 */
@media (max-width: 360px) {
}

/* Iphone 5/SE */
@media (max-width: 320px) {
}

/* Galaxy Fold */
@media (max-width: 300px) {
}
</style>
