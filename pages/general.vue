<template>
  <section>
    <PageTitle title="GENERAL" />
    <v-row>
      <v-col cols="6" class="col-sm-5 col-md-5 col-lg-3">
        <UserInfo />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import UserInfo from "~/components/General/UserInfo";
export default {
  middleware: ["auth", "isUser", "isTopic"],
  components: {
    PageTitle,
    UserInfo
  }
};
</script>

<style></style>
