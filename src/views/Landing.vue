<template lang="pug">
  main
    nav-bar
    .container
      letters-list(v-if="status === 200" :letters="data")
      .empty(v-else)  {{ data }}

</template>

<script>
import navBar from '../components/navBar.vue';
import lettersList from '../components/lettersList.vue';

export default {
  data() {
    return {
      data: [],
      status: '',
    };
  },
  components: {
    navBar,
    lettersList,
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

</style>
