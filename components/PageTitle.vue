<template>
  <h2 class="mt-3 mb-5 title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.title {
  color: rgb(78, 78, 78);
  font-size: 1.5rem !important;
  font-weight: 500;
  letter-spacing: 2px !important;
}

/* Pixel 2/ Iphone 6/7/8 Plus */
@media (max-width: 500px) {
  .title {
    font-size: 17px !important;
    margin-top: 5px !important;
    margin-bottom: 10px !important;
  }
}
/* MOTO G4/ Galaxy S5/ Iphone 5/SE */
@media (max-width: 360px) {
  .title {
    font-size: 15px !important;
    margin-top: 5px !important;
    margin-bottom: 10px !important;
  }
}

/* Iphone 5/SE */
@media (max-width: 320px) {
  .title {
    font-size: 13px !important;
    margin-top: 5px !important;
    margin-bottom: 10px !important;
  }
}

/* Galaxy Fold */
@media (max-width: 300px) {
  .title {
    font-size: 11px !important;
    margin-top: 0px !important;
    margin-bottom: 5px !important;
  }
}
</style>
