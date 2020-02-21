<template lang="pug">
article
  span.quote.mx-5 „{{ description }}”
</template>

<script>
export default {
  props: {
    author: String,
    description: String,
    date: String,
    id: String,
  },
};
</script>
