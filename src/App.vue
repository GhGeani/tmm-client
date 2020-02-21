<template lang="pug">
  #app
    router-view
</template>

<script>
import navBar from './components/navBar.vue';

export default {
  name: 'app',
  components: {
    navBar,
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

.bg-oxford
  background-color $oxford-blue !important
.bg-rhythm
  background-color $rhythm !important
.bg-silver
  background-color $silver-pink !important
.bg-english
  background-color $english-lavender !important
.bg-vanila
  background-color $dark-vanila !important

.text-vanila
  text-color $dark-vanila !important
.text-silver
  text-color $silver-pink !important

// TYPOGRAPHY
.quote
  font-family 'Indie Flower', cursive
  font-size 1.1rem
  color $dark-vanila
  font-style italic

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
    alpha(black, 0.4),
    alpha(black, 0.9),
    alpha(black, 1))
.tmm-btn
  transition all .2s ease-in-out
  display block
  padding 0.5rem
  color $dark-vanila
  text-align center
  &:hover
    transition 0.2s
    transform scale(1.05)
    color $dark-vanila
  &:active
    transition 0.2s
    transform scale(.95)

</style>
