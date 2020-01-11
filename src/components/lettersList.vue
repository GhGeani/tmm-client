<template lang="pug">
main
  .container(v-for="lets in letters" :key="lets.id")
    letter(
    :description="lets.description"
    :author="lets.author"
    :date="lets.date"
    :id="lets.id"
    :key="lets.id")
    p.text-center.display-4.text-muted ___
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
@media (min-width: 576px)
  .card-columns
    column-count 1
@media (min-width: 768px)
  .card-columns
    column-count 2
</style>
