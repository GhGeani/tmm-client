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

// COLORS
$dark-vanila = rgba(209, 198, 173, 1)
$english-lavender = rgba(161, 134, 158, 1)
$rhythm = rgba(121, 117, 150, 1)
$oxford-blue = rgba(11, 29, 81, 1)

.bg-dark-blue
  background-color $oxford-blue !important
.bg-faded-purple
  background-color $rhythm !important
.bg-purple
  background-color $english-lavender !important
.bg-light-brown
  background-color $dark-vanila !important
</style>
