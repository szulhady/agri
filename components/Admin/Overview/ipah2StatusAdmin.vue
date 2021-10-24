<template>
  <section>
    <v-card class="elevation-10">
      <div>
        <div class="overlay">
          <v-img src="ipah2.svg"> </v-img>
          <v-img src="ipah2sv1.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv2.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv3.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv4.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv5.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv6.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv7.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv8.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv9.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv10.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv11.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv12.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv13.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2sv14.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2sv15.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2dpa.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2dpaFrame.svg" class="overlay2"> </v-img>
          <v-img src="ipah2dpb.svg" class="filter-green overlay2"> </v-img>
          <v-img src="ipah2dpbFrame.svg" class="overlay2"> </v-img>
          <v-img src="ipah2wp.svg" class="filter-red overlay2"> </v-img>
          <v-img src="ipah2wpFrame.svg" class="overlay2"> </v-img>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
import PageTitle from "~/components/PageTitle";

export default {
  components: {
    PageTitle
  }
};
</script>

<style scoped>
.overlay {
  position: relative;
  /* display: inline-block; */
  /* transition: transform 150ms ease-in-out; */
}
.overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  /* display: inline-block; */
  /* transition: transform 150ms ease-in-out; */
}

.filter-green {
  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(90%) contrast(119%);
  -webkit-animation: blinkGreen 1s infinite;
  -moz-animation: blinkGreen 1s infinite;
  -ms-animation: blinkGreen 1s infinite;
  -o-animation: blinkGreen 1s infinite;
  animation: blinkGreen 1s infinite;
}

.filter-red {
  filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
    brightness(94%) contrast(117%);
  -webkit-animation: blinkRed 1s infinite;
  -moz-animation: blinkRed 1s infinite;
  -ms-animation: blinkRed 1s infinite;
  -o-animation: blinkRed 1s infinite;
  animation: blinkRed 1s infinite;
}

/* BLINK RED */
@-webkit-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    /* background-color: #f00; */
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-moz-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-ms-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@-o-keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}
@keyframes blinkRed {
  from {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
  50% {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(50%) contrast(117%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
      brightness(94%) contrast(117%);
  }
}

/* BLINK GREEN */
@-webkit-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    /* background-color: #f00; */
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-moz-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-ms-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@-o-keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
@keyframes blinkGreen {
  from {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
  50% {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(70%) contrast(119%);
    /* box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
      rgba(255, 0, 0, 0.5) 0 2px 0; */
  }
  to {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
      brightness(90%) contrast(119%);
  }
}
</style>
