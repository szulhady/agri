<template>
  <section>
    <v-card>
      <v-card-title>
        Yield crop information
      </v-card-title>
      <template>
        <v-form v-model="valid" v-on:submit.prevent>
          <v-container>
            <v-row>
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
    dateOfPlanting: "",
    dateOfCropYield: "",
    yieldQuantity: "",
    damageYieldQuantity: "",
    sellingPrice: "",
    salesRevenue: "",
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
        .$post("http://127.0.0.1:5000/api/report/yieldCropInformation", {
          dateOfPlanting: this.dateOfPlanting,
          dateOfCropYield: this.dateOfCropYield,
          yieldQuantity: this.yieldQuantity,
          damageYieldQuantity: this.damageYieldQuantity,
          sellingPrice: this.sellingPrice,
          salesRevenue: this.salesRevenue
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
