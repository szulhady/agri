<template>
  <v-card class="elevation-15 rounded-lg">
    <div class="summary-detail">
      <v-icon
        :class="icon"
        :color="classIcon"
        class="icon-detail d-none d-md-flex"
      >
      </v-icon>
      <div class="detail">
        <v-card-subtitle class="text">
          {{ detail }}
        </v-card-subtitle>
        <v-card-subtitle class="display-2">
          {{ data }}
        </v-card-subtitle>
      </div>
    </div>
    <hr class="d-none d-md-flex" />
    <Duration duration="Updated just now" />
  </v-card>
</template>

<script>
import Duration from "~/components/Duration";
export default {
  props: ["detail", "icon", "data", "classIcon"],
  components: {
    Duration
  }
};
</script>

<style scoped>
.summary-detail {
  display: flex;
}
.icon-detail {
  flex: 2;
}
.detail {
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.v-icon {
  font-size: 70px;
}

.detail .text {
  font-size: 1.3rem;
}
.display-2 {
  font-size: 2rem !important;
}
.v-card__subtitle {
  padding-bottom: 4px;
  padding-top: 10px;
}
hr {
  margin: 0 20px;
}
@media only screen and (max-width: 600px) {
  .display-2 {
    /* font-size: 1.5rem !important; */
    line-height: 1.125rem;
  }
  .duration {
    height: 40px;
  }
}

@media only screen and (max-width: 750px) {
  .detail .text {
    font-size: 1.2rem;
  }
  .display-2 {
    font-size: 1.3rem !important;
    line-height: 1.125rem;
  }

  .detail {
    height: 70px;
  }

  .duration {
    height: 60px;
  }
}

@media only screen and (max-width: 1050px) {
  .display-2 {
    font-size: 1.3rem !important;
    line-height: 2.125rem;
  }
}
</style>
