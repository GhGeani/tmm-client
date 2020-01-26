<template lang="pug">
  main.conainer.h-100
    cloud#cloud-one
    cloud#cloud-two
    cloud#cloud-tree
    cloud#cloud-four
    .row.h-100.align-items-center.justify-content-center
      .col-8.col-sm-4.col-lg-3
        .card.tmm-card.bg-rhythm
          .card-header
            img.card-img-top(src="../assets/logo.svg" height="80")
          .card-body
            router-link.tmm-btn.text-decoration-none.bg-oxford(to="/c") See Confesions
          .card-footer

</template>

<script>
import cloud from '../components/cloud.vue';
import lettersList from '../components/lettersList.vue';

export default {
  data() {
    return {
      data: [],
      status: '',
    };
  },
  components: {
    lettersList,
    cloud,
  },
  mounted() {
    this.handleResponse();
  },
  methods: {
    async handleResponse() {
      try {
        const response = await this.$http(`${this.$url}/articles`);
        this.data = response.data;
        this.status = response.status;
      } catch (error) {
        this.data = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.tmm-card
  opacity .7
@keyframes move
  0%
    margin-left -100rem
  100%
    margin-left 100%
#cloud-one
  bottom 10rem
  left -2rem
  animation move 15s linear infinite
  transform scale(1.5)
  opacity .4
#cloud-two
  top 10rem
  left -20rem
  animation move 25s linear infinite
  transform scale(2)
  opacity .3
#cloud-tree
  top 30rem
  left 30rem
  animation move 20s linear infinite
  transform scale(2)
  opacity .3
#cloud-four
  top -5rem
  left 30rem
  animation move 40s linear infinite
  transform scale(2)
  opacity .4
</style>
