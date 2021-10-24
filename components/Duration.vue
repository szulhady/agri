<template>
  <div class="duration">
    <v-icon class="mdi mdi-refresh icon-detail" size="20" color="grey">
    </v-icon>
    <v-card-subtitle class="detail">
      {{ duration }}
    </v-card-subtitle>
  </div>
</template>

<script>
export default {
  props: ["duration"]
};
</script>

<style scoped>
.duration {
  display: flex;
  margin-left: 20px;
}
.detail {
  padding: 12px;
}

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .detail {
    font-size: 0.8rem;
  }
}
/* MOTO G4/ Galaxy S5/ Iphone 5/SE */
@media (max-width: 360px) {
  .detail {
    font-size: 0.75rem;
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .detail {
    font-size: 0.7rem;
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .detail {
    font-size: 0.65rem;
  }
}
</style>
