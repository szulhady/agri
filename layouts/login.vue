<template>
  <section>
    <v-main class="section2">
      <!-- <v-container> -->
      <nuxt />
      <!-- </v-container> -->
    </v-main>
  </section>
</template>

<script>
export default {
  mounted: function() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = "hidden";
  }
};
</script>

<style>
/* html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
} */
.section2 {
  min-height: 100vh;
  min-width: 100vw;
  /* background: grey; */
  background-image: url("/52-Converted-01.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-size: 300px; */
  overflow: hidden;
}
</style>
