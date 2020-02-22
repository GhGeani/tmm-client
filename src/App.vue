<template lang="pug">
  #app
    nav-bar
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
.tmm-btn
  transition all .2s ease-in-out
  display block
  padding 0.5rem
  text-align center
  &:hover
    transition 0.2s
    transform scale(1.05)
    color $dark-vanila
  &:active
    transition 0.2s
    transform scale(.95)
</style>
