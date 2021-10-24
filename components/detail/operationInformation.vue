<template>
  <section>
    <v-card>
      <v-card-title>
        Operation information
      </v-card-title>
      <template>
        <v-form v-model="valid" v-on:submit.prevent>
          <v-container>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfWaterPump"
                  label="Type of water pump"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="waterPumpOutput"
                  label="Water pump output"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfFertilizer"
                  label="Type of fertilizer"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfInsecticide"
                  label="Type of insecticide"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfNozzle"
                  label="Type of nozzle"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="durationOfFlush"
                  label="Duration of flush"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="dateOfPlanting"
                  label="Date of planting"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="dateOfCropYield"
                  label="Date of crop yield"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="fertilizingDate"
                  label="Fertilizing date"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="insecticideProcessDate"
                  label="Insecticide process date"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="generateReport" color="primary">
              Generate report
            </v-btn>
          </v-container>
        </v-form>
      </template>
    </v-card>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    typeOfWaterPump: "",
    waterPumpOutput: "",
    typeOfFertilizer: "",
    typeOfInsecticide: "",
    typeOfNozzle: "",
    durationOfFlush: "",
    dateOfPlanting: "",
    dateOfCropYield: "",
    fertilizingDate: "",
    insecticideProcessDate: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    generateReport: function() {
      console.log("submited");

      this.$axios
        // .$post("http://139.59.109.48/api/setSchedule/ipah2/nutrient", {
        .$post("http://127.0.0.1:5000/api/report/operationInformation", {
          typeOfWaterPump: this.typeOfWaterPump,
          waterPumpOutput: this.waterPumpOutput,
          typeOfFertilizer: this.typeOfFertilizer,
          typeOfInsecticide: this.typeOfInsecticide,
          typeOfNozzle: this.typeOfNozzle,
          durationOfFlush: this.durationOfFlush,
          dateOfPlanting: this.dateOfPlanting,
          dateOfCropYield: this.dateOfCropYield,
          fertilizingDate: this.fertilizingDate,
          insecticideProcessDate: this.insecticideProcessDate
        })
        .then(response => {
          console.log(response);
          // window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
