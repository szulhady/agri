<template>
  <v-card class="user-container elevation-10 rounded-lg">
    <div class="icon-container">
      <img src="avatar2.png" alt="avatar-icon" class="icon-avatar" />
    </div>
    <v-card-subtitle style="text-align:center; font-size:1.4rem">
      Username
    </v-card-subtitle>
    <v-card-subtitle>
      Name : Ali Bin Abu
    </v-card-subtitle>
    <v-card-subtitle>
      Email : user@gmail.com
    </v-card-subtitle>
    <v-card-subtitle>
      Location : Ipah 1
    </v-card-subtitle>
    <v-card-subtitle>
      Plant area : 300m2
    </v-card-subtitle>
    <v-card-subtitle>
      Type of plant system : a
    </v-card-subtitle>
    <v-card-subtitle>
      Type of irrigation system : b
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.user-container {
  background: #3c5a14;
}
.icon-container {
  display: flex;
}
.icon-avatar {
  padding-top: 20px;
  padding-bottom: 20px;
  margin: auto;
  width: 20%;
}

.v-card__subtitle {
  padding-top: 0px;
  padding-bottom: 15px;
  color: aliceblue !important;
  font-size: 0.9rem;
}
</style>
