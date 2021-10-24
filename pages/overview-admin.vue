<template>
  <section>
    <PageTitle title="ADMIN" />
    <CardSummaryAdmin class="mb-4" />
    <CardOverviewDataAdmin class="mb-8" />
    <v-row>
      <v-col>
        <CardWeather />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import CardSummaryAdmin from "~/components/Admin/Overview/CardSummaryAdmin";
import CardOverviewDataAdmin from "~/components/Admin/Overview/CardOverviewDataAdmin";
import CardWeather from "~/components/Overview/CardWeather3";
export default {
  middleware: ["auth", "isAdmin"],
  components: {
    PageTitle,
    CardSummaryAdmin,
    CardOverviewDataAdmin,
    CardWeather
  }
};
</script>

<style></style>
