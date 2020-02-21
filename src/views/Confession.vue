<template lang="pug">
    letter-list(v-if="status === 200" :letters="data")
    .container(v-else) {{ data }}
</template>

<script>
import letterList from '../components/lettersList.vue';

export default {
  data() {
    return {
      data: [],
      status: '',
    };
  },
  components: {
    letterList,
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
