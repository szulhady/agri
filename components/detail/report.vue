<template>
  <section>
    <v-card>
      <v-card-title>
        Report
      </v-card-title>
      <template>
        <v-form v-model="valid" v-on:submit.prevent>
          <v-container>
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
                  v-model="salesRevenue"
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
    seasonalResult: "",
    annualResult: "",
    salesRevenue: "",
    yieldImprovement: "",
    irrigationPeriod: "",
    rainIntensity: "",
    daysOfRaining: "",
    systemBreakdown: "",
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
        .$post("http://127.0.0.1:5000/api/report/report", {
          seasonalResult: this.seasonalResult,
          annualResult: this.annualResult,
          salesRevenue: this.salesRevenue,
          yieldImprovement: this.yieldImprovement,
          irrigationPeriod: this.irrigationPeriod,
          rainIntensity: this.rainIntensity,
          daysOfRaining: this.daysOfRaining,
          systemBreakdown: this.systemBreakdown
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
