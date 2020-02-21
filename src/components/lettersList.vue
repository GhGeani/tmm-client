<template lang="pug">
main.container-fluid.bg-dark
  .carousel.vh-100#carousel(data-ride="carousel" data-interval="false")
    ol.carousel-indicators(v-for="(lets, index) in letters")
      li(:class="{active: index===0}")
    a.carousel-control-prev#prev(
      href="#carousel" role="button" data-slide="prev")
    .carousel-inner.overflow-auto.vh-100#letter(role="listbox")
      .container
        letter.carousel-item(
        v-for="(lets, index) in letters"
        :class="{active: index===0}"
        :description="lets.description"
        :author="lets.author"
        :date="lets.date"
        :id="lets.id"
        :key="lets.id")
    a.carousel-control-next#next(
      href="#carousel" role="button" data-slide="next")
</template>

<script>
import letter from './letter.vue';

export default {
  props: {
    letters: Array,
  },
  components: {
    letter,
  },
};
</script>

<style lang="stylus" scoped>
#prev:hover
  background-color red
</style>
