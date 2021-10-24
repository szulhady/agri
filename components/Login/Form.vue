<template>
  <section class="form-background">
    <h2 class="text-center">LOGIN</h2>
    <Notification :message="error" v-if="error" id="notification" />
    <v-form method="post" @submit.prevent="login">
      <div class="field">
        <div class="control">
          <v-text-field
            type="email"
            class="input"
            label="Email"
            v-model="email"
          >
          </v-text-field>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <v-text-field
            type="password"
            class="input"
            label="Password"
            v-model="password"
          ></v-text-field>
        </div>
      </div>
      <div class="control">
        <v-btn block type="submit" outlined class="submit-btn">Log In</v-btn>
      </div>
      <div class="has-text-centered" style="margin-top: 20px">
        <p>
          Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
        </p>
      </div>
    </v-form>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import Notification from "~/components/Notification";

export default {
  components: {
    Notification
  },

  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          })
          .then(response => {
            console.log(response);
            this.setActiveUser(response.userId);
            this.$router.push("/");
          });
      } catch (e) {
        console.log(e);
        this.error = [{ msg: "Email/password is incorrect" }];
      }
    },

    track: function() {
      window.onclick = event => {
        const modal = document.getElementById("notification");
        if (event.target != modal) {
          this.error = null;
        }
      };
    },
    ...mapMutations({
      setActiveUser: "setActiveUser"
    })
  },
  mounted() {
    this.track();
  }
};
</script>

<style scoped>
.text-center {
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
.control {
  outline: 1px;
  width: 300px;
}

.input {
  font-size: 18px;
}

.submit-btn {
  font-family: "Montserrat", sans-serif;
}

a {
  color: cadetblue;
  text-decoration: none;
}
</style>
