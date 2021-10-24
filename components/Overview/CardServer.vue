<template>
  <v-card class="elevation-15 rounded-lg">
    <v-card-title class="color">SERVER</v-card-title>
    <Server disc="20" temperature="50" speed="2000" />
    <hr class="hr" />
    <Duration duration="Updated just now" />
  </v-card>
</template>

<script>
import CardTitle from "~/components/CardTitle";
import Server from "~/components/Overview/Single/Server";
import Duration from "~/components/Duration";

export default {
  components: {
    CardTitle,
    Server,
    Duration
  },
  computed: {}
};
</script>

<style scoped>
.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}
</style>
