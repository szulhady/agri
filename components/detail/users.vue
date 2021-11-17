<template>
  <section>
    <v-card>
      <template>
        <v-form v-model="valid" v-on:submit.prevent>
          <v-container>
            <v-card-title>
              FORM
            </v-card-title>
            <v-card-title>
              User registration
            </v-card-title>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="fullName"
                  :rules="nameRules"
                  label="Full name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="widthArea"
                  label="Width area"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfPlant"
                  label="Type of plant"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="location"
                  label="Location"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfPlantSystem"
                  label="Type of plant system"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfIrrigationSystem"
                  label="Type of irrigation system"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="typeOfWaterSource"
                  label="Type of water source"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-card-title>
              Operation information
            </v-card-title>
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
            <v-card-title>
              Yield crop information
            </v-card-title>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="dateOfPlantingYieldCropInformation"
                  label="Date of planting"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="dateOfCropYieldYieldCropInformation"
                  label="Date of crop yield"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="yieldQuantity"
                  label="Yield quantity"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="damageYieldQuantity"
                  label="Damage yield quantity"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="sellingPrice"
                  label="Selling price"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="salesRevenue"
                  label="Sales revenue"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-card-title>
              Report
            </v-card-title>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="seasonalResult"
                  label="Seasonal result"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="annualResult"
                  label="Annual result"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="salesRevenueReport"
                  label="Sales revenue"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="yieldImprovement"
                  label="Yield improvement"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="irrigationPeriod"
                  label="Irrigation period"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="rainIntensity"
                  label="Rain intensity"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="daysOfRaining"
                  label="Days of raining"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="systemBreakdown"
                  label="System breakdown"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="generateReport" color="primary">
              Submit
            </v-btn>
          </v-container>
        </v-form>
      </template>
    </v-card>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: state => state.activeUser
    })
  },
  data: () => ({
    valid: false,
    fullName: "",
    widthArea: "",
    typeOfPlant: "",
    location: "",
    typeOfPlantSystem: "",
    typeOfIrrigationSystem: "",
    typeOfWaterSource: "",

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

    dateOfPlantingYieldCropInformation: "",
    dateOfCropYieldYieldCropInformation: "",
    yieldQuantity: "",
    damageYieldQuantity: "",
    sellingPrice: "",
    salesRevenue: "",

    seasonalResult: "",
    annualResult: "",
    salesRevenueReport: "",
    yieldImprovement: "",
    irrigationPeriod: "",
    rainIntensity: "",
    daysOfRaining: "",
    systemBreakdown: "",

    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 1000 || "Must be less than 1000 characters"
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
        // .$post("http://127.0.0.1:5000/api/report/form", {
        // .$post("http://139.59.109.48/api/report/form", {
        .$post("http://159.223.55.150/api/report/form", {
          user_id: this.user,
          fullName: this.fullName,
          widthArea: this.widthArea,
          typeOfPlant: this.typeOfPlant,
          location: this.location,
          typeOfPlantSystem: this.typeOfPlantSystem,
          typeOfIrrigationSystem: this.typeOfIrrigationSystem,
          typeOfWaterSource: this.typeOfWaterSource,

          typeOfWaterPump: this.typeOfWaterPump,
          waterPumpOutput: this.waterPumpOutput,
          typeOfFertilizer: this.typeOfFertilizer,
          typeOfInsecticide: this.typeOfInsecticide,
          typeOfNozzle: this.typeOfNozzle,
          durationOfFlush: this.durationOfFlush,
          dateOfPlanting: this.dateOfPlanting,
          dateOfCropYield: this.dateOfCropYield,
          fertilizingDate: this.fertilizingDate,
          insecticideProcessDate: this.insecticideProcessDate,

          dateOfPlantingYieldCropInformation: this
            .dateOfPlantingYieldCropInformation,
          dateOfCropYieldYieldCropInformation: this
            .dateOfCropYieldYieldCropInformation,
          yieldQuantity: this.yieldQuantity,
          damageYieldQuantity: this.damageYieldQuantity,
          sellingPrice: this.sellingPrice,
          salesRevenue: this.salesRevenue,

          seasonalResult: this.seasonalResult,
          annualResult: this.annualResult,
          salesRevenueReport: this.salesRevenueReport,
          yieldImprovement: this.yieldImprovement,
          irrigationPeriod: this.irrigationPeriod,
          rainIntensity: this.rainIntensity,
          daysOfRaining: this.daysOfRaining,
          systemBreakdown: this.systemBreakdown
        })
        .then(response => {
          // console.log(response);
          // window.location.reload();
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    // console.log(this.$auth.$state.user.userId);
  }
};
</script>

<style></style>
