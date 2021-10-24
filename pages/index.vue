<template>
  <section>
    <PageTitle title="OVERVIEW" />
    <CardSummary
      class="mb-4"
      :summary="
        activeUser == 0
          ? summaryIpah
          : activeUser == 1
          ? summaryTkpmIpah
          : activeUser == 2
          ? summaryTkpmPagoh
          : summaryKongPo
      "
    />
    <CardOverviewData class="mb-8" />
    <v-row>
      <v-col cols="12">
        <Table duration="Updated just now" />
      </v-col>
      <!-- <v-col cols="6">
        <CardServer />
      </v-col> -->
    </v-row>
    <v-row>
      <v-col>
        <CardWeather />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import CardSummary from "~/components/Overview/CardSummary";
import CardOverviewData from "~/components/Overview/CardOverviewData";
import Table from "~/components/Overview/Table";
import CardServer from "~/components/Overview/CardServer";
import CardWeather from "~/components/Overview/CardWeather3";

import { mapState } from "vuex";

export default {
  middleware: ["auth", "isUser", "isTopic"],
  layout: "default",
  components: {
    PageTitle,
    CardSummary,
    CardOverviewData,
    Table,
    CardServer,
    CardWeather
  },
  computed: {
    ...mapState({
      activeUser: state => state.activeUser,
      summaryIpah: state => state.summaryIpah,
      summaryTkpmIpah: state => state.summaryTkpmIpah,
      summaryTkpmPagoh: state => state.summaryTkpmPagoh,
      summaryKongPo: state => state.summaryKongPo
    })
  }
};
</script>

<style scoped></style>
