<template>
  <section>
    <!-- <h1>Control page</h1> -->
    <PageTitle title="CONTROL" />
    <PumpStatus />
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import PumpStatus from "~/components/Control/PumpStatus.vue";
export default {
  components: {
    PageTitle,
    PumpStatus
  }
};
</script>

<style></style>
