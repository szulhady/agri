<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class="color no-padding">{{ description }}</v-card-title>
      <v-data-table
        :single-select="singleSelect"
        :headers="headers"
        :items="allDate"
        :items-per-page="5"
        item-key="date"
        show-select
        class="icon2"
        v-model="selected"
        :footer-props="{ itemsPerPageText: '' }"
      >
        <template v-if="selected.length > 0" v-slot:footer>
          <v-btn @click="handleClick" class="error logout-btn mt-2 ml-5"
            >Delete</v-btn
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="box" persistent max-width="290">
      <v-card>
        <v-card-title> Action </v-card-title>
        <hr class="hr" />
        <v-card-subtitle
          >Are you sure you want to delete the schedule set on selected
          date?</v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn-div">
            <v-btn @click="deleteSchedule" class="error logout-btn"
              >Delete</v-btn
            >
            <v-btn @click="cancel" class="success logout-btn">Cancel</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v-scroll-y-transition>
      <div class="layer2" v-if="box" id="layer"></div>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
      <v-card class="logout elevation-12" v-if="box" id="logout">
        <v-card-title>
          Action
        </v-card-title>
        <hr class="hr" />
        <v-card-subtitle>
          Are you sure you want to delete the schedule set on selected date?
        </v-card-subtitle>
        <div class="btn-div">
          <v-btn @click="deleteSchedule" class="error logout-btn">Delete</v-btn>
          <v-btn @click="cancel" class="success logout-btn">Cancel</v-btn>
        </div>
      </v-card>
    </v-scroll-y-transition> -->

    <!-- <v-scroll-y-transition>
      <div class="layer2" v-if="box" id="layer"></div>
    </v-scroll-y-transition> -->
    <!-- /v-scroll-y-transition> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      box: false,
      singleSelect: false,
      selected: [],

      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date"
        },
        { text: "Remarks", value: "remarks" }
        // { text: "Block", value: "block" },
        // { text: "Duration (min)", value: "duration" }
      ]
    };
  },
  computed: {
    ...mapState({
      status: state => state.stations[state.activeUser].status,
      activeUser: state => state.activeUser
      // duration: state => state.duration
    })
  },
  props: ["allDate", "description"],
  mounted() {
    // console.log(this.allDate);
  },
  methods: {
    ...mapMutations({
      updateDateState: "updateDateState"
    }),
    handleClick(row) {
      console.log(row.date);
      console.log(this.selected);
      this.date = row.date;
      // this.userID = row.userID;
      // this.username = row.username;
      // (this.topics = row.topics), (this.deviceID = row.deviceID);
      this.box = true;
      // console.log(this.userID, this.topics)
    },
    cancel() {
      this.box = false;
      this.editBox = false;
    },
    deleteSchedule() {
      let api;
      if (this.activeUser == 0) {
        // api = "http://139.59.109.48/api/schedule/ipah1";
        // api = "http://127.0.0.1:5000/api/schedule/ipah1";
        api = "http://159.223.55.150/api/schedule/ipah1";
      } else if (this.activeUser == 1) {
        // api = "http://139.59.109.48/api/schedule/ipah2";
        // api = "http://127.0.0.1:5000/api/schedule/ipah2";
        api = "http://159.223.55.150/api/schedule/ipah2";
      } else if (this.activeUser == 2) {
        // api = "http://127.0.0.1:5000/api/schedule/tkpmPagoh";
        // api = "http://139.59.109.48/api/schedule/tkpmPagoh";
        // api = "http://127.0.0.1:5000/api/schedule/tkpmPagoh";
        api = "http://159.223.55.150/api/schedule/tkpmPagoh";
      } else {
        // api = "http://139.59.109.48/api/schedule/kongPo";
        // api = "http://127.0.0.1:5000/api/schedule/kongPo";
        api = "http://159.223.55.150/api/schedule/kongPo";
      }
      this.$axios
        .$delete(api, {
          data: {
            date: this.selected
          }
        })
        .then(response => {
          // this.getUserDataWithTopic(response)
          // this.getAllUserWithTopic()
          this.box = false;
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        });
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
      // console.log("here");
      // this.box = false;
    }
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

.layer2 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.6;
  z-index: 999;
  top: 0;
  left: 0;
}
</style>
