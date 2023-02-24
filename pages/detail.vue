<template>
  <section>
    <PageTitle title="DETAILS" />
    <v-btn @click="change(1)"> Form </v-btn>
    <v-btn @click="change(2)">Detail </v-btn>
    <Users v-if="page == 1" />
    <!-- <OperationInformation class="mt-6" />
    <YieldCropInformation class="mt-6" />
    <Report class="mt-6" /> -->
    <Layout v-if="page == 2" :detail="detailActive" />
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import Users from "~/components/detail/users";
import Layout from "~/components/detail/layoutFull";
import OperationInformation from "~/components/detail/operationInformation";
import YieldCropInformation from "~/components/detail/yieldCropInformation";
import Report from "~/components/detail/report";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    PageTitle,
    Users,
    OperationInformation,
    YieldCropInformation,
    Report,
    Layout
  },

  methods: {
    ...mapMutations({
      setDetailActive: "setDetailActive",
      setDetailIpah1: "setDetailIpah1",
      setDetailIpah2: "setDetailIpah2",
      setDetailTkpmPagoh: "setDetailTkpmPagoh"
    }),
    change: function(val) {
      this.page = val;
    },
    getDetails: function() {
      let api;
      if (this.user == 0) {
        // api = "http://127.0.0.1:5000/api/report/ipah1";
        // api = "http://139.59.109.48/api/report/ipah1";
        api = "http://159.223.55.150/api/report/ipah1";
      } else if (this.user == 1) {
        // api = "http://127.0.0.1:5000/api/report/ipah2";
        // api = "http://139.59.109.48/api/report/ipah2";
        api = "http://159.223.55.150/api/report/ipah2";
      } else if (this.user == 2) {
        // api = "http://127.0.0.1:5000/api/report/tkpmPagoh";
        // api = "http://139.59.109.48/api/report/tkpmPagoh";
        api = "http://159.223.55.150/api/report/tkpmPagoh";
      }
      this.$axios
        .$get(api)
        // .$get("http://139.59.109.48/api/schedule/nutrient/ipah1")
        .then(response => {
          // response.forEach(i => {
          //   this.isDateBeforeTodayNutrient(i);
          // });
          // this.getScheduleIpah1();
          // console.log(response);
          if (this.user == 0) {
            this.setDetailActive(response);
            this.setDetailIpah1(response);
          } else if (this.user == 1) {
            this.setDetailActive(response);
            this.setDetailIpah2(response);
          } else if (this.user == 2) {
            this.setDetailActive(response);
            this.setDetailTkpmPagoh(response);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      page: 1
    };
  },
  async mounted() {
    this.getDetails();
    // console.log(this.detailIpah1);
  },
  computed: {
    ...mapState({
      user: state => state.activeUser,
      detailActive: state => state.detailActive,
      detailIpah1: state => state.detailIpah1,
      detailIpah2: state => state.detailIpah2,
      detailTkpmPagoh: state => state.detailTkpmPagoh
    })
  }
};
</script>

<style></style>
