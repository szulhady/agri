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
  font-size: 2.2rem !important;
}
.v-card__subtitle {
  padding-bottom: 0;
}
hr {
  margin: 0 20px;
}
</style>
