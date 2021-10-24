<template>
  <v-row class="full-size">
    <v-col class="flex-form" cols="12" md="7">
      <img class="login-background" src="Nex-plex-logo-final.png" alt="" />
    </v-col>
    <v-col cols="12" md="5" class="flex-form ">
      <login-form />
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from "~/components/Login/Form";
import { mapGetters } from "vuex";
export default {
  layout: "login",
  components: {
    LoginForm
  },
  computed: {
    ...mapGetters(["loggedInUser", "isAuthenticated"])
  },
  async mounted() {
    // this.$mqtt = await this.$mqtt
    // console.log(this.loggedInUser)

    if (this.loggedInUser) {
      console.log(this.loggedInUser);
      // this.$mqtt.unsubscribe(this.loggedInUser.topics);
    }
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
