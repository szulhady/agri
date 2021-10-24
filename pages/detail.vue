<template>
  <section>
    <PageTitle title="USER" />
    <Users />
    <OperationInformation class="mt-6" />
    <YieldCropInformation class="mt-6" />
    <Report class="mt-6" />
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import Users from "~/components/detail/users";
import OperationInformation from "~/components/detail/operationInformation";
import YieldCropInformation from "~/components/detail/yieldCropInformation";
import Report from "~/components/detail/report";

export default {
  components: {
    PageTitle,
    Users,
    OperationInformation,
    YieldCropInformation,
    Report
  }
};
</script>

<style></style>
