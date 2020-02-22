<template lang="pug">
  main.conainer.h-100#landing
    .row.h-100.align-items-center.justify-content-center
      .col-8.col-sm-4.col-lg-3
        .card.tmm-card.bg-dark
          .card-header
            img.card-img-top(src="../assets/logo.svg" height="80")
          .card-body
            router-link.tmm-btn.text-decoration-none.bg-dark(to="/c") See Confesions
          .card-footer

</template>

<script>
import lettersList from '../components/lettersList.vue';

export default {
  components: {
    lettersList,
  },
};
</script>
