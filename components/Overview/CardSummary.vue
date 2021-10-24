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

import { mapState } from "vuex";

export default {
  components: {
    Summary
  },
  computed: {
    ...mapState({
      // summary: state => state.summary
    })
  },
  props: ["summary"]
};
</script>

<style></style>
