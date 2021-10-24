<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class="color no-padding">SUMMARY</v-card-title>
      <v-data-table :headers="headers" :items="status" :items-per-page="5">
        <!-- <template v-slot:top="{ pagination, options, updateOptions }">
          <v-data-footer
            :pagination="pagination"
            :options="options"
            @update:options="updateOptions"
            items-per-page-text="$vuetify.dataTable.itemsPerPageText"
          /> </template
      > -->
      </v-data-table>
      <!-- hide-default-footer -->
      <!-- <hr class="hr" /> -->
      <!-- <Duration duration="Updated just now" /> -->
      <!-- <v-row>
        <v-col class="flex-card">
          <v-icon class="mdi mdi-refresh" size="20" color="grey"></v-icon>
          <v-card-subtitle class="card-subtitle">{{
            duration
          }}</v-card-subtitle>
        </v-col>
      </v-row> -->
    </v-card>
  </div>
</template>

<script>
import Duration from "~/components/Duration";
import { mapState } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Block",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Remarks", value: "remarks" }
      ],
      status2: [
        {
          name: "Soil NPK",

          remarks: ""
        },
        {
          name: "Soil pH",

          remarks: ``
        },
        {
          name: "Soil EC",

          remarks: ""
        },
        {
          name: "Soil Moisture",
          remarks: ""
        },
        {
          name: "Soil Temperature",

          remarks: ""
        },
        {
          name: "Leaf Temperature",

          remarks: ""
        },
        {
          name: "Humidity",

          remarks: ""
        },
        {
          name: "Water NPK",

          remarks: ""
        },
        {
          name: "Water pH",

          remarks: ""
        },
        {
          name: "Water EC",

          remarks: ""
        }
      ]
    };
  },
  computed: {
    ...mapState({
      status: state => state.stations[state.activeUser].status
      // duration: state => state.duration
    })
  }
};
</script>

<style scoped>
.card-border {
  border-radius: 8px;
}

.card-color {
  /* background: rgb(240,244,230); */
  border-radius: 8px !important;
  /* background: rgb(238, 248, 248) !important; */
}

.v-data-table {
  background: rgb(240, 244, 230);
}

.hr {
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.card-subtitle {
  padding-left: 20px;
}

.flex-card {
  display: flex;
  padding: 0;
  padding-top: 12px;
  padding-left: 10px;
}

.v-card__subtitle {
  padding: 12px;
}

.no-padding {
  padding-bottom: 5px;
}
</style>
