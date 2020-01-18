<template lang="pug">
  #app
    landing
</template>

<script>
import Landing from './views/Landing.vue';

export default {
  name: 'app',
  components: {
    Landing,
  },
};
</script>

<style lang="stylus">
// COLORS
$dark-vanila = rgba(209, 198, 173, 1)
$silver-pink = rgba(187, 173, 160, 1)
$english-lavender = rgba(161, 134, 158, 1)
$rhythm = rgba(121, 117, 150, 1)
$oxford-blue = rgba(11, 29, 81, 1)

// TYPOGRAPHY
.quote
  font-family 'Indie Flower', cursive
  font-size 24px
  color $dark-vanila

</style>
