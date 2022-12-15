<template>
  <section>
    <v-row v-if="$vuetify.breakpoint.smAndUp">
      <v-col cols="4">
        <Summary
          :detail="summary[0].detail"
          :icon="summary[0].icon"
          :data="summary[0].data"
          :classIcon="summary[0].class"
        />
      </v-col>
      <v-col cols="4">
        <Summary
          :detail="summary[1].detail"
          :icon="summary[1].icon"
          :data="summary[1].data"
          :classIcon="summary[1].class"
        />
      </v-col>
      <v-col cols="4">
        <Summary
          :detail="summary[2].detail"
          :icon="summary[2].icon"
          :data="summary[2].data"
          :classIcon="summary[2].class"
        />
      </v-col>
      <!-- <v-col
      v-for="(item, index) in summary"
      :key="index"
      cols="index==summary.length-1 ? 4 : 12"
    >
      <Summary
        :detail="item.detail"
        :icon="item.icon"
        :data="item.data"
        :classIcon="item.class"
      />
    </v-col> -->
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <Summary
          :detail="summary[0].detail"
          :icon="summary[0].icon"
          :data="summary[0].data"
          :classIcon="summary[0].class"
        />
      </v-col>
      <v-col cols="6">
        <Summary
          :detail="summary[1].detail"
          :icon="summary[1].icon"
          :data="summary[1].data"
          :classIcon="summary[1].class"
        />
      </v-col>
      <v-col cols="6">
        <Summary
          :detail="summary[2].detail"
          :icon="summary[2].icon"
          :data="summary[2].data"
          :classIcon="summary[2].class"
        />
      </v-col>
      <!-- <v-col
      v-for="(item, index) in summary"
      :key="index"
      cols="index==summary.length-1 ? 4 : 12"
    >
      <Summary
        :detail="item.detail"
        :icon="item.icon"
        :data="item.data"
        :classIcon="item.class"
      />
    </v-col> -->
    </v-row>
  </section>
</template>

<script>
import Summary from "~/components/Overview/Single/Summary";

import { mapState } from "vuex";

export default {
  components: {
    Summary
  },

  props: ["summary"]
};
</script>

<style></style>
