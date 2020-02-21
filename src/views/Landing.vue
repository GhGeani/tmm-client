<template lang="pug">
  main.conainer.h-100#landing
    .row.h-100.align-items-center.justify-content-center
      cloud#c1
      cloud#c2
      .col-8.col-sm-4.col-lg-3
        .card.tmm-card.bg-dark
          .card-header
            img.card-img-top(src="../assets/logo.svg" height="80")
          .card-body
            router-link.tmm-btn.text-decoration-none.bg-dark(to="/c") See Confesions
          .card-footer

</template>

<script>
import cloud from '../components/cloud.vue';
import lettersList from '../components/lettersList.vue';

export default {
  components: {
    lettersList,
    cloud,
  },
};
</script>

<style lang="stylus" scoped>
.tmm-card
  opacity .9
@keyframes move
  0%
    margin-left -100rem
  100%
    margin-left 100%
#c1
  top 5%
  left 5%
  animation move 15s linear infinite
  opacity .3
  transform scale(2)
#c2
  left 1%
  opacity .3
  transform scale(2)

</style>
