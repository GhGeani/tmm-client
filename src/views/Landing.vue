<template lang="pug">
  main.conainer.h-100#landing
</template>

<script>
import lettersList from '../components/lettersList.vue';

export default {
  components: {
    lettersList,
  },
};
</script>

<style lang="stylus" scoped>
// DISPLAY APP ALWAYS FULL SCREEN
#landing
  position fixed
  width  100%
  height 100%
  left  0
  top 0
  z-index 10
  background-image radial-gradient(
    circle,
    alpha(black, 0),
    alpha(black, .9),
    alpha(black, 1))
</style>
