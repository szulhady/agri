<template>
  <section>
    <!-- <v-btn icon>
      <v-icon>mdi-plus</v-icon>
    </v-btn> -->
    <div>
      <v-row>
        <v-col cols="12">
          <vue-timepicker
            v-model="yourStringTimeValue1"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue2"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue3"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue4"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue5"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue6"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue7"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue8"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue9"
            format="HH:mm"
          ></vue-timepicker>
          <vue-timepicker
            v-model="yourStringTimeValue10"
            format="HH:mm"
          ></vue-timepicker>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
// Main JS (in UMD format)
import VueTimepicker from "vue2-timepicker";

// CSS
import "vue2-timepicker/dist/VueTimepicker.css";
export default {
  components: {
    VueTimepicker
  },
  data() {
    return {
      time: [],
      time1: "",
      yourStringTimeValue1: "",
      yourStringTimeValue2: "",
      yourStringTimeValue3: "",
      yourStringTimeValue4: "",
      yourStringTimeValue5: "",
      yourStringTimeValue6: "",
      yourStringTimeValue7: "",
      yourStringTimeValue8: "",
      yourStringTimeValue9: "",
      yourStringTimeValue10: ""
    };
  },
  methods: {},
  watch: {
    yourStringTimeValue1: function(val) {
      console.log(val);
    }
  }
};
</script>

<style></style>
