<template>
  <v-row>
    <v-col v-for="(item, index) in summary" :key="index">
      <Summary
        :detail="item.detail"
        :icon="item.icon"
        :data="item.data"
        :classIcon="item.class"
      />
    </v-col>
  </v-row>
</template>

<script>
import Summary from "~/components/Overview/Single/Summary";
export default {
  data() {
    return {
      summary: [
        {
          detail: "Stations",
          icon: "mdi mdi-map-marker-radius",
          data: "3",
          class: "primary"
        },
        {
          detail: "SPH",
          icon: "mdi mdi-checkbox-multiple-marked",
          data: "1",
          class: "accent"
        },
        {
          detail: "Warnings",
          icon: "mdi mdi-alert-rhombus-outline",
          data: "0",
          class: "error"
        }
      ]
    };
  },
  components: {
    Summary
  }
};
</script>

<style></style>
