<template>
  <section>
    <v-card>
      <v-card-title>
        User registration
      </v-card-title>
      <template>
        <v-form v-model="valid" v-on:submit.prevent>
          <v-container>
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
    fullName: "",
    widthArea: "",
    typeOfPlant: "",
    location: "",
    typeOfPlantSystem: "",
    typeOfIrrigationSystem: "",
    typeOfWaterSource: "",
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
        .$post("http://127.0.0.1:5000/api/report/userRegister", {
          fullName: this.fullName,
          widthArea: this.widthArea,
          typeOfPlant: this.typeOfPlant,
          location: this.location,
          typeOfPlantSystem: this.typeOfPlantSystem,
          typeOfIrrigationSystem: this.typeOfIrrigationSystem,
          typeOfWaterSource: this.typeOfWaterSource
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
