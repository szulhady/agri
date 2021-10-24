<template>
  <v-row class="full-size">
    <v-col cols="12" md="7" class="flex-form">
      <img src="Nex-plex-logo-final.png" alt="" class="login-background" />
    </v-col>
    <v-col cols="12" md="5" class="flex-form ">
      <FormRegister />
    </v-col>
  </v-row>
</template>

<script>
import FormRegister from "~/components/Register/Form2";
import { mapGetters } from "vuex";
export default {
  layout: "login",
  components: {
    FormRegister
  },
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"])
  }
};
</script>

<style scoped>
.full-size {
  min-height: 100vh;
}

.flex-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-background {
  width: 60%;
  height: 60%;
  opacity: 1;
}

@media only screen and (max-width: 960px) {
  .login-background {
    width: 50%;
    height: 50%;
    opacity: 1;
  }
}
</style>
