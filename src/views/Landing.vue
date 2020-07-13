<template lang="pug">
  main.conainer.h-100#landing
    cloud#cloud-one
    cloud#cloud-two
    cloud#cloud-tree
    cloud#cloud-four
</template>

<script>
import cloud from '../components/cloud.vue';

export default {
  components: {
    cloud,
  },
};
</script>

<style lang="stylus" scoped>
#landing
  position fixed
  width  100%
  height 100%
  left  0
  top 0
  z-index 10
  background-image radial-gradient(
    circle,
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(209, 198, 173, 1), 1),
    alpha(rgba(11, 29, 81, 1), .8),
    alpha(rgba(11, 29, 81, 1), .82),
    alpha(rgba(11, 29, 81, 1), .85),
    alpha(rgba(11, 29, 81, 1), .87),
    alpha(rgba(11, 29, 81, 1), .89),
    alpha(rgba(11, 24, 81, 1), .9),
    alpha(rgba(11, 24, 81, 1), .93),
    alpha(rgba(11, 15, 81, 1), .94),
    alpha(rgba(11, 15, 81, 1), .95),
    alpha(rgba(11, 7, 81, 1), .96),
    alpha(rgba(11, 7, 81, 1), .97),
    alpha(rgba(11, 0, 81, 1), .98),
    alpha(rgba(11, 0, 81, 1), .99),
    alpha(rgba(11, 0, 50, 1), 1))

@keyframes move
  0%
    margin-left -100rem
  100%
    margin-left 100%
#cloud-one
  bottom 10rem
  left -2rem
  animation move 15s linear infinite
  opacity .3
#cloud-two
  top 10rem
  left -20rem
  animation move 20s linear infinite
  opacity .4
#cloud-tree
  top 30rem
  left 30rem
  // animation move 15s linear infinite
  opacity .2
#cloud-four
  top -5rem
  left 30rem
  // animation move 10s linear infinite
  opacity .4
</style>
